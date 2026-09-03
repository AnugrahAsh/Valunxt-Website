'use client';

/**
 * Run one of the site's classic inline scripts, after React has hydrated.
 *
 * The site's behaviour — the Elementor bundles, the hero slider, the reveal-on-
 * scroll animations, the accordions, the carousels — is all classic DOM
 * scripting. None of it may touch the DOM before React hydrates: React would
 * find a tree it did not render, throw a hydration mismatch, and rebuild the
 * page from scratch, wiping every class and handler those scripts had just set
 * up (and never executing a re-created <script>, which React refuses to run).
 *
 * So the scripts are held back and injected here instead. Two details matter:
 *
 *   • The code is appended as a real <script> element rather than eval'd, so it
 *     evaluates in global scope. `var elementorFrontendConfig = …` has to become
 *     `window.elementorFrontendConfig` for the bundles that read it.
 *   • Effects fire in mount order, which is document order, so a page's scripts
 *     still run in the sequence the PHP templates emitted them.
 */
import { useEffect } from 'react';

export default function ClientScript({ code, id }: { code: string; id?: string }) {
  useEffect(() => {
    if (id && document.getElementById(id)) return;
    const el = document.createElement('script');
    if (id) el.id = id;
    el.async = false;
    el.text = code;
    document.body.appendChild(el);
    // Left in place: the scripts it runs bind listeners that outlive this
    // component, and removing the tag would not unbind them anyway.
  }, [code, id]);

  return null;
}
