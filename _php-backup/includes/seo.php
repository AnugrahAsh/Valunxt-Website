<?php
/**
 * VALUNXT Capital — front-end SEO resolver.
 *
 * Reads the SEO metadata the admin panel manages and merges it over whatever
 * the page template declared in $PAGE. The values come from
 * /data/seo/seo-map.php, a plain PHP array the admin panel rewrites on every
 * save — so a page view never opens a database connection and the site keeps
 * rendering normally if the CMS or MySQL is unavailable.
 *
 * Used by includes/head.php; there is nothing to call from a page template.
 */

/** The generated SEO map, loaded once per request. */
function vxn_seo_map() {
    static $map = null;
    if ($map === null) {
        $file = __DIR__ . '/../data/seo/seo-map.php';
        $map  = is_file($file) ? @include $file : [];
        if (!is_array($map)) $map = [];
    }
    return $map;
}

/** Normalise "/about/careers/" to the "about/careers" key used in the map. */
function vxn_seo_key($path) {
    return trim((string) $path, '/');
}

/**
 * The admin-managed row for a path, region-aware.
 *
 * The CMS keys pages by their unprefixed path ("services", "about/careers")
 * because that is the page that actually exists on disk; the country editions
 * put a prefix in front of it. So: look for a row keyed to this exact URL first
 * — that is how a market gets its own title — and fall back to the shared row
 * for the same page underneath.
 *
 * The one path that must not fall back blindly is a region home: "en-ae" and ""
 * are different pages, not the same page in two markets. Only the India home
 * inherits the legacy home row, because it *is* the page that used to live at
 * the root; the UAE home falls back to its own template's $PAGE values until
 * the CMS is given an "en-ae" row.
 */
function vxn_seo_resolve_row($path) {
    $map = vxn_seo_map();
    $key = vxn_seo_key($path);

    if (isset($map[$key])) return $map[$key];

    if (function_exists('vxn_region_exists')) {
        $first = strtok($key, '/');
        if (vxn_region_exists($first)) {
            $rest = (string) substr($key, strlen($first) + 1);
            if ($rest !== '')            return $map[$rest] ?? [];   // shared inner page
            if ($first === 'en-in')      return $map[''] ?? [];       // the original home
        }
    }
    return [];
}

/** Scheme + host for the current request. */
function vxn_seo_origin() {
    $https  = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
           || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
    return ($https ? 'https' : 'http') . '://' . ($_SERVER['HTTP_HOST'] ?? 'localhost');
}

/** Allowed robots directives. Anything else falls back to "index, follow". */
function vxn_seo_robots_ok($value) {
    return in_array($value, ['index, follow', 'noindex, follow', 'index, nofollow', 'noindex, nofollow'], true);
}

/**
 * Resolve the SEO values for the page currently being rendered.
 *
 * Precedence: admin-managed value → the page template's own $PAGE value →
 * a sensible site-wide default.
 *
 * @param  array $PAGE the page template's $PAGE array
 * @return array{title:string,description:string,canonical:string,robots:string,keywords:string,og_title:string,og_description:string}
 */
function vxn_seo(array $PAGE) {
    $path = (string) ($PAGE['path'] ?? '/');

    // A shared page still declares its unprefixed path ("/services/"), but when
    // it was reached through a country edition the canonical URL — and the row
    // the CMS may have for that market — is the prefixed one.
    $region = function_exists('vxn_region_in_url') ? vxn_region_in_url() : '';
    if ($region !== '' && strpos($path, '/' . $region) !== 0) {
        $path = '/' . $region . ($path === '' ? '/' : $path);
    }

    $seo = vxn_seo_resolve_row($path);

    $base = defined('BASE') ? BASE : '';
    $fallbackCanonical = vxn_seo_origin() . $base . ($path !== '' ? $path : '/');

    $title = trim((string) ($seo['title'] ?? ''));
    if ($title === '') $title = trim((string) ($PAGE['title'] ?? ''));
    if ($title === '') $title = 'VALUNXT Capital';

    $desc = trim((string) ($seo['description'] ?? ''));
    if ($desc === '') $desc = trim((string) ($PAGE['desc'] ?? ''));

    $canonical = trim((string) ($seo['canonical'] ?? ''));
    if ($canonical === '') $canonical = $fallbackCanonical;

    // A page outside the CMS (the 404 template, for instance) can still set its
    // own directive with $PAGE['robots'].
    $robots = trim((string) ($seo['robots'] ?? ''));
    if (!vxn_seo_robots_ok($robots)) $robots = trim((string) ($PAGE['robots'] ?? ''));
    if (!vxn_seo_robots_ok($robots)) $robots = 'index, follow';

    $ogTitle = trim((string) ($seo['og_title'] ?? '')) ?: $title;
    $ogDesc  = trim((string) ($seo['og_description'] ?? '')) ?: $desc;

    return [
        'title'          => $title,
        'description'    => $desc,
        'canonical'      => $canonical,
        'robots'         => $robots,
        'keywords'       => trim((string) ($seo['keywords'] ?? '')),
        'og_title'       => $ogTitle,
        'og_description' => $ogDesc,
    ];
}
