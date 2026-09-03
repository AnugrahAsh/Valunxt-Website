import { definePage } from '@/lib/page-factory';
import ResearchIntelligenceBody from '@/components/pages/ResearchIntelligenceBody';

const { generateMetadata, Page } = definePage('/services/research-intelligence/', ({ page, region }) => (
  <ResearchIntelligenceBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
