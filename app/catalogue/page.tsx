import { Metadata } from "next";
import CatalogueView from "@/components/catalogue/CatalogueView";

export const metadata: Metadata = {
    title: "Official Business Catalogue | Mowglai Digital Agency",
    description: "Explore the Mowglai Business Catalogue: Our core capabilities (Next.js 16, SaaS MVPs, 3D WebGL, SEO/GEO), flagship client platforms including More Interior, Clarity Cartel, and our 5-phase operating framework. Download our official PDF catalogue.",
    keywords: [
        "Mowglai catalogue",
        "Mowglai business catalogue",
        "Mowglai portfolio",
        "More Interior website",
        "Mowglai case studies",
        "Next.js agency catalogue",
        "SaaS MVP agency India",
        "3D web development portfolio",
        "how Mowglai works",
        "digital agency capabilities"
    ],
    alternates: {
        canonical: "https://mowglai.com/catalogue",
    },
    openGraph: {
        title: "Official Business Catalogue | Mowglai Digital Agency",
        description: "Bespoke web development, SaaS platforms, 3D WebGL, and proven client platforms like More Interior. Download the official PDF catalogue.",
        url: "https://mowglai.com/catalogue",
        images: [
            {
                url: "https://mowglai.com/mowglai-logo-new.jpg",
                width: 1200,
                height: 1200,
                alt: "Mowglai Official Business Catalogue"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Official Business Catalogue | Mowglai Digital Agency",
        description: "Explore what we do, our proven client platforms like More Interior, and how we function.",
        images: ["https://mowglai.com/mowglai-logo-new.jpg"],
    }
};

const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
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
            "name": "Business Catalogue",
            "item": "https://mowglai.com/catalogue"
        }
    ]
};

const jsonLdCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Mowglai Business Catalogue",
    "description": "Comprehensive catalogue of digital engineering, design, and venture services provided by Mowglai Digital Agency.",
    "provider": {
        "@type": "Organization",
        "name": "Mowglai Digital Agency",
        "url": "https://mowglai.com"
    }
};

export default function CataloguePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCatalog) }}
            />
            <CatalogueView />
        </>
    );
}
