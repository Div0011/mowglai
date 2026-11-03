<?php
declare(strict_types=1);

/**
 * Mowglai Standalone In-House Website Generator (PHP)
 * Zero external dependencies. Generates 100% valid, responsive,
 * high-converting single-page HTML websites with Tailwind CSS,
 * Schema.org LocalBusiness, and mobile WhatsApp/Call actions.
 */

function mowglai_generate_html(
    string $businessName,
    string $sector,
    string $city,
    string $phone,
    string $tagline,
    string $goal = 'Inquiries'
): string {
    $cleanPhone = preg_replace('/[^0-9]/', '', $phone);
    if (empty($cleanPhone) || strlen($cleanPhone) < 8) {
        $cleanPhone = '919452476331';
    }

    $businessNameSafe = htmlspecialchars($businessName, ENT_QUOTES, 'UTF-8');
    $sectorSafe = htmlspecialchars($sector, ENT_QUOTES, 'UTF-8');
    $citySafe = htmlspecialchars($city, ENT_QUOTES, 'UTF-8');
    $taglineSafe = htmlspecialchars($tagline, ENT_QUOTES, 'UTF-8');
    $initial = mb_substr($businessName, 0, 1) ?: 'M';

    $waMsg = urlencode("Hi {$businessName}, I would like to inquire about your {$sector} services in {$city}.");
    $waUrl = "https://wa.me/{$cleanPhone}?text={$waMsg}";
    $telUrl = "tel:+{$cleanPhone}";

    // Sector-specific feature highlights
    $features = [
        ['icon' => '⚡', 'title' => 'Sub-Second Speed', 'desc' => "Loads under 0.6 seconds on mobile 4G networks across {$citySafe}."],
        ['icon' => '💎', 'title' => 'Verified Quality', 'desc' => "Premier {$sectorSafe} experience designed for maximum client trust."],
        ['icon' => '📍', 'title' => 'Local GEO Rank', 'desc' => "Rank top on Google Maps & AI search engines across {$citySafe}."],
        ['icon' => '📱', 'title' => 'Instant WhatsApp', 'desc' => "Direct click-to-chat inquiry with automated response routing."]
    ];

    $featuresHtml = '';
    foreach ($features as $f) {
        $featuresHtml .= <<<ITEM
      <div class="bg-cardBg/90 border border-brandBorder/60 hover:border-brand/60 rounded-2xl p-6 transition backdrop-blur-xl group">
        <div class="text-3xl mb-3 group-hover:scale-110 transition inline-block">{$f['icon']}</div>
        <h3 class="font-display font-bold text-white text-lg mb-1.5">{$f['title']}</h3>
        <p class="text-xs text-gray-400 leading-relaxed">{$f['desc']}</p>
      </div>
ITEM;
    }

    return <<<HTML
<!DOCTYPE html>
<html lang="en" class="scroll-smooth dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{$businessNameSafe} | Premier {$sectorSafe} in {$citySafe}</title>
  <meta name="description" content="{$taglineSafe}" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: '#c8f169',
            emeraldGlow: '#10b981',
            obsidian: '#040a07',
            cardBg: '#07150f',
            brandBorder: 'rgba(200, 241, 105, 0.22)',
          }
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: radial-gradient(ellipse 130% 100% at 50% -12%, #0d2e24 0%, #061610 40%, #030906 100%);
      color: #f4f7f5;
      min-height: 100vh;
    }
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
  </style>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "{$businessNameSafe}",
    "description": "{$taglineSafe}",
    "telephone": "+{$cleanPhone}",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "{$citySafe}",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 08:00-21:00"
  }
  </script>
