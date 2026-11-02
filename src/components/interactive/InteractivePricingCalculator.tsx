"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Sparkles, Plus, Clock, HelpCircle } from "lucide-react";
import Link from "next/link";

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  priceInr: number;
  priceUsd: number;
  turnaround: string;
  description: string;
  features: string[];
}

const tiers: PlanTier[] = [
  {
    id: "starter",
    name: "Launchpad Starter",
    priceInr: 5000,
    priceUsd: 55,
    turnaround: "3 Business Days",
    description: "High-performance responsive web presence engineered for emerging startups and local businesses.",
    features: [
      "1-3 Bespoke Responsive Pages",
      "Next.js 16 & Tailwind CSS",
      "100/100 Lighthouse Performance",
      "Contact & WhatsApp Lead Integration",
      "1-Year Free SSL & Domain Connect",
      "Basic SEO Metadata Setup",
    ],
  },
  {
    id: "growth",
    name: "Growth & Scale",
    badge: "MOST POPULAR",
    priceInr: 10000,
    priceUsd: 115,
    turnaround: "5 Business Days",
    description: "Full-scale corporate architecture with custom micro-animations and AI search indexing.",
    features: [
      "Up to 8 Custom Interactive Pages",
      "Custom 3D / Framer Motion Visuals",
      "Generative Engine (GEO) AI Indexing",
      "Answer Engine (AEO) Voice & Snippet SEO",
      "Dynamic Blog / Case Studies Engine",
      "Multi-Channel Lead Capture & CRM",
      "Speed SLA: <100ms Page Load",
    ],
  },
  {
    id: "ecom",
    name: "Full-Stack Commerce",
    badge: "BEST FOR SALES",
    priceInr: 13000,
    priceUsd: 150,
    turnaround: "7 Business Days",
    description: "Complete transactional ecosystem with automated billing, payment gateways, and inventory sync.",
    features: [
      "Full Product Catalog & Cart Workflow",
      "Razorpay, Stripe & UPI Gateway",
      "DukaanMitra OS Billing Integration",
      "Automatic 5% GST Invoice Generation",
      "Order Management & Customer Dashboard",
      "Inventory & Low-Stock Alerts",
      "Bank-Grade SSL & Webhook Security",
    ],
  },
  {
    id: "enterprise",
    name: "Company OS Enterprise",
    priceInr: 35000,
    priceUsd: 420,
    turnaround: "10-14 Business Days",
    description: "Autonomous multi-agent workflows, Reinforcement Learning policy routing, and custom cloud microservices.",
    features: [
      "RL Contextual Multi-Armed Bandit Engine",
      "Autonomous AI Agent Workflows",
      "TruckWala / SolarHub / HireSaathi Modules",
      "Zero-Trust SSRF & RBAC Cloud Security",
      "Dedicated Senior Architect Support",
      "24/7 Uptime SLA & Hot-Standby Failover",
      "Custom Microservice APIs & Webhooks",
    ],
  },
];

const addons = [
  { id: "ai_bot", name: "Embedded AI Chatbot (Gemini / RAG)", inr: 2000, usd: 25 },
  { id: "geo_boost", name: "Generative Engine Optimization (GEO)", inr: 1500, usd: 20 },
  { id: "fast_track", name: "48-Hour Priority Delivery Sprint", inr: 3000, usd: 35 },
  { id: "multi_lang", name: "Multi-Language Localization (Hindi/English)", inr: 1500, usd: 20 },
];

