/**
 * Admin — Pages & SEO.
 *
 * Lists every public page under CMS management with its SEO status, and handles
 * the list-level operations: rescan the site for new pages, publish / unpublish,
 * include or exclude from the sitemap, and delete.
 *
 * Every operation that can change what search engines see finishes by calling
 * seoRegenerate(), which rewrites public/sitemap.xml and the front-end SEO cache.
 *
 * Port of admin/pages.php.
 */
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

import AdminShell from '@/components/admin/AdminShell';
import { FlashErr, FlashOk } from '@/components/admin/Flash';
import PagesSearch from '@/components/admin/PagesSearch';
import { adminUrl, siteUrl } from '@/lib/admin/config';
import { csrfToken, currentUser, takeFlash } from '@/lib/admin/session';
import { pagesOpAction } from '@/lib/admin/actions';
import {
  seoPageExists,
  seoPagesCount,
  seoPagesSlice,
  seoSetting,
  seoStats,
  type PageRow,
  type SeoStats,
} from '@/lib/admin/seo-lib';

export const metadata: Metadata = {
  title: 'Pages & SEO — VALUNXT Capital Admin',
  robots: 'noindex, nofollow',
};

const PER_PAGE = 10;

/** Length badge class for a meta title / description against its target range. */
function lenClass(len: number, min: number, max: number): string {
  if (len === 0) return '';
  if (len > max) return 'over';
  if (len < min) return 'warn';
  return 'ok';
}

/**
 * Page numbers to render: always the first and last, plus a window around the
 * current page, with '…' standing in for the gaps.
 */
function pagerNumbers(current: number, total: number, window = 1): Array<number | '…'> {
  const keep = new Set<number>([1, total]);
  for (let i = current - window; i <= current + window; i++) {
    if (i >= 1 && i <= total) keep.add(i);
  }
  const sorted = [...keep].sort((a, b) => a - b);
  const out: Array<number | '…'> = [];
  let prev = 0;
  for (const n of sorted) {
    if (prev && n > prev + 1) out.push('…');
    out.push(n);
    prev = n;
  }
  return out;
}

