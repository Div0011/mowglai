import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialsRevealWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const TestimonialsRevealWrapper = ({ children, className }: TestimonialsRevealWrapperProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track entry into viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    // Start slightly zoomed out (0.8) and fade in, reaching normal size (1) at center
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.25, 1]); // Fade in faster

    return (
        <div ref={containerRef} className={cn("relative w-full z-20", className)}>
            <motion.div
                style={{ scale, opacity }}
                className="origin-center will-change-transform"
            >
                {children}
            </motion.div>
        </div>
    );
};
