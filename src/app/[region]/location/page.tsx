import { definePage } from '@/lib/page-factory';
import LocationBody from '@/components/pages/LocationBody';

const { generateMetadata, Page } = definePage('/location/', ({ page, region }) => (
  <LocationBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
