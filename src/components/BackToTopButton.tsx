"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import Magnetic from "@/components/Magnetic";
import { cn } from "@/lib/utils";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={cn(
            "fixed bottom-24 right-[calc(0.875rem+env(safe-area-inset-right))] md:bottom-8 md:right-32 z-50 transition-all duration-500 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        )}>
            <Magnetic>
                <button
                    onClick={scrollToTop}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground border border-primary/20 shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
                    aria-label="Back to Top"
                >
                    <ArrowUp className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-y-1" />
                </button>
            </Magnetic>
        </div>
    );
};

export default BackToTopButton;
