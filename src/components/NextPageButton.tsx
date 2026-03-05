"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/Magnetic";

interface NextPageButtonProps {
    label: string;
    href: string;
    tagline?: string;
}

const NextPageButton = ({ label, href, tagline }: NextPageButtonProps) => {
    const router = useRouter();
    const [isExpanding, setIsExpanding] = useState(false);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [buttonRect, setButtonRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

    const handleClick = useCallback(() => {
        if (!buttonRef.current) {
            router.push(href);
            return;
        }
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonRect({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, width: rect.width, height: rect.height });
        setIsExpanding(true);

        setTimeout(() => {
            router.push(href);
        }, 700);
    }, [router, href]);

    const getExpandScale = () => {
        if (!buttonRect) return 1;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const maxDist = Math.sqrt(Math.pow(Math.max(buttonRect.x, vw - buttonRect.x), 2) + Math.pow(Math.max(buttonRect.y, vh - buttonRect.y), 2));
        const radius = buttonRect.width / 2;
        return (maxDist / radius) * 2.2;
    };

    return (
        <div className="w-screen ml-[calc(50%-50vw)] h-[300px] flex flex-col items-center justify-center relative overflow-hidden">

            <AnimatePresence>
                {isExpanding && buttonRect && (
                    <motion.div
                        key="expand-overlay"
                        initial={{ scale: 1, borderRadius: "50%" }}
                        animate={{ scale: getExpandScale(), borderRadius: "0%" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            position: "fixed",
                            top: buttonRect.y,
                            left: buttonRect.x,
                            width: buttonRect.width,
                            height: buttonRect.height,
                            translateX: "-50%",
                            translateY: "-50%",
                            backgroundColor: "hsl(var(--primary))",
                            zIndex: 9999,
                            pointerEvents: "none",
                            originX: "50%",
                            originY: "50%",
                        }}
                    />
                )}
            </AnimatePresence>

            {tagline && (
                <p className="relative z-10 text-xs md:text-sm font-display tracking-widest uppercase mb-6 text-muted-foreground/60" data-aos="fade-up">
                    {tagline}
                </p>
            )}

            <div className="relative w-full flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-screen -translate-y-1/2 transform pointer-events-none z-0">
                    <div className="relative flex whitespace-nowrap overflow-hidden py-12">
                        <div className="flex animate-marquee-slow items-center flex-shrink-0">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="inline-flex items-center gap-6 mx-10 text-xl sm:text-3xl md:text-4xl font-display font-black text-foreground/[0.08] uppercase tracking-widest"
                                >
                                    <span>{label}</span>
                                    <ArrowRight className="w-8 h-8 opacity-20" strokeWidth={2} />
                                </div>
                            ))}
                        </div>
                        <div className="flex animate-marquee-slow items-center flex-shrink-0" aria-hidden="true">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="inline-flex items-center gap-6 mx-10 text-xl sm:text-3xl md:text-4xl font-display font-black text-foreground/[0.08] uppercase tracking-widest"
                                >
                                    <span>{label}</span>
                                    <ArrowRight className="w-8 h-8 opacity-20" strokeWidth={2} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Magnetic>
                    <div
                        ref={buttonRef}
                        onClick={handleClick}
                        role="button"
                        tabIndex={0}
                        className="group relative z-10 flex px-6 sm:px-12 py-4 sm:py-6 rounded-full border-2 border-primary/20 bg-background/40 hover:bg-primary hover:border-primary transition-all duration-400 overflow-hidden backdrop-blur-xl scale-100 sm:scale-110 md:scale-125 cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                        <div className="flex items-center gap-3 sm:gap-4 text-xl sm:text-4xl md:text-5xl font-display font-medium text-foreground group-hover:text-primary-foreground tracking-tight uppercase leading-none z-10">
                            <span>{label}</span>
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                <span className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-4 font-light text-4xl sm:text-5xl leading-none">
                                    -
                                </span>
                                <ArrowRight strokeWidth={1.5} className="absolute transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                            </div>
                        </div>
                    </div>
                </Magnetic>
            </div>
        </div>
    );
};

export default NextPageButton;
