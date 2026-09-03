<?php
/**
 * VALUNXT Capital — SEO & Sitemap library.
 *
 * Everything the admin panel needs to manage per-page SEO metadata, page
 * slugs and the XML sitemap lives here so the individual admin screens stay
 * thin. Nothing in this file echoes output.
 *
 * Data model
 *   pages          one row per public page (slug = full URL path, '' = home)
 *   seo_settings   simple key/value store (site URL, last sitemap run, …)
 *
 * Generated artefacts
 *   /sitemap.xml            XML Sitemap protocol 0.9, written to the site root
 *   /data/seo/seo-map.php   plain PHP array consumed by the public front end,
 *                           so page views never touch the database
 */

require_once __DIR__ . '/../config.php';

// ---------------------------------------------------------------------------
// Paths & constants
// ---------------------------------------------------------------------------

/** Absolute path to the public site root (one level above /admin). */
function seo_root() {
    return rtrim(str_replace('\\', '/', dirname(dirname(__DIR__))), '/');
}

/** Absolute path of the generated sitemap. */
function seo_sitemap_path() {
    return seo_root() . '/sitemap.xml';
}

/** Absolute path of the front-end SEO cache written on every save. */
function seo_cache_path() {
    return seo_root() . '/data/seo/seo-map.php';
}

/** Allowed robots directives, in the order shown in the admin UI. */
function seo_robots_options() {
    return ['index, follow', 'noindex, follow', 'index, nofollow', 'noindex, nofollow'];
}

/** Allowed sitemap change frequencies. */
function seo_changefreq_options() {
    return ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
}

/** Top-level folders that are never public pages. */
function seo_excluded_dirs() {
    return ['admin', 'assets', 'data', 'includes', 'icons', 'logo', '_wp-source', '_retired', '404', 'vendor', 'node_modules'];
}

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

/** DDL for the pages table (SEO-managed public pages). */
function seo_pages_table_sql() {
    return "CREATE TABLE IF NOT EXISTS pages (
                id               INT UNSIGNED NOT NULL AUTO_INCREMENT,
                title            VARCHAR(200)  NOT NULL DEFAULT '',
                slug             VARCHAR(255)  NOT NULL DEFAULT '',
                file_path        VARCHAR(255)  NOT NULL DEFAULT '',
                meta_title       VARCHAR(255)  NOT NULL DEFAULT '',
                meta_description TEXT          NULL,
                canonical_url    VARCHAR(255)  NOT NULL DEFAULT '',
                meta_keywords    VARCHAR(500)  NOT NULL DEFAULT '',
                robots_meta      VARCHAR(40)   NOT NULL DEFAULT 'index, follow',
                og_title         VARCHAR(255)  NOT NULL DEFAULT '',
                og_description   TEXT          NULL,
                status           VARCHAR(20)   NOT NULL DEFAULT 'published',
                in_sitemap       TINYINT(1)    NOT NULL DEFAULT 1,
                priority         DECIMAL(2,1)  NOT NULL DEFAULT 0.5,
                changefreq       VARCHAR(20)   NOT NULL DEFAULT 'monthly',
                is_cms           TINYINT(1)    NOT NULL DEFAULT 0,
                created_at       DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at       DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                UNIQUE KEY uq_slug (slug),
                KEY idx_status (status)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
}

/** DDL for the SEO key/value settings table. */
function seo_settings_table_sql() {
    return "CREATE TABLE IF NOT EXISTS seo_settings (
                k VARCHAR(64)  NOT NULL,
                v TEXT         NULL,
                PRIMARY KEY (k)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
}

/**
 * Create the SEO tables if needed and, on a fresh install, import every page
 * that already exists on disk. Safe to call on every request.
 */
function seo_bootstrap() {
    static $done = false;
    if ($done) return;
    $done = true;

    $pdo = db();
    $pdo->exec(seo_pages_table_sql());
    $pdo->exec(seo_settings_table_sql());

    // First run: seed the table from the pages already on disk.
    if ((int) $pdo->query("SELECT COUNT(*) FROM pages")->fetchColumn() === 0) {
        seo_sync_pages();
        seo_regenerate();
    }
}

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------

/**
 * All settings, loaded once per request. Pass true to force a reload after a
 * write.
 */
