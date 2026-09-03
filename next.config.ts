import type { NextConfig } from 'next';

/**
 * The site is a faithful port of the PHP build: every stylesheet, script,
 * font and image is served verbatim out of /public, and pages render the same
 * Elementor markup. So image optimisation is off — a rewritten <img> src would
 * change the DOM the theme CSS is written against.
 */
const nextConfig: NextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  // `npm run dev` is reached by both hostnames in practice. Without this, the
  // dev overlay treats the one it was not started on as cross-origin, its HMR
  // socket never connects, and hydration never completes — which looks exactly
  // like the site being dead: no Swiper, no reveal animations, no menus.
  allowedDevOrigins: ['localhost', '127.0.0.1'],
  // Trailing slashes everywhere: the PHP site published /services/, /about/,
  // /en-ae/services/ etc. Keeping them means no URL in the wild changes.
  trailingSlash: true,
  async redirects() {
    // Ported verbatim from .htaccess.
    // 301, not Next's default 308: .htaccess published these as 301s and that
    // is what the search engines that already followed them have recorded.
    const r = (source: string, destination: string) => ({
      source,
      destination,
      statusCode: 301,
    });
    return [
      // ---- Group company slugs renamed 2026-08-04 to match the company ----
      r('/our-group/individuals-and-families/:path*', '/our-group/valunxt-corporate-services/'),
      r('/our-group/entrepreneurs-and-business-owners/:path*', '/our-group/reliant-surveyors/'),
      r('/our-group/financial-advisers/:path*', '/our-group/houzzhunt/'),
      r('/our-group/special-industries/:path*', '/our-group/houzzhunt-mortgage/'),

      // ---- Template/demo posts removed 2026-08-04 -------------------------
      r('/2025/:path*', '/blogs/'),

      // ---- Real Estate service page: slug now matches its H1 --------------
      r('/services/real-estate-wealth-advisory/:path*', '/services/real-estate-investment-advisory/'),

      // ---- Content restructure -------------------------------------------
      r('/accounting-tax-audit-cpa/:path*', '/our-group/'),
      r('/services/business-consulting/:path*', '/services/real-estate-investment-advisory/'),
      r('/services/business-strategy/:path*', '/services/real-estate-investment-advisory/'),
      r('/services/marketing-sales-retention/:path*', '/services/capital-advisory/'),
      r('/services/tax-planning/:path*', '/services/capital-advisory/'),
      r('/services/tax-preparation/:path*', '/services/capital-advisory/'),
      r('/services/operations-management/:path*', '/services/research-intelligence/'),
      r('/services/talent-acquisition/:path*', '/services/technology-ai/'),
      r('/services/accounting/:path*', '/services/'),

      // ---- Pages that now exist for real ----------------------------------
      r('/about/team/:path*', '/about/leadership/'),
      r('/about/testimonials/:path*', '/clients/'),
      r('/about/press-release/:path*', '/blogs/'),
      r('/case-studies/:path*', '/track-record/'),
      r('/about/careers/associate-consultant/', '/about/careers/'),
      r('/about/careers/consultant-remuneration-total-rewards/', '/about/careers/'),
      r('/about/careers/consulting-team-organizational-strategy/', '/about/careers/'),
      r('/about/careers/intern-consulting-operations/', '/about/careers/'),
      r('/about/careers/intern-kfi-outcomes-data-analytics/', '/about/careers/'),
      r('/worksheets/:path*', '/blogs/'),
      r('/landing-page/:path*', '/'),
      r('/tag/:path*', '/blogs/'),

      // ---- Blog listing moved to /blogs/ 2026-07-27 -----------------------
      r('/blog/:path*', '/blogs/'),
      // ---- Category taxonomy removed 2026-07-27 ---------------------------
      r('/category/:path*', '/blogs/'),
    ];
  },
  async rewrites() {
    // Anything still posting to the old PHP endpoint (a cached page, a bookmarked
    // form) lands on the route that replaced it.
    return [{ source: '/form-handler.php', destination: '/form-handler/' }];
  },
  async headers() {
    return [
      {
        // Mirrors the mod_expires block in .htaccess.
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
