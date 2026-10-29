"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import {
    Sparkles,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Eye,
    RefreshCw,
    Zap,
    Globe,
    MapPin,
    Building2,
    ShieldCheck,
    MessageCircle,
    Copy,
    Check,
    ExternalLink,
    Code,
    CreditCard,
    ChevronRight
} from "lucide-react";
import { OnboardingInput, OnboardingAnalysisResult, BusinessSector } from "@/lib/ai/types";
import { analyzeClientOnboarding } from "@/lib/ai/matcher";

const SECTORS: { id: BusinessSector; label: string; icon: string; example: string }[] = [
    { id: "healthcare", label: "Healthcare & Clinic", icon: "🏥", example: "Dental, Hospital, Doctor" },
    { id: "gym", label: "Fitness & Gym", icon: "💪", example: "Bodybuilding, Crossfit, Trainer" },
    { id: "school", label: "Education & Coaching", icon: "🎓", example: "School, Academy, Institute" },
    { id: "restaurant", label: "Restaurant & Cafe", icon: "🍽️", example: "Fine Dining, Cafe, Cloud Kitchen" },
    { id: "real-estate", label: "Real Estate & Builders", icon: "🏢", example: "Property Listings, Architects" },
    { id: "ecommerce", label: "E-Commerce & Store", icon: "🛍️", example: "Fashion, Tech, Products" },
    { id: "yoga", label: "Yoga & Wellness Spa", icon: "🧘", example: "Retreat, Meditation, Holistic" },
    { id: "portfolio", label: "Agency & Portfolio", icon: "🎨", example: "Creator, Studio, Consultant" }
];

const POPULAR_CITIES = ["Delhi NCR", "Noida", "Kanpur", "Mumbai", "Bengaluru", "Dubai", "Global / Remote"];

const BUDGET_OPTIONS = [
    {
        tier: "₹5,000",
        label: "Starter Launch",
        usd: "$55",
        desc: "Single-page high-converting landing + WhatsApp integration",
        time: "48 Hours"
    },
    {
        tier: "₹9,999",
        label: "Growth Architecture",
        usd: "$110",
        desc: "Up to 5 pages + GSAP animations + Local SEO Engine",
        time: "5-7 Days"
    },
    {
        tier: "₹12,999+",
        label: "Commerce & Custom Hub",
        usd: "$149+",
        desc: "Full online store / booking + Razorpay + AI GEO indexing",
        time: "7-10 Days"
    }
];

const GOAL_OPTIONS = [
    "WhatsApp & Direct Phone Inquiries",
    "Instant Online Bookings & Payments",
    "Top Google Local & AI Rankings (GEO)",
    "Showcase High-End Portfolio / Brand Authority"
];

