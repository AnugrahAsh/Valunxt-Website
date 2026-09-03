<?php
/**
 * VALUNXT Capital — Admin Panel configuration.
 *
 * Holds the database credentials and returns a shared PDO connection.
 * On first use it bootstraps the database, the `users` table and a default
 * administrator account, so the panel works on a fresh XAMPP install with
 * no manual SQL import required.
 */

// ---- Database credentials (environment-aware) ------------------------------
// Localhost (XAMPP) uses the local MariaDB; production (Hostinger) uses the
// hosting account's MySQL database. Detection is by request host, with a
// filesystem fallback so CLI scripts (cron, tests) also pick the right one.
$__vxn_host  = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
$__vxn_local =
    $__vxn_host === 'localhost'
    || strncmp($__vxn_host, 'localhost:', 10) === 0
    || strpos($__vxn_host, '127.0.0.1') !== false
    || strpos($__vxn_host, '::1') !== false
    || stripos(str_replace('\\', '/', __DIR__), '/xampp/') !== false;

if ($__vxn_local) {
    // Localhost (XAMPP)
    define('DB_HOST', '127.0.0.1');
    define('DB_PORT', '3306');
    define('DB_NAME', 'valunxt_capital_admin');
    define('DB_USER', 'root');
    define('DB_PASS', '');
} else {
    // Production (Hostinger)
    define('DB_HOST', 'localhost');
    define('DB_PORT', '3306');
    define('DB_NAME', 'u431421769_valunxt_capita');
    define('DB_USER', 'u431421769_valunxt_capita');
    define('DB_PASS', 'NxtCapital@1977');
}
define('DB_CHARSET', 'utf8mb4');

// ---- Default administrator (seeded once on first run) ----------------------
define('DEFAULT_ADMIN_NAME',  'VALUNXT Admin');
define('DEFAULT_ADMIN_EMAIL', 'admin@valunxtcapital.com');
define('DEFAULT_ADMIN_PASS',  'Admin@123');

// ---- Portable base URL for the admin panel --------------------------------
// e.g. "/valunxt-capital-updated/admin" when served under XAMPP htdocs.
if (!defined('ADMIN_BASE')) {
    $docroot = str_replace('\\', '/', rtrim($_SERVER['DOCUMENT_ROOT'] ?? '', '/'));
    $appdir  = str_replace('\\', '/', __DIR__);
    $base = ($docroot && strpos($appdir, $docroot) === 0) ? substr($appdir, strlen($docroot)) : '';
    define('ADMIN_BASE', rtrim($base, '/'));
}

// Path back to the public site root (one level up from /admin).
if (!defined('SITE_BASE')) {
    define('SITE_BASE', preg_replace('~/admin$~', '', ADMIN_BASE));
}

if (!function_exists('h')) {
    function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
}

/**
 * DDL for the website enquiries table (lead-capture form submissions).
 * Defined once here so both the admin panel and the public form handler
 * (form-handler.php) create an identical table.
 */
function enquiries_table_sql() {
    return "CREATE TABLE IF NOT EXISTS enquiries (
                id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
                full_name   VARCHAR(160) NOT NULL DEFAULT '',
                email       VARCHAR(190) NOT NULL DEFAULT '',
                phone       VARCHAR(60)  NOT NULL DEFAULT '',
                company     VARCHAR(190) NOT NULL DEFAULT '',
                source      VARCHAR(80)  NOT NULL DEFAULT '',
                page_url    VARCHAR(255) NOT NULL DEFAULT '',
                ip          VARCHAR(45)  NOT NULL DEFAULT '',
                created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                KEY idx_created (created_at)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
}

/**
 * Return a shared PDO connection, bootstrapping the schema on first call.
 *
 * @return PDO
 */
function db() {
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $opts = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];

    try {
        // Connect straight to the named database. On production (Hostinger) the
        // DB is pre-created in hPanel and the account user cannot CREATE DATABASE,
        // so we must NOT attempt it there.
        $dsnDb = 'mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET;
        try {
            $pdo = new PDO($dsnDb, DB_USER, DB_PASS, $opts);
        } catch (PDOException $e) {
            // Database doesn't exist yet (typical on a fresh local XAMPP install).
            // Connect without a DB, create it, then reconnect.
            $dsnServer = 'mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';charset=' . DB_CHARSET;
            $srv = new PDO($dsnServer, DB_USER, DB_PASS, $opts);
            $srv->exec(
                "CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "`
                 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
            );
            $pdo = new PDO($dsnDb, DB_USER, DB_PASS, $opts);
        }

        // Users table.
        $pdo->exec(
            "CREATE TABLE IF NOT EXISTS users (
                id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
                name          VARCHAR(120) NOT NULL,
                email         VARCHAR(190) NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                role          VARCHAR(40)  NOT NULL DEFAULT 'admin',
                last_login_at DATETIME     NULL DEFAULT NULL,
                created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                UNIQUE KEY uq_email (email)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"
        );

        // Enquiries table (website lead-capture form submissions).
        $pdo->exec(enquiries_table_sql());

        // Seed the default administrator once.
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
        $stmt->execute([DEFAULT_ADMIN_EMAIL]);
        if ((int) $stmt->fetchColumn() === 0) {
            $ins = $pdo->prepare(
                "INSERT INTO users (name, email, password_hash, role)
                 VALUES (?, ?, ?, ?)"
            );
            $ins->execute([
                DEFAULT_ADMIN_NAME,
                DEFAULT_ADMIN_EMAIL,
                password_hash(DEFAULT_ADMIN_PASS, PASSWORD_DEFAULT),
                'admin',
            ]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        die('Database connection failed. Please ensure MySQL is running in XAMPP. '
            . '(' . h($e->getMessage()) . ')');
    }

    return $pdo;
}
