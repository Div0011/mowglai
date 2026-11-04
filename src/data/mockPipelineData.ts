import { WhiteLabelProject, DirectClientProject, CaseStudyItem, MOUAgreement } from "@/types/pipeline";

export const initialWhiteLabelProjects: WhiteLabelProject[] = [
  {
    id: "MWG-8491",
    clientName: "Aura Luxury Living",
    industry: "Luxury Interior & Modular Spaces",
    dealAmountInr: 220000,
    dealAmountUsd: 2640,
    mowglaiShare: 88000,
    dukaanmitraShare: 132000,
    stage: "shipped_hostinger",
    turnaroundHours: 46,
    startDate: "2026-09-28",
    deliveryDate: "2026-09-30",
    leadOwner: "Mowglai Sales (Noida HQ)",
    buildExportReady: true,
    anonymizedCaseStudyCreated: true,
    prdSpecification: {
      targetUrl: "https://auraliving.example.com",
      scopeSummary: "Full 3D interior showcase, interactive material visualizer, Next.js 15 App router, 0.4s FCP.",
      techStack: ["Next.js 15", "Three.js", "Tailwind CSS", "GSAP ScrollTrigger", "Hostinger Static"],
      seoKeywords: ["luxury modular interior Delhi", "3D architectural design studio", "bespoke home interiors"],
      lighthouseTarget: 98,
      deliverables: ["Landing Hero with 3D Room Viewer", "Catalog Grid with Instant Filtering", "Hostinger out/ Export Zip", "SEO JSON-LD Schemas"]
    }
  },
  {
    id: "MWG-8492",
    clientName: "Dr. Roy Specialty Clinics",
    industry: "Healthcare & Multi-Specialty Dental",
    dealAmountInr: 140000,
    dealAmountUsd: 1680,
    mowglaiShare: 56000,
    dukaanmitraShare: 84000,
    stage: "qa_audit",
    turnaroundHours: 38,
    startDate: "2026-10-08",
    deliveryDate: "2026-10-10",
    leadOwner: "Mowglai Sales (Noida HQ)",
    buildExportReady: true,
    anonymizedCaseStudyCreated: false,
    prdSpecification: {
      targetUrl: "https://drroyclinic.example.com",
      scopeSummary: "Patient appointment intake, doctor profile cards, automated schema SEO, high mobile touch responsiveness.",
      techStack: ["Next.js 15", "Lucide React", "Tailwind CSS", "PHP Lead Handler"],
      seoKeywords: ["dental clinic Noida sector 62", "orthodontist Delhi NCR", "emergency root canal"],
      lighthouseTarget: 96,
      deliverables: ["Appointment Booking Wizard", "Clinic Virtual Tour", "PHP Lead Forwarder", "Verified Web Vitals"]
    }
  },
  {
    id: "MWG-8493",
    clientName: "Zenith CleanTech Micro-grid",
    industry: "CleanTech & Commercial Solar",
    dealAmountInr: 350000,
    dealAmountUsd: 4200,
    mowglaiShare: 140000,
    dukaanmitraShare: 210000,
    stage: "ai_build",
    turnaroundHours: 52,
    startDate: "2026-10-11",
    deliveryDate: "2026-10-13",
    leadOwner: "Mowglai Enterprise (Gurgaon)",
    buildExportReady: false,
    anonymizedCaseStudyCreated: false,
    prdSpecification: {
      targetUrl: "https://zenithsolar.example.com",
      scopeSummary: "Industrial solar ROI calculator, subsidy eligibility checker, dynamic tariff graphs.",
      techStack: ["Next.js 15", "Recharts", "Framer Motion", "Tailwind CSS"],
      seoKeywords: ["commercial solar installation Haryana", "industrial rooftop solar EPC", "solar net metering"],
      lighthouseTarget: 95,
      deliverables: ["Interactive Solar Yield Calculator", "B2B RFP Submission Flow", "PWA Installable Spec"]
    }
  },
  {
    id: "MWG-8494",
    clientName: "Kavya Organics",
    industry: "D2C Ayurveda Skincare",
    dealAmountInr: 180000,
    dealAmountUsd: 2160,
    mowglaiShare: 72000,
    dukaanmitraShare: 108000,
    stage: "intake_prd",
    turnaroundHours: 48,
    startDate: "2026-10-13",
    deliveryDate: "2026-10-15",
    leadOwner: "Mowglai Inbound Organic",
    buildExportReady: false,
    anonymizedCaseStudyCreated: false,
    prdSpecification: {
      targetUrl: "https://kavyaorganics.example.com",
      scopeSummary: "High-conversion D2C storefront, ingredient breakdown interactive drawer, COD integration, sub-second product pages.",
      techStack: ["Next.js 15", "Tailwind CSS", "Shopify Headless Storefront API", "Lucide React"],
      seoKeywords: ["organic ayurvedic face serum", "paraben free skincare India", "kumkumadi tailam authentic"],
      lighthouseTarget: 99,
      deliverables: ["Product Detail Showcase", "Interactive Ingredient Drawer", "Fast Cart Drawer", "Static Hostinger Bundle"]
    }
  }
];

