<?php
// Full-screen intro preloader (once per session) — must render first, right after <body>.
require __DIR__ . '/preloader.php';
// Site header: pick the captured Elementor header template for this page.
$__hv = $PAGE['header'] ?? 'none';
$__p  = __DIR__ . '/partials/header-' . $__hv . '.php';
if (is_file($__p)) require $__p;
?>
<div id="page" class="main-container">
