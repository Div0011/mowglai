"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { useMenuOpen } from "@/hooks/use-menu-open";
import { cn } from "@/lib/utils";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const isMenuOpen = useMenuOpen();

    useEffect(() => {
        let rAF = 0;
        const toggleVisibility = () => {
            if (rAF) return;
            rAF = requestAnimationFrame(() => {
                setIsVisible(window.scrollY > 300);
                rAF = 0;
            });
        };

        toggleVisibility();
        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => {
            if (rAF) cancelAnimationFrame(rAF);
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        if (typeof window !== "undefined" && window.__lenis) {
            window.__lenis.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            aria-hidden={isMenuOpen}
            className={cn(
                "fixed z-[60] transition-all duration-500 transform",
                // Positioned vertically above the Contact Toggle on the right
                "bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))]",
                "md:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] md:right-[calc(1.25rem+env(safe-area-inset-right))]",
                isVisible && !isMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-50 pointer-events-none"
            )}>
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative group w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] backdrop-blur-md border border-white/20"
                aria-label="Back to Top"
            >
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 group-hover:opacity-40" />
                <ArrowUp className="w-4 h-4 md:w-5 md:h-5 z-10" />
            </motion.button>
        </div>
    );
};

export default BackToTopButton;
