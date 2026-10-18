import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Code2, Search, Cpu, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "Best Web Services in Kanpur | Top Web Development Agency Mowglai",
    description: "Looking for the best web services in Kanpur? Mowglai delivers modern Next.js websites, e-commerce platforms, 3D web applications, and Google SEO starting at ₹5,000 INR / $55 USD.",
    keywords: [
        "best web services in Kanpur",
        "web development company in Kanpur",
        "website design Kanpur",
        "best website developers Kanpur",
        "ecommerce website development Kanpur",
        "affordable website design Kanpur starting 5000 INR",
        "digital agency Kanpur",
        "software development company Kanpur",
        "top web development agency Kanpur"
    ],
    alternates: {
        canonical: "https://mowglai.com/best-web-services-kanpur",
    },
    openGraph: {
        title: "Best Web Services in Kanpur | Mowglai Digital Agency",
        description: "Transform your business with Kanpur's premier web development agency. High-speed websites, modern e-commerce stores, and local SEO starting at ₹5,000 INR ($55 USD).",
        url: "https://mowglai.com/best-web-services-kanpur",
        siteName: "Mowglai",
        images: [{
            url: "https://mowglai.com/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Best Web Services in Kanpur - Mowglai"
        }],
        locale: "en_US",
        type: "website",
    },
    other: {
        "geo.region": "IN-UP",
        "geo.placename": "Kanpur, Uttar Pradesh",
        "geo.position": "26.4499;80.3319",
        "ICBM": "26.4499, 80.3319",
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
                    "name": "Best Web Services in Kanpur",
                    "item": "https://mowglai.com/best-web-services-kanpur"
                }
            ]
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://mowglai.com/best-web-services-kanpur#localbusiness",
            "name": "Mowglai - Web Development Agency Kanpur",
            "url": "https://mowglai.com/best-web-services-kanpur",
            "telephone": "+91-9452476331",
            "email": "contact@mowglai.com",
            "priceRange": "₹5,000 - ₹50,000+ / $55 - $599+",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Civil Lines / Swaroop Nagar",
                "addressLocality": "Kanpur",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "208001",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.4499",
                "longitude": "80.3319"
            },
            "areaServed": [
                "Kanpur",
                "Civil Lines Kanpur",
                "Swaroop Nagar Kanpur",
                "Kakadeo Kanpur",
                "Uttar Pradesh",
                "National Capital Region (NCR)"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "44"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which company offers the best web services in Kanpur?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mowglai is recognized as the best web services agency in Kanpur, empowering traditional enterprises, manufacturers, medical hubs, and retail brands with high-performance websites built using Next.js and React. Packages begin from ₹5,000 INR ($55 USD)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the price of website development in Kanpur?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mowglai's website development prices in Kanpur start at ₹5,000 INR ($55 USD) for standard single-page sites, ₹9,999 INR ($110 USD) for 5-page advanced corporate sites, and ₹12,999 INR ($149 USD) for online e-commerce stores with UPI/card payments."
                    }
                }
            ]
        }
    ]
};

export default function BestWebServicesKanpur() {
    return (
        <PageLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
            />

            <main className="min-h-screen bg-transparent relative pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm font-bold text-primary uppercase tracking-widest mb-6">
                    <MapPin className="w-4 h-4 text-primary" />
                    Kanpur & Central UP • Elite Digital Engineering
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-foreground uppercase leading-[1.15] mb-6">
                    The Best <span className="text-primary italic">Web Services</span> <br className="hidden sm:inline" />
                    in Kanpur
                </h1>

                <p className="text-foreground/80 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
                    Empowering Kanpur’s industrial leaders, healthcare institutes, retailers, and educational institutions with Silicon Valley caliber web architecture. Fast, elegant, and conversion-focused websites starting from just <span className="text-primary font-bold">₹5,000 INR ($55 USD)</span>.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-20">
                    <Link
                        href="/start-project?region=kanpur"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-primary-foreground hover:text-primary transition-all duration-300 shadow-xl"
                    >
                        Launch in Kanpur
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/investment"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-foreground font-bold uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-primary/10 transition-colors"
                    >
                        Check Kanpur Rates (From ₹5,000 / $55)
                    </Link>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Code2 className="w-10 h-10 text-primary mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Business & Corporate Sites</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Establish commanding market authority for Kanpur manufacturers, clinics, schools, and business houses.
                        </p>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Starts at ₹5,000 / $55</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Search className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Kanpur Local SEO Dominance</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Rank on top of Google maps and searches when local clients look for products and services in Kanpur.
                        </p>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">High-Intent Keywords</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Cpu className="w-10 h-10 text-amber-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">E-Commerce & Digital Stores</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Expand your Kanpur showroom across India with instant UPI checkout, delivery integration, and inventory sync.
                        </p>
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">From ₹12,999 / $149</span>
                    </div>
                </div>

                {/* Why Kanpur Chooses Mowglai */}
                <section className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20 mb-24">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-6">
                            Why Kanpur Businesses Trust Mowglai
                        </h2>
                        <ul className="space-y-4 text-foreground/80 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Personal Attention & Direct Phone Support:</strong> Direct communication with our technical team (+91-9452476331) for fast turnaround and local accountability.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Affordable Excellence Starting at ₹5,000:</strong> High-end technology without inflated agency fees. Complete transparency with no hidden costs.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Mobile-First & Blazing Fast:</strong> Built for smartphones on Airtel, Jio, and WiFi so pages load instantly even on mobile networks.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="text-center p-12 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                    <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground mb-4">
                        Grow Your Kanpur Business Online Today
                    </h2>
                    <p className="text-foreground/70 max-w-xl mx-auto mb-8 text-base">
                        Get your free project consultation and quotation within 24 hours. Let's build your competitive edge.
                    </p>
                    <Link
                        href="/start-project?region=kanpur"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-base rounded-full hover:scale-105 transition-all shadow-2xl"
                    >
                        Schedule Free Consultation
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </PageLayout>
    );
}
