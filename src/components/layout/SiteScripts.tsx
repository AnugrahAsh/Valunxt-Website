/**
 * Everything includes/scripts.php emitted before </body>, in the same order.
 *
 * The site navigates with plain <a href> rather than next/link — exactly as the
 * PHP build did — so every page load re-runs these in order. That is deliberate:
 * jQuery, SmartMenus and the Elementor frontend bundles all bind on load and
 * expect a fresh document, and a client-side route transition would leave them
 * bound to markup that had been replaced.
 *
 * The list is handed to ScriptRunner rather than rendered as <script> tags: none
 * of it may run before React hydrates, or the DOM these scripts mutate stops
 * matching the tree React is hydrating and the whole page is rebuilt from
 * scratch — taking the classes, handlers and Elementor instances with it.
 * ScriptRunner replays them, in this order, the moment hydration ends.
 */
import { BASE, vxnRegion, type RegionSlug } from '@/lib/region';
import type { PageConfig } from '@/lib/page-config';
import ScriptRunner, { type ScriptItem } from './ScriptRunner';

const SCROLL_AND_NAV = `
(function(){
  /* Sticky navbar stuck-state: after 60px of scroll add .vxn-nav-stuck to <html>
     so the pinned header gains its scrolled shadow (see valunxt-brand.css). */
  var root = document.documentElement, navTicking = false;
  function navUpdate(){ navTicking = false;
    var y = window.pageYOffset || root.scrollTop || 0;
    root.classList.toggle('vxn-nav-stuck', y > 60);
  }
  function navScroll(){ if (!navTicking){ navTicking = true; requestAnimationFrame(navUpdate); } }
  window.addEventListener('scroll', navScroll, { passive: true });
  navUpdate();
})();
(function(){
  /* Open-menu state: while a header dropdown (a mega sheet or the plain About
     list) is hovered or holds focus, put .vxn-nav-open on <html>. The panels are
     full-width white slabs hanging off the bar, so the bar has to take the same
     background and invert its logo and type — otherwise white type on white.
     CSS does the painting; this only tracks when to paint (see the
     ".vxn-nav-open" block in valunxt-brand.css).

     Read off :hover rather than tracked per item: the panel is a descendant of
     the <li>, so one query answers "is any menu open" however the pointer got
     there, and there is no state to fall out of sync. The desktop bar is
     display:none below 1400px, where the burger drawer takes over, so nothing
     here can fire on mobile. */
  var root = document.documentElement;
  var SEL  = '.elementor-location-header nav.elementor-nav-menu--main li.menu-item-has-children';
  function sync(){
    var open = false;
    try { open = !!document.querySelector(SEL + ':hover, ' + SEL + ':focus-within'); } catch (e) {}
    root.classList.toggle('vxn-nav-open', open);
  }
  function bind(){
    var heads = document.querySelectorAll('.elementor-location-header');
    if (!heads.length) return;
    Array.prototype.forEach.call(heads, function(h){
      ['mouseover', 'mouseout', 'focusin', 'focusout'].forEach(function(t){
        h.addEventListener(t, sync, { passive: true });
      });
    });
    /* Tabbing away or switching windows leaves nothing hovered. */
    window.addEventListener('blur', function(){ root.classList.remove('vxn-nav-open'); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
(function(){
  var btn = document.getElementById('scroll-to-top');
  if (!btn) return;
  var ticking = false;
  function update(){
    ticking = false;
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    // Show after scrolling past ~60% of the viewport height (min 300px).
    var threshold = Math.max(300, window.innerHeight * 0.6);
    btn.classList.toggle('vxn-visible', y > threshold);
  }
  function onScroll(){ if (!ticking){ ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
`;

const KLAY_ACCORDION = `
/* Valunxt home: Klay-style services accordion (.vxn-klay).
   Desktop pointer: hovering (or keyboard-focusing) a collapsed strip moves the
   expansion to it. Desktop TOUCH (no hover): the first tap expands the panel
   instead of navigating; a second tap follows the link. Below 1025px the CSS
   stacks the panels as full cards, so taps navigate directly. */
(function(){
  function init(){
    var rows = document.querySelectorAll('.vxn-klay');
    if (!rows.length) return;
    var mqDesktop = window.matchMedia('(min-width: 1025px)');
    var mqHover = window.matchMedia('(hover: hover)');
    Array.prototype.forEach.call(rows, function(row){
      var panels = row.querySelectorAll('.vxn-klay__panel');
      function activate(panel){
        Array.prototype.forEach.call(panels, function(p){
          p.classList.toggle('is-active', p === panel);
        });
      }
      Array.prototype.forEach.call(panels, function(panel){
        panel.addEventListener('mouseenter', function(){
          if (mqDesktop.matches && mqHover.matches) activate(panel);
        });
        panel.addEventListener('focusin', function(){
          if (mqDesktop.matches) activate(panel);
        });
        panel.addEventListener('click', function(e){
          if (mqDesktop.matches && !panel.classList.contains('is-active')){
            e.preventDefault();
            activate(panel);
          }
        });
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
`;

