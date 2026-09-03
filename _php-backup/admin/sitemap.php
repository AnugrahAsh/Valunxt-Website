<?php
/**
 * Admin — Sitemap Settings.
 *
 * Shows the state of /sitemap.xml (last generated, URL count, file size),
 * lets an administrator regenerate, download or view it, and holds the site
 * URL that canonical tags and sitemap entries are built from.
 */
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/includes/seo-lib.php';
require_login();

$ACTIVE  = 'sitemap';
$u       = current_user();
$favicon = SITE_BASE . '/assets/content/uploads/2025/03/fav-icon-150x150.png';

if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(16));
}
$CSRF = $_SESSION['csrf'];

// ---- Operations ------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $op = (string) ($_POST['op'] ?? '');

    if (!hash_equals($CSRF, (string) ($_POST['csrf'] ?? ''))) {
        $_SESSION['flash_err'] = 'Your session expired. Please try again.';
    } else {
        try {
            if ($op === 'generate') {
                $res = seo_regenerate();
                if ($res['ok']) {
                    $_SESSION['flash'] = 'Sitemap regenerated with ' . $res['count'] . ' URL' . ($res['count'] === 1 ? '' : 's') . '.';
                } else {
                    $_SESSION['flash_err'] = implode(' ', $res['errors']);
                }
            } elseif ($op === 'save_settings') {
                $url = trim((string) ($_POST['site_url'] ?? ''));
                $url = rtrim($url, '/');
                if ($url !== '' && !filter_var($url, FILTER_VALIDATE_URL)) {
                    $_SESSION['flash_err'] = 'Enter a full site URL including https:// — for example https://valunxtcapital.com';
                } else {
                    seo_setting_set('site_url', $url);
                    $res = seo_regenerate();
                    $_SESSION['flash'] = $url === ''
                        ? 'Site URL cleared — URLs are detected from the current request. Sitemap regenerated.'
                        : 'Site URL saved as ' . $url . '. Sitemap regenerated with ' . $res['count'] . ' URLs.';
                }
            }
        } catch (Throwable $e) {
            $_SESSION['flash_err'] = 'That action could not be completed: ' . $e->getMessage();
        }
    }
    header('Location: ' . admin_url('sitemap.php'));
    exit;
}

$flash = '';
$flashErr = '';
if (!empty($_SESSION['flash']))     { $flash = $_SESSION['flash']; unset($_SESSION['flash']); }
if (!empty($_SESSION['flash_err'])) { $flashErr = $_SESSION['flash_err']; unset($_SESSION['flash_err']); }

// ---- State -----------------------------------------------------------------
$sitemapFile  = seo_sitemap_path();
$exists       = is_file($sitemapFile);
$generatedAt  = seo_setting('sitemap_generated_at', '');
$urlCount     = (int) seo_setting('sitemap_url_count', '0');
$fileSize     = $exists ? filesize($sitemapFile) : 0;
$publicUrl    = seo_site_url() . '/sitemap.xml';
$rootWritable = is_writable(seo_root());
$configured   = trim((string) seo_setting('site_url', ''));

$stats = ['total' => 0, 'published' => 0, 'draft' => 0, 'sitemap' => 0, 'noindex' => 0];
$rows  = [];
try {
    $stats = seo_stats();
    $rows  = seo_sitemap_rows();
} catch (Throwable $e) { /* shown as zeroes */ }

// First 40 lines of the file for the inline preview.
$preview = '';
if ($exists) {
    $lines = @file($sitemapFile, FILE_IGNORE_NEW_LINES);
    if ($lines) {
        $preview = implode("\n", array_slice($lines, 0, 40));
        if (count($lines) > 40) $preview .= "\n… " . (count($lines) - 40) . ' more lines';
    }
}

