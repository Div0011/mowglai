"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function GoldenThread() {
    const { scrollYProgress } = useScroll();

    // Smooth, weighted tracking of the scroll position (Elastic & silk-like feel)
    const activePathLen = useSpring(scrollYProgress, {
        stiffness: 45,
        damping: 18,
        restDelta: 0.0001
    });

    // We expand the path mapping from top to bottom
    // It weaves and mimics a natural vine/thread dropping through the viewport
    const pathD = `M 50,0 
                   C 30,15 70,25 50,40 
                   C 10,60 90,80 50,105`;

    return (
        <div className="fixed inset-0 pointer-events-none z-10 w-full h-[100dvh] overflow-hidden mix-blend-screen opacity-80 mt-[80px]">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
            >
                {/* 1. Base Faint Track (The Jungle Path to be discovered) */}
                <path
                    d={pathD}
                    stroke="rgba(197, 160, 89, 0.08)"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                />

                {/* 2. Scroll-Driven Main Thread (Drawn as you scroll) */}
                <motion.path
                    d={pathD}
                    stroke="#c5a059"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    style={{
                        pathLength: activePathLen,
                        opacity: useTransform(activePathLen, [0, 0.03], [0, 1]),
                        filter: "drop-shadow(0 0 10px rgba(197,160,89,0.5))"
                    }}
                />

                {/* 3. The "Heartbeat" Pulse */}
                {/* This uses an SVG mask linked to activePathLen so the pulse is ONLY visible on parts of the thread that have already been drawn by scrolling! */}
                <mask id="drawn-thread-mask">
                    <motion.path
                        d={pathD}
                        stroke="white"
                        strokeWidth="10" // slightly thicker to ensure no clipping
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        style={{ pathLength: activePathLen }}
                        transition={{ duration: 0 }}
                    />
                </mask>

                <g mask="url(#drawn-thread-mask)">
                    <motion.path
                        d={pathD}
                        stroke="#fff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        // The traveling dash segment representing the 'Heartbeat'
                        strokeDasharray="4 200"
                        initial={{ strokeDashoffset: 200 }}
                        animate={{ strokeDashoffset: -200 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            filter: "drop-shadow(0 0 15px #c5a059) drop-shadow(0 0 25px rgba(255,255,255,0.8))",
                        }}
                    />
                </g>

                {/* 4. The Compass / Geometric Leaf (End of Journey) */}
                {/* As `activePathLen` nears 1, the scale and opacity hit 100% */}
                <motion.g
                    style={{
                        scale: useTransform(activePathLen, [0.95, 1], [0, 1]),
                        opacity: useTransform(activePathLen, [0.95, 1], [0, 1]),
                        transformOrigin: "50px 105px" // The absolute end of the line
                    }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* The outer glowing compass ring */}
                    <circle cx="50" cy="105" r="3" stroke="#c5a059" strokeWidth="0.5" fill="none" opacity="0.6" />

                    {/* The central geometric lotus/leaf */}
                    <path
                        d="M 50,102 L 51.5,105 L 50,108 L 48.5,105 Z M 50,105 L 53,105 L 50,106.5 L 47,105 Z"
                        fill="#c5a059"
                        opacity="0.9"
                        style={{ filter: "drop-shadow(0 0 5px rgba(197,160,89,0.8))" }}
                    />
                </motion.g>
            </svg>
        </div>
    );
}
