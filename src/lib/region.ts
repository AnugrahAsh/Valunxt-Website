/**
 * VALUNXT Capital — multi-region (country edition) support.
 *
 * The site is published as one edition per market, each mounted on its own URL
 * prefix:
 *
 *     /en-in/…   India   (the original site — unchanged content)
 *     /en-ae/…   UAE
 *
 * Only the pages that genuinely differ per market need their own file. The
 * home page does: app/[region]/page.tsx picks the India or UAE home so each
 * market gets its own hero, copy and imagery. Everything else is a single
 * shared page rendered under the region segment, so REGION still says "en-ae"
 * because detection reads the URL.
 *
 * Port of includes/region.php.
 */

/* ---- The registry --------------------------------------------------------- */

export type RegionSlug = 'en-in' | 'en-ae';

export interface Region {
  slug: RegionSlug;
  name: string;
  short?: string;
  code: string;
  lang: string;
  currency: string;
  symbol: string;
  tz: string;
  offices: string[];
  markets: string;
  markets_long: string;
  cities: string;
  entity: string;
  phone: string;
  tel: string;
  hours: string;
}

/** The market shown when nothing in the URL, the cookie or the request says otherwise. */
export function vxnRegionDefault(): RegionSlug {
  return 'en-in';
}

/**
 * Every published edition, in menu order. `offices` keys into vxnOffices() so
 * a region never has to restate an address.
 */
const REGIONS: Record<RegionSlug, Region> = {
  'en-in': {
    slug: 'en-in',
    name: 'India',
    code: 'IN',
    lang: 'en-IN',
    currency: 'INR',
    symbol: '₹',
    tz: 'IST',
    offices: ['mumbai', 'noida'],
    markets: 'India',
    markets_long: 'India, the UAE, and international markets',
    cities: 'Mumbai and Noida',
    entity: 'Valunxt Capital Advisory Services Private Limited',
    phone: '+91 120 718 5322',
    tel: '+911207185322',
    hours: 'Mon – Sat, 9:00 AM – 6:00 PM IST',
  },
  'en-ae': {
    slug: 'en-ae',
    name: 'United Arab Emirates',
    short: 'UAE',
    code: 'AE',
    lang: 'en-AE',
    currency: 'AED',
    symbol: 'AED',
    tz: 'GST',
    offices: ['dubai', 'abudhabi'],
    markets: 'the UAE',
    markets_long: 'the UAE, India, and international markets',
    cities: 'Dubai and Abu Dhabi',
    entity: 'Valunxt Corporate Services LLC',
    phone: '+971 4 255 4683',
    tel: '+97142554683',
    hours: 'Mon – Sat, 9:00 AM – 6:00 PM GST',
  },
};

export function vxnRegions(): Record<RegionSlug, Region> {
  return REGIONS;
}

/** Every published edition, in menu order. */
export function vxnRegionList(): Region[] {
  return Object.values(REGIONS);
}

/** True when `slug` is a published edition. */
export function vxnRegionExists(slug: unknown): slug is RegionSlug {
  return typeof slug === 'string' && Object.prototype.hasOwnProperty.call(REGIONS, slug);
}

/** A region record — the default one when the slug is not published. */
export function vxnRegionData(slug?: string | null): Region {
  if (vxnRegionExists(slug)) return REGIONS[slug];
  return REGIONS[vxnRegionDefault()];
}

/** Normalise an incoming route segment to a published edition. */
export function vxnRegion(slug?: string | null): RegionSlug {
  return vxnRegionExists(slug) ? slug : vxnRegionDefault();
}

/** The short label for the switcher ("India", "UAE"). */
export function vxnRegionLabel(slug?: string | null): string {
  const r = vxnRegionData(slug);
  return r.short ?? r.name;
}

/* ---- URLs ----------------------------------------------------------------- */

/**
 * The site is mounted at the web root under Next.js, so BASE is the empty
 * string. It is kept as a named export so ported templates read the same way
 * they did in PHP and a future sub-path deployment has one place to change.
 */
export const BASE = '';

/**
 * A region-scoped URL. rurl('en-ae', '/services/') → "/en-ae/services/".
 *
 * In the PHP build, page templates wrote `BASE . '/services/'` and the finished
 * HTML was filtered on the way out to add the region prefix. Here the prefix is
 * applied at the source instead: every internal page link goes through rurl(),
 * so there is no output filter and no chance of a link escaping it.
 *
 * Assets, files (anything with an extension) and absolute URLs are returned
 * untouched, exactly as the PHP filter left them.
 */
