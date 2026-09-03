/**
 * The page registry.
 *
 * Every page's `$PAGE` declaration from the PHP build, transcribed into
 * src/data/page-configs.json and keyed by its unprefixed path. Two things read
 * it: the page itself (for its stylesheets, body class and SEO), and the root
 * layout — which has to put the WordPress body class on `<body>` and therefore
 * needs to resolve a page from a URL rather than from a route param.
 *
 * `/en-in/` and `/en-ae/` are the two market home pages and keep their own
 * entries; every other key is a shared page rendered under whichever market the
 * visitor is in.
 */
import rawConfigs from '@/data/page-configs.json';
import type { PageConfig } from './page-config';
import { vxnRegion, vxnRegionExists } from './region';

type RawConfigs = Record<string, PageConfig & Record<string, unknown>>;

const CONFIGS = rawConfigs as unknown as RawConfigs;

/** Normalise any URL path to the "/x/y/" form used as a registry key. */
export function normalisePath(p: string): string {
  const clean = String(p ?? '/').split('?')[0].split('#')[0];
  const trimmed = clean.replace(/^\/+|\/+$/g, '');
  return trimmed === '' ? '/' : `/${trimmed}/`;
}

/** The declaration for an unprefixed page path, or null. */
export function pageConfig(path: string): PageConfig | null {
  return CONFIGS[normalisePath(path)] ?? null;
}

/** Same, but throws rather than returning null — for pages that must exist. */
export function requirePageConfig(path: string): PageConfig {
  const c = pageConfig(path);
  if (!c) throw new Error(`No page config registered for ${path}`);
  return c;
}

/** Extra per-page fields the research report detail pages carry. */
export interface ReportPageConfig extends PageConfig {
  report_type: string;
  crumbs: Record<string, string>;
  topics: string[];
  intro: string;
  takeaways: string[];
  pdf: string;
}

export function reportConfig(path: string): ReportPageConfig {
  return requirePageConfig(path) as ReportPageConfig;
}

/**
 * Resolve a full request path (region prefix included) to the page that answers
 * it, plus the market it was requested in.
 *
 * "/en-ae/services/" → { region: 'en-ae', page: <the shared /services/ page> }
 * "/en-ae/"          → { region: 'en-ae', page: <the UAE home> }
 */
export function resolveRequest(path: string): { region: string; page: PageConfig | null } {
  const norm = normalisePath(path);
  const first = norm.split('/')[1] ?? '';

  if (vxnRegionExists(first)) {
    const rest = norm.slice(first.length + 1) || '/';
    // A market home is its own page, not the shared root.
    if (rest === '/') return { region: first, page: CONFIGS[`/${first}/`] ?? null };
    return { region: first, page: CONFIGS[rest] ?? null };
  }

  return { region: vxnRegion(null), page: CONFIGS[norm] ?? null };
}

/** Every registered path — used to sanity-check the route tree. */
export function allPagePaths(): string[] {
  return Object.keys(CONFIGS);
}
