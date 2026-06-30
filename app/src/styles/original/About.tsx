"use client";

import AboutSection from "@/app/src/components/AboutSection";
import MissionSection from "@/app/src/components/MissionSection";
import NextPageButton from "@/app/src/components/NextPageButton";
import PageLayout from "@/app/src/components/PageLayout";

export default function OriginalAbout() {
    return (
        <PageLayout>
            <AboutSection />
            <MissionSection />
            <NextPageButton label="CRAFT" href="/services" />
        </PageLayout>
    );
}
