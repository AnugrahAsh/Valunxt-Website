/**
 * Admin — Page & SEO editor.
 *
 * Handles both creating a new page (?new=1) and editing an existing one (?id=N).
 * Any successful save regenerates public/sitemap.xml and the front-end SEO
 * cache.
 *
 * Port of admin/page-edit.php.
 */
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

import AdminShell from '@/components/admin/AdminShell';
import { FlashErr, FlashOk } from '@/components/admin/Flash';
import PageEditor, { type EditorForm } from '@/components/admin/PageEditor';
import { adminUrl } from '@/lib/admin/config';
import { csrfToken, currentUser, setFlash, takeFlash } from '@/lib/admin/session';
import { seoHeroImages, seoPage, seoSiteUrl } from '@/lib/admin/seo-lib';

export const metadata: Metadata = {
  title: 'Edit page — VALUNXT Capital Admin',
  robots: 'noindex, nofollow',
};

const NEW_FORM: EditorForm = {
  title: '',
  slug: '',
  meta_title: '',
  meta_description: '',
  canonical_url: '',
  meta_keywords: '',
  robots_meta: 'index, follow',
  og_title: '',
  og_description: '',
  status: 'published',
  in_sitemap: 1,
  priority: '0.8',
  changefreq: 'monthly',
  hero_image: '/assets/content/uploads/banners/about-us.webp',
};

export default async function PageEditPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; new?: string }>;
}) {
  const user = await currentUser();
  if (!user) redirect(adminUrl(''));

  const sp = await searchParams;
  const isNew = sp.new !== undefined;
  const id = Number(sp.id ?? 0);

  let form: EditorForm = NEW_FORM;
  let isHome = false;

  if (!isNew) {
    const page = await seoPage(id);
    if (!page) {
      await setFlash({ err: 'That page no longer exists.' });
      redirect(adminUrl('pages'));
    }
    isHome = String(page.slug) === '';
    form = {
      title: String(page.title ?? ''),
      slug: String(page.slug ?? ''),
      meta_title: String(page.meta_title ?? ''),
      meta_description: String(page.meta_description ?? ''),
      canonical_url: String(page.canonical_url ?? ''),
      meta_keywords: String(page.meta_keywords ?? ''),
      robots_meta: String(page.robots_meta ?? 'index, follow'),
      og_title: String(page.og_title ?? ''),
      og_description: String(page.og_description ?? ''),
      status: String(page.status ?? 'published'),
      in_sitemap: Number(page.in_sitemap ?? 1),
      priority: Number(page.priority ?? 0.5).toFixed(1),
      changefreq: String(page.changefreq ?? 'monthly'),
      hero_image: String(
        (page as unknown as { hero_image?: string }).hero_image ?? ''
      ),
    };
  }

  const flash = await takeFlash();
  const csrf = await csrfToken();
  const site = await seoSiteUrl();
  const heroes = seoHeroImages();
  const heading = isNew ? 'New Page' : 'Edit: ' + form.title;

  return (
    <AdminShell active="pages" user={user}>
      <div className="page-head">
        <div className="crumbs">
          Home <span className="sep">/</span>{' '}
          <a href={adminUrl('pages')} style={{ color: 'inherit' }}>
            Pages &amp; SEO
          </a>{' '}
          <span className="sep">/</span> {isNew ? 'New Page' : 'Edit'}
        </div>
        <h1>{heading}</h1>
        <p>
          {isNew
            ? 'Create a page on the website and set its search-engine metadata in one step.'
            : 'Update the slug, meta tags, canonical URL and robots directive for this page.'}
        </p>
      </div>

      <FlashOk message={flash.ok ?? ''} />
      <FlashErr message={flash.err ?? ''} />

      <PageEditor
        isNew={isNew}
        isHome={isHome}
        id={id}
        csrf={csrf}
        site={site}
        initial={form}
        heroes={heroes}
      />
    </AdminShell>
  );
}
