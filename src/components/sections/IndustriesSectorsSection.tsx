/* Industries — the property sectors and client segments VALUNXT covers.
   This page used to render the same four group-company cards as /our-group/
   and /network/, so all three answered the same question. The division is now:
     /our-group/  — WHO we are (the four operating companies)
     /industries/ — WHAT we cover (asset classes and client segments, below)
     /network/    — WHO we plug you into (banks, investors, accreditations)

   Port of includes/partials/industries-sectors.php. */
import { rurl } from '@/lib/region';
import { vxnMarkets } from '@/lib/site-data';
import Html from '@/components/Html';

const SECTORS = [
  {
    n: '01',
    title: 'Residential',
    desc: 'Primary and secondary residential across metros and emerging corridors — from single-unit acquisition for private owners to bulk and floor-level deals for funds. Valuation, pricing benchmarks, and exit planning.',
    work: ['Acquisition &amp; exit advisory', 'Portfolio valuation', 'Rental yield benchmarking'],
    href: '/services/real-estate-investment-advisory/',
  },
  {
    n: '02',
    title: 'Grade-A Office',
    desc: 'Institutional office assets and business parks. We advise on entry pricing, tenant covenant quality, lease structuring, and the gap between headline and effective rents that drives real returns.',
    work: ['Asset valuation', 'Covenant &amp; lease review', 'Cap-rate analysis'],
    href: '/services/research-intelligence/',
  },
  {
    n: '03',
    title: 'Retail &amp; Mixed-Use',
    desc: 'High-street, mall, and mixed-use schemes where trade-area strength and tenant mix decide value. Feasibility, catchment analysis, and repositioning strategy for underperforming assets.',
    work: ['Catchment &amp; footfall analysis', 'Highest &amp; best use', 'Repositioning strategy'],
    href: '/services/research-intelligence/',
  },
  {
    n: '04',
    title: 'Warehousing &amp; Logistics',
    desc: 'Grade-A warehousing, fulfilment, and cold chain — one of the fastest-repricing sectors in both our markets. Site selection, build-to-suit structuring, and yield benchmarking against comparable stock.',
    work: ['Site selection', 'Build-to-suit structuring', 'Yield benchmarking'],
    href: '/services/capital-advisory/',
  },
  {
    n: '05',
    title: 'Land &amp; Development',
    desc: 'Raw land, joint development agreements, and phased schemes. We work with developers on capital stack design, phasing, and the funding runway a project needs before the first sale is booked.',
    work: ['Feasibility &amp; residual valuation', 'JV &amp; JDA structuring', 'Development finance'],
    href: '/services/capital-advisory/',
  },
  {
    n: '06',
    title: 'Hospitality',
    desc: 'Hotels, serviced apartments, and branded residences. Operator selection, management-agreement review, and trading-based valuation where the asset and the business are inseparable.',
    work: ['Trading-based valuation', 'Operator &amp; brand selection', 'Feasibility studies'],
    href: '/services/research-intelligence/',
  },
];

const SEGMENTS = [
  {
    t: 'Private investors &amp; HNIs',
    d: 'Individuals building or consolidating a real estate allocation alongside other assets.',
  },
  {
    t: 'Family offices',
    d: 'Multi-generational structures needing governance, valuation discipline, and succession-ready holding vehicles.',
  },
  {
    t: 'NRIs &amp; cross-border buyers',
    d: 'Non-resident buyers allocating between India and the UAE, with structuring and repatriation in scope.',
  },
  {
    t: 'Developers',
    d: 'Sponsors raising project capital, structuring JVs, and pricing phased releases.',
  },
  {
    t: 'Banks &amp; lenders',
    d: 'Institutions requiring independent, standards-aligned valuation for credit and provisioning.',
  },
  {
    t: 'Funds &amp; institutions',
    d: 'Allocators underwriting portfolios and needing independent research before committee.',
  },
];

const CSS = `
/* ===== VALUNXT Industries — sectors & segments ============================= */
.vxn-sec{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--body:#4d5863;--muted:#5b6670;--line:#e5e1d8;--paper:#f7f6f3;font-family:"DM Sans",sans-serif;color:var(--body);background:#fff;padding:64px 0 8px;}
.vxn-sec *{box-sizing:border-box;}
.vxn-sec__wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.vxn-sec__eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 14px;}
.vxn-sec h2.vxn-sec__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.08;font-size:clamp(28px,3.6vw,44px);margin:0 0 18px;}
.vxn-sec__lead{margin:0;max-width:74ch;font-size:16.5px;line-height:1.8;}
.vxn-sec__head{margin:0 0 42px;}

.vxn-sec__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);border:1px solid var(--line);border-radius:10px;overflow:hidden;}
.vxn-sec__card{background:#fff;padding:32px 30px 30px;display:flex;flex-direction:column;transition:background .25s;}
.vxn-sec__card:hover{background:var(--paper);}
.vxn-sec__num{font-family:"Forum",serif;font-size:14px;letter-spacing:.14em;color:var(--gd2);margin:0 0 14px;}
.vxn-sec h3.vxn-sec__title{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;font-size:23px;line-height:1.2;margin:0 0 12px;}
.vxn-sec__desc{margin:0 0 18px;font-size:15px;line-height:1.72;}
.vxn-sec__work{list-style:none;margin:0 0 20px;padding:0;display:flex;flex-direction:column;gap:8px;}
.vxn-sec__work li{position:relative;padding-left:18px;font-size:14px;line-height:1.55;color:var(--ny2);}
.vxn-sec__work li::before{content:"";position:absolute;left:0;top:8px;width:6px;height:6px;border-radius:50%;background:linear-gradient(135deg,var(--gd),var(--gd2));}
.vxn-sec__link{margin-top:auto;font-size:12.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ny)!important;text-decoration:none;border-bottom:1px solid var(--gd);padding-bottom:3px;align-self:flex-start;transition:color .2s,border-color .2s;}
.vxn-sec__link:hover{color:var(--gd2)!important;border-color:var(--gd2);}

.vxn-sec__seg{margin-top:64px;}
.vxn-sec__seggrid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
.vxn-sec__segitem{border-top:2px solid var(--ny);padding-top:18px;}
.vxn-sec h3.vxn-sec__segtitle{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;font-size:20px;line-height:1.25;margin:0 0 8px;}
.vxn-sec__segdesc{margin:0;font-size:14.5px;line-height:1.7;}

@media(max-width:960px){
    .vxn-sec__grid,.vxn-sec__seggrid{grid-template-columns:repeat(2,1fr);}
}
@media(max-width:640px){
    .vxn-sec{padding:46px 0 6px;}
    .vxn-sec__grid,.vxn-sec__seggrid{grid-template-columns:1fr;}
    .vxn-sec__seg{margin-top:46px;}
}
`;

export default function IndustriesSectorsSection({ region }: { region: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="vxn-sec">
        <div className="vxn-sec__wrap">
          <div className="vxn-sec__head">
            <p className="vxn-sec__eyebrow">Sectors we cover</p>
            <h2 className="vxn-sec__h">Six asset classes. One valuation discipline.</h2>
            <p className="vxn-sec__lead">
              Real estate is not a single market. A warehouse in a logistics corridor, a Grade-A floor
              let to a listed tenant, and a phased residential scheme are priced by different drivers
              and fail for different reasons. These are the sectors our valuers, researchers and
              capital team cover across {vxnMarkets('short')} &mdash; and what an engagement in each
              typically involves.
            </p>
          </div>

          <div className="vxn-sec__grid">
            {SECTORS.map((s) => (
              <article className="vxn-sec__card" key={s.n}>
                <p className="vxn-sec__num">{s.n}</p>
                <Html as="h3" className="vxn-sec__title" html={s.title} />
                <Html as="p" className="vxn-sec__desc" html={s.desc} />
                <ul className="vxn-sec__work">
                  {s.work.map((w) => (
                    <Html as="li" key={w} html={w} />
                  ))}
                </ul>
                <a className="vxn-sec__link" href={rurl(region, s.href)}>
                  Related service &rarr;
                </a>
              </article>
            ))}
          </div>

          <div className="vxn-sec__seg">
            <div className="vxn-sec__head">
              <p className="vxn-sec__eyebrow">Who we act for</p>
              <h2 className="vxn-sec__h">Six client segments</h2>
              <p className="vxn-sec__lead">
                The sector sets the analysis; the client sets the mandate. Most engagements sit at the
                intersection of one of the sectors above and one of the segments below.
              </p>
            </div>
            <div className="vxn-sec__seggrid">
              {SEGMENTS.map((g) => (
                <div className="vxn-sec__segitem" key={g.t}>
                  <Html as="h3" className="vxn-sec__segtitle" html={g.t} />
                  <Html as="p" className="vxn-sec__segdesc" html={g.d} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
