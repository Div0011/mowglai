import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, Code2, Cpu, Sparkles, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "Best Web Services in Bangalore | Top Web Development Agency Mowglai",
    description: "Looking for the best web services in Bangalore (Bengaluru)? Mowglai engineers ultra-fast Next.js platforms, SaaS MVPs, 3D web applications, and AI-optimized SEO starting at ₹5,000 INR / $55 USD.",
    keywords: [
        "best web services in Bangalore",
        "best web services in Bengaluru",
        "web development agency Bangalore",
        "SaaS website developers Koramangala",
        "Next.js web development Indiranagar",
        "startup website design HSR Layout",
        "custom web development Whitefield",
        "affordable web design starting 5000 INR",
        "top digital agency Bangalore"
    ],
    alternates: {
        canonical: "https://mowglai.com/best-web-services-bangalore",
    },
    openGraph: {
        title: "Best Web Services in Bangalore | Mowglai Digital Agency",
        description: "Silicon Valley-caliber web development for startups and enterprises across Bengaluru. High-performance Next.js websites starting at ₹5,000 INR ($55 USD).",
        url: "https://mowglai.com/best-web-services-bangalore",
        siteName: "Mowglai",
        images: [{
            url: "https://mowglai.com/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Best Web Services in Bangalore - Mowglai"
        }],
        locale: "en_US",
        type: "website",
    },
    other: {
        "geo.region": "IN-KA",
        "geo.placename": "Bengaluru, Bangalore, Koramangala, Indiranagar, HSR Layout, Whitefield",
        "geo.position": "12.9716;77.5946",
        "ICBM": "12.9716, 77.5946",
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
                    "name": "Best Web Services in Bangalore",
                    "item": "https://mowglai.com/best-web-services-bangalore"
                }
            ]
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://mowglai.com/best-web-services-bangalore#localbusiness",
            "name": "Mowglai - Web Services Bangalore",
            "url": "https://mowglai.com/best-web-services-bangalore",
            "telephone": "+91-9452476331",
            "email": "contact@mowglai.com",
            "priceRange": "₹5,000 - ₹50,000+ / $55 - $599+",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Koramangala 4th Block / Indiranagar Tech Hub",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560034",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9716",
                "longitude": "77.5946"
            },
            "areaServed": [
                "Bengaluru",
                "Bangalore",
                "Koramangala",
                "Indiranagar",
                "HSR Layout",
                "Whitefield",
                "Electronic City",
                "Bellandur"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "58"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why do Bangalore tech startups choose Mowglai for web engineering?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Bangalore founders demand sub-second load times, modern React/Next.js architectures, and AI search visibility. Mowglai provides elite web engineering starting at just ₹5,000 INR / $55 USD, enabling startups to launch fast without burning capital."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How quickly can Mowglai deliver a SaaS MVP or company website in Bengaluru?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Essential startup websites are delivered in 5 to 7 days. Full-featured SaaS MVPs, customer onboarding portals, and custom web applications typically launch within 2 to 3 weeks."
                    }
                }
            ]
        }
    ]
};

export default function BestWebServicesBangalore() {
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
                    India&#39;s Tech Capital • Bengaluru &amp; Startup Hubs
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-foreground uppercase leading-[1.15] mb-6">
                    The Best <span className="text-primary italic">Web Services</span> <br className="hidden sm:inline" />
                    in Bangalore
                </h1>

                <p className="text-foreground/80 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
                    Engineered for high-growth tech startups, D2C innovators, and enterprises across Koramangala, Indiranagar, and HSR Layout. We build ultra-fast Next.js architectures, 3D web apps, and AI-optimized search platforms starting from <span className="text-primary font-bold">₹5,000 INR ($55 USD)</span>.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-20">
                    <Link
                        href="/start-project?region=bangalore"
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
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Next.js &amp; SaaS MVPs</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Sub-second LCP performance, server actions, and cloud scalability tailored for Bangalore startups and founders.
                        </p>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Starts at ₹5,000 / $55</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <MapPin className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">GMB &amp; Local 3-Pack in 48h</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Complete Google My Business profile setup, map rankings, and local search visibility for Bangalore businesses.
                        </p>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Fast 48h Setup</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Cpu className="w-10 h-10 text-amber-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">AI Search &amp; WhatsApp Bots</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Rank your brand in ChatGPT and Google Gemini answers, plus 24/7 automated WhatsApp customer qualification.
                        </p>
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Included in Scale Tiers</span>
                    </div>
                </div>

                {/* Local Trust & Why Bangalore Leaders Choose Mowglai */}
                <section className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20 mb-24">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-6">
                            Why Bengaluru Innovators Choose Mowglai
                        </h2>
                        <ul className="space-y-4 text-foreground/80 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Sub-Second Load Times:</strong> Google Core Web Vitals 95+ verified on real mobile devices to maximize user conversion and reduce bounce rates.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>AI-Ready Search Architecture:</strong> Optimized JSON-LD and semantic content structure so your company is cited as an authority in ChatGPT and Perplexity.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>100% Code Ownership &amp; Transparent Escrow:</strong> Transparent milestone billing with no lock-ins, clean Git repositories, and direct technical collaboration.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-8 text-center">
                        Frequently Asked Questions • Bangalore
                    </h2>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">Can Mowglai build our SaaS landing page and MVP together?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Yes. We specialize in high-converting waitlist/product landing pages integrated with auth, database models, payment gateways, and client onboarding flows.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">How does remote collaboration work with our Bangalore team?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                We operate via modern sprint pipelines: daily async updates via Slack/WhatsApp, staging branch previews, and scheduled video demos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bottom Call to Action */}
                <div className="text-center p-12 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                    <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground mb-4">
                        Ready to Build Your Digital Summit?
                    </h2>
                    <p className="text-foreground/70 max-w-xl mx-auto mb-8 text-base">
                        Get your custom project estimate and architecture plan within 24 hours. Serving Bangalore, Delhi NCR, and global innovators.
                    </p>
                    <Link
                        href="/start-project?region=bangalore"
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
