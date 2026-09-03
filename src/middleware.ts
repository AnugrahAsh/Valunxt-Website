import { NextResponse, type NextRequest } from 'next/server';

/**
 * Two jobs, both inherited from the PHP build.
 *
 * 1. The region gateway. The site is published as one edition per market and
 *    the root is not a page any more (index.php did the same). A bare URL — the
 *    root, an old inbound link, a bookmark from before the split — is forwarded
 *    to the same page in the visitor's market: their last choice (cookie), then
 *    the country the host reports, then India. 302 rather than 301, because the
 *    answer depends on the visitor and must not be cached as if it were the one
 *    true destination for everybody.
 *
 * 2. Publishing the request path as a header, so the root layout can resolve
 *    which page is being rendered. `<body class>` carries the full WordPress
 *    class list the theme CSS keys off (body.elementor-page-264 and friends),
 *    and only the root layout may render `<body>`.
 */

const REGIONS = ['en-in', 'en-ae'] as const;
const DEFAULT_REGION = 'en-in';

function detectRegion(req: NextRequest): string {
  const cookie = req.cookies.get('vxn_region')?.value ?? '';
  if ((REGIONS as readonly string[]).includes(cookie)) return cookie;

  // Set by Cloudflare / some hosts, and by Vercel's geo headers. Harmless when
  // absent.
  const cc = (
    req.headers.get('cf-ipcountry') ??
    req.headers.get('x-vercel-ip-country') ??
    ''
  ).toUpperCase();
  if (cc === 'IN') return 'en-in';
  if (cc === 'AE') return 'en-ae';

  return DEFAULT_REGION;
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const first = pathname.split('/')[1] ?? '';
  const inRegion = (REGIONS as readonly string[]).includes(first);

  // The admin panel and the form endpoint are not part of either edition.
  if (first === 'admin' || first === 'form-handler') {
    const h = new Headers(req.headers);
    h.set('x-vxn-path', pathname);
    return NextResponse.next({ request: { headers: h } });
  }

  if (!inRegion) {
    // A file (sitemap.xml, a download) is not a page; neither is the API.
    const last = pathname.split('/').filter(Boolean).pop() ?? '';
    const isFile = last.includes('.');
    if (!isFile && req.method === 'GET') {
      const region = detectRegion(req);
      const target = new URL(`/${region}${pathname === '/' ? '/' : pathname}${search}`, req.url);
      const res = NextResponse.redirect(target, 302);
      res.headers.set('Cache-Control', 'no-store, max-age=0');
      return res;
    }
    return NextResponse.next();
  }

  const headers = new Headers(req.headers);
  headers.set('x-vxn-path', pathname);

  const res = NextResponse.next({ request: { headers } });

  // Remember the market the visitor is actually browsing, so an unprefixed
  // entry point puts them back where they were rather than in the default
  // edition.
  if (req.cookies.get('vxn_region')?.value !== first) {
    res.cookies.set('vxn_region', first, {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax',
    });
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Everything except Next's own build output, the API route and the static
     * files served straight out of /public.
     */
    '/((?!_next/static|_next/image|api/|assets/|LOGO/|icons/|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