function seo_settings_all($reload = false) {
    static $cache = null;
    if ($cache === null || $reload) {
        $cache = [];
        try {
            foreach (db()->query("SELECT k, v FROM seo_settings") as $r) {
                $cache[$r['k']] = $r['v'];
            }
        } catch (Throwable $e) { /* table not ready yet */ }
    }
    return $cache;
}

/** Read a setting, falling back to $default when unset. */
function seo_setting($key, $default = '') {
    $all = seo_settings_all();
    return isset($all[$key]) && $all[$key] !== null ? $all[$key] : $default;
}

/** Persist a setting (upsert) and refresh the in-request cache. */
function seo_setting_set($key, $value) {
    $stmt = db()->prepare(
        "INSERT INTO seo_settings (k, v) VALUES (?, ?)
         ON DUPLICATE KEY UPDATE v = VALUES(v)"
    );
    $stmt->execute([$key, (string) $value]);
    seo_settings_all(true);
}

/** Best-guess public site URL from the current request (no trailing slash). */
function seo_detect_site_url() {
    $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host   = $_SERVER['HTTP_HOST'] ?? 'localhost';
    return $scheme . '://' . $host . (SITE_BASE ?: '');
}

/** Configured public site URL (no trailing slash). */
function seo_site_url() {
    $url = trim((string) seo_setting('site_url', ''));
    if ($url === '') $url = seo_detect_site_url();
    return rtrim($url, '/');
}

/** Absolute public URL for a slug ('' = home). Always ends in a slash. */
function seo_page_url($slug) {
    $slug = trim((string) $slug, '/');
    return seo_site_url() . '/' . ($slug === '' ? '' : $slug . '/');
}

// ---------------------------------------------------------------------------
// Slugs
// ---------------------------------------------------------------------------

/**
 * Turn arbitrary text into a single URL-safe slug segment.
 */
function seo_slugify_segment($text) {
    $text = (string) $text;
    // Strip a trailing "| Site Name" suffix that page titles commonly carry.
    $text = preg_replace('~\s*[|–—-]\s*VALUNXT.*$~iu', '', $text);
    if (function_exists('iconv')) {
        $conv = @iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $text);
        if ($conv !== false) $text = $conv;
    }
    $text = strtolower($text);
    $text = str_replace('&', ' and ', $text);
    $text = preg_replace('~[^a-z0-9]+~', '-', $text);
    return trim((string) $text, '-');
}

/**
 * Normalise a full path slug: "About/ Careers " → "about/careers".
 * An empty result means the home page.
 */
function seo_normalize_slug($slug) {
    $parts = explode('/', (string) $slug);
    $out = [];
    foreach ($parts as $p) {
        $seg = seo_slugify_segment($p);
        if ($seg !== '') $out[] = $seg;
    }
    return implode('/', $out);
}

/** Whether a slug is already taken by another page. */
function seo_slug_taken($slug, $exceptId = 0) {
    $stmt = db()->prepare("SELECT COUNT(*) FROM pages WHERE slug = ? AND id <> ?");
    $stmt->execute([$slug, (int) $exceptId]);
    return (int) $stmt->fetchColumn() > 0;
}

/** Append -2, -3 … until the slug is unique. */
function seo_unique_slug($slug, $exceptId = 0) {
    $slug = seo_normalize_slug($slug);
    if ($slug === '') return '';
    $base = $slug;
    $n = 2;
    while (seo_slug_taken($slug, $exceptId)) {
        $slug = $base . '-' . $n;
        $n++;
        if ($n > 200) break;
    }
    return $slug;
}

// ---------------------------------------------------------------------------
// Filesystem discovery
// ---------------------------------------------------------------------------

/**
 * Narrow a page file down to its `$PAGE = array( … );` header. Page bodies
 * contain plenty of unrelated `'title' =>` pairs (Elementor markup), so every
 * lookup runs against this slice only.
 */
function seo_page_block($source) {
    $start = strpos($source, '$PAGE');
    if ($start === false) return '';
    $end = strpos($source, 'includes/head.php', $start);
    return $end === false ? substr($source, $start, 4000) : substr($source, $start, $end - $start);
}

