"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Sparkles,
    Search,
    Zap,
    Gauge,
    ShieldAlert,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Eye,
    ExternalLink,
    RefreshCw,
    Layers,
    MessageCircle,
    Globe,
    Check
} from "lucide-react";
import { CompetitorAnalysisResult, analyzeCompetitorUrl } from "@/lib/ai/analyzer";

const SAMPLE_URLS = [
    { label: "cult.fit (Fitness)", url: "cult.fit" },
    { label: "practo.com (Health)", url: "practo.com" },
    { label: "zomato.com (Dining)", url: "zomato.com" },
    { label: "nobroker.in (Real Estate)", url: "nobroker.in" },
    { label: "unacademy.com (Education)", url: "unacademy.com" }
];

export default function AiAnalyzePage() {
    const router = useRouter();
    const [targetUrl, setTargetUrl] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisProgress, setAnalysisProgress] = useState(0);
    const [statusText, setStatusText] = useState("");
    const [result, setResult] = useState<CompetitorAnalysisResult | null>(null);
    const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);

    const handleAnalyze = async (urlToTest?: string) => {
        const query = (urlToTest || targetUrl).trim();
        if (!query) return;

        setIsAnalyzing(true);
        setAnalysisProgress(20);
        setStatusText("Fetching public DOM & inspecting assets...");

        const t1 = setTimeout(() => {
            setAnalysisProgress(50);
            setStatusText("Decompiling visual sections & layout hierarchy...");
        }, 500);

        const t2 = setTimeout(() => {
            setAnalysisProgress(80);
            setStatusText("Auditing Core Web Vitals & missing AI search schemas...");
        }, 1100);

        const t3 = setTimeout(async () => {
            setAnalysisProgress(100);
            setStatusText("Matching Mowglai bespoke template...");

            try {
                const response = await fetch("/api/ai-analyze.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ url: query })
                });

                if (response.ok) {
                    const data = await response.json();
                    const localFallback = analyzeCompetitorUrl(query);
                    setResult({ ...localFallback, ...data });
                } else {
                    setResult(analyzeCompetitorUrl(query));
                }
            } catch {
                setResult(analyzeCompetitorUrl(query));
            } finally {
                setIsAnalyzing(false);
            }
        }, 1700);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    };

    const handleBuildMyVersion = () => {
        if (!result) return;
        const p = result.prefillOnboardQuery;
        const queryParams = new URLSearchParams({
            businessName: p.businessName,
            businessSector: p.businessSector,
            budget: p.budget,
            primaryGoal: p.primaryGoal
        });
        router.push(`/ai-onboard?${queryParams.toString()}`);
    };

    const generateWhatsAppUrl = () => {
        if (!result) return "#";
        const msg = `Hello Mowglai! 👋
I analyzed this competitor website on your AI Decompiler:
• Competitor URL: ${result.targetUrl}
• Industry: ${result.detectedSector}
• Speed Gap: Their score is ${result.performanceComparison.competitorScore} vs Mowglai 98/100
• Matched Template: ${result.matchedTemplate.title} (${result.matchedTemplate.previewUrl})

I want to build my own 3x faster version with Mowglai. Please share scope & delivery!`;
        return `https://wa.me/919452476331?text=${encodeURIComponent(msg)}`;
    };

    return (
        <div className="min-h-screen bg-[#060a08] text-white flex flex-col selection:bg-emerald-500/30">
            {/* Header */}
            <header className="border-b border-emerald-950/60 bg-[#060a08]/80 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-wider text-emerald-400 flex items-center gap-2 hover:opacity-80 transition"
                    >
                        <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                            🌿
                        </span>
                        MOWGLAI
                    </Link>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hidden sm:inline-flex items-center gap-1">
                        <Zap className="w-3 h-3 text-emerald-400" /> AI Competitor Decompiler
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/ai-onboard"
                        className="text-xs font-semibold px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-300 hover:text-white transition"
                    >
                        AI Onboarder
                    </Link>
                    <a
                        href="https://wa.me/919452476331"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition flex items-center gap-1.5"
                    >
                        <MessageCircle className="w-3.5 h-3.5" /> Direct Support
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 md:py-12 flex flex-col justify-center">
                {/* Clean-Room Legal Alert */}
                <div className="mb-6 p-3 sm:p-4 rounded-xl border border-zinc-800 bg-zinc-950/60 flex items-start gap-3 text-xs text-zinc-400 leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                        <strong className="text-zinc-200">Clean-Room Architectural Policy:</strong> We do not copy code or proprietary assets. Our AI analyzes public layout intent, diagnoses performance bottlenecks, and builds an original, 3x faster version with Mowglai&apos;s Next.js & Tailwind stack.
                    </div>
                </div>

                {/* Input & Hero Banner */}
                {!result && !isAnalyzing && (
                    <div className="text-center max-w-2xl mx-auto my-6">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1.5 mb-3">
                            <Sparkles className="w-3.5 h-3.5" /> REVERSE-ENGINEER ANY INSPIRATION
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                            Kisi Bhi Competitor Ki Site Daalo. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                                AI Uska 3x Faster Version Dega.
                            </span>
                        </h1>
                        <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-8">
                            Sections, tech stack, speed gaps, aur templates — 30 seconds me deconstruct karein.
                        </p>

                        {/* Input Box */}
                        <div className="bg-[#0b120e] border-2 border-emerald-500/30 p-2 sm:p-3 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 mb-4">
                            <div className="flex-1 flex items-center px-3 bg-zinc-900/60 rounded-xl border border-zinc-800">
                                <Globe className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Enter competitor URL (e.g. cult.fit, mycompetitor.in)"
                                    value={targetUrl}
                                    onChange={(e) => setTargetUrl(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                                    className="w-full py-3 bg-transparent text-white placeholder-zinc-500 text-sm focus:outline-none"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleAnalyze()}
                                disabled={!targetUrl.trim()}
                                className="py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black font-extrabold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
                            >
                                <Search className="w-4 h-4" /> Decompile Now
                            </button>
                        </div>

                        {/* Quick Samples */}
                        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-zinc-400">
                            <span className="text-zinc-500 text-[11px]">Or test sample:</span>
                            {SAMPLE_URLS.map((s) => (
                                <button
                                    key={s.url}
                                    type="button"
                                    onClick={() => {
                                        setTargetUrl(s.url);
                                        handleAnalyze(s.url);
                                    }}
                                    className="px-2.5 py-1 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition text-[11px]"
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Loading / Progress State */}
                {isAnalyzing && (
                    <div className="max-w-md mx-auto w-full py-16 px-6 text-center rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/30 to-black/60 backdrop-blur-xl shadow-2xl">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center mb-6 animate-pulse">
                            <Zap className="w-8 h-8 text-emerald-400 animate-bounce" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Decompiling Architecture...</h2>
                        <p className="text-xs text-zinc-400 mb-6">{statusText}</p>

                        <div className="w-full bg-zinc-800/60 h-2 rounded-full overflow-hidden mb-3">
                            <div
                                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 h-full transition-all duration-400 ease-out"
                                style={{ width: `${analysisProgress}%` }}
                            />
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400">{analysisProgress}% Complete</span>
                    </div>
                )}

                {/* Audit Result Display */}
                {!isAnalyzing && result && (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Top Result Banner */}
                        <div className="flex flex-wrap items-center justify-between gap-4 bg-[#0b120e] border border-emerald-950/80 p-4 sm:p-6 rounded-2xl">
                            <div>
                                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                                    AUDIT TARGET: {result.domain}
                                </span>
                                <h2 className="text-2xl font-black text-white mt-1">
                                    {result.domain} Architectural Breakdown
                                </h2>
                                <p className="text-xs text-zinc-400 mt-0.5">
                                    Detected Sector: <strong className="text-emerald-400 uppercase">{result.detectedSector}</strong>
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setResult(null)}
                                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-800/40 transition"
                            >
                                <RefreshCw className="w-3.5 h-3.5" /> Analyze Another URL
                            </button>
                        </div>

                        {/* Performance & Speed Comparison Matrix */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Competitor Score */}
                            <div className="bg-gradient-to-b from-red-950/20 to-[#0b120e] border border-red-900/40 p-5 rounded-2xl">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider flex items-center gap-1">
                                        <ShieldAlert className="w-4 h-4" /> Competitor Current State
                                    </span>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-900/40">
                                        Slow / Bloated
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-3 my-2">
                                    <span className="text-4xl font-black text-red-400">
                                        {result.performanceComparison.competitorScore}
                                    </span>
                                    <span className="text-xs text-zinc-500 font-mono">/ 100 Mobile PageSpeed</span>
                                </div>
                                <div className="text-xs text-zinc-400 space-y-1 mt-3">
                                    <div>• LCP Speed: <strong className="text-zinc-200">{result.performanceComparison.competitorLcp}</strong> (High mobile bounce)</div>
                                    <div>• Third-Party Scripts: <strong className="text-zinc-200">Heavy trackers & unminified bundles</strong></div>
                                </div>
                            </div>

                            {/* Mowglai Re-Engineered Advantage */}
                            <div className="bg-gradient-to-b from-emerald-950/40 to-[#0b120e] border-2 border-emerald-500/40 p-5 rounded-2xl shadow-xl shadow-emerald-950/20">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                                        <Zap className="w-4 h-4" /> Mowglai Next.js Guarantee
                                    </span>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                        {result.performanceComparison.speedAdvantage}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-3 my-2">
                                    <span className="text-4xl font-black text-emerald-400">
                                        {result.performanceComparison.mowglaiScore}
                                    </span>
                                    <span className="text-xs text-emerald-500/80 font-mono">/ 100 Sub-second LCP</span>
                                </div>
                                <div className="text-xs text-zinc-300 space-y-1 mt-3">
                                    <div>• Guaranteed LCP: <strong className="text-emerald-300">{result.performanceComparison.mowglaiLcp}</strong> (0.6s instant load)</div>
                                    <div>• Stack: <strong className="text-emerald-300">Next.js 16 + Tailwind + Zero Layout Shift</strong></div>
                                </div>
                            </div>
                        </div>

                        {/* Matched Template Banner with Primary CTA */}
                        <div className="rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-r from-emerald-950/50 via-[#0a120e] to-black p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
                            <div className="space-y-3 max-w-xl">
                                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                                    MATCHED TEMPLATE INSPIRATION
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-black text-white">
                                    {result.matchedTemplate.title} ({result.matchedTemplate.id}.html)
                                </h3>
                                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                                    This template mirrors the core conversion architecture of {result.domain} without any legacy code bloat. Tested for 98+ PageSpeed and direct WhatsApp leads.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {result.matchedTemplate.features.map((feat, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                                        >
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Dual CTA Actions */}
                            <div className="flex flex-col gap-3 w-full lg:w-72 shrink-0">
                                <button
                                    type="button"
                                    onClick={handleBuildMyVersion}
                                    className="w-full py-4 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-sm flex items-center justify-center gap-2 transition shadow-xl shadow-emerald-500/30 text-center"
                                >
                                    Build My Version (from ₹5,000) <ArrowRight className="w-4 h-4" />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActivePreviewUrl(result.matchedTemplate.previewUrl)}
                                    className="w-full py-2.5 px-4 rounded-xl border border-emerald-500/30 text-emerald-300 text-xs font-bold hover:bg-emerald-500/10 flex items-center justify-center gap-1.5 transition"
                                >
                                    <Eye className="w-3.5 h-3.5" /> View Live Demo
                                </button>

                                <a
                                    href={generateWhatsAppUrl()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-zinc-400 hover:text-emerald-400 text-center py-1 flex items-center justify-center gap-1 transition"
                                >
                                    <MessageCircle className="w-3 h-3 text-[#25D366]" /> Or discuss on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Deconstructed Sections & SEO Gaps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Deconstructed Sections */}
                            <div className="bg-[#0b120e] border border-emerald-950/80 p-5 rounded-2xl">
                                <div className="flex items-center gap-2 text-emerald-400 mb-4">
                                    <Layers className="w-4 h-4" />
                                    <h4 className="text-sm font-bold uppercase tracking-wider">Deconstructed Sections</h4>
                                </div>
                                <div className="space-y-3">
                                    {result.detectedSections.map((sec, idx) => (
                                        <div key={idx} className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
                                            <div className="text-xs font-bold text-white flex items-center justify-between">
                                                <span>{sec.name}</span>
                                                <span className="text-[10px] text-zinc-500">Step 0{idx + 1}</span>
                                            </div>
                                            <div className="text-[11px] text-zinc-400 mt-1">{sec.purpose}</div>
                                            <div className="text-[11px] text-emerald-400 mt-1.5 font-medium">
                                                ✨ Mowglai Fix: {sec.mowglaiEnhancement}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SEO & Conversion Gaps */}
                            <div className="bg-[#0b120e] border border-emerald-950/80 p-5 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-teal-400 mb-4">
                                        <Globe className="w-4 h-4" />
                                        <h4 className="text-sm font-bold uppercase tracking-wider">Competitor Gaps to Exploit</h4>
                                    </div>
                                    <div className="space-y-2.5">
                                        {result.seoAndConversionGaps.map((gap, idx) => (
                                            <div key={idx} className="bg-zinc-900/40 p-3 rounded-xl border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                                                <span>{gap}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 mt-4 border-t border-zinc-800/80">
                                    <button
                                        type="button"
                                        onClick={handleBuildMyVersion}
                                        className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                                    >
                                        Auto-Fill /ai-onboard With This Spec <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Embedded Live Preview Modal */}
            {activePreviewUrl && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-4 sm:p-6 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800 max-w-7xl w-full mx-auto">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono text-zinc-300">Live Preview: {activePreviewUrl}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href={activePreviewUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-semibold px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-200 hover:text-white flex items-center gap-1.5"
                            >
                                Open in New Tab <ExternalLink className="w-3 h-3" />
                            </a>
                            <button
                                type="button"
                                onClick={() => setActivePreviewUrl(null)}
                                className="text-xs font-bold px-3 py-1.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30"
                            >
                                Close Preview ✕
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-7xl mx-auto mt-4 rounded-xl overflow-hidden border border-zinc-800 bg-white">
                        <iframe
                            src={activePreviewUrl}
                            className="w-full h-full border-0"
                            title="Mowglai Matched Template Preview"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
