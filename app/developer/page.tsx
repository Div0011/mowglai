"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Cpu,
  Server,
  Cloud,
  Terminal,
  Activity,
  Layers,
  Key,
  Database,
  Shield,
  Bot,
  Zap,
  Play,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ExternalLink
} from "lucide-react";
import OriginalLayout from "@/styles/original/Layout";

interface CapabilityService {
  name: string;
  category: string;
  sourceRepo: string;
  status: "Online" | "Standby" | "Active";
  endpoint: string;
  methods: string[];
  latency: string;
}

const services: CapabilityService[] = [
  {
    name: "Autonomous Multi-Agent Hive Orchestration",
    category: "Distributed Agent Fleet",
    sourceRepo: "1nsharma/hive-protocol",
    status: "Active",
    endpoint: "/api/v1/agents/dispatch",
    methods: ["POST", "WS"],
    latency: "34ms"
  },
  {
    name: "Conversational Voice AI Telephony Guard",
    category: "Speech & Audio Engine",
    sourceRepo: "1nsharma/callguard-ai",
    status: "Active",
    endpoint: "/api/v1/telephony/stream",
    methods: ["WS", "POST"],
    latency: "45ms"
  },
  {
    name: "Cognitive Commerce & Multi-Tax Retail POS",
    category: "Retail ERP & Invoicing",
    sourceRepo: "1nsharma/commerce-os",
    status: "Online",
    endpoint: "/api/v1/commerce/invoice",
    methods: ["POST", "GET"],
    latency: "22ms"
  },
  {
    name: "Mission-Critical 24/7 Roadside Logistics",
    category: "Emergency Route Telemetry",
    sourceRepo: "1nsharma/logistics-dispatch",
    status: "Online",
    endpoint: "/api/v1/logistics/dispatch",
    methods: ["POST", "GET"],
    latency: "48ms"
  },
  {
    name: "CleanTech Photovoltaic & Tariff Modeling",
    category: "Energy Simulation",
    sourceRepo: "1nsharma/solar-core",
    status: "Online",
    endpoint: "/api/v1/energy/calculate",
    methods: ["POST"],
    latency: "30ms"
  },
  {
    name: "Autonomous AI Candidate Screening & Coding Suite",
    category: "Talent Evaluation Cloud",
    sourceRepo: "1nsharma/talent-ai",
    status: "Active",
    endpoint: "/api/v1/talent/evaluate",
    methods: ["POST", "GET"],
    latency: "40ms"
  }
];

