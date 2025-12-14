import "aos/dist/aos.css";
import GalaxyBackground from "@/components/GalaxyBackground";
import FullScreenNav from "@/components/FullScreenNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import CustomCursor from "@/components/CustomCursor";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, lazy, Suspense } from "react";

// Lazy load below-the-fold sections for performance
const AboutSection = lazy(() => import("@/components/AboutSection"));
const MissionSection = lazy(() => import("@/components/MissionSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
      });
    });
  }, []);

  return (
    <div className="min-h-screen relative bg-background text-foreground transition-colors duration-500">
      <CustomCursor />
      <ThemeToggle />

      {/* Background - Fixed behind everything */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GalaxyBackground />
      </div>

      <FullScreenNav />
      <MobileNav />

      <main className="relative z-10 w-full overflow-hidden">
        {/* Standard Flow */}
        <div className="relative w-full h-screen">
          <HeroSection />
        </div>

        <div className="relative w-full bg-background/80 backdrop-blur-xl">
          <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-primary font-display animate-pulse">Loading Content...</div>}>
            <AboutSection />
            <MissionSection />
            <PricingSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </Suspense>
        </div>
      </main>
    </div>
  );
};


export default Index;