/**
 * Pull a value out of a page's `$PAGE = array( … )` literal without executing
 * the file. Handles both single- and double-quoted PHP string literals.
 */
function seo_extract_page_key($source, $key) {
    $k = preg_quote($key, '~');
    if (preg_match("~'{$k}'\s*=>\s*'((?:\\\\.|[^'\\\\])*)'~", $source, $m)) {
        return str_replace(["\\'", '\\\\'], ["'", '\\'], $m[1]);
    }
    if (preg_match("~'{$k}'\s*=>\s*\"((?:\\\\.|[^\"\\\\])*)\"~", $source, $m)) {
        return stripcslashes($m[1]);
    }
    return '';
}

/**
 * Walk the site root and return every public page found on disk.
 *
 * @return array<string, array> keyed by slug ('' = home)
 */
function seo_scan_filesystem() {
    $root     = seo_root();
    $excluded = seo_excluded_dirs();
    $found    = [];

    $visit = function ($dir, $slug) use (&$visit, $root, $excluded, &$found) {
        $index = $dir . '/index.php';
        if (is_file($index)) {
            $src   = (string) @file_get_contents($index);
            // Only treat it as a public page if it renders the shared head.
            if (strpos($src, 'includes/head.php') !== false) {
                $block = seo_page_block($src);
                $title = seo_extract_page_key($block, 'title');
                $desc  = seo_extract_page_key($block, 'desc');
                $found[$slug] = [
                    'slug'      => $slug,
                    'title'     => $title !== '' ? $title : ucwords(str_replace(['-', '/'], [' ', ' › '], $slug ?: 'Home')),
                    'desc'      => $desc,
                    'file_path' => ltrim(substr($index, strlen($root)), '/'),
                ];
            }
        }
        foreach ((array) @scandir($dir) as $entry) {
            if ($entry === '.' || $entry === '..') continue;
            $path = $dir . '/' . $entry;
            if (!is_dir($path)) continue;
            if ($entry[0] === '.' || in_array(strtolower($entry), $excluded, true)) continue;
            $visit($path, ($slug === '' ? '' : $slug . '/') . $entry);
        }
    };
    $visit($root, '');

    return $found;
}

/**
 * Import pages found on disk that are not in the CMS yet, and flag rows whose
 * file has since disappeared.
 *
 * @return array{added:int, missing:int, total:int}
 */
function seo_sync_pages() {
    $pdo   = db();
    $disk  = seo_scan_filesystem();
    $known = [];
    foreach ($pdo->query("SELECT slug FROM pages") as $r) {
        $known[$r['slug']] = true;
    }

    $ins = $pdo->prepare(
        "INSERT INTO pages
            (title, slug, file_path, meta_title, meta_description, robots_meta, priority, changefreq, status, in_sitemap)
         VALUES (?, ?, ?, ?, ?, 'index, follow', ?, ?, 'published', 1)"
    );

    $added = 0;
    foreach ($disk as $slug => $p) {
        if (isset($known[$slug])) continue;
        $depth = $slug === '' ? 0 : substr_count($slug, '/') + 1;
        $ins->execute([
            seo_title_from_meta($p['title'], $slug),
            $slug,
            $p['file_path'],
            $p['title'],
            $p['desc'],
            seo_default_priority($depth),
            seo_default_changefreq($depth),
        ]);
        $added++;
    }

    // Keep file_path in step for rows that already exist.
    $upd = $pdo->prepare("UPDATE pages SET file_path = ? WHERE slug = ? AND file_path <> ?");
    foreach ($disk as $slug => $p) {
        $upd->execute([$p['file_path'], $slug, $p['file_path']]);
    }

    $missing = 0;
    foreach ($pdo->query("SELECT slug, file_path FROM pages") as $r) {
        if (!isset($disk[$r['slug']])) $missing++;
    }

    return ['added' => $added, 'missing' => $missing, 'total' => count($disk)];
}

/** Human page title derived from a meta title ("About | VALUNXT" → "About"). */
function seo_title_from_meta($metaTitle, $slug) {
    $t = trim(preg_replace('~\s*\|\s*VALUNXT.*$~iu', '', (string) $metaTitle));
    if ($t !== '') return $t;
    if ($slug === '') return 'Home';
    $last = basename($slug);
    return ucwords(str_replace('-', ' ', $last));
}

