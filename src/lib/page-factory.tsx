/**
 * One place where a route becomes a page.
 *
 * Each PHP template was the same four lines — declare `$PAGE`, require head,
 * require header, require the section partials, require footer. definePage()
 * keeps that shape: a route file names its registry path and lists its
 * sections, and everything else (metadata, the chrome, the region param) is
 * handled here rather than repeated forty times.
 */
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import PageShell from '@/components/layout/PageShell';
import { buildMetadata } from './seo';
import { requirePageConfig } from './pages';
import { vxnRegion } from './region';
import type { PageConfig } from './page-config';

export interface PageContext {
  page: PageConfig;
  region: string;
}

type RouteParams = { params: Promise<{ region: string }> };

export function definePage(path: string, render: (ctx: PageContext) => ReactNode) {
  async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
    const { region } = await params;
    return buildMetadata(requirePageConfig(path), vxnRegion(region));
  }

  async function Page({ params }: RouteParams) {
    const { region: raw } = await params;
    const region = vxnRegion(raw);
    const page = requirePageConfig(path);
    return (
      <PageShell page={page} region={region}>
        {render({ page, region })}
      </PageShell>
    );
  }

  return { generateMetadata, Page };
}

/**
 * The two market home pages are separate templates that share a route, so they
 * pick their body by region rather than by path.
 */
export function defineHome(render: (ctx: PageContext) => ReactNode) {
  async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
    const { region: raw } = await params;
    const region = vxnRegion(raw);
    return buildMetadata(requirePageConfig(`/${region}/`), region);
  }

  async function Page({ params }: RouteParams) {
    const { region: raw } = await params;
    const region = vxnRegion(raw);
    const page = requirePageConfig(`/${region}/`);
    return (
      <PageShell page={page} region={region}>
        {render({ page, region })}
      </PageShell>
    );
  }

  return { generateMetadata, Page };
}
