'use server';

/**
 * Every write the admin panel performs.
 *
 * The PHP screens each handled their own `if ($_SERVER['REQUEST_METHOD'] ===
 * 'POST')` block, set a `$_SESSION['flash']` and redirected. These are the same
 * operations as Server Actions: same validation, same messages, same
 * post-redirect-get, and every operation that can change what search engines
 * see still finishes by calling seoRegenerate().
 */
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

import { adminUrl } from './config';
import { attemptLogin } from './db';
import { execute, query } from './db';
import { csrfOk, loginUser, logoutUser, setFlash } from './session';
import {
  CHANGEFREQ_OPTIONS,
  ROBOTS_OPTIONS,
  seoCmsFilePath,
  seoNormalizeSlug,
  seoPage,
  seoRegenerate,
  seoSettingSet,
  seoSlugTaken,
  seoSyncPages,
  type PageRow,
} from './seo-lib';

/** Scheme + host of the panel request, so generated URLs match the site. */
async function requestOrigin(): Promise<string> {
  const h = await headers();
  const host = h.get('x-forwarded-host') ?? h.get('host') ?? '';
  if (!host) return '';
  const proto =
    h.get('x-forwarded-proto') ??
    (host.startsWith('localhost') || host.startsWith('127.') ? 'http' : 'https');
  return `${proto}://${host}`;
}

/** The public pages whose rendered output depends on the SEO cache. */
function revalidateSite() {
  revalidatePath('/', 'layout');
}

/* ---- Session ------------------------------------------------------------- */

export async function loginAction(_prev: { error?: string } | null, form: FormData) {
  const email = String(form.get('email') ?? '').trim();
  const password = String(form.get('password') ?? '');

  if (email === '' || password === '') {
    return { error: 'Please enter both your email and password.', email };
  }

  let user;
  try {
    user = await attemptLogin(email, password);
  } catch {
    return {
      error: 'Could not reach the database. Please ensure MySQL is running.',
      email,
    };
  }

  if (!user) {
    return { error: 'Invalid credentials. Please check your email and password.', email };
  }

  await loginUser({ id: user.id, name: user.name, email: user.email, role: user.role });
  redirect(adminUrl('dashboard'));
}

export async function logoutAction() {
  await logoutUser();
  redirect(adminUrl(''));
}

/* ---- Enquiries ----------------------------------------------------------- */

export async function deleteEnquiryAction(form: FormData) {
  const token = String(form.get('csrf') ?? '');
  const id = Number(form.get('id') ?? 0);

  if (!(await csrfOk(token))) {
    await setFlash({ err: 'Your session expired. Please try again.' });
  } else if (id > 0) {
    try {
      const res = await execute('DELETE FROM enquiries WHERE id = ?', [id]);
      await setFlash({
        ok: res.affectedRows ? 'Enquiry deleted.' : 'That enquiry no longer exists.',
      });
    } catch {
      await setFlash({ err: 'Could not delete the enquiry.' });
    }
  }
  redirect(adminUrl('enquiries'));
}

/* ---- Pages listing ------------------------------------------------------- */

export async function pagesOpAction(form: FormData) {
  const op = String(form.get('op') ?? '');
  const id = Number(form.get('id') ?? 0);
  const back = String(form.get('back') ?? adminUrl('pages'));
  const origin = await requestOrigin();

  if (!(await csrfOk(String(form.get('csrf') ?? '')))) {
    await setFlash({ err: 'Your session expired. Please try again.' });
    redirect(back);
  }

  try {
    if (op === 'sync') {
      const res = await seoSyncPages();
      await seoRegenerate(origin);
      const ok =
        res.added > 0
          ? `${res.added} new page${res.added === 1 ? '' : 's'} imported from the website. Sitemap regenerated.`
          : 'No new pages found — the CMS is already in step with the website.';
      const err =
        res.missing > 0
          ? `${res.missing} page record${res.missing === 1 ? ' has' : 's have'} no matching page on the website and are flagged below.`
          : undefined;
      await setFlash({ ok, err });
    } else if (op === 'toggle_status') {
      const page = await seoPage(id);
      if (page) {
        const next = page.status === 'published' ? 'draft' : 'published';
        await execute('UPDATE pages SET status = ? WHERE id = ?', [next, id]);
        await seoRegenerate(origin);
        await setFlash({ ok: `“${page.title}” is now ${next}. Sitemap regenerated.` });
      }
    } else if (op === 'toggle_sitemap') {
      const page = await seoPage(id);
      if (page) {
        const next = Number(page.in_sitemap) === 1 ? 0 : 1;
        await execute('UPDATE pages SET in_sitemap = ? WHERE id = ?', [next, id]);
        await seoRegenerate(origin);
        await setFlash({
          ok: `“${page.title}” ${next ? 'added to' : 'removed from'} the sitemap.`,
        });
      }
    } else if (op === 'delete') {
      const page = await seoPage(id);
      if (page) {
        const wasCms = Number(page.is_cms) === 1;
        await execute('DELETE FROM pages WHERE id = ?', [id]);
        await seoRegenerate(origin);
        await setFlash({
          ok: `“${page.title}” deleted${wasCms ? ' along with its page' : ' from the CMS'}. Sitemap regenerated.`,
        });
      }
    }
  } catch (e) {
    await setFlash({ err: 'That action could not be completed: ' + String(e) });
  }

  revalidateSite();
  redirect(back);
}

