<?php
// Shared placeholder body for the "Our Group" pages.
// Renders the site's standard page header (breadcrumb + title + subtitle) by
// reusing the single-page template (Elementor id 3752) element ids so the
// styling in post-3752.css applies unchanged, then a "Coming Soon" paragraph.
$__title = $PAGE['hero_title'] ?? ($PAGE['title'] ?? '');
$__sub   = $PAGE['hero_subtitle'] ?? ($PAGE['desc'] ?? '');
?>
<div id="main-content">
	<div id="main" role="main" class="vamtam-main layout-full">
		<article class="full page type-page status-publish hentry">
			<div data-elementor-type="single-page" data-elementor-id="3752" class="elementor elementor-3752 elementor-location-single page type-page status-publish hentry" data-elementor-post-type="elementor_library">
			<div class="elementor-element elementor-element-c4d353f e-flex e-con-boxed e-con e-parent" data-id="c4d353f" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
				<div class="e-con-inner">
			<div class="elementor-element elementor-element-6200b41 e-con-full e-flex e-con e-child" data-id="6200b41" data-element_type="container" data-e-type="container">
			<div class="elementor-element elementor-element-7b36cfb e-con-full e-flex e-con e-child" data-id="7b36cfb" data-element_type="container" data-e-type="container">
					<div class="elementor-element elementor-element-c739b5b elementor-widget elementor-widget-heading" data-id="c739b5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
					<div class="elementor-widget-container">
						<span class="elementor-heading-title elementor-size-default"><a href="<?= BASE ?>">Home</a></span>				</div>
					</div>
					<div class="elementor-element elementor-element-1707a75 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1707a75" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
					<div class="elementor-widget-container">
						<span class="elementor-heading-title elementor-size-default">&gt; <?= h($__title) ?></span>				</div>
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
						<h1 class="elementor-heading-title elementor-size-default"><?= h($__title) ?></h1>				</div>
					</div>
					<div class="elementor-element elementor-element-44a2511 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-excerpt.default">
					<div class="elementor-widget-container">
						<?= h($__sub) ?>				</div>
					</div>
					</div>
					</div>
						</div>
					</div>
			<div class="elementor-element e-flex e-con-boxed e-con e-parent" data-element_type="container">
				<div class="e-con-inner" style="padding:80px 20px 120px;text-align:center;">
					<p style="font-size:28px;">Coming Soon</p>
				</div>
			</div>
				</div>
			</article>
		</div><!-- #main -->
	</div>
