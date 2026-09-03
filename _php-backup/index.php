<?php
/**
 * Region gateway.
 *
 * The site is published as one edition per market — /en-in/ (India) and
 * /en-ae/ (UAE) — so the root is not a page any more. It resolves the visitor's
 * market (their last choice, then the country the host reports, then India as
 * the default) and forwards them to that edition's home.
 *
 * The India home that used to live here is now /en-in/index.php, unchanged.
 *
 * 302 rather than 301: the answer depends on the visitor, so it must not be
 * cached as if it were the one true destination for everybody.
 */
$__r = __DIR__;
while (!is_file($__r . '/config.php') && dirname($__r) !== $__r) $__r = dirname($__r);
require $__r . '/config.php';

$target = BASE . '/' . vxn_region_detect() . '/';

header('Location: ' . $target, true, 302);
header('Cache-Control: no-store, max-age=0');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=<?= h($target) ?>">
    <link rel="canonical" href="<?= h($target) ?>">
    <title>VALUNXT Capital</title>
</head>
<body>
    <p>Continue to <a href="<?= h($target) ?>">VALUNXT Capital</a>.</p>
</body>
</html>
