<?php
/* Community page body — mirrors the 500 Global "500 Around the World"
   community layout (intro → stats → tabbed support card → photo carousel →
   events accordion → CTA band → disclaimer), restyled in the VALUNXT theme
   (Forum serif + DM Sans, navy/gold palette). Rendered below the image
   page-hero on /community/. Dummy content; images from new-folder.
   Self-contained CSS/JS, scoped under .vxn-com. */

/* ---- data ---------------------------------------------------------- */
$__stats = array(
    array('num' => '500+', 'label' => 'Investors &amp; families in our network'),
    array('num' => '4',    'label' => 'Group companies working as one ecosystem'),
    array('num' => '2',    'label' => 'Markets — India &amp; UAE'),
    array('num' => '15+',  'label' => 'Years of combined advisory experience'),
);

$__tabs = array(
    'investors' => array(
        'label' => 'Investors &amp; Families',
        'title' => 'Relationships built to compound over time.',
        'text'  => 'Private investors, HNIs, and family offices sit at the centre of our community. Every relationship begins with your objectives and risk appetite, and grows into a long-term partnership — supported by independent research, curated opportunities, and advisors who stay close long after the first mandate.',
        'links' => array(
            array('t' => 'Explore Services', 'h' => '/services/'),
            array('t' => 'Get in Touch',     'h' => '/contact/'),
        ),
    ),
    'partners' => array(
        'label' => 'Partners &amp; Group',
        'title' => 'One integrated ecosystem.',
        'text'  => 'VALUNXT Capital is backed by a trusted group of companies spanning surveying, property, mortgage, and corporate services. Our partners plug into a single network — sharing intelligence, referrals, and on-the-ground reach across India and the UAE so clients move faster with fewer intermediaries.',
        'links' => array(
            array('t' => 'Meet the Group', 'h' => '/our-group/'),
            array('t' => 'Partner With Us', 'h' => '/partnership/'),
        ),
    ),
    'developers' => array(
        'label' => 'Developers &amp; Institutions',
        'title' => 'Capital, structured with discipline.',
        'text'  => 'Developers and institutions raising or deploying capital join a community built for scale. From feasibility and underwriting to investor syndication and transparent reporting, we bring institutional-grade rigour and dependable execution to every project and portfolio.',
        'links' => array(
            array('t' => 'View Solutions', 'h' => '/services/'),
            array('t' => 'Talk to Us',     'h' => '/contact/'),
        ),
    ),
);

$__slides = array(
    array('img' => '/assets/content/uploads/new-folder/client-success-1.webp',        'cap' => 'Client success roundtable'),
    array('img' => '/assets/content/uploads/new-folder/research-intelligence-2.webp',  'cap' => 'Research & intelligence briefing'),
    array('img' => '/assets/content/uploads/new-folder/who-we-are-2.webp',             'cap' => 'The people behind VALUNXT'),
    array('img' => '/assets/content/uploads/new-folder/client-success-2.webp',         'cap' => 'Family office advisory session'),
    array('img' => '/assets/content/uploads/new-folder/career-1.webp',                 'cap' => 'Our advisory team'),
);

$__events = array(
    array('t' => 'Investor Briefings',       'd' => 'Intimate sessions where investors and families get a direct read on live opportunities, deal pipelines, and where we see value across cycles.'),
    array('t' => 'Market Outlook Sessions',  'd' => 'Periodic outlooks on India and the UAE real estate — pricing, supply, yields, and regulation — drawn from our own research desk.'),
    array('t' => 'Private Roundtables',      'd' => 'Small, closed-door conversations that bring together like-minded investors, family offices, and operators around a single theme.'),
    array('t' => 'Family Office Forums',     'd' => 'Forums built for multi-generational capital — governance, succession, and disciplined real estate allocation across market cycles.'),
    array('t' => 'NRI Investor Meetups',     'd' => 'In-person and virtual meetups connecting Non-Resident Indians investing back home, with clarity on structuring, repatriation, and compliance.'),
);

