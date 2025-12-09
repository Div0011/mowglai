import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import GalaxyBackground from "@/components/GalaxyBackground";
import StarryBackground from "@/components/StarryBackground";
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
import { initPricingToTestimonialsTransition } from "@/animations/sectionTransitions";
import { TestimonialsRevealWrapper } from "@/components/transitions/TestimonialsRevealWrapper";
import { FadeSlideWrapper } from "@/components/transitions/FadeSlideWrapper";

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
    initPricingToTestimonialsTransition();
  }, []);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);

    // Disable lag smoothing for Lenis
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
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

      {/* Static Starry Background */}
      <StarryBackground />

      {/* Galaxy background with purple dots and water ripples */}
      <GalaxyBackground isDark={isDark} />

      {/* Global overlay for transitions */}
      <div
        id="transition-overlay"
        className="fixed inset-0 z-[50] pointer-events-none opacity-0 bg-gradient-to-b from-purple-700/40 via-purple-500/20 to-black/60 backdrop-blur-2xl"
      ></div>

      {/* Glassmorphic cylindrical sidebar */}
      <Sidebar isDark={isDark} onToggleTheme={handleToggleTheme} />
      <MobileNav />

      {/* Main content with left padding for sidebar */}
      <main className="pl-0 md:pl-20 pb-20 md:pb-0">
        <div id="hero-about-wrapper" className="relative min-h-screen overflow-hidden">
          <HeroSection />
          <AboutSection />
        </div>

        <div id="mission-pricing-wrapper" className="relative z-30 min-h-screen">
          <MissionSection />
          <PricingSection />
          <div id="testimonials-container" className="absolute inset-0 z-0 opacity-0 pointer-events-none">
            <TestimonialsRevealWrapper>
              <TestimonialsSection isDark={isDark} />
            </TestimonialsRevealWrapper>
          </div>
        </div>

        <FadeSlideWrapper className="z-10 relative">
          <ContactSection />
        </FadeSlideWrapper>

        <FadeSlideWrapper>
          <Footer />
        </FadeSlideWrapper>
      </main>
    </div>
  );
};

export default Index;