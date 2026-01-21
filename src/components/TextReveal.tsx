"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    // Split text into words
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: delay * 0.1,
            },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={cn("overflow-hidden flex flex-wrap py-4", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }} // Trigger when 10% in view
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="mr-[0.2em] last:mr-0 inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
