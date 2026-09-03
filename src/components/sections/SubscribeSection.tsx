/**
 * "Stay Ahead" newsletter subscribe section (Elementor template 4557).
 * Shared across all pages so the pre-footer matches the home page.
 *
 * Note: pages rendering this section must also list '4557' in page.post_css.
 *
 * Port of includes/partials/subscribe-4557.php.
 */
import { rurl } from '@/lib/region';
import type { PageConfig } from '@/lib/page-config';

const FORM_SETTINGS =
  '{"button_width":"25","step_next_label":"Next","step_previous_label":"Previous","button_width_tablet":"25","step_type":"number_text","step_icon_shape":"circle"}';

export default function SubscribeSection({
  page,
  region,
}: {
  page: PageConfig;
  region: string;
}) {
  const refererTitle = decodeURIComponent(page.post_title ?? 'VALUNXT Capital');

  return (
    <div
      data-elementor-type="container"
      data-elementor-id="4557"
      className="elementor elementor-4557"
      data-elementor-post-type="elementor_library"
    >
      <div
        className="elementor-element elementor-element-9296635 e-flex e-con-boxed e-con e-parent"
        data-id="9296635"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-3300848 elementor-widget elementor-widget-spacer"
            data-id="3300848"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="spacer.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner" />
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-4b7d49d e-con-full e-flex e-con e-child"
            data-id="4b7d49d"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-f0def51 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
              data-id="f0def51"
              data-element_type="widget"
              data-e-type="widget"
              data-settings='{"_animation":"slideInUp"}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">Stay Ahead.</h3>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-06eccf7 elementor-invisible animated-fast elementor-widget elementor-widget-heading"
              data-id="06eccf7"
              data-element_type="widget"
              data-e-type="widget"
              data-settings='{"_animation":"slideInUp","_animation_delay":100}'
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h3 className="elementor-heading-title elementor-size-default">
                  Subscribe for Market Intelligence.
                </h3>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-c96c2e7 elementor-invisible e-con-full animated-fast e-flex e-con e-child"
            data-id="c96c2e7"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"animation":"fadeIn","animation_delay":150}'
          >
            <div
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-3b33bfe elementor-widget-tablet__width-inherit elementor-button-align-stretch elementor-widget elementor-widget-form"
              data-id="3b33bfe"
              data-element_type="widget"
              data-e-type="widget"
              data-settings={FORM_SETTINGS}
              data-widget_type="form.default"
            >
              <div className="elementor-widget-container">
                <form className="elementor-form" method="post" name="Subscribe" aria-label="Subscribe">
                  <input type="hidden" name="post_id" value="4557" />
                  <input type="hidden" name="form_id" value="3b33bfe" />
                  <input type="hidden" name="referer_title" value={refererTitle} />

                  <input type="hidden" name="queried_id" value={page.post_id ?? 0} />

                  <div className="elementor-form-fields-wrapper elementor-labels-">
                    <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-70 elementor-md-70 elementor-field-required">
                      <label htmlFor="form-field-email" className="elementor-field-label elementor-screen-only">
                        Email{' '}
                      </label>
                      <input
                        size={1}
                        type="email"
                        name="form_fields[email]"
                        id="form-field-email"
                        className="elementor-field elementor-size-sm  elementor-field-textual"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-25 e-form__buttons elementor-md-25">
                      <button className="elementor-button elementor-size-sm" type="submit">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-icon">
                            <i aria-hidden="true" className="vamtamtheme- vamtam-theme-send" />{' '}
                          </span>
                          <span className="elementor-button-text">Subscribe</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-82aa64e elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor"
              data-id="82aa64e"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  You can unsubscribe at any time using the link in the footer of our emails. View our{' '}
                  <a href={rurl(region, '/privacy-policy/')}>Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-3d5fc70 elementor-widget elementor-widget-spacer"
            data-id="3d5fc70"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="spacer.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
