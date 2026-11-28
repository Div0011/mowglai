"use client";

import { useState, useEffect, useMemo } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    CrmLead,
    LeadOwner,
    LeadSource,
    LeadStage,
    LEAD_SOURCES,
    LEAD_STAGES,
    addManualLead,
    deleteLead,
    exportLeadsToCsv,
    getCrmPasscode,
    getLeads,
    getWebhookUrl,
    saveCrmPasscode,
    saveWebhookUrl,
    updateLead,
} from "@/lib/crm/store";
import {
    Download,
    Kanban,
    List,
    Lock,
    Mail,
    MessageCircle,
    Plus,
    Settings,
    Trash2,
    TrendingUp,
    Users,
    CheckCircle2,
    X,
} from "lucide-react";

export default function CrmPage() {
    const [unlocked, setUnlocked] = useState(false);
    const [passcodeInput, setPasscodeInput] = useState("");
    const [passcodeError, setPasscodeError] = useState("");

    const [leads, setLeads] = useState<CrmLead[]>([]);
    const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");
    const [searchQuery, setSearchQuery] = useState("");
    const [sourceFilter, setSourceFilter] = useState<string>("All");
    const [ownerFilter, setOwnerFilter] = useState<string>("All");

    const [showNewLeadModal, setShowNewLeadModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [webhookUrl, setWebhookUrl] = useState("");
    const [newPasscode, setNewPasscode] = useState("");

    const [newLeadForm, setNewLeadForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        websiteUrl: "",
        source: "Manual" as LeadSource,
        stage: "New Lead" as LeadStage,
        owner: "Divyansh" as LeadOwner,
        planTier: "3-Month Quarterly (₹40,000)",
        dealValue: 40000,
        notes: "",
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (sessionStorage.getItem("mowglai_crm_auth") === "1") {
            setUnlocked(true);
        }
        setLeads(getLeads());
        setWebhookUrl(getWebhookUrl());
    }, []);

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault();
        if (passcodeInput.trim() === getCrmPasscode()) {
            sessionStorage.setItem("mowglai_crm_auth", "1");
            setUnlocked(true);
            setPasscodeError("");
            setLeads(getLeads());
        } else {
            setPasscodeError("Invalid team passcode.");
        }
    };

    const filteredLeads = useMemo(() => {
        return leads.filter((l) => {
            if (sourceFilter !== "All" && l.source !== sourceFilter) return false;
            if (ownerFilter !== "All" && l.owner !== ownerFilter) return false;
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase();
                return (
                    l.name.toLowerCase().includes(q) ||
                    l.email.toLowerCase().includes(q) ||
                    (l.company || "").toLowerCase().includes(q) ||
                    (l.websiteUrl || "").toLowerCase().includes(q)
                );
            }
            return true;
        });
    }, [leads, sourceFilter, ownerFilter, searchQuery]);

    const stats = useMemo(() => {
        const total = leads.length;
        const activePipeline = leads
            .filter((l) => l.stage !== "Lost")
            .reduce((acc, l) => acc + (Number(l.dealValue) || 0), 0);
        const wonValue = leads
            .filter((l) => l.stage === "Won")
            .reduce((acc, l) => acc + (Number(l.dealValue) || 0), 0);
        const leadMagnets = leads.filter((l) => l.source === "Lead Magnet").length;
        return { total, activePipeline, wonValue, leadMagnets };
    }, [leads]);

    const handleAddLead = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newLeadForm.name.trim()) return;
        const updated = addManualLead(newLeadForm);
        setLeads(updated);
        setShowNewLeadModal(false);
        setNewLeadForm({
            name: "",
            email: "",
            phone: "",
            company: "",
            websiteUrl: "",
            source: "Manual",
            stage: "New Lead",
            owner: "Divyansh",
            planTier: "3-Month Quarterly (₹40,000)",
            dealValue: 40000,
            notes: "",
        });
    };

    const handleSaveSettings = (e: React.FormEvent) => {
        e.preventDefault();
        saveWebhookUrl(webhookUrl);
        if (newPasscode.trim()) {
            saveCrmPasscode(newPasscode);
            setNewPasscode("");
        }
        setShowSettingsModal(false);
    };

    if (!unlocked) {
        return (
            <PageLayout>
                <div className="min-h-screen flex items-center justify-center px-6 py-28">
                    <div className="w-full max-w-md rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-md p-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                <Lock className="w-5 h-5" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-display font-black uppercase text-foreground">
                                    Mowglai CRM
                                </h1>
                                <p className="text-xs text-foreground/60">
                                    Internal Lead &amp; Pipeline Workspace
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleUnlock} className="space-y-4">
                            <Input
                                type="password"
                                placeholder="Enter team passcode"
                                value={passcodeInput}
                                onChange={(e) => setPasscodeInput(e.target.value)}
                                required
                            />
                            {passcodeError && (
                                <p className="text-xs text-red-500">{passcodeError}</p>
                            )}
                            <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs h-11">
                                Unlock CRM
                            </Button>
                            <p className="text-[11px] font-mono text-foreground/45 text-center">
                                Default passcode: mowglai2026 (changeable in Settings)
                            </p>
                        </form>
                    </div>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-10 max-w-[1600px] mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-foreground/10 pb-6">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary">
                            Internal Operations
                        </span>
                        <h1 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground mt-1">
                            Mowglai <span className="text-primary italic">CRM</span>
                        </h1>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                        <Button size="sm" variant="outline" onClick={() => exportLeadsToCsv(filteredLeads)} className="gap-1.5 text-xs">
                            <Download className="w-3.5 h-3.5" /> Export CSV
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setShowSettingsModal(true)} className="gap-1.5 text-xs">
                            <Settings className="w-3.5 h-3.5" /> Webhook / Settings
                        </Button>
                        <Button size="sm" onClick={() => setShowNewLeadModal(true)} className="gap-1.5 text-xs bg-primary text-primary-foreground">
                            <Plus className="w-3.5 h-3.5" /> Add Lead
                        </Button>
                    </div>
                </div>

                {/* KPI Strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl border border-foreground/10 bg-background/40">
                        <div className="flex items-center justify-between text-xs text-foreground/60 mb-2">
                            <span>Total Leads</span>
                            <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-display font-black text-foreground">{stats.total}</div>
                    </div>
                    <div className="p-5 rounded-2xl border border-foreground/10 bg-background/40">
                        <div className="flex items-center justify-between text-xs text-foreground/60 mb-2">
                            <span>Active Pipeline</span>
                            <TrendingUp className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-display font-black text-foreground">
                            ₹{stats.activePipeline.toLocaleString("en-IN")}
                        </div>
                    </div>
                    <div className="p-5 rounded-2xl border border-foreground/10 bg-background/40">
                        <div className="flex items-center justify-between text-xs text-foreground/60 mb-2">
                            <span>Closed Won</span>
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="text-2xl md:text-3xl font-display font-black text-emerald-400">
                            ₹{stats.wonValue.toLocaleString("en-IN")}
                        </div>
                    </div>
                    <div className="p-5 rounded-2xl border border-foreground/10 bg-background/40">
                        <div className="flex items-center justify-between text-xs text-foreground/60 mb-2">
                            <span>Lead Magnet Unlocks</span>
                            <Kanban className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-display font-black text-foreground">{stats.leadMagnets}</div>
                    </div>
                </div>

                {/* Filters & View Switcher */}
                <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
                    <div className="flex flex-wrap gap-2.5 flex-1">
                        <Input
                            placeholder="Search name, email, company, or URL..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="max-w-xs"
                        />
                        <select
                            value={sourceFilter}
                            onChange={(e) => setSourceFilter(e.target.value)}
                            className="h-10 rounded-md border border-input bg-background px-3 text-xs text-foreground"
                        >
                            <option value="All">All Sources</option>
                            {LEAD_SOURCES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                        <select
                            value={ownerFilter}
                            onChange={(e) => setOwnerFilter(e.target.value)}
                            className="h-10 rounded-md border border-input bg-background px-3 text-xs text-foreground"
                        >
                            <option value="All">All Owners</option>
                            <option value="Divyansh">Divyansh</option>
                            <option value="Ajay">Ajay</option>
                            <option value="Unassigned">Unassigned</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-1 rounded-lg border border-foreground/10 p-1 self-start">
                        <button
                            type="button"
                            onClick={() => setViewMode("kanban")}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
                                viewMode === "kanban" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"
                            }`}
                        >
                            <Kanban className="w-3.5 h-3.5" /> Board
                        </button>
                        <button
                            type="button"
                            onClick={() => setViewMode("list")}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
                                viewMode === "list" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground"
                            }`}
                        >
                            <List className="w-3.5 h-3.5" /> Table
                        </button>
                    </div>
                </div>

                {/* Kanban View */}
                {viewMode === "kanban" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 items-start">
                        {LEAD_STAGES.map((stage) => {
                            const stageLeads = filteredLeads.filter((l) => l.stage === stage);
                            return (
                                <div key={stage} className="rounded-2xl border border-foreground/10 bg-background/30 p-3.5 space-y-3 min-h-[260px]">
                                    <div className="flex items-center justify-between border-b border-foreground/10 pb-2">
                                        <span className="text-xs font-display font-bold uppercase tracking-wider text-foreground">
                                            {stage}
                                        </span>
                                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                                            {stageLeads.length}
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        {stageLeads.map((lead) => {
                                            const cleanPhone = lead.phone.replace(/[^0-9]/g, "");
                                            return (
                                                <div key={lead.id} className="rounded-xl border border-foreground/10 bg-background/80 p-3.5 space-y-2.5 text-xs">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <div className="min-w-0">
                                                            <p className="font-bold text-foreground truncate">{lead.name}</p>
                                                            {lead.company && (
                                                                <p className="text-[11px] text-foreground/60 truncate">{lead.company}</p>
                                                            )}
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => setLeads(deleteLead(lead.id))}
                                                            className="text-foreground/30 hover:text-red-500 transition shrink-0"
                                                            aria-label="Delete lead"
                                                        >
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>

                                                    <div className="flex flex-wrap gap-1.5">
                                                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-mono">
                                                            {lead.source}
                                                        </span>
                                                        <span className="px-2 py-0.5 rounded bg-foreground/10 text-foreground/75 text-[10px] font-mono">
                                                            ₹{(Number(lead.dealValue) || 0).toLocaleString("en-IN")}
                                                        </span>
                                                    </div>

                                                    {lead.websiteUrl && (
                                                        <p className="text-[11px] font-mono text-primary/80 truncate">{lead.websiteUrl}</p>
                                                    )}
                                                    {lead.notes && (
                                                        <p className="text-[11px] text-foreground/65 line-clamp-2">{lead.notes}</p>
                                                    )}

                                                    <div className="grid grid-cols-2 gap-1.5 pt-1">
                                                        <select
                                                            value={lead.stage}
                                                            onChange={(e) => setLeads(updateLead(lead.id, { stage: e.target.value as LeadStage }))}
                                                            className="h-7 rounded border border-foreground/15 bg-background px-1.5 text-[10px] text-foreground"
                                                        >
                                                            {LEAD_STAGES.map((s) => (
                                                                <option key={s} value={s}>{s}</option>
                                                            ))}
                                                        </select>
                                                        <select
                                                            value={lead.owner}
                                                            onChange={(e) => setLeads(updateLead(lead.id, { owner: e.target.value as LeadOwner }))}
                                                            className="h-7 rounded border border-foreground/15 bg-background px-1.5 text-[10px] text-foreground"
                                                        >
                                                            <option value="Unassigned">Unassigned</option>
                                                            <option value="Divyansh">Divyansh</option>
                                                            <option value="Ajay">Ajay</option>
                                                        </select>
                                                    </div>

                                                    <div className="flex items-center gap-2 pt-1 border-t border-foreground/10">
                                                        {lead.email && (
                                                            <a
                                                                href={`mailto:${lead.email}?subject=${encodeURIComponent(`Following up on your Mowglai enquiry`)}`}
                                                                className="inline-flex items-center gap-1 text-[11px] text-foreground/70 hover:text-primary"
                                                            >
                                                                <Mail className="w-3 h-3" /> Email
                                                            </a>
                                                        )}
                                                        {cleanPhone && (
                                                            <a
                                                                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hi ${lead.name}, following up from Mowglai!`)}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1 text-[11px] text-emerald-500 hover:underline"
                                                            >
                                                                <MessageCircle className="w-3 h-3" /> WhatsApp
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    /* List View */
                    <div className="rounded-2xl border border-foreground/10 overflow-x-auto bg-background/40">
                        <table className="w-full text-left text-xs">
                            <thead className="border-b border-foreground/10 text-foreground/60 uppercase font-mono">
                                <tr>
                                    <th className="p-3.5">Lead</th>
                                    <th className="p-3.5">Contact</th>
                                    <th className="p-3.5">Source</th>
                                    <th className="p-3.5">Stage</th>
                                    <th className="p-3.5">Owner</th>
                                    <th className="p-3.5">Value</th>
                                    <th className="p-3.5">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-foreground/10">
                                {filteredLeads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-foreground/[0.02]">
                                        <td className="p-3.5">
                                            <p className="font-bold text-foreground">{lead.name}</p>
                                            <p className="text-[11px] text-foreground/55">{lead.company || lead.websiteUrl || "—"}</p>
                                        </td>
                                        <td className="p-3.5">
                                            <p>{lead.email || "—"}</p>
                                            <p className="text-[11px] text-foreground/55">{lead.phone || "—"}</p>
                                        </td>
                                        <td className="p-3.5 font-mono text-primary">{lead.source}</td>
                                        <td className="p-3.5">
                                            <select
                                                value={lead.stage}
                                                onChange={(e) => setLeads(updateLead(lead.id, { stage: e.target.value as LeadStage }))}
                                                className="h-8 rounded border border-foreground/15 bg-background px-2 text-xs"
                                            >
                                                {LEAD_STAGES.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td className="p-3.5">
                                            <select
                                                value={lead.owner}
                                                onChange={(e) => setLeads(updateLead(lead.id, { owner: e.target.value as LeadOwner }))}
                                                className="h-8 rounded border border-foreground/15 bg-background px-2 text-xs"
                                            >
                                                <option value="Unassigned">Unassigned</option>
                                                <option value="Divyansh">Divyansh</option>
                                                <option value="Ajay">Ajay</option>
                                            </select>
                                        </td>
                                        <td className="p-3.5 font-mono">₹{(Number(lead.dealValue) || 0).toLocaleString("en-IN")}</td>
                                        <td className="p-3.5">
                                            <button
                                                type="button"
                                                onClick={() => setLeads(deleteLead(lead.id))}
                                                className="text-foreground/40 hover:text-red-500 transition"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Add Lead Modal */}
                {showNewLeadModal && (
                    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                        <div className="w-full max-w-md rounded-2xl border border-foreground/15 bg-background p-6 space-y-4 relative">
                            <button type="button" onClick={() => setShowNewLeadModal(false)} className="absolute top-4 right-4 text-foreground/60 hover:text-foreground">
                                <X className="w-4 h-4" />
                            </button>
                            <h2 className="text-xl font-display font-bold uppercase">Add New Lead</h2>
                            <form onSubmit={handleAddLead} className="space-y-3">
                                <Input required placeholder="Name" value={newLeadForm.name} onChange={(e) => setNewLeadForm((p) => ({ ...p, name: e.target.value }))} />
                                <Input type="email" placeholder="Email" value={newLeadForm.email} onChange={(e) => setNewLeadForm((p) => ({ ...p, email: e.target.value }))} />
                                <Input placeholder="Phone / WhatsApp" value={newLeadForm.phone} onChange={(e) => setNewLeadForm((p) => ({ ...p, phone: e.target.value }))} />
                                <Input placeholder="Company / Website URL" value={newLeadForm.company} onChange={(e) => setNewLeadForm((p) => ({ ...p, company: e.target.value }))} />
                                <Input type="number" placeholder="Deal Value (INR)" value={newLeadForm.dealValue} onChange={(e) => setNewLeadForm((p) => ({ ...p, dealValue: Number(e.target.value) || 0 }))} />
                                <Input placeholder="Notes" value={newLeadForm.notes} onChange={(e) => setNewLeadForm((p) => ({ ...p, notes: e.target.value }))} />
                                <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold uppercase text-xs h-10">Save Lead</Button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Settings & Webhook Sync Modal */}
                {showSettingsModal && (
                    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
                        <div className="w-full max-w-md rounded-2xl border border-foreground/15 bg-background p-6 space-y-4 relative">
                            <button type="button" onClick={() => setShowSettingsModal(false)} className="absolute top-4 right-4 text-foreground/60 hover:text-foreground">
                                <X className="w-4 h-4" />
                            </button>
                            <h2 className="text-xl font-display font-bold uppercase">CRM Sync &amp; Security</h2>
                            <form onSubmit={handleSaveSettings} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-foreground/70">
                                        External Webhook URL (Google Sheets / Zapier / Make / HubSpot)
                                    </label>
                                    <Input
                                        type="url"
                                        placeholder="https://hook.eu2.make.com/..."
                                        value={webhookUrl}
                                        onChange={(e) => setWebhookUrl(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-foreground/70">
                                        Update Team Passcode (leave blank to keep current)
                                    </label>
                                    <Input
                                        type="password"
                                        placeholder="New passcode"
                                        value={newPasscode}
                                        onChange={(e) => setNewPasscode(e.target.value)}
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold uppercase text-xs h-10">
                                    Save Settings
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </PageLayout>
    );
}
