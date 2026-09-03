/* Location page body.
   Two sections — Our Locations and Our Group Companies — both driven by
   src/lib/site-data.ts so the office list, addresses and the one published
   phone line stay identical here, in the footer and on the Contact page.

   Port of location/index.php. */
import { BASE, rurl } from '@/lib/region';
import { vxnCompanyList, vxnMarkets, vxnOffices } from '@/lib/site-data';
import SubscribeSection from '@/components/sections/SubscribeSection';
import type { PageConfig } from '@/lib/page-config';

const LOCATION_IMG: Record<string, string> = {
  mumbai: 'mumbai.webp',
  noida: 'noida.webp',
  abudhabi: 'abudhabi.webp',
  dubai: 'dubai.webp',
};

export default function LocationBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <div id="main-content">
      <div id="main" role="main" className="vamtam-main layout-full">
        <article id="post-9001" className="full post-9001 page type-page status-publish hentry">
          <div
            data-elementor-type="single-page"
            data-elementor-id="3752"
            className="elementor elementor-3752 elementor-location-single post-9001 page type-page status-publish hentry"
            data-elementor-post-type="elementor_library"
          >
            <div
              className="elementor-element elementor-element-c4d353f e-flex e-con-boxed e-con e-parent"
              data-id="c4d353f"
              data-element_type="container"
              data-e-type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-6200b41 e-con-full e-flex e-con e-child"
                  data-id="6200b41"
                  data-element_type="container"
                  data-e-type="container"
                >
                  <div
                    className="elementor-element elementor-element-7b36cfb e-con-full e-flex e-con e-child"
                    data-id="7b36cfb"
                    data-element_type="container"
                    data-e-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-c739b5b elementor-widget elementor-widget-heading"
                      data-id="c739b5b"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <span className="elementor-heading-title elementor-size-default">
                          <a href={rurl(region, '/')}>Home</a>
                        </span>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-1707a75 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                      data-id="1707a75"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-widget_type="theme-post-title.default"
                    >
                      <div className="elementor-widget-container">
                        <span className="elementor-heading-title elementor-size-default">
                          &gt; Location
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-3f5733d elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                    data-id="3f5733d"
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
                    className="elementor-element elementor-element-8c0b074 e-con-full e-flex e-con e-child"
                    data-id="8c0b074"
                    data-element_type="container"
                    data-e-type="container"
                  >
                    <div
                      className="elementor-element elementor-element-16f0cb0 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
                      data-id="16f0cb0"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-settings='{"_animation":"slideInUp"}'
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h1 className="elementor-heading-title elementor-size-default">Location</h1>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-44a505e elementor-invisible animated-fast elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading"
                      data-id="44a505e"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-settings='{"_animation":"slideInUp"}'
                      data-widget_type="theme-post-title.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">Location</h2>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-44a2511 elementor-invisible animated-fast elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt"
                      data-id="44a2511"
                      data-element_type="widget"
                      data-e-type="widget"
                      data-settings='{"_animation":"slideInUp","_animation_delay":50}'
                      data-widget_type="theme-post-excerpt.default"
                    >
                      <div className="elementor-widget-container">
                        Connect with VALUNXT Capital in Dubai, Abu Dhabi and across India. Find the
                        office nearest to you and start a conversation with our advisory team.{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Our Locations — driven by src/lib/site-data.ts so the office list,
            addresses and the one published phone line stay identical here, in
            the footer and on the Contact page. */}
        <section className="vxn-loc">
          <div className="vxn-loc__head">
            <div className="vxn-loc__head-left">
              <span className="vxn-loc__chip">Our Locations</span>
              <h2 className="vxn-loc__title">Four Offices. One Integrated Platform.</h2>
            </div>
            <p className="vxn-loc__desc">
              {vxnMarkets('cities')} &#8212; find the office nearest to you and start a conversation
              with our advisory team.
            </p>
          </div>
          <div className="vxn-loc__grid">
            {Object.entries(vxnOffices()).map(([k, o]) => (
              <div className="vxn-loc__card" key={k}>
                <div className="vxn-loc__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BASE}/assets/content/uploads/new-folder/${LOCATION_IMG[k] ?? 'mumbai.webp'}`}
                    alt={`${o.city} office`}
                    loading="lazy"
                  />
                  <div className="vxn-loc__panel">
                    <h5 className="vxn-loc__city">
                      {o.city}
                      {o.note !== '' ? <span> ({o.note})</span> : null}
                    </h5>
                    <div className="vxn-loc__company">{o.entity}</div>
                    <p className="vxn-loc__addr">
                      <a href={o.map} target="_blank" rel="noopener">
                        {o.address}
                      </a>
                    </p>
                    <p className="vxn-loc__meta">
                      <strong>Hours:</strong> {o.hours}
                    </p>
                    {o.phone !== '' ? (
                      <p className="vxn-loc__meta">
                        <strong>Phone:</strong> <a href={`tel:${o.tel}`}>{o.phone}</a>
                      </p>
                    ) : null}
                    <p className="vxn-loc__meta">
                      <strong>E-mail:</strong> <a href={`mailto:${o.email}`}>{o.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Group Company — the four operating companies, from the same
            canonical list the navigation and Our Group page use. Each card
            links to its own page rather than repeating an office address it
            does not trade from. */}
        <section className="vxn-loc vxn-loc--group">
          <div className="vxn-loc__head">
            <div className="vxn-loc__head-left">
              <span className="vxn-loc__chip">Our Ecosystem</span>
              <h2 className="vxn-loc__title">Our Group Companies</h2>
            </div>
            <p className="vxn-loc__desc">
              Four specialist firms within the VALUNXT group &#8212; spanning valuation, real estate,
              mortgage and corporate services across {vxnMarkets('short')}.
            </p>
          </div>
          <div className="vxn-loc__grid">
            {vxnCompanyList().map((c) => (
              <div className="vxn-loc__card" key={c.url}>
                <div className="vxn-loc__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={BASE + c.img} alt={c.name} loading="lazy" />
                  <div className="vxn-loc__panel">
                    <h5 className="vxn-loc__city">{c.name}</h5>
                    <div className="vxn-loc__company">{c.discipline}</div>
                    <p className="vxn-loc__addr">{c.blurb}</p>
                    <p className="vxn-loc__meta">
                      <a href={rurl(region, c.url)}>About {c.name} &rarr;</a>
                    </p>
                    <p className="vxn-loc__meta">
                      <a href={c.site} target="_blank" rel="noopener">
                        {c.site.replace(/^https?:\/\//, '')}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SubscribeSection page={page} region={region} />
      </div>
      {/* #main */}
    </div>
  );
}
