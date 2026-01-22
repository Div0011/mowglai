import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- 1. Luxury Design Tokens ---
const FONTS = {
    editorial: "family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Proza+Libre:wght@400;500",
    tech: "family=Space+Grotesk:wght@300;400;500;600&family=Inter:wght@300;400;500",
    modern: "family=Outfit:wght@300;400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600",
    classic: "family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700",
    minimal: "family=Montserrat:wght@200;300;400;500&family=Lora:ital@0;1",
    bold: "family=Oswald:wght@300;400;500&family=Manrope:wght@400;600;800",
    luxury: "family=Italiana&family=Cinzel:wght@400;600&family=Lato:wght@300;400"
};

const LAYOUTS = { SPLIT: 'split', CENTER: 'center', FULL: 'full', GRID: 'grid', MINIMAL: 'minimal', ASYM: 'asym' };
const THEMES = {
    EMERALD: { primary: '#059669', bg: '#ecfdf5', text: '#064e3b' },
    OCEAN: { primary: '#2563eb', bg: '#eff6ff', text: '#1e3a8a' },
    MIDNIGHT: { primary: '#60a5fa', bg: '#030712', text: '#f1f5f9', mode: 'dark' },
    SUNSET: { primary: '#ea580c', bg: '#fff7ed', text: '#7c2d12' },
    LUXURY: { primary: '#d97706', bg: '#0c0a09', text: '#fafaf9', mode: 'dark' },
    PASTEL: { primary: '#db2777', bg: '#fdf2f8', text: '#831843' },
    EARTH: { primary: '#57534e', bg: '#fafaf9', text: '#292524' },
    NEON: { primary: '#a855f7', bg: '#050505', text: '#ffffff', mode: 'dark' },
    CLEAN: { primary: '#334155', bg: '#ffffff', text: '#0f172a' }
};

