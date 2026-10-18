"use client";

import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import {
    Download,
    ExternalLink,
    Sparkles,
    CheckCircle2,
    Code2,
    Layers,
    Rocket,
    Shield,
    Zap,
    Cpu,
    Search,
    ShoppingBag,
    Database,
    Palette,
    ArrowRight,
    FileText,
    TrendingUp,
    Clock,
    Globe,
    PhoneCall,
    Mail
} from "lucide-react";

const services = [
    {
        num: "01",
        title: "Bespoke Web Development",
        tag: "Engineering",
        desc: "Ultra-fast, modular web systems engineered on Next.js 16 App Router and React 19. Server Components by default for zero client JS bloat and sub-second TTFB.",
        tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
        icon: Code2
    },
    {
        num: "02",
        title: "SaaS Platforms & MVPs",
        tag: "0-to-1 Product",
        desc: "Turnkey product engineering for startups. Clean MVC architecture, authenticated portals, subscription billing (Stripe/Razorpay), and real-time analytics.",
        tech: ["MVP 0-to-1", "Auth & RBAC", "Stripe Rails", "PostgreSQL"],
        icon: Rocket
    },
    {
        num: "03",
        title: "E-Commerce Architecture",
        tag: "Commerce",
        desc: "High-converting digital storefronts with instant filtering, zero-lag cart management, localized multi-currencies, and 1-click checkout engines.",
        tech: ["Headless Store", "Instant Checkout", "Inventory API", "Stripe/Razorpay"],
        icon: ShoppingBag
    },
    {
        num: "04",
        title: "Search, GEO & AEO",
        tag: "Intelligence",
        desc: "Architecting site data and domain authority so you rank at the top of Google and get cited as the primary answer source by ChatGPT, Perplexity, and Claude.",
        tech: ["Core Web Vitals", "GEO (AI Search)", "JSON-LD Schema", "Voice AEO"],
        icon: Search
    },
    {
        num: "05",
        title: "3D WebGL & Kinetic Motion",
        tag: "Creative Tech",
        desc: "Cinema-grade scrollytelling and spatial depth powered by Three.js, React Three Fiber, GSAP ScrollTrigger, and Lenis smooth momentum scrolling at 60fps.",
        tech: ["Three.js", "GSAP 3", "Lenis Scroll", "Framer Motion"],
        icon: Palette
    },
    {
        num: "06",
        title: "Digital Evolution & Redesign",
        tag: "Modernization",
        desc: "Overhauling legacy, sluggish WordPress or Wix platforms into cutting-edge Next.js machines with 100% SEO preservation, 80% weight reduction, and zero downtime.",
        tech: ["Modernization", "301 SEO Safeguard", "3x Speed Boost"],
        icon: Zap
    },
    {
        num: "07",
        title: "Database & API Architecture",
        tag: "Infrastructure",
        desc: "Resilient data models, row-level security (RLS), sub-millisecond query caches, automated backups, and scalable REST / GraphQL APIs.",
        tech: ["PostgreSQL", "Supabase", "Firebase", "Redis Cache"],
        icon: Database
    }
];

