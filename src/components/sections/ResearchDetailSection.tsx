/* Research & Reports — single report DETAIL page body. Navy split hero
   (report meta + title + breadcrumb | image) over a two-column body
   (article + share / download sidebar), in the VALUNXT theme.

   Driven by the report's PageConfig:
     report_type, read_time, hero_image, hero_title,
     crumbs (label => href relative to the region root, '' => not a link),
     topics, intro (HTML), takeaways, pdf ('' => inert),
     sections (optional [{ h, body }]).

   Port of includes/partials/research-detail.php. */
import { BASE, rurl } from '@/lib/region';
import { vxnReadTime } from '@/lib/site-data';
import { vxnRequestOrigin } from '@/lib/seo';
import Html from '@/components/Html';
import type { ReportPageConfig } from '@/lib/pages';

const CSS = `
/* ===== VALUNXT Research report — detail ==================================== */
.vxn-rd{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--ink:#26313b;--body:#42505c;--muted:#5b6670;--line:#e5e1d8;font-family:"DM Sans",sans-serif;color:var(--body);}
.vxn-rd *{box-sizing:border-box;}

/* ---- Hero ----------------------------------------------------------------- */
.vxn-rd__hero{display:grid;grid-template-columns:1fr 1fr;background:linear-gradient(160deg,#173049 0%,#0e1f2e 100%);}
.vxn-rd__hero-inner{padding:clamp(40px,5vw,76px) clamp(24px,4.5vw,72px);display:flex;flex-direction:column;justify-content:center;min-height:clamp(360px,42vw,520px);}
.vxn-rd__meta{display:flex;align-items:center;gap:16px;margin:0 0 30px;}
.vxn-rd__badge{display:inline-flex;align-items:center;gap:9px;color:#fff;font-size:12.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;}
.vxn-rd__badge svg{width:20px;height:20px;stroke:var(--gd);}
.vxn-rd__read{color:#dfe6ec;font-size:12px;letter-spacing:.06em;padding:7px 14px;border:1px solid rgba(255,255,255,.34);border-radius:4px;white-space:nowrap;}
.vxn-rd h1.vxn-rd__title{font-family:"Forum",serif!important;font-weight:400!important;color:#fff!important;font-size:clamp(30px,4vw,52px);line-height:1.1;margin:0 0 30px;}
.vxn-rd__crumbs{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.66);}
.vxn-rd__crumbs a{color:rgba(255,255,255,.66);text-decoration:none;transition:color .2s;}
.vxn-rd__crumbs a:hover{color:#fff;}
.vxn-rd__crumbs .vxn-rd__cur{color:#fff;}
.vxn-rd__arrow{color:var(--gd);}
.vxn-rd__hero-media{background-size:cover;background-position:center;background-repeat:no-repeat;min-height:clamp(260px,30vw,520px);}

/* ---- Body ----------------------------------------------------------------- */
.vxn-rd__body{background:#fff;padding:clamp(48px,5vw,80px) 0 clamp(56px,6vw,96px);}
.vxn-rd__grid{max-width:1180px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:clamp(40px,5vw,80px);align-items:start;}
.vxn-rd__intro{margin:0 0 34px;font-size:clamp(17px,1.5vw,19px);line-height:1.75;color:var(--ink);}
.vxn-rd h2.vxn-rd__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;font-size:clamp(22px,2.2vw,29px);line-height:1.15;margin:0 0 20px;}
.vxn-rd__list{list-style:none;margin:0 0 8px;padding:0;display:flex;flex-direction:column;gap:16px;}
.vxn-rd__list li{position:relative;padding-left:26px;font-size:16.5px;line-height:1.7;color:var(--ink);}
.vxn-rd__list li::before{content:"";position:absolute;left:2px;top:9px;width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,var(--gd),var(--gd2));}
.vxn-rd__section{margin-top:38px;}
.vxn-rd__section p{margin:0 0 16px;font-size:16.5px;line-height:1.78;}

/* ---- Sidebar -------------------------------------------------------------- */
.vxn-rd__side{position:sticky;top:96px;}
.vxn-rd__siderow{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:6px 0;}
.vxn-rd__siderow+.vxn-rd__siderow{margin-top:8px;}
.vxn-rd__sidelabel{font-size:13px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--ny);}
.vxn-rd__share{display:flex;align-items:center;gap:14px;}
.vxn-rd__share a{color:var(--ny);display:inline-flex;transition:color .2s;}
.vxn-rd__share a:hover{color:var(--gd2);}
.vxn-rd__share svg{width:20px;height:20px;}
.vxn-rd__topics{font-size:15px;color:var(--muted);text-align:right;}
.vxn-rd__sidediv{display:block;height:1px;background:var(--line);margin:22px 0 26px;}
/* Both fill by wedge on hover — mechanism in valunxt-brand.css; each variant
   only names the colour it sweeps. */
.vxn-rd__btn{display:flex;align-items:center;justify-content:center;gap:11px;width:100%;padding:16px 20px;font-size:12.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;}
.vxn-rd__btn svg{width:17px;height:17px;flex:0 0 auto;}
.vxn-rd__btn--solid{background:var(--ny);color:#fff!important;border:1px solid var(--ny);--vxn-cta-sweep:var(--ny2);}
.vxn-rd__btn--solid:hover{border-color:var(--ny2);}
.vxn-rd__btn--solid[aria-disabled="true"]{opacity:.55;pointer-events:none;}
.vxn-rd__btn--ghost{background:#fff;color:var(--ny)!important;border:1px solid var(--ny);margin-top:14px;--vxn-cta-sweep:var(--ny);}
.vxn-rd__btn--ghost:hover{color:#fff!important;}

/* ---- Responsive ----------------------------------------------------------- */
@media(max-width:960px){
    .vxn-rd__hero{grid-template-columns:1fr;}
    .vxn-rd__hero-inner{min-height:auto;}
    .vxn-rd__hero-media{min-height:240px;order:-1;}
    .vxn-rd__grid{grid-template-columns:1fr;gap:44px;}
    .vxn-rd__side{position:static;max-width:420px;}
}
`;

