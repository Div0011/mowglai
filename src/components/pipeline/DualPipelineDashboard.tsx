"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  WhiteLabelProject, 
  DirectClientProject, 
  CaseStudyItem, 
  PipelineStage 
} from "@/types/pipeline";
import { 
  loadWhiteLabelProjects, 
  saveWhiteLabelProjects, 
  loadDirectProjects, 
  saveDirectProjects, 
  loadCaseStudies, 
  saveCaseStudies, 
  whiteLabelMOU 
} from "@/data/mockPipelineData";
import { 
  Layers, 
  Plus, 
  CheckCircle2, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ArrowUpRight, 
  Share2, 
  Download, 
  RefreshCw, 
  Search, 
  Filter, 
  X, 
  ChevronRight,
  TrendingUp,
  PackageCheck,
  Cpu,
  Lock,
  DollarSign
} from "lucide-react";

type ActiveTab = "mowglai_pipeline" | "direct_pipeline" | "case_studies" | "mou_agreement";

const STAGE_LABELS: Record<PipelineStage, { label: string; color: string }> = {
  lead: { label: "Lead Identified", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  intake_prd: { label: "PRD Intake Ready", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  ai_build: { label: "DukaanMitra AI Sprint", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
  qa_audit: { label: "Lighthouse QA & SEO", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  shipped_hostinger: { label: "Shipped (Hostinger out/)", color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30" },
};

export default function DualPipelineDashboard() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("mowglai_pipeline");
  const [whiteLabelProjects, setWhiteLabelProjects] = useState<WhiteLabelProject[]>([]);
  const [directProjects, setDirectProjects] = useState<DirectClientProject[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudyItem[]>([]);
  
  // Search & filter
  const [searchQuery, setSearchQuery] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all");

  // Modals
  const [isIntakeModalOpen, setIsIntakeModalOpen] = useState(false);
  const [selectedPRDProject, setSelectedPRDProject] = useState<WhiteLabelProject | null>(null);
  const [exportPackageProject, setExportPackageProject] = useState<WhiteLabelProject | null>(null);
  const [copiedMOU, setCopiedMOU] = useState(false);
  const [exportedStatusText, setExportedStatusText] = useState("");

  // New Project Form State
  const [newClientName, setNewClientName] = useState("");
  const [newIndustry, setNewIndustry] = useState("");
  const [newDealAmount, setNewDealAmount] = useState<number>(150000);
  const [newTargetUrl, setNewTargetUrl] = useState("");
  const [newKeywords, setNewKeywords] = useState("web development Noida, luxury brand design, 3D interactive");
  const [newScope, setNewScope] = useState("");

  // Load initial data
  useEffect(() => {
    setWhiteLabelProjects(loadWhiteLabelProjects());
    setDirectProjects(loadDirectProjects());
    setCaseStudies(loadCaseStudies());
  }, []);

  // Sync back to storage on update
  const updateWhiteLabelProjects = (updated: WhiteLabelProject[]) => {
    setWhiteLabelProjects(updated);
    saveWhiteLabelProjects(updated);
  };

  const updateCaseStudies = (updated: CaseStudyItem[]) => {
    setCaseStudies(updated);
    saveCaseStudies(updated);
  };

  // Metrics Calculations
  const metrics = useMemo(() => {
    const totalWLGmv = whiteLabelProjects.reduce((acc, p) => acc + p.dealAmountInr, 0);
    const dukaanmitraWLShare = whiteLabelProjects.reduce((acc, p) => acc + p.dukaanmitraShare, 0);
    const mowglaiShare = whiteLabelProjects.reduce((acc, p) => acc + p.mowglaiShare, 0);
    
    const totalDirectGmv = directProjects.reduce((acc, p) => acc + p.dealAmountInr, 0);
    const dukaanmitraTotalRevenue = dukaanmitraWLShare + totalDirectGmv;

    const shippedCount = whiteLabelProjects.filter((p) => p.stage === "shipped_hostinger").length;
    const inFlightCount = whiteLabelProjects.filter((p) => p.stage !== "shipped_hostinger").length;

    const avgHours = whiteLabelProjects.length > 0 
      ? Math.round(whiteLabelProjects.reduce((acc, p) => acc + p.turnaroundHours, 0) / whiteLabelProjects.length)
      : 48;

    return {
      totalWLGmv,
      dukaanmitraWLShare,
      mowglaiShare,
      totalDirectGmv,
      dukaanmitraTotalRevenue,
      shippedCount,
      inFlightCount,
      avgHours
    };
  }, [whiteLabelProjects, directProjects]);

  // Advance stage helper
  const advanceStage = (id: string) => {
    const stageOrder: PipelineStage[] = ["lead", "intake_prd", "ai_build", "qa_audit", "shipped_hostinger"];
    const updated = whiteLabelProjects.map((p) => {
      if (p.id === id) {
        const currIndex = stageOrder.indexOf(p.stage);
        if (currIndex < stageOrder.length - 1) {
          const nextStage = stageOrder[currIndex + 1];
          return {
            ...p,
            stage: nextStage,
            buildExportReady: nextStage === "qa_audit" || nextStage === "shipped_hostinger",
          };
        }
      }
      return p;
    });
    updateWhiteLabelProjects(updated);
  };

  // Convert shipped project into anonymous case study
  const anonymizeProject = (p: WhiteLabelProject) => {
    const existing = caseStudies.find((c) => c.originalProjectId === p.id);
    if (existing) {
      setActiveTab("case_studies");
      return;
    }

    const newCaseStudy: CaseStudyItem = {
      id: `CS-${Date.now().toString().slice(-4)}`,
      originalProjectId: p.id,
      anonymousTitle: `Scaling ${p.industry} Digital Experience with Autonomous AI Workforce in ${p.turnaroundHours}h`,
      industry: p.industry,
      turnaroundHours: p.turnaroundHours,
      performanceMetrics: {
        lighthouse: p.prdSpecification.lighthouseTarget || 98,
        fcp: "0.39s",
        speedIndex: "0.85s",
        conversionLift: "+165% Lead Inquiries"
      },
      techStack: p.prdSpecification.techStack,
      executiveSummary: `Mowglai procured the client mandate; DukaanMitra ASI generated the PRD, scaffolded the architecture, and delivered a production static build in under ${p.turnaroundHours} hours.`,
      architectureHighlights: [
        `Strict code separation: client deployment contained zero proprietary prompts or backend code.`,
        `Automated SEO rich snippets generated for Google Core Web Vitals compliance.`,
        `Commercial deal split: 60% DukaanMitra execution, 40% Mowglai client management.`
      ],
      deliveredFor: "White-Label Partner Agency (Mowglai)",
      createdAt: new Date().toISOString().split("T")[0]
    };

    const updatedCaseStudies = [newCaseStudy, ...caseStudies];
    updateCaseStudies(updatedCaseStudies);

    const updatedProjects = whiteLabelProjects.map((item) =>
      item.id === p.id ? { ...item, anonymizedCaseStudyCreated: true } : item
    );
    updateWhiteLabelProjects(updatedProjects);
    setActiveTab("case_studies");
  };

  // Submit New Handover
  const handleCreateIntake = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newIndustry || !newDealAmount) return;

    const mowglaiPart = Math.round(newDealAmount * 0.4);
    const dukaanmitraPart = Math.round(newDealAmount * 0.6);

    const newProject: WhiteLabelProject = {
      id: `MWG-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName: newClientName,
      industry: newIndustry,
      dealAmountInr: newDealAmount,
      dealAmountUsd: Math.round(newDealAmount / 83),
      mowglaiShare: mowglaiPart,
      dukaanmitraShare: dukaanmitraPart,
      stage: "intake_prd",
      turnaroundHours: 48,
      startDate: new Date().toISOString().split("T")[0],
      deliveryDate: new Date(Date.now() + 48 * 3600 * 1000).toISOString().split("T")[0],
      leadOwner: "Mowglai Inbound Sales",
      buildExportReady: false,
      anonymizedCaseStudyCreated: false,
      prdSpecification: {
        targetUrl: newTargetUrl || undefined,
        scopeSummary: newScope || "High-speed conversion website with Next.js 15, responsive mobile layout, and SEO markup.",
        techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Hostinger Static Build"],
        seoKeywords: newKeywords.split(",").map((s) => s.trim()).filter(Boolean),
        lighthouseTarget: 96,
        deliverables: ["Responsive Home & Inner Pages", "Lighthouse 95+ Audit", "Hostinger out/ Export Zip", "SEO Schema JSON-LD"]
      }
    };

    updateWhiteLabelProjects([newProject, ...whiteLabelProjects]);
    setIsIntakeModalOpen(false);

    // Reset Form
    setNewClientName("");
    setNewIndustry("");
    setNewDealAmount(150000);
    setNewTargetUrl("");
    setNewScope("");
  };

  // Filtered projects
  const filteredProjects = whiteLabelProjects.filter((p) => {
    const matchesSearch = 
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = stageFilter === "all" || p.stage === stageFilter;
    return matchesSearch && matchesStage;
  });

  return (
    <div className="w-full text-foreground space-y-8 font-sans">
      {/* Top Banner: Double Engine Concept Bar */}
      <div className="relative rounded-2xl border border-border/60 bg-gradient-to-r from-card/80 via-card/50 to-background p-6 sm:p-8 backdrop-blur-md overflow-hidden">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Double Engine Operating Matrix</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-foreground">
              Mowglai Sales + DukaanMitra ASI Execution Hub
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-body">
              White-label client handover intake, automated 60/40 revenue distribution, PRD engineering, and hostinger-ready isolated static build exports.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <button
              onClick={() => setIsIntakeModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-primary/20"
            >
              <Plus className="w-4 h-4" />
              <span>New Client Handover (PRD)</span>
            </button>
            <button
              onClick={() => setActiveTab("mou_agreement")}
              className="px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-muted font-medium text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer text-muted-foreground hover:text-foreground"
            >
              <FileText className="w-4 h-4" />
              <span>View 60/40 MOU</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>White-Label Pipeline</span>
            <Layers className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-foreground tabular-nums">
            ₹{metrics.totalWLGmv.toLocaleString("en-IN")}
          </div>
          <div className="text-xs text-muted-foreground">
            {whiteLabelProjects.length} active client mandates
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>DukaanMitra Share (60% + Direct)</span>
            <Cpu className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-emerald-400 tabular-nums">
            ₹{metrics.dukaanmitraTotalRevenue.toLocaleString("en-IN")}
          </div>
          <div className="text-xs text-muted-foreground">
            ₹{metrics.dukaanmitraWLShare.toLocaleString("en-IN")} (WL) + ₹{metrics.totalDirectGmv.toLocaleString("en-IN")} (Direct)
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Mowglai Commission (40%)</span>
            <DollarSign className="w-4 h-4 text-[#F5D061]" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-[#F5D061] tabular-nums">
            ₹{metrics.mowglaiShare.toLocaleString("en-IN")}
          </div>
          <div className="text-xs text-muted-foreground">
            Sales & client success revenue
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm space-y-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Average Velocity</span>
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-display font-black text-foreground tabular-nums">
            {metrics.avgHours} Hours
          </div>
          <div className="text-xs text-muted-foreground">
            {metrics.shippedCount} shipped · {metrics.inFlightCount} in flight
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-3">
        <button
          onClick={() => setActiveTab("mowglai_pipeline")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "mowglai_pipeline"
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Mowglai White-Label Pipeline ({whiteLabelProjects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("direct_pipeline")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "direct_pipeline"
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>DukaanMitra Direct Pipeline (100% Margin)</span>
        </button>

        <button
          onClick={() => setActiveTab("case_studies")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "case_studies"
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          <Share2 className="w-4 h-4" />
          <span>Anonymous Case Studies ({caseStudies.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("mou_agreement")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === "mou_agreement"
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>White-Label MOU & Agreement</span>
        </button>
      </div>

      {/* Tab 1: Mowglai White-Label Pipeline */}
      {activeTab === "mowglai_pipeline" && (
        <div className="space-y-6">
          {/* Search & Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search client, ID, or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-card border border-border/60 text-xs sm:text-sm text-foreground focus:outline-none focus:border-primary placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs text-muted-foreground whitespace-nowrap">Filter Stage:</span>
              {(["all", "lead", "intake_prd", "ai_build", "qa_audit", "shipped_hostinger"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setStageFilter(s)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    stageFilter === s
                      ? "bg-muted text-foreground border border-border"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s === "all" ? "All Stages" : STAGE_LABELS[s]?.label || s}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Table / Card List */}
          <div className="grid gap-4">
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center border border-border/60 rounded-2xl bg-card/40">
                <p className="text-sm text-muted-foreground">No client projects found matching your filter criteria.</p>
              </div>
            ) : (
              filteredProjects.map((project) => {
                const stageMeta = STAGE_LABELS[project.stage];
                return (
                  <div
                    key={project.id}
                    className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card/50 hover:bg-card/80 transition-all duration-300 space-y-4"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Left: Client Info */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs font-bold text-primary">
                            {project.id}
                          </span>
                          <span className="text-foreground/30" aria-hidden="true">·</span>
                          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${stageMeta.color}`}>
                            {stageMeta.label}
                          </span>
                          {project.buildExportReady && (
                            <span className="text-[11px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                              Static out/ Ready
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold font-display text-foreground">
                          {project.clientName}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {project.industry} · Turnaround: {project.turnaroundHours}h SLA · Lead: {project.leadOwner}
                        </p>
                      </div>

                      {/* Middle: 60/40 Split Breakdown */}
                      <div className="p-3.5 rounded-xl border border-border/40 bg-background/50 grid grid-cols-3 gap-4 text-center shrink-0">
                        <div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Gross Deal</div>
                          <div className="text-sm font-bold font-mono text-foreground tabular-nums">
                            ₹{project.dealAmountInr.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <div className="border-x border-border/30 px-3">
                          <div className="text-[10px] text-purple-400 font-medium uppercase tracking-wide">DukaanMitra (60%)</div>
                          <div className="text-sm font-bold font-mono text-purple-400 tabular-nums">
                            ₹{project.dukaanmitraShare.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] text-[#F5D061] font-medium uppercase tracking-wide">Mowglai (40%)</div>
                          <div className="text-sm font-bold font-mono text-[#F5D061] tabular-nums">
                            ₹{project.mowglaiShare.toLocaleString("en-IN")}
                          </div>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => setSelectedPRDProject(project)}
                          className="px-3 py-1.5 rounded-lg border border-border/80 hover:bg-muted text-xs font-medium text-foreground transition-colors cursor-pointer flex items-center gap-1.5"
                        >
                          <FileText className="w-3.5 h-3.5 text-blue-400" />
                          <span>View PRD</span>
                        </button>

                        {project.stage !== "shipped_hostinger" ? (
                          <button
                            onClick={() => advanceStage(project.id)}
                            className="px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all cursor-pointer flex items-center gap-1.5"
                          >
                            <span>Next Stage</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => anonymizeProject(project)}
                            className="px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                          >
                            <Share2 className="w-3.5 h-3.5" />
                            <span>{project.anonymizedCaseStudyCreated ? "Case Study Published" : "Anonymize Case Study"}</span>
                          </button>
                        )}

                        <button
                          onClick={() => setExportPackageProject(project)}
                          className="p-1.5 rounded-lg border border-border/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                          title="Inspect Deployment Bundle"
                        >
                          <PackageCheck className="w-4 h-4 text-emerald-400" />
                        </button>
                      </div>
                    </div>

                    {/* Deliverables tags */}
                    <div className="pt-2 border-t border-border/30 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-mono text-[11px] text-foreground/50">Tech Specs:</span>
                      {project.prdSpecification.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-muted/40 text-[11px] text-foreground/70">
                          {tech}
                        </span>
                      ))}
                      <span className="text-foreground/20">·</span>
                      <span className="text-[11px] text-emerald-400">Target Lighthouse: {project.prdSpecification.lighthouseTarget}+</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Tab 2: DukaanMitra Direct Inbound Pipeline */}
      {activeTab === "direct_pipeline" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-display text-foreground">
                  DukaanMitra Direct Inbound Pipeline
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Clients acquired directly via DukaanMitra.in — 100% margin retained, zero revenue share deductions.
                </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs font-bold">
                100% Retained Revenue Engine
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {directProjects.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-2xl border border-border/60 bg-card/50 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-purple-400">{p.id}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        Source: {p.leadSource}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold font-display text-foreground mt-1">
                      {p.clientName}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {p.industry} · Started: {p.startDate} · Launch: {p.targetLaunchDate}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl border border-border/40 bg-background/50 text-right">
                    <div className="text-[10px] text-muted-foreground uppercase">Direct Value (100%)</div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">
                      ₹{p.dealAmountInr.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground bg-muted/20 p-3 rounded-lg border border-border/30">
                  {p.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Case Studies & Anonymous Portfolio Generator */}
      {activeTab === "case_studies" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-display text-foreground">
                Anonymous Case Study Registry
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Converted from completed Mowglai client builds. Client names are anonymized for NDA compliance while proving technical mastery to direct prospects.
              </p>
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              Ready for DukaanMitra.in CMS
            </div>
          </div>

          <div className="grid gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="p-6 rounded-2xl border border-border/60 bg-card/50 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                      <span>{cs.id}</span>
                      <span>·</span>
                      <span>{cs.industry}</span>
                      <span>·</span>
                      <span>{cs.turnaroundHours}h Build</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-foreground">
                      {cs.anonymousTitle}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(JSON.stringify(cs, null, 2));
                        setExportedStatusText(`Copied ${cs.id} JSON!`);
                        setTimeout(() => setExportedStatusText(""), 2000);
                      }}
                      className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-muted transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export JSON</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl border border-border/40 bg-background/50">
                    <div className="text-[10px] text-muted-foreground uppercase">Lighthouse</div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">{cs.performanceMetrics.lighthouse} / 100</div>
                  </div>
                  <div className="p-3 rounded-xl border border-border/40 bg-background/50">
                    <div className="text-[10px] text-muted-foreground uppercase">First Paint</div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">{cs.performanceMetrics.fcp}</div>
                  </div>
                  <div className="p-3 rounded-xl border border-border/40 bg-background/50">
                    <div className="text-[10px] text-muted-foreground uppercase">Speed Index</div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">{cs.performanceMetrics.speedIndex}</div>
                  </div>
                  <div className="p-3 rounded-xl border border-border/40 bg-background/50">
                    <div className="text-[10px] text-muted-foreground uppercase">Conversion Impact</div>
                    <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">{cs.performanceMetrics.conversionLift}</div>
                  </div>
                </div>

                <p className="text-xs text-foreground/80 leading-relaxed font-body">
                  {cs.executiveSummary}
                </p>

                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-foreground">Architecture Highlights:</div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    {cs.architectureHighlights.map((hl, i) => (
                      <li key={i}>{hl}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: White-Label MOU & Agreement Terms */}
      {activeTab === "mou_agreement" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Operating Agreement · Effective {whiteLabelMOU.effectiveDate}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-foreground">
                Double Engine Memorandum of Understanding (MOU)
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Binding operational guidelines between Mowglai Digital Agency and DukaanMitra ASI.
              </p>
            </div>

            <button
              onClick={() => {
                const text = `# Double Engine Model MOU\n\nParties: ${whiteLabelMOU.partyA} & ${whiteLabelMOU.partyB}\n\n${whiteLabelMOU.clauses.map(c => `## ${c.title}\n${c.content}`).join("\n\n")}`;
                navigator.clipboard.writeText(text);
                setCopiedMOU(true);
                setTimeout(() => setCopiedMOU(false), 2000);
              }}
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs transition-all cursor-pointer flex items-center gap-2"
            >
              {copiedMOU ? <CheckCircle2 className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              <span>{copiedMOU ? "MOU Markdown Copied!" : "Copy Full MOU"}</span>
            </button>
          </div>

          <div className="space-y-4">
            {whiteLabelMOU.clauses.map((clause, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card/50 space-y-2"
              >
                <h4 className="text-base font-bold font-display text-foreground flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {clause.title}
                </h4>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-body">
                  {clause.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal: New Client Intake & PRD Generator */}
      {isIntakeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-8 text-foreground">
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-bold font-display text-foreground">
                  New Client Handover & PRD Intake
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Input deal parameters. The engine auto-calculates the 60/40 split and constructs the PRD.
                </p>
              </div>
              <button
                onClick={() => setIsIntakeModalOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateIntake} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Client / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Living Modular"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Industry / Domain *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. D2C Fashion, Healthcare, Architecture"
                  value={newIndustry}
                  onChange={(e) => setNewIndustry(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Total Deal Amount (₹ INR) *
                </label>
                <input
                  type="number"
                  required
                  min={10000}
                  step={5000}
                  value={newDealAmount}
                  onChange={(e) => setNewDealAmount(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary font-mono"
                />
              </div>

              {/* Live Revenue Split Preview */}
              <div className="p-3.5 rounded-xl border border-border/50 bg-background/60 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] text-purple-400 font-semibold uppercase">
                    DukaanMitra ASI (60% Build)
                  </div>
                  <div className="text-base font-bold font-mono text-purple-400 mt-0.5 tabular-nums">
                    ₹{Math.round(newDealAmount * 0.6).toLocaleString("en-IN")}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-[#F5D061] font-semibold uppercase">
                    Mowglai (40% Sales & Face)
                  </div>
                  <div className="text-base font-bold font-mono text-[#F5D061] mt-0.5 tabular-nums">
                    ₹{Math.round(newDealAmount * 0.4).toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Target Domain / Reference URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://client-domain.com"
                  value={newTargetUrl}
                  onChange={(e) => setNewTargetUrl(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  SEO Target Keywords (Comma separated)
                </label>
                <input
                  type="text"
                  value={newKeywords}
                  onChange={(e) => setNewKeywords(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Scope Brief / Deliverables
                </label>
                <textarea
                  rows={3}
                  placeholder="Explain special 3D components, interactive calculators, or custom workflows..."
                  value={newScope}
                  onChange={(e) => setNewScope(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-background border border-border text-foreground text-xs focus:outline-none focus:border-primary"
                />
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsIntakeModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium rounded-lg text-muted-foreground hover:bg-muted cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all cursor-pointer"
                >
                  Confirm Handover & Generate PRD
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: View PRD Details */}
      {selectedPRDProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-8 text-foreground">
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-4 mb-6">
              <div>
                <div className="text-xs font-mono text-primary font-bold">{selectedPRDProject.id} · PRODUCT REQUIREMENT SPECIFICATION</div>
                <h3 className="text-2xl font-bold font-display text-foreground mt-1">
                  {selectedPRDProject.clientName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPRDProject(null)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="p-4 rounded-xl border border-border/50 bg-background/50 space-y-2">
                <div className="font-semibold text-foreground">Executive Scope:</div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedPRDProject.prdSpecification.scopeSummary}
                </p>
              </div>

              <div>
                <div className="font-semibold text-foreground mb-1.5">Deliverables Checklist:</div>
                <ul className="space-y-1">
                  {selectedPRDProject.prdSpecification.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="font-semibold text-foreground mb-1.5">SEO Keywords Strategy:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPRDProject.prdSpecification.seoKeywords.map((kw, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-muted text-[11px] text-foreground">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Target SLA: {selectedPRDProject.turnaroundHours} Hours from intake
                </span>
                <button
                  onClick={() => setSelectedPRDProject(null)}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold cursor-pointer"
                >
                  Close PRD
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Export Package & Code Isolation Checker */}
      {exportPackageProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-8 text-foreground">
            <div className="flex items-start justify-between gap-4 border-b border-border/50 pb-4 mb-4">
              <div>
                <div className="text-xs font-mono text-emerald-400">HOSTINGER EXPORT ARTIFACT CHECK</div>
                <h3 className="text-xl font-bold font-display text-foreground mt-0.5">
                  Static Bundle Inspection: {exportPackageProject.clientName}
                </h3>
              </div>
              <button
                onClick={() => setExportPackageProject(null)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>IP Isolation Verified</span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-emerald-200/80">
                  Client receives only compiled static HTML/CSS/JS in <code className="bg-black/30 px-1 py-0.5 rounded">out/</code> directory for Hostinger upload. All DukaanMitra agents, system prompts, and execution engines are physically excluded.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="font-semibold text-foreground">Bundle Contents:</div>
                <div className="p-3 rounded-lg bg-background border border-border/50 font-mono text-[11px] space-y-1 text-muted-foreground">
                  <div>✓ index.html (Static Pre-rendered Next.js 15)</div>
                  <div>✓ _next/static/css/ (Tailwind v4 production build)</div>
                  <div>✓ _next/static/chunks/ (Compressed WebGL & Lucide bundles)</div>
                  <div>✓ api/audit.php & api/send_email.php (PHP shared host handlers)</div>
                  <div className="text-emerald-400">✓ Security Rule: 0 Prompt or Agent Files Exposed</div>
                </div>
              </div>

              <div className="pt-3 border-t border-border/50 flex justify-end gap-2">
                <button
                  onClick={() => setExportPackageProject(null)}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold cursor-pointer"
                >
                  Acknowledge & Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating toast notification */}
      {exportedStatusText && (
        <div className="fixed bottom-6 right-6 z-[110] px-4 py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs shadow-xl animate-in slide-in-from-bottom-2">
          {exportedStatusText}
        </div>
      )}
    </div>
  );
}
