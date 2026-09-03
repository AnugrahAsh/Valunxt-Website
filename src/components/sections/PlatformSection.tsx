/* VALUNXT Intelligence Platform — the concrete product page behind the
   Technology & AI service line.

   The service page listed six capability phrases and repeated them; a reader
   could not tell what the software does, who uses it, or what comes out of it.
   This page describes the four modules, the screen a user actually works in,
   what goes in and what comes out, and where the limits are.

   The interface below is a rendered schematic of the portfolio screen, built
   in HTML and CSS with representative figures. It is labelled as an
   illustration, both in visible copy and via a caption tied to the figure, so
   it is never mistaken for a screenshot of a live client portfolio. Swap it
   for a real product capture when one is cleared for publication.

   Port of includes/partials/platform-content.php. */
import { rurl } from '@/lib/region';
import Html from '@/components/Html';

const MODULES = [
  {
    n: 'Module 01',
    title: 'Valuation Engine',
    lede: 'Automated valuation across a portfolio, with every figure traceable back to the comparables and adjustments that produced it.',
    in: 'Asset register, transaction comparables, lease and tenancy data',
    out: 'Indicative value per asset, confidence band, comparable set, adjustment trail',
    who: 'Valuers, lenders, portfolio managers',
    notes:
      'Confidence bands widen automatically where comparable depth is thin. Anything below the review threshold is routed to a valuer rather than published as a number.',
  },
  {
    n: 'Module 02',
    title: 'Market Analytics',
    lede: 'Micro-market pricing, supply pipeline and absorption for the corridors our research desk tracks, refreshed as new transaction data lands.',
    in: 'Registry and listing feeds, launch and completion pipeline, our own research desk inputs',
    out: 'Price and rent trends by micro-market, supply overhang, absorption pace, yield spread',
    who: 'Investors, developers, research analysts',
    notes:
      'Coverage depth varies by market. Each chart states its own data window and source so a thin series is visible as a thin series.',
  },
  {
    n: 'Module 03',
    title: 'Portfolio Dashboard',
    lede: 'One view of a holding across entities, currencies and geographies — the screen illustrated below.',
    in: 'Holdings, acquisition cost and date, debt terms, rental income',
    out: 'Exposure by sector and market, LTV and coverage, income yield, revaluation movement',
    who: 'Family offices, funds, private investors',
    notes:
      'Multi-currency positions are reported both in local currency and in a single reporting currency, with the rate and date shown.',
  },
  {
    n: 'Module 04',
    title: 'Workflow &amp; Integration',
    lede: 'Instruction-to-delivery tracking for valuation and research mandates, plus the APIs that connect it to systems you already run.',
    in: 'Instructions, mandate scope, milestone and approval events',
    out: 'Status and turnaround tracking, audit trail, report delivery, REST API and scheduled data exports',
    who: 'Lender panels, institutional clients, internal teams',
    notes:
      'Built for clients who need valuation activity to land inside their own credit or asset-management system rather than in an inbox.',
  },
];

/* Representative figures for the interface illustration below. Deliberately
   round and self-evidently sample data — not a real client portfolio. */
const DEMO_ROWS: Array<[string, string, string, string, string, string, number]> = [
  ['Bandra Kurla Complex, Mumbai', 'Grade-A Office', 'INR', '42.0 cr', '+6.2%', 'High', 88],
  ['Sector 16B, Noida', 'Grade-A Office', 'INR', '28.5 cr', '+3.8%', 'High', 81],
  ['Business Bay, Dubai', 'Residential', 'AED', '9.4 m', '+5.1%', 'Medium', 64],
  ['Bhiwandi Corridor, MMR', 'Warehousing', 'INR', '19.2 cr', '+9.4%', 'Medium', 58],
  ['Al Reem Island, Abu Dhabi', 'Residential', 'AED', '6.1 m', '-1.3%', 'Low', 37],
];

