import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NextPageButton from "@/components/NextPageButton";

export const metadata = {
    title: "About Us | Mowglai",
    description: "Learn about Mowglai's mission to transform the digital landscape through innovation, creativity, and technical excellence.",
};

export default function About() {
    return (
        <PageLayout>
            <AboutSection />
            <MissionSection />
            <TestimonialsSection />
            <NextPageButton label="Our Services" href="/services" />
        </PageLayout>
    );
}
