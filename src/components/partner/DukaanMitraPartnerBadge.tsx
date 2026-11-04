"use client";

import { useState } from "react";
import { Sparkles, ExternalLink, X, Cpu, ShieldCheck, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface DukaanMitraPartnerBadgeProps {
  className?: string;
  variant?: "footer" | "hero" | "banner";
}

export default function DukaanMitraPartnerBadge({
  className = "",
  variant = "footer",
}: DukaanMitraPartnerBadgeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {variant === "footer" && (
        <div className={`flex flex-col sm:flex-row items-center gap-3 text-xs ${className}`}>
          <div className="flex items-center gap-2 text-foreground/60 font-body">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-[9px] font-bold border border-emerald-500/20">
              D
            </span>
            <span className="font-semibold text-foreground/80 tracking-wide">
              Engineered by DukaanMitra ASI
            </span>
            <span className="text-foreground/30" aria-hidden="true">·</span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="group inline-flex items-center gap-1.5 text-primary hover:text-primary-foreground hover:bg-primary/20 px-2.5 py-1 rounded transition-colors text-xs font-medium cursor-pointer"
          >
            <span>View 48h AI Delivery Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      )}

      {variant === "hero" && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md text-xs ${className}`}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-200/90 font-medium">Double Engine: Powered by DukaanMitra ASI</span>
          <button
            onClick={() => setIsOpen(true)}
            className="text-xs text-[#F5D061] hover:underline font-semibold flex items-center gap-1 cursor-pointer ml-1"
          >
            Case Study ↗
          </button>
        </div>
      )}

      {variant === "banner" && (
        <div className={`p-4 rounded-xl border border-border/40 bg-card/40 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Autonomous Workforce Infrastructure
              </div>
              <div className="text-sm font-display font-bold text-foreground">
                Mowglai Front-Office + DukaanMitra ASI Execution
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors w-full sm:w-auto text-center cursor-pointer"
            >
              Read Anonymous Case Study
            </button>
            <Link
              href="/dual-pipeline"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto text-center whitespace-nowrap"
            >
              Open Pipeline OS ↗
            </Link>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-8 text-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-emerald-400 uppercase mb-2">
                  <span>Double Engine Architecture</span>
                  <span>·</span>
                  <span>Verified 48-Hour Delivery</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-foreground">
                  How DukaanMitra ASI Ships 3D Agency Sites in 48 Hours
                </h3>
                <p className="text-sm text-muted-foreground mt-1 font-body">
                  Anonymous Case Study #CS-001 · Produced for Mowglai White-Label Client Deliveries
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-4 rounded-xl border border-border/50 bg-background/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Turnaround</div>
                <div className="text-2xl font-bold font-mono text-emerald-400 mt-1 tabular-nums">46 Hours</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Brief to live ship</div>
              </div>
              <div className="p-4 rounded-xl border border-border/50 bg-background/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Mobile Vitals</div>
                <div className="text-2xl font-bold font-mono text-emerald-400 mt-1 tabular-nums">99 / 100</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Lighthouse verified</div>
              </div>
              <div className="p-4 rounded-xl border border-border/50 bg-background/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">First Paint (FCP)</div>
                <div className="text-2xl font-bold font-mono text-emerald-400 mt-1 tabular-nums">0.38s</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Zero bundle bloat</div>
              </div>
              <div className="p-4 rounded-xl border border-border/50 bg-background/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Client Result</div>
                <div className="text-2xl font-bold font-mono text-emerald-400 mt-1 tabular-nums">+182%</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">Consultation conversions</div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 text-sm text-foreground/80 font-body leading-relaxed">
              <div>
                <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  The Problem: Luxury 3D Visuals Without the Drag
                </h4>
                <p>
                  A high-end architectural and modular interior brand needed a site with full 3D interactive room rendering, bespoke typography, and immediate local SEO indexing in competitive metropolitan sectors. Traditional agencies quoted 6 to 8 weeks with bloated React bundles. Mowglai acquired the client with a 72-hour promise; DukaanMitra ASI executed the entire technical stack.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  The Execution: Autonomous AI Workforce Workflow
                </h4>
                <div className="grid sm:grid-cols-3 gap-3 my-3">
                  <div className="p-3 rounded-lg border border-border/40 bg-muted/20">
                    <span className="text-xs font-mono font-bold text-primary">STAGE 01 · 0-6 hrs</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Automated intake to PRD synthesis. Extraction of target keywords, brand tokens, and 3D asset hierarchy.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-border/40 bg-muted/20">
                    <span className="text-xs font-mono font-bold text-primary">STAGE 02 · 6-36 hrs</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Next.js 15 App router compilation, Three.js canvas isolation with deferred geometry disposal, and zero-pill layout styling.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-border/40 bg-muted/20">
                    <span className="text-xs font-mono font-bold text-primary">STAGE 03 · 36-46 hrs</span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Lighthouse 99 audit pass, JSON-LD Schema integration, and export of compiled static bundle for Hostinger.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Code Isolation & IP Protection
                </h4>
                <p>
                  Under the Mowglai + DukaanMitra Double Engine contract:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground mt-2">
                  <li>The client and Mowglai receive strictly the static export build (<code className="text-foreground">out/</code> directory) ready for shared hosting.</li>
                  <li>All proprietary AI agent prompts, synthesis workflows, and model pipelines remain the exclusive IP of DukaanMitra ASI.</li>
                  <li>Revenue is automatically split 60% DukaanMitra (Execution) / 40% Mowglai (Acquisition & Client Relationship).</li>
                </ul>
              </div>
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">
                Want to partner with DukaanMitra ASI or track active handovers?
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-xs font-medium rounded-lg hover:bg-muted text-muted-foreground transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href="/dual-pipeline"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center gap-1.5"
                >
                  Launch Dual Pipeline Dashboard ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
