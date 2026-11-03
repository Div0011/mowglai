import { OnboardingInput } from './types';

export function generateBespokeWebsiteHtml(
    input: OnboardingInput,
    profile?: {
        name?: string;
        sector?: string;
        city?: string;
        tagline?: string;
    }
): string {
    const businessName = (input.businessName || profile?.name || 'Premier Business').trim();
    const city = (input.city || profile?.city || 'NCR, India').trim();
    const sector = (input.businessSector || profile?.sector || 'portfolio').toLowerCase();
    const phone = (input.phone || '919452476331').replace(/[^0-9]/g, '');
    const email = input.email || 'tech@mowglai.com';
    const primaryGoal = input.primaryGoal || 'WhatsApp Leads';

    // Sector-specific theme styling & content
    const sectorConfigs: Record<string, {
        primaryColor: string;
        accentColor: string;
        badge: string;
        headline: string;
        subheadline: string;
        services: { title: string; desc: string; icon: string }[];
        reviews: { name: string; comment: string; rating: number }[];
    }> = {
        healthcare: {
            primaryColor: '#0ea5e9',
            accentColor: '#38bdf8',
            badge: 'Certified Medical & Wellness Care',
            headline: `Trusted Healthcare & Diagnostics in ${city}`,
            subheadline: `Providing compassionate, modern, and patient-first medical treatments. Fast appointments, advanced care, and transparent consultation.`,
            services: [
                { title: 'Advanced Consultations', desc: 'Expert specialist diagnostics with personalized treatment plans.', icon: '🩺' },
                { title: 'Emergency Care', desc: 'Rapid priority response and state-of-the-art diagnostic facilities.', icon: '⚡' },
                { title: 'Preventive Health', desc: 'Comprehensive annual wellness checkups and health screenings.', icon: '🛡️' },
                { title: 'Digital Prescriptions', desc: 'Instant WhatsApp medical follow-ups and verified digital reports.', icon: '📱' },
            ],
            reviews: [
                { name: 'Dr. Rajesh Mehta', comment: 'Outstanding care and cleanliness. Appointment booking was effortless!', rating: 5 },
                { name: 'Pooja Sharma', comment: 'Best clinic experience in ' + city + '. Doctors take genuine time to listen.', rating: 5 },
            ]
        },
        gym: {
            primaryColor: '#c8f169',
            accentColor: '#10b981',
            badge: 'Elite Fitness & Performance Hub',
            headline: `Transform Your Body at ${businessName}`,
            subheadline: `High-energy strength training, certified personal coaches, and Olympic-grade equipment designed to achieve your peak physical goals.`,
            services: [
                { title: 'Personal Strength Coaching', desc: 'One-on-one tailored training plans built for muscle growth and fat loss.', icon: '💪' },
                { title: 'HIIT & Functional Fitness', desc: 'High-intensity calorie-burning sessions led by certified master trainers.', icon: '🔥' },
                { title: 'Custom Nutrition Plans', desc: 'Science-backed macro tracking and customized daily diet consultation.', icon: '🥗' },
                { title: 'Modern Equipment Deck', desc: 'Full range of biomechanically calibrated strength and cardio machines.', icon: '🏋️' },
            ],
            reviews: [
                { name: 'Vikram Singhania', comment: 'Lost 12 kgs in 4 months! The trainers in ' + city + ' are world-class.', rating: 5 },
                { name: 'Ananya Verma', comment: 'Incredible atmosphere, super clean, and energetic community.', rating: 5 },
            ]
        },
        school: {
            primaryColor: '#3b82f6',
            accentColor: '#60a5fa',
            badge: 'Excellence in Modern Education',
            headline: `Empowering Future Leaders in ${city}`,
            subheadline: `Nurturing critical thinking, digital literacy, and holistic character through modern learning environments and dedicated mentors.`,
            services: [
                { title: 'STEM & Robotics Labs', desc: 'Hands-on practical exploration in coding, science, and robotics.', icon: '🔬' },
                { title: 'Competitive Exam Prep', desc: 'Structured guidance for foundation, Olympiads, and board excellence.', icon: '📚' },
                { title: 'Holistic Sports & Arts', desc: 'Comprehensive athletic tracks, creative arts, and leadership programs.', icon: '🎨' },
                { title: 'Smart Digital Classrooms', desc: 'Interactive multimedia lessons providing immersive concept clarity.', icon: '💻' },
            ],
            reviews: [
                { name: 'Sunil Mathur', comment: 'The best academic and sports balance for our children in ' + city + '.', rating: 5 },
                { name: 'Meenakshi Iyer', comment: 'Teachers are deeply attentive to every student individual progress.', rating: 5 },
            ]
        },
        restaurant: {
            primaryColor: '#f59e0b',
            accentColor: '#fbbf24',
            badge: 'Artisanal Culinary Experience',
            headline: `Authentic Flavors & Dining at ${businessName}`,
            subheadline: `Crafted with locally sourced fresh ingredients, timeless recipes, and an unforgettable dining ambience in the heart of ${city}.`,
            services: [
                { title: 'Chef Curated Menu', desc: 'Signature gourmet dishes prepared with fresh, premium ingredients.', icon: '🍲' },
                { title: 'Private Event Dining', desc: 'Exclusive dining spaces for birthdays, corporate meets, and anniversaries.', icon: '🍷' },
                { title: 'Swift Online Delivery', desc: 'Hot, freshly packed gourmet meals delivered right to your doorstep.', icon: '🛵' },
                { title: 'Artisanal Bakery & Cafe', desc: 'Handcrafted coffees, sourdough breads, and decadent desserts.', icon: '☕' },
            ],
            reviews: [
                { name: 'Rohan Kapoor', comment: 'The best culinary experience in ' + city + '! The flavors are divine.', rating: 5 },
                { name: 'Sanya Malhotra', comment: 'Cozy ambience, stellar service, and top-tier presentation.', rating: 5 },
            ]
        },
        'real-estate': {
            primaryColor: '#eab308',
            accentColor: '#facc15',
            badge: 'Luxury Living & High-ROI Properties',
            headline: `Find Your Dream Property in ${city}`,
            subheadline: `Verified premium residences, commercial retail spaces, and high-yield investment properties backed by complete transparent documentation.`,
            services: [
                { title: 'Luxury Residences', desc: 'Modern 3 & 4 BHK apartments and private villas with world-class amenities.', icon: '🏡' },
                { title: 'Prime Commercial Spaces', desc: 'High-footfall retail storefronts and Grade-A modern corporate offices.', icon: '🏢' },
                { title: 'Legal & Title Verification', desc: '100% verified clear titles, RERA compliance, and fast-track loan assistance.', icon: '📜' },
                { title: 'High-Yield Investment Plots', desc: 'Strategic land corridors with rapid capital appreciation potential.', icon: '📈' },
            ],
            reviews: [
                { name: 'Ashok Bansal', comment: 'Transparent deals with zero hidden charges. Found our dream villa!', rating: 5 },
                { name: 'Kavita Nair', comment: 'Professional guidance and smooth registration process in ' + city + '.', rating: 5 },
            ]
        },
        ecommerce: {
            primaryColor: '#8b5cf6',
            accentColor: '#a78bfa',
            badge: 'Direct to Consumer Collection',
            headline: `Shop the Latest Trends at ${businessName}`,
            subheadline: `Curated premium quality collections, instant WhatsApp checkout, fast pan-India delivery, and 100% satisfaction guarantee.`,
            services: [
                { title: 'Premium Craftsmanship', desc: 'Meticulously designed with durable, eco-conscious materials.', icon: '✨' },
                { title: 'Express Delivery', desc: 'Fast track dispatch with real-time live WhatsApp package tracking.', icon: '🚚' },
                { title: 'Hassle-Free Returns', desc: '7-day easy exchange policy with doorstep pickup assistance.', icon: '🔄' },
                { title: 'Secure Instant Payments', desc: 'Pay via UPI, Cards, Net Banking, or Cash on Delivery.', icon: '💳' },
            ],
            reviews: [
                { name: 'Tanya Sengupta', comment: 'The product quality exceeded expectations! Super fast delivery.', rating: 5 },
                { name: 'Manish Rao', comment: 'Seamless WhatsApp checkout and very responsive customer support.', rating: 5 },
            ]
        },
        yoga: {
            primaryColor: '#10b981',
            accentColor: '#34d399',
            badge: 'Mindful Wellness & Inner Peace',
            headline: `Rebalance Mind, Body & Soul in ${city}`,
            subheadline: `Traditional Hatha, Vinyasa flows, breathwork meditation, and holistic healing programs designed for deep restorative living.`,
            services: [
                { title: 'Daily Asana Flows', desc: 'Beginner to advanced guided sessions improving flexibility and posture.', icon: '🧘' },
                { title: 'Pranayama & Meditation', desc: 'Ancient breath mastery techniques to dissolve stress and anxiety.', icon: '🌿' },
                { title: 'Sound Healing & Chakra', desc: 'Vibrational Tibetan bowl sessions restoring natural energy balance.', icon: '🔔' },
                { title: 'Weekend Wellness Retreats', desc: 'Immersive nature workshops and detoxifying Ayurvedic cleanses.', icon: '🍃' },
            ],
            reviews: [
                { name: 'Shalini Saxena', comment: 'Transformed my daily stress. The instructors in ' + city + ' are amazing.', rating: 5 },
                { name: 'Deepak Chopra', comment: 'Deeply calming atmosphere. Best decision I made for my health.', rating: 5 },
            ]
        },
        portfolio: {
            primaryColor: '#c8f169',
            accentColor: '#10b981',
            badge: 'High-Performance Digital Architecture',
            headline: `Elevating Brands Through Digital Craft in ${city}`,
            subheadline: `Award-winning design, lightning-fast Next.js engineering, and conversion-focused digital experiences built for visionary businesses.`,
            services: [
                { title: 'Bespoke Web Platforms', desc: 'Custom Next.js & React digital architectures delivering sub-second speed.', icon: '⚡' },
                { title: 'Fluid Micro-Animations', desc: 'Liquid GSAP and Framer Motion interactions that captivate visitors.', icon: '🎨' },
                { title: 'Local GEO & AI Search', desc: 'Engineered for Google Gemini, ChatGPT, and Local 3-Pack rankings.', icon: '📍' },
                { title: 'Conversion Funnels', desc: 'Seamless WhatsApp and online checkout pipelines turning traffic into clients.', icon: '🚀' },
            ],
            reviews: [
                { name: 'Aakash Verma', comment: 'Our customer inquiries jumped 300% after the website launch!', rating: 5 },
                { name: 'Divya Singhal', comment: 'Stunning 3D aesthetics and super fast on mobile devices.', rating: 5 },
            ]
        }
    };

    const config = sectorConfigs[sector] || sectorConfigs.portfolio;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(`Hi ${businessName}! I found your website and I am interested in your services in ${city}.`)}`;
    const telUrl = `tel:+${phone}`;

    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${businessName} | Premier ${config.badge} in ${city}</title>
  <meta name="description" content="${businessName} offers ${config.subheadline} Located in ${city}." />
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: '${config.primaryColor}',
            brandAccent: '${config.accentColor}',
            obsidian: '#040a07',
            cardBg: '#08140e',
          }
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700;800&display=swap');
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: radial-gradient(ellipse 130% 100% at 50% -10%, #0d2e24 0%, #061610 40%, #030906 100%);
      color: #f4f7f5;
      min-height: 100vh;
    }
    .font-display { font-family: 'Space Grotesk', sans-serif; }
  </style>

  <!-- Google LocalBusiness Structured Data (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "${businessName}",
    "description": "${businessName} in ${city}. ${config.subheadline}",
    "telephone": "+${phone}",
    "email": "${email}",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${city}",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹",
    "currenciesAccepted": "INR, USD"
  }
  </script>
</head>
<body class="relative overflow-x-hidden">
  <!-- Ambient Cosmic Glow -->
  <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-brand/20 via-brandAccent/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10"></div>

  <!-- Navigation -->
  <header class="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between border-b border-white/10 relative z-20 backdrop-blur-md">
    <a href="#" class="flex items-center gap-2">
      <span class="w-8 h-8 rounded-lg bg-brand text-obsidian font-display font-extrabold flex items-center justify-center text-base shadow-[0_0_12px_rgba(200,241,105,0.4)]">
        ${businessName.charAt(0)}
      </span>
      <span class="font-display font-extrabold text-xl text-white tracking-tight">${businessName}</span>
    </a>
    <div class="flex items-center gap-3">
      <a href="${telUrl}" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white/80 hover:border-brand hover:text-brand transition">
        📞 +${phone}
      </a>
      <a href="${whatsappUrl}" target="_blank" class="px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-lg hover:scale-105">
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center relative z-10 space-y-6">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand text-xs font-mono font-bold tracking-wide">
      <span class="w-2 h-2 rounded-full bg-brand animate-ping"></span>
      ${config.badge} • ${city}
    </div>

    <h1 class="text-3xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-tight">
      ${config.headline.replace(businessName, `<span class="text-brand">${businessName}</span>`)}
    </h1>

    <p class="max-w-2xl mx-auto text-gray-300 text-sm sm:text-lg leading-relaxed">
      ${config.subheadline}
    </p>

    <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
      <a href="${whatsappUrl}" target="_blank" class="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand text-obsidian font-extrabold text-sm uppercase tracking-wider hover:bg-brand/90 transition shadow-[0_0_25px_rgba(200,241,105,0.35)] flex items-center justify-center gap-2">
        <span>Get Instant Quote / Book</span>
        <span>&rarr;</span>
      </a>
      <a href="#services" class="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/20 hover:border-brand text-white font-bold text-sm transition">
        Explore Services
      </a>
    </div>

    <!-- Quick Trust Micro-Badges -->
    <div class="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
      <span class="flex items-center gap-1.5">⭐ 5.0 Rating on Google</span>
      <span class="flex items-center gap-1.5">⚡ Instant WhatsApp Response</span>
      <span class="flex items-center gap-1.5">📍 Serving ${city} & Nearby</span>
    </div>
  </section>

  <!-- Services Grid -->
  <section id="services" class="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative z-10 space-y-10 border-t border-white/10">
    <div class="text-center space-y-2 max-w-xl mx-auto">
      <span class="text-brand text-xs font-mono uppercase tracking-widest font-bold">What We Deliver</span>
      <h2 class="text-2xl sm:text-4xl font-display font-extrabold text-white">Dedicated Services Built for You</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      ${config.services.map((s) => `
      <div class="bg-cardBg/90 border border-white/10 rounded-2xl p-6 space-y-3 hover:border-brand/50 transition backdrop-blur-xl group hover:-translate-y-1 duration-200">
        <div class="text-3xl">${s.icon}</div>
        <h3 class="font-display font-bold text-lg text-white group-hover:text-brand transition">${s.title}</h3>
        <p class="text-xs text-gray-400 leading-relaxed">${s.desc}</p>
      </div>`).join('')}
    </div>
  </section>

  <!-- Client Testimonials & Social Proof -->
  <section class="max-w-5xl mx-auto px-4 sm:px-6 py-16 relative z-10 space-y-10 border-t border-white/10">
    <div class="text-center space-y-2">
      <span class="text-brand text-xs font-mono uppercase tracking-widest font-bold">Verified Feedback</span>
      <h2 class="text-2xl sm:text-4xl font-display font-extrabold text-white">What Our Clients Say</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      ${config.reviews.map((r) => `
      <div class="bg-cardBg/80 border border-white/10 rounded-2xl p-6 space-y-3">
        <div class="flex text-amber-400 text-sm">★★★★★</div>
        <p class="text-xs sm:text-sm text-gray-300 italic leading-relaxed">"${r.comment}"</p>
        <div class="text-xs font-bold text-white">— ${r.name} (${city})</div>
      </div>`).join('')}
    </div>
  </section>

  <!-- Consultation & Booking Form -->
  <section class="max-w-3xl mx-auto px-4 sm:px-6 py-16 relative z-10">
    <div class="bg-cardBg/95 border border-brand/30 rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-2xl backdrop-blur-2xl">
      <div class="space-y-2">
        <span class="text-brand text-xs font-mono uppercase tracking-widest font-bold">Instant Inquiry</span>
        <h2 class="text-2xl sm:text-4xl font-display font-extrabold text-white">Connect with ${businessName}</h2>
        <p class="text-xs text-gray-300">Leave your details and we will get back to you within 30 minutes on WhatsApp.</p>
      </div>

      <form onsubmit="handleInquiry(event)" class="space-y-3.5 text-left max-w-md mx-auto">
        <div>
          <label class="block text-[11px] font-mono uppercase text-gray-400 mb-1">Your Full Name</label>
          <input type="text" id="inqName" required placeholder="John Doe" class="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand" />
        </div>
        <div>
          <label class="block text-[11px] font-mono uppercase text-gray-400 mb-1">WhatsApp / Phone Number</label>
          <input type="tel" id="inqPhone" required placeholder="+91 98765 43210" class="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand" />
        </div>
        <div>
          <label class="block text-[11px] font-mono uppercase text-gray-400 mb-1">Service Required / Note</label>
          <textarea id="inqMessage" rows="2" placeholder="Tell us what you are looking for..." class="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand"></textarea>
        </div>
        <button type="submit" class="w-full py-3 rounded-xl bg-brand text-obsidian font-extrabold text-xs uppercase tracking-wider hover:bg-brand/90 transition shadow-lg">
          Submit & Chat on WhatsApp &rarr;
        </button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="max-w-6xl mx-auto px-4 sm:px-6 py-8 border-t border-white/10 text-center text-xs text-gray-400 space-y-2 relative z-10">
    <p>&copy; ${new Date().getFullYear()} ${businessName}. All rights reserved.</p>
    <p class="text-[11px] text-gray-500">${city} • Official Customer Line: +${phone} • Powered by Mowglai High-Speed Engine</p>
  </footer>

  <script>
    function handleInquiry(e) {
      e.preventDefault();
      var name = document.getElementById('inqName').value.trim();
      var userPhone = document.getElementById('inqPhone').value.trim();
      var msg = document.getElementById('inqMessage').value.trim();
      var text = 'Hi ${businessName}! My name is ' + name + ' (' + userPhone + '). ' + (msg ? 'Note: ' + msg : 'I would like to inquire about your services.');
      var waLink = 'https://wa.me/${phone}?text=' + encodeURIComponent(text);
      window.open(waLink, '_blank');
    }
  </script>
</body>
</html>`;
}

