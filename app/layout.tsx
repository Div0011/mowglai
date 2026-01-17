import type { Metadata } from "next";
import localFont from "next/font/local";
import "../src/index.css";
import { Providers } from "@/components/Providers";

const boldonse = localFont({
    src: "../public/fonts/Boldonse-Regular.ttf",
    variable: "--font-display",
});

const josefinSans = localFont({
    src: "../public/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf",
    variable: "--font-body",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://mowglai.in"),
    title: {
        default: "Mowglai | Crafting Digital Excellence",
        template: "%s | Mowglai"
    },
    description: "Mowglai creates stunning, high-performance websites and web applications. We transform your digital presence with cutting-edge design and expert development.",
    keywords: ["web development", "web design", "Mowglai", "digital agency", "website creation", "galaxy theme", "3d websites", "react developer"],
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
        url: "https://mowglai.in/",
        title: "Mowglai | Crafting Digital Excellence",
        description: "Mowglai creates stunning, high-performance websites and web applications.",
        siteName: "Mowglai",
        images: [{
            url: "/mowglai-logo-new.jpg",
            width: 1200,
            height: 1200,
            alt: "Mowglai Digital Excellence"
        }],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mowglai | Crafting Digital Excellence",
        description: "Mowglai creates stunning, high-performance websites and web applications.",
        images: ["/mowglai-logo-new.jpg"],
        creator: "@mowglai",
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
        canonical: "https://mowglai.in",
    },
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${boldonse.variable} ${josefinSans.variable}`}>
            <body className="antialiased">
                <Providers>{children}</Providers>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "alternateName": "Mowglai Digital Agency",
                            "url": "https://mowglai.in",
                            "description": "Premium digital agency specializing in high-performance web development, 3D experiences, and digital transformation.",
                            "inLanguage": "en",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Mowglai",
                                "logo": "https://mowglai.in/logo1.png"
                            },
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https://mowglai.in/search?q={search_term_string}"
                                },
                                "query-input": "required name=search_term_string"
                            }
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "Mowglai Digital Agency",
                            "image": "https://mowglai.in/logo1.png",
                            "priceRange": "$$",
                            "description": "Premium digital agency providing web development, 3D design, and digital transformation services. We create stunning, high-performance websites and web applications.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": "20.5937",
                                "longitude": "78.9629"
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                                "opens": "09:00",
                                "closes": "18:00"
                            },
                            "areaServed": "Worldwide"
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Mowglai",
                            "alternateName": "Mowglai Digital Agency",
                            "url": "https://mowglai.in",
                            "description": "Premium digital agency specializing in high-performance web development, 3D experiences, and digital transformation.",
                            "inLanguage": "en",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Mowglai",
                                "logo": "https://mowglai.in/logo1.png"
                            },
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": {
                                    "@type": "EntryPoint",
                                    "urlTemplate": "https://mowglai.in/search?q={search_term_string}"
                                },
                                "query-input": "required name=search_term_string"
                            }
                        }),
                    }}
                />
            </body>
        </html>
    );
}
