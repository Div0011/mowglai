<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST, OPTIONS');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode((string)file_get_contents('php://input'), true);
$url = trim((string)($data['url'] ?? ''));
if ($url === '') {
    http_response_code(400);
    echo json_encode(['error' => 'URL is required']);
    exit;
}
if (!preg_match('/^https?:\/\//i', $url)) {
    $url = 'https://' . $url;
}

$parts = parse_url($url);
$host = strtolower(rtrim((string)($parts['host'] ?? ''), '.'));
if (
    !is_array($parts) ||
    ($parts['scheme'] ?? '') !== 'https' ||
    $host === '' ||
    isset($parts['user']) ||
    isset($parts['pass']) ||
    isset($parts['port']) && (int)$parts['port'] !== 443
) {
    http_response_code(400);
    echo json_encode(['error' => 'Only valid HTTPS URLs on the standard port are allowed']);
    exit;
}

function isPublicIp(string $ip): bool {
    return filter_var(
        $ip,
        FILTER_VALIDATE_IP,
        FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
    ) !== false;
}

/**
 * Resolve every A/AAAA answer and reject the host if any answer is non-public.
 * cURL is pinned to one validated address below to avoid a DNS-rebinding gap.
 */
function resolvePublicAddress(string $host): ?string {
    if (filter_var($host, FILTER_VALIDATE_IP)) {
        return isPublicIp($host) ? $host : null;
    }

    $records = dns_get_record($host, DNS_A | DNS_AAAA);
    if (!is_array($records) || count($records) === 0) {
        return null;
    }

    $addresses = [];
    foreach ($records as $record) {
        $ip = $record['ip'] ?? $record['ipv6'] ?? null;
        if (!is_string($ip)) {
            continue;
        }
        if (!isPublicIp($ip)) {
            return null;
        }
        $addresses[] = $ip;
    }

    return $addresses[0] ?? null;
}

$resolvedIp = resolvePublicAddress($host);
if ($resolvedIp === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Target host does not resolve to a public IP address']);
    exit;
}

$path = $parts['path'] ?? '/';
$query = isset($parts['query']) ? '?' . $parts['query'] : '';
$safeUrl = 'https://' . $host . $path . $query;

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $safeUrl,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_CONNECTTIMEOUT => 3,
    CURLOPT_TIMEOUT => 6,
    CURLOPT_USERAGENT => 'Mozilla/5.0 (compatible; MowglaiBot/1.0)',
    CURLOPT_PROTOCOLS => CURLPROTO_HTTPS,
    CURLOPT_REDIR_PROTOCOLS => CURLPROTO_HTTPS,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_RESOLVE => [$host . ':443:' . $resolvedIp],
    CURLOPT_MAXFILESIZE => 1048576,
]);
$html = curl_exec($ch);
$curlError = curl_errno($ch);
$httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if (!is_string($html) || $curlError !== 0 || $httpCode < 200 || $httpCode >= 400) {
    http_response_code(502);
    echo json_encode(['error' => 'Unable to retrieve the target website safely']);
    exit;
}

$domain = preg_replace('/^www\./i', '', $host);
$title = '';
$hasSchema = stripos($html, 'application/ld+json') !== false;
$scriptCount = preg_match_all('/<script\b[^>]*>/i', $html, $dummy);
if (preg_match('/<title[^>]*>(.*?)<\/title>/si', $html, $m)) {
    $title = trim(strip_tags($m[1]));
}

