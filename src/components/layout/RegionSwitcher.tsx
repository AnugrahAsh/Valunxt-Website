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
 *
 * Port of includes/partials/region-switcher.php.
 */
import {
  rswap,
  vxnRegionData,
  vxnRegionLabel,
  vxnRegionList,
  vxnRegionOffices,
} from '@/lib/region';
import RegionFlag from './RegionFlag';
import ClientScript from '@/components/ClientScript';

/** Delegated so every copy of the header (sticky + spacer, desktop + mobile) is
    handled by one listener, whatever order they render in. Rendered once. */
export const REGION_SWITCHER_SCRIPT = `
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
`;

export default function RegionSwitcher({
  region,
  pagePath,
  copy,
}: {
  region: string;
  /** The current page's path inside its edition, e.g. '/services/'. */
  pagePath: string;
  /** Which rendered copy this is (1 = the first, which carries the script). */
  copy: number;
}) {
  const id = `vxn-region-menu-${copy}`;
  const me = vxnRegionData(region);

  return (
    <>
      <div className="vxn-region" data-vxn-region>
        <button
          type="button"
          className="vxn-region__toggle"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls={id}
        >
          <RegionFlag slug={region} />
          <span className="vxn-region__name">{vxnRegionLabel(region)}</span>
          <span className="vxn-region__code">{me.code}</span>
          <svg
            className="vxn-region__caret"
            viewBox="0 0 10 6"
            width="10"
            height="6"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M1 1l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="vxn-region__menu" id={id} role="menu" aria-label="Select country">
          <p className="vxn-region__label">Select your region</p>
          {vxnRegionList().map((r) => {
            const isCurrent = r.slug === region;
            const cities = Object.values(vxnRegionOffices(r.slug)).map((o) => o.city);
            return (
              <a
                key={r.slug}
                className={`vxn-region__item${isCurrent ? ' is-active' : ''}`}
                role="menuitem"
                href={rswap(r.slug, pagePath)}
                hrefLang={r.lang}
                {...(isCurrent ? { 'aria-current': 'true' as const } : {})}
              >
                <span className="vxn-region__item-flag">
                  <RegionFlag slug={r.slug} className="" />
                </span>
                <span className="vxn-region__item-text">
                  <span className="vxn-region__item-name">{r.name}</span>
                  <span className="vxn-region__item-meta">{cities.join(' · ')}</span>
                </span>
                {isCurrent ? (
                  <svg
                    className="vxn-region__tick"
                    viewBox="0 0 12 10"
                    width="12"
                    height="10"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M1 5.2l3.2 3.2L11 1.6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
      {copy === 1 ? <ClientScript id="vxn-region-switcher-js" code={REGION_SWITCHER_SCRIPT} /> : null}
    </>
  );
}