/** Sensible sitemap priority for a page at the given depth. */
function seo_default_priority($depth) {
    if ($depth <= 0) return '1.0';
    if ($depth === 1) return '0.8';
    if ($depth === 2) return '0.6';
    return '0.5';
}

/** Sensible sitemap change frequency for a page at the given depth. */
function seo_default_changefreq($depth) {
    return $depth <= 0 ? 'weekly' : 'monthly';
}

// ---------------------------------------------------------------------------
// Effective (resolved) SEO values
// ---------------------------------------------------------------------------

/**
 * Apply the documented fallbacks to a raw pages row.
 *
 * @return array{title:string,description:string,canonical:string,robots:string,keywords:string,og_title:string,og_description:string,url:string}
 */
function seo_effective(array $row) {
    $slug        = (string) ($row['slug'] ?? '');
    $title       = trim((string) ($row['title'] ?? ''));
    $metaTitle   = trim((string) ($row['meta_title'] ?? ''));
    $metaDesc    = trim((string) ($row['meta_description'] ?? ''));
    $canonical   = trim((string) ($row['canonical_url'] ?? ''));
    $robots      = trim((string) ($row['robots_meta'] ?? ''));
    $ogTitle     = trim((string) ($row['og_title'] ?? ''));
    $ogDesc      = trim((string) ($row['og_description'] ?? ''));

    if ($metaTitle === '') $metaTitle = $title !== '' ? $title . ' | VALUNXT Capital' : 'VALUNXT Capital';
    if ($canonical === '') $canonical = seo_page_url($slug);
    if (!in_array($robots, seo_robots_options(), true)) $robots = 'index, follow';
    if ($ogTitle === '') $ogTitle = $metaTitle;
    if ($ogDesc === '')  $ogDesc  = $metaDesc;

    return [
        'title'          => $metaTitle,
        'description'    => $metaDesc,
        'canonical'      => $canonical,
        'robots'         => $robots,
        'keywords'       => trim((string) ($row['meta_keywords'] ?? '')),
        'og_title'       => $ogTitle,
        'og_description' => $ogDesc,
        'url'            => seo_page_url($slug),
    ];
}

// ---------------------------------------------------------------------------
// Sitemap generation
// ---------------------------------------------------------------------------

/**
 * Rows eligible for the sitemap: published, flagged for inclusion and not
 * marked noindex.
 */
function seo_sitemap_rows() {
    return db()->query(
        "SELECT * FROM pages
         WHERE status = 'published'
           AND in_sitemap = 1
           AND robots_meta NOT LIKE 'noindex%'
         ORDER BY priority DESC, slug ASC"
    )->fetchAll();
}

/**
 * Write /sitemap.xml from the current page set.
 *
 * @return array{ok:bool, count:int, path:string, error:string}
 */
function seo_generate_sitemap() {
    $rows = seo_sitemap_rows();

    $xml  = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
    foreach ($rows as $r) {
        $eff  = seo_effective($r);
        $loc  = $eff['canonical'] !== '' ? $eff['canonical'] : $eff['url'];
        $when = strtotime((string) ($r['updated_at'] ?? '')) ?: time();
        $xml .= "    <url>\n";
        $xml .= '        <loc>' . htmlspecialchars($loc, ENT_XML1 | ENT_QUOTES, 'UTF-8') . "</loc>\n";
        $xml .= '        <lastmod>' . date('Y-m-d', $when) . "</lastmod>\n";
        $xml .= '        <changefreq>' . htmlspecialchars((string) $r['changefreq'], ENT_XML1, 'UTF-8') . "</changefreq>\n";
        $xml .= '        <priority>' . number_format((float) $r['priority'], 1) . "</priority>\n";
        $xml .= "    </url>\n";
    }
    $xml .= '</urlset>' . "\n";

    $path = seo_sitemap_path();
    if (@file_put_contents($path, $xml, LOCK_EX) === false) {
        return ['ok' => false, 'count' => 0, 'path' => $path,
                'error' => 'Could not write ' . $path . '. Check folder permissions.'];
    }

    $count = count($rows);
    try {
        seo_setting_set('sitemap_generated_at', date('Y-m-d H:i:s'));
        seo_setting_set('sitemap_url_count', (string) $count);
    } catch (Throwable $e) { /* non-fatal */ }

    return ['ok' => true, 'count' => $count, 'path' => $path, 'error' => ''];
}

