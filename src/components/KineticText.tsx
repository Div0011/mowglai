"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface KineticTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function KineticText({ children, className = "" }: KineticTextProps) {
    const textRef = useRef<HTMLHeadingElement>(null);

    // Track the scroll position of this specific element relative to the viewport
    const { scrollYProgress } = useScroll({
        target: textRef,
        // Start tracking when the top of the element hits the bottom of the viewport
        // Stop tracking when the center of the element hits the center of the viewport
        offset: ["start end", "center center"]
    });

    // We use a spring to make the morphological shift feel "bouncy" and physical
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });

    // Map the scroll progress (0 to 1) to a Font Weight (100 to 900)
    // We use an Ease-In-Out style curve implicitly through the spring, 
    // but we can also array-map it for snapping:
    // When progress is 0 -> 0.6, it stays relatively light.
    // When progress hits 0.8 -> 1.0, it rapidly snaps to Bold (Mastery).
    // We map to fontVariationSettings string to smoothly interpolate true variable fonts 
    // instead of standard CSS step weights.
    const fontVariationSettings = useTransform(
        smoothProgress,
        [0, 0.6, 1],
        ["'wght' 100", "'wght' 300", "'wght' 900"]
    );

    // Compensate for the extra width of the bold letters by slightly reducing tracking
    const letterSpacing = useTransform(smoothProgress, [0, 1], ["0.1em", "-0.05em"]);

    // Add a slight scaling impact as it solidifies
    const scale = useTransform(smoothProgress, [0, 1], [0.95, 1]);

    // A faint blur when it's just emerging (chaos) to sharp (mastery)
    const blur = useTransform(smoothProgress, [0, 0.7, 1], ["blur(10px)", "blur(2px)", "blur(0px)"]);
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <>
            <noscript>
                <div className={`${className} font-black opacity-100 blur-none`} style={{ fontVariationSettings: "'wght' 900" }}>
                    {children}
                </div>
            </noscript>
            <motion.div
                ref={textRef}
                style={{
                    fontVariationSettings,
                    letterSpacing,
                    scale,
                    opacity,
                    filter: blur,
                    transformOrigin: "center center"
                }}
                className={`${className}`}
            >
                {children}
            </motion.div>
        </>
    );
}
