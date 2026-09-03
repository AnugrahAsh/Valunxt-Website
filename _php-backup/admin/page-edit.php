<?php
/**
 * Admin — Page & SEO editor.
 *
 * Handles both creating a new page (?new=1) and editing an existing one
 * (?id=N). A new page is scaffolded on disk from the shared page-hero partial
 * so it renders immediately; editing only ever touches metadata unless the
 * slug changes, in which case the page folder is moved, internal links are
 * rewritten and a 301 is added for the old URL.
 *
 * Any successful save regenerates /sitemap.xml and the front-end SEO cache.
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

$isNew = isset($_GET['new']) || (($_POST['mode'] ?? '') === 'new');
$id    = (int) ($_POST['id'] ?? $_GET['id'] ?? 0);

$page = null;
if (!$isNew) {
    $page = seo_page($id);
    if (!$page) {
        $_SESSION['flash_err'] = 'That page no longer exists.';
        header('Location: ' . admin_url('pages.php'));
        exit;
    }
}

$isHome = !$isNew && (string) $page['slug'] === '';

// ---- Form state ------------------------------------------------------------
$form = $isNew
    ? [
        'title' => '', 'slug' => '', 'meta_title' => '', 'meta_description' => '',
        'canonical_url' => '', 'meta_keywords' => '', 'robots_meta' => 'index, follow',
        'og_title' => '', 'og_description' => '', 'status' => 'published',
        'in_sitemap' => 1, 'priority' => '0.8', 'changefreq' => 'monthly',
        'hero_image' => '/assets/content/uploads/banners/about-us.webp',
    ]
    : [
        'title'            => (string) $page['title'],
        'slug'             => (string) $page['slug'],
        'meta_title'       => (string) $page['meta_title'],
        'meta_description' => (string) $page['meta_description'],
        'canonical_url'    => (string) $page['canonical_url'],
        'meta_keywords'    => (string) $page['meta_keywords'],
        'robots_meta'      => (string) $page['robots_meta'],
        'og_title'         => (string) $page['og_title'],
        'og_description'   => (string) $page['og_description'],
        'status'           => (string) $page['status'],
        'in_sitemap'       => (int) $page['in_sitemap'],
        'priority'         => number_format((float) $page['priority'], 1),
        'changefreq'       => (string) $page['changefreq'],
        'hero_image'       => '',
    ];

$errors = [];
$notices = [];

// ---- Save ------------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!hash_equals($CSRF, (string) ($_POST['csrf'] ?? ''))) {
        $errors['general'] = 'Your session expired. Please submit the form again.';
    } else {
        foreach (array_keys($form) as $k) {
            if ($k === 'in_sitemap') continue;
            $form[$k] = trim((string) ($_POST[$k] ?? ''));
        }
        $form['in_sitemap'] = isset($_POST['in_sitemap']) ? 1 : 0;

        // -- Validation --
        if ($form['title'] === '') {
            $errors['title'] = 'A page title is required.';
        } elseif (mb_strlen($form['title']) > 200) {
            $errors['title'] = 'Keep the page title under 200 characters.';
        }

        $slug = $isHome ? '' : seo_normalize_slug($form['slug'] !== '' ? $form['slug'] : $form['title']);
        if (!$isHome && $slug === '') {
            $errors['slug'] = 'A URL slug is required — use letters, numbers and hyphens.';
        } elseif (!$isHome && seo_slug_taken($slug, $isNew ? 0 : $id)) {
            $errors['slug'] = 'The slug “' . $slug . '” is already used by another page. Choose a different one.';
        }
        $form['slug'] = $slug;

        if (mb_strlen($form['meta_title']) > 255) {
            $errors['meta_title'] = 'Keep the meta title under 255 characters.';
        }
        if (mb_strlen($form['meta_description']) > 500) {
            $errors['meta_description'] = 'Keep the meta description under 500 characters.';
        }
        if (mb_strlen($form['meta_keywords']) > 500) {
            $errors['meta_keywords'] = 'Keep the keyword list under 500 characters.';
        }
        if ($form['canonical_url'] !== '' && !filter_var($form['canonical_url'], FILTER_VALIDATE_URL)) {
            $errors['canonical_url'] = 'Enter a full URL including https://, or leave this blank to generate one automatically.';
        }
        if (!in_array($form['robots_meta'], seo_robots_options(), true)) {
            $form['robots_meta'] = 'index, follow';
        }
        if (!in_array($form['changefreq'], seo_changefreq_options(), true)) {
            $form['changefreq'] = 'monthly';
        }
        $priority = (float) $form['priority'];
        if ($priority < 0 || $priority > 1) $priority = 0.5;
        $form['priority'] = number_format($priority, 1);
        if (!in_array($form['status'], ['published', 'draft'], true)) {
            $form['status'] = 'published';
        }

        // -- Persist --
        if (!$errors) {
            try {
                if ($isNew) {
                    $scaffold = seo_scaffold_page(
                        $form['slug'],
                        $form['meta_title'] !== '' ? $form['meta_title'] : $form['title'] . ' | VALUNXT Capital',
                        $form['meta_description'],
                        $form['hero_image'] !== '' ? $form['hero_image'] : '/assets/content/uploads/banners/about-us.webp'
                    );
                    if (!$scaffold['ok']) {
                        $errors['general'] = $scaffold['error'];
                    } else {
                        $stmt = db()->prepare(
                            "INSERT INTO pages
                                (title, slug, file_path, meta_title, meta_description, canonical_url,
                                 meta_keywords, robots_meta, og_title, og_description,
                                 status, in_sitemap, priority, changefreq, is_cms)
                             VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,1)"
                        );
                        $stmt->execute([
                            $form['title'], $form['slug'], $form['slug'] . '/index.php',
                            $form['meta_title'], $form['meta_description'], $form['canonical_url'],
                            $form['meta_keywords'], $form['robots_meta'], $form['og_title'], $form['og_description'],
                            $form['status'], $form['in_sitemap'], $form['priority'], $form['changefreq'],
                        ]);
                        $newId = (int) db()->lastInsertId();
                        $res = seo_regenerate();
                        $_SESSION['flash'] = 'Page “' . $form['title'] . '” created at /' . $form['slug'] . '/. '
                            . 'Sitemap regenerated with ' . $res['count'] . ' URLs.';
                        header('Location: ' . admin_url('page-edit.php?id=' . $newId));
                        exit;
                    }
                } else {
                    $oldSlug   = (string) $page['slug'];
                    $slugMoved = false;

                    if (!$isHome && $form['slug'] !== $oldSlug) {
                        $move = seo_move_page_dir($oldSlug, $form['slug']);
                        if (!$move['ok']) {
                            $errors['slug'] = $move['error'];
                        } else {
                            $slugMoved = true;
                            $changedFiles = seo_update_internal_links($oldSlug, $form['slug']);
                            $notices[] = $move['moved']
                                ? 'Page folder moved to /' . $form['slug'] . '/.'
                                : 'No page folder was found at /' . $oldSlug . '/, so only the SEO record changed.';
                            if ($changedFiles > 0) {
                                $notices[] = 'Internal links updated in ' . $changedFiles . ' file' . ($changedFiles === 1 ? '' : 's') . '.';
                            }
                            if (seo_add_redirect($oldSlug, $form['slug'])) {
                                $notices[] = 'A 301 redirect from the old URL was added to .htaccess.';
                            }

                            // Descendant pages inherit the new parent prefix.
                            $kids = db()->prepare("SELECT id, slug, file_path FROM pages WHERE slug LIKE ? AND id <> ?");
                            $kids->execute([$oldSlug . '/%', $id]);
                            $updKid = db()->prepare("UPDATE pages SET slug = ?, file_path = ? WHERE id = ?");
                            $n = 0;
                            foreach ($kids->fetchAll() as $kid) {
                                $kidSlug = $form['slug'] . substr($kid['slug'], strlen($oldSlug));
                                $updKid->execute([$kidSlug, $kidSlug . '/index.php', (int) $kid['id']]);
                                $n++;
                            }
                            if ($n > 0) {
                                $notices[] = $n . ' child page' . ($n === 1 ? '' : 's') . ' moved under the new slug.';
                            }
                        }
                    }

                    if (!$errors) {
                        $filePath = $isHome ? 'index.php' : $form['slug'] . '/index.php';
                        $stmt = db()->prepare(
                            "UPDATE pages SET
                                title = ?, slug = ?, file_path = ?, meta_title = ?, meta_description = ?,
                                canonical_url = ?, meta_keywords = ?, robots_meta = ?, og_title = ?,
                                og_description = ?, status = ?, in_sitemap = ?, priority = ?, changefreq = ?
                             WHERE id = ?"
                        );
                        $stmt->execute([
                            $form['title'], $form['slug'], $filePath, $form['meta_title'], $form['meta_description'],
                            $form['canonical_url'], $form['meta_keywords'], $form['robots_meta'], $form['og_title'],
                            $form['og_description'], $form['status'], $form['in_sitemap'], $form['priority'],
                            $form['changefreq'], $id,
                        ]);

                        $res = seo_regenerate();
                        $msg = 'SEO settings saved. Sitemap regenerated with ' . $res['count'] . ' URLs.';
                        if ($notices) $msg .= ' ' . implode(' ', $notices);
                        $_SESSION['flash'] = $msg;
                        if ($res['errors']) $_SESSION['flash_err'] = implode(' ', $res['errors']);
                        header('Location: ' . admin_url('page-edit.php?id=' . $id));
                        exit;
                    }
                }
            } catch (Throwable $e) {
                $errors['general'] = 'The page could not be saved: ' . $e->getMessage();
            }
        }
    }
}

// ---- Flash from a previous redirect ---------------------------------------
$flash = '';
$flashErr = '';
if (!empty($_SESSION['flash']))     { $flash = $_SESSION['flash']; unset($_SESSION['flash']); }
if (!empty($_SESSION['flash_err'])) { $flashErr = $_SESSION['flash_err']; unset($_SESSION['flash_err']); }

// ---- View data -------------------------------------------------------------
$siteUrl   = seo_site_url();
$autoTitle = $form['title'] !== '' ? $form['title'] . ' | VALUNXT Capital' : 'VALUNXT Capital';
$autoCanon = seo_page_url($form['slug']);

// Hero images available for a new page.
$heroes = [];
foreach ((array) @glob(seo_root() . '/assets/content/uploads/banners/*.{webp,jpg,jpeg,png}', GLOB_BRACE) as $f) {
    $heroes[] = '/assets/content/uploads/banners/' . basename($f);
}
sort($heroes);

$heading = $isNew ? 'New Page' : 'Edit: ' . $form['title'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title><?= h($heading) ?> — VALUNXT Capital Admin</title>
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
                <div class="crumbs">
                    Home <span class="sep">/</span>
                    <a href="<?= h(admin_url('pages.php')) ?>" style="color:inherit">Pages &amp; SEO</a>
                    <span class="sep">/</span> <?= $isNew ? 'New Page' : 'Edit' ?>
                </div>
                <h1><?= h($heading) ?></h1>
                <p><?= $isNew
                        ? 'Create a page on the website and set its search-engine metadata in one step.'
                        : 'Update the slug, meta tags, canonical URL and robots directive for this page.' ?></p>
            </div>

            <?php if ($flash): ?>
                <div class="flash" role="status">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span><?= h($flash) ?></span>
                </div>
            <?php endif; ?>
            <?php if ($flashErr || !empty($errors['general'])): ?>
                <div class="flash err" role="alert">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span><?= h($flashErr ?: $errors['general']) ?></span>
                </div>
            <?php endif; ?>

            <form method="post" action="<?= h(admin_url('page-edit.php' . ($isNew ? '?new=1' : '?id=' . $id))) ?>" id="seoForm">
                <input type="hidden" name="csrf" value="<?= h($CSRF) ?>">
                <input type="hidden" name="mode" value="<?= $isNew ? 'new' : 'edit' ?>">
                <input type="hidden" name="id" value="<?= (int) $id ?>">

                <div class="panel-grid" style="grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);align-items:start">

                    <!-- Left column: the fields -->
                    <div>
                        <section class="panel">
                            <div class="panel-head"><h3>Page</h3></div>
                            <div class="panel-body">
                                <div class="form-grid">
                                    <div class="fld full">
                                        <label for="title">Page Title <span class="counter" id="c_title">0</span></label>
                                        <input type="text" id="title" name="title" value="<?= h($form['title']) ?>" maxlength="200" required
                                               placeholder="e.g. Investor Relations">
                                        <?php if (!empty($errors['title'])): ?><div class="hint" style="color:var(--danger)"><?= h($errors['title']) ?></div><?php endif; ?>
                                        <div class="hint">The page's name inside the CMS. Also used to suggest the slug and meta title.</div>
                                    </div>

                                    <div class="fld full">
                                        <label for="slug">URL Slug</label>
                                        <div class="prefix-input">
                                            <span class="px"><?= h($siteUrl) ?>/</span>
                                            <input type="text" id="slug" name="slug" value="<?= h($form['slug']) ?>"
                                                   maxlength="255" <?= $isHome ? 'readonly' : '' ?>
                                                   placeholder="investor-relations">
                                        </div>
                                        <?php if (!empty($errors['slug'])): ?><div class="hint" style="color:var(--danger)"><?= h($errors['slug']) ?></div><?php endif; ?>
                                        <div class="hint">
                                            <?php if ($isHome): ?>
                                                This is the home page, so its URL is fixed.
                                            <?php elseif ($isNew): ?>
                                                Generated from the page title as you type — edit it if you want something different. Letters, numbers and hyphens only; use <code>/</code> to nest under a parent (e.g. <code>about/team</code>).
                                            <?php else: ?>
                                                Changing the slug moves the page folder, rewrites internal links across the site, adds a 301 from the old URL and regenerates the sitemap.
                                            <?php endif; ?>
                                        </div>
                                    </div>

                                    <?php if ($isNew && $heroes): ?>
                                    <div class="fld full">
                                        <label for="hero_image">Hero Banner Image</label>
                                        <select id="hero_image" name="hero_image">
                                            <?php foreach ($heroes as $img): ?>
                                                <option value="<?= h($img) ?>" <?= $form['hero_image'] === $img ? 'selected' : '' ?>><?= h(basename($img)) ?></option>
                                            <?php endforeach; ?>
                                        </select>
                                        <div class="hint">Used for the breadcrumb hero on the new page. You can change it later by editing the page file.</div>
                                    </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </section>

                        <section class="panel" style="margin-top:20px">
                            <div class="panel-head"><h3>Search Engine Metadata</h3></div>
                            <div class="panel-body">
                                <div class="form-grid">
                                    <div class="fld full">
                                        <label for="meta_title">Meta Title <span class="counter" id="c_meta_title" data-min="50" data-max="60">0</span></label>
                                        <input type="text" id="meta_title" name="meta_title" value="<?= h($form['meta_title']) ?>" maxlength="255"
                                               placeholder="<?= h($autoTitle) ?>">
                                        <?php if (!empty($errors['meta_title'])): ?><div class="hint" style="color:var(--danger)"><?= h($errors['meta_title']) ?></div><?php endif; ?>
                                        <div class="hint">Recommended 50–60 characters. Leave blank to use “<?= h($autoTitle) ?>”.</div>
                                    </div>

                                    <div class="fld full">
                                        <label for="meta_description">Meta Description <span class="counter" id="c_meta_description" data-min="150" data-max="160">0</span></label>
                                        <textarea id="meta_description" name="meta_description" rows="3" maxlength="500"
                                                  placeholder="A short, compelling summary of the page."><?= h($form['meta_description']) ?></textarea>
                                        <?php if (!empty($errors['meta_description'])): ?><div class="hint" style="color:var(--danger)"><?= h($errors['meta_description']) ?></div><?php endif; ?>
                                        <div class="hint">Recommended 150–160 characters.</div>
                                    </div>

                                    <div class="fld full">
                                        <label for="canonical_url">Canonical URL</label>
                                        <input type="text" id="canonical_url" name="canonical_url" value="<?= h($form['canonical_url']) ?>"
                                               maxlength="255" placeholder="<?= h($autoCanon) ?>">
                                        <?php if (!empty($errors['canonical_url'])): ?><div class="hint" style="color:var(--danger)"><?= h($errors['canonical_url']) ?></div><?php endif; ?>
                                        <div class="hint">Leave blank and the page publishes <code id="canonPreview"><?= h($autoCanon) ?></code> automatically.</div>
                                    </div>

                                    <div class="fld">
                                        <label for="robots_meta">Robots Meta</label>
                                        <select id="robots_meta" name="robots_meta">
                                            <?php foreach (seo_robots_options() as $opt): ?>
                                                <option value="<?= h($opt) ?>" <?= $form['robots_meta'] === $opt ? 'selected' : '' ?>><?= h($opt) ?></option>
                                            <?php endforeach; ?>
                                        </select>
                                        <div class="hint">Controls whether search engines index the page and follow its links.</div>
                                    </div>

                                    <div class="fld">
                                        <label for="status">Status</label>
                                        <select id="status" name="status">
                                            <option value="published" <?= $form['status'] === 'published' ? 'selected' : '' ?>>Published</option>
                                            <option value="draft" <?= $form['status'] === 'draft' ? 'selected' : '' ?>>Draft (no-index, excluded from sitemap)</option>
                                        </select>
                                        <div class="hint">Draft pages are served with <code>noindex, nofollow</code> and left out of the sitemap.</div>
                                    </div>

                                    <div class="fld full">
                                        <label for="meta_keywords">Meta Keywords <span style="font-weight:400;color:var(--muted)">(optional)</span></label>
                                        <input type="text" id="meta_keywords" name="meta_keywords" value="<?= h($form['meta_keywords']) ?>"
                                               maxlength="500" placeholder="real estate advisory, capital markets, dubai">
                                        <?php if (!empty($errors['meta_keywords'])): ?><div class="hint" style="color:var(--danger)"><?= h($errors['meta_keywords']) ?></div><?php endif; ?>
                                        <div class="hint">Comma-separated. Most search engines ignore this tag, so it is safe to leave empty.</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="panel" style="margin-top:20px">
                            <div class="panel-head"><h3>Social Sharing &amp; Sitemap</h3></div>
                            <div class="panel-body">
                                <div class="form-grid">
                                    <div class="fld full">
                                        <label for="og_title">Open Graph Title <span style="font-weight:400;color:var(--muted)">(optional)</span></label>
                                        <input type="text" id="og_title" name="og_title" value="<?= h($form['og_title']) ?>" maxlength="255"
                                               placeholder="Defaults to the meta title">
                                    </div>
                                    <div class="fld full">
                                        <label for="og_description">Open Graph Description <span style="font-weight:400;color:var(--muted)">(optional)</span></label>
                                        <textarea id="og_description" name="og_description" rows="2" maxlength="500"
                                                  placeholder="Defaults to the meta description"><?= h($form['og_description']) ?></textarea>
                                    </div>

                                    <div class="fld">
                                        <label for="priority">Sitemap Priority</label>
                                        <select id="priority" name="priority">
                                            <?php foreach (['1.0','0.9','0.8','0.7','0.6','0.5','0.4','0.3','0.2','0.1'] as $p): ?>
                                                <option value="<?= $p ?>" <?= $form['priority'] === $p ? 'selected' : '' ?>><?= $p ?></option>
                                            <?php endforeach; ?>
                                        </select>
                                    </div>
                                    <div class="fld">
                                        <label for="changefreq">Change Frequency</label>
                                        <select id="changefreq" name="changefreq">
                                            <?php foreach (seo_changefreq_options() as $cf): ?>
                                                <option value="<?= h($cf) ?>" <?= $form['changefreq'] === $cf ? 'selected' : '' ?>><?= h(ucfirst($cf)) ?></option>
                                            <?php endforeach; ?>
                                        </select>
                                    </div>

                                    <div class="fld full">
                                        <label style="justify-content:flex-start;gap:10px;cursor:pointer">
                                            <input type="checkbox" name="in_sitemap" value="1" <?= (int) $form['in_sitemap'] === 1 ? 'checked' : '' ?>
                                                   style="width:auto;accent-color:var(--gold)">
                                            Include this page in sitemap.xml
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn gold">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                                    <?= $isNew ? 'Create Page' : 'Save SEO Settings' ?>
                                </button>
                                <a href="<?= h(admin_url('pages.php')) ?>" class="btn">Cancel</a>
                                <?php if (!$isNew): ?>
                                    <span class="spacer"></span>
                                    <a href="<?= h(site_url($form['slug'] === '' ? '' : $form['slug'] . '/')) ?>" target="_blank" rel="noopener" class="btn sm">
                                        View live page
                                    </a>
                                <?php endif; ?>
                            </div>
                        </section>
                    </div>

                    <!-- Right column: live Google preview -->
                    <div>
                        <section class="panel" style="position:sticky;top:88px">
                            <div class="panel-head"><h3>Google Search Preview</h3></div>
                            <div class="panel-body">
                                <div class="serp">
                                    <div class="serp-site">
                                        <span class="serp-fav">VX</span>
                                        <span>
                                            <span class="serp-name">VALUNXT Capital</span><br>
                                            <span class="serp-url" id="pvUrl"><?= h($autoCanon) ?></span>
                                        </span>
                                    </div>
                                    <div class="serp-title" id="pvTitle"><?= h($form['meta_title'] !== '' ? $form['meta_title'] : $autoTitle) ?></div>
                                    <div class="serp-desc" id="pvDesc"><?= h($form['meta_description'] !== '' ? $form['meta_description'] : 'Add a meta description to control the snippet Google shows beneath your page title.') ?></div>
                                </div>
                                <div class="hint" style="margin-top:12px">
                                    Google may rewrite the title or snippet, but this is what you are asking it to show.
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </form>
        </main>
    </div>
</div>

<script src="<?= h(admin_asset('assets/admin.js')) ?>"></script>
<script>
/* Live SEO editor: slug suggestions, character counters, Google preview. */
(function () {
    'use strict';

    var isNew     = <?= $isNew ? 'true' : 'false' ?>;
    var isHome    = <?= $isHome ? 'true' : 'false' ?>;
    var siteUrl   = <?= json_encode($siteUrl) ?>;
    var titleEl   = document.getElementById('title');
    var slugEl    = document.getElementById('slug');
    var metaTitle = document.getElementById('meta_title');
    var metaDesc  = document.getElementById('meta_description');
    var canonEl   = document.getElementById('canonical_url');
    var pvTitle   = document.getElementById('pvTitle');
    var pvDesc    = document.getElementById('pvDesc');
    var pvUrl     = document.getElementById('pvUrl');
    var canonPrev = document.getElementById('canonPreview');

    /** Mirror of the PHP slug normaliser, for the live suggestion only. */
    function slugify(value) {
        return String(value)
            .toLowerCase()
            .replace(/\s*[|–—-]\s*valunxt.*$/i, '')
            .replace(/&/g, ' and ')
            .split('/')
            .map(function (part) {
                return part.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            })
            .filter(Boolean)
            .join('/');
    }

    function autoTitle() {
        var t = titleEl ? titleEl.value.trim() : '';
        return t ? t + ' | VALUNXT Capital' : 'VALUNXT Capital';
    }

    function autoCanonical() {
        var s = slugEl ? slugEl.value.trim().replace(/^\/+|\/+$/g, '') : '';
        return siteUrl + '/' + (s ? s + '/' : '');
    }

    /** Colour a counter against its recommended range. */
    function paint(el, len, min, max) {
        el.textContent = len;
        el.classList.remove('ok', 'warn', 'over');
        if (!len) return;
        el.classList.add(len > max ? 'over' : (len < min ? 'warn' : 'ok'));
    }

    function refresh() {
        var mt = metaTitle && metaTitle.value.trim();
        var md = metaDesc && metaDesc.value.trim();
        var cu = canonEl && canonEl.value.trim();

        if (pvTitle) pvTitle.textContent = mt || autoTitle();
        if (pvDesc)  pvDesc.textContent  = md || 'Add a meta description to control the snippet Google shows beneath your page title.';
        if (pvUrl)   pvUrl.textContent   = cu || autoCanonical();
        if (canonPrev) canonPrev.textContent = autoCanonical();

        var ct = document.getElementById('c_title');
        if (ct && titleEl) ct.textContent = titleEl.value.length;
        var cmt = document.getElementById('c_meta_title');
        if (cmt && metaTitle) paint(cmt, (mt || autoTitle()).length, 50, 60);
        var cmd = document.getElementById('c_meta_description');
        if (cmd && metaDesc) paint(cmd, (md || '').length, 150, 160);
    }

    // Suggest a slug from the title until the user edits the slug themselves.
    var slugTouched = !isNew && slugEl && slugEl.value !== '';
    if (slugEl) slugEl.addEventListener('input', function () { slugTouched = true; refresh(); });
    if (titleEl) {
        titleEl.addEventListener('input', function () {
            if (!slugTouched && !isHome && slugEl) slugEl.value = slugify(titleEl.value);
            refresh();
        });
    }
    // Normalise whatever the user typed when they leave the slug field.
    if (slugEl && !isHome) {
        slugEl.addEventListener('blur', function () {
            slugEl.value = slugify(slugEl.value);
            refresh();
        });
    }

    [metaTitle, metaDesc, canonEl].forEach(function (el) {
        if (el) el.addEventListener('input', refresh);
    });

    refresh();
})();
</script>
</body>
</html>
