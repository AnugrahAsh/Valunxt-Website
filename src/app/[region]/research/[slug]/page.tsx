/**
 * A published research report.
 *
 * The five report pages were five PHP files with the same template and the same
 * keys — report_type, crumbs, topics, intro, takeaways, pdf — differing only in
 * their content. One route serves all of them from the page registry.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import PageShell from '@/components/layout/PageShell';
import ResearchDetailSection from '@/components/sections/ResearchDetailSection';
import SubscribeSection from '@/components/sections/SubscribeSection';
import { buildMetadata } from '@/lib/seo';
import { pageConfig, type ReportPageConfig } from '@/lib/pages';
import { vxnRegion, vxnRegionList } from '@/lib/region';

/** The reports that have their own page, in publication order. */
const REPORT_SLUGS = [
  'insights-2026',
  'india-real-estate-outlook-2026',
  'dubai-residential-market-review',
  'nri-investment-trends',
  'commercial-yields-capital-values',
];

type Params = { params: Promise<{ region: string; slug: string }> };

export function generateStaticParams() {
  return vxnRegionList().flatMap((r) =>
    REPORT_SLUGS.map((slug) => ({ region: r.slug, slug }))
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { region, slug } = await params;
  const page = pageConfig(`/research/${slug}/`);
  if (!page) return {};
  return buildMetadata(page, vxnRegion(region));
}

export default async function ResearchReportPage({ params }: Params) {
  const { region: raw, slug } = await params;
  const region = vxnRegion(raw);
  const page = pageConfig(`/research/${slug}/`) as ReportPageConfig | null;
  if (!page) notFound();

  return (
    <PageShell page={page} region={region}>
      <ResearchDetailSection page={page} region={region} />
      <SubscribeSection page={page} region={region} />
    </PageShell>
  );
}
