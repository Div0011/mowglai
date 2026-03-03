"use client";

/**
 * AuditCircularButton component - A magnetic circular button with revolving text
 * used for triggering website audits.
 */

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface AuditCircularButtonProps {
    className?: string;
    showLabel?: boolean;
    size?: "sm" | "md" | "lg";
}

const AuditCircularButton: React.FC<AuditCircularButtonProps> = ({
    className,
    showLabel = true,
    size = "md"
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const svgRef = useRef<SVGGElement | null>(null);
    const rotateRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    const sizeClasses = {
        sm: "w-12 h-12",
        md: "w-14 h-14 md:w-16 md:h-16",
        lg: "w-24 h-24 md:w-32 md:h-32"
    };

    const iconSizes = {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-8 h-8"
    };

    useEffect(() => {
        const tick = () => {
            rotateRef.current = (rotateRef.current + 0.5) % 360;
            if (svgRef.current) {
                svgRef.current.setAttribute(
                    "transform",
                    `rotate(${rotateRef.current}, 50, 50)`
                );
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    const router = useRouter();

    const handleAuditClick = () => {
        setIsClicked(true);
        setTimeout(() => {
            router.push('/audit');
        }, 800); // Wait for the visual explosion to finish before pushing router
    };

    return (
        <div
            className={cn("relative flex items-center justify-center", className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleAuditClick}
            role="button"
            aria-label="Get a Free Website Audit"
        >
            {/* Trail effect - Prominent screen-spanning marquee behind the button */}
            <AnimatePresence>
                {isHovered && (
                    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center">
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: "-100%", opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="flex items-center gap-12 whitespace-nowrap"
                        >
                            {[...Array(8)].map((_, i) => (
                                <span
                                    key={i}
                                    className="text-[18vw] md:text-[22vw] font-display font-black uppercase text-[#c5a059]/20 select-none tracking-tighter italic filter blur-[1px]"
                                >
                                    GET FREE AUDIT •
                                </span>
                            ))}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Circle + rotating text */}
            <div className={cn("relative flex items-center justify-center cursor-pointer z-10", sizeClasses[size])}>

                {/* EXPLOSION ELEMENT - Screen Takeover on click */}
                <div
                    className={cn(
                        "absolute top-1/2 left-1/2 w-[300vw] h-[300vw] md:w-[200vw] md:h-[200vw] -translate-x-1/2 -translate-y-1/2 rounded-full z-[999] pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                        "bg-gradient-to-br from-[#c5a059] via-[#0d1a12] to-black",
                        isClicked ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )}
                />

                {/* Pulse ring - Built into Tailwind now */}
                <span
                    className={cn(
                        "absolute inset-0 rounded-full border border-[#c5a059]/60 pointer-events-none transition-opacity duration-500",
                        "animate-[ping_3s_ease-in-out_infinite] opacity-50",
                        isHovered && "opacity-0" // Hide ping ring immediately upon hover to focus on the core expansion
                    )}
                />

                {/* SVG rotating text */}
                <svg
                    viewBox="0 0 100 100"
                    className={cn(
                        "absolute inset-0 w-full h-full pointer-events-none scale-[1.3] transition-all duration-700 ease-out",
                        isHovered ? "opacity-100 rotate-45" : "opacity-40 rotate-0"
                    )}
                    aria-hidden
                >
                    <g ref={svgRef}>
                        <path id="auditRingBase" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                        <text fontSize="8.5" letterSpacing="2" style={{ fontWeight: 800, textTransform: "uppercase" }}>
                            <textPath
                                href="#auditRingBase"
                                fill="#c5a059"
                                textLength="210"
                                lengthAdjust="spacing"
                            >
                                GET FREE AUDIT • GET FREE AUDIT •
                            </textPath>
                        </text>
                    </g>
                </svg>

                <div
                    className={cn(
                        "rounded-full border border-[#c5a059]/40 flex items-center justify-center z-20 transition-all duration-500 ease-out",
                        isHovered
                            ? "bg-[#c5a059] scale-[1.35] shadow-[0_0_40px_rgba(197,160,89,0.5),0_0_80px_rgba(197,160,89,0.25)] border-[#c5a059]"
                            : "bg-[#c5a059]/15 shadow-none scale-100",
                        size === "sm" ? "w-8 h-8" : size === "md" ? "w-9 h-9 md:w-10 md:h-10" : "w-12 h-12 md:w-14 md:h-14"
                    )}
                >
                    <div className={cn("transition-transform duration-500", isHovered ? "rotate-45" : "rotate-0")}>
                        <ArrowUpRight className={cn(iconSizes[size], "transition-colors duration-500", isHovered ? "text-black" : "text-[#c5a059]")} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditCircularButton;
