/**
 * /our-group/ — page body.
 *
 * Port of our-group/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style
 * objects) and internal links going through rurl() so they stay in the
 * visitor's market.
 */
import { BASE, rurl } from '@/lib/region';
import SubscribeSection from '@/components/sections/SubscribeSection';
import type { PageConfig } from '@/lib/page-config';

export default function OurGroupBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <>

      <style id="our-group-company-images" dangerouslySetInnerHTML={{ __html: `
      	/* Our Group page only: swap the four section images (shared post-248.css
      	   serves the Services page's stock photos) for the group-company imagery.
      	   Page order: Reliant Surveyors, HouzzHunt, HouzzHunt Mortgage, VALUNXT. */
      	.elementor-248 .elementor-element.elementor-element-ae003e2:not(.elementor-motion-effects-element-type-background) {
      		background-image: url("${BASE}/assets/content/uploads/new-folder/valunxt-corporate-services-2.webp") !important;
      		background-position: center center !important;
      		background-size: cover !important;
      	}
      	.elementor-248 .elementor-element.elementor-element-f9a35b6:not(.elementor-motion-effects-element-type-background) {
      		background-image: url("${BASE}/assets/content/uploads/new-folder/reliant-surveyors-2.webp") !important;
      		background-position: center center !important;
      		background-size: cover !important;
      	}
      	.elementor-248 .elementor-element.elementor-element-33b4d28:not(.elementor-motion-effects-element-type-background) {
      		background-image: url("${BASE}/assets/content/uploads/new-folder/houzzhunt-2.webp") !important;
      		background-position: center center !important;
      		background-size: cover !important;
      	}
      	.elementor-248 .elementor-element.elementor-element-cee6c01:not(.elementor-motion-effects-element-type-background) {
      		background-image: url("${BASE}/assets/content/uploads/new-folder/houzzhunt-mortgage-1.webp") !important;
      		background-position: 60% center !important;
      		background-size: cover !important;
      	}
      ` }} />
      <div id="main-content">
      	<div id="main" role="main" className="vamtam-main layout-full">
      		<article className="full page type-page status-publish hentry">
      			<div data-elementor-type="single-page" data-elementor-id="3752" className="elementor elementor-3752 elementor-location-single page type-page status-publish hentry" data-elementor-post-type="elementor_library">
      				<div className="elementor-element elementor-element-c4d353f e-flex e-con-boxed e-con e-parent vxn-hero--group" data-id="c4d353f" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
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
      										<span className="elementor-heading-title elementor-size-default">&gt; Our Group</span>
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
      								<div className="elementor-element elementor-element-16f0cb0 elementor-widget elementor-widget-heading" data-id="16f0cb0" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      									<div className="elementor-widget-container">
      										<h1 className="elementor-heading-title elementor-size-default">Our Group</h1>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-44a2511 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      									<div className="elementor-widget-container">
      										VALUNXT Capital operates as a group of specialist companies, each focused on a distinct discipline within the property, advisory and corporate services value chain. </div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>

      			<div className="elementor-element elementor-element-afe1311 e-con-full e-flex e-con e-parent" data-id="afe1311" data-element_type="container" data-e-type="container">
      				<div className="elementor-element elementor-element-9851ed0 elementor-widget elementor-widget-theme-post-content" data-id="9851ed0" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-content.default">
      					<div className="elementor-widget-container">
      						<div data-elementor-type="wp-page" data-elementor-id="248" className="elementor elementor-248" data-elementor-post-type="page">
      							<div className="elementor-element elementor-element-6a20cae e-con-full e-flex e-con e-parent" data-id="6a20cae" data-element_type="container" data-e-type="container">
      								<div className="elementor-element elementor-element-32f8fff e-flex e-con-boxed e-con e-child" data-id="32f8fff" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="elementor-element elementor-element-a73f691 e-con-full e-flex e-con e-child" data-id="a73f691" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-2771952 elementor-absolute elementor-widget elementor-widget-menu-anchor" data-id="2771952" data-element_type="widget" data-e-type="widget" data-settings={"{\"_position\":\"absolute\"}"} data-widget_type="menu-anchor.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-menu-anchor" id="service_2"></div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-8d73e33 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="8d73e33" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">Reliant Surveyors</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-0606b07 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="0606b07" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<h2 className="elementor-heading-title elementor-size-default">Valuation Backed by Global Standards</h2>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-ffceb2e elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="ffceb2e" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      												<div className="elementor-widget-container">
      													<p>Reliant Surveyors is a multi-disciplinary valuation and surveying practice serving India, the Middle East, and the United Kingdom. With RICS Red Book governed standards, a team of RERA-approved valuers, MRICS professionals, and chartered engineers, and more than 10,000 valuations delivered across USD 150+ billion of assets &#8212; a cumulative figure covering completed instructions since the practice was founded &#8212; the firm provides independent valuation, technical due diligence, and advisory that institutions and lenders can rely on.</p>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-bef4608 elementor-invisible elementor-align-left elementor-tablet-align-left animated-fast elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="bef4608" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":250}"} data-widget_type="icon-list.default">
      												<div className="elementor-widget-container">
      													<ul className="elementor-icon-list-items">
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">RICS Red Book compliant valuations</span>
      														</li>
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Technical due diligence &amp; surveys</span>
      														</li>
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">IBBI, RERA &amp; RICS accredited valuers</span>
      														</li>
      													</ul>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-f462b16 vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="f462b16" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-button-wrapper">
      														<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/our-group/reliant-surveyors/')}>
      															<span className="elementor-button-content-wrapper">
      																<span className="elementor-button-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																<span className="elementor-button-text">Learn More</span>
      															</span>
      														</a>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-f9a35b6 e-con-full e-flex e-con e-child" data-id="f9a35b6" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      											<div className="elementor-element elementor-element-bff45f6 e-con-full e-flex e-con e-child" data-id="bff45f6" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      												<div className="elementor-element elementor-element-df84f13 elementor-widget elementor-widget-template" data-id="df84f13" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-template">
      															<div data-elementor-type="container" data-elementor-id="7162" className="elementor elementor-7162" data-elementor-post-type="elementor_library">
      																<div className="elementor-element elementor-element-c895366 e-con-full e-flex e-con e-child" data-id="c895366" data-element_type="container" data-e-type="container">
      																	<div className="elementor-element elementor-element-37bc217 e-con-full blur-background e-flex e-con e-child" data-id="37bc217" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-7aa6fbd e-con-full blur-background e-flex e-con e-child" data-id="7aa6fbd" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-5500eb5 e-con-full blur-background e-flex e-con e-child" data-id="5500eb5" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-ba4229b e-con-full blur-background e-flex e-con e-child" data-id="ba4229b" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-0df9fbc e-con-full blur-background e-flex e-con e-child" data-id="0df9fbc" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-a5c7002 e-con-full blur-background elementor-hidden-mobile e-flex e-con e-child" data-id="a5c7002" data-element_type="container" data-e-type="container">
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
      								<div className="elementor-element elementor-element-1806585 e-flex e-con-boxed e-con e-child" data-id="1806585" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="elementor-element elementor-element-33b4d28 e-con-full e-flex e-con e-child" data-id="33b4d28" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      											<div className="elementor-element elementor-element-706dc4b e-con-full e-flex e-con e-child" data-id="706dc4b" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      												<div className="elementor-element elementor-element-7642dc6 elementor-widget elementor-widget-template" data-id="7642dc6" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-template">
      															<div data-elementor-type="container" data-elementor-id="7162" className="elementor elementor-7162" data-elementor-post-type="elementor_library">
      																<div className="elementor-element elementor-element-c895366 e-con-full e-flex e-con e-child" data-id="c895366" data-element_type="container" data-e-type="container">
      																	<div className="elementor-element elementor-element-37bc217 e-con-full blur-background e-flex e-con e-child" data-id="37bc217" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-7aa6fbd e-con-full blur-background e-flex e-con e-child" data-id="7aa6fbd" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-5500eb5 e-con-full blur-background e-flex e-con e-child" data-id="5500eb5" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-ba4229b e-con-full blur-background e-flex e-con e-child" data-id="ba4229b" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-0df9fbc e-con-full blur-background e-flex e-con e-child" data-id="0df9fbc" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-a5c7002 e-con-full blur-background elementor-hidden-mobile e-flex e-con e-child" data-id="a5c7002" data-element_type="container" data-e-type="container">
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-f482c5e e-con-full e-flex e-con e-child" data-id="f482c5e" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-a4de11d elementor-absolute elementor-widget elementor-widget-menu-anchor" data-id="a4de11d" data-element_type="widget" data-e-type="widget" data-settings={"{\"_position\":\"absolute\"}"} data-widget_type="menu-anchor.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-menu-anchor" id="service_3"></div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-b12eaaa elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="b12eaaa" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">HouzzHunt</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-8cbf845 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="8cbf845" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<h2 className="elementor-heading-title elementor-size-default">Luxury Living. Smarter Investing.</h2>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-af7e252 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="af7e252" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      												<div className="elementor-widget-container">
      													<p>HouzzHunt is a RERA-licensed luxury real estate firm and your trusted partner in Dubai&rsquo;s property market. Drawing on 48+ years of combined market expertise and more than 50,000 verified listings across Dubai and Abu Dhabi, the team curates residential, commercial, and investment opportunities&mdash;supporting clients with end-to-end transaction support through every buying, selling, and leasing journey.</p>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-bc6ef33 elementor-invisible elementor-align-left elementor-tablet-align-left animated-fast elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="bc6ef33" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":250}"} data-widget_type="icon-list.default">
      												<div className="elementor-widget-container">
      													<ul className="elementor-icon-list-items">
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Residential &amp; commercial brokerage</span>
      														</li>
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Curated investment opportunities</span>
      														</li>
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Valuation, advisory &amp; research</span>
      														</li>
      													</ul>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-19c9381 vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="19c9381" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-button-wrapper">
      														<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/our-group/houzzhunt/')}>
      															<span className="elementor-button-content-wrapper">
      																<span className="elementor-button-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																<span className="elementor-button-text">Learn More</span>
      															</span>
      														</a>
      													</div>
      												</div>
      											</div>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-9bfc7aa e-flex e-con-boxed e-con e-child" data-id="9bfc7aa" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="elementor-element elementor-element-9a76586 e-con-full e-flex e-con e-child" data-id="9a76586" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-9b8c36c elementor-absolute elementor-widget elementor-widget-menu-anchor" data-id="9b8c36c" data-element_type="widget" data-e-type="widget" data-settings={"{\"_position\":\"absolute\"}"} data-widget_type="menu-anchor.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-menu-anchor" id="service_4"></div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-014c3ea elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="014c3ea" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">HouzzHunt Mortgage</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-0a5e8b8 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="0a5e8b8" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<h2 className="elementor-heading-title elementor-size-default">Your Dream Home, Made Possible</h2>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-b315557 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="b315557" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      												<div className="elementor-widget-container">
      													<p>HouzzHunt Mortgage is the UAE&rsquo;s trusted mortgage broker, connecting residents and international investors with 15+ partner banks to secure competitive rates and streamlined approvals&mdash;including 24-hour pre-approval. From residential and commercial financing with up to 80% funding and 25-year terms to refinancing, equity release, and Sharia-compliant home finance, every mortgage journey is guided end to end.</p>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-d3496cd elementor-invisible elementor-align-left elementor-tablet-align-left animated-fast elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="d3496cd" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":250}"} data-widget_type="icon-list.default">
      												<div className="elementor-widget-container">
      													<ul className="elementor-icon-list-items">
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Residential &amp; commercial mortgages</span>
      														</li>
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Refinance &amp; equity release</span>
      														</li>
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Islamic &amp; non-resident financing</span>
      														</li>
      													</ul>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-123a40e vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="123a40e" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-button-wrapper">
      														<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/our-group/houzzhunt-mortgage/')}>
      															<span className="elementor-button-content-wrapper">
      																<span className="elementor-button-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																<span className="elementor-button-text">Learn More</span>
      															</span>
      														</a>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-cee6c01 e-con-full e-flex e-con e-child" data-id="cee6c01" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      											<div className="elementor-element elementor-element-af7a9ae e-con-full e-flex e-con e-child" data-id="af7a9ae" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      												<div className="elementor-element elementor-element-197206f elementor-widget elementor-widget-template" data-id="197206f" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-template">
      															<div data-elementor-type="container" data-elementor-id="7162" className="elementor elementor-7162" data-elementor-post-type="elementor_library">
      																<div className="elementor-element elementor-element-c895366 e-con-full e-flex e-con e-child" data-id="c895366" data-element_type="container" data-e-type="container">
      																	<div className="elementor-element elementor-element-37bc217 e-con-full blur-background e-flex e-con e-child" data-id="37bc217" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-7aa6fbd e-con-full blur-background e-flex e-con e-child" data-id="7aa6fbd" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-5500eb5 e-con-full blur-background e-flex e-con e-child" data-id="5500eb5" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-ba4229b e-con-full blur-background e-flex e-con e-child" data-id="ba4229b" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-0df9fbc e-con-full blur-background e-flex e-con e-child" data-id="0df9fbc" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-a5c7002 e-con-full blur-background elementor-hidden-mobile e-flex e-con e-child" data-id="a5c7002" data-element_type="container" data-e-type="container">
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
      								<div className="elementor-element elementor-element-e8656dc e-flex e-con-boxed e-con e-child" data-id="e8656dc" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="elementor-element elementor-element-ae003e2 e-con-full e-flex e-con e-child" data-id="ae003e2" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      											<div className="elementor-element elementor-element-6574b64 e-con-full e-flex e-con e-child" data-id="6574b64" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      												<div className="elementor-element elementor-element-5ea9692 elementor-widget elementor-widget-template" data-id="5ea9692" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-template">
      															<div data-elementor-type="container" data-elementor-id="7162" className="elementor elementor-7162" data-elementor-post-type="elementor_library">
      																<div className="elementor-element elementor-element-c895366 e-con-full e-flex e-con e-child" data-id="c895366" data-element_type="container" data-e-type="container">
      																	<div className="elementor-element elementor-element-37bc217 e-con-full blur-background e-flex e-con e-child" data-id="37bc217" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-7aa6fbd e-con-full blur-background e-flex e-con e-child" data-id="7aa6fbd" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-5500eb5 e-con-full blur-background e-flex e-con e-child" data-id="5500eb5" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-ba4229b e-con-full blur-background e-flex e-con e-child" data-id="ba4229b" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-0df9fbc e-con-full blur-background e-flex e-con e-child" data-id="0df9fbc" data-element_type="container" data-e-type="container">
      																	</div>
      																	<div className="elementor-element elementor-element-a5c7002 e-con-full blur-background elementor-hidden-mobile e-flex e-con e-child" data-id="a5c7002" data-element_type="container" data-e-type="container">
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-5374c8d e-con-full e-flex e-con e-child" data-id="5374c8d" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-3cd0f9a elementor-absolute elementor-widget elementor-widget-menu-anchor" data-id="3cd0f9a" data-element_type="widget" data-e-type="widget" data-settings={"{\"_position\":\"absolute\"}"} data-widget_type="menu-anchor.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-menu-anchor" id="service_1"></div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-18a20a0 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="18a20a0" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">VALUNXT</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-988dad9 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="988dad9" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<h2 className="elementor-heading-title elementor-size-default">Accounting That Inspires Confident Decisions</h2>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-1252fb2 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="1252fb2" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      												<div className="elementor-widget-container">
      													<p>VALUNXT is a UAE-based accounting, tax, and advisory firm helping businesses navigate UAE tax with complete confidence. With FTA-approved tax and VAT services, RICS-compliant valuations, and transparent fixed-fee engagements led by senior professionals, VALUNXT supports startups, SMEs, free zone businesses, and large corporations with evidence-led advisory across accounting, consulting, and capital markets.</p>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-c496189 elementor-invisible elementor-align-left elementor-tablet-align-left animated-fast elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="c496189" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":250}"} data-widget_type="icon-list.default">
      												<div className="elementor-widget-container">
      													<ul className="elementor-icon-list-items">
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Tax advisory &amp; FTA compliance</span>
      														</li>
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Accounting &amp; bookkeeping</span>
      														</li>
      														<li className="elementor-icon-list-item">
      															<span className="elementor-icon-list-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      															<span className="elementor-icon-list-text">Valuation, consulting &amp; capital markets</span>
      														</li>
      													</ul>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-a84e26f vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="a84e26f" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-button-wrapper">
      														<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/our-group/valunxt-corporate-services/')}>
      															<span className="elementor-button-content-wrapper">
      																<span className="elementor-button-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																<span className="elementor-button-text">Learn More</span>
      															</span>
      														</a>
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
      	<SubscribeSection page={page} region={region} />

      	</div>{/* #main */}
      </div>
    </>
  );
}
