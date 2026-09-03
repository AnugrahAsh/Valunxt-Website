import { definePage } from '@/lib/page-factory';
import OurGroupBody from '@/components/pages/OurGroupBody';

const { generateMetadata, Page } = definePage('/our-group/', ({ page, region }) => (
  <OurGroupBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
