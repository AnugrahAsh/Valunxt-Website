import { definePage } from '@/lib/page-factory';
import IndustriesBody from '@/components/pages/IndustriesBody';

const { generateMetadata, Page } = definePage('/industries/', ({ page, region }) => (
  <IndustriesBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
