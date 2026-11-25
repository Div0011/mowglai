"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const PEOPLE_QUOTES = [
    {
        name: "Divyansh Awasthi",
        role: "Lead Developer",
        quote: "We build software and automations that stay fast, clean, and reliable long after launch—no bloat, just engineering that works.",
    },
    {
        name: "Ajay Ahlawat",
        role: "Marketing Lead",
        quote: "Great design only wins when the right customers find it. We pair clear positioning with measurable growth so every launch converts.",
    },
];

export default function KnowThePeopleSection() {
    return (
        <section
            id="know-the-people"
            className="relative w-full py-20 md:py-24 z-20 overflow-hidden content-visibility-auto gpu-accelerate"
        >
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="space-y-3 mb-12">
                    <div className="flex items-center gap-3 text-primary font-display font-bold text-xs tracking-[0.4em] uppercase">
                        <div className="w-10 h-[1.5px] bg-primary" />
                        Leadership
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-normal text-foreground uppercase leading-[1.2]">
                        Know The <span className="text-primary italic">People</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PEOPLE_QUOTES.map((person, idx) => (
                        <motion.div
                            key={person.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col justify-between gap-6 p-7 md:p-8 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm hover:border-primary/35 transition-colors duration-300"
                        >
                            <div className="space-y-4">
                                <Quote className="w-6 h-6 text-primary/70" />
                                <p className="text-base md:text-lg text-foreground/85 leading-relaxed font-normal">
                                    &ldquo;{person.quote}&rdquo;
                                </p>
                            </div>

                            <div className="pt-4 border-t border-foreground/10">
                                <h3 className="text-base font-display font-bold text-foreground uppercase tracking-wide">
                                    {person.name}
                                </h3>
                                <p className="text-xs font-mono uppercase tracking-widest text-primary mt-0.5">
                                    {person.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
