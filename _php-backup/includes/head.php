<?php
if (!defined('BASE')) {
    require __DIR__ . '/../config.php';
}
// Merge the SEO metadata managed in the admin panel over the page's own $PAGE
// values. Falls back to $PAGE entirely when the CMS has no row for this URL.
require_once __DIR__ . '/seo.php';
$SEO = vxn_seo($PAGE ?? []);
?>
<!DOCTYPE html>
<html lang="<?= h(vxn_region_data()['lang']) ?>">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="<?= h($SEO['robots']) ?>">
    <script>
        /* Elementor ships `.elementor-invisible { visibility: hidden }` and
           relies on JavaScript to remove the class once an element scrolls
           into view. On this static conversion that reveal is reimplemented in
           includes/scripts.php — but until it runs, most of the copy on
           Services, About, Our Group and Clients is visibility:hidden. Anything
           that reads the page without executing our scripts (crawlers that skip
           JS, reader modes, a blocked or failed script) therefore saw only the
           handful of blocks that carry no entrance animation.

           Marking the document here means the hide rule applies only when JS is
           present to undo it. Without JS the content is simply visible. This
           runs before any stylesheet so there is no flash of hidden content. */
        document.documentElement.className += ' vxn-js';
    </script>
    <noscript>
        <style>.elementor-invisible{visibility:visible !important;}</style>
    </noscript>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3LN0QDVS2F"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'G-3LN0QDVS2F');
    </script>
    <title><?= h($SEO['title']) ?></title>
    <?php if ($SEO['description'] !== ''): ?>
        <meta name="description" content="<?= h($SEO['description']) ?>">
    <?php endif; ?>
    <?php if ($SEO['keywords'] !== ''): ?>
        <meta name="keywords" content="<?= h($SEO['keywords']) ?>">
    <?php endif; ?>
    <?php $__canonical = $SEO['canonical']; ?>
    <link rel="canonical" href="<?= h($__canonical) ?>">
    <?php
    // Country editions: tell search engines that this page exists once per
    // market, and which one this URL is. x-default points at the gateway, which
    // routes the visitor to their own edition.
    $__origin = vxn_seo_origin();
    foreach (vxn_regions() as $__slug => $__reg): ?>
        <link rel="alternate" hreflang="<?= h($__reg['lang']) ?>" href="<?= h($__origin . rswap($__slug)) ?>">
    <?php endforeach; ?>
    <link rel="alternate" hreflang="x-default" href="<?= h($__origin . BASE . '/') ?>">
    <meta property="og:locale" content="<?= h(str_replace('-', '_', vxn_region_data()['lang'])) ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= h($SEO['og_title']) ?>">
    <?php if ($SEO['og_description'] !== ''): ?>
        <meta property="og:description" content="<?= h($SEO['og_description']) ?>">
    <?php endif; ?>
    <meta property="og:url" content="<?= h($__canonical) ?>">
    <meta property="og:site_name" content="VALUNXT Capital">
    <?php if (!empty($PAGE['og_image'])): ?>
        <meta property="og:image" content="<?= h(BASE . $PAGE['og_image']) ?>">
    <?php endif; ?>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?= h($SEO['og_title']) ?>">
    <?php if ($SEO['og_description'] !== ''): ?>
        <meta name="twitter:description" content="<?= h($SEO['og_description']) ?>">
    <?php endif; ?>
    <?php /* The SVG is the icon proper; the PNGs are for Safari and the iOS home
             screen, which do not take an SVG favicon. They are rasterised from
             the same file — see assets/content/uploads/logo/. */ ?>
    <link rel="icon" href="<?= BASE ?>/assets/content/uploads/logo/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="<?= BASE ?>/assets/content/uploads/logo/favicon-32.png" sizes="32x32" type="image/png" />
    <link rel="icon" href="<?= BASE ?>/assets/content/uploads/logo/favicon-192.png" sizes="192x192" type="image/png" />
    <link rel="icon" href="<?= BASE ?>/assets/content/uploads/logo/favicon-512.png" sizes="512x512" type="image/png" />
    <link rel="apple-touch-icon" href="<?= BASE ?>/assets/content/uploads/logo/apple-touch-icon.png" />
    <meta name="theme-color" content="#0053B7" />
    <link rel="stylesheet" href="<?= BASE ?>/assets/lib/css/dist/block-library/style.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/uploads/elementor/google-fonts/css/dmsans.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/uploads/elementor/google-fonts/css/forum.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/uploads/elementor/google-fonts/css/nothingyoucoulddo.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/frontend.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/conditionals/e-swiper.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/modules/motion-fx.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/modules/sticky.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-blockquote.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-form.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-loop-carousel.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-loop-common.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-loop-grid.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-lottie.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-nested-carousel.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor-pro/assets/css/widget-post-info.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-divider.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-google_maps.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-heading.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-icon-box.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-icon-list.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-image.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-menu-anchor.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-nested-accordion.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-nested-tabs.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-social-icons.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-spacer.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/css/widget-toggle.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/animations/styles/bounceInDown.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/animations/styles/e-animation-sink.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/animations/styles/slideInLeft.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/animations/styles/slideInRight.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/animations/styles/slideInUp.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/animations/styles/zoomIn.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/uploads/elementor/custom-icons/theme-icons/style.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/themes/execor/vamtam/assets/css/dist/elementor/elementor-all.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-below-max.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-max.css" media="all">
    <link rel="stylesheet" href="<?= BASE ?>/assets/content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-small.css" media="all">
    <style id="vamtam-theme-options">
        body {
            --vamtam-body-link-regular: #000000;
            --vamtam-body-link-visited: #000000;
            --vamtam-body-background-color: #FFFFFF;
            --vamtam-input-border-radius: 4px 4px 4px 4px;
            --vamtam-input-border-color: #0000001A;
            --vamtam-btn-text-color: #0E355F;
            --vamtam-btn-hover-text-color: #F6F4EF;
            --vamtam-btn-bg-color: #0053B7;
            --vamtam-btn-hover-bg-color: #0E355F;
            --vamtam-btn-border-radius: 6px 6px 6px 6px;
            --vamtam-site-max-width: 1280px;
            --vamtam-icon-email: '\e912';
            --vamtam-icon-team: '\e913';
            --vamtam-icon-circular-geometric-1: '\e90c';
            --vamtam-icon-circular-geometric: '\e90d';
            --vamtam-icon-doppler-effect: '\e90f';
            --vamtam-icon-clock: '\e90e';
            --vamtam-icon-growth: '\e910';
            --vamtam-icon-secure: '\e911';
            --vamtam-icon-download: '\e90b';
            --vamtam-icon-arrow-left: '\e900';
            --vamtam-icon-arrow-right: '\e901';
            --vamtam-icon-arrow-down: '\e91a';
            --vamtam-icon-arrow-up: '\e902';
            --vamtam-icon-plus: '\e903';
            --vamtam-icon-close: '\e91b';
            --vamtam-icon-minus: '\e904';
            --vamtam-icon-menu: '\e91c';
            --vamtam-icon-chack: '\e905';
            --vamtam-icon-chack-circle: '\e906';
            --vamtam-icon-direction: '\e914';
            --vamtam-icon-care: '\e915';
            --vamtam-icon-picture: '\e916';
            --vamtam-icon-success: '\e917';
            --vamtam-icon-location: '\e907';
            --vamtam-icon-quote-left: '\e918';
            --vamtam-icon-quote-right: '\e919';
            --vamtam-icon-logo-sign: '\e909';
            --vamtam-icon-send: '\e90a';
            --vamtam-loading-animation: url('<?= BASE ?>/assets/content/themes/execor/vamtam/assets/images/loader-ring.gif');
        }
    </style>
    <style id="wp-img-auto-sizes-contain-inline-css">
        img:is([sizes=auto i], [sizes^="auto," i]) {
            contain-intrinsic-size: 3000px 1500px
        }

        /*# sourceURL=wp-img-auto-sizes-contain-inline-css */
    </style>
    <style id="classic-theme-styles-inline-css">
        /*! This file is auto-generated */
        .wp-block-button__link {
            color: #fff;
            background-color: #32373c;
            border-radius: 9999px;
            box-shadow: none;
            text-decoration: none;
            padding: calc(.667em + 2px) calc(1.333em + 2px);
            font-size: 1.125em
        }

        .wp-block-file__button {
            background: #32373c;
            color: #fff;
            text-decoration: none
        }

        /*# sourceURL=/wp-includes/css/classic-themes.min.css */
    </style>
    <style id="safe-svg-svg-icon-style-inline-css">
        .safe-svg-cover {
            text-align: center
        }

        .safe-svg-cover .safe-svg-inside {
            display: inline-block;
            max-width: 100%
        }

        .safe-svg-cover svg {
            fill: currentColor;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            width: 100%
        }

        /*# sourceURL=<?= BASE ?>/assets/content/plugins/safe-svg/dist/safe-svg-block-frontend.css */
    </style>
    <style id="global-styles-inline-css">
        :root {
            --wp--preset--aspect-ratio--square: 1;
            --wp--preset--aspect-ratio--4-3: 4/3;
            --wp--preset--aspect-ratio--3-4: 3/4;
            --wp--preset--aspect-ratio--3-2: 3/2;
            --wp--preset--aspect-ratio--2-3: 2/3;
            --wp--preset--aspect-ratio--16-9: 16/9;
            --wp--preset--aspect-ratio--9-16: 9/16;
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgb(252, 185, 0) 0%, rgb(255, 105, 0) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--font-size--small: 13px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 36px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgb(255, 255, 255), 6px 6px rgb(0, 0, 0);
            --wp--preset--shadow--crisp: 6px 6px 0px rgb(0, 0, 0);
        }

        :where(body) {
            margin: 0;
        }

        :where(.is-layout-flex) {
            gap: 0.5em;
        }

        :where(.is-layout-grid) {
            gap: 0.5em;
        }

        body .is-layout-flex {
            display: flex;
        }

        .is-layout-flex {
            flex-wrap: wrap;
            align-items: center;
        }

        .is-layout-flex> :is(*, div) {
            margin: 0;
        }

        body .is-layout-grid {
            display: grid;
        }

        .is-layout-grid> :is(*, div) {
            margin: 0;
        }

        body {
            padding-top: 0px;
            padding-right: 0px;
            padding-bottom: 0px;
            padding-left: 0px;
        }

        :root :where(.wp-element-button, .wp-block-button__link) {
            background-color: #32373c;
            border-width: 0;
            color: #fff;
            font-family: inherit;
            font-size: inherit;
            font-style: inherit;
            font-weight: inherit;
            letter-spacing: inherit;
            line-height: inherit;
            padding-top: calc(0.667em + 2px);
            padding-right: calc(1.333em + 2px);
            padding-bottom: calc(0.667em + 2px);
            padding-left: calc(1.333em + 2px);
            text-decoration: none;
            text-transform: inherit;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }

        :root :where(.wp-block-icon svg) {
            width: 24px;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        :where(.wp-block-term-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-term-template.is-layout-grid) {
            gap: 1.25em;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :root :where(.wp-block-pullquote) {
            font-size: 1.5em;
            line-height: 1.6;
        }

        /*# sourceURL=global-styles-inline-css */
    </style>
    <style id="vamtam-front-all-inline-css">
        @font-face {
            font-family: 'icomoon';
            src: url(<?= BASE ?>/assets/content/themes/execor/vamtam/assets/fonts/icons/icomoon.woff2) format('woff2'),
                url(<?= BASE ?>/assets/content/themes/execor/vamtam/assets/fonts/icons/icomoon.woff) format('woff'),
                url(<?= BASE ?>/assets/content/themes/execor/vamtam/assets/fonts/icons/icomoon.ttf) format('ttf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'vamtam-theme';
            src: url(<?= BASE ?>/assets/content/themes/execor/vamtam/assets/fonts/theme-icons/theme-icons.woff2) format('woff2'),
                url(<?= BASE ?>/assets/content/themes/execor/vamtam/assets/fonts/theme-icons/theme-icons.woff) format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        /*# sourceURL=vamtam-front-all-inline-css */
    </style>
    <style id="rocket-lazyrender-inline-css">
        [data-wpr-lazyrender] {
            content-visibility: auto;
        }
    </style>
    <?php foreach (($PAGE['post_css'] ?? []) as $__id): ?>
        <link rel="stylesheet" href="<?= BASE ?>/assets/content/uploads/elementor/css/post-<?= $__id ?>.css" media="all">
    <?php endforeach; ?>
    <?php if (!empty($PAGE['inline_css'])) echo str_replace('{{BASE}}', BASE, $PAGE['inline_css']); ?>
    <link rel="stylesheet" href="<?= BASE ?>/assets/css/valunxt-brand.css?v=157" media="all">
    <!-- intl-tel-input: international phone field with country code + flag dropdown (lead-capture forms) -->
    <link rel="stylesheet" href="<?= BASE ?>/assets/vendor/intl-tel-input/css/intlTelInput.min.css" media="all">
    <style id="vxn-intl-tel-overrides">
        /* Spacing under every form field label (site-wide). !important beats the
           high-specificity per-post Elementor rules (e.g. post-264.css sets 4px). */
        .elementor-field-label { padding-bottom: 10px !important; }
        /* Elementor lays each field group out as a flex row; a normal input has
           flex-basis:100% so it fills the row below its label. The intl-tel-input
           wrapper (.iti) replaces the input as the flex child, so it must take the
           same full width or it collapses to just the flag/dial-code width. */
        .elementor-field-group .iti { display: block; flex: 1 1 100%; width: 100%; max-width: 100%; }
        .iti input[type="tel"] { width: 100%; }
        .iti__country-list { z-index: 9999; text-align: left; color: #0E355F; }
        /* Client-side validation error state for lead-capture form fields. */
        .elementor-field-group.vxn-invalid input,
        .elementor-field-group.vxn-invalid .iti input[type="tel"] {
            border-color: #d9534f !important;
            box-shadow: 0 0 0 1px rgba(217, 83, 79, 0.35);
        }
        .vxn-field-error { display: block; margin-top: 6px; color: #d9534f; font-size: 12.5px; line-height: 1.35; }
    </style>
</head>

<body class="<?= h($PAGE['body'] ?? '') ?>">
    <div id="top"></div>