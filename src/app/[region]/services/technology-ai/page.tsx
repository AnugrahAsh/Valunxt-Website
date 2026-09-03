import { definePage } from '@/lib/page-factory';
import TechnologyAiBody from '@/components/pages/TechnologyAiBody';

const { generateMetadata, Page } = definePage('/services/technology-ai/', ({ page, region }) => (
  <TechnologyAiBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