/* ---- Page editor --------------------------------------------------------- */

export interface PageFormState {
  errors?: Record<string, string>;
  values?: Record<string, string | number>;
}

export async function savePageAction(
  _prev: PageFormState | null,
  form: FormData
): Promise<PageFormState> {
  const origin = await requestOrigin();
  const isNew = String(form.get('mode') ?? '') === 'new';
  const id = Number(form.get('id') ?? 0);

  if (!(await csrfOk(String(form.get('csrf') ?? '')))) {
    return { errors: { general: 'Your session expired. Please submit the form again.' } };
  }

  const s = (k: string) => String(form.get(k) ?? '').trim();
  const values: Record<string, string | number> = {
    title: s('title'),
    slug: s('slug'),
    meta_title: s('meta_title'),
    meta_description: s('meta_description'),
    canonical_url: s('canonical_url'),
    meta_keywords: s('meta_keywords'),
    robots_meta: s('robots_meta'),
    og_title: s('og_title'),
    og_description: s('og_description'),
    status: s('status'),
    changefreq: s('changefreq'),
    priority: s('priority'),
    hero_image: s('hero_image'),
    in_sitemap: form.get('in_sitemap') ? 1 : 0,
  };

  let existing: PageRow | null = null;
  if (!isNew) {
    existing = await seoPage(id);
    if (!existing) {
      await setFlash({ err: 'That page no longer exists.' });
      redirect(adminUrl('pages'));
    }
  }
  const isHome = !isNew && String(existing!.slug) === '';

  const errors: Record<string, string> = {};

  if (values.title === '') errors.title = 'A page title is required.';
  else if (String(values.title).length > 200)
    errors.title = 'Keep the page title under 200 characters.';

  const slug = isHome
    ? ''
    : seoNormalizeSlug(values.slug !== '' ? String(values.slug) : String(values.title));
  if (!isHome && slug === '') {
    errors.slug = 'A URL slug is required — use letters, numbers and hyphens.';
  } else if (!isHome && (await seoSlugTaken(slug, isNew ? 0 : id))) {
    errors.slug = `The slug “${slug}” is already used by another page. Choose a different one.`;
  }
  values.slug = slug;

  if (String(values.meta_title).length > 255)
    errors.meta_title = 'Keep the meta title under 255 characters.';
  if (String(values.meta_description).length > 500)
    errors.meta_description = 'Keep the meta description under 500 characters.';
  if (String(values.meta_keywords).length > 500)
    errors.meta_keywords = 'Keep the keyword list under 500 characters.';
  if (values.canonical_url !== '' && !/^https?:\/\/[^\s]+$/i.test(String(values.canonical_url))) {
    errors.canonical_url =
      'Enter a full URL including https://, or leave this blank to generate one automatically.';
  }
  if (!(ROBOTS_OPTIONS as readonly string[]).includes(String(values.robots_meta))) {
    values.robots_meta = 'index, follow';
  }
  if (!(CHANGEFREQ_OPTIONS as readonly string[]).includes(String(values.changefreq))) {
    values.changefreq = 'monthly';
  }
  let priority = Number(values.priority);
  if (!(priority >= 0 && priority <= 1)) priority = 0.5;
  values.priority = priority.toFixed(1);
  if (!['published', 'draft'].includes(String(values.status))) values.status = 'published';

  if (Object.keys(errors).length) return { errors, values };

  try {
    if (isNew) {
      const res = await execute(
        `INSERT INTO pages
            (title, slug, file_path, meta_title, meta_description, canonical_url,
             meta_keywords, robots_meta, og_title, og_description,
             status, in_sitemap, priority, changefreq, hero_image, is_cms)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,1)`,
        [
          values.title,
          values.slug,
          seoCmsFilePath(String(values.slug)),
          values.meta_title,
          values.meta_description,
          values.canonical_url,
          values.meta_keywords,
          values.robots_meta,
          values.og_title,
          values.og_description,
          values.status,
          values.in_sitemap,
          values.priority,
          values.changefreq,
          values.hero_image || '/assets/content/uploads/banners/about-us.webp',
        ]
      );
      const gen = await seoRegenerate(origin);
      await setFlash({
        ok: `Page “${values.title}” created at /${values.slug}/. Sitemap regenerated with ${gen.count} URLs.`,
      });
      revalidateSite();
      redirect(adminUrl('pages/edit') + '?id=' + res.insertId);
    }

    const oldSlug = String(existing!.slug);
    const notices: string[] = [];

    if (!isHome && values.slug !== oldSlug) {
      // Descendant pages inherit the new parent prefix, as they did in PHP.
      const kids = await query<{ id: number; slug: string }>(
        'SELECT id, slug FROM pages WHERE slug LIKE ? AND id <> ?',
        [oldSlug + '/%', id]
      );
      for (const kid of kids) {
        const kidSlug = values.slug + kid.slug.slice(oldSlug.length);
        await execute('UPDATE pages SET slug = ?, file_path = ? WHERE id = ?', [
          kidSlug,
          seoCmsFilePath(kidSlug),
          kid.id,
        ]);
      }
      if (kids.length) {
        notices.push(`${kids.length} child page${kids.length === 1 ? '' : 's'} moved under the new slug.`);
      }
      if (Number(existing!.is_cms) !== 1) {
        notices.push(
          'This page is a built-in route, so its URL is defined in the codebase — the new slug changes its SEO record only.'
        );
      }
    }

    await execute(
      `UPDATE pages SET
            title = ?, slug = ?, meta_title = ?, meta_description = ?,
            canonical_url = ?, meta_keywords = ?, robots_meta = ?, og_title = ?,
            og_description = ?, status = ?, in_sitemap = ?, priority = ?, changefreq = ?,
            hero_image = ?
         WHERE id = ?`,
      [
        values.title,
        values.slug,
        values.meta_title,
        values.meta_description,
        values.canonical_url,
        values.meta_keywords,
        values.robots_meta,
        values.og_title,
        values.og_description,
        values.status,
        values.in_sitemap,
        values.priority,
        values.changefreq,
        values.hero_image || existing!.hero_image || '',
        id,
      ]
    );

    const gen = await seoRegenerate(origin);
    let msg = `SEO settings saved. Sitemap regenerated with ${gen.count} URLs.`;
    if (notices.length) msg += ' ' + notices.join(' ');
    await setFlash({ ok: msg, err: gen.errors.length ? gen.errors.join(' ') : undefined });
    revalidateSite();
    redirect(adminUrl('pages/edit') + '?id=' + id);
  } catch (e) {
    // redirect() throws a control-flow signal; let it through.
    if (e && typeof e === 'object' && 'digest' in e) throw e;
    return { errors: { general: 'The page could not be saved: ' + String(e) }, values };
  }
}

