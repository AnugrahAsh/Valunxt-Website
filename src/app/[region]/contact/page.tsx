import { definePage } from '@/lib/page-factory';
import ContactBody from '@/components/pages/ContactBody';

const { generateMetadata, Page } = definePage('/contact/', ({ page, region }) => (
  <ContactBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