// --- DATA: High Prices ---
const allTemplates = {
    healthcare: [
        { id: 'health-1', title: 'MediCare Premium', description: 'A modern, trustworthy design for large hospitals.', image: 'https://placehold.co/1200x800/1e40af/ffffff?text=MediCare+Hero', gallery: [], tags: ['Hospital'], price: '$899', features: ['Online Booking', 'Doctor Profiles', 'Departments'], pages: 12 },
        { id: 'health-2', title: 'Dental Pro', description: 'Clean and bright template specifically for dental clinics.', image: 'https://placehold.co/1200x800/2563eb/ffffff?text=Dental+Hero', gallery: [], tags: ['Dental'], price: '$499', features: ['Smile Gallery', 'Pricing', 'Contact Form'], pages: 5 },
        { id: 'health-3', title: 'TeleHealth Connect', description: 'Digital-first interface for telemedicine platforms.', image: 'https://placehold.co/1200x800/3b82f6/ffffff?text=TeleHealth+App', gallery: [], tags: ['Telemedicine'], price: '$699', features: ['Video Integration', 'User Dashboard', 'Messaging'], pages: 1 },
        { id: 'health-4', title: 'Kids Care', description: 'Playful yet professional design for pediatricians.', image: 'https://placehold.co/1200x800/60a5fa/ffffff?text=Kids+Health', gallery: [], tags: ['Pediatrics'], price: '$599', features: ['Events', 'Parent Portal', 'Gallery'], pages: 8 },
        { id: 'health-5', title: 'LabTech Analytics', description: 'Scientific and data-focused layout for labs.', image: 'https://placehold.co/1200x800/93c5fd/ffffff?text=Lab+Science', gallery: [], tags: ['Lab'], price: '$799', features: ['Results Login', 'Research', 'Staff'], pages: 1 }
    ],
    yoga: [
        { id: 'yoga-1', title: 'Zen Sanctuary', description: 'Peaceful design for yoga studios.', image: 'https://placehold.co/1200x800/be123c/ffffff?text=Zen+Space', gallery: [], tags: ['Yoga'], price: '$399', features: ['Timetable', 'Bios', 'Mindfulness'], pages: 6 },
        { id: 'yoga-2', title: 'Flow State', description: 'Dynamic layout for power yoga.', image: 'https://placehold.co/1200x800/e11d48/ffffff?text=Power+Flow', gallery: [], tags: ['Power'], price: '$449', features: ['Videos', 'Sign Up', 'Blog'], pages: 1 },
        { id: 'yoga-3', title: 'Mindful Retreat', description: 'Elegant design for wellness retreats.', image: 'https://placehold.co/1200x800/f43f5e/ffffff?text=Retreat+Luxury', gallery: [], tags: ['Retreat'], price: '$699', features: ['Booking', 'Itinerary', 'Gallery'], pages: 10 },
        { id: 'yoga-4', title: 'Chakra Balance', description: 'Colorful template for holistic healing.', image: 'https://placehold.co/1200x800/fb7185/ffffff?text=Chakra+Heal', gallery: [], tags: ['Healing'], price: '$349', features: ['Menu', 'About', 'Contact'], pages: 4 },
        { id: 'yoga-5', title: 'Yogi Personal', description: 'Brand template for influencers.', image: 'https://placehold.co/1200x800/fda4af/ffffff?text=Influencer', gallery: [], tags: ['Brand'], price: '$299', features: ['Feed', 'Affiliates', 'Bio'], pages: 1 }
    ],
    school: [
        { id: 'school-1', title: 'Ivy League', description: 'Prestigious layout for universities.', image: 'https://placehold.co/1200x800/b45309/ffffff?text=University+Hall', gallery: [], tags: ['University'], price: '$999', features: ['Catalog', 'Portal', 'Faculty'], pages: 20 },
        { id: 'school-2', title: 'Bright Future', description: 'Colorful design for primary schools.', image: 'https://placehold.co/1200x800/d97706/ffffff?text=Primary+School', gallery: [], tags: ['School'], price: '$499', features: ['Admissions', 'Events', 'Gallery'], pages: 8 },
        { id: 'school-3', title: 'EduTech Pro', description: 'Interface for online learning.', image: 'https://placehold.co/1200x800/f59e0b/ffffff?text=EduTech+LMS', gallery: [], tags: ['Online'], price: '$899', features: ['LMS', 'Video', 'Quizzes'], pages: 15 },
        { id: 'school-4', title: 'Campus Life', description: 'Community template for high schools.', image: 'https://placehold.co/1200x800/fbbf24/ffffff?text=High+School', gallery: [], tags: ['Community'], price: '$599', features: ['Forum', 'Events', 'Clubs'], pages: 6 },
        { id: 'school-5', title: 'Science Lab', description: 'Design for technical institutes.', image: 'https://placehold.co/1200x800/fcd34d/ffffff?text=Tech+Institute', gallery: [], tags: ['Institute'], price: '$699', features: ['Research', 'Labs', 'Staff'], pages: 5 }
    ],
    gym: [
        { id: 'gym-1', title: 'Iron Strong', description: 'Dark design for bodybuilding gyms.', image: 'https://placehold.co/1200x800/047857/ffffff?text=Iron+Gym', gallery: [], tags: ['Gym'], price: '$499', features: ['Plans', 'Trainers', 'Store'], pages: 6 },
        { id: 'gym-2', title: 'Fit Life', description: 'Clean layout for lifestyle gyms.', image: 'https://placehold.co/1200x800/059669/ffffff?text=Fit+Life', gallery: [], tags: ['Lifestyle'], price: '$459', features: ['Classes', 'Nutrition', 'App'], pages: 1 },
        { id: 'gym-3', title: 'CrossFit Box', description: 'Raw design for CrossFit places.', image: 'https://placehold.co/1200x800/10b981/ffffff?text=CrossFit', gallery: [], tags: ['Raw'], price: '$399', features: ['WOD', 'Events', 'Team'], pages: 4 },
        { id: 'gym-4', title: 'Personal Trainer', description: 'Transformation focused personal site.', image: 'https://placehold.co/1200x800/34d399/ffffff?text=Trainer', gallery: [], tags: ['Personal'], price: '$299', features: ['Reviews', 'Pricing', 'Results'], pages: 1 },
        { id: 'gym-5', title: 'Wellness Studio', description: 'Soft design for pilates studios.', image: 'https://placehold.co/1200x800/6ee7b7/ffffff?text=Pilates', gallery: [], tags: ['Pilates'], price: '$599', features: ['Schedule', 'Bios', 'Shop'], pages: 5 }
    ],
    'real-estate': [
        { id: 're-1', title: 'Luxury Living', description: 'High-end property listings.', image: 'https://placehold.co/1200x800/3730a3/ffffff?text=Luxury+Home', gallery: [], tags: ['Real Estate'], price: '$899', features: ['Search', 'Tours', 'Agents'], pages: 10 },
        { id: 're-2', title: 'Urban Loft', description: 'Industrial design for city apartments.', image: 'https://placehold.co/1200x800/4338ca/ffffff?text=Urban+Loft', gallery: [], tags: ['City'], price: '$599', features: ['Gallery', 'Map', 'Contact'], pages: 1 },
        { id: 're-3', title: 'Family Home', description: 'Warm design for agencies.', image: 'https://placehold.co/1200x800/4f46e5/ffffff?text=Agency+Site', gallery: [], tags: ['Agency'], price: '$799', features: ['Grid', 'Mortgage', 'Blog'], pages: 8 },
        { id: 're-4', title: 'Modern Architect', description: 'Portfolio for architects.', image: 'https://placehold.co/1200x800/6366f1/ffffff?text=Arch+Portfolio', gallery: [], tags: ['Architect'], price: '$699', features: ['Projects', 'Services', 'Awards'], pages: 6 },
        { id: 're-5', title: 'Rental Hub', description: 'Interface for rental platforms.', image: 'https://placehold.co/1200x800/818cf8/ffffff?text=Rental+App', gallery: [], tags: ['Platform'], price: '$999', features: ['Dashboard', 'Filters', 'Map'], pages: 12 }
    ],
    restaurant: [
        { id: 'rest-1', title: 'Fine Dining', description: 'Sophisticated restaurant layout.', image: 'https://placehold.co/1200x800/c2410c/ffffff?text=Fine+Dining', gallery: [], tags: ['Luxury'], price: '$699', features: ['Reservations', 'Menu', 'Chef'], pages: 5 },
        { id: 'rest-2', title: 'Urban Cafe', description: 'Trendy cafe design.', image: 'https://placehold.co/1200x800/ea580c/ffffff?text=Cafe+Vibe', gallery: [], tags: ['Cafe'], price: '$399', features: ['Menu', 'Location', 'Social'], pages: 1 },
        { id: 'rest-3', title: 'Burger Joint', description: 'Bold fast food style.', image: 'https://placehold.co/1200x800/f97316/ffffff?text=Burger+Place', gallery: [], tags: ['Fast Food'], price: '$499', features: ['Order', 'Menu', 'Deals'], pages: 4 },
        { id: 'rest-4', title: 'Fresh Greens', description: 'Clean design for salad bars.', image: 'https://placehold.co/1200x800/fb923c/ffffff?text=Salad+Bar', gallery: [], tags: ['Healthy'], price: '$449', features: ['Nutrition', 'Locate', 'Story'], pages: 3 },
        { id: 'rest-5', title: 'Bakery Love', description: 'Pastel design for bakeries.', image: 'https://placehold.co/1200x800/fdba74/ffffff?text=Bakery', gallery: [], tags: ['Bakery'], price: '$499', features: ['Gallery', 'Orders', 'Menu'], pages: 5 }
    ],
    ecommerce: [
        { id: 'ecom-1', title: 'Fashion Forward', description: 'Trendy fashion store.', image: 'https://placehold.co/1200x800/be185d/ffffff?text=Fashion+Shop', gallery: [], tags: ['Fashion'], price: '$999', features: ['Grid', 'Cart', 'Checkout'], pages: 15 },
        { id: 'ecom-2', title: 'Tech Gadgets', description: 'Sleek electronics store.', image: 'https://placehold.co/1200x800/db2777/ffffff?text=Tech+Store', gallery: [], tags: ['Tech'], price: '$899', features: ['Compare', 'Specs', 'Reviews'], pages: 12 },
        { id: 'ecom-3', title: 'Handmade Crafts', description: 'Artistic goods shop.', image: 'https://placehold.co/1200x800/ec4899/ffffff?text=Craft+Shop', gallery: [], tags: ['Art'], price: '$599', features: ['Artist', 'Gallery', 'Shop'], pages: 8 },
        { id: 'ecom-4', title: 'Beauty Bliss', description: 'Cosmetics store.', image: 'https://placehold.co/1200x800/f472b6/ffffff?text=Beauty+Store', gallery: [], tags: ['Beauty'], price: '$799', features: ['Looks', 'Ingredients', 'Shop'], pages: 10 },
        { id: 'ecom-5', title: 'Home Decor', description: 'Interior products shop.', image: 'https://placehold.co/1200x800/f9a8d4/ffffff?text=Home+Decor', gallery: [], tags: ['Decor'], price: '$899', features: ['Views', 'Collections', 'Cart'], pages: 14 }
    ],
    portfolio: [
        { id: 'port-1', title: 'Creative Agency', description: 'Bold agency site.', image: 'https://placehold.co/1200x800/7e22ce/ffffff?text=Creative+Agency', gallery: [], tags: ['Agency'], price: '$699', features: ['Cases', 'Services', 'Contact'], pages: 7 },
        { id: 'port-2', title: 'Freelance Pro', description: 'Personal freelancer site.', image: 'https://placehold.co/1200x800/9333ea/ffffff?text=Freelancer', gallery: [], tags: ['Freelance'], price: '$399', features: ['Resume', 'Portfolio', 'Contact'], pages: 1 },
        { id: 'port-3', title: 'Minimalist', description: 'Simple work focus.', image: 'https://placehold.co/1200x800/a855f7/ffffff?text=Minimal+Port', gallery: [], tags: ['Minimal'], price: '$299', features: ['Gallery', 'About', 'Contact'], pages: 3 },
        { id: 'port-4', title: 'Photographer', description: 'Photo gallery heavy.', image: 'https://placehold.co/1200x800/c084fc/ffffff?text=Photo+Gallery', gallery: [], tags: ['Photo'], price: '$499', features: ['Masonry', 'Albums', 'Booking'], pages: 6 },
        { id: 'port-5', title: 'Developer', description: 'Code focused portfolio.', image: 'https://placehold.co/1200x800/d8b4fe/ffffff?text=Dev+Profile', gallery: [], tags: ['Dev'], price: '$349', features: ['Snippets', 'Github', 'Projects'], pages: 1 }
    ]
};

