<?php
/* Track record page body. Driven by data/track-record.php — see that file for
   why it ships empty. Reached only when `metrics` is non-empty.

   The design point: every figure is rendered next to its basis of preparation.
   A metric without a stated basis is what this page exists to replace, so the
   template gives the basis equal visual weight rather than hiding it in a
   footnote. Self-contained CSS, scoped under .vxn-tr. */

$__metrics = $TRACK['metrics'] ?? array();
$__cases   = $TRACK['cases'] ?? array();
?>
<style>
/* ===== VALUNXT track record =============================================== */
.vxn-tr{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--body:#4d5863;--muted:#6b757e;--line:#e5e1d8;--paper:#f7f6f3;font-family:"DM Sans",sans-serif;color:var(--body);background:#fff;}
.vxn-tr *{box-sizing:border-box;}
.vxn-tr__wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.vxn-tr__eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 14px;}
.vxn-tr h2.vxn-tr__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.1;font-size:clamp(27px,3.4vw,42px);margin:0 0 18px;}
.vxn-tr__lead{margin:0;max-width:74ch;font-size:16.5px;line-height:1.8;}

/* ---- Metrics ------------------------------------------------------------- */
.vxn-tr__metrics{padding:64px 0 60px;}
.vxn-tr__mgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:40px;}
.vxn-tr__m{border:1px solid var(--line);border-radius:12px;padding:30px 28px 26px;background:#fff;}
.vxn-tr__mval{font-family:"Forum",serif;font-size:clamp(38px,4.4vw,54px);line-height:1;color:var(--ny);margin:0 0 10px;}
.vxn-tr__mlabel{font-size:15px;font-weight:600;color:var(--ny2);margin:0 0 16px;}
.vxn-tr__mbasis{margin:0;padding-top:16px;border-top:1px solid var(--line);font-size:13px;line-height:1.7;color:var(--muted);}
.vxn-tr__mbasis strong{display:block;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gd2);margin-bottom:6px;}

