"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Magnetic from "./Magnetic";
import { ArrowRight, Sparkles, Zap, Shield, Cpu, ChevronRight, Activity, CheckCircle2, Bot, Smartphone, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const previewImages = [
  "/images/templates/portfolio/port1-1.webp",
  "/images/templates/real-estate/re1-1.webp",
  "/images/templates/ecommerce/ecom1-1.webp",
  "/images/templates/yoga/yoga1-1.webp",
];

export default function HeroSection() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % previewImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[92dvh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
      {/* Subtle Radial Glow in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-6 shadow-[0_0_25px_rgba(200,241,105,0.06)] hover:border-primary/40 transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
            Mowglai Frontier Engineering <span className="text-primary font-semibold">v0.2.0 Live</span> · NCR • Delhi • Noida • Kanpur
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-white/50" />
        </motion.div>

        {/* Main High-Impact Typography Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-white uppercase leading-[1.08] max-w-5xl mb-6"
        >
          We Engineer <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-primary via-emerald-300 to-lime-200 bg-clip-text text-transparent">
            Intelligent Digital Platforms
          </span>{" "}
          & AI Growth.
        </motion.h1>

        {/* Subtitle with Clear Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed mb-8 font-normal"
        >
          Award-winning Next.js web systems, autonomous reinforcement learning architectures, and multi-cloud runtimes starting at{" "}
          <strong className="text-white font-semibold">₹5,000 INR ($55 USD)</strong>. Built for high conversion, sub-second
          latency, and zero-compromise security.
        </motion.p>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-12"
        >
          <Magnetic>
            <Link
              href="/start-project"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary text-black font-display font-bold text-sm tracking-wider uppercase shadow-[0_0_40px_rgba(200,241,105,0.35)] hover:shadow-[0_0_60px_rgba(200,241,105,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Launch Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Magnetic>

          <Magnetic>
            <Link
              href="/client-portal?mode=demo"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/[0.05] border border-white/15 hover:border-primary/50 text-white font-display font-semibold text-sm tracking-wide hover:bg-white/[0.08] hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl"
            >
              <Smartphone className="w-4 h-4 text-primary" />
              <span>Interactive Client Demo</span>
            </Link>
          </Magnetic>

          <Link
            href="/developer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent hover:bg-white/5 border border-white/10 text-white/80 hover:text-white text-sm font-medium transition-all"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Developer HQ</span>
          </Link>
        </motion.div>

        {/* Live System Capabilities Pill Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl pt-6 border-t border-white/10 text-left"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-white/50 uppercase font-mono">Performance</div>
              <div className="text-xs sm:text-sm font-bold text-white">100/100 Lighthouse</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-white/50 uppercase font-mono">Intelligence</div>
              <div className="text-xs sm:text-sm font-bold text-white">RL Policy Engine</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-white/50 uppercase font-mono">Architecture</div>
              <div className="text-xs sm:text-sm font-bold text-white">Zero-Trust Cloud</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-white/50 uppercase font-mono">Delivery</div>
              <div className="text-xs sm:text-sm font-bold text-white">7-Day Turnaround</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Interactive Live Preview Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-5xl mx-auto mt-14 relative rounded-2xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
      >
        <div className="rounded-xl overflow-hidden bg-[#0c0d12] border border-white/10 relative">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-white/50 flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-emerald-400" /> https://mowglai.com/live-architecture
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> SYSTEM ONLINE · 48ms
            </div>
          </div>

          {/* Interactive Screen Preview with Dynamic Slideshow */}
          <div className="relative aspect-[16/9] w-full overflow-hidden group">
            <Image
              src={previewImages[slide]}
              alt="Mowglai Live Product Showcase"
              fill
              className="object-cover object-top transition-all duration-700 group-hover:scale-102"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-80" />

            {/* Floating Live Telemetry Badge inside image */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold">
                  M
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full-Stack Digital Architecture</h4>
                  <p className="text-xs text-white/60">React 19 · Next.js 16 · Multi-Cloud Runtimes · Reinforcement Learning</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/explore"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  Browse 50+ Templates
                </Link>
                <Link
                  href="/client-portal?mode=demo"
                  className="px-4 py-2 rounded-lg bg-primary text-black text-xs font-bold transition-all hover:bg-primary/90"
                >
                  Launch Client Demo ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