/** Human-readable byte size. */
function fsize($bytes) {
    if ($bytes < 1024) return $bytes . ' B';
    if ($bytes < 1048576) return round($bytes / 1024, 1) . ' KB';
    return round($bytes / 1048576, 2) . ' MB';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Sitemap Settings — VALUNXT Capital Admin</title>
    <link rel="icon" href="<?= h($favicon) ?>" sizes="32x32">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Forum&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= h(admin_asset('assets/admin.css')) ?>">
</head>
<body>
<div class="admin-shell">
    <?php require __DIR__ . '/includes/sidebar.php'; ?>

    <div class="main">
        <?php require __DIR__ . '/includes/topbar.php'; ?>

        <main class="content">
            <div class="page-head">
                <div class="crumbs">Home <span class="sep">/</span> Sitemap</div>
                <h1>Sitemap Settings</h1>
                <p>The XML sitemap regenerates automatically whenever a page is created, published, updated or deleted. You can also rebuild it here.</p>
            </div>

            <?php if ($flash): ?>
                <div class="flash" role="status">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span><?= h($flash) ?></span>
                </div>
            <?php endif; ?>
            <?php if ($flashErr): ?>
                <div class="flash err" role="alert">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span><?= h($flashErr) ?></span>
                </div>
            <?php endif; ?>
            <?php if (!$rootWritable): ?>
                <div class="flash err" role="alert">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span>The website root is not writable, so sitemap.xml cannot be saved. Grant write permission to <?= h(seo_root()) ?>.</span>
                </div>
            <?php endif; ?>

            <section class="panel">
                <div class="panel-head">
                    <h3>Sitemap Status</h3>
                    <span class="pill <?= $exists ? 'ok' : 'warnp' ?>"><?= $exists ? 'Generated' : 'Not generated yet' ?></span>
                </div>
                <div class="panel-body">
                    <div class="kv">
                        <div class="kv-item">
                            <div class="k">Total URLs Included</div>
                            <div class="v"><?= (int) ($exists ? $urlCount : 0) ?></div>
                        </div>
                        <div class="kv-item">
                            <div class="k">Last Generated</div>
                            <div class="v sm"><?= $generatedAt ? h(date('d M Y, H:i', strtotime($generatedAt))) : 'Never' ?></div>
                        </div>
                        <div class="kv-item">
                            <div class="k">File Size</div>
                            <div class="v sm"><?= $exists ? h(fsize($fileSize)) : '—' ?></div>
                        </div>
                        <div class="kv-item">
                            <div class="k">Public Address</div>
                            <div class="v sm"><a class="link" href="<?= h(site_url('sitemap.xml')) ?>" target="_blank" rel="noopener">/sitemap.xml</a></div>
                        </div>
                    </div>

                    <div class="toolbar" style="margin-top:20px">
                        <form method="post" action="<?= h(admin_url('sitemap.php')) ?>">
                            <input type="hidden" name="op" value="generate">
                            <input type="hidden" name="csrf" value="<?= h($CSRF) ?>">
                            <button type="submit" class="btn gold">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                                Generate Sitemap
                            </button>
                        </form>
                        <a class="btn<?= $exists ? '' : ' is-disabled' ?>" href="<?= h(admin_url('sitemap-download.php')) ?>">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Download Sitemap
                        </a>
                        <a class="btn<?= $exists ? '' : ' is-disabled' ?>" href="<?= h(site_url('sitemap.xml')) ?>" target="_blank" rel="noopener">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            View Sitemap
                        </a>
                        <span class="spacer"></span>
                        <a class="btn sm" href="<?= h(admin_url('pages.php')) ?>">Manage pages</a>
                    </div>
                </div>
            </section>

            <section class="panel" style="margin-top:20px">
                <div class="panel-head"><h3>Site URL</h3></div>
                <form method="post" action="<?= h(admin_url('sitemap.php')) ?>">
                    <input type="hidden" name="op" value="save_settings">
                    <input type="hidden" name="csrf" value="<?= h($CSRF) ?>">
                    <div class="panel-body">
                        <div class="fld">
                            <label for="site_url">Public website address</label>
                            <input type="text" id="site_url" name="site_url" value="<?= h($configured) ?>"
                                   placeholder="<?= h(seo_detect_site_url()) ?>" maxlength="255">
                            <div class="hint">
                                Used to build sitemap entries and the automatic canonical URLs.
                                Leave blank to use the address the admin panel is opened from
                                (currently <code><?= h(seo_detect_site_url()) ?></code>).
                                Set it explicitly before generating the sitemap you submit to Google Search Console.
                            </div>
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn navy">Save &amp; Regenerate</button>
                        <span class="spacer"></span>
                        <span style="font-size:13px;color:var(--muted)">
                            <?= (int) $stats['published'] ?> published ·
                            <?= (int) $stats['draft'] ?> draft ·
                            <?= (int) $stats['noindex'] ?> no-index
                        </span>
                    </div>
                </form>
            </section>

            <section class="panel" style="margin-top:20px">
                <div class="panel-head">
                    <h3>URLs In The Sitemap <span class="count-chip"><?= count($rows) ?></span></h3>
                    <a class="link" href="<?= h(admin_url('pages.php')) ?>">Edit page SEO</a>
                </div>
                <div class="panel-body" style="padding:0">
                    <?php if (!$rows): ?>
                        <div class="empty-state">
                            <h4>No URLs yet</h4>
                            <p>Publish at least one page and include it in the sitemap.</p>
                        </div>
                    <?php else: ?>
                        <div class="table-wrap">
                            <table class="data">
                                <thead>
                                    <tr><th>URL</th><th>Priority</th><th>Change Frequency</th><th>Last Modified</th></tr>
                                </thead>
                                <tbody>
                                <?php foreach ($rows as $r): $eff = seo_effective($r); ?>
                                    <tr>
                                        <td class="slug-cell"><a class="link" href="<?= h($eff['canonical'] ?: $eff['url']) ?>" target="_blank" rel="noopener"><?= h($eff['canonical'] ?: $eff['url']) ?></a></td>
                                        <td><?= h(number_format((float) $r['priority'], 1)) ?></td>
                                        <td><?= h(ucfirst((string) $r['changefreq'])) ?></td>
                                        <td class="nowrap"><?= h(date('d M Y', strtotime((string) $r['updated_at']) ?: time())) ?></td>
                                    </tr>
                                <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                    <?php endif; ?>
                </div>
            </section>

            <?php if ($preview !== ''): ?>
            <section class="panel" style="margin-top:20px">
                <div class="panel-head"><h3>sitemap.xml Preview</h3></div>
                <div class="panel-body">
                    <pre class="code-box"><?= h($preview) ?></pre>
                </div>
            </section>
            <?php endif; ?>
        </main>
    </div>
</div>

<script src="<?= h(admin_asset('assets/admin.js')) ?>"></script>
</body>
</html>
