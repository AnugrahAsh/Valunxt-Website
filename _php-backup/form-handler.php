<?php
/**
 * Lightweight form endpoint for the converted (non-WordPress) site.
 * Replaces Elementor Pro's admin-ajax form action. Accepts the same POST
 * payload the Elementor form widget sends, does basic server-side validation,
 * records the submission, and returns Elementor-compatible JSON so the widget
 * shows its success/error message exactly as before.
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'data' => ['message' => 'Method not allowed.']]);
    exit;
}

// Elementor sends fields as form_fields[<id>]; fall back to flat POST too.
$fields = $_POST['form_fields'] ?? $_POST;
if (!is_array($fields)) $fields = [];

// Collect a simple email + required check.
$clean = [];
foreach ($fields as $k => $v) {
    if (is_array($v)) $v = implode(', ', $v);
    $clean[preg_replace('~[^a-zA-Z0-9_\- ]~', '', (string)$k)] = trim(strip_tags((string)$v));
}

// Basic validation: require at least one non-empty value; validate any email-looking field.
$hasValue = false;
foreach ($clean as $k => $v) {
    if ($v !== '') $hasValue = true;
    if (stripos($k, 'email') !== false && $v !== '' && !filter_var($v, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'data' => ['message' => 'Please enter a valid email address.']]);
        exit;
    }
}
if (!$hasValue) {
    http_response_code(400);
    echo json_encode(['success' => false, 'data' => ['message' => 'Please fill in the form.']]);
    exit;
}

// Record the submission to a local log (best effort; never blocks the response).
$record = [
    'time'   => date('c'),
    'ip'     => $_SERVER['REMOTE_ADDR'] ?? '',
    'form'   => $_POST['form_id'] ?? ($_POST['form_name'] ?? ''),
    'fields' => $clean,
];
$logDir = __DIR__ . '/data';
@mkdir($logDir, 0777, true);
@file_put_contents($logDir . '/form-submissions.log', json_encode($record, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);

// ---- Store lead-capture enquiries in the database --------------------------
// Lead forms post fields named form_fields[<prefix>_full_name|email|phone|company].
// Match by suffix so one code path handles every form (Contact, Free
// Consultation, homepage/Our Group enquiry).
$pick = function (array $rows, $suffix) {
    foreach ($rows as $k => $v) {
        if ($v !== '' && substr($k, -strlen($suffix)) === $suffix) return $v;
    }
    return '';
};
$full_name = $pick($clean, 'full_name');
$phone     = $pick($clean, 'phone');
$company   = $pick($clean, 'company');
$enqEmail  = $pick($clean, '_email');
if ($enqEmail === '') $enqEmail = $pick($clean, 'email');

// Only record lead-form submissions; skip the email-only newsletter subscribe form.
if ($full_name !== '' || $phone !== '' || $company !== '') {
    $formId    = (string) ($_POST['form_id'] ?? '');
    $sourceMap = ['7655e08' => 'Contact', 'e67e0ee' => 'Free Consultation', '5099fe1' => 'Enquiry', 'partnership' => 'Partnership'];
    $source    = $sourceMap[$formId] ?? ($formId !== '' ? $formId : 'Website');
    $pageUrl   = substr((string) ($_SERVER['HTTP_REFERER'] ?? ''), 0, 255);

    try {
        require_once __DIR__ . '/admin/config.php'; // DB_* constants + enquiries_table_sql()
        $opts = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false];
        $dsnDb = 'mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET;
        try {
            // Production (Hostinger): the DB exists and the user cannot CREATE DATABASE.
            $pdo = new PDO($dsnDb, DB_USER, DB_PASS, $opts);
        } catch (PDOException $e) {
            // Fresh local install: create the database, then reconnect.
            $srv = new PDO('mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';charset=' . DB_CHARSET, DB_USER, DB_PASS, $opts);
            $srv->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
            $pdo = new PDO($dsnDb, DB_USER, DB_PASS, $opts);
        }
        $pdo->exec(enquiries_table_sql());
        $ins = $pdo->prepare(
            "INSERT INTO enquiries (full_name, email, phone, company, source, page_url, ip)
             VALUES (?, ?, ?, ?, ?, ?, ?)"
        );
        $ins->execute([
            substr($full_name, 0, 160), substr($enqEmail, 0, 190), substr($phone, 0, 60),
            substr($company, 0, 190), $source, $pageUrl, ($_SERVER['REMOTE_ADDR'] ?? ''),
        ]);
    } catch (Throwable $e) {
        // Non-fatal: the submission is already captured in the file log above.
        @file_put_contents($logDir . '/form-errors.log', date('c') . ' ' . $e->getMessage() . "\n", FILE_APPEND | LOCK_EX);
    }
}

// Optional email delivery (works only if PHP mail is configured; failure is non-fatal).
$to = 'advisory@valunxtcapital.com';
$subject = 'New enquiry - VALUNXT Capital website';
$body = '';
foreach ($clean as $k => $v) $body .= "$k: $v\n";
@mail($to, $subject, $body);

echo json_encode([
    'success' => true,
    'data'    => [
        'message' => 'Thank you for contacting VALUNXT Capital. Our advisory team will review your enquiry and respond shortly.',
        'data'    => [],
        'meta'    => [],
    ],
]);
