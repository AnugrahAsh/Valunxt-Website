/**
 * Shared editorial mega-menu panel.
 *
 * Attach to a nav item with:
 *   preset    — 'insights' (default) | 'services' | 'group'
 *   tabIndex  — -1 for the hidden mobile/sticky nav copies
 *   label     — optional override for the parent link text
 *   href      — optional override for the parent target (relative to the region)
 * All three menus share the exact same UI; only the preset content differs.
 *
 * Layout is two regions on one full-bleed white sheet: an index region on the
 * left (section title, lede, the two-up link list, and the ruled "view all" CTA
 * at its foot) and a pair of promo cards on the right.
 *
 * Port of includes/partials/more-mega.php.
 */
import { rurl, vxnServices } from '@/lib/region';
import { vxnCompanyList } from '@/lib/site-data';
import Html from '@/components/Html';

/**
 * The mega-menu line icons, drawn here rather than pulled from the theme's icon
 * font: the font ships a marketing-brochure set, and the menu wants a single
 * consistent 24px stroke family. Tokens are named in vxnServices()
 * (icon: 'ledger') so the registry stays the one place a service is defined.
 *
 * Every glyph is a 24×24 currentColor stroke path, so the tile controls colour.
 */
const ICON_PATHS: Record<string, string> = {
  /* Accounting & tax — a ledger sheet with ruled lines. */
  ledger:
    '<path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v6h6"/><path d="M9 13h7M9 17h5"/>',
  /* Real estate — a tower block. */
  building:
    '<path d="M3 21h18"/><path d="M5 21V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15"/><path d="M13 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10"/><path d="M8 9h2M8 13h2M8 17h2M16 14h1M16 18h1"/>',
  /* Mortgages — a key. */
  key: '<circle cx="8" cy="15" r="4"/><path d="M10.9 12.1 20 3"/><path d="m17 6 2.5 2.5M15 8l2 2"/>',
  /* Valuation — balance scales. */
  scales:
    '<path d="M12 4v17M8 21h8M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/><circle cx="12" cy="4" r="1.4"/>',
  /* Research — a trend line over a chart frame. */
  chart:
    '<path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="m7 15 3.5-4 3 2.5L20 7"/><path d="M20 7h-3.5M20 7v3.5"/>',
  /* Technology & AI — a processor die. */
  chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 10h4v4h-4z"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  /* Capital advisory — two hands meeting. */
  handshake:
    '<path d="m11 17 2 2a1.4 1.4 0 0 0 2 0 1.4 1.4 0 0 0 0-2"/><path d="m15 17 1.5 1.5a1.4 1.4 0 0 0 2-2L13 11"/><path d="M2 9h3l4-4 4 4h3"/><path d="M22 9h-3l-4 4-2-2"/><path d="M2 9v6h2M22 9v6h-2"/>',
  /* Reports — a bound document. */
  document:
    '<path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M9 12h7M9 16h7"/>',
  /* Community — a small group. */
  users:
    '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.4a3.2 3.2 0 0 1 0 5.2"/><path d="M18 14.2A6.5 6.5 0 0 1 21.5 20"/>',
  /* Partnership / network — a connected globe. */
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
  /* Insight / commentary — a nib. */
  pen: '<path d="M4 20h4L20 8a2.5 2.5 0 0 0-3.5-3.5L4 16.5V20Z"/><path d="m15 6 3.5 3.5"/><path d="M4 16.5 7.5 20"/>',
  /* Clients — a shield, i.e. work held in confidence. */
  shield: '<path d="M12 3 5 6v5.5c0 4.3 2.9 8.1 7 9.5 4.1-1.4 7-5.2 7-9.5V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
};

