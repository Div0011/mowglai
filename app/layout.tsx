import type { Metadata, Viewport } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "../src/index.css";
import { Providers } from "@/components/Providers";
import { AOSInit } from "@/components/AOSInit";
import { LanguageProvider } from "@/context/LanguageContext";
import ReferralBanner from "@/components/ReferralBanner";
import { ThemeProvider } from "@/components/theme-provider";

// Preload critical fonts for better performance
const boldonse = localFont({
    src: "../public/fonts/Boldonse-Regular.ttf",
    variable: "--font-display",
    display: "swap",
    preload: true,
    fallback: ["system-ui", "sans-serif"],
});

const josefinSans = localFont({
    src: "../public/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf",
    variable: "--font-body",
    display: "swap",
    preload: true,
    fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://mowglai.com"),
    title: {
        default: "Mowglai - Best Web Services & Web Development in NCR, Delhi, Noida & Kanpur",
        template: "%s | Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur"
    },
    description: "Searching for the best web services in NCR, Delhi, Noida, or Kanpur? Mowglai is the premier web development agency delivering high-performance websites, Next.js apps, 3D experiences, and AI-optimized SEO starting at ₹5,000 INR / $55 USD.",
    keywords: [
        "best web services in NCR",
        "best web services in Delhi",
        "best web services in Noida",
        "best web services in Kanpur",
        "web development agency Delhi NCR",
        "web design company Noida",
        "web development services Kanpur",
        "website design Delhi",
        "top web development agency India",
        "affordable website development starting 5000 INR",
        "web development 55 USD",
        "Mowglai",
        "Mowglai web development",
        "Mowglai digital agency",
        "3D website development",
        "React developer India",
        "Next.js development",
        "SEO services Delhi NCR",
        "premium website templates",
        "custom web development",
        "e-commerce development",
        "SaaS MVP development",
        "UI UX design agency Noida",
        "creative agency India"
    ],
    authors: [{ name: "Mowglai" }],
    creator: "Mowglai",
    publisher: "Mowglai",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        url: "https://mowglai.com/",
        title: "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur",
        description: "Premier web development & digital agency for NCR, Delhi, Noida, and Kanpur. High-performance Next.js websites, 3D experiences, and custom web apps starting at ₹5,000 INR / $55 USD.",
        siteName: "Mowglai - Web Development Agency",
        images: [{
            url: "https://mowglai.com/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur"
        }],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur",
        description: "Premier web development and digital agency for Delhi NCR, Noida, and Kanpur. High-performance websites starting at ₹5,000 INR / $55 USD.",
        images: ["https://mowglai.com/mowglai-logo-new.jpg"],
        creator: "@mowglai_in",
    },
    icons: {
        icon: [
            { url: "/mowglai-logo-new.jpg", type: "image/jpeg", sizes: "any" }
        ],
        apple: [
            { url: "/mowglai-logo-new.jpg", sizes: "180x180", type: "image/jpeg" }
        ],
    },
    manifest: "/site.webmanifest",
    alternates: {
        canonical: "https://mowglai.com",
    },
    verification: {
        google: "Evz63X8emo75NARUTxWl7zuik4hstQOoYls6MKipByA",
        other: {
            "razorpay-verification": "YOUR_RAZORPAY_VERIFICATION_KEY",
            "geo.region": "IN-DL;IN-UP",
            "geo.placename": "Delhi, Noida, Kanpur, National Capital Region (NCR)",
            "geo.position": "28.5355;77.3910",
            "ICBM": "28.5355, 77.3910",
        },
    },
    category: "technology",
    classification: "Digital Agency & Web Development",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// Separate viewport export for Next.js optimization
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    // Required for `env(safe-area-inset-*)` to resolve to anything other than
    // 0px on notched devices. Every fixed control in the layout (hamburger,
    // logo, floating CTAs, back-to-top) offsets itself with these insets.
    viewportFit: "cover",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#FDF3E7" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0f0c" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${boldonse.variable} ${josefinSans.variable}`} suppressHydrationWarning>
            <head>
                {/* Resource hints for rapid network delivery */}
                <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

                {/* Google tag (gtag.js) - lazy loaded after critical UX content */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-17452438899"
                    strategy="lazyOnload"
                />
                <Script id="google-tag-aw-17452438899" strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'AW-17452438899');
                    `}
                </Script>
            </head>
            <body className="bg-background text-foreground antialiased min-h-dvh">
                <LanguageProvider>
                    <noscript>
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#0a0a0a',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            zIndex: 999999,
                            textAlign: 'center',
                            padding: '20px'
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                                fontWeight: 'bold',
                                marginBottom: '1rem'
                            }}>
                                JavaScript Required
                            </h2>
                            <p style={{
                                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                maxWidth: '600px',
                                lineHeight: 1.6
                            }}>
                                To continue exploring our website, please enable JavaScript in your browser settings.
                            </p>
                        </div>
                    </noscript>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <Providers>
                            <AOSInit />
                            <ReferralBanner />
                            {children}
                        </Providers>
                    </ThemeProvider>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@graph": [
                                    {
                                        "@type": "WebSite",
                                        "@id": "https://mowglai.com/#website",
                                        "url": "https://mowglai.com",
                                        "name": "Mowglai - Best Web Services in NCR, Delhi, Noida & Kanpur",
                                        "description": "Top-tier web development and digital agency providing the best web services across NCR, Delhi, Noida, and Kanpur. High-performance Next.js websites, 3D web applications, and search optimization starting at ₹5,000 INR / $55 USD.",
                                        "publisher": {
                                            "@id": "https://mowglai.com/#organization"
                                        },
                                        "potentialAction": {
                                            "@type": "SearchAction",
                                            "target": {
                                                "@type": "EntryPoint",
                                                "urlTemplate": "https://mowglai.com/search?q={search_term_string}"
                                            },
                                            "query-input": "required name=search_term_string"
                                        }
                                    },
                                    {
                                        "@type": ["ProfessionalService", "LocalBusiness"],
                                        "@id": "https://mowglai.com/#organization",
                                        "name": "Mowglai Digital Agency",
                                        "alternateName": ["Mowglai Web Services", "Mowglai Web Development NCR", "Mowglai Technologies"],
                                        "url": "https://mowglai.com",
                                        "logo": "https://mowglai.com/logo1.png",
                                        "image": "https://mowglai.com/logo1.png",
                                        "priceRange": "₹5,000 - ₹50,000+ / $55 - $599+",
                                        "currenciesAccepted": "INR, USD, EUR, GBP",
                                        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking, Razorpay, Stripe",
                                        "description": "Premier digital agency delivering the best web services in NCR, Delhi, Noida, and Kanpur. We specialize in custom website development, SaaS MVPs, 3D web experiences, e-commerce stores, and generative AI search optimization (AIO/GEO).",
                                        "telephone": "+91-9452476331",
                                        "email": "contact@mowglai.com",
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
                                            {
                                                "@type": "AdministrativeArea",
                                                "name": "National Capital Region (NCR)"
                                            },
                                            {
                                                "@type": "City",
                                                "name": "Delhi"
                                            },
                                            {
                                                "@type": "City",
                                                "name": "Noida"
                                            },
                                            {
                                                "@type": "City",
                                                "name": "Kanpur"
                                            },
                                            {
                                                "@type": "City",
                                                "name": "Gurugram"
                                            },
                                            {
                                                "@type": "City",
                                                "name": "Ghaziabad"
                                            },
                                            {
                                                "@type": "City",
                                                "name": "Greater Noida"
                                            },
                                            {
                                                "@type": "Country",
                                                "name": "India"
                                            },
                                            {
                                                "@type": "Place",
                                                "name": "Worldwide"
                                            }
                                        ],
                                        "contactPoint": [
                                            {
                                                "@type": "ContactPoint",
                                                "telephone": "+91-9452476331",
                                                "contactType": "customer service",
                                                "areaServed": ["IN", "US", "GB", "EU"],
                                                "availableLanguage": ["English", "Hindi"]
                                            }
                                        ],
                                        "sameAs": [
                                            "https://www.instagram.com/mowglai.tech?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
                                            "https://www.linkedin.com/company/mowglai",
                                            "https://twitter.com/mowglai_in"
                                        ],
                                        "openingHoursSpecification": {
                                            "@type": "OpeningHoursSpecification",
                                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                            "opens": "09:00",
                                            "closes": "20:00"
                                        },
                                        "hasOfferCatalog": {
                                            "@type": "OfferCatalog",
                                            "name": "Mowglai Web Services Catalog",
                                            "itemListElement": [
                                                {
                                                    "@type": "Offer",
                                                    "name": "Basic Web Package",
                                                    "description": "Essential single-page high performance website, mobile responsive with contact integration and SEO.",
                                                    "price": "5000",
                                                    "priceCurrency": "INR"
                                                },
                                                {
                                                    "@type": "Offer",
                                                    "name": "Advanced Scale Architecture",
                                                    "description": "Multi-page website (up to 5 pages), custom animations, CMS integration, and advanced SEO.",
                                                    "price": "9999",
                                                    "priceCurrency": "INR"
                                                },
                                                {
                                                    "@type": "Offer",
                                                    "name": "Store Essential E-Commerce",
                                                    "description": "High-converting online storefront with product catalog, cart, checkout, and payment gateways.",
                                                    "price": "12999",
                                                    "priceCurrency": "INR"
                                                },
                                                {
                                                    "@type": "Offer",
                                                    "name": "Commerce Pro & Marketplace",
                                                    "description": "Full-scale e-commerce marketplace platform with inventory sync and courier API logistics.",
                                                    "price": "24999",
                                                    "priceCurrency": "INR"
                                                },
                                                {
                                                    "@type": "Offer",
                                                    "name": "Apex Enterprise & 3D Web Solution",
                                                    "description": "Bespoke digital architecture, liquid motion graphics, neural AI workflows, and enterprise support.",
                                                    "price": "49999",
                                                    "priceCurrency": "INR"
                                                }
                                            ]
                                        },
                                        "aggregateRating": {
                                            "@type": "AggregateRating",
                                            "ratingValue": "4.9",
                                            "reviewCount": "52",
                                            "bestRating": "5"
                                        }
                                    }
                                ]
                            }),
                        }}
                    />
                </LanguageProvider>
            </body>
        </html>
    );
}