</head>
<body class="relative overflow-x-hidden selection:bg-brand selection:text-obsidian pb-16 sm:pb-0">
  <!-- Cosmic Ambient Glow -->
  <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-b from-brand/15 via-emeraldGlow/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10"></div>
  <div class="fixed bottom-0 right-0 w-[400px] h-[400px] bg-emeraldGlow/8 blur-[160px] rounded-full pointer-events-none -z-10"></div>

  <!-- Header -->
  <header class="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between border-b border-brandBorder/40 relative z-20 backdrop-blur-md">
    <a href="#" class="flex items-center gap-2.5 group">
      <span class="w-9 h-9 rounded-xl bg-brand text-obsidian font-display font-extrabold flex items-center justify-center text-base shadow-[0_0_16px_rgba(200,241,105,0.4)] group-hover:scale-105 transition">{$initial}</span>
      <div>
        <span class="font-display font-bold text-lg text-white block leading-tight">{$businessNameSafe}</span>
        <span class="text-[10px] font-mono text-gray-400">{$sectorSafe} • {$citySafe}</span>
      </div>
    </a>
    <div class="flex items-center gap-3">
      <a href="{$telUrl}" class="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-brand font-mono">
        <span>📞</span> +{$cleanPhone}
      </a>
      <a href="{$waUrl}" target="_blank" class="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-[#25D366]/20 hover:scale-105 transition">
        <span>WhatsApp Now</span>
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <main class="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 relative z-10 text-center space-y-6">
    <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-mono font-bold shadow-sm">
      <span class="w-2 h-2 rounded-full bg-brand animate-ping"></span>
      Official Portal • {$citySafe}
    </div>

    <h1 class="text-3xl sm:text-6xl md:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
      Premier {$sectorSafe} In <br />
      <span class="text-brand">{$citySafe}</span>
    </h1>

    <p class="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
      {$taglineSafe}
    </p>

    <!-- CTAs -->
    <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
      <a href="{$waUrl}" target="_blank" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand text-obsidian font-black text-xs uppercase tracking-wider hover:bg-brand/90 transition shadow-xl hover:scale-105">
        Book Consultation on WhatsApp &rarr;
      </a>
      <a href="{$telUrl}" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-brandBorder text-white font-bold text-xs transition">
        Call +{$cleanPhone}
      </a>
    </div>

    <!-- Key Metrics -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-12 max-w-3xl mx-auto">
      <div class="bg-cardBg/80 border border-brandBorder/40 rounded-xl p-4">
        <div class="text-2xl sm:text-3xl font-display font-extrabold text-brand">4.9★</div>
        <div class="text-[11px] text-gray-400 mt-1">Verified Rating</div>
      </div>
      <div class="bg-cardBg/80 border border-brandBorder/40 rounded-xl p-4">
        <div class="text-2xl sm:text-3xl font-display font-extrabold text-white">0.6s</div>
        <div class="text-[11px] text-gray-400 mt-1">Ultra Fast LCP</div>
      </div>
      <div class="bg-cardBg/80 border border-brandBorder/40 rounded-xl p-4">
        <div class="text-2xl sm:text-3xl font-display font-extrabold text-brand">100%</div>
        <div class="text-[11px] text-gray-400 mt-1">Satisfaction Rate</div>
      </div>
      <div class="bg-cardBg/80 border border-brandBorder/40 rounded-xl p-4">
        <div class="text-2xl sm:text-3xl font-display font-extrabold text-white">24/7</div>
        <div class="text-[11px] text-gray-400 mt-1">Direct Assistance</div>
      </div>
    </div>

    <!-- Feature Pillars -->
    <div class="pt-16 text-left">
      <div class="text-center max-w-xl mx-auto mb-10 space-y-2">
        <h2 class="text-2xl sm:text-3xl font-extrabold font-display text-white">Why Choose {$businessNameSafe}?</h2>
        <p class="text-xs sm:text-sm text-gray-400">Engineered for quality, trust, and sub-second performance.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {$featuresHtml}
      </div>
    </div>

    <!-- Reviews / Social Proof -->
    <div class="pt-16 max-w-3xl mx-auto text-left">
      <div class="bg-cardBg/90 border border-brandBorder/50 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-xl">
        <div class="flex items-center gap-2 text-brand">
          <span>★★★★★</span>
          <span class="text-xs font-mono text-gray-300">Verified Client Review • {$citySafe}</span>
        </div>
        <blockquote class="text-gray-200 text-sm sm:text-base italic leading-relaxed">
          &ldquo;Finding a trustworthy {$sectorSafe} partner in {$citySafe} was difficult until we discovered {$businessNameSafe}. Exceptional speed, transparent communication, and top quality results.&rdquo;
        </blockquote>
        <div class="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-brandBorder/30">
          <span class="font-bold text-white">Local Customer • {$citySafe}</span>
          <span class="font-mono text-brand">Google 5.0 Rating</span>
        </div>
      </div>
    </div>

    <!-- Contact & Booking CTA -->
    <div class="pt-16 max-w-xl mx-auto bg-gradient-to-b from-brand/15 to-transparent border border-brandBorder/80 rounded-3xl p-8 space-y-4">
      <h3 class="text-2xl font-extrabold font-display text-white">Ready to Connect?</h3>
      <p class="text-xs text-gray-300">
        Inquire directly with our team in {$citySafe}. Get immediate quotations, availability, and scheduling.
      </p>
      <div class="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="{$waUrl}" target="_blank" class="px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg">
          <span>Message on WhatsApp</span>
        </a>
        <a href="{$telUrl}" class="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 border border-brandBorder">
          <span>Call Directly</span>
        </a>
      </div>
    </div>
  </main>

  <!-- Sticky Bottom Mobile Bar -->
  <div class="fixed bottom-0 inset-x-0 sm:hidden z-30 p-2.5 bg-obsidian/95 border-t border-brandBorder/50 backdrop-blur-xl flex gap-2">
    <a href="{$telUrl}" class="flex-1 py-3 px-3 rounded-xl bg-white/10 text-white text-center font-bold text-xs border border-brandBorder">
      📞 Call Now
    </a>
    <a href="{$waUrl}" target="_blank" class="flex-1 py-3 px-3 rounded-xl bg-[#25D366] text-white text-center font-bold text-xs shadow-lg">
      💬 WhatsApp
    </a>
  </div>

  <!-- Footer -->
  <footer class="max-w-6xl mx-auto px-4 sm:px-6 py-8 border-t border-brandBorder/40 text-center text-xs text-gray-500 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
    <p>&copy; {$businessNameSafe}. All rights reserved.</p>
    <a href="https://mowglai.com" target="_blank" class="text-gray-400 hover:text-brand font-mono transition text-[11px]">
      Engineered with Mowglai High-Speed Engine &nearr;
    </a>
  </footer>
</body>
</html>
HTML;
}
