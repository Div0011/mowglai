import PageLayout from "@/components/PageLayout";
import { SEO } from "@/components/SEO";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NextPageButton from "@/components/NextPageButton";

const About = () => {
    return (
        <PageLayout>
            <SEO
                title="About Us"
                description="Learn about Mowglai's mission to transform the digital landscape through innovation, creativity, and technical excellence."
                url="https://mowglai.in/about"
            />
            <AboutSection />
            <MissionSection />
            <TestimonialsSection />
            <NextPageButton label="Our Services" to="/services" />
        </PageLayout>
    );
};

export default About;