const NAVY_GRADIENT = `
/* Valunxt brand: promote flat dark-navy section fills to the navy gradient
   (scales across all pages; solid navy #0053B7/#0E355F already applied by CSS). */
(function(){
  var NAVY = 'linear-gradient(90deg, #0053B7 0%, #0E355F 100%)';
  var DARK = {'rgb(14, 53, 95)':1, 'rgb(0, 83, 183)':1}; // #0E355F, #0053B7
  function promote(){
    var els = document.querySelectorAll('.elementor-element, section, .e-con, .elementor-widget-wrap, .elementor-column-wrap');
    for (var i=0;i<els.length;i++){
      var el = els[i];
      if (el.__vxnGrad) continue;
      var cs = getComputedStyle(el);
      if (!DARK[cs.backgroundColor]) continue;
      if ((cs.backgroundImage||'none').indexOf('gradient') > -1) continue;
      if ((cs.backgroundImage||'none').indexOf('url(') > -1) continue;
      var r = el.getBoundingClientRect();
      if (r.width < 400 || r.height < 90) continue;
      el.style.backgroundImage = NAVY;
      el.__vxnGrad = 1;
    }
  }
  document.addEventListener('DOMContentLoaded', promote);
  window.addEventListener('load', promote);
})();
`;

const ENTRANCE_ANIMATIONS = `
/* Valunxt fix: trigger Elementor entrance animations on scroll.
   On this static conversion Elementor's own observer doesn't fire, so elements
   carrying an entrance animation stay stuck with \`.elementor-invisible\`
   (visibility:hidden) and never appear/animate. We reproduce Elementor's
   behaviour: when such an element enters the viewport, drop \`elementor-invisible\`
   and add the \`animated <name>\` classes (keyframes + duration CSS are already
   loaded in the head). Uses an IntersectionObserver with a scroll-position
   fallback so it works even where IO is unreliable. */
(function(){
  function settings(el){ try { return JSON.parse(el.getAttribute('data-settings')||'{}'); } catch(e){ return {}; } }
  function animName(s){
    var n = s._animation || s.animation || s._animation_tablet || s._animation_mobile
         || s.animation_tablet || s.animation_mobile;
    return (n && n !== 'none') ? n : null;
  }
  function reveal(el){
    if (el.__vxnRevealed) return; el.__vxnRevealed = 1;
    var s = settings(el), name = animName(s);
    var delay = parseInt(s._animation_delay || s.animation_delay || 0, 10) || 0;
    setTimeout(function(){
      el.classList.remove('elementor-invisible');
      if (name) { el.classList.add('animated', name); }
    }, delay);
  }
  var items = [];
  function inView(el){
    var r = el.getBoundingClientRect();
    var h = window.innerHeight || document.documentElement.clientHeight;
    return r.top < h * 0.92 && r.bottom > 0;
  }
  function check(){
    if (!items.length) return;
    var rest = [];
    for (var i = 0; i < items.length; i++){
      var el = items[i];
      if (!el.__vxnRevealed && inView(el)) reveal(el);
      if (!el.__vxnRevealed) rest.push(el);
    }
    items = rest;
  }
  var ticking = false;
  function onScroll(){ if (ticking) return; ticking = true;
    requestAnimationFrame(function(){ ticking = false; check(); }); }
  function start(){
    items = Array.prototype.slice.call(document.querySelectorAll('.elementor-invisible'));
    if (!items.length) return;
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries, obs){
        entries.forEach(function(en){ if (en.isIntersecting){ reveal(en.target); obs.unobserve(en.target); } });
      }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      items.forEach(function(el){ io.observe(el); });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    check(); // reveal anything already above the fold
    // Zero-size elements (decorative watermarks, absolutely-positioned accents)
    // never intersect at threshold 0.05 and fail the r.bottom > 0 fallback, so
    // they would stay invisible forever. After load has settled, reveal any
    // still-hidden element whose box is zero.
    window.addEventListener('load', function(){
      setTimeout(function(){
        items.slice().forEach(function(el){
          var r = el.getBoundingClientRect();
          if (!r.width || !r.height) reveal(el);
        });
      }, 400);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
`;

