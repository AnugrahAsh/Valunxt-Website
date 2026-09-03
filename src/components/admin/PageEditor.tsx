'use client';

/**
 * The live SEO editor: slug suggestions, character counters, Google preview.
 *
 * Port of admin/page-edit.php's form and its inline script. The submit is a
 * Server Action, so the form still works with JavaScript disabled — the script
 * only adds the live preview.
 */
import { useActionState, useEffect, useMemo, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';

import { savePageAction, type PageFormState } from '@/lib/admin/actions';
import { adminUrl, siteUrl } from '@/lib/admin/config';

export interface EditorForm {
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  canonical_url: string;
  meta_keywords: string;
  robots_meta: string;
  og_title: string;
  og_description: string;
  status: string;
  in_sitemap: number;
  priority: string;
  changefreq: string;
  hero_image: string;
}

const ROBOTS = ['index, follow', 'noindex, follow', 'index, nofollow', 'noindex, nofollow'];
const CHANGEFREQ = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
const PRIORITIES = ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1'];

/** Mirror of the server-side slug normaliser, for the live suggestion only. */
function slugify(value: string): string {
  return String(value)
    .toLowerCase()
    .replace(/\s*[|–—-]\s*valunxt.*$/i, '')
    .replace(/&/g, ' and ')
    .split('/')
    .map((part) => part.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
    .filter(Boolean)
    .join('/');
}

function SaveButton({ isNew }: { isNew: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn gold" disabled={pending}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
      </svg>
      {pending ? 'Saving…' : isNew ? 'Create Page' : 'Save SEO Settings'}
    </button>
  );
}

export default function PageEditor({
  isNew,
  isHome,
  id,
  csrf,
  site,
  initial,
  heroes,
}: {
  isNew: boolean;
  isHome: boolean;
  id: number;
  csrf: string;
  site: string;
  initial: EditorForm;
  heroes: string[];
}) {
  const [state, action] = useActionState<PageFormState | null, FormData>(savePageAction, null);
  const errors = state?.errors ?? {};
  const v = { ...initial, ...(state?.values ?? {}) } as EditorForm;

  const [title, setTitle] = useState(String(v.title));
  const [slug, setSlug] = useState(String(v.slug));
  const [metaTitle, setMetaTitle] = useState(String(v.meta_title));
  const [metaDesc, setMetaDesc] = useState(String(v.meta_description));
  const [canonical, setCanonical] = useState(String(v.canonical_url));
  const slugTouched = useRef(!isNew && String(v.slug) !== '');

  // Keep the fields in step when the action returns with validation errors.
  useEffect(() => {
    if (!state?.values) return;
    setTitle(String(state.values.title ?? ''));
    setSlug(String(state.values.slug ?? ''));
    setMetaTitle(String(state.values.meta_title ?? ''));
    setMetaDesc(String(state.values.meta_description ?? ''));
    setCanonical(String(state.values.canonical_url ?? ''));
  }, [state]);

  const autoTitle = useMemo(
    () => (title.trim() ? `${title.trim()} | VALUNXT Capital` : 'VALUNXT Capital'),
    [title]
  );
  const autoCanon = useMemo(() => {
    const s = slug.trim().replace(/^\/+|\/+$/g, '');
    return site + '/' + (s ? s + '/' : '');
  }, [slug, site]);

  const counterClass = (len: number, min: number, max: number) => {
    if (!len) return 'counter';
    return 'counter ' + (len > max ? 'over' : len < min ? 'warn' : 'ok');
  };

  const shownTitle = metaTitle.trim() || autoTitle;
  const shownDesc =
    metaDesc.trim() ||
    'Add a meta description to control the snippet Google shows beneath your page title.';

  return (
    <form action={action} id="seoForm">
      <input type="hidden" name="csrf" value={csrf} />
      <input type="hidden" name="mode" value={isNew ? 'new' : 'edit'} />
      <input type="hidden" name="id" value={id} />

      <div
        className="panel-grid"
        style={{ gridTemplateColumns: 'minmax(0,1.55fr) minmax(0,1fr)', alignItems: 'start' }}
      >
        {/* Left column: the fields */}
        <div>
          <section className="panel">
            <div className="panel-head">
              <h3>Page</h3>
            </div>
            <div className="panel-body">
              <div className="form-grid">
                <div className="fld full">
                  <label htmlFor="title">
                    Page Title <span className="counter">{title.length}</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    maxLength={200}
                    required
                    placeholder="e.g. Investor Relations"
                    onChange={(e) => {
                      setTitle(e.target.value);
                      if (!slugTouched.current && !isHome) setSlug(slugify(e.target.value));
                    }}
                  />
                  {errors.title ? (
                    <div className="hint" style={{ color: 'var(--danger)' }}>
                      {errors.title}
                    </div>
                  ) : null}
                  <div className="hint">
                    The page&rsquo;s name inside the CMS. Also used to suggest the slug and meta
                    title.
                  </div>
                </div>

                <div className="fld full">
                  <label htmlFor="slug">URL Slug</label>
                  <div className="prefix-input">
                    <span className="px">{site}/</span>
                    <input
                      type="text"
                      id="slug"
                      name="slug"
                      value={slug}
                      maxLength={255}
                      readOnly={isHome}
                      placeholder="investor-relations"
                      onChange={(e) => {
                        slugTouched.current = true;
                        setSlug(e.target.value);
                      }}
                      onBlur={(e) => {
                        if (!isHome) setSlug(slugify(e.target.value));
                      }}
                    />
                  </div>
                  {errors.slug ? (
                    <div className="hint" style={{ color: 'var(--danger)' }}>
                      {errors.slug}
                    </div>
                  ) : null}
                  <div className="hint">
                    {isHome ? (
                      'This is the home page, so its URL is fixed.'
                    ) : isNew ? (
                      <>
                        Generated from the page title as you type — edit it if you want something
                        different. Letters, numbers and hyphens only; use <code>/</code> to nest
                        under a parent (e.g. <code>about/team</code>).
                      </>
                    ) : (
                      'Changing the slug updates this page’s SEO record and any child pages beneath it, then regenerates the sitemap.'
                    )}
                  </div>
                </div>

                {isNew && heroes.length ? (
                  <div className="fld full">
                    <label htmlFor="hero_image">Hero Banner Image</label>
                    <select id="hero_image" name="hero_image" defaultValue={String(v.hero_image)}>
                      {heroes.map((img) => (
                        <option value={img} key={img}>
                          {img.split('/').pop()}
                        </option>
                      ))}
                    </select>
                    <div className="hint">
                      Used for the breadcrumb hero on the new page. You can change it later by
                      editing this page.
                    </div>
                  </div>
                ) : !isNew && Number(initial.hero_image !== '' ? 1 : 0) ? (
                  <div className="fld full">
                    <label htmlFor="hero_image">Hero Banner Image</label>
                    <select id="hero_image" name="hero_image" defaultValue={String(v.hero_image)}>
                      {heroes.map((img) => (
                        <option value={img} key={img}>
                          {img.split('/').pop()}
                        </option>
                      ))}
                    </select>
                    <div className="hint">The banner behind this page&rsquo;s breadcrumb hero.</div>
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          <section className="panel" style={{ marginTop: 20 }}>
            <div className="panel-head">
              <h3>Search Engine Metadata</h3>
            </div>
            <div className="panel-body">
              <div className="form-grid">
                <div className="fld full">
                  <label htmlFor="meta_title">
                    Meta Title{' '}
                    <span className={counterClass(shownTitle.length, 50, 60)}>
                      {shownTitle.length}
                    </span>
                  </label>
                  <input
                    type="text"
                    id="meta_title"
                    name="meta_title"
                    value={metaTitle}
                    maxLength={255}
                    placeholder={autoTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                  />
                  {errors.meta_title ? (
                    <div className="hint" style={{ color: 'var(--danger)' }}>
                      {errors.meta_title}
                    </div>
                  ) : null}
                  <div className="hint">
                    Recommended 50–60 characters. Leave blank to use “{autoTitle}”.
                  </div>
                </div>

                <div className="fld full">
                  <label htmlFor="meta_description">
                    Meta Description{' '}
                    <span className={counterClass(metaDesc.length, 150, 160)}>
                      {metaDesc.length}
                    </span>
                  </label>
                  <textarea
                    id="meta_description"
                    name="meta_description"
                    rows={3}
                    maxLength={500}
                    placeholder="A short, compelling summary of the page."
                    value={metaDesc}
                    onChange={(e) => setMetaDesc(e.target.value)}
                  />
                  {errors.meta_description ? (
                    <div className="hint" style={{ color: 'var(--danger)' }}>
                      {errors.meta_description}
                    </div>
                  ) : null}
                  <div className="hint">Recommended 150–160 characters.</div>
                </div>

                <div className="fld full">
                  <label htmlFor="canonical_url">Canonical URL</label>
                  <input
                    type="text"
                    id="canonical_url"
                    name="canonical_url"
                    value={canonical}
                    maxLength={255}
                    placeholder={autoCanon}
                    onChange={(e) => setCanonical(e.target.value)}
                  />
                  {errors.canonical_url ? (
                    <div className="hint" style={{ color: 'var(--danger)' }}>
                      {errors.canonical_url}
                    </div>
                  ) : null}
                  <div className="hint">
                    Leave blank and the page publishes <code>{autoCanon}</code> automatically.
                  </div>
                </div>

                <div className="fld">
                  <label htmlFor="robots_meta">Robots Meta</label>
                  <select id="robots_meta" name="robots_meta" defaultValue={String(v.robots_meta)}>
                    {ROBOTS.map((opt) => (
                      <option value={opt} key={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="hint">
                    Controls whether search engines index the page and follow its links.
                  </div>
                </div>

                <div className="fld">
                  <label htmlFor="status">Status</label>
                  <select id="status" name="status" defaultValue={String(v.status)}>
                    <option value="published">Published</option>
                    <option value="draft">Draft (no-index, excluded from sitemap)</option>
                  </select>
                  <div className="hint">
                    Draft pages are served with <code>noindex, nofollow</code> and left out of the
                    sitemap.
                  </div>
                </div>

                <div className="fld full">
                  <label htmlFor="meta_keywords">
                    Meta Keywords{' '}
                    <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="meta_keywords"
                    name="meta_keywords"
                    defaultValue={String(v.meta_keywords)}
                    maxLength={500}
                    placeholder="real estate advisory, capital markets, dubai"
                  />
                  {errors.meta_keywords ? (
                    <div className="hint" style={{ color: 'var(--danger)' }}>
                      {errors.meta_keywords}
                    </div>
                  ) : null}
                  <div className="hint">
                    Comma-separated. Most search engines ignore this tag, so it is safe to leave
                    empty.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="panel" style={{ marginTop: 20 }}>
            <div className="panel-head">
              <h3>Social Sharing &amp; Sitemap</h3>
            </div>
            <div className="panel-body">
              <div className="form-grid">
                <div className="fld full">
                  <label htmlFor="og_title">
                    Open Graph Title{' '}
                    <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="og_title"
                    name="og_title"
                    defaultValue={String(v.og_title)}
                    maxLength={255}
                    placeholder="Defaults to the meta title"
                  />
                </div>
                <div className="fld full">
                  <label htmlFor="og_description">
                    Open Graph Description{' '}
                    <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span>
                  </label>
                  <textarea
                    id="og_description"
                    name="og_description"
                    rows={2}
                    maxLength={500}
                    placeholder="Defaults to the meta description"
                    defaultValue={String(v.og_description)}
                  />
                </div>

                <div className="fld">
                  <label htmlFor="priority">Sitemap Priority</label>
                  <select id="priority" name="priority" defaultValue={String(v.priority)}>
                    {PRIORITIES.map((p) => (
                      <option value={p} key={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="fld">
                  <label htmlFor="changefreq">Change Frequency</label>
                  <select id="changefreq" name="changefreq" defaultValue={String(v.changefreq)}>
                    {CHANGEFREQ.map((cf) => (
                      <option value={cf} key={cf}>
                        {cf.charAt(0).toUpperCase() + cf.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="fld full">
                  <label style={{ justifyContent: 'flex-start', gap: 10, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="in_sitemap"
                      value="1"
                      defaultChecked={Number(v.in_sitemap) === 1}
                      style={{ width: 'auto', accentColor: 'var(--gold)' }}
                    />
                    Include this page in sitemap.xml
                  </label>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <SaveButton isNew={isNew} />
              <a href={adminUrl('pages')} className="btn">
                Cancel
              </a>
              {!isNew ? (
                <>
                  <span className="spacer" />
                  <a
                    href={siteUrl('en-in/' + (slug === '' ? '' : slug + '/'))}
                    target="_blank"
                    rel="noopener"
                    className="btn sm"
                  >
                    View live page
                  </a>
                </>
              ) : null}
            </div>
          </section>
        </div>

        {/* Right column: live Google preview */}
        <div>
          <section className="panel" style={{ position: 'sticky', top: 88 }}>
            <div className="panel-head">
              <h3>Google Search Preview</h3>
            </div>
            <div className="panel-body">
              <div className="serp">
                <div className="serp-site">
                  <span className="serp-fav">VX</span>
                  <span>
                    <span className="serp-name">VALUNXT Capital</span>
                    <br />
                    <span className="serp-url">{canonical.trim() || autoCanon}</span>
                  </span>
                </div>
                <div className="serp-title">{shownTitle}</div>
                <div className="serp-desc">{shownDesc}</div>
              </div>
              <div className="hint" style={{ marginTop: 12 }}>
                Google may rewrite the title or snippet, but this is what you are asking it to show.
              </div>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
}
