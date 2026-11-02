"use client";

import Link from "next/link";
import { ArrowRight, Code2, Search, Bot, Cpu, Shield, Zap, Sparkles, Building2, Truck, Sun, CheckCircle2, Server, Cloud, Layers } from "lucide-react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Magnetic from "@/components/Magnetic";
import LuminaSprout from "@/components/interactive/LuminaSprout";
import LiveAuditScanner from "@/components/interactive/LiveAuditScanner";
import InteractivePricingCalculator from "@/components/interactive/InteractivePricingCalculator";
import RLIntelligenceSimulator from "@/components/interactive/RLIntelligenceSimulator";
import TeamSection from "@/components/TeamSection";

const SelectedWork = dynamic(() => import("@/components/SelectedWork"), { ssr: false });
const TemplatesShowcase = dynamic(() => import("@/components/TemplatesShowcase"), { ssr: false });
const InteractiveSetupSection = dynamic(() => import("@/components/InteractiveSetupSection"), { ssr: false });

function ScrollReveal({
    children,
    delay = 0,
    direction = "up",
    className = ""
}: {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const offset = isMobile ? 20 : 40;

    const directions = {
        up: { y: offset, x: 0 },
        down: { y: -offset, x: 0 },
        left: { y: 0, x: offset },
        right: { y: 0, x: -offset },
    };

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    );
}

