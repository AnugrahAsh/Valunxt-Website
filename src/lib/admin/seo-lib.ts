/**
 * VALUNXT Capital — SEO & Sitemap library.
 *
 * Everything the admin panel needs to manage per-page SEO metadata, page slugs
 * and the XML sitemap, so the individual admin screens stay thin. Nothing here
 * renders anything.
 *
 * Data model
 *   pages          one row per public page (slug = full URL path, '' = home)
 *   seo_settings   simple key/value store (site URL, last sitemap run, …)
 *
 * Generated artefacts
 *   public/sitemap.xml       XML Sitemap protocol 0.9
 *   src/data/seo-map.json    the map the public front end reads, so a page view
 *                            never opens a database connection
 *
 * Port of admin/includes/seo-lib.php. The one structural change: page
 * discovery reads the route registry (src/data/page-configs.json) plus the CMS
 * rows rather than scanning the filesystem for index.php files, because pages
 * are TypeScript routes now rather than PHP directories.
 */
import 'server-only';
import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';

import { execute, query } from './db';
import { SITE_BASE } from './config';
import rawConfigs from '@/data/page-configs.json';
import type { PageConfig } from '@/lib/page-config';

/* ---------------------------------------------------------------------------
 * Paths & constants
 * ------------------------------------------------------------------------ */

/** The project root — where public/ and src/ live. */
export function seoRoot(): string {
  return process.cwd();
}

/** Absolute path of the generated sitemap. */
export function seoSitemapPath(): string {
  return path.join(seoRoot(), 'public', 'sitemap.xml');
}

/** Absolute path of the front-end SEO cache written on every save. */
export function seoCachePath(): string {
  return path.join(seoRoot(), 'src', 'data', 'seo-map.json');
}

/** Allowed robots directives, in the order shown in the admin UI. */
export const ROBOTS_OPTIONS = [
  'index, follow',
  'noindex, follow',
  'index, nofollow',
  'noindex, nofollow',
] as const;

/** Allowed sitemap change frequencies. */
export const CHANGEFREQ_OPTIONS = [
  'always',
  'hourly',
  'daily',
  'weekly',
  'monthly',
  'yearly',
  'never',
] as const;

/* ---------------------------------------------------------------------------
 * Settings
 * ------------------------------------------------------------------------ */

export async function seoSettingsAll(): Promise<Record<string, string>> {
  const out: Record<string, string> = {};
  try {
    for (const r of await query<{ k: string; v: string | null }>('SELECT k, v FROM seo_settings')) {
      out[r.k] = r.v ?? '';
    }
  } catch {
    /* table not ready yet */
  }
  return out;
}

export async function seoSetting(key: string, fallback = ''): Promise<string> {
  const all = await seoSettingsAll();
  return all[key] !== undefined && all[key] !== '' ? all[key] : fallback;
}

export async function seoSettingSet(key: string, value: string): Promise<void> {
  await execute('INSERT INTO seo_settings (k, v) VALUES (?, ?) ON DUPLICATE KEY UPDATE v = VALUES(v)', [
    key,
    String(value),
  ]);
}

/** Best-guess public site URL, when none is configured. */
export function seoDetectSiteUrl(requestOrigin = ''): string {
  if (requestOrigin) return requestOrigin.replace(/\/+$/, '') + SITE_BASE;
  const env =
    process.env.NEXT_PUBLIC_SITE_ORIGIN ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');
  return (env || 'https://valunxtcapital.com').replace(/\/+$/, '') + SITE_BASE;
}

/** Configured public site URL (no trailing slash). */
export async function seoSiteUrl(requestOrigin = ''): Promise<string> {
  const url = (await seoSetting('site_url', '')).trim();
  return (url !== '' ? url : seoDetectSiteUrl(requestOrigin)).replace(/\/+$/, '');
}

