import { definePage } from '@/lib/page-factory';
import BlogsBody from '@/components/pages/BlogsBody';

const { generateMetadata, Page } = definePage('/blogs/', ({ page, region }) => (
  <BlogsBody page={page} region={region} />
));

export { generateMetadata };
export default Page;
