'use client';

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, XCircle, AlertTriangle, ChevronDown, ChevronRight } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import { AuditResult, AuditCategory, AuditDetail } from './actions';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

interface AuditReportProps {
    result: AuditResult;
}

// ─────────────────────────────────────────────────────────────────
// OFF-SCREEN A4 PDF TEMPLATE
// This component renders exclusively behind the scenes for pristine
// high-resolution PDF generation via html2canvas without tearing UI.
// ─────────────────────────────────────────────────────────────────
const ModelAuditTemplate = React.forwardRef<HTMLDivElement, { result: AuditResult, grade: string }>(({ result, grade }, ref) => {
    return (
        <div style={{ position: 'absolute', left: '-15000px', top: 0 }}>
            {/* Massive A4 high-res canvas container */}
            <div ref={ref} className="w-[1200px] bg-[#0a130e] text-white p-24 flex flex-col relative overflow-hidden" style={{ minHeight: '1697px', fontSmooth: 'always' }}>

                {/* Background Watermarks */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c5a059]/10 rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

                {/* Cover & Header Grid */}
                <div className="relative z-10 flex justify-between items-start border-b-2 border-[#c5a059]/30 pb-12 mb-16">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-black tracking-[0.2em] text-white uppercase">MOWGLAI</span>
                            <span className="text-4xl font-light text-[#c5a059]">Intelligence</span>
                        </div>
                        <h1 className="text-6xl font-light text-[#f8fafc] mt-6">Digital Health<br />Diagnostic Report</h1>
                        <div className="flex items-center gap-3 mt-6">
                            <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm tracking-widest uppercase">Target</span>
                            <span className="text-2xl font-mono text-[#c5a059]">{result.url}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-end text-right">
                        <div className="p-8 border-2 border-[#c5a059] bg-[#c5a059]/10 rounded-3xl flex flex-col items-center justify-center min-w-[200px]">
                            <span className="text-sm text-[#c5a059] uppercase tracking-widest font-bold mb-2">Total Grade</span>
                            <span className="text-8xl font-black text-[#c5a059] leading-none">{grade}</span>
                        </div>
                        <span className="text-white/40 mt-6 text-xl tracking-widest uppercase">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                </div>

                {/* Categories Breakdown */}
                <div className="relative z-10 grid grid-cols-2 gap-10 flex-1">
                    {Object.values(result.categories).map((cat, i) => (
                        <div key={i} className="border border-white/10 bg-white/5 p-8 rounded-3xl">
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-2">{cat.title}</h2>
                                    <p className="text-lg text-white/50">{cat.description}</p>
                                </div>
                                <div className="text-5xl font-black" style={{ color: cat.score >= 80 ? '#c5a059' : cat.score >= 50 ? '#eab308' : '#ef4444' }}>
                                    {cat.score}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {cat.items.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1">
                                            {item.status === 'pass' && <span className="text-green-500 font-bold text-xl">✓</span>}
                                            {item.status === 'fail' && <span className="text-red-500 font-bold text-xl">✗</span>}
                                            {item.status === 'warning' && <span className="text-yellow-500 font-bold text-xl">!</span>}
                                        </div>
                                        <div>
                                            <div className="flex justify-between items-baseline mb-1">
                                                <span className="text-xl font-medium text-white/90 pr-4">{item.title}</span>
                                                <span className="text-lg font-mono text-[#c5a059]">{item.value}</span>
                                            </div>
                                            <p className="text-white/60 text-base">{item.description}</p>
                                            {item.recommendation && <p className="text-blue-400 text-sm mt-2 italic border-l-2 border-blue-400/30 pl-3">Fix: {item.recommendation}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Strip */}
                <div className="relative z-10 mt-16 pt-10 border-t-2 border-white/10 flex justify-between items-end">
                    <div>
                        <p className="text-xl text-white/40 mb-2 font-light">CONFIDENTIAL DIAGNOSTIC EXPORT</p>
                        <p className="text-white/30">Automatically synthesized by Mowglai Intelligence Engine heuristics.</p>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-black tracking-widest uppercase text-white">MOWGLAI</div>
                        <div className="text-[#c5a059] text-xl mt-1 font-mono">https://mowglai.in</div>
                    </div>
                </div>
            </div>
        </div>
    );
});
ModelAuditTemplate.displayName = "ModelAuditTemplate";


const CategoryCard = ({ category, delay }: { category: AuditCategory, delay: number }) => {
    let colorClass = "text-red-500";
    let bgClass = "bg-red-500/10 border-red-500/20";
    if (category.score >= 80) {
        colorClass = "text-[#c5a059]"; // Gold
        bgClass = "bg-[#c5a059]/10 border-[#c5a059]/30";
    } else if (category.score >= 50) {
        colorClass = "text-yellow-500";
        bgClass = "bg-yellow-500/10 border-yellow-500/20";
    }

    return (
        <div className={`rounded-xl border backdrop-blur-md p-6 ${bgClass} animate-in fade-in slide-in-from-bottom-4 duration-700`} style={{ animationDelay: `${delay}ms` }}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className={`text-lg font-bold tracking-tight ${colorClass}`}>{category.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 max-w-[200px]">{category.description}</p>
                </div>
                <div className="flex flex-col items-center">
                    <span className={`text-4xl font-display font-bold ${colorClass}`}>{category.score}</span>
                </div>
            </div>

            <div className="space-y-3 mt-6">
                {category.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm border-t border-white/5 pt-3 first:border-0 first:pt-0">
                        <div className="mt-0.5 shrink-0">
                            {item.status === 'pass' && <CheckCircle className="w-4 h-4 text-green-500" />}
                            {item.status === 'fail' && <XCircle className="w-4 h-4 text-red-500" />}
                            {item.status === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <span className="font-medium text-white/90">{item.title}</span>
                                <span className="font-mono text-xs text-white/60">{item.value}</span>
                            </div>
                            <p className="text-white/50 text-xs mt-0.5">{item.description}</p>
                            {item.recommendation && (
                                <p className="text-blue-400/80 text-xs mt-1 italic">Tip: {item.recommendation}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AuditReport: React.FC<AuditReportProps> = ({ result }) => {
    const screenRef = useRef<HTMLDivElement>(null);
    const pdfRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = async () => {
        if (!pdfRef.current) {
            console.error("pdfRef.current is null!");
            return;
        }

        try {
            const canvas = await html2canvas(pdfRef.current, {
                scale: 1.5, // Crisp resolution without inflating file size
                useCORS: true,
                backgroundColor: '#0d1a12', // Forest Green Background
                logging: false,
                windowWidth: pdfRef.current.scrollWidth,
                windowHeight: pdfRef.current.scrollHeight
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Mowglai_Audit_${new Date().toISOString().split('T')[0]}.pdf`);
        } catch (error) {
            console.error("PDF Generation failed", error);
        }
    };

    const { categories } = result;

    // Calculate specific overall grade
    const totalScore = (categories.seo.score + categories.performance.score + categories.security.score + categories.content.score) / 4;
    const grade = totalScore >= 90 ? "A+"
        : totalScore >= 80 ? "A"
            : totalScore >= 70 ? "B"
                : totalScore >= 60 ? "C"
                    : "D";


    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">

            {/* Controls */}
            <div className="flex justify-end gap-3 print:hidden relative z-50 pointer-events-auto">
                <Button onClick={handleDownloadPDF} className="bg-[#c5a059] hover:bg-[#b08d4b] text-black font-bold relative z-50 cursor-pointer pointer-events-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Report
                </Button>
            </div>

            {/* Hidden High-Res A4 Template specifically for PDF exports */}
            <ModelAuditTemplate ref={pdfRef} result={result} grade={grade} />

            {/* Printable Area (Currently just the responsive screen container) */}
            <div ref={screenRef} className="bg-[#0d1a12] text-white p-8 md:p-12 rounded-3xl shadow-2xl border border-[#c5a059]/20 relative overflow-hidden">

                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start border-b border-[#c5a059]/20 pb-8 mb-8">
                    <div>
                        <div className="text-[#c5a059] text-sm font-bold tracking-widest uppercase mb-2">Mowglai Intelligence</div>
                        <h2 className="text-4xl md:text-5xl font-display font-light text-[#f8fafc]">Digital Health Audit</h2>
                        <div className="mt-4 flex items-center gap-2 text-white/60 text-sm">
                            <span>Target:</span>
                            <span className="text-[#c5a059] font-mono">{result.url}</span>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-0 text-right">
                        <div className="inline-flex flex-col items-center justify-center p-4 bg-[#c5a059]/10 border border-[#c5a059]/30 rounded-2xl backdrop-blur-sm">
                            <span className="text-xs text-[#c5a059] uppercase tracking-wider mb-1">Overall Grade</span>
                            <span className="text-5xl font-display font-bold text-[#c5a059]">{grade}</span>
                        </div>
                        <div className="text-xs text-white/40 mt-2">{new Date().toLocaleString()}</div>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <CategoryCard category={categories.seo} delay={100} />
                    <CategoryCard category={categories.performance} delay={200} />
                    <CategoryCard category={categories.security} delay={300} />
                    <CategoryCard category={categories.content} delay={400} />
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-12 pt-8 border-t border-[#c5a059]/20 flex justify-between items-end text-xs text-white/40">
                    <div className="max-w-md">
                        <p className="mb-2">This report is generated using real-time automated analysis heuristics.</p>
                        <p>Mowglai analyzes performance, SEO health, and security posture.</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-[#c5a059]">MOWGLAI</p>
                        <p>mowglai.in</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuditReport;
