/**
 * VALUNXT Capital — front-end SEO resolver.
 *
 * Reads the SEO metadata the admin panel manages and merges it over whatever
 * the page declared in its PageConfig. The values come from
 * src/data/seo-map.json, a plain JSON file the admin panel rewrites on every
 * save — so a page view never opens a database connection and the site keeps
 * rendering normally if the CMS or MySQL is unavailable.
 *
 * Port of includes/seo.php.
 */

import type { Metadata } from 'next';
import { headers } from 'next/headers';
import rawSeoMap from '@/data/seo-map.json';
import { BASE, vxnRegionExists, vxnRegionList, vxnRegionData, rswap } from './region';
import type { PageConfig } from './page-config';

export interface SeoRow {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  keywords?: string;
  og_title?: string;
  og_description?: string;
}

const SEO_MAP = rawSeoMap as Record<string, SeoRow>;

/** The generated SEO map. */
export function vxnSeoMap(): Record<string, SeoRow> {
  return SEO_MAP;
}

/** Normalise "/about/careers/" to the "about/careers" key used in the map. */
export function vxnSeoKey(p: string): string {
  return String(p ?? '').replace(/^\/+|\/+$/g, '');
}

/**
 * The admin-managed row for a path, region-aware.
 *
 * The CMS keys pages by their unprefixed path ("services", "about/careers")
 * because that is the page that actually exists; the country editions put a
 * prefix in front of it. So: look for a row keyed to this exact URL first —
 * that is how a market gets its own title — and fall back to the shared row for
 * the same page underneath.
 *
 * The one path that must not fall back blindly is a region home: "en-ae" and ""
 * are different pages, not the same page in two markets. Only the India home
 * inherits the legacy home row, because it *is* the page that used to live at
 * the root; the UAE home falls back to its own PageConfig values until the CMS
 * is given an "en-ae" row.
 */
export function vxnSeoResolveRow(p: string): SeoRow {
  const key = vxnSeoKey(p);
  if (Object.prototype.hasOwnProperty.call(SEO_MAP, key)) return SEO_MAP[key];

  const first = key.split('/')[0];
  if (vxnRegionExists(first)) {
    const rest = key.slice(first.length + 1);
    if (rest !== '') return SEO_MAP[rest] ?? {};
    if (first === 'en-in') return SEO_MAP[''] ?? {};
  }
  return {};
}

/**
 * Scheme + host for the site, as a static fallback — used for `metadataBase`
 * and anywhere the request is not in scope. Set NEXT_PUBLIC_SITE_ORIGIN to
 * pin it for a given deployment.
 */
export function vxnSeoOrigin(): string {
  const env =
    process.env.NEXT_PUBLIC_SITE_ORIGIN ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');
  return (env || 'https://valunxtcapital.com').replace(/\/+$/, '');
}

/**
 * Scheme + host for the current request — what PHP read off $_SERVER['HTTPS']
 * and $_SERVER['HTTP_HOST']. Falls back to vxnSeoOrigin() when there is no
 * request (a build-time render).
 */
export async function vxnRequestOrigin(): Promise<string> {
  try {
    const h = await headers();
    const host = h.get('x-forwarded-host') ?? h.get('host');
    if (!host) return vxnSeoOrigin();
    const proto = h.get('x-forwarded-proto') ?? (host.startsWith('localhost') || host.startsWith('127.') ? 'http' : 'https');
    return `${proto}://${host}`;
  } catch {
    return vxnSeoOrigin();
  }
}

const ROBOTS_ALLOWED = [
  'index, follow',
  'noindex, follow',
  'index, nofollow',
  'noindex, nofollow',
] as const;

/** Allowed robots directives. Anything else falls back to "index, follow". */
export function vxnSeoRobotsOk(value: string): boolean {
  return (ROBOTS_ALLOWED as readonly string[]).includes(value);
}

export interface ResolvedSeo {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  keywords: string;
  og_title: string;
  og_description: string;
}

/**
 * Resolve the SEO values for a page.
 *
 * Precedence: admin-managed value → the page's own PageConfig value →
 * a sensible site-wide default.
 */
export function vxnSeo(page: PageConfig, region: string, origin = vxnSeoOrigin()): ResolvedSeo {
  let p = String(page.path ?? '/');

  // A shared page still declares its unprefixed path ("/services/"), but when
  // it was reached through a country edition the canonical URL — and the row
  // the CMS may have for that market — is the prefixed one.
  if (region !== '' && !p.startsWith('/' + region)) {
    p = '/' + region + (p === '' ? '/' : p);
  }

  const seo = vxnSeoResolveRow(p);
  const fallbackCanonical = origin + BASE + (p !== '' ? p : '/');

  let title = (seo.title ?? '').trim();
  if (title === '') title = (page.title ?? '').trim();
  if (title === '') title = 'VALUNXT Capital';

  let desc = (seo.description ?? '').trim();
  if (desc === '') desc = (page.desc ?? '').trim();

  let canonical = (seo.canonical ?? '').trim();
  if (canonical === '') canonical = fallbackCanonical;

  // A page outside the CMS (the 404 template, for instance) can still set its
  // own directive with page.robots.
  let robots = (seo.robots ?? '').trim();
  if (!vxnSeoRobotsOk(robots)) robots = (page.robots ?? '').trim();
  if (!vxnSeoRobotsOk(robots)) robots = 'index, follow';

  const ogTitle = (seo.og_title ?? '').trim() || title;
  const ogDesc = (seo.og_description ?? '').trim() || desc;

  return {
    title,
    description: desc,
    canonical,
    robots,
    keywords: (seo.keywords ?? '').trim(),
    og_title: ogTitle,
    og_description: ogDesc,
  };
}

/**
 * The Next.js Metadata object for a page, carrying exactly the tags
 * includes/head.php emitted: title, description, keywords, robots, canonical,
 * the per-market hreflang alternates, Open Graph and Twitter.
 */
export async function buildMetadata(page: PageConfig, region: string): Promise<Metadata> {
  const origin = await vxnRequestOrigin();
  const seo = vxnSeo(page, region, origin);

  // Country editions: tell search engines that this page exists once per
  // market, and which one this URL is. x-default points at the gateway, which
  // routes the visitor to their own edition.
  const regionPath = String(page.path ?? '/') || '/';
  const languages: Record<string, string> = {};
  for (const r of vxnRegionList()) {
    languages[r.lang] = origin + rswap(r.slug, regionPath);
  }
  languages['x-default'] = origin + BASE + '/';

  const meta: Metadata = {
    title: seo.title,
    ...(seo.description !== '' ? { description: seo.description } : {}),
    ...(seo.keywords !== '' ? { keywords: seo.keywords } : {}),
    robots: seo.robots,
    alternates: {
      canonical: seo.canonical,
      languages,
    },
    openGraph: {
      locale: vxnRegionData(region).lang.replace('-', '_'),
      type: 'website',
      title: seo.og_title,
      ...(seo.og_description !== '' ? { description: seo.og_description } : {}),
      url: seo.canonical,
      siteName: 'VALUNXT Capital',
      ...(page.og_image ? { images: [{ url: BASE + page.og_image }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.og_title,
      ...(seo.og_description !== '' ? { description: seo.og_description } : {}),
    },
  };

  return meta;
}
