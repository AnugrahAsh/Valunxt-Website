<?php
/**
 * Admin — Enquiries.
 * Lists website lead-capture submissions stored in the `enquiries` table and
 * lets an administrator delete individual entries.
 */
require_once __DIR__ . '/auth.php';
require_login();

$ACTIVE  = 'enquiries';
$u       = current_user();
$favicon = SITE_BASE . '/assets/content/uploads/2025/03/fav-icon-150x150.png';

// CSRF token for the delete form.
if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(16));
}
$CSRF = $_SESSION['csrf'];

$flash = '';

// ---- Handle delete (POST → redirect, so refresh doesn't resubmit) ----------
if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['op'] ?? '') === 'delete') {
    $token = (string) ($_POST['csrf'] ?? '');
    $id    = (int) ($_POST['id'] ?? 0);
    if (!hash_equals($CSRF, $token)) {
        $_SESSION['flash'] = 'Your session expired. Please try again.';
    } elseif ($id > 0) {
        try {
            $del = db()->prepare("DELETE FROM enquiries WHERE id = ?");
            $del->execute([$id]);
            $_SESSION['flash'] = $del->rowCount() ? 'Enquiry deleted.' : 'That enquiry no longer exists.';
        } catch (Throwable $e) {
            $_SESSION['flash'] = 'Could not delete the enquiry.';
        }
    }
    header('Location: ' . admin_url('enquiries.php'));
    exit;
}

// Pull the flash message set before the post-delete redirect.
if (!empty($_SESSION['flash'])) {
    $flash = $_SESSION['flash'];
    unset($_SESSION['flash']);
}

// ---- Load enquiries --------------------------------------------------------
$rows = [];
$loadError = '';
try {
    $rows = db()->query(
        "SELECT id, full_name, email, phone, company, source, created_at
         FROM enquiries ORDER BY created_at DESC, id DESC"
    )->fetchAll();
} catch (Throwable $e) {
    $loadError = 'Could not load enquiries. Please ensure MySQL is running in XAMPP.';
}
$total = count($rows);

/** Source → pill colour class. */
function source_pill($src) {
    $map = ['Contact' => 'new', 'Free Consultation' => 'wait', 'Enquiry' => 'ok'];
    return $map[$src] ?? 'new';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Enquiries — VALUNXT Capital Admin</title>
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
                <div class="crumbs">Home <span class="sep">/</span> Enquiries</div>
                <h1>Enquiries</h1>
                <p>Lead-capture submissions from the website contact &amp; consultation forms.</p>
            </div>

            <?php if ($flash): ?>
                <div class="flash" role="status">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span><?= h($flash) ?></span>
                </div>
            <?php endif; ?>

            <section class="panel">
                <div class="panel-head">
                    <h3>All Enquiries <span class="count-chip"><?= (int) $total ?></span></h3>
                    <div class="enq-search">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <input type="text" id="enqFilter" placeholder="Filter by name, email, company…" aria-label="Filter enquiries">
                    </div>
                </div>
                <div class="panel-body" style="padding:0">
                    <?php if ($loadError): ?>
                        <div class="empty-state">
                            <p><?= h($loadError) ?></p>
                        </div>
                    <?php elseif ($total === 0): ?>
                        <div class="empty-state">
                            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            <h4>No enquiries yet</h4>
                            <p>New submissions from the website forms will appear here automatically.</p>
                        </div>
                    <?php else: ?>
                        <div class="table-wrap">
                            <table class="data" id="enqTable">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Company</th>
                                        <th>Source</th>
                                        <th>Received</th>
                                        <th style="text-align:right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($rows as $r): ?>
                                        <tr data-search="<?= h(strtolower($r['full_name'] . ' ' . $r['email'] . ' ' . $r['company'] . ' ' . $r['phone'])) ?>">
                                            <td style="font-weight:600"><?= h($r['full_name'] !== '' ? $r['full_name'] : '—') ?></td>
                                            <td><?php if ($r['email'] !== ''): ?><a class="link" href="mailto:<?= h($r['email']) ?>"><?= h($r['email']) ?></a><?php else: ?>—<?php endif; ?></td>
                                            <td><?php if ($r['phone'] !== ''): ?><a class="link" href="tel:<?= h($r['phone']) ?>"><?= h($r['phone']) ?></a><?php else: ?>—<?php endif; ?></td>
                                            <td><?= h($r['company'] !== '' ? $r['company'] : '—') ?></td>
                                            <td><span class="pill <?= h(source_pill($r['source'])) ?>"><?= h($r['source'] !== '' ? $r['source'] : 'Website') ?></span></td>
                                            <td class="nowrap"><?= h(date('d M Y, H:i', strtotime($r['created_at']))) ?></td>
                                            <td style="text-align:right">
                                                <form method="post" action="<?= h(admin_url('enquiries.php')) ?>" class="inline-del" onsubmit="return confirm('Delete this enquiry from <?= h(addslashes($r['full_name'] !== '' ? $r['full_name'] : $r['email'])) ?>? This cannot be undone.');">
                                                    <input type="hidden" name="op" value="delete">
                                                    <input type="hidden" name="csrf" value="<?= h($CSRF) ?>">
                                                    <input type="hidden" name="id" value="<?= (int) $r['id'] ?>">
                                                    <button type="submit" class="icon-btn danger" aria-label="Delete enquiry" title="Delete">
                                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>
                            <div class="empty-state" id="noMatch" style="display:none">
                                <p>No enquiries match your filter.</p>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
            </section>
        </main>
    </div>
</div>

<script src="<?= h(admin_asset('assets/admin.js')) ?>"></script>
<script>
/* Client-side filter for the enquiries table. */
(function () {
    var input = document.getElementById('enqFilter');
    if (!input) return;
    var rows = Array.prototype.slice.call(document.querySelectorAll('#enqTable tbody tr'));
    var noMatch = document.getElementById('noMatch');
    input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        var shown = 0;
        rows.forEach(function (tr) {
            var hit = !q || (tr.getAttribute('data-search') || '').indexOf(q) !== -1;
            tr.style.display = hit ? '' : 'none';
            if (hit) shown++;
        });
        if (noMatch) noMatch.style.display = shown ? 'none' : '';
    });
})();
</script>
</body>
</html>
