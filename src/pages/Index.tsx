import { useState, useEffect } from "react";
import GalaxyBackground from "@/components/GalaxyBackground";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";


import { initHeroToAboutTransition } from "@/animations/heroToAbout";
import { initMissionToPricingTransition } from "@/animations/missionToPricing";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Apply theme class to document
    if (isDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  useEffect(() => {
    initHeroToAboutTransition();
    initMissionToPricingTransition();
  }, []);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      // Browsers require user interaction to enter full screen
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.log("Error attempting to enable full-screen mode:", err.message);
        });
      }
      // Remove listener after first attempt
      document.removeEventListener("click", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    return () => document.removeEventListener("click", handleFirstInteraction);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Galaxy background with purple dots and water ripples */}
      <GalaxyBackground isDark={isDark} />

      {/* Glassmorphic cylindrical sidebar */}
      <Sidebar isDark={isDark} onToggleTheme={handleToggleTheme} />
      <MobileNav />

      {/* Main content with left padding for sidebar */}
      <main className="pl-0 md:pl-20 pb-20 md:pb-0">
        <div id="hero-about-wrapper" className="relative min-h-screen overflow-hidden">
          <HeroSection />
          <AboutSection />
        </div>

        <div id="mission-pricing-wrapper" className="relative">
          <MissionSection />
          <PricingSection />
        </div>

        <TestimonialsSection isDark={isDark} />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;