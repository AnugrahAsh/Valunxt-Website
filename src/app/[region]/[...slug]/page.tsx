/**
 * Pages created in the admin panel.
 *
 * The PHP panel scaffolded a folder and an index.php on disk whenever an
 * administrator added a page. A Next.js route cannot appear at runtime, so a
 * CMS page is served from its database row instead — through the same shared
 * page-hero + subscribe body the scaffolded file used. The page is live the
 * moment it is saved, with no redeploy.
 *
 * Every built-in route is more specific than this catch-all, so this only ever
 * answers for a CMS page — or 404s, which is what an unknown URL should do.
 */
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import PageShell from '@/components/layout/PageShell';
import PageHeroSection from '@/components/sections/PageHeroSection';
import SubscribeSection from '@/components/sections/SubscribeSection';
import { buildMetadata } from '@/lib/seo';
import { vxnRegion } from '@/lib/region';
import type { PageConfig } from '@/lib/page-config';
import { seoPageBySlug, type PageRow } from '@/lib/admin/seo-lib';

type Params = { params: Promise<{ region: string; slug: string[] }> };

/** The PageConfig a CMS row stands for — the shape the scaffolded file had. */
function configFor(row: PageRow): PageConfig {
  const slug = String(row.slug);
  const postId = 9000 + (Math.abs(hash(slug)) % 900);
  return {
    title: row.meta_title || `${row.title} | VALUNXT Capital`,
    desc: String(row.meta_description ?? ''),
    og_image: '/assets/content/uploads/2025/03/valunxt-og.png',
    body:
      `wp-singular page-template-default page page-id-${postId} wp-custom-logo wp-embed-responsive ` +
      'wp-theme-execor full header-layout-logo-menu has-page-header no-middle-header responsive-layout ' +
      'vamtam-is-elementor elementor-active elementor-pro-active vamtam-font-smoothing layout-full ' +
      `elementor-default elementor-kit-5 elementor-page elementor-page-${postId} elementor-page-3752`,
    post_css: ['5', '3837', '2094', '3752', '4557'],
    header: '3837',
    footer: '2094',
    canvas: false,
    post_id: postId,
    post_title: encodeURIComponent(row.title),
    post_excerpt: String(row.meta_description ?? ''),
    active_nav: [`/${slug}/`],
    inline_css: '',
    hero_title: row.title,
    hero_image: row.hero_image || '/assets/content/uploads/banners/about-us.webp',
    path: `/${slug}/`,
    robots: row.status === 'published' ? undefined : 'noindex, nofollow',
  };
}

/** The stable post id the PHP scaffolder derived with crc32(). */
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h;
}

async function load(slugParts: string[]): Promise<PageRow | null> {
  const slug = slugParts.map(decodeURIComponent).join('/');
  if (slug === '') return null;
  try {
    const row = await seoPageBySlug(slug);
    // Only CMS-created pages are served from the database; a row that mirrors a
    // built-in route must never shadow it.
    return row && Number(row.is_cms) === 1 ? row : null;
  } catch {
    // No database — nothing to serve, which is the same answer as "no page".
    return null;
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { region, slug } = await params;
  const row = await load(slug);
  if (!row) return {};
  return buildMetadata(configFor(row), vxnRegion(region));
}

export default async function CmsPage({ params }: Params) {
  const { region: raw, slug } = await params;
  const region = vxnRegion(raw);
  const row = await load(slug);
  if (!row) notFound();

  const page = configFor(row);
  return (
    <PageShell page={page} region={region}>
      <PageHeroSection page={page} region={region} />
      <SubscribeSection page={page} region={region} />
    </PageShell>
  );
}
