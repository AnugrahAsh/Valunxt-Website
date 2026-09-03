/**
 * /about/leadership/
 *
 * The page is only a page once there are people on it. src/data/leadership.ts
 * ships empty on purpose — see the note at the top of that file — so until it is
 * populated this URL 404s rather than publishing an empty team page or, worse,
 * invented biographies. Add entries there and the page goes live.
 */
import { notFound } from 'next/navigation';

import { definePage } from '@/lib/page-factory';
import PageHeroSection from '@/components/sections/PageHeroSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import SubscribeSection from '@/components/sections/SubscribeSection';
import LEADERSHIP from '@/data/leadership';

const { generateMetadata, Page } = definePage('/about/leadership/', ({ page, region }) => {
  if (!LEADERSHIP.length) notFound();
  return (
    <>
      <PageHeroSection page={page} region={region} />
      <LeadershipSection />
      <SubscribeSection page={page} region={region} />
    </>
  );
});

export { generateMetadata };
export default Page;