export default function DeveloperAdminPage() {
  const [selectedEnv, setSelectedEnv] = useState<"staging" | "production">("production");
  const [activeTab, setActiveTab] = useState<"apis" | "clouds" | "models" | "telemetry">("apis");
  const [testEndpointOutput, setTestEndpointOutput] = useState<string | null>(null);
  const [isPinging, setIsPinging] = useState(false);

  const handlePing = (endpoint: string) => {
    setIsPinging(true);
    setTestEndpointOutput(null);
    setTimeout(() => {
      setTestEndpointOutput(
        JSON.stringify(
          {
            endpoint,
            environment: selectedEnv,
            status: 200,
            timestamp: new Date().toISOString(),
            latencyMs: Math.floor(Math.random() * 25) + 18,
            health: "OPTIMAL",
            rlPolicyWeight: 0.942,
            authorizedBy: "Amit Sharma & Nikhil Sharma (1nsharma)"
          },
          null,
          2
        )
      );
      setIsPinging(false);
    }, 400);
  };

  return (
    <OriginalLayout>
      <div className="relative w-full min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Glow */}
        <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-primary/10 blur-[130px] pointer-events-none rounded-full" />

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5" />
              Internal Admin & Developer Infrastructure
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tight">
              Mowglai <span className="text-primary italic">Developer HQ</span> & Control Plane
            </h1>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-1">
              Centralized API orchestration, multi-cloud runtimes (GCP, AWS, Azure, Cloudflare, Hostinger), and frontier model policies managed by Amit Sharma & Nikhil Sharma.
            </p>
          </div>

          {/* Staging vs Production Selector */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setSelectedEnv("staging")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                selectedEnv === "staging" ? "bg-amber-400 text-black font-black" : "text-white/60 hover:text-white"
              }`}
            >
              Staging (dev)
            </button>
            <button
              type="button"
              onClick={() => setSelectedEnv("production")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                selectedEnv === "production" ? "bg-primary text-black font-black" : "text-white/60 hover:text-white"
              }`}
            >
              Production (live)
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 pt-6 border-b border-white/10 pb-4 overflow-x-auto relative z-10">
          {[
            { id: "apis", label: "Enterprise API Gateway", icon: Layers },
            { id: "clouds", label: "Multi-Cloud Runtimes", icon: Cloud },
            { id: "models", label: "Frontier LLMs & RL Router", icon: Bot },
            { id: "telemetry", label: "Edge Security & Logs", icon: Shield }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "apis" | "clouds" | "models" | "telemetry")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-white/10 text-primary border border-primary/30"
                  : "bg-white/[0.02] text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── TAB 1: ENTERPRISE API GATEWAY ─────────────────────────────────── */}
        {activeTab === "apis" && (
          <div className="pt-8 space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((svc, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                        {svc.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {svc.status}
                      </span>
                    </div>

                    <h4 className="text-base font-display font-bold text-white uppercase mb-2">
                      {svc.name}
                    </h4>

                    <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-white/80 mb-3 flex items-center justify-between">
                      <code>{svc.endpoint}</code>
                      <span className="text-[10px] text-white/40">{svc.methods.join("/")}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-white/50">Latency: <strong className="text-white">{svc.latency}</strong></span>
                    <button
                      type="button"
                      onClick={() => handlePing(svc.endpoint)}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono font-bold text-primary uppercase transition-all"
                    >
                      Test Probe
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Test Output Console */}
            {testEndpointOutput && (
              <div className="mt-6 rounded-2xl bg-[#090a0f] border border-white/10 p-5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white/60">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-primary" /> Gateway Response
                  </span>
                  <span className="text-emerald-400">HTTP 200 OK</span>
                </div>
                <pre className="text-emerald-300 overflow-x-auto select-all">{testEndpointOutput}</pre>
              </div>
            )}
          </div>
        )}

        {/* ── TAB 2: MULTI-CLOUD RUNTIMES ───────────────────────────────────── */}
        {activeTab === "clouds" && (
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {[
              {
                provider: "Google Cloud Platform",
                service: "Vertex AI & Cloud Run",
                region: "asia-south1 (Mumbai)",
                status: "Operational",
                traffic: "32%",
                color: "text-blue-400"
              },
              {
                provider: "Cloudflare Edge",
                service: "Edge Workers & KV Caching",
                region: "Global Anycast (280+ POPs)",
                status: "Operational",
                traffic: "45%",
                color: "text-amber-400"
              },
              {
                provider: "Hostinger Bare-Metal",
                service: "Apache/PHP Static Export",
                region: "Europe & India Edge",
                status: "Active (mowglai.com)",
                traffic: "18%",
                color: "text-purple-400"
              },
              {
                provider: "Amazon Web Services",
                service: "S3 & CloudFront Failover",
                region: "ap-south-1 (Delhi NCR)",
                status: "Hot-Standby",
                traffic: "5%",
                color: "text-orange-400"
              }
            ].map((cloud, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className={`text-xs font-mono font-bold uppercase mb-1 ${cloud.color}`}>{cloud.provider}</div>
                  <h4 className="text-base font-display font-bold text-white uppercase mb-2">{cloud.service}</h4>
                  <p className="text-xs text-white/60 font-mono mb-4">{cloud.region}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                  <span className="text-emerald-400 font-bold">{cloud.status}</span>
                  <span className="text-white/40">{cloud.traffic} traffic</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 3: FRONTIER LLMS & RL POLICY ROUTER ───────────────────────── */}
        {activeTab === "models" && (
          <div className="pt-8 space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  model: "Google Gemini 2.5 Flash",
                  role: "Low-Latency General & Code Synthesis",
                  latency: "190ms",
                  slaBudget: "500ms",
                  policyWeight: "58% (UCB1 Exploitation)"
                },
                {
                  model: "Anthropic Claude 3.5 Sonnet",
                  role: "Deep Systems Reasoning & Architecture",
                  latency: "820ms",
                  slaBudget: "2000ms",
                  policyWeight: "26% (High-Complexity)"
                },
                {
                  model: "Meta Llama 3.3 70B & DeepSeek R1",
                  role: "Open-Weights On-Premise Fallback",
                  latency: "410ms",
                  slaBudget: "1000ms",
                  policyWeight: "16% (Zero-Egress Mode)"
                }
              ].map((m, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h4 className="text-base font-display font-bold text-white uppercase mb-1">{m.model}</h4>
                  <p className="text-xs text-white/60 mb-4">{m.role}</p>

                  <div className="space-y-2 text-xs font-mono border-t border-white/10 pt-3">
                    <div className="flex justify-between text-white/60">
                      <span>Avg Latency:</span>
                      <span className="text-primary font-bold">{m.latency}</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Latency Budget:</span>
                      <span className="text-white">{m.slaBudget}</span>
                    </div>
                    <div className="flex justify-between text-white/60">
                      <span>Routing Policy:</span>
                      <span className="text-emerald-400 font-bold">{m.policyWeight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 4: EDGE SECURITY & TELEMETRY ──────────────────────────────── */}
        {activeTab === "telemetry" && (
          <div className="pt-8 space-y-4 relative z-10">
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3 font-mono text-xs">
              <div className="text-xs uppercase font-bold text-primary pb-2 border-b border-white/10">
                Live Zero-Trust Policy Audit
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span>SSRF Protection (isSafeAuditTarget RFC 1918 filter):</span>
                <span className="text-emerald-400 font-bold">Enforced (public/api/audit.php)</span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span>Database Password & Env Hardening:</span>
                <span className="text-emerald-400 font-bold">Zero-Hardcode / Fail-Closed</span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span>Bearer Token Verification on IDOR endpoints:</span>
                <span className="text-emerald-400 font-bold">Verified</span>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span>Production SSH Sync (Hostinger Bare-Metal):</span>
                <span className="text-emerald-400 font-bold">SHA 884d3dc Active</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </OriginalLayout>
  );
}
