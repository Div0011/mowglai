# Dual Engine Model: Mowglai Sales Engine & DukaanMitra ASI Execution Architecture

Comprehensive implementation plan to establish the "Double Engine Model" unifying Mowglai (Sales, Client Acquisition, Front-facing Agency, 40% rev share) and DukaanMitra ASI (Super-Intelligence, Build-to-Ship AI Workforce, IP Owner, 60% rev share / 100% direct).

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed during Phase 1 interactive alignment and govern this release:

- **Confirmed Decision 1 (Scope & Sequence)**: Build both concurrently in a unified release — integrating the high-converting Mowglai SEO landing redesign alongside the comprehensive Dual Pipeline Handover Dashboard.
- **Confirmed Decision 2 (Dashboard Placement)**: Shared management view with toggleable pipeline tabs (`/dual-pipeline` and seamlessly integrated into `/company-os` command hub) for real-time tracking of Mowglai client handovers and DukaanMitra direct client funnels.
- **Confirmed Decision 3 (Brand Attribution)**: Full partner badge linked to an anonymous case study modal and showcase ("Engineered by DukaanMitra ASI — How we shipped a bespoke 3D agency site in 48h with an autonomous AI workforce").
- **Confirmed Decision 4 (Revenue & IP Guardrails)**: Automated 60/40 revenue split accounting with client intake PRD generation, delivery milestone tracking, and strict code isolation (clients receive only static `out/` export assets; all core agent intelligence, prompts, and engine IP remain exclusively with DukaanMitra).

---

## 1. Overview & Core Concept

### What It Does
1. **Engine 1 (Mowglai — Sales & Face)**:
   - High-speed, high-converting SEO agency landing page with interactive service configurator, instant website audit CTA, and social proof.
   - Converts prospective business clients into structured project briefs.
   - Includes the agreed full partner attribution: *"Engineered by DukaanMitra ASI"* with a clickable preview of the anonymous case study.
2. **Engine 2 (DukaanMitra ASI — Super-Intelligence & Autonomous Delivery)**:
   - Central Dual Pipeline Handover Dashboard featuring toggleable tabs:
     - **Tab 1: Mowglai White-Label Pipeline**: Client handover intake, automated PRD brief generator, milestone delivery log, and live 60/40 split ledger.
     - **Tab 2: DukaanMitra Direct Inbound Pipeline**: Direct enterprise / SME clients with 100% retained margin and direct client tracking.
     - **Tab 3: Anonymous Case Study Generator & Registry**: Curates completed Mowglai client deliveries into anonymized, privacy-compliant case studies (e.g., "Bespoke D2C Brand in 48h", "3D Architecture Experience") for DukaanMitra's portfolio.
     - **Tab 4: White-Label MOU & IP Protection Spec**: Formalizes the operational agreement, delivery SLAs, communication boundaries, and static build export policies.

### Target Audience & Personas
- **Agency Founder / Sales Lead (Mowglai)**: Needs frictionless client closing, rapid quotation generation, and clear delivery status updates without dealing with engineering headaches.
- **DukaanMitra ASI / Technical Operator**: Needs structured client PRDs, automated asset tracking, 60/40 margin accounting, and IP protection.
- **Enterprise / SME Clients**: Looking for modern, ultra-fast web development, 3D experiences, and SEO-dominant digital presence.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Client Acquisition Flow (Mowglai Landing)**:
   - Visitor lands on Mowglai's optimized hero section with crisp typography, sub-second LCP, and interactive quote/audit wizard.
   - Footer and trust ribbons feature the subtle *"Engineered by DukaanMitra ASI"* partner badge. Clicking the badge opens an interactive modal showcasing the anonymous 48h AI delivery case study.
2. **Handover & Intake Flow (Dual Pipeline Dashboard)**:
   - Mowglai team inputs new client deal parameters (Client industry, scope, deal size in INR/USD, timeline).
   - The engine automatically calculates the 60% DukaanMitra / 40% Mowglai split, generates a structured PRD template, and sets up the execution kanban.
3. **Execution & Handover Flow**:
   - DukaanMitra agents build to ship (design tokens, Next.js components, SEO schema, Lighthouse 95+ score).
   - Once completed, the dashboard prepares the static `out/` deployment package for Hostinger and flags the project for anonymous case study generation.

### Visual Identity & Theme
- **Aesthetic Direction**: Deep obsidian dark mode (`#05080A` to `#0A0F14`) infused with subtle Emerald bioluminescence (`#22C55E`) and warm gold accents (`#F59E0B`), reflecting Mowglai's luxury galaxy/jungle identity and DukaanMitra's computational intelligence.
- **Typography & Scale**:
  - Display: `Boldonse` & `Plus Jakarta Sans` for bold, authoritative headlines.
  - Body: `Josefin Sans` & `Public Sans` with strict tabular numerals (`tabular-nums`) for currency, margins, and status metrics.