// ---------------------------------------------------------------------------
// Front-end cache
// ---------------------------------------------------------------------------

/**
 * Write /data/seo/seo-map.php — a plain PHP array of resolved SEO values keyed
 * by slug. The public site reads this file instead of the database so page
 * views stay fast and keep working if MySQL is unavailable.
 *
 * @return array{ok:bool, count:int, path:string, error:string}
 */
function seo_write_cache() {
    $rows = db()->query("SELECT * FROM pages ORDER BY slug ASC")->fetchAll();

    $map = [];
    foreach ($rows as $r) {
        $eff = seo_effective($r);
        $map[(string) $r['slug']] = [
            'title'          => $eff['title'],
            'description'    => $eff['description'],
            // Only an explicitly set canonical is cached; when it is blank the
            // front end derives one from the live request, so the same cache
            // file stays correct on localhost and in production.
            'canonical'      => trim((string) $r['canonical_url']),
            'robots'         => $r['status'] === 'published' ? $eff['robots'] : 'noindex, nofollow',
            'keywords'       => $eff['keywords'],
            'og_title'       => $eff['og_title'],
            'og_description' => $eff['og_description'],
        ];
    }

    $path = seo_cache_path();
    $dir  = dirname($path);
    if (!is_dir($dir) && !@mkdir($dir, 0775, true) && !is_dir($dir)) {
        return ['ok' => false, 'count' => 0, 'path' => $path,
                'error' => 'Could not create ' . $dir . '.'];
    }

    $php  = "<?php\n";
    $php .= "/**\n * Generated by the VALUNXT Capital admin panel — do not edit by hand.\n";
    $php .= " * Rewritten automatically whenever page SEO settings change.\n";
    $php .= ' * Last written: ' . date('Y-m-d H:i:s') . "\n */\n";
    $php .= 'return ' . var_export($map, true) . ";\n";

    if (@file_put_contents($path, $php, LOCK_EX) === false) {
        return ['ok' => false, 'count' => 0, 'path' => $path,
                'error' => 'Could not write ' . $path . '.'];
    }
    if (function_exists('opcache_invalidate')) @opcache_invalidate($path, true);

    return ['ok' => true, 'count' => count($map), 'path' => $path, 'error' => ''];
}

/**
 * Regenerate every derived artefact. Called after any page create, update,
 * slug change, publish/unpublish or delete.
 *
 * @return array{ok:bool, count:int, errors:string[]}
 */
function seo_regenerate() {
    $errors = [];
    $map = seo_write_cache();
    if (!$map['ok']) $errors[] = $map['error'];
    $sm  = seo_generate_sitemap();
    if (!$sm['ok']) $errors[] = $sm['error'];

    return ['ok' => empty($errors), 'count' => $sm['count'], 'errors' => $errors];
}

// ---------------------------------------------------------------------------
// Page files: scaffolding, renaming, internal links
// ---------------------------------------------------------------------------

/** Absolute directory on disk for a slug. */
function seo_slug_dir($slug) {
    $slug = trim((string) $slug, '/');
    return $slug === '' ? seo_root() : seo_root() . '/' . $slug;
}

/** Guard against path traversal: the target must stay inside the site root. */
function seo_path_is_safe($path) {
    $root = seo_root();
    $norm = str_replace('\\', '/', $path);
    return strpos($norm, $root . '/') === 0 && strpos($norm, '..') === false;
}

/**
 * Create the folder + index.php for a brand-new CMS page, using the shared
 * page-hero partial so it matches the rest of the site.
 *
 * @return array{ok:bool, file:string, error:string}
 */
