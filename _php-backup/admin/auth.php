<?php
/**
 * Session bootstrap and authentication helpers for the admin panel.
 */
require_once __DIR__ . '/config.php';

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/** Currently signed-in user array, or null. */
function current_user() {
    return $_SESSION['admin_user'] ?? null;
}

/** Whether a user is signed in. */
function is_logged_in() {
    return !empty($_SESSION['admin_user']);
}

/** Redirect guests to the login page. Call at the top of protected pages. */
function require_login() {
    if (!is_logged_in()) {
        header('Location: ' . ADMIN_BASE . '/index.php');
        exit;
    }
}

/** Build an absolute URL inside the admin panel. */
function admin_url($path = '') {
    return ADMIN_BASE . '/' . ltrim($path, '/');
}

/**
 * URL for a panel asset, stamped with the file's modified time so edits to
 * admin.css / admin.js reach the browser without a hard refresh. (The site's
 * .htaccess caches CSS and JS for a month.)
 */
function admin_asset($path) {
    $file = __DIR__ . '/' . ltrim($path, '/');
    $stamp = is_file($file) ? filemtime($file) : null;
    return admin_url($path) . ($stamp ? '?v=' . $stamp : '');
}

/** Build an absolute URL on the public site. */
function site_url($path = '') {
    return (SITE_BASE ?: '') . '/' . ltrim($path, '/');
}

/**
 * Attempt to authenticate an email + password pair.
 *
 * @return array|false The user row on success, false on failure.
 */
function attempt_login($email, $password) {
    $stmt = db()->prepare("SELECT * FROM users WHERE email = ? LIMIT 1");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password_hash'])) {
        // Record the login time (best effort).
        try {
            $upd = db()->prepare("UPDATE users SET last_login_at = NOW() WHERE id = ?");
            $upd->execute([$user['id']]);
        } catch (Throwable $e) { /* non-fatal */ }

        return $user;
    }
    return false;
}

/** Store the authenticated user in the session and regenerate the id. */
function login_user(array $user) {
    session_regenerate_id(true);
    $_SESSION['admin_user'] = [
        'id'    => (int) $user['id'],
        'name'  => $user['name'],
        'email' => $user['email'],
        'role'  => $user['role'],
    ];
}

/** Return the user's initials for the avatar (e.g. "VA"). */
function user_initials($name) {
    $parts = preg_split('/\s+/', trim((string)$name));
    $ini = '';
    foreach ($parts as $p) {
        if ($p !== '') $ini .= strtoupper($p[0]);
        if (strlen($ini) >= 2) break;
    }
    return $ini !== '' ? $ini : 'A';
}