// --- CONFIG ---
const TEMPLATE_CONFIG = {
    // HEALTH
    'health-1': { layout: LAYOUTS.FULL, font: FONTS.luxury, theme: THEMES.OCEAN, label: "Trustworthy Hospital" },
    'health-2': { layout: LAYOUTS.SPLIT, font: FONTS.editorial, theme: THEMES.CLEAN, label: "Dental Clinic" },
    'health-3': { layout: LAYOUTS.ASYM, font: FONTS.tech, theme: THEMES.EMERALD, label: "Telehealth App" },
    'health-4': { layout: LAYOUTS.GRID, font: FONTS.minimal, theme: THEMES.PASTEL, label: "Kids Care" },
    'health-5': { layout: LAYOUTS.CENTER, font: FONTS.tech, theme: THEMES.MIDNIGHT, label: "Lab Analytics" },
    // YOGA
    'yoga-1': { layout: LAYOUTS.MINIMAL, font: FONTS.editorial, theme: THEMES.EARTH, label: "Zen Studio" },
    'yoga-2': { layout: LAYOUTS.SPLIT, font: FONTS.bold, theme: THEMES.SUNSET, label: "Power Yoga" },
    'yoga-3': { layout: LAYOUTS.FULL, font: FONTS.luxury, theme: THEMES.PASTEL, label: "Wellness Retreat" },
    'yoga-4': { layout: LAYOUTS.CENTER, font: FONTS.modern, theme: THEMES.CLEAN, label: "Chakra Healing" },
    'yoga-5': { layout: LAYOUTS.GRID, font: FONTS.minimal, theme: THEMES.NEON, label: "Influencer Brand" },
    // SCHOOL
    'school-1': { layout: LAYOUTS.FULL, font: FONTS.luxury, theme: THEMES.EARTH, label: "Ivy University" },
    'school-2': { layout: LAYOUTS.GRID, font: FONTS.modern, theme: THEMES.SUNSET, label: "Primary School" },
    'school-3': { layout: LAYOUTS.ASYM, font: FONTS.tech, theme: THEMES.OCEAN, label: "EdTech Platform" },
    'school-4': { layout: LAYOUTS.CENTER, font: FONTS.bold, theme: THEMES.PASTEL, label: "High School" },
    'school-5': { layout: LAYOUTS.SPLIT, font: FONTS.tech, theme: THEMES.EMERALD, label: "Science Institute" },
    // GYM
    'gym-1': { layout: LAYOUTS.CENTER, font: FONTS.bold, theme: THEMES.LUXURY, label: "Bodybuilding Gym" },
    'gym-2': { layout: LAYOUTS.SPLIT, font: FONTS.modern, theme: THEMES.CLEAN, label: "Lifestyle Fitness" },
    'gym-3': { layout: LAYOUTS.ASYM, font: FONTS.bold, theme: THEMES.MIDNIGHT, label: "CrossFit Box" },
    'gym-4': { layout: LAYOUTS.MINIMAL, font: FONTS.tech, theme: THEMES.NEON, label: "Personal Trainer" },
    'gym-5': { layout: LAYOUTS.GRID, font: FONTS.editorial, theme: THEMES.PASTEL, label: "Pilates Studio" },
    // RE
    're-1': { layout: LAYOUTS.FULL, font: FONTS.luxury, theme: THEMES.LUXURY, label: "Luxury Estate" },
    're-2': { layout: LAYOUTS.SPLIT, font: FONTS.modern, theme: THEMES.MIDNIGHT, label: "Urban Loft" },
    're-3': { layout: LAYOUTS.GRID, font: FONTS.classic, theme: THEMES.EARTH, label: "Family Homes" },
    're-4': { layout: LAYOUTS.MINIMAL, font: FONTS.editorial, theme: THEMES.CLEAN, label: "Modern Architect" },
    're-5': { layout: LAYOUTS.ASYM, font: FONTS.tech, theme: THEMES.OCEAN, label: "Rental Platform" },
    // REST
    'rest-1': { layout: LAYOUTS.FULL, font: FONTS.luxury, theme: THEMES.LUXURY, label: "Fine Dining" },
    'rest-2': { layout: LAYOUTS.SPLIT, font: FONTS.bold, theme: THEMES.EARTH, label: "Urban Cafe" },
    'rest-3': { layout: LAYOUTS.GRID, font: FONTS.bold, theme: THEMES.SUNSET, label: "Burger Joint" },
    'rest-4': { layout: LAYOUTS.MINIMAL, font: FONTS.modern, theme: THEMES.EMERALD, label: "Salad Bar" },
    'rest-5': { layout: LAYOUTS.CENTER, font: FONTS.classic, theme: THEMES.PASTEL, label: "Bakery" },
    // ECOM
    'ecom-1': { layout: LAYOUTS.FULL, font: FONTS.luxury, theme: THEMES.NEON, label: "Fashion Store" },
    'ecom-2': { layout: LAYOUTS.ASYM, font: FONTS.tech, theme: THEMES.MIDNIGHT, label: "Tech Shop" },
    'ecom-3': { layout: LAYOUTS.MINIMAL, font: FONTS.editorial, theme: THEMES.EARTH, label: "Craft Shop" },
    'ecom-4': { layout: LAYOUTS.SPLIT, font: FONTS.modern, theme: THEMES.PASTEL, label: "Beauty Store" },
    'ecom-5': { layout: LAYOUTS.GRID, font: FONTS.classic, theme: THEMES.CLEAN, label: "Decor Shop" },
    // PORT
    'port-1': { layout: LAYOUTS.ASYM, font: FONTS.bold, theme: THEMES.NEON, label: "Creative Agency" },
    'port-2': { layout: LAYOUTS.MINIMAL, font: FONTS.tech, theme: THEMES.MIDNIGHT, label: "Freelancer" },
    'port-3': { layout: LAYOUTS.CENTER, font: FONTS.minimal, theme: THEMES.CLEAN, label: "Minimalist" },
    'port-4': { layout: LAYOUTS.GRID, font: FONTS.editorial, theme: THEMES.LUXURY, label: "Photographer" },
    'port-5': { layout: LAYOUTS.SPLIT, font: FONTS.tech, theme: THEMES.OCEAN, label: "Dev Portfolio" }
};

