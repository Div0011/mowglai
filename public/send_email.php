<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// ---------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------
// TODO: Replace this with your actual Resend API Key from https://resend.com/api-keys
$resendApiKey = "re_UaM33ejk_KDUS6ospPwuPxNsLWQQQzJk9"; 

// The email address that emails should appear to come from.
// MUST be verified in your Resend dashboard (e.g., onboarding@resend.dev or no-reply@mowglai.in)
$fromEmail = "onboarding@resend.dev"; 

// Where to send admin notifications
$adminEmail = "info@mowglai.in";
// ---------------------------------------------------------

function sendResendEmail($apiKey, $from, $to, $subject, $html) {
    $url = 'https://api.resend.com/emails';
    $data = [
        'from' => $from,
        'to' => $to,
        'subject' => $subject,
        'html' => $html
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        return ['success' => false, 'error' => $error];
    }
    
    // Resend returns 200 OK on success
    if ($httpCode >= 200 && $httpCode < 300) {
        return ['success' => true, 'data' => json_decode($response, true)];
    } else {
        return ['success' => false, 'error' => $response];
    }
}

// Get POST data
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid JSON"]);
    exit();
}

$email = $input['email'] ?? '';
$name = $input['name'] ?? 'Visitor';
$subject = $input['subject'] ?? 'New Message';
$companyName = $input['company_name'] ?? 'N/A';
$planSelected = $input['plan_selected'] ?? 'N/A';
$targetStartDate = $input['target_start_date'] ?? 'N/A';
$visionWorkPlan = $input['vision_work_plan'] ?? 'N/A';

if (empty($email)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Email is required"]);
    exit();
}

// --- 1. Send Admin Notification ---
$adminHtml = "
    <h2>New Project Submission</h2>
    <p><strong>Name:</strong> {$name}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Company:</strong> {$companyName}</p>
    <p><strong>Plan:</strong> {$planSelected}</p>
    <p><strong>Start Date:</strong> {$targetStartDate}</p>
    <br/>
    <h3>Vision/Work Plan:</h3>
    <p style='white-space: pre-wrap;'>" . htmlspecialchars($visionWorkPlan) . "</p>
";

$adminResult = sendResendEmail($resendApiKey, $fromEmail, $adminEmail, $subject, $adminHtml);

if (!$adminResult['success']) {
    // Log error for debugging
    error_log("Resend Error (Admin): " . print_r($adminResult['error'], true));
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email to admin. Check server logs."]);
    exit();
}

// --- 2. Send User Confirmation (Fire and forget-ish, but sequential here) ---
$userHtml = "
    <h2>Hi {$name},</h2>
    <p>Thanks for reaching out to Mowglai! We have received your project request for the <strong>{$planSelected}</strong> plan.</p>
    <p>Our team will review your requirements and get back to you shortly.</p>
    <br/>
    <p>Best regards,</p>
    <p><strong>The Mowglai Team</strong></p>
";

$userResult = sendResendEmail($resendApiKey, $fromEmail, $email, "We've received your request: {$companyName}", $userHtml);

if (!$userResult['success']) {
    error_log("Resend Error (User): " . print_r($userResult['error'], true));
    // We still consider it a success if admin got it, but maybe warn? 
    // For now, let's just return success for the UI.
}

echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
?>
