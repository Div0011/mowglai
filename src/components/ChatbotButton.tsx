"use client";

import { Bot } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMenuOpen } from "@/hooks/use-menu-open";

interface ChatbotButtonProps {
    onClick: () => void;
}

export default function ChatbotButton({ onClick }: ChatbotButtonProps) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isMenuOpen = useMenuOpen();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            aria-hidden={isMenuOpen}
            className={cn(
                "fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-[calc(0.875rem+env(safe-area-inset-right))] md:bottom-[calc(6.5rem+env(safe-area-inset-bottom))] md:right-[calc(2rem+env(safe-area-inset-right))] z-[60] flex items-center justify-center transition-all duration-300",
                isMenuOpen ? "opacity-0 scale-50 pointer-events-none" : "opacity-100 scale-100"
            )}
        >
            <motion.button
                onClick={onClick}
                className={cn(
                    "relative group w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_20px_rgba(var(--primary-rgb),0.25)] cursor-pointer",
                    resolvedTheme === "light"
                        ? "bg-primary/20 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary"
                        : "bg-background/80 text-primary hover:bg-primary/20 hover:border-primary/60"
                )}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Open Mowglai AI Chatbot"
                title="Chat with Mowglai AI"
            >
                {/* Ping pulse indicator */}
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>

                <Bot className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />

                {/* Desktop hover tooltip pill */}
                <span className="hidden md:group-hover:inline-flex pointer-events-none absolute right-[calc(100%+12px)] px-2.5 py-1 rounded-full bg-background/95 border border-primary/30 text-[11px] font-mono font-bold tracking-wider text-primary whitespace-nowrap shadow-lg backdrop-blur-md">
                    AI CHATBOT
                </span>
            </motion.button>
        </div>
    );
}
