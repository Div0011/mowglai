"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Magnetic from "./Magnetic";
import NextPageButton from "./NextPageButton";
import { useLanguage } from "@/context/LanguageContext";

export default function LiquidGoldFooter() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    // Track when this footer enters the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 25,
        restDelta: 0.001
    });

    // Reversed Luma Expansion:
    // As we scroll into the footer, a gold mask cracks open from the center of the button.
    const goldMaskSize = useTransform(smoothScroll, [0, 1], ["0vw", "150vw"]);

    // Create the radial gradient that expands rapidly
    const WebkitMaskImage = useTransform(
        goldMaskSize,
        (size) => `radial-gradient(circle ${size} at 50% 60%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)`
    );

    return (
        <section ref={containerRef} className="relative w-full min-h-[60vh] flex flex-col items-center justify-center pb-12 pt-32 overflow-hidden">

            {/* The Liquid Gold Background Underlay */}
            <motion.div
                className="absolute inset-0 bg-[#c5a059] z-0"
                style={{
                    WebkitMaskImage,
                    WebkitMaskRepeat: "no-repeat",
                    maskImage: WebkitMaskImage,
                    maskRepeat: "no-repeat",
                    willChange: "mask-image, -webkit-mask-image"
                }}
            >
                {/* Organic Noise / Cracks overlay on the gold */}
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/noise.png')] mix-blend-overlay" />
            </motion.div>

            {/* Standard Dark Background (Sits behind the gold, but visually the gold covers it as mask expands) */}
            <div className="absolute inset-0 bg-transparent z-[-1]" />

            {/* Content Container (Sits on top of the Gold Mask) */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center">

                <p className="text-sm md:text-base font-display tracking-widest uppercase mb-8 text-black/90 text-center max-w-2xl px-4 flex flex-col gap-2" data-aos="fade-up">
                    <span className="text-black font-black text-2xl md:text-4xl drop-shadow-md">READY TO BUILD?</span>
                    <span className="font-medium">Turn your vision into reality with our expert team</span>
                </p>

                {/* The "Anchor" Button with Haptic Pulse */}
                <div className="relative mb-20">
                    {/* Haptic Wave Pulse (Every 5 seconds) */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-[100px] h-[100px] border-2 border-white rounded-full pointer-events-none mix-blend-screen"
                        initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0.8, 4, 8],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2, // 5 seconds total cycle
                            ease: "easeOut"
                        }}
                    />

                    <Magnetic>
                        <Link
                            href="/custom-request"
                            className="relative block px-10 py-5 bg-black text-[#c5a059] text-base sm:text-lg font-black uppercase tracking-[0.2em] transform transition-transform hover:scale-110 active:scale-95 duration-500 rounded-full text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-20 overflow-hidden group"
                        >
                            <span className="relative z-10">CONSULT FOR FREE</span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                        </Link>
                    </Magnetic>
                </div>

                <div className="w-full relative z-20 mt-12 mix-blend-difference pb-8">
                    <NextPageButton
                        label="STORY"
                        href="/about"
                        tagline={t.Home.knowMore}
                    />
                </div>
            </div>
        </section>
    );
}
