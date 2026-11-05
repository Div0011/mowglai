<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$isAllowedOrigin = (
    preg_match('/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/', $origin) ||
    preg_match('/^https:\/\/([a-z0-9-]+\.)?mowglai\.(com|tech)$/i', $origin) ||
    preg_match('/^https:\/\/([a-z0-9-]+\.)?vercel\.app$/i', $origin)
);

if ($isAllowedOrigin) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: GET, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$email = filter_input(INPUT_GET, 'email', FILTER_VALIDATE_EMAIL);

if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Valid email is required.']);
    exit;
}

try {
    if (!isset($pdo) || !$pdo instanceof PDO) {
        throw new PDOException("Database connection unavailable.");
    }

    $stmt = $pdo->prepare("SELECT id, plan_name, purchase_date, expiration_date, status, details FROM purchases WHERE email = ? ORDER BY purchase_date DESC");
    $stmt->execute([$email]);
    $purchases = $stmt->fetchAll();

    echo json_encode([
        'success' => true,
        'purchases' => $purchases ?: []
    ]);
} catch (PDOException $e) {
    // If DB fails (table might not exist yet), return graceful response so UI doesn't crash
    echo json_encode([
        'success' => true,
        'purchases' => [],
        'notice' => 'No active purchase records found or database table initializing.'
    ]);
}
?>
