'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
    Download, CheckCircle2, XCircle, AlertTriangle, Shield, Globe,
    Zap, Search, ChevronDown, ChevronUp, ExternalLink
} from "lucide-react";
import { AuditResult, AuditCategory } from './actions';
import { motion, AnimatePresence } from "framer-motion";

interface AuditReportProps {
    result: AuditResult;
}

/* ── Colour helpers ──────────────────────────────────────────── */
function scoreColor(score: number) {
    if (score >= 80) return { text: 'text-[#c5a059]', bg: 'bg-[#c5a059]', border: 'border-[#c5a059]/40', glow: 'shadow-[0_0_24px_rgba(197,160,89,0.3)]' };
    if (score >= 50) return { text: 'text-amber-500', bg: 'bg-amber-500', border: 'border-amber-500/40', glow: 'shadow-[0_0_20px_rgba(245,158,11,0.25)]' };
    return { text: 'text-rose-500', bg: 'bg-rose-500', border: 'border-rose-500/40', glow: 'shadow-[0_0_20px_rgba(244,63,94,0.25)]' };
}

function scoreLabel(score: number) {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Needs Work';
    return 'Critical';
}

/* ── Compact category tile (collapsed by default) ────────────── */
const CategoryTile = ({
    category, icon: Icon, delay,
}: {
    category: AuditCategory;
    icon: React.ElementType;
    delay: number;
}) => {
    const [open, setOpen] = useState(false);
    const col = scoreColor(category.score);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.12 }}
            className={`rounded-2xl border ${col.border} bg-foreground/[0.03] backdrop-blur overflow-hidden`}
        >
            {/* ── Tile header (always visible) ── */}
            <div
                className="flex items-center gap-4 p-5 cursor-pointer select-none hover:bg-foreground/[0.04] transition-colors"
                onClick={() => setOpen(v => !v)}
            >
                {/* Icon + score mini-bar */}
                <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border ${col.border} bg-foreground/[0.04]`}>
                    <Icon className={`w-6 h-6 ${col.text}`} />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-base font-semibold text-foreground/90 truncate">{category.title}</span>
                        <span className={`text-sm font-bold ${col.text}`}>{category.score}/100</span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 w-full rounded-full bg-foreground/10 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${category.score}%` }}
                            transition={{ duration: 0.9, delay: delay * 0.12 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className={`h-full rounded-full ${col.bg}`}
                        />
                    </div>
                </div>

                {/* Status pill */}
                <span className={`shrink-0 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${col.border} ${col.text} hidden sm:block`}>
                    {scoreLabel(category.score)}
                </span>

                {/* Chevron */}
                <div className={`shrink-0 ${col.text} ml-2`}>
                    {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </div>

            {/* ── Expanded detail panel ── */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                        data-pdf-expand="true"
                    >
                        <div className="px-5 pb-5 space-y-3 border-t border-foreground/[0.06] pt-4">
                            <p className="text-sm text-foreground/50 italic font-light mb-4">{category.description}</p>

                            {category.items.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-foreground/[0.03] transition-colors group/item">
                                    <div className="mt-0.5 shrink-0">
                                        {item.status === 'pass' && <CheckCircle2 className="w-5 h-5 text-[#c5a059]" />}
                                        {item.status === 'fail' && <XCircle className="w-5 h-5 text-rose-500" />}
                                        {item.status === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                                            <span className="text-sm font-semibold text-foreground/80">{item.title}</span>
                                            <span className="font-mono text-xs text-foreground/60 bg-foreground/5 px-2 py-0.5 rounded-full w-fit">{item.value}</span>
                                        </div>
                                        <p className="text-sm text-foreground/60 leading-relaxed mt-1">{item.description}</p>
                                        {item.recommendation && (
                                            <p className="mt-2 text-xs text-blue-500/80 font-medium italic">
                                                💡 {item.recommendation}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

/* ── Grade ring ──────────────────────────────────────────────── */
const GradeDisplay = ({ grade, score }: { grade: string; score: number }) => {
    const col = scoreColor(score);
    const circumference = 2 * Math.PI * 40;
    const dashOffset = circumference - (score / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className={`relative w-36 h-36 ${col.glow} rounded-full`}>
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" className="text-foreground/[0.07]" strokeWidth="8" />
                    <motion.circle
                        cx="50" cy="50" r="40" fill="none"
                        stroke="currentColor" strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: dashOffset }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        className={col.text}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`text-5xl font-display font-bold leading-none ${col.text}`}>{grade}</span>
                    <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest mt-1">{score}%</span>
                </div>
            </div>
            <span className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-foreground/40">Overall Grade</span>
        </div>
    );
};

/* ══════════════════════════════════════════════════════════════ */
const AuditReport: React.FC<AuditReportProps> = ({ result }) => {
    const reportRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [pdfLoading, setPdfLoading] = useState(false);

    const { categories } = result;
    const totalScore = Math.round(
        (categories.seo.score + categories.performance.score +
            categories.security.score + categories.content.score) / 4
    );

    const getGrade = (s: number) => {
        if (s >= 90) return 'A+';
        if (s >= 80) return 'A';
        if (s >= 70) return 'B';
        if (s >= 60) return 'C';
        return 'D';
    };

    const grade = getGrade(totalScore);

    /* ── PDF generation ── */
    const handleDownloadPDF = async () => {
        if (!reportRef.current || pdfLoading) return;
        setPdfLoading(true);
        try {
            const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
                import('html2canvas'),
                import('jspdf'),
            ]);

            // Temporarily expand all tiles to capture full content
            const tiles = reportRef.current.querySelectorAll('[data-pdf-expand]');
            const prevDisplays: string[] = [];
            tiles.forEach((el, i) => {
                const el2 = el as HTMLElement;
                prevDisplays[i] = el2.style.display;
                el2.style.display = 'block';
            });

            const canvas = await html2canvas(reportRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: window.matchMedia('(prefers-color-scheme: dark)').matches ? '#1a2012' : '#FDF3E7',
                logging: false,
            });

            // Restore
            tiles.forEach((el, i) => {
                (el as HTMLElement).style.display = prevDisplays[i];
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
            const pageW = pdf.internal.pageSize.getWidth();
            const pageH = pdf.internal.pageSize.getHeight();
            const imgH = (canvas.height * pageW) / canvas.width;

            let yPos = 0;
            while (yPos < imgH) {
                if (yPos > 0) pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, -yPos, pageW, imgH);
                yPos += pageH;
            }

            pdf.save(`Mowglai_Audit_${result.url.replace(/https?:\/\//, '').split('/')[0]}_${new Date().toISOString().split('T')[0]}.pdf`);
        } catch (err) {
            console.error('PDF generation failed', err);
        } finally {
            setPdfLoading(false);
        }
    };

    return (
        <div ref={reportRef} className="w-full space-y-6">

            {/* ── Hero Summary Row ── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur w-full"
            >
                {/* Grade display */}
                <div className="flex justify-center w-full md:w-auto shrink-0">
                    <GradeDisplay grade={grade} score={totalScore} />
                </div>

                {/* Score details */}
                <div className="flex-1 w-full flex flex-col justify-center space-y-5 text-center md:text-left">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] font-medium text-foreground/40 mb-1">Audited URL</p>
                        <p className="text-base font-semibold text-foreground break-all">{result.url}</p>
                    </div>

                    {/* Mini score grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto md:mx-0 w-full">
                        {[
                            { label: 'Performance', s: categories.performance.score },
                            { label: 'SEO', s: categories.seo.score },
                            { label: 'Security', s: categories.security.score },
                            { label: 'Content', s: categories.content.score },
                        ].map(({ label, s }) => {
                            const c = scoreColor(s);
                            return (
                                <div key={label} className={`flex items-center justify-between px-4 py-2 rounded-xl border ${c.border} bg-foreground/[0.02]`}>
                                    <span className="text-xs font-semibold text-foreground/60">{label}</span>
                                    <span className={`text-sm font-black ${c.text}`}>{s}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* ── Metadata ── */}
                    <p className="text-xs text-foreground/30 font-mono hidden md:block">
                        Analyzed · {new Date().toLocaleString()} · Mowglai AI v2.4
                    </p>
                </div>

                {/* ── CTA Buttons ── */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto mt-4 md:mt-0 justify-center items-stretch md:items-center">
                    <Button
                        onClick={handleDownloadPDF}
                        disabled={pdfLoading}
                        className="bg-foreground/5 hover:bg-[#c5a059] text-foreground hover:text-black border border-foreground/10 hover:border-[#c5a059] transition-all duration-300 rounded-full px-6 h-12 text-sm font-semibold w-full sm:flex-1 md:w-auto lg:w-48"
                    >
                        <Download className="w-4 h-4 mr-2 shrink-0" />
                        {pdfLoading ? 'Generating…' : 'Export PDF'}
                    </Button>
                    <Button
                        onClick={() => router.push('/contact')}
                        className="bg-[#c5a059] hover:bg-[#a8883d] text-black font-bold rounded-full px-6 h-12 text-sm transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] w-full sm:flex-1 md:w-auto lg:w-48"
                    >
                        <ExternalLink className="w-4 h-4 mr-2 shrink-0" />
                        Talk to Expert
                    </Button>
                </div>
            </motion.div>

            {/* ── Category tiles ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CategoryTile category={categories.performance} icon={Zap} delay={1} />
                <CategoryTile category={categories.seo} icon={Globe} delay={2} />
                <CategoryTile category={categories.security} icon={Shield} delay={3} />
                <CategoryTile category={categories.content} icon={Search} delay={4} />
            </div>

            {/* ── Consultation banner ── */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-3xl border border-[#c5a059]/20 bg-gradient-to-r from-[#c5a059]/10 to-transparent"
            >
                <div>
                    <h4 className="font-display font-black text-foreground text-lg mb-1">Ready to fix these issues?</h4>
                    <p className="text-sm text-foreground/50 font-medium">Our architects will prioritize and resolve every finding.</p>
                </div>
                <Button
                    onClick={() => router.push('/contact')}
                    className="shrink-0 bg-[#c5a059] hover:bg-[#a8883d] text-black font-bold rounded-full px-8 h-12 text-sm transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                >
                    Get in Touch →
                </Button>
            </motion.div>

            {/* ── Footer ── */}
            <div className="flex items-center justify-between pt-6 border-t border-foreground/5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/30">
                <span>Mowglai Intelligence Report · © 2026</span>
                <span className="text-[#c5a059]">mowglai.in</span>
            </div>
        </div>
    );
};

export default AuditReport;
