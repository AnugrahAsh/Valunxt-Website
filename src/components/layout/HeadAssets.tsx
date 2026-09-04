/**
 * Everything includes/head.php put inside <head>, in the same order.
 *
 * Next.js hoists <link>, <style> and <script> emitted from a Server Component
 * into the document head, so the stylesheet order the Elementor cascade depends
 * on is preserved exactly. Nothing here is restyled or reordered — the whole
 * point is that the rendered CSS is byte-for-byte the CSS the PHP build served.
 */
import { BASE } from '@/lib/region';
import type { PageConfig } from '@/lib/page-config';
import { siteScriptSources } from './SiteScripts';

/** The Elementor / theme / plugin stylesheets, in load order. */
const STYLESHEETS: string[] = [
  '/assets/lib/css/dist/block-library/style.min.css',
  '/assets/content/uploads/elementor/google-fonts/css/dmsans.css',
  '/assets/content/uploads/elementor/google-fonts/css/forum.css',
  '/assets/content/uploads/elementor/google-fonts/css/nothingyoucoulddo.css',
  '/assets/content/plugins/elementor/assets/css/frontend.min.css',
  '/assets/content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css',
  '/assets/content/plugins/elementor/assets/css/conditionals/e-swiper.min.css',
  '/assets/content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/modules/motion-fx.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/modules/sticky.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-blockquote.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-form.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-loop-carousel.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-loop-common.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-loop-grid.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-lottie.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-nested-carousel.min.css',
  '/assets/content/plugins/elementor-pro/assets/css/widget-post-info.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-divider.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-google_maps.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-heading.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-icon-box.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-icon-list.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-image.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-menu-anchor.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-nested-accordion.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-nested-tabs.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-social-icons.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-spacer.min.css',
  '/assets/content/plugins/elementor/assets/css/widget-toggle.min.css',
  '/assets/content/plugins/elementor/assets/lib/animations/styles/bounceInDown.min.css',
  '/assets/content/plugins/elementor/assets/lib/animations/styles/e-animation-sink.min.css',
  '/assets/content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css',
  '/assets/content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css',
  '/assets/content/plugins/elementor/assets/lib/animations/styles/slideInLeft.min.css',
  '/assets/content/plugins/elementor/assets/lib/animations/styles/slideInRight.min.css',
  '/assets/content/plugins/elementor/assets/lib/animations/styles/slideInUp.min.css',
  '/assets/content/plugins/elementor/assets/lib/animations/styles/zoomIn.min.css',
  '/assets/content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css',
  '/assets/content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css',
  '/assets/content/uploads/elementor/custom-icons/theme-icons/style.css',
  '/assets/content/themes/execor/vamtam/assets/css/dist/elementor/elementor-all.css',
  '/assets/content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-below-max.css',
  '/assets/content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-max.css',
  '/assets/content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-small.css',
];

const VAMTAM_THEME_OPTIONS = `
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
            --vamtam-icon-email: '\\e912';
            --vamtam-icon-team: '\\e913';
            --vamtam-icon-circular-geometric-1: '\\e90c';
            --vamtam-icon-circular-geometric: '\\e90d';
            --vamtam-icon-doppler-effect: '\\e90f';
            --vamtam-icon-clock: '\\e90e';
            --vamtam-icon-growth: '\\e910';
            --vamtam-icon-secure: '\\e911';
            --vamtam-icon-download: '\\e90b';
            --vamtam-icon-arrow-left: '\\e900';
            --vamtam-icon-arrow-right: '\\e901';
            --vamtam-icon-arrow-down: '\\e91a';
            --vamtam-icon-arrow-up: '\\e902';
            --vamtam-icon-plus: '\\e903';
            --vamtam-icon-close: '\\e91b';
            --vamtam-icon-minus: '\\e904';
            --vamtam-icon-menu: '\\e91c';
            --vamtam-icon-chack: '\\e905';
            --vamtam-icon-chack-circle: '\\e906';
            --vamtam-icon-direction: '\\e914';
            --vamtam-icon-care: '\\e915';
            --vamtam-icon-picture: '\\e916';
            --vamtam-icon-success: '\\e917';
            --vamtam-icon-location: '\\e907';
            --vamtam-icon-quote-left: '\\e918';
            --vamtam-icon-quote-right: '\\e919';
            --vamtam-icon-logo-sign: '\\e909';
            --vamtam-icon-send: '\\e90a';
            --vamtam-loading-animation: url('${BASE}/assets/content/themes/execor/vamtam/assets/images/loader-ring.gif');
        }
`;

const WP_IMG_AUTO_SIZES_CSS = `
        img:is([sizes=auto i], [sizes^="auto," i]) {
            contain-intrinsic-size: 3000px 1500px
        }

        /*# sourceURL=wp-img-auto-sizes-contain-inline-css */
`;

const CLASSIC_THEME_STYLES_CSS = `
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
`;

const SAFE_SVG_CSS = `
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

        /*# sourceURL=${BASE}/assets/content/plugins/safe-svg/dist/safe-svg-block-frontend.css */
`;

const GLOBAL_STYLES_CSS = `
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
`;

