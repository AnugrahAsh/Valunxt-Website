<?php
/* Shared editorial mega-menu panel. Attach to a nav item by setting these
   before the include:
     $MEGA_KEY      — preset to render: 'insights' (default) | 'services' | 'group'
     $MEGA_TABINDEX — ' tabindex="-1"' for the hidden mobile/sticky nav copies
     $MEGA_LABEL    — optional override for the parent link text
     $MEGA_HREF     — optional override for the parent target (relative to BASE)
   All three menus share the exact same UI; only the preset content differs.

   Layout is two regions on one full-bleed white sheet: an index region on the
   left (section title, lede, the two-up link list, and the ruled "view all" CTA
   at its foot) and a pair of promo cards on the right. */

$__tab = $MEGA_TABINDEX ?? '';
$__key = $MEGA_KEY ?? 'insights';

/**
 * The mega-menu line icons, drawn once here rather than pulled from the theme's
 * icon font: the font ships a marketing-brochure set, and the menu wants a
 * single consistent 24px stroke family. Tokens are named in vxn_services()
 * ('icon' => 'ledger') so the registry stays the one place a service is defined.
 *
 * Every glyph is a 24×24 currentColor stroke path, so the tile controls colour.
 *
 * Guarded: this partial is included once per menu per nav copy (12 times a page),
 * so an unguarded declaration would be a fatal redeclare on the second include.
 */
if (!function_exists('vxn_mega_icon')):
function vxn_mega_icon($token) {
    static $paths = array(
        /* Accounting & tax — a ledger sheet with ruled lines. */
        'ledger'    => '<path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v6h6"/><path d="M9 13h7M9 17h5"/>',
        /* Real estate — a tower block. */
        'building'  => '<path d="M3 21h18"/><path d="M5 21V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v15"/><path d="M13 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10"/><path d="M8 9h2M8 13h2M8 17h2M16 14h1M16 18h1"/>',
        /* Mortgages — a key. */
        'key'       => '<circle cx="8" cy="15" r="4"/><path d="M10.9 12.1 20 3"/><path d="m17 6 2.5 2.5M15 8l2 2"/>',
        /* Valuation — balance scales. */
        'scales'    => '<path d="M12 4v17M8 21h8M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0Z"/><path d="m19 7-3 6a3 3 0 0 0 6 0Z"/><circle cx="12" cy="4" r="1.4"/>',
        /* Research — a trend line over a chart frame. */
        'chart'     => '<path d="M4 4v15a1 1 0 0 0 1 1h15"/><path d="m7 15 3.5-4 3 2.5L20 7"/><path d="M20 7h-3.5M20 7v3.5"/>',
        /* Technology & AI — a processor die. */
        'chip'      => '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 10h4v4h-4z"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
        /* Capital advisory — two hands meeting. */
        'handshake' => '<path d="m11 17 2 2a1.4 1.4 0 0 0 2 0 1.4 1.4 0 0 0 0-2"/><path d="m15 17 1.5 1.5a1.4 1.4 0 0 0 2-2L13 11"/><path d="M2 9h3l4-4 4 4h3"/><path d="M22 9h-3l-4 4-2-2"/><path d="M2 9v6h2M22 9v6h-2"/>',
        /* Reports — a bound document. */
        'document'  => '<path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M9 12h7M9 16h7"/>',
        /* Community — a small group. */
        'users'     => '<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.4a3.2 3.2 0 0 1 0 5.2"/><path d="M18 14.2A6.5 6.5 0 0 1 21.5 20"/>',
        /* Partnership / network — a connected globe. */
        'globe'     => '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
        /* Insight / commentary — a nib. */
        'pen'       => '<path d="M4 20h4L20 8a2.5 2.5 0 0 0-3.5-3.5L4 16.5V20Z"/><path d="m15 6 3.5 3.5"/><path d="M4 16.5 7.5 20"/>',
        /* Clients — a shield, i.e. work held in confidence. */
        'shield'    => '<path d="M12 3 5 6v5.5c0 4.3 2.9 8.1 7 9.5 4.1-1.4 7-5.2 7-9.5V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
    );

    $d = $paths[$token] ?? $paths['document'];
    return '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"'
         . ' stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"'
         . ' aria-hidden="true" focusable="false">' . $d . '</svg>';
}

