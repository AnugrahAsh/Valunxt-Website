/**
 * The market home page.
 *
 * /en-in/ and /en-ae/ are separate templates so each market gets its own hero,
 * copy and imagery — the split the PHP build made when it moved the home page
 * out of the root into en-in/index.php and en-ae/index.php.
 */
import { defineHome } from '@/lib/page-factory';
import HomeInBody from '@/components/pages/HomeInBody';
import HomeAeBody from '@/components/pages/HomeAeBody';

const { generateMetadata, Page } = defineHome(({ page, region }) =>
  region === 'en-ae' ? (
    <HomeAeBody page={page} region={region} />
  ) : (
    <HomeInBody page={page} region={region} />
  )
);

export { generateMetadata };
export default Page;
