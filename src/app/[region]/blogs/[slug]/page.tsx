/**
 * A published blog article.
 *
 * The four posts were four near-identical PHP files: the same $PAGE shape, the
 * same $ARTICLE shape and the same three requires, differing only in their copy.
 * One route now serves all of them from src/data/articles.ts — which is what
 * "reduce the number of files where only the content changes" means here.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PageShell from '@/components/layout/PageShell';
import BlogArticleSection from '@/components/sections/BlogArticleSection';
import ARTICLES from '@/data/articles';
import BLOG_CATALOG from '@/data/blog-catalog';
import { buildMetadata } from '@/lib/seo';
import { pageConfig } from '@/lib/pages';
import { vxnRegion, vxnRegionList } from '@/lib/region';

type Params = { params: Promise<{ region: string; slug: string }> };

export function generateStaticParams() {
  return vxnRegionList().flatMap((r) =>
    Object.keys(BLOG_CATALOG).map((slug) => ({ region: r.slug, slug }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { region, slug } = await params;
  const page = pageConfig(`/blogs/${slug}/`);
  if (!page) return {};
  return buildMetadata(page, vxnRegion(region));
}

export default async function BlogPostPage({ params }: Params) {
  const { region: raw, slug } = await params;
  const region = vxnRegion(raw);
  const article = ARTICLES[slug];
  const page = pageConfig(`/blogs/${slug}/`);
  if (!article || !page) notFound();

  return (
    <PageShell page={page} region={region}>
      <BlogArticleSection article={article} page={page} region={region} />
    </PageShell>
  );
}