/* ---- Cases --------------------------------------------------------------- */
.vxn-tr__cases{background:var(--paper);padding:64px 0 70px;}
.vxn-tr__clist{display:flex;flex-direction:column;gap:24px;margin-top:40px;}
.vxn-tr__c{background:#fff;border:1px solid var(--line);border-radius:12px;padding:32px 34px 30px;}
.vxn-tr__ctop{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:0 0 18px;}
.vxn-tr__pill{background:var(--paper);color:var(--ny2);font-size:11px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;padding:6px 11px;border-radius:3px;}
.vxn-tr__pill--year{background:transparent;color:var(--muted);padding-left:0;}
.vxn-tr h3.vxn-tr__cclient{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;font-size:25px;line-height:1.2;margin:0 0 22px;}
.vxn-tr__cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
.vxn-tr__cblock h4{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 9px;}
.vxn-tr__cblock p{margin:0;font-size:14.5px;line-height:1.75;}
.vxn-tr__consent{margin:22px 0 0;padding-top:16px;border-top:1px solid var(--line);font-size:12.5px;color:var(--muted);}

/* ---- Note ---------------------------------------------------------------- */
.vxn-tr__note{padding:52px 0 66px;}
.vxn-tr__notebox{border-left:2px solid var(--gd);padding:6px 0 6px 22px;max-width:82ch;}
.vxn-tr__notebox p{margin:0 0 12px;font-size:14.5px;line-height:1.8;color:var(--body);}
.vxn-tr__notebox p:last-child{margin-bottom:0;}
.vxn-tr__notebox a{color:var(--ny2);text-decoration:underline;text-underline-offset:2px;}

@media(max-width:960px){
    .vxn-tr__mgrid{grid-template-columns:repeat(2,1fr);}
    .vxn-tr__cgrid{grid-template-columns:1fr;gap:20px;}
}
@media(max-width:640px){
    .vxn-tr__metrics,.vxn-tr__cases{padding:46px 0 50px;}
    .vxn-tr__mgrid{grid-template-columns:1fr;}
    .vxn-tr__c{padding:26px 22px 24px;}
}
</style>
<div class="vxn-tr">

    <section class="vxn-tr__metrics">
        <div class="vxn-tr__wrap">
            <p class="vxn-tr__eyebrow">By the numbers</p>
            <h2 class="vxn-tr__h">What we have actually done</h2>
            <p class="vxn-tr__lead">Numbers on an advisory website are worth exactly as much as the basis behind them. Each figure below states what was counted, by which entity, and over what period &mdash; so you can judge it rather than take it.</p>

            <div class="vxn-tr__mgrid">
                <?php foreach ($__metrics as $__m): ?>
                    <div class="vxn-tr__m">
                        <p class="vxn-tr__mval"><?= h($__m['value']) ?></p>
                        <p class="vxn-tr__mlabel"><?= h($__m['label']) ?></p>
                        <?php if (!empty($__m['basis'])): ?>
                            <p class="vxn-tr__mbasis"><strong>Basis</strong><?= h($__m['basis']) ?></p>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <?php if ($__cases): ?>
        <section class="vxn-tr__cases">
            <div class="vxn-tr__wrap">
                <p class="vxn-tr__eyebrow">Selected engagements</p>
                <h2 class="vxn-tr__h">The work behind the figures</h2>
                <p class="vxn-tr__lead">A sample of mandates we are cleared to publish. Where a client cannot be named, the engagement is described by type and the anonymisation is stated.</p>

                <div class="vxn-tr__clist">
                    <?php foreach ($__cases as $__c): ?>
                        <article class="vxn-tr__c">
                            <div class="vxn-tr__ctop">
                                <?php if (!empty($__c['service'])): ?><span class="vxn-tr__pill"><?= h($__c['service']) ?></span><?php endif; ?>
                                <?php if (!empty($__c['sector'])): ?><span class="vxn-tr__pill"><?= h($__c['sector']) ?></span><?php endif; ?>
                                <?php if (!empty($__c['market'])): ?><span class="vxn-tr__pill"><?= h($__c['market']) ?></span><?php endif; ?>
                                <?php if (!empty($__c['year'])): ?><span class="vxn-tr__pill vxn-tr__pill--year"><?= h($__c['year']) ?></span><?php endif; ?>
                            </div>
                            <h3 class="vxn-tr__cclient"><?= h($__c['client']) ?></h3>
                            <div class="vxn-tr__cgrid">
                                <div class="vxn-tr__cblock">
                                    <h4>The question</h4>
                                    <p><?= h($__c['challenge']) ?></p>
                                </div>
                                <div class="vxn-tr__cblock">
                                    <h4>What we did</h4>
                                    <p><?= h($__c['approach']) ?></p>
                                </div>
                                <div class="vxn-tr__cblock">
                                    <h4>Outcome</h4>
                                    <p><?= h($__c['outcome']) ?></p>
                                </div>
                            </div>
                            <?php if (!empty($__c['consent'])): ?>
                                <p class="vxn-tr__consent"><?= h($__c['consent']) ?></p>
                            <?php endif; ?>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
    <?php endif; ?>

    <section class="vxn-tr__note">
        <div class="vxn-tr__wrap">
            <div class="vxn-tr__notebox">
                <p><strong>How to read this page.</strong> Past engagements describe work delivered under specific mandates and market conditions. They are a record of what we did, not an indication of what any future engagement will produce, and nothing here is a forecast or a performance guarantee.</p>
                <p>Figures are stated on the basis shown against each one and are reviewed when the underlying records are updated. If you need a figure evidenced for a due-diligence or panel-application process, <a href="<?= BASE ?>/contact/">ask us</a> and we will provide the supporting detail directly.</p>
                <p>See also the full <a href="<?= BASE ?>/disclaimer/">Disclaimer</a>.</p>
            </div>
        </div>
    </section>

</div>
