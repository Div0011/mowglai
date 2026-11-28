"use client";

import { useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getLeads, CrmLead } from "@/lib/crm/store";
import { ArrowRight, CheckCircle2, Clock, Mail, MessageCircle, Search, ShieldCheck } from "lucide-react";

const QUARTERLY_DELIVERABLES = [
    { title: "Custom High-Converting Landing Page", status: "Active / Live" },
    { title: "AI Voice Agents (24/7 Inbound & Booking)", status: "Configured" },
    { title: "WhatsApp & CRM Workflow Automation", status: "Active" },
    { title: "Reach & AI Search Optimization (GEO / SEO)", status: "In Progress" },
    { title: "Social Media Publishing & Lead Capture", status: "Scheduled" },
];

export default function ClientPortalPage() {
    const [emailInput, setEmailInput] = useState("");
    const [matchedLead, setMatchedLead] = useState<CrmLead | null>(null);
    const [searched, setSearched] = useState(false);

    const handleLookup = (e: React.FormEvent) => {
        e.preventDefault();
        const q = emailInput.trim().toLowerCase();
        if (!q) return;
        const leads = getLeads();
        const found = leads.find((l) => l.email.toLowerCase() === q) || null;
        setMatchedLead(found);
        setSearched(true);
    };

    return (
        <PageLayout>
            <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto space-y-10">
                <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-[0.35em] text-primary">
                        Client Workspace
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-black uppercase text-foreground">
                        Client <span className="text-primary italic">Portal</span>
                    </h1>
                    <p className="text-sm md:text-base text-foreground/70 max-w-xl">
                        Enter your registered email to check your onboarding status, quarterly automation deliverables, and quick links.
                    </p>
                </div>

                {/* Email Lookup */}
                <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-3">
                    <Input
                        type="email"
                        required
                        placeholder="Enter your email (try demo@example.com)"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="h-12 flex-1"
                    />
                    <Button type="submit" className="h-12 px-7 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs gap-2">
                        <Search className="w-4 h-4" /> Check Status
                    </Button>
                </form>

                {searched && (
                    <div className="rounded-2xl border border-foreground/10 bg-background/50 p-6 md:p-8 space-y-6">
                        {matchedLead ? (
                            <>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-foreground/10 pb-5">
                                    <div>
                                        <p className="text-xs font-mono uppercase tracking-widest text-primary">
                                            {matchedLead.planTier}
                                        </p>
                                        <h2 className="text-2xl font-display font-bold text-foreground mt-1">
                                            {matchedLead.name} {matchedLead.company ? `· ${matchedLead.company}` : ""}
                                        </h2>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 text-primary text-xs font-mono font-bold self-start">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        Stage: {matchedLead.stage}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xs font-mono uppercase tracking-widest text-foreground/60">
                                        Quarterly Automation Deliverables
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {QUARTERLY_DELIVERABLES.map((item) => (
                                            <div key={item.title} className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-foreground/10 bg-background/60">
                                                <div className="flex items-center gap-2.5 min-w-0">
                                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                                    <span className="text-xs font-medium text-foreground truncate">{item.title}</span>
                                                </div>
                                                <span className="text-[10px] font-mono text-primary shrink-0">{item.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    <Link
                                        href="/start-project/custom-quote"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider"
                                    >
                                        Request Upgrade <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <a
                                        href="https://wa.me/919452476331"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-xs font-bold uppercase tracking-wider hover:border-primary"
                                    >
                                        <MessageCircle className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp Support
                                    </a>
                                    <a
                                        href="mailto:tech@mowglai.com"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/15 text-xs font-bold uppercase tracking-wider hover:border-primary"
                                    >
                                        <Mail className="w-3.5 h-3.5" /> tech@mowglai.com
                                    </a>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <div className="space-y-2">
                                    <p className="text-sm font-bold text-foreground">No project record found on this browser for {emailInput}.</p>
                                    <p className="text-xs text-foreground/65">
                                        Submit a quick request via our quotation form or email <a href="mailto:tech@mowglai.com" className="text-primary underline">tech@mowglai.com</a> and our team will share your project link.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </PageLayout>
    );
}
