"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface LumaSparkTransitionProps {
    children: ReactNode;
    className?: string;
    // Optional setting if we want to reverse the burn direction, etc.
}

export default function LumaSparkTransition({ children, className = "" }: LumaSparkTransitionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // The transition maps from when the top of the container hits the bottom of the viewport
        // to when the center of the container reaches the viewport center.
        offset: ["start end", "center center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 1. The Spark (SVG Y-Axis Position)
    // The spark travels down the center as soon as the bounding box enters
    const sparkY = useTransform(smoothProgress, [0, 0.4], ["-100px", "50%"]);

    // The spark intensity (fades out rapidly after 40% as the mask takes over)
    const sparkOpacity = useTransform(smoothProgress, [0, 0.1, 0.4, 0.5], [0, 1, 1, 0]);
    const sparkScale = useTransform(smoothProgress, [0, 0.4, 0.5], [0.5, 2, 0]);

    // 2. The Ignition (Luma CSS Mask Expansion)
    // From 0 to 40% scroll, the mask is tiny/hidden. 
    // From 40% to 80% scroll, it aggressively burns outward to 200vw.
    // The dirty edge is handled via multiple radial gradient stops in the CSS string.
    const maskSize = useTransform(
        smoothProgress,
        [0.4, 0.8],
        ["0vw", "250vw"]  // Needs to be sufficiently large to clear the corners of ultra-wides
    );

    // Dynamic Mask style mapping
    const WebkitMaskImage = useTransform(
        maskSize,
        (size) => {
            // Using a complex radial gradient as our "Luma" base. 
            // In a pure production env with severe performance needs, we might use a masked PNG sequence, 
            // but this CSS trick replicates "organic fire edges" efficiently.
            return `radial-gradient(circle ${size} at 50% 10%, 
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,1) 60%, 
                rgba(0,0,0,0.8) 80%, 
                rgba(0,0,0,0.4) 95%, 
                rgba(0,0,0,0) 100%)
            `;
        }
    );

    return (
        <div ref={containerRef} className={`relative w-full overflow-hidden ${className}`}>

            {/* The Fuse / Spark */}
            <motion.div
                style={{
                    y: sparkY,
                    opacity: sparkOpacity,
                    scale: sparkScale,
                    x: "-50%"
                }}
                className="absolute top-0 left-1/2 z-[5] w-[150px] h-[150px] pointer-events-none mix-blend-screen"
            >
                {/* Visual representation of an intense spark hitting the line */}
                <div className="absolute inset-0 rounded-full bg-[#c5a059] blur-[40px] opacity-70" />
                <div className="absolute inset-1/4 rounded-full bg-white blur-[10px]" />
                <div className="absolute top-1/2 left-1/2 w-2 h-[200px] -translate-x-1/2 -translate-y-1/2 bg-white blur-[2px]" />
                <div className="absolute top-1/2 left-1/2 w-[200px] h-2 -translate-x-1/2 -translate-y-1/2 bg-white blur-[2px]" />
            </motion.div>

            {/* The Wrapped Content (Masked) */}
            <motion.div
                style={{
                    WebkitMaskImage,
                    WebkitMaskRepeat: "no-repeat",
                    maskImage: WebkitMaskImage,
                    maskRepeat: "no-repeat",
                    // Note: applying will-change here can improve performance during the mask expansion
                    willChange: "mask-image, -webkit-mask-image"
                }}
                className="w-full relative z-[2]"
            >
                {children}
            </motion.div>
        </div>
    );
}
