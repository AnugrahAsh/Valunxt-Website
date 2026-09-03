<?php
/**
 * Admin — Pages & SEO.
 *
 * Lists every public page under CMS management with its SEO status, and
 * handles the list-level operations: rescan the site for new pages, publish /
 * unpublish, include or exclude from the sitemap, and delete.
 *
 * Every operation that can change what search engines see finishes by calling
 * seo_regenerate(), which rewrites /sitemap.xml and the front-end SEO cache.
 */
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/includes/seo-lib.php';
require_login();

$ACTIVE  = 'pages';
$u       = current_user();
$favicon = SITE_BASE . '/assets/content/uploads/2025/03/fav-icon-150x150.png';

if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(16));
}
$CSRF = $_SESSION['csrf'];

// ---- Listing state (search + pagination) -----------------------------------
const PER_PAGE = 10;

$q       = trim((string) ($_REQUEST['q'] ?? ''));
$pageNo  = max(1, (int) ($_REQUEST['p'] ?? 1));

/** Rebuild the listing URL, keeping the current search and page. */
function list_url(array $overrides = []) {
    global $q, $pageNo;
    $args = array_filter(
        array_merge(['q' => $q, 'p' => $pageNo > 1 ? $pageNo : ''], $overrides),
        function ($v) { return $v !== '' && $v !== null; }
    );
    return admin_url('pages.php' . ($args ? '?' . http_build_query($args) : ''));
}

// ---- Operations (POST → redirect so a refresh doesn't resubmit) ------------
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $op = (string) ($_POST['op'] ?? '');
    $id = (int) ($_POST['id'] ?? 0);

    if (!hash_equals($CSRF, (string) ($_POST['csrf'] ?? ''))) {
        $_SESSION['flash_err'] = 'Your session expired. Please try again.';
    } else {
        try {
            switch ($op) {
                case 'sync':
                    $res = seo_sync_pages();
                    seo_regenerate();
                    $_SESSION['flash'] = $res['added'] > 0
                        ? $res['added'] . ' new page' . ($res['added'] === 1 ? '' : 's') . ' imported from the website. Sitemap regenerated.'
                        : 'No new pages found — the CMS is already in step with the website.';
                    if ($res['missing'] > 0) {
                        $_SESSION['flash_err'] = $res['missing'] . ' page record'
                            . ($res['missing'] === 1 ? ' has' : 's have')
                            . ' no matching file on the website and are flagged below.';
                    }
                    break;

                case 'toggle_status':
                    $page = seo_page($id);
                    if ($page) {
                        $new = $page['status'] === 'published' ? 'draft' : 'published';
                        $stmt = db()->prepare("UPDATE pages SET status = ? WHERE id = ?");
                        $stmt->execute([$new, $id]);
                        seo_regenerate();
                        $_SESSION['flash'] = '“' . $page['title'] . '” is now ' . $new . '. Sitemap regenerated.';
                    }
                    break;

                case 'toggle_sitemap':
                    $page = seo_page($id);
                    if ($page) {
                        $new = ((int) $page['in_sitemap'] === 1) ? 0 : 1;
                        $stmt = db()->prepare("UPDATE pages SET in_sitemap = ? WHERE id = ?");
                        $stmt->execute([$new, $id]);
                        seo_regenerate();
                        $_SESSION['flash'] = '“' . $page['title'] . '” ' . ($new ? 'added to' : 'removed from') . ' the sitemap.';
                    }
                    break;

                case 'delete':
                    $page = seo_page($id);
                    if ($page) {
                        $removedFiles = false;
                        if ((int) $page['is_cms'] === 1 && $page['slug'] !== '') {
                            $removedFiles = seo_delete_page_dir($page['slug']);
                        }
                        $stmt = db()->prepare("DELETE FROM pages WHERE id = ?");
                        $stmt->execute([$id]);
                        seo_regenerate();
                        $_SESSION['flash'] = '“' . $page['title'] . '” deleted'
                            . ($removedFiles ? ' along with its page files' : ' from the CMS')
                            . '. Sitemap regenerated.';
                    }
                    break;
            }
        } catch (Throwable $e) {
            $_SESSION['flash_err'] = 'That action could not be completed: ' . $e->getMessage();
        }
    }
    header('Location: ' . list_url());
    exit;
}