- **Layout Integrity**:
  - Desktop 1440px baseline with full-width responsive breakpoints.
  - Zero-pill metadata discipline: unboxed text with `·` typographic separators.
  - No fake mechanical comments (`//`) or arbitrary scoreboards.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Dual Pipeline Location & Access**:
  - *Chosen Approach*: Implement a dedicated `/dual-pipeline` route and link it from the top management bar of `/company-os` and the navigation menu.
  - *Why*: Allows both standalone access for daily operational handover and seamless integration into the existing executive workspace.
- **Decision 2: State Persistence & Demonstration Mode**:
  - *Chosen Approach*: Interactive reactive client-side store with `localStorage` persistence, pre-seeded with realistic production test cases (e.g., "D2C Luxury Apparel Brand", "Noida Dental Clinic 3D Portal", "B2B Supply Chain SaaS") and full CRUD capability.
  - *Why*: Ensures instant zero-latency interactivity, works cleanly in both static export (`out/`) and development servers without external database dependencies.
- **Decision 3: Code Isolation & IP Security**:
  - *Chosen Approach*: The export package generator explicitly marks non-exportable intelligence (prompts, internal agent modules, private keys) and prepares clean static client builds.

---

## 4. Technical Architecture & Data Strategy

### System Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        DOUBLE ENGINE MODEL                             │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
┌─────────────────────────────────┐         ┌─────────────────────────────────┐
│ ENGINE 1: MOWGLAI (Sales & Face)│         │ ENGINE 2: DUKAANMITRA ASI (IP)  │
│ - SEO Agency Landing Page       │         │ - Autonomous AI Workforce       │
│ - Instant Audit & Quote Wizards │         │ - Build-to-Ship Execution       │
│ - Partner Badge Attribution     │         │ - 100% Direct Client Inbound    │
│ - 40% Sales Commission Revenue │         │ - 60% White-Label Revenue Split │
└────────────────┬────────────────┘         └────────────────┬────────────────┘
                 │                                           │
                 └────────────────────┬──────────────────────┘
                                      ▼
             ┌─────────────────────────────────────────────────┐
             │       DUAL PIPELINE HANDOVER DASHBOARD          │
             │              (/dual-pipeline)                   │
             ├─────────────────────────────────────────────────┤
             │ [Tab 1] Mowglai White-Label Pipeline (60/40)   │
             │ [Tab 2] DukaanMitra Direct Inbound (100%)       │
             │ [Tab 3] Anonymous Case Study Engine             │
             │ [Tab 4] White-Label MOU & Export Boundaries     │
             └────────────────────────┬────────────────────────┘
                                      │
                 ┌────────────────────┴────────────────────┐
                 ▼                                         ▼
   ┌───────────────────────────┐             ┌───────────────────────────┐
   │ CLIENT HANDOFF ARTIFACTS  │             │   IP & WORKFORCE CORE     │
   │ - Static HTML/CSS in out/ │             │ - Agent Prompts & Core    │
   │ - Client Hostinger Deploy │             │ - DukaanMitra.in Portfolio│
   │ - No Internal Source IP   │             │ - Exclusive IP Ownership  │
   └───────────────────────────┘             └───────────────────────────┘
```

### Component & State Plan
1. **`app/dual-pipeline/page.tsx`**: The main page container with tab switching, pipeline overview metrics, and quick action bar.
2. **`src/components/pipeline/DualPipelineDashboard.tsx`**:
   - `MowglaiPipelineTab`: List of active white-label projects, stage progression (Lead -> Intake -> PRD -> Build -> QA -> Shipped), 60/40 revenue calculator, and intake modal.
   - `DirectPipelineTab`: Direct DukaanMitra client pipeline with 100% margin tracking and direct booking flow.
   - `CaseStudyGeneratorTab`: Anonymizes live Mowglai client deliverables into portfolio items with before/after benchmarks.
   - `MOUViewerTab`: Interactive view of the 5-point white-label operating agreement (Revenue share, IP boundaries, SLAs, communication protocol).
3. **`src/components/partner/DukaanMitraPartnerBadge.tsx`**:
   - Polished, elegant partner badge component rendered in the Mowglai footer and audit sections.
   - Triggers the Case Study Drawer/Modal with zero-latency preview of the 48-hour delivery model.
4. **`app/page.tsx` & `src/components/HeroSection.tsx` SEO Enhancements**:
   - Streamlined hero copy and fast call-to-actions.
   - Clean, lightweight integration ensuring no hydration glitches and high Core Web Vitals.