const projects = [
    {
        id: "more-interior",
        title: "More Interior",
        category: "Luxury Interior Design Studio",
        image: "/assets/projects/more-interior.webp",
        link: "https://moreinterior.in/",
        tagline: "High-fashion digital showroom commanding high-ticket spatial design contracts.",
        challenge: "High-resolution 4K spatial photography was causing portfolio sites to choke with 6+ second load times and lost mobile inquiries.",
        solution: "Engineered responsive AVIF/WebP image pipelines (<800ms load), luxury dark editorial aesthetic, and an interactive budget-qualification inquiry funnel.",
        metrics: [
            { label: "Page Load Time", val: "< 800ms" },
            { label: "Consultation Uplift", val: "3.4x" },
            { label: "Mobile Speed Score", val: "98/100" }
        ],
        tech: ["Next.js", "React 19", "Tailwind CSS", "WebP Pipelines", "Framer Motion"],
        featured: true
    },
    {
        id: "clarity-cartel",
        title: "Clarity Cartel",
        category: "Strategic Business Consultancy",
        image: "/assets/projects/clarity-cartel.webp",
        link: "https://clarity-cartel.vercel.app/",
        tagline: "Actionable business advisory platform with executive calendar integrations.",
        challenge: "Needed to convey authoritative executive clarity and eliminate friction in booking strategic advisory sessions.",
        solution: "High-contrast minimalist layout, proprietary framework diagrams, and instantaneous calendar booking.",
        metrics: [
            { label: "Time to First Byte", val: "85ms" },
            { label: "Booking Conversion", val: "+140%" }
        ],
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cal.com API"],
        featured: false
    },
    {
        id: "ielevate",
        title: "iElevate",
        category: "Executive Growth & Corporate Coaching",
        image: "/assets/projects/ielevate.webp",
        link: "https://www.ielevate.in/",
        tagline: "Enterprise-grade digital campus showcasing executive development programs.",
        challenge: "Multi-tier course modules required structured discovery without overwhelming corporate decision-makers.",
        solution: "Dynamic curriculum directory with instant skill-level filtering, corporate inquiry routing, and rich case studies.",
        metrics: [
            { label: "Directory Speed", val: "Instant" },
            { label: "Lead Qualification", val: "2.8x" }
        ],
        tech: ["React", "Next.js", "Tailwind CSS", "Lead Funnel"],
        featured: false
    },
    {
        id: "jayhawk",
        title: "Jayhawk Health",
        category: "Healthcare & Clinical Services",
        image: "/assets/projects/jayhawk.webp",
        link: "https://div0011.github.io/jayhawkk",
        tagline: "Accessible clinical healthcare portal prioritizing emergency routing.",
        challenge: "Required WCAG-compliant high-contrast accessibility and immediate patient appointment scheduling pathways.",
        solution: "Clean healthcare directory, emergency 1-tap call bar, doctor profile explorer, and accessible typography.",
        metrics: [
            { label: "Accessibility Score", val: "100/100" },
            { label: "Mobile Bounce Rate", val: "-45%" }
        ],
        tech: ["HTML5/CSS3", "JavaScript", "Tailwind", "Responsive Design"],
        featured: false
    },
    {
        id: "true-ratings",
        title: "True Ratings",
        category: "Cinematic Media & Entertainment Index",
        image: "/assets/projects/true-ratings.webp",
        link: "https://true-ratings.vercel.app/",
        tagline: "Real-time movie and TV database with instantaneous client-side filter engine.",
        challenge: "Indexing and displaying dense entertainment metadata smoothly across all mobile and desktop devices.",
        solution: "Sub-50ms debounced search engine, dark cinematic UI, detailed poster cards, and community rating meters.",
        metrics: [
            { label: "Search Latency", val: "< 50ms" },
            { label: "User Session Time", val: "+210%" }
        ],
        tech: ["Next.js", "TypeScript", "API Indexing", "Framer Motion"],
        featured: false
    },
    {
        id: "realty-xperts",
        title: "Realty Xperts",
        category: "Real Estate & Commercial Properties",
        image: "/assets/projects/realty-xperts.svg",
        link: "https://div0011.github.io/REALTY-XPERTS/",
        tagline: "Premier real estate platform connecting buyers with prime properties.",
        challenge: "Connecting high-net-worth real estate investors with prime properties through immersive showcases.",
        solution: "Filterable property directory, neighborhood spotlights, virtual preview viewports, and automated broker routing.",
        metrics: [
            { label: "Listing Filter Speed", val: "Instant" },
            { label: "Lead Capture", val: "Active" }
        ],
        tech: ["Web Tech", "Responsive Grid", "SVG Assets", "Lead Router"],
        featured: false
    }
];

