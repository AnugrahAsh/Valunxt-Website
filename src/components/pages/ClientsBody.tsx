/**
 * /clients/ — page body.
 *
 * Port of clients/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style
 * objects) and internal links going through rurl() so they stay in the
 * visitor's market.
 */
import { BASE, rurl } from '@/lib/region';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ClientScript from '@/components/ClientScript';
import type { PageConfig } from '@/lib/page-config';

export default function ClientsBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <>

      <div id="main-content">

      	<div id="main" role="main" className="vamtam-main layout-full">
      		<article id="post-248" className="full post-248 page type-page status-publish hentry">
      			<div data-elementor-type="single-page" data-elementor-id="3752" className="elementor elementor-3752 elementor-location-single post-248 page type-page status-publish hentry" data-elementor-post-type="elementor_library">
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
      										<span className="elementor-heading-title elementor-size-default">&gt; Clients</span>
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
      										<h1 className="elementor-heading-title elementor-size-default">Investors, Families &amp; Institutions</h1>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-44a505e elementor-invisible animated-fast elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="44a505e" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="theme-post-title.default">
      									<div className="elementor-widget-container">
      										<h2 className="elementor-heading-title elementor-size-default">Clients</h2>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-44a2511 elementor-invisible animated-fast elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="theme-post-excerpt.default">
      									<div className="elementor-widget-container">
      										VALUNXT Capital partners with private investors, family offices, NRIs, developers, and institutions—delivering tailored advisory, capital solutions, and intelligence at every stage of their investment journey across India and the UAE.</div>
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
      														<span className="elementor-heading-title elementor-size-default">Private &amp; HNI Investors</span>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-988dad9 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="988dad9" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h2 className="elementor-heading-title elementor-size-default">Guiding Private Wealth With Clarity</h2>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-1252fb2 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="1252fb2" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      													<div className="elementor-widget-container">
      														<p>We work with private individuals and high net worth investors seeking to build and protect wealth through real estate. From first acquisitions to sophisticated multi asset portfolios, our advisors bring the discipline, discretion, and personalised attention that discerning investors expect at every stage of their journey.</p>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-c496189 elementor-invisible elementor-align-left elementor-tablet-align-left animated-fast elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="c496189" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":250}"} data-widget_type="icon-list.default">
      													<div className="elementor-widget-container">
      														<ul className="elementor-icon-list-items">
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Personalised portfolio strategy</span>
      															</li>
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Discreet, one to one advisory</span>
      															</li>
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Access to curated opportunities</span>
      															</li>
      														</ul>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-a84e26f vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="a84e26f" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-button-wrapper">
      															<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/contact/')}>
      																<span className="elementor-button-content-wrapper">
      																	<span className="elementor-button-icon">
      																		<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																	<span className="elementor-button-text">Get in Touch</span>
      																</span>
      															</a>
      														</div>
      													</div>
      												</div>
      											</div>
      										</div>
      									</div>
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
      														<span className="elementor-heading-title elementor-size-default">Family Offices</span>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-0606b07 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="0606b07" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h2 className="elementor-heading-title elementor-size-default">Stewarding Family Capital Across Generations</h2>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-ffceb2e elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="ffceb2e" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      													<div className="elementor-widget-container">
      														<p>We support single and multi family offices in managing real estate allocations with a long term, generational perspective. Our team integrates rigorous analysis, capital structuring, and independent oversight to help families preserve and grow wealth across market cycles—with governance and succession firmly in view.</p>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-bef4608 elementor-invisible elementor-align-left elementor-tablet-align-left animated-fast elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="bef4608" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":250}"} data-widget_type="icon-list.default">
      													<div className="elementor-widget-container">
      														<ul className="elementor-icon-list-items">
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Generational wealth planning</span>
      															</li>
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Consolidated portfolio oversight</span>
      															</li>
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Governance &amp; succession alignment</span>
      															</li>
      														</ul>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-f462b16 vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="f462b16" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-button-wrapper">
      															<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/contact/')}>
      																<span className="elementor-button-content-wrapper">
      																	<span className="elementor-button-icon">
      																		<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																	<span className="elementor-button-text">Get in Touch</span>
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
      														<span className="elementor-heading-title elementor-size-default">NRI Investors</span>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-8cbf845 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="8cbf845" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h2 className="elementor-heading-title elementor-size-default">Investing Back Home, With Confidence</h2>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-af7e252 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="af7e252" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      													<div className="elementor-widget-container">
      														<p>We help Non Resident Indians invest with confidence in Indian and Dubai real estate from anywhere in the world. From remote due diligence and documentation to repatriation and tax aware structuring, we make cross border investing simple, transparent, and secure—so distance is never a barrier to opportunity.</p>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-bc6ef33 elementor-invisible elementor-align-left elementor-tablet-align-left animated-fast elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="bc6ef33" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":250}"} data-widget_type="icon-list.default">
      													<div className="elementor-widget-container">
      														<ul className="elementor-icon-list-items">
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">End to end remote advisory</span>
      															</li>
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Cross border compliance support</span>
      															</li>
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Repatriation &amp; tax guidance</span>
      															</li>
      														</ul>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-19c9381 vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="19c9381" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-button-wrapper">
      															<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/contact/')}>
      																<span className="elementor-button-content-wrapper">
      																	<span className="elementor-button-icon">
      																		<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																	<span className="elementor-button-text">Get in Touch</span>
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
      														<span className="elementor-heading-title elementor-size-default">Developers &amp; Institutions</span>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-0a5e8b8 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="0a5e8b8" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h2 className="elementor-heading-title elementor-size-default">Scaling Projects &amp; Portfolios at Institutional Grade</h2>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-b315557 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="b315557" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      													<div className="elementor-widget-container">
      														<p>We partner with developers, funds, and institutional investors on projects and portfolios that demand scale and precision. From capital raising and feasibility to research and technology enablement, we bring institutional grade rigour, transparent reporting, and dependable execution to every mandate.</p>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-d3496cd elementor-invisible elementor-align-left elementor-tablet-align-left animated-fast elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="d3496cd" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":250}"} data-widget_type="icon-list.default">
      													<div className="elementor-widget-container">
      														<ul className="elementor-icon-list-items">
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Capital raising &amp; structuring</span>
      															</li>
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Feasibility &amp; market research</span>
      															</li>
      															<li className="elementor-icon-list-item">
      																<span className="elementor-icon-list-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																<span className="elementor-icon-list-text">Institutional reporting &amp; analytics</span>
      															</li>
      														</ul>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-123a40e vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="123a40e" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-button-wrapper">
      															<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/contact/')}>
      																<span className="elementor-button-content-wrapper">
      																	<span className="elementor-button-icon">
      																		<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																	<span className="elementor-button-text">Get in Touch</span>
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
      								</div>
      								<div className="elementor-element elementor-element-5063cff e-flex e-con-boxed e-con e-parent" data-id="5063cff" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="elementor-element elementor-element-1c54dae elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="1c54dae" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      											<div className="elementor-widget-container">
      												<span className="elementor-heading-title elementor-size-default">Our Commitment</span>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-ce4b290 elementor-invisible elementor-widget__width-initial animated-fast elementor-widget elementor-widget-heading" data-id="ce4b290" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      											<div className="elementor-widget-container">
      												<h2 className="elementor-heading-title elementor-size-default">The Promises We Make to Every Client</h2>
      											</div>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-77ec866 e-flex e-con-boxed e-con e-parent" data-id="77ec866" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="elementor-element elementor-element-4d30c84 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="4d30c84" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      											<div className="elementor-widget-container">
      												<div className="elementor-divider">
      													<span className="elementor-divider-separator">
      													</span>
      												</div>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-e9382fa elementor-widget elementor-widget-heading" data-id="e9382fa" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      											<div className="elementor-widget-container">
      												<span className="elementor-heading-title elementor-size-default">Backed by a Trusted Group of Companies.</span>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-bf09863 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="bf09863" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      											<div className="elementor-widget-container">
      												<div className="elementor-divider">
      													<span className="elementor-divider-separator">
      													</span>
      												</div>
      											</div>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-494e5da e-flex e-con-boxed e-con e-parent" data-id="494e5da" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="vxn-logo-slider" data-vxn-logo-slider="">
      											<div className="vxn-logo-slider__viewport">
      												<div className="vxn-logo-slider__track">
      													<div className="vxn-logo-slider__slide"><a href="https://reliantsurveyors.com" target="_blank" rel="noopener"><img decoding="async" width={114} height={56} src={`${BASE}/LOGO/reliant-surveyors.svg`} alt="Reliant Surveyors" /></a></div>
      													<div className="vxn-logo-slider__slide"><a href="https://houzzhunt.com" target="_blank" rel="noopener"><img decoding="async" width={56} height={56} src={`${BASE}/LOGO/houzzhunt.svg`} alt="HouzzHunt" /></a></div>
      													<div className="vxn-logo-slider__slide"><a href="https://houzzhuntmortgage.com" target="_blank" rel="noopener"><img decoding="async" width={218} height={56} src={`${BASE}/LOGO/houzzhunt-mortgage.svg`} alt="HouzzHunt Mortgage" /></a></div>
      													<div className="vxn-logo-slider__slide"><a href="https://valunxt.com" target="_blank" rel="noopener"><img decoding="async" width={187} height={56} src={`${BASE}/LOGO/valunxt-corporate.svg`} alt="VALUNXT Corporate Services" /></a></div>
      												</div>
      											</div>
      											<div className="vxn-logo-slider__dots" role="group" aria-label="Group company logos"></div>
      										</div>
      										<ClientScript code={`
      										(function(){
      											var root = document.querySelector('[data-vxn-logo-slider]');
      											if(!root || root.dataset.vxnInit){ return; }
      											root.dataset.vxnInit = '1';
      											var track = root.querySelector('.vxn-logo-slider__track');
      											var dotsWrap = root.querySelector('.vxn-logo-slider__dots');
      											var slides = Array.prototype.slice.call(track.children);
      											var real = slides.length;
      											if(real < 2){ return; }
      											var INTERVAL = 2000, DURATION = 600;
      											for(var c=0;c<real;c++){ var cl=slides[c].cloneNode(true); cl.setAttribute('aria-hidden','true'); track.appendChild(cl); }
      											var index = 0, timer = null, dots = [], slideW = 0;
      											function measure(){ slideW = slides[0].getBoundingClientRect().width; }
      											for(var i=0;i<real;i++){ (function(i){
      												var b = document.createElement('button');
      												b.type='button'; b.className='vxn-logo-slider__dot';
      												b.setAttribute('aria-label','Show group company '+(i+1)+' of '+real);
      												b.addEventListener('click', function(){ stop(); go(i); start(); });
      												dotsWrap.appendChild(b); dots.push(b);
      											})(i); }
      											function setDots(a){ for(var i=0;i<dots.length;i++){ var on=(i===a); dots[i].classList.toggle('is-active',on); dots[i].setAttribute('aria-current', on?'true':'false'); } }
      											function apply(anim){ if(!slideW){ measure(); } track.style.transition = anim ? ('transform '+DURATION+'ms cubic-bezier(.22,.61,.36,1)') : 'none'; track.style.transform = 'translate3d(-'+(index*slideW)+'px,0,0)'; }
      											function go(i){ index=i; apply(true); setDots(index%real); }
      											function next(){
      												index++;
      												apply(true);
      												setDots(index%real);
      												if(index===real){ window.setTimeout(function(){ index=0; apply(false); void track.offsetWidth; }, DURATION+60); }
      											}
      											function start(){ if(!timer){ timer=setInterval(next, INTERVAL); } }
      											function stop(){ if(timer){ clearInterval(timer); timer=null; } }
      											measure(); setDots(0); apply(false); start();
      											var rt=null;
      											window.addEventListener('resize', function(){ if(rt){ clearTimeout(rt); } rt=window.setTimeout(function(){ measure(); apply(false); }, 150); });
      											root.addEventListener('mouseenter', stop);
      											root.addEventListener('mouseleave', start);
      											root.addEventListener('focusin', stop);
      											root.addEventListener('focusout', start);
      											document.addEventListener('visibilitychange', function(){ document.hidden ? stop() : start(); });
      										})();
      										`} />
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      				<TestimonialsSection />
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
      															<input type="hidden" name="referer_title" value="Clients" />

      															<input type="hidden" name="queried_id" value="248" />

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
      	</div>

      </div>
    </>
  );
}
