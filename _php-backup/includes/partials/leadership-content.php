<?php
/* Leadership page body. Driven entirely by data/leadership.php — see that file
   for why it ships empty and what to put in it. This partial is only reached
   when at least one person is defined (about/leadership/index.php 404s
   otherwise), so there is no empty state to design for.
   Self-contained CSS, scoped under .vxn-team. */

$__people = $LEADERSHIP ?? array();

/* Person structured data, so search engines can associate the named
   individuals and their credentials with the organisation. */
$__ld = array();
foreach ($__people as $__p) {
    $__entry = array(
        '@context'    => 'https://schema.org',
        '@type'       => 'Person',
        'name'        => $__p['name'],
        'jobTitle'    => $__p['role'],
        'worksFor'    => array('@type' => 'Organization', 'name' => $__p['company'] ?? 'VALUNXT Capital'),
    );
    if (!empty($__p['credentials'])) $__entry['hasCredential'] = array_values($__p['credentials']);
    if (!empty($__p['linkedin']))    $__entry['sameAs']        = array($__p['linkedin']);
    $__ld[] = $__entry;
}
?>
<style>
/* ===== VALUNXT leadership ================================================= */
.vxn-team{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--body:#4d5863;--muted:#6b757e;--line:#e5e1d8;--paper:#f7f6f3;font-family:"DM Sans",sans-serif;color:var(--body);background:#fff;padding:64px 0 72px;}
.vxn-team *{box-sizing:border-box;}
.vxn-team__wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.vxn-team__eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 14px;}
.vxn-team h2.vxn-team__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.1;font-size:clamp(27px,3.4vw,42px);margin:0 0 18px;}
.vxn-team__lead{margin:0;max-width:74ch;font-size:16.5px;line-height:1.8;}
.vxn-team__head{margin:0 0 46px;}

.vxn-team__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
.vxn-team__card{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;display:flex;flex-direction:column;transition:box-shadow .25s,transform .25s;}
.vxn-team__card:hover{box-shadow:0 24px 56px -34px rgba(14,53,95,.42);transform:translateY(-3px);}
.vxn-team__photo{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;background:var(--paper);}
.vxn-team__initials{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:4/5;background:linear-gradient(150deg,#0053B7,#0E355F);}
.vxn-team__initials span{font-family:"Forum",serif;font-size:52px;color:var(--gd);line-height:1;}
.vxn-team__body{padding:26px 26px 24px;display:flex;flex-direction:column;flex:1;}
.vxn-team h3.vxn-team__name{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;font-size:23px;line-height:1.2;margin:0 0 6px;}
.vxn-team__role{margin:0 0 4px;font-size:14.5px;color:var(--ny2);font-weight:600;}
.vxn-team__meta{margin:0 0 16px;font-size:13px;color:var(--muted);}
.vxn-team__creds{display:flex;flex-wrap:wrap;gap:7px;margin:0 0 16px;padding:0;list-style:none;}
.vxn-team__creds li{background:var(--paper);color:var(--ny2);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:6px 10px;border-radius:3px;}
.vxn-team__bio{margin:0 0 18px;font-size:14.5px;line-height:1.75;}
.vxn-team__focus{margin:0 0 18px;padding:14px 16px;background:var(--paper);border-left:2px solid var(--gd);font-size:13.5px;line-height:1.7;}
.vxn-team__focus strong{display:block;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:6px;}
.vxn-team__li{margin-top:auto;align-self:flex-start;font-size:12.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ny)!important;text-decoration:none;border-bottom:1px solid var(--gd);padding-bottom:3px;transition:color .2s;}
.vxn-team__li:hover{color:var(--gd2)!important;}

@media(max-width:960px){.vxn-team__grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.vxn-team{padding:46px 0 54px;}.vxn-team__grid{grid-template-columns:1fr;}}
</style>
<section class="vxn-team">
    <div class="vxn-team__wrap">
        <div class="vxn-team__head">
            <p class="vxn-team__eyebrow">Leadership</p>
            <h2 class="vxn-team__h">The people accountable for the advice</h2>
            <p class="vxn-team__lead">Independent advice is only as good as the people signing it. These are the senior practitioners across the group &mdash; their qualifications, their registrations, and what each of them actually works on.</p>
        </div>

        <div class="vxn-team__grid">
            <?php foreach ($__people as $__p): ?>
                <article class="vxn-team__card">
                    <?php if (!empty($__p['photo'])): ?>
                        <img class="vxn-team__photo" src="<?= BASE . h($__p['photo']) ?>" alt="<?= h($__p['name']) ?>" loading="lazy">
                    <?php else: ?>
                        <div class="vxn-team__initials" aria-hidden="true">
                            <span><?= h(strtoupper(substr(trim($__p['name']), 0, 1))) ?></span>
                        </div>
                    <?php endif; ?>
                    <div class="vxn-team__body">
                        <h3 class="vxn-team__name"><?= h($__p['name']) ?></h3>
                        <p class="vxn-team__role"><?= h($__p['role']) ?></p>
                        <?php
                        $__meta = array_filter(array($__p['company'] ?? '', $__p['based'] ?? ''));
                        if ($__meta): ?>
                            <p class="vxn-team__meta"><?= h(implode(' &middot; ', $__meta)) ?></p>
                        <?php endif; ?>

                        <?php if (!empty($__p['credentials'])): ?>
                            <ul class="vxn-team__creds">
                                <?php foreach ($__p['credentials'] as $__c): ?><li><?= h($__c) ?></li><?php endforeach; ?>
                            </ul>
                        <?php endif; ?>

                        <p class="vxn-team__bio"><?= h($__p['bio']) ?></p>

                        <?php if (!empty($__p['focus'])): ?>
                            <div class="vxn-team__focus">
                                <strong>Focus</strong>
                                <?= h(implode(', ', $__p['focus'])) ?>
                            </div>
                        <?php endif; ?>

                        <?php if (!empty($__p['linkedin'])): ?>
                            <a class="vxn-team__li" href="<?= h($__p['linkedin']) ?>" target="_blank" rel="noopener">LinkedIn &rarr;</a>
                        <?php endif; ?>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php foreach ($__ld as $__l): ?>
<script type="application/ld+json"><?= json_encode($__l, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) ?></script>
<?php endforeach; ?>
