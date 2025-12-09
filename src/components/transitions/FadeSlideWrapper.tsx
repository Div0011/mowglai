import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeSlideWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const FadeSlideWrapper = ({ children, className }: FadeSlideWrapperProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <div ref={containerRef} className={cn("relative w-full z-10", className)}>
            <motion.div
                style={{ y, opacity }}
                className="will-change-transform"
            >
                {children}
            </motion.div>
        </div>
    );
};