export const initialDirectClientProjects: DirectClientProject[] = [
  {
    id: "DKM-101",
    clientName: "TruckWala Freight Intelligence",
    industry: "Logistics & Fleet Highway Assist",
    dealAmountInr: 450000,
    stage: "production_live",
    leadSource: "DukaanMitra.in",
    turnaroundHours: 64,
    startDate: "2026-09-15",
    targetLaunchDate: "2026-09-18",
    notes: "Direct client contracted via DukaanMitra.in. 100% margin retained. Real-time fleet telemetry prototype."
  },
  {
    id: "DKM-102",
    clientName: "Bharat Retail Hyperlocal Cloud",
    industry: "MSME Commerce & Billing",
    dealAmountInr: 600000,
    stage: "ai_sprint",
    leadSource: "Inbound Organic",
    turnaroundHours: 72,
    startDate: "2026-10-09",
    targetLaunchDate: "2026-10-14",
    notes: "Comprehensive billing, WhatsApp catalog generator and GST reporting engine."
  }
];

export const initialCaseStudies: CaseStudyItem[] = [
  {
    id: "CS-001",
    originalProjectId: "MWG-8491",
    anonymousTitle: "How We Shipped an Award-Grade 3D Architectural Experience in 48 Hours",
    industry: "High-End Architectural & D2C Interior Brand",
    turnaroundHours: 46,
    performanceMetrics: {
      lighthouse: 99,
      fcp: "0.38s",
      speedIndex: "0.8s",
      conversionLift: "+182% Inbound Consultations"
    },
    techStack: ["Next.js 15 App Router", "Three.js WebGL", "Tailwind CSS v4", "PHP Static Forwarder"],
    executiveSummary: "A premier interior design firm needed an ultra-luxury digital showroom capable of rendering realistic 3D textures in-browser without sluggish loading times. The DukaanMitra ASI autonomous workforce delivered the entire application—from design tokens to static Hostinger deployment—in under 48 hours.",
    architectureHighlights: [
      "Zero-bloat bundle: Client code stripped of all private agent prompts and backends, running entirely on static shared hosting.",
      "Three.js deferred initialization: Lazy loaded on viewport intersection, maintaining 99 Mobile Lighthouse.",
      "Automated Rich Results: Local business, aggregate ratings, and product catalog schemas generated autonomously."
    ],
    deliveredFor: "White-Label Partner Agency (Mowglai)",
    createdAt: "2026-10-01"
  },
  {
    id: "CS-002",
    originalProjectId: "MWG-8488",
    anonymousTitle: "Scaling Inbound Local Search for a 4-Center Healthcare Group in 36 Hours",
    industry: "Healthcare, Clinical & Specialty Practice",
    turnaroundHours: 36,
    performanceMetrics: {
      lighthouse: 98,
      fcp: "0.42s",
      speedIndex: "0.9s",
      conversionLift: "+210% Verified Appointment Calls"
    },
    techStack: ["Next.js 15", "Schema.org MedicalWebPage", "Tailwind CSS", "Static HTML Previews"],
    executiveSummary: "Rapid execution of hyper-optimized location silos and instant appointment booking flows. The agency acquired the client; DukaanMitra ASI generated the PRD, synthesized localized healthcare keywords, built the interactive components, and shipped a ready-to-host export.",
    architectureHighlights: [
      "Sub-second local landing pages targeting high-intent NCR medical queries.",
      "Integrated PHP contact endpoint avoiding server costs for the agency.",
      "Strict WCAG AA accessibility compliance with zero-pill typography hierarchy."
    ],
    deliveredFor: "White-Label Partner Agency (Mowglai)",
    createdAt: "2026-10-05"
  }
];