export function rurl(region: string, p = '/'): string {
  let out = String(p ?? '/');
  if (out === '') out = '/';

  // Absolute URLs, mailto:, tel:, and in-page anchors are not ours to prefix.
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(out)) return out;

  if (out[0] !== '/') out = '/' + out;

  // Split off ?query / #hash before inspecting the path.
  const cut = out.search(/[?#]/);
  const pathPart = cut === -1 ? out : out.slice(0, cut);
  const suffix = cut === -1 ? '' : out.slice(cut);

  const skip = ['assets', 'LOGO', 'icons', 'admin', 'data', '_retired', '_wp-source', 'api'];
  const first = pathPart.replace(/^\/+/, '').split('/')[0];

  if (first !== '' && (skip.includes(first) || vxnRegionExists(first))) return out;

  // A file (sitemap.xml, a download) is not a page.
  const base = pathPart.split('/').filter(Boolean).pop() ?? '';
  if (base.includes('.')) return out;

  const slug = vxnRegionExists(region) ? region : vxnRegionDefault();
  return `${BASE}/${slug}${pathPart}${suffix}`;
}

/** The current page as it is addressed in another market. */
export function rswap(slug: string, currentRegionPath: string): string {
  const target = vxnRegionExists(slug) ? slug : vxnRegionDefault();
  const p = currentRegionPath === '' ? '/' : currentRegionPath;
  return `${BASE}/${target}${p.startsWith('/') ? p : '/' + p}`;
}

/* ---- Region facts --------------------------------------------------------- */

import { vxnOffices, type Office } from './site-data';

/** The offices in this market, in canonical order. */
export function vxnRegionOffices(slug?: string | null): Record<string, Office> {
  const r = vxnRegionData(slug);
  const all = vxnOffices();
  const out: Record<string, Office> = {};
  for (const k of r.offices) {
    const office = all[k as keyof typeof all];
    if (office) out[k] = office;
  }
  return out;
}

/** The telephone line answered in this market. */
export function vxnRegionPhone(slug?: string | null): string {
  return vxnRegionData(slug).phone;
}

/* ---- Services per market -------------------------------------------------- */

export interface Service {
  title: string;
  icon: string;
  short: string;
  href: string;
  desc: string;
  img: string;
  /** Set false to keep a service out of the home banner while it still appears
   *  in the accordion and the Services menu. */
  hero?: boolean;
  banner?: string[];
  headline?: string;
  lede?: string;
}

/**
 * The services a market leads with — the one list behind the UAE home hero, the
 * services accordion below it, and the Services menu in the header. They were
 * written out separately at first and immediately started to disagree, which is
 * exactly the drift this module exists to prevent.
 *
 * India keeps the group's four verticals, unchanged.
 */
export function vxnServices(slug?: string | null): Service[] {
  const region = vxnRegionExists(slug) ? slug : vxnRegionDefault();

  if (region === 'en-ae') {
    return [
      {
        title: 'Accounting and Tax Services',
        icon: 'ledger',
        short: 'Accounting &amp; Tax',
        href: '/services/',
        desc: 'Bookkeeping, statutory accounting, VAT and corporate tax &mdash; compliance handled end to end for UAE entities.',
        img: '/assets/content/uploads/services/accounting-and-tax-services.webp',
        banner: ['banners/uae-slider-5.webp', 'banners/uae-slider-3.webp'],
        headline: 'Accounting that Inspires Confident Decisions.',
        lede: 'Bookkeeping, statutory accounts, VAT and corporate tax &mdash; numbers you can act on without second-guessing, at a fee agreed before work begins.',
      },
      {
        title: 'Real Estate Transactions',
        icon: 'building',
        short: 'Real Estate',
        href: '/services/real-estate-investment-advisory/',
        desc: 'Sourcing, acquisition and disposal across residential and commercial property, with independent advice at every step.',
        img: '/assets/content/uploads/services/real-estate-transactions.webp',
        banner: ['banners/uae-slider-1.webp'],
        headline: 'Property Decisions, Independently Advised.',
        lede: 'Sourcing, acquisition and disposal across residential and commercial property &mdash; advice with no inventory behind it, in Dubai, Abu Dhabi and beyond.',
      },
      {
        title: 'Mortgages Services',
        icon: 'key',
        short: 'Mortgages',
        href: '/services/capital-advisory/',
        desc: 'Whole-of-market mortgage structuring for resident, non-resident and corporate borrowers.',
        img: '/assets/content/uploads/services/mortgage-services.webp',
        banner: ['banners/uae-slider-2.webp'],
        headline: 'Funding Structured Around Your Position.',
        lede: 'Whole-of-market mortgage and loan structuring for resident, non-resident and corporate borrowers &mdash; terms negotiated on the evidence.',
      },
      {
        title: 'Valuation and Advisory',
        icon: 'scales',
        short: 'Valuation',
        hero: false,
        href: '/services/',
        desc: 'RICS-aligned property valuation and advisory for lenders, funds, developers and private owners.',
        img: '/assets/content/uploads/services/valuation-and-advisory.webp',
        banner: ['banners/uae-slider-6.webp', 'banners/uae-slider-4.webp'],
        headline: 'Independent Valuations. Defensible Decisions.',
        lede: 'RICS-regulated property, business and plant valuation through group firm Reliant Surveyors &mdash; method documented to withstand scrutiny, not just review.',
      },
      {
        title: 'Research &amp; Intelligence',
        icon: 'chart',
        short: 'Research',
        hero: false,
        href: '/services/research-intelligence/',
        desc: 'Independent, data-driven research and valuation intelligence for clearer, more confident investment decisions.',
        img: '/assets/content/uploads/services/research-and-intelligences.webp',
        banner: ['banners/uae-slider-3.webp'],
        headline: 'Evidence Before the Commitment.',
        lede: 'Feasibility studies, highest-and-best-use analysis and market research &mdash; verified data and sound method, before the decision rather than after it.',
      },
      {
        title: 'Technology, Data &amp; AI',
        icon: 'chip',
        short: 'Technology &amp; AI',
        href: '/services/technology-ai/',
        desc: 'Intelligent platforms, analytics and AI systems that turn market data into better decisions.',
        img: '/assets/content/uploads/services/technology-data-ai.webp',
        banner: ['banners/uae-slider-4.webp'],
        headline: 'Technology that Turns Finance into Advantage.',
        lede: 'Digital transformation, enterprise and cloud systems, dashboards and AI tooling that make finance measurable and repeatable.',
      },
    ];
  }

  /* India — the group's four verticals. */
  return [
    {
      title: 'Real Estate Investment Advisory',
      icon: 'building',
      short: 'Real Estate Investment Advisory',
      href: '/services/real-estate-investment-advisory/',
      desc: 'Disciplined portfolio strategy and risk analysis to create, preserve, and grow real estate wealth.',
      img: '/assets/content/uploads/new-folder/real-estate-wealth-advisory-1.webp',
    },
    {
      title: 'Capital Advisory',
      icon: 'handshake',
      short: 'Capital Advisory',
      href: '/services/capital-advisory/',
      desc: 'Independent capital structuring &mdash; project funding, debt advisory, equity, joint ventures and syndication.',
      img: '/assets/content/uploads/banners/capital-advisory.webp',
    },
    {
      title: 'Research &amp; Intelligence',
      icon: 'chart',
      short: 'Research &amp; Intelligence',
      href: '/services/research-intelligence/',
      desc: 'Independent, data-driven research and valuation intelligence for clearer investment decisions.',
      img: '/assets/content/uploads/homepage/research-and-intellegance.webp',
    },
    {
      title: 'Technology &amp; AI',
      icon: 'chip',
      short: 'Technology &amp; AI',
      href: '/services/technology-ai/',
      desc: 'Intelligent platforms, analytics and AI systems that turn market data into better decisions.',
      img: '/assets/content/uploads/homepage/technology-and-ai.webp',
    },
  ];
}

/* ---- The flags ------------------------------------------------------------ */

/**
 * Inline SVG flags. Emoji flags are not an option: Windows ships no flag
 * glyphs, so 🇮🇳 renders as the bare letters "IN" in Chrome on the very
 * machines this site is being built on. These are drawn instead, 20×14 with a
 * hairline border so they read correctly on the dark header.
 *
 * Rendered as a component in components/layout/RegionFlag.tsx; the markup is
 * identical to the PHP vxn_region_flag() output.
 */
export function vxnRegionFlagId(slug: string): string {
  return 'vxnflag-' + String(slug).replace(/[^a-z0-9]+/gi, '');
}
