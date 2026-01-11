import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import SEO from "@/components/SEO";
import MissionSection from "@/components/MissionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NextPageButton from "@/components/NextPageButton";

const About = () => {
    return (
        <PageLayout>
            <SEO
                title="About Us"
                description="Learn about Mowglai's mission to craft digital excellence through innovative web design and robust engineering."
            />
            <AboutSection />
            <MissionSection />
            <TestimonialsSection />
            <NextPageButton label="Our Services" to="/services" />
        </PageLayout>
    );
};

export default About;
