import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Top Web Development Agency in India | Mowglai",
    description: "Hire world-class web developers in India. High-performance custom websites, e-commerce stores, and SaaS applications starting at ₹5,000 INR / $55 USD.",
    alternates: {
        canonical: "https://mowglai.com/web-development-agency-india/",
    },
};

export default function WebDevAgencyIndiaLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