const STICKY_EFFECT = `
/* Valunxt fix: reproduce Elementor Pro "sticky" scroll effect (e.g. the stacking
   stat cards in the "Our Clients" section: 10+ / 100+ / $500M / 95% / $1B+).
   Elementor Pro's sticky handler doesn't run on this static build, so elements
   configured sticky stay position:relative and never stack. No content ancestor
   uses overflow/transform, so native position:sticky reproduces it faithfully.
   Applies each element's own configured offset (responsive; respects sticky_on).
   Header/footer chrome is excluded. */
(function(){
  function device(){ var w = window.innerWidth || document.documentElement.clientWidth;
    return w <= 767 ? 'mobile' : (w <= 1024 ? 'tablet' : 'desktop'); }
  function parse(el){ try { return JSON.parse(el.getAttribute('data-settings')||'{}'); } catch(e){ return {}; } }
  var els = Array.prototype.filter.call(document.querySelectorAll('[data-settings]'), function(el){
    var s = parse(el);
    return (s.sticky === 'top' || s.sticky === 'bottom')
        && !el.closest('.elementor-location-header, .elementor-location-footer');
  });
  function toNum(v){ return (typeof v === 'number') ? v : (parseInt(v, 10) || 0); }
  function offsetFor(s, dev){
    var v;
    if (dev === 'mobile') v = s.sticky_offset_mobile;
    else if (dev === 'tablet') v = s.sticky_offset_tablet;
    if (v === undefined || v === null || v === '') v = s.sticky_offset;
    return toNum(v);
  }
  function enabled(s, dev){ return !s.sticky_on || s.sticky_on.indexOf(dev) > -1; }
  function apply(){
    var dev = device();
    els.forEach(function(el){
      var s = parse(el);
      var side = s.sticky === 'bottom' ? 'bottom' : 'top';
      el.style.removeProperty('top'); el.style.removeProperty('bottom');
      if (!enabled(s, dev)) { el.style.removeProperty('position'); return; }
      el.style.setProperty('position', 'sticky', 'important');
      el.style.setProperty(side, offsetFor(s, dev) + 'px', 'important');
    });
  }
  function start(){
    if (!els.length) return;
    apply();
    var t; window.addEventListener('resize', function(){ clearTimeout(t); t = setTimeout(apply, 150); }, { passive: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
`;

const LAZY_BACKGROUNDS = `
const lazyloadRunObserver = () => {
  const lazyloadBackgrounds = document.querySelectorAll( \`.e-con.e-parent:not(.e-lazyloaded)\` );
  const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
    entries.forEach( ( entry ) => {
      if ( entry.isIntersecting ) {
        let lazyloadBackground = entry.target;
        if( lazyloadBackground ) { lazyloadBackground.classList.add( 'e-lazyloaded' ); }
        lazyloadBackgroundObserver.unobserve( entry.target );
      }
    });
  }, { rootMargin: '200px 0px 200px 0px' } );
  lazyloadBackgrounds.forEach( ( lazyloadBackground ) => { lazyloadBackgroundObserver.observe( lazyloadBackground ); } );
};
const events = [ 'DOMContentLoaded', 'elementor/lazyload/observe' ];
events.forEach( ( event ) => { document.addEventListener( event, lazyloadRunObserver ); } );
`;

const IFRAME_LAZYRENDER = `
if ( top.location !== location ) { window.addEventListener( 'load', function() { document.querySelectorAll('[data-wpr-lazyrender]').forEach(el => delete el.dataset.wprLazyrender ); } ); }
`;

const VAMTAM_FRONT = `
var VAMTAM_FRONT = {"ajaxurl":"${BASE}/form-handler/","jspath":"${BASE}/assets/content/themes/execor/vamtam/assets/js/","max_breakpoint":"1025","medium_breakpoint":"768","content_width":"1280","enable_ajax_add_to_cart":"","widget_mods_list":{"button":{"label":"Button"},"icon":{"label":"Icon"},"container":{"label":"Container"},"loop-carousel":{"label":"Loop Carousel"},"nav-menu":{"label":"Nav Menu"},"form":{"label":"Form"},"toggle":{"label":"Toggle"},"text-editor":{"label":"Text Editor"},"post-comments":{"label":"Post Comments"}}};
`;

