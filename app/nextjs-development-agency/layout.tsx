import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expert Next.js Development Agency | Mowglai",
    description: "Leading Next.js development agency delivering enterprise-grade web applications, sub-second page loads, and modern 3D UI architectures.",
    alternates: {
        canonical: "https://mowglai.com/nextjs-development-agency/",
    },
};

export default function NextJsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
