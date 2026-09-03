<?php
$__r = __DIR__; while (!is_file($__r.'/config.php') && dirname($__r) !== $__r) $__r = dirname($__r);
require $__r.'/config.php';

/* The page is only a page once there are people on it. data/leadership.php
   ships empty on purpose — see the note at the top of that file — so until it
   is populated this URL 404s rather than publishing an empty team page or,
   worse, invented biographies. Add entries there and the page goes live. */
$LEADERSHIP = require $__r.'/data/leadership.php';
if (!is_array($LEADERSHIP) || !$LEADERSHIP) {
    header('HTTP/1.1 404 Not Found');
    require $__r.'/404/index.php';
    exit;
}

$PAGE = array (
  'title' => 'Leadership | VALUNXT Capital',
  'desc' => 'The senior practitioners across the VALUNXT group — their qualifications, registrations, and the mandates they lead across India and the UAE.',
  'og_image' => '/assets/content/uploads/2025/03/valunxt-og.png',
  'body' => 'wp-singular page-template-default page page-id-9303 page-child wp-custom-logo wp-embed-responsive wp-theme-execor full header-layout-logo-menu has-page-header no-middle-header responsive-layout vamtam-is-elementor elementor-active elementor-pro-active vamtam-wc-cart-empty wc-product-gallery-slider-active vamtam-font-smoothing layout-full elementor-default elementor-kit-5 elementor-page elementor-page-9303 elementor-page-3752',
  'post_css' => array('5','3837','2094','3752','4557'),
  'header' => '3837',
  'footer' => '2094',
  'canvas' => false,
  'post_id' => 9303,
  'post_title' => 'Leadership',
  'post_excerpt' => 'The people accountable for the advice.',
  'active_nav' => array('/about/'),
  'inline_css' => '',
  'hero_title' => 'Leadership',
  'hero_image' => '/assets/content/uploads/banners/about-us.webp',
  'path' => '/about/leadership/',
);
require $__r.'/includes/head.php';
require $__r.'/includes/header.php';
require $__r.'/includes/partials/page-hero.php';
require $__r.'/includes/partials/leadership-content.php';
require $__r.'/includes/partials/subscribe-4557.php';
require $__r.'/includes/footer.php';