const steps = [
    {
        num: "01",
        title: "Discovery & Strategy Blueprint",
        timeline: "Days 1 – 5",
        desc: "Deep immersion into your business model, customer psychology, and competitive moat. Formulating technical specs, SEO keyword maps, and milestone deliverables with clear SLAs.",
        deliverables: ["Technical Architecture Spec", "Customer Journey Map", "SEO Keyword Plan", "Milestone Roadmap"]
    },
    {
        num: "02",
        title: "Information Architecture & UI/UX",
        timeline: "Days 5 – 12",
        desc: "High-fidelity visual design, bespoke typography, dark/light token systems, and interactive clickable prototypes to validate flows before writing code.",
        deliverables: ["Figma Design System", "Interactive Prototype", "Responsive Breakpoints", "Micro-Motion Specs"]
    },
    {
        num: "03",
        title: "High-Performance Engineering",
        timeline: "Days 12 – 24",
        desc: "Building modular Next.js 16 components, strict TypeScript typings, hardware-accelerated GSAP timelines, WebGL canvas shaders, and robust backend integrations.",
        deliverables: ["Full-Stack Codebase", "API & Database Endpoints", "60fps GSAP Timelines", "Auth & Payment Rails"]
    },
    {
        num: "04",
        title: "Performance & QA Audit",
        timeline: "Days 24 – 28",
        desc: "Exhaustive cross-device testing, Core Web Vitals profiling (LCP < 1.2s, CLS 0.00), JSON-LD schema audits, SSL security checks, and cross-browser sign-off.",
        deliverables: ["Lighthouse 95+ Audit", "Core Web Vitals Pass", "A11y Accessibility Check", "Security Vulnerability Scan"]
    },
    {
        num: "05",
        title: "Launch & Mowglai Care",
        timeline: "Launch & Ongoing",
        desc: "Automated CI/CD edge deployment, zero-downtime DNS cutover, 100% intellectual property handover, and continuous monthly speed and feature updates.",
        deliverables: ["Zero-Downtime Deployment", "Full Source Ownership", "Analytics Dashboard", "Monthly Mowglai Care SLA"]
    }
];

const tiers = [
    {
        name: "Turnkey Custom Build",
        tag: "Fixed Scope & Sprint",
        desc: "Complete end-to-end platform design, engineering, and launch from inception to delivery.",
        timeline: "2 to 4 Weeks",
        featured: false,
        bullets: [
            "Full Custom UI/UX & Prototypes",
            "Next.js 16 Full-Stack Codebase",
            "SEO & Schema.org Architecture",
            "30-Day Post-Launch Warranty",
            "100% Intellectual Property Handover"
        ]
    },
    {
        name: "Mowglai Care",
        tag: "Monthly Partnership",
        desc: "Continuous evolution, maintenance, speed optimization, and sprint feature rollouts.",
        timeline: "Flexible Monthly Retainer",
        featured: true,
        bullets: [
            "Dedicated Development Hours",
            "24/7 Uptime & Speed Auditing",
            "Priority Bug Resolution SLA",
            "Ongoing SEO & Content Updates",
            "Direct Slack / WhatsApp Support"
        ]
    },
    {
        name: "Sprint Pod",
        tag: "Staff Augmentation",
        desc: "Elite frontend and 3D creative engineers integrated directly into your existing team.",
        timeline: "Bi-Weekly Sprint Cadence",
        featured: false,
        bullets: [
            "Direct Slack & GitHub Integration",
            "Daily Standups & Linear Sprints",
            "Three.js & Kinetic Specialization",
            "Zero Hiring or Overhead Lag",
            "High-Velocity Feature Shipping"
        ]
    }
];

