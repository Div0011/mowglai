"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";
import { useLanguage } from "../context/LanguageContext";
import AuditCircularButton from "./AuditCircularButton";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useDeviceOptimization, getAnimationOptimizations } from "@/hooks/useDeviceOptimization";

const HeroSection = () => {
    const { t } = useLanguage();
    const router = useRouter();
    const tiltRef = useRef<HTMLDivElement>(null);
    const [isTitleHovered, setIsTitleHovered] = useState(false);
    const [isShakeHovered, setIsShakeHovered] = useState(false);
    const [isStartClicked, setIsStartClicked] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    const deviceInfo = useDeviceOptimization();
    const animationOptimizations = getAnimationOptimizations(deviceInfo);

    useEffect(() => {
        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            // Apply only on devices with proper cursor (desktops/laptops)
            const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
            if (!isDesktop) return;

            // Track mouse position for subtle glow effect
            setMousePosition({ x: e.clientX, y: e.clientY });

            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                if (tiltRef.current) {
                    const { innerWidth, innerHeight } = window;

                    // Normalize cursor position between -1 and 1
                    const x = (e.clientX / innerWidth) * 2 - 1;
                    const y = (e.clientY / innerHeight) * 2 - 1;

                    // Max tilt angles in degrees - reduced for smoother feel
                    const maxRotateX = 12;
                    const maxRotateY = 18;

                    const rotateX = -y * maxRotateX;
                    const rotateY = x * maxRotateY;

                    tiltRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                }
            });
        };

        const handleMouseLeave = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                if (tiltRef.current) {
                    tiltRef.current.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
                }
            });
        };

        if (!deviceInfo.isMobile) {
            window.addEventListener("mousemove", handleMouseMove, { passive: true });
            document.documentElement.addEventListener("mouseleave", handleMouseLeave, { passive: true });
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [deviceInfo.isMobile]);

    return (
        <section
            id="home"
            className="relative w-full h-screen z-10 overflow-hidden flex flex-col items-center justify-center"
        >
            {/* Animated background glow effect on desktop */}
            {!deviceInfo.isMobile && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(197, 160, 89, 0.15) 0%, transparent 50%)`,
                    }}
                />
            )}

            {/* Main Content Container */}
            <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center text-center">

                {/* Massive Title Block text wrapper with 3D tilt tracking */}
                <div
                    ref={tiltRef}
                    className="flex flex-col items-center leading-none"
                    style={{
                        transition: "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)",
                        willChange: "transform"
                    }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block w-fit text-3xl sm:text-6xl md:text-7xl lg:text-[13vw] font-display font-black text-foreground tracking-tighter hover:tracking-widest transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-default select-none transform-gpu hover:scale-105"
                        data-aos-duration="1000"
                        onHoverStart={() => setIsTitleHovered(true)}
                        onHoverEnd={() => setIsTitleHovered(false)}
                    >
                        {"MOWGLAI".split("").map((letter, i, arr) => {
                            // Calculate symmetric spread offset explicitly for hardware-accelerated letter-spacing
                            const offset = i - (arr.length - 1) / 2;
                            return (
                                <motion.span
                                    key={i}
                                    className="inline-block transform-gpu"
                                    animate={{ x: isTitleHovered && deviceInfo.hasHover ? `${offset * 0.12}em` : "0em" }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </motion.h1>
                </div>

                {/* Subtitle / Value Prop */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 sm:mt-1 max-w-3xl px-2"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="text-base sm:text-lg md:text-xl text-foreground/70 font-body font-light leading-relaxed">
                        <TextReveal text={t.Common.deliveringElegance} />
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8 sm:mt-6 flex flex-col items-center gap-6 px-4 w-full"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <Magnetic>
                        <motion.button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsStartClicked(true);
                                setTimeout(() => router.push('/investment'), 800);
                            }}
                            onHoverStart={() => deviceInfo.hasHover && setIsShakeHovered(true)}
                            onHoverEnd={() => setIsShakeHovered(false)}
                            animate={isShakeHovered ? {
                                x: [0, -2, 2, -4, 4, -6, 6],
                                transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                            } : {
                                x: 0,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className={cn(
                                "group relative z-10 inline-block w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground text-xs sm:text-lg font-bold uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-colors duration-300 rounded-full text-center border border-transparent",
                                isStartClicked ? "transition-none" : "overflow-hidden"
                            )}
                        >
                            {/* Shape Exploding Overlay */}
                            <div
                                className={cn(
                                    "absolute top-1/2 left-1/2 w-[300vw] h-[300vw] md:w-[250vw] md:h-[250vw] -translate-x-1/2 -translate-y-1/2 rounded-full z-[0] pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#c5a059]",
                                    isStartClicked ? "scale-100 opacity-100" : "scale-0 opacity-0"
                                )}
                            />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary whitespace-nowrap">START PROJECT</span>
                        </motion.button>
                    </Magnetic>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <AuditCircularButton size={deviceInfo.isMobile ? "md" : "lg"} />
                    </motion.div>
                </motion.div>

            </div>

            {/* Bottom Indicators */}
            {!deviceInfo.isMobile && (
                <>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-12 ml-2 left-24 hidden md:block text-xs font-display tracking-widest text-foreground/40 uppercase"
                    >
                        Global Digital Partnership
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-12 mr-2 right-24 hidden md:block text-xs font-display tracking-widest text-foreground/40 uppercase"
                    >
                        Scroll to Explore
                    </motion.div>
                </>
            )}
        </section>
    );
};
export default HeroSection;
