import { definePage } from '@/lib/page-factory';
import ReliantSurveyorsBody from '@/components/pages/ReliantSurveyorsBody';

const { generateMetadata, Page } = definePage('/our-group/reliant-surveyors/', ({ page, region }) => (
  <ReliantSurveyorsBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
