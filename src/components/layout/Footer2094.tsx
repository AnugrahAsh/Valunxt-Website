/**
 * Captured Elementor footer template 2094 — the four-column footer used by
 * every interior page and the India home.
 *
 * Port of includes/partials/footer-2094.php.
 */
import { BASE, rurl } from '@/lib/region';
import { vxnEmail, vxnOffice, vxnYear } from '@/lib/site-data';
import SocialIcons, { type SocialItem } from './SocialIcons';

/* Captured without hrefs — the social accounts were not published at the time
   the template was taken, and inventing them would point visitors at profiles
   that may not be the company's. */
const SOCIAL: readonly SocialItem[] = [
  { network: 'linkedin-in', repeater: 'elementor-repeater-item-01247a2' },
  { network: 'instagram', repeater: 'elementor-repeater-item-inst0001' },
  { network: 'facebook-f', repeater: 'elementor-repeater-item-d8fca74' },
  { network: 'x-twitter', repeater: 'elementor-repeater-item-dd89806' },
  { network: 'youtube', repeater: 'elementor-repeater-item-5c328d0' },
];

/* The footer lists three of the four offices — Dubai, Mumbai and Noida. Abu
   Dhabi trades from the same UAE entity and the same line as Dubai, so
   repeating it here only lengthens the column; the full list still lives on
   /location/.

   Each office carries its own line, so the India offices show the India number
   and the UAE offices the UAE number — no office is ever listed under another
   country's phone. */
const FOOTER_OFFICES = ['dubai', 'mumbai', 'noida'] as const;

