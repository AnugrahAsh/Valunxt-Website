<?php
$__r = __DIR__;
while (!is_file($__r . '/config.php') && dirname($__r) !== $__r) $__r = dirname($__r);
require $__r . '/config.php';
$PAGE = array(
	'title' => 'Location | VALUNXT Capital',
	'desc' => 'Connect with VALUNXT Capital in Dubai, Abu Dhabi and across India. Find the office nearest to you and start a conversation with our advisory team.',
	'og_image' => '/assets/content/uploads/2025/03/valunxt-og.png',
	'body' => 'wp-singular page-template-default page page-id-9001 page-parent wp-custom-logo wp-embed-responsive wp-theme-execor full header-layout-logo-menu has-page-header no-middle-header responsive-layout vamtam-is-elementor elementor-active elementor-pro-active vamtam-wc-cart-empty wc-product-gallery-slider-active vamtam-font-smoothing layout-full elementor-default elementor-kit-5 elementor-page elementor-page-9001 elementor-page-3752',
	'post_css' =>
	array(
		0 => '5',
		1 => '3837',
		2 => '2094',
		3 => '3752',
		'4557',
	),
	'header' => '3837',
	'footer' => '2094',
	'canvas' => false,
	'post_id' => 9001,
	'post_title' => 'Location%20%7C%20VALUNXT%20Capital',
	'post_excerpt' => 'Connect with VALUNXT Capital in Dubai, Abu Dhabi and across India.',
	'active_nav' =>
	array(
		0 => '/location/',
	),
	'inline_css' => '<style>body{--vxn-hero-img:url("{{BASE}}/assets/content/uploads/banners/location.webp") !important}</style>',
	'path' => '/location/',
);
require $__r . '/includes/head.php';
require $__r . '/includes/header.php';
?>
<div id="main-content">

	<div id="main" role="main" class="vamtam-main layout-full">

		<article id="post-9001" class="full post-9001 page type-page status-publish hentry">
			<div data-elementor-type="single-page" data-elementor-id="3752" class="elementor elementor-3752 elementor-location-single post-9001 page type-page status-publish hentry" data-elementor-post-type="elementor_library">
				<div class="elementor-element elementor-element-c4d353f e-flex e-con-boxed e-con e-parent" data-id="c4d353f" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
					<div class="e-con-inner">
						<div class="elementor-element elementor-element-6200b41 e-con-full e-flex e-con e-child" data-id="6200b41" data-element_type="container" data-e-type="container">
							<div class="elementor-element elementor-element-7b36cfb e-con-full e-flex e-con e-child" data-id="7b36cfb" data-element_type="container" data-e-type="container">
								<div class="elementor-element elementor-element-c739b5b elementor-widget elementor-widget-heading" data-id="c739b5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
									<div class="elementor-widget-container">
										<span class="elementor-heading-title elementor-size-default"><a href="<?= BASE ?>/">Home</a></span>
									</div>
								</div>
								<div class="elementor-element elementor-element-1707a75 elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="1707a75" data-element_type="widget" data-e-type="widget" data-widget_type="theme-post-title.default">
									<div class="elementor-widget-container">
										<span class="elementor-heading-title elementor-size-default">&gt; Location</span>
									</div>
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
								<div class="elementor-element elementor-element-16f0cb0 elementor-invisible animated-fast elementor-widget elementor-widget-heading" data-id="16f0cb0" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"slideInUp"}' data-widget_type="heading.default">
									<div class="elementor-widget-container">
										<h1 class="elementor-heading-title elementor-size-default">Location</h1>
									</div>
								</div>
								<div class="elementor-element elementor-element-44a505e elementor-invisible animated-fast elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-theme-post-title elementor-page-title elementor-widget-heading" data-id="44a505e" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"slideInUp"}' data-widget_type="theme-post-title.default">
									<div class="elementor-widget-container">
										<h2 class="elementor-heading-title elementor-size-default">Location</h2>
									</div>
								</div>
								<div class="elementor-element elementor-element-44a2511 elementor-invisible animated-fast elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-theme-post-excerpt" data-id="44a2511" data-element_type="widget" data-e-type="widget" data-settings='{"_animation":"slideInUp","_animation_delay":50}' data-widget_type="theme-post-excerpt.default">
									<div class="elementor-widget-container">
										Connect with VALUNXT Capital in Dubai, Abu Dhabi and across India. Find
										the office nearest to you and start a conversation with our advisory team. </div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</article>

		<!-- Our Locations — driven by includes/site-data.php so the office list,
			     addresses and the one published phone line stay identical here, in
			     the footer and on the Contact page. -->
		<section class="vxn-loc">
			<div class="vxn-loc__head">
				<div class="vxn-loc__head-left">
					<span class="vxn-loc__chip">Our Locations</span>
					<h2 class="vxn-loc__title">Four Offices. One Integrated Platform.</h2>
				</div>
				<p class="vxn-loc__desc"><?= h(vxn_markets('cities')) ?> &#8212; find the office nearest to you and start a conversation with our advisory team.</p>
			</div>
			<div class="vxn-loc__grid">
				<?php
				$__locImg = array('mumbai' => 'mumbai.webp', 'noida' => 'noida.webp', 'abudhabi' => 'abudhabi.webp', 'dubai' => 'dubai.webp');
				foreach (vxn_offices() as $__k => $__o): ?>
					<div class="vxn-loc__card">
						<div class="vxn-loc__media">
							<img src="<?= BASE ?>/assets/content/uploads/new-folder/<?= h($__locImg[$__k] ?? 'mumbai.webp') ?>" alt="<?= h($__o['city']) ?> office" loading="lazy">
							<div class="vxn-loc__panel">
								<h5 class="vxn-loc__city"><?= h($__o['city']) ?><?php if ($__o['note'] !== ''): ?> <span>(<?= h($__o['note']) ?>)</span><?php endif; ?></h5>
								<div class="vxn-loc__company"><?= h($__o['entity']) ?></div>
								<p class="vxn-loc__addr"><a href="<?= h($__o['map']) ?>" target="_blank" rel="noopener"><?= h($__o['address']) ?></a></p>
								<p class="vxn-loc__meta"><strong>Hours:</strong> <?= h($__o['hours']) ?></p>
								<?php if ($__o['phone'] !== ''): ?>
									<p class="vxn-loc__meta"><strong>Phone:</strong> <a href="tel:<?= h($__o['tel']) ?>"><?= h($__o['phone']) ?></a></p>
								<?php endif; ?>
								<p class="vxn-loc__meta"><strong>E-mail:</strong> <a href="mailto:<?= h($__o['email']) ?>"><?= h($__o['email']) ?></a></p>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</section>

		<!-- Our Group Company — the four operating companies, from the same
			     canonical list the navigation and Our Group page use. Each card
			     links to its own page rather than repeating an office address it
			     does not trade from. -->
		<section class="vxn-loc vxn-loc--group">
			<div class="vxn-loc__head">
				<div class="vxn-loc__head-left">
					<span class="vxn-loc__chip">Our Ecosystem</span>
					<h2 class="vxn-loc__title">Our Group Companies</h2>
				</div>
				<p class="vxn-loc__desc">Four specialist firms within the VALUNXT group &#8212; spanning valuation, real estate, mortgage and corporate services across <?= h(vxn_markets('short')) ?>.</p>
			</div>
			<div class="vxn-loc__grid">
				<?php foreach (vxn_companies() as $__c): ?>
					<div class="vxn-loc__card">
						<div class="vxn-loc__media">
							<img src="<?= BASE . h($__c['img']) ?>" alt="<?= h($__c['name']) ?>" loading="lazy">
							<div class="vxn-loc__panel">
								<h5 class="vxn-loc__city"><?= h($__c['name']) ?></h5>
								<div class="vxn-loc__company"><?= h($__c['discipline']) ?></div>
								<p class="vxn-loc__addr"><?= h($__c['blurb']) ?></p>
								<p class="vxn-loc__meta"><a href="<?= BASE . h($__c['url']) ?>">About <?= h($__c['name']) ?> &rarr;</a></p>
								<p class="vxn-loc__meta"><a href="<?= h($__c['site']) ?>" target="_blank" rel="noopener"><?= h(preg_replace('#^https?://#', '', $__c['site'])) ?></a></p>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</section>



		<?php require $__r . '/includes/partials/subscribe-4557.php'; ?>

	</div><!-- #main -->

</div>
<?php require $__r . '/includes/footer.php'; ?>