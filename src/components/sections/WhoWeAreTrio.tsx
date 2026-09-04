/**
 * The three feature cards that close the "Who We Are" section on both home
 * pages — India's `.vxn-wwa` block and the UAE's `.vxn-plat` block.
 *
 * Added below whatever that section already had; nothing above is touched, so
 * no copy is lost. The middle card is the brand gradient carrying the
 * wordmark's x as a window onto a photograph; the outer two are cream cards.
 * Every card links somewhere that exists.
 *
 * The copy differs per edition — the UAE leads with accounting and tax, India
 * with the four investment verticals — so the content lives here keyed by
 * region rather than being passed down from two nearly identical call sites.
 *
 * Styles: assets/css/valunxt-landing.css (.vxn-trio).
 */
import { rurl } from '@/lib/region';
import { rimg } from '@/lib/region-assets';
import { LogoXWindow } from '@/components/brand/LogoX';

interface TrioCard {
  tag: string;
  title: React.ReactNode;
  href: string;
  /** Omitted on the gradient card, which shows the x window instead. */
  img?: string;
  alt?: string;
}

interface TrioContent {
  left: TrioCard;
  /** The gradient card. `img` is the photograph seen through the x. */
  brand: TrioCard & { img: string };
  right: TrioCard;
}

const CONTENT: Record<string, TrioContent> = {
  'en-in': {
    left: {
      tag: 'Who We Are',
      title: 'One Accountable Partner for Real Estate Wealth, Capital & Intelligence',
      href: '/about/',
      img: 'homepage/Integrated-Platform.webp',
      alt: 'Advisory team reviewing portfolio performance',
    },
    brand: {
      tag: 'The Group',
      title: 'RICS-Compliant Valuations Through Group Firm Reliant Surveyors',
      href: '/our-group/reliant-surveyors/',
      img: 'homepage/research-and-intellegance.webp',
    },
    right: {
      tag: 'Guide',
      title: 'Market Intelligence: What to Establish Before Every Property Investment',
      href: '/services/research-intelligence/',
      img: 'homepage/building-real-esate.webp',
      alt: 'Commercial towers seen from street level',
    },
  },
  'en-ae': {
    left: {
      tag: 'Who We Are',
      title: 'One Accountable Partner for Accounting, Tax & Advisory in the UAE',
      href: '/about/',
      img: 'services/accounting-and-tax-services.webp',
      alt: 'Management accounts under review',
    },
    brand: {
      tag: 'The Group',
      title: 'RICS-Compliant Valuations Through Group Firm Reliant Surveyors',
      href: '/our-group/reliant-surveyors/',
      img: 'services/valuation-and-advisory.webp',
    },
    right: {
      tag: 'Guide',
      title: 'Corporate Tax in the UAE: What Every Business Has to Register and File',
      href: '/services/',
      img: 'banners/uae-slider-3.webp',
      alt: 'Dubai commercial district',
    },
  },
};

/** The corner affordance, repeated on every card. */
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

/** One of the two cream cards: pill and arrow, heading, photograph at the foot. */
function PlainCard({ region, card }: { region: string; card: TrioCard }) {
  return (
    <a className="vxn-trio__card" href={rurl(region, card.href)}>
      <div className="vxn-trio__top">
        <span className="vxn-trio__tag">{card.tag}</span>
        <GoArrow />
      </div>
      <h3 className="vxn-trio__title">{card.title}</h3>
      {card.img ? (
        <div className="vxn-trio__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={rimg(region, card.img)} alt={card.alt ?? ''} loading="lazy" />
        </div>
      ) : null}
    </a>
  );
}

export default function WhoWeAreTrio({ region }: { region: string }) {
  const c = CONTENT[region] ?? CONTENT['en-in']!;

  return (
    <div className="vxn-trio">
      <PlainCard region={region} card={c.left} />

      <a className="vxn-trio__card vxn-trio__card--brand" href={rurl(region, c.brand.href)}>
        <div className="vxn-trio__top">
          <span className="vxn-trio__tag">{c.brand.tag}</span>
          <GoArrow />
        </div>
        <div className="vxn-trio__x">
          <LogoXWindow src={rimg(region, c.brand.img)} />
        </div>
        <h3 className="vxn-trio__title">{c.brand.title}</h3>
      </a>

      <PlainCard region={region} card={c.right} />
    </div>
  );
}
