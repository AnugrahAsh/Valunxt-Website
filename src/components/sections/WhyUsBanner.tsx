/**
 * The "Why us?" glass banner, on both home pages.
 *
 * A full-bleed photograph with a frosted panel over its left third. Runs
 * alongside each page's existing CTA band ("Every Investment Decision Counts"
 * on India, "Every Number Has to Hold Up" on the UAE) rather than replacing it
 * — those keep their own copy and their own blur panel.
 *
 * Neither claim below is new. India's is the engagement terms already stated on
 * /free-consultation/; the UAE's is "Fixed Fees, Agreed Upfront", which that
 * page already leads with under "What Sets Us Apart".
 *
 * Styles: assets/css/valunxt-landing.css (.vxn-whyus).
 */
import { rurl } from '@/lib/region';
import { rimgFirst } from '@/lib/region-assets';

interface BannerContent {
  /** The clause before the highlighted block. */
  lead: string;
  /** The gradient-filled clause. */
  mark: string;
  copy: string;
  /** Candidates in preference order; the first that exists wins. */
  images: string[];
  alt: string;
}

const CONTENT: Record<string, BannerContent> = {
  'en-in': {
    lead: 'You’ll Always Know',
    mark: 'Where You Stand',
    copy: 'Scope, timelines and fees agreed in writing before any work begins — and independent research behind every recommendation.',
    images: ['banners/partnership.webp', 'homepage/Integrated-Platform.webp'],
    alt: 'Advisory team in discussion with a client',
  },
  'en-ae': {
    lead: 'You’ll Always Know',
    mark: 'Where You Stand',
    copy: 'We are transparent like that. Fixed fees agreed upfront, senior people on every mandate, no surprises on the invoice.',
    images: ['banners/uae-slider-2.webp', 'banners/partnership.webp'],
    alt: 'Advisory team in discussion with a client',
  },
};

export default function WhyUsBanner({ region }: { region: string }) {
  const c = CONTENT[region] ?? CONTENT['en-in']!;

  return (
    <section className="vxn-whyus" aria-labelledby="vxn-whyus-title">
      <div className="vxn-whyus__frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="vxn-whyus__media"
          src={rimgFirst(region, c.images)}
          alt={c.alt}
          loading="lazy"
        />
        <div className="vxn-whyus__panel">
          <span className="vxn-whyus__spark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.6l1.9 5.8 5.8 1.9-5.8 1.9-1.9 5.8-1.9-5.8-5.8-1.9 5.8-1.9z" />
            </svg>
          </span>
          <span className="vxn-whyus__tag">Why us?</span>
          <h2 id="vxn-whyus-title" className="vxn-whyus__title">
            {c.lead} <span className="vxn-whyus__mark">{c.mark}</span>
          </h2>
          <p className="vxn-whyus__copy">{c.copy}</p>
          <a className="vxn-whyus__cta" href={rurl(region, '/free-consultation/')}>
            Schedule a Call
            <i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
