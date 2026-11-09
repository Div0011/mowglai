import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free AI Website & Competitor Speed Audit | Mowglai",
    description: "Analyze your website speed, mobile responsiveness, and competitor SEO gaps in seconds with Mowglai's AI performance auditor.",
    alternates: {
        canonical: "https://mowglai.com/ai-analyze/",
    },
    openGraph: {
        title: "Free AI Website & Competitor Speed Audit | Mowglai",
        description: "Analyze your website speed and competitor SEO gaps with Mowglai.",
        url: "https://mowglai.com/ai-analyze/",
    },
};

export default function AiAnalyzeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
