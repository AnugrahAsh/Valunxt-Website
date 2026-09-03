import { definePage } from '@/lib/page-factory';
import ResearchBody from '@/components/pages/ResearchBody';

const { generateMetadata, Page } = definePage('/research/', ({ page, region }) => (
  <ResearchBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
