/**
 * /contact/ — page body.
 *
 * Port of contact/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style
 * objects) and internal links going through rurl() so they stay in the
 * visitor's market.
 */
import { rurl } from '@/lib/region';
import { vxnEmail, vxnOffice } from '@/lib/site-data';
import type { PageConfig } from '@/lib/page-config';

export default function ContactBody({ page, region }: { page: PageConfig; region: string }) {
  /* Each card names the office it belongs to. The page used to pair a Mumbai
     street address with a UAE telephone number under a bare "Call us at:",
     which read as one contactable location. It now leads with the Mumbai
     office, and the line beside it is the India line — one country, one
     contactable location. The full office list, Dubai and Abu Dhabi included,
     lives on /location/. */
  const mumbai = vxnOffice('mumbai')!;
  /* One number published here — the India line. The whole card is the tel:
     link, so the number itself is plain description text and keeps the card's
     black type rather than the accent link colour. */
  const noida = vxnOffice('noida')!;

  return (
    <>

      <div id="main-content">

      	<div id="main" role="main" className="vamtam-main layout-full">

      		<article id="post-264" className="full post-264 page type-page status-publish hentry">
      			<div data-elementor-type="single-page" data-elementor-id="3752" className="elementor elementor-3752 elementor-location-single post-264 page type-page status-publish hentry" data-elementor-post-type="elementor_library">
      				<div className="elementor-element elementor-element-c4d353f e-flex e-con-boxed e-con e-parent" data-id="c4d353f" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      					<div className="e-con-inner">
      						<div className="elementor-element elementor-element-6200b41 e-con-full e-flex e-con e-child" data-id="6200b41" data-element_type="container" data-e-type="container">
      							<div className="elementor-element elementor-element-7b36cfb e-con-full e-flex e-con e-child" data-id="7b36cfb" data-element_type="container" data-e-type="container">
      								<div className="elementor-element elementor-element-c739b5b elementor-widget elementor-widget-heading" data-id="c739b5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      									<div className="elementor-widget-container">
      										<span className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/')}>Home</a></span>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-1707a75 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1707a75" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      									<div className="elementor-widget-container">
      										<span className="elementor-heading-title elementor-size-default">&gt; Contact us</span>
      									</div>
      								</div>
      							</div>
      							<div className="elementor-element elementor-element-3f5733d elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="3f5733d" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      								<div className="elementor-widget-container">
      									<div className="elementor-divider">
      										<span className="elementor-divider-separator">
      										</span>
      									</div>
      								</div>
      							</div>
      							<div className="elementor-element elementor-element-8c0b074 e-con-full e-flex e-con e-child" data-id="8c0b074" data-element_type="container" data-e-type="container">
      								<div className="elementor-element elementor-element-16f0cb0 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="16f0cb0" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      									<div className="elementor-widget-container">
      										<h1 className="elementor-heading-title elementor-size-default">Get In Touch</h1>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-44a505e elementor-invisible animated-fast elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="44a505e" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="theme-post-title.default">
      									<div className="elementor-widget-container">
      										<h2 className="elementor-heading-title elementor-size-default">Contact us</h2>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-44a2511 elementor-invisible animated-fast elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="theme-post-excerpt.default">
      									<div className="elementor-widget-container">
      										Discuss Your Next Investment Decision </div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      				<div className="elementor-element elementor-element-afe1311 e-con-full e-flex e-con e-parent" data-id="afe1311" data-element_type="container" data-e-type="container">
      					<div className="elementor-element elementor-element-9851ed0 elementor-widget elementor-widget-theme-post-content" data-id="9851ed0" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-content.default">
      						<div className="elementor-widget-container">
      							<div data-elementor-type="wp-page" data-elementor-id="264" className="elementor elementor-264" data-elementor-post-type="page">
      								<div className="elementor-element elementor-element-3f29e6b e-flex e-con-boxed e-con e-parent" data-id="3f29e6b" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										      										<a className="elementor-element elementor-element-4ed884b elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="4ed884b" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"fadeIn\",\"animation_delay\":0}"} href={mumbai.map} target="_blank" rel="noopener">
      											<div className="elementor-element elementor-element-299dffd elementor-view-stacked elementor-shape-rounded elementor-position-left elementor-mobile-position-left elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box" data-id="299dffd" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-icon-box-wrapper">

      														<div className="elementor-icon-box-icon">
      															<span className="elementor-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-location"></i> </span>
      														</div>

      														<div className="elementor-icon-box-content">

      															<h6 className="elementor-icon-box-title">
      																<span>
      																	Visit us &#8212; Mumbai: </span>
      															</h6>

      															<p className="elementor-icon-box-description">
      																{mumbai.address} </p>

      														</div>

      													</div>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-201491e elementor-view-default elementor-widget elementor-widget-icon" data-id="201491e" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-icon-wrapper">
      														<div className="elementor-icon">
      															<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i>
      														</div>
      													</div>
      												</div>
      											</div>
      										</a>
      										      										<a className="elementor-element elementor-element-03ad117 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="03ad117" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"fadeIn\",\"animation_delay\":50}"} href={`tel:${noida.tel}`}>
      											<div className="elementor-element elementor-element-1d8511d elementor-view-stacked elementor-shape-rounded elementor-position-left elementor-mobile-position-left elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box" data-id="1d8511d" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-icon-box-wrapper">

      														<div className="elementor-icon-box-icon">
      															<span className="elementor-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-phone"></i> </span>
      														</div>

      														<div className="elementor-icon-box-content">

      															<h6 className="elementor-icon-box-title">
      																<span>
      																	Call Us &#8212; </span>
      															</h6>

      															<p className="elementor-icon-box-description">
      																{noida.phone} </p>

      														</div>

      													</div>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-11ed043 elementor-view-default elementor-widget elementor-widget-icon" data-id="11ed043" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-icon-wrapper">
      														<div className="elementor-icon">
      															<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i>
      														</div>
      													</div>
      												</div>
      											</div>
      										</a>
      										<a className="elementor-element elementor-element-24158a7 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="24158a7" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"fadeIn\",\"animation_delay\":100}"} href="mailto:advisory@valunxtcapital.com?subject=Hello">
      											<div className="elementor-element elementor-element-d80a703 elementor-view-stacked elementor-shape-rounded elementor-position-left elementor-mobile-position-left elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box" data-id="d80a703" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-icon-box-wrapper">

      														<div className="elementor-icon-box-icon">
      															<span className="elementor-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-email"></i> </span>
      														</div>

      														<div className="elementor-icon-box-content">

      															<h6 className="elementor-icon-box-title">
      																<span>
      																	Email us at &#8212; </span>
      															</h6>

      															<p className="elementor-icon-box-description">
      																{vxnEmail()} </p>

      														</div>

      													</div>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-8a386a6 elementor-view-default elementor-widget elementor-widget-icon" data-id="8a386a6" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-icon-wrapper">
      														<div className="elementor-icon">
      															<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i>
      														</div>
      													</div>
      												</div>
      											</div>
      										</a>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-f42b010 e-flex e-con-boxed e-con e-parent" data-id="f42b010" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="elementor-element elementor-element-e073021 e-con-full e-flex e-con e-child" data-id="e073021" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-b696314 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="b696314" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">Contact Us Form</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-cab4633 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="cab4633" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<h2 className="elementor-heading-title elementor-size-default">Discuss Your Next Investment Decision</h2>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-0faff4e elementor-invisible elementor-widget-tablet__width-initial animated-fast elementor-widget elementor-widget-heading" data-id="0faff4e" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">Send us a message and our advisory team will respond shortly.</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-d3817c2 e-con-full e-flex e-con e-child" data-id="d3817c2" data-element_type="container" data-e-type="container">
      												<a className="elementor-element elementor-element-bf13a2c e-con-full e-flex e-con e-child" data-id="bf13a2c" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"} href="mailto:advisory@valunxtcapital.com?subject=Hello" target="_blank">
      													<div className="elementor-element elementor-element-104172f elementor-view-stacked elementor-shape-rounded elementor-position-left elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box" data-id="104172f" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      														<div className="elementor-widget-container">
      															<div className="elementor-icon-box-wrapper">

      																<div className="elementor-icon-box-icon">
      																	<span className="elementor-icon">
      																		<i aria-hidden="true" className="vamtamtheme- vamtam-theme-email"></i> </span>
      																</div>

      																<div className="elementor-icon-box-content">

      																	<h6 className="elementor-icon-box-title">
      																		<span>
      																			For advisory, careers and general enquiries, please email </span>
      																	</h6>

      																	<p className="elementor-icon-box-description">
      																		{vxnEmail()} </p>

      																</div>

      															</div>
      														</div>
      													</div>
      													<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-3585133 elementor-view-default elementor-widget elementor-widget-icon" data-id="3585133" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      														<div className="elementor-widget-container">
      															<div className="elementor-icon-wrapper">
      																<div className="elementor-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i>
      																</div>
      															</div>
      														</div>
      													</div>
      												</a>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-87d86db e-con-full e-flex e-con e-child" data-id="87d86db" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-dfdaf3f elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="dfdaf3f" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\"}"}>
      												<div className="elementor-element elementor-element-22680cf elementor-widget elementor-widget-heading" data-id="22680cf" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h5 className="elementor-heading-title elementor-size-default">Contact Form</h5>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-bf98b48 elementor-invisible elementor-absolute animated-fast elementor-view-default elementor-widget elementor-widget-icon" data-id="bf98b48" data-element_type="widget" data-e-type="widget" data-settings={"{\"_position\":\"absolute\",\"_animation\":\"slideInLeft\",\"_animation_delay\":50}"} data-widget_type="icon.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-icon-wrapper">
      															<div className="elementor-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-send"></i>
      															</div>
      														</div>
      													</div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-8aa0422 e-con-full e-flex e-con e-child" data-id="8aa0422" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-7655e08 elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="7655e08" data-element_type="widget" data-e-type="widget" data-settings={"{\"button_width\":\"40\",\"step_next_label\":\"Next\",\"step_previous_label\":\"Previous\",\"step_type\":\"number_text\",\"step_icon_shape\":\"circle\"}"} data-widget_type="form.default">
      													<div className="elementor-widget-container">
      														<form className="elementor-form" method="post" name="Contact Form" aria-label="Contact Form">
      															<input type="hidden" name="post_id" value="264" />
      															<input type="hidden" name="form_id" value="7655e08" />
      															<input type="hidden" name="referer_title" value="VALUNXT Capital" />

      															<input type="hidden" name="queried_id" value="264" />

      															<div className="elementor-form-fields-wrapper elementor-labels-above">
      																<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-contact_full_name elementor-col-100 elementor-field-required">
      																	<label htmlFor="form-field-contact_full_name" className="elementor-field-label">Full Name</label>
      																	<input size={1} type="text" name="form_fields[contact_full_name]" id="form-field-contact_full_name" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Full Name" required />
      																</div>
      																<div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-contact_email elementor-col-100 elementor-field-required">
      																	<label htmlFor="form-field-contact_email" className="elementor-field-label">Email</label>
      																	<input size={1} type="email" name="form_fields[contact_email]" id="form-field-contact_email" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required />
      																</div>
      																<div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-contact_phone elementor-col-100 elementor-field-required">
      																	<label htmlFor="form-field-contact_phone" className="elementor-field-label">Phone No</label>
      																	<input size={1} type="tel" name="form_fields[contact_phone]" id="form-field-contact_phone" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Phone No" required />
      																</div>
      																<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-contact_company elementor-col-100 elementor-field-required">
      																	<label htmlFor="form-field-contact_company" className="elementor-field-label">Company Name</label>
      																	<input size={1} type="text" name="form_fields[contact_company]" id="form-field-contact_company" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Company Name" required />
      																</div>
      																<div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-40 e-form__buttons">
      																	<button className="elementor-button elementor-size-sm" type="submit">
      																		<span className="elementor-button-content-wrapper">
      																			<span className="elementor-button-icon">
      																				<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																			<span className="elementor-button-text">Submit</span>
      																		</span>
      																	</button>
      																</div>
      															</div>
      														</form>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-7eb3ab0 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="7eb3ab0" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-divider">
      															<span className="elementor-divider-separator">
      															</span>
      														</div>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-38c3fa6 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="38c3fa6" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      													<div className="elementor-widget-container">
      														<p>By submitting this form you agree to our <a href={rurl(region, '/privacy-policy/')}>Privacy Policy</a>. VALUNXT Capital may contact you via email or phone regarding your enquiry.</p>
      													</div>
      												</div>
      											</div>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-9a69cb3 e-con-full e-flex e-con e-parent" data-id="9a69cb3" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-0e8d2af elementor-widget elementor-widget-google_maps" data-id="0e8d2af" data-element_type="widget" data-e-type="widget" data-widget_type="google_maps.default">
      										<div className="elementor-widget-container">
      											<div className="elementor-custom-embed">
      												<iframe loading="lazy" src="https://maps.google.com/maps?q=Platina%20Tower%2C%20Bandra%20Kurla%20Complex%20Rd%2C%20G%20Block%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra%20400051&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="Platina Tower, Bandra Kurla Complex, Bandra East, Mumbai" aria-label="Platina Tower, Bandra Kurla Complex, Bandra East, Mumbai"></iframe>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      				<div className="elementor-element elementor-element-37e3794 e-con-full e-flex e-con e-parent" data-id="37e3794" data-element_type="container" data-e-type="container">
      					<div className="elementor-element elementor-element-251f9d0 elementor-widget elementor-widget-template" data-id="251f9d0" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
      						<div className="elementor-widget-container">
      							<div className="elementor-template">
      								<div data-elementor-type="container" data-elementor-id="4557" className="elementor elementor-4557" data-elementor-post-type="elementor_library">
      									<div className="elementor-element elementor-element-9296635 e-flex e-con-boxed e-con e-parent" data-id="9296635" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      										<div className="e-con-inner">
      											<div className="elementor-element elementor-element-3300848 elementor-widget elementor-widget-spacer" data-id="3300848" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-spacer">
      														<div className="elementor-spacer-inner"></div>
      													</div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-4b7d49d e-con-full e-flex e-con e-child" data-id="4b7d49d" data-element_type="container" data-e-type="container">
      												<div className="elementor-element elementor-element-f0def51 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="f0def51" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h3 className="elementor-heading-title elementor-size-default">Stay Ahead.</h3>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-06eccf7 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="06eccf7" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h3 className="elementor-heading-title elementor-size-default">Subscribe for Market Intelligence.</h3>
      													</div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-c96c2e7 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="c96c2e7" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"fadeIn\",\"animation_delay\":150}"}>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-3b33bfe elementor-widget-tablet__width-inherit elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="3b33bfe" data-element_type="widget" data-e-type="widget" data-settings={"{\"button_width\":\"25\",\"step_next_label\":\"Next\",\"step_previous_label\":\"Previous\",\"button_width_tablet\":\"25\",\"step_type\":\"number_text\",\"step_icon_shape\":\"circle\"}"} data-widget_type="form.default">
      													<div className="elementor-widget-container">
      														<form className="elementor-form" method="post" name="Subscribe" aria-label="Subscribe">
      															<input type="hidden" name="post_id" value="4557" />
      															<input type="hidden" name="form_id" value="3b33bfe" />
      															<input type="hidden" name="referer_title" value="VALUNXT Capital" />

      															<input type="hidden" name="queried_id" value="264" />

      															<div className="elementor-form-fields-wrapper elementor-labels-">
      																<div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-70 elementor-md-70 elementor-field-required">
      																	<label htmlFor="form-field-email" className="elementor-field-label elementor-screen-only">
      																		Email </label>
      																	<input size={1} type="email" name="form_fields[email]" id="form-field-email" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required />
      																</div>
      																<div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-25 e-form__buttons elementor-md-25">
      																	<button className="elementor-button elementor-size-sm" type="submit">
      																		<span className="elementor-button-content-wrapper">
      																			<span className="elementor-button-icon">
      																				<i aria-hidden="true" className="vamtamtheme- vamtam-theme-send"></i> </span>
      																			<span className="elementor-button-text">Subscribe</span>
      																		</span>
      																	</button>
      																</div>
      															</div>
      														</form>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-82aa64e elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor" data-id="82aa64e" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      													<div className="elementor-widget-container">
      														<p>You can unsubscribe at any time using the link in the footer of our emails. View our <a href={rurl(region, '/privacy-policy/')}>Privacy Policy</a>.</p>
      													</div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-3d5fc70 elementor-widget elementor-widget-spacer" data-id="3d5fc70" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-spacer">
      														<div className="elementor-spacer-inner"></div>
      													</div>
      												</div>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</article>






      	</div>{/* #main */}

      </div>
    </>
  );
}
