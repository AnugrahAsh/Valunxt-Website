/**
 * The 404 page.
 *
 * Served for any URL with no page behind it — what `ErrorDocument 404 /404/` in
 * .htaccess pointed at. It renders in the India edition's chrome, because a
 * request that reached here carries no market of its own.
 */
import PageShell from '@/components/layout/PageShell';
import NotFoundBody from '@/components/pages/NotFoundBody';
import { requirePageConfig } from '@/lib/pages';
import { vxnRegionDefault } from '@/lib/region';

export default function NotFound() {
  const page = requirePageConfig('/404/');
  const region = vxnRegionDefault();
  return (
    <PageShell page={page} region={region}>
      <NotFoundBody page={page} region={region} />
    </PageShell>
  );
}
