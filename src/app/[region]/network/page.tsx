import { definePage } from '@/lib/page-factory';
import NetworkBody from '@/components/pages/NetworkBody';

const { generateMetadata, Page } = definePage('/network/', ({ page, region }) => (
  <NetworkBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
