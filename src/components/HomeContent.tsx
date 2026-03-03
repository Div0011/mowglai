"use client";

import Magnetic from "@/components/Magnetic";
import Link from "next/link";
import { ArrowRight, Fingerprint } from "lucide-react";
import { AestheticShowcase } from "@/components/AestheticShowcase";
import FlashText from "@/components/FlashText";
import SelectedWork from "@/components/SelectedWork";
import NextPageButton from "@/components/NextPageButton";
import { useLanguage } from "@/context/LanguageContext";
import TemplatesShowcase from "@/components/TemplatesShowcase";
import StartupGrowthSection from "@/components/StartupGrowthSection";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScrollReveal, CascadeContainer, CascadeItem, ParallaxScroll } from "@/components/ScrollRevealComponents";
import { useDeviceOptimization } from "@/hooks/useDeviceOptimization";
import { useEffect } from "react";

export default function HomeContent() {
    const { t } = useLanguage();
    const router = useRouter();
    const deviceInfo = useDeviceOptimization();
    const [isDnaClicked, setIsDnaClicked] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);
    const consultX = useMotionValue(0);
    const consultY = useMotionValue(0);
    const consultSmoothX = useSpring(consultX, { stiffness: 50, damping: 20 });
    const consultSmoothY = useSpring(consultY, { stiffness: 50, damping: 20 });

    // Trigger page opening animation on mount
    useEffect(() => {
        setPageLoaded(true);
    }, []);


                            <div className="mb-12 w-full">
                                <Magnetic>
                                    <motion.button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsDnaClicked(true);
                                            setTimeout(() => {
                                                router.push('/our-dna');
                                            }, 600);
                                        }}
                                        animate={{ x: isDnaClicked ? "100vw" : 0, opacity: isDnaClicked ? 0 : 1 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="group relative w-full flex items-center justify-center sm:justify-between px-8 py-5 bg-background/5 border border-primary/20 hover:bg-primary/10 hover:border-primary text-primary transition-all duration-500 rounded-full backdrop-blur-sm overflow-hidden"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                <Fingerprint className="w-6 h-6" />
                                            </div>

                                        <div className="hidden sm:block relative w-8 h-8 flex items-center justify-center">
                                            <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4 font-light text-2xl text-primary leading-none pb-1">
                                                -
                                            </span>
                                            <ArrowRight className="absolute w-6 h-6 text-primary transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
                                        </div>
                                    </motion.button>
                                </Magnetic>
                            </div>
                        </ScrollReveal>

                        {/* Sequential Cards Presentation - Pulled up */}
                        <ScrollReveal variant="slideInRight" delay={1} className="md:-mt-24">
                            <AestheticShowcase />
                        </ScrollReveal>
                    </div>
                </div>
            </section>


            {/* 2. LAUNCH FASTER WITH MOWGLAI */}
            <StartupGrowthSection />

            {/* 3. SELECTED WORK */}
            <SelectedWork />

            {/* 4. TEMPLATE (Premium Templates Showcase) */}
            <TemplatesShowcase />

            {/* Explore Templates CTA (Blueprint Button) */}
            <ScrollReveal variant="slideUpFade" className="w-full relative z-20 -mt-20 md:-mt-32 mb-16">
                <NextPageButton label="BLUEPRINT" href="/explore" />
            </ScrollReveal>

            {/* 5. COMMISSION (Refer and Earn Flash Text) */}
            <ScrollReveal variant="slideUpFade" delay={0.5} className="mt-12 md:mt-24 mb-12">
                <FlashText />
            </ScrollReveal>

            {/* 6. STORY SECTION */}
            <div className="w-full">
                <ScrollReveal variant="slideUpFade">
                    <NextPageButton
                        label="STORY"
                        href="/about"
                        tagline="WANNA KNOW MORE?"
                    />
                </ScrollReveal>
            </div>
        </motion.div>
    );
}