export default function Footer2094({ region }: { region: string }) {
  return (
    <div data-wpr-lazyrender="1" className="footer-wrapper" style={{}}>
      <footer id="main-footer" className="main-footer">
        <footer
          data-elementor-type="footer"
          data-elementor-id="2094"
          className="elementor elementor-2094 elementor-location-footer"
          data-elementor-post-type="elementor_library"
        >
          <div
            className="elementor-element elementor-element-6578101 e-flex e-con-boxed e-con e-parent"
            data-id="6578101"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-7a5ce4a e-con-full e-flex e-con e-child"
                data-id="7a5ce4a"
                data-element_type="container"
                data-e-type="container"
              >
                <div
                  className="elementor-element elementor-element-6a0cd31 elementor-invisible animated-fast elementor-widget elementor-widget-image"
                  data-id="6a0cd31"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"slideInUp"}'
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <a href={rurl(region, '/')}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        width={190}
                        height={38}
                        src={`${BASE}/assets/content/uploads/logo/valunxt-white.svg`}
                        className="attachment-medium size-medium vxn-logo"
                        alt="VALUNXT Capital"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="vamtam-has-theme-widget-styles elementor-element elementor-element-97f60b2 elementor-invisible animated-fast elementor-widget elementor-widget-text-editor"
                  data-id="97f60b2"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"_animation":"slideInUp","_animation_delay":100}'
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      Building Wealth Through <span className="color-accent-2">Real Estate</span>,
                      Capital, Intelligence &amp; <span className="color-accent-2">Technology</span>.
                    </p>
                    <p>
                      An integrated real estate wealth and investment intelligence group serving
                      investors, developers, institutions, and businesses across India, the UAE, and
                      international markets.
                    </p>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-ed7850a elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                  data-id="ed7850a"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="social-icons.default"
                >
                  <div className="elementor-widget-container">
                    <SocialIcons items={SOCIAL} />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-df2c858 e-con-full e-flex e-con e-child"
                data-id="df2c858"
                data-element_type="container"
                data-e-type="container"
              >
                <div
                  className="elementor-element elementor-element-25706a3 elementor-widget elementor-widget-heading"
                  data-id="25706a3"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">Quick Links</h6>
                  </div>
                </div>
                <div
                  className="vamtam-has-theme-widget-styles elementor-element elementor-element-23247d2 elementor-nav-menu--dropdown-none elementor-widget__width-initial elementor-widget elementor-widget-nav-menu"
                  data-id="23247d2"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"layout":"vertical"}'
                  data-widget_type="nav-menu.default"
                >
                  <div className="elementor-widget-container">
                    <nav
                      aria-label="Quick Links"
                      className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-none"
                    >
                      <ul id="menu-1-23247d2" className="elementor-nav-menu sm-vertical">
                        {[
                          ['/about/', 'About Us'],
                          ['/services/', 'Services'],
                          ['/our-group/', 'Our Group'],
                          ['/blogs/', 'Insights'],
                          ['/faq/', 'FAQ'],
                          ['/contact/', 'Contact'],
                        ].map(([href, label]) => (
                          <li
                            key={href}
                            className="menu-item menu-item-type-post_type menu-item-object-page"
                          >
                            <a href={rurl(region, href)} className="elementor-item">
                              {label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-aa41969 e-con-full e-flex e-con e-child"
                data-id="aa41969"
                data-element_type="container"
                data-e-type="container"
              >
                <div
                  className="elementor-element elementor-element-ea44bce elementor-widget elementor-widget-heading"
                  data-id="ea44bce"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">Services</h6>
                  </div>
                </div>
                <div
                  className="vamtam-has-theme-widget-styles elementor-element elementor-element-1a1c786 elementor-nav-menu--dropdown-none elementor-widget__width-initial elementor-widget elementor-widget-nav-menu"
                  data-id="1a1c786"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-settings='{"layout":"vertical"}'
                  data-widget_type="nav-menu.default"
                >
                  <div className="elementor-widget-container">
                    <nav
                      aria-label="Services"
                      className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-none"
                    >
                      <ul id="menu-1-1a1c786" className="elementor-nav-menu sm-vertical">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page">
                          <a
                            href={rurl(region, '/services/real-estate-investment-advisory/')}
                            className="elementor-item"
                          >
                            Real Estate Investment Advisory
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href={rurl(region, '/services/capital-advisory/')} className="elementor-item">
                            Capital Advisory
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page">
                          <a
                            href={rurl(region, '/services/research-intelligence/')}
                            className="elementor-item"
                          >
                            Research &amp; Intelligence
                          </a>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page">
                          <a href={rurl(region, '/services/technology-ai/')} className="elementor-item">
                            Technology &amp; AI
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-b2872b3 e-con-full e-flex e-con e-child"
                data-id="b2872b3"
                data-element_type="container"
                data-e-type="container"
              >
                <div
                  className="elementor-element elementor-element-65f6f11 elementor-widget elementor-widget-heading"
                  data-id="65f6f11"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">Our Offices</h6>
                  </div>
                </div>
                <div
                  className="vamtam-has-theme-widget-styles elementor-element elementor-element-481db93 elementor-widget elementor-widget-text-editor"
                  data-id="481db93"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    {FOOTER_OFFICES.map((k) => {
                      const o = vxnOffice(k);
                      if (!o) return null;
                      return (
                        <p key={k}>
                          <span className="color-accent-2">
                            {o.city}
                            {o.note !== '' ? ` (${o.note})` : ''}
                          </span>
                          <br />
                          <a href={o.map} target="_blank" rel="noopener">
                            {o.address}
                          </a>
                          {o.phone !== '' ? (
                            <>
                              <br />
                              <a href={`tel:${o.tel}`}>{o.phone}</a>
                            </>
                          ) : null}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="vamtam-has-theme-widget-styles elementor-element elementor-element-3590d5a elementor-widget elementor-widget-text-editor"
                  data-id="3590d5a"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="text-editor.default"
                >
                  {/* The phone lines now sit with their own office above, so this
                      block carries the single published mailbox only. */}
                  <div className="elementor-widget-container">
                    <p>
                      <a href={`mailto:${vxnEmail()}`}>{vxnEmail()}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element e-flex e-con-boxed e-con e-parent vxn-footer-disclaimer"
            data-element_type="container"
            data-e-type="container"
          >
            <div className="e-con-inner">
              <h6 className="vxn-footer-disclaimer__title">Institutional Disclaimer</h6>
              <p>
                VALUNXT Capital is an integrated real estate wealth, capital, research and technology
                advisory group operating across valuation, investment, research and strategic advisory
                services in India, the UAE, and international markets. Information presented on this
                website is intended solely for general informational purposes and should not be
                interpreted as financial, investment, tax or legal advice.
              </p>
              <p>
                While every effort is made to ensure the accuracy and reliability of the information
                provided, VALUNXT Capital makes no representations or warranties regarding its
                completeness, suitability or accuracy. Users are advised to seek independent
                professional consultation before making any investment or business decisions.
              </p>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-e5832a5 e-flex e-con-boxed e-con e-parent"
            data-id="e5832a5"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-ae4e8ba elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                data-id="ae4e8ba"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="divider.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator" />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-c28941f elementor-widget elementor-widget-heading"
                data-id="c28941f"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <span className="elementor-heading-title elementor-size-default">
                    <a href={rurl(region, '/')}>{vxnYear()} © VALUNXT Capital. All rights reserved.</a>
                  </span>
                </div>
              </div>
              <div
                className="vamtam-has-theme-widget-styles elementor-element elementor-element-5ae3820 elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
                data-id="5ae3820"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"submenu_icon":{"value":"&lt;i aria-hidden=\\"true\\" class=\\"\\"&gt;&lt;\\/i&gt;","library":""},"layout":"horizontal"}'
                data-widget_type="nav-menu.default"
              >
                <div className="elementor-widget-container">
                  <nav
                    aria-label="Menu"
                    className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
                  >
                    <LegalMenu region={region} id="menu-1-5ae3820" />
                  </nav>
                  <nav
                    className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                    aria-hidden="true"
                  >
                    <LegalMenu region={region} id="menu-2-5ae3820" hidden />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}

function LegalMenu({
  region,
  id,
  hidden = false,
}: {
  region: string;
  id: string;
  hidden?: boolean;
}) {
  const tab = hidden ? { tabIndex: -1 } : {};
  return (
    <ul id={id} className="elementor-nav-menu">
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2162">
        <a href={rurl(region, '/terms-conditions/')} className="elementor-item" {...tab}>
          Terms &amp; Conditions
        </a>
      </li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-2163">
        <a rel="privacy-policy" href={rurl(region, '/privacy-policy/')} className="elementor-item" {...tab}>
          Privacy Policy
        </a>
      </li>
      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-disclaimer">
        <a href={rurl(region, '/disclaimer/')} className="elementor-item" {...tab}>
          Disclaimer
        </a>
      </li>
    </ul>
  );
}
