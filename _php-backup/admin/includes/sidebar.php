<?php
/**
 * Admin sidebar partial.
 * Expects $ACTIVE (string) to be set by the including page to flag the
 * current nav item. Requires auth.php to have been loaded.
 */
if (!function_exists('admin_url')) { require_once __DIR__ . '/../auth.php'; }
$ACTIVE   = $ACTIVE ?? 'dashboard';
$logoWhite = SITE_BASE . '/assets/content/uploads/2025/03/valunxt-logo-white.png';

/** Nav items: [key, label, href, svg-path-inner, badge] */
$nav = [
    ['dashboard', 'Dashboard', admin_url('dashboard.php'),
        '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>', ''],
    ['enquiries', 'Enquiries', admin_url('enquiries.php'),
        '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>', ''],
];
$navSeo = [
    ['pages', 'Pages & SEO', admin_url('pages.php'),
        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>', ''],
    ['sitemap', 'Sitemap', admin_url('sitemap.php'),
        '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>', ''],
];
$navSettings = [
    ['settings', 'Settings', '#',
        '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>', ''],
];

$renderItem = function ($item) use ($ACTIVE) {
    [$key, $label, $href, $svg, $badge] = $item;
    $cls = 'nav-item' . ($key === $ACTIVE ? ' active' : '');
    echo '<a href="' . h($href) . '" class="' . $cls . '">';
    echo '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' . $svg . '</svg>';
    echo '<span>' . h($label) . '</span>';
    if ($badge !== '') echo '<span class="badge">' . h($badge) . '</span>';
    echo '</a>';
};
?>
<aside class="sidebar" id="sidebar">
    <div class="sidebar-head">
        <a href="<?= h(admin_url('dashboard.php')) ?>">
            <img src="<?= h($logoWhite) ?>" alt="VALUNXT Capital">
        </a>
    </div>

    <nav class="sidebar-nav">
        <div class="nav-label">Main</div>
        <?php foreach ($nav as $item) $renderItem($item); ?>

        <div class="nav-label" style="margin-top:18px">Content &amp; SEO</div>
        <?php foreach ($navSeo as $item) $renderItem($item); ?>

        <div class="nav-label" style="margin-top:18px">System</div>
        <?php foreach ($navSettings as $item) $renderItem($item); ?>
    </nav>

    <div class="sidebar-foot">
        <div class="sidebar-card">
            <div class="t">Need help?</div>
            Reach the VALUNXT support desk for onboarding and account assistance.
        </div>
    </div>
</aside>
<div class="sidebar-backdrop" id="sidebarBackdrop"></div>