export default async function AdminPagesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; p?: string }>;
}) {
  const user = await currentUser();
  if (!user) redirect(adminUrl(''));

  const sp = await searchParams;
  const q = (sp.q ?? '').trim();
  let pageNo = Math.max(1, Number(sp.p ?? 1) || 1);

  const flash = await takeFlash();
  const csrf = await csrfToken();

  const listUrl = (over: { q?: string; p?: number } = {}) => {
    const args = new URLSearchParams();
    const qq = over.q !== undefined ? over.q : q;
    const pp = over.p !== undefined ? over.p : pageNo;
    if (qq) args.set('q', qq);
    if (pp > 1) args.set('p', String(pp));
    const s = args.toString();
    return adminUrl('pages') + (s ? '?' + s : '');
  };

  let rows: PageRow[] = [];
  let stats: SeoStats = { total: 0, published: 0, draft: 0, sitemap: 0, noindex: 0 };
  let matched = 0;
  let totalPages = 1;
  let loadError = '';
  let generatedAt = '';
  try {
    stats = await seoStats();
    matched = await seoPagesCount(q);
    totalPages = Math.max(1, Math.ceil(matched / PER_PAGE));
    if (pageNo > totalPages) pageNo = totalPages;
    rows = await seoPagesSlice(q, PER_PAGE, (pageNo - 1) * PER_PAGE);
    generatedAt = await seoSetting('sitemap_generated_at', '');
  } catch {
    loadError = 'Could not load pages. Please ensure MySQL is running.';
  }

  const firstRow = matched ? (pageNo - 1) * PER_PAGE + 1 : 0;
  const lastRow = Math.min(pageNo * PER_PAGE, matched);
  const back = listUrl();

  return (
    <AdminShell active="pages" user={user}>
      <div className="page-head">
        <div className="crumbs">
          Home <span className="sep">/</span> Pages &amp; SEO
        </div>
        <h1>Pages &amp; SEO</h1>
        <p>
          Manage the title, slug, meta tags, canonical URL and robots directive for every public
          page.
        </p>
      </div>

      <FlashOk message={flash.ok ?? ''} />
      <FlashErr message={flash.err ?? ''} />

      {/* KPI cards */}
      <section className="stat-grid">
        <div className="stat-card">
          <div className="ico">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div className="label">Total Pages</div>
          <div className="value">{stats.total}</div>
        </div>
        <div className="stat-card">
          <div className="ico green">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="label">Published</div>
          <div className="value">{stats.published}</div>
        </div>
        <div className="stat-card">
          <div className="ico blue">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div className="label">In Sitemap</div>
          <div className="value">{stats.sitemap}</div>
        </div>
        <div className="stat-card">
          <div className="ico navy">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          </div>
          <div className="label">No-index Pages</div>
          <div className="value">{stats.noindex}</div>
        </div>
      </section>

      <section className="panel" style={{ marginTop: 20 }}>
        <div className="panel-head">
          <h3>
            {q !== '' ? 'Matching Pages' : 'All Pages'} <span className="count-chip">{matched}</span>
          </h3>
          <div className="toolbar">
            <PagesSearch action={adminUrl('pages')} value={q} />
            <form action={pagesOpAction}>
              <input type="hidden" name="op" value="sync" />
              <input type="hidden" name="csrf" value={csrf} />
              <input type="hidden" name="back" value={back} />
              <button
                type="submit"
                className="btn sm"
                title="Scan the website for pages that are not in the CMS yet"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
                Rescan website
              </button>
            </form>
            <a href={adminUrl('pages/edit') + '?new=1'} className="btn gold sm">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              New Page
            </a>
          </div>
        </div>
        <div className="panel-body" style={{ padding: 0 }}>
          {loadError ? (
            <div className="empty-state">
              <p>{loadError}</p>
            </div>
          ) : !rows.length && q !== '' ? (
            <div className="empty-state">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <h4>No pages match “{q}”</h4>
              <p>
                <a className="link" href={adminUrl('pages')}>
                  Clear the search
                </a>{' '}
                to see all pages.
              </p>
            </div>
          ) : !rows.length ? (
            <div className="empty-state">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <h4>No pages yet</h4>
              <p>
                Use <strong>Rescan website</strong> to import the pages that already exist, or create
                a new one.
              </p>
            </div>
          ) : (
            <>
              <div className="table-wrap">
                <table className="data" id="pagesTable">
                  <thead>
                    <tr>
                      <th>Page</th>
                      <th>URL Slug</th>
                      <th>Meta Title</th>
                      <th>Meta Description</th>
                      <th>Robots</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => {
                      const slug = String(r.slug);
                      const isHome = slug === '';
                      const mtLen = String(r.meta_title ?? '').length;
                      const mdLen = String(r.meta_description ?? '').length;
                      const noindex = String(r.robots_meta ?? '').startsWith('noindex');
                      const exists = seoPageExists(r);
                      return (
                        <tr key={r.id}>
                          <td className="title-cell">
                            {r.title}
                            {!exists ? (
                              <span className="sub" style={{ color: 'var(--danger)' }}>
                                No matching page on the website
                              </span>
                            ) : Number(r.is_cms) === 1 ? (
                              <span className="sub">Created in the CMS</span>
                            ) : null}
                          </td>
                          <td className="slug-cell">
                            {isHome ? (
                              <strong>/</strong>
                            ) : (
                              <>
                                /<strong>{slug}</strong>/
                              </>
                            )}
                          </td>
                          <td>
                            <span className={`counter ${lenClass(mtLen, 50, 60)}`}>{mtLen}</span>{' '}
                            <span style={{ color: 'var(--muted)', fontSize: 12 }}>/ 60</span>
                          </td>
                          <td>
                            <span className={`counter ${lenClass(mdLen, 150, 160)}`}>{mdLen}</span>{' '}
                            <span style={{ color: 'var(--muted)', fontSize: 12 }}>/ 160</span>
                          </td>
                          <td>
                            <span className={`pill ${noindex ? 'warnp' : 'ok'}`}>{r.robots_meta}</span>
                          </td>
                          <td>
                            <form action={pagesOpAction} style={{ display: 'inline' }}>
                              <input type="hidden" name="op" value="toggle_status" />
                              <input type="hidden" name="csrf" value={csrf} />
                              <input type="hidden" name="id" value={r.id} />
                              <input type="hidden" name="back" value={back} />
                              <button
                                type="submit"
                                className={`pill ${r.status === 'published' ? 'ok' : 'off'}`}
                                style={{ border: 0, cursor: 'pointer' }}
                                title={`Click to ${r.status === 'published' ? 'unpublish' : 'publish'}`}
                              >
                                {r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                              </button>
                            </form>
                          </td>
                          <td>
                            <div className="row-actions">
                              <a
                                className="icon-btn"
                                href={siteUrl('en-in/' + (slug === '' ? '' : slug + '/'))}
                                target="_blank"
                                rel="noopener"
                                title="View page"
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                              </a>
                              <a
                                className="icon-btn"
                                href={adminUrl('pages/edit') + '?id=' + r.id}
                                title="Edit SEO"
                              >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                  <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z" />
                                </svg>
                              </a>
                              <form action={pagesOpAction}>
                                <input type="hidden" name="op" value="delete" />
                                <input type="hidden" name="csrf" value={csrf} />
                                <input type="hidden" name="id" value={r.id} />
                                <input type="hidden" name="back" value={back} />
                                <button type="submit" className="icon-btn danger" title="Delete">
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                  </svg>
                                </button>
                              </form>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {totalPages > 1 ? (
                <nav className="pager" aria-label="Pages navigation">
                  <span className="pager-count">
                    Showing{' '}
                    <strong>
                      {firstRow}–{lastRow}
                    </strong>{' '}
                    of <strong>{matched}</strong>
                    {q !== '' ? ' matching' : ''} pages
                  </span>
                  <span className="pager-links">
                    {pageNo > 1 ? (
                      <a className="pg" href={listUrl({ p: pageNo - 1 })} rel="prev" aria-label="Previous page">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Prev
                      </a>
                    ) : (
                      <span className="pg is-disabled">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Prev
                      </span>
                    )}

                    {pagerNumbers(pageNo, totalPages).map((n, i) =>
                      n === '…' ? (
                        <span className="pg gap" key={'gap' + i}>
                          …
                        </span>
                      ) : n === pageNo ? (
                        <span className="pg current" aria-current="page" key={n}>
                          {n}
                        </span>
                      ) : (
                        <a className="pg" href={listUrl({ p: n })} key={n}>
                          {n}
                        </a>
                      )
                    )}

                    {pageNo < totalPages ? (
                      <a className="pg" href={listUrl({ p: pageNo + 1 })} rel="next" aria-label="Next page">
                        Next
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </a>
                    ) : (
                      <span className="pg is-disabled">
                        Next
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    )}
                  </span>
                </nav>
              ) : null}
            </>
          )}
        </div>
        <div className="form-actions">
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>
            Sitemap last generated:{' '}
            <strong style={{ color: 'var(--ink)' }}>
              {generatedAt
                ? new Date(generatedAt.replace(' ', 'T')).toLocaleString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  })
                : 'never'}
            </strong>{' '}
            — {stats.sitemap} URLs
          </span>
          <span className="spacer" style={{ flex: 1 }} />
          <a href={adminUrl('sitemap')} className="btn sm">
            Sitemap settings
          </a>
        </div>
      </section>
    </AdminShell>
  );
}
