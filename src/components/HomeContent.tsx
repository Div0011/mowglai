"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import {
    ArrowRight,
    Bot,
    Code2,
    Database,
    Mail,
    MapPin,
    MessageSquare,
    ShoppingCart,
    Workflow,
} from "lucide-react";

const TemplatesShowcase = dynamic(() => import("@/components/TemplatesShowcase"), { ssr: false });

const AUTOMATION_CAPABILITIES = [
    {
        title: "WhatsApp & Lead Auto-Reply",
        desc: "Reply to new inquiries in seconds, qualify prospects, and book calls automatically 24/7.",
        icon: MessageSquare,
    },
    {
        title: "CRM & Sheet Sync",
        desc: "Route every website form, quote, and customer detail directly into your CRM, Notion, or Google Sheets.",
        icon: Database,
    },
    {
        title: "AI Assistants & Support",
        desc: "Deploy custom AI chatbots trained on your services to answer FAQs and guide visitors to checkout.",
        icon: Bot,
    },
    {
        title: "Email & Order Pipelines",
        desc: "Trigger instant welcome emails, proposals, invoices, and follow-up reminders without manual effort.",
        icon: Mail,
    },
];

const AUTOMATION_STEPS = [
    {
        step: "01",
        title: "Map Your Workflow",
        desc: "We look at the repetitive tasks slowing your team down—lead follow-ups, data entry, or customer onboarding.",
    },
    {
        step: "02",
        title: "Connect & Automate",
        desc: "We link your website, forms, WhatsApp, email, and business tools into clean, reliable automated pipelines.",
    },
    {
        step: "03",
        title: "Launch & Scale",
        desc: "Your system runs 24/7 with zero manual copy-pasting, freeing your team to focus on real growth.",
    },
];

const CORE_SERVICES = [
    {
        title: "Website Development",
        desc: "Fast, responsive Next.js websites built for clarity, SEO, and conversion.",
        icon: Code2,
    },
    {
        title: "Business Automation",
        desc: "Custom AI, WhatsApp, and workflow integrations tailored to your operations.",
        icon: Workflow,
    },
    {
        title: "SEO & Google Maps",
        desc: "Local 3-pack ranking, Google Business setup, and AI search optimization.",
        icon: MapPin,
    },
    {
        title: "E-Commerce & Web Apps",
        desc: "Online stores, client portals, and scalable full-stack platforms.",
        icon: ShoppingCart,
    },
];

export default function HomeContent() {
    return (
        <div className="relative z-20">
            {/* Section 2: Automation & How We Build Automation */}
            <section id="automation-section" className="relative w-full py-20 md:py-28 px-6">
                <div className="container mx-auto max-w-6xl space-y-14">
                    <div className="max-w-2xl space-y-4">
                        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary">
                            Automation
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-foreground leading-tight">
                            How We Build <span className="text-primary">Automation</span> For Your Business
                        </h2>
                        <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                            Stop spending hours on manual follow-ups and repetitive tasks. We turn your website and tools into an automated system that works around the clock.
                        </p>
                    </div>

                    {/* 3-Step Process: How We Make Automation */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {AUTOMATION_STEPS.map((item) => (
                            <div
                                key={item.step}
                                className="p-6 md:p-7 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-md space-y-3"
                            >
                                <span className="inline-block font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-primary/15 text-primary">
                                    STEP {item.step}
                                </span>
                                <h3 className="text-xl font-display font-bold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-sm md:text-base text-foreground/75 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* What We Automate */}
                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                            What We Can Automate
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {AUTOMATION_CAPABILITIES.map((cap) => {
                                const Icon = cap.icon;
                                return (
                                    <div
                                        key={cap.title}
                                        className="p-6 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm flex items-start gap-4 hover:border-primary/40 transition-colors"
                                    >
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <h4 className="text-base md:text-lg font-display font-bold text-foreground">
                                                {cap.title}
                                            </h4>
                                            <p className="text-sm text-foreground/75 leading-relaxed">
                                                {cap.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:opacity-90 transition-all"
                        >
                            <span>Automate Your Workflow</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 3: Simple Services Overview */}
            <section id="our-services-section" className="relative w-full py-16 md:py-24 px-6 border-t border-foreground/10">
                <div className="container mx-auto max-w-6xl space-y-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="space-y-2 max-w-xl">
                            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                Services
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-foreground">
                                Everything You Need Online
                            </h2>
                        </div>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                        >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {CORE_SERVICES.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.title}
                                    className="p-6 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm space-y-3 hover:border-primary/40 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-display font-bold text-foreground">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-foreground/75 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 4: Templates Showcase */}
            <section id="templates-showcase-section" className="relative w-full py-16 md:py-24 px-6 border-t border-foreground/10">
                <div className="container mx-auto max-w-6xl space-y-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="space-y-2 max-w-xl">
                            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary">
                                Templates
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-foreground">
                                Ready-to-Launch Designs
                            </h2>
                            <p className="text-sm md:text-base text-foreground/75">
                                Pick a clean starting template and we customize it for your brand and automations.
                            </p>
                        </div>
                        <Link
                            href="/templates"
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                        >
                            <span>Browse All Templates</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <TemplatesShowcase />
                </div>
            </section>

            {/* Section 5: Simple Closing CTA */}
            <section className="relative w-full py-16 md:py-24 px-6 border-t border-foreground/10">
                <div className="container mx-auto max-w-4xl">
                    <div className="p-8 md:p-12 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-md text-center space-y-6">
                        <h2 className="text-2xl sm:text-4xl font-display font-black text-foreground">
                            Ready to simplify your website &amp; automate your work?
                        </h2>
                        <p className="text-sm md:text-base text-foreground/75 max-w-xl mx-auto">
                            Tell us what you want to build or automate and we will get back with a clear plan and transparent pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:opacity-90 transition-all"
                            >
                                <span>Get in Touch</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/investment"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-foreground/15 text-foreground font-semibold text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all"
                            >
                                <span>View Pricing</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