export default async function ResearchDetailSection({
  page,
  region,
}: {
  page: ReportPageConfig;
  region: string;
}) {
  const type = page.report_type ?? 'Report';
  const img = page.hero_image ?? '';
  const title = page.hero_title ?? page.title ?? 'Report';
  const crumbs = page.crumbs ?? {};
  const topics = page.topics ?? [];
  const intro = page.intro ?? '';
  const takeaways = page.takeaways ?? [];
  const sections: Array<{ h?: string; body?: string }> =
    (page as unknown as { sections?: Array<{ h?: string; body?: string }> }).sections ?? [];

  /* Reading time is measured, not asserted. Every report page used to declare
     its own "5 min read" by hand; those numbers were copied between pages and
     none of them matched the text actually on the page. A page can still set
     read_time explicitly (a downloadable PDF is longer than its summary page),
     but by default we count what the reader can see. */
  let read = String((page as unknown as { read_time?: string }).read_time ?? '').trim();
  if (read === '') {
    let words = `${intro} ${takeaways.join(' ')}`;
    for (const s of sections) words += ` ${s.h ?? ''} ${s.body ?? ''}`;
    read = vxnReadTime(words);
  }

  const pdf = page.pdf ?? '';
  const contact = rurl(region, '/contact/');

  /* absolute URL for the share links */
  const origin = await vxnRequestOrigin();
  const abs = origin + BASE + (page.path ?? '/');
  const li = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(abs);
  const mail = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(abs);

  const crumbEntries = Object.entries(crumbs);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div id="main-content">
        <div id="main" role="main" className="vamtam-main layout-full">
          <article className="vxn-rd">
            <section className="vxn-rd__hero">
              <div className="vxn-rd__hero-inner">
                <div className="vxn-rd__meta">
                  <span className="vxn-rd__badge">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 6.5C10.5 5.3 8.5 4.8 6 4.8 4.6 4.8 3.4 5 2.5 5.3v13C3.4 18 4.6 17.8 6 17.8c2.5 0 4.5.5 6 1.7 1.5-1.2 3.5-1.7 6-1.7 1.4 0 2.6.2 3.5.5v-13c-.9-.3-2.1-.5-3.5-.5-2.5 0-4.5.5-6 1.7zM12 6.5v12.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {type}
                  </span>
                  {read !== '' ? <span className="vxn-rd__read">{read}</span> : null}
                </div>
                <Html as="h1" className="vxn-rd__title" html={title} />
                {crumbEntries.length ? (
                  <nav className="vxn-rd__crumbs" aria-label="Breadcrumb">
                    {crumbEntries.map(([label, href], i) => (
                      <span key={label} style={{ display: 'contents' }}>
                        {i > 0 ? (
                          <span className="vxn-rd__arrow" aria-hidden="true">
                            &rarr;
                          </span>
                        ) : null}
                        {href !== '' ? (
                          <a href={rurl(region, href)}>{label}</a>
                        ) : (
                          <span className="vxn-rd__cur">{label}</span>
                        )}
                      </span>
                    ))}
                  </nav>
                ) : null}
              </div>
              <div
                className="vxn-rd__hero-media"
                style={{ backgroundImage: `url('${BASE}${img}')` }}
              />
            </section>

            <section className="vxn-rd__body">
              <div className="vxn-rd__grid">
                <div className="vxn-rd__main">
                  {intro !== '' ? <Html as="p" className="vxn-rd__intro" html={intro} /> : null}

                  {takeaways.length ? (
                    <>
                      <h2 className="vxn-rd__h">Key Takeaways</h2>
                      <ul className="vxn-rd__list">
                        {takeaways.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}

                  {sections.map((s, i) => (
                    <div className="vxn-rd__section" key={i}>
                      {s.h ? <h2 className="vxn-rd__h">{s.h}</h2> : null}
                      <Html as="div" style={{ display: 'contents' }} html={s.body ?? ''} />
                    </div>
                  ))}
                </div>

                <aside className="vxn-rd__side">
                  <div className="vxn-rd__siderow">
                    <span className="vxn-rd__sidelabel">Share</span>
                    <span className="vxn-rd__share">
                      <a href={li} target="_blank" rel="noopener" aria-label="Share on LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9.75h4v11.25H3V9.75zM9.25 9.75H13v1.54h.05c.52-.94 1.8-1.93 3.7-1.93 3.96 0 4.7 2.4 4.7 5.53V21H17.7v-4.9c0-1.17-.02-2.67-1.7-2.67-1.7 0-1.96 1.27-1.96 2.58V21H9.25V9.75z" />
                        </svg>
                      </a>
                      <a href={mail} aria-label="Share by email">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          aria-hidden="true"
                        >
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </span>
                  </div>
                  {topics.length ? (
                    <div className="vxn-rd__siderow">
                      <span className="vxn-rd__sidelabel">Topics</span>
                      <span className="vxn-rd__topics">{topics.join(', ')}</span>
                    </div>
                  ) : null}

                  <span className="vxn-rd__sidediv" aria-hidden="true" />

                  <a
                    className="vxn-rd__btn vxn-rd__btn--solid"
                    href={pdf !== '' ? pdf : 'javascript:void(0)'}
                    {...(pdf !== '' ? { download: true } : {})}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3v11m0 0l-4-4m4 4l4-4M4 20h16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Download Report</span>
                  </a>
                  <a className="vxn-rd__btn vxn-rd__btn--ghost" href={contact}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3.5 6.5l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Talk to us</span>
                  </a>
                </aside>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