// --- HELPERS ---
const getPriceVal = (s) => parseInt(s.replace('$', ''));
const getTier = (price) => {
    if (price >= 800) return 3; // Ultra Luxury
    if (price >= 500) return 2; // Pro
    return 1; // Standard
};

// --- RENDERERS ---

const renderTemplate = (t, config) => {
    const priceVal = getPriceVal(t.price);
    const tier = getTier(priceVal);

    // TIER 3: ULTRA LUXURY HEADERS
    let extraCss = '';
    let extraJs = '';
    if (tier === 3) {
        extraCss = `
            body { cursor: none; }
            .cursor { position: fixed; width: 20px; height: 20px; border: 1px solid var(--text); border-radius: 50%; pointer-events: none; z-index: 99999; transition: transform 0.1s; transform: translate(-50%, -50%); mix-blend-mode: difference; }
            .cursor.hovered { transform: translate(-50%, -50%) scale(2.5); background: var(--text); }
            
            .loader { position: fixed; inset: 0; background: var(--bg); z-index: 10000; display: flex; align-items: center; justify-content: center; font-family: var(--font-head); font-size: 5rem; animation: slideUp 1s 1.5s forwards; }
            @keyframes slideUp { to { transform: translateY(-100%); } }
            
            h1 { font-size: 8rem; line-height: 0.9; }
            .reveal-text span { display: inline-block; transform: translateY(100%); animation: reveal 0.8s forwards; }
            @keyframes reveal { to { transform: translateY(0); } }
        `;
        extraJs = `
            const cursor = document.createElement('div');
            cursor.classList.add('cursor');
            document.body.appendChild(cursor);
            document.addEventListener('mousemove', e => { 
                cursor.style.left = e.clientX + 'px'; 
                cursor.style.top = e.clientY + 'px'; 
            });
            document.querySelectorAll('a, button').forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
            });
        `;
    }

    // TIER 2: PRO INTERACTIONS
    if (tier === 2) {
        extraCss = `
            .btn { position: relative; overflow: hidden; }
            .btn::before { content:''; position:absolute; top:50%; left:50%; width:0; height:0; background:rgba(255,255,255,0.2); border-radius:50%; transform:translate(-50%, -50%); transition: width 0.6s, height 0.6s; }
            .btn:hover::before { width: 300px; height: 300px; }
            h1 { font-size: 6rem; letter-spacing: -2px; }
        `;
    }

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${t.title} [Tier ${tier}]</title>
    <link href="https://fonts.googleapis.com/css2?${config.font}&display=swap" rel="stylesheet">
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Base Anims
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
            }, { threshold: 0.1 });
            document.querySelectorAll('.animate').forEach(el => observer.observe(el));
            
            // Tier Specific JS
            ${extraJs}
        });
    </script>
    <style>
        :root {
            --primary: ${config.theme.primary};
            --bg: ${config.theme.bg};
            --text: ${config.theme.text};
            --font-head: '${decodeURIComponent(config.font.split('family=')[1].split(':')[0]).replace(/\+/g, ' ')}', serif;
            --font-body: '${decodeURIComponent(config.font.split('family=')[2].split(':')[0]).replace(/\+/g, ' ')}', sans-serif;
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: var(--bg); color: var(--text); font-family: var(--font-body); overflow-x: hidden; scroll-behavior: smooth; }
        
        /* Tier Badge */
        .tier-badge { position: fixed; bottom: 20px; left: 20px; padding: 5px 10px; background: var(--text); color: var(--bg); font-size: 0.7rem; z-index: 1000; opacity: 0.5; }

        /* Global Anims */
        .animate { opacity: 0; transform: translateY(30px); transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .visible { opacity: 1; transform: translateY(0); }

        /* Layout */
        nav { padding: ${tier === 3 ? '60px' : '40px'}; display: flex; justify-content: space-between; align-items: center; position: fixed; width: 100%; top: 0; z-index: 100; color: ${tier === 3 ? 'var(--text)' : 'white'}; mix-blend-mode: exclusion; }
        footer { padding: 100px 60px; border-top: 1px solid rgba(125,125,125,0.2); display: flex; justify-content: space-between; align-items: flex-end; }
        
        .btn { display: inline-block; padding: 18px 36px; background: var(--text); color: var(--bg); text-decoration: none; border-radius: ${tier === 1 ? '50px' : '2px'}; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; }

        /* Tier Specific CSS */
        ${extraCss}
        
        ${getLayoutCSS(config.layout, t, config, tier)}
    </style>
</head>
<body>
    ${tier === 3 ? `<div class="loader">MOWGLAI</div>` : ''}
    <div class="tier-badge">TIER ${tier} • ${t.price}</div>

    <nav class="animate">
        <div style="font-weight: 700; letter-spacing: -1px; font-size: 1.5rem;">MOWGLAI</div>
        <div>${t.pages > 1 ? 'Menu' : 'Overview'}</div>
        <a href="#" class="btn" style="padding: 10px 20px;">Buy</a>
    </nav>

    ${getLayoutHTML(config.layout, t, tier)}

    <!-- Standard Content Section -->
    <section class="animate" style="padding: 150px 60px; max-width: 1400px; margin: 0 auto;">
         <div style="border-top: 1px solid rgba(125,125,125,0.2); padding-top: 40px; display: flex; justify-content: space-between;">
            <div style="max-width: 400px;">
                <h3 style="font-size: 2rem; margin-bottom: 20px;">Tier ${tier} Experience</h3>
                <p style="opacity: 0.7; line-height: 1.6;">${tier === 3 ? 'This is an Ultra-Luxury template designed for industry leaders. It features experimental interactions, custom cursors, and immersive typography.' : (tier === 2 ? 'This is a Pro template with elevated interactions and sophisticated grid layouts.' : 'This is a Standard Premium template, focused on clean usability and conversion.')}</p>
            </div>
            <div>
                 <div style="font-size: 4rem;">${t.price}</div>
                 <div style="opacity: 0.5;">One-time license</div>
            </div>
         </div>
    </section>

    <footer>
        <div>
            <h2 style="font-size: ${tier === 3 ? '6rem' : '3rem'}; margin-bottom: 20px;">${t.title}</h2>
        </div>
        <div>&copy; 2025</div>
    </footer>
</body>
</html>`;
};

// CSS Generators
const getLayoutCSS = (layout, t, c, tier) => {
    return `
        .hero { min-height: 100vh; position: relative; display: flex; align-items: center; padding: 0 60px; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; z-index: -1; }
        .hero-bg img { width: 100%; height: 100%; object-fit: cover; }
        
        ${layout === 'full' ? `
            .hero { justify-content: ${tier === 3 ? 'center' : 'flex-end'}; color: white; text-align: ${tier === 3 ? 'center' : 'left'}; }
            .hero::after { content:''; position: absolute; inset:0; background: rgba(0,0,0,0.3); z-index:-1; }
        ` : ''}

        ${layout === 'center' ? `
             .hero { justify-content: center; text-align: center; flex-direction: column; }
             .hero-img-wrap { width: ${tier === 3 ? '90%' : '70%'}; height: 60vh; overflow: hidden; margin-top: 40px; }
             .hero-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
        ` : ''}
        
         /* ... other layouts simplified for brevity but functional ... */
         ${layout === 'split' ? `
            .hero { padding: 0; }
            .split-l { flex: 1; padding: 80px; display: flex; flex-direction: column; justify-content: center; height: 100vh; }
            .split-r { flex: 1; height: 100vh; background: url('${t.image}') center/cover; }
         ` : ''}
         
         ${layout === 'asym' ? `
             .hero { align-items: flex-end; padding-bottom: 100px; }
             .asym-img { position: absolute; top:0; right:0; width: 60%; height: 80%; object-fit: cover; z-index: -1; }
         ` : ''}
    `;
};

const getLayoutHTML = (layout, t, tier) => {
    const titleHTML = tier === 3
        ? t.title.split(' ').map(w => `<span style="display:inline-block">${w}&nbsp;</span>`).join('')
        : t.title;

    switch (layout) {
        case 'full': return `
            <div class="hero">
                <div class="hero-bg"><img src="${t.image}"></div>
                <div class="animate ${tier === 3 ? 'reveal-text' : ''}">
                    <h1>${titleHTML}</h1>
                </div>
            </div>`;
        case 'center': return `
             <div class="hero">
                <h1 class="animate ${tier === 3 ? 'reveal-text' : ''}">${titleHTML}</h1>
                <div class="hero-img-wrap animate"><img src="${t.image}"></div>
            </div>`;
        case 'split': return `
            <div class="hero">
                <div class="split-l">
                    <h1 class="animate ${tier === 3 ? 'reveal-text' : ''}">${titleHTML}</h1>
                    <p class="animate" style="opacity:0.6; margin-bottom: 40px;">${t.description}</p>
                    <a href="#" class="btn animate">Explore</a>
                </div>
                <div class="split-r"></div>
            </div>`;
        case 'asym': return `
            <div class="hero">
                 <img src="${t.image}" class="asym-img">
                 <h1 class="animate ${tier === 3 ? 'reveal-text' : ''}" style="mix-blend-mode: difference; color: white;">${titleHTML}</h1>
            </div>`;
        default: return `<div class="hero"><h1>${t.title}</h1><img src="${t.image}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:-1; opacity:0.5;"></div>`;
    }
}

// --- EXECUTE ---
const previewDir = path.join(__dirname, 'public', 'previews');
if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir, { recursive: true });

Object.values(allTemplates).flat().forEach(template => {
    // Config fallback
    const config = TEMPLATE_CONFIG[template.id] || { layout: LAYOUTS.CENTER, font: FONTS.modern, theme: THEMES.CLEAN };
    const html = renderTemplate(template, config);
    fs.writeFileSync(path.join(previewDir, `${template.id}.html`), html);
    console.log(`Generated ${template.id}.html`);
});

console.log('Successfully completed Tier System generation.');