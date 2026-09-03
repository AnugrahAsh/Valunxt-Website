/* Research & Reports page body — matches the site's native case-study card UI
   (featured image on top, category pill + date meta row, serif title, excerpt)
   in a 2-column grid. Detail pages are not linked from here, so the cards are
   intentionally NOT links (blank details, no redirect). 4 reports only.

   Port of includes/partials/research-content.php. */
import { BASE, rurl } from '@/lib/region';

const REPORTS = [
  {
    tag: 'Market Report',
    date: 'March 2026',
    title: 'India Real Estate Outlook 2026',
    desc: "A forward view on residential and commercial demand, pricing, and capital flows across India's leading metros and emerging corridors.",
    img: '/assets/content/uploads/new-folder/insights-1.webp',
  },
  {
    tag: 'Regional Report',
    date: 'February 2026',
    title: 'Dubai Residential Market Review',
    desc: "Supply, absorption, and yield trends across Dubai's prime and mid-market communities, with a lens on cross-border investor activity.",
    img: '/assets/content/uploads/new-folder/insights-2.webp',
  },
  {
    tag: 'Investor Insights',
    date: 'January 2026',
    title: 'NRI Investment Trends',
    desc: 'How Non-Resident Indians are allocating to real estate back home — preferred markets, ticket sizes, structuring, and repatriation patterns.',
    img: '/assets/content/uploads/new-folder/research-intelligence-2.webp',
  },
  {
    tag: 'Sector Report',
    date: 'December 2025',
    title: 'Commercial Yields & Capital Values',
    desc: 'A data-led read on office, retail, and warehousing yields, rental growth, and the spread between capital values across key markets.',
    img: '/assets/content/uploads/new-folder/insights-3.webp',
  },
];

const CSS = `
/* ===== VALUNXT Research & Reports — native case-study card look ============= */
.vxn-rr{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--body:#4d5863;--muted:#5b6670;--line:#e5e1d8;--paper:#f1f0ec;font-family:"DM Sans",sans-serif;color:var(--body);background:#fff;padding:60px 0 68px;}
.vxn-rr *{box-sizing:border-box;}
.vxn-rr__wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.vxn-rr__eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 14px;}
.vxn-rr__head{max-width:720px;margin:0 0 40px;}
.vxn-rr h2.vxn-rr__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.08;font-size:clamp(30px,4vw,48px);margin:0 0 18px;}
.vxn-rr__lead{margin:0;font-size:16.5px;line-height:1.8;color:var(--body);}

/* ---- Grid & cards --------------------------------------------------------- */
.vxn-rr__grid{display:grid;grid-template-columns:1fr 1fr;gap:26px;}
.vxn-rr__card{display:flex;flex-direction:column;background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;transition:box-shadow .25s,transform .25s;}
.vxn-rr__card:hover{box-shadow:0 22px 52px -30px rgba(14,53,95,.38);transform:translateY(-3px);}
.vxn-rr__media{display:block;overflow:hidden;}
.vxn-rr__media img{display:block;width:100%;aspect-ratio:16/10;object-fit:cover;transition:transform .5s ease;}
.vxn-rr__card:hover .vxn-rr__media img{transform:scale(1.03);}
.vxn-rr__body{display:flex;flex-direction:column;flex:1;padding:24px 26px 26px;}
.vxn-rr__meta{display:flex;align-items:center;gap:14px;margin:0 0 15px;}
.vxn-rr__pill{background:var(--paper);color:var(--ny2);font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:7px 12px;border-radius:4px;}
.vxn-rr__date{font-size:12.5px;color:var(--muted);letter-spacing:.02em;}
.vxn-rr h3.vxn-rr__title{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.18;font-size:clamp(20px,2.1vw,26px);margin:0 0 12px;}
.vxn-rr__desc{margin:0;font-size:15px;line-height:1.72;color:var(--body);}
.vxn-rr__note{margin:34px 0 0;font-size:13px;line-height:1.7;color:#8a929a;}
.vxn-rr__note a{color:var(--gd2);text-decoration:none;}

@media(max-width:820px){
    .vxn-rr{padding:46px 0 54px;}
    .vxn-rr__grid{grid-template-columns:1fr;gap:22px;}
    .vxn-rr__head{margin-bottom:28px;}
}
`;

export default function ResearchListSection({ region }: { region: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="vxn-rr">
        <div className="vxn-rr__wrap">
          <div className="vxn-rr__head">
            <p className="vxn-rr__eyebrow">Research &amp; Reports</p>
            <h2 className="vxn-rr__h">Intelligence that informs every decision</h2>
            <p className="vxn-rr__lead">
              Our research desk publishes independent reports on the markets we operate in — India and
              the UAE. Each report is grounded in primary data, on-the-ground intelligence, and the
              same discipline we bring to every client mandate.
            </p>
          </div>

          <div className="vxn-rr__grid">
            {REPORTS.map((rp) => (
              <article className="vxn-rr__card" key={rp.title}>
                <span className="vxn-rr__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={BASE + rp.img} alt={rp.title} loading="lazy" />
                </span>
                <div className="vxn-rr__body">
                  <div className="vxn-rr__meta">
                    <span className="vxn-rr__pill">{rp.tag}</span>
                    <span className="vxn-rr__date">{rp.date}</span>
                  </div>
                  <h3 className="vxn-rr__title">{rp.title}</h3>
                  <p className="vxn-rr__desc">{rp.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="vxn-rr__note">
            Detailed report pages are coming soon. For early access or a specific data request, please{' '}
            <a href={rurl(region, '/contact/')}>get in touch</a>.
          </p>
        </div>
      </section>
    </>
  );
}
