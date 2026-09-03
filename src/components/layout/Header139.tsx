/**
 * Captured Elementor header template 139 — the transparent-over-hero bar used
 * by the India home page.
 *
 * Renders twice: the sticky bar itself and the spacer that reserves its height.
 * That duplication is the theme's, not ours; keeping it is what keeps the
 * layout identical.
 *
 * Port of includes/partials/header-139.php.
 */
import { BASE, rurl } from '@/lib/region';
import MainNav, { MenuToggle } from './MainNav';
import RegionSwitcher from './RegionSwitcher';

const NAV_SETTINGS =
  '{"submenu_icon":{"value":"&lt;i aria-hidden=\\"true\\" class=\\"\\"&gt;&lt;\\/i&gt;","library":""},"full_width":"stretch","layout":"horizontal","toggle":"burger"}';

function Bar({
  region,
  pagePath,
  spacer,
  copy,
  mainId,
  dropdownId,
}: {
  region: string;
  pagePath: string;
  spacer: boolean;
  copy: number;
  mainId: string;
  dropdownId: string;
}) {
  return (
    <div
      className={`elementor-element elementor-element-0fdf1ae vamtam-sticky-header${
        spacer ? ' vamtam-sticky-header--spacer' : ''
      } vamtam-sticky-header--mobile vamtam-sticky-header--transparent-header e-flex e-con-boxed e-con e-parent`}
      data-id="0fdf1ae"
      data-element_type="container"
      data-e-type="container"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-72e5739 elementor-widget elementor-widget-image"
          data-id="72e5739"
          data-element_type="widget"
          data-e-type="widget"
          data-widget_type="image.default"
        >
          <div className="elementor-widget-container">
            <a href={rurl(region, '/')}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width={175}
                height={35}
                src={`${BASE}/assets/content/uploads/logo/valunxt-white.svg`}
                className="attachment-full size-full vxn-logo vxn-logo--light"
                alt="VALUNXT Capital"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width={175}
                height={35}
                src={`${BASE}/assets/content/uploads/logo/valunxt-dark.svg`}
                className="attachment-full size-full vxn-logo vxn-logo--dark"
                alt=""
                aria-hidden="true"
              />{' '}
            </a>
          </div>
        </div>
        <div
          className="vamtam-has-theme-widget-styles elementor-element elementor-element-1243e1d elementor-nav-menu__align-center elementor-nav-menu--dropdown-mobile elementor-nav-menu--stretch elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
          data-id="1243e1d"
          data-element_type="widget"
          data-e-type="widget"
          data-settings={NAV_SETTINGS}
          data-widget_type="nav-menu.default"
        >
          <div className="elementor-widget-container">
            <nav
              aria-label="Menu"
              className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-grow"
            >
              <MainNav region={region} id={mainId} />
            </nav>
            <MenuToggle />
            <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
              <MainNav region={region} id={dropdownId} hidden />
            </nav>
          </div>
        </div>
        <RegionSwitcher region={region} pagePath={pagePath} copy={copy} />
        <div
          className="vamtam-has-theme-widget-styles elementor-element elementor-element-6e27b2a vamtam-icon-pos-row-reverse elementor-hidden-mobile elementor-widget elementor-widget-button"
          data-id="6e27b2a"
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
                  <span className="elementor-button-text">Free Consultation</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header139({ region, pagePath }: { region: string; pagePath: string }) {
  return (
    <header
      data-elementor-type="header"
      data-elementor-id="139"
      className="elementor elementor-139 elementor-location-header"
      data-elementor-post-type="elementor_library"
    >
      <Bar
        region={region}
        pagePath={pagePath}
        spacer={false}
        copy={1}
        mainId="menu-1-1243e1d"
        dropdownId="menu-2-1243e1d"
      />
      <Bar
        region={region}
        pagePath={pagePath}
        spacer
        copy={2}
        mainId="menu-3-1243e1d"
        dropdownId="menu-4-1243e1d"
      />
    </header>
  );
}
