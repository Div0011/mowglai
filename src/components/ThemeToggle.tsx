"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        const newTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    return (
        <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] left-[calc(0.625rem+env(safe-area-inset-left))] md:bottom-[calc(2rem+env(safe-area-inset-bottom))] md:left-[calc(2rem+env(safe-area-inset-left))] z-[60] flex items-center justify-center">
            <button
                onClick={toggleTheme}
                className={cn(
                    "w-14 h-14 md:w-16 md:h-16 rounded-full border border-primary/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]",
                    // Light Mode: Translucent Gold BG, Green Icon -> Hover: Translucent Green BG, Gold Icon
                    resolvedTheme === "light"
                        ? "bg-primary/20 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary"
                        : "bg-background/5 text-primary hover:bg-primary/10 hover:border-primary/50"
                )}
                aria-label="Toggle Theme"
            >
                {resolvedTheme === "dark" ? (
                    <Moon className="w-5 h-5 md:w-6 md:h-6 animate-in fade-in rotate-0 transition-transform duration-500 hover:rotate-12" />
                ) : (
                    <Sun className="w-5 h-5 md:w-6 md:h-6 animate-in fade-in rotate-0 transition-transform duration-500 hover:rotate-90" />
                )}
            </button>
        </div>
    );
};

export default ThemeToggle;
