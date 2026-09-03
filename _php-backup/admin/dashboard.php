<?php
/**
 * Admin dashboard.
 */
require_once __DIR__ . '/auth.php';
require_login();

$ACTIVE  = 'dashboard';
$u       = current_user();
$favicon = SITE_BASE . '/assets/content/uploads/2025/03/fav-icon-150x150.png';

// Demo figures (wire to real queries as the panel grows).
$stats = [
    ['label' => 'Total Enquiries',   'value' => '1,248', 'trend' => '+12.5%', 'dir' => 'up',   'ico' => '',      'svg' => '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'],
    ['label' => 'Active Clients',     'value' => '342',   'trend' => '+4.2%',  'dir' => 'up',   'ico' => 'blue',  'svg' => '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'],
    ['label' => 'Reports Published',  'value' => '86',    'trend' => '+7 new', 'dir' => 'up',   'ico' => 'green', 'svg' => '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'],
    ['label' => 'Assets Under Review','value' => '$4.7B', 'trend' => '-1.1%',  'dir' => 'down', 'ico' => 'navy',  'svg' => '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'],
];

// Simple 8-month bar chart (percent heights).
$chart = [
    ['Jan', 45], ['Feb', 62], ['Mar', 55], ['Apr', 78],
    ['May', 68], ['Jun', 90], ['Jul', 74], ['Aug', 83],
];

$activity = [
    ['navy',  'New enquiry received',        'Corporate advisory — Meridian Holdings', '18 minutes ago'],
    ['green', 'Report published',            '“Q3 Private Markets Outlook” is now live', '2 hours ago'],
    ['',      'Client onboarded',            'Ashcroft Family Office added to portfolio', '5 hours ago'],
    ['navy',  'Consultation scheduled',      'Free consultation booked for 31 Jul',      'Yesterday'],
];

$enquiries = [
    ['ENQ-2048', 'Meridian Holdings',   'M&A Advisory',        'New',       'new'],
    ['ENQ-2047', 'Ashcroft Family Off.', 'Wealth Structuring', 'In review', 'wait'],
    ['ENQ-2046', 'Northgate Partners',  'Capital Raising',     'Responded', 'ok'],
    ['ENQ-2045', 'Vantage Logistics',   'Valuation',           'New',       'new'],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Dashboard — VALUNXT Capital Admin</title>
    <link rel="icon" href="<?= h($favicon) ?>" sizes="32x32">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Forum&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= h(admin_asset('assets/admin.css')) ?>">
</head>
<body>
<div class="admin-shell">
    <?php require __DIR__ . '/includes/sidebar.php'; ?>

    <div class="main">
        <?php require __DIR__ . '/includes/topbar.php'; ?>

        <main class="content">
            <div class="page-head">
                <div class="crumbs">Home <span class="sep">/</span> Dashboard</div>
                <h1>Welcome back, <?= h(explode(' ', $u['name'])[0]) ?> 👋</h1>
                <p>Here’s what’s happening across VALUNXT Capital today.</p>
            </div>

            <!-- KPI cards -->
            <section class="stat-grid">
                <?php foreach ($stats as $s): ?>
                    <div class="stat-card">
                        <div class="ico <?= h($s['ico']) ?>">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><?= $s['svg'] ?></svg>
                        </div>
                        <div class="label"><?= h($s['label']) ?></div>
                        <div class="value"><?= h($s['value']) ?></div>
                        <div class="trend <?= h($s['dir']) ?>">
                            <?php if ($s['dir'] === 'up'): ?>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                            <?php else: ?>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
                            <?php endif; ?>
                            <?= h($s['trend']) ?> <span class="muted">vs last month</span>
                        </div>
                    </div>
                <?php endforeach; ?>
            </section>

            <!-- Chart + activity -->
            <section class="panel-grid">
                <div class="panel">
                    <div class="panel-head">
                        <h3>Enquiries Overview</h3>
                        <a href="#" class="link">View report</a>
                    </div>
                    <div class="panel-body">
                        <div class="chart">
                            <?php foreach ($chart as $i => $c): ?>
                                <div class="bar-col">
                                    <div class="bar <?= $i % 2 ? 'alt' : '' ?>" style="height: <?= (int)$c[1] ?>%; animation-delay: <?= $i * 60 ?>ms"></div>
                                    <span class="m"><?= h($c[0]) ?></span>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>

                <div class="panel">
                    <div class="panel-head">
                        <h3>Recent Activity</h3>
                        <a href="#" class="link">See all</a>
                    </div>
                    <div class="panel-body">
                        <ul class="activity">
                            <?php foreach ($activity as $a): ?>
                                <li>
                                    <span class="dot <?= h($a[0]) ?>">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    </span>
                                    <div class="txt">
                                        <div class="who"><?= h($a[1]) ?></div>
                                        <div><?= h($a[2]) ?></div>
                                        <div class="when"><?= h($a[3]) ?></div>
                                    </div>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Latest enquiries table -->
            <section class="panel" style="margin-top:20px">
                <div class="panel-head">
                    <h3>Latest Enquiries</h3>
                    <a href="<?= h(admin_url('enquiries.php')) ?>" class="link">Manage enquiries</a>
                </div>
                <div class="panel-body" style="padding:0">
                    <div class="table-wrap">
                        <table class="data">
                            <thead>
                                <tr>
                                    <th>Ref</th>
                                    <th>Client</th>
                                    <th>Service</th>
                                    <th>Status</th>
                                    <th style="text-align:right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($enquiries as $e): ?>
                                    <tr>
                                        <td style="font-weight:600"><?= h($e[0]) ?></td>
                                        <td><?= h($e[1]) ?></td>
                                        <td><?= h($e[2]) ?></td>
                                        <td><span class="pill <?= h($e[4]) ?>"><?= h($e[3]) ?></span></td>
                                        <td style="text-align:right"><a href="#" class="link">View</a></td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    </div>
</div>

<script src="<?= h(admin_asset('assets/admin.js')) ?>"></script>
</body>
</html>
