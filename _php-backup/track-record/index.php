<?php
$__r = __DIR__; while (!is_file($__r.'/config.php') && dirname($__r) !== $__r) $__r = dirname($__r);
require $__r.'/config.php';

/* data/track-record.php ships empty on purpose — see the note at the top of
   that file. A track-record page whose job is to substantiate figures cannot
   be published with figures nobody has substantiated, so until `metrics` is
   populated this URL 404s. Fill it in and the page goes live. */
$TRACK = require $__r.'/data/track-record.php';
if (empty($TRACK['metrics'])) {
    header('HTTP/1.1 404 Not Found');
    require $__r.'/404/index.php';
    exit;
}

$PAGE = array (
  'title' => 'Track Record | VALUNXT Capital',
  'desc' => 'The engagements and figures behind VALUNXT Capital — each metric stated with the entity, period and basis on which it is counted.',
  'og_image' => '/assets/content/uploads/2025/03/valunxt-og.png',
  'body' => 'wp-singular page-template-default page page-id-9304 page-parent wp-custom-logo wp-embed-responsive wp-theme-execor full header-layout-logo-menu has-page-header no-middle-header responsive-layout vamtam-is-elementor elementor-active elementor-pro-active vamtam-wc-cart-empty wc-product-gallery-slider-active vamtam-font-smoothing layout-full elementor-default elementor-kit-5 elementor-page elementor-page-9304 elementor-page-3752',
  'post_css' => array('5','3837','2094','3752','4557'),
  'header' => '3837',
  'footer' => '2094',
  'canvas' => false,
  'post_id' => 9304,
  'post_title' => 'Track Record',
  'post_excerpt' => 'The engagements and figures behind the group.',
  'active_nav' => array('/track-record/'),
  'inline_css' => '',
  'hero_title' => 'Track Record',
  'hero_image' => '/assets/content/uploads/banners/clients.webp',
  'path' => '/track-record/',
);
require $__r.'/includes/head.php';
require $__r.'/includes/header.php';
require $__r.'/includes/partials/page-hero.php';
require $__r.'/includes/partials/track-record-content.php';
require $__r.'/includes/partials/subscribe-4557.php';
require $__r.'/includes/footer.php';
