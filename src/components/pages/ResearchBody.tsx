/**
 * /research/ — page body.
 *
 * Port of research/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style
 * objects) and internal links going through rurl() so they stay in the
 * visitor's market.
 */
import { BASE, rurl } from '@/lib/region';
import ClientScript from '@/components/ClientScript';
import type { PageConfig } from '@/lib/page-config';

export default function ResearchBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <>

      <div id="main-content">

      	<div id="main" role="main" className="vamtam-main layout-full">
      		<article id="post-260" className="full post-260 page type-page status-publish hentry">
      			<div data-elementor-type="single-page" data-elementor-id="3752" className="elementor elementor-3752 elementor-location-single post-260 page type-page status-publish hentry" data-elementor-post-type="elementor_library">
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
      										<span className="elementor-heading-title elementor-size-default">&gt; Research &amp; Reports</span>
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
      										<h1 className="elementor-heading-title elementor-size-default">Research &amp; Reports</h1>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-44a505e elementor-invisible animated-fast elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="44a505e" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\"}"} data-widget_type="theme-post-title.default">
      									<div className="elementor-widget-container">
      										<h2 className="elementor-heading-title elementor-size-default">Research &amp; Reports</h2>
      									</div>
      								</div>
      								<div className="elementor-element elementor-element-44a2511 elementor-invisible animated-fast elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-settings={"{\"_animation\":\"slideInUp\",\"_animation_delay\":50}"} data-widget_type="theme-post-excerpt.default">
      									<div className="elementor-widget-container">
      										Independent research and market reports on the markets we operate in — India and the UAE — grounded in primary data, on-the-ground intelligence, and the discipline we bring to every client mandate. </div>
      								</div>
      							</div>
      						</div>
      					</div>
      				</div>
      				<div className="elementor-element elementor-element-afe1311 e-con-full e-flex e-con e-parent" data-id="afe1311" data-element_type="container" data-e-type="container">
      					<div className="elementor-element elementor-element-9851ed0 elementor-widget elementor-widget-theme-post-content" data-id="9851ed0" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-content.default">
      						<div className="elementor-widget-container">
      							<div data-elementor-type="wp-page" data-elementor-id="260" className="elementor elementor-260" data-elementor-post-type="page">
      								<div className="elementor-element elementor-element-911e5f0 e-flex e-con-boxed e-con e-parent" data-id="911e5f0" data-element_type="container" data-e-type="container">
      									<div className="e-con-inner">
      										<div className="elementor-element elementor-element-0ed97ad elementor-grid-2 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-loop-grid" data-id="0ed97ad" data-element_type="widget" data-e-type="widget" data-settings={"{\"template_id\":\"9230\",\"columns\":2,\"pagination_type\":\"load_more_on_click\",\"row_gap\":{\"unit\":\"px\",\"size\":20,\"sizes\":[]},\"columns_tablet\":2,\"row_gap_tablet\":{\"unit\":\"px\",\"size\":20,\"sizes\":[]},\"_skin\":\"post\",\"columns_mobile\":\"1\",\"edit_handle_selector\":\"[data-elementor-type=\\\"loop-item\\\"]\",\"load_more_spinner\":{\"value\":\"fas fa-spinner\",\"library\":\"fa-solid\"},\"row_gap_mobile\":{\"unit\":\"px\",\"size\":\"\",\"sizes\":[]}}"} data-widget_type="loop-grid.post">
      											<div className="elementor-widget-container">
      												<div className="elementor-loop-container elementor-grid" role="list">
      													<style id="loop-dynamic-9230" dangerouslySetInnerHTML={{ __html: `
      														.e-loop-item-9165 .elementor-element.elementor-element-a51fd27:not(.elementor-motion-effects-element-type-background),
      														.e-loop-item-9165 .elementor-element.elementor-element-a51fd27>.elementor-motion-effects-container>.elementor-motion-effects-layer {
      															background-image: url("${BASE}/assets/content/uploads/new-folder/insights-1.webp");
      														}
      													` }} />
      													<style id="loop-9230" dangerouslySetInnerHTML={{ __html: `
      														.elementor-9230 .elementor-element.elementor-element-0a8606f {
      															--display: flex;
      															--flex-direction: row;
      															--container-widget-width: calc((1 - var(--container-widget-flex-grow)) * 100%);
      															--container-widget-height: 100%;
      															--container-widget-flex-grow: 1;
      															--container-widget-align-self: stretch;
      															--flex-wrap-mobile: wrap;
      															--align-items: stretch;
      															--gap: 25px 25px;
      															--row-gap: 25px;
      															--column-gap: 25px;
      															--background-transition: 0.3s;
      															border-style: solid;
      															--border-style: solid;
      															border-width: 0.5px 0.5px 0.5px 0.5px;
      															--border-top-width: 0.5px;
      															--border-right-width: 0.5px;
      															--border-bottom-width: 0.5px;
      															--border-left-width: 0.5px;
      															border-color: var(--e-global-color-vamtam_accent_7);
      															--border-color: var(--e-global-color-vamtam_accent_7);
      															--border-radius: 10px 10px 10px 10px;
      															--padding-top: 25px;
      															--padding-bottom: 25px;
      															--padding-left: 25px;
      															--padding-right: 25px;
      														}

      														.elementor-9230 .elementor-element.elementor-element-0a8606f:not(.elementor-motion-effects-element-type-background),
      														.elementor-9230 .elementor-element.elementor-element-0a8606f>.elementor-motion-effects-container>.elementor-motion-effects-layer {
      															background-color: var(--e-global-color-vamtam_accent_5);
      														}

      														.elementor-9230 .elementor-element.elementor-element-0a8606f:hover {
      															background-color: var(--e-global-color-vamtam_accent_3);
      														}

      														.elementor-9230 .elementor-element.elementor-element-a51fd27 {
      															--display: flex;
      															--min-height: 410px;
      															--justify-content: flex-end;
      															--gap: 0px 0px;
      															--row-gap: 0px;
      															--column-gap: 0px;
      															--border-radius: 10px 10px 10px 10px;
      															--padding-top: 0px;
      															--padding-bottom: 0px;
      															--padding-left: 0px;
      															--padding-right: 0px;
      														}

      														.elementor-9230 .elementor-element.elementor-element-a51fd27:not(.elementor-motion-effects-element-type-background),
      														.elementor-9230 .elementor-element.elementor-element-a51fd27>.elementor-motion-effects-container>.elementor-motion-effects-layer {
      															background-position: center center;
      															background-repeat: no-repeat;
      															background-size: cover;
      														}

      														.elementor-9230 .elementor-element.elementor-element-b963c6e {
      															--display: flex;
      															--flex-direction: column;
      															--container-widget-width: calc((1 - var(--container-widget-flex-grow)) * 100%);
      															--container-widget-height: initial;
      															--container-widget-flex-grow: 0;
      															--container-widget-align-self: initial;
      															--flex-wrap-mobile: wrap;
      															--justify-content: space-between;
      															--align-items: flex-start;
      															--padding-top: 0px;
      															--padding-bottom: 0px;
      															--padding-left: 0px;
      															--padding-right: 0px;
      														}

      														.elementor-9230 .elementor-element.elementor-element-05d6cfa {
      															text-align: start;
      														}

      														.elementor-9230 .elementor-element.elementor-element-05d6cfa .elementor-heading-title {
      															font-family: var(--e-global-typography-vamtam_h4-font-family), Sans-serif;
      															font-size: var(--e-global-typography-vamtam_h4-font-size);
      															font-weight: var(--e-global-typography-vamtam_h4-font-weight);
      															line-height: var(--e-global-typography-vamtam_h4-line-height);
      															color: var(--e-global-color-vamtam_accent_6);
      														}

      														.elementor-9230 .elementor-element.elementor-element-05d6cfa .elementor-heading-title a:hover,
      														.elementor-9230 .elementor-element.elementor-element-05d6cfa .elementor-heading-title a:focus {
      															color: var(--e-global-color-vamtam_accent_1);
      														}

      														.elementor-9230 .elementor-element.elementor-element-6f295ba .elementor-widget-container {
      															font-family: var(--e-global-typography-vamtam_primary_font-font-family), Sans-serif;
      															font-size: var(--e-global-typography-vamtam_primary_font-font-size);
      															font-weight: var(--e-global-typography-vamtam_primary_font-font-weight);
      															line-height: var(--e-global-typography-vamtam_primary_font-line-height);
      															color: var(--e-global-color-597ed21);
      														}

      														@media(max-width:1024px) {
      															.elementor-9230 .elementor-element.elementor-element-0a8606f {
      																--flex-direction: column;
      																--container-widget-width: 100%;
      																--container-widget-height: initial;
      																--container-widget-flex-grow: 0;
      																--container-widget-align-self: initial;
      																--flex-wrap-mobile: wrap;
      																--gap: 15px 15px;
      																--row-gap: 15px;
      																--column-gap: 15px;
      																--padding-top: 20px;
      																--padding-bottom: 20px;
      																--padding-left: 20px;
      																--padding-right: 20px;
      															}

      															.elementor-9230 .elementor-element.elementor-element-b963c6e {
      																--gap: 15px 15px;
      																--row-gap: 15px;
      																--column-gap: 15px;
      																--margin-top: 0px;
      																--margin-bottom: 0px;
      																--margin-left: 0px;
      																--margin-right: 0px;
      															}

      															.elementor-9230 .elementor-element.elementor-element-05d6cfa .elementor-heading-title {
      																font-size: var(--e-global-typography-vamtam_h4-font-size);
      																line-height: var(--e-global-typography-vamtam_h4-line-height);
      															}

      															.elementor-9230 .elementor-element.elementor-element-6f295ba>.elementor-widget-container {
      																margin: -0.3em 0em 0em 0em;
      															}

      															.elementor-9230 .elementor-element.elementor-element-6f295ba .elementor-widget-container {
      																font-size: var(--e-global-typography-vamtam_primary_font-font-size);
      																line-height: var(--e-global-typography-vamtam_primary_font-line-height);
      															}
      														}

      														@media(max-width:767px) {
      															.elementor-9230 .elementor-element.elementor-element-0a8606f {
      																--gap: 15px 15px;
      																--row-gap: 15px;
      																--column-gap: 15px;
      															}

      															.elementor-9230 .elementor-element.elementor-element-a51fd27 {
      																--min-height: 110vw;
      																--border-radius: 8px 8px 8px 8px;
      															}

      															.elementor-9230 .elementor-element.elementor-element-b963c6e {
      																--gap: 10px 10px;
      																--row-gap: 10px;
      																--column-gap: 10px;
      																--margin-top: 0px;
      																--margin-bottom: 0px;
      																--margin-left: 0px;
      																--margin-right: 0px;
      															}

      															.elementor-9230 .elementor-element.elementor-element-05d6cfa .elementor-heading-title {
      																font-size: var(--e-global-typography-vamtam_h4-font-size);
      																line-height: var(--e-global-typography-vamtam_h4-line-height);
      															}

      															.elementor-9230 .elementor-element.elementor-element-6f295ba .elementor-widget-container {
      																font-size: var(--e-global-typography-vamtam_primary_font-font-size);
      																line-height: var(--e-global-typography-vamtam_primary_font-line-height);
      															}
      														}

      														@media(min-width:768px) {
      															.elementor-9230 .elementor-element.elementor-element-a51fd27 {
      																--width: 50%;
      															}

      															.elementor-9230 .elementor-element.elementor-element-b963c6e {
      																--width: 50%;
      															}
      														}

      														@media(max-width:1024px) and (min-width:768px) {
      															.elementor-9230 .elementor-element.elementor-element-a51fd27 {
      																--width: 100%;
      															}

      															.elementor-9230 .elementor-element.elementor-element-b963c6e {
      																--width: 100%;
      															}
      														}
      													` }} />
      													<div data-elementor-type="loop-item" data-elementor-id="9230" className="elementor elementor-9230 e-loop-item e-loop-item-9165 post-9165 post type-post status-publish format-standard has-post-thumbnail hentry category-case-studies" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
      														<div className="elementor-element elementor-element-0a8606f animated-fast e-flex e-con-boxed e-con e-parent" data-id="0a8606f" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\",\"animation_delay\":100,\"background_background\":\"classic\"}"}>
      															<div className="e-con-inner">
      																<a className="elementor-element elementor-element-a51fd27 e-con-full e-flex e-con e-child" data-id="a51fd27" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"} href="javascript:void(0)">
      																</a>
      																<div className="elementor-element elementor-element-b963c6e e-con-full e-flex e-con e-child" data-id="b963c6e" data-element_type="container" data-e-type="container">
      																	<div className="elementor-element elementor-element-05d6cfa elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="05d6cfa" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      																		<div className="elementor-widget-container">
      																			<h5 className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/research/india-real-estate-outlook-2026/')}>India Real Estate Outlook 2026</a></h5>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-6f295ba elementor-widget elementor-widget-theme-post-excerpt" data-id="6f295ba" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      																		<div className="elementor-widget-container">
      																			A forward view on residential and commercial demand, pricing, and capital flows across India&#8217;s leading metros and emerging corridors. </div>
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      													<style id="loop-dynamic-9230" dangerouslySetInnerHTML={{ __html: `
      														.e-loop-item-9158 .elementor-element.elementor-element-a51fd27:not(.elementor-motion-effects-element-type-background),
      														.e-loop-item-9158 .elementor-element.elementor-element-a51fd27>.elementor-motion-effects-container>.elementor-motion-effects-layer {
      															background-image: url("${BASE}/assets/content/uploads/new-folder/insights-2.webp");
      														}
      													` }} />
      													<div data-elementor-type="loop-item" data-elementor-id="9230" className="elementor elementor-9230 e-loop-item e-loop-item-9158 post-9158 post type-post status-publish format-standard has-post-thumbnail hentry category-case-studies" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
      														<div className="elementor-element elementor-element-0a8606f animated-fast e-flex e-con-boxed e-con e-parent" data-id="0a8606f" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\",\"animation_delay\":100,\"background_background\":\"classic\"}"}>
      															<div className="e-con-inner">
      																<a className="elementor-element elementor-element-a51fd27 e-con-full e-flex e-con e-child" data-id="a51fd27" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"} href="javascript:void(0)">
      																</a>
      																<div className="elementor-element elementor-element-b963c6e e-con-full e-flex e-con e-child" data-id="b963c6e" data-element_type="container" data-e-type="container">
      																	<div className="elementor-element elementor-element-05d6cfa elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="05d6cfa" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      																		<div className="elementor-widget-container">
      																			<h5 className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/research/dubai-residential-market-review/')}>Dubai Residential Market Review</a></h5>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-6f295ba elementor-widget elementor-widget-theme-post-excerpt" data-id="6f295ba" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      																		<div className="elementor-widget-container">
      																			Supply, absorption, and yield trends across Dubai&#8217;s prime and mid-market communities, with a lens on cross-border investor activity. </div>
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      													<style id="loop-dynamic-9230" dangerouslySetInnerHTML={{ __html: `
      														.e-loop-item-9155 .elementor-element.elementor-element-a51fd27:not(.elementor-motion-effects-element-type-background),
      														.e-loop-item-9155 .elementor-element.elementor-element-a51fd27>.elementor-motion-effects-container>.elementor-motion-effects-layer {
      															background-image: url("${BASE}/assets/content/uploads/new-folder/research-intelligence-2.webp");
      														}
      													` }} />
      													<div data-elementor-type="loop-item" data-elementor-id="9230" className="elementor elementor-9230 e-loop-item e-loop-item-9155 post-9155 post type-post status-publish format-standard has-post-thumbnail hentry category-case-studies" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
      														<div className="elementor-element elementor-element-0a8606f animated-fast e-flex e-con-boxed e-con e-parent" data-id="0a8606f" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\",\"animation_delay\":100,\"background_background\":\"classic\"}"}>
      															<div className="e-con-inner">
      																<a className="elementor-element elementor-element-a51fd27 e-con-full e-flex e-con e-child" data-id="a51fd27" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"} href="javascript:void(0)">
      																</a>
      																<div className="elementor-element elementor-element-b963c6e e-con-full e-flex e-con e-child" data-id="b963c6e" data-element_type="container" data-e-type="container">
      																	<div className="elementor-element elementor-element-05d6cfa elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="05d6cfa" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      																		<div className="elementor-widget-container">
      																			<h5 className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/research/nri-investment-trends/')}>NRI Investment Trends</a></h5>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-6f295ba elementor-widget elementor-widget-theme-post-excerpt" data-id="6f295ba" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      																		<div className="elementor-widget-container">
      																			How Non-Resident Indians are allocating to real estate back home &#8212; preferred markets, ticket sizes, structuring, and repatriation patterns. </div>
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      													<style id="loop-dynamic-9230" dangerouslySetInnerHTML={{ __html: `
      														.e-loop-item-9152 .elementor-element.elementor-element-a51fd27:not(.elementor-motion-effects-element-type-background),
      														.e-loop-item-9152 .elementor-element.elementor-element-a51fd27>.elementor-motion-effects-container>.elementor-motion-effects-layer {
      															background-image: url("${BASE}/assets/content/uploads/new-folder/insights-3.webp");
      														}
      													` }} />
      													<div data-elementor-type="loop-item" data-elementor-id="9230" className="elementor elementor-9230 e-loop-item e-loop-item-9152 post-9152 post type-post status-publish format-standard has-post-thumbnail hentry category-case-studies" data-elementor-post-type="elementor_library" data-custom-edit-handle="1">
      														<div className="elementor-element elementor-element-0a8606f animated-fast e-flex e-con-boxed e-con e-parent" data-id="0a8606f" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"none\",\"animation_delay\":100,\"background_background\":\"classic\"}"}>
      															<div className="e-con-inner">
      																<a className="elementor-element elementor-element-a51fd27 e-con-full e-flex e-con e-child" data-id="a51fd27" data-element_type="container" data-e-type="container" data-settings={"{\"background_background\":\"classic\"}"} href="javascript:void(0)">
      																</a>
      																<div className="elementor-element elementor-element-b963c6e e-con-full e-flex e-con e-child" data-id="b963c6e" data-element_type="container" data-e-type="container">
      																	<div className="elementor-element elementor-element-05d6cfa elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="05d6cfa" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
      																		<div className="elementor-widget-container">
      																			<h5 className="elementor-heading-title elementor-size-default"><a href={rurl(region, '/research/commercial-yields-capital-values/')}>Commercial Yields &amp; Capital Values</a></h5>
      																		</div>
      																	</div>
      																	<div className="elementor-element elementor-element-6f295ba elementor-widget elementor-widget-theme-post-excerpt" data-id="6f295ba" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
      																		<div className="elementor-widget-container">
      																			A data-led read on office, retail, and warehousing yields, rental growth, and the spread between capital values across our key markets. </div>
      																	</div>
      																</div>
      															</div>
      														</div>
      													</div>
      												<span className="e-load-more-spinner">
      													<svg aria-hidden="true" className="e-font-icon-svg e-fas-spinner" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      														<path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
      													</svg> </span>

      												<div className="e-load-more-anchor" data-page="1" data-max-page="1" data-next-page=""></div>
      												<div className="e-loop__load-more elementor-button-wrapper">
      													<a className="elementor-button elementor-size-sm" role="button">
      														<span className="elementor-button-content-wrapper">
      															<span className="elementor-button-icon">
      																<i aria-hidden="true" className="vamtamtheme- vamtam-theme-arrow-down"></i> </span>
      															<span className="elementor-button-text">Load More</span>
      														</span>
      													</a>
      												</div>
      												<div className="e-load-more-message"></div>
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
      														<h3 className="elementor-heading-title elementor-size-default">Subscribe for Expert Insights.</h3>
      													</div>
      												</div>
      											</div>
      											<div className="elementor-element elementor-element-c96c2e7 elementor-invisible e-con-full animated-fast e-flex e-con e-child" data-id="c96c2e7" data-element_type="container" data-e-type="container" data-settings={"{\"animation\":\"fadeIn\",\"animation_delay\":150}"}>
      												<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-3b33bfe elementor-widget-tablet__width-inherit elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="3b33bfe" data-element_type="widget" data-e-type="widget" data-settings={"{\"button_width\":\"25\",\"step_next_label\":\"Next\",\"step_previous_label\":\"Previous\",\"button_width_tablet\":\"25\",\"step_type\":\"number_text\",\"step_icon_shape\":\"circle\"}"} data-widget_type="form.default">
      													<div className="elementor-widget-container">
      														<form className="elementor-form" method="post" name="Subscribe" aria-label="Subscribe">
      															<input type="hidden" name="post_id" value="4557" />
      															<input type="hidden" name="form_id" value="3b33bfe" />
      															<input type="hidden" name="referer_title" value="Research &amp; Reports" />

      															<input type="hidden" name="queried_id" value="260" />

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
      		</div></article>






      	</div>

      </div>
      <ClientScript code={`
      /* Make the whole report card clickable through to its detail page (clicking
         anywhere in the card navigates). Purely behavioural — no UI change. */
      (function(){
      	document.querySelectorAll('.elementor-9230.e-loop-item').forEach(function(item){
      		var title = item.querySelector('.elementor-element-05d6cfa a[href]');
      		if (!title) { return; }
      		var href = title.getAttribute('href');
      		var media = item.querySelector('a.elementor-element-a51fd27');
      		if (media) { media.setAttribute('href', href); }
      		var card = item.querySelector('.elementor-element-0a8606f') || item;
      		card.style.cursor = 'pointer';
      		card.addEventListener('click', function(e){
      			if (e.target.closest('a')) { return; } // let real links behave normally
      			if (e.ctrlKey || e.metaKey || e.button === 1) { window.open(href, '_blank'); }
      			else { window.location.href = href; }
      		});
      	});
      })();
      `} />
    </>
  );
}