export default function AiOnboardingPage() {
    const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisProgress, setAnalysisProgress] = useState(0);
    const [analysisStatus, setAnalysisStatus] = useState("");
    const [copiedSchema, setCopiedSchema] = useState(false);
    const [activePreviewUrl, setActivePreviewUrl] = useState<string | null>(null);

    // Form State
    const [formData, setFormData] = useState<OnboardingInput>({
        businessName: "",
        businessSector: "portfolio",
        customSectorDescription: "",
        city: "Delhi NCR",
        budget: "₹5,000",
        primaryGoal: GOAL_OPTIONS[0],
        phone: "",
        email: ""
    });

    const [result, setResult] = useState<OnboardingAnalysisResult | null>(null);

    // Read prefill parameters safely in useEffect (Static Export Friendly)
    React.useEffect(() => {
        if (typeof window === "undefined") return;
        const params = new URLSearchParams(window.location.search);
        const bName = params.get("businessName");
        const bSector = params.get("businessSector") as BusinessSector | null;
        const bBudget = params.get("budget");
        const bGoal = params.get("primaryGoal");

        if (bName || bSector || bBudget || bGoal) {
            setFormData((prev) => ({
                ...prev,
                businessName: bName || prev.businessName,
                businessSector: bSector || prev.businessSector,
                budget: bBudget || prev.budget,
                primaryGoal: bGoal || prev.primaryGoal
            }));
        }
    }, []);

    const handleStartAnalysis = async () => {
        setIsAnalyzing(true);
        setAnalysisProgress(15);
        setAnalysisStatus("Analyzing business profile & industry niche...");

        const step1 = setTimeout(() => {
            setAnalysisProgress(45);
            setAnalysisStatus("Scanning public/previews template registry...");
        }, 600);

        const step2 = setTimeout(() => {
            setAnalysisProgress(75);
            setAnalysisStatus("Generating Local SEO schema & GEO search questions...");
        }, 1200);

        const step3 = setTimeout(async () => {
            setAnalysisProgress(100);
            setAnalysisStatus("Finalizing tailored specifications...");

            try {
                // Try fetching from public/api/ai-onboard.php
                const response = await fetch("/api/ai-onboard.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    const data = await response.json();
                    // Merge with client deterministic matcher to guarantee all fields are rich
                    const localResult = analyzeClientOnboarding(formData);
                    setResult({ ...localResult, ...data });
                } else {
                    // Fallback to client matcher
                    const localResult = analyzeClientOnboarding(formData);
                    setResult(localResult);
                }
            } catch {
                // Fallback to client matcher
                const localResult = analyzeClientOnboarding(formData);
                setResult(localResult);
            } finally {
                setIsAnalyzing(false);
                setStep(5);
            }
        }, 1800);

        return () => {
            clearTimeout(step1);
            clearTimeout(step2);
            clearTimeout(step3);
        };
    };

    const handleCopySchema = () => {
        if (!result) return;
        navigator.clipboard.writeText(JSON.stringify(result.seoStrategy.schemaJsonLd, null, 2));
        setCopiedSchema(true);
        setTimeout(() => setCopiedSchema(false), 2500);
    };

    const generateWhatsAppUrl = () => {
        if (!result) return "#";
        const message = `Hello Mowglai! 👋
I just used your AI Onboarder for my business:
• Name: ${result.businessProfile.name}
• Category: ${result.businessProfile.sector}
• City: ${result.businessProfile.city}
• Recommended Template: ${result.primaryTemplate.title} (${result.primaryTemplate.previewUrl})
• Budget Tier: ${result.pricingSuggestion.priceInr} (${result.pricingSuggestion.tierName})

I want to lock this design and launch my website. Please assist!`;
        return `https://wa.me/919452476331?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="min-h-screen bg-[#070b09] text-white flex flex-col selection:bg-emerald-500/30">
            {/* Header / Nav */}
            <header className="border-b border-emerald-950/60 bg-[#070b09]/80 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-4 flex items-center justify-between">
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
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hidden sm:inline-flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> AI Onboarder
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/explore"
                        className="text-xs text-zinc-400 hover:text-white transition px-3 py-1.5 rounded-md hover:bg-zinc-800/40"
                    >
                        Browse All Previews
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

            {/* Main Container */}
            <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 md:py-12 flex flex-col justify-center">
                {/* Stepper Header (Only shown during steps 1-4) */}
                {step < 5 && !isAnalyzing && (
                    <div className="mb-8">
                        <div className="flex items-center justify-between max-w-md mx-auto mb-4 text-xs font-medium text-zinc-400">
                            <span className={step >= 1 ? "text-emerald-400 font-semibold" : ""}>1. Business</span>
                            <ChevronRight className="w-3 h-3 text-zinc-600" />
                            <span className={step >= 2 ? "text-emerald-400 font-semibold" : ""}>2. Location</span>
                            <ChevronRight className="w-3 h-3 text-zinc-600" />
                            <span className={step >= 3 ? "text-emerald-400 font-semibold" : ""}>3. Budget</span>
                            <ChevronRight className="w-3 h-3 text-zinc-600" />
                            <span className={step >= 4 ? "text-emerald-400 font-semibold" : ""}>4. Objective</span>
                        </div>
                        <div className="w-full bg-zinc-800/40 h-1.5 rounded-full overflow-hidden max-w-md mx-auto">
                            <div
                                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
                                style={{ width: `${(step / 4) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Loading / AI Processing State */}
                {isAnalyzing && (
                    <div className="max-w-md mx-auto w-full py-16 px-6 text-center rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/30 to-black/60 backdrop-blur-xl shadow-2xl">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center mb-6 animate-pulse">
                            <Sparkles className="w-8 h-8 text-emerald-400 animate-spin" style={{ animationDuration: "3s" }} />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Mowglai AI Synthesizing...</h2>
                        <p className="text-xs text-zinc-400 mb-6">{analysisStatus}</p>

                        <div className="w-full bg-zinc-800/60 h-2 rounded-full overflow-hidden mb-3">
                            <div
                                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 h-full transition-all duration-500 ease-out"
                                style={{ width: `${analysisProgress}%` }}
                            />
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400">{analysisProgress}% Complete</span>
                    </div>
                )}

                {/* STEP 1: Business Name & Category */}
                {!isAnalyzing && step === 1 && (
                    <div className="max-w-2xl mx-auto w-full">
                        <div className="text-center mb-8">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-block mb-3">
                                STEP 1 OF 4
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                                Aapka Business Kya Hai?
                            </h1>
                            <p className="text-zinc-400 text-sm">
                                AI isse aapke brand ke liye exact template aur conversion structure pick karega.
                            </p>
                        </div>

                        <div className="bg-[#0b120e] border border-emerald-950/80 p-6 sm:p-8 rounded-2xl shadow-xl">
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                                    Business / Brand Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Apex Dental Clinic, IronForge Gym, Urban Chai"
                                    value={formData.businessName}
                                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/60 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition"
                                    autoFocus
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                                    Industry / Sector Select Karein
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                    {SECTORS.map((sec) => (
                                        <button
                                            key={sec.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, businessSector: sec.id })}
                                            className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                                                formData.businessSector === sec.id
                                                    ? "bg-emerald-500/15 border-emerald-400 text-white shadow-lg shadow-emerald-500/10"
                                                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                                            }`}
                                        >
                                            <span className="text-2xl mb-1">{sec.icon}</span>
                                            <div>
                                                <div className="text-xs font-semibold text-white">{sec.label}</div>
                                                <div className="text-[10px] text-zinc-400 truncate">{sec.example}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                disabled={!formData.businessName.trim()}
                                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
                            >
                                Next: Target City <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2: City & Target Market */}
                {!isAnalyzing && step === 2 && (
                    <div className="max-w-xl mx-auto w-full">
                        <div className="text-center mb-8">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-block mb-3">
                                STEP 2 OF 4
                            </span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                                Kaunse City / Area Ko Target Kar Rahe Ho?
                            </h2>
                            <p className="text-zinc-400 text-sm">
                                Local SEO aur Google Maps ranking ke liye yeh critical hai.
                            </p>
                        </div>

                        <div className="bg-[#0b120e] border border-emerald-950/80 p-6 sm:p-8 rounded-2xl shadow-xl">
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                                    Select or Type City
                                </label>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {POPULAR_CITIES.map((c) => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, city: c })}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                                                formData.city === c
                                                    ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                                                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white"
                                            }`}
                                        >
                                            <MapPin className="w-3 h-3 inline mr-1" />
                                            {c}
                                        </button>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    placeholder="Or type custom city (e.g. Pune, Jaipur, Lucknow, Gurgaon)"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/60 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="py-3.5 px-5 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800/40 text-sm font-semibold transition"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    disabled={!formData.city.trim()}
                                    className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-black font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
                                >
                                    Next: Budget & Packages <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 3: Budget Selection */}
                {!isAnalyzing && step === 3 && (
                    <div className="max-w-2xl mx-auto w-full">
                        <div className="text-center mb-8">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-block mb-3">
                                STEP 3 OF 4
                            </span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                                Aapka Expected Budget Range?
                            </h2>
                            <p className="text-zinc-400 text-sm">
                                Mowglai ke transparent upfront packages me se choose karein (No hidden cost).
                            </p>
                        </div>

                        <div className="bg-[#0b120e] border border-emerald-950/80 p-6 sm:p-8 rounded-2xl shadow-xl">
                            <div className="grid gap-3.5 mb-6">
                                {BUDGET_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.tier}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, budget: opt.tier })}
                                        className={`p-4 rounded-xl border text-left flex items-center justify-between transition ${
                                            formData.budget === opt.tier
                                                ? "bg-emerald-500/15 border-emerald-400 text-white shadow-lg shadow-emerald-500/10"
                                                : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                                        }`}
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-base font-bold text-white">{opt.tier}</span>
                                                <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                                                    {opt.usd}
                                                </span>
                                                <span className="text-xs font-semibold text-emerald-400">
                                                    {opt.label}
                                                </span>
                                            </div>
                                            <p className="text-xs text-zinc-400 mt-1">{opt.desc}</p>
                                        </div>
                                        <div className="text-right pl-4">
                                            <span className="text-[11px] px-2 py-1 rounded-md bg-zinc-800/80 text-zinc-300 whitespace-nowrap">
                                                ⏱️ {opt.time}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="py-3.5 px-5 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800/40 text-sm font-semibold transition"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(4)}
                                    className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
                                >
                                    Next: Core Objective <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 4: Objective & Optional Contact */}
                {!isAnalyzing && step === 4 && (
                    <div className="max-w-xl mx-auto w-full">
                        <div className="text-center mb-8">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-block mb-3">
                                STEP 4 OF 4
                            </span>
                            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                                Website Se Sabse Bada Goal Kya Hai?
                            </h2>
                            <p className="text-zinc-400 text-sm">
                                AI is goal ke hisaab se call-to-actions aur lead capture layout karega.
                            </p>
                        </div>

                        <div className="bg-[#0b120e] border border-emerald-950/80 p-6 sm:p-8 rounded-2xl shadow-xl">
                            <div className="grid gap-2.5 mb-6">
                                {GOAL_OPTIONS.map((g) => (
                                    <button
                                        key={g}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, primaryGoal: g })}
                                        className={`p-3.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition ${
                                            formData.primaryGoal === g
                                                ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                                                : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white"
                                        }`}
                                    >
                                        <span>{g}</span>
                                        {formData.primaryGoal === g && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                                    </button>
                                ))}
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                                    WhatsApp Number (Optional - To receive full spec)
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-700/60 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition text-sm"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    className="py-3.5 px-5 rounded-xl border border-zinc-700 text-zinc-300 hover:bg-zinc-800/40 text-sm font-semibold transition"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleStartAnalysis}
                                    className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-extrabold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
                                >
                                    <Sparkles className="w-4 h-4" /> Generate AI Match & Demo
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 5: THE AI RESULT DASHBOARD */}
                {!isAnalyzing && step === 5 && result && (
                    <div className="space-y-8 animate-fadeIn">
                        {/* Top Celebration Banner */}
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1.5 mb-3">
                                <Sparkles className="w-3.5 h-3.5" /> AI SPECIFICATION READY
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                {result.businessProfile.name} ke Liye Perfect Match
                            </h1>
                            <p className="text-zinc-400 text-sm mt-1">
                                AI ne aapke business ({result.businessProfile.city}) ke liye live template match kiya hai.
                            </p>
                        </div>

                        {/* Primary Recommendation Showcase Card */}
                        <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-950/40 via-[#0a120e] to-black p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-md">
                                {result.primaryTemplate.matchScore}% AI Match
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                {/* Left Info */}
                                <div className="lg:col-span-7 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                                            {result.primaryTemplate.sector}
                                        </span>
                                        <span className="text-zinc-600">•</span>
                                        <span className="text-xs text-zinc-400">
                                            {result.primaryTemplate.structure}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                                        {result.primaryTemplate.title}
                                    </h2>
                                    <p className="text-zinc-300 text-sm leading-relaxed">
                                        {result.primaryTemplate.description}
                                    </p>

                                    {/* Match reasons */}
                                    <div className="space-y-1.5 pt-2">
                                        {result.primaryTemplate.matchedReasons.map((reason, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                                                <span>{reason}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features Pill */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {result.primaryTemplate.features.map((feat, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                                            >
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Actions & Direct Live Demo */}
                                <div className="lg:col-span-5 flex flex-col gap-3 justify-center bg-black/40 border border-emerald-950/60 p-6 rounded-xl text-center">
                                    <div className="text-xs text-zinc-400 mb-1">Live Bespoke Preview</div>
                                    <div className="text-xl font-bold text-white mb-2 font-mono">
                                        {result.primaryTemplate.id}.html
                                    </div>

                                    {/* Button 1: Live Demo */}
                                    <button
                                        type="button"
                                        onClick={() => setActivePreviewUrl(result.primaryTemplate.previewUrl)}
                                        className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20"
                                    >
                                        <Eye className="w-4 h-4" /> Live Demo Dekho
                                    </button>

                                    {/* Open in new tab fallback */}
                                    <a
                                        href={result.primaryTemplate.previewUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs text-emerald-400 hover:text-emerald-300 inline-flex items-center justify-center gap-1 py-1"
                                    >
                                        Open in Fullscreen Tab <ExternalLink className="w-3 h-3" />
                                    </a>

                                    <div className="border-t border-zinc-800 my-1" />

                                    {/* Button 2: WhatsApp Lock */}
                                    <a
                                        href={generateWhatsAppUrl()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold flex items-center justify-center gap-2 transition"
                                    >
                                        <MessageCircle className="w-4 h-4 fill-black" /> Lock This Design on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Alternative Templates */}
                        {result.alternativeTemplates.length > 0 && (
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                                    Alternative Verified Designs
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {result.alternativeTemplates.map((alt) => (
                                        <div
                                            key={alt.id}
                                            className="bg-[#0b120e] border border-zinc-800 p-4 rounded-xl flex items-center justify-between hover:border-emerald-500/40 transition"
                                        >
                                            <div>
                                                <div className="text-sm font-bold text-white">{alt.title}</div>
                                                <div className="text-xs text-zinc-400">{alt.id}.html • {alt.type}</div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setActivePreviewUrl(alt.previewUrl)}
                                                className="px-3 py-1.5 rounded-lg border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/10 flex items-center gap-1 transition"
                                            >
                                                <Eye className="w-3 h-3" /> Preview
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3-Column Strategy Matrix */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1: Website Architecture */}
                            <div className="bg-[#0b120e] border border-emerald-950/80 p-5 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                        <Code className="w-4 h-4" />
                                        <h3 className="text-sm font-bold uppercase tracking-wider">Site Blueprint</h3>
                                    </div>
                                    <div className="text-xs text-zinc-400 mb-4">
                                        Type: <strong className="text-white">{result.websiteStructure.recommendedType}</strong>
                                    </div>
                                    <div className="space-y-3">
                                        {result.websiteStructure.pages.map((p, idx) => (
                                            <div key={idx} className="bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800/80">
                                                <div className="text-xs font-semibold text-white flex justify-between">
                                                    <span>{p.name}</span>
                                                    <span className="font-mono text-[10px] text-zinc-500">{p.slug}</span>
                                                </div>
                                                <div className="text-[11px] text-zinc-400 mt-1">{p.purpose}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Local SEO & GEO Questions */}
                            <div className="bg-[#0b120e] border border-emerald-950/80 p-5 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-teal-400 mb-3">
                                        <Globe className="w-4 h-4" />
                                        <h3 className="text-sm font-bold uppercase tracking-wider">SEO & GEO Engine</h3>
                                    </div>
                                    <div className="text-xs text-zinc-400 mb-3">
                                        What Gemini & ChatGPT will answer:
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        {result.seoStrategy.geoSearchQuestions.slice(0, 3).map((q, idx) => (
                                            <div key={idx} className="text-xs text-zinc-300 bg-zinc-900/40 p-2 rounded-md border border-zinc-800">
                                                💬 &ldquo;{q}&rdquo;
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopySchema}
                                    className="w-full py-2 px-3 rounded-lg border border-zinc-700 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 flex items-center justify-center gap-1.5 transition"
                                >
                                    {copiedSchema ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copiedSchema ? "Schema JSON Copied!" : "Copy JSON-LD Schema"}
                                </button>
                            </div>

                            {/* Column 3: Recommended Pricing & Checkout */}
                            <div className="bg-gradient-to-b from-emerald-950/50 to-[#0b120e] border border-emerald-500/30 p-5 rounded-2xl flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                                        <CreditCard className="w-4 h-4" />
                                        <h3 className="text-sm font-bold uppercase tracking-wider">Recommended Tier</h3>
                                    </div>
                                    <div className="text-2xl font-black text-white mt-1">
                                        {result.pricingSuggestion.priceInr}
                                        <span className="text-xs font-normal text-zinc-400 ml-1.5">
                                            ({result.pricingSuggestion.priceUsd})
                                        </span>
                                    </div>
                                    <div className="text-xs font-semibold text-emerald-400 mt-0.5">
                                        {result.pricingSuggestion.tierName}
                                    </div>
                                    <div className="text-[11px] text-zinc-400 mt-1 mb-4">
                                        Delivery: {result.pricingSuggestion.deliveryTime}
                                    </div>

                                    <ul className="space-y-1.5 mb-4 text-xs text-zinc-300">
                                        {result.pricingSuggestion.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="/investment"
                                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs flex items-center justify-center gap-1.5 transition text-center shadow-lg shadow-emerald-500/10"
                                >
                                    Book via Razorpay / Card <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Action Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800">
                            <button
                                type="button"
                                onClick={() => {
                                    setStep(1);
                                    setResult(null);
                                }}
                                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition"
                            >
                                <RefreshCw className="w-3.5 h-3.5" /> Start New AI Onboarding
                            </button>

                            <div className="text-xs text-zinc-500 font-mono">
                                ID: {result.id} • Mowglai AI v2.5 Engine
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
                            title="Mowglai Template Preview"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

