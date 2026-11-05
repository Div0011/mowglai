<?php
header('Content-Type: application/json');
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$email = filter_input(INPUT_GET, 'email', FILTER_VALIDATE_EMAIL);

if (!$email) {
    echo json_encode(['success' => false, 'message' => 'Valid email is required.']);
    exit;
}

try {
    if (!isset($pdo)) {
        throw new PDOException("Database connection failed.");
    }

    $stmt = $pdo->prepare("SELECT id, plan_name, purchase_date, expiration_date, status, details FROM purchases WHERE email = ? ORDER BY purchase_date DESC");
    $stmt->execute([$email]);
    $purchases = $stmt->fetchAll();

    if (empty($purchases)) {
        echo json_encode(['success' => true, 'purchases' => []]);
    } else {
        echo json_encode(['success' => true, 'purchases' => $purchases]);
    }

} catch (PDOException $e) {
    // SECURITY: Never leak internal error details (SQL, table names, paths) to clients.
    error_log('[mowglai] get-purchases failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to fetch purchases right now. Please try again later.'
    ]);
}
?>