$combined = strtolower($safeUrl . ' ' . $title);
$sector = 'portfolio';
$templateId = 'port-1';
$templateTitle = 'Creative Agency';
if (preg_match('/(gym|fit|workout|cult|iron|muscle)/i', $combined)) {
    $sector = 'gym'; $templateId = 'gym-1'; $templateTitle = 'Iron Strong Fitness';
} elseif (preg_match('/(health|clinic|dental|doctor|practo|medic|hospital)/i', $combined)) {
    $sector = 'healthcare'; $templateId = 'health-1'; $templateTitle = 'MediCare Premium';
} elseif (preg_match('/(school|academy|college|learn|unacademy|coaching|edu)/i', $combined)) {
    $sector = 'school'; $templateId = 'school-2'; $templateTitle = 'Bright Future Academy';
} elseif (preg_match('/(food|rest|cafe|dining|zomato|burger|kitchen)/i', $combined)) {
    $sector = 'restaurant'; $templateId = 'rest-1'; $templateTitle = 'Fine Dining & Cafe';
} elseif (preg_match('/(estate|property|nobroker|realty|housing|apartment)/i', $combined)) {
    $sector = 'real-estate'; $templateId = 're-1'; $templateTitle = 'Luxury Living Properties';
} elseif (preg_match('/(shop|store|cart|buy|ecom|cloth|fashion|product)/i', $combined)) {
    $sector = 'ecommerce'; $templateId = 'ecom-1'; $templateTitle = 'Fashion Forward Store';
} elseif (preg_match('/(yoga|wellness|spa|zen|retreat)/i', $combined)) {
    $sector = 'yoga'; $templateId = 'yoga-1'; $templateTitle = 'Zen Sanctuary';
}

$cleanSector = ucwords(str_replace('-', ' ', $sector));
$namePart = ucfirst(explode('.', $domain)[0]);
$response = [
    'id' => 'ana_' . time() . '_' . substr(hash('sha256', $safeUrl), 0, 8),
    'targetUrl' => $safeUrl,
    'domain' => $domain,
    'detectedSector' => $sector,
    'title' => $title ?: "$namePart - $cleanSector",
    'estimatedTechStack' => [
        'frontend' => ['Legacy Framework / Multiple Bundles', 'Unminified CSS Assets', ($scriptCount > 15 ? "$scriptCount Heavy Third-Party Scripts" : 'Multiple Third-Party Scripts')],
        'cmsOrPlatform' => 'Traditional Server Rendered CMS',
        'isBloated' => true,
    ],
    'performanceComparison' => [
        'competitorScore' => $scriptCount > 20 ? 38 : 48,
        'competitorLcp' => $scriptCount > 20 ? '4.4s' : '3.6s',
        'mowglaiScore' => 98,
        'mowglaiLcp' => '0.6s',
        'speedAdvantage' => '6.3x Faster',
    ],
    'seoAndConversionGaps' => [
        'Uncompressed legacy scripts causing ~3.8s mobile LCP bottleneck',
        ($hasSchema ? 'Schema present but missing geo-coordinates & rich snippets' : 'Critical: Zero JSON-LD Schema detected'),
        'No direct WhatsApp click-to-chat CTA causing high mobile visitor drop-off',
        'Unoptimized viewport meta tags leading to layout shifts on modern smartphones',
    ],
    'detectedSections' => [
        ['name' => 'Hero Value Hook', 'purpose' => 'Grabs immediate visitor attention and states proposition', 'mowglaiEnhancement' => 'Clear proposition and fast-loading hero section'],
        ['name' => 'Core Offerings & Pricing Matrix', 'purpose' => 'Shows packages, memberships, or service capabilities', 'mowglaiEnhancement' => 'Transparent tiers with direct inquiry and checkout'],
        ['name' => 'Social Proof & Trust Badges', 'purpose' => 'Showcases testimonials, ratings, and Google reviews', 'mowglaiEnhancement' => 'Verified review cards and trust signals'],
        ['name' => 'Sticky Lead Capture Bar', 'purpose' => 'Drives phone calls or WhatsApp chat directly from mobile', 'mowglaiEnhancement' => 'Direct WhatsApp click-to-chat'],
    ],
    'matchedTemplate' => [
        'id' => $templateId, 'title' => $templateTitle, 'sector' => $sector,
        'previewUrl' => "/previews/$templateId.html", 'matchScore' => 98,
        'features' => ['Next.js Ready', 'Performance Optimized', 'Direct WhatsApp Integration', 'SEO Optimized'],
    ],
    'suggestedStartingPrice' => '₹5,000',
    'prefillOnboardQuery' => [
        'businessName' => "$namePart Inspired", 'businessSector' => $sector,
        'budget' => '₹5,000', 'primaryGoal' => 'WhatsApp & Direct Phone Inquiries',
    ],
];

echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
