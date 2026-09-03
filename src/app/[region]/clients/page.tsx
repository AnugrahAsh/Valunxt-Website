import { definePage } from '@/lib/page-factory';
import ClientsBody from '@/components/pages/ClientsBody';

const { generateMetadata, Page } = definePage('/clients/', ({ page, region }) => (
  <ClientsBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
