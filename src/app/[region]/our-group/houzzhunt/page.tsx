import { definePage } from '@/lib/page-factory';
import HouzzhuntBody from '@/components/pages/HouzzhuntBody';

const { generateMetadata, Page } = definePage('/our-group/houzzhunt/', ({ page, region }) => (
  <HouzzhuntBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
