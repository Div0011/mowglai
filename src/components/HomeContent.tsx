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


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: pageLoaded ? 1 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
        >
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-24 items-start">
                        <ScrollReveal variant="slideInLeft" delay={0} className="w-full pt-12 md:pt-0">
                            <div data-aos="fade-up" className="w-full">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight"
                                >
                                    {t.Home.weCreate} <span className="opacity-10">{t.Home.the}</span> <span className="text-primary italic whitespace-nowrap">{t.Home.extraordinary}</span>
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed md:text-xl"
                                >
                                    {t.Home.introText}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className="mb-12 w-full"
                                >
                                    <Magnetic>
                                        <motion.button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsDnaClicked(true);
                                                setTimeout(() => {
                                                    router.push('/our-dna');
                                                }, 600);
                                            }}
                                            whileHover={deviceInfo.hasHover ? { scale: 1.02 } : {}}
                                            whileTap={{ scale: 0.98 }}
                                            animate={{ x: isDnaClicked ? "100vw" : 0, opacity: isDnaClicked ? 0 : 1 }}
                                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                            className="group relative w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between px-6 sm:px-8 py-4 sm:py-5 bg-background/5 border border-primary/20 hover:bg-primary/10 hover:border-primary text-primary transition-all duration-500 rounded-full backdrop-blur-sm overflow-hidden"
                                        >
                                            <div className="flex items-center gap-2">
                                                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                                    <Fingerprint className="w-5 sm:w-6 h-5 sm:h-6" />
                                                </div>
                                                <span className="text-base sm:text-lg font-display font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                                                    {t.Home.exploreDNA}
                                                </span>
                                            </div>

                                            <div className="hidden sm:block relative w-8 h-8 flex items-center justify-center">
                                                <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4 font-light text-2xl text-primary leading-none pb-1">
                                                    -
                                                </span>
                                                <ArrowRight className="absolute w-6 h-6 text-primary transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0" />
                                            </div>
                                        </motion.button>
                                    </Magnetic>
                                </motion.div>
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
        </motion.div>
    );
}