export default function HomeContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden space-y-20 md:space-y-28">
            {/* 1. Live Website Audit & Performance Scanner */}
            <section id="live-audit-section" className="relative w-full pt-8 pb-8 z-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <LiveAuditScanner />
                </div>
            </section>

            {/* 2. Capabilities & Bento Grid (Multi-Cloud & Enterprise Capabilities) */}
            <section id="our-services-section" className="relative w-full py-8 z-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex flex-col gap-10 md:gap-14">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                        <ScrollReveal direction="left" className="space-y-3">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-xs font-mono font-bold text-primary uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Multi-Cloud Runtimes & Frontier LLM Mastery
                            </div>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-tight">
                                Enterprise <br />
                                <span className="text-primary italic">Capabilities</span> & Architecture.
                            </h2>
                            <p className="text-white/70 text-sm sm:text-base font-normal max-w-xl leading-relaxed">
                                Engineered across Google Cloud (GCP), AWS, Azure, and Cloudflare Edge. Driven by Gemini 2.5, Claude 3.5 Sonnet, and Llama 3.3 via Contextual Bandit reinforcement learning.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={0.2} className="shrink-0 scale-75 md:scale-90">
                            <LuminaSprout />
                        </ScrollReveal>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {/* Tile 1: Web Development & Architecture */}
                        <ScrollReveal
                            direction="up"
                            delay={0.1}
                            className="md:col-span-2 rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                                            <Code2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                                            Frontier Web Architecture
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase mb-3">
                                        Sub-50ms React 19 & Next.js 16 Web Applications
                                    </h3>
                                    <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl">
                                        Engineered for maximum conversion and extreme performance. Zero layout shift, full edge caching, 3D WebGL interactions via Three.js, and guaranteed 100/100 Google Lighthouse scores.
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4 text-xs font-mono text-white/60">
                                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Static & Dynamic Edge</span>
                                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Framer Motion / GSAP</span>
                                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Multi-Cloud Sovereignty</span>
                                    </div>
                                    <Link
                                        href="/services/web-development"
                                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-primary hover:text-white transition-colors"
                                    >
                                        <span>Explore Web Systems</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Tile 2: SEO, GEO & AEO Search Intelligence */}
                        <ScrollReveal
                            direction="up"
                            delay={0.2}
                            className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        <Search className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                                        Search Domination
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase mb-3">
                                    AIO, GEO & GA4 Telemetry
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Led by our search specialists: Keyword ranking research, technical on-page Schema.org graphs, off-page authority building, and Google Analytics 4 conversion tracking.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10">
                                <Link
                                    href="/services/digital-strategy"
                                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 hover:text-white transition-colors"
                                >
                                    <span>Search Strategy & Analytics</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </ScrollReveal>

                        {/* Tile 3: Enterprise Commerce & POS */}
                        <ScrollReveal
                            direction="up"
                            delay={0.15}
                            className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-primary/40 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">
                                        Enterprise Commerce
                                    </span>
                                </div>
                                <h3 className="text-xl font-display font-black text-white uppercase mb-2">
                                    Smart Retail POS & Automated GST
                                </h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                    Instant line-item POS billing, automated 5% GST computation, inventory ledger tracking, and one-click PDF receipts.
                                </p>
                            </div>

                            <Link
                                href="/client-portal?mode=demo&proj=commerce"
                                className="mt-6 pt-4 border-t border-white/10 inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase"
                            >
                                <span>Inspect Commerce Demo</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </ScrollReveal>

                        {/* Tile 4: Mission-Critical 24/7 Logistics */}
                        <ScrollReveal
                            direction="up"
                            delay={0.25}
                            className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/40 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                        <Truck className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                                        Logistics Engine
                                    </span>
                                </div>
                                <h3 className="text-xl font-display font-black text-white uppercase mb-2">
                                    24/7 Roadside Logistics & Telemetry
                                </h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                    Emergency roadside intake, live dynamic mechanic dispatching, real-time GPS telemetry, and fleet recovery SLA.
                                </p>
                            </div>

                            <Link
                                href="/client-portal?mode=demo&proj=logistics"
                                className="mt-6 pt-4 border-t border-white/10 inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase"
                            >
                                <span>Inspect Logistics Demo</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </ScrollReveal>

                        {/* Tile 5: Autonomous Multi-Agent Hive & Workforce */}
                        <ScrollReveal
                            direction="up"
                            delay={0.35}
                            className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/40 transition-all flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                        <Bot className="w-6 h-6" />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">
                                        Distributed AI Fleet
                                    </span>
                                </div>
                                <h3 className="text-xl font-display font-black text-white uppercase mb-2">
                                    Autonomous Agent Swarms & Talent AI
                                </h3>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                                    Distributed self-coordinating agent swarms running market intelligence, asynchronous messaging, and candidate skill grading.
                                </p>
                            </div>

                            <Link
                                href="/client-portal?mode=demo&proj=agent-swarm"
                                className="mt-6 pt-4 border-t border-white/10 inline-flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase"
                            >
                                <span>Inspect Agent Swarm Demo</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 3. Live Reinforcement Learning Intelligence Simulator */}
            <section id="rl-intelligence-section" className="relative w-full py-8 z-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <RLIntelligenceSimulator />
                </div>
            </section>

            {/* 4. Interactive Transparent Pricing & Project Estimator */}
            <section id="pricing-section" className="relative w-full py-8 z-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <InteractivePricingCalculator />
                </div>
            </section>

            {/* 5. Team Leadership & Search Intelligence */}
            <section id="team-section" className="relative w-full py-8 z-20">
                <TeamSection />
            </section>

            {/* 6. Selected Works Portfolio */}
            <section id="our-work-section" className="relative w-full py-8 z-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
                        <ScrollReveal direction="left" className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary uppercase tracking-wider">
                                Client Production Systems
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
                                Selected <span className="text-primary italic">Works</span>
                            </h2>
                            <p className="text-white/70 text-sm max-w-md">
                                Real client platforms engineered with high conversion, aesthetic UI, and rock-solid architecture.
                            </p>
                        </ScrollReveal>
                    </div>
                    <SelectedWork />
                </div>
            </section>

            {/* 7. Curated Templates Marketplace */}
            <section id="templates-showcase-section" className="relative w-full py-8 z-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
                        <ScrollReveal direction="left" className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary uppercase tracking-wider">
                                Production Codebases
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
                                Selected <span className="text-primary italic">Templates</span>
                            </h2>
                            <p className="text-white/70 text-sm max-w-md">
                                Pre-engineered full-stack templates ready for deployment across ecommerce, SaaS, agencies, and portfolios.
                            </p>
                        </ScrollReveal>
                        <Link
                            href="/explore"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold uppercase transition-all"
                        >
                            <span>Browse 50+ Templates</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                    <TemplatesShowcase />
                </div>
            </section>

            {/* 8. Interactive Setup & Project Wizard */}
            <section id="interactive-setup-section" className="relative w-full py-8 z-20">
                <InteractiveSetupSection />
            </section>

            {/* 9. Modern Call-To-Action Ribbon */}
            <section className="relative w-full py-16 z-20">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="rounded-3xl bg-gradient-to-r from-primary/20 via-emerald-500/10 to-primary/20 border border-primary/30 p-8 sm:p-14 backdrop-blur-2xl text-center relative overflow-hidden shadow-[0_20px_70px_rgba(200,241,105,0.15)]">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-mono font-bold text-primary uppercase tracking-wider mb-4">
                            Ready to Elevate Your Digital Presence?
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight mb-4">
                            Let&apos;s Build Your Next-Gen Platform.
                        </h2>
                        <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                            Turnaround in as fast as 3 to 7 business days. Starting at ₹5,000 INR ($55 USD). 100% money-back satisfaction guarantee.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Magnetic>
                                <Link
                                    href="/start-project"
                                    className="px-8 py-4 rounded-full bg-primary text-black font-display font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[0_0_35px_rgba(200,241,105,0.4)]"
                                >
                                    Start Your Project Now
                                </Link>
                            </Magnetic>
                            <Link
                                href="/client-portal?mode=demo"
                                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm tracking-wide transition-all"
                            >
                                Experience Client Demo Portal
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
