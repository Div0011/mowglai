"use client";

import OriginalLayout from "@/app/src/styles/original/Layout";
import HeroSection from "@/app/src/components/HeroSection";
import HomeContent from "@/app/src/components/HomeContent";

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
