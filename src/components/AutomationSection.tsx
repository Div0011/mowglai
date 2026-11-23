"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Bot,
    Database,
    GitBranch,
    MessageSquare,
    ShieldCheck,
    Workflow,
    Zap,
    BarChart3,
} from "lucide-react";
import Magnetic from "@/components/Magnetic";

const AUTOMATION_STEPS = [
    {
        step: "01",
        title: "Audit & Map",
        desc: "We break down your repetitive manual workflows, spreadsheets, and bottlenecks to pinpoint high-ROI automation opportunities.",
        icon: Workflow,
    },
    {
        step: "02",
        title: "Architect & Connect",
        desc: "We wire APIs, webhooks, databases, CRMs, and custom AI agents into a single unified pipeline tailored to your stack.",
        icon: GitBranch,
    },
    {
        step: "03",
        title: "Test & Guardrail",
        desc: "Every trigger, fallback, and edge case is stress-tested with retries, error alerts, and human-in-the-loop approvals.",
        icon: ShieldCheck,
    },
    {
        step: "04",
        title: "Deploy & Scale",
        desc: "Your automations run 24/7 in production with real-time monitoring, zero-downtime updates, and continuous tuning.",
        icon: Zap,
    },
];

const AUTOMATION_CAPABILITIES = [
    {
        title: "AI Lead & WhatsApp Bots",
        desc: "Instant 24/7 lead qualification, quote estimation, appointment booking, and CRM sync directly from web forms and WhatsApp.",
        icon: MessageSquare,
    },
    {
        title: "CRM, Billing & Ops Sync",
        desc: "Automated invoicing, client onboarding, Slack/email notifications, and multi-app data pipelines with zero manual entry.",
        icon: Database,
    },
    {
        title: "Custom AI Agents",
        desc: "Context-aware AI assistants trained on your docs and catalog to answer customer queries, triage tickets, and trigger actions.",
        icon: Bot,
    },
    {
        title: "Reporting & Growth Flows",
        desc: "Scheduled competitor tracking, automated analytics digests, and content or catalog publishing pipelines.",
        icon: BarChart3,
    },
];

export default function AutomationSection() {
    return (
        <section
            id="automation-section"
            className="relative w-full py-20 md:py-28 z-20 overflow-hidden content-visibility-auto gpu-accelerate"
        >
            <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col gap-12 md:gap-16">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-3 max-w-2xl"
                    >
                        <div className="flex items-center gap-3 text-primary font-display font-bold text-xs tracking-[0.4em] uppercase">
                            <div className="w-10 h-[1.5px] bg-primary" />
                            Automation Engineering
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-normal text-foreground uppercase leading-[1.1]">
                            We Build <span className="text-primary italic">Automations</span>
                        </h2>
                        <p className="text-foreground/75 text-sm md:text-base font-normal leading-relaxed">
                            From AI agents and WhatsApp lead flows to full CRM and operations pipelines — here is how we engineer custom automations that run your business on autopilot.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="shrink-0"
                    >
                        <Magnetic>
                            <Link
                                href="/start-project"
                                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-primary text-primary-foreground font-display font-bold text-xs md:text-sm uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] transition-all duration-300"
                            >
                                <span>Automate Your Workflow</span>
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Magnetic>
                    </motion.div>
                </div>

                {/* Part 1: How We Make Automations */}
                <div className="space-y-5">
                    <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary/80">
                        How We Make Automations
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {AUTOMATION_STEPS.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative p-6 rounded-2xl border border-primary/15 bg-background/40 backdrop-blur-md hover:border-primary/40 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-mono text-xs font-bold text-primary tracking-widest">
                                            STEP {item.step}
                                        </span>
                                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-display font-black uppercase tracking-tight text-foreground mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-foreground/70 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Part 2: What We Automate */}
                <div className="space-y-5">
                    <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary/80">
                        What We Automate
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {AUTOMATION_CAPABILITIES.map((cap, idx) => {
                            const Icon = cap.icon;
                            return (
                                <motion.div
                                    key={cap.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="group flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-primary/35 transition-all duration-300"
                                >
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-105 transition-transform duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <h3 className="text-base md:text-lg font-display font-black uppercase tracking-tight text-foreground">
                                            {cap.title}
                                        </h3>
                                        <p className="text-sm text-foreground/75 leading-relaxed">
                                            {cap.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
