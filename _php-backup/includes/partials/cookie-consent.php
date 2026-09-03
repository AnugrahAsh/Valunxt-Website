<?php /* VALUNXT — cookie consent banner + preferences modal (site-wide). */ ?>
<!-- Cookie consent banner -->
<div class="vxn-cookie" id="vxnCookie" role="dialog" aria-live="polite" aria-labelledby="vxnCookieTitle" aria-describedby="vxnCookieDesc" hidden>
    <div class="vxn-cookie__inner">
        <button type="button" class="vxn-cookie__close" data-vxn-cookie="dismiss" aria-label="Dismiss cookie notice">&times;</button>
        <div class="vxn-cookie__body">
            <h2 class="vxn-cookie__title" id="vxnCookieTitle">Cookie Consent</h2>
            <p class="vxn-cookie__text" id="vxnCookieDesc">By clicking &ldquo;Accept all&rdquo;, you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and support our advisory and marketing efforts. <a class="vxn-cookie__link" href="<?= BASE ?>/privacy-policy/">Privacy Policy</a></p>
        </div>
        <div class="vxn-cookie__actions">
            <button type="button" class="vxn-cookie__btn vxn-cookie__btn--ghost" data-vxn-cookie="manage">Manage cookies</button>
            <button type="button" class="vxn-cookie__btn vxn-cookie__btn--primary" data-vxn-cookie="accept">Accept all</button>
        </div>
    </div>
</div>

<!-- Cookie preferences modal -->
<div class="vxn-cookie-modal" id="vxnCookieModal" role="dialog" aria-modal="true" aria-labelledby="vxnCookieModalTitle" hidden>
    <div class="vxn-cookie-modal__overlay" data-vxn-cookie="closeModal"></div>
    <div class="vxn-cookie-modal__panel" role="document">
        <button type="button" class="vxn-cookie-modal__close" data-vxn-cookie="closeModal" aria-label="Close cookie preferences">&times;</button>
        <h2 class="vxn-cookie-modal__title" id="vxnCookieModalTitle">Cookie Preferences</h2>
        <p class="vxn-cookie-modal__intro">Choose which categories of cookies VALUNXT Capital may use. Strictly necessary cookies keep the site running and cannot be switched off.</p>
        <ul class="vxn-cookie-modal__list">
            <li class="vxn-cookie-cat">
                <div class="vxn-cookie-cat__head">
                    <span class="vxn-cookie-cat__name">Strictly Necessary</span>
                    <span class="vxn-cookie-cat__always">Always active</span>
                </div>
                <p class="vxn-cookie-cat__desc">Essential for core functionality such as page navigation, security and form submission. The site cannot function properly without these.</p>
            </li>
            <li class="vxn-cookie-cat">
                <div class="vxn-cookie-cat__head">
                    <span class="vxn-cookie-cat__name">Analytics</span>
                    <label class="vxn-cookie-switch">
                        <input type="checkbox" data-vxn-cat="analytics">
                        <span class="vxn-cookie-switch__slider" aria-hidden="true"></span>
                        <span class="vxn-cookie-switch__sr">Enable analytics cookies</span>
                    </label>
                </div>
                <p class="vxn-cookie-cat__desc">Help us understand how investors and visitors use the site so we can improve its performance, content and research resources.</p>
            </li>
            <li class="vxn-cookie-cat">
                <div class="vxn-cookie-cat__head">
                    <span class="vxn-cookie-cat__name">Marketing</span>
                    <label class="vxn-cookie-switch">
                        <input type="checkbox" data-vxn-cat="marketing">
                        <span class="vxn-cookie-switch__slider" aria-hidden="true"></span>
                        <span class="vxn-cookie-switch__sr">Enable marketing cookies</span>
                    </label>
                </div>
                <p class="vxn-cookie-cat__desc">Used to deliver relevant advisory updates and to measure the effectiveness of our campaigns across channels.</p>
            </li>
        </ul>
        <div class="vxn-cookie-modal__actions">
            <button type="button" class="vxn-cookie__btn vxn-cookie__btn--ghost" data-vxn-cookie="save">Save preferences</button>
            <button type="button" class="vxn-cookie__btn vxn-cookie__btn--primary" data-vxn-cookie="acceptModal">Accept all</button>
        </div>
    </div>
</div>

<script>
/* VALUNXT cookie consent: persists the visitor's choice in localStorage (+ a
   mirror cookie) so the banner only appears until a decision is made. Buttons
   are wired via [data-vxn-cookie] so nothing depends on element order.
     accept / acceptModal -> allow all categories
     save                 -> store the toggles chosen in the modal
     manage               -> open the preferences modal
     dismiss (X on banner)-> store "necessary only"
     closeModal           -> close the modal without changing a stored choice
   window.vxnCookie.open() reopens the modal; .reset() clears the choice. */
(function () {
    var KEY = 'vxn_cookie_consent';
    var VERSION = 1;
    var banner = document.getElementById('vxnCookie');
    var modal = document.getElementById('vxnCookieModal');
    if (!banner) return;

    function read() {
        try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
    }
    function persist(cats) {
        var data = {
            v: VERSION,
            necessary: true,
            analytics: !!cats.analytics,
            marketing: !!cats.marketing,
            ts: new Date().toISOString()
        };
        try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
        try {
            var flags = 'n' + (data.analytics ? 'a' : '') + (data.marketing ? 'm' : '');
            document.cookie = 'vxn_cookie_consent=' + flags + ';path=/;max-age=31536000;samesite=lax';
        } catch (e) {}
        // Let any analytics/marketing loaders react to the granted categories.
        try { window.dispatchEvent(new CustomEvent('vxn:cookie-consent', { detail: data })); } catch (e) {}
        return data;
    }

    function hideBanner() { banner.setAttribute('hidden', ''); }
    function showBanner() { banner.removeAttribute('hidden'); }
    function openModal() {
        if (!modal) return;
        var d = read();
        Array.prototype.forEach.call(modal.querySelectorAll('[data-vxn-cat]'), function (i) {
            i.checked = d ? !!d[i.getAttribute('data-vxn-cat')] : false;
        });
        modal.removeAttribute('hidden');
        document.body.classList.add('vxn-cookie-lock');
    }
    function closeModal() {
        if (!modal) return;
        modal.setAttribute('hidden', '');
        document.body.classList.remove('vxn-cookie-lock');
    }
    function acceptAll() { persist({ analytics: true, marketing: true }); closeModal(); hideBanner(); }
    function savePrefs() {
        var cats = {};
        Array.prototype.forEach.call(modal.querySelectorAll('[data-vxn-cat]'), function (i) {
            cats[i.getAttribute('data-vxn-cat')] = i.checked;
        });
        persist(cats); closeModal(); hideBanner();
    }
    function dismiss() { persist({ analytics: false, marketing: false }); hideBanner(); }

    document.addEventListener('click', function (e) {
        var t = e.target.closest ? e.target.closest('[data-vxn-cookie]') : null;
        if (!t) return;
        switch (t.getAttribute('data-vxn-cookie')) {
            case 'accept':
            case 'acceptModal': acceptAll(); break;
            case 'manage': openModal(); break;
            case 'save': savePrefs(); break;
            case 'dismiss': dismiss(); break;
            case 'closeModal': closeModal(); break;
        }
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) closeModal();
    });

    // Only surface the banner when the visitor hasn't decided yet.
    if (!read()) showBanner();

    // Public hook so a "Cookie settings" link can reopen the panel later.
    window.vxnCookie = {
        open: openModal,
        reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} showBanner(); }
    };
})();
</script>
