import { definePage } from '@/lib/page-factory';
import HouzzhuntMortgageBody from '@/components/pages/HouzzhuntMortgageBody';

const { generateMetadata, Page } = definePage('/our-group/houzzhunt-mortgage/', ({ page, region }) => (
  <HouzzhuntMortgageBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
