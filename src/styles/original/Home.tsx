"use client";

import OriginalLayout from "@/styles/original/Layout";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";

// Not `ssr: false` — this section carries the homepage's headings and body copy.
// With client-only rendering the static export shipped an <h1> and nothing else.
const HomeContent = dynamic(() => import("@/components/HomeContent"));

export default function OriginalHome() {
    return (
        <OriginalLayout>
            <div className="relative w-full">
                <HeroSection />
            </div>
            <HomeContent />
        </OriginalLayout>
    );
}
