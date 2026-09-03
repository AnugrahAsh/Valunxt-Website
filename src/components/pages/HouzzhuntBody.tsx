/**
 * /our-group/houzzhunt/ — page body.
 *
 * Port of our-group/houzzhunt/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style
 * objects) and internal links going through rurl() so they stay in the
 * visitor's market.
 */
import { rurl } from '@/lib/region';
import { vxnOffice } from '@/lib/site-data';
import type { PageConfig } from '@/lib/page-config';

export default function HouzzhuntBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <>

      <style id="houzzhunt-section-gap" dangerouslySetInnerHTML={{ __html: `
      	/* Add vertical (top & bottom) gap to every top-level section on this page only */
      	#main-content .e-con.e-parent {
      		padding-top: clamp(40px, 6vw, 72px) !important;
      		padding-bottom: clamp(40px, 6vw, 72px) !important;
      	}
      ` }} />
      <div id="main-content">
      	<div id="main" role="main" className="vamtam-main layout-full">
      		<article className="full page type-page status-publish hentry">
      <div data-elementor-type="single-page" data-elementor-id="3752" className="elementor elementor-3752 elementor-location-single page type-page status-publish hentry" data-elementor-post-type="elementor_library">
      <div className="elementor-element elementor-element-c4d353f e-flex e-con-boxed e-con e-parent vxn-hero--houzzhunt" data-id="c4d353f" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      				<div className="e-con-inner">
      			<div className="elementor-element elementor-element-6200b41 e-con-full e-flex e-con e-child" data-id="6200b41" data-element_type="container" data-e-type="container">
      			<div className="elementor-element elementor-element-7b36cfb e-con-full e-flex e-con e-child" data-id="7b36cfb" data-element_type="container" data-e-type="container">
      					<div className="elementor-element elementor-element-c739b5b elementor-widget elementor-widget-heading" data-id="c739b5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      					<div className="elementor-widget-container">
      						<span className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/')}>Home</a></span>				</div>
      					</div>
      					<div className="elementor-element elementor-element-1707a75 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1707a75" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      					<div className="elementor-widget-container">
      						<span className="elementor-heading-title elementor-size-default">&gt; HouzzHunt</span>				</div>
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
      						<h1 className="elementor-heading-title elementor-size-default">HouzzHunt</h1>				</div>
      					</div>
      					<div className="elementor-element elementor-element-44a2511 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      					<div className="elementor-widget-container">
      						Luxury real estate and investment advisory — part of the VALUNXT group of companies.				</div>
      					</div>
      					</div>
      					</div>
      						</div>
      					</div>
      </div>
      <div data-elementor-type="wp-page" data-elementor-id="250" className="elementor elementor-250" data-elementor-post-type="page">
      <div className="elementor-element elementor-element-6c9221f e-flex e-con-boxed e-con e-parent" data-id="6c9221f" data-element_type="container" data-e-type="container">
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-55e76c6 e-con-full e-flex e-con e-child" data-id="55e76c6" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      		<div className="elementor-element elementor-element-7b89e24 e-con-full e-flex e-con e-child" data-id="7b89e24" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      				<div className="elementor-element elementor-element-5e33372 elementor-widget elementor-widget-template" data-id="5e33372" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      		<div className="elementor-element elementor-element-a158b05 e-con-full e-flex e-con e-child" data-id="a158b05" data-element_type="container" data-e-type="container">
      				<div className="elementor-element elementor-element-d8cbe35 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="d8cbe35" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<span className="elementor-heading-title elementor-size-default">What We Do</span>				</div>
      				</div>
      				<div className="elementor-element elementor-element-cfb0036 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="cfb0036" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Building Wealth Through Strategic Real Estate</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-be96f15 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="be96f15" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>We do not simply sell properties. We help clients build wealth through real estate. Our Real Estate Investment Advisory practice exists to create, preserve, and grow wealth through strategic real estate investments, supporting HNIs, NRIs, family offices, and institutional investors with advisory that is independent and research led.</p><p>Every engagement begins with your objectives, risk profile, and existing holdings. From asset allocation and diversification to acquisition strategy, portfolio review, and exit strategy planning, our recommendations are grounded in independent research and data driven analysis across India, the UAE, and international markets.</p>								</div>
      				</div>
      				</div>
      					</div>
      				</div>
      <div className="elementor-element elementor-element-34d8a29 e-flex e-con-boxed e-con e-parent" data-id="34d8a29" data-element_type="container" data-e-type="container">
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-df7ef47 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="df7ef47" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":0}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-c994878 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="c994878" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-ed2957f elementor-widget elementor-widget-heading" data-id="ed2957f" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Investment Advisory &amp; Portfolio Strategy</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-82ca797 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="82ca797" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-88f04bb vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="88f04bb" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-08aba80 elementor-widget elementor-widget-heading" data-id="08aba80" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Wealth Planning, Diversification, &amp; Asset Allocation</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-3dc369c elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="3dc369c" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-b0fc86b vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="b0fc86b" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-7607bdf elementor-widget elementor-widget-heading" data-id="7607bdf" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Cross Border Investments Across India &amp; UAE</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-866b83f elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="866b83f" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":150}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-3b4cf36 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="3b4cf36" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-30dbc71 elementor-widget elementor-widget-heading" data-id="30dbc71" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">HNI, NRI, &amp; Family Office Advisory</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-0b9e57b elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="0b9e57b" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":0}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-962f46f vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="962f46f" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-0a15472 elementor-widget elementor-widget-heading" data-id="0a15472" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Commercial &amp; Luxury Residential Advisory</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-a66e626 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="a66e626" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-2fbbd22 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="2fbbd22" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-2ed6274 elementor-widget elementor-widget-heading" data-id="2ed6274" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Risk &amp; Exit Strategy Planning</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-c6c1626 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="c6c1626" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      				<div className="elementor-element elementor-element-bfa456c elementor-widget-tablet__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="bfa456c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Speak with Our Advisory Team: {vxnOffice('dubai')!.phone}</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-7d996c4 vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="7d996c4" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      				<div className="elementor-widget-container">
      									<div className="elementor-button-wrapper">
      					<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/free-consultation/')}>
      						<span className="elementor-button-content-wrapper">
      						<span className="elementor-button-icon">
      				<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i>			</span>
      									<span className="elementor-button-text">Book a Consultation</span>
      					</span>
      					</a>
      				</div>
      								</div>
      				</div>
      				</div>
      					</div>
      				</div>
      <div className="elementor-element elementor-element-b224b6e e-con-full e-flex e-con e-parent" data-id="b224b6e" data-element_type="container" data-e-type="container">
      		<div className="elementor-element elementor-element-a2edd9c e-flex e-con-boxed e-con e-child" data-id="a2edd9c" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-a48add6 e-con-full e-flex e-con e-child" data-id="a48add6" data-element_type="container" data-e-type="container">
      				<div className="elementor-element elementor-element-a2ca594 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="a2ca594" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<span className="elementor-heading-title elementor-size-default">Our Process</span>				</div>
      				</div>
      				<div className="elementor-element elementor-element-5b29a2b elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="5b29a2b" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Our Advisory Engagement Process</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-79a44d0 elementor-invisible animated-fast elementor-widget elementor-widget-text-editor" data-id="79a44d0" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":100}"} data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>We advise clients across India and the UAE, with cross border capabilities connecting India and the UAE for international investors. Engagements are delivered through in-person meetings, calls, and secure digital collaboration to suit each client.</p>								</div>
      				</div>
      		<div className="elementor-element elementor-element-196f607 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="196f607" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":150}"}>
      				<div className="elementor-element elementor-element-3e87e0b elementor-widget elementor-widget-heading" data-id="3e87e0b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Initial Consultation and Objectives</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-3c6bc03 elementor-widget elementor-widget-text-editor" data-id="3c6bc03" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Understanding your goals, portfolio, and risk profile</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-fda64bf elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="fda64bf" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":200}"}>
      				<div className="elementor-element elementor-element-72375f6 elementor-widget elementor-widget-heading" data-id="72375f6" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Research</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-4a08358 elementor-widget elementor-widget-text-editor" data-id="4a08358" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Independent market analysis, risk assessment, and key insights</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-776e1a9 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="776e1a9" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":250}"}>
      				<div className="elementor-element elementor-element-7fd9d68 elementor-widget elementor-widget-heading" data-id="7fd9d68" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Strategy</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-16566e3 elementor-widget elementor-widget-text-editor" data-id="16566e3" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Crafting a tailored investment strategy</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-44d0de5 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="44d0de5" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":300}"}>
      				<div className="elementor-element elementor-element-ac29bbf elementor-widget elementor-widget-heading" data-id="ac29bbf" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Execute</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-d7566a7 elementor-widget elementor-widget-text-editor" data-id="d7566a7" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Implementing the strategy with discipline and focus</p>								</div>
      				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-5cd74fe e-con-full e-flex e-con e-child" data-id="5cd74fe" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      		<div className="elementor-element elementor-element-c7a32e2 e-con-full e-flex e-con e-child" data-id="c7a32e2" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      				<div className="elementor-element elementor-element-32be80f elementor-widget elementor-widget-template" data-id="32be80f" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      </div>
      <div data-elementor-type="wp-page" data-elementor-id="248" className="elementor elementor-248" data-elementor-post-type="page">
      <div className="elementor-element elementor-element-c1904cb e-flex e-con-boxed e-con e-parent" data-id="c1904cb" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"video\",\"background_play_on_mobile\":\"yes\",\"background_video_link\":\"https:\\/\\/www.youtube.com\\/watch?v=w2q8RKILCgk\"}"}>
      									<div className="e-con-inner">
      										<div className="elementor-background-video-container">
      											<div className="elementor-background-video-embed" role="presentation"></div>
      										</div>
      										<div className="elementor-element elementor-element-40e616d e-con-full blur-background e-flex e-con e-child" data-id="40e616d" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-2c91c18 e-con-full e-flex e-con e-child" data-id="2c91c18" data-element_type="container" data-e-type="container">
      												<div className="elementor-element elementor-element-32d8a85 elementor-widget elementor-widget-heading" data-id="32d8a85" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h3 className="elementor-heading-title elementor-size-default">Discuss Your Next Investment Decision</h3>
      													</div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-f4f63f3 e-con-full e-flex e-con e-child" data-id="f4f63f3" data-element_type="container" data-e-type="container">
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-cf8b352 vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="cf8b352" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-button-wrapper">
      															<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/contact/')}>
      																<span className="elementor-button-content-wrapper">
      																	<span className="elementor-button-icon">
      																		<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      																	<span className="elementor-button-text">Contact Us</span>
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

      																	<input type="hidden" name="queried_id" value="17" />

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
      		</article>
      	</div>{/* #main */}
      </div>
    </>
  );
}
