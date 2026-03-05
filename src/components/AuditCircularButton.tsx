"use client";

/**
 * AuditCircularButton component - A magnetic circular button with revolving text.
 * On hover: button scales up. On click: button expands to fill the entire screen,
 * then navigates to the audit page.
 */

import React, { useRef, useEffect, useState, useCallback } from "react";
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
    size = "md"
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanding, setIsExpanding] = useState(false);
    const svgRef = useRef<SVGGElement | null>(null);
    const rotateRef = useRef(0);
    const rafRef = useRef<number | null>(null);
    const innerDiscRef = useRef<HTMLDivElement | null>(null);
    const [buttonRect, setButtonRect] = useState<{ x: number; y: number; width: number; height: number } | null>(null);

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

    // Rotating text animation
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

    const handleClick = useCallback(() => {
        if (!innerDiscRef.current) {
            router.push('/audit');
            return;
        }
        const rect = innerDiscRef.current.getBoundingClientRect();
        setButtonRect({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, width: rect.width, height: rect.height });
        setIsExpanding(true);
        // Navigate after the expand animation completes
        setTimeout(() => {
            router.push('/audit');
        }, 700);
    }, [router]);

    // Compute expand scale: must cover the full diagonal of the viewport
    const getExpandScale = () => {
        if (!buttonRect) return 1;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        // We need to cover the maximum corner distance from the button center
        const maxDist = Math.sqrt(Math.pow(Math.max(buttonRect.x, vw - buttonRect.x), 2) + Math.pow(Math.max(buttonRect.y, vh - buttonRect.y), 2));
        const radius = buttonRect.width / 2;
        return (maxDist / radius) * 2.2;
    };

    return (
        <>
            {/* Full-screen expand overlay */}
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
                            backgroundColor: "#c5a059",
                            zIndex: 9999,
                            pointerEvents: "none",
                            originX: "50%",
                            originY: "50%",
                        }}
                    />
                )}
            </AnimatePresence>

            <div
                className={cn("relative flex items-center justify-center", className)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
                role="button"
                aria-label="Get a Free Website Audit"
            >
                {/* Trail effect - screen-spanning marquee */}
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
                <motion.div
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={cn("relative flex items-center justify-center cursor-pointer transform-gpu z-10", sizeClasses[size])}
                >
                    {/* Pulse ring */}
                    <motion.span
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full border border-[#c5a059]/60 pointer-events-none"
                    />

                    {/* SVG rotating text */}
                    <motion.svg
                        animate={{
                            opacity: isHovered ? 1 : 0.4,
                            rotate: isHovered ? 90 : 0,
                            scale: isHovered ? 0.75 : 1.3,
                            color: isHovered ? "#000000" : "#c5a059"
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        viewBox="0 0 100 100"
                        className="absolute inset-0 w-full h-full pointer-events-none z-30"
                        aria-hidden
                    >
                        <g ref={svgRef}>
                            <path id="auditRingBase" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                            <text fontSize="8.5" letterSpacing="2" style={{ fontWeight: 800, textTransform: "uppercase" }}>
                                <textPath
                                    href="#auditRingBase"
                                    fill="currentColor"
                                    textLength="210"
                                    lengthAdjust="spacing"
                                >
                                    GET FREE AUDIT • GET FREE AUDIT •
                                </textPath>
                            </text>
                        </g>
                    </motion.svg>

                    {/* Inner disc */}
                    <motion.div
                        ref={innerDiscRef}
                        animate={{
                            scale: isHovered ? 2.1 : 1,
                            backgroundColor: isHovered ? "rgba(197,160,89,1)" : "rgba(197,160,89,0.15)",
                            boxShadow: isHovered
                                ? "0 0 50px rgba(197,160,89,0.5), 0 0 100px rgba(197,160,89,0.25)"
                                : "0 0 0px transparent",
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className={cn(
                            "rounded-full border border-[#c5a059]/40 backdrop-blur-xl flex items-center justify-center z-20",
                            size === "sm" ? "w-8 h-8" : size === "md" ? "w-9 h-9 md:w-10 md:h-10" : "w-12 h-12 md:w-14 md:h-14"
                        )}
                    >
                        <motion.div animate={{ rotate: isHovered ? 45 : 0 }} transition={{ duration: 0.4 }}>
                            <ArrowUpRight className={cn(iconSizes[size], isHovered ? "text-black" : "text-[#c5a059]")} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default AuditCircularButton;
