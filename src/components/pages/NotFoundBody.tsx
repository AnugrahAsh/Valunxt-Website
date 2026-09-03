/**
 * /404/ — page body.
 *
 * Port of 404/index.php. The captured Elementor markup is unchanged: the only
 * edits are the ones JSX requires (className, self-closed voids, style
 * objects) and internal links going through rurl() so they stay in the
 * visitor's market.
 */
import { rurl } from '@/lib/region';
import SubscribeSection from '@/components/sections/SubscribeSection';
import type { PageConfig } from '@/lib/page-config';

export default function NotFoundBody({ page, region }: { page: PageConfig; region: string }) {
  return (
    <>

      <div id="main-content">

      	<div id="main" role="main" className="vamtam-main layout-full">

      		<div data-elementor-type="error-404" data-elementor-id="8623" className="elementor elementor-8623 elementor-location-single" data-elementor-post-type="elementor_library">
      			<div className="elementor-element elementor-element-0633303 e-flex e-con-boxed e-con e-parent" data-id="0633303" data-element_type="container" data-e-type="container">
      				<div className="e-con-inner">
      					<div className="elementor-element elementor-element-21aaf89 elementor-widget elementor-widget-heading" data-id="21aaf89" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      						<div className="elementor-widget-container">
      							<span className="elementor-heading-title elementor-size-default">Oops…</span>
      						</div>
      					</div>
      					<div className="elementor-element elementor-element-e842c99 elementor-widget elementor-widget-heading" data-id="e842c99" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      						<div className="elementor-widget-container">
      							<h1 className="elementor-heading-title elementor-size-default">404</h1>
      						</div>
      					</div>
      					<div className="elementor-element elementor-element-398eb3e elementor-widget elementor-widget-heading" data-id="398eb3e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
      						<div className="elementor-widget-container">
      							<h4 className="elementor-heading-title elementor-size-default">The requested page could not be found.</h4>
      						</div>
      					</div>
      					<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-281555f elementor-widget elementor-widget-text-editor" data-id="281555f" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
      						<div className="elementor-widget-container">
      							<p>This page may have been moved or is no longer available.</p>
      						</div>
      					</div>
      					<div className="vamtam-has-theme-widget-styles elementor-element elementor-element-172ed00 elementor-align-center elementor-widget elementor-widget-button" data-id="172ed00" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
      						<div className="elementor-widget-container">
      							<div className="elementor-button-wrapper">
      								<a className="elementor-button elementor-button-link elementor-size-sm" href={rurl(region, '/')}>
      									<span className="elementor-button-content-wrapper">
      										<span className="elementor-button-text">Back to home</span>
      									</span>
      								</a>
      							</div>
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>



      		<SubscribeSection page={page} region={region} />

      	</div>{/* #main */}

      </div>
    </>
  );
}
