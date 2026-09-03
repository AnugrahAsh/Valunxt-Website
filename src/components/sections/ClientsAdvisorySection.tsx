/* Clients page — three alternating image/text advisory sections.
   Mirrors the Services "Building Wealth Through Real Estate" section style
   (badge + serif heading + copy + check-list + image with bar accent),
   alternating left/right, no CTA. Images from new-folder.

   Port of includes/partials/clients-advisory.php. */
import { BASE } from '@/lib/region';

const SECTIONS = [
  {
    badge: 'Private Clients & Family Offices',
    title: 'Wealth Built on Trust',
    text: 'We partner with high-net-worth individuals, families, and family offices to protect and grow wealth across generations. Every mandate begins with your objectives, risk tolerance, and legacy goals, translated into a disciplined, research-led real estate strategy.',
    img: '/assets/content/uploads/new-folder/client-success-2.webp',
    list: [
      'Bespoke portfolio construction',
      'Confidential, conflict-free advice',
      'Multi-generational wealth planning',
    ],
  },
  {
    badge: 'Institutional & Developer Clients',
    title: 'Capital, Structured With Discipline',
    text: 'From developers raising project finance to institutions deploying at scale, we structure capital that aligns with long term investment objectives — supported by rigorous underwriting, sound financial modelling, and effective investor syndication.',
    img: '/assets/content/uploads/new-folder/real-estate-wealth-advisory-1.webp',
    list: [
      'Project funding & debt advisory',
      'Equity & capital structuring',
      'Institutional-grade due diligence',
    ],
  },
  {
    badge: 'NRI & Cross-Border Investors',
    title: 'Investing Across India & the UAE',
    text: 'For NRIs and international investors, we bridge markets with local intelligence and cross-border expertise — guiding acquisition, diversification, and exit decisions with clarity, transparency, and independent research at every step.',
    img: '/assets/content/uploads/new-folder/research-intelligence-1.webp',
    list: [
      'Cross border investment strategy',
      'Regulatory & repatriation guidance',
      'On-the-ground market intelligence',
    ],
  },
];

/** The decorative bar-chart accent that sits over each image. */
export const ADVISORY_BARS = [38, 60, 86, 120, 150, 128, 96];

const CSS = `
    .vxn-adv {
        background: #fff;
        padding: 72px 24px 88px;
    }

    .vxn-adv__row {
        max-width: 1180px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
    }

    .vxn-adv__row+.vxn-adv__row {
        margin-top: 88px;
    }

    .vxn-adv__media {
        position: relative;
    }

    .vxn-adv__img {
        width: 100%;
        aspect-ratio: 1 / 0.92;
        object-fit: cover;
        border-radius: 12px;
        display: block;
    }

    .vxn-adv__bars {
        position: absolute;
        right: 22px;
        bottom: 0;
        display: flex;
        align-items: flex-end;
        gap: 9px;
        height: 160px;
        pointer-events: none;
    }

    .vxn-adv__bars span {
        width: 17px;
        border-radius: 3px 3px 0 0;
        background: linear-gradient(180deg, rgba(0, 83, 183, .85) 0%, #0053B7 100%);
        opacity: .9;
        box-shadow: 0 6px 18px rgba(14, 53, 95, .18);
    }

    .vxn-adv__row--reverse .vxn-adv__media {
        order: 2;
    }

    .vxn-adv__row--reverse .vxn-adv__bars {
        right: auto;
        left: 22px;
    }

    .vxn-adv__badge {
        display: inline-block;
        background: #f1f0ec;
        color: #5b6670;
        font-family: "DM Sans", sans-serif;
        font-size: 13px;
        letter-spacing: .01em;
        padding: 8px 16px;
        border-radius: 4px;
        margin-bottom: 22px;
    }

    .vxn-adv .vxn-adv__title {
        font-family: "Forum", serif !important;
        font-weight: 400 !important;
        color: #0E355F;
        font-size: clamp(30px, 3.4vw, 46px);
        line-height: 1.08;
        margin: 0 0 20px;
    }

    .vxn-adv__text {
        font-family: "DM Sans", sans-serif;
        color: #4d5863;
        font-size: 16.5px;
        line-height: 1.78;
        margin: 0 0 28px;
    }

    .vxn-adv__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .vxn-adv__list li {
        display: flex;
        align-items: center;
        gap: 13px;
        font-family: "DM Sans", sans-serif;
        color: #26313b;
        font-size: 16px;
    }

    .vxn-adv__list svg {
        width: 26px;
        height: 26px;
        flex: 0 0 auto;
        color: #0053B7;
    }

    @media(max-width:900px) {
        .vxn-adv {
            padding: 52px 20px 60px;
        }

        .vxn-adv__row {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .vxn-adv__row+.vxn-adv__row {
            margin-top: 56px;
        }

        .vxn-adv__row--reverse .vxn-adv__media {
            order: 0;
        }

        .vxn-adv__bars {
            height: 120px;
        }
    }
`;

export default function ClientsAdvisorySection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="vxn-adv">
        {SECTIONS.map((s, i) => {
          const rev = i % 2 === 1;
          return (
            <div className={`vxn-adv__row${rev ? ' vxn-adv__row--reverse' : ''}`} key={s.title}>
              <div className="vxn-adv__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="vxn-adv__img" src={BASE + s.img} alt={s.title} loading="lazy" />
                <div className="vxn-adv__bars" aria-hidden="true">
                  {ADVISORY_BARS.map((b, bi) => (
                    <span style={{ height: `${b}px` }} key={bi} />
                  ))}
                </div>
              </div>
              <div className="vxn-adv__body">
                <span className="vxn-adv__badge">{s.badge}</span>
                <h2 className="vxn-adv__title">{s.title}</h2>
                <p className="vxn-adv__text">{s.text}</p>
                <ul className="vxn-adv__list">
                  {s.list.map((li) => (
                    <li key={li}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12.5l2.6 2.6 5.4-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
