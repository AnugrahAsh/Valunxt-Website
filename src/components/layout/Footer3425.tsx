/**
 * Captured Elementor footer template 3425 — the CTA-led footer with the sticky
 * lower band, used by the UAE home page.
 *
 * Port of includes/partials/footer-3425.php.
 */
import { BASE, rurl } from '@/lib/region';
import { vxnOffice, vxnYear } from '@/lib/site-data';
import SocialIcons, { type SocialItem } from './SocialIcons';

const SOCIAL: readonly SocialItem[] = [
  { network: 'linkedin-in', repeater: 'elementor-repeater-item-01247a2', href: 'https://www.linkedin.com/' },
  { network: 'x-twitter', repeater: 'elementor-repeater-item-dd89806', href: 'https://x.com/' },
  { network: 'youtube', repeater: 'elementor-repeater-item-5c328d0', href: 'https://www.youtube.com/' },
  { network: 'facebook-f', repeater: 'elementor-repeater-item-d8fca74', href: 'https://www.facebook.com/' },
  { network: 'yelp', repeater: 'elementor-repeater-item-87693c5', href: 'https://www.yelp.ie/' },
];

const STICKY_SETTINGS =
  '{"sticky":"bottom","sticky_on":["desktop","tablet"],"sticky_parent":"yes","sticky_offset":0,"sticky_effects_offset":0,"sticky_anchor_link_offset":0}';