function elementorConfig(page: PageConfig): string {
  return `var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.2","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"theme_builder_v2":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"e_pro_variables":true,"e_pro_interactions":true},"urls":{"assets":"${BASE}\\/assets\\/content\\/plugins\\/elementor\\/assets\\/","ajaxurl":"${BASE}\\/form-handler/","uploadUrl":"${BASE}\\/assets\\/content\\/uploads"},"nonces":{"floatingButtonsClickTracking":"a7e3ca7ba1","atomicFormsSendForm":"eb5257ca97"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"body_background_background":"classic","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","vamtam_theme_button":"yes","vamtam_theme_icon":"yes","vamtam_theme_container":"yes","vamtam_theme_loop-carousel":"yes","vamtam_theme_nav-menu":"yes","vamtam_theme_form":"yes","vamtam_theme_toggle":"yes","vamtam_theme_text-editor":"yes","vamtam_theme_post-comments":"yes"},"post":{"id":${Number(page.post_id ?? 0)},"title":"${page.post_title ?? ''}","excerpt":"${page.post_excerpt ?? ''}","featuredImage":false}};`;
}

const PRO_CONFIG = `var ElementorProFrontendConfig = {"ajaxurl":"${BASE}\\/form-handler/","nonce":"68f45e372b","urls":{"assets":"${BASE}\\/assets\\/content\\/plugins\\/elementor-pro\\/assets\\/","rest":"${BASE}\\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":false},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"${BASE}\\/assets\\/content\\/plugins\\/elementor-pro\\/modules\\/lottie\\/assets\\/animations\\/default.json"}};`;

/* Restore per-page active navigation state (server-rendered in WordPress,
   captured at build).

   Pages declare this path unprefixed — active_nav: ['/about/'] — but every
   internal link carries the visitor's edition, so the header renders
   /en-ae/about/. Comparing the two never matched, which is why the active item
   only ever appeared on the home pages. Publish both spellings and let whichever
   one is on the page win; the spare entry matches nothing and costs nothing. */
function activeNavScript(page: PageConfig, region: string): string {
  const act: string[] = [];
  for (const p of page.active_nav ?? []) {
    act.push((BASE + p).replace(/\/+$/, '') || '/');
    act.push((BASE + '/' + region + p).replace(/\/+$/, '') || '/');
  }
  const unique = Array.from(new Set(act));
  return `
window.__EXEC_ACTIVE = ${JSON.stringify(unique)};
(function(){
  var active = window.__EXEC_ACTIVE || [];
  if (!active.length) return;
  function norm(p){ try { p = new URL(p, location.href).pathname; } catch(e){ return p; }
    return p.replace(/\\/+$/,'') || '/'; }
  var want = active.map(norm);
  document.querySelectorAll('a.elementor-item, a.elementor-sub-item').forEach(function(a){
    var href = a.getAttribute('href'); if(!href || href.charAt(0)==='#') return;
    if (want.indexOf(norm(href)) === -1) return;
    a.classList.add('elementor-item-active');
    a.setAttribute('aria-current','page');
    var li = a.closest('li'); if(li){ li.classList.add('current-menu-item');
      var pl = li.parentElement ? li.parentElement.closest('li.menu-item-has-children') : null;
      while (pl){ pl.classList.add('current-menu-ancestor');
        var pa = pl.querySelector(':scope > a.elementor-item'); if(pa) pa.classList.add('elementor-item-active');
        pl = pl.parentElement ? pl.parentElement.closest('li.menu-item-has-children') : null; }
    }
  });
})();
`;
}