export default function InteractivePricingCalculator() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [selectedTierId, setSelectedTierId] = useState("growth");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const selectedTier = tiers.find((t) => t.id === selectedTierId) || tiers[1];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const basePrice = currency === "INR" ? selectedTier.priceInr : selectedTier.priceUsd;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = addons.find((a) => a.id === id);
    if (!addon) return sum;
    return sum + (currency === "INR" ? addon.inr : addon.usd);
  }, 0);

  const totalPrice = basePrice + addonsTotal;
  const currencySymbol = currency === "INR" ? "₹" : "$";

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl bg-[#0c0d12]/90 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.7)] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header with Currency Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Clear, Transparent Engineering Tiers
          </div>
          <h3 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            Interactive Project Estimator
          </h3>
          <p className="text-white/60 text-sm max-w-lg mt-1">
            Zero hidden charges. Transparent sprint timelines. Choose a foundation and configure custom modules.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10">
          <button
            type="button"
            onClick={() => setCurrency("INR")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              currency === "INR"
                ? "bg-primary text-black shadow-[0_0_20px_rgba(200,241,105,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            INR (₹)
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              currency === "USD"
                ? "bg-primary text-black shadow-[0_0_20px_rgba(200,241,105,0.4)]"
                : "text-white/60 hover:text-white"
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* 4 Tier Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 relative z-10">
        {tiers.map((tier) => {
          const isSelected = tier.id === selectedTierId;
          const price = currency === "INR" ? tier.priceInr.toLocaleString("en-IN") : tier.priceUsd;

          return (
            <div
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative flex flex-col justify-between ${
                isSelected
                  ? "bg-white/[0.06] border-2 border-primary shadow-[0_0_35px_rgba(200,241,105,0.2)] scale-[1.02]"
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-primary text-black text-[10px] font-mono font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(200,241,105,0.5)]">
                  {tier.badge}
                </div>
              )}

              <div>
                <h4 className="text-lg font-display font-bold text-white uppercase">{tier.name}</h4>
                <p className="text-xs text-white/50 mt-1 line-clamp-2">{tier.description}</p>

                <div className="mt-4 mb-3 flex items-baseline gap-1">
                  <span className="text-3xl font-display font-black text-white">
                    {currencySymbol}{price}
                  </span>
                  <span className="text-xs font-mono text-white/40">/project</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Turnaround: {tier.turnaround}</span>
                </div>

                <ul className="space-y-2 border-t border-white/10 pt-4 text-left">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className={`mt-6 w-full py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all ${
                  isSelected
                    ? "bg-primary text-black shadow-[0_0_20px_rgba(200,241,105,0.3)]"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {isSelected ? "Selected Tier" : "Select Tier"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Add-on Features & Real-time Live Summary */}
      <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Optional Add-ons */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-mono font-bold text-white/60 uppercase tracking-wider mb-2">
            Add-on Capabilities & Sprints
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {addons.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              const addonPrice = currency === "INR" ? `₹${addon.inr.toLocaleString("en-IN")}` : `$${addon.usd}`;

              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    isChecked
                      ? "bg-primary/10 border-primary text-white"
                      : "bg-white/[0.02] border-white/5 text-white/70 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-2.5 pr-2">
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center border transition-colors ${
                        isChecked ? "bg-primary border-primary text-black" : "border-white/30"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3" />}
                    </div>
                    <span className="text-xs font-medium text-white">{addon.name}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-primary shrink-0">
                    +{addonPrice}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Total & CTA Box */}
        <div className="lg:col-span-5 rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-white/50 uppercase pb-2 border-b border-white/10">
              <span>Configured Scope</span>
              <span>{selectedTier.name}</span>
            </div>

            <div className="pt-4 flex items-baseline justify-between">
              <div>
                <span className="text-xs text-white/60 block font-mono">Estimated Investment</span>
                <span className="text-3xl sm:text-4xl font-display font-black text-white">
                  {currencySymbol}{totalPrice.toLocaleString(currency === "INR" ? "en-IN" : "en-US")}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-emerald-400 font-bold block">
                  Delivery in {selectedTier.turnaround}
                </span>
                <span className="text-[11px] text-white/40 font-mono">No hidden fees</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-2.5">
            <Link
              href={`/start-project?tier=${selectedTier.id}&currency=${currency}&addons=${selectedAddons.join(",")}`}
              className="flex-1 py-3.5 px-4 rounded-xl bg-primary text-black font-display font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(200,241,105,0.3)]"
            >
              <span>Launch Project with Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://wa.me/917905187748?text=Hello%20Mowglai%20Team,%20I%20would%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display font-semibold text-xs tracking-wide text-center transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
