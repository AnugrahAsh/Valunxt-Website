/**
 * The proof band that follows the services section on the home page.
 *
 * Layout follows the reference: a photograph carrying a frosted panel on the
 * left, gradient cards on the right. The reference's cards run half the page
 * tall; these are sized so two stack in the same column height, per the brief.
 *
 * ---------------------------------------------------------------------------
 * On the content — read this before adding to it.
 *
 * The reference composition puts a named client quote in the frosted panel and
 * a client outcome ("AED 0 in FTA penalties") on the card. VALUNXT has not
 * supplied either, and inventing a client endorsement or a client result for a
 * regulated advisory firm is not a design decision — see the note at the top of
 * data/testimonials.ts, which is empty for exactly this reason.
 *
 * So the band renders the same composition from claims the site already makes
 * and already qualifies: the group's cumulative valuation figures, published on
 * /our-group/ with their basis attached. `basis` is rendered, not decorative —
 * a figure without one is the thing that qualifier exists to prevent.
 *
 * The frosted panel takes the first entry from data/testimonials.ts as soon as
 * one exists. Until then it carries the positioning statement from /about/,
 * attributed to the firm rather than to a person, so nothing on screen reads as
 * a client speaking.
 * ---------------------------------------------------------------------------
 *
 * Styles: assets/css/valunxt-landing.css (.vxn-proof).
 */
import { rurl } from '@/lib/region';
import { rimgFirst } from '@/lib/region-assets';
import { LogoXGlyph } from '@/components/brand/LogoX';
import TESTIMONIALS from '@/data/testimonials';

interface ProofCard {
  tag: string;
  stat: string;
  label: string;
  /** Rendered, not decorative — see the note above. */
  basis: string;
  href: string;
}

interface ProofContent {
  title: string;
  images: string[];
  cards: [ProofCard, ProofCard];
  /** Shown until data/testimonials.ts carries a real quote. */
  standin: string;
}

const CONTENT: Record<string, ProofContent> = {
  'en-in': {
    title: 'Depth You Can Verify, Not Just Claim',
    images: ['banners/clients.webp', 'homepage/client-2.webp'],
    standin:
      'We combine market intelligence, integrated advisory capabilities and execution expertise so that every recommendation we put in front of a client can be traced back to independent research.',
    cards: [
      {
        tag: 'Valuation',
        stat: '10,000+',
        label: 'Valuation instructions completed by group firm Reliant Surveyors.',
        basis: 'Cumulative to date. Counts completed instructions.',
        href: '/our-group/reliant-surveyors/',
      },
      {
        tag: 'Network',
        stat: '500+',
        label:
          'Developer, institutional and investor relationships across India and the UAE.',
        basis: 'Cumulative to date.',
        href: '/network/',
      },
    ],
  },
  'en-ae': {
    title: 'Numbers That Hold Up to Scrutiny',
    images: ['banners/get-in-touch-uae.webp', 'banners/clients.webp'],
    standin:
      'We are a senior team of accountants, tax advisers and valuers dedicated to one thing: numbers you can act on without second-guessing.',
    cards: [
      {
        tag: 'Valuation',
        stat: '10,000+',
        label: 'Valuation instructions completed by group firm Reliant Surveyors.',
        basis: 'Cumulative to date. Counts completed instructions.',
        href: '/our-group/reliant-surveyors/',
      },
      {
        tag: 'Assets',
        stat: 'USD 150bn+',
        label: 'Asset value covered by those valuation instructions.',
        basis: 'Cumulative to date, across all instruction types.',
        href: '/our-group/',
      },
    ],
  },
};

/** The corner affordance, shared with the trio cards. */
function GoArrow() {
  return (
    <span className="vxn-trio__go" aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Initials for the round badge; 'VX' when the panel speaks for the firm. */
function initials(name: string, org: string): string {
  const source = name.trim() || org.trim();
  const parts = source.split(/\s+/).filter(Boolean).slice(0, 2);
  return parts.map((p) => p[0]!.toUpperCase()).join('') || 'VX';
}

export default function ProofBand({ region }: { region: string }) {
  const c = CONTENT[region] ?? CONTENT['en-in']!;
  const first = TESTIMONIALS[0];

  const panel = first
    ? {
        quote: first.quote,
        who: first.name || first.role,
        where: first.org,
        badge: initials(first.name, first.org),
      }
    : {
        quote: c.standin,
        who: 'VALUNXT Capital',
        where: 'How we work',
        badge: 'VX',
      };

  return (
    <section className="vxn-proof" aria-labelledby="vxn-proof-title">
      <div className="vxn-proof__inner">
        <div className="vxn-proof__head">
          <span className="vxn-proof__tag">Track record</span>
          <h2 id="vxn-proof-title" className="vxn-proof__title">
            {c.title}
          </h2>
        </div>

        <div className="vxn-proof__grid">
          <figure className="vxn-proof__figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={rimgFirst(region, c.images)} alt="Client briefing session" loading="lazy" />
            <figcaption className="vxn-proof__quote">
              <span className="vxn-proof__mark" aria-hidden="true">
                &rdquo;
              </span>
              <p className="vxn-proof__text">{panel.quote}</p>
              <div className="vxn-proof__by">
                <span className="vxn-proof__badge" aria-hidden="true">
                  {panel.badge}
                </span>
                <span>
                  <span className="vxn-proof__who">{panel.who}</span>
                  <span className="vxn-proof__where">{panel.where}</span>
                </span>
              </div>
            </figcaption>
          </figure>

          <div className="vxn-proof__cards">
            {c.cards.map((card) => (
              <a className="vxn-proof__card" href={rurl(region, card.href)} key={card.tag}>
                <span className="vxn-proof__x" aria-hidden="true">
                  <LogoXGlyph />
                </span>
                <div className="vxn-trio__top">
                  <span className="vxn-trio__tag">{card.tag}</span>
                  <GoArrow />
                </div>
                <p className="vxn-proof__stat">{card.stat}</p>
                <p className="vxn-proof__label">{card.label}</p>
                <p className="vxn-proof__basis">{card.basis}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
