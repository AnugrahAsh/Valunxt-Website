/**
 * The market segment.
 *
 * Every page lives inside an edition — /en-in/… or /en-ae/… — exactly as the
 * PHP build published them. An unknown first segment is a 404, so /foo/ does
 * not silently render the India site.
 */
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { vxnRegionExists, vxnRegionList } from '@/lib/region';

export function generateStaticParams() {
  return vxnRegionList().map((r) => ({ region: r.slug }));
}

export default async function RegionLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  if (!vxnRegionExists(region)) notFound();
  return <>{children}</>;
}
