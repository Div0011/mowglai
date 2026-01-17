import CustomRequestClient from "./CustomRequestClient";

export const metadata = {
    title: "Custom Quote Request | Mowglai - Tailored Web Development Pricing",
    description: "Request a custom quote from Mowglai for your unique web development needs. Tell us about your project vision and get a detailed, personalized quotation for your custom website or application.",
    keywords: ["custom quote", "web development pricing", "custom website quote", "tailored development services", "bespoke web development", "custom web application pricing", "personalized project quote", "Mowglai custom quote"],
    alternates: {
        canonical: "https://mowglai.in/custom-request",
    },
    openGraph: {
        title: "Custom Quote Request | Mowglai - Tailored Web Development Pricing",
        description: "Request a custom quote from Mowglai for your unique web development needs. Get a detailed, personalized quotation.",
        url: "https://mowglai.in/custom-request",
        images: [
            {
                url: "https://mowglai.in/mowglai-logo-new.jpg",
                width: 1200,
                height: 1200,
                alt: "Mowglai Custom Quote Request"
            }
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Quote Request | Mowglai - Tailored Web Development Pricing",
        description: "Request a custom quote from Mowglai for your unique web development needs. Get a detailed, personalized quotation.",
        images: ["https://mowglai.in/mowglai-logo-new.jpg"],
    },
};

export default function CustomRequest() {
    return <CustomRequestClient />;
}
