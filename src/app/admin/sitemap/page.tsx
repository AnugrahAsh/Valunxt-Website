/**
 * Admin — Sitemap Settings.
 *
 * Shows the state of public/sitemap.xml (last generated, URL count, file size),
 * lets an administrator regenerate, download or view it, and holds the site URL
 * that canonical tags and sitemap entries are built from.
 *
 * Port of admin/sitemap.php.
 */
import fs from 'node:fs/promises';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

import AdminShell from '@/components/admin/AdminShell';
import { FlashErr, FlashOk } from '@/components/admin/Flash';
import { adminUrl, siteUrl } from '@/lib/admin/config';
import { csrfToken, currentUser, takeFlash } from '@/lib/admin/session';
import { sitemapOpAction } from '@/lib/admin/actions';
import {
  seoDetectSiteUrl,
  seoEffective,
  seoSetting,
  seoSitemapPath,
  seoSitemapRows,
  seoSiteUrl,
  seoStats,
  type PageRow,
  type SeoStats,
} from '@/lib/admin/seo-lib';

export const metadata: Metadata = {
  title: 'Sitemap Settings — VALUNXT Capital Admin',
  robots: 'noindex, nofollow',
};

/** Human-readable byte size. */
function fsize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

function stamp(value: string): string {
  if (!value) return 'Never';
  const d = new Date(value.replace(' ', 'T'));
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export default async function SitemapPage() {
  const user = await currentUser();
  if (!user) redirect(adminUrl(''));

  const flash = await takeFlash();
  const csrf = await csrfToken();

  const file = seoSitemapPath();
  let exists = false;
  let fileSize = 0;
  let preview = '';
  try {
    const stat = await fs.stat(file);
    exists = stat.isFile();
    fileSize = stat.size;
    const text = await fs.readFile(file, 'utf8');
    const lines = text.split('\n');
    preview = lines.slice(0, 40).join('\n');
    if (lines.length > 40) preview += `\n… ${lines.length - 40} more lines`;
  } catch {
    exists = false;
  }

  let stats: SeoStats = { total: 0, published: 0, draft: 0, sitemap: 0, noindex: 0 };
  let rows: PageRow[] = [];
  let generatedAt = '';
  let urlCount = 0;
  let configured = '';
  let site = '';
  try {
    stats = await seoStats();
    rows = await seoSitemapRows();
    generatedAt = await seoSetting('sitemap_generated_at', '');
    urlCount = Number(await seoSetting('sitemap_url_count', '0'));
    configured = await seoSetting('site_url', '');
    site = await seoSiteUrl();
  } catch {
    /* shown as zeroes */
  }
  const detected = seoDetectSiteUrl();

  const effective = await Promise.all(rows.map((r) => seoEffective(r)));

  return (
    <AdminShell active="sitemap" user={user}>
      <div className="page-head">
        <div className="crumbs">
          Home <span className="sep">/</span> Sitemap
        </div>
        <h1>Sitemap Settings</h1>
        <p>
          The XML sitemap regenerates automatically whenever a page is created, published, updated or
          deleted. You can also rebuild it here.
        </p>
      </div>

      <FlashOk message={flash.ok ?? ''} />
      <FlashErr message={flash.err ?? ''} />

      <section className="panel">
        <div className="panel-head">
          <h3>Sitemap Status</h3>
          <span className={`pill ${exists ? 'ok' : 'warnp'}`}>
            {exists ? 'Generated' : 'Not generated yet'}
          </span>
        </div>
        <div className="panel-body">
          <div className="kv">
            <div className="kv-item">
              <div className="k">Total URLs Included</div>
              <div className="v">{exists ? urlCount : 0}</div>
            </div>
            <div className="kv-item">
              <div className="k">Last Generated</div>
              <div className="v sm">{stamp(generatedAt)}</div>
            </div>
            <div className="kv-item">
              <div className="k">File Size</div>
              <div className="v sm">{exists ? fsize(fileSize) : '—'}</div>
            </div>
            <div className="kv-item">
              <div className="k">Public Address</div>
              <div className="v sm">
                <a className="link" href={siteUrl('sitemap.xml')} target="_blank" rel="noopener">
                  /sitemap.xml
                </a>
              </div>
            </div>
          </div>

          <div className="toolbar" style={{ marginTop: 20 }}>
            <form action={sitemapOpAction}>
              <input type="hidden" name="op" value="generate" />
              <input type="hidden" name="csrf" value={csrf} />
              <button type="submit" className="btn gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 4 23 10 17 10" />
                  <polyline points="1 20 1 14 7 14" />
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
                Generate Sitemap
              </button>
            </form>
            <a className={'btn' + (exists ? '' : ' is-disabled')} href={adminUrl('sitemap/download')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Sitemap
            </a>
            <a
              className={'btn' + (exists ? '' : ' is-disabled')}
              href={siteUrl('sitemap.xml')}
              target="_blank"
              rel="noopener"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View Sitemap
            </a>
            <span className="spacer" />
            <a className="btn sm" href={adminUrl('pages')}>
              Manage pages
            </a>
          </div>
        </div>
      </section>

      <section className="panel" style={{ marginTop: 20 }}>
        <div className="panel-head">
          <h3>Site URL</h3>
        </div>
        <form action={sitemapOpAction}>
          <input type="hidden" name="op" value="save_settings" />
          <input type="hidden" name="csrf" value={csrf} />
          <div className="panel-body">
            <div className="fld">
              <label htmlFor="site_url">Public website address</label>
              <input
                type="text"
                id="site_url"
                name="site_url"
                defaultValue={configured}
                placeholder={detected}
                maxLength={255}
              />
              <div className="hint">
                Used to build sitemap entries and the automatic canonical URLs. Leave blank to use
                the address the site is served from (currently <code>{detected}</code>). Set it
                explicitly before generating the sitemap you submit to Google Search Console.
              </div>
            </div>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn navy">
              Save &amp; Regenerate
            </button>
            <span className="spacer" />
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>
              {stats.published} published · {stats.draft} draft · {stats.noindex} no-index
            </span>
          </div>
        </form>
      </section>

      <section className="panel" style={{ marginTop: 20 }}>
        <div className="panel-head">
          <h3>
            URLs In The Sitemap <span className="count-chip">{rows.length}</span>
          </h3>
          <a className="link" href={adminUrl('pages')}>
            Edit page SEO
          </a>
        </div>
        <div className="panel-body" style={{ padding: 0 }}>
          {!rows.length ? (
            <div className="empty-state">
              <h4>No URLs yet</h4>
              <p>Publish at least one page and include it in the sitemap.</p>
            </div>
          ) : (
            <div className="table-wrap">
              <table className="data">
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Priority</th>
                    <th>Change Frequency</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => {
                    const eff = effective[i];
                    const loc = eff.canonical || eff.url;
                    const when = new Date(String(r.updated_at).replace(' ', 'T'));
                    return (
                      <tr key={r.id}>
                        <td className="slug-cell">
                          <a className="link" href={loc} target="_blank" rel="noopener">
                            {loc}
                          </a>
                        </td>
                        <td>{Number(r.priority).toFixed(1)}</td>
                        <td>
                          {String(r.changefreq).charAt(0).toUpperCase() +
                            String(r.changefreq).slice(1)}
                        </td>
                        <td className="nowrap">
                          {(Number.isNaN(when.getTime()) ? new Date() : when).toLocaleDateString(
                            'en-GB',
                            { day: '2-digit', month: 'short', year: 'numeric' }
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {preview !== '' ? (
        <section className="panel" style={{ marginTop: 20 }}>
          <div className="panel-head">
            <h3>sitemap.xml Preview</h3>
          </div>
          <div className="panel-body">
            <pre className="code-box">{preview}</pre>
          </div>
        </section>
      ) : null}

      {site !== detected ? (
        <p className="hint" style={{ marginTop: 12 }}>
          Sitemap URLs are being built against <code>{site}</code>.
        </p>
      ) : null}
    </AdminShell>
  );
}
