import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Sparkles, Smartphone, Code2, Search, Cpu } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
    title: "Best Web Services in NCR & Delhi | Top Web Development Agency Mowglai",
    description: "Looking for the best web services in NCR and Delhi? Mowglai builds ultra-fast Next.js websites, 3D web applications, SaaS MVPs, and AI-optimized SEO starting at ₹5,000 INR / $55 USD.",
    keywords: [
        "best web services in NCR",
        "best web services in Delhi",
        "web development agency Delhi NCR",
        "website design Delhi",
        "Next.js web development Delhi",
        "custom website development NCR",
        "affordable web design starting 5000 INR",
        "SaaS MVP developers Gurgaon Delhi",
        "top digital agency Delhi"
    ],
    alternates: {
        canonical: "https://mowglai.com/best-web-services-delhi-ncr",
    },
    openGraph: {
        title: "Best Web Services in NCR & Delhi | Mowglai Digital Agency",
        description: "Award-winning web development & digital services for startups and businesses across Delhi NCR. High-performance Next.js websites starting at ₹5,000 INR ($55 USD).",
        url: "https://mowglai.com/best-web-services-delhi-ncr",
        siteName: "Mowglai",
        images: [{
            url: "https://mowglai.com/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Best Web Services in NCR & Delhi - Mowglai"
        }],
        locale: "en_US",
        type: "website",
    },
    other: {
        "geo.region": "IN-DL",
        "geo.placename": "Delhi, New Delhi, National Capital Region (NCR)",
        "geo.position": "28.6139;77.2090",
        "ICBM": "28.6139, 77.2090",
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
                    "name": "Best Web Services in Delhi NCR",
                    "item": "https://mowglai.com/best-web-services-delhi-ncr"
                }
            ]
        },
        {
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://mowglai.com/best-web-services-delhi-ncr#localbusiness",
            "name": "Mowglai - Web Services Delhi NCR",
            "url": "https://mowglai.com/best-web-services-delhi-ncr",
            "telephone": "+91-9452476331",
            "email": "contact@mowglai.com",
            "priceRange": "₹5,000 - ₹50,000+ / $55 - $599+",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Connaught Place / Central Hub",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6139",
                "longitude": "77.2090"
            },
            "areaServed": [
                "Delhi",
                "New Delhi",
                "National Capital Region (NCR)",
                "Gurugram",
                "Faridabad",
                "Ghaziabad",
                "Noida"
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "52"
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Why is Mowglai rated the best web service provider in Delhi NCR?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Mowglai delivers world-class engineering, sub-second load times, 3D interactive graphics, and search dominance for businesses in Delhi NCR. With transparent pricing starting at ₹5,000 INR / $55 USD, businesses receive Silicon Valley caliber code with local collaboration."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the cost of building a business website in Delhi NCR?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "At Mowglai, website packages in Delhi NCR start from ₹5,000 INR ($55 USD) for essential single-page platforms, ₹9,999 INR ($110 USD) for multi-page scale architectures, and ₹12,999 INR ($149 USD) for full-scale e-commerce stores."
                    }
                }
            ]
        }
    ]
};

export default function BestWebServicesDelhiNCR() {
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
                    Top-Rated Digital Agency • Delhi & National Capital Region (NCR)
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-foreground uppercase leading-[1.15] mb-6">
                    The Best <span className="text-primary italic">Web Services</span> <br className="hidden sm:inline" />
                    in NCR & Delhi
                </h1>

                <p className="text-foreground/80 text-lg md:text-2xl font-light max-w-3xl leading-relaxed mb-10">
                    Engineered for high-growth startups, established brands, and innovators across Delhi, Gurgaon, and the NCR. We craft high-speed Next.js platforms, 3D web applications, and AI-optimized SEO architectures starting from just <span className="text-primary font-bold">₹5,000 INR ($55 USD)</span>.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-20">
                    <Link
                        href="/start-project?region=delhi-ncr"
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
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Custom Next.js & React</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Sub-second LCP performance, zero hydration lag, and dynamic edge-rendering designed for Delhi NCR enterprises.
                        </p>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Starts at ₹5,000 / $55</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Search className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">Local SEO & Google AIO</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Dominate local Google queries and AI answer engines across Delhi, Noida, Gurgaon, and global markets.
                        </p>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Included in All Tiers</span>
                    </div>

                    <div className="p-8 rounded-2xl bg-white/[0.02] border border-primary/20 backdrop-blur-md">
                        <Cpu className="w-10 h-10 text-amber-400 mb-6" />
                        <h3 className="text-xl font-display font-bold uppercase text-foreground mb-3">E-Commerce & SaaS MVPs</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                            Seamless UPI, Razorpay, Stripe, inventory sync, and multi-tenant cloud architecture to scale fast.
                        </p>
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">From ₹12,999 / $149</span>
                    </div>
                </div>

                {/* Local Trust & Why NCR Leaders Choose Mowglai */}
                <section className="p-8 md:p-12 rounded-3xl bg-primary/5 border border-primary/20 mb-24">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-6">
                            Why Delhi NCR Innovators Choose Mowglai
                        </h2>
                        <ul className="space-y-4 text-foreground/80 text-base md:text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Unbeatable Speed & Core Web Vitals:</strong> We deliver sub-second response times, Google 95+ PageSpeed scores, and conversion-engineered user journeys.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Hyper-Targeted NCR Visibility:</strong> We embed localized JSON-LD schemas and semantic keywords so your brand appears first when clients search for web services in Delhi NCR.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                <span><strong>Crystal Clear Pricing:</strong> No surprise fees or hidden billings. Starting at ₹5,000 INR ($55 USD) with milestone escrow and 100% source code ownership.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-24">
                    <h2 className="text-2xl md:text-4xl font-display font-bold uppercase text-foreground mb-8 text-center">
                        Frequently Asked Questions • Delhi NCR
                    </h2>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">How fast can Mowglai deliver a website in Delhi NCR?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Starter and single-page platforms are typically built and deployed within 5 to 10 days. Complex multi-page platforms and custom SaaS MVPs take 2 to 4 weeks.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-primary/10">
                            <h3 className="text-lg font-bold text-foreground mb-2">Do you provide in-person meetings in Delhi NCR?</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Yes. Our leadership and technical leads frequently coordinate in-person strategy sessions across Delhi, Noida, and Gurgaon, alongside direct real-time Slack/Discord channels.
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
                        Get your tailored roadmap and live milestone demo within 24 hours. Serving Delhi, Noida, Kanpur, and global leaders.
                    </p>
                    <Link
                        href="/start-project?region=delhi-ncr"
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
