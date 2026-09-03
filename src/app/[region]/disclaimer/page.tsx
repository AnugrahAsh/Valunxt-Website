import { definePage } from '@/lib/page-factory';
import DisclaimerBody from '@/components/pages/DisclaimerBody';

const { generateMetadata, Page } = definePage('/disclaimer/', ({ page, region }) => (
  <DisclaimerBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
