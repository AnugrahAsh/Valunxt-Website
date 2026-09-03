import { definePage } from '@/lib/page-factory';
import FreeConsultationBody from '@/components/pages/FreeConsultationBody';

const { generateMetadata, Page } = definePage('/free-consultation/', ({ page, region }) => (
  <FreeConsultationBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
