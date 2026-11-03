<?php
declare(strict_types=1);

header('Content-Type: text/html; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
?>
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mowglai Cloud API Gateway | System Health & Endpoints</title>
  <link rel="icon" href="/logo1.png" type="image/png" />
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
            surfaceCard: '#07150f',
            brandBorder: 'rgba(200, 241, 105, 0.22)',
          }
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: radial-gradient(ellipse 130% 100% at 50% -15%, #0d2e24 0%, #061610 40%, #030906 100%);
      min-height: 100vh;
      color: #f4f7f5;
    }
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="p-4 sm:p-8 flex flex-col justify-between">
  <!-- Glowing Background Aurora -->
  <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#c8f169]/15 via-[#10b981]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10"></div>

  <!-- Header -->
  <header class="max-w-6xl w-full mx-auto flex items-center justify-between py-4 border-b border-brandBorder/50 relative z-10">
    <a href="https://mowglai.com" class="flex items-center gap-3">
      <img src="/logo1.png" alt="Mowglai Logo" class="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(200,241,105,0.4)]" />
      <div>
        <div class="flex items-center gap-2">
          <span class="font-display font-extrabold text-xl tracking-tight text-white">MOWGLAI</span>
          <span class="px-1.5 py-0.5 rounded bg-brand/15 text-brand text-[9.5px] font-mono font-bold border border-brand/30">API GATEWAY</span>
        </div>
        <span class="text-[10px] block font-mono text-gray-400">api.mowglai.com • Edge & Microservices</span>
      </div>
    </a>
    <div class="flex items-center gap-3">
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Operational (PHP 8.4)
      </span>
      <a href="mailto:tech@mowglai.com" class="text-xs text-brand hover:underline font-mono">
        tech@mowglai.com
      </a>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-6xl w-full mx-auto my-10 relative z-10 space-y-8">
    <div class="space-y-2 text-center max-w-xl mx-auto">
      <h1 class="text-3xl sm:text-4xl font-extrabold font-display text-white">
        Mowglai <span class="text-brand">Microservices & API</span>
      </h1>
      <p class="text-gray-300 text-xs sm:text-sm">
        Production endpoints powering real-time audits, AI onboarding, payments, and client lead management with universal CORS enablement.
      </p>
    </div>

    <!-- Endpoints List -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Endpoint 1 -->
      <div class="bg-surfaceCard/90 border border-brandBorder rounded-2xl p-5 space-y-3 backdrop-blur-xl">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-mono font-bold">POST</span>
          <span class="text-xs font-mono text-gray-400">/api/ai-analyze.php</span>
        </div>
        <h3 class="font-display font-bold text-white text-base">In-House Competitor & URL Analyzer</h3>
        <p class="text-xs text-gray-300 leading-relaxed">
          Zero-dependency native DOM & tech-stack crawler. Analyzes site speed, tags, and generates upgrade blueprints.
        </p>
        <div class="pt-2">
          <button onclick="testEndpoint('/api/ai-analyze.php', { url: 'https://mowglai.com' })" class="px-3 py-1.5 rounded-lg bg-brand/10 hover:bg-brand/20 border border-brand/30 text-brand text-xs font-mono font-bold transition">
            Test Sample Request &rarr;
          </button>
        </div>
      </div>

      <!-- Endpoint 2 -->
      <div class="bg-surfaceCard/90 border border-brandBorder rounded-2xl p-5 space-y-3 backdrop-blur-xl">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-mono font-bold">POST</span>
          <span class="text-xs font-mono text-gray-400">/api/ai-onboard.php</span>
        </div>
        <h3 class="font-display font-bold text-white text-base">Bespoke Blueprint & HTML Synthesizer</h3>
        <p class="text-xs text-gray-300 leading-relaxed">
          Transforms onboarding parameters into actionable specs, JSON-LD schemas, and production-ready HTML code.
        </p>
        <div class="pt-2">
          <button onclick="testEndpoint('/api/ai-onboard.php', { businessName: 'Mowglai Studio', businessSector: 'portfolio', city: 'NCR' })" class="px-3 py-1.5 rounded-lg bg-brand/10 hover:bg-brand/20 border border-brand/30 text-brand text-xs font-mono font-bold transition">
            Test Sample Request &rarr;
          </button>
        </div>
      </div>

      <!-- Endpoint 3 -->
      <div class="bg-surfaceCard/90 border border-brandBorder rounded-2xl p-5 space-y-3 backdrop-blur-xl">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-xs font-mono font-bold">POST</span>
          <span class="text-xs font-mono text-gray-400">/api/audit.php</span>
        </div>
        <h3 class="font-display font-bold text-white text-base">Deep SEO & Core Web Vitals Audit</h3>
        <p class="text-xs text-gray-300 leading-relaxed">
          Comprehensive scoring across Visibility, Performance, Security (HSTS/X-Content), and Content volume.
        </p>
        <div class="pt-2">
          <button onclick="testEndpoint('/api/audit.php', { url: 'https://mowglai.com' })" class="px-3 py-1.5 rounded-lg bg-brand/10 hover:bg-brand/20 border border-brand/30 text-brand text-xs font-mono font-bold transition">
            Test Sample Request &rarr;
          </button>
        </div>
      </div>

      <!-- Endpoint 4 -->
      <div class="bg-surfaceCard/90 border border-brandBorder rounded-2xl p-5 space-y-3 backdrop-blur-xl">
        <div class="flex items-center justify-between">
          <span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">GET</span>
          <span class="text-xs font-mono text-gray-400">/api/get-purchases.php</span>
        </div>
        <h3 class="font-display font-bold text-white text-base">Client Project Status Lookup</h3>
        <p class="text-xs text-gray-300 leading-relaxed">
          Secure customer milestone and transaction database query endpoint.
        </p>
        <div class="pt-2">
          <button onclick="testGet('/api/get-purchases.php?email=test@mowglai.com')" class="px-3 py-1.5 rounded-lg bg-brand/10 hover:bg-brand/20 border border-brand/30 text-brand text-xs font-mono font-bold transition">
            Test Sample Query &rarr;
          </button>
        </div>
      </div>
    </div>

    <!-- Live JSON Response Viewer Modal/Box -->
    <div id="testOutputBox" class="hidden bg-black/80 border border-brandBorder rounded-2xl p-5 space-y-2">
      <div class="flex items-center justify-between border-b border-brandBorder/40 pb-2">
        <span class="text-xs font-mono text-brand font-bold">Live API Output (JSON):</span>
        <button onclick="document.getElementById('testOutputBox').classList.add('hidden')" class="text-xs text-gray-400 hover:text-white">Close</button>
      </div>
      <pre id="testJsonOutput" class="text-xs font-mono text-emerald-400 overflow-x-auto max-h-64 p-2"></pre>
    </div>
  </main>

  <footer class="max-w-6xl w-full mx-auto py-6 border-t border-brandBorder/30 text-center text-xs text-gray-400 space-y-1 relative z-10">
    <p>&copy; 2026 Mowglai Digital Agency. High-Performance API Infrastructure.</p>
    <p>Contact: <a href="mailto:tech@mowglai.com" class="text-brand hover:underline font-mono">tech@mowglai.com</a></p>
  </footer>

  <script>
    async function testEndpoint(endpoint, payload) {
      const box = document.getElementById('testOutputBox');
      const out = document.getElementById('testJsonOutput');
      box.classList.remove('hidden');
      out.innerText = "Executing request to " + endpoint + "...";
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        out.innerText = JSON.stringify(data, null, 2);
      } catch (err) {
        out.innerText = "Error: " + err.message;
      }
    }
    async function testGet(endpoint) {
      const box = document.getElementById('testOutputBox');
      const out = document.getElementById('testJsonOutput');
      box.classList.remove('hidden');
      out.innerText = "Executing GET request to " + endpoint + "...";
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        out.innerText = JSON.stringify(data, null, 2);
      } catch (err) {
        out.innerText = "Error: " + err.message;
      }
    }
  </script>
</body>
</html>

