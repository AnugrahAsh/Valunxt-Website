<?php
// Auto-detect the base URL (folder under the web root) so the site is portable.
if (!defined('BASE')) {
    $docroot = str_replace('\\', '/', rtrim($_SERVER['DOCUMENT_ROOT'] ?? '', '/'));
    $appdir  = str_replace('\\', '/', __DIR__);
    $base = ($docroot && strpos($appdir, $docroot) === 0) ? substr($appdir, strlen($docroot)) : '';
    define('BASE', rtrim($base, '/'));
}
if (!function_exists('h')) { function h($s){ return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); } }
// Canonical site facts (markets, offices, group companies, enquiry address).
require_once __DIR__ . '/includes/site-data.php';
// Country editions: /en-in/ (India) and /en-ae/ (UAE).
require_once __DIR__ . '/includes/region.php';

if (!defined('REGION')) {
    /** The market this request belongs to: 'en-in' | 'en-ae'. */
    define('REGION', vxn_region_detect());
    /** BASE plus the region prefix — the root of the current edition. */
    define('RBASE', BASE . '/' . REGION);

    // Remember the market the visitor is actually browsing, so an unprefixed
    // entry point (a bookmark, an old inbound link, the root gateway) puts them
    // back where they were rather than in the default edition.
    if (vxn_region_in_url() !== '' && (($_COOKIE['vxn_region'] ?? '') !== REGION) && !headers_sent()) {
        setcookie('vxn_region', REGION, time() + 31536000, (BASE === '' ? '/' : BASE . '/'));
    }

    // Region-prefixed URLs keep their prefix as the visitor clicks around: the
    // finished HTML is filtered so internal page links carry it. See
    // vxn_region_localise_links().
    if (vxn_region_in_url() !== '') {
        ob_start('vxn_region_localise_links');
    } else {
        // Every page now lives inside an edition, so a bare URL — an old inbound
        // link, a bookmark from before the split — is forwarded to the same page
        // in the visitor's market rather than being served prefix-less. 302, not
        // 301: which edition answers depends on the visitor.
        //
        // Left alone: anything but a plain GET (form-handler.php posts here),
        // requests for a file rather than a page, and internal error-document
        // sub-requests, which must keep their own status.
        $__m  = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
        $__p  = vxn_request_path();
        $__st = (string) ($_SERVER['REDIRECT_STATUS'] ?? '200');
        if ($__m === 'GET' && $__st === '200' && !headers_sent()
            && strpos(basename($__p), '.') === false) {
            $__qs = (string) ($_SERVER['QUERY_STRING'] ?? '');
            header('Location: ' . BASE . '/' . REGION . $__p . ($__qs !== '' ? '?' . $__qs : ''), true, 302);
            exit;
        }
    }
}
