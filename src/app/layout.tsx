/**
 * The document shell.
 *
 * `<html lang>`, `<body class>` and the whole `<head>` stylesheet block are all
 * per-page on this site — the lang comes from the visitor's edition, the body
 * class is the full WordPress class list the theme CSS keys off
 * (`body.elementor-page-264`, `body.responsive-layout`, …), and the Elementor
 * per-post stylesheets are listed by the page. Next.js only lets the root
 * layout render `<html>`, `<head>` and `<body>`, so it resolves the current page
 * itself from the request path that middleware.ts publishes as `x-vxn-path`.
 *
 * Keeping HeadAssets here rather than in the page matters: includes/head.php
 * interleaved `<link>` and `<style>` (post-*.css comes after the global inline
 * styles; valunxt-brand.css after both), and that interleaving is the cascade.
 * Rendered inside the real <head>, the order is byte-for-byte what PHP emitted.
 */
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { headers } from 'next/headers';
import { vxnSeoOrigin } from '@/lib/seo';
import { vxnRegionData } from '@/lib/region';
import { resolveRequest } from '@/lib/pages';
import HeadAssets from '@/components/layout/HeadAssets';
import { PRELOADER_GATE_SCRIPT } from '@/components/layout/Preloader';
import type { PageConfig } from '@/lib/page-config';

export const metadata: Metadata = {
  metadataBase: new URL(vxnSeoOrigin()),
  title: 'VALUNXT Capital',
};

/* Elementor ships `.elementor-invisible { visibility: hidden }` and relies on
   JavaScript to remove the class once an element scrolls into view. On this
   conversion that reveal is reimplemented in SiteScripts — but until it runs,
   most of the copy on Services, About, Our Group and Clients is
   visibility:hidden. Anything that reads the page without executing our scripts
   (crawlers that skip JS, reader modes, a blocked or failed script) therefore
   saw only the handful of blocks that carry no entrance animation.

   PHP set this class from a script. Here it is rendered straight onto <html>:
   the outcome is identical — the <noscript> block below is what actually
   rescues a JS-less reader — and it keeps a script from editing an attribute
   React is about to hydrate. */
const HTML_CLASS = 'vxn-js';

const GTAG_INLINE = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-3LN0QDVS2F');
`;

/**
 * The body class a page created in the admin panel carries. It is the class
 * list the PHP scaffolder wrote, minus the per-post `elementor-page-<id>` hook
 * — no stylesheet defines a rule for an id that only exists in the CMS.
 */
const CMS_BODY_CLASS =
  'wp-singular page-template-default page wp-custom-logo wp-embed-responsive wp-theme-execor full ' +
  'header-layout-logo-menu has-page-header no-middle-header responsive-layout vamtam-is-elementor ' +
  'elementor-active elementor-pro-active vamtam-font-smoothing layout-full elementor-default ' +
  'elementor-kit-5 elementor-page elementor-page-3752';

/** What head.php rendered for a URL with no page behind it (the 404 template). */
const FALLBACK: PageConfig = {
  title: 'VALUNXT Capital',
  body: '',
  post_css: ['5', '3837', '2094'],
  header: '3837',
  footer: '2094',
  post_id: 0,
  path: '/',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const h = await headers();
  const path = h.get('x-vxn-path') ?? '/';
  const { region, page } = resolveRequest(path);

  // The admin panel is its own application: it has its own stylesheet and must
  // not load the site's Elementor cascade, analytics or body classes.
  if (path.startsWith('/admin')) {
    return (
      <html lang="en">
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </head>
        <body>{children}</body>
      </html>
    );
  }

  return (
    /* suppressHydrationWarning on both: the intro gate below adds a class to
       <html> before hydration, and jQuery, Elementor and the theme add classes
       and data attributes to <body> after it. Neither is React's to reconcile. */
    <html lang={vxnRegionData(region).lang} className={HTML_CLASS} suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <noscript>
          <style>{`.elementor-invisible{visibility:visible !important;}`}</style>
        </noscript>
        <HeadAssets page={page ?? FALLBACK} />
      </head>
      <body className={page?.body ?? CMS_BODY_CLASS} suppressHydrationWarning>
        {/* The intro gate reads sessionStorage and must settle before the first
            paint, so it is the one script that runs ahead of hydration. It only
            touches <html>, which is why that element suppresses the warning. */}
        <Script
          id="vx-intro-gate"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: PRELOADER_GATE_SCRIPT }}
        />
        <div id="top" />
        {children}
        {/* Google tag (gtag.js) — after hydration, like every other script. */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3LN0QDVS2F" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: GTAG_INLINE }} />
      </body>
    </html>
  );
}
