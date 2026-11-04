export type PipelineStage = 
  | "lead"
  | "intake_prd"
  | "ai_build"
  | "qa_audit"
  | "shipped_hostinger";

export interface PRDSpecification {
  targetUrl?: string;
  scopeSummary: string;
  techStack: string[];
  seoKeywords: string[];
  lighthouseTarget: number;
  deliverables: string[];
}

export interface WhiteLabelProject {
  id: string;
  clientName: string;
  industry: string;
  dealAmountInr: number;
  dealAmountUsd: number;
  mowglaiShare: number; // 40%
  dukaanmitraShare: number; // 60%
  stage: PipelineStage;
  turnaroundHours: number;
  startDate: string;
  deliveryDate: string;
  prdSpecification: PRDSpecification;
  buildExportReady: boolean;
  anonymizedCaseStudyCreated: boolean;
  leadOwner: string;
}

export interface DirectClientProject {
  id: string;
  clientName: string;
  industry: string;
  dealAmountInr: number;
  stage: "qualification" | "architecture_spec" | "ai_sprint" | "production_live";
  leadSource: "DukaanMitra.in" | "Partner Referral" | "Inbound Organic";
  turnaroundHours: number;
  startDate: string;
  targetLaunchDate: string;
  notes: string;
}

export interface CaseStudyItem {
  id: string;
  originalProjectId: string;
  anonymousTitle: string;
  industry: string;
  turnaroundHours: number;
  performanceMetrics: {
    lighthouse: number;
    fcp: string;
    speedIndex: string;
    conversionLift: string;
  };
  techStack: string[];
  executiveSummary: string;
  architectureHighlights: string[];
  deliveredFor: string;
  createdAt: string;
}

export interface MOUAgreement {
  effectiveDate: string;
  partyA: string;
  partyB: string;
  revenueSplit: {
    dukaanmitraPercent: number; // 60%
    mowglaiPercent: number; // 40%
  };
  clauses: {
    title: string;
    content: string;
  }[];
}
