<?php
/* FAQ body. Answers are drawn from what the rest of the site already commits
   to — the four service lines, the group structure, the offices, and the
   engagement model described on each service page — so nothing here asserts a
   fact the site does not otherwise stand behind.

   Every answer is rendered in the DOM. The <details>/<summary> disclosure is
   native HTML: it is keyboard-operable and screen-reader-announced without any
   JavaScript, and search engines index closed panels. That is deliberate — it
   is the same reason the tabbed sections elsewhere were unpicked.

   Also emits FAQPage JSON-LD so the questions are eligible for rich results. */

$__faq = array(
    array(
        'group' => 'Working with VALUNXT',
        'items' => array(
            array(
                'q' => 'What does VALUNXT Capital actually do?',
                'a' => '<p>We are an integrated real estate wealth, capital, research and technology advisory group. In practice that means four connected practices: <a href="' . BASE . '/services/real-estate-investment-advisory/">Real Estate Investment Advisory</a> (portfolio strategy, acquisition and exit), <a href="' . BASE . '/services/capital-advisory/">Capital Advisory</a> (project funding, debt and equity structuring), <a href="' . BASE . '/services/research-intelligence/">Research &amp; Intelligence</a> (independent valuation and market analysis), and <a href="' . BASE . '/services/technology-ai/">Technology &amp; AI</a> (the analytics platform that underpins the other three).</p><p>Most clients engage one practice first and draw on the others as a mandate develops.</p>',
            ),
            array(
                'q' => 'How is VALUNXT different from a broker or an estate agent?',
                'a' => '<p>A broker is paid to complete a transaction. We are engaged to reach a decision, which sometimes means advising against one. Our valuation and research work is delivered independently of whether a deal proceeds.</p><p>Where a transaction is the right answer, execution can be handled inside the group by <a href="' . BASE . '/our-group/houzzhunt/">HouzzHunt</a> — but that is a separate engagement with its own scope, not a condition of the advice.</p>',
            ),
            array(
                'q' => 'What size of mandate do you take on?',
                'a' => '<p>Mandates range from a single-asset valuation for a private owner to portfolio-level advisory for funds and institutions. There is no published minimum: the deciding factor is whether the question is one our valuation, research and capital teams are equipped to answer well.</p><p>If it is not, we will say so at the first conversation rather than after an engagement letter.</p>',
            ),
            array(
                'q' => 'How does an engagement typically start?',
                'a' => '<p>With a scoping conversation — in person at one of our offices, or by video. We establish the decision you are trying to make, the timeline, and what evidence would actually change your mind. From that we set out scope, deliverables and fees in writing before any work begins.</p><p>You can start that conversation through the <a href="' . BASE . '/contact/">contact form</a> or by booking a <a href="' . BASE . '/free-consultation/">consultation</a>.</p>',
            ),
        ),
    ),
    array(
        'group' => 'Valuation &amp; research',
        'items' => array(
            array(
                'q' => 'Are your valuations accepted by banks and lenders?',
                'a' => '<p>Valuation is delivered through <a href="' . BASE . '/our-group/reliant-surveyors/">Reliant Surveyors</a>, our valuation and advisory company, working to internationally recognised valuation standards. Acceptance is ultimately each lender\'s decision and depends on their own panel arrangements, so confirm the requirement with your lender before instructing — we will tell you plainly if we are not on the relevant panel.</p>',
            ),
            array(
                'q' => 'Do you use automated valuation models (AVMs)?',
                'a' => '<p>Yes, as one input rather than the answer. AVMs are fast and consistent for liquid, data-rich segments and are well suited to screening, monitoring and portfolio-level views. Unique assets, thin comparable data and fast-moving markets are where they break down, and those are exactly the situations clients bring to us.</p><p>Our position is set out at more length in <a href="' . BASE . '/blogs/the-future-of-automated-valuation-models-avms/">The Future of Automated Valuation Models</a>.</p>',
            ),
            array(
                'q' => 'Is your research independent of your transaction business?',
                'a' => '<p>Yes. The research desk publishes to <a href="' . BASE . '/research/">Research &amp; Reports</a> on its own schedule and its conclusions are not conditioned on group transaction activity. Where a research view and a group commercial interest could point in different directions, the engagement letter records the conflict and how it is managed.</p>',
            ),
            array(
                'q' => 'Can I get a report on a market you have not published on?',
                'a' => '<p>Often, yes — bespoke research is a normal part of the Research &amp; Intelligence practice. Published reports are the subset of our work we make freely available; commissioned work covers the specific corridor, asset class or question you need. <a href="' . BASE . '/contact/">Tell us the question</a> and we will scope it.</p>',
            ),
        ),
    ),
    array(
        'group' => 'Markets, structure and fees',
        'items' => array(
            array(
                'q' => 'Which markets do you cover?',
                'a' => '<p>' . h(vxn_markets('long')) . '. Our offices are in ' . h(vxn_markets('cities')) . ', and a large share of our work is cross-border between India and the UAE.</p><p>Full office details are on the <a href="' . BASE . '/location/">Location</a> page.</p>',
            ),
            array(
                'q' => 'I am an NRI. Can you advise on buying in India from abroad?',
                'a' => '<p>Yes — cross-border advisory between India and the UAE is a core part of the practice, and NRI allocation is a topic our research desk tracks specifically. We can advise on market and asset selection, valuation, holding structure and the mortgage route, and coordinate the parts of the process that need someone on the ground.</p><p>We are not tax or legal advisers; where a mandate turns on tax residency or exchange-control treatment we will tell you to take specialist advice and work alongside whoever you appoint.</p>',
            ),
            array(
                'q' => 'Why are there four companies rather than one?',
                'a' => '<p>Because valuation, brokerage, mortgage advice and corporate services carry different regulatory obligations and different conflicts. Keeping them in separate entities — <a href="' . BASE . '/our-group/">the four companies of the group</a> — is what allows the valuation work to stay independent of the transaction work.</p><p>You deal with one team; the entity structure sits behind that.</p>',
            ),
            array(
                'q' => 'How are you paid?',
                'a' => '<p>Advisory and research mandates are ordinarily fixed-fee or retained, agreed in writing before work starts. Transaction and capital-raising mandates may carry a success element. Whichever applies, the basis is set out in the engagement letter — we do not begin work on an unpriced scope.</p>',
            ),
            array(
                'q' => 'Is anything on this website investment advice?',
                'a' => '<p>No. Everything published here — including research reports and insights — is general information. It does not take account of your circumstances and should not be relied on as financial, investment, tax or legal advice. Advice only arises under a signed engagement. See the <a href="' . BASE . '/disclaimer/">Disclaimer</a> for the full position.</p>',
            ),
        ),
    ),
);

