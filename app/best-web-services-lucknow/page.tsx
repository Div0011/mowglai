import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, Code2, Cpu, Sparkles, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "Best Web Services in Lucknow | Top Web Development Agency Mowglai",
    description: "Looking for the best web services in Lucknow? Mowglai builds ultra-fast business websites, e-commerce stores, GMB setups in 48h, and AI-optimized SEO starting at ₹5,000 INR / $55 USD.",
    keywords: [
        "best web services in Lucknow",
        "web development agency Lucknow",
        "website design company Hazratganj",
        "web design Gomti Nagar",
        "affordable web design Lucknow 5000 INR",
        "Next.js web development Lucknow",
        "Google My Business setup Lucknow",
        "top digital agency Lucknow"
    ],
    alternates: {
        canonical: "https://mowglai.com/best-web-services-lucknow/",
    },
    openGraph: {
        title: "Best Web Services in Lucknow | Mowglai Digital Agency",
        description: "Premier digital agency delivering modern websites and 48-hour GMB setups across Lucknow. High-performance websites starting at ₹5,000 INR ($55 USD).",
        url: "https://mowglai.com/best-web-services-lucknow/",
        siteName: "Mowglai",
        images: [{
            url: "https://mowglai.com/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Best Web Services in Lucknow - Mowglai"
        }],
        locale: "en_US",
        type: "website",
    },
    other: {
        "geo.region": "IN-UP",
        "geo.placename": "Lucknow, Hazratganj, Gomti Nagar, Aliganj, Indira Nagar, Vibhuti Khand",
        "geo.position": "26.8467;80.9462",
        "ICBM": "26.8467, 80.9462",
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
                    "name": "Best Web Services in Lucknow",
                    "item": "https://mowglai.com/best-web-services-lucknow"
                }
            ]
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://mowglai.com/best-web-services-lucknow#localbusiness",
            "name": "Mowglai - Web Services Lucknow",
            "url": "https://mowglai.com/best-web-services-lucknow",
            "telephone": "+91-9452476331",
            "email": "contact@mowglai.com",
            "priceRange": "₹5,000 - ₹50,000+ / $55 - $599+",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gomti Nagar Business Hub / Hazratganj",
                "addressLocality": "Lucknow",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "226010",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.8467",
                "longitude": "80.9462"
            },
            "areaServed": [
                "Lucknow",
                "Hazratganj",
                "Gomti Nagar",
                "Aliganj",
                "Indira Nagar",
                "Mahanagar",
                "Vibhuti Khand",
                "Ashiyana"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "49"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the starting price for a website in Lucknow with Mowglai?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our essential business website package starts at just ₹5,000 INR ($55 USD), complete with responsive mobile design, fast loading speeds, contact form, and Google SEO integration."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does the 48-Hour Google My Business (GMB) setup work in Lucknow?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We handle complete Google Business Profile setup, category optimization, address verification guidance, and keyword mapping so your shop or clinic appears at the top of Google Maps searches in Lucknow."
                    }
                }
            ]
        }
    ]
};

export default function BestWebServicesLucknow() {
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
                    City of Nawabs • Lucknow Business &amp; Retail Growth
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-foreground uppercase leading-[1.15] mb-6">
                    The Best <span className="text-primary italic">Web Services</span> <br className="hidden sm:inline" />
                    in Lucknow
                </h1>

                <p className="text-foreground/80 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
                    Engineered for doctors, clinics, retail showrooms, real estate developers, and startups across Gomti Nagar, Hazratganj, and Aliganj. High-speed websites and complete Google Maps setup starting from <span className="text-primary font-bold">₹5,000 INR ($55 USD)</span>.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-20">
                    <Link
                        href="/start-project?region=lucknow"
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
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Business Websites</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            High-speed, beautiful mobile-first websites designed to turn local visitors into paying customers.
                        </p>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Starts at ₹5,000 / $55</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <MapPin className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">GMB &amp; Local Maps in 48h</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Complete Google My Business profile verification and map optimization to drive direct phone calls and visits.
                        </p>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Fast 48h Setup</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Cpu className="w-10 h-10 text-amber-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">WhatsApp Lead Automation</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Instant 1-click WhatsApp customer chat and AI lead qualification bots that work around the clock.
                        </p>
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Included in All Tiers</span>
                    </div>
                </div>

                {/* Local Trust & Why Lucknow Leaders Choose Mowglai */}
                <section className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20 mb-24">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-6">
                            Why Lucknow Businesses Trust Mowglai
                        </h2>
                        <ul className="space-y-4 text-foreground/80 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Instant Local Calls &amp; Walk-ins:</strong> Our Google My Business setups place your business in front of nearby customers looking for your exact services.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Fast Delivery in 5 to 7 Days:</strong> No endless delays. Your website is built, verified, and live on your custom domain in days.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Affordable &amp; Honest:</strong> Starting at just ₹5,000 INR ($55 USD) with zero hidden annual charges and 100% full source ownership.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-8 text-center">
                        Frequently Asked Questions • Lucknow
                    </h2>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">Can I update text, images, and prices on my website later?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Yes. We structure every site for simple updates, or you can use our instant WhatsApp support line for quick changes anytime.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">Do you provide domain name and hosting setup?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Yes. We guide you through selecting the ideal .com / .in domain and configure secure, lightning-fast SSL hosting.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bottom Call to Action */}
                <div className="text-center p-12 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                    <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground mb-4">
                        Grow Your Business in Lucknow Today
                    </h2>
                    <p className="text-foreground/70 max-w-xl mx-auto mb-8 text-base">
                        Schedule your free consultation call and receive your project roadmap within 24 hours. Serving Lucknow, Kanpur, and NCR.
                    </p>
                    <Link
                        href="/start-project?region=lucknow"
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
