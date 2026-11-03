<?php
declare(strict_types=1);

// db.php - Database Connection with Environment & Hostinger Fallback

if (!function_exists('mowglai_get_env')) {
    function mowglai_get_env(string $key, string $default = ''): string {
        if (!empty($_SERVER[$key])) {
            return (string)$_SERVER[$key];
        }
        if (!empty($_SERVER['REDIRECT_' . $key])) {
            return (string)$_SERVER['REDIRECT_' . $key];
        }
        if (!empty($_ENV[$key])) {
            return (string)$_ENV[$key];
        }
        $val = getenv($key);
        if ($val !== false && $val !== '') {
            return (string)$val;
        }
        return $default;
    }
}

$host = mowglai_get_env('DB_HOST', 'localhost');
$db   = mowglai_get_env('DB_NAME', 'u707591712_mowglai_data');
$user = mowglai_get_env('DB_USER', 'u707591712_mowglai_user');
$pass = mowglai_get_env('DB_PASS', 'Mowglai@2025');

$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

$pdo = null;
$pdo_error = null;

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    $pdo = null;
    $pdo_error = $e->getMessage();

    // Only exit with HTTP 500 if db.php was requested directly as an HTTP endpoint
    $scriptFilename = isset($_SERVER['SCRIPT_FILENAME']) ? realpath($_SERVER['SCRIPT_FILENAME']) : '';
    if ($scriptFilename && $scriptFilename === realpath(__FILE__)) {
        header('Content-Type: application/json');
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Database connection failed. Please check server configuration.'
        ]);
        exit;
    }
}
?>
