import { definePage } from '@/lib/page-factory';
import ServicesBody from '@/components/pages/ServicesBody';

const { generateMetadata, Page } = definePage('/services/', ({ page, region }) => (
  <ServicesBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
