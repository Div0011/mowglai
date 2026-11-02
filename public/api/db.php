<?php
declare(strict_types=1);

// db.php - Secure Database Connection with Environment Variable Configuration

header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: strict-origin-when-cross-origin');

$host = getenv('DB_HOST') ?: '127.0.0.1';
$db   = getenv('DB_NAME') ?: 'mowglai_data';
$user = getenv('DB_USER') ?: 'mowglai_user';
$pass = getenv('DB_PASS') !== false ? (string)getenv('DB_PASS') : '';

$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    // Fail-closed in production if database password is not explicitly configured
    $isProd = (getenv('APP_ENV') === 'production');
    if ($isProd && empty($pass)) {
        throw new \RuntimeException('Database credentials not configured.');
    }

    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\Throwable $e) {
    header('Content-Type: application/json; charset=UTF-8');
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database connection unavailable. Please check system configuration.'
    ]);
    exit;
}
?>