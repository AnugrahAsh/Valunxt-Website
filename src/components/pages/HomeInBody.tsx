/**
 * /en-in/ — the India home page body.
 *
 * Port of en-in/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style objects)
 * and internal links going through rurl() so they stay in the visitor's market.
 */
import { rimg } from '@/lib/region-assets';
import { BASE, rurl } from '@/lib/region';
import { vxnMarkets, vxnOffice } from '@/lib/site-data';
import type { PageConfig } from '@/lib/page-config';

export default function HomeInBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <>

      <style id="home-icon-premium" dangerouslySetInnerHTML={{ __html: `
      	/* Premium uniform icon treatment: a 40px precision glyph centred in a
      	   72px soft tile — identical size in every section (the raw icons were
      	   rendering at 50/76/85px depending on the widget, which looked broken).
      	   The tile also isolates the glyph from the gold card-hover background,
      	   so the gold accents stay gold everywhere. */
      	svg.vxn-icon,
      	#main-content img[src*="/assets/icons/"] {
      		width: 72px !important;
      		height: 72px !important;
      		box-sizing: border-box;
      		padding: 16px;
      		background: #FBFAF7;
      		border: 1px solid rgba(14, 53, 95, .08);
      		border-radius: 16px;
      		transition: background .25s ease, border-color .25s ease;
      	}

      	:is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c,
      		.elementor-element-dbd27b0, .elementor-element-42a3d07, .elementor-element-d043720):hover svg.vxn-icon {
      		background: #ffffff;
      		border-color: rgba(14, 53, 95, .14);
      	}

      	/* ---- "Who We Are" cards refine (home page only) ----
      	   Client feedback: cards + icons too large; add a smooth gradient hover
      	   with text/icon colours adapting. Scoped inline so the same section on
      	   /group/ is unaffected. */

      	/* 1. Tighter cards: drop the 300px min-height, reduce inner gap/padding. */
      	.elementor-2190 .elementor-element.elementor-element-a546be9,
      	.elementor-2190 .elementor-element.elementor-element-ba03ed4,
      	.elementor-2190 .elementor-element.elementor-element-1f1d60c {
      		--min-height: 0px;
      		--gap: 16px 16px;
      		--row-gap: 16px;
      		--column-gap: 16px;
      		--padding-top: 24px;
      		--padding-bottom: 26px;
      		--padding-left: 24px;
      		--padding-right: 24px;
      		position: relative;
      		overflow: hidden;
      		transition: transform .4s cubic-bezier(.4, 0, .2, 1),
      			box-shadow .4s cubic-bezier(.4, 0, .2, 1),
      			border-color .4s ease;
      	}

      	/* 2. Smaller icon tile in this section: 44px tile / 24px glyph. */
      	.elementor-2190 :is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c) svg.vxn-icon {
      		width: 44px !important;
      		height: 44px !important;
      		padding: 10px;
      		border-radius: 10px;
      	}

      	/* 2b. Narrower card row, centred, with balanced gaps; less air under the
      	   section heading. */
      	.elementor-2190 .elementor-element.elementor-element-55c2844 {
      		width: 100%;
      		max-width: 1080px;
      		margin-left: auto;
      		margin-right: auto;
      		--margin-left: auto;
      		--margin-right: auto;
      		--gap: 24px 24px;
      		--row-gap: 24px;
      		--column-gap: 24px;
      	}

      	.elementor-2190 .elementor-element.elementor-element-b1b1408>.elementor-widget-container {
      		margin: 0 0 36px 0;
      	}

      	/* 3. Type scale to match the smaller cards. */
      	.elementor-2190 :is(.elementor-element-c2279a0, .elementor-element-9fb509f, .elementor-element-df9fa99) .elementor-heading-title {
      		font-size: 22px;
      		line-height: 1.3;
      		transition: color .45s ease;
      	}

      	.elementor-2190 :is(.elementor-element-d9c7c2f, .elementor-element-e59c794, .elementor-element-4a32433) .elementor-widget-container {
      		font-size: 15px;
      		line-height: 1.7;
      		transition: color .45s ease;
      	}

      	/* 4. Gradient hover: overlay fades in (gradients can't transition directly),
      	   card lifts, text switches to ivory, icon tile stays light so the navy/gold
      	   glyph keeps contrast. */
      	.elementor-2190 :is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c)::before {
      		content: "";
      		position: absolute;
      		inset: 0;
      		z-index: 0;
      		border-radius: inherit;
      		background: linear-gradient(135deg, #0053B7 0%, #16344A 55%, #0E355F 100%);
      		opacity: 0;
      		transition: opacity .45s cubic-bezier(.4, 0, .2, 1);
      		pointer-events: none;
      	}

      	.elementor-2190 :is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c)>.elementor-element {
      		position: relative;
      		z-index: 1;
      	}

      	.elementor-2190 :is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c):hover::before {
      		opacity: 1;
      	}

      	/* Neutralise the theme's flat gold hover so only the gradient shows. */
      	.elementor-2190 .elementor-element.elementor-element-a546be9:hover,
      	.elementor-2190 .elementor-element.elementor-element-ba03ed4:hover,
      	.elementor-2190 .elementor-element.elementor-element-1f1d60c:hover {
      		background-color: var(--e-global-color-vamtam_accent_5);
      		border-color: #0E355F;
      		transform: translateY(-4px);
      		box-shadow: 0 16px 32px rgba(14, 53, 95, .18);
      	}

      	.elementor-2190 :is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c):hover .elementor-heading-title {
      		color: #FBFAF7;
      	}

      	.elementor-2190 :is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c):hover .elementor-widget-text-editor .elementor-widget-container {
      		color: rgba(248, 247, 243, .85);
      	}

      	@media (prefers-reduced-motion: reduce) {

      		.elementor-2190 :is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c),
      		.elementor-2190 :is(.elementor-element-a546be9, .elementor-element-ba03ed4, .elementor-element-1f1d60c)::before {
      			transition: none;
      		}
      	}

      	/* ---- "Our Platform" stat cards (home page only) ----
      	   Sticky overlap animation kept; numbers run 1-2-3-4, text left aligned,
      	   and an image fills the blank area below the text in each card. */
      	.elementor-17 .elementor-element:is(.elementor-element-e988fa2, .elementor-element-258db91, .elementor-element-1c92f80, .elementor-element-15cd221) {
      		--align-items: stretch;
      		--justify-content: flex-start;
      		--gap: 18px 18px;
      		--row-gap: 18px;
      		--column-gap: 18px;
      		--padding-top: 24px;
      		--padding-bottom: 24px;
      		--padding-left: 24px;
      		--padding-right: 24px;
      	}

      	/* Slightly shorter than the original 100vh so the stack scrolls faster. */
      	@media (min-width: 1025px) {
      		.elementor-17 .elementor-element:is(.elementor-element-e988fa2, .elementor-element-258db91, .elementor-element-1c92f80, .elementor-element-15cd221) {
      			--min-height: 80vh;
      		}
      	}

      	/* Stack order follows the new 1-2-3-4 sequence. */
      	.elementor-17 .elementor-element.elementor-element-e988fa2 {
      		--z-index: 1;
      	}

      	.elementor-17 .elementor-element.elementor-element-258db91 {
      		--z-index: 2;
      	}

      	.elementor-17 .elementor-element.elementor-element-1c92f80 {
      		--z-index: 3;
      	}

      	.elementor-17 .elementor-element.elementor-element-15cd221 {
      		--z-index: 4;
      	}

      	/* Header row: number | text, left aligned. */
      	.elementor-17 .elementor-element:is(.elementor-element-1b1c8e0, .elementor-element-ea7a11d, .elementor-element-5daff7c, .elementor-element-fbde264) {
      		--flex-direction: row;
      		--align-items: center;
      		--justify-content: flex-start;
      		--gap: 20px 20px;
      		--row-gap: 20px;
      		--column-gap: 20px;
      		width: 100%;
      		flex: 0 0 auto;
      	}

      	/* Numbers: calmer size, consistent column so 1/2/3/4 align. */
      	.elementor-17 .elementor-element:is(.elementor-element-fbcd209, .elementor-element-b2740db, .elementor-element-1c0c8c8, .elementor-element-4e5eacb) {
      		flex: 0 0 auto;
      	}

      	.elementor-17 .elementor-element:is(.elementor-element-fbcd209, .elementor-element-b2740db, .elementor-element-1c0c8c8, .elementor-element-4e5eacb) .elementor-heading-title {
      		font-size: 44px;
      		line-height: 1;
      		min-width: 44px;
      		text-align: left;
      	}

      	/* Text block takes the remaining row space, always left aligned. */
      	.elementor-17 .elementor-element:is(.elementor-element-a9f76d0, .elementor-element-2740aef, .elementor-element-953ffda, .elementor-element-7e45239) {
      		--width: auto;
      		--align-items: flex-start;
      		flex: 1 1 auto;
      		min-width: 0;
      		--padding-right: 0px;
      		--padding-left: 0px;
      	}

      	.elementor-17 .elementor-element:is(.elementor-element-e988fa2, .elementor-element-258db91, .elementor-element-1c92f80, .elementor-element-15cd221) .elementor-heading-title {
      		text-align: left;
      	}

      	/* Image fills the blank area below the text. */
      	.elementor-17 .vxn-stat-img {
      		width: 100%;
      		flex: 1 1 auto;
      		min-height: 180px;
      	}

      	.elementor-17 .vxn-stat-img img {
      		display: block;
      		width: 100%;
      		height: 100%;
      		min-height: 180px;
      		object-fit: cover;
      		border-radius: 10px;
      	}
      ` }} />
      <div id="main-content">

      	<div id="sub-header" className="layout-full elementor-page-title">
      		<div className="meta-header">
      		</div>
      	</div>

      	<div id="main" role="main" className="vamtam-main layout-full">
      		<div className="page-wrapper">
      			<article id="post-17" className="full post-17 page type-page status-publish hentry">
      				<div className="page-content clearfix the-content-parent">
      					<div data-elementor-type="wp-page" data-elementor-id="17" className="elementor elementor-17" data-elementor-post-type="page">
      						<div className="elementor-element elementor-element-926da5a e-flex e-con-boxed e-con e-parent" data-id="926da5a" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      								<video className="vxn-hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src={rimg(region, 'video/video.mp4')} type="video/mp4" /></video>
      								<span className="vxn-hero-scrim" aria-hidden="true"></span>
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-7523951 e-con-full e-flex e-con e-child" data-id="7523951" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-19a74d3 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="19a74d3" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h1 className="elementor-heading-title elementor-size-default">Building Wealth Through <span className="color-accent-2">Real Estate, Capital, Intelligence &amp; Technology</span>.</h1>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-e754632 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="e754632" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h5 className="elementor-heading-title elementor-size-default">Strategic investment advisory, capital solutions, independent research, and intelligent technology across India, the UAE, and global markets.</h5>
      										</div>
      									</div>
      									<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-435bc8b elementor-invisible vamtam-icon-pos-row-reverse animated-fast elementor-widget elementor-widget-button" data-id="435bc8b" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeInUp\",\"_animation_delay\":150}"} data-widget_type="button.default">
      										<div className="elementor-widget-container">
      											<div className="elementor-button-wrapper">
      												<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/free-consultation/')}>
      													<span className="elementor-button-content-wrapper">
      														<span className="elementor-button-icon">
      															<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i> </span>
      														<span className="elementor-button-text">Speak with Our Advisory Team</span>
      													</span>
      												</a>
      											</div>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-066bb72 e-con-full e-flex e-con e-child" data-id="066bb72" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      									<div className="elementor-element elementor-element-986acae e-con-full e-flex e-con e-child" data-id="986acae" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      										<div className="elementor-element elementor-element-574facb elementor-widget elementor-widget-template" data-id="574facb" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      						<div className="elementor-element elementor-element-06c1139 e-flex e-con-boxed e-con e-parent" data-id="06c1139" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"gradient\"}"}>
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-f842de0 elementor-widget elementor-widget-heading" data-id="f842de0" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      									<div className="elementor-widget-container">
      										<h6 className="elementor-heading-title elementor-size-default">What Sets Us Apart</h6>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-03d8cb6 e-con-full e-flex e-con e-child" data-id="03d8cb6" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-15e2a23 elementor-icon-list--layout-inline elementor-list-item-link-inline elementor-tablet-align-left elementor-widget elementor-widget-icon-list" data-id="15e2a23" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      										<div className="elementor-widget-container">
      											<ul className="elementor-icon-list-items elementor-inline-items">
      												<li className="elementor-icon-list-item elementor-inline-item">
      													<span className="elementor-icon-list-icon">
      														<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      													<span className="elementor-icon-list-text">Advisory Led Approach</span>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-86c68d2 elementor-icon-list--layout-inline elementor-list-item-link-inline elementor-tablet-align-left elementor-widget elementor-widget-icon-list" data-id="86c68d2" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      										<div className="elementor-widget-container">
      											<ul className="elementor-icon-list-items elementor-inline-items">
      												<li className="elementor-icon-list-item elementor-inline-item">
      													<span className="elementor-icon-list-icon">
      														<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      													<span className="elementor-icon-list-text">Independent Research</span>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-6a31a18 elementor-icon-list--layout-inline elementor-list-item-link-inline elementor-tablet-align-left elementor-widget elementor-widget-icon-list" data-id="6a31a18" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      										<div className="elementor-widget-container">
      											<ul className="elementor-icon-list-items elementor-inline-items">
      												<li className="elementor-icon-list-item elementor-inline-item">
      													<span className="elementor-icon-list-icon">
      														<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      													<span className="elementor-icon-list-text">India &amp; UAE Access</span>
      												</li>
      											</ul>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-e7cdd1d elementor-icon-list--layout-inline elementor-list-item-link-inline elementor-tablet-align-left elementor-widget elementor-widget-icon-list" data-id="e7cdd1d" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      										<div className="elementor-widget-container">
      											<ul className="elementor-icon-list-items elementor-inline-items">
      												<li className="elementor-icon-list-item elementor-inline-item">
      													<span className="elementor-icon-list-icon">
      														<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      													<span className="elementor-icon-list-text">Intelligent Technology</span>
      												</li>
      											</ul>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
      						{/* "Who We Are — An Integrated Platform of Expertise" section (from page
      						    2190). Wrapped in .elementor-2190 so post-2190.css (listed in this
      						    page's post_css) styles it. */}
      						<div className="elementor elementor-2190">
      							<div className="elementor-element elementor-element-752eec4 e-flex e-con-boxed e-con e-parent" data-id="752eec4" data-element_type="container" data-e-type="container">
      								<div className="e-con-inner">
      									<div className="elementor-element elementor-element-7e2767c elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="7e2767c" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<span className="elementor-heading-title elementor-size-default">Who We Are</span>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-b1b1408 elementor-invisible elementor-widget__width-initial animated-fast elementor-widget elementor-widget-heading" data-id="b1b1408" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h2 className="elementor-heading-title elementor-size-default">An Integrated Platform of Expertise</h2>
      										</div>
      									</div>
      										<div className="vxn-wwa">
      											<p className="vxn-wwa__intro">We combine market intelligence, integrated advisory capabilities and execution expertise to help developers, investors, corporates and the government navigate complex real estate decisions with clarity and measurable outcomes.</p>
      											<div className="vxn-wwa__grid">
      												<div className="vxn-wwa__item">
      													<svg className="vxn-wwa__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#vxnW1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Deep market intelligence"><defs><linearGradient id="vxnW1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0E355F" /><stop offset=".5" stopColor="#0053B7" /><stop offset="1" stopColor="#0053B7" /></linearGradient></defs><circle cx="10" cy="10" r="7" /><path d="M6.7 11.3l2.2-2.2 1.8 1.4 2.8-3.4" /><path d="M15 15l5 5" /></svg>
      													<span className="vxn-wwa__label">Deep market intelligence</span>
      												</div>
      												<div className="vxn-wwa__item">
      													<svg className="vxn-wwa__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#vxnW2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Integrated advisory and execution"><defs><linearGradient id="vxnW2" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0E355F" /><stop offset=".5" stopColor="#0053B7" /><stop offset="1" stopColor="#0053B7" /></linearGradient></defs><path d="M11 17l2 2a1 1 0 0 0 3-3" /><path d="M14 14l2.5 2.5a1 1 0 0 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 0 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" /><path d="M21 3l1 11h-2" /><path d="M3 3L2 14l6.5 6.5a1 1 0 0 0 3-3" /><path d="M3 4h8" /></svg>
      													<span className="vxn-wwa__label">Integrated advisory and execution</span>
      												</div>
      												<div className="vxn-wwa__item">
      													<svg className="vxn-wwa__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#vxnW3)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="AI-driven insights"><defs><linearGradient id="vxnW3" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0E355F" /><stop offset=".5" stopColor="#0053B7" /><stop offset="1" stopColor="#0053B7" /></linearGradient></defs><rect x="4.5" y="4.5" width={15} height={15} rx="3" /><path d="M12 8.4l.9 2.7 2.7.9-2.7.9-.9 2.7-.9-2.7-2.7-.9 2.7-.9z" /><path d="M9 4.5v-2M15 4.5v-2M9 21.5v-2M15 21.5v-2M4.5 9h-2M4.5 15h-2M21.5 9h-2M21.5 15h-2" /></svg>
      													<span className="vxn-wwa__label">AI-driven insights powering smarter real estate decisions</span>
      												</div>
      												<div className="vxn-wwa__item">
      													<svg className="vxn-wwa__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#vxnW4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Trusted by developers, institutions and investors"><defs><linearGradient id="vxnW4" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0E355F" /><stop offset=".5" stopColor="#0053B7" /><stop offset="1" stopColor="#0053B7" /></linearGradient></defs><path d="M12 3l7 2.5v5.2c0 4.3-2.9 7.9-7 9.3-4.1-1.4-7-5-7-9.3V5.5z" /><path d="M9 12l2.2 2.2L15.2 9.8" /></svg>
      													<span className="vxn-wwa__label">Trusted by developers, institutions and investors</span>
      												</div>
      											</div>
      										</div>
      								</div>
      							</div>
      						</div>
      						<div className="vxn-home-svc-section">
      							<div className="elementor-element elementor-element-85963b4 e-flex e-con-boxed e-con e-parent" data-id="85963b4" data-element_type="container" data-e-type="container">
      								<div className="e-con-inner">
      									<div className="elementor-element elementor-element-04c603a e-con-full e-flex e-con e-child" data-id="04c603a" data-element_type="container" data-e-type="container">
      										<div className="elementor-element elementor-element-118f825 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="118f825" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      											<div className="elementor-widget-container">
      												<span className="elementor-heading-title elementor-size-default">Our Services</span>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-e5cafd1 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="e5cafd1" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      											<div className="elementor-widget-container">
      												<h2 className="elementor-heading-title elementor-size-default">Four Verticals. One Integrated Platform.</h2>
      											</div>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-eb91688 elementor-invisible elementor-widget-tablet__width-initial elementor-widget__width-initial animated-fast elementor-widget elementor-widget-heading" data-id="eb91688" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":200}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<span className="elementor-heading-title elementor-size-default">Real estate wealth, capital, research, and technology &#8212; four connected practices supporting confident, informed investment decisions.</span>
      										</div>
      									</div>
      								</div>
      							</div>
      							<nav className="vxn-klay" aria-label="Our services">
      								<a className="vxn-klay__panel is-active" href={rurl(region, '/services/real-estate-investment-advisory/')}>
      									<div className="vxn-klay__bg"><img src={rimg(region, 'homepage/research-and-investment-advisory.webp')} alt="Real Estate Investment Advisory" loading="lazy" /></div>
      									<span className="vxn-klay__label" aria-hidden="true">Real Estate Advisory</span>
      									<div className="vxn-klay__content">
      										<h3 className="vxn-klay__title">Real Estate Investment Advisory</h3>
      										<p className="vxn-klay__desc">Disciplined portfolio strategy and risk analysis to create, preserve, and grow real estate wealth across India, the UAE, and beyond.</p>
      										<span className="vxn-klay__btn">Learn more <i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      									</div>
      								</a>
      								<a className="vxn-klay__panel" href={rurl(region, '/services/capital-advisory/')}>
      									<div className="vxn-klay__bg"><img src={rimg(region, 'homepage/capital-advisory.webp')} alt="Capital Advisory" loading="lazy" /></div>
      									<span className="vxn-klay__label" aria-hidden="true">Capital Advisory</span>
      									<div className="vxn-klay__content">
      										<h3 className="vxn-klay__title">Capital Advisory</h3>
      										<p className="vxn-klay__desc">Independent capital structuring &mdash; from project funding and debt advisory to equity, joint ventures, and investor syndication.</p>
      										<span className="vxn-klay__btn">Learn more <i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      									</div>
      								</a>
      								<a className="vxn-klay__panel" href={rurl(region, '/services/research-intelligence/')}>
      									<div className="vxn-klay__bg"><img src={rimg(region, 'homepage/research-and-intellegance.webp')} alt="Research &amp; Intelligence" loading="lazy" /></div>
      									<span className="vxn-klay__label" aria-hidden="true">Research &amp; Intelligence</span>
      									<div className="vxn-klay__content">
      										<h3 className="vxn-klay__title">Research &amp; Intelligence</h3>
      										<p className="vxn-klay__desc">Independent, data-driven research and valuation intelligence for clearer, more confident investment decisions.</p>
      										<span className="vxn-klay__btn">Learn more <i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      									</div>
      								</a>
      								<a className="vxn-klay__panel" href={rurl(region, '/services/technology-ai/')}>
      									<div className="vxn-klay__bg"><img src={rimg(region, 'homepage/technology-and-ai.webp')} alt="Technology &amp; AI" loading="lazy" /></div>
      									<span className="vxn-klay__label" aria-hidden="true">Technology &amp; AI</span>
      									<div className="vxn-klay__content">
      										<h3 className="vxn-klay__title">Technology &amp; AI</h3>
      										<p className="vxn-klay__desc">Intelligent platforms, analytics, and AI systems that turn market data into better investment decisions.</p>
      										<span className="vxn-klay__btn">Learn more <i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      									</div>
      								</a>
      							</nav>
      						</div>
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
      						<div className="elementor-element elementor-element-761c5fe e-flex e-con-boxed e-con e-parent" data-id="761c5fe" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-9e8035e e-con-full e-flex e-con e-child" data-id="9e8035e" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-670c111 e-con-full e-flex e-con e-child" data-id="670c111" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"none\"}"}>
      										<div className="elementor-element elementor-element-28a605a elementor-widget elementor-widget-image" data-id="28a605a" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
      											<div className="elementor-widget-container">
      												{/* <img loading="lazy" decoding="async" width="143" height="76" src="/assets/content/uploads/2025/03/GettyImages-1958747481.svg" class="attachment-medium size-medium wp-image-591" alt=""> */}
      											</div>
      										</div>
      										{/* <div class="elementor-element elementor-element-956439b elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="956439b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      											<div class="elementor-widget-container">
      												<span class="elementor-heading-title elementor-size-default">Long term value is built on intelligence, discipline and trust.</span>
      											</div>
      										</div> */}
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-4b2e43b e-con-full e-flex e-con e-child" data-id="4b2e43b" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\"}"}>
      									<div className="elementor-element elementor-element-068496a elementor-widget elementor-widget-n-accordion" data-id="068496a" data-element_type="widget" data-e-type="widget" data-settings={"{\"n_accordion_animation_duration\":{\"unit\":\"ms\",\"size\":200,\"sizes\":[]},\"default_state\":\"expanded\",\"max_items_expended\":\"one\"}"} data-widget_type="nested-accordion.default">
      										<div className="elementor-widget-container">
      											<div className="e-n-accordion" aria-label="Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys">
      												<details id="e-n-accordion-item-6830" className="e-n-accordion-item" open>
      													<summary className="e-n-accordion-item-title" data-accordion-index="1" tabIndex={0} aria-expanded="true" aria-controls="e-n-accordion-item-6830">
      														<span className="e-n-accordion-item-title-header">
      															<div className="e-n-accordion-item-title-text"> Advisory Led Investment Approach </div>
      														</span>
      														<span className="e-n-accordion-item-title-icon">
      															<span className="e-opened"><i aria-hidden="true" className="vamtamtheme- vamtam-theme-minus"></i></span>
      															<span className="e-closed"><i aria-hidden="true" className="vamtamtheme- vamtam-theme-plus"></i></span>
      														</span>

      													</summary>
      													<div role="region" aria-labelledby="e-n-accordion-item-6830" className="elementor-element elementor-element-221944d e-con-full e-flex e-con e-child" data-id="221944d" data-element_type="container" data-e-type="container">
      														<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-4d8bced elementor-widget elementor-widget-text-editor" data-id="4d8bced" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      															<div className="elementor-widget-container">
      																<p>Our advisory teams support investors, developers, institutions, family offices, and NRIs across the full investment lifecycle &#8212; from acquisition strategy and portfolio reviews to exit planning.</p>
      																<p>Every engagement begins with your objectives, then aligns strategy, structure, and execution to them.</p>
      															</div>
      														</div>
      														<div className="elementor-element elementor-element-7897082 elementor-align-left elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="7897082" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      															<div className="elementor-widget-container">
      																<ul className="elementor-icon-list-items">
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Portfolio strategy and asset allocation</span>
      																	</li>
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">HNI, NRI and family office advisory</span>
      																	</li>
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Acquisition, review and exit planning</span>
      																	</li>
      																</ul>
      															</div>
      														</div>
      													</div>
      												</details>
      												<details id="e-n-accordion-item-6831" className="e-n-accordion-item">
      													<summary className="e-n-accordion-item-title" data-accordion-index="2" tabIndex={-1} aria-expanded="false" aria-controls="e-n-accordion-item-6831">
      														<span className="e-n-accordion-item-title-header">
      															<div className="e-n-accordion-item-title-text"> Independent Research &amp; Valuation </div>
      														</span>
      														<span className="e-n-accordion-item-title-icon">
      															<span className="e-opened"><i aria-hidden="true" className="vamtamtheme- vamtam-theme-minus"></i></span>
      															<span className="e-closed"><i aria-hidden="true" className="vamtamtheme- vamtam-theme-plus"></i></span>
      														</span>

      													</summary>
      													<div role="region" aria-labelledby="e-n-accordion-item-6831" className="elementor-element elementor-element-80875d6 e-con-full e-flex e-con e-child" data-id="80875d6" data-element_type="container" data-e-type="container">
      														<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-46152d7 elementor-widget elementor-widget-text-editor" data-id="46152d7" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      															<div className="elementor-widget-container">
      																<p>Our research and intelligence capabilities combine market analysis, valuation insight, economic context, and data analytics to help clients assess opportunities with greater clarity.</p>
      																<p>Independence keeps the analysis objective &#8212; recommendations are grounded in evidence, not inventory.</p>
      															</div>
      														</div>
      														<div className="elementor-element elementor-element-cb9ae01 elementor-align-left elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="cb9ae01" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      															<div className="elementor-widget-container">
      																<ul className="elementor-icon-list-items">
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Valuation intelligence and feasibility studies</span>
      																	</li>
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Demand, supply and market forecasting</span>
      																	</li>
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Risk assessment and investment scorecards</span>
      																	</li>
      																</ul>
      															</div>
      														</div>
      													</div>
      												</details>
      												<details id="e-n-accordion-item-6832" className="e-n-accordion-item">
      													<summary className="e-n-accordion-item-title" data-accordion-index="3" tabIndex={-1} aria-expanded="false" aria-controls="e-n-accordion-item-6832">
      														<span className="e-n-accordion-item-title-header">
      															<div className="e-n-accordion-item-title-text"> Capital Structuring Expertise </div>
      														</span>
      														<span className="e-n-accordion-item-title-icon">
      															<span className="e-opened"><i aria-hidden="true" className="vamtamtheme- vamtam-theme-minus"></i></span>
      															<span className="e-closed"><i aria-hidden="true" className="vamtamtheme- vamtam-theme-plus"></i></span>
      														</span>

      													</summary>
      													<div role="region" aria-labelledby="e-n-accordion-item-6832" className="elementor-element elementor-element-80f0841 e-con-full e-flex e-con e-child" data-id="80f0841" data-element_type="container" data-e-type="container">
      														<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-106d08b elementor-widget elementor-widget-text-editor" data-id="106d08b" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      															<div className="elementor-widget-container">
      																<p>We help developers and businesses raise, structure, and optimise capital &#8212; across debt, equity, joint ventures, and institutional partnerships.</p>
      																<p>Disciplined financial modelling, due diligence, and structuring support underpin every mandate we advise on.</p>
      															</div>
      														</div>
      														<div className="elementor-element elementor-element-fcd3dad elementor-align-left elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="fcd3dad" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      															<div className="elementor-widget-container">
      																<ul className="elementor-icon-list-items">
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Project funding and development finance</span>
      																	</li>
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Debt, equity and capital structuring</span>
      																	</li>
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Investor syndication and strategic partnerships</span>
      																	</li>
      																</ul>
      															</div>
      														</div>
      													</div>
      												</details>
      												<details id="e-n-accordion-item-6833" className="e-n-accordion-item">
      													<summary className="e-n-accordion-item-title" data-accordion-index="4" tabIndex={-1} aria-expanded="false" aria-controls="e-n-accordion-item-6833">
      														<span className="e-n-accordion-item-title-header">
      															<div className="e-n-accordion-item-title-text"> Technology Powered Intelligence </div>
      														</span>
      														<span className="e-n-accordion-item-title-icon">
      															<span className="e-opened"><i aria-hidden="true" className="vamtamtheme- vamtam-theme-minus"></i></span>
      															<span className="e-closed"><i aria-hidden="true" className="vamtamtheme- vamtam-theme-plus"></i></span>
      														</span>

      													</summary>
      													<div role="region" aria-labelledby="e-n-accordion-item-6833" className="elementor-element elementor-element-16728bf e-con-full e-flex e-con e-child" data-id="16728bf" data-element_type="container" data-e-type="container">
      														<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-8a5e9ac elementor-widget elementor-widget-text-editor" data-id="8a5e9ac" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      															<div className="elementor-widget-container">
      																<p>We develop intelligent platforms, automated valuation systems, dashboards, and analytics that improve visibility, efficiency, and decision making across the real estate investment lifecycle.</p>
      																<p>Technology extends the advisory relationship &#8212; portfolios, research, and decisions in one place.</p>
      															</div>
      														</div>
      														<div className="elementor-element elementor-element-0af05d2 elementor-align-left elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="0af05d2" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
      															<div className="elementor-widget-container">
      																<ul className="elementor-icon-list-items">
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Automated valuation models</span>
      																	</li>
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">Investor dashboards and portfolio intelligence</span>
      																	</li>
      																	<li className="elementor-icon-list-item">
      																		<span className="elementor-icon-list-icon">
      																			<i aria-hidden="true" className="vamtamtheme- vamtam-theme-chack-circle"></i> </span>
      																		<span className="elementor-icon-list-text">AI assisted research and reporting</span>
      																	</li>
      																</ul>
      															</div>
      														</div>
      													</div>
      												</details>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
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
      						<div className="elementor-element elementor-element-8098fc0 e-flex e-con-boxed e-con e-parent" data-id="8098fc0" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-9e6338e e-con-full e-flex e-con e-child" data-id="9e6338e" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-05ebd63 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="05ebd63" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<span className="elementor-heading-title elementor-size-default">Our Vision</span>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-913f441 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="913f441" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
      										<div className="elementor-widget-container">
      											<div className="elementor-divider">
      												<span className="elementor-divider-separator">
      												</span>
      											</div>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-5a99c78 elementor-invisible elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="5a99c78" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h2 className="elementor-heading-title elementor-size-default">To build a trusted India led investment and intelligence group with international capabilities across real estate, capital, research, and technology.</h2>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="elementor-element elementor-element-f077fc7 e-flex e-con-boxed e-con e-parent" data-id="f077fc7" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-ffb023a elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="ffb023a" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":0}"}>
      									<div className="elementor-element elementor-element-69c379a elementor-position-left elementor-mobile-position-left elementor-tablet-position-left elementor-view-default elementor-widget elementor-widget-icon-box" data-id="69c379a" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      										<div className="elementor-widget-container">
      											<div className="elementor-icon-box-wrapper">

      												<div className="elementor-icon-box-icon">
      													<span className="elementor-icon">
      														<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34">
      															<g fill="none" fillRule="evenodd">
      																<circle fill="#F6F4EF" cx="17" cy="17" r="11.33" />
      																<g fill="#0053B7">
      																	<path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" />
      																	<path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" />
      																</g>
      															</g>
      														</svg> </span>
      												</div>

      												<div className="elementor-icon-box-content">

      													<h5 className="elementor-icon-box-title">
      														<span>
      															Our Focus </span>
      													</h5>


      												</div>

      											</div>
      										</div>
      									</div>
      									<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-82a910c elementor-widget elementor-widget-text-editor" data-id="82a910c" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      										<div className="elementor-widget-container">
      											<p>Helping clients make informed investment decisions, structure capital effectively, and create sustainable long term value through real estate.</p>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-ba74473 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="ba74473" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      									<div className="elementor-element elementor-element-234de0a elementor-position-left elementor-mobile-position-left elementor-view-default elementor-widget elementor-widget-icon-box" data-id="234de0a" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      										<div className="elementor-widget-container">
      											<div className="elementor-icon-box-wrapper">

      												<div className="elementor-icon-box-icon">
      													<span className="elementor-icon">
      														<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34">
      															<g fill="none" fillRule="evenodd">
      																<circle fill="#F6F4EF" cx="17" cy="17" r="11.33" />
      																<g fill="#0053B7">
      																	<path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" />
      																	<path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" />
      																</g>
      															</g>
      														</svg> </span>
      												</div>

      												<div className="elementor-icon-box-content">

      													<h5 className="elementor-icon-box-title">
      														<span>
      															Our Approach </span>
      													</h5>


      												</div>

      											</div>
      										</div>
      									</div>
      									<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-3dc1e54 elementor-widget elementor-widget-text-editor" data-id="3dc1e54" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      										<div className="elementor-widget-container">
      											<p>Advisory led and data aware &#8212; combining market expertise, independent research, and technology in every engagement.</p>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-6725fc0 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="6725fc0" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      									<div className="elementor-element elementor-element-13b708f elementor-position-left elementor-mobile-position-left elementor-view-default elementor-widget elementor-widget-icon-box" data-id="13b708f" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
      										<div className="elementor-widget-container">
      											<div className="elementor-icon-box-wrapper">

      												<div className="elementor-icon-box-icon">
      													<span className="elementor-icon">
      														<svg xmlns="http://www.w3.org/2000/svg" width={37} height={34} viewBox="0 0 37 34">
      															<g fill="none" fillRule="evenodd">
      																<circle fill="#F6F4EF" cx="17" cy="17" r="11.33" />
      																<g fill="#0053B7">
      																	<path d="M16.84 34c-5.3 0-10.3-2.52-13.47-6.8a17.13 17.13 0 0 1-2.7-14.97A16.93 16.93 0 0 1 10.94 1.08a16.69 16.69 0 0 1 14.99 1.6c.18.11.3.29.36.5a.78.78 0 0 1-.6.94c-.2.04-.42 0-.6-.13a15.17 15.17 0 0 0-12.92-1.7 15.37 15.37 0 0 0-9.53 8.99 15.6 15.6 0 0 0 .8 13.15 15.19 15.19 0 0 0 23.17 4.49A15.51 15.51 0 0 0 32.13 17v-1.55a.78.78 0 0 1 .69-.85c.42-.04.8.27.84.7V17c0 4.5-1.77 8.83-4.93 12.02A16.74 16.74 0 0 1 16.84 34Z" />
      																	<path d="M19.14 20.48c-.2 0-.4-.09-.54-.23l-6.88-6.96c-.3-.3-.3-.8 0-1.1.3-.3.78-.3 1.08 0l6.34 6.36 16.3-16.39c.29-.3.78-.3 1.08 0 .3.3.3.8 0 1.1l-16.83 17a.76.76 0 0 1-.55.22Z" />
      																</g>
      															</g>
      														</svg> </span>
      												</div>

      												<div className="elementor-icon-box-content">

      													<h5 className="elementor-icon-box-title">
      														<span>
      															Our Experience </span>
      													</h5>


      												</div>

      											</div>
      										</div>
      									</div>
      									<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-c4183f6 elementor-widget elementor-widget-text-editor" data-id="c4183f6" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      										<div className="elementor-widget-container">
      											<p className="" data-start="109" data-end="401">An integrated group serving investors and institutions across India, the UAE, and cross-border markets.</p>
      										</div>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="elementor-element elementor-element-d50462f e-flex e-con-boxed e-con e-parent" data-id="d50462f" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-82cf741 e-con-full e-flex e-con e-child" data-id="82cf741" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      									<div className="elementor-element elementor-element-79f93d1 e-con-full e-flex e-con e-child" data-id="79f93d1" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      										<div className="elementor-element elementor-element-e81eaa1 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="e81eaa1" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      											<div className="elementor-widget-container">
      												<h2 className="elementor-heading-title elementor-size-default">Find the Right Solution</h2>
      											</div>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-21fcef5 e-flex e-con-boxed e-con e-child" data-id="21fcef5" data-element_type="container" data-e-type="container">
      										<div className="e-con-inner">
      											<div className="elementor-element elementor-element-9af78b4 e-n-tabs-none elementor-widget elementor-widget-n-tabs" data-id="9af78b4" data-element_type="widget" data-e-type="widget" data-settings={"{\"tabs_justify_horizontal\":\"stretch\",\"horizontal_scroll\":\"enable\"}"} data-widget_type="nested-tabs.default">
      												<div className="elementor-widget-container">
      													<div className="e-n-tabs" data-widget-number="162494644" aria-label="Tabs. Open items with Enter or Space, close with Escape and navigate using the Arrow keys.">
      														<div className="e-n-tabs-heading" role="tablist">
      															<button id="e-n-tab-title-1624946441" data-tab-title-id="e-n-tab-title-1624946441" className="e-n-tab-title" aria-selected="true" data-tab-index="1" role="tab" tabIndex={0} aria-controls="e-n-tab-content-1624946441" style={{ '--n-tabs-title-order': "1" } as React.CSSProperties}>
      																<span className="e-n-tab-title-text">
      																	Building Real Estate Wealth </span>
      															</button>
      															<button id="e-n-tab-title-1624946442" data-tab-title-id="e-n-tab-title-1624946442" className="e-n-tab-title" aria-selected="false" data-tab-index="2" role="tab" tabIndex={-1} aria-controls="e-n-tab-content-1624946442" style={{ '--n-tabs-title-order': "2" } as React.CSSProperties}>
      																<span className="e-n-tab-title-text">
      																	Raising or Structuring Capital </span>
      															</button>
      															<button id="e-n-tab-title-1624946443" data-tab-title-id="e-n-tab-title-1624946443" className="e-n-tab-title" aria-selected="false" data-tab-index="3" role="tab" tabIndex={-1} aria-controls="e-n-tab-content-1624946443" style={{ '--n-tabs-title-order': "3" } as React.CSSProperties}>
      																<span className="e-n-tab-title-text">
      																	Understanding a Market </span>
      															</button>
      														</div>
      														<div className="e-n-tabs-content">
      															<div id="e-n-tab-content-1624946441" role="tabpanel" aria-labelledby="e-n-tab-title-1624946441" data-tab-index="1" style={{ '--n-tabs-title-order': "1" } as React.CSSProperties} className="e-active elementor-element elementor-element-2c53b5e e-con-full e-flex e-con e-child" data-id="2c53b5e" data-element_type="container" data-e-type="container">
      																<div className="elementor-element elementor-element-304a6aa e-con-full e-flex e-con e-child" data-id="304a6aa" data-element_type="container" data-e-type="container">
      																	<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-ebee893 elementor-invisible animated-fast elementor-widget elementor-widget-text-editor" data-id="ebee893" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\"}"} data-widget_type="text-editor.default">
      																		<div className="elementor-widget-container">
      																			<p>Define a disciplined path to long term wealth. We assess your objectives, holdings, and risk profile, then build a portfolio strategy across India, the UAE, and international markets.</p>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-013bb2d elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer" data-id="013bb2d" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
      																		<div className="elementor-widget-container">
      																			<div className="elementor-spacer">
      																				<div className="elementor-spacer-inner"></div>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-b39c796 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="b39c796" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\"}"}>
      																		<div className="elementor-element elementor-element-8bd2e78 elementor-widget elementor-widget-heading" data-id="8bd2e78" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Portfolio Strategy &amp; Review</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-fb1cbfe elementor-widget elementor-widget-heading" data-id="fb1cbfe" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">A clear, objective view of portfolio composition, performance, and opportunity.</span>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-76e2ddb elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="76e2ddb" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      																		<div className="elementor-element elementor-element-088c3c8 elementor-widget elementor-widget-heading" data-id="088c3c8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Asset Allocation &amp; Diversification</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-3669349 elementor-widget elementor-widget-heading" data-id="3669349" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">Balancing residential, commercial, and cross border exposure to your goals.</span>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-1b6f08c elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="1b6f08c" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      																		<div className="elementor-element elementor-element-860873a elementor-widget elementor-widget-heading" data-id="860873a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Acquisition &amp; Exit Planning</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-d6dd169 elementor-widget elementor-widget-heading" data-id="d6dd169" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">Entering and exiting positions with discipline, timing, and structure.</span>
      																			</div>
      																		</div>
      																	</div>
      																</div>
      																<div className="elementor-element elementor-element-aa3aa17 e-con-full e-flex e-con e-child" data-id="aa3aa17" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      																	<div className="elementor-element elementor-element-c645356 e-con-full e-flex e-con e-child" data-id="c645356" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      																		<div className="elementor-element elementor-element-a7ee314 elementor-widget elementor-widget-template" data-id="a7ee314" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      															<div id="e-n-tab-content-1624946442" role="tabpanel" aria-labelledby="e-n-tab-title-1624946442" data-tab-index="2" style={{ '--n-tabs-title-order': "2" } as React.CSSProperties} className=" elementor-element elementor-element-b09ef26 e-con-full e-flex e-con e-child" data-id="b09ef26" data-element_type="container" data-e-type="container">
      																<div className="elementor-element elementor-element-1f65f56 e-con-full e-flex e-con e-child" data-id="1f65f56" data-element_type="container" data-e-type="container">
      																	<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-f17fe4b elementor-invisible animated-fast elementor-widget elementor-widget-text-editor" data-id="f17fe4b" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\"}"} data-widget_type="text-editor.default">
      																		<div className="elementor-widget-container">
      																			<p>Raise and structure capital with confidence. We support developers and businesses across funding, structuring, and investor relationships.</p>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-0613e1d elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer" data-id="0613e1d" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
      																		<div className="elementor-widget-container">
      																			<div className="elementor-spacer">
      																				<div className="elementor-spacer-inner"></div>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-6f77473 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="6f77473" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\"}"}>
      																		<div className="elementor-element elementor-element-62bf561 elementor-widget elementor-widget-heading" data-id="62bf561" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Project Funding &amp; Development Finance</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-3fd1366 elementor-widget elementor-widget-heading" data-id="3fd1366" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">Structured funding approaches for projects at every stage of development.</span>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-c4d2bf3 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="c4d2bf3" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      																		<div className="elementor-element elementor-element-a8c50aa elementor-widget elementor-widget-heading" data-id="a8c50aa" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Debt &amp; Equity Advisory</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-606e001 elementor-widget elementor-widget-heading" data-id="606e001" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">Independent advice on the right capital mix, terms, and partners.</span>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-1cf2afa elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="1cf2afa" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      																		<div className="elementor-element elementor-element-27dcb8b elementor-widget elementor-widget-heading" data-id="27dcb8b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Joint Ventures &amp; Syndication</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-e2fb95b elementor-widget elementor-widget-heading" data-id="e2fb95b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">Bringing the right partners and investors to the table.</span>
      																			</div>
      																		</div>
      																	</div>
      																</div>
      																<div className="elementor-element elementor-element-b12020e e-con-full e-flex e-con e-child" data-id="b12020e" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      																	<div className="elementor-element elementor-element-4bec2ed e-con-full e-flex e-con e-child" data-id="4bec2ed" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      																		<div className="elementor-element elementor-element-c0a24aa e-con-full blur-background e-flex e-con e-child" data-id="c0a24aa" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-8c08fe0 e-con-full blur-background e-flex e-con e-child" data-id="8c08fe0" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-acc151c e-con-full blur-background e-flex e-con e-child" data-id="acc151c" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-b133692 e-con-full blur-background e-flex e-con e-child" data-id="b133692" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-83dbc33 e-con-full blur-background e-flex e-con e-child" data-id="83dbc33" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-11b87a4 e-con-full blur-background e-flex e-con e-child" data-id="11b87a4" data-element_type="container" data-e-type="container">
      																		</div>
      																	</div>
      																</div>
      															</div>
      															<div id="e-n-tab-content-1624946443" role="tabpanel" aria-labelledby="e-n-tab-title-1624946443" data-tab-index="3" style={{ '--n-tabs-title-order': "3" } as React.CSSProperties} className=" elementor-element elementor-element-8c8b5b0 e-con-full e-flex e-con e-child" data-id="8c8b5b0" data-element_type="container" data-e-type="container">
      																<div className="elementor-element elementor-element-9cbfb46 e-con-full e-flex e-con e-child" data-id="9cbfb46" data-element_type="container" data-e-type="container">
      																	<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-70aeb57 elementor-invisible animated-fast elementor-widget elementor-widget-text-editor" data-id="70aeb57" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"fadeIn\"}"} data-widget_type="text-editor.default">
      																		<div className="elementor-widget-container">
      																			<p>See a market clearly before you commit. Our research combines valuation intelligence, demand and supply analysis, and market forecasting.</p>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-e1c4161 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer" data-id="e1c4161" data-element_type="widget" data-e-type="widget" data-widget_type="spacer.default">
      																		<div className="elementor-widget-container">
      																			<div className="elementor-spacer">
      																				<div className="elementor-spacer-inner"></div>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-7b2bedd elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="7b2bedd" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\"}"}>
      																		<div className="elementor-element elementor-element-43e1c5b elementor-widget elementor-widget-heading" data-id="43e1c5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Feasibility &amp; Best Use Studies</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-91573d5 elementor-widget elementor-widget-heading" data-id="91573d5" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">Testing whether a project or acquisition stands on solid ground.</span>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-25d7ebe elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="25d7ebe" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":50}"}>
      																		<div className="elementor-element elementor-element-713a3f8 elementor-widget elementor-widget-heading" data-id="713a3f8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Location &amp; Market Intelligence</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-ccb9733 elementor-widget elementor-widget-heading" data-id="ccb9733" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">Micro market dynamics, infrastructure, and demand drivers explained.</span>
      																			</div>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-a55c103 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="a55c103" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"slideInUp\",\"animation_delay\":100}"}>
      																		<div className="elementor-element elementor-element-7940ac2 elementor-widget elementor-widget-heading" data-id="7940ac2" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<h5 className="elementor-heading-title elementor-size-default">Valuation &amp; Risk Assessment</h5>
      																			</div>
      																		</div>
      																		<div className="elementor-element elementor-element-c647be3 elementor-widget elementor-widget-heading" data-id="c647be3" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      																			<div className="elementor-widget-container">
      																				<span className="elementor-heading-title elementor-size-default">Independent valuation insight that strengthens negotiation and decisions.</span>
      																			</div>
      																		</div>
      																	</div>
      																</div>
      																<div className="elementor-element elementor-element-9106445 e-con-full e-flex e-con e-child" data-id="9106445" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"}>
      																	<div className="elementor-element elementor-element-a43d0e7 e-con-full e-flex e-con e-child" data-id="a43d0e7" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      																		<div className="elementor-element elementor-element-8578008 e-con-full blur-background e-flex e-con e-child" data-id="8578008" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-0eb77e5 e-con-full blur-background e-flex e-con e-child" data-id="0eb77e5" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-23dfb15 e-con-full blur-background e-flex e-con e-child" data-id="23dfb15" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-a8bfe90 e-con-full blur-background e-flex e-con e-child" data-id="a8bfe90" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-a5886a5 e-con-full blur-background e-flex e-con e-child" data-id="a5886a5" data-element_type="container" data-e-type="container">
      																		</div>
      																		<div className="elementor-element elementor-element-530e76b e-con-full blur-background e-flex e-con e-child" data-id="530e76b" data-element_type="container" data-e-type="container">
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
      						</div>
      						<div className="elementor-element elementor-element-9edb394 e-flex e-con-boxed e-con e-parent" data-id="9edb394" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-acba3a5 e-con-full e-flex e-con e-child" data-id="acba3a5" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-5cb95ed elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="5cb95ed" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<span className="elementor-heading-title elementor-size-default">Our Platform</span>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-a8ba42b elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="a8ba42b" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h2 className="elementor-heading-title elementor-size-default">One Group. Four Verticals. Three Offices.</h2>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-6e16e53 elementor-invisible elementor-widget-tablet__width-initial elementor-widget__width-initial animated-fast elementor-widget elementor-widget-heading" data-id="6e16e53" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":200}"} data-widget_type="heading.default">
      									<div className="elementor-widget-container">
      										<span className="elementor-heading-title elementor-size-default">Investors, developers, institutions, and family offices work with VALUNXT Capital for advisory, capital, research, and technology &#8212; delivered as one integrated platform. </span>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="elementor-element elementor-element-8f5d3c5 e-flex e-con-boxed e-con e-parent" data-id="8f5d3c5" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-9383430 e-con-full e-flex e-con e-child" data-id="9383430" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"sticky\":\"top\",\"sticky_on\":[\"desktop\",\"tablet\"],\"sticky_offset\":30,\"sticky_parent\":\"yes\",\"sticky_offset_mobile\":0,\"sticky_effects_offset\":0,\"sticky_anchor_link_offset\":0}"}>
      									<div className="elementor-element elementor-element-6a59db4 e-con-full e-flex e-con e-child" data-id="6a59db4" data-element_type="container" data-e-type="container" data-settings={"{\"position\":\"absolute\"}"}>
      										<div className="elementor-element elementor-element-885a115 elementor-widget elementor-widget-template" data-id="885a115" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      									<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-ed9049b vamtam-icon-pos-row-reverse elementor-align-justify vamtam-content-align-space-between elementor-widget__width-initial elementor-widget elementor-widget-button" data-id="ed9049b" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      										<div className="elementor-widget-container">
      											<div className="elementor-button-wrapper">
      												<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/about/')}>
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
      								<div className="elementor-element elementor-element-a647e17 e-con-full e-flex e-con e-child" data-id="a647e17" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-e988fa2 e-con-full e-flex e-con e-child" data-id="e988fa2" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"sticky\":\"top\",\"sticky_offset\":30,\"sticky_parent\":\"yes\",\"sticky_offset_mobile\":60,\"sticky_on\":[\"desktop\",\"tablet\",\"mobile\"],\"sticky_effects_offset\":0,\"sticky_anchor_link_offset\":0}"}>
      										<div className="elementor-element elementor-element-fbde264 e-con-full e-flex e-con e-child" data-id="fbde264" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-4e5eacb elementor-widget elementor-widget-heading" data-id="4e5eacb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">1</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-7e45239 e-con-full e-flex e-con e-child" data-id="7e45239" data-element_type="container" data-e-type="container">
      												<div className="elementor-element elementor-element-15af364 elementor-widget elementor-widget-heading" data-id="15af364" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h5 className="elementor-heading-title elementor-size-default">Integrated Platform</h5>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-edd0df0 elementor-widget elementor-widget-heading" data-id="edd0df0" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-heading-title elementor-size-default">Wealth, capital, intelligence, and technology under one group.</div>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="vxn-stat-img"><img src={rimg(region, 'homepage/Integrated-Platform.webp')} alt="Integrated Platform" loading="lazy" width={170} height={110} /></div>
      									</div>
      									<div className="elementor-element elementor-element-258db91 e-con-full e-flex e-con e-child" data-id="258db91" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"sticky\":\"top\",\"sticky_offset\":155,\"sticky_parent\":\"yes\",\"sticky_offset_tablet\":125,\"sticky_offset_mobile\":200,\"sticky_on\":[\"desktop\",\"tablet\",\"mobile\"],\"sticky_effects_offset\":0,\"sticky_anchor_link_offset\":0}"}>
      										<div className="elementor-element elementor-element-5daff7c e-con-full e-flex e-con e-child" data-id="5daff7c" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-1c0c8c8 elementor-widget elementor-widget-heading" data-id="1c0c8c8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">2</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-953ffda e-con-full e-flex e-con e-child" data-id="953ffda" data-element_type="container" data-e-type="container">
      												<div className="elementor-element elementor-element-36c5c97 elementor-widget elementor-widget-heading" data-id="36c5c97" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h5 className="elementor-heading-title elementor-size-default">Core Markets</h5>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-078dcf4 elementor-widget elementor-widget-heading" data-id="078dcf4" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-heading-title elementor-size-default">India and the UAE, with cross border advisory between them.</div>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="vxn-stat-img"><img src={rimg(region, 'homepage/Core-Markets.webp')} alt="Core Markets" loading="lazy" width={170} height={110} /></div>
      									</div>
      									<div className="elementor-element elementor-element-1c92f80 e-con-full e-flex e-con e-child" data-id="1c92f80" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"sticky\":\"top\",\"sticky_offset\":280,\"sticky_parent\":\"yes\",\"sticky_offset_tablet\":220,\"sticky_offset_mobile\":340,\"sticky_on\":[\"desktop\",\"tablet\",\"mobile\"],\"sticky_effects_offset\":0,\"sticky_anchor_link_offset\":0}"}>
      										<div className="elementor-element elementor-element-ea7a11d e-con-full e-flex e-con e-child" data-id="ea7a11d" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-b2740db elementor-widget elementor-widget-heading" data-id="b2740db" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">3</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-2740aef e-con-full e-flex e-con e-child" data-id="2740aef" data-element_type="container" data-e-type="container">
      												<div className="elementor-element elementor-element-25abd76 elementor-widget elementor-widget-heading" data-id="25abd76" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h5 className="elementor-heading-title elementor-size-default">Offices</h5>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-69e55ad elementor-widget elementor-widget-heading" data-id="69e55ad" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-heading-title elementor-size-default">{vxnMarkets('cities')} &#8212; UAE led with international access.</div>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="vxn-stat-img"><img src={rimg(region, 'homepage/Offices.webp')} alt="Offices" loading="lazy" width={170} height={110} /></div>
      									</div>
      									<div className="elementor-element elementor-element-15cd221 elementor-invisible e-con-full e-flex e-con e-child" data-id="15cd221" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\",\"animation\":\"slideInUp\",\"sticky\":\"top\",\"sticky_offset\":30,\"sticky_parent\":\"yes\",\"sticky_offset_mobile\":60,\"sticky_on\":[\"desktop\",\"tablet\",\"mobile\"],\"sticky_effects_offset\":0,\"sticky_anchor_link_offset\":0}"}>
      										<div className="elementor-element elementor-element-1b1c8e0 e-con-full e-flex e-con e-child" data-id="1b1c8e0" data-element_type="container" data-e-type="container">
      											<div className="elementor-element elementor-element-fbcd209 elementor-widget elementor-widget-heading" data-id="fbcd209" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      												<div className="elementor-widget-container">
      													<span className="elementor-heading-title elementor-size-default">4</span>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-a9f76d0 e-con-full e-flex e-con e-child" data-id="a9f76d0" data-element_type="container" data-e-type="container">
      												<div className="elementor-element elementor-element-c7ae065 elementor-widget elementor-widget-heading" data-id="c7ae065" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<h5 className="elementor-heading-title elementor-size-default">Core Verticals</h5>
      													</div>
      												</div>
      												<div className="elementor-element elementor-element-94016ae elementor-widget elementor-widget-heading" data-id="94016ae" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      													<div className="elementor-widget-container">
      														<div className="elementor-heading-title elementor-size-default">Real estate wealth, capital advisory, research, and technology.</div>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="vxn-stat-img"><img src={rimg(region, 'homepage/Core-Verticals%20.webp')} alt="Core Verticals" loading="lazy" width={170} height={110} /></div>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="elementor-element elementor-element-ea14ed8 e-flex e-con-boxed e-con e-parent" data-id="ea14ed8" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-18c23ab e-con-full e-flex e-con e-child" data-id="18c23ab" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-5dfc195 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="5dfc195" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<span className="elementor-heading-title elementor-size-default">Get in Touch</span>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-583d843 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="583d843" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h2 className="elementor-heading-title elementor-size-default">Discuss Your Next Investment Decision</h2>
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
      								<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-home_full_name elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-home_full_name" className="elementor-field-label">Full Name</label>
      									<input size={1} type="text" name="form_fields[home_full_name]" id="form-field-home_full_name" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Full Name" required />
      								</div>
      								<div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-home_email elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-home_email" className="elementor-field-label">Email</label>
      									<input size={1} type="email" name="form_fields[home_email]" id="form-field-home_email" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required />
      								</div>
      								<div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-home_phone elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-home_phone" className="elementor-field-label">Phone No</label>
      									<input size={1} type="tel" name="form_fields[home_phone]" id="form-field-home_phone" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Phone No" required />
      								</div>
      								<div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-home_company elementor-col-100 elementor-field-required">
      									<label htmlFor="form-field-home_company" className="elementor-field-label">Company Name</label>
      									<input size={1} type="text" name="form_fields[home_company]" id="form-field-home_company" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Company Name" required />
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
      						<div className="elementor-element elementor-element-c50d7c9 e-flex e-con-boxed e-con e-parent" data-id="c50d7c9" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="elementor-element elementor-element-9317f8a e-con-full e-flex e-con e-child" data-id="9317f8a" data-element_type="container" data-e-type="container">
      									<div className="elementor-element elementor-element-fc98675 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="fc98675" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<span className="elementor-heading-title elementor-size-default">Insights</span>
      										</div>
      									</div>
      									<div className="elementor-element elementor-element-73bb323 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="73bb323" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      										<div className="elementor-widget-container">
      											<h2 className="elementor-heading-title elementor-size-default">Research That Strengthens Decisions</h2>
      										</div>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-e3649ed elementor-invisible elementor-widget-tablet__width-initial elementor-widget__width-initial animated-fast elementor-widget elementor-widget-heading" data-id="e3649ed" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":200}"} data-widget_type="heading.default">
      									<div className="elementor-widget-container">
      										<span className="elementor-heading-title elementor-size-default">Stay ahead with the latest business insights, success stories, and industry trends. Explore expert advice, real-world case studies, and actionable strategies to drive growth and innovation in your business.</span>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="elementor-element elementor-element-413d07d e-flex e-con-boxed e-con e-parent" data-id="413d07d" data-element_type="container" data-e-type="container">
      							<div className="e-con-inner">
      								<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-9a8edf1 elementor-pagination-type-bullets elementor-pagination-position-outside elementor-widget elementor-widget-loop-carousel" data-id="9a8edf1" data-element_type="widget" data-e-type="widget" data-settings={"{\"template_id\":\"1961\",\"slides_to_show\":\"4\",\"image_spacing_custom\":{\"unit\":\"px\",\"size\":20,\"sizes\":[]},\"_skin\":\"post\",\"slides_to_show_tablet\":\"2\",\"slides_to_show_mobile\":\"1\",\"slides_to_scroll\":\"1\",\"edit_handle_selector\":\".elementor-loop-container\",\"speed\":500,\"pagination\":\"bullets\",\"image_spacing_custom_tablet\":{\"unit\":\"px\",\"size\":\"\",\"sizes\":[]},\"image_spacing_custom_mobile\":{\"unit\":\"px\",\"size\":\"\",\"sizes\":[]}}"} data-widget_type="loop-carousel.post">
      									<div className="elementor-widget-container">
      										<div className="swiper elementor-loop-container elementor-grid" role="list" dir="ltr">
      											<div className="swiper-wrapper" aria-live="polite">
      												<style id="loop-1961" dangerouslySetInnerHTML={{ __html: `
      													.elementor-1961 .elementor-element.elementor-element-8b3458c {
      														--display: flex;
      														--gap: 15px 15px;
      														--row-gap: 15px;
      														--column-gap: 15px;
      														--padding-top: 0px;
      														--padding-bottom: 0px;
      														--padding-left: 0px;
      														--padding-right: 0px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-e4b59e9 {
      														--display: flex;
      														--flex-direction: row;
      														--container-widget-width: calc((1 - var(--container-widget-flex-grow)) * 100%);
      														--container-widget-height: 100%;
      														--container-widget-flex-grow: 1;
      														--container-widget-align-self: stretch;
      														--flex-wrap-mobile: wrap;
      														--align-items: center;
      														--gap: 10px 10px;
      														--row-gap: 10px;
      														--column-gap: 10px;
      														--padding-top: 0px;
      														--padding-bottom: 0px;
      														--padding-left: 0px;
      														--padding-right: 0px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd>.elementor-widget-container {
      														background-color: var(--e-global-color-vamtam_accent_3);
      														padding: 8px 8px 8px 8px;
      														border-radius: 4px 4px 4px 4px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd:hover .elementor-widget-container {
      														background-color: var(--e-global-color-vamtam_accent_4);
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:last-child) {
      														padding-bottom: calc(10px/2);
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-items:not(.elementor-inline-items) .elementor-icon-list-item:not(:first-child) {
      														margin-top: calc(10px/2);
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item {
      														margin-right: calc(10px/2);
      														margin-left: calc(10px/2);
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-items.elementor-inline-items {
      														margin-right: calc(-10px/2);
      														margin-left: calc(-10px/2);
      													}

      													body.rtl .elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {
      														left: calc(-10px/2);
      													}

      													body:not(.rtl) .elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after {
      														right: calc(-10px/2);
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-icon {
      														width: 14px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-icon i {
      														font-size: 14px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-icon svg {
      														--e-icon-list-icon-size: 14px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-text,
      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-text a {
      														color: var(--e-global-color-597ed21);
      													}

      													.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-item {
      														font-family: var(--e-global-typography-798d94d-font-family), Sans-serif;
      														font-size: var(--e-global-typography-798d94d-font-size);
      														font-weight: var(--e-global-typography-798d94d-font-weight);
      														line-height: var(--e-global-typography-798d94d-line-height);
      													}

      													.elementor-1961 .elementor-element.elementor-element-923a9ab .elementor-icon-list-icon {
      														width: 14px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-923a9ab .elementor-icon-list-icon i {
      														font-size: 14px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-923a9ab .elementor-icon-list-icon svg {
      														--e-icon-list-icon-size: 14px;
      													}

      													.elementor-1961 .elementor-element.elementor-element-923a9ab .elementor-icon-list-item {
      														font-family: var(--e-global-typography-798d94d-font-family), Sans-serif;
      														font-size: var(--e-global-typography-798d94d-font-size);
      														font-weight: var(--e-global-typography-798d94d-font-weight);
      														line-height: var(--e-global-typography-798d94d-line-height);
      													}

      													.elementor-1961 .elementor-element.elementor-element-74fce07 .elementor-heading-title {
      														color: var(--e-global-color-vamtam_accent_6);
      													}

      													.elementor-1961 .elementor-element.elementor-element-74fce07 .elementor-heading-title a:hover,
      													.elementor-1961 .elementor-element.elementor-element-74fce07 .elementor-heading-title a:focus {
      														color: var(--e-global-color-vamtam_accent_1);
      													}

      													.elementor-1961 .elementor-element.elementor-element-abced80 .elementor-widget-container {
      														font-size: var(--e-global-typography-d778ca5-font-size);
      														line-height: var(--e-global-typography-d778ca5-line-height);
      														color: var(--e-global-color-vamtam_accent_8);
      													}

      													@media(max-width:1024px) {
      														.elementor-1961 .elementor-element.elementor-element-8b3458c {
      															--gap: 10px 10px;
      															--row-gap: 10px;
      															--column-gap: 10px;
      														}

      														.elementor-1961 .elementor-element.elementor-element-e4b59e9 {
      															--margin-top: 4px;
      															--margin-bottom: 0px;
      															--margin-left: 0px;
      															--margin-right: 0px;
      														}

      														.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-item {
      															font-size: var(--e-global-typography-798d94d-font-size);
      															line-height: var(--e-global-typography-798d94d-line-height);
      														}

      														.elementor-1961 .elementor-element.elementor-element-923a9ab .elementor-icon-list-item {
      															font-size: var(--e-global-typography-798d94d-font-size);
      															line-height: var(--e-global-typography-798d94d-line-height);
      														}

      														.elementor-1961 .elementor-element.elementor-element-abced80>.elementor-widget-container {
      															margin: -0.3em 0em 0em 0em;
      														}

      														.elementor-1961 .elementor-element.elementor-element-abced80 .elementor-widget-container {
      															font-size: var(--e-global-typography-d778ca5-font-size);
      															line-height: var(--e-global-typography-d778ca5-line-height);
      														}
      													}

      													@media(max-width:767px) {
      														.elementor-1961 .elementor-element.elementor-element-4e1ffcd .elementor-icon-list-item {
      															font-size: var(--e-global-typography-798d94d-font-size);
      															line-height: var(--e-global-typography-798d94d-line-height);
      														}

      														.elementor-1961 .elementor-element.elementor-element-923a9ab .elementor-icon-list-item {
      															font-size: var(--e-global-typography-798d94d-font-size);
      															line-height: var(--e-global-typography-798d94d-line-height);
      														}

      														.elementor-1961 .elementor-element.elementor-element-abced80 .elementor-widget-container {
      															font-size: var(--e-global-typography-d778ca5-font-size);
      															line-height: var(--e-global-typography-d778ca5-line-height);
      														}
      													}
      												` }} />
      												<div data-elementor-type="loop-item" data-elementor-id="1961" className="elementor elementor-1961 swiper-slide e-loop-item e-loop-item-1959 post-1959 post type-post status-publish format-standard has-post-thumbnail hentry category-expert-advice category-industry-insights tag-property tag-taxes" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle="1">
      													<div className="elementor-element elementor-element-8b3458c animated-fast e-flex e-con-boxed e-con e-parent" data-id="8b3458c" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\",\"animation_delay\":100}"}>
      														<div className="e-con-inner">
      															<div className="elementor-element elementor-element-9b0d8db animated-fast elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="9b0d8db" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"none\"}"} data-widget_type="theme-post-featured-image.default">
      																<div className="elementor-widget-container">
      																	<a href={rurl(region, '/blogs/how-high-net-worth-investors-build-wealth-through-real-estate/')}>
      																		<img loading="lazy" decoding="async" width={750} height={1024} src={`${BASE}/assets/content/uploads/blogs/blog-1.webp`} className="attachment-large size-large wp-image-1948" alt="" /> </a>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-e4b59e9 e-con-full e-flex e-con e-child" data-id="e4b59e9" data-element_type="container" data-e-type="container">
      																<div className="elementor-element elementor-element-923a9ab elementor-widget elementor-widget-post-info" data-id="923a9ab" data-element_type="widget" data-e-type="widget" data-widget_type="post-info.default">
      																	<div className="elementor-widget-container">
      																		<ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
      																			<li className="elementor-icon-list-item elementor-repeater-item-3c380d1 elementor-inline-item" itemProp="datePublished">
      																				<span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
      																					<time>July 11, 2026</time> </span>
      																			</li>
      																		</ul>
      																	</div>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-74fce07 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="74fce07" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      																<div className="elementor-widget-container">
      																	<h5 className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/blogs/how-high-net-worth-investors-build-wealth-through-real-estate/')}>How High-Net-Worth Investors Build Wealth Through Real Estate</a></h5>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-abced80 vamtam-show-on-hover elementor-widget elementor-widget-theme-post-excerpt" data-id="abced80" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      																<div className="elementor-widget-container">
      																	For affluent investors, real estate is a disciplined, multi-decade strategy for compounding capital, generating income, and preserving wealth across cycles. </div>
      															</div>
      														</div>
      													</div>
      												</div>
      												<div data-elementor-type="loop-item" data-elementor-id="1961" className="elementor elementor-1961 swiper-slide e-loop-item e-loop-item-1955 post-1955 post type-post status-publish format-standard has-post-thumbnail hentry category-success-story tag-retail-brand-increase tag-sales" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle="1">
      													<div className="elementor-element elementor-element-8b3458c animated-fast e-flex e-con-boxed e-con e-parent" data-id="8b3458c" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\",\"animation_delay\":100}"}>
      														<div className="e-con-inner">
      															<div className="elementor-element elementor-element-9b0d8db animated-fast elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="9b0d8db" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"none\"}"} data-widget_type="theme-post-featured-image.default">
      																<div className="elementor-widget-container">
      																	<a href={rurl(region, '/blogs/capital-planning-for-large-property-developments/')}>
      																		<img loading="lazy" decoding="async" width={750} height={1024} src={`${BASE}/assets/content/uploads/blogs/blog-2.webp`} className="attachment-large size-large wp-image-1949" alt="" /> </a>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-e4b59e9 e-con-full e-flex e-con e-child" data-id="e4b59e9" data-element_type="container" data-e-type="container">
      																<div className="elementor-element elementor-element-923a9ab elementor-widget elementor-widget-post-info" data-id="923a9ab" data-element_type="widget" data-e-type="widget" data-widget_type="post-info.default">
      																	<div className="elementor-widget-container">
      																		<ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
      																			<li className="elementor-icon-list-item elementor-repeater-item-3c380d1 elementor-inline-item" itemProp="datePublished">
      																				<span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
      																					<time>July 11, 2026</time> </span>
      																			</li>
      																		</ul>
      																	</div>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-74fce07 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="74fce07" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      																<div className="elementor-widget-container">
      																	<h5 className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/blogs/capital-planning-for-large-property-developments/')}>Capital Planning for Large Property Developments</a></h5>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-abced80 vamtam-show-on-hover elementor-widget elementor-widget-theme-post-excerpt" data-id="abced80" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      																<div className="elementor-widget-container">
      																	Large developments rarely fail for lack of a good idea &#8212; they fail for lack of a capital plan mapped across the full lifecycle. </div>
      															</div>
      														</div>
      													</div>
      												</div>
      												<div data-elementor-type="loop-item" data-elementor-id="1961" className="elementor elementor-1961 swiper-slide e-loop-item e-loop-item-1953 post-1953 post type-post status-publish format-standard has-post-thumbnail hentry category-success-story tag-property tag-taxes" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle="1">
      													<div className="elementor-element elementor-element-8b3458c animated-fast e-flex e-con-boxed e-con e-parent" data-id="8b3458c" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\",\"animation_delay\":100}"}>
      														<div className="e-con-inner">
      															<div className="elementor-element elementor-element-9b0d8db animated-fast elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="9b0d8db" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"none\"}"} data-widget_type="theme-post-featured-image.default">
      																<div className="elementor-widget-container">
      																	<a href={rurl(region, '/blogs/why-market-intelligence-matters-before-every-property-investment/')}>
      																		<img loading="lazy" decoding="async" width={750} height={1024} src={`${BASE}/assets/content/uploads/blogs/blog-3.webp`} className="attachment-large size-large wp-image-1951" alt="" /> </a>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-e4b59e9 e-con-full e-flex e-con e-child" data-id="e4b59e9" data-element_type="container" data-e-type="container">
      																<div className="elementor-element elementor-element-923a9ab elementor-widget elementor-widget-post-info" data-id="923a9ab" data-element_type="widget" data-e-type="widget" data-widget_type="post-info.default">
      																	<div className="elementor-widget-container">
      																		<ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
      																			<li className="elementor-icon-list-item elementor-repeater-item-3c380d1 elementor-inline-item" itemProp="datePublished">
      																				<span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
      																					<time>July 11, 2026</time> </span>
      																			</li>
      																		</ul>
      																	</div>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-74fce07 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="74fce07" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      																<div className="elementor-widget-container">
      																	<h5 className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/blogs/why-market-intelligence-matters-before-every-property-investment/')}>Why Market Intelligence Matters Before Every Property Investment</a></h5>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-abced80 vamtam-show-on-hover elementor-widget elementor-widget-theme-post-excerpt" data-id="abced80" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      																<div className="elementor-widget-container">
      																	The best investment decisions are made before the deal, not during it &#8212; independent intelligence turns conviction into evidence. </div>
      															</div>
      														</div>
      													</div>
      												</div>
      												<div data-elementor-type="loop-item" data-elementor-id="1961" className="elementor elementor-1961 swiper-slide e-loop-item e-loop-item-1945 post-1945 post type-post status-publish format-standard has-post-thumbnail hentry category-expert-advice tag-business-strategies" data-elementor-post-type="elementor_library" role="group" aria-roledescription="slide" data-custom-edit-handle="1">
      													<div className="elementor-element elementor-element-8b3458c animated-fast e-flex e-con-boxed e-con e-parent" data-id="8b3458c" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\",\"animation_delay\":100}"}>
      														<div className="e-con-inner">
      															<div className="elementor-element elementor-element-9b0d8db animated-fast elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="9b0d8db" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"none\"}"} data-widget_type="theme-post-featured-image.default">
      																<div className="elementor-widget-container">
      																	<a href={rurl(region, '/blogs/the-future-of-automated-valuation-models-avms/')}>
      																		<img loading="lazy" decoding="async" width={750} height={1024} src={`${BASE}/assets/content/uploads/blogs/blog-4.webp`} className="attachment-large size-large wp-image-1950" alt="" /> </a>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-e4b59e9 e-con-full e-flex e-con e-child" data-id="e4b59e9" data-element_type="container" data-e-type="container">
      																<div className="elementor-element elementor-element-923a9ab elementor-widget elementor-widget-post-info" data-id="923a9ab" data-element_type="widget" data-e-type="widget" data-widget_type="post-info.default">
      																	<div className="elementor-widget-container">
      																		<ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
      																			<li className="elementor-icon-list-item elementor-repeater-item-3c380d1 elementor-inline-item" itemProp="datePublished">
      																				<span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
      																					<time>July 11, 2026</time> </span>
      																			</li>
      																		</ul>
      																	</div>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-74fce07 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="74fce07" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      																<div className="elementor-widget-container">
      																	<h5 className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/blogs/the-future-of-automated-valuation-models-avms/')}>The Future of Automated Valuation Models (AVMs)</a></h5>
      																</div>
      															</div>
      															<div className="elementor-element elementor-element-abced80 vamtam-show-on-hover elementor-widget elementor-widget-theme-post-excerpt" data-id="abced80" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      																<div className="elementor-widget-container">
      																	Automated valuation models are reshaping how quickly property can be valued &#8212; knowing their strengths and limits is essential. </div>
      															</div>
      														</div>
      													</div>
      												</div>
      											</div>
      										</div>
      										<div className="swiper-pagination"></div>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="vxn-home-svc-section vxn-home-svc-shifted">
      							<div className="elementor-element elementor-element-85963b4 e-flex e-con-boxed e-con e-parent" data-id="85963b4" data-element_type="container" data-e-type="container">
      								<div className="e-con-inner">
      									<div className="elementor-element elementor-element-04c603a e-con-full e-flex e-con e-child" data-id="04c603a" data-element_type="container" data-e-type="container">
      										<div className="elementor-element elementor-element-118f825 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="118f825" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="heading.default">
      											<div className="elementor-widget-container">
      												<span className="elementor-heading-title elementor-size-default">Explore Our Services</span>
      											</div>
      										</div>
      										<div className="elementor-element elementor-element-e5cafd1 elementor-invisible elementor-widget__width-initial elementor-widget-tablet__width-inherit animated-fast elementor-widget elementor-widget-heading" data-id="e5cafd1" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":100}"} data-widget_type="heading.default">
      											<div className="elementor-widget-container">
      												<h2 className="elementor-heading-title elementor-size-default">Go Deeper Into Each Vertical</h2>
      											</div>
      										</div>
      									</div>
      								</div>
      							</div>
      							<div className="elementor-element elementor-element-0a5fdf3 e-flex e-con-boxed e-con e-parent vxn-svc-grid" data-id="0a5fdf3" data-element_type="container" data-e-type="container">
      								<div className="e-con-inner">
      									<div className="vxn-svc-row">
      										<a className="vxn-svc-card" href={rurl(region, '/services/real-estate-investment-advisory/')}>
      											<div className="vxn-svc-card__media"><img src={rimg(region, 'homepage/industry-1.webp')} alt="Real Estate Investment Advisory" loading="lazy" /></div>
      											<div className="vxn-svc-card__footer">
      												<h4 className="vxn-svc-card__title">Real Estate Investment Advisory</h4>
      												<span className="vxn-svc-card__arrow" aria-hidden="true"><i className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      											</div>
      										</a>
      										<a className="vxn-svc-card" href={rurl(region, '/services/capital-advisory/')}>
      											<div className="vxn-svc-card__media"><img src={rimg(region, 'homepage/industry-2.webp')} alt="Capital Advisory" loading="lazy" /></div>
      											<div className="vxn-svc-card__footer">
      												<h4 className="vxn-svc-card__title">Capital Advisory</h4>
      												<span className="vxn-svc-card__arrow" aria-hidden="true"><i className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      											</div>
      										</a>
      										<a className="vxn-svc-card" href={rurl(region, '/services/research-intelligence/')}>
      											<div className="vxn-svc-card__media"><img src={rimg(region, 'homepage/industry-3.webp')} alt="Research &amp; Intelligence" loading="lazy" /></div>
      											<div className="vxn-svc-card__footer">
      												<h4 className="vxn-svc-card__title">Research &amp; Intelligence</h4>
      												<span className="vxn-svc-card__arrow" aria-hidden="true"><i className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      											</div>
      										</a>
      										<a className="vxn-svc-card" href={rurl(region, '/services/technology-ai/')}>
      											<div className="vxn-svc-card__media"><img src={rimg(region, 'homepage/industry-4.webp')} alt="Technology &amp; AI" loading="lazy" /></div>
      											<div className="vxn-svc-card__footer">
      												<h4 className="vxn-svc-card__title">Technology &amp; AI</h4>
      												<span className="vxn-svc-card__arrow" aria-hidden="true"><i className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      											</div>
      										</a>
      											<a className="vxn-svc-card" href={rurl(region, '/services/')}>
      												<div className="vxn-svc-card__media"><img src={rimg(region, 'homepage/industry-5.webp')} alt="Cross-Border Advisory" loading="lazy" /></div>
      												<div className="vxn-svc-card__footer">
      													<h4 className="vxn-svc-card__title">Cross-Border Advisory</h4>
      													<span className="vxn-svc-card__arrow" aria-hidden="true"><i className="vamtamtheme- vamtam-theme-arrow-right"></i></span>
      												</div>
      											</a>
      									</div>
      								</div>
      							</div>
      						</div>
      						<div className="elementor-element elementor-element-befd5d0 e-con-full e-flex e-con e-parent" data-id="befd5d0" data-element_type="container" data-e-type="container">
      							<div className="elementor-element elementor-element-9356354 elementor-widget elementor-widget-template" data-id="9356354" data-element_type="widget" data-e-type="widget" data-widget_type="template.default">
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
      									</div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      			</article>


      		</div> {/* End of .page-wrapper */}




      	</div>{/* #main */}

      </div>
    </>
  );
}