/* The ringed arrow that ends every CTA on the sheet — the "view all" link and
   each card. Drawn rather than typed so the ring is a true circle at any size. */
function vxn_mega_arrow() {
    return '<span class="vxn-mega__circ" aria-hidden="true">'
         . '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"'
         . ' stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"'
         . ' focusable="false"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></svg>'
         . '</span>';
}
endif;

$__presets = array(
    'insights' => array(
        'label'    => 'Insights',
        'href'     => '/blogs/',
        'title'    => 'Insights &amp; Intelligence',
        'lede'     => 'Independent research, market commentary and the thinking behind our advice.',
        'sidehead' => 'Explore',
        'links'    => array(
            array('t' => 'Research &amp; Reports', 'href' => '/research/',    'icon' => 'chart',    'd' => 'Market intelligence and investment research'),
            array('t' => 'Blogs',                  'href' => '/blogs/',       'icon' => 'pen',      'd' => 'Commentary from our advisory desks'),
            array('t' => 'Community',              'href' => '/community/',   'icon' => 'users',    'd' => 'Where we invest beyond the mandate'),
            array('t' => 'Clients',                'href' => '/clients/',     'icon' => 'shield',   'd' => 'Who we act for, and how we act'),
            array('t' => 'Partnership',            'href' => '/partnership/', 'icon' => 'globe',    'd' => 'Working with us across markets'),
        ),
        'cards'    => array(
            array(
                'eyebrow' => 'Featured',
                'title'   => 'Research &amp; Reports',
                'href'    => '/research/',
                'img'     => '/assets/content/uploads/new-folder/insights-1.webp',
                'cta'     => 'Discover',
            ),
            array(
                'eyebrow' => 'Commentary',
                'title'   => 'Market Insight',
                'href'    => '/blogs/',
                'img'     => '/assets/content/uploads/new-folder/insights-2.webp',
                'cta'     => 'Discover',
            ),
        ),
        'viewall'       => '/blogs/',
        'viewall_label' => 'View all insights',
    ),
    /* Built from vxn_services() so the menu names whatever the visitor's market
       actually leads with — the UAE's six services in the UAE edition, the
       group's four verticals in India — and can't drift from the home page. */
    'services' => array(
        'label'    => 'Services',
        'href'     => '/services/',
        'title'    => 'Advisory Services',
        /* Deliberately not "four disciplines" / "six services": the list is
           per-market, and a counted lede goes stale the moment one is added. */
        'lede'     => 'Every discipline under one roof, so a decision is advised, financed and executed by the same team.',
        'sidehead' => 'Explore services',
        'links'    => array_map(function ($s) {
            return array(
                't'    => $s['title'],
                'href' => $s['href'],
                'icon' => $s['icon'] ?? 'document',
                'd'    => $s['desc'] ?? '',
            );
        }, vxn_services()),
        'cards'    => array(), /* filled below from the first two services */
        'viewall'       => '/services/',
        'viewall_label' => 'View all services',
    ),
    /* Built from vxn_companies() rather than a second hand-written list. The
       menu previously pointed each company at an unrelated audience-type slug
       (VALUNXT Corporate Services -> /our-group/individuals-and-families/),
       which is exactly the kind of drift a duplicated list invites. */
    'group' => array(
        'label'    => 'Our Group',
        'href'     => '/our-group/',
        'title'    => 'Our Group',
        'lede'     => 'Regulated operating companies, each a specialist in its own right.',
        'sidehead' => 'Group companies',
        /* Line icons, as in the other two menus. The companies' own wordmarks
           were tried here first and each needed a plate to sit on, which made
           this one panel read differently from its neighbours; the marks still
           lead the Our Group page itself, where they have the room. */
        'links'    => array_map(function ($c) {
            return array(
                't'    => $c['name'],
                'href' => $c['url'],
                'icon' => $c['icon'] ?? 'document',
                'd'    => $c['discipline'] ?? '',
            );
        }, array_values(vxn_companies())),
        'cards'    => array(), /* filled below from the first two companies */
        'viewall'       => '/our-group/',
        'viewall_label' => 'View all companies',
    ),
);

