"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative w-full h-[100dvh] z-10 overflow-hidden flex flex-col items-center justify-center px-6 select-none"
        >
            <div className="container mx-auto max-w-7xl flex flex-col items-center text-center gap-6">
                {/* Desktop: Left CTA | MOWGLAI | Right CTA */}
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-14">
                    <Link
                        href="/ai-analyze"
                        className="order-2 md:order-1 group inline-flex items-center gap-1.5 text-sm md:text-base font-medium tracking-wide text-foreground underline underline-offset-8 decoration-primary/60 hover:text-primary hover:decoration-primary transition-colors duration-200 whitespace-nowrap"
                    >
                        <span>AI Analyze</span>
                        <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </Link>

                    <h1 className="order-1 md:order-2 text-[16vw] sm:text-[13vw] md:text-[8.5vw] lg:text-[7.5vw] font-display font-black uppercase tracking-[0.06em] text-foreground leading-none">
                        MOWGLAI
                    </h1>

                    <Link
                        href="/start-project"
                        className="order-3 group inline-flex items-center gap-1.5 text-sm md:text-base font-medium tracking-wide text-foreground underline underline-offset-8 decoration-primary/60 hover:text-primary hover:decoration-primary transition-colors duration-200 whitespace-nowrap"
                    >
                        <span>Start Project</span>
                        <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </Link>
                </div>

                <p className="text-[3.4vw] sm:text-sm md:text-base lg:text-lg text-foreground/85 font-bold tracking-wide whitespace-nowrap">
                    Websites, Software &amp; AI Automations.
                </p>
            </div>

            {/* Subtle Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-45">
                <svg className="w-5 h-5 text-foreground animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
