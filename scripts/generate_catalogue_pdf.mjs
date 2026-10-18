import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const ARTIFACT_DIR = '/Users/divyansh/.gemini/antigravity-ide/brain/bd5f27ff-b4a2-4e82-bc7d-476dd01fcd48';

function getBase64Image(filePath) {
    if (!fs.existsSync(filePath)) return '';
    const ext = path.extname(filePath).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg';
    const data = fs.readFileSync(filePath);
    return `data:${mime};base64,${data.toString('base64')}`;
}

const moreInteriorImg = getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/more-interior.webp')) || getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/more-interior.png'));
const clarityCartelImg = getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/clarity-cartel.webp')) || getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/clarity-cartel.png'));
const ielevateImg = getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/ielevate.webp')) || getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/ielevate.png'));
const jayhawkImg = getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/jayhawk.webp')) || getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/jayhawk.png'));
const trueRatingsImg = getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/true-ratings.webp')) || getBase64Image(path.join(PUBLIC_DIR, 'assets/projects/true-ratings.png'));
const logoImg = getBase64Image(path.join(PUBLIC_DIR, 'mowglai-logo-new.jpg')) || getBase64Image(path.join(PUBLIC_DIR, 'logo1.png'));

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Mowglai - Official Business Catalogue 2026</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  @page {
    size: A4 portrait;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --bg-dark: #030704;
    --bg-card: rgba(13, 26, 18, 0.75);
    --gold: #e6b93d;
    --gold-dim: #c5a059;
    --emerald: #10b981;
    --emerald-dim: #059669;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --text-sub: #cbd5e1;
    --border: rgba(230, 185, 61, 0.22);
    --border-subtle: rgba(255, 255, 255, 0.08);
  }
  body {
    background: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Inter', -apple-system, sans-serif;
    line-height: 1.5;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  h1, h2, h3, h4, .display-font {
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.02em;
  }
  .page {
    width: 210mm;
    height: 297mm;
    position: relative;
    padding: 18mm 18mm 16mm 18mm;
    background: linear-gradient(165deg, #020503 0%, #08140c 38%, #141c10 70%, #030603 100%);
    overflow: hidden;
    page-break-after: always;
    break-after: page;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .page::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: radial-gradient(rgba(230, 185, 61, 0.08) 1px, transparent 1px);
    background-size: 24px 24px;
    pointer-events: none;
    z-index: 1;
  }
  .page-content {
    position: relative;
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .page-footer {
    position: relative;
    z-index: 2;
    border-top: 1px solid var(--border-subtle);
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8.5pt;
    color: var(--text-muted);
    font-family: 'Outfit', sans-serif;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .gold-text {
    color: var(--gold);
  }
  .emerald-text {
    color: var(--emerald);
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 8pt;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'Outfit', sans-serif;
    border: 1px solid var(--border);
    background: rgba(230, 185, 61, 0.08);
    color: var(--gold);
    width: fit-content;
  }
  .badge-emerald {
    border-color: rgba(16, 185, 129, 0.3);
    background: rgba(16, 185, 129, 0.08);
    color: var(--emerald);
  }
  .corner-box {
    position: relative;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 16px;
  }
  .corner-box::before {
    content: '';
    position: absolute;
    top: -1px; left: -1px;
    width: 12px; height: 12px;
    border-top: 2px solid var(--gold);
    border-left: 2px solid var(--gold);
    border-top-left-radius: 12px;
  }
  .corner-box::after {
    content: '';
    position: absolute;
    bottom: -1px; right: -1px;
    width: 12px; height: 12px;
    border-bottom: 2px solid var(--gold);
    border-right: 2px solid var(--gold);
    border-bottom-right-radius: 12px;
  }

  /* COVER PAGE */
  .cover-page {
    justify-content: space-between;
    padding: 24mm 22mm 20mm 22mm;
    background: radial-gradient(circle at 80% 20%, rgba(230, 185, 61, 0.18) 0%, transparent 50%),
                radial-gradient(circle at 15% 85%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                linear-gradient(170deg, #020503 0%, #07130b 45%, #181d0f 75%, #030603 100%);
  }
  .cover-hero-title {
    font-size: 50pt;
    font-weight: 900;
    line-height: 0.95;
    text-transform: uppercase;
    margin: 18px 0 14px 0;
    letter-spacing: -0.03em;
  }
  .cover-hero-subtitle {
    font-size: 13pt;
    color: var(--text-sub);
    max-width: 580px;
    line-height: 1.5;
    font-weight: 300;
  }
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 30px;
  }
  .stat-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-subtle);
    border-radius: 10px;
    padding: 14px;
    text-align: center;
  }
  .stat-number {
    font-size: 22pt;
    font-weight: 900;
    font-family: 'Outfit', sans-serif;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 4px;
  }
  .stat-label {
    font-size: 7.5pt;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
  }

  /* SECTION HEADERS */
  .section-tag {
    font-size: 8.5pt;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  }
  .section-tag::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1.5px;
    background: var(--gold);
  }
  .section-title {
    font-size: 24pt;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 14px;
  }
  .section-desc {
    font-size: 9.5pt;
    color: var(--text-sub);
    line-height: 1.5;
    margin-bottom: 16px;
  }

  /* SERVICES GRID */
  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .service-card {
    background: rgba(13, 26, 18, 0.55);
    border: 1px solid var(--border-subtle);
    border-radius: 10px;
    padding: 12px 14px;
    position: relative;
  }
  .service-num {
    font-size: 16pt;
    font-weight: 900;
    color: rgba(230, 185, 61, 0.3);
    font-family: 'Outfit', sans-serif;
    line-height: 1;
    margin-bottom: 4px;
  }
  .service-name {
    font-size: 10.5pt;
    font-weight: 800;
    text-transform: uppercase;
    font-family: 'Outfit', sans-serif;
    color: var(--text-main);
    margin-bottom: 4px;
  }
  .service-desc {
    font-size: 8pt;
    color: var(--text-muted);
    line-height: 1.4;
  }
  .service-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
  }
  .service-tag {
    font-size: 6.5pt;
    padding: 2px 6px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.05);
    color: var(--gold-dim);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* CASE STUDIES */
  .featured-case {
    background: rgba(13, 26, 18, 0.7);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 16px;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 16px;
    margin-bottom: 14px;
    align-items: center;
  }
  .featured-img-wrap {
    width: 100%;
    height: 195px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #000;
  }
  .featured-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mini-projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .mini-card {
    background: rgba(13, 26, 18, 0.55);
    border: 1px solid var(--border-subtle);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .mini-img-thumb {
    width: 80px;
    height: 60px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #000;
  }
  .mini-img-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* OPERATING SYSTEM STEPS */
  .steps-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .step-row {
    background: rgba(13, 26, 18, 0.55);
    border: 1px solid var(--border-subtle);
    border-radius: 10px;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: 60px 1.2fr 1.6fr;
    gap: 14px;
    align-items: center;
  }
  .step-number {
    font-size: 20pt;
    font-weight: 900;
    font-family: 'Outfit', sans-serif;
    color: var(--gold);
    line-height: 1;
  }
  .step-title {
    font-size: 11pt;
    font-weight: 800;
    text-transform: uppercase;
    font-family: 'Outfit', sans-serif;
    color: var(--text-main);
  }
  .step-sub {
    font-size: 8pt;
    color: var(--emerald);
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .step-desc {
    font-size: 8pt;
    color: var(--text-muted);
    line-height: 1.4;
  }

  /* TABLES */
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 8pt;
    margin-top: 8px;
  }
  .custom-table th {
    background: rgba(230, 185, 61, 0.12);
    color: var(--gold);
    font-family: 'Outfit', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: left;
    padding: 8px 10px;
    border: 1px solid var(--border-subtle);
    font-weight: 700;
  }
  .custom-table td {
    padding: 8px 10px;
    border: 1px solid var(--border-subtle);
    color: var(--text-sub);
    background: rgba(13, 26, 18, 0.4);
  }

  /* COMMERCIAL TIERS */
  .tier-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .tier-card {
    background: rgba(13, 26, 18, 0.65);
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .tier-card.featured {
    border-color: var(--gold);
    background: rgba(230, 185, 61, 0.05);
  }
  .tier-name {
    font-size: 12pt;
    font-weight: 900;
    text-transform: uppercase;
    font-family: 'Outfit', sans-serif;
    color: var(--gold);
    margin-bottom: 4px;
  }
  .tier-desc {
    font-size: 8pt;
    color: var(--text-muted);
    margin-bottom: 12px;
    line-height: 1.4;
  }
  .tier-bullet {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    font-size: 7.5pt;
    color: var(--text-sub);
    margin-bottom: 6px;
  }
  .tier-bullet span {
    color: var(--emerald);
    font-weight: bold;
  }
</style>
</head>
<body>

  <!-- ==================== PAGE 1: COVER ==================== -->
  <div class="page cover-page">
    <div class="page-content" style="justify-content: space-between;">
      
      <!-- Top header -->
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="display: flex; align-items: center; gap: 12px;">
          ${logoImg ? `<img src="${logoImg}" style="width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--gold);" alt="Mowglai Logo">` : ''}
          <div>
            <h3 style="font-size: 14pt; font-weight: 900; text-transform: uppercase; letter-spacing: 0.15em; color: var(--gold); margin: 0;">MOWGLAI</h3>
            <p style="font-size: 7.5pt; text-transform: uppercase; letter-spacing: 0.25em; color: var(--text-muted); margin: 0;">DIGITAL AGENCY & VENTURE STUDIO</p>
          </div>
        </div>
        <div class="badge">2026 OFFICIAL CATALOGUE</div>
      </div>

      <!-- Hero Center -->
      <div style="margin-top: 30px; margin-bottom: 20px;">
        <div class="badge badge-emerald" style="margin-bottom: 14px;">HIGH-PERFORMANCE WEB & CREATIVE TECH</div>
        <h1 class="cover-hero-title">
          BUILT TO <span class="gold-text">PERFORM.</span><br>
          DESIGNED TO <span class="emerald-text">AMAZE.</span>
        </h1>
        <p class="cover-hero-subtitle">
          Where organic imagination meets high-framerate software engineering. The comprehensive business catalogue detailing our services, flagship client work, operating framework, and technical architecture.
        </p>

        <!-- Stats -->
        <div class="stat-grid">
          <div class="stat-item">
            <div class="stat-number">95+</div>
            <div class="stat-label">Lighthouse Score Target</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">&lt;1.2s</div>
            <div class="stat-label">LCP Load Benchmark</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">6+</div>
            <div class="stat-label">Flagship Custom Platforms</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">40+</div>
            <div class="stat-label">Production Blueprints</div>
          </div>
        </div>
      </div>

      <!-- Highlights Box -->
      <div class="corner-box" style="margin-top: 10px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <h4 style="font-size: 9.5pt; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; font-weight: 800;">Engineering Standard</h4>
            <p style="font-size: 8pt; color: var(--text-sub); line-height: 1.4;">
              Next.js 16 App Router, React 19, TypeScript strict mode, GSAP kinetic timelines, and GPU-accelerated WebGL 3D canvas spaces.
            </p>
          </div>
          <div>
            <h4 style="font-size: 9.5pt; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; font-weight: 800;">Global Reach & Headquarters</h4>
            <p style="font-size: 8pt; color: var(--text-sub); line-height: 1.4;">
              Headquartered in Noida, Uttar Pradesh, India. Architecting and supporting digital ventures across the USA, UK, Europe, UAE, and India.
            </p>
          </div>
        </div>
      </div>

    </div>

    <!-- Cover Footer -->
    <div class="page-footer">
      <span>MOWGLAI DIGITAL AGENCY • CAPABILITIES MANIFESTO</span>
      <span>WWW.MOWGLAI.COM</span>
      <span>CONFIDENTIAL & PROPRIETARY</span>
    </div>
  </div>

  <!-- ==================== PAGE 2: WHAT WE DO (CAPABILITIES) ==================== -->
  <div class="page">
    <div class="page-content">
      <div class="section-tag">SERVICES & ARCHITECTURE</div>
      <h2 class="section-title">THE WORK WE <span class="gold-text">DO</span></h2>
      <p class="section-desc">
        We bridge elite engineering rigor with world-class visual craft. We do not build bloated generic templates—we architect bespoke digital systems designed to drive measurable business ROI.
      </p>

      <div class="services-grid">
        
        <!-- 01 -->
        <div class="service-card">
          <div class="service-num">01</div>
          <div class="service-name">Bespoke Web Development</div>
          <p class="service-desc">
            Ultra-fast, modular web systems engineered on Next.js 16 App Router and React 19. Server Components by default for zero client JS bloat and sub-second TTFB.
          </p>
          <div class="service-tags">
            <span class="service-tag">Next.js 16</span>
            <span class="service-tag">React 19</span>
            <span class="service-tag">TypeScript</span>
            <span class="service-tag">Tailwind CSS</span>
          </div>
        </div>

        <!-- 02 -->
        <div class="service-card">
          <div class="service-num">02</div>
          <div class="service-name">SaaS Platforms & MVP Acceleration</div>
          <p class="service-desc">
            Turnkey 0-to-1 product engineering for startups. Clean MVC architectures, authenticated portals, subscription billing (Stripe/Razorpay), and real-time dashboards.
          </p>
          <div class="service-tags">
            <span class="service-tag">0-to-1 MVP</span>
            <span class="service-tag">Auth & RBAC</span>
            <span class="service-tag">Stripe / Webhooks</span>
            <span class="service-tag">PostgreSQL</span>
          </div>
        </div>

        <!-- 03 -->
        <div class="service-card">
          <div class="service-num">03</div>
          <div class="service-name">E-Commerce & Conversion Engines</div>
          <p class="service-desc">
            High-converting digital storefronts with instant filtering, zero-friction cart systems, localized currencies, payment gateway integrations, and order tracking.
          </p>
          <div class="service-tags">
            <span class="service-tag">Headless Store</span>
            <span class="service-tag">Instant Checkout</span>
            <span class="service-tag">Inventory API</span>
          </div>
        </div>

        <!-- 04 -->
        <div class="service-card">
          <div class="service-num">04</div>
          <div class="service-name">Search, GEO & AEO Architecture</div>
          <p class="service-desc">
            Positioning your brand on traditional search (Google 95+ Lighthouse, Schema.org) and Generative Engines (ChatGPT, Perplexity, Gemini, Claude citations).
          </p>
          <div class="service-tags">
            <span class="service-tag">Core Web Vitals</span>
            <span class="service-tag">GEO (AI Engines)</span>
            <span class="service-tag">JSON-LD Schema</span>
          </div>
        </div>

        <!-- 05 -->
        <div class="service-card">
          <div class="service-num">05</div>
          <div class="service-name">3D WebGL & Kinetic UI</div>
          <p class="service-desc">
            Cinema-grade scrollytelling and spatial depth powered by Three.js, React Three Fiber, GSAP ScrollTrigger, and Lenis smooth momentum scrolling at 60fps.
          </p>
          <div class="service-tags">
            <span class="service-tag">Three.js</span>
            <span class="service-tag">GSAP 3</span>
            <span class="service-tag">Lenis Scroll</span>
            <span class="service-tag">Framer Motion</span>
          </div>
        </div>

        <!-- 06 -->
        <div class="service-card">
          <div class="service-num">06</div>
          <div class="service-name">Digital Evolution & Redesign</div>
          <p class="service-desc">
            Transforming legacy, slow WordPress/Wix sites into cutting-edge Next.js platforms. 100% SEO preservation, 80% weight reduction, and zero downtime.
          </p>
          <div class="service-tags">
            <span class="service-tag">Modernization</span>
            <span class="service-tag">301 SEO Safeguard</span>
            <span class="service-tag">Speed Tripling</span>
          </div>
        </div>

      </div>

      <!-- Standards strip -->
      <div class="corner-box" style="margin-top: 14px; padding: 12px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="font-size: 8pt; font-weight: 800; color: var(--gold); text-transform: uppercase;">MOWGLAI PERFORMANCE GUARANTEE</div>
            <div style="font-size: 7.5pt; color: var(--text-sub);">Every platform ships with verified Core Web Vitals, zero layout shift (CLS: 0.00), and mobile-first responsiveness.</div>
          </div>
          <div class="badge badge-emerald">LIGHTHOUSE 95+</div>
        </div>
      </div>

    </div>
    <div class="page-footer">
      <span>MOWGLAI DIGITAL AGENCY • CAPABILITIES</span>
      <span>SECTION 01: SERVICES</span>
      <span>PAGE 02</span>
    </div>
  </div>

  <!-- ==================== PAGE 3: FEATURED CASE STUDY (MORE INTERIOR) ==================== -->
  <div class="page">
    <div class="page-content">
      <div class="section-tag">FLAGSHIP CASE STUDY</div>
      <h2 class="section-title">MORE <span class="gold-text">INTERIOR</span></h2>
      <p class="section-desc">
        A deep dive into how Mowglai engineered an immersive, luxury architectural portfolio platform that converted casual website visitors into high-ticket interior design contracts.
      </p>

      <div class="featured-case">
        <div class="featured-img-wrap">
          ${moreInteriorImg ? `<img src="${moreInteriorImg}" alt="More Interior Platform Preview">` : ''}
        </div>
        <div>
          <div class="badge" style="margin-bottom: 8px;">LIVE PLATFORM: MOREINTERIOR.IN</div>
          <h3 style="font-size: 14pt; font-weight: 900; text-transform: uppercase; color: var(--text-main); margin-bottom: 6px;">Luxury Living Spaces & Studio Showcase</h3>
          <p style="font-size: 8pt; color: var(--text-sub); line-height: 1.45; margin-bottom: 10px;">
            More Interior is a luxury interior architecture studio executing bespoke residential and commercial spaces. They required a digital identity that resonated with high-net-worth clients.
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <div style="background: rgba(255,255,255,0.03); padding: 8px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 11pt; font-weight: 900; color: var(--gold); font-family: 'Outfit';">800ms</div>
              <div style="font-size: 6.5pt; text-transform: uppercase; color: var(--text-muted);">Avg Page Load Time</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); padding: 8px; border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="font-size: 11pt; font-weight: 900; color: var(--emerald); font-family: 'Outfit';">3.4x</div>
              <div style="font-size: 6.5pt; text-transform: uppercase; color: var(--text-muted);">Consultation Inquiries</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Problem vs Solution Breakdown -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div class="corner-box" style="padding: 14px;">
          <h4 style="font-size: 10pt; font-weight: 800; text-transform: uppercase; color: #f87171; margin-bottom: 6px;">The Challenge</h4>
          <ul style="font-size: 7.5pt; color: var(--text-sub); padding-left: 14px; line-height: 1.5;">
            <li>High-resolution 4K spatial photography was causing conventional portfolio websites to choke and take 6+ seconds to load.</li>
            <li>Visitors on mobile devices experienced erratic layout shifts and unresponsive galleries.</li>
            <li>Lack of an intentional lead capture funnel resulted in lost client inquiries and poor qualification.</li>
          </ul>
        </div>
        <div class="corner-box" style="padding: 14px;">
          <h4 style="font-size: 10pt; font-weight: 800; text-transform: uppercase; color: var(--emerald); margin-bottom: 6px;">The Mowglai Solution</h4>
          <ul style="font-size: 7.5pt; color: var(--text-sub); padding-left: 14px; line-height: 1.5;">
            <li>Engineered responsive AVIF/WebP progressive image pipelines with blur-up placeholders for instant rendering.</li>
            <li>Designed a dark-luxe aesthetic matching high-end architectural digests with subtle tactile hover physics.</li>
            <li>Built an integrated consultation funnel qualifying visitors by project budget, location, and aesthetic preferences.</li>
          </ul>
        </div>
      </div>

      <!-- Key Tech Pillars -->
      <div style="background: rgba(13, 26, 18, 0.55); border: 1px solid var(--border-subtle); border-radius: 10px; padding: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 8pt; font-weight: 700; text-transform: uppercase; color: var(--gold); letter-spacing: 0.1em;">Tech Stack Deployed:</span>
          <div style="display: flex; gap: 6px;">
            <span class="service-tag">Next.js</span>
            <span class="service-tag">React 19</span>
            <span class="service-tag">Tailwind CSS</span>
            <span class="service-tag">WebP Compression</span>
            <span class="service-tag">Framer Motion</span>
          </div>
        </div>
      </div>

    </div>
    <div class="page-footer">
      <span>MOWGLAI DIGITAL AGENCY • PROVEN LAUNCHES</span>
      <span>CASE STUDY: MORE INTERIOR</span>
      <span>PAGE 03</span>
    </div>
  </div>

  <!-- ==================== PAGE 4: PORTFOLIO SHOWCASE ==================== -->
  <div class="page">
    <div class="page-content">
      <div class="section-tag">PORTFOLIO TRACK RECORD</div>
      <h2 class="section-title">THE WORK WE HAVE <span class="gold-text">DONE</span></h2>
      <p class="section-desc">
        A selection of high-impact web platforms, SaaS ecosystems, and digital products deployed across diverse global industries.
      </p>

      <div class="mini-projects-grid" style="margin-bottom: 12px;">
        
        <!-- Clarity Cartel -->
        <div class="mini-card">
          <div class="mini-img-thumb">
            ${clarityCartelImg ? `<img src="${clarityCartelImg}" alt="Clarity Cartel">` : ''}
          </div>
          <div>
            <div class="badge" style="font-size: 6pt; padding: 2px 6px;">STRATEGIC CONSULTANCY</div>
            <div style="font-size: 9.5pt; font-weight: 800; text-transform: uppercase; color: var(--text-main); font-family: 'Outfit'; margin: 2px 0;">Clarity Cartel</div>
            <div style="font-size: 7pt; color: var(--text-muted); line-height: 1.3;">Actionable business strategy platform with executive advisory calendar booking.</div>
            <div style="font-size: 6.5pt; color: var(--gold); font-weight: 600; margin-top: 2px;">clarity-cartel.vercel.app</div>
          </div>
        </div>

        <!-- iElevate -->
        <div class="mini-card">
          <div class="mini-img-thumb">
            ${ielevateImg ? `<img src="${ielevateImg}" alt="iElevate">` : ''}
          </div>
          <div>
            <div class="badge" style="font-size: 6pt; padding: 2px 6px;">COACHING & GROWTH</div>
            <div style="font-size: 9.5pt; font-weight: 800; text-transform: uppercase; color: var(--text-main); font-family: 'Outfit'; margin: 2px 0;">iElevate</div>
            <div style="font-size: 7pt; color: var(--text-muted); line-height: 1.3;">Comprehensive corporate education campus with modular curriculum directories.</div>
            <div style="font-size: 6.5pt; color: var(--gold); font-weight: 600; margin-top: 2px;">ielevate.in</div>
          </div>
        </div>

        <!-- Jayhawk -->
        <div class="mini-card">
          <div class="mini-img-thumb">
            ${jayhawkImg ? `<img src="${jayhawkImg}" alt="Jayhawk">` : ''}
          </div>
          <div>
            <div class="badge" style="font-size: 6pt; padding: 2px 6px;">HEALTHCARE PORTAL</div>
            <div style="font-size: 9.5pt; font-weight: 800; text-transform: uppercase; color: var(--text-main); font-family: 'Outfit'; margin: 2px 0;">Jayhawk Health</div>
            <div style="font-size: 7pt; color: var(--text-muted); line-height: 1.3;">Accessible clinical infrastructure with specialist booking and emergency routing.</div>
            <div style="font-size: 6.5pt; color: var(--gold); font-weight: 600; margin-top: 2px;">jayhawkk.github.io</div>
          </div>
        </div>

        <!-- True Ratings -->
        <div class="mini-card">
          <div class="mini-img-thumb">
            ${trueRatingsImg ? `<img src="${trueRatingsImg}" alt="True Ratings">` : ''}
          </div>
          <div>
            <div class="badge" style="font-size: 6pt; padding: 2px 6px;">ENTERTAINMENT DB</div>
            <div style="font-size: 9.5pt; font-weight: 800; text-transform: uppercase; color: var(--text-main); font-family: 'Outfit'; margin: 2px 0;">True Ratings</div>
            <div style="font-size: 7pt; color: var(--text-muted); line-height: 1.3;">Real-time movie and TV database with instantaneous client-side filter engine.</div>
            <div style="font-size: 6.5pt; color: var(--gold); font-weight: 600; margin-top: 2px;">true-ratings.vercel.app</div>
          </div>
        </div>

      </div>

      <!-- Sector Templates Registry Box -->
      <div class="corner-box" style="padding: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div>
            <h4 style="font-size: 11pt; font-weight: 900; text-transform: uppercase; color: var(--gold); font-family: 'Outfit'; margin: 0;">40+ Bespoke Production Template Ecosystem</h4>
            <p style="font-size: 7.5pt; color: var(--text-muted); margin: 0;">Pre-architected, hand-crafted codebases ready for instant customization and rapid deployment.</p>
          </div>
          <div class="badge badge-emerald">8 INDUSTRY SECTORS</div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-top: 8px;">
          <div style="background: rgba(255,255,255,0.03); padding: 6px; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
            <div style="font-size: 7.5pt; font-weight: 800; color: var(--text-main);">Healthcare</div>
            <div style="font-size: 6.5pt; color: var(--text-muted);">5 Blueprints</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
            <div style="font-size: 7.5pt; font-weight: 800; color: var(--text-main);">Yoga & Spa</div>
            <div style="font-size: 6.5pt; color: var(--text-muted);">5 Blueprints</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
            <div style="font-size: 7.5pt; font-weight: 800; color: var(--text-main);">Education</div>
            <div style="font-size: 6.5pt; color: var(--text-muted);">5 Blueprints</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
            <div style="font-size: 7.5pt; font-weight: 800; color: var(--text-main);">Gym & Fitness</div>
            <div style="font-size: 6.5pt; color: var(--text-muted);">5 Blueprints</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
            <div style="font-size: 7.5pt; font-weight: 800; color: var(--text-main);">Real Estate</div>
            <div style="font-size: 6.5pt; color: var(--text-muted);">5 Blueprints</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
            <div style="font-size: 7.5pt; font-weight: 800; color: var(--text-main);">Restaurant</div>
            <div style="font-size: 6.5pt; color: var(--text-muted);">5 Blueprints</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
            <div style="font-size: 7.5pt; font-weight: 800; color: var(--text-main);">E-Commerce</div>
            <div style="font-size: 6.5pt; color: var(--text-muted);">5 Blueprints</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px; border-radius: 6px; text-align: center; border: 1px solid var(--border-subtle);">
            <div style="font-size: 7.5pt; font-weight: 800; color: var(--text-main);">Portfolios</div>
            <div style="font-size: 6.5pt; color: var(--text-muted);">5 Blueprints</div>
          </div>
        </div>
      </div>

    </div>
    <div class="page-footer">
      <span>MOWGLAI DIGITAL AGENCY • SELECTED WORK</span>
      <span>SECTION 02: PORTFOLIO</span>
      <span>PAGE 04</span>
    </div>
  </div>

  <!-- ==================== PAGE 5: HOW WE FUNCTION (OPERATING SYSTEM) ==================== -->
  <div class="page">
    <div class="page-content">
      <div class="section-tag">EXECUTION METHODOLOGY</div>
      <h2 class="section-title">HOW WE <span class="gold-text">FUNCTION</span></h2>
      <p class="section-desc">
        We eliminate traditional agency bureaucracy with an agile, 5-phase delivery engine that takes your project from napkin sketch to high-performance live release.
      </p>

      <div class="steps-list">
        
        <div class="step-row">
          <div class="step-number">01</div>
          <div>
            <div class="step-title">Discovery & Strategy</div>
            <div class="step-sub">Days 1 – 5</div>
          </div>
          <div class="step-desc">
            Deep immersion into your market, customer psychology, and competitive moat. Formulating technical specs, SEO keyword maps, and milestone deliverables with clear SLAs.
          </div>
        </div>

        <div class="step-row">
          <div class="step-number">02</div>
          <div>
            <div class="step-title">UI/UX & Architecture</div>
            <div class="step-sub">Days 5 – 12</div>
          </div>
          <div class="step-desc">
            High-fidelity visual design, bespoke typography, dark/light token systems, and interactive clickable prototypes to validate flows before writing code.
          </div>
        </div>

        <div class="step-row">
          <div class="step-number">03</div>
          <div>
            <div class="step-title">Full-Stack Engineering</div>
            <div class="step-sub">Days 12 – 24</div>
          </div>
          <div class="step-desc">
            Building modular Next.js 16 components, strict TypeScript typings, hardware-accelerated GSAP timelines, WebGL canvas shaders, and robust backend integrations.
          </div>
        </div>

        <div class="step-row">
          <div class="step-number">04</div>
          <div>
            <div class="step-title">Performance & QA Audit</div>
            <div class="step-sub">Days 24 – 28</div>
          </div>
          <div class="step-desc">
            Exhaustive cross-device testing, Core Web Vitals profiling (LCP &lt; 1.2s, CLS 0.00), JSON-LD schema audits, SSL security checks, and cross-browser sign-off.
          </div>
        </div>

        <div class="step-row">
          <div class="step-number">05</div>
          <div>
            <div class="step-title">Launch & Mowglai Care</div>
            <div class="step-sub">Launch & Ongoing</div>
          </div>
          <div class="step-desc">
            Automated CI/CD edge deployment, zero-downtime DNS cutover, 100% intellectual property handover, and continuous monthly speed and feature updates.
          </div>
        </div>

      </div>

      <!-- Principles Box -->
      <div class="corner-box" style="margin-top: 14px; padding: 12px 16px;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center;">
          <div>
            <div style="font-size: 8.5pt; font-weight: 800; color: var(--gold); text-transform: uppercase;">Founder-Led Direct Sync</div>
            <div style="font-size: 7pt; color: var(--text-muted);">Direct collaboration with senior engineers—no junior middlemen.</div>
          </div>
          <div>
            <div style="font-size: 8.5pt; font-weight: 800; color: var(--emerald); text-transform: uppercase;">100% Code Ownership</div>
            <div style="font-size: 7pt; color: var(--text-muted);">Full repository ownership, documentation, and design assets from day 1.</div>
          </div>
          <div>
            <div style="font-size: 8.5pt; font-weight: 800; color: var(--gold); text-transform: uppercase;">Speed SLA Guarantee</div>
            <div style="font-size: 7pt; color: var(--text-muted);">Free remediation if our agreed Core Web Vitals target is not met.</div>
          </div>
        </div>
      </div>

    </div>
    <div class="page-footer">
      <span>MOWGLAI DIGITAL AGENCY • OPERATING SYSTEM</span>
      <span>SECTION 03: PROCESS</span>
      <span>PAGE 05</span>
    </div>
  </div>

  <!-- ==================== PAGE 6: TECH STACK & COMMERCIAL TIERS ==================== -->
  <div class="page">
    <div class="page-content">
      <div class="section-tag">COMMERCIAL & PARTNERSHIP</div>
      <h2 class="section-title">ENGAGEMENT <span class="gold-text">MODELS</span></h2>
      <p class="section-desc">
        Transparent, flexible collaboration frameworks built for early-stage visionaries, scaling venture studios, and high-growth brands.
      </p>

      <div class="tier-grid" style="margin-bottom: 14px;">
        
        <!-- Tier 1 -->
        <div class="tier-card">
          <div>
            <div class="tier-name">Turnkey Custom Build</div>
            <div class="badge" style="font-size: 6.5pt; padding: 2px 6px; margin-bottom: 8px;">FIXED SCOPE & SPRINT</div>
            <div class="tier-desc">Complete end-to-end platform design, engineering, and launch from inception to delivery.</div>
            <div class="tier-bullet"><span>✓</span> Full Custom UI/UX & Prototypes</div>
            <div class="tier-bullet"><span>✓</span> Next.js 16 Full-Stack Codebase</div>
            <div class="tier-bullet"><span>✓</span> SEO & Schema Architecture</div>
            <div class="tier-bullet"><span>✓</span> 30-Day Post-Launch Warranty</div>
          </div>
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 8px; margin-top: 8px; font-size: 7.5pt; color: var(--gold); font-weight: 700;">
            Timeline: 2 to 4 Weeks
          </div>
        </div>

        <!-- Tier 2 -->
        <div class="tier-card featured">
          <div>
            <div class="tier-name" style="color: var(--emerald);">Mowglai Care</div>
            <div class="badge badge-emerald" style="font-size: 6.5pt; padding: 2px 6px; margin-bottom: 8px;">MONTHLY PARTNERSHIP</div>
            <div class="tier-desc">Continuous evolution, maintenance, speed optimization, and sprint feature rollouts.</div>
            <div class="tier-bullet"><span>✓</span> Dedicated Development Hours</div>
            <div class="tier-bullet"><span>✓</span> 24/7 Uptime & Speed Auditing</div>
            <div class="tier-bullet"><span>✓</span> Priority Bug Resolution SLA</div>
            <div class="tier-bullet"><span>✓</span> Ongoing SEO & Content Updates</div>
          </div>
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 8px; margin-top: 8px; font-size: 7.5pt; color: var(--emerald); font-weight: 700;">
            Flexible Monthly Retainer
          </div>
        </div>

        <!-- Tier 3 -->
        <div class="tier-card">
          <div>
            <div class="tier-name">Sprint Pod</div>
            <div class="badge" style="font-size: 6.5pt; padding: 2px 6px; margin-bottom: 8px;">STAFF AUGMENTATION</div>
            <div class="tier-desc">Elite frontend and 3D creative engineers integrated directly into your existing team.</div>
            <div class="tier-bullet"><span>✓</span> Direct Slack / GitHub Integration</div>
            <div class="tier-bullet"><span>✓</span> Daily Standups & Linear Sprints</div>
            <div class="tier-bullet"><span>✓</span> Three.js & Kinetic Specialization</div>
            <div class="tier-bullet"><span>✓</span> Zero Hiring or Overhead Lag</div>
          </div>
          <div style="border-top: 1px solid var(--border-subtle); padding-top: 8px; margin-top: 8px; font-size: 7.5pt; color: var(--gold); font-weight: 700;">
            Bi-Weekly Sprint Cadence
          </div>
        </div>

      </div>

      <!-- Tech Stack Summary Table -->
      <div style="margin-top: 4px;">
        <h4 style="font-size: 9pt; font-weight: 800; text-transform: uppercase; color: var(--gold); margin-bottom: 4px; font-family: 'Outfit';">Standard Technology Stack Matrix</h4>
        <table class="custom-table">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Primary Tech</th>
              <th>Standard SLA / Benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Frontend Framework</strong></td>
              <td>Next.js 16 (App Router), React 19, TypeScript</td>
              <td>Sub-second TTFB, Strict typings, Server-side streaming</td>
            </tr>
            <tr>
              <td><strong>Motion & 3D</strong></td>
              <td>GSAP ScrollTrigger, Lenis, Three.js, R3F</td>
              <td>60fps GPU acceleration, Zero scroll stutter, Mobile optimized</td>
            </tr>
            <tr>
              <td><strong>Data & Backend</strong></td>
              <td>Node.js, PostgreSQL / Supabase, Firebase, Redis</td>
              <td>Row-level security, sub-50ms query cache, instant webhooks</td>
            </tr>
            <tr>
              <td><strong>Search & Intelligence</strong></td>
              <td>Schema.org JSON-LD, GEO Prompt Optimization</td>
              <td>100% crawl indexability, ChatGPT/Perplexity citation schemas</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    <div class="page-footer">
      <span>MOWGLAI DIGITAL AGENCY • COMMERCIAL MODELS</span>
      <span>SECTION 04: COLLABORATION</span>
      <span>PAGE 06</span>
    </div>
  </div>

  <!-- ==================== PAGE 7: CONTACT & BACK COVER ==================== -->
  <div class="page" style="justify-content: space-between;">
    <div class="page-content" style="justify-content: space-between;">
      
      <div>
        <div class="section-tag">GET IN TOUCH</div>
        <h2 class="section-title">START YOUR <span class="gold-text">TRANSFORMATION</span></h2>
        <p class="section-desc">
          Whether you are launching a new startup, modernizing an enterprise portal, or looking to command the digital authority your brand deserves—let's build something extraordinary together.
        </p>
      </div>

      <!-- Action Card -->
      <div class="corner-box" style="padding: 22px; margin: 10px 0;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div>
            <h3 style="font-size: 13pt; font-weight: 900; text-transform: uppercase; color: var(--gold); margin-bottom: 8px;">Direct Booking & Consultation</h3>
            <p style="font-size: 8.5pt; color: var(--text-sub); line-height: 1.5; margin-bottom: 12px;">
              Schedule a 30-minute discovery session with our engineering leads to dissect your requirements, review technical feasibility, and receive an itemized proposal within 48 hours.
            </p>
            <div style="font-size: 8.5pt; color: var(--text-main); font-weight: 700; margin-bottom: 4px;">
              Official Consultation Portal:
            </div>
            <div style="font-size: 9.5pt; color: var(--emerald); font-weight: 800; font-family: 'Outfit';">
              mowglai.com/start-project
            </div>
          </div>
          <div>
            <h3 style="font-size: 13pt; font-weight: 900; text-transform: uppercase; color: var(--gold); margin-bottom: 8px;">Direct Communication</h3>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 8.5pt;">
              <div>
                <span style="color: var(--text-muted); font-size: 7.5pt; text-transform: uppercase; display: block;">Official Email</span>
                <span style="color: var(--text-main); font-weight: 700;">info@mowglai.com</span>
              </div>
              <div>
                <span style="color: var(--text-muted); font-size: 7.5pt; text-transform: uppercase; display: block;">Interactive Web Catalogue</span>
                <span style="color: var(--text-main); font-weight: 700;">mowglai.com/catalogue</span>
              </div>
              <div>
                <span style="color: var(--text-muted); font-size: 7.5pt; text-transform: uppercase; display: block;">Headquarters</span>
                <span style="color: var(--text-main); font-weight: 700;">Noida, Uttar Pradesh — India (Global Operations)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Closing Manifesto Statement -->
      <div style="text-align: center; padding: 20px 10px;">
        <h3 style="font-size: 18pt; font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-main); margin-bottom: 6px;">
          MOWGLAI DIGITAL AGENCY
        </h3>
        <p style="font-size: 9.5pt; color: var(--gold); font-family: 'Outfit'; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700;">
          Built to Perform • Designed to Amaze
        </p>
        <p style="font-size: 8pt; color: var(--text-muted); margin-top: 6px; max-width: 480px; margin-left: auto; margin-right: auto;">
          © 2026 Mowglai. All trademarks, creative concepts, and architectural blueprints are proprietary to Mowglai Digital Agency.
        </p>
      </div>

    </div>
    <div class="page-footer">
      <span>MOWGLAI DIGITAL AGENCY • OFFICIAL BUSINESS CATALOGUE</span>
      <span>WWW.MOWGLAI.COM</span>
      <span>PAGE 07</span>
    </div>
  </div>

</body>
</html>
`;

const tempHtmlPath = path.join(ROOT_DIR, 'public', 'catalogue-print.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');
console.log('Wrote print HTML to:', tempHtmlPath);

const outputPdfPublic = path.join(PUBLIC_DIR, 'Mowglai_Business_Catalogue.pdf');
const outputPdfArtifact = path.join(ARTIFACT_DIR, 'Mowglai_Business_Catalogue.pdf');

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const cmd = `"${chromePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outputPdfPublic}" "file://${tempHtmlPath}"`;

console.log('Running Chrome headless to generate PDF...');
try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('PDF successfully generated at:', outputPdfPublic);

  if (fs.existsSync(ARTIFACT_DIR)) {
    fs.copyFileSync(outputPdfPublic, outputPdfArtifact);
    console.log('Copied PDF to artifact dir:', outputPdfArtifact);
  }
} catch (err) {
  console.error('Error generating PDF:', err);
  process.exit(1);
}