/* The two cards mirror the first two entries of the list they sit beside, so a
   change to the registry carries into them without a second edit. */
foreach (array_slice(vxn_services(), 0, 2) as $__s) {
    $__presets['services']['cards'][] = array(
        'eyebrow' => 'Advisory',
        'title'   => $__s['short'] ?? $__s['title'],
        'href'    => $__s['href'],
        'img'     => $__s['img'],
        'cta'     => 'Discover',
    );
}
foreach (array_slice(array_values(vxn_companies()), 0, 2) as $__c) {
    $__presets['group']['cards'][] = array(
        'eyebrow' => 'Group company',
        'title'   => $__c['name'],
        'href'    => $__c['url'],
        'img'     => $__c['img'],
        'cta'     => 'Discover',
    );
}

$__p = $__presets[$__key] ?? $__presets['insights'];

$__label   = (isset($MEGA_LABEL) && $MEGA_LABEL !== '') ? $MEGA_LABEL : $__p['label'];
$__href    = (isset($MEGA_HREF) && $MEGA_HREF !== '') ? BASE . $MEGA_HREF : BASE . $__p['href'];
$__title   = $__p['title'];
$__lede    = $__p['lede'];
$__sidehd  = $__p['sidehead'];
$__links   = $__p['links'];
$__cards   = $__p['cards'];
$__viewAll = $__p['viewall'];
$__viewLbl = $__p['viewall_label'];
?>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children vxn-mega"><a href="<?= $__href ?>" class="elementor-item" <?= $__tab ?>><?= $__label ?></a>
	<ul class="sub-menu elementor-nav-menu--dropdown vxn-mega__panel">
		<li class="vxn-mega__wrap">
			<div class="vxn-mega__inner">

				<div class="vxn-mega__main">
					<div class="vxn-mega__intro">
						<span class="vxn-mega__kicker"><?= $__sidehd ?></span>
						<span class="vxn-mega__head"><?= $__title ?></span>
						<span class="vxn-mega__lede"><?= $__lede ?></span>
					</div>

					<div class="vxn-mega__list">
						<?php foreach ($__links as $__l): ?>
							<a class="vxn-mega__item" href="<?= BASE . $__l['href'] ?>" <?= $__tab ?>>
								<span class="vxn-mega__ico" aria-hidden="true"><?= vxn_mega_icon($__l['icon'] ?? 'document') ?></span>
								<span class="vxn-mega__itembody">
									<span class="vxn-mega__itemtitle"><?= $__l['t'] ?></span>
									<?php if (!empty($__l['d'])): ?><span class="vxn-mega__itemdesc"><?= $__l['d'] ?></span><?php endif; ?>
								</span>
								<i class="vxn-mega__chev" aria-hidden="true">&rsaquo;</i>
							</a>
						<?php endforeach; ?>
					</div>

					<a class="vxn-mega__viewall" href="<?= BASE . $__viewAll ?>" <?= $__tab ?>><span class="vxn-mega__viewalltxt"><?= $__viewLbl ?></span><?= vxn_mega_arrow() ?></a>
				</div>

				<?php if (!empty($__cards)): ?>
					<div class="vxn-mega__cards">
						<?php foreach ($__cards as $__c): ?>
							<a class="vxn-mega__card" href="<?= BASE . $__c['href'] ?>" <?= $__tab ?>>
								<span class="vxn-mega__eyebrow"><?= $__c['eyebrow'] ?></span>
								<span class="vxn-mega__cardtitle"><?= $__c['title'] ?></span>
								<span class="vxn-mega__cardmedia"><img src="<?= BASE . $__c['img'] ?>" alt="" loading="lazy"></span>
								<span class="vxn-mega__cardcta"><span class="vxn-mega__cardctatxt"><?= $__c['cta'] ?></span><?= vxn_mega_arrow() ?></span>
							</a>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>

			</div>
		</li>
	</ul>
</li>
<?php unset($MEGA_KEY, $MEGA_LABEL, $MEGA_HREF); ?>
