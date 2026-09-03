<?php
$__canvas = !empty($PAGE['canvas']);
if (!$__canvas):
    $__fv = $PAGE['footer'] ?? 'none';
    $__p  = __DIR__ . '/partials/footer-' . $__fv . '.php';
    if (is_file($__p)) require $__p;
?>
    </div><!-- /#page -->
<?php endif; ?>
<div id="scroll-to-top" class="vamtam-scroll-to-top">
    <div id="scroll-to-top-text">top</div>
</div>
<?php require __DIR__ . '/partials/cookie-consent.php'; ?>
<?php require __DIR__ . '/scripts.php'; ?>
</body>

</html>