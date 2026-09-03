/* VALUNXT Capital — Admin panel interactions */
(function () {
    'use strict';

    // Profile dropdown
    var profile = document.getElementById('profile');
    var profileBtn = document.getElementById('profileBtn');
    if (profile && profileBtn) {
        profileBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var open = profile.classList.toggle('open');
            profileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        document.addEventListener('click', function (e) {
            if (!profile.contains(e.target)) profile.classList.remove('open');
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') profile.classList.remove('open');
        });
    }

    // Mobile sidebar
    var sidebar = document.getElementById('sidebar');
    var toggle = document.getElementById('menuToggle');
    var backdrop = document.getElementById('sidebarBackdrop');
    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (backdrop) backdrop.classList.remove('show');
    }
    if (toggle && sidebar) {
        toggle.addEventListener('click', function () {
            sidebar.classList.toggle('open');
            if (backdrop) backdrop.classList.toggle('show');
        });
    }
    if (backdrop) backdrop.addEventListener('click', closeSidebar);

    // Ctrl/Cmd + K focuses search
    var search = document.querySelector('.search input');
    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            if (search) search.focus();
        }
    });
    // Chart bars grow via CSS (scaleY keyframe) — no JS needed, so they
    // render at their true height even if scripts or rAF don't run.

    // Auto-dismiss success messages a few seconds after a save. Error
    // messages (.flash.err) are left alone so they can be read and acted on.
    var FLASH_DELAY = 3000;
    var FLASH_FADE = 500;
    Array.prototype.forEach.call(document.querySelectorAll('.flash:not(.err)'), function (el) {
        setTimeout(function () {
            el.classList.add('is-hiding');
            // Remove it once the collapse finishes so it leaves no gap behind.
            setTimeout(function () {
                if (el.parentNode) el.parentNode.removeChild(el);
            }, FLASH_FADE);
        }, FLASH_DELAY);
    });
})();