/** Absolute public URL for a slug ('' = home). Always ends in a slash. */
export async function seoPageUrl(slug: string, requestOrigin = ''): Promise<string> {
  const s = String(slug).replace(/^\/+|\/+$/g, '');
  return (await seoSiteUrl(requestOrigin)) + '/' + (s === '' ? '' : s + '/');
}

/* ---------------------------------------------------------------------------
 * Slugs
 * ------------------------------------------------------------------------ */

/** Turn arbitrary text into a single URL-safe slug segment. */
export function seoSlugifySegment(text: string): string {
  let t = String(text);
  // Strip a trailing "| Site Name" suffix that page titles commonly carry.
  t = t.replace(/\s*[|–—-]\s*VALUNXT.*$/iu, '');
  // Fold accents the way iconv//TRANSLIT did.
  t = t.normalize('NFKD').replace(/[̀-ͯ]/g, '');
  t = t.toLowerCase();
  t = t.replace(/&/g, ' and ');
  t = t.replace(/[^a-z0-9]+/g, '-');
  return t.replace(/^-+|-+$/g, '');
}

/**
 * Normalise a full path slug: "About/ Careers " → "about/careers".
 * An empty result means the home page.
 */
export function seoNormalizeSlug(slug: string): string {
  return String(slug)
    .split('/')
    .map(seoSlugifySegment)
    .filter((s) => s !== '')
    .join('/');
}

/** Whether a slug is already taken by another page. */
export async function seoSlugTaken(slug: string, exceptId = 0): Promise<boolean> {
  const rows = await query<{ n: number }>('SELECT COUNT(*) AS n FROM pages WHERE slug = ? AND id <> ?', [
    slug,
    exceptId,
  ]);
  return Number(rows[0]?.n ?? 0) > 0;
}

/** Append -2, -3 … until the slug is unique. */
export async function seoUniqueSlug(slug: string, exceptId = 0): Promise<string> {
  let s = seoNormalizeSlug(slug);
  if (s === '') return '';
  const base = s;
  let n = 2;
  while (await seoSlugTaken(s, exceptId)) {
    s = `${base}-${n}`;
    n++;
    if (n > 200) break;
  }
  return s;
}

/* ---------------------------------------------------------------------------
 * Page discovery
 * ------------------------------------------------------------------------ */

const CONFIGS = rawConfigs as unknown as Record<string, PageConfig>;

/** Folders that are never public pages. */
const EXCLUDED = new Set(['404']);

export interface DiscoveredPage {
  slug: string;
  title: string;
  desc: string;
  file_path: string;
}

/**
 * Every public page the site publishes, keyed by slug ('' = home).
 *
 * The PHP version walked the filesystem looking for index.php files that
 * required includes/head.php. The equivalent here is the route registry, which
 * holds exactly the same set of pages and the same $PAGE values.
 */
export function seoScanSite(): Record<string, DiscoveredPage> {
  const found: Record<string, DiscoveredPage> = {};
  for (const [p, cfg] of Object.entries(CONFIGS)) {
    const slug = p.replace(/^\/+|\/+$/g, '');
    if (EXCLUDED.has(slug)) continue;
    found[slug] = {
      slug,
      title: cfg.title ?? '',
      desc: cfg.desc ?? '',
      file_path: 'src/data/page-configs.json#' + (slug === '' ? '/' : '/' + slug + '/'),
    };
  }
  return found;
}

