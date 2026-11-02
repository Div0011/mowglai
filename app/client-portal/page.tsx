"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  ExternalLink,
  Code2,
  Lock,
  Layers,
  Key,
  Server,
  Download,
  Send,
  Building2,
  Cpu,
  Bot,
  Activity,
  PhoneCall
} from "lucide-react";
import OriginalLayout from "@/styles/original/Layout";

interface DemoProject {
  id: string;
  title: string;
  category: string;
  status: "Staging Ready" | "Production Live" | "Milestone Approved";
  progress: number;
  description: string;
  stagingUrl: string;
  features: string[];
  metrics: {
    lighthouse: number;
    latency: string;
    security: string;
  };
}

const demoProjects: DemoProject[] = [
  {
    id: "commerce",
    title: "Cognitive Commerce & Multi-Tax Retail POS",
    category: "Full-Stack Retail System",
    status: "Staging Ready",
    progress: 100,
    description: "Real-time point of sale, automated 5% GST tax calculation, instant customer invoice generation, and low-stock ledger alerts.",
    stagingUrl: "https://staging-commerce.mowglai.dev",
    features: ["Line-Item Billing", "Automatic 5% GST Invoicing", "Razorpay / UPI Integration", "PDF Receipts Export"],
    metrics: { lighthouse: 99, latency: "42ms", security: "TLS 1.3" }
  },
  {
    id: "agent-swarm",
    title: "Autonomous Multi-Agent Hive Orchestration",
    category: "Distributed Intelligence",
    status: "Staging Ready",
    progress: 95,
    description: "Self-coordinating agent swarms running market intelligence, asynchronous inbox/outbox messaging, and automated lead research.",
    stagingUrl: "https://staging-hive.mowglai.dev",
    features: ["Asynchronous Message Broker", "Zero-PII Logging", "Multi-Agent Task Fleet", "UCB1 RL Routing"],
    metrics: { lighthouse: 100, latency: "38ms", security: "Zero-Trust" }
  },
  {
    id: "voice-ai",
    title: "Conversational Voice AI Telephony Guard",
    category: "Speech & Audio Intelligence",
    status: "Staging Ready",
    progress: 90,
    description: "WebSocket streaming voice assistant with Hindi/Hinglish comprehension, budget guards, human takeover state, and spam filters.",
    stagingUrl: "https://staging-telephony.mowglai.dev",
    features: ["RFC 6455 WebSocket Streaming", "Hinglish Intent Engine", "Audio Waterfall Latency", "PII Redaction"],
    metrics: { lighthouse: 98, latency: "65ms", security: "Encrypted" }
  },
  {
    id: "enterprise-web",
    title: "High-Performance Next.js 16 Web Platform",
    category: "Frontier Brand Experience",
    status: "Production Live",
    progress: 100,
    description: "Bespoke 3D animations, zero layout shift, sub-second edge TTFB, and localized Generative Engine Optimization (GEO).",
    stagingUrl: "https://staging-web.mowglai.dev",
    features: ["Next.js 16 & React 19", "Framer Motion & GSAP", "GEO & AEO Schema.org", "Cloudflare Edge POPs"],
    metrics: { lighthouse: 100, latency: "28ms", security: "A+ SSL" }
  }
];