const CSS = `
/* ===== VALUNXT Intelligence Platform ====================================== */
.vxn-plat{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--body:#4d5863;--muted:#6b757e;--line:#e5e1d8;--paper:#f7f6f3;font-family:"DM Sans",sans-serif;color:var(--body);background:#fff;}
.vxn-plat *{box-sizing:border-box;}
.vxn-plat__wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.vxn-plat__eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 14px;}
.vxn-plat h2.vxn-plat__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.1;font-size:clamp(27px,3.4vw,42px);margin:0 0 18px;}
.vxn-plat__lead{margin:0;max-width:74ch;font-size:16.5px;line-height:1.8;}

/* ---- Intro --------------------------------------------------------------- */
.vxn-plat__intro{padding:64px 0 8px;}

/* ---- Interface illustration ---------------------------------------------- */
.vxn-plat__ui{padding:52px 0 60px;}
.vxn-plat__figure{margin:34px 0 0;}
.vxn-plat__chrome{border:1px solid var(--line);border-radius:12px;overflow:hidden;box-shadow:0 30px 70px -46px rgba(14,53,95,.5);background:#fff;}
.vxn-plat__bar{display:flex;align-items:center;gap:10px;padding:12px 16px;background:linear-gradient(90deg,#0053B7 0%,#0E355F 100%);}
.vxn-plat__dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.28);}
.vxn-plat__barname{margin-left:8px;color:#fff;font-size:12.5px;letter-spacing:.08em;}
.vxn-plat__barpill{margin-left:auto;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ny);background:var(--gd);padding:4px 10px;border-radius:3px;font-weight:600;}
.vxn-plat__screen{padding:24px;background:var(--paper);}
.vxn-plat__kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:0 0 18px;}
.vxn-plat__kpi{background:#fff;border:1px solid var(--line);border-radius:8px;padding:16px 18px;}
.vxn-plat__kpilabel{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:0 0 8px;}
.vxn-plat__kpival{font-family:"Forum",serif;font-size:26px;line-height:1;color:var(--ny);}
.vxn-plat__kpinote{font-size:12px;color:var(--muted);margin:8px 0 0;}
.vxn-plat__tablewrap{background:#fff;border:1px solid var(--line);border-radius:8px;overflow-x:auto;}
.vxn-plat table{width:100%;min-width:660px;border-collapse:collapse;font-size:13.5px;}
.vxn-plat caption{text-align:left;padding:14px 18px 0;font-size:12px;color:var(--muted);}
.vxn-plat th{text-align:left;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:600;padding:14px 16px;border-bottom:1px solid var(--line);white-space:nowrap;}
.vxn-plat td{padding:13px 16px;border-bottom:1px solid #f0eee9;color:var(--ny);}
.vxn-plat tr:last-child td{border-bottom:none;}
.vxn-plat__pos{color:#1f7a5a;}
.vxn-plat__neg{color:#b4453f;}
.vxn-plat__conf{display:flex;align-items:center;gap:9px;}
.vxn-plat__bar2{flex:1;min-width:52px;height:6px;border-radius:3px;background:#eceae4;overflow:hidden;}
.vxn-plat__bar2 span{display:block;height:100%;background:linear-gradient(90deg,var(--gd),var(--gd2));}
.vxn-plat__figcap{margin:16px 0 0;font-size:13px;line-height:1.7;color:var(--muted);max-width:80ch;}
.vxn-plat__figcap strong{color:var(--ny);}

/* ---- Modules ------------------------------------------------------------- */
.vxn-plat__mods{padding:8px 0 66px;}
.vxn-plat__modgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:38px;}
.vxn-plat__mod{border:1px solid var(--line);border-radius:12px;padding:30px 30px 26px;background:#fff;transition:box-shadow .25s,transform .25s;}
.vxn-plat__mod:hover{box-shadow:0 22px 52px -34px rgba(14,53,95,.4);transform:translateY(-3px);}
.vxn-plat__modn{font-family:"Forum",serif;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:var(--gd2);margin:0 0 12px;}
.vxn-plat h3.vxn-plat__modt{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;font-size:24px;line-height:1.2;margin:0 0 12px;}
.vxn-plat__modlede{margin:0 0 20px;font-size:15px;line-height:1.72;}
.vxn-plat__spec{border-top:1px solid var(--line);padding-top:16px;margin:0;display:grid;grid-template-columns:88px 1fr;gap:9px 16px;font-size:13.5px;line-height:1.6;}
.vxn-plat__spec dt{color:var(--muted);letter-spacing:.06em;text-transform:uppercase;font-size:10.5px;font-weight:600;padding-top:2px;}
.vxn-plat__spec dd{margin:0;color:var(--ny);}
.vxn-plat__modnote{margin:18px 0 0;padding:14px 16px;background:var(--paper);border-left:2px solid var(--gd);font-size:13.5px;line-height:1.7;color:var(--body);}

/* ---- Honest limits ------------------------------------------------------- */
.vxn-plat__limits{background:linear-gradient(90deg,#0053B7 0%,#0E355F 100%);color:#fff;padding:60px 0;}
.vxn-plat__limits h2.vxn-plat__h{color:#fff!important;}
.vxn-plat__limits .vxn-plat__eyebrow{color:var(--gd);}
.vxn-plat__limits .vxn-plat__lead{color:rgba(255,255,255,.84);}
.vxn-plat__limitgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:36px;}
.vxn-plat__limit{border-top:2px solid var(--gd);padding-top:18px;}
.vxn-plat h3.vxn-plat__limitt{font-family:"Forum",serif!important;font-weight:400!important;color:#fff!important;font-size:19px;line-height:1.25;margin:0 0 8px;}
.vxn-plat__limitd{margin:0;font-size:14.5px;line-height:1.7;color:rgba(255,255,255,.8);}

/* ---- CTA ----------------------------------------------------------------- */
.vxn-plat__cta{padding:60px 0 72px;text-align:center;}
/* The hover fill sweeps in as a wedge — mechanism in valunxt-brand.css, this
   only names the colour it sweeps. */
.vxn-plat__btn{display:inline-block;margin-top:22px;padding:16px 34px;background:var(--ny);color:#fff!important;font-size:12.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;border-radius:4px;--vxn-cta-sweep:var(--ny2);}

@media(max-width:960px){
    .vxn-plat__kpis{grid-template-columns:repeat(2,1fr);}
    .vxn-plat__modgrid{grid-template-columns:1fr;}
    .vxn-plat__limitgrid{grid-template-columns:1fr;}
}
@media(max-width:640px){
    .vxn-plat__intro{padding:46px 0 6px;}
    .vxn-plat__screen{padding:16px;}
    .vxn-plat__spec{grid-template-columns:1fr;gap:4px 0;}
    .vxn-plat__spec dd{margin-bottom:8px;}
}
`;

