import CustomRequestClient from "./CustomRequestClient";

export const metadata = {
    title: "Custom Quote Request: Tailored Pricing",
    description: "Request a custom quote from Mowglai for your unique web development needs. Tell us about your project vision and get a detailed, personalized quotation for your custom website or application.",
    keywords: ["custom quote", "web development pricing", "custom website quote", "tailored development services", "bespoke web development", "custom web application pricing", "personalized project quote", "Mowglai custom quote"],
    alternates: {
        canonical: "/custom-request",
    },
    openGraph: {
        title: "Custom Quote Request: Tailored Pricing",
        description: "Request a custom quote from Mowglai for your unique web development needs. Get a detailed, personalized quotation.",
        url: "/custom-request",
        images: [
            {
                url: "/mowglai-logo-new.jpg",
                width: 1200,
                height: 1200,
                alt: "Mowglai Custom Quote Request"
            }
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Quote Request: Tailored Pricing",
        description: "Request a custom quote from Mowglai for your unique web development needs. Get a detailed, personalized quotation.",
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
            "name": "Custom Request",
            "item": "https://mowglai.in/custom-request"
        }
    ]
};

export default function CustomRequest() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
            <CustomRequestClient />
        </>
    );
}
