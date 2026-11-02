"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    Sparkles,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Eye,
    RefreshCw,
    Globe,
    MapPin,
    Copy,
    Check,
    ExternalLink,
    Code,
    CreditCard,
    ChevronRight,
    MessageCircle
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
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

const POPULAR_CITIES = [
    "Bangalore",
    "Chennai",
    "Delhi NCR",
    "Noida",
    "Pune",
    "Lucknow",
    "Kanpur",
    "Mumbai",
    "Global / International"
];

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
        }, 500);

        const step2 = setTimeout(() => {
            setAnalysisProgress(75);
            setAnalysisStatus("Generating Local SEO schema & GEO search questions...");
        }, 1000);

        const step3 = setTimeout(async () => {
            setAnalysisProgress(100);
            setAnalysisStatus("Finalizing tailored specifications...");

            try {
                const response = await fetch("/api/ai-onboard.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    const data = await response.json();
                    const localFallback = analyzeClientOnboarding(formData);
                    setResult({ ...localFallback, ...data });
                } else {
                    setResult(analyzeClientOnboarding(formData));
                }
            } catch {
                setResult(analyzeClientOnboarding(formData));
            } finally {
                setIsAnalyzing(false);
                setStep(5);
            }
        }, 1500);

        return () => {
            clearTimeout(step1);
            clearTimeout(step2);
            clearTimeout(step3);
        };
    };

    const handleCopySchema = () => {
        if (!result) return;
        navigator.clipboard.writeText(JSON.stringify(result.seoStrategy.jsonLdSchema, null, 2));
        setCopiedSchema(true);
        setTimeout(() => setCopiedSchema(false), 2500);
    };

    const generateWhatsAppUrl = () => {
        if (!result) return "https://wa.me/919452476331";
        const message = `Hi Mowglai team! I just completed the AI Project Planner:
• Brand Name: ${result.businessProfile.name}
• Category: ${result.businessProfile.sector}
• City: ${result.businessProfile.city}
• Recommended Template: ${result.primaryTemplate.title} (${result.primaryTemplate.previewUrl})
• Budget Tier: ${result.pricingSuggestion.priceInr} (${result.pricingSuggestion.tierName})

I want to lock this architectural specification and launch my project. Please connect!`;
        return `https://wa.me/919452476331?text=${encodeURIComponent(message)}`;
    };

    return (
        <PageLayout>
            <main className="min-h-screen bg-transparent relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                {/* Stepper Header (Only shown during steps 1-4) */}
                {step < 5 && !isAnalyzing && (
                    <div className="mb-8 max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-4 text-xs font-mono font-bold text-foreground/60 uppercase tracking-wider">
                            <span className={step >= 1 ? "text-primary" : ""}>1. Business</span>
                            <ChevronRight className="w-3.5 h-3.5 text-foreground/30" />
                            <span className={step >= 2 ? "text-primary" : ""}>2. Location</span>
                            <ChevronRight className="w-3.5 h-3.5 text-foreground/30" />
                            <span className={step >= 3 ? "text-primary" : ""}>3. Budget</span>
                            <ChevronRight className="w-3.5 h-3.5 text-primary" />
                            <span className={step >= 4 ? "text-primary" : ""}>4. Objective</span>
                        </div>
                        <div className="w-full bg-background/60 h-1.5 rounded-full overflow-hidden border border-primary/20">
                            <div
                                className="bg-primary h-full transition-all duration-300"
                                style={{ width: `${(step / 4) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {/* Loading / AI Processing State */}
                {isAnalyzing && (
                    <div className="max-w-md mx-auto w-full py-16 px-6 text-center rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-xl shadow-2xl">
                        <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 mx-auto flex items-center justify-center mb-6 animate-pulse">
                            <Sparkles className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: "3s" }} />
                        </div>
                        <h2 className="text-xl font-display font-black text-foreground uppercase mb-2">Mowglai AI Synthesizing...</h2>
                        <p className="text-xs text-foreground/70 mb-6">{analysisStatus}</p>

                        <div className="w-full bg-background/60 h-2 rounded-full overflow-hidden mb-3 border border-primary/20">
                            <div
                                className="bg-primary h-full transition-all duration-300 ease-out"
                                style={{ width: `${analysisProgress}%` }}
                            />
                        </div>
                        <span className="text-xs font-mono font-bold text-primary">{analysisProgress}% Complete</span>
                    </div>
                )}

                {/* STEP 1: Business Name & Category */}
                {!isAnalyzing && step === 1 && (
                    <div className="max-w-2xl mx-auto w-full">
                        <div className="text-center mb-8">
                            <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block mb-4">
                                STEP 1 OF 4 • BRAND PROFILE
                            </span>
                            <h1 className="text-3xl sm:text-5xl font-display font-black text-foreground uppercase tracking-tight mb-3">
                                Tell Us About Your Business
                            </h1>
                            <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                                Our AI selects the optimal high-performance Next.js template and local conversion structure for your brand.
                            </p>
                        </div>

                        <div className="bg-card/40 border border-primary/20 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md">
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                                    Business / Brand Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Apex Health Clinic, Urban Roast, Nova SaaS"
                                    value={formData.businessName}
                                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition text-sm"
                                    autoFocus
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                                    Select Industry Sector
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                    {SECTORS.map((sec) => (
                                        <button
                                            key={sec.id}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, businessSector: sec.id })}
                                            className={`p-3 rounded-xl border text-left flex flex-col justify-between transition ${
                                                formData.businessSector === sec.id
                                                    ? "bg-primary/15 border-primary text-foreground shadow-lg shadow-primary/10"
                                                    : "bg-background/40 border-primary/15 text-foreground/70 hover:border-primary/40 hover:text-foreground"
                                            }`}
                                        >
                                            <span className="text-2xl mb-1">{sec.icon}</span>
                                            <div>
                                                <div className="text-xs font-bold text-foreground">{sec.label}</div>
                                                <div className="text-[10px] text-foreground/60 truncate">{sec.example}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                disabled={!formData.businessName.trim()}
                                className="w-full py-4 px-6 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition shadow-xl hover:scale-105"
                            >
                                Next: Target Location <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2: City & Target Market */}
                {!isAnalyzing && step === 2 && (
                    <div className="max-w-xl mx-auto w-full">
                        <div className="text-center mb-8">
                            <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block mb-4">
                                STEP 2 OF 4 • TARGET MARKET
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground uppercase tracking-tight mb-3">
                                Which Region Are You Targeting?
                            </h2>
                            <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                                Critical for 48-Hour Google Business Profile (GMB) optimization and localized search rankings.
                            </p>
                        </div>

                        <div className="bg-card/40 border border-primary/20 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md">
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                                    Select or Type Target City
                                </label>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {POPULAR_CITIES.map((c) => (
                                        <button
                                            key={c}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, city: c })}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                                                formData.city === c
                                                    ? "bg-primary/20 border-primary text-primary font-bold"
                                                    : "bg-background/40 border-primary/15 text-foreground/70 hover:text-foreground hover:border-primary/40"
                                            }`}
                                        >
                                            <MapPin className="w-3 h-3 inline mr-1" />
                                            {c}
                                        </button>
                                    ))}
                                </div>

                                <input
                                    type="text"
                                    placeholder="Or type custom city (e.g. Pune, Bangalore, Lucknow, Gurgaon)"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition text-sm"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="py-3.5 px-5 rounded-full border border-primary/20 text-foreground/80 hover:bg-primary/10 text-sm font-semibold transition"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    disabled={!formData.city.trim()}
                                    className="flex-1 py-4 px-6 rounded-full bg-primary hover:bg-primary/90 disabled:opacity-40 text-primary-foreground font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition shadow-xl hover:scale-105"
                                >
                                    Next: Budget &amp; Tiers <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 3: Budget Selection */}
                {!isAnalyzing && step === 3 && (
                    <div className="max-w-2xl mx-auto w-full">
                        <div className="text-center mb-8">
                            <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block mb-4">
                                STEP 3 OF 4 • INVESTMENT
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground uppercase tracking-tight mb-3">
                                Choose Your Investment Tier
                            </h2>
                            <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                                Transparent milestone pricing starting at ₹5,000 INR ($55 USD) with zero recurring lock-ins.
                            </p>
                        </div>

                        <div className="bg-card/40 border border-primary/20 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md">
                            <div className="grid gap-3.5 mb-6">
                                {BUDGET_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.tier}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, budget: opt.tier })}
                                        className={`p-4 rounded-xl border text-left flex items-center justify-between transition ${
                                            formData.budget === opt.tier
                                                ? "bg-primary/15 border-primary text-foreground shadow-lg shadow-primary/10"
                                                : "bg-background/40 border-primary/15 text-foreground/70 hover:border-primary/40"
                                        }`}
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-base font-bold text-foreground">{opt.tier}</span>
                                                <span className="text-xs px-2 py-0.5 rounded bg-background/80 text-foreground/70 font-mono border border-primary/20">
                                                    {opt.usd}
                                                </span>
                                                <span className="text-xs font-bold text-primary">
                                                    {opt.label}
                                                </span>
                                            </div>
                                            <p className="text-xs text-foreground/70 mt-1">{opt.desc}</p>
                                        </div>
                                        <div className="text-right pl-4">
                                            <span className="text-[11px] px-2.5 py-1 rounded-md bg-background/80 text-foreground/80 whitespace-nowrap font-mono border border-primary/20">
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
                                    className="py-3.5 px-5 rounded-full border border-primary/20 text-foreground/80 hover:bg-primary/10 text-sm font-semibold transition"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(4)}
                                    className="flex-1 py-4 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition shadow-xl hover:scale-105"
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
                            <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-block mb-4">
                                STEP 4 OF 4 • CONVERSION GOAL
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground uppercase tracking-tight mb-3">
                                What Is Your Primary Objective?
                            </h2>
                            <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                                Our AI structures the user journey, lead-capture forms, and call-to-actions around this goal.
                            </p>
                        </div>

                        <div className="bg-card/40 border border-primary/20 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md">
                            <div className="grid gap-2.5 mb-6">
                                {GOAL_OPTIONS.map((g) => (
                                    <button
                                        key={g}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, primaryGoal: g })}
                                        className={`p-3.5 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition ${
                                            formData.primaryGoal === g
                                                ? "bg-primary/20 border-primary text-primary font-bold"
                                                : "bg-background/40 border-primary/15 text-foreground/70 hover:border-primary/40 hover:text-foreground"
                                        }`}
                                    >
                                        <span>{g}</span>
                                        {formData.primaryGoal === g && <CheckCircle2 className="w-4 h-4 text-primary" />}
                                    </button>
                                ))}
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                                    WhatsApp Number (Optional - To receive architecture spec)
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+91 94524 76331"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3.5 rounded-xl bg-background/50 border border-primary/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-primary transition text-sm"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    className="py-3.5 px-5 rounded-full border border-primary/20 text-foreground/80 hover:bg-primary/10 text-sm font-semibold transition"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleStartAnalysis}
                                    className="flex-1 py-4 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition shadow-xl hover:scale-105"
                                >
                                    <Sparkles className="w-4 h-4" /> Generate AI Match &amp; Demo
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 5: THE AI RESULT DASHBOARD */}
                {!isAnalyzing && step === 5 && result && (
                    <div className="space-y-8">
                        {/* Top Celebration Banner */}
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 inline-flex items-center gap-1.5 mb-3">
                                <Sparkles className="w-4 h-4 text-primary" /> AI SPECIFICATION READY
                            </span>
                            <h1 className="text-3xl sm:text-5xl font-display font-black text-foreground uppercase tracking-tight">
                                Tailored Architecture for {result.businessProfile.name}
                            </h1>
                            <p className="text-foreground/75 text-sm sm:text-base mt-2">
                                Matched for {result.businessProfile.city} with verified sub-second speed benchmarks.
                            </p>
                        </div>

                        {/* Primary Recommendation Showcase Card */}
                        <div className="rounded-2xl border-2 border-primary/40 bg-card/60 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-md">
                                {result.primaryTemplate.matchScore}% AI Match
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                {/* Left Info */}
                                <div className="lg:col-span-7 space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                                            {result.primaryTemplate.sector}
                                        </span>
                                        <span className="text-foreground/30">•</span>
                                        <span className="text-xs text-foreground/70">
                                            {result.primaryTemplate.structure}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-display font-black text-foreground uppercase">
                                        {result.primaryTemplate.title}
                                    </h2>
                                    <p className="text-foreground/80 text-sm leading-relaxed">
                                        {result.primaryTemplate.description}
                                    </p>

                                    {/* Match reasons */}
                                    <div className="space-y-1.5 pt-2">
                                        {result.primaryTemplate.matchedReasons.map((reason, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                                <span>{reason}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features Pill */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {result.primaryTemplate.features.map((feat, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[11px] px-3 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 font-bold"
                                            >
                                                {feat}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Actions & Direct Live Demo */}
                                <div className="lg:col-span-5 flex flex-col gap-3 justify-center bg-background/50 border border-primary/20 p-6 rounded-2xl text-center">
                                    <div className="text-xs text-foreground/60 mb-1 uppercase tracking-wider font-bold">Live Bespoke Preview</div>
                                    <div className="text-xl font-display font-black text-foreground mb-2 font-mono">
                                        {result.primaryTemplate.id}.html
                                    </div>

                                    {/* Button 1: Live Demo */}
                                    <button
                                        type="button"
                                        onClick={() => setActivePreviewUrl(result.primaryTemplate.previewUrl)}
                                        className="w-full py-3.5 px-5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg hover:scale-105"
                                    >
                                        <Eye className="w-4 h-4" /> View Live Demo
                                    </button>

                                    {/* Open in new tab fallback */}
                                    <a
                                        href={result.primaryTemplate.previewUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs text-primary hover:underline inline-flex items-center justify-center gap-1 py-1"
                                    >
                                        Open in Fullscreen Tab <ExternalLink className="w-3 h-3" />
                                    </a>

                                    <div className="border-t border-primary/20 my-1" />

                                    {/* Button 2: WhatsApp Lock */}
                                    <a
                                        href={generateWhatsAppUrl()}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg"
                                    >
                                        <MessageCircle className="w-4 h-4 fill-white" /> Lock Design on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Alternative Templates */}
                        {result.alternativeTemplates.length > 0 && (
                            <div>
                                <h3 className="text-sm font-display font-black text-foreground uppercase tracking-wider mb-3">
                                    Alternative Verified Designs
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {result.alternativeTemplates.map((alt) => (
                                        <div
                                            key={alt.id}
                                            className="bg-card/40 border border-primary/20 p-4 rounded-xl flex items-center justify-between hover:border-primary transition backdrop-blur-sm"
                                        >
                                            <div>
                                                <div className="text-sm font-bold text-foreground">{alt.title}</div>
                                                <div className="text-xs text-foreground/60">{alt.id}.html • {alt.type}</div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setActivePreviewUrl(alt.previewUrl)}
                                                className="px-3 py-1.5 rounded-lg border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/10 flex items-center gap-1 transition"
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
                            <div className="bg-card/40 border border-primary/20 p-6 rounded-2xl flex flex-col justify-between backdrop-blur-md">
                                <div>
                                    <div className="flex items-center gap-2 text-primary mb-3">
                                        <Code className="w-4 h-4" />
                                        <h3 className="text-sm font-display font-black uppercase tracking-wider">Site Blueprint</h3>
                                    </div>
                                    <div className="text-xs text-foreground/70 mb-4">
                                        Type: <strong className="text-foreground">{result.websiteStructure.recommendedType}</strong>
                                    </div>
                                    <div className="space-y-3">
                                        {result.websiteStructure.pages.map((p, idx) => (
                                            <div key={idx} className="bg-background/40 p-3 rounded-lg border border-primary/15">
                                                <div className="text-xs font-semibold text-foreground flex justify-between">
                                                    <span>{p.name}</span>
                                                    <span className="font-mono text-[10px] text-foreground/50">{p.slug}</span>
                                                </div>
                                                <div className="text-[11px] text-foreground/70 mt-1">{p.purpose}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Local SEO & GEO Questions */}
                            <div className="bg-card/40 border border-primary/20 p-6 rounded-2xl flex flex-col justify-between backdrop-blur-md">
                                <div>
                                    <div className="flex items-center gap-2 text-emerald-400 mb-3">
                                        <Globe className="w-4 h-4" />
                                        <h3 className="text-sm font-display font-black uppercase tracking-wider">SEO &amp; GEO Engine</h3>
                                    </div>
                                    <div className="text-xs text-foreground/70 mb-3">
                                        What Gemini &amp; ChatGPT will answer:
                                    </div>
                                    <div className="space-y-2 mb-4">
                                        {result.seoStrategy.geoSearchQuestions.slice(0, 3).map((q, idx) => (
                                            <div key={idx} className="text-xs text-foreground/80 bg-background/40 p-2.5 rounded-md border border-primary/15">
                                                💬 &ldquo;{q}&rdquo;
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopySchema}
                                    className="w-full py-2.5 px-3 rounded-full border border-primary/30 text-xs font-semibold text-foreground hover:bg-primary/10 flex items-center justify-center gap-1.5 transition"
                                >
                                    {copiedSchema ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                                    {copiedSchema ? "Schema JSON Copied!" : "Copy JSON-LD Schema"}
                                </button>
                            </div>

                            {/* Column 3: Recommended Pricing & Checkout */}
                            <div className="bg-primary/10 border-2 border-primary/30 p-6 rounded-2xl flex flex-col justify-between backdrop-blur-md shadow-xl shadow-primary/5">
                                <div>
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <CreditCard className="w-4 h-4" />
                                        <h3 className="text-sm font-display font-black uppercase tracking-wider">Recommended Tier</h3>
                                    </div>
                                    <div className="text-2xl font-black text-foreground mt-1">
                                        {result.pricingSuggestion.priceInr}
                                        <span className="text-xs font-normal text-foreground/70 ml-1.5 font-mono">
                                            ({result.pricingSuggestion.priceUsd})
                                        </span>
                                    </div>
                                    <div className="text-xs font-bold text-primary mt-0.5">
                                        {result.pricingSuggestion.tierName}
                                    </div>
                                    <div className="text-[11px] text-foreground/70 mt-1 mb-4">
                                        Delivery: {result.pricingSuggestion.deliveryTime}
                                    </div>

                                    <ul className="space-y-1.5 mb-4 text-xs text-foreground/80">
                                        {result.pricingSuggestion.features.map((feat, idx) => (
                                            <li key={idx} className="flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="/investment"
                                    className="w-full py-3 px-4 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition text-center shadow-lg hover:scale-105"
                                >
                                    Book via Razorpay / Card <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Action Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-primary/20">
                            <button
                                type="button"
                                onClick={() => {
                                    setStep(1);
                                    setResult(null);
                                }}
                                className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1.5 transition"
                            >
                                <RefreshCw className="w-3.5 h-3.5" /> Start New AI Onboarding
                            </button>

                            <div className="text-xs text-foreground/50 font-mono">
                                ID: {result.id} • Mowglai AI v2.5 Engine
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
                            title="Mowglai Template Preview"
                        />
                    </div>
                </div>
            )}
        </PageLayout>
    );
}
