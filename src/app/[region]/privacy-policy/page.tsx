import { definePage } from '@/lib/page-factory';
import PrivacyPolicyBody from '@/components/pages/PrivacyPolicyBody';

const { generateMetadata, Page } = definePage('/privacy-policy/', ({ page, region }) => (
  <PrivacyPolicyBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
