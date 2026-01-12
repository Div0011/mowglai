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
            url: "https://mowglai.in/logo1.png",
            width: 1200,
            height: 630,
            alt: "Mowglai Digital Excellence"
        }],
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mowglai | Crafting Digital Excellence",
        description: "Mowglai creates stunning, high-performance websites and web applications.",
        images: ["https://mowglai.in/logo1.png"],
        creator: "@mowglai",
    },
    icons: {
        icon: "/mowglai-favicon.png",
        apple: "/mowglai-favicon.png",
    },
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
                            "@type": "Organization",
                            "name": "Mowglai",
                            "url": "https://mowglai.in",
                            "logo": "https://mowglai.in/logo1.png",
                            "sameAs": [
                                "https://twitter.com/mowglai",
                                "https://instagram.com/mowglai"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "",
                                "contactType": "customer service",
                                "email": "info@mowglai.in"
                            }
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
                            "url": "https://mowglai.in",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://mowglai.in/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        }),
                    }}
                />
            </body>
        </html>
    );
}
