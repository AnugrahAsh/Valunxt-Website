<?php
/**
 * Country switcher for the header.
 *
 * Renders the current market (flag + name) as a dropdown listing every
 * published edition. Each entry points at the *same page* in the other market
 * (rswap()), so switching country from /en-ae/services/ lands on
 * /en-in/services/ rather than dumping the visitor back at a home page.
 *
 * The header partials render twice (the sticky bar and its spacer), so ids are
 * numbered and the behaviour is delegated from document — nothing depends on
 * which copy loaded first. Styles live in assets/css/valunxt-brand.css.
 */
$__rs_n   = isset($GLOBALS['__vxn_rs_n']) ? ++$GLOBALS['__vxn_rs_n'] : ($GLOBALS['__vxn_rs_n'] = 1);
$__rs_id  = 'vxn-region-menu-' . $__rs_n;
$__rs_cur = vxn_region();
$__rs_all = vxn_regions();
$__rs_me  = vxn_region_data($__rs_cur);
?>
<div class="vxn-region" data-vxn-region>
	<button type="button" class="vxn-region__toggle" aria-haspopup="true" aria-expanded="false" aria-controls="<?= h($__rs_id) ?>">
		<?= vxn_region_flag($__rs_cur) ?>
		<span class="vxn-region__name"><?= h(vxn_region_label($__rs_cur)) ?></span>
		<span class="vxn-region__code"><?= h($__rs_me['code']) ?></span>
		<svg class="vxn-region__caret" viewBox="0 0 10 6" width="10" height="6" aria-hidden="true" focusable="false">
			<path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</button>
	<div class="vxn-region__menu" id="<?= h($__rs_id) ?>" role="menu" aria-label="Select country">
		<p class="vxn-region__label">Select your region</p>
		<?php foreach ($__rs_all as $slug => $r):
			$is  = ($slug === $__rs_cur);
			$off = vxn_region_offices($slug);
			$cities = array();
			foreach ($off as $o) $cities[] = $o['city'];
		?>
			<a class="vxn-region__item<?= $is ? ' is-active' : '' ?>" role="menuitem" href="<?= h(rswap($slug)) ?>" hreflang="<?= h($r['lang']) ?>" <?= $is ? 'aria-current="true"' : '' ?>>
				<span class="vxn-region__item-flag"><?= vxn_region_flag($slug, '') ?></span>
				<span class="vxn-region__item-text">
					<span class="vxn-region__item-name"><?= h($r['name']) ?></span>
					<span class="vxn-region__item-meta"><?= h(implode(' · ', $cities)) ?></span>
				</span>
				<?php if ($is): ?>
					<svg class="vxn-region__tick" viewBox="0 0 12 10" width="12" height="10" aria-hidden="true" focusable="false">
						<path d="M1 5.2l3.2 3.2L11 1.6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				<?php endif; ?>
			</a>
		<?php endforeach; ?>
	</div>
</div>
<?php if ($__rs_n === 1): ?>
	<script id="vxn-region-switcher-js">
		/* Delegated so every copy of the header (sticky + spacer, desktop +
		   mobile) is handled by one listener, whatever order they render in. */
		(function () {
			function closeAll(except) {
				document.querySelectorAll('[data-vxn-region].is-open').forEach(function (el) {
					if (el === except) return;
					el.classList.remove('is-open');
					var b = el.querySelector('.vxn-region__toggle');
					if (b) b.setAttribute('aria-expanded', 'false');
				});
			}
			document.addEventListener('click', function (e) {
				var btn = e.target.closest ? e.target.closest('.vxn-region__toggle') : null;
				if (btn) {
					e.preventDefault();
					var wrap = btn.closest('[data-vxn-region]');
					var open = !wrap.classList.contains('is-open');
					closeAll(wrap);
					wrap.classList.toggle('is-open', open);
					btn.setAttribute('aria-expanded', open ? 'true' : 'false');
					return;
				}
				if (!(e.target.closest && e.target.closest('[data-vxn-region]'))) closeAll(null);
			});
			document.addEventListener('keydown', function (e) {
				if (e.key === 'Escape') closeAll(null);
			});
		})();
	</script>
<?php endif; ?>
