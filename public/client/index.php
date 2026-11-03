<?php
declare(strict_types=1);

/**
 * Mowglai Client Portal Entrypoint
 * Overrides any Hostinger default placeholder and serves the bespoke Client Hub.
 */
header('Content-Type: text/html; charset=UTF-8');
header('X-Frame-Options: SAMEORIGIN');
header('X-Content-Type-Options: nosniff');

if (file_exists(__DIR__ . '/index.html')) {
    include __DIR__ . '/index.html';
    exit;
}

echo '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=https://mowglai.com/ai-onboard"></head><body>Redirecting to Mowglai Client Hub...</body></html>';
