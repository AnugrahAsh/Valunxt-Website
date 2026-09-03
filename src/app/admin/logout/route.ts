/**
 * Sign the current administrator out and return to the login page.
 *
 * Port of admin/logout.php.
 */
import { NextResponse, type NextRequest } from 'next/server';
import { adminUrl } from '@/lib/admin/config';

export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL(adminUrl(''), req.url), 302);
  res.cookies.delete('vxn_admin');
  res.cookies.delete('vxn_admin_csrf');
  return res;
}