export default function Footer3425({ region }: { region: string }) {
  const mumbai = vxnOffice('mumbai')!;

  return (
    <div data-wpr-lazyrender="1" className="footer-wrapper" style={{}}>
      <footer id="main-footer" className="main-footer">
        <footer
          data-elementor-type="footer"
          data-elementor-id="3425"
          className="elementor elementor-3425 elementor-location-footer"
          data-elementor-post-type="elementor_library"
        >
          <div
            className="elementor-element elementor-element-340b5e9 e-con-full e-flex e-con e-parent"
            data-id="340b5e9"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-f07a055 e-flex e-con-boxed e-con e-child"
              data-id="f07a055"
              data-element_type="container"
              data-e-type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-d324982 e-con-full e-flex e-con e-child"
                  data-id="d324982"
                  data-element_type="container"
                  data-e-type="container"
                  data-settings='{"background_background":"classic"}'
                >
                  <div
                    className="elementor-element elementor-element-3378202 e-con-full e-flex e-con e-child"
                    data-id="3378202"
                    data-element_type="container"
                    data-e-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-eb760a1 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
                      data-id="eb760a1"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-settings='{"_animation":"slideInUp"}'
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          {'Discuss Your Next \nInvestment Decision'}
                        </h2>
                      </div>
                    </div>
                    <div
                      className="vamtam-has-theme-widget-styles elementor-element elementor-element-0005810 elementor-invisible vamtam-icon-pos-row-reverse animated-fast elementor-widget elementor-widget-button"
                      data-id="0005810"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-settings='{"_animation":"fadeIn","_animation_delay":150}'
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
                              <span className="elementor-button-text">
                                Speak with Our Advisory Team
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-f8af0c0 e-con-full e-flex e-con e-child"
                    data-id="f8af0c0"
                    data-element_type="container"
                    data-e-type="container"
                  >
                    <div
                      className="vamtam-has-theme-widget-styles elementor-element elementor-element-160cbfd elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-initial animated-fast elementor-widget elementor-widget-text-editor"
                      data-id="160cbfd"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-settings='{"_animation":"slideInUp","_animation_delay":50}'
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>
                          Connect with our advisory team to explore real estate wealth, capital,
                          research, and technology opportunities.
                        </p>
                      </div>
                    </div>
                    <div
                      className="vamtam-has-theme-widget-styles elementor-element elementor-element-567f157 elementor-invisible animated-fast elementor-view-default elementor-widget elementor-widget-icon"
                      data-id="567f157"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
                      data-widget_type="icon.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-wrapper">
                          <div className="elementor-icon">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`${BASE}/LOGO/icon-white.jpg`}
                              alt="VALUNXT Capital"
                              className="vamtam-logo-sign-img"
                            />{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-13305c1 e-con-full e-flex e-con e-child"
                  data-id="13305c1"
                  data-element_type="container"
                  data-e-type="container"
                  data-settings={STICKY_SETTINGS}
                >
                  <div
                    className="elementor-element elementor-element-0e488d3 e-con-full e-flex e-con e-child"
                    data-id="0e488d3"
                    data-element_type="container"
                    data-e-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-ec2f42c e-con-full e-flex e-con e-child"
                      data-id="ec2f42c"
                      data-element_type="container"
                      data-e-type="container"
                    >
                      <div
                        className="elementor-element elementor-element-4d5d3b5 elementor-widget elementor-widget-heading"
                        data-id="4d5d3b5"
                        data-element_type="widget"
                        data-e-type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-default">Company</h6>
                        </div>
                      </div>
                      <div
                        className="vamtam-has-theme-widget-styles elementor-element elementor-element-4f9f39d elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
                        data-id="4f9f39d"
                        data-element_type="widget"
                        data-e-type="widget"
                        data-settings='{"layout":"vertical","submenu_icon":{"value":"&lt;i aria-hidden=\\"true\\" class=\\"\\"&gt;&lt;\\/i&gt;","library":""}}'
                        data-widget_type="nav-menu.default"
                      >
                        <div className="elementor-widget-container">
                          <nav
                            aria-label="Menu"
                            className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-underline e--animation-fade"
                          >
                            <ServiceMenu region={region} id="menu-1-4f9f39d" />
                          </nav>
                          <nav
                            className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                            aria-hidden="true"
                          >
                            <ServiceMenu region={region} id="menu-2-4f9f39d" hidden />
                          </nav>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-e86f0dd e-con-full e-flex e-con e-child"
                      data-id="e86f0dd"
                      data-element_type="container"
                      data-e-type="container"
                    >
                      <div
                        className="elementor-element elementor-element-aa436a1 elementor-widget elementor-widget-heading"
                        data-id="aa436a1"
                        data-element_type="widget"
                        data-e-type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-default">Contact</h6>
                        </div>
                      </div>
                      <div
                        className="vamtam-has-theme-widget-styles elementor-element elementor-element-31c7d4e elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                        data-id="31c7d4e"
                        data-element_type="widget"
                        data-e-type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            <a
                              href="https://maps.google.com/?q=Platina+Tower,+Bandra+Kurla+Complex+Rd,+G+Block,+Bandra+East,+Mumbai,+Maharashtra+400051"
                              target="_blank"
                              rel="noopener"
                            >
                              11th Floor, Platina Tower, plot C 59, Bandra Kurla Complex Rd, G Block,
                              Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India
                            </a>
                          </p>
                        </div>
                      </div>
                      <div
                        className="vamtam-has-theme-widget-styles elementor-element elementor-element-f9c41ac elementor-widget elementor-widget-text-editor"
                        data-id="f9c41ac"
                        data-element_type="widget"
                        data-e-type="widget"
                        data-widget_type="text-editor.default"
                      >
                        {/* The address above is the Mumbai office, so the line published
                            here is India's — never the UAE number. */}
                        <div className="elementor-widget-container">
                          <p>
                            <span className="color-accent-2">P:</span>{' '}
                            <a href={`tel:${mumbai.tel}`}>{mumbai.phone}</a>
                          </p>
                        </div>
                      </div>
                      <div
                        className="vamtam-has-theme-widget-styles elementor-element elementor-element-05dd159 elementor-widget elementor-widget-text-editor"
                        data-id="05dd159"
                        data-element_type="widget"
                        data-e-type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            <span className="color-accent-2">E:</span>{' '}
                            <a href="mailto:advisory@valunxtcapital.com">advisory@valunxtcapital.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-6a08912 e-con-full e-flex e-con e-child"
                      data-id="6a08912"
                      data-element_type="container"
                      data-e-type="container"
                    >
                      <div
                        className="elementor-element elementor-element-da9daf6 elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                        data-id="da9daf6"
                        data-element_type="widget"
                        data-e-type="widget"
                        data-widget_type="social-icons.default"
                      >
                        <div className="elementor-widget-container">
                          <SocialIcons items={SOCIAL} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-fad0396 e-con-full e-flex e-con e-child"
                    data-id="fad0396"
                    data-element_type="container"
                    data-e-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-6a55a98 elementor-widget elementor-widget-heading"
                      data-id="6a55a98"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <span className="elementor-heading-title elementor-size-default">
                          <a href={rurl(region, '/')}>
                            {vxnYear()} © VALUNXT Capital. All rights reserved.
                          </a>
                        </span>
                      </div>
                    </div>
                    <div
                      className="vamtam-has-theme-widget-styles elementor-element elementor-element-e4ba0ae elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
                      data-id="e4ba0ae"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-settings='{"submenu_icon":{"value":"&lt;i aria-hidden=\\"true\\" class=\\"\\"&gt;&lt;\\/i&gt;","library":""},"layout":"horizontal"}'
                      data-widget_type="nav-menu.default"
                    >
                      <div className="elementor-widget-container">
                        <nav
                          aria-label="Menu"
                          className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-fade"
                        >
                          <LegalMenu region={region} id="menu-1-e4ba0ae" />
                        </nav>
                        <nav
                          className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                          aria-hidden="true"
                        >
                          <LegalMenu region={region} id="menu-2-e4ba0ae" hidden />
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}

function ServiceMenu({ region, id, hidden = false }: { region: string; id: string; hidden?: boolean }) {
  const tab = hidden ? { tabIndex: -1 } : {};
  const items: Array<[string, string, string]> = [
    ['/services/real-estate-investment-advisory/', 'Real Estate Investment Advisory', '3446'],
    ['/services/capital-advisory/', 'Capital Advisory', '3447'],
    ['/services/research-intelligence/', 'Research & Intelligence', '3448'],
    ['/services/technology-ai/', 'Technology & AI', '3449'],
  ];
  return (
    <ul id={id} className="elementor-nav-menu sm-vertical">
      {items.map(([href, label, mid]) => (
        <li
          key={mid}
          className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${mid}`}
        >
          <a href={rurl(region, href)} className="elementor-item" {...tab}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function LegalMenu({ region, id, hidden = false }: { region: string; id: string; hidden?: boolean }) {
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
    </ul>
  );
}