/* FAQPage structured data, built from the same array that renders the page so
   the markup and the JSON-LD cannot drift apart. */
$__ld = array('@context' => 'https://schema.org', '@type' => 'FAQPage', 'mainEntity' => array());
foreach ($__faq as $__g) {
    foreach ($__g['items'] as $__i) {
        $__ld['mainEntity'][] = array(
            '@type'          => 'Question',
            'name'           => html_entity_decode(strip_tags($__i['q']), ENT_QUOTES, 'UTF-8'),
            'acceptedAnswer' => array(
                '@type' => 'Answer',
                'text'  => html_entity_decode(strip_tags($__i['a']), ENT_QUOTES, 'UTF-8'),
            ),
        );
    }
}
?>
<style>
/* ===== VALUNXT FAQ ========================================================= */
.vxn-faq{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--body:#4d5863;--line:#e5e1d8;--paper:#f7f6f3;font-family:"DM Sans",sans-serif;color:var(--body);background:#fff;padding:64px 0 72px;}
.vxn-faq *{box-sizing:border-box;}
.vxn-faq__wrap{max-width:900px;margin:0 auto;padding:0 24px;}
.vxn-faq__intro{margin:0 0 48px;font-size:17px;line-height:1.8;max-width:72ch;}
.vxn-faq__group{margin:0 0 46px;}
.vxn-faq h2.vxn-faq__gh{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;font-size:clamp(23px,2.4vw,30px);line-height:1.15;margin:0 0 8px;}
.vxn-faq__grule{height:2px;width:56px;background:linear-gradient(90deg,var(--gd),var(--gd2));margin:0 0 22px;}

.vxn-faq__item{border-bottom:1px solid var(--line);}
.vxn-faq__item[open]{background:var(--paper);}
.vxn-faq__q{list-style:none;cursor:pointer;display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding:20px 18px;font-family:"Forum",serif;font-size:19px;line-height:1.4;color:var(--ny);transition:color .2s;}
.vxn-faq__q::-webkit-details-marker{display:none;}
.vxn-faq__q:hover{color:var(--gd2);}
.vxn-faq__item:focus-within .vxn-faq__q{outline:2px solid var(--ny2);outline-offset:-2px;}
.vxn-faq__sign{flex:0 0 auto;width:22px;height:22px;position:relative;margin-top:4px;}
.vxn-faq__sign::before,.vxn-faq__sign::after{content:"";position:absolute;background:var(--gd2);transition:transform .25s,opacity .25s;}
.vxn-faq__sign::before{left:0;top:10px;width:22px;height:2px;}
.vxn-faq__sign::after{left:10px;top:0;width:2px;height:22px;}
.vxn-faq__item[open] .vxn-faq__sign::after{transform:rotate(90deg);opacity:0;}
.vxn-faq__a{padding:0 18px 24px;font-size:16px;line-height:1.8;}
.vxn-faq__a p{margin:0 0 14px;}
.vxn-faq__a p:last-child{margin-bottom:0;}
.vxn-faq__a a{color:var(--ny2);text-decoration:underline;text-underline-offset:2px;}
.vxn-faq__a a:hover{color:var(--gd2);}

.vxn-faq__cta{margin:8px 0 0;padding:30px 32px;background:linear-gradient(90deg,#0053B7 0%,#0E355F 100%);border-radius:10px;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:26px;flex-wrap:wrap;}
.vxn-faq h2.vxn-faq__ctah{font-family:"Forum",serif!important;font-weight:400!important;color:#fff!important;font-size:25px;line-height:1.2;margin:0 0 6px;}
.vxn-faq__ctap{margin:0;color:rgba(255,255,255,.82);font-size:15px;line-height:1.7;}
/* Sweeps to white on hover, keeping its navy label — mechanism in
   valunxt-brand.css, this only names the colour it sweeps. */
.vxn-faq__btn{flex:0 0 auto;display:inline-block;padding:15px 28px;background:var(--gd);color:var(--ny)!important;font-size:12.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;border-radius:4px;--vxn-cta-sweep:#fff;}

@media(max-width:640px){
    .vxn-faq{padding:46px 0 54px;}
    .vxn-faq__q{font-size:17px;padding:18px 6px;}
    .vxn-faq__a{padding:0 6px 20px;}
    .vxn-faq__cta{flex-direction:column;align-items:flex-start;}
}
</style>
<section class="vxn-faq">
    <div class="vxn-faq__wrap">
        <p class="vxn-faq__intro">The questions we are asked most often, answered plainly. If yours is not here, ask it directly &mdash; a scoping conversation costs nothing and is usually faster than reading around the subject.</p>

        <?php foreach ($__faq as $__g): ?>
            <div class="vxn-faq__group">
                <h2 class="vxn-faq__gh"><?= $__g['group'] ?></h2>
                <div class="vxn-faq__grule" aria-hidden="true"></div>
                <?php foreach ($__g['items'] as $__i): ?>
                    <details class="vxn-faq__item">
                        <summary class="vxn-faq__q">
                            <span><?= $__i['q'] ?></span>
                            <span class="vxn-faq__sign" aria-hidden="true"></span>
                        </summary>
                        <div class="vxn-faq__a"><?= $__i['a'] ?></div>
                    </details>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>

        <div class="vxn-faq__cta">
            <div>
                <h2 class="vxn-faq__ctah">Still deciding whether to ask?</h2>
                <p class="vxn-faq__ctap">Tell us the decision you are weighing. If we are not the right people for it, we will tell you who is.</p>
            </div>
            <a class="vxn-faq__btn" href="<?= BASE ?>/contact/">Talk to our advisory team</a>
        </div>
    </div>
</section>
<script type="application/ld+json"><?= json_encode($__ld, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?></script>