/** Human page title derived from a meta title ("About | VALUNXT" → "About"). */
export function seoTitleFromMeta(metaTitle: string, slug: string): string {
  const t = String(metaTitle).replace(/\s*\|\s*VALUNXT.*$/iu, '').trim();
  if (t !== '') return t;
  if (slug === '') return 'Home';
  const last = slug.split('/').pop() ?? '';
  return last.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Sensible sitemap priority for a page at the given depth. */
export function seoDefaultPriority(depth: number): string {
  if (depth <= 0) return '1.0';
  if (depth === 1) return '0.8';
  if (depth === 2) return '0.6';
  return '0.5';
}

/** Sensible sitemap change frequency for a page at the given depth. */
export function seoDefaultChangefreq(depth: number): string {
  return depth <= 0 ? 'weekly' : 'monthly';
}

/**
 * Import pages the CMS does not know about yet, and count rows whose page no
 * longer exists on the site.
 */
export async function seoSyncPages(): Promise<{ added: number; missing: number; total: number }> {
  const disk = seoScanSite();
  const known = new Set(
    (await query<{ slug: string }>('SELECT slug FROM pages')).map((r) => r.slug)
  );

  let added = 0;
  for (const [slug, p] of Object.entries(disk)) {
    if (known.has(slug)) continue;
    const depth = slug === '' ? 0 : slug.split('/').length;
    await execute(
      `INSERT INTO pages
            (title, slug, file_path, meta_title, meta_description, robots_meta, priority, changefreq, status, in_sitemap)
         VALUES (?, ?, ?, ?, ?, 'index, follow', ?, ?, 'published', 1)`,
      [
        seoTitleFromMeta(p.title, slug),
        slug,
        p.file_path,
        p.title,
        p.desc,
        seoDefaultPriority(depth),
        seoDefaultChangefreq(depth),
      ]
    );
    added++;
  }

  // Keep file_path in step for rows that already exist.
  for (const [slug, p] of Object.entries(disk)) {
    await execute('UPDATE pages SET file_path = ? WHERE slug = ? AND file_path <> ?', [
      p.file_path,
      slug,
      p.file_path,
    ]);
  }

  let missing = 0;
  for (const r of await query<{ slug: string; is_cms: number }>('SELECT slug, is_cms FROM pages')) {
    if (!(r.slug in disk) && Number(r.is_cms) !== 1) missing++;
  }

  return { added, missing, total: Object.keys(disk).length };
}

/* ---------------------------------------------------------------------------
 * Effective (resolved) SEO values
 * ------------------------------------------------------------------------ */

export interface PageRow {
  id: number;
  title: string;
  slug: string;
  file_path: string;
  meta_title: string;
  meta_description: string | null;
  canonical_url: string;
  meta_keywords: string;
  robots_meta: string;
  og_title: string;
  og_description: string | null;
  status: string;
  in_sitemap: number;
  priority: string;
  changefreq: string;
  is_cms: number;
  /** The banner behind a CMS page's breadcrumb hero. */
  hero_image: string;
  created_at: string;
  updated_at: string;
}

export interface EffectiveSeo {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  keywords: string;
  og_title: string;
  og_description: string;
  url: string;
}

/** Apply the documented fallbacks to a raw pages row. */
export async function seoEffective(row: PageRow, requestOrigin = ''): Promise<EffectiveSeo> {
  const slug = String(row.slug ?? '');
  const title = String(row.title ?? '').trim();
  let metaTitle = String(row.meta_title ?? '').trim();
  const metaDesc = String(row.meta_description ?? '').trim();
  let canonical = String(row.canonical_url ?? '').trim();
  let robots = String(row.robots_meta ?? '').trim();
  let ogTitle = String(row.og_title ?? '').trim();
  let ogDesc = String(row.og_description ?? '').trim();

  if (metaTitle === '') metaTitle = title !== '' ? `${title} | VALUNXT Capital` : 'VALUNXT Capital';
  if (canonical === '') canonical = await seoPageUrl(slug, requestOrigin);
  if (!(ROBOTS_OPTIONS as readonly string[]).includes(robots)) robots = 'index, follow';
  if (ogTitle === '') ogTitle = metaTitle;
  if (ogDesc === '') ogDesc = metaDesc;

  return {
    title: metaTitle,
    description: metaDesc,
    canonical,
    robots,
    keywords: String(row.meta_keywords ?? '').trim(),
    og_title: ogTitle,
    og_description: ogDesc,
    url: await seoPageUrl(slug, requestOrigin),
  };
}

/* ---------------------------------------------------------------------------
 * Sitemap generation
 * ------------------------------------------------------------------------ */

/** Rows eligible for the sitemap: published, included, and not noindex. */
export async function seoSitemapRows(): Promise<PageRow[]> {
  return query<PageRow>(
    `SELECT * FROM pages
         WHERE status = 'published'
           AND in_sitemap = 1
           AND robots_meta NOT LIKE 'noindex%'
         ORDER BY priority DESC, slug ASC`
  );
}

function xmlEscape(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Write public/sitemap.xml from the current page set. */
export async function seoGenerateSitemap(
  requestOrigin = ''
): Promise<{ ok: boolean; count: number; path: string; error: string }> {
  const rows = await seoSitemapRows();

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  for (const r of rows) {
    const eff = await seoEffective(r, requestOrigin);
    const loc = eff.canonical !== '' ? eff.canonical : eff.url;
    const when = new Date(r.updated_at ?? Date.now());
    const day = Number.isNaN(when.getTime()) ? new Date() : when;
    xml += '    <url>\n';
    xml += `        <loc>${xmlEscape(loc)}</loc>\n`;
    xml += `        <lastmod>${day.toISOString().slice(0, 10)}</lastmod>\n`;
    xml += `        <changefreq>${xmlEscape(String(r.changefreq))}</changefreq>\n`;
    xml += `        <priority>${Number(r.priority).toFixed(1)}</priority>\n`;
    xml += '    </url>\n';
  }
  xml += '</urlset>\n';

  const target = seoSitemapPath();
  try {
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, xml, 'utf8');
  } catch (e) {
    return {
      ok: false,
      count: 0,
      path: target,
      error: `Could not write ${target}. Check folder permissions. (${String(e)})`,
    };
  }

  const count = rows.length;
  try {
    await seoSettingSet('sitemap_generated_at', new Date().toISOString().slice(0, 19).replace('T', ' '));
    await seoSettingSet('sitemap_url_count', String(count));
  } catch {
    /* non-fatal */
  }

  return { ok: true, count, path: target, error: '' };
}

/* ---------------------------------------------------------------------------
 * Front-end cache
 * ------------------------------------------------------------------------ */

/**
 * Write src/data/seo-map.json — the resolved SEO values keyed by slug. The
 * public site reads this file instead of the database so page views stay fast
 * and keep working if MySQL is unavailable.
 */
export async function seoWriteCache(
  requestOrigin = ''
): Promise<{ ok: boolean; count: number; path: string; error: string }> {
  const rows = await query<PageRow>('SELECT * FROM pages ORDER BY slug ASC');

  const map: Record<string, Record<string, string>> = {};
  for (const r of rows) {
    const eff = await seoEffective(r, requestOrigin);
    map[String(r.slug)] = {
      title: eff.title,
      description: eff.description,
      // Only an explicitly set canonical is cached; when it is blank the front
      // end derives one from the live request, so the same cache file stays
      // correct on localhost and in production.
      canonical: String(r.canonical_url ?? '').trim(),
      robots: r.status === 'published' ? eff.robots : 'noindex, nofollow',
      keywords: eff.keywords,
      og_title: eff.og_title,
      og_description: eff.og_description,
    };
  }

  const target = seoCachePath();
  try {
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, JSON.stringify(map, null, 2) + '\n', 'utf8');
  } catch (e) {
    return { ok: false, count: 0, path: target, error: `Could not write ${target}. (${String(e)})` };
  }

  return { ok: true, count: Object.keys(map).length, path: target, error: '' };
}