const LEAD_FORMS = `
/* Valunxt lead-capture forms: (1) initialise intl-tel-input on the phone field
   (country-code + flag dropdown), (2) client-side validation of all four fields
   before submit, (3) on a valid submit, rewrite the phone value to the full
   international (E.164) number. Targets every tel field inside an Elementor form
   (only the Contact / Free Consultation / enquiry forms have one), so it is a
   harmless no-op on pages without a lead form. */
(function(){
  var EMAIL_RE = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;

  function group(el){ return el ? el.closest('.elementor-field-group') : null; }

  function clearError(g){
    if (!g) return;
    g.classList.remove('vxn-invalid');
    var m = g.querySelector('.vxn-field-error');
    if (m) m.parentNode.removeChild(m);
  }

  function showError(g, text){
    if (!g) return;
    g.classList.add('vxn-invalid');
    var m = g.querySelector('.vxn-field-error');
    if (!m){ m = document.createElement('span'); m.className = 'vxn-field-error'; g.appendChild(m); }
    m.textContent = text;
  }

  function validate(form, iti){
    var ok = true, firstBad = null;
    function check(el, valid, text){
      var g = group(el);
      if (valid){ clearError(g); }
      else { showError(g, text); ok = false; if (!firstBad) firstBad = el; }
    }
    var name  = form.querySelector('input[id$="_full_name"]');
    var email = form.querySelector('input[id$="_email"]');
    var phone = form.querySelector('input[type="tel"]');
    var comp  = form.querySelector('input[id$="_company"]');

    if (name)  check(name, name.value.trim().length >= 2, 'Please enter your full name.');
    if (email) check(email, EMAIL_RE.test(email.value.trim()), 'Please enter a valid email address.');
    if (phone){
      var pv = phone.value.trim(), valid;
      if (iti && window.intlTelInputUtils && typeof iti.isValidNumber === 'function'){
        valid = pv !== '' && iti.isValidNumber();
      } else {
        valid = pv.replace(/[^0-9]/g, '').length >= 6; // fallback until utils.js loads
      }
      check(phone, valid, pv === '' ? 'Please enter your phone number.' : 'Please enter a valid phone number.');
    }
    if (comp)  check(comp, comp.value.trim() !== '', 'Please enter your company name.');

    if (firstBad){ try { firstBad.focus(); } catch(e){} }
    return ok;
  }

  /* Which country should the dial-code selector open on?
     It used to be hard-coded to 'ae', so an India-first site greeted every
     visitor with +971. We infer it from the browser instead — IANA timezone
     first (the most reliable signal, and the one that survives an en-US
     browser used from Mumbai), then the region subtag of the locale. Both are
     local reads: no geo-IP request, nothing to block, no privacy surprise.
     India is the fallback because that is where most of the traffic and both
     of the larger offices are; the visitor can always change it. */
  var TZ_COUNTRY = {
    'Asia/Kolkata': 'in', 'Asia/Calcutta': 'in',
    'Asia/Dubai': 'ae',
    'Asia/Qatar': 'qa', 'Asia/Riyadh': 'sa', 'Asia/Kuwait': 'kw',
    'Asia/Bahrain': 'bh', 'Asia/Muscat': 'om',
    'Asia/Karachi': 'pk', 'Asia/Dhaka': 'bd', 'Asia/Colombo': 'lk',
    'Asia/Kathmandu': 'np', 'Asia/Singapore': 'sg', 'Asia/Hong_Kong': 'hk',
    'Europe/London': 'gb', 'America/Toronto': 'ca', 'Australia/Sydney': 'au'
  };

  function detectCountry(){
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz){
        if (TZ_COUNTRY[tz]) return TZ_COUNTRY[tz];
        // Any other America/* or Europe/* zone we have not listed: fall back
        // to the locale rather than guessing a country from the continent.
      }
    } catch(e){}
    try {
      var loc = navigator.languages && navigator.languages.length
              ? navigator.languages[0] : navigator.language;
      // "en-IN" -> "in", "ar-AE" -> "ae". Ignore bare "en" (no region).
      var m = /^[a-z]{2,3}[-_]([A-Za-z]{2})$/.exec(loc || '');
      if (m) return m[1].toLowerCase();
    } catch(e){}
    return 'in';
  }

  function init(){
    if (!window.intlTelInput) return;
    var inputs = document.querySelectorAll('.elementor-form input[type="tel"]');
    var country = detectCountry();
    Array.prototype.forEach.call(inputs, function(input){
      if (input.__vxnIti) return; input.__vxnIti = true;
      var iti = window.intlTelInput(input, {
        initialCountry: country,
        preferredCountries: ['in', 'ae', 'gb', 'us'],
        separateDialCode: true,
        autoPlaceholder: 'aggressive',
        dropdownContainer: document.body,
        utilsScript: '${BASE}/assets/vendor/intl-tel-input/js/utils.js'
      });
      var form = input.closest('form');
      if (!form || form.__vxnBound) return;
      form.__vxnBound = true;
      form.setAttribute('novalidate', 'novalidate'); // use our messages, not the browser's

      // Clear a field's error as soon as the user edits it.
      form.addEventListener('input', function(e){
        var g = e.target && e.target.closest ? e.target.closest('.elementor-field-group') : null;
        if (g) clearError(g);
      });

      // Validate on submit (capture phase, before Elementor's own handler).
      form.addEventListener('submit', function(e){
        if (!validate(form, iti)){
          e.preventDefault();
          e.stopImmediatePropagation();
          return;
        }
        var full = iti.getNumber();
        if (full) input.value = full;
      }, true);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
`;

