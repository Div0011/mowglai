import InvestmentClient from "./InvestmentClient";

export const metadata = {
    title: "Investment Plans | Mowglai - Web Development Pricing & Packages",
    description: "Explore Mowglai's investment plans and pricing packages for web development services. Transparent pricing for custom websites, 3D web experiences, and digital transformation projects. Choose the plan that fits your needs.",
    keywords: ["web development pricing", "website development cost", "custom website packages", "web development investment plans", "digital agency pricing", "3D web development cost", "React development pricing", "Next.js development packages"],
    alternates: {
        canonical: "https://mowglai.in/investment",
    },
    openGraph: {
        title: "Investment Plans | Mowglai - Web Development Pricing & Packages",
        description: "Explore Mowglai's investment plans and pricing packages for web development services. Transparent pricing for custom websites and digital transformation.",
        url: "https://mowglai.in/investment",
        images: [
            {
                url: "https://mowglai.in/mowglai-logo-new.jpg",
                width: 1200,
                height: 1200,
                alt: "Mowglai Investment Plans"
            }
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Investment Plans | Mowglai - Web Development Pricing & Packages",
        description: "Explore Mowglai's investment plans and pricing packages for web development services. Transparent pricing for custom websites.",
        images: ["https://mowglai.in/mowglai-logo-new.jpg"],
    },
};

export default function InvestmentPage() {
    return <InvestmentClient />;
}
