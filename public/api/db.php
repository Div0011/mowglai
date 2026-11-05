<?php
// db.php - Database Connection
//
// SECURITY: Credentials are NEVER hardcoded here anymore (they were leaked in
// git history + deployed publicly). They must come from environment variables.
//
// On Hostinger shared hosting, set them in the root .htaccess file:
//   SetEnv DB_HOST localhost
//   SetEnv DB_NAME your_db_name
//   SetEnv DB_USER your_db_user
//   SetEnv DB_PASS your_new_db_password   <-- rotate the old one immediately!

$host = getenv('DB_HOST') ?: 'localhost';
$db   = getenv('DB_NAME') ?: '';
$user = getenv('DB_USER') ?: '';
$pass = getenv('DB_PASS') ?: '';

if ($db === '' || $user === '' || $pass === '') {
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database configuration missing. Set DB_HOST/DB_NAME/DB_USER/DB_PASS env vars.',
    ]);
    exit;
}

$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // If connection fails, return a JSON error instead of crashing/printing stack trace
    // This is important for the React frontend to handle gracefully
    header('Content-Type: application/json');
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed. Please check db.php configuration.',
        // 'debug_error' => $e->getMessage() // Uncomment for debugging, hide in production
    ]);
    exit;
}
?>
