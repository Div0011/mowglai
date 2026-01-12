<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Get JSON input
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['email'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields"]);
    exit();
}

$to = "info@mowglai.in";
$subject = $_POST['subject'] ?? "New Contact Request from Website";
$from = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$name = $_POST['name'] ?? "Website Visitor";

if (!$from) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email format"]);
    exit();
}

// Construct email body
$body = "New submission received from the website:\n\n";
foreach ($_POST as $key => $value) {
    // Skip internal fields if any
    if (in_array($key, ['subject', 'to'])) continue;
    
    // Format the key to be more readable
    $label = ucwords(str_replace(['_', '-'], ' ', $key));
    
    $body .= "{$label}:\n{$value}\n\n";
}

$body .= "----------------------------------------\n";
$body .= "Sent from mowglai.in";

// Headers
$headers = "From: no-reply@mowglai.in\r\n"; // Sending from the domain to avoid spam filters
$headers .= "Reply-To: {$from}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email server-side."]);
}
?>
