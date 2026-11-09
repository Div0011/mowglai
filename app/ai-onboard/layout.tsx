import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Website Onboarding & Instant Project Scoping | Mowglai",
    description: "Scope, plan, and start your digital web development project in 3 minutes with Mowglai's intelligent client onboarding engine.",
    alternates: {
        canonical: "https://mowglai.com/ai-onboard/",
    },
    openGraph: {
        title: "AI Website Onboarding & Project Scoping | Mowglai",
        description: "Scope and start your digital web development project with Mowglai.",
        url: "https://mowglai.com/ai-onboard/",
    },
};

export default function AiOnboardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
