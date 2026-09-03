import { definePage } from '@/lib/page-factory';
import AboutBody from '@/components/pages/AboutBody';

const { generateMetadata, Page } = definePage('/about/', ({ page, region }) => (
  <AboutBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
