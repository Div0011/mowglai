"use client";

import { useRef, ReactNode, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MonolithicCardProps {
    children: ReactNode;
    className?: string;
    springTheme?: "heavy" | "fluid";
}

export default function MonolithicCard({ children, className = "", springTheme = "heavy" }: MonolithicCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Track normalized mouse positions (-1 to 1) 
    const [isHovered, setIsHovered] = useState(false);

    // Using useSpring. Heavy for monoliths, Fluid for DNA/microscopic elements.
    const springConfig = springTheme === "fluid"
        ? { stiffness: 200, damping: 15 } // viscous, fast semantic motion
        : { stiffness: 100, damping: 20 }; // hefty, dense feel

    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        // Calculate raw position relative to center of the element
        const xPos = e.clientX - rect.left - rect.width / 2;
        const yPos = e.clientY - rect.top - rect.height / 2;

        // Normalize between -1 and 1
        x.set(xPos / (rect.width / 2));
        y.set(yPos / (rect.height / 2));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Slowly snap back to flat when the cursor leaves (Mastery: It takes gravity back)
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // --- The "Mowglai Inverse Twist" Perspective Mapping ---
    // If the mouse is right (+1), we rotate negative (away), creating an inverse parallax 
    // simulating a hefty physical object anchored at its center.

    const maxRotation = 10; // degrees
    const rotateX = useTransform(y, [-1, 1], [-maxRotation, maxRotation]); // Mouse up -> tilts top away
    const rotateY = useTransform(x, [-1, 1], [maxRotation, -maxRotation]); // Mouse right -> tilts right away

    // Firelight Shadow mapping (always casts opposite to the tilt for realism)
    const shadowX = useTransform(x, [-1, 1], [-20, 20]);
    const shadowY = useTransform(y, [-1, 1], [-20, 20]);
    const shadowSpread = isHovered ? "40px" : "0px";

    // We compose the box shadow dynamically
    const boxShadow = useTransform(
        [shadowX, shadowY],
        ([latestX, latestY]: number[]) => {
            return `${latestX}px ${latestY}px ${shadowSpread} rgba(197, 160, 89, ${isHovered ? 0.2 : 0})`;
        }
    );

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                perspective: 1500,
                transformStyle: "preserve-3d"
            }}
            className={`relative group ${className}`}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    boxShadow,
                    transformStyle: "preserve-3d",
                }}
                className="w-full h-full bg-[#111111] border border-[#c5a059]/10 rounded-2xl overflow-hidden transition-colors duration-500 ease-out group-hover:border-[#c5a059]/30"
            >
                {/* Counter-Parallax Content Container */}
                {/* Moving 5 degrees one way shifts the internal content slightly the OTHER way */}
                <motion.div
                    style={{
                        x: useTransform(x, [-1, 1], [15, -15]),
                        y: useTransform(y, [-1, 1], [15, -15]),
                        translateZ: 30, // Push content forward slightly off the back plane
                        width: 'calc(100% + 30px)', // expand slightly to hide bounds movement
                        height: 'calc(100% + 30px)',
                        marginLeft: '-15px',
                        marginTop: '-15px'
                    }}
                    className="w-full h-full flex flex-col items-center justify-center p-6"
                >
                    {children}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
