<?php
declare(strict_types=1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

function log_ai_event(string $msg): void {
    $ts = gmdate('Y-m-d H:i:s');
    $line = "[$ts UTC] $msg\n";
    $log = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'mowglai-ai.log';
    @file_put_contents($log, $line, FILE_APPEND | LOCK_EX);
}

$rawInput = file_get_contents('php://input');
$data = json_decode((string) $rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

$businessName = trim((string)($data['businessName'] ?? 'Your Business'));
$businessSector = trim((string)($data['businessSector'] ?? 'portfolio'));
$city = trim((string)($data['city'] ?? 'NCR'));
$budget = trim((string)($data['budget'] ?? '₹5,000'));
$primaryGoal = trim((string)($data['primaryGoal'] ?? 'WhatsApp Leads'));
$phone = trim((string)($data['phone'] ?? ''));

log_ai_event("AI Onboard request for '$businessName' ($businessSector) in '$city'");

// Map sector to preview template
$sectorMap = [
    'healthcare'  => ['template' => 'health-1', 'title' => 'MediCare Premium', 'sector' => 'Healthcare'],
    'gym'         => ['template' => 'gym-1', 'title' => 'Iron Strong', 'sector' => 'Fitness & Gym'],
    'yoga'        => ['template' => 'yoga-1', 'title' => 'Zen Sanctuary', 'sector' => 'Yoga & Wellness'],
    'school'      => ['template' => 'school-2', 'title' => 'Bright Future Academy', 'sector' => 'Education'],
    'real-estate' => ['template' => 're-1', 'title' => 'Luxury Living', 'sector' => 'Real Estate'],
    'restaurant'  => ['template' => 'rest-1', 'title' => 'Fine Dining & Cafe', 'sector' => 'Restaurant'],
    'ecommerce'   => ['template' => 'ecom-1', 'title' => 'Fashion Forward Store', 'sector' => 'E-Commerce'],
    'portfolio'   => ['template' => 'port-1', 'title' => 'Creative Agency Pro', 'sector' => 'Portfolio & Agency'],
];

$matched = $sectorMap[$businessSector] ?? $sectorMap['portfolio'];

// Pricing tier selection
if (strpos($budget, '5,000') !== false || stripos($budget, 'starter') !== false) {
    $pricing = [
        'tierName' => 'Starter Growth Launch',
        'priceInr' => '₹5,000',
        'priceUsd' => '$55',
        'deliveryTime' => '48 Hours',
        'features' => [
            'Conversion-Focused Single-Page Design',
            'Direct WhatsApp Click-to-Chat Integration',
            'Mobile & Tablet Ultra-Responsive Layout',
            'Google Local Maps & JSON-LD SEO Schema',
            '1 Month Security & Maintenance Support'
        ],
        'recommendedReason' => 'Best for immediate online visibility with zero technical friction.'
    ];
} elseif (strpos($budget, '9,999') !== false || stripos($budget, 'growth') !== false) {
    $pricing = [
        'tierName' => 'Advanced Architecture Engine',
        'priceInr' => '₹9,999',
        'priceUsd' => '$110',
        'deliveryTime' => '5-7 Days',
        'features' => [
            'Up to 5 Tailored Next.js Pages',
            'Smooth GSAP & Liquid Micro-Animations',
            'Dynamic Lead Management / Contact CRM',
            'Full Local GEO Keyword Optimization',
            '3 Months Priority Care & Google Analytics 4'
        ],
        'recommendedReason' => 'Best for competitive positioning, authority, and multi-service presentation.'
    ];
} else {
    $pricing = [
        'tierName' => 'Commerce & Custom WebApp Hub',
        'priceInr' => '₹12,999',
        'priceUsd' => '$149',
        'deliveryTime' => '7-10 Days',
        'features' => [
            'End-to-End Product / Appointment Engine',
            'Razorpay / UPI / Card Instant Payment Flow',
            'Interactive Customer Booking / Dashboard',
            'Full GEO & AI Engine (LLMs.txt & Rich Schema)',
            '6 Months Dedicated Support + Performance Guarantee'
        ],
        'recommendedReason' => 'Best for automated transactions, appointments, and multi-channel scaling.'
    ];
}

$cleanSector = ucwords(str_replace('-', ' ', $businessSector));

$response = [
    'id' => 'rec_' . time() . '_' . substr(md5(uniqid()), 0, 5),
    'createdAt' => gmdate('c'),
    'businessProfile' => [
        'name' => $businessName,
        'sector' => $businessSector,
        'city' => $city,
        'tagline' => "Premier $cleanSector solutions in $city crafted for rapid growth.",
        'targetAudience' => "Customers and clients seeking high-quality $cleanSector in $city.",
        'uniqueSellingProposition' => "Sub-second website speed, modern 3D design aesthetics, and direct WhatsApp / UPI checkout.",
        'brandTone' => "Modern, Trustworthy, High-Performance"
    ],
    'primaryTemplate' => [
        'id' => $matched['template'],
        'title' => $matched['title'],
        'sector' => $matched['sector'],
        'description' => "Specially tailored for $cleanSector with ultra-fast loading and proven lead conversion.",
        'previewUrl' => "/previews/{$matched['template']}.html",
        'matchScore' => 98,
        'matchedReasons' => [
            "Tailored architecture for $cleanSector with high visual engagement",
            "Pre-optimized for $primaryGoal",
            "Tested responsive performance across all mobile devices"
        ],
        'features' => ["Online Inquiries", "Mobile First", "SEO Optimized", "Fast Loading"]
    ],
    'seoStrategy' => [
        'primaryKeywords' => [
            "$businessName $city",
            "Best $cleanSector in $city",
            "Top rated $cleanSector services $city",
            "Affordable $cleanSector solutions $city"
        ],
        'localKeywords' => [
            "$cleanSector near me in $city",
            "$businessName contact number $city",
            "Verified $cleanSector in $city"
        ],
        'geoSearchQuestions' => [
            "Which is the best $cleanSector in $city?",
            "How to book services at $businessName in $city?",
            "What are the rates for $cleanSector in $city?"
        ],
        'metaTitle' => "$businessName | Premier $cleanSector in $city",
        'metaDescription' => "Discover $businessName, the premier $cleanSector destination in $city. Instant booking, transparent pricing, and 5-star customer experience."
    ],
    'pricingSuggestion' => $pricing
];

echo json_encode($response);