export function MegaIcon({ token }: { token?: string }) {
  const d = ICON_PATHS[token ?? ''] ?? ICON_PATHS.document;
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

/** The ringed arrow that ends every CTA on the sheet — the "view all" link and
    each card. Drawn rather than typed so the ring is a true circle at any size. */
export function MegaArrow() {
  return (
    <span className="vxn-mega__circ" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        <path d="M4 12h15" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </span>
  );
}

export type MegaPreset = 'insights' | 'services' | 'group';

interface MegaLink {
  t: string;
  href: string;
  icon: string;
  d: string;
}
interface MegaCard {
  eyebrow: string;
  title: string;
  href: string;
  img: string;
  cta: string;
}
interface MegaContent {
  label: string;
  href: string;
  title: string;
  lede: string;
  sidehead: string;
  links: MegaLink[];
  cards: MegaCard[];
  viewall: string;
  viewall_label: string;
}

function preset(key: MegaPreset, region: string): MegaContent {
  if (key === 'services') {
    /* Built from vxnServices() so the menu names whatever the visitor's market
       actually leads with — the UAE's six services in the UAE edition, the
       group's four verticals in India — and can't drift from the home page. */
    const services = vxnServices(region);
    return {
      label: 'Services',
      href: '/services/',
      title: 'Advisory Services',
      /* Deliberately not "four disciplines" / "six services": the list is
         per-market, and a counted lede goes stale the moment one is added. */
      lede: 'Every discipline under one roof, so a decision is advised, financed and executed by the same team.',
      sidehead: 'Explore services',
      links: services.map((s) => ({
        t: s.title,
        href: s.href,
        icon: s.icon ?? 'document',
        d: s.desc ?? '',
      })),
      /* The two cards mirror the first two entries of the list they sit beside,
         so a change to the registry carries into them without a second edit. */
      cards: services.slice(0, 2).map((s) => ({
        eyebrow: 'Advisory',
        title: s.short ?? s.title,
        href: s.href,
        img: s.img,
        cta: 'Discover',
      })),
      viewall: '/services/',
      viewall_label: 'View all services',
    };
  }

  if (key === 'group') {
    /* Built from vxnCompanies() rather than a second hand-written list. The
       menu previously pointed each company at an unrelated audience-type slug
       (VALUNXT Corporate Services -> /our-group/individuals-and-families/),
       which is exactly the kind of drift a duplicated list invites. */
    const companies = vxnCompanyList();
    return {
      label: 'Our Group',
      href: '/our-group/',
      title: 'Our Group',
      lede: 'Regulated operating companies, each a specialist in its own right.',
      sidehead: 'Group companies',
      /* Line icons, as in the other two menus. The companies' own wordmarks
         were tried here first and each needed a plate to sit on, which made
         this one panel read differently from its neighbours; the marks still
         lead the Our Group page itself, where they have the room. */
      links: companies.map((c) => ({
        t: c.name,
        href: c.url,
        icon: c.icon ?? 'document',
        d: c.discipline ?? '',
      })),
      cards: companies.slice(0, 2).map((c) => ({
        eyebrow: 'Group company',
        title: c.name,
        href: c.url,
        img: c.img,
        cta: 'Discover',
      })),
      viewall: '/our-group/',
      viewall_label: 'View all companies',
    };
  }

  return {
    label: 'Insights',
    href: '/blogs/',
    title: 'Insights &amp; Intelligence',
    lede: 'Independent research, market commentary and the thinking behind our advice.',
    sidehead: 'Explore',
    links: [
      {
        t: 'Research &amp; Reports',
        href: '/research/',
        icon: 'chart',
        d: 'Market intelligence and investment research',
      },
      { t: 'Blogs', href: '/blogs/', icon: 'pen', d: 'Commentary from our advisory desks' },
      { t: 'Community', href: '/community/', icon: 'users', d: 'Where we invest beyond the mandate' },
      { t: 'Clients', href: '/clients/', icon: 'shield', d: 'Who we act for, and how we act' },
      {
        t: 'Partnership',
        href: '/partnership/',
        icon: 'globe',
        d: 'Working with us across markets',
      },
    ],
    cards: [
      {
        eyebrow: 'Featured',
        title: 'Research &amp; Reports',
        href: '/research/',
        img: '/assets/content/uploads/new-folder/insights-1.webp',
        cta: 'Discover',
      },
      {
        eyebrow: 'Commentary',
        title: 'Market Insight',
        href: '/blogs/',
        img: '/assets/content/uploads/new-folder/insights-2.webp',
        cta: 'Discover',
      },
    ],
    viewall: '/blogs/',
    viewall_label: 'View all insights',
  };
}

export default function MegaMenu({
  region,
  presetKey = 'insights',
  tabIndex,
  label,
  href,
}: {
  region: string;
  presetKey?: MegaPreset;
  /** -1 for the hidden mobile/sticky nav copies. */
  tabIndex?: number;
  label?: string;
  href?: string;
}) {
  const p = preset(presetKey, region);
  const parentLabel = label && label !== '' ? label : p.label;
  const parentHref = rurl(region, href && href !== '' ? href : p.href);
  const tab = tabIndex === -1 ? { tabIndex: -1 } : {};

  return (
    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children vxn-mega">
      <a
        href={parentHref}
        className="elementor-item"
        {...tab}
        dangerouslySetInnerHTML={{ __html: parentLabel }}
      />
      <ul className="sub-menu elementor-nav-menu--dropdown vxn-mega__panel">
        <li className="vxn-mega__wrap">
          <div className="vxn-mega__inner">
            <div className="vxn-mega__main">
              <div className="vxn-mega__intro">
                <Html as="span" className="vxn-mega__kicker" html={p.sidehead} />
                <Html as="span" className="vxn-mega__head" html={p.title} />
                <Html as="span" className="vxn-mega__lede" html={p.lede} />
              </div>

              <div className="vxn-mega__list">
                {p.links.map((l) => (
                  <a
                    key={l.href + l.t}
                    className="vxn-mega__item"
                    href={rurl(region, l.href)}
                    {...tab}
                  >
                    <span className="vxn-mega__ico" aria-hidden="true">
                      <MegaIcon token={l.icon} />
                    </span>
                    <span className="vxn-mega__itembody">
                      <Html as="span" className="vxn-mega__itemtitle" html={l.t} />
                      {l.d ? <Html as="span" className="vxn-mega__itemdesc" html={l.d} /> : null}
                    </span>
                    <i className="vxn-mega__chev" aria-hidden="true">
                      &rsaquo;
                    </i>
                  </a>
                ))}
              </div>

              <a className="vxn-mega__viewall" href={rurl(region, p.viewall)} {...tab}>
                <Html as="span" className="vxn-mega__viewalltxt" html={p.viewall_label} />
                <MegaArrow />
              </a>
            </div>

            {p.cards.length ? (
              <div className="vxn-mega__cards">
                {p.cards.map((c) => (
                  <a
                    key={c.href + c.title}
                    className="vxn-mega__card"
                    href={rurl(region, c.href)}
                    {...tab}
                  >
                    <Html as="span" className="vxn-mega__eyebrow" html={c.eyebrow} />
                    <Html as="span" className="vxn-mega__cardtitle" html={c.title} />
                    <span className="vxn-mega__cardmedia">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.img} alt="" loading="lazy" />
                    </span>
                    <span className="vxn-mega__cardcta">
                      <Html as="span" className="vxn-mega__cardctatxt" html={c.cta} />
                      <MegaArrow />
                    </span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </li>
      </ul>
    </li>
  );
}
