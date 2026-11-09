import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, Code2, Cpu, Sparkles, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "Best Web Services in Pune | Top Web Development Agency Mowglai",
    description: "Searching for the best web services in Pune? Mowglai engineers ultra-fast Next.js websites, 3D web applications, SaaS platforms, and AI-optimized SEO starting at ₹5,000 INR / $55 USD.",
    keywords: [
        "best web services in Pune",
        "web development agency Pune",
        "website design Hinjewadi",
        "custom web development Baner",
        "Next.js web development Viman Nagar",
        "web design company Kharadi",
        "affordable web design starting 5000 INR",
        "top digital agency Pune"
    ],
    alternates: {
        canonical: "https://mowglai.com/best-web-services-pune/",
    },
    openGraph: {
        title: "Best Web Services in Pune | Mowglai Digital Agency",
        description: "Modern web engineering for startups, auto-tech enterprises, and IT leaders across Pune. High-performance Next.js websites starting at ₹5,000 INR ($55 USD).",
        url: "https://mowglai.com/best-web-services-pune/",
        siteName: "Mowglai",
        images: [{
            url: "https://mowglai.com/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Best Web Services in Pune - Mowglai"
        }],
        locale: "en_US",
        type: "website",
    },
    other: {
        "geo.region": "IN-MH",
        "geo.placename": "Pune, Hinjewadi, Baner, Viman Nagar, Kharadi, Kothrud",
        "geo.position": "18.5204;73.8567",
        "ICBM": "18.5204, 73.8567",
    }
};

const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://mowglai.com"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Best Web Services in Pune",
                    "item": "https://mowglai.com/best-web-services-pune"
                }
            ]
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://mowglai.com/best-web-services-pune#localbusiness",
            "name": "Mowglai - Web Services Pune",
            "url": "https://mowglai.com/best-web-services-pune",
            "telephone": "+91-9452476331",
            "email": "contact@mowglai.com",
            "priceRange": "₹5,000 - ₹50,000+ / $55 - $599+",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hinjewadi IT Park / Baner Hub",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411057",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.5204",
                "longitude": "73.8567"
            },
            "areaServed": [
                "Pune",
                "Hinjewadi",
                "Baner",
                "Viman Nagar",
                "Kharadi",
                "Kothrud",
                "Aundh",
                "Wakad"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "51"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why do Pune companies choose Mowglai for website development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Pune's fast-moving startup and IT community values speed, modern UI/UX design, and zero technical debt. Mowglai builds ultra-fast Next.js web applications starting at ₹5,000 INR ($55 USD) with comprehensive SEO."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Google My Business (GMB) setup help Pune businesses?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our 48-hour GMB setup places your business on Google Maps and Local 3-Pack searches across Pune, driving qualified local buyer calls directly to your sales team."
                    }
                }
            ]
        }
    ]
};

export default function BestWebServicesPune() {
    return (
        <PageLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
            />

            <main className="min-h-screen bg-transparent relative pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                {/* Hero Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-6">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Oxford of the East • Pune IT &amp; Startup Corridor
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-foreground uppercase leading-[1.15] mb-6">
                    The Best <span className="text-primary italic">Web Services</span> <br className="hidden sm:inline" />
                    in Pune
                </h1>

                <p className="text-foreground/80 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
                    Crafted for tech startups, auto-manufacturing giants, and modern brands across Hinjewadi, Baner, and Viman Nagar. High-speed Next.js platforms, interactive 3D web apps, and AI-optimized SEO starting from <span className="text-primary font-bold">₹5,000 INR ($55 USD)</span>.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-20">
                    <Link
                        href="/start-project?region=pune"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-primary-foreground hover:text-primary transition-all duration-300 shadow-xl"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/investment"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-foreground font-bold uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-primary/10 transition-colors"
                    >
                        Explore Pricing (From ₹5,000 / $55)
                    </Link>
                </div>

                {/* Service Matrix Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Code2 className="w-10 h-10 text-primary mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Next.js &amp; Web Portals</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Edge-rendered Next.js platforms optimized for instant loading, mobile responsiveness, and clean component architecture.
                        </p>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Starts at ₹5,000 / $55</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <MapPin className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">GMB &amp; Local 3-Pack in 48h</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Rapid Google Business Profile verification and local map rankings to capture Pune customers actively searching nearby.
                        </p>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Fast 48h Setup</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Cpu className="w-10 h-10 text-amber-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">AI Search &amp; Automation</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            AIO/GEO optimization for ChatGPT and Google Gemini, paired with 24/7 automated WhatsApp lead capture bots.
                        </p>
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Included in Scale Tiers</span>
                    </div>
                </div>

                {/* Local Trust & Why Pune Leaders Choose Mowglai */}
                <section className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20 mb-24">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-6">
                            Why Pune Leaders Choose Mowglai
                        </h2>
                        <ul className="space-y-4 text-foreground/80 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Proven Speed &amp; Conversion:</strong> High-performance architecture ensuring sub-second paint times and 95+ PageSpeed scores.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Comprehensive Local &amp; National SEO:</strong> Structured schemas and keyword targeting to win top Google search rankings across Maharashtra and nationwide.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Honest Pricing, Zero Surprise Fees:</strong> Clear packages starting at ₹5,000 INR ($55 USD) with milestone escrow and 100% full source code delivery.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-8 text-center">
                        Frequently Asked Questions • Pune
                    </h2>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">Can Mowglai build our e-commerce store with custom courier integration?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Yes. We integrate standard courier APIs (Shiprocket, Delhivery, Bluedart) with real-time tracking, SMS alerts, and automated order management.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">What is the maintenance and support model after launch?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                We provide complete post-launch warranty, documentation, zero-downtime updates, and optional monthly retainer support.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bottom Call to Action */}
                <div className="text-center p-12 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                    <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground mb-4">
                        Ready to Build the Summit of Web Experiences?
                    </h2>
                    <p className="text-foreground/70 max-w-xl mx-auto mb-8 text-base">
                        Get your custom project estimate and architecture plan within 24 hours. Serving Pune, Bangalore, Delhi NCR, and global innovators.
                    </p>
                    <Link
                        href="/start-project?region=pune"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-base rounded-full hover:scale-105 transition-all shadow-2xl"
                    >
                        Schedule Discovery Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </PageLayout>
    );
}
