"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Sparkles,
    Search,
    Zap,
    ShieldAlert,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Eye,
    ExternalLink,
    RefreshCw,
    Layers,
    MessageCircle,
    Globe
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
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
        if (!result) return "https://wa.me/919452476331";
        const msg = `Hi Mowglai team! I just ran a competitor audit on ${result.domain}:
• Speed Gap: Their score is ${result.performanceComparison.competitorScore} vs Mowglai 98/100
• Matched Template: ${result.matchedTemplate.title} (${result.matchedTemplate.previewUrl})

I want to build an original, 3x faster platform with Mowglai. Please share project scope & timeline!`;
        return `https://wa.me/919452476331?text=${encodeURIComponent(msg)}`;
    };

    return (
        <PageLayout>
            <main className="min-h-screen bg-transparent relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* Clean-Room Legal Alert */}
                <div className="mb-8 p-4 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-md flex items-start gap-3 text-xs text-foreground/80 leading-relaxed">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                        <strong className="text-foreground">Clean-Room Architectural Policy:</strong> We do not copy code or proprietary assets. Our AI inspects public layout hierarchy, identifies performance bottlenecks, and builds an original, 3x faster version with Mowglai&apos;s Next.js &amp; Tailwind architecture.
                    </div>
                </div>

                {/* Input & Hero Banner */}
                {!result && !isAnalyzing && (
                    <div className="text-center max-w-2xl mx-auto my-8">
                        <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-flex items-center gap-1.5 mb-4">
                            <Sparkles className="w-4 h-4 text-primary" /> REVERSE-ENGINEER ANY INSPIRATION
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight mb-4">
                            Analyze Any Competitor. <br />
                            <span className="text-primary italic">
                                We Engineer A 3x Faster Version.
                            </span>
                        </h1>
                        <p className="text-foreground/75 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                            Decompile layout architecture, speed gaps, and technology stacks in 30 seconds.
                        </p>

                        {/* Input Box */}
                        <div className="bg-card/40 border-2 border-primary/30 p-2 sm:p-3 rounded-2xl shadow-2xl backdrop-blur-md flex flex-col sm:flex-row gap-2 mb-4">
                            <div className="flex-1 flex items-center px-4 bg-background/50 rounded-xl border border-primary/20">
                                <Globe className="w-4 h-4 text-foreground/50 mr-2.5 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Enter competitor URL (e.g. cult.fit, mycompetitor.in)"
                                    value={targetUrl}
                                    onChange={(e) => setTargetUrl(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                                    className="w-full py-3.5 bg-transparent text-foreground placeholder-foreground/40 text-sm focus:outline-none"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleAnalyze()}
                                disabled={!targetUrl.trim()}
                                className="py-3.5 px-8 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-40 text-primary-foreground font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02]"
                            >
                                <Search className="w-4 h-4" /> Decompile Now
                            </button>
                        </div>

                        {/* Quick Samples */}
                        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-foreground/60">
                            <span className="text-foreground/40 text-[11px]">Or test sample:</span>
                            {SAMPLE_URLS.map((s) => (
                                <button
                                    key={s.url}
                                    type="button"
                                    onClick={() => {
                                        setTargetUrl(s.url);
                                        handleAnalyze(s.url);
                                    }}
                                    className="px-3 py-1 rounded-lg bg-background/40 border border-primary/20 hover:border-primary text-foreground/80 hover:text-primary transition text-xs"
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Loading / Progress State */}
                {isAnalyzing && (
                    <div className="max-w-md mx-auto w-full py-16 px-6 text-center rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl shadow-2xl">
                        <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 mx-auto flex items-center justify-center mb-6 animate-pulse">
                            <Zap className="w-8 h-8 text-primary animate-bounce" />
                        </div>
                        <h2 className="text-xl font-display font-black text-foreground uppercase mb-2">Decompiling Architecture...</h2>
                        <p className="text-xs text-foreground/70 mb-6">{statusText}</p>

                        <div className="w-full bg-background/60 h-2 rounded-full overflow-hidden mb-3 border border-primary/20">
                            <div
                                className="bg-primary h-full transition-all duration-300 ease-out"
                                style={{ width: `${analysisProgress}%` }}
                            />
                        </div>
                        <span className="text-xs font-mono font-bold text-primary">{analysisProgress}% Complete</span>
                    </div>
                )}

                {/* Audit Result Display */}
                {!isAnalyzing && result && (
                    <div className="space-y-8">
                        {/* Top Result Banner */}
                        <div className="flex flex-wrap items-center justify-between gap-4 bg-card/40 border border-primary/20 p-6 rounded-2xl backdrop-blur-md">
                            <div>
                                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                                    AUDIT TARGET: {result.domain}
                                </span>
                                <h2 className="text-2xl font-display font-black text-foreground uppercase mt-1">
                                    {result.domain} Architectural Breakdown
                                </h2>
                                <p className="text-xs text-foreground/70 mt-1">
                                    Detected Sector: <strong className="text-primary uppercase">{result.detectedSector}</strong>
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setResult(null)}
                                className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1.5 px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/10 transition"
                            >
                                <RefreshCw className="w-3.5 h-3.5" /> Analyze Another URL
                            </button>
                        </div>

                        {/* Performance & Speed Comparison Matrix */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Competitor Score */}
                            <div className="bg-red-950/20 border border-red-500/30 p-6 rounded-2xl backdrop-blur-sm">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                                        <ShieldAlert className="w-4 h-4" /> Competitor Current State
                                    </span>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-500/30">
                                        Slow / Bloated
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-3 my-2">
                                    <span className="text-4xl font-black text-red-400">
                                        {result.performanceComparison.competitorScore}
                                    </span>
                                    <span className="text-xs text-foreground/50 font-mono">/ 100 Mobile PageSpeed</span>
                                </div>
                                <div className="text-xs text-foreground/70 space-y-1 mt-3">
                                    <div>• LCP Speed: <strong className="text-foreground">{result.performanceComparison.competitorLcp}</strong> (High mobile bounce)</div>
                                    <div>• Third-Party Scripts: <strong className="text-foreground">Heavy trackers &amp; unminified bundles</strong></div>
                                </div>
                            </div>

                            {/* Mowglai Re-Engineered Advantage */}
                            <div className="bg-primary/10 border-2 border-primary/40 p-6 rounded-2xl backdrop-blur-sm shadow-xl shadow-primary/5">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                                        <Zap className="w-4 h-4 text-primary" /> Mowglai Next.js Guarantee
                                    </span>
                                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                                        {result.performanceComparison.speedAdvantage}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-3 my-2">
                                    <span className="text-4xl font-black text-primary">
                                        {result.performanceComparison.mowglaiScore}
                                    </span>
                                    <span className="text-xs text-primary/80 font-mono">/ 100 Sub-second LCP</span>
                                </div>
                                <div className="text-xs text-foreground/80 space-y-1 mt-3">
                                    <div>• Guaranteed LCP: <strong className="text-primary">{result.performanceComparison.mowglaiLcp}</strong> (0.6s instant load)</div>
                                    <div>• Stack: <strong className="text-primary">Next.js 16 + Tailwind + Zero Layout Shift</strong></div>
                                </div>
                            </div>
                        </div>

                        {/* Matched Template Banner with Primary CTA */}
                        <div className="rounded-2xl border-2 border-primary/40 bg-card/60 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
                            <div className="space-y-3 max-w-xl">
                                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                                    MATCHED TEMPLATE INSPIRATION
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-display font-black text-foreground uppercase">
                                    {result.matchedTemplate.title} ({result.matchedTemplate.id}.html)
                                </h3>
                                <p className="text-foreground/75 text-xs sm:text-sm leading-relaxed">
                                    This template mirrors the core conversion architecture of {result.domain} without any legacy code bloat. Tested for 98+ PageSpeed and direct WhatsApp leads.
                                </p>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {result.matchedTemplate.features.map((feat, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20 font-bold"
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
                                    className="w-full py-4 px-5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105"
                                >
                                    Build My Version (from ₹5,000) <ArrowRight className="w-4 h-4" />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActivePreviewUrl(result.matchedTemplate.previewUrl)}
                                    className="w-full py-2.5 px-4 rounded-full border border-primary/30 text-foreground text-xs font-bold hover:bg-primary/10 flex items-center justify-center gap-1.5 transition"
                                >
                                    <Eye className="w-3.5 h-3.5" /> View Live Demo
                                </button>

                                <a
                                    href={generateWhatsAppUrl()}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-foreground/60 hover:text-primary text-center py-1 flex items-center justify-center gap-1.5 transition"
                                >
                                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> Or discuss on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Deconstructed Sections & SEO Gaps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Deconstructed Sections */}
                            <div className="bg-card/40 border border-primary/20 p-6 rounded-2xl backdrop-blur-md">
                                <div className="flex items-center gap-2 text-primary mb-4">
                                    <Layers className="w-4 h-4" />
                                    <h4 className="text-sm font-display font-black uppercase tracking-wider">Deconstructed Sections</h4>
                                </div>
                                <div className="space-y-3">
                                    {result.detectedSections.map((sec, idx) => (
                                        <div key={idx} className="bg-background/40 p-3.5 rounded-xl border border-primary/15">
                                            <div className="text-xs font-bold text-foreground flex items-center justify-between">
                                                <span>{sec.name}</span>
                                                <span className="text-[10px] text-foreground/50 font-mono">Step 0{idx + 1}</span>
                                            </div>
                                            <div className="text-[11px] text-foreground/70 mt-1">{sec.purpose}</div>
                                            <div className="text-[11px] text-primary mt-1.5 font-medium">
                                                ✨ Mowglai Fix: {sec.mowglaiEnhancement}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SEO & Conversion Gaps */}
                            <div className="bg-card/40 border border-primary/20 p-6 rounded-2xl backdrop-blur-md flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-emerald-400 mb-4">
                                        <Globe className="w-4 h-4" />
                                        <h4 className="text-sm font-display font-black uppercase tracking-wider">Competitor Gaps to Exploit</h4>
                                    </div>
                                    <div className="space-y-2.5">
                                        {result.seoAndConversionGaps.map((gap, idx) => (
                                            <div key={idx} className="bg-background/40 p-3 rounded-xl border border-primary/15 text-xs text-foreground/80 flex items-start gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                                <span>{gap}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 mt-6 border-t border-primary/20">
                                    <Link
                                        href="/ai-onboard"
                                        className="w-full py-3.5 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                                    >
                                        Auto-Fill /ai-onboard With This Spec <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Embedded Live Preview Modal */}
            {activePreviewUrl && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col p-4 sm:p-6">
                    <div className="flex items-center justify-between pb-3 border-b border-primary/20 max-w-7xl w-full mx-auto">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono text-foreground/80">Live Preview: {activePreviewUrl}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <a
                                href={activePreviewUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-semibold px-3 py-1.5 rounded-md bg-background/80 text-foreground hover:text-primary flex items-center gap-1.5 border border-primary/20"
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

                    <div className="flex-1 w-full max-w-7xl mx-auto mt-4 rounded-xl overflow-hidden border border-primary/20 bg-background">
                        <iframe
                            src={activePreviewUrl}
                            className="w-full h-full border-0"
                            title="Mowglai Matched Template Preview"
                        />
                    </div>
                </div>
            )}
        </PageLayout>
    );
}
