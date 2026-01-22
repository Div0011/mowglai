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
$headers = "From: Mowglai <no-reply@mowglai.in>\r\n"; // Sending from the domain to avoid spam filters
$headers .= "Reply-To: {$from}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send Admin Email
    if (mail($to, $subject, $body, $headers)) {
        
        // --- Send Confirmation Email to User ---
        $user_email = $from;
        $user_subject = "Welcome to Mowglai - We've received your message";
        
        // Read the HTML template
        // Assuming email_mowglai.html is in the same directory or accessible via path
        // Since this script is likely in public/, and email_mowglai.html is in root in dev, 
        // during build/deploy we need to ensure the HTML file is available.
        // For now, we'll try to read it from the same directory or one level up if needed.
        // In a typical Next.js static export / PHP serve setup, assets might be in root.
        
        $template_path = 'email_mowglai.html'; 
        if (!file_exists($template_path)) {
             $template_path = '../email_mowglai.html';
        }

        if (file_exists($template_path)) {
            $user_body = file_get_contents($template_path);
            
            // Set headers for HTML email
            $user_headers = "MIME-Version: 1.0" . "\r\n";
            $user_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $user_headers .= "From: Mowglai <no-reply@mowglai.in>" . "\r\n";
            $user_headers .= "Reply-To: info@mowglai.in" . "\r\n";
            $user_headers .= "X-Mailer: PHP/" . phpversion();
            $user_headers .= "X-Priority: 3\r\n"; // Normal priority
            $user_headers .= "X-MSMail-Priority: Normal\r\n";

            // Send user email
            mail($user_email, $user_subject, $user_body, $user_headers);
        }

        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email server-side."]);
    }
?>
