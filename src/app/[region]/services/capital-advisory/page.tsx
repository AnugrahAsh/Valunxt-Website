import { definePage } from '@/lib/page-factory';
import CapitalAdvisoryBody from '@/components/pages/CapitalAdvisoryBody';

const { generateMetadata, Page } = definePage('/services/capital-advisory/', ({ page, region }) => (
  <CapitalAdvisoryBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
