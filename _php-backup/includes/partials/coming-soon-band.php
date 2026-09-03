<?php
/* Lightweight "Coming Soon" band (h1) rendered BELOW the image page-hero on
   sections not yet published (Research, Community, Clients, Partnership).
   Distinct from coming-soon.php, which renders a full placeholder page body.
   Uses $PAGE['hero_title'] (if set) as a small context eyebrow. */
?>
<style>
.vxn-coming{background:#fff;text-align:center;padding:96px 24px 108px;}
.vxn-coming__inner{max-width:640px;margin:0 auto;}
.vxn-coming__eyebrow{font-family:"DM Sans",sans-serif;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#9C00DD;font-weight:600;margin-bottom:18px;}
.vxn-coming h1.vxn-coming__title{font-family:"Forum",serif!important;font-weight:400!important;color:#0E355F!important;font-size:clamp(40px,6vw,72px);line-height:1.05;margin:0 0 18px;}
.vxn-coming__text{font-family:"DM Sans",sans-serif;color:#5b6670;font-size:17px;line-height:1.7;margin:0 auto 32px;max-width:520px;}
/* Fills by wedge on hover — mechanism in valunxt-brand.css, this only names
   the colour it sweeps. */
.vxn-coming__cta{display:inline-block;padding:14px 30px;background:#0E355F;color:#fff!important;font-family:"DM Sans",sans-serif;font-weight:600;font-size:12px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;border-radius:2px;--vxn-cta-sweep:#0053B7;}
@media(max-width:600px){.vxn-coming{padding:64px 20px 76px;}}
</style>
<section class="vxn-coming">
	<div class="vxn-coming__inner">
<?php if (!empty($PAGE['hero_title'])): ?>
		<div class="vxn-coming__eyebrow"><?= h($PAGE['hero_title']) ?></div>
<?php endif; ?>
		<h1 class="vxn-coming__title">Coming Soon</h1>
		<p class="vxn-coming__text">This section is on its way. We&#8217;re putting the finishing touches in place &#8212; please check back shortly.</p>
		<a class="vxn-coming__cta" href="<?= BASE ?>/contact/">Talk to us</a>
	</div>
</section>
