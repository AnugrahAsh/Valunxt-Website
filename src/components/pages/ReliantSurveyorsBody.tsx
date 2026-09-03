/**
 * /our-group/reliant-surveyors/ — page body.
 *
 * Port of our-group/reliant-surveyors/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style
 * objects) and internal links going through rurl() so they stay in the
 * visitor's market.
 */
import { BASE, rurl } from '@/lib/region';
import { vxnOffice } from '@/lib/site-data';
import type { PageConfig } from '@/lib/page-config';

export default function ReliantSurveyorsBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <>

      <style id="reliant-surveyors-section-gap" dangerouslySetInnerHTML={{ __html: `
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
      <div className="elementor-element elementor-element-c4d353f e-flex e-con-boxed e-con e-parent vxn-hero--reliant" data-id="c4d353f" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      				<div className="e-con-inner">
      			<div className="elementor-element elementor-element-6200b41 e-con-full e-flex e-con e-child" data-id="6200b41" data-element_type="container" data-e-type="container">
      			<div className="elementor-element elementor-element-7b36cfb e-con-full e-flex e-con e-child" data-id="7b36cfb" data-element_type="container" data-e-type="container">
      					<div className="elementor-element elementor-element-c739b5b elementor-widget elementor-widget-heading" data-id="c739b5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      					<div className="elementor-widget-container">
      						<span className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/')}>Home</a></span>				</div>
      					</div>
      					<div className="elementor-element elementor-element-1707a75 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1707a75" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      					<div className="elementor-widget-container">
      						<span className="elementor-heading-title elementor-size-default">&gt; Reliant Surveyors</span>				</div>
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
      						<h1 className="elementor-heading-title elementor-size-default">Reliant Surveyors</h1>				</div>
      					</div>
      					<div className="elementor-element elementor-element-44a2511 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      					<div className="elementor-widget-container">
      						Valuation, advisory, research, and consultancy — part of the VALUNXT group of companies.				</div>
      					</div>
      					</div>
      					</div>
      						</div>
      					</div>
      </div>
      <div data-elementor-type="wp-page" data-elementor-id="254" className="elementor elementor-254" data-elementor-post-type="page">
      <div className="elementor-element elementor-element-3bda2740 e-flex e-con-boxed e-con e-parent" data-id="3bda2740" data-element_type="container" data-e-type="container">
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-44953878 e-con-full e-flex e-con e-child" data-id="44953878" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      		<div className="elementor-element elementor-element-49381026 e-con-full e-flex e-con e-child" data-id="49381026" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      				<div className="elementor-element elementor-element-2e052931 elementor-widget elementor-widget-template" data-id="2e052931" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      		<div className="elementor-element elementor-element-356d69e3 e-con-full e-flex e-con e-child" data-id="356d69e3" data-element_type="container" data-e-type="container">
      				<div className="elementor-element elementor-element-310b5471 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="310b5471" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<span className="elementor-heading-title elementor-size-default">What We Do</span>				</div>
      				</div>
      				<div className="elementor-element elementor-element-fd96f7f elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="fd96f7f" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Research That Strengthens Decisions</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-3bf29ea3 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="3bf29ea3" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Our research and intelligence capabilities combine market analysis, valuation insight, economic context, and data analytics to help clients assess opportunities with greater clarity. Every engagement begins with the questions that matter to the investment decision at hand, grounded in independent, data driven analysis rather than a one-size-fits-all view.</p><p>From feasibility studies and highest and best use analysis to demand and supply assessment and market forecasting, our work is structured around the decision it supports. We do not simply publish reports. We deliver investment intelligence&#8212;findings that investors, developers, and institutions across India and the UAE can act on with confidence.</p>								</div>
      				</div>
      				</div>
      					</div>
      				</div>
      <div className="elementor-element elementor-element-47155dfb e-flex e-con-boxed e-con e-parent" data-id="47155dfb" data-element_type="container" data-e-type="container">
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-11884c74 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="11884c74" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":0}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-7fb5cd24 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="7fb5cd24" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-40af18d7 elementor-widget elementor-widget-heading" data-id="40af18d7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Market Intelligence &amp; Investment Research</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-50616c1d elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="50616c1d" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-4af25339 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="4af25339" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-490ca7ac elementor-widget elementor-widget-heading" data-id="490ca7ac" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Valuation Intelligence &amp; Development Advisory</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-6574b3eb elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="6574b3eb" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-9b783e6 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="9b783e6" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-30c2404e elementor-widget elementor-widget-heading" data-id="30c2404e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Feasibility &amp; Highest and Best Use Studies</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-6fbcd50d elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="6fbcd50d" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":150}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-50f7731c vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="50f7731c" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-170328d8 elementor-widget elementor-widget-heading" data-id="170328d8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Market Forecasting &amp; Economic Research</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-27ce5b2a elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="27ce5b2a" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":0}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-53dbd40d vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="53dbd40d" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-66f47fe4 elementor-widget elementor-widget-heading" data-id="66f47fe4" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Location Intelligence &amp; Risk Assessment</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-bc0e6a2 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="bc0e6a2" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-4e26a3d8 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="4e26a3d8" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-59c80a75 elementor-widget elementor-widget-heading" data-id="59c80a75" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Portfolio Analytics &amp; Scorecards</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-3aaed8e0 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="3aaed8e0" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      				<div className="elementor-element elementor-element-311169da elementor-widget-tablet__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="311169da" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Speak with Our Advisory Team on {vxnOffice('dubai')!.phone}</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-48c06d06 vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="48c06d06" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
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
      <div className="elementor-element elementor-element-11b42e58 e-con-full e-flex e-con e-parent" data-id="11b42e58" data-element_type="container" data-e-type="container">
      		<div className="elementor-element elementor-element-2b8d296b e-flex e-con-boxed e-con e-child" data-id="2b8d296b" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-3fef7bed e-con-full e-flex e-con e-child" data-id="3fef7bed" data-element_type="container" data-e-type="container">
      				<div className="elementor-element elementor-element-351ffe11 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="351ffe11" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<span className="elementor-heading-title elementor-size-default">Our Process</span>				</div>
      				</div>
      				<div className="elementor-element elementor-element-5e74a39b elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="5e74a39b" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Our Advisory Engagement Process</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-29b5e906 elementor-invisible animated-fast elementor-widget elementor-widget-text-editor" data-id="29b5e906" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":100}"} data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>We support investors, developers, and institutions across India, the UAE, and international markets. Our engagement model is flexible, combining structured research deliverables with ongoing advisory conversations, briefings, and data driven updates.</p>								</div>
      				</div>
      		<div className="elementor-element elementor-element-2ab9dfc1 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="2ab9dfc1" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":150}"}>
      				<div className="elementor-element elementor-element-2067551 elementor-widget elementor-widget-heading" data-id="2067551" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Initial Consultation and Scoping</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-15bcd281 elementor-widget elementor-widget-text-editor" data-id="15bcd281" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Understanding your investment objectives</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-6ed5c612 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="6ed5c612" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":200}"}>
      				<div className="elementor-element elementor-element-7293b296 elementor-widget elementor-widget-heading" data-id="7293b296" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Discovery</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-9d27f0d elementor-widget elementor-widget-text-editor" data-id="9d27f0d" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Market analysis, valuation insight, and data gathering</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-20674be elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="20674be" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":250}"}>
      				<div className="elementor-element elementor-element-42f52363 elementor-widget elementor-widget-heading" data-id="42f52363" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Intelligence</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-281c21fb elementor-widget elementor-widget-text-editor" data-id="281c21fb" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Turning analysis into investment intelligence</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-7e472958 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="7e472958" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":300}"}>
      				<div className="elementor-element elementor-element-3d87cb47 elementor-widget elementor-widget-heading" data-id="3d87cb47" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Advisory</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-6eee1fb7 elementor-widget elementor-widget-text-editor" data-id="6eee1fb7" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Presenting findings that support confident decisions</p>								</div>
      				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-521c73b2 e-con-full e-flex e-con e-child" data-id="521c73b2" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      		<div className="elementor-element elementor-element-576615a2 e-con-full e-flex e-con e-child" data-id="576615a2" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      				<div className="elementor-element elementor-element-461fd749 elementor-widget elementor-widget-template" data-id="461fd749" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      <div data-elementor-type="wp-page" data-elementor-id="17" className="elementor elementor-17" data-elementor-post-type="page">
      <div className="elementor-element elementor-element-ffe4657 e-flex e-con-boxed e-con e-parent" data-id="ffe4657" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-54101de e-con-full e-flex e-con e-child" data-id="54101de" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-eec9a88 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="eec9a88" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<span className="elementor-heading-title elementor-size-default">About Us</span>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-97e1c85 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="97e1c85" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h2 className="elementor-heading-title elementor-size-default">Intelligence Behind Every Investment Decision</h2>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-3d29988 elementor-invisible elementor-widget-tablet__width-initial elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="3d29988" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":200}"} data-widget_type="heading.default">
      									<div className="elementor-widget-container">
      										<span className="elementor-heading-title elementor-size-default">An integrated real estate wealth and investment intelligence group serving investors, developers, institutions, and businesses.</span>
      									</div>
      								</div>
      							</div>
      						</div>
      <div className="elementor-element elementor-element-05fb46d e-flex e-con-boxed e-con e-parent" data-id="05fb46d" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-76d6fd8 e-con-full e-flex e-con e-child" data-id="76d6fd8" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      								</div>
      								<div className="elementor-element elementor-element-ff6490f e-con-full e-flex e-con e-child" data-id="ff6490f" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-01bf392 e-con-full blur-background e-flex e-con e-child" data-id="01bf392" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      										<div className="elementor-element elementor-element-402605c e-con-full e-flex e-con e-child" data-id="402605c" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-b13d4b0 elementor-widget elementor-widget-heading" data-id="b13d4b0" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<h5 className="elementor-heading-title elementor-size-default">Planning an Investment or a Project? </h5>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-3c3cc14 elementor-widget elementor-widget-heading" data-id="3c3cc14" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">Connect with our advisory team to explore real estate wealth, capital, research, and technology opportunities.</span>
      												</div>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-87af8c8 e-con-full e-flex e-con e-child" data-id="87af8c8" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      											<a className="elementor-element elementor-element-374d947 e-con-full e-flex e-con e-child" data-id="374d947" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"} href={`tel:${vxnOffice('dubai')!.tel}`}>
      												<div className="elementor-element elementor-element-b40313c elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box" data-id="b40313c" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-icon-box-wrapper">

      															<div className="elementor-icon-box-icon">
      																<span className="elementor-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-phone"></i> </span>
      															</div>

      															<div className="elementor-icon-box-content">

      																<h6 className="elementor-icon-box-title">
      																	<span>
      																		Call us at: </span>
      																</h6>

      																<p className="elementor-icon-box-description">
      																	{vxnOffice('dubai')!.phone} </p>

      															</div>

      														</div>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-b463c00 elementor-view-default elementor-widget elementor-widget-icon" data-id="b463c00" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-icon-wrapper">
      															<div className="elementor-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i>
      															</div>
      														</div>
      													</div>
      												</div>
      											</a>
      											<div className="elementor-element elementor-element-f3ce20a elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="f3ce20a" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-divider">
      														<span className="elementor-divider-separator">
      														</span>
      													</div>
      												</div>
      											</div>
      											<a className="elementor-element elementor-element-2d76964 e-con-full e-flex e-con e-child" data-id="2d76964" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"} href="mailto:advisory@valunxtcapital.com">
      												<div className="elementor-element elementor-element-b9673ed elementor-view-stacked elementor-shape-rounded elementor-position-inline-start elementor-widget-mobile__width-initial elementor-widget elementor-widget-icon-box" data-id="b9673ed" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-icon-box-wrapper">

      															<div className="elementor-icon-box-icon">
      																<span className="elementor-icon">
      																	<i aria-hidden="true" className="vamtamtheme- vamtam-theme-location"></i> </span>
      															</div>

      															<div className="elementor-icon-box-content">

      																<h6 className="elementor-icon-box-title">
      																	<span>
      																		Email us at: </span>
      																</h6>

      																<p className="elementor-icon-box-description">
      																	advisory@valunxtcapital.com </p>

      															</div>

      														</div>
      													</div>
      												</div>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-c264aaa elementor-view-default elementor-widget elementor-widget-icon" data-id="c264aaa" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
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
      									<div className="elementor-element elementor-element-c3eedfc e-con-full animated-fast e-flex e-con e-child" data-id="c3eedfc" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\"}"}>
      										<div className="elementor-element elementor-element-c9694fb elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="c9694fb" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_mobile\":\"none\"}"}>
      											<div className="elementor-element elementor-element-2734fe6 elementor-widget elementor-widget-image" data-id="2734fe6" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
      												<div className="elementor-widget-container">
      													<img loading="lazy" decoding="async" width={190} height={38} src={`${BASE}/assets/content/uploads/logo/valunxt-white.svg`} className="attachment-medium size-medium vxn-logo" alt="VALUNXT Capital" />
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-aa46181 elementor-widget elementor-widget-heading" data-id="aa46181" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<h5 className="elementor-heading-title elementor-size-default">Schedule a Consultation</h5>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-0f759a4 elementor-invisible elementor-absolute animated-fast elementor-view-default elementor-widget elementor-widget-icon" data-id="0f759a4" data-element_type="widget" data-e-type="widget" data-settings={"{\"_position\":\"absolute\",\"_animation\":\"slideInLeft\",\"_animation_delay\":50}"} data-widget_type="icon.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-icon-wrapper">
      														<div className="elementor-icon">
      															<i aria-hidden="true" className="vamtamtheme- vamtam-theme-send"></i>
      														</div>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-8eea291 e-con-full e-flex e-con e-child" data-id="8eea291" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-5099fe1 elementor-invisible animated-fast elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="5099fe1" data-element_type="widget" data-e-type="widget" data-settings={"{\"button_width\":\"40\",\"step_next_label\":\"Next\",\"step_previous_label\":\"Previous\",\"_animation\":\"fadeIn\",\"step_type\":\"number_text\",\"step_icon_shape\":\"circle\"}"} data-widget_type="form.default">
      												<div className="elementor-widget-container">
      													<form className="elementor-form" method="post" name="New Form" aria-label="New Form">
      														<input type="hidden" name="post_id" value="17" />
      														<input type="hidden" name="form_id" value="5099fe1" />
      														<input type="hidden" name="referer_title" value="VALUNXT Capital" />

      														<input type="hidden" name="queried_id" value="17" />

      														<div className="elementor-form-fields-wrapper elementor-labels-above">
      								<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-entrepreneurs_full_name elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-entrepreneurs_full_name" className="elementor-field-label">Full Name</label>
      									<input size={1} type="text" name="form_fields[entrepreneurs_full_name]" id="form-field-entrepreneurs_full_name" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Full Name" required />
      								</div>
      								<div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-entrepreneurs_email elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-entrepreneurs_email" className="elementor-field-label">Email</label>
      									<input size={1} type="email" name="form_fields[entrepreneurs_email]" id="form-field-entrepreneurs_email" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required />
      								</div>
      								<div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-entrepreneurs_phone elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-entrepreneurs_phone" className="elementor-field-label">Phone No</label>
      									<input size={1} type="tel" name="form_fields[entrepreneurs_phone]" id="form-field-entrepreneurs_phone" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Phone No" required />
      								</div>
      								<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-entrepreneurs_company elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-entrepreneurs_company" className="elementor-field-label">Company Name</label>
      									<input size={1} type="text" name="form_fields[entrepreneurs_company]" id="form-field-entrepreneurs_company" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Company Name" required />
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
      											<div className="elementor-element elementor-element-910203c elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="910203c" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      												<div className="elementor-widget-container">
      													<div className="elementor-divider">
      														<span className="elementor-divider-separator">
      														</span>
      													</div>
      												</div>
      											</div>
      											<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-bf7faf1 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-text-editor" data-id="bf7faf1" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      												<div className="elementor-widget-container">
      													<p>By submitting this form you agree to our <a href={rurl(region, '/privacy-policy/')}>Privacy Policy</a>. VALUNXT Capital may contact you by email or phone regarding your enquiry.</p>
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
