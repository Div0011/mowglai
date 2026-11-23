"use client";

import Link from "next/link";
import { ArrowRight, ScanLine } from "lucide-react";
import Magnetic from "./Magnetic";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative w-full h-[100dvh] z-10 overflow-hidden flex flex-col items-center justify-center border-none py-6 px-4 md:px-8 select-none"
        >
            {/* Main Hero Title: MOWGLAI */}
            <div
                className="container mx-auto relative z-30 flex flex-col items-center justify-center h-full max-h-[72dvh] md:max-h-[85dvh] w-full max-w-6xl pointer-events-none mix-blend-difference"
                style={{ mixBlendMode: "difference" }}
            >
                <h1 className="text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw] font-display font-black uppercase tracking-[0.08em] text-white text-center leading-none">
                    MOWGLAI
                </h1>
            </div>

            {/* Desktop Circular CTA Buttons */}
            <div
                className="hidden md:block absolute top-1/2 -translate-y-1/2 left-8 z-10 opacity-0 animate-fade-in animate-duration-1000"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
                <Magnetic>
                    <Link
                        href="/ai-analyze"
                        className="group relative flex flex-col items-center justify-center text-center w-36 h-36 rounded-full transition-all duration-500 hover:scale-110"
                    >
                        <div className="absolute inset-0 rounded-full bg-background/5 backdrop-blur-3xl border border-primary/20 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] group-hover:scale-[10] group-hover:bg-white z-10" />
                        <span className="relative z-20 flex flex-col items-center justify-center gap-0.5 text-xs font-bold uppercase tracking-[0.15em] leading-tight text-white transition-colors duration-500 group-hover:text-black">
                            <span>AI</span>
                            <span>ANALYZE</span>
                            <ScanLine className="w-4 h-4 mt-0.5 transition-all duration-500 group-hover:rotate-180 group-hover:text-black group-hover:stroke-black" />
                        </span>
                    </Link>
                </Magnetic>
            </div>

            <div
                className="hidden md:block absolute top-1/2 -translate-y-1/2 right-8 z-10 opacity-0 animate-fade-in animate-duration-1000"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
                <Magnetic>
                    <Link
                        href="/ai-onboard"
                        className="group relative flex flex-col items-center justify-center text-center w-36 h-36 rounded-full transition-all duration-500 hover:scale-110"
                    >
                        <div className="absolute inset-0 rounded-full bg-primary transition-all duration-700 ease-[cubic-bezier(0.25,1,0.3,1)] group-hover:scale-[10] group-hover:bg-white z-10" />
                        <span className="relative z-20 flex flex-col items-center justify-center gap-0.5 text-xs font-bold uppercase tracking-[0.15em] leading-tight text-white transition-colors duration-500 group-hover:text-black">
                            <span>AI</span>
                            <span>ONBOARD</span>
                            <ArrowRight className="w-4 h-4 mt-0.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
                        </span>
                    </Link>
                </Magnetic>
            </div>

            {/* Mobile Stacked CTA Buttons */}
            <div
                className="md:hidden absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 w-[90%] z-30"
                style={{ bottom: "20dvh" }}
            >
                <Link
                    href="/ai-analyze"
                    className="w-[80%] text-center inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full text-sm font-bold shadow-md"
                >
                    AI ANALYZE
                </Link>
                <Link
                    href="/ai-onboard"
                    className="w-[80%] text-center inline-flex items-center justify-center gap-2 bg-background border border-primary/20 text-primary px-4 py-3 rounded-full text-sm font-bold shadow-md"
                >
                    AI ONBOARD
                </Link>
            </div>

            {/* Subtle Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-60">
                <svg className="w-6 h-6 text-foreground animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;
