export type LeadStage =
    | "New Lead"
    | "Contacted"
    | "Proposal Sent"
    | "Negotiation"
    | "Won"
    | "Lost";

export type LeadSource =
    | "Lead Magnet"
    | "Contact Form"
    | "Custom Quote"
    | "Start Project"
    | "Consultation"
    | "Referral"
    | "Manual";

export type LeadOwner = "Unassigned" | "Divyansh" | "Ajay";

export interface CrmLead {
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    websiteUrl?: string;
    source: LeadSource;
    stage: LeadStage;
    owner: LeadOwner;
    planTier: string;
    dealValue: number;
    notes: string;
    createdAt: string;
    updatedAt: string;
}

const LEADS_STORAGE_KEY = "mowglai_crm_leads_v1";
const WEBHOOK_STORAGE_KEY = "mowglai_crm_webhook_url_v1";
const PASSCODE_STORAGE_KEY = "mowglai_crm_passcode_v1";

export const LEAD_STAGES: LeadStage[] = [
    "New Lead",
    "Contacted",
    "Proposal Sent",
    "Negotiation",
    "Won",
    "Lost",
];

export const LEAD_SOURCES: LeadSource[] = [
    "Lead Magnet",
    "Contact Form",
    "Custom Quote",
    "Start Project",
    "Consultation",
    "Referral",
    "Manual",
];

const DEFAULT_LEADS: CrmLead[] = [
    {
        id: "lead-demo-1",
        name: "Sample Lead (Demo)",
        email: "demo@example.com",
        phone: "+91 98765 43210",
        company: "Acme Wellness",
        websiteUrl: "https://example.com",
        source: "Lead Magnet",
        stage: "New Lead",
        owner: "Ajay",
        planTier: "3-Month Quarterly (₹40,000)",
        dealValue: 40000,
        notes: "Unlocked Demo Landing Page from /audit lead magnet. Follow up on WhatsApp.",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

export function getLeads(): CrmLead[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(LEADS_STORAGE_KEY);
        if (!raw) {
            localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(DEFAULT_LEADS));
            return DEFAULT_LEADS;
        }
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : DEFAULT_LEADS;
    } catch {
        return [];
    }
}

export function saveLeads(leads: CrmLead[]): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    } catch {
        // Ignore storage quota errors
    }
}

export function getWebhookUrl(): string {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(WEBHOOK_STORAGE_KEY) || "";
}

export function saveWebhookUrl(url: string): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(WEBHOOK_STORAGE_KEY, url.trim());
}

export function getCrmPasscode(): string {
    if (typeof window === "undefined") return "mowglai2026";
    return localStorage.getItem(PASSCODE_STORAGE_KEY) || "mowglai2026";
}

export function saveCrmPasscode(code: string): void {
    if (typeof window === "undefined") return;
    if (code.trim()) {
        localStorage.setItem(PASSCODE_STORAGE_KEY, code.trim());
    }
}

function inferSource(data: Record<string, string>): LeadSource {
    const src = (data.source || data.form_type || data.subject || "").toLowerCase();
    if (src.includes("lead magnet") || src.includes("demo landing") || src.includes("audit")) return "Lead Magnet";
    if (src.includes("referral")) return "Referral";
    if (src.includes("quote") || src.includes("custom")) return "Custom Quote";
    if (src.includes("consult")) return "Consultation";
    if (src.includes("project") || src.includes("plan")) return "Start Project";
    return "Contact Form";
}

export async function captureLeadFromForm(data: Record<string, string>): Promise<CrmLead | null> {
    if (typeof window === "undefined") return null;

    const name = data.name || data.founderName || data.contactName || data.clientName || "Website Visitor";
    const email = data.email || data.referrerEmail || "";
    const phone =
        [data.phone_country_code, data.phone_number].filter(Boolean).join(" ").trim() ||
        data.phone ||
        data.whatsapp ||
        "";

    const source = inferSource(data);
    const now = new Date().toISOString();

    const newLead: CrmLead = {
        id: `lead-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        name,
        email,
        phone,
        company: data.company || data.businessName || "",
        websiteUrl: data.website || data.websiteUrl || data.url || "",
        source,
        stage: "New Lead",
        owner: source === "Lead Magnet" ? "Ajay" : "Unassigned",
        planTier: data.plan || data.budget || "3-Month Quarterly (₹40,000)",
        dealValue: source === "Lead Magnet" ? 40000 : 0,
        notes: data.message || data.projectDescription || data.vision || data.subject || "",
        createdAt: now,
        updatedAt: now,
    };

    const existing = getLeads();
    saveLeads([newLead, ...existing]);

    // Optional external CRM / Google Sheets / Zapier webhook sync
    const webhookUrl = getWebhookUrl();
    if (webhookUrl) {
        try {
            fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newLead),
                mode: "no-cors",
            }).catch(() => {});
        } catch {
            // Non-blocking webhook sync
        }
    }

    return newLead;
}

export function updateLead(id: string, patch: Partial<CrmLead>): CrmLead[] {
    const leads = getLeads();
    const updated = leads.map((lead) =>
        lead.id === id ? { ...lead, ...patch, updatedAt: new Date().toISOString() } : lead
    );
    saveLeads(updated);
    return updated;
}

export function deleteLead(id: string): CrmLead[] {
    const updated = getLeads().filter((l) => l.id !== id);
    saveLeads(updated);
    return updated;
}

export function addManualLead(input: Omit<CrmLead, "id" | "createdAt" | "updatedAt">): CrmLead[] {
    const now = new Date().toISOString();
    const lead: CrmLead = {
        ...input,
        id: `lead-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        createdAt: now,
        updatedAt: now,
    };
    const updated = [lead, ...getLeads()];
    saveLeads(updated);
    return updated;
}

export function exportLeadsToCsv(leads: CrmLead[]): void {
    const headers = [
        "ID",
        "Name",
        "Email",
        "Phone",
        "Company",
        "Website",
        "Source",
        "Stage",
        "Owner",
        "Plan / Tier",
        "Deal Value",
        "Notes",
        "Created At",
    ];
    const escape = (v: string | number | undefined) => {
        const str = String(v ?? "").replace(/"/g, '""');
        return `"${str}"`;
    };
    const rows = leads.map((l) =>
        [
            l.id,
            l.name,
            l.email,
            l.phone,
            l.company,
            l.websiteUrl,
            l.source,
            l.stage,
            l.owner,
            l.planTier,
            l.dealValue,
            l.notes,
            l.createdAt,
        ]
            .map(escape)
            .join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mowglai-crm-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