/**
 * Regenerate every derived artefact. Called after any page create, update,
 * slug change, publish/unpublish or delete.
 */
export async function seoRegenerate(
  requestOrigin = ''
): Promise<{ ok: boolean; count: number; errors: string[] }> {
  const errors: string[] = [];
  const map = await seoWriteCache(requestOrigin);
  if (!map.ok) errors.push(map.error);
  const sm = await seoGenerateSitemap(requestOrigin);
  if (!sm.ok) errors.push(sm.error);
  return { ok: errors.length === 0, count: sm.count, errors };
}

/* ---------------------------------------------------------------------------
 * Convenience accessors used by the admin screens
 * ------------------------------------------------------------------------ */

export async function seoPage(id: number): Promise<PageRow | null> {
  const rows = await query<PageRow>('SELECT * FROM pages WHERE id = ? LIMIT 1', [id]);
  return rows[0] ?? null;
}

export async function seoPageBySlug(slug: string): Promise<PageRow | null> {
  const rows = await query<PageRow>('SELECT * FROM pages WHERE slug = ? LIMIT 1', [slug]);
  return rows[0] ?? null;
}

/** Shared ORDER BY for the admin listing: home first, then alphabetical. */
const PAGES_ORDER = "ORDER BY slug = '' DESC, slug ASC";