export default function ClientPortalPage() {
  const [portalMode, setPortalMode] = useState<"demo" | "production">("demo");
  const [selectedDemoId, setSelectedDemoId] = useState("commerce");
  const [deviceViewport, setDeviceViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [feedbackInput, setFeedbackInput] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const activeProject = demoProjects.find((p) => p.id === selectedDemoId) || demoProjects[0];

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackInput.trim()) return;
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackInput("");
      setFeedbackSubmitted(false);
    }, 3000);
  };

  return (
    <OriginalLayout>
      <div className="relative w-full min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Ambient Top Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[140px] pointer-events-none rounded-full" />

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Mowglai Client Experience Portal
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
              Personalized <span className="text-primary italic">Demo & Delivery</span> Center
            </h1>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-1">
              Explore custom MVP prototypes, inspect staging milestones in real-time, and unlock post-payment production deliverables.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setPortalMode("demo")}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 ${
                portalMode === "demo"
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(200,241,105,0.35)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>MVP & Demo Sandbox</span>
            </button>
            <button
              type="button"
              onClick={() => setPortalMode("production")}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all flex items-center gap-2 ${
                portalMode === "production"
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(200,241,105,0.35)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Production Handover</span>
            </button>
          </div>
        </div>

        {/* ── MODE 1: DEMO & MVP SANDBOX ────────────────────────────────────────── */}
        {portalMode === "demo" && (
          <div className="pt-8 space-y-8 relative z-10">
            {/* Project Picker Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {demoProjects.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setSelectedDemoId(proj.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                    proj.id === selectedDemoId
                      ? "bg-white/10 border border-primary text-primary"
                      : "bg-white/[0.02] border border-white/5 text-white/60 hover:bg-white/[0.05]"
                  }`}
                >
                  {proj.title}
                </button>
              ))}
            </div>

            {/* Viewport Control Bar */}
            <div className="rounded-2xl bg-[#0c0d12]/90 border border-white/10 p-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-white/70">
                  Inspecting: <strong className="text-white">{activeProject.title}</strong> ({activeProject.status})
                </span>
              </div>

              {/* Viewport Switcher */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10">
                <button
                  type="button"
                  onClick={() => setDeviceViewport("desktop")}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    deviceViewport === "desktop" ? "bg-primary text-black" : "text-white/60 hover:text-white"
                  }`}
                  title="Desktop View (1440px)"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceViewport("tablet")}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    deviceViewport === "tablet" ? "bg-primary text-black" : "text-white/60 hover:text-white"
                  }`}
                  title="Tablet View (768px)"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setDeviceViewport("mobile")}
                  className={`p-2 rounded-lg text-xs transition-all ${
                    deviceViewport === "mobile" ? "bg-primary text-black" : "text-white/60 hover:text-white"
                  }`}
                  title="Mobile View (375px)"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-white/60">Lighthouse: <strong className="text-primary">{activeProject.metrics.lighthouse}/100</strong></span>
                <span className="text-white/60">Latency: <strong className="text-white">{activeProject.metrics.latency}</strong></span>
                <span className="text-white/60">Security: <strong className="text-emerald-400">{activeProject.metrics.security}</strong></span>
              </div>
            </div>

            {/* Sandbox Simulation Frame */}
            <div className="flex justify-center w-full">
              <div
                className={`transition-all duration-500 rounded-3xl bg-[#090a0f] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col ${
                  deviceViewport === "desktop"
                    ? "w-full min-h-[580px]"
                    : deviceViewport === "tablet"
                    ? "w-[768px] min-h-[580px]"
                    : "w-[375px] min-h-[580px]"
                }`}
              >
                {/* Browser Top Navigation Mock */}
                <div className="px-4 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-3 font-mono text-xs text-white/50 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" /> {activeProject.stagingUrl}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                    PREVIEW SANDBOX
                  </span>
                </div>

                {/* Interactive Simulated Body */}
                <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-block text-xs font-mono text-primary font-bold uppercase tracking-wider mb-2">
                      {activeProject.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase mb-3">
                      {activeProject.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-6">
                      {activeProject.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {activeProject.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Milestone Progress Bar */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center justify-between text-xs font-mono text-white/60 mb-2">
                      <span>Milestone Delivery Progress</span>
                      <span className="text-primary font-bold">{activeProject.progress}% Ready</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-700"
                        style={{ width: `${activeProject.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Feedback & Revision Drawer */}
            <div className="rounded-3xl bg-[#0c0d12]/90 border border-white/10 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-lg font-display font-bold text-white uppercase">Client Milestone Feedback & Revision</h4>
                  <p className="text-xs text-white/60">Submit change requests or approve this build directly to Amit Sharma & Nikhil Sharma's engineering team.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/start-project"
                    className="px-4 py-2 rounded-xl bg-primary text-black font-display font-bold text-xs uppercase"
                  >
                    Approve & Deploy ↗
                  </Link>
                </div>
              </div>

              <form onSubmit={handleFeedbackSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={feedbackInput}
                  onChange={(e) => setFeedbackInput(e.target.value)}
                  placeholder="Enter revision notes or feedback for this milestone..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs outline-none focus:border-primary font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-mono text-xs font-bold uppercase transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Notes</span>
                </button>
              </form>

              {feedbackSubmitted && (
                <div className="mt-3 text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Feedback registered and routed to lead delivery executor Amit Sharma.</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── MODE 2: POST-PAYMENT PRODUCTION HANDOVER ──────────────────────────── */}
        {portalMode === "production" && (
          <div className="pt-8 space-y-8 relative z-10">
            {/* Top Security Banner */}
            <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-display font-bold text-white uppercase">Production Environment Unlocked</h4>
                  <p className="text-xs text-white/70">Payment verified. Zero-trust production keys, edge deployment pipelines, and source archives are accessible.</p>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/20 px-3 py-1.5 rounded-full border border-emerald-500/30">
                SLA ACTIVE: 99.98%
              </span>
            </div>

            {/* Handover Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Box 1: API Keys & Auth Tokens */}
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-primary font-bold uppercase mb-2">
                    <Key className="w-4 h-4" />
                    <span>Credentials & Auth</span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-white uppercase mb-2">Production Bearer Token</h4>
                  <p className="text-xs text-white/60 mb-4 leading-relaxed">
                    Zero-trust Bearer authentication token for internal and client API calls.
                  </p>
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-white/80 select-all break-all">
                    mwg_live_884d3dc7b5c06b1682dfde0ebeafc32a3f2e55a5
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                  <span>Scope: Read / Write</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
              </div>

              {/* Box 2: Git Repository & Source Code Handover */}
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold uppercase mb-2">
                    <Code2 className="w-4 h-4" />
                    <span>Source Code Handover</span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-white uppercase mb-2">Codebase & IP Ownership</h4>
                  <p className="text-xs text-white/60 mb-4 leading-relaxed">
                    100% intellectual property ownership transferred. Production commit SHA synced.
                  </p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-white/60">
                      <span>Git Remote:</span>
                      <span className="text-white font-bold">1nsharma/mowglai</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Production SHA:</span>
                      <span className="text-primary font-bold">884d3dc</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                  <a
                    href="https://github.com/1nsharma/mowglai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-white text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>View GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Box 3: Cloud Infrastructure & Deployment */}
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase mb-2">
                    <Server className="w-4 h-4" />
                    <span>Edge Infrastructure</span>
                  </div>
                  <h4 className="text-lg font-display font-bold text-white uppercase mb-2">Multi-Cloud Runtime</h4>
                  <p className="text-xs text-white/60 mb-4 leading-relaxed">
                    Global points of presence, Apache/PHP backend execution, and Cloudflare Edge caching.
                  </p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between text-white/60">
                      <span>Edge Cache Ratio:</span>
                      <span className="text-emerald-400 font-bold">98.4%</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Average TTFB:</span>
                      <span className="text-white font-bold">28ms</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href="https://wa.me/917905187748?text=Hello%20Amit%20%26%20Nikhil,%20I%20am%20requesting%20priority%20production%20support."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-primary text-black text-xs font-display font-bold uppercase tracking-wider text-center block transition-all"
                  >
                    24/7 Priority SLA Escalation
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </OriginalLayout>
  );
}
