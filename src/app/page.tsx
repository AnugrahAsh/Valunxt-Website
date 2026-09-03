/**
 * Region gateway.
 *
 * The site is published as one edition per market — /en-in/ (India) and
 * /en-ae/ (UAE) — so the root is not a page any more. Middleware normally
 * forwards a bare URL to the visitor's edition before this ever renders; this
 * is the fallback for the case where it does not (a static export, a host with
 * middleware disabled).
 *
 * A 307 rather than a 308: the answer depends on the visitor, so it must not be
 * cached as if it were the one true destination for everybody.
 */
import { redirect } from 'next/navigation';
import { cookies, headers } from 'next/headers';
import { vxnRegionDefault, vxnRegionExists } from '@/lib/region';

export const dynamic = 'force-dynamic';

export default async function RootGateway() {
  const cookieStore = await cookies();
  const remembered = cookieStore.get('vxn_region')?.value;
  if (vxnRegionExists(remembered)) redirect(`/${remembered}/`);

  const h = await headers();
  const cc = (h.get('cf-ipcountry') ?? h.get('x-vercel-ip-country') ?? '').toUpperCase();
  if (cc === 'AE') redirect('/en-ae/');
  if (cc === 'IN') redirect('/en-in/');

  redirect(`/${vxnRegionDefault()}/`);
}
