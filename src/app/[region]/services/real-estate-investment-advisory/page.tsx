import { definePage } from '@/lib/page-factory';
import RealEstateInvestmentAdvisoryBody from '@/components/pages/RealEstateInvestmentAdvisoryBody';

const { generateMetadata, Page } = definePage('/services/real-estate-investment-advisory/', ({ page, region }) => (
  <RealEstateInvestmentAdvisoryBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
