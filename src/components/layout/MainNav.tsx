/**
 * The main navigation list, shared by all three captured header templates.
 *
 * Every header renders its menu two or four times over (a sticky bar and its
 * spacer, each with a desktop <nav> and a hidden burger-drawer <nav>). The PHP
 * partials repeated the same block of <li>s verbatim in each; here it is one
 * component parameterised by the two things that actually differed: the
 * per-copy `<ul id>` and whether the copy is the hidden one (tabindex="-1").
 *
 * The WordPress `menu-item-<id>` classes are kept because the theme CSS and the
 * captured per-post stylesheets target them.
 */
import { rurl } from '@/lib/region';
import MegaMenu from './MegaMenu';

export interface NavIds {
  /** menu-item-<n> on the About parent. */
  about: string;
  /** menu-item-<n> on "Who We Are". */
  aboutWho: string;
  /** menu-item-<n> on "Careers". */
  aboutCareers: string;
  /** menu-item-<n> on Contact. */
  contact: string;
}

/** Header 139 and 3837 share the original WordPress menu ids. */
export const NAV_IDS_DEFAULT: NavIds = {
  about: '278',
  aboutWho: '288',
  aboutCareers: '282',
  contact: '275',
};

/** Header 3134 was built from a second menu, so its ids differ. */
export const NAV_IDS_3134: NavIds = {
  about: '3201',
  aboutWho: '3202',
  aboutCareers: '3204',
  contact: '3206',
};

export type NavOrder = 'insights-last' | 'contact-before-insights';

function AboutItem({
  region,
  ids,
  hidden,
}: {
  region: string;
  ids: NavIds;
  hidden: boolean;
}) {
  const tab = hidden ? { tabIndex: -1 } : {};
  return (
    <li
      className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-${ids.about}`}
    >
      <a href={rurl(region, '/about/')} className="elementor-item" {...tab}>
        About
      </a>
      <ul className="sub-menu elementor-nav-menu--dropdown">
        <li
          className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${ids.aboutWho}`}
        >
          <a href={rurl(region, '/about/')} className="elementor-sub-item" {...tab}>
            Who We Are
          </a>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-9001">
          <a href={rurl(region, '/location/')} className="elementor-sub-item" {...tab}>
            Location
          </a>
        </li>
        <li
          className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${ids.aboutCareers}`}
        >
          <a href={rurl(region, '/about/careers/')} className="elementor-sub-item" {...tab}>
            Careers
          </a>
        </li>
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-faq">
          <a href={rurl(region, '/faq/')} className="elementor-sub-item" {...tab}>
            FAQ
          </a>
        </li>
      </ul>
    </li>
  );
}

export default function MainNav({
  region,
  id,
  hidden = false,
  ids = NAV_IDS_DEFAULT,
  order = 'insights-last',
  className = 'elementor-nav-menu',
}: {
  region: string;
  /** The <ul id>, e.g. "menu-1-1243e1d". */
  id: string;
  /** True for the hidden burger-drawer copy — every link gets tabindex="-1". */
  hidden?: boolean;
  ids?: NavIds;
  order?: NavOrder;
  className?: string;
}) {
  const tab = hidden ? { tabIndex: -1 } : {};
  const megaTab = hidden ? -1 : undefined;

  const contact = (
    <li
      key="contact"
      className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${ids.contact}`}
    >
      <a href={rurl(region, '/contact/')} className="elementor-item" {...tab}>
        Contact
      </a>
    </li>
  );
  const insights = (
    <MegaMenu key="insights" region={region} tabIndex={megaTab} label="Insights" href="/blogs/" />
  );

  return (
    <ul id={id} className={className}>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
        <a href={rurl(region, '/')} className="elementor-item" {...tab}>
          Home
        </a>
      </li>
      <MegaMenu region={region} presetKey="services" tabIndex={megaTab} />
      <AboutItem region={region} ids={ids} hidden={hidden} />
      {/* "Our Group" was removed from the bar; the group companies are still
          reachable from the footer and from /our-group/ itself. */}
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-industries">
        <a href={rurl(region, '/industries/')} className="elementor-item" {...tab}>
          Industries
        </a>
      </li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-network">
        <a href={rurl(region, '/network/')} className="elementor-item" {...tab}>
          Network
        </a>
      </li>
      {order === 'contact-before-insights' ? [contact, insights] : [insights, contact]}
    </ul>
  );
}

/** The burger button rendered between the two <nav>s in every header. */
export function MenuToggle() {
  return (
    <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Menu Toggle" aria-expanded="false">
      <i
        aria-hidden="true"
        role="presentation"
        className="elementor-menu-toggle__icon--open vamtamtheme- vamtam-theme-menu"
      />
      <i
        aria-hidden="true"
        role="presentation"
        className="elementor-menu-toggle__icon--close vamtamtheme- vamtam-theme-close"
      />
    </div>
  );
}