function seo_scaffold_page($slug, $title, $description, $heroImage = '/assets/content/uploads/banners/about-us.webp') {
    $slug = trim((string) $slug, '/');
    if ($slug === '') return ['ok' => false, 'file' => '', 'error' => 'A new page needs a slug.'];

    $dir = seo_slug_dir($slug);
    if (!seo_path_is_safe($dir)) return ['ok' => false, 'file' => '', 'error' => 'Invalid page location.'];
    if (is_file($dir . '/index.php')) {
        return ['ok' => false, 'file' => '', 'error' => 'A page already exists at /' . $slug . '/.'];
    }
    if (!is_dir($dir) && !@mkdir($dir, 0775, true) && !is_dir($dir)) {
        return ['ok' => false, 'file' => '', 'error' => 'Could not create the folder for /' . $slug . '/.'];
    }

    $postId   = 9000 + (int) (crc32($slug) % 900);
    $heroName = seo_title_from_meta($title, $slug);
    $path     = '/' . $slug . '/';

    $php  = "<?php\n";
    $php .= "\$__r = __DIR__; while (!is_file(\$__r.'/config.php') && dirname(\$__r) !== \$__r) \$__r = dirname(\$__r);\n";
    $php .= "require \$__r.'/config.php';\n";
    $php .= "\$PAGE = array (\n";
    $php .= "  'title' => " . var_export($title, true) . ",\n";
    $php .= "  'desc' => " . var_export($description, true) . ",\n";
    $php .= "  'og_image' => '/assets/content/uploads/2025/03/valunxt-og.png',\n";
    $php .= "  'body' => 'wp-singular page-template-default page page-id-{$postId} wp-custom-logo wp-embed-responsive wp-theme-execor full header-layout-logo-menu has-page-header no-middle-header responsive-layout vamtam-is-elementor elementor-active elementor-pro-active vamtam-font-smoothing layout-full elementor-default elementor-kit-5 elementor-page elementor-page-{$postId} elementor-page-3752',\n";
    $php .= "  'post_css' => array ( 0 => '5', 1 => '3837', 2 => '2094', 3 => '3752', 4 => '4557' ),\n";
    $php .= "  'header' => '3837',\n";
    $php .= "  'footer' => '2094',\n";
    $php .= "  'canvas' => false,\n";
    $php .= "  'post_id' => {$postId},\n";
    $php .= "  'hero_title' => " . var_export($heroName, true) . ",\n";
    $php .= "  'hero_image' => " . var_export($heroImage, true) . ",\n";
    $php .= "  'active_nav' => array ( 0 => " . var_export($path, true) . " ),\n";
    $php .= "  'path' => " . var_export($path, true) . ",\n";
    $php .= ");\n";
    $php .= "require \$__r.'/includes/head.php';\n";
    $php .= "require \$__r.'/includes/header.php';\n";
    $php .= "require \$__r.'/includes/partials/page-hero.php';\n";
    $php .= "?>\n";
    $php .= "\n<?php require \$__r.'/includes/partials/subscribe-4557.php'; ?>\n\n";
    $php .= "\t\t\t</div><!-- #main -->\n\n\t\t</div>\n";
    $php .= "<?php require \$__r.'/includes/footer.php'; ?>\n";

    $file = $dir . '/index.php';
    if (@file_put_contents($file, $php, LOCK_EX) === false) {
        return ['ok' => false, 'file' => '', 'error' => 'Could not write ' . $file . '.'];
    }
    return ['ok' => true, 'file' => $file, 'error' => ''];
}

/**
 * Move a page folder when its slug changes and fix the `path` / `active_nav`
 * values inside the moved index.php.
 *
 * @return array{ok:bool, moved:bool, error:string}
 */