/** The vendor bundles, in the order the PHP build loaded them. */
const VENDOR_BEFORE_ELEMENTOR = [
  '/assets/lib/js/jquery/jquery.min.js',
  '/assets/lib/js/jquery/jquery-migrate.min.js',
  '/assets/content/themes/execor/vamtam/assets/js/all.min.js',
  '/assets/content/plugins/elementor/assets/js/webpack.runtime.min.js',
  '/assets/content/plugins/elementor/assets/js/frontend-modules.min.js',
  '/assets/lib/js/jquery/ui/core.min.js',
];

const VENDOR_AFTER_ELEMENTOR = [
  '/assets/content/plugins/elementor/assets/js/frontend.min.js',
  '/assets/content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js',
  '/assets/content/plugins/vamtam-elementor-integration-execor/assets/js/widgets/nav-menu/vamtam-nav-menu.min.js',
  '/assets/content/plugins/vamtam-elementor-integration-execor/assets/js/widgets/button/vamtam-button.min.js',
  '/assets/lib/js/imagesloaded.min.js',
  '/assets/content/plugins/vamtam-elementor-integration-execor/assets/js/widgets/form/vamtam-form.min.js',
  '/assets/content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js',
  '/assets/lib/js/dist/hooks.min.js',
  '/assets/lib/js/dist/i18n.min.js',
];

const VENDOR_AFTER_PRO_CONFIG = [
  '/assets/content/plugins/elementor-pro/assets/js/frontend.min.js',
  '/assets/content/plugins/elementor-pro/assets/js/elements-handlers.min.js',
  '/assets/content/plugins/elementor/assets/lib/dialog/dialog.min.js',
  '/assets/content/plugins/vamtam-elementor-integration-execor/assets/js/vamtam-elementor-frontend.min.js',
];

/** The script block, in the exact order includes/scripts.php emitted it. */
export function siteScriptItems(page: PageConfig, region: RegionSlug | string): ScriptItem[] {
  const r = vxnRegion(region);
  const inline = (code: string, id?: string): ScriptItem => ({ kind: 'inline', code, id });
  const src = (path: string): ScriptItem => ({ kind: 'src', src: BASE + path });

  return [
    inline(IFRAME_LAZYRENDER),
    inline(SCROLL_AND_NAV),
    inline(KLAY_ACCORDION),
    inline(NAVY_GRADIENT),
    inline(ENTRANCE_ANIMATIONS),
    inline(STICKY_EFFECT),
    inline(LAZY_BACKGROUNDS),
    inline(VAMTAM_FRONT, 'vamtam-all-js-extra'),

    ...VENDOR_BEFORE_ELEMENTOR.map(src),
    inline(elementorConfig(page), 'elementor-frontend-js-before'),
    ...VENDOR_AFTER_ELEMENTOR.map(src),
    inline("wp.i18n.setLocaleData( { 'text directionltr': [ 'ltr' ] } );", 'wp-i18n-js-after'),
    inline(PRO_CONFIG, 'elementor-pro-frontend-js-before'),
    ...VENDOR_AFTER_PRO_CONFIG.map(src),

    inline(activeNavScript(page, r)),
    src('/assets/vendor/intl-tel-input/js/intlTelInput.min.js'),
    inline(LEAD_FORMS),
  ];
}

/** Every external in the block, for the preload hints in the document head. */
export function siteScriptSources(): string[] {
  return [
    ...VENDOR_BEFORE_ELEMENTOR,
    ...VENDOR_AFTER_ELEMENTOR,
    ...VENDOR_AFTER_PRO_CONFIG,
    '/assets/vendor/intl-tel-input/js/intlTelInput.min.js',
  ].map((p) => BASE + p);
}

export default function SiteScripts({
  page,
  region,
}: {
  page: PageConfig;
  region: RegionSlug | string;
}) {
  return <ScriptRunner items={siteScriptItems(page, region)} />;
}