$__bars = array(38, 60, 86, 120, 150, 128, 96);
?>
<style>
/* ===== VALUNXT Community ==================================================== */
.vxn-com{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--ink:#26313b;--body:#4d5863;--muted:#5b6670;--line:#e5e1d8;--paper:#f6f4ef;font-family:"DM Sans",sans-serif;color:var(--body);}
.vxn-com *{box-sizing:border-box;}
.vxn-com__wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.vxn-com__eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 16px;}
.vxn-com h2.vxn-com__h,.vxn-com h3.vxn-com__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.08;margin:0;}

/* ---- Intro / lead --------------------------------------------------------- */
.vxn-com__intro{background:#fff;padding:56px 0 10px;}
.vxn-com__intro h2.vxn-com__h{font-size:clamp(30px,4.2vw,50px);margin-bottom:26px;}
.vxn-com__intro-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px 60px;}
.vxn-com__intro-grid p{margin:0;font-size:16px;line-height:1.8;}
.vxn-com__lead{font-size:18px!important;color:var(--ink)!important;}

/* ---- Stats ---------------------------------------------------------------- */
.vxn-com__stats{background:#fff;padding:44px 0 16px;}
.vxn-com__stats-head{font-family:"Forum",serif;font-weight:400;color:var(--ny);font-size:clamp(24px,3vw,36px);margin:0 0 30px;}
.vxn-com__stats-note{margin:26px 0 0;font-size:13px;line-height:1.7;color:var(--muted,#6b757e);max-width:70ch;}
.vxn-com__stats-note a{color:var(--ny);text-decoration:underline;text-underline-offset:2px;}
.vxn-com__stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;}
.vxn-com__stat{border-top:2px solid var(--ny);padding-top:20px;}
.vxn-com__stat b{display:block;font-family:"Forum",serif;font-weight:400;color:var(--ny);font-size:clamp(38px,4.4vw,54px);line-height:1;letter-spacing:-.01em;}
.vxn-com__stat span{display:block;margin-top:12px;font-size:14px;line-height:1.55;color:var(--muted);}

/* ---- Support card (vertical tabs) ----------------------------------------- */
.vxn-com__support{background:#fff;padding:40px 0 30px;}
.vxn-com__card{background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;box-shadow:0 22px 60px -38px rgba(14,53,95,.42);}
.vxn-com__card-head{padding:clamp(26px,3.2vw,42px) clamp(26px,3.4vw,46px) 0;}
.vxn-com__card-head .vxn-com__eyebrow{margin-bottom:12px;}
.vxn-com__card-head > .vxn-com__h{font-size:clamp(25px,3vw,38px);}
.vxn-com__card-body{display:grid;grid-template-columns:264px 1fr;gap:clamp(24px,3vw,44px);padding:clamp(24px,3vw,38px) clamp(26px,3.4vw,46px) clamp(28px,3.4vw,44px);}
.vxn-com__tabs{display:flex;flex-direction:column;gap:4px;margin:0;border:0;}
.vxn-com__tab{position:relative;display:block;width:100%;text-align:left;cursor:pointer;font-family:"DM Sans",sans-serif;font-size:12.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;line-height:1.35;transition:.2s;
    appearance:none!important;background:transparent!important;background-image:none!important;box-shadow:none!important;border:0!important;border-radius:10px!important;padding:15px 16px 15px 20px!important;color:var(--muted)!important;}
.vxn-com__tab:hover{color:var(--ny)!important;background:rgba(14,53,95,.045)!important;}
.vxn-com__tab[aria-selected="true"]{color:var(--ny)!important;background:rgba(0,83,183,.07)!important;}
.vxn-com__tab[aria-selected="true"]::before{content:"";position:absolute;left:0;top:11px;bottom:11px;width:3px;border-radius:3px;background:linear-gradient(180deg,var(--gd),var(--gd2));}
.vxn-com__panels{border-left:1px solid var(--line);padding-left:clamp(24px,3vw,44px);}
.vxn-com__panel{display:none;animation:vxnfade .35s ease;}
.vxn-com__panel.is-active{display:block;}
@keyframes vxnfade{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}
.vxn-com__panel h3.vxn-com__h{font-size:clamp(21px,2.4vw,30px);margin-bottom:16px;}
.vxn-com__panel p{margin:0 0 26px;max-width:720px;font-size:16px;line-height:1.78;}
.vxn-com__acts{display:flex;flex-wrap:wrap;gap:14px;}
/* Both fill by wedge on hover — mechanism in valunxt-brand.css; each variant
   only names the colour it sweeps. */
.vxn-com__btn{display:inline-flex;align-items:center;gap:10px;padding:13px 26px;border-radius:40px;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;}
.vxn-com__btn--solid{background:linear-gradient(90deg,var(--gd) 0%,var(--gd2) 100%);color:#fff!important;--vxn-cta-sweep:linear-gradient(90deg,var(--ny2) 0%,var(--ny) 100%);}
.vxn-com__btn--ghost{border:1.5px solid var(--ny);color:var(--ny)!important;--vxn-cta-sweep:var(--ny);}
.vxn-com__btn--ghost:hover{color:#fff!important;}
.vxn-com__btn svg{width:16px;height:16px;flex:0 0 auto;}

/* ---- Carousel ------------------------------------------------------------- */
.vxn-com__gallery{background:#fff;padding:16px 0 44px;}
.vxn-com__car{position:relative;max-width:1180px;margin:0 auto;padding:0 54px;}
.vxn-com__car-vp{overflow:hidden;border-radius:14px;}
.vxn-com__car-track{display:flex;transition:transform .55s cubic-bezier(.22,.61,.36,1);}
.vxn-com__car-slide{flex:0 0 33.3333%;padding:0 9px;}
.vxn-com__car-fig{position:relative;margin:0;border-radius:12px;overflow:hidden;}
.vxn-com__car-fig img{display:block;width:100%;aspect-ratio:1/.82;object-fit:cover;}
.vxn-com__car-fig figcaption{position:absolute;left:0;right:0;bottom:0;padding:34px 16px 14px;font-size:13px;color:#fff;background:linear-gradient(transparent,rgba(11,26,38,.72));}
/* simple, minimal prev/next — no fill, no shadow (overrides theme gold button) */
.vxn-com__car-btn{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:2;transition:color .2s;
    appearance:none!important;background:transparent!important;background-image:none!important;border:0!important;border-radius:0!important;box-shadow:none!important;color:var(--ny)!important;padding:0!important;}
.vxn-com__car-btn:hover{color:var(--gd2)!important;}
.vxn-com__car-btn--prev{left:0;}
.vxn-com__car-btn--next{right:0;}
.vxn-com__car-btn svg{width:26px;height:26px;}
.vxn-com__car-dots{display:flex;justify-content:center;gap:12px;margin-top:24px;}
/* simple dots — plain, no background box (overrides theme gold button) */
.vxn-com__dot{width:9px;height:9px;cursor:pointer;transition:.2s;
    appearance:none!important;background:transparent!important;background-image:none!important;border:1.5px solid #c2c8cd!important;border-radius:50%!important;box-shadow:none!important;padding:0!important;}
.vxn-com__dot:hover{border-color:var(--ny)!important;}
.vxn-com__dot.is-active{background:var(--ny)!important;border-color:var(--ny)!important;}

/* ---- Events accordion ----------------------------------------------------- */
.vxn-com__events{background:var(--paper);padding:56px 0 62px;}
.vxn-com__events-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:56px;align-items:start;}
.vxn-com__events-intro h2.vxn-com__h{font-size:clamp(28px,3.4vw,42px);margin-bottom:20px;}
.vxn-com__events-intro p{margin:0;font-size:16px;line-height:1.85;color:var(--body);}
.vxn-com__acc{border-top:1px solid var(--line);}
.vxn-com__acc details{border-bottom:1px solid var(--line);}
.vxn-com__acc summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:22px 4px;font-family:"Forum",serif;font-size:clamp(18px,1.7vw,22px);color:var(--ny);transition:color .2s;}
.vxn-com__acc summary::-webkit-details-marker{display:none;}
.vxn-com__acc summary:hover{color:var(--gd2);}
.vxn-com__acc-ico{position:relative;flex:0 0 auto;width:20px;height:20px;}
.vxn-com__acc-ico::before,.vxn-com__acc-ico::after{content:"";position:absolute;background:var(--gd2);border-radius:2px;transition:transform .25s;}
.vxn-com__acc-ico::before{top:9px;left:0;width:20px;height:2px;}
.vxn-com__acc-ico::after{top:0;left:9px;width:2px;height:20px;}
.vxn-com__acc details[open] .vxn-com__acc-ico::after{transform:scaleY(0);}
.vxn-com__acc-body{padding:0 4px 24px;font-size:15.5px;line-height:1.8;color:var(--body);max-width:640px;}

/* ---- CTA band ------------------------------------------------------------- */
.vxn-com__cta{background:linear-gradient(90deg,#0053B7 0%,#0E355F 100%);text-align:center;padding:56px 24px 60px;}
.vxn-com__cta h2{font-family:"Forum",serif;font-weight:400;color:#fff;font-size:clamp(28px,3.4vw,44px);line-height:1.1;margin:0 0 14px;}
.vxn-com__cta p{max-width:600px;margin:0 auto 26px;color:#cdd6de;font-size:16px;line-height:1.7;}
.vxn-com__cta .vxn-com__btn--solid{padding:15px 34px;}

/* ---- Disclaimer ----------------------------------------------------------- */
.vxn-com__disc{background:#fff;padding:38px 0 46px;}
.vxn-com__disc h4{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--ny);font-weight:700;margin:0 0 14px;}
.vxn-com__disc p{margin:0;font-size:12.5px;line-height:1.75;color:#8a929a;max-width:900px;}

/* ---- Responsive ----------------------------------------------------------- */
@media(max-width:900px){
    .vxn-com__intro{padding:46px 0 10px;}
    .vxn-com__intro-grid{grid-template-columns:1fr;gap:16px;}
    .vxn-com__stat-grid{grid-template-columns:1fr 1fr;gap:26px 24px;}
    /* support card: tabs become a horizontal row above the panel */
    .vxn-com__card-body{grid-template-columns:1fr;gap:20px;}
    .vxn-com__tabs{flex-direction:row;flex-wrap:wrap;gap:8px;}
    .vxn-com__tab{border-radius:40px!important;padding:11px 16px!important;}
    .vxn-com__tab[aria-selected="true"]::before{display:none;}
    .vxn-com__panels{border-left:0;padding-left:0;border-top:1px solid var(--line);padding-top:26px;}
    .vxn-com__car{padding:0 40px;}
    .vxn-com__car-slide{flex:0 0 100%;}
    .vxn-com__events-grid{grid-template-columns:1fr;gap:26px;}
    .vxn-com__events{padding:48px 0 52px;}
}
@media(max-width:520px){
    .vxn-com__stat-grid{grid-template-columns:1fr;}
    .vxn-com__car{padding:0 8px;}
}
</style>

<div class="vxn-com">

    <!-- Intro / lead -->
    <section class="vxn-com__intro">
        <div class="vxn-com__wrap">
            <p class="vxn-com__eyebrow">Community</p>
            <h2 class="vxn-com__h">What brings our community together</h2>
            <div class="vxn-com__intro-grid">
                <p class="vxn-com__lead">VALUNXT Capital connects investors, families, developers, partners, and ecosystem builders through advisory mandates, research, events, and the relationships that are formed in between. Our community is how we describe that network — the people, the group companies, and the connections that make VALUNXT work across India and the UAE.</p>
                <div>
                    <p>Community, for us, started as a choice. When VALUNXT Capital was founded, the belief was that trust has to be built deliberately — real channels for investors to learn from each other, and advice offered because it is right, not because a transaction demands it.</p>
                    <p style="margin-top:22px;">What began with a handful of relationships in real estate has grown into a network spanning private clients, family offices, NRIs, developers, and institutions — connected to each other and to the wider VALUNXT ecosystem long after a single mandate ends.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="vxn-com__stats">
        <div class="vxn-com__wrap">
            <h3 class="vxn-com__stats-head">Our reach</h3>
            <div class="vxn-com__stat-grid">
                <?php foreach ($__stats as $__s): ?>
                    <div class="vxn-com__stat">
                        <b><?= $__s['num'] ?></b>
                        <span><?= $__s['label'] ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
            <p class="vxn-com__stats-note">Figures are cumulative across the four group companies. We are happy to evidence any of them &mdash; <a href="<?= BASE ?>/contact/">just ask</a>.</p>
        </div>
    </section>

    <!-- Support card with tabs -->
    <section class="vxn-com__support">
        <div class="vxn-com__wrap">
            <div class="vxn-com__card" data-vxn-tabs>
                <div class="vxn-com__card-head">
                    <p class="vxn-com__eyebrow">How we help</p>
                    <h2 class="vxn-com__h">How we support our community</h2>
                </div>
                <div class="vxn-com__card-body">
                    <div class="vxn-com__tabs" role="tablist" aria-label="Who we support">
                        <?php $__first = true; foreach ($__tabs as $__k => $__t): ?>
                            <button class="vxn-com__tab" type="button" role="tab"
                                    id="vxn-tab-<?= h($__k) ?>"
                                    aria-controls="vxn-panel-<?= h($__k) ?>"
                                    aria-selected="<?= $__first ? 'true' : 'false' ?>"
                                    data-vxn-tab="<?= h($__k) ?>"><?= $__t['label'] ?></button>
                        <?php $__first = false; endforeach; ?>
                    </div>
                    <div class="vxn-com__panels">
                        <?php $__first = true; foreach ($__tabs as $__k => $__t): ?>
                            <div class="vxn-com__panel<?= $__first ? ' is-active' : '' ?>"
                                 id="vxn-panel-<?= h($__k) ?>" role="tabpanel"
                                 aria-labelledby="vxn-tab-<?= h($__k) ?>"
                                 data-vxn-panel="<?= h($__k) ?>"<?= $__first ? '' : ' hidden' ?>>
                                <h3 class="vxn-com__h"><?= $__t['title'] ?></h3>
                                <p><?= $__t['text'] ?></p>
                                <div class="vxn-com__acts">
                                    <?php foreach ($__t['links'] as $__li => $__l): ?>
                                        <a class="vxn-com__btn <?= $__li === 0 ? 'vxn-com__btn--solid' : 'vxn-com__btn--ghost' ?>" href="<?= BASE . h($__l['h']) ?>">
                                            <span><?= $__l['t'] ?></span>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        </a>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        <?php $__first = false; endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Photo carousel -->
    <section class="vxn-com__gallery">
        <div class="vxn-com__car" data-vxn-car>
            <button class="vxn-com__car-btn vxn-com__car-btn--prev" type="button" aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="vxn-com__car-vp">
                <div class="vxn-com__car-track">
                    <?php foreach ($__slides as $__sl): ?>
                        <div class="vxn-com__car-slide">
                            <figure class="vxn-com__car-fig">
                                <img src="<?= BASE . h($__sl['img']) ?>" alt="<?= h($__sl['cap']) ?>" loading="lazy">
                                <figcaption><?= h($__sl['cap']) ?></figcaption>
                            </figure>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <button class="vxn-com__car-btn vxn-com__car-btn--next" type="button" aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="vxn-com__car-dots" role="tablist" aria-label="Slides"></div>
        </div>
    </section>

    <!-- Events accordion -->
    <section class="vxn-com__events">
        <div class="vxn-com__wrap">
            <div class="vxn-com__events-grid">
                <div class="vxn-com__events-intro">
                    <p class="vxn-com__eyebrow">Gatherings</p>
                    <h2 class="vxn-com__h">The gatherings we host</h2>
                    <p>We host in-person and virtual gatherings across our community to support our mission of building wealth through real estate. Our aim is to bridge the gap between investors, families, developers, and ecosystem builders — cultivating meaningful connections and opportunities across India and the UAE.</p>
                </div>
                <div class="vxn-com__acc" data-vxn-acc>
                    <?php foreach ($__events as $__ev): ?>
                        <details name="vxn-events">
                            <summary>
                                <span><?= h($__ev['t']) ?></span>
                                <span class="vxn-com__acc-ico" aria-hidden="true"></span>
                            </summary>
                            <div class="vxn-com__acc-body"><?= h($__ev['d']) ?></div>
                        </details>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA band -->
    <section class="vxn-com__cta">
        <h2>Learn more about how we work with our community</h2>
        <p>Explore our advisory services, meet the group, or simply reach out — we would be glad to connect you with the right people in our network.</p>
        <a class="vxn-com__btn vxn-com__btn--solid" href="<?= BASE ?>/services/">
            <span>Explore</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
    </section>

    <!-- Disclaimer -->
    <section class="vxn-com__disc">
        <div class="vxn-com__wrap">
            <h4>Disclaimer</h4>
            <p>All community figures shown on this page are illustrative and based on internal estimates; they are not independently verified and should not be relied upon as a representation of assets, returns, or performance. VALUNXT Capital does not provide personalised investment advice through this website. Events and gatherings are offered at VALUNXT Capital's discretion and do not confer any rights in relation to any investment.</p>
        </div>
    </section>

</div>

<script>
(function(){
    /* ---- Tabs ---- */
    document.querySelectorAll('[data-vxn-tabs]').forEach(function(root){
        var tabs = root.querySelectorAll('[data-vxn-tab]');
        var panels = root.querySelectorAll('[data-vxn-panel]');
        function select(key){
            tabs.forEach(function(t){ t.setAttribute('aria-selected', t.dataset.vxnTab === key ? 'true' : 'false'); });
            panels.forEach(function(p){
                var on = p.dataset.vxnPanel === key;
                p.classList.toggle('is-active', on);
                if(on){ p.removeAttribute('hidden'); } else { p.setAttribute('hidden',''); }
            });
        }
        tabs.forEach(function(t){
            t.addEventListener('click', function(){ select(t.dataset.vxnTab); });
            t.addEventListener('keydown', function(e){
                if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
                e.preventDefault();
                var arr = Array.prototype.slice.call(tabs);
                var i = arr.indexOf(t);
                var n = e.key === 'ArrowRight' ? (i+1)%arr.length : (i-1+arr.length)%arr.length;
                arr[n].focus(); select(arr[n].dataset.vxnTab);
            });
        });
    });

    /* ---- Accordion (single-open fallback for browsers without name= support) ---- */
    document.querySelectorAll('[data-vxn-acc]').forEach(function(acc){
        var items = acc.querySelectorAll('details');
        items.forEach(function(d){
            d.addEventListener('toggle', function(){
                if(!d.open) return;
                items.forEach(function(o){ if(o !== d) o.open = false; });
            });
        });
    });

    /* ---- Carousel ---- */
    document.querySelectorAll('[data-vxn-car]').forEach(function(root){
        var track = root.querySelector('.vxn-com__car-track');
        var slides = root.querySelectorAll('.vxn-com__car-slide');
        var prev = root.querySelector('.vxn-com__car-btn--prev');
        var next = root.querySelector('.vxn-com__car-btn--next');
        var dotsWrap = root.querySelector('.vxn-com__car-dots');
        if(!track || !slides.length) return;

        function perView(){ return window.innerWidth <= 900 ? 1 : 3; }
        var index = 0, pv = perView(), maxIndex = Math.max(0, slides.length - pv), timer = null;

        function pages(){ return maxIndex + 1; }
        function buildDots(){
            dotsWrap.innerHTML = '';
            for(var i=0;i<pages();i++){ (function(i){
                var b = document.createElement('button');
                b.type = 'button'; b.className = 'vxn-com__dot';
                b.setAttribute('aria-label', 'Go to slide ' + (i+1));
                b.addEventListener('click', function(){ go(i); rest(); });
                dotsWrap.appendChild(b);
            })(i); }
        }
        function render(){
            track.style.transform = 'translateX(-' + (index * (100 / pv)) + '%)';
            var dots = dotsWrap.children;
            for(var i=0;i<dots.length;i++){ dots[i].classList.toggle('is-active', i === index); }
        }
        function go(i){ index = (i < 0) ? maxIndex : (i > maxIndex ? 0 : i); render(); }
        function nextFn(){ go(index + 1); }
        function start(){ if(!timer){ timer = setInterval(nextFn, 4500); } }
        function stop(){ if(timer){ clearInterval(timer); timer = null; } }
        function rest(){ stop(); start(); }

        prev.addEventListener('click', function(){ go(index - 1); rest(); });
        next.addEventListener('click', function(){ go(index + 1); rest(); });
        root.addEventListener('mouseenter', stop);
        root.addEventListener('mouseleave', start);

        var rt = null;
        window.addEventListener('resize', function(){
            if(rt) clearTimeout(rt);
            rt = setTimeout(function(){
                pv = perView(); maxIndex = Math.max(0, slides.length - pv);
                if(index > maxIndex) index = maxIndex;
                buildDots(); render();
            }, 150);
        });

        buildDots(); render(); start();
    });
})();
</script>
