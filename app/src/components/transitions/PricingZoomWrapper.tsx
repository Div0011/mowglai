import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingZoomWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const PricingZoomWrapper = ({ children, className, id }: PricingZoomWrapperProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track when the element moves from the top of viewport to off-screen top
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Only animate in the last 20% of the scroll (when leaving viewport)
    // Scale goes from 1 (normal) to 10 (massive zoom)
    const scale = useTransform(scrollYProgress, [0.8, 1], [1, 10]);

    // Opacity stays 1 until very end, then fades out quickly
    const opacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);

    // Blur effect for speed feel
    const filter = useTransform(scrollYProgress, [0.8, 0.95], ["blur(0px)", "blur(10px)"]);

    return (
        <div ref={containerRef} id={id} className={cn("relative w-full z-30", className)}>
            <motion.div
                style={{ scale, opacity, filter }}
                className="origin-center will-change-transform"
            >
                {children}
            </motion.div>
        </div>
    );
};
