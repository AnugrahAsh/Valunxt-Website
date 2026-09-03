import { definePage } from '@/lib/page-factory';
import ValunxtCorporateServicesBody from '@/components/pages/ValunxtCorporateServicesBody';

const { generateMetadata, Page } = definePage('/our-group/valunxt-corporate-services/', ({ page, region }) => (
  <ValunxtCorporateServicesBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
