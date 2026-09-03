<?php
/**
 * Admin login page.
 * Handles the POST sign-in, then renders the premium login screen.
 */
require_once __DIR__ . '/auth.php';

// Already signed in? Go straight to the dashboard.
if (is_logged_in()) {
    header('Location: ' . admin_url('dashboard.php'));
    exit;
}

$error = '';
$email = DEFAULT_ADMIN_EMAIL; // prefilled default id

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email    = trim($_POST['email'] ?? '');
    $password = (string) ($_POST['password'] ?? '');

    if ($email === '' || $password === '') {
        $error = 'Please enter both your email and password.';
    } elseif (($user = attempt_login($email, $password))) {
        login_user($user);
        header('Location: ' . admin_url('dashboard.php'));
        exit;
    } else {
        $error = 'Invalid credentials. Please check your email and password.';
    }
}

$logoWhite = SITE_BASE . '/assets/content/uploads/2025/03/valunxt-logo-white.png';
$logoDark  = SITE_BASE . '/assets/content/uploads/2025/03/valunxt-logo.png';
$favicon   = SITE_BASE . '/assets/content/uploads/2025/03/fav-icon-150x150.png';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Sign in — VALUNXT Capital Admin</title>
    <link rel="icon" href="<?= h($favicon) ?>" sizes="32x32">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&family=Forum&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= h(admin_asset('assets/admin.css')) ?>">
</head>
<body class="login-body">

    <!-- Brand panel -->
    <aside class="login-brand">
        <div class="brand-logo">
            <img src="<?= h($logoWhite) ?>" alt="VALUNXT Capital">
        </div>

        <div class="brand-copy">
            <span class="eyebrow">Administrator Portal</span>
            <h1>Precision in every <span class="accent">decision.</span></h1>
            <p class="lede">
                Manage your advisory content, client enquiries and insights from a single,
                secure control centre built for the VALUNXT Capital team.
            </p>
            <ul class="brand-points">
                <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Bank-grade session security
                </li>
                <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                    Real-time performance insights
                </li>
                <li>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Centralised client & enquiry management
                </li>
            </ul>
        </div>

        <div class="brand-foot">
            &copy; <?= date('Y') ?> VALUNXT Capital. All rights reserved.
        </div>
    </aside>

    <!-- Form panel -->
    <main class="login-form-wrap">
        <div class="login-card">
            <div class="form-logo">
                <img src="<?= h($logoDark) ?>" alt="VALUNXT Capital">
            </div>

            <h2>Welcome back</h2>
            <p class="sub">Sign in to your VALUNXT Capital admin account.</p>

            <?php if ($error): ?>
                <div class="alert alert-error" role="alert">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <span><?= h($error) ?></span>
                </div>
            <?php endif; ?>

            <form method="post" action="<?= h(admin_url('index.php')) ?>" novalidate>
                <div class="field">
                    <label for="email">Email address</label>
                    <div class="input-shell">
                        <span class="lead-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </span>
                        <input type="email" id="email" name="email" autocomplete="username"
                               value="<?= h($email) ?>" placeholder="you@valunxtcapital.com" required>
                    </div>
                </div>

                <div class="field">
                    <label for="password">Password</label>
                    <div class="input-shell has-toggle">
                        <span class="lead-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </span>
                        <input type="password" id="password" name="password" autocomplete="current-password"
                               value="<?= h(DEFAULT_ADMIN_PASS) ?>" placeholder="Enter your password" required>
                        <button type="button" class="toggle-eye" id="togglePw" aria-label="Show password" aria-pressed="false">
                            <!-- eye (visible by default) -->
                            <svg class="eye-open" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
                            <!-- eye off (hidden until toggled) -->
                            <svg class="eye-off" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c6.5 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3.5 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>
                        </button>
                    </div>
                </div>

                <div class="form-row">
                    <label class="remember">
                        <input type="checkbox" name="remember" value="1"> Remember me
                    </label>
                    <a href="#" class="forgot">Forgot password?</a>
                </div>

                <button type="submit" class="btn-primary">
                    Sign in
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
            </form>

            <div class="cred-hint">
                <strong>Default credentials</strong><br>
                Email: <code><?= h(DEFAULT_ADMIN_EMAIL) ?></code><br>
                Password: <code><?= h(DEFAULT_ADMIN_PASS) ?></code>
            </div>
        </div>
    </main>

    <script>
        (function () {
            var btn = document.getElementById('togglePw');
            var pw  = document.getElementById('password');
            var open = btn.querySelector('.eye-open');
            var off  = btn.querySelector('.eye-off');

            btn.addEventListener('click', function () {
                var show = pw.type === 'password';
                pw.type = show ? 'text' : 'password';
                open.style.display = show ? 'none' : '';
                off.style.display  = show ? '' : 'none';
                btn.setAttribute('aria-pressed', show ? 'true' : 'false');
                btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
                pw.focus();
            });
        })();
    </script>
</body>
</html>