const VAMTAM_FRONT_ALL_CSS = `
        @font-face {
            font-family: 'icomoon';
            src: url(${BASE}/assets/content/themes/execor/vamtam/assets/fonts/icons/icomoon.woff2) format('woff2'),
                url(${BASE}/assets/content/themes/execor/vamtam/assets/fonts/icons/icomoon.woff) format('woff'),
                url(${BASE}/assets/content/themes/execor/vamtam/assets/fonts/icons/icomoon.ttf) format('ttf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'vamtam-theme';
            src: url(${BASE}/assets/content/themes/execor/vamtam/assets/fonts/theme-icons/theme-icons.woff2) format('woff2'),
                url(${BASE}/assets/content/themes/execor/vamtam/assets/fonts/theme-icons/theme-icons.woff) format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        /*# sourceURL=vamtam-front-all-inline-css */
`;

const ROCKET_LAZYRENDER_CSS = `
        [data-wpr-lazyrender] {
            content-visibility: auto;
        }
`;

const INTL_TEL_OVERRIDES_CSS = `
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
`;

/**
 * The page's own `<style>` block, carried in PageConfig.inline_css exactly as
 * the PHP `$PAGE['inline_css']` held it: one complete `<style id="…">…</style>`
 * element with `{{BASE}}` standing in for the mount point. Unwrapped here so
 * React can emit a real element with the same id.
 */
function InlineCss({ css }: { css?: string }) {
  const raw = (css ?? '').trim();
  if (raw === '') return null;
  const m = /^<style([^>]*)>([\s\S]*)<\/style>$/.exec(raw);
  if (!m) return null;
  const idMatch = /id="([^"]*)"/.exec(m[1]);
  const body = m[2].split('{{BASE}}').join(BASE);
  return <style {...(idMatch ? { id: idMatch[1] } : {})} dangerouslySetInnerHTML={{ __html: body }} />;
}

export default function HeadAssets({ page }: { page: PageConfig }) {
  return (
    <>
      {/* The SVG is the icon proper; the PNGs are for Safari and the iOS home
          screen, which do not take an SVG favicon. They are rasterised from
          the same file — see public/assets/content/uploads/logo/. */}
      <link rel="icon" href={`${BASE}/assets/content/uploads/logo/favicon.svg`} type="image/svg+xml" />
      <link
        rel="icon"
        href={`${BASE}/assets/content/uploads/logo/favicon-32.png`}
        sizes="32x32"
        type="image/png"
      />
      <link
        rel="icon"
        href={`${BASE}/assets/content/uploads/logo/favicon-192.png`}
        sizes="192x192"
        type="image/png"
      />
      <link
        rel="icon"
        href={`${BASE}/assets/content/uploads/logo/favicon-512.png`}
        sizes="512x512"
        type="image/png"
      />
      <link rel="apple-touch-icon" href={`${BASE}/assets/content/uploads/logo/apple-touch-icon.png`} />
      <meta name="theme-color" content="#0053B7" />

      {STYLESHEETS.map((href) => (
        <link key={href} rel="stylesheet" href={BASE + href} media="all" />
      ))}

      {/* The script block runs after hydration and loads its bundles one at a
          time, because their order is load-bearing (see ScriptRunner). Warming
          the cache here means each of those waits is a cache read rather than a
          round trip, so the site behaves as it did when the parser fetched them. */}
      {siteScriptSources().map((src) => (
        <link key={src} rel="preload" as="script" href={src} />
      ))}

      <style id="vamtam-theme-options" dangerouslySetInnerHTML={{ __html: VAMTAM_THEME_OPTIONS }} />
      <style
        id="wp-img-auto-sizes-contain-inline-css"
        dangerouslySetInnerHTML={{ __html: WP_IMG_AUTO_SIZES_CSS }}
      />
      <style
        id="classic-theme-styles-inline-css"
        dangerouslySetInnerHTML={{ __html: CLASSIC_THEME_STYLES_CSS }}
      />
      <style id="safe-svg-svg-icon-style-inline-css" dangerouslySetInnerHTML={{ __html: SAFE_SVG_CSS }} />
      <style id="global-styles-inline-css" dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES_CSS }} />
      <style id="vamtam-front-all-inline-css" dangerouslySetInnerHTML={{ __html: VAMTAM_FRONT_ALL_CSS }} />
      <style id="rocket-lazyrender-inline-css" dangerouslySetInnerHTML={{ __html: ROCKET_LAZYRENDER_CSS }} />

      {/* Elementor per-post stylesheets, in the order the page declared them. */}
      {(page.post_css ?? []).map((id) => (
        <link
          key={id}
          rel="stylesheet"
          href={`${BASE}/assets/content/uploads/elementor/css/post-${id}.css`}
          media="all"
        />
      ))}

      <InlineCss css={page.inline_css} />

      <link rel="stylesheet" href={`${BASE}/assets/css/valunxt-brand.css?v=157`} media="all" />
      {/* Landing-page feature blocks. Purely additive — after the brand sheet so
          it can build on its tokens without overriding any of its rules. */}
      <link rel="stylesheet" href={`${BASE}/assets/css/valunxt-landing.css?v=4`} media="all" />
      {/* intl-tel-input: international phone field with country code + flag dropdown (lead-capture forms) */}
      <link
        rel="stylesheet"
        href={`${BASE}/assets/vendor/intl-tel-input/css/intlTelInput.min.css`}
        media="all"
      />
      <style id="vxn-intl-tel-overrides" dangerouslySetInnerHTML={{ __html: INTL_TEL_OVERRIDES_CSS }} />
    </>
  );
}
