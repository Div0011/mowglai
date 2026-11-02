<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Authentication & Authorization enforcement
$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$apiSecret  = getenv('MOWGLAI_API_SECRET') ?: '';

// When configured, verify Bearer token or API secret
if (!empty($apiSecret)) {
    if (empty($authHeader) || !hash_equals('Bearer ' . $apiSecret, $authHeader)) {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Unauthorized request.']);
        exit;
    }
}

$email = filter_input(INPUT_GET, 'email', FILTER_VALIDATE_EMAIL);
if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Valid email parameter is required.']);
    exit;
}

try {
    if (!isset($pdo)) {
        throw new PDOException("Database connection failed.");
    }

    $stmt = $pdo->prepare("SELECT id, plan_name, purchase_date, expiration_date, status, details FROM purchases WHERE email = ? ORDER BY purchase_date DESC LIMIT 50");
    $stmt->execute([$email]);
    $purchases = $stmt->fetchAll();

    echo json_encode([
        'success' => true,
        'purchases' => $purchases ?: []
    ]);
} catch (\Throwable $e) {
    http_response_code(500);
    // Generic sanitized error response - never expose SQL or server internals
    echo json_encode([
        'success' => false,
        'message' => 'Unable to retrieve purchase history at this time.'
    ]);
}
?>