export default function CatalogueView() {
    const [activeTab, setActiveTab] = useState<"all" | "services" | "work" | "process" | "tiers">("all");
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadPdf = () => {
        setIsDownloading(true);
        const link = document.createElement("a");
        link.href = "/Mowglai_Business_Catalogue.pdf";
        link.download = "Mowglai_Business_Catalogue.pdf";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => setIsDownloading(false), 1200);
    };

    return (
        <PageLayout>
            <div className="min-h-screen text-foreground px-4 sm:px-6 md:px-16 lg:px-24 py-24 md:py-32 relative overflow-hidden font-sans">
                
                {/* Background Ambient Glows */}
                <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

                {/* Hero Header */}
                <div className="max-w-7xl mx-auto relative z-10 pt-8 pb-16 border-b border-white/10">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs sm:text-sm font-display uppercase tracking-[0.25em] mb-6">
                        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                        Official Business Catalogue & Capabilities Manifesto
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tight leading-[1.05] text-foreground mb-6">
                        Built to <span className="text-primary italic">Perform.</span><br />
                        Designed to <span className="text-emerald-400 italic">Amaze.</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-foreground/75 max-w-3xl leading-relaxed mb-10">
                        Where organic imagination meets high-framerate software engineering. Discover the complete spectrum of work we do, our proven client platforms like <strong>More Interior</strong>, and our 5-phase execution engine.
                    </p>

                    {/* Action Bar */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12">
                        <button
                            onClick={handleDownloadPdf}
                            className="relative group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-sm sm:text-base font-bold uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(230,185,61,0.35)] hover:shadow-[0_0_60px_rgba(230,185,61,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                            <span>{isDownloading ? "Downloading PDF..." : "Download PDF Catalogue"}</span>
                        </button>

                        <Link
                            href="/start-project"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:border-primary/50 text-foreground font-display text-sm sm:text-base font-bold uppercase tracking-[0.18em] transition-all duration-300"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="w-4 h-4 text-primary" />
                        </Link>

                        <a
                            href="/Mowglai_Business_Catalogue.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/60 hover:text-primary transition-colors py-2 px-3"
                        >
                            <FileText className="w-4 h-4" />
                            <span>View PDF in Browser</span>
                        </a>
                    </div>

                    {/* Stats Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
                        <div>
                            <div className="text-2xl sm:text-4xl font-display font-black text-primary mb-1">95+</div>
                            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60">Target Lighthouse Score</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-4xl font-display font-black text-emerald-400 mb-1">&lt; 1.2s</div>
                            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60">LCP Speed Target</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-4xl font-display font-black text-primary mb-1">6+</div>
                            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60">Flagship Launches</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-4xl font-display font-black text-emerald-400 mb-1">40+</div>
                            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-foreground/60">Bespoke Blueprints</div>
                        </div>
                    </div>
                </div>

                {/* Filter Navigation Tabs */}
                <div className="max-w-7xl mx-auto py-8 flex flex-wrap items-center gap-2 sm:gap-3 sticky top-20 z-30 bg-background/80 backdrop-blur-xl px-2 -mx-2 rounded-2xl border border-white/5 my-4">
                    {[
                        { id: "all", label: "All Sections" },
                        { id: "services", label: "What We Do" },
                        { id: "work", label: "What We Have Done" },
                        { id: "process", label: "How We Function" },
                        { id: "tiers", label: "Engagement Models" }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as typeof activeTab)}
                            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-display font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                                activeTab === tab.id
                                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(230,185,61,0.3)]"
                                    : "bg-white/[0.03] text-foreground/70 hover:bg-white/[0.08] hover:text-foreground"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* SECTION 1: WHAT WE DO (SERVICES) */}
                {(activeTab === "all" || activeTab === "services") && (
                    <section id="services-section" className="max-w-7xl mx-auto py-16">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <div className="text-xs font-display font-bold uppercase tracking-[0.3em] text-primary mb-2 flex items-center gap-2">
                                    <div className="w-8 h-px bg-primary" />
                                    <span>Capabilities Spectrum</span>
                                </div>
                                <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-foreground">
                                    The Work We <span className="text-primary italic">Do</span>
                                </h2>
                            </div>
                            <p className="text-foreground/75 text-sm sm:text-base max-w-md">
                                From 0-to-1 startup architectures to high-end 3D WebGL experiences and Generative Engine Optimization.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((srv, idx) => {
                                const IconComponent = srv.icon;
                                return (
                                    <div
                                        key={srv.num}
                                        className="group relative p-8 rounded-3xl border border-white/10 bg-secondary/10 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-500 backdrop-blur-xl flex flex-col justify-between"
                                    >
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                                    <IconComponent className="w-6 h-6" />
                                                </div>
                                                <span className="text-3xl font-display font-black text-white/10 group-hover:text-primary/30 transition-colors">
                                                    {srv.num}
                                                </span>
                                            </div>

                                            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary/80 mb-2 block">
                                                {srv.tag}
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-foreground mb-4">
                                                {srv.title}
                                            </h3>
                                            <p className="text-foreground/75 text-sm leading-relaxed mb-6">
                                                {srv.desc}
                                            </p>
                                        </div>

                                        <div className="relative z-10 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                            {srv.tech.map((t, i) => (
                                                <span key={i} className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-foreground/70 font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* SECTION 2: WHAT WE HAVE DONE (PORTFOLIO & CASE STUDIES) */}
                {(activeTab === "all" || activeTab === "work") && (
                    <section id="portfolio-section" className="max-w-7xl mx-auto py-16 border-t border-white/10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <div className="text-xs font-display font-bold uppercase tracking-[0.3em] text-primary mb-2 flex items-center gap-2">
                                    <div className="w-8 h-px bg-primary" />
                                    <span>Track Record & Portfolio</span>
                                </div>
                                <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-foreground">
                                    The Work We Have <span className="text-primary italic">Done</span>
                                </h2>
                            </div>
                            <p className="text-foreground/75 text-sm sm:text-base max-w-md">
                                Real client platforms engineered for speed, authority, and measurable revenue generation.
                            </p>
                        </div>

                        {/* FEATURED CASE STUDY: MORE INTERIOR */}
                        <div className="relative p-6 sm:p-10 rounded-[2.5rem] border border-primary/40 bg-gradient-to-br from-primary/[0.07] via-background to-secondary/20 backdrop-blur-2xl mb-12 overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                {/* Left visual */}
                                <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-black/40 group shadow-2xl">
                                    <NextImage
                                        src="/assets/projects/more-interior.webp"
                                        alt="More Interior Studio Showcase"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                        <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-primary font-display uppercase tracking-widest font-bold">
                                            Featured Case Study
                                        </span>
                                        <a
                                            href="https://moreinterior.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Right details */}
                                <div className="lg:col-span-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                                Interior Design & Living Spaces
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                            <span className="text-xs text-emerald-400 font-mono">Live in Production</span>
                                        </div>

                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase text-foreground mb-4">
                                            More Interior
                                        </h3>

                                        <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                                            More Interior is a luxury interior architecture studio executing bespoke residential and commercial spaces. They required a digital identity that resonated with high-net-worth clients without suffering from image-heavy page bloat.
                                        </p>

                                        {/* Problem vs Solution */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                                <h4 className="text-xs font-bold uppercase text-red-400 mb-1">The Challenge</h4>
                                                <p className="text-xs text-foreground/70 leading-relaxed">
                                                    Heavy 4K spatial photography was causing competitor portfolio sites to take 6+ seconds to load, resulting in lost leads.
                                                </p>
                                            </div>
                                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                                <h4 className="text-xs font-bold uppercase text-emerald-400 mb-1">The Mowglai Solution</h4>
                                                <p className="text-xs text-foreground/70 leading-relaxed">
                                                    Progressive AVIF/WebP image pipeline (&lt;800ms load), luxury dark editorial palette, and a budget-qualified consultation funnel.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-3 gap-3 mb-8">
                                            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-center">
                                                <div className="text-xl sm:text-2xl font-display font-black text-primary">&lt; 800ms</div>
                                                <div className="text-[10px] uppercase tracking-wider text-foreground/60">Load Time</div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                                                <div className="text-xl sm:text-2xl font-display font-black text-emerald-400">3.4x</div>
                                                <div className="text-[10px] uppercase tracking-wider text-foreground/60">Inquiry Lift</div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-center">
                                                <div className="text-xl sm:text-2xl font-display font-black text-foreground">98/100</div>
                                                <div className="text-[10px] uppercase tracking-wider text-foreground/60">Mobile Score</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a
                                            href="https://moreinterior.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-display text-xs sm:text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                                        >
                                            <span>Visit moreinterior.in</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                        <span className="text-xs text-foreground/50 font-mono">Next.js • React 19 • Tailwind</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* OTHER CLIENT PLATFORMS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.filter(p => !p.featured).map((proj) => (
                                <div
                                    key={proj.id}
                                    className="group rounded-3xl border border-white/10 bg-secondary/10 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-500 overflow-hidden flex flex-col justify-between backdrop-blur-xl"
                                >
                                    <div>
                                        <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/5">
                                            <NextImage
                                                src={proj.image}
                                                alt={proj.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-display font-bold uppercase tracking-wider text-primary">
                                                    {proj.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-2xl font-display font-black uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {proj.title}
                                            </h3>
                                            <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed mb-4">
                                                {proj.tagline}
                                            </p>

                                            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                                                {proj.metrics.map((m, idx) => (
                                                    <div key={idx} className="text-center">
                                                        <div className="text-base font-display font-black text-primary">{m.val}</div>
                                                        <div className="text-[9px] uppercase tracking-wider text-foreground/50">{m.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex flex-wrap gap-1.5">
                                            {proj.tech.slice(0, 3).map((t, idx) => (
                                                <span key={idx} className="text-[9px] px-2 py-0.5 rounded bg-white/[0.04] text-foreground/60 font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 40+ TEMPLATES REPOSITORY STRIP */}
                        <div className="mt-12 p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2 block">
                                    Proprietary Codebases
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-foreground mb-2">
                                    40+ Production Template Ecosystem
                                </h3>
                                <p className="text-foreground/75 text-sm max-w-2xl">
                                    Pre-engineered, hand-crafted bespoke templates spanning Healthcare, Education, Fitness, Real Estate, Dining, and Portfolios ready for rapid customization.
                                </p>
                            </div>
                            <Link
                                href="/explore"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/15 hover:border-primary hover:bg-primary/10 text-foreground hover:text-primary font-display text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap"
                            >
                                <span>Explore All 40+ Templates</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>
                )}

                {/* SECTION 3: HOW WE FUNCTION (OPERATING SYSTEM) */}
                {(activeTab === "all" || activeTab === "process") && (
                    <section id="process-section" className="max-w-7xl mx-auto py-16 border-t border-white/10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <div className="text-xs font-display font-bold uppercase tracking-[0.3em] text-primary mb-2 flex items-center gap-2">
                                    <div className="w-8 h-px bg-primary" />
                                    <span>Methodology & Delivery</span>
                                </div>
                                <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-foreground">
                                    How We <span className="text-primary italic">Function</span>
                                </h2>
                            </div>
                            <p className="text-foreground/75 text-sm sm:text-base max-w-md">
                                A streamlined 5-phase execution engine taking your project from strategic blueprint to high-performance live release.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {steps.map((st) => (
                                <div
                                    key={st.num}
                                    className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-secondary/10 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-500 backdrop-blur-xl"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                        {/* Number and title */}
                                        <div className="lg:col-span-4 flex items-center gap-6">
                                            <span className="text-4xl sm:text-6xl font-display font-black text-primary/30 shrink-0">
                                                {st.num}
                                            </span>
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 block mb-1">
                                                    {st.timeline}
                                                </span>
                                                <h3 className="text-xl sm:text-2xl font-display font-black uppercase text-foreground">
                                                    {st.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="lg:col-span-5">
                                            <p className="text-foreground/75 text-sm leading-relaxed">
                                                {st.desc}
                                            </p>
                                        </div>

                                        {/* Deliverables */}
                                        <div className="lg:col-span-3 flex flex-wrap gap-2">
                                            {st.deliverables.map((d, i) => (
                                                <span key={i} className="text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-foreground/80 flex items-center gap-1.5">
                                                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                                    <span>{d}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Guarantee Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
                                <div className="text-primary font-display font-black text-lg uppercase mb-2">Direct Founder Sync</div>
                                <p className="text-xs text-foreground/70">Work directly with senior engineers and architects—no junior agency middlemen.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
                                <div className="text-emerald-400 font-display font-black text-lg uppercase mb-2">100% Code Ownership</div>
                                <p className="text-xs text-foreground/70">Full repository ownership, documentation, and design assets belong to you from day 1.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
                                <div className="text-primary font-display font-black text-lg uppercase mb-2">Performance SLA Guarantee</div>
                                <p className="text-xs text-foreground/70">Free speed remediation if our agreed Core Web Vitals benchmark is not met.</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* SECTION 4: COMMERCIAL MODELS */}
                {(activeTab === "all" || activeTab === "tiers") && (
                    <section id="tiers-section" className="max-w-7xl mx-auto py-16 border-t border-white/10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <div className="text-xs font-display font-bold uppercase tracking-[0.3em] text-primary mb-2 flex items-center gap-2">
                                    <div className="w-8 h-px bg-primary" />
                                    <span>Commercial Collaboration</span>
                                </div>
                                <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-foreground">
                                    Engagement <span className="text-primary italic">Models</span>
                                </h2>
                            </div>
                            <p className="text-foreground/75 text-sm sm:text-base max-w-md">
                                Transparent collaboration tiers tailored to early-stage founders and scaling enterprises.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {tiers.map((t, idx) => (
                                <div
                                    key={idx}
                                    className={`relative p-8 rounded-3xl border backdrop-blur-xl flex flex-col justify-between transition-all duration-500 ${
                                        t.featured
                                            ? "border-primary/60 bg-gradient-to-b from-primary/10 via-background to-secondary/20 shadow-[0_0_50px_rgba(230,185,61,0.15)]"
                                            : "border-white/10 bg-secondary/10 hover:border-primary/30"
                                    }`}
                                >
                                    {t.featured && (
                                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-display font-bold uppercase tracking-widest shadow-md">
                                            Most Popular Partnership
                                        </div>
                                    )}

                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-2 block">
                                            {t.tag}
                                        </span>
                                        <h3 className="text-2xl font-display font-black uppercase text-foreground mb-3">
                                            {t.name}
                                        </h3>
                                        <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed mb-6">
                                            {t.desc}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            {t.bullets.map((b, i) => (
                                                <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/80">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                                    <span>{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                                        <div className="text-xs font-mono text-primary font-bold">
                                            {t.timeline}
                                        </div>
                                        <Link
                                            href="/start-project"
                                            className={`w-full py-3.5 rounded-full font-display text-xs font-bold uppercase tracking-[0.18em] text-center transition-all ${
                                                t.featured
                                                    ? "bg-primary text-primary-foreground hover:scale-105"
                                                    : "bg-white/5 border border-white/10 hover:border-primary text-foreground hover:text-primary"
                                            }`}
                                        >
                                            Inquire About This Tier
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* BOTTOM CALL TO ACTION */}
                <div className="max-w-7xl mx-auto mt-16 p-8 sm:p-14 rounded-[2.5rem] border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-secondary/30 backdrop-blur-2xl text-center relative overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

                    <h2 className="text-3xl sm:text-5xl font-display font-black uppercase text-foreground mb-4 relative z-10">
                        Ready to Build Something <span className="text-primary italic">Extraordinary?</span>
                    </h2>
                    <p className="text-foreground/75 text-sm sm:text-base max-w-xl mx-auto mb-8 relative z-10">
                        Book a 30-minute discovery call with our technical leads. We'll audit your existing platform, review your roadmap, and deliver a tailored proposal in 48 hours.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-4 relative z-10">
                        <Link
                            href="/start-project"
                            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-display text-sm font-bold uppercase tracking-[0.2em] shadow-lg hover:scale-105 transition-transform"
                        >
                            Start a Project Now
                        </Link>
                        <button
                            onClick={handleDownloadPdf}
                            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-foreground font-display text-sm font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2"
                        >
                            <Download className="w-4 h-4 text-primary" />
                            <span>Download PDF Catalogue</span>
                        </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 text-xs text-foreground/50 font-mono flex flex-wrap justify-center gap-6 relative z-10">
                        <span>Email: info@mowglai.com</span>
                        <span>•</span>
                        <span>Location: Noida, Uttar Pradesh, India</span>
                        <span>•</span>
                        <span>Global Delivery (US, UK, UAE, EU, India)</span>
                    </div>
                </div>

            </div>
        </PageLayout>
    );
}