// ---- Flash messages --------------------------------------------------------
$flash = '';
$flashErr = '';
if (!empty($_SESSION['flash']))     { $flash = $_SESSION['flash']; unset($_SESSION['flash']); }
if (!empty($_SESSION['flash_err'])) { $flashErr = $_SESSION['flash_err']; unset($_SESSION['flash_err']); }

// ---- Load ------------------------------------------------------------------
$rows       = [];
$stats      = ['total' => 0, 'published' => 0, 'draft' => 0, 'sitemap' => 0, 'noindex' => 0];
$matched    = 0;
$totalPages = 1;
$loadError  = '';
try {
    $stats      = seo_stats();
    $matched    = seo_pages_count($q);
    $totalPages = max(1, (int) ceil($matched / PER_PAGE));
    if ($pageNo > $totalPages) $pageNo = $totalPages;
    $rows       = seo_pages_slice($q, PER_PAGE, ($pageNo - 1) * PER_PAGE);
} catch (Throwable $e) {
    $loadError = 'Could not load pages. Please ensure MySQL is running in XAMPP.';
}

$firstRow = $matched ? (($pageNo - 1) * PER_PAGE) + 1 : 0;
$lastRow  = min($pageNo * PER_PAGE, $matched);

/**
 * Page numbers to render: always the first and last, plus a window around the
 * current page, with '…' standing in for the gaps.
 */
function pager_numbers($current, $total, $window = 1) {
    $keep = [1, $total];
    for ($i = $current - $window; $i <= $current + $window; $i++) {
        if ($i >= 1 && $i <= $total) $keep[] = $i;
    }
    $keep = array_values(array_unique($keep));
    sort($keep);

    $out = [];
    $prev = 0;
    foreach ($keep as $n) {
        if ($prev && $n > $prev + 1) $out[] = '…';
        $out[] = $n;
        $prev = $n;
    }
    return $out;
}
$generatedAt = seo_setting('sitemap_generated_at', '');

