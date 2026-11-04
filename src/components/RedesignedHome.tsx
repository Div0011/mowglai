"use client";

import { useEffect, useRef } from "react";
import JungleBackground from "./animations/JungleBackground";
import Hero from "./hero/Hero";
import AboutSection from "./AboutSection";
import ServicesSection from "./services/ServicesSection";
import PortfolioSection from "./portfolio/PortfolioSection";
import TemplatesSection from "./templates/TemplatesSection";
import PricingSection from "./pricing/PricingSection";
import TestimonialsSection from "./TestimonialsSection";
import FlashText from "./FlashText";
import LeadFormSection from "./forms/LeadFormSection";
import NewFooter from "./footer/NewFooter";
import FullScreenNav from "@/components/FullScreenNav";
import MobileNav from "@/components/MobileNav";
import DukaanMitraPartnerBadge from "@/components/partner/DukaanMitraPartnerBadge";

export default function RedesignedHome() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main ref={containerRef} className="relative bg-background min-h-screen text-foreground font-sans">
      {/* Top Floating Navigation */}
      <FullScreenNav onOpenChat={() => {}} />
      <MobileNav />
      
      {/* Ambient Jungle / Galaxy Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <JungleBackground />
      </div>

      {/* Content Layers — All Sections Fully Rendered */}
      <div className="relative z-10 flex flex-col w-full">
        {/* Section 1: Hero with 3D Experience */}
        <Hero />

        {/* Double Engine Autonomous Workforce Spotlight */}
        <div className="container mx-auto px-6 py-6">
          <DukaanMitraPartnerBadge variant="banner" />
        </div>
        
        {/* Section 2: About Mowglai & Digital Artisans */}
        <AboutSection />
        
        {/* Section 3: Core Agency Services */}
        <ServicesSection />
        
        {/* Section 4: Featured Portfolio & Works */}
        <PortfolioSection />
        
        {/* Section 5: Website Templates Collection */}
        <TemplatesSection />
        
        {/* Section 6: Transparent Pricing Plans */}
        <PricingSection />

        {/* Section 7: Client Testimonials & Reviews */}
        <TestimonialsSection />

        {/* Section 8: Referral & Commission Spotlight */}
        <div className="py-12 container mx-auto px-6">
          <FlashText />
        </div>
        
        {/* Section 9: Project Intake / Lead Form */}
        <LeadFormSection />
        
        {/* Section 10: Complete Agency Footer */}
        <NewFooter />
      </div>
    </main>
  );
}
