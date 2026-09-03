/**
 * Captured Elementor header template 3134 — the blurred-background bar with the
 * Dubai telephone line, used by the UAE home page.
 *
 * Unlike 139 and 3837 this template renders a single container (its sticky
 * behaviour comes from the data-settings block rather than a spacer copy).
 *
 * Port of includes/partials/header-3134.php.
 */
import { BASE, rurl } from '@/lib/region';
import { vxnOffice } from '@/lib/site-data';
import MainNav, { MenuToggle, NAV_IDS_3134 } from './MainNav';
import RegionSwitcher from './RegionSwitcher';

const STICKY_SETTINGS =
  '{"sticky":"top","sticky_anchor_link_offset":70,"sticky_anchor_link_offset_tablet":60,"sticky_anchor_link_offset_mobile":50,"sticky_on":["desktop","tablet","mobile"],"sticky_offset":0,"sticky_effects_offset":0}';

const NAV_SETTINGS =
  '{"submenu_icon":{"value":"&lt;i aria-hidden=\\"true\\" class=\\"\\"&gt;&lt;\\/i&gt;","library":""},"full_width":"stretch","layout":"horizontal","toggle":"burger"}';

export default function Header3134({ region, pagePath }: { region: string; pagePath: string }) {
  const dubai = vxnOffice('dubai')!;

  return (
    <header
      data-elementor-type="header"
      data-elementor-id="3134"
      className="elementor elementor-3134 elementor-location-header"
      data-elementor-post-type="elementor_library"
    >
      <div
        className="elementor-element elementor-element-270d378 blur-background vamtam-sticky-header  e-flex e-con-boxed e-con e-parent"
        data-id="270d378"
        data-element_type="container"
        data-e-type="container"
        data-settings={STICKY_SETTINGS}
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-6537259 e-con-full e-flex e-con e-child"
            data-id="6537259"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-8d706f9 elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
              data-id="8d706f9"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="theme-site-logo.default"
            >
              <div className="elementor-widget-container">
                <a href={rurl(region, '/')}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width={175}
                    height={35}
                    src={`${BASE}/assets/content/uploads/logo/valunxt-dark.svg`}
                    className="attachment-full size-full vxn-logo"
                    alt="VALUNXT Capital"
                  />{' '}
                </a>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-757c973 e-con-full e-flex e-con e-child"
            data-id="757c973"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-f2d7cc1 elementor-nav-menu--stretch elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
              data-id="f2d7cc1"
              data-element_type="widget"
              data-e-type="widget"
              data-settings={NAV_SETTINGS}
              data-widget_type="nav-menu.default"
            >
              <div className="elementor-widget-container">
                <nav
                  aria-label="Menu"
                  className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-background e--animation-fade"
                >
                  <MainNav
                    region={region}
                    id="menu-1-f2d7cc1"
                    ids={NAV_IDS_3134}
                    order="contact-before-insights"
                  />
                </nav>
                <MenuToggle />
                <nav
                  className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                  aria-hidden="true"
                >
                  <MainNav
                    region={region}
                    id="menu-2-f2d7cc1"
                    hidden
                    ids={NAV_IDS_3134}
                    order="contact-before-insights"
                  />
                </nav>
              </div>
            </div>
            <RegionSwitcher region={region} pagePath={pagePath} copy={1} />
            <div
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-63e58a2 vamtam-has-icon-styles elementor-hidden-mobile vamtam-icon-pos-row elementor-widget elementor-widget-button"
              data-id="63e58a2"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href={`tel:${dubai.tel}`}
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon">
                        <i aria-hidden="true" className="vamtamtheme- vamtam-theme-phone" />{' '}
                      </span>
                      <span className="elementor-button-text">{dubai.phone}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-7fda4d7 vamtam-icon-pos-row-reverse elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-button"
              data-id="7fda4d7"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href={rurl(region, '/free-consultation/')}
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon">
                        <i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right" />{' '}
                      </span>
                      <span className="elementor-button-text">Book a Consultation</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
