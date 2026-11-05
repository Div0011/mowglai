<?php
declare(strict_types=1);

// Direct web access prevention
if (isset($_SERVER['SCRIPT_FILENAME']) && realpath($_SERVER['SCRIPT_FILENAME']) === realpath(__FILE__)) {
    header('HTTP/1.1 403 Forbidden');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode(['error' => 'Direct access forbidden']);
    exit(1);
}

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
$pass = mowglai_get_env('DB_PASS', '');

// Fallback to legacy password only if injected via environment
if (empty($pass)) {
    // If not supplied, try reading from local protected config if exists
    $pass = mowglai_get_env('MYSQL_PASSWORD', '');
}

$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

$pdo = null;
$pdo_error = null;

if (!empty($pass)) {
    try {
        $pdo = new PDO($dsn, $user, $pass, $options);
    } catch (\PDOException $e) {
        $pdo = null;
        $pdo_error = 'Database connection failed';
        error_log('[Mowglai DB] PDO connection error: ' . $e->getMessage());
    }
}