/** Length badge class for a meta title / description against its target range. */
function len_class($len, $min, $max) {
    if ($len === 0)  return '';
    if ($len > $max) return 'over';
    if ($len < $min) return 'warn';
    return 'ok';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Pages &amp; SEO — VALUNXT Capital Admin</title>
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
                <div class="crumbs">Home <span class="sep">/</span> Pages &amp; SEO</div>
                <h1>Pages &amp; SEO</h1>
                <p>Manage the title, slug, meta tags, canonical URL and robots directive for every public page.</p>
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

            <!-- KPI cards -->
            <section class="stat-grid">
                <div class="stat-card">
                    <div class="ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
                    <div class="label">Total Pages</div>
                    <div class="value"><?= (int) $stats['total'] ?></div>
                </div>
                <div class="stat-card">
                    <div class="ico green"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                    <div class="label">Published</div>
                    <div class="value"><?= (int) $stats['published'] ?></div>
                </div>
                <div class="stat-card">
                    <div class="ico blue"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
                    <div class="label">In Sitemap</div>
                    <div class="value"><?= (int) $stats['sitemap'] ?></div>
                </div>
                <div class="stat-card">
                    <div class="ico navy"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><line x1="1" y1="1" x2="23" y2="23"/></svg></div>
                    <div class="label">No-index Pages</div>
                    <div class="value"><?= (int) $stats['noindex'] ?></div>
                </div>
            </section>

            <section class="panel" style="margin-top:20px">
                <div class="panel-head">
                    <h3><?= $q !== '' ? 'Matching Pages' : 'All Pages' ?> <span class="count-chip"><?= (int) $matched ?></span></h3>
                    <div class="toolbar">
                        <form method="get" action="<?= h(admin_url('pages.php')) ?>" class="enq-search">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            <input type="text" name="q" id="pageFilter" value="<?= h($q) ?>" placeholder="Search by title or slug…" aria-label="Search pages">
                            <?php if ($q !== ''): ?>
                                <a href="<?= h(admin_url('pages.php')) ?>" class="clear-search" title="Clear search" aria-label="Clear search">&times;</a>
                            <?php endif; ?>
                        </form>
                        <form method="post" action="<?= h(list_url()) ?>">
                            <input type="hidden" name="op" value="sync">
                            <input type="hidden" name="csrf" value="<?= h($CSRF) ?>">
                            <button type="submit" class="btn sm" title="Scan the website for pages that are not in the CMS yet">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                                Rescan website
                            </button>
                        </form>
                        <a href="<?= h(admin_url('page-edit.php?new=1')) ?>" class="btn gold sm">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                            New Page
                        </a>
                    </div>
                </div>
                <div class="panel-body" style="padding:0">
                    <?php if ($loadError): ?>
                        <div class="empty-state"><p><?= h($loadError) ?></p></div>
                    <?php elseif (!$rows && $q !== ''): ?>
                        <div class="empty-state">
                            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            <h4>No pages match “<?= h($q) ?>”</h4>
                            <p><a class="link" href="<?= h(admin_url('pages.php')) ?>">Clear the search</a> to see all pages.</p>
                        </div>
                    <?php elseif (!$rows): ?>
                        <div class="empty-state">
                            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                            <h4>No pages yet</h4>
                            <p>Use <strong>Rescan website</strong> to import the pages that already exist, or create a new one.</p>
                        </div>
                    <?php else: ?>
                        <div class="table-wrap">
                            <table class="data" id="pagesTable">
                                <thead>
                                    <tr>
                                        <th>Page</th>
                                        <th>URL Slug</th>
                                        <th>Meta Title</th>
                                        <th>Meta Description</th>
                                        <th>Robots</th>
                                        <th>Status</th>
                                        <th style="text-align:right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <?php foreach ($rows as $r):
                                    $slug     = (string) $r['slug'];
                                    $isHome   = $slug === '';
                                    $mtLen    = mb_strlen((string) $r['meta_title']);
                                    $mdLen    = mb_strlen((string) $r['meta_description']);
                                    $noindex  = strncmp((string) $r['robots_meta'], 'noindex', 7) === 0;
                                    $onDisk   = is_file(seo_root() . '/' . ltrim((string) $r['file_path'], '/'));
                                ?>
                                    <tr data-search="<?= h(strtolower($r['title'] . ' ' . $slug . ' ' . $r['meta_title'])) ?>">
                                        <td class="title-cell">
                                            <?= h($r['title']) ?>
                                            <?php if (!$onDisk): ?>
                                                <span class="sub" style="color:var(--danger)">File missing on the website</span>
                                            <?php elseif ((int) $r['is_cms'] === 1): ?>
                                                <span class="sub">Created in the CMS</span>
                                            <?php endif; ?>
                                        </td>
                                        <td class="slug-cell"><?= $isHome ? '<strong>/</strong>' : '/<strong>' . h($slug) . '</strong>/' ?></td>
                                        <td><span class="counter <?= h(len_class($mtLen, 50, 60)) ?>"><?= $mtLen ?></span> <span style="color:var(--muted);font-size:12px">/ 60</span></td>
                                        <td><span class="counter <?= h(len_class($mdLen, 150, 160)) ?>"><?= $mdLen ?></span> <span style="color:var(--muted);font-size:12px">/ 160</span></td>
                                        <td><span class="pill <?= $noindex ? 'warnp' : 'ok' ?>"><?= h($r['robots_meta']) ?></span></td>
                                        <td>
                                            <form method="post" action="<?= h(list_url()) ?>" style="display:inline">
                                                <input type="hidden" name="op" value="toggle_status">
                                                <input type="hidden" name="csrf" value="<?= h($CSRF) ?>">
                                                <input type="hidden" name="id" value="<?= (int) $r['id'] ?>">
                                                <button type="submit" class="pill <?= $r['status'] === 'published' ? 'ok' : 'off' ?>" style="border:0;cursor:pointer" title="Click to <?= $r['status'] === 'published' ? 'unpublish' : 'publish' ?>">
                                                    <?= h(ucfirst($r['status'])) ?>
                                                </button>
                                            </form>
                                        </td>
                                        <td>
                                            <div class="row-actions">
                                                <a class="icon-btn" href="<?= h(site_url($slug === '' ? '' : $slug . '/')) ?>" target="_blank" rel="noopener" title="View page">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                                </a>
                                                <a class="icon-btn" href="<?= h(admin_url('page-edit.php?id=' . (int) $r['id'])) ?>" title="Edit SEO">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>
                                                </a>
                                                <form method="post" action="<?= h(list_url()) ?>" onsubmit="return confirm('Delete “<?= h(addslashes($r['title'])) ?>” from the CMS?<?= (int) $r['is_cms'] === 1 ? ' Its page files will also be removed from the website.' : ' The page file stays on the website; only its SEO record and sitemap entry are removed.' ?>');">
                                                    <input type="hidden" name="op" value="delete">
                                                    <input type="hidden" name="csrf" value="<?= h($CSRF) ?>">
                                                    <input type="hidden" name="id" value="<?= (int) $r['id'] ?>">
                                                    <button type="submit" class="icon-btn danger" title="Delete">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                                    </button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>

                        <?php if ($totalPages > 1): ?>
                        <nav class="pager" aria-label="Pages navigation">
                            <span class="pager-count">
                                Showing <strong><?= (int) $firstRow ?>–<?= (int) $lastRow ?></strong> of <strong><?= (int) $matched ?></strong><?= $q !== '' ? ' matching' : '' ?> pages
                            </span>
                            <span class="pager-links">
                                <?php if ($pageNo > 1): ?>
                                    <a class="pg" href="<?= h(list_url(['p' => $pageNo - 1])) ?>" rel="prev" aria-label="Previous page">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                                        Prev
                                    </a>
                                <?php else: ?>
                                    <span class="pg is-disabled">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                                        Prev
                                    </span>
                                <?php endif; ?>

                                <?php foreach (pager_numbers($pageNo, $totalPages) as $n): ?>
                                    <?php if ($n === '…'): ?>
                                        <span class="pg gap">…</span>
                                    <?php elseif ($n === $pageNo): ?>
                                        <span class="pg current" aria-current="page"><?= (int) $n ?></span>
                                    <?php else: ?>
                                        <a class="pg" href="<?= h(list_url(['p' => $n])) ?>"><?= (int) $n ?></a>
                                    <?php endif; ?>
                                <?php endforeach; ?>

                                <?php if ($pageNo < $totalPages): ?>
                                    <a class="pg" href="<?= h(list_url(['p' => $pageNo + 1])) ?>" rel="next" aria-label="Next page">
                                        Next
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                                    </a>
                                <?php else: ?>
                                    <span class="pg is-disabled">
                                        Next
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                                    </span>
                                <?php endif; ?>
                            </span>
                        </nav>
                        <?php endif; ?>
                    <?php endif; ?>
                </div>
                <div class="form-actions">
                    <span style="font-size:13px;color:var(--muted)">
                        Sitemap last generated:
                        <strong style="color:var(--ink)"><?= $generatedAt ? h(date('d M Y, H:i', strtotime($generatedAt))) : 'never' ?></strong>
                        — <?= (int) $stats['sitemap'] ?> URLs
                    </span>
                    <span class="spacer" style="flex:1"></span>
                    <a href="<?= h(admin_url('sitemap.php')) ?>" class="btn sm">Sitemap settings</a>
                </div>
            </section>
        </main>
    </div>
</div>

<script src="<?= h(admin_asset('assets/admin.js')) ?>"></script>
<script>
/* Search box: submits itself shortly after typing stops, so results stay in
   step without needing the Enter key. Searching always returns to page 1. */
(function () {
    var input = document.getElementById('pageFilter');
    if (!input) return;
    var form = input.form;
    var timer = null;

    input.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () { form.submit(); }, 450);
    });
    form.addEventListener('submit', function () { clearTimeout(timer); });

    // Keep the caret in the box after a search reloads the page.
    if (input.value !== '') {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
    }
})();
</script>
</body>
</html>