export default function PlatformSection({ region }: { region: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="vxn-plat">
        <section className="vxn-plat__intro">
          <div className="vxn-plat__wrap">
            <p className="vxn-plat__eyebrow">The platform</p>
            <h2 className="vxn-plat__h">What our technology actually does</h2>
            <p className="vxn-plat__lead">
              The VALUNXT Intelligence Platform is the software our own valuers, researchers and
              advisers work in. It is not a separate product line sold on claims about AI &mdash; it is
              the system that produces the valuations, market views and portfolio reporting behind our
              advisory work, opened up to clients who want the same view of their own holdings.
            </p>
            <p className="vxn-plat__lead" style={{ marginTop: '16px' }}>
              Four modules, described below with what goes in, what comes out, and who it is for.
            </p>
          </div>
        </section>

        <section className="vxn-plat__ui">
          <div className="vxn-plat__wrap">
            <p className="vxn-plat__eyebrow">The screen</p>
            <h2 className="vxn-plat__h">The portfolio view</h2>
            <p className="vxn-plat__lead">
              Every holding in one place, valued on the same basis, with the confidence in each figure
              shown rather than implied. Assets that fall below the confidence threshold are flagged
              for a valuer instead of being reported as a number.
            </p>

            <figure className="vxn-plat__figure">
              <div className="vxn-plat__chrome">
                <div className="vxn-plat__bar">
                  <span className="vxn-plat__dot" aria-hidden="true" />
                  <span className="vxn-plat__dot" aria-hidden="true" />
                  <span className="vxn-plat__dot" aria-hidden="true" />
                  <span className="vxn-plat__barname">VALUNXT Intelligence &mdash; Portfolio</span>
                  <span className="vxn-plat__barpill">Illustration</span>
                </div>
                <div className="vxn-plat__screen">
                  <div className="vxn-plat__kpis">
                    <div className="vxn-plat__kpi">
                      <p className="vxn-plat__kpilabel">Assets tracked</p>
                      <div className="vxn-plat__kpival">5</div>
                      <p className="vxn-plat__kpinote">Across 2 markets</p>
                    </div>
                    <div className="vxn-plat__kpi">
                      <p className="vxn-plat__kpilabel">Reporting currency</p>
                      <div className="vxn-plat__kpival">INR</div>
                      <p className="vxn-plat__kpinote">AED converted at close</p>
                    </div>
                    <div className="vxn-plat__kpi">
                      <p className="vxn-plat__kpilabel">Weighted movement</p>
                      <div className="vxn-plat__kpival vxn-plat__pos">+5.0%</div>
                      <p className="vxn-plat__kpinote">Trailing 12 months</p>
                    </div>
                    <div className="vxn-plat__kpi">
                      <p className="vxn-plat__kpilabel">Flagged for review</p>
                      <div className="vxn-plat__kpival">1</div>
                      <p className="vxn-plat__kpinote">Below confidence floor</p>
                    </div>
                  </div>

                  <div className="vxn-plat__tablewrap">
                    <table>
                      <caption>
                        Holdings, indicative value and valuation confidence &mdash; sample data.
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">Asset</th>
                          <th scope="col">Sector</th>
                          <th scope="col">Ccy</th>
                          <th scope="col">Indicative value</th>
                          <th scope="col">12&nbsp;mth</th>
                          <th scope="col">Confidence</th>
                        </tr>
                      </thead>
                      <tbody>
                        {DEMO_ROWS.map((row) => (
                          <tr key={row[0]}>
                            <td>{row[0]}</td>
                            <td>{row[1]}</td>
                            <td>{row[2]}</td>
                            <td>{row[3]}</td>
                            <td className={row[4][0] === '-' ? 'vxn-plat__neg' : 'vxn-plat__pos'}>
                              {row[4]}
                            </td>
                            <td>
                              <span className="vxn-plat__conf">
                                <span className="vxn-plat__bar2" aria-hidden="true">
                                  <span style={{ width: `${row[6]}%` }} />
                                </span>
                                {row[5]}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <figcaption className="vxn-plat__figcap">
                <strong>Illustration, not a screenshot.</strong> The layout above is the real portfolio
                screen; the holdings and figures are sample data used to show what the view contains.
                No client portfolio is depicted. Ask for a walkthrough on your own data and we will run
                the platform against your actual holdings.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="vxn-plat__mods">
          <div className="vxn-plat__wrap">
            <p className="vxn-plat__eyebrow">Modules</p>
            <h2 className="vxn-plat__h">Four modules, one data model</h2>
            <p className="vxn-plat__lead">
              Each module is usable on its own. They share one asset register, so a valuation produced
              in the first module is the number the third reports and the fourth delivers.
            </p>

            <div className="vxn-plat__modgrid">
              {MODULES.map((m) => (
                <article className="vxn-plat__mod" key={m.n}>
                  <p className="vxn-plat__modn">{m.n}</p>
                  <Html as="h3" className="vxn-plat__modt" html={m.title} />
                  <p className="vxn-plat__modlede">{m.lede}</p>
                  <dl className="vxn-plat__spec">
                    <dt>Inputs</dt>
                    <dd>{m.in}</dd>
                    <dt>Outputs</dt>
                    <dd>{m.out}</dd>
                    <dt>Used by</dt>
                    <dd>{m.who}</dd>
                  </dl>
                  <p className="vxn-plat__modnote">{m.notes}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vxn-plat__limits">
          <div className="vxn-plat__wrap">
            <p className="vxn-plat__eyebrow">Where it stops</p>
            <h2 className="vxn-plat__h">What the platform will not do</h2>
            <p className="vxn-plat__lead">
              Software that is only described by what it can do is hard to trust. These are the
              boundaries we hold it to.
            </p>
            <div className="vxn-plat__limitgrid">
              <div className="vxn-plat__limit">
                <h3 className="vxn-plat__limitt">It does not replace a valuer</h3>
                <p className="vxn-plat__limitd">
                  Automated output is an input to a valuation opinion, not the opinion. Formal
                  valuations are signed by a qualified valuer at{' '}
                  <a href={rurl(region, '/our-group/reliant-surveyors/')} style={{ color: 'var(--gd)' }}>
                    Reliant Surveyors
                  </a>
                  , who can and does override the model.
                </p>
              </div>
              <div className="vxn-plat__limit">
                <h3 className="vxn-plat__limitt">It does not invent coverage</h3>
                <p className="vxn-plat__limitd">
                  Where comparable data is thin, the confidence band widens and the asset is flagged.
                  The platform will report low confidence rather than produce a clean-looking number it
                  cannot support.
                </p>
              </div>
              <div className="vxn-plat__limit">
                <h3 className="vxn-plat__limitt">It does not give advice</h3>
                <p className="vxn-plat__limitd">
                  Outputs are analysis. Buy, hold and exit decisions sit with you, under an advisory
                  mandate if you want our view on them. See the{' '}
                  <a href={rurl(region, '/disclaimer/')} style={{ color: 'var(--gd)' }}>
                    Disclaimer
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="vxn-plat__cta">
          <div className="vxn-plat__wrap">
            <p className="vxn-plat__eyebrow">Next step</p>
            <h2 className="vxn-plat__h">See it against your own portfolio</h2>
            <p className="vxn-plat__lead" style={{ margin: '0 auto' }}>
              A walkthrough takes about forty minutes and runs on your holdings, not sample data. If
              the platform is not a fit for how you hold assets, we will tell you in that session.
            </p>
            <a className="vxn-plat__btn" href={rurl(region, '/contact/')}>
              Request a walkthrough
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
