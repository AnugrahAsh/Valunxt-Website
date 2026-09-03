/**
 * /track-record/
 *
 * src/data/track-record.ts ships empty on purpose — see the note at the top of
 * that file. A track-record page whose job is to substantiate figures cannot be
 * published with figures nobody has substantiated, so until `metrics` is
 * populated this URL 404s. Fill it in and the page goes live.
 */
import { notFound } from 'next/navigation';

import { definePage } from '@/lib/page-factory';
import PageHeroSection from '@/components/sections/PageHeroSection';
import TrackRecordSection from '@/components/sections/TrackRecordSection';
import SubscribeSection from '@/components/sections/SubscribeSection';
import TRACK_RECORD from '@/data/track-record';

const { generateMetadata, Page } = definePage('/track-record/', ({ page, region }) => {
  if (!TRACK_RECORD.metrics.length) notFound();
  return (
    <>
      <PageHeroSection page={page} region={region} />
      <TrackRecordSection region={region} />
      <SubscribeSection page={page} region={region} />
    </>
  );
});

export { generateMetadata };
export default Page;