/* ---- Sitemap screen ------------------------------------------------------ */

export async function sitemapOpAction(form: FormData) {
  const op = String(form.get('op') ?? '');
  const origin = await requestOrigin();

  if (!(await csrfOk(String(form.get('csrf') ?? '')))) {
    await setFlash({ err: 'Your session expired. Please try again.' });
    redirect(adminUrl('sitemap'));
  }

  try {
    if (op === 'generate') {
      const res = await seoRegenerate(origin);
      if (res.ok) {
        await setFlash({
          ok: `Sitemap regenerated with ${res.count} URL${res.count === 1 ? '' : 's'}.`,
        });
      } else {
        await setFlash({ err: res.errors.join(' ') });
      }
    } else if (op === 'save_settings') {
      const url = String(form.get('site_url') ?? '').trim().replace(/\/+$/, '');
      if (url !== '' && !/^https?:\/\/[^\s]+$/i.test(url)) {
        await setFlash({
          err: 'Enter a full site URL including https:// — for example https://valunxtcapital.com',
        });
      } else {
        await seoSettingSet('site_url', url);
        const res = await seoRegenerate(origin);
        await setFlash({
          ok:
            url === ''
              ? 'Site URL cleared — URLs are detected from the current request. Sitemap regenerated.'
              : `Site URL saved as ${url}. Sitemap regenerated with ${res.count} URLs.`,
        });
      }
    }
  } catch (e) {
    if (e && typeof e === 'object' && 'digest' in e) throw e;
    await setFlash({ err: 'That action could not be completed: ' + String(e) });
  }

  revalidateSite();
  redirect(adminUrl('sitemap'));
}