function seo_move_page_dir($oldSlug, $newSlug) {
    $oldSlug = trim((string) $oldSlug, '/');
    $newSlug = trim((string) $newSlug, '/');
    if ($oldSlug === '' || $newSlug === '' || $oldSlug === $newSlug) {
        return ['ok' => true, 'moved' => false, 'error' => ''];
    }

    $from = seo_slug_dir($oldSlug);
    $to   = seo_slug_dir($newSlug);
    if (!is_dir($from)) return ['ok' => true, 'moved' => false, 'error' => ''];
    if (!seo_path_is_safe($from) || !seo_path_is_safe($to)) {
        return ['ok' => false, 'moved' => false, 'error' => 'Invalid page location.'];
    }
    if (file_exists($to)) {
        return ['ok' => false, 'moved' => false, 'error' => 'A folder already exists at /' . $newSlug . '/.'];
    }

    $parent = dirname($to);
    if (!is_dir($parent) && !@mkdir($parent, 0775, true) && !is_dir($parent)) {
        return ['ok' => false, 'moved' => false, 'error' => 'Could not create the parent folder for /' . $newSlug . '/.'];
    }
    if (!@rename($from, $to)) {
        return ['ok' => false, 'moved' => false, 'error' => 'Could not move the page folder on disk.'];
    }

    // Rewrite the stored path inside every index.php under the moved folder.
    foreach (seo_php_files($to) as $file) {
        $src = (string) @file_get_contents($file);
        $new = str_replace(["'/{$oldSlug}/", "\"/{$oldSlug}/"], ["'/{$newSlug}/", "\"/{$newSlug}/"], $src);
        if ($new !== $src) @file_put_contents($file, $new, LOCK_EX);
    }

    return ['ok' => true, 'moved' => true, 'error' => ''];
}

/** Every .php file under a directory (or the single file itself). */
function seo_php_files($dir) {
    $out = [];
    if (is_file($dir)) return [$dir];
    if (!is_dir($dir)) return $out;
    $it = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS)
    );
    foreach ($it as $f) {
        if ($f->isFile() && strtolower($f->getExtension()) === 'php') {
            $out[] = str_replace('\\', '/', $f->getPathname());
        }
    }
    return $out;
}

/**
 * Rewrite internal links after a slug change. Matches the quoted path forms
 * the templates use — href="<?= BASE ?>/old/…" and 'active_nav' => '/old/…' —
 * so descendant URLs are updated too.
 *
 * @return int number of files changed
 */
function seo_update_internal_links($oldSlug, $newSlug) {
    $oldSlug = trim((string) $oldSlug, '/');
    $newSlug = trim((string) $newSlug, '/');
    if ($oldSlug === '' || $newSlug === '' || $oldSlug === $newSlug) return 0;

    $root     = seo_root();
    $excluded = seo_excluded_dirs();
    $changed  = 0;

    $search  = ["\"/{$oldSlug}/", "'/{$oldSlug}/"];
    $replace = ["\"/{$newSlug}/", "'/{$newSlug}/"];

    $files = [];
    foreach ((array) @scandir($root) as $entry) {
        if ($entry === '.' || $entry === '..') continue;
        $path = $root . '/' . $entry;
        if (is_file($path) && strtolower(pathinfo($path, PATHINFO_EXTENSION)) === 'php') {
            $files[] = $path;
        } elseif (is_dir($path) && $entry[0] !== '.' && !in_array(strtolower($entry), $excluded, true)) {
            $files = array_merge($files, seo_php_files($path));
        }
    }
    // The shared header/footer partials carry the main navigation links.
    $files = array_merge($files, seo_php_files($root . '/includes'));

    foreach (array_unique($files) as $file) {
        $src = (string) @file_get_contents($file);
        if ($src === '' || strpos($src, "/{$oldSlug}/") === false) continue;
        $new = str_replace($search, $replace, $src);
        if ($new !== $src && @file_put_contents($file, $new, LOCK_EX) !== false) $changed++;
    }

    return $changed;
}

/**
 * The URL base the .htaccess redirect rules are written against. The deployed
 * site and the working copy live in differently named folders, so we reuse
 * whatever base the existing rules already use.
 */
function seo_htaccess_base() {
    $file = seo_root() . '/.htaccess';
    if (is_file($file)) {
        $src = (string) @file_get_contents($file);
        if (preg_match('~^RedirectMatch\s+301\s+\^(/[^/\s]+)/~m', $src, $m)) {
            return $m[1];
        }
    }
    return SITE_BASE ?: '';
}

/**
 * Append a 301 from the old slug to the new one so existing inbound links and
 * search-engine results keep working.
 *
 * @return bool whether the rule was written
 */
