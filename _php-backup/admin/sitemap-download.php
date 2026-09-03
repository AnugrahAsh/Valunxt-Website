<?php
/**
 * Admin — download sitemap.xml.
 *
 * Streams the generated sitemap as a file attachment. Signed-in users only,
 * and the path is fixed rather than taken from the request.
 */
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/includes/seo-lib.php';
require_login();

$file = seo_sitemap_path();

if (!is_file($file)) {
    $_SESSION['flash_err'] = 'No sitemap has been generated yet. Use “Generate Sitemap” first.';
    header('Location: ' . admin_url('sitemap.php'));
    exit;
}

header('Content-Type: application/xml; charset=UTF-8');
header('Content-Disposition: attachment; filename="sitemap.xml"');
header('Content-Length: ' . filesize($file));
header('Cache-Control: no-store');
readfile($file);
exit;
