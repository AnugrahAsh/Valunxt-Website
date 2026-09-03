'use client';

/**
 * Runs the site's script block, in order, once React has hydrated.
 *
 * `includes/scripts.php` was a strictly ordered list: seven inline fixes, then
 * jQuery, then the Elementor runtime, then a config object, then the bundles
 * that read it, and so on. Order is not cosmetic — `wp.i18n.setLocaleData(…)`
 * is meaningless before `i18n.min.js` has loaded, and Elementor's frontend
 * reads `elementorFrontendConfig` at evaluation time.
 *
 * Under PHP the browser's parser gave us more than order, though: it gave us
 * *contiguity*. No timer, microtask or animation frame can run between two
 * parser-executed scripts. That matters here because Elementor's
 * `frontend.min.js` schedules `elementorFrontend.init()` from a
 * `jQuery(document).ready` callback, and on an already-ready document jQuery
 * defers those through `setTimeout`. Load the bundles one await at a time and
 * that timer fires in the gap left by a network round trip — Elementor
 * initialises, scans the page and attaches its handlers *before* Elementor
 * Pro's `elements-handlers.min.js` has registered any of them. The visible
 * symptom is a widget that renders but never wakes up: the Insights loop
 * carousel stays four full-width stacked slides because its Swiper is never
 * constructed.
 *
 * So the sources are fetched first, all in parallel, and only then executed —
 * back to back, synchronously, with nothing awaited in between. Setting
 * `script.text` runs the code the moment the node is appended, so the whole
 * block executes in a single task exactly as the parser ran it.
 */
import { useEffect } from 'react';

export type ScriptItem =
  | { kind: 'src'; src: string }
  | { kind: 'inline'; code: string; id?: string };

/** Appends a script whose code is already in hand; it executes synchronously. */
function run(code: string, id?: string) {
  const el = document.createElement('script');
  if (id) el.id = id;
  el.async = false;
  el.text = code;
  document.body.appendChild(el);
}

/** Falls back to a real `<script src>` for anything that would not fetch. */
function loadExternal(src: string): Promise<void> {
  return new Promise((resolve) => {
    const el = document.createElement('script');
    el.src = src;
    // Injected scripts default to async; false restores parser-order execution.
    el.async = false;
    el.onload = () => resolve();
    // A missing bundle must not stall the rest of the page — the PHP build
    // would have carried on too.
    el.onerror = () => resolve();
    document.body.appendChild(el);
  });
}

export default function ScriptRunner({ items }: { items: ScriptItem[] }) {
  useEffect(() => {
    // One page load runs this once; a second pass would re-register handlers.
    if (document.documentElement.dataset.vxnScripts === 'done') return;
    document.documentElement.dataset.vxnScripts = 'done';

    let cancelled = false;

    (async () => {
      // Every external is preloaded from the head, so these resolve from cache.
      // `null` means the fetch failed and the item falls back to a <script src>.
      const sources = await Promise.all(
        items.map(async (item) => {
          if (item.kind !== 'src') return null;
          try {
            const res = await fetch(item.src, { credentials: 'same-origin' });
            return res.ok ? await res.text() : null;
          } catch {
            return null;
          }
        }),
      );
      if (cancelled) return;

      // From here on: no awaits while any source is in hand, so no timer can
      // interleave and Elementor's deferred init lands after the last bundle.
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        if (item.kind === 'inline') {
          run(item.code, item.id);
        } else if (sources[i] !== null) {
          run(`${sources[i]}\n//# sourceURL=${item.src}`);
        } else {
          // eslint-disable-next-line no-await-in-loop
          await loadExternal(item.src);
          if (cancelled) return;
        }
      }
    })();

    return () => {
      cancelled = true;
    };
    // `items` is rebuilt on every render but is constant for a page load; the
    // guard above makes a repeat pass a no-op regardless.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
