"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Globe, Zap, Layers, Smartphone } from "lucide-react";

const cards = [
    { icon: Sparkles, title: "Aesthetic" },
    { icon: Globe, title: "Global" },
    { icon: Zap, title: "Fast" },
    { icon: Layers, title: "Deep" },
    { icon: Smartphone, title: "Mobile" }
];

export function AestheticShowcase() {
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prev) => (prev + 1) % 5);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCard}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.2, y: -30 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full max-w-[300px] aspect-square flex flex-col items-center justify-center p-12 relative"
                >
                    {(() => {
                        const ItemIcon = cards[activeCard].icon;
                        return (
                            <>
                                <ItemIcon className="w-24 h-24 text-primary mb-8 animate-pulse drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]" strokeWidth={1} />
                                <span className="text-3xl md:text-5xl font-display font-black uppercase tracking-[0.2em] text-foreground text-center">
                                    {cards[activeCard].title}
                                </span>
                            </>
                        );
                    })()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
