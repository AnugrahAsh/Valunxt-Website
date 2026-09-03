import { definePage } from '@/lib/page-factory';
import CareersBody from '@/components/pages/CareersBody';

const { generateMetadata, Page } = definePage('/about/careers/', ({ page, region }) => (
  <CareersBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
