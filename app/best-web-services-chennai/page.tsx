import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, Code2, Cpu, Sparkles, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "Best Web Services in Chennai | Top Web Development Agency Mowglai",
    description: "Looking for the best web services in Chennai? Mowglai builds ultra-fast Next.js websites, e-commerce platforms, SaaS portals, and AI-driven SEO starting at ₹5,000 INR / $55 USD.",
    keywords: [
        "best web services in Chennai",
        "web development agency Chennai",
        "web design company Chennai",
        "ecommerce website development OMR",
        "Next.js web development Guindy",
        "website design T Nagar",
        "custom web development Anna Nagar",
        "affordable web design starting 5000 INR",
        "top digital agency Chennai"
    ],
    alternates: {
        canonical: "https://mowglai.com/best-web-services-chennai/",
    },
    openGraph: {
        title: "Best Web Services in Chennai | Mowglai Digital Agency",
        description: "Premier web engineering for SaaS enterprises, manufacturers, and startups across Chennai. High-performance Next.js websites starting at ₹5,000 INR ($55 USD).",
        url: "https://mowglai.com/best-web-services-chennai/",
        url: "https://mowglai.com/best-web-services-chennai",
        siteName: "Mowglai",
        images: [{
            url: "https://mowglai.com/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Best Web Services in Chennai - Mowglai"
        }],
        locale: "en_US",
        type: "website",
    },
    other: {
        "geo.region": "IN-TN",
        "geo.placename": "Chennai, OMR, Guindy, T. Nagar, Anna Nagar, Velachery",
        "geo.position": "13.0827;80.2707",
        "ICBM": "13.0827, 80.2707",
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
                    "name": "Best Web Services in Chennai",
                    "item": "https://mowglai.com/best-web-services-chennai"
                }
            ]
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://mowglai.com/best-web-services-chennai#localbusiness",
            "name": "Mowglai - Web Services Chennai",
            "url": "https://mowglai.com/best-web-services-chennai",
            "telephone": "+91-9452476331",
            "email": "contact@mowglai.com",
            "priceRange": "₹5,000 - ₹50,000+ / $55 - $599+",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "OMR IT Corridor / Guindy Business District",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600032",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "13.0827",
                "longitude": "80.2707"
            },
            "areaServed": [
                "Chennai",
                "OMR",
                "Guindy",
                "T. Nagar",
                "Anna Nagar",
                "Velachery",
                "Adyar",
                "Perungudi"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "46"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why do Chennai businesses choose Mowglai for web development?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Chennai's thriving SaaS and industrial ecosystem demands robust performance, clean code architecture, and high Google search visibility. Mowglai delivers modern Next.js solutions starting at ₹5,000 INR / $55 USD."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Mowglai build bilingual (English & Tamil) websites?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We support multi-language internationalization (i18n) for English, Tamil, Hindi, and global locales with automatic geo-routing."
                    }
                }
            ]
        }
    ]
};

export default function BestWebServicesChennai() {
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
                    SaaS Capital of India • Chennai &amp; Industrial Tech
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-foreground uppercase leading-[1.15] mb-6">
                    The Best <span className="text-primary italic">Web Services</span> <br className="hidden sm:inline" />
                    in Chennai
                </h1>

                <p className="text-foreground/80 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
                    Built for SaaS leaders, manufacturing exporters, healthcare systems, and retail brands across OMR, Guindy, and T. Nagar. High-speed Next.js web applications, e-commerce architectures, and AI search visibility starting at <span className="text-primary font-bold">₹5,000 INR ($55 USD)</span>.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-20">
                    <Link
                        href="/start-project?region=chennai"
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
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Enterprise Next.js &amp; Web Apps</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            High-concurrency cloud architecture, sub-second LCP, and responsive design for Chennai corporations and SaaS brands.
                        </p>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Starts at ₹5,000 / $55</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <MapPin className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">GMB &amp; Local 3-Pack in 48h</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Google Business Profile verification, map optimization, and local 3-pack prominence for Chennai retail and service hubs.
                        </p>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Fast 48h Setup</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Cpu className="w-10 h-10 text-amber-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">E-Commerce &amp; AI Automations</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            UPI &amp; Razorpay payment gateways, inventory sync, and WhatsApp AI lead-capture bots that qualify clients 24/7.
                        </p>
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">From ₹12,999 / $149</span>
                    </div>
                </div>

                {/* Local Trust & Why Chennai Leaders Choose Mowglai */}
                <section className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20 mb-24">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-6">
                            Why Chennai Innovators Partner with Mowglai
                        </h2>
                        <ul className="space-y-4 text-foreground/80 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Enterprise Reliability &amp; Performance:</strong> Built with zero dependencies bloat, achieving sub-second paint times and highest security ratings.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Global &amp; Local Visibility:</strong> Structured SEO that drives organic rankings on Google Search as well as AI assistants like ChatGPT and Google Gemini.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Predictable Pricing &amp; Milestone Billing:</strong> Transparent packages starting at ₹5,000 INR ($55 USD) with no hidden licensing or recurring lock-ins.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-8 text-center">
                        Frequently Asked Questions • Chennai
                    </h2>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">Can you integrate regional payment methods for South India?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Yes. We integrate standard UPI (PhonePe, Google Pay, Paytm), Razorpay, Cashfree, credit/debit cards, and international gateways like Stripe.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">How do you manage project milestones and delivery?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Every client receives a private staging link to test live progress at each milestone before final deployment and code handoff.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Bottom Call to Action */}
                <div className="text-center p-12 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                    <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground mb-4">
                        Build Your High-Performance Web Platform
                    </h2>
                    <p className="text-foreground/70 max-w-xl mx-auto mb-8 text-base">
                        Get your custom strategy roadmap within 24 hours. Serving Chennai, Bangalore, Delhi NCR, and international clients.
                    </p>
                    <Link
                        href="/start-project?region=chennai"
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
