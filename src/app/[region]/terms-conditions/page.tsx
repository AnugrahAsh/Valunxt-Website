import { definePage } from '@/lib/page-factory';
import TermsConditionsBody from '@/components/pages/TermsConditionsBody';

const { generateMetadata, Page } = definePage('/terms-conditions/', ({ page, region }) => (
  <TermsConditionsBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
