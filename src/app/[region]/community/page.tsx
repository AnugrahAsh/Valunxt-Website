import { definePage } from '@/lib/page-factory';
import PageHeroSection from '@/components/sections/PageHeroSection';
import CommunitySection from '@/components/sections/CommunitySection';
import SubscribeSection from '@/components/sections/SubscribeSection';

const { generateMetadata, Page } = definePage('/community/', ({ page, region }) => (
  <>
    <PageHeroSection page={page} region={region} />
    <CommunitySection region={region} />
    <SubscribeSection page={page} region={region} />
  </>
));

export { generateMetadata };
export default Page;
