<?php
/* Simple page hero — breadcrumb + page name over a background image.
   Reuses the shared single-page (elementor-3752) breadcrumb container so the
   spacing/layout matches About, Location, etc. Expects:
     $PAGE['hero_title'] — the page name (also used in the breadcrumb)
     $PAGE['hero_image'] — image path relative to BASE (e.g. /assets/.../x.webp) */
$__ht  = $PAGE['hero_title'] ?? ($PAGE['title'] ?? 'Page');
$__hi  = $PAGE['hero_image'] ?? '';
$__pid = (int)($PAGE['post_id'] ?? 0);
?>
<style>
	.vxn-simplehero{background-size:cover !important;background-position:center center !important;background-repeat:no-repeat !important;}
	.vxn-simplehero > .e-con-inner{min-height:44vh;justify-content:center;}
	.vxn-simplehero .elementor-heading-title,
	.vxn-simplehero .elementor-heading-title a{color:#ffffff !important;}
	.vxn-simplehero .elementor-heading-title a:hover{opacity:.85;}
	.vxn-simplehero h1.elementor-heading-title{font-size:clamp(40px,6vw,74px);line-height:1.06;}
	.vxn-simplehero .elementor-divider-separator{border-top-color:rgba(255,255,255,.4) !important;}
</style>
<div id="main-content">

	<div id="main" role="main" class="vamtam-main layout-full">

		<article id="post-<?= $__pid ?>" class="full post-<?= $__pid ?> page type-page status-publish hentry">
			<div data-elementor-type="single-page" data-elementor-id="3752" class="elementor elementor-3752 elementor-location-single post-<?= $__pid ?> page type-page status-publish hentry" data-elementor-post-type="elementor_library">
				<div class="elementor-element elementor-element-c4d353f vxn-simplehero e-flex e-con-boxed e-con e-parent" data-id="c4d353f" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}' style="background-image:linear-gradient(rgba(11,26,38,.62),rgba(11,26,38,.72)),url('<?= BASE ?><?= h($__hi) ?>');">
					<div class="e-con-inner">
						<div class="elementor-element elementor-element-6200b41 e-con-full e-flex e-con e-child" data-id="6200b41" data-element_type="container" data-e-type="container">
							<div class="elementor-element elementor-element-7b36cfb e-con-full e-flex e-con e-child" data-id="7b36cfb" data-element_type="container" data-e-type="container">
								<div class="elementor-element elementor-element-c739b5b elementor-widget elementor-widget-heading" data-id="c739b5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
									<div class="elementor-widget-container">
										<span class="elementor-heading-title elementor-size-default"><a href="<?= BASE ?>/">Home</a></span>				</div>
								</div>
								<div class="elementor-element elementor-element-1707a75 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1707a75" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
									<div class="elementor-widget-container">
										<span class="elementor-heading-title elementor-size-default">&gt; <?= h($__ht) ?></span>				</div>
								</div>
							</div>
							<div class="elementor-element elementor-element-3f5733d elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="3f5733d" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
								<div class="elementor-widget-container">
									<div class="elementor-divider">
										<span class="elementor-divider-separator">
										</span>
									</div>
								</div>
							</div>
							<div class="elementor-element elementor-element-8c0b074 e-con-full e-flex e-con e-child" data-id="8c0b074" data-element_type="container" data-e-type="container">
								<div class="elementor-element elementor-element-16f0cb0 elementor-widget elementor-widget-heading" data-id="16f0cb0" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
									<div class="elementor-widget-container">
										<h1 class="elementor-heading-title elementor-size-default"><?= h($__ht) ?></h1>				</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>

	</div><!-- #main -->

</div>