function pagesFilter(q: string): { where: string; args: string[] } {
  const t = q.trim();
  if (t === '') return { where: '', args: [] };
  const like = '%' + t.replace(/[\\%_]/g, (c) => '\\' + c) + '%';
  return { where: 'WHERE (title LIKE ? OR slug LIKE ? OR meta_title LIKE ?)', args: [like, like, like] };
}

export async function seoPagesCount(q = ''): Promise<number> {
  const { where, args } = pagesFilter(q);
  const rows = await query<{ n: number }>(`SELECT COUNT(*) AS n FROM pages ${where}`, args);
  return Number(rows[0]?.n ?? 0);
}

export async function seoPagesSlice(q = '', limit = 10, offset = 0): Promise<PageRow[]> {
  const { where, args } = pagesFilter(q);
  const lim = Math.max(1, Math.trunc(limit));
  const off = Math.max(0, Math.trunc(offset));
  // LIMIT/OFFSET are integers by construction above, so interpolating them is
  // safe — MySQL will not take them as bound parameters with prepares on.
  return query<PageRow>(`SELECT * FROM pages ${where} ${PAGES_ORDER} LIMIT ${lim} OFFSET ${off}`, args);
}

export interface SeoStats {
  total: number;
  published: number;
  draft: number;
  sitemap: number;
  noindex: number;
}

export async function seoStats(): Promise<SeoStats> {
  const one = async (sql: string) => Number((await query<{ n: number }>(sql))[0]?.n ?? 0);
  return {
    total: await one('SELECT COUNT(*) AS n FROM pages'),
    published: await one("SELECT COUNT(*) AS n FROM pages WHERE status = 'published'"),
    draft: await one("SELECT COUNT(*) AS n FROM pages WHERE status <> 'published'"),
    sitemap: (await seoSitemapRows()).length,
    noindex: await one("SELECT COUNT(*) AS n FROM pages WHERE robots_meta LIKE 'noindex%'"),
  };
}

/** Whether the page behind a row still exists on the site. */
export function seoPageExists(row: PageRow): boolean {
  if (Number(row.is_cms) === 1) return true;
  return row.slug in seoScanSite();
}

/** The hero banners a new CMS page can choose from. */
export function seoHeroImages(): string[] {
  const dir = path.join(seoRoot(), 'public', 'assets', 'content', 'uploads', 'banners');
  try {
    return fsSync
      .readdirSync(dir)
      .filter((f) => /\.(webp|jpe?g|png)$/i.test(f))
      .sort()
      .map((f) => '/assets/content/uploads/banners/' + f);
  } catch {
    return [];
  }
}

/**
 * Create the CMS record for a new page.
 *
 * The PHP panel scaffolded a folder and an index.php on disk. A Next.js route
 * cannot appear at runtime, so CMS pages are served instead by the catch-all
 * route (src/app/[region]/[...slug]/page.tsx), which renders the same shared
 * page-hero + subscribe body from this row. The page is therefore live the
 * moment it is saved, with no redeploy — which is what the old scaffolding was
 * trying to achieve.
 */
export function seoCmsFilePath(slug: string): string {
  return `src/app/[region]/[...slug]/page.tsx#/${String(slug).replace(/^\/+|\/+$/g, '')}/`;
}
