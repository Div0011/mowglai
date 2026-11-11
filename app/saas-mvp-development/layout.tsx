import { Metadata } from "next";

export const metadata: Metadata = {
    title: "SaaS & MVP Development Services India | Mowglai",
    description: "Launch your startup MVP in weeks with Mowglai. High-performance React and Next.js SaaS engineering with turnkey architecture and complete source code ownership.",
    alternates: {
        canonical: "https://mowglai.com/saas-mvp-development/",
    },
};

export default function SaasMvpLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