export const whiteLabelMOU: MOUAgreement = {
  effectiveDate: "October 14, 2026",
  partyA: "Mowglai Digital Agency ('Agency / Front Office')",
  partyB: "DukaanMitra ASI ('Intelligence Engine / Technical Workforce')",
  revenueSplit: {
    dukaanmitraPercent: 60,
    mowglaiPercent: 40
  },
  clauses: [
    {
      title: "1. Revenue Distribution (60/40 Split)",
      content: "For all client engagements procured and closed under the Mowglai brand, gross recognized deal value shall be split automatically: 60% allocated to DukaanMitra ASI for end-to-end technical execution, design, architecture, and code shipping; 40% allocated to Mowglai for client acquisition, front-facing communication, and account management. Direct clients originating from DukaanMitra.in belong 100% to DukaanMitra ASI."
    },
    {
      title: "2. Intellectual Property & Code Isolation",
      content: "All proprietary AI agent logic, system prompts, code synthesis workflows, and core architecture remains the sole exclusive intellectual property of DukaanMitra ASI. Mowglai and the end client receive only the compiled, production-ready static export bundle ('out/' directory) configured for deployment on Hostinger or client servers. No source prompts or workforce tooling are transferred."
    },
    {
      title: "3. Delivery SLA & Quality Commitment",
      content: "DukaanMitra ASI commits to a 48 to 72-hour turnaround time for initial end-to-end build delivery following PRD sign-off. All deliverables must achieve a minimum Lighthouse performance benchmark of 92+ on mobile, complete TypeScript strictness, and full mobile-first responsive integrity."
    },
    {
      title: "4. Attribution & Anonymous Case Studies",
      content: "Mowglai agrees to display the subtle, elegant partner badge 'Engineered by DukaanMitra ASI' on its public web footers. DukaanMitra ASI retains the unconditional right to publish anonymized case studies (stripping client confidential trademarks and proprietary data) to showcase technical metrics and workforce velocity."
    },
    {
      title: "5. Non-Circumvention & Client Exclusivity",
      content: "DukaanMitra ASI shall not directly solicit or breach the agency relationship with clients brought in by Mowglai. All day-to-day front-office client communication, invoicing, and support requests shall be fronted by Mowglai, preserving a seamless white-label experience."
    }
  ]
};

const STORAGE_KEY_WL = "dukaanmitra_mowglai_wl_projects";
const STORAGE_KEY_DIRECT = "dukaanmitra_direct_projects";
const STORAGE_KEY_CS = "dukaanmitra_case_studies";

export function loadWhiteLabelProjects(): WhiteLabelProject[] {
  if (typeof window === "undefined") return initialWhiteLabelProjects;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_WL);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_WL, JSON.stringify(initialWhiteLabelProjects));
      return initialWhiteLabelProjects;
    }
    return JSON.parse(raw);
  } catch {
    return initialWhiteLabelProjects;
  }
}

export function saveWhiteLabelProjects(projects: WhiteLabelProject[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_WL, JSON.stringify(projects));
  } catch (e) {
    console.error("Failed to save white-label projects to localStorage", e);
  }
}

export function loadDirectProjects(): DirectClientProject[] {
  if (typeof window === "undefined") return initialDirectClientProjects;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DIRECT);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_DIRECT, JSON.stringify(initialDirectClientProjects));
      return initialDirectClientProjects;
    }
    return JSON.parse(raw);
  } catch {
    return initialDirectClientProjects;
  }
}

export function saveDirectProjects(projects: DirectClientProject[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_DIRECT, JSON.stringify(projects));
  } catch (e) {
    console.error("Failed to save direct projects to localStorage", e);
  }
}

export function loadCaseStudies(): CaseStudyItem[] {
  if (typeof window === "undefined") return initialCaseStudies;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_CS, JSON.stringify(initialCaseStudies));
      return initialCaseStudies;
    }
    return JSON.parse(raw);
  } catch {
    return initialCaseStudies;
  }
}

export function saveCaseStudies(caseStudies: CaseStudyItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_CS, JSON.stringify(caseStudies));
  } catch (e) {
    console.error("Failed to save case studies to localStorage", e);
  }
}
