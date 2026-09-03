/**
 * Admin — download sitemap.xml.
 *
 * Streams the generated sitemap as a file attachment. Signed-in users only, and
 * the path is fixed rather than taken from the request.
 *
 * Port of admin/sitemap-download.php.
 */
import fs from 'node:fs/promises';
import { NextResponse, type NextRequest } from 'next/server';

import { adminUrl } from '@/lib/admin/config';
import { currentUser, setFlash } from '@/lib/admin/session';
import { seoSitemapPath } from '@/lib/admin/seo-lib';

export async function GET(req: NextRequest) {
  if (!(await currentUser())) {
    return NextResponse.redirect(new URL(adminUrl(''), req.url), 302);
  }

  let xml: string;
  try {
    xml = await fs.readFile(seoSitemapPath(), 'utf8');
  } catch {
    await setFlash({ err: 'No sitemap has been generated yet. Use “Generate Sitemap” first.' });
    return NextResponse.redirect(new URL(adminUrl('sitemap'), req.url), 302);
  }

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Content-Disposition': 'attachment; filename="sitemap.xml"',
      'Cache-Control': 'no-store',
    },
  });
}
