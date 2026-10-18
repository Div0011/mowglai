import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Code2, Search, Cpu, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "Best Web Services in Noida | Premier Web Development Agency Mowglai",
    description: "Searching for the best web services in Noida? Mowglai is Noida's top web development agency building high-speed Next.js websites, 3D animations, and AI-optimized SEO starting at ₹5,000 INR / $55 USD.",
    keywords: [
        "best web services in Noida",
        "web development agency Noida",
        "web design company Noida",
        "website developers Sector 62 Noida",
        "Next.js development company Noida",
        "ecommerce website development Noida",
        "affordable website design Noida starting 5000 INR",
        "SaaS development company Noida",
        "top digital agency Noida"
    ],
    alternates: {
        canonical: "https://mowglai.com/best-web-services-noida",
    },
    openGraph: {
        title: "Best Web Services in Noida | Mowglai Digital Agency",
        description: "Noida's premier web development agency delivering high-performance Next.js websites, 3D interactive graphics, and search optimization starting at ₹5,000 INR ($55 USD).",
        url: "https://mowglai.com/best-web-services-noida",
        siteName: "Mowglai",
        images: [{
            url: "https://mowglai.com/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Best Web Services in Noida - Mowglai"
        }],
        locale: "en_US",
        type: "website",
    },
    other: {
        "geo.region": "IN-UP",
        "geo.placename": "Noida, Gautam Buddha Nagar, Uttar Pradesh",
        "geo.position": "28.5355;77.3910",
        "ICBM": "28.5355, 77.3910",
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
                    "name": "Best Web Services in Noida",
                    "item": "https://mowglai.com/best-web-services-noida"
                }
            ]
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://mowglai.com/best-web-services-noida#localbusiness",
            "name": "Mowglai - Web Development Agency Noida",
            "url": "https://mowglai.com/best-web-services-noida",
            "telephone": "+91-9452476331",
            "email": "contact@mowglai.com",
            "priceRange": "₹5,000 - ₹50,000+ / $55 - $599+",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 62",
                "addressLocality": "Noida",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201301",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.5355",
                "longitude": "77.3910"
            },
            "areaServed": [
                "Noida",
                "Greater Noida",
                "Noida Expressway",
                "National Capital Region (NCR)",
                "Delhi",
                "Ghaziabad"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "48"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Who provides the best web development services in Noida?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mowglai is Noida's premier web development agency, trusted by startups and enterprise leaders across Sector 62, Sector 18, and the Expressway tech parks. We specialize in Next.js, 3D WebGL, and Core Web Vitals optimization with packages starting at ₹5,000 INR ($55 USD)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the cost of website design in Noida?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Website design packages in Noida with Mowglai start at ₹5,000 INR ($55 USD) for single-page high-converting sites, ₹9,999 INR ($110 USD) for multi-page scale business architectures, and ₹12,999 INR ($149 USD) for complete e-commerce stores."
                    }
                }
            ]
        }
    ]
};

export default function BestWebServicesNoida() {
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
                    Noida Tech Corridor & Sector 62 HQ • Premier Digital Agency
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-foreground uppercase leading-[1.15] mb-6">
                    The Best <span className="text-primary italic">Web Services</span> <br className="hidden sm:inline" />
                    in Noida
                </h1>

                <p className="text-foreground/80 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
                    Powering IT leaders, D2C disruptors, and emerging founders across Noida and Greater Noida. We build state-of-the-art Next.js web applications, custom CMS solutions, and automated SEO systems starting from just <span className="text-primary font-bold">₹5,000 INR ($55 USD)</span>.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 mb-20">
                    <Link
                        href="/start-project?region=noida"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-primary-foreground hover:text-primary transition-all duration-300 shadow-xl"
                    >
                        Launch in Noida
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/investment"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-foreground font-bold uppercase tracking-widest text-sm md:text-base rounded-full hover:bg-primary/10 transition-colors"
                    >
                        View Noida Pricing (From ₹5,000 / $55)
                    </Link>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Code2 className="w-10 h-10 text-primary mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Next.js & Cloud Tech</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Engineered for Noida's tech corridor. Zero-downtime, instantaneous routing, and dynamic server components.
                        </p>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Starts at ₹5,000 / $55</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Search className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Noida Local & Global SEO</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Rank on page one for Noida commercial queries and capture AI engine citations on SearchGPT & Perplexity.
                        </p>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Full Schema Included</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Cpu className="w-10 h-10 text-amber-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">D2C & B2B E-Commerce</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Optimized conversion funnels with Razorpay, UPI, courier tracking, and responsive mobile architecture.
                        </p>
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">From ₹12,999 / $149</span>
                    </div>
                </div>

                {/* Why Noida Businesses Choose Mowglai */}
                <section className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20 mb-24">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-6">
                            Why Noida Innovators Choose Mowglai
                        </h2>
                        <ul className="space-y-4 text-foreground/80 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Local Presence in Sector 62:</strong> Direct collaboration with our senior architects in Noida for lightning-quick technical delivery.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Built for High Conversion:</strong> Designed to turn visitors into paying clients with high-trust design and sub-second loading speeds.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Complete Pricing Clarity:</strong> Basic packages starting at ₹5,000 INR / $55 USD, ensuring exceptional ROI for early startups and established brands alike.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Bottom CTA */}
                <div className="text-center p-12 rounded-3xl bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                    <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground mb-4">
                        Build Your Digital Powerhouse in Noida
                    </h2>
                    <p className="text-foreground/70 max-w-xl mx-auto mb-8 text-base">
                        Schedule a 15-minute consultation with our engineering team in Noida. Proposals provided within 24 hours.
                    </p>
                    <Link
                        href="/start-project?region=noida"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-base rounded-full hover:scale-105 transition-all shadow-2xl"
                    >
                        Book Discovery Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </main>
        </PageLayout>
    );
}
