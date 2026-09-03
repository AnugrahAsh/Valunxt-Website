/**
 * /our-group/houzzhunt-mortgage/ — page body.
 *
 * Port of our-group/houzzhunt-mortgage/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style
 * objects) and internal links going through rurl() so they stay in the
 * visitor's market.
 */
import { BASE, rurl } from '@/lib/region';
import { vxnOffice } from '@/lib/site-data';
import type { PageConfig } from '@/lib/page-config';

export default function HouzzhuntMortgageBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <>

      <style id="houzzhunt-mortgage-section-gap" dangerouslySetInnerHTML={{ __html: `
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
      <div className="elementor-element elementor-element-c4d353f e-flex e-con-boxed e-con e-parent vxn-hero--houzzhunt-mortgage" data-id="c4d353f" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      				<div className="e-con-inner">
      			<div className="elementor-element elementor-element-6200b41 e-con-full e-flex e-con e-child" data-id="6200b41" data-element_type="container" data-e-type="container">
      			<div className="elementor-element elementor-element-7b36cfb e-con-full e-flex e-con e-child" data-id="7b36cfb" data-element_type="container" data-e-type="container">
      					<div className="elementor-element elementor-element-c739b5b elementor-widget elementor-widget-heading" data-id="c739b5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      					<div className="elementor-widget-container">
      						<span className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/')}>Home</a></span>				</div>
      					</div>
      					<div className="elementor-element elementor-element-1707a75 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1707a75" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      					<div className="elementor-widget-container">
      						<span className="elementor-heading-title elementor-size-default">&gt; HouzzHunt Mortgage</span>				</div>
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
      						<h1 className="elementor-heading-title elementor-size-default">HouzzHunt Mortgage</h1>				</div>
      					</div>
      					<div className="elementor-element elementor-element-44a2511 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      					<div className="elementor-widget-container">
      						Mortgage advisory and investment finance — part of the VALUNXT group of companies.				</div>
      					</div>
      					</div>
      					</div>
      						</div>
      					</div>
      </div>
      <div data-elementor-type="wp-page" data-elementor-id="252" className="elementor elementor-252" data-elementor-post-type="page">
      <div className="elementor-element elementor-element-6394f614 e-flex e-con-boxed e-con e-parent" data-id="6394f614" data-element_type="container" data-e-type="container">
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-1272eef0 e-con-full e-flex e-con e-child" data-id="1272eef0" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      		<div className="elementor-element elementor-element-7c6b0906 e-con-full e-flex e-con e-child" data-id="7c6b0906" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      				<div className="elementor-element elementor-element-a7308ba elementor-widget elementor-widget-template" data-id="a7308ba" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      		<div className="elementor-element elementor-element-34fcd8fb e-con-full e-flex e-con e-child" data-id="34fcd8fb" data-element_type="container" data-e-type="container">
      				<div className="elementor-element elementor-element-139182ea elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="139182ea" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<span className="elementor-heading-title elementor-size-default">What We Do</span>				</div>
      				</div>
      				<div className="elementor-element elementor-element-2d0c71bd elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="2d0c71bd" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Independent Capital Advisory Solutions</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-5a2f9ef8 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-text-editor" data-id="5a2f9ef8" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":200}"} data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Our capital advisory practice helps developers and businesses raise, structure, and optimise capital across India, the UAE, and international markets. We take the time to understand each client’s objectives, financial position, and project fundamentals, asking the right questions before recommending any structure. Rather than a one-size-fits-all approach, our advice is tailored to each mandate.</p><p>Considering factors such as project stage, cash flow profile, risk appetite, and long term objectives, we develop financing strategies designed for durability. We combine financial modelling, capital structuring, and investment due diligence—and we support clients through execution, from investor discussions to completion.</p>								</div>
      				</div>
      				</div>
      					</div>
      				</div>
      <div className="elementor-element elementor-element-3fc2ab1f e-flex e-con-boxed e-con e-parent" data-id="3fc2ab1f" data-element_type="container" data-e-type="container">
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-37f652da elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="37f652da" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":0}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-47ed77fc vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="47ed77fc" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-14e39d30 elementor-widget elementor-widget-heading" data-id="14e39d30" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Project Funding &amp; Development Finance</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-16fd4fc1 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="16fd4fc1" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-43e92132 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="43e92132" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-6634362b elementor-widget elementor-widget-heading" data-id="6634362b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Debt, Equity, &amp; Capital Structuring</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-4cdb5227 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="4cdb5227" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-4a949b8b vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="4a949b8b" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-4a2ed618 elementor-widget elementor-widget-heading" data-id="4a2ed618" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Joint Venture Advisory &amp; Investor Syndication</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-4cc66eb2 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="4cc66eb2" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":150}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-4d2843db vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="4d2843db" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-2a193889 elementor-widget elementor-widget-heading" data-id="2a193889" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Institutional &amp; Private Capital</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-49674711 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="49674711" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":0}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-277b6666 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="277b6666" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-54869b03 elementor-widget elementor-widget-heading" data-id="54869b03" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">Growth Capital &amp; Fundraising Advisory</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-4b1a12d5 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="4b1a12d5" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-76e98800 vamtam-has-parent-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="76e98800" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
      				<div className="elementor-widget-container">
      							<div className="elementor-icon-wrapper">
      			<div className="elementor-icon">
      			<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34"><g fill="none" fillRule="evenodd"><circle fill="#F6F4EF" cx="17" cy="17" r="11.33" /><g fill="#0053B7"><path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" /><path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" /></g></g></svg>			</div>
      		</div>
      						</div>
      				</div>
      				<div className="elementor-element elementor-element-4eaa4edc elementor-widget elementor-widget-heading" data-id="4eaa4edc" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h4 className="elementor-heading-title elementor-size-default">M&amp;A &amp; Due Diligence</h4>				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-3e029a08 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="3e029a08" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      				<div className="elementor-element elementor-element-317fc8ad elementor-widget-tablet__width-inherit elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="317fc8ad" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Speak with Our Advisory Team: {vxnOffice('dubai')!.phone}</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-590800b2 vamtam-icon-pos-row-reverse elementor-widget elementor-widget-button" data-id="590800b2" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
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
      <div className="elementor-element elementor-element-5ee64661 e-con-full e-flex e-con e-parent" data-id="5ee64661" data-element_type="container" data-e-type="container">
      		<div className="elementor-element elementor-element-704f4772 e-flex e-con-boxed e-con e-child" data-id="704f4772" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      					<div className="e-con-inner">
      		<div className="elementor-element elementor-element-15e71f28 e-con-full e-flex e-con e-child" data-id="15e71f28" data-element_type="container" data-e-type="container">
      				<div className="elementor-element elementor-element-4a5039cf elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="4a5039cf" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<span className="elementor-heading-title elementor-size-default">Our Process</span>				</div>
      				</div>
      				<div className="elementor-element elementor-element-12c07c66 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="12c07c66" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h2 className="elementor-heading-title elementor-size-default">Our Advisory Engagement Process</h2>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-726ea8e8 elementor-invisible animated-fast elementor-widget elementor-widget-text-editor" data-id="726ea8e8" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\",\"_animation_delay\":100}"} data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>We advise clients across India and the UAE, with cross border capabilities for international mandates. Our flexible approach allows us to work with clients through in-person meetings, calls, video conferences, and structured written updates.</p>								</div>
      				</div>
      		<div className="elementor-element elementor-element-2c05a9da elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="2c05a9da" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":150}"}>
      				<div className="elementor-element elementor-element-3295bd69 elementor-widget elementor-widget-heading" data-id="3295bd69" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Initial Consultation and Review</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-401bf76a elementor-widget elementor-widget-text-editor" data-id="401bf76a" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Clarifying your objectives and capital needs</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-353ced69 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="353ced69" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":200}"}>
      				<div className="elementor-element elementor-element-486cc2b9 elementor-widget elementor-widget-heading" data-id="486cc2b9" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Assessment</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-53728a28 elementor-widget elementor-widget-text-editor" data-id="53728a28" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Financial review, market context, and structuring options</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-377e9cbf elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="377e9cbf" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":250}"}>
      				<div className="elementor-element elementor-element-42b05908 elementor-widget elementor-widget-heading" data-id="42b05908" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Structure</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-acc2e12 elementor-widget elementor-widget-text-editor" data-id="acc2e12" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Designing a capital plan aligned with objectives</p>								</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-44252d35 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="44252d35" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":300}"}>
      				<div className="elementor-element elementor-element-29e99a0b elementor-widget elementor-widget-heading" data-id="29e99a0b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      				<div className="elementor-widget-container">
      					<h5 className="elementor-heading-title elementor-size-default">Execution</h5>				</div>
      				</div>
      				<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-38c0313c elementor-widget elementor-widget-text-editor" data-id="38c0313c" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      				<div className="elementor-widget-container">
      									<p>Supporting the mandate through to completion</p>								</div>
      				</div>
      				</div>
      				</div>
      		<div className="elementor-element elementor-element-1a75c5fa e-con-full e-flex e-con e-child" data-id="1a75c5fa" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      		<div className="elementor-element elementor-element-37769011 e-con-full e-flex e-con e-child" data-id="37769011" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      				<div className="elementor-element elementor-element-35098be4 elementor-widget elementor-widget-template" data-id="35098be4" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      <div className="elementor-element elementor-element-611b40a e-flex e-con-boxed e-con e-parent" data-id="611b40a" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-6db8f15 e-con-full e-flex e-con e-child" data-id="6db8f15" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-636c472 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="636c472" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h2 className="elementor-heading-title elementor-size-default">Every Investment Decision Counts. <br />
      												We Bring Intelligence to Each One.</h2>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-1f79b02 e-con-full e-flex e-con e-child" data-id="1f79b02" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-c430c42 e-con-full blur-background e-flex e-con e-child" data-id="c430c42" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      										<div className="elementor-element elementor-element-31a55f1 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="31a55f1" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\"}"}>
      											<div className="elementor-element elementor-element-5595524 elementor-widget elementor-widget-heading" data-id="5595524" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">One Group.</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-faf4b53 elementor-widget elementor-widget-heading" data-id="faf4b53" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default"> 4</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-f84ad99 elementor-widget elementor-widget-heading" data-id="f84ad99" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">verticals working as one platform for your investments.</span>
      												</div>
      											</div>
      										</div>
      										<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-ca54716 elementor-invisible vamtam-icon-pos-row-reverse elementor-align-justify vamtam-content-align-space-between animated-fast elementor-widget elementor-widget-button" data-id="ca54716" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="button.default">
      											<div className="elementor-widget-container">
      												<div className="elementor-button-wrapper">
      													<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/services/')}>
      														<span className="elementor-button-content-wrapper">
      															<span className="elementor-button-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      															<span className="elementor-button-text">Explore Our Capabilities</span>
      														</span>
      													</a>
      												</div>
      											</div>
      										</div>
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
      								<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-special_full_name elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-special_full_name" className="elementor-field-label">Full Name</label>
      									<input size={1} type="text" name="form_fields[special_full_name]" id="form-field-special_full_name" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Full Name" required />
      								</div>
      								<div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-special_email elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-special_email" className="elementor-field-label">Email</label>
      									<input size={1} type="email" name="form_fields[special_email]" id="form-field-special_email" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required />
      								</div>
      								<div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-special_phone elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-special_phone" className="elementor-field-label">Phone No</label>
      									<input size={1} type="tel" name="form_fields[special_phone]" id="form-field-special_phone" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Phone No" required />
      								</div>
      								<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-special_company elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-special_company" className="elementor-field-label">Company Name</label>
      									<input size={1} type="text" name="form_fields[special_company]" id="form-field-special_company" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Company Name" required />
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