function seo_add_redirect($oldSlug, $newSlug) {
    $oldSlug = trim((string) $oldSlug, '/');
    $newSlug = trim((string) $newSlug, '/');
    if ($oldSlug === '' || $newSlug === '' || $oldSlug === $newSlug) return false;

    $file = seo_root() . '/.htaccess';
    if (!is_file($file) || !is_writable($file)) return false;

    $base = seo_htaccess_base();
    $rule = 'RedirectMatch 301 ^' . $base . '/' . preg_quote($oldSlug, '~') . '(/.*)?$ '
          . $base . '/' . $newSlug . '/';

    $src = (string) @file_get_contents($file);
    if (strpos($src, $rule) !== false) return true;

    $block = "\n# ---- Slug changed via admin panel on " . date('Y-m-d') . " ----\n" . $rule . "\n";
    return @file_put_contents($file, $block, FILE_APPEND | LOCK_EX) !== false;
}

/**
 * Delete a CMS-created page folder. Only ever removes directories the CMS
 * itself scaffolded, and never touches anything outside the site root.
 *
 * @return bool
 */
function seo_delete_page_dir($slug) {
    $dir = seo_slug_dir($slug);
    if (trim((string) $slug, '/') === '' || !seo_path_is_safe($dir) || !is_dir($dir)) return false;

    $it = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );
    foreach ($it as $f) {
        $f->isDir() ? @rmdir($f->getPathname()) : @unlink($f->getPathname());
    }
    return @rmdir($dir);
}

// ---------------------------------------------------------------------------
// Convenience accessors used by the admin screens
// ---------------------------------------------------------------------------

/** Fetch one page row by id, or null. */
function seo_page($id) {
    $stmt = db()->prepare("SELECT * FROM pages WHERE id = ? LIMIT 1");
    $stmt->execute([(int) $id]);
    $row = $stmt->fetch();
    return $row ?: null;
}

/** Every page row, ordered for the admin listing. */
function seo_all_pages() {
    return db()->query("SELECT * FROM pages " . seo_pages_order())->fetchAll();
}

/** Shared ORDER BY for the admin listing: home first, then alphabetical. */
function seo_pages_order() {
    return "ORDER BY slug = '' DESC, slug ASC";
}

/**
 * WHERE clause + bound values for an optional search term. Matching is on the
 * page title, slug and meta title.
 *
 * @return array{0:string, 1:array}
 */
function seo_pages_filter($q) {
    $q = trim((string) $q);
    if ($q === '') return ['', []];
    $like = '%' . str_replace(['\\', '%', '_'], ['\\\\', '\\%', '\\_'], $q) . '%';
    return ['WHERE (title LIKE ? OR slug LIKE ? OR meta_title LIKE ?)', [$like, $like, $like]];
}

/** How many pages match the search term. */
function seo_pages_count($q = '') {
    [$where, $args] = seo_pages_filter($q);
    $stmt = db()->prepare("SELECT COUNT(*) FROM pages $where");
    $stmt->execute($args);
    return (int) $stmt->fetchColumn();
}

/**
 * One page of the admin listing.
 *
 * @param string $q      search term ('' for all)
 * @param int    $limit  rows per page
 * @param int    $offset rows to skip
 */
function seo_pages_slice($q = '', $limit = 10, $offset = 0) {
    [$where, $args] = seo_pages_filter($q);
    $limit  = max(1, (int) $limit);
    $offset = max(0, (int) $offset);
    // LIMIT/OFFSET are cast to int above, so they are safe to interpolate —
    // MySQL will not accept them as bound parameters in emulation-off mode.
    $stmt = db()->prepare("SELECT * FROM pages $where " . seo_pages_order() . " LIMIT $limit OFFSET $offset");
    $stmt->execute($args);
    return $stmt->fetchAll();
}

/** Counts used by the pages listing and the sitemap screen. */
function seo_stats() {
    $pdo = db();
    return [
        'total'     => (int) $pdo->query("SELECT COUNT(*) FROM pages")->fetchColumn(),
        'published' => (int) $pdo->query("SELECT COUNT(*) FROM pages WHERE status = 'published'")->fetchColumn(),
        'draft'     => (int) $pdo->query("SELECT COUNT(*) FROM pages WHERE status <> 'published'")->fetchColumn(),
        'sitemap'   => count(seo_sitemap_rows()),
        'noindex'   => (int) $pdo->query("SELECT COUNT(*) FROM pages WHERE robots_meta LIKE 'noindex%'")->fetchColumn(),
    ];
}

seo_bootstrap();
