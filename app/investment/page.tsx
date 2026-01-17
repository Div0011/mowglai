import InvestmentClient from "./InvestmentClient";

export const metadata = {
    title: "Investment Plans: Web Development Pricing & Packages",
    description: "Explore Mowglai's investment plans and pricing packages for web development services. Transparent pricing for custom websites, 3D web experiences, and digital transformation projects. Choose the plan that fits your needs.",
    keywords: ["web development pricing", "website development cost", "custom website packages", "web development investment plans", "digital agency pricing", "3D web development cost", "React development pricing", "Next.js development packages"],
    alternates: {
        canonical: "/investment",
    },
    openGraph: {
        title: "Investment Plans: Web Development Pricing & Packages",
        description: "Explore Mowglai's investment plans and pricing packages for web development services. Transparent pricing for custom websites and digital transformation.",
        url: "/investment",
        images: [
            {
                url: "/mowglai-logo-new.jpg",
                width: 1200,
                height: 1200,
                alt: "Mowglai Investment Plans"
            }
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Investment Plans: Web Development Pricing & Packages",
        description: "Explore Mowglai's investment plans and pricing packages for web development services. Transparent pricing for custom websites.",
        images: ["/mowglai-logo-new.jpg"],
    },
};

const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mowglai.in"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Investment Plans",
            "item": "https://mowglai.in/investment"
        }
    ]
};

export default function InvestmentPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
            <InvestmentClient />
        </>
    );
}
