'use client';

import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, CheckCircle, XCircle, AlertTriangle, ShieldCheck, Zap, LineChart, Cpu } from "lucide-react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { AuditResult, AuditCategory } from './actions';
import { motion } from "framer-motion";

interface AuditReportProps {
    result: AuditResult;
}

const CategoryCard = ({ category, delay, icon: Icon }: { category: AuditCategory, delay: number, icon: any }) => {
    let colorHex = "#ef4444"; // Red
    let gradientFrom = "from-red-500/20";
    let gradientTo = "to-red-500/5";
    let borderClass = "border-red-500/20";
    let textClass = "text-red-500";

    if (category.score >= 80) {
        colorHex = "#c5a059"; // Gold
        gradientFrom = "from-[#c5a059]/20";
        gradientTo = "to-[#c5a059]/5";
        borderClass = "border-[#c5a059]/30";
        textClass = "text-[#c5a059]";
    } else if (category.score >= 50) {
        colorHex = "#eab308"; // Yellow
        gradientFrom = "from-yellow-500/20";
        gradientTo = "to-yellow-500/5";
        borderClass = "border-yellow-500/30";
        textClass = "text-yellow-500";
    }

    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (category.score / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay / 1000, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-3xl border bg-black/40 backdrop-blur-xl p-6 md:p-8 overflow-hidden group hover:border-[#c5a059]/50 transition-colors duration-500 ${borderClass}`}
        >
            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-30 pointer-events-none rounded-3xl`} />
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] bg-[${colorHex}]/20`} />

            <div className="relative z-10 flex justify-between items-start mb-8">
                <div className="flex gap-4 items-center">
                    <div className={`p-3 rounded-2xl border bg-black/50 ${borderClass} shadow-lg shadow-[${colorHex}]/10`}>
                        <Icon strokeWidth={1.5} className={`w-6 h-6 ${textClass}`} />
                    </div>
                    <div>
                        <h3 className="text-xl font-display uppercase tracking-widest text-[#f8fafc]">{category.title}</h3>
                        <p className="text-xs text-white/50 tracking-wider font-light mt-1">{category.description}</p>
                    </div>
                </div>

                {/* Score Circular Guage */}
                <div className="relative flex items-center justify-center shrink-0 w-[70px] h-[70px]">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="35" cy="35" r={radius} className="fill-none stroke-white/10" strokeWidth="4" />
                        <motion.circle
                            cx="35" cy="35" r={radius}
                            className="fill-none drop-shadow-md"
                            stroke={colorHex}
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset }}
                            transition={{ duration: 1.5, delay: (delay / 1000) + 0.3, ease: "easeOut" }}
                            style={{ strokeDasharray: circumference }}
                        />
                    </svg>
                    <span className={`text-xl font-display font-bold tabular-nums ${textClass}`}>{category.score}</span>
                </div>
            </div>

            <div className="relative z-10 space-y-4">
                {category.items.map((item, idx) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (delay / 1000) + 0.3 + (idx * 0.1) }}
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                    >
                        <div className="mt-0.5 shrink-0 bg-black/50 p-1.5 rounded-full border border-white/10">
                            {item.status === 'pass' && <CheckCircle className="w-3.5 h-3.5 text-green-500" />}
                            {item.status === 'fail' && <XCircle className="w-3.5 h-3.5 text-red-500" />}
                            {item.status === 'warning' && <AlertTriangle className="w-3.5 h-3.5 text-yellow-500" />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-medium text-white/90 text-sm tracking-wide">{item.title}</span>
                                <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-white/70">{item.value}</span>
                            </div>
                            <p className="text-white/40 text-xs font-light leading-relaxed">{item.description}</p>
                            {item.recommendation && (
                                <div className="mt-2 pt-2 border-t border-white/5 flex gap-2 items-start">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a059] shrink-0 mt-0.5">FIX</span>
                                    <p className="text-[#c5a059]/80 text-xs font-light">{item.recommendation}</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const AuditReport: React.FC<AuditReportProps> = ({ result }) => {
    const reportRef = useRef<HTMLDivElement>(null);

    const handleDownloadPDF = async () => {
        if (!reportRef.current) return;

        try {
            const canvas = await html2canvas(reportRef.current, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#050a06', // Extremely dark green/black
                windowWidth: reportRef.current.scrollWidth,
                windowHeight: reportRef.current.scrollHeight,
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            pdf.save(`Mowglai_Diagnostic_${new Date().toISOString().split('T')[0]}.pdf`);
        } catch (error) {
            console.error("PDF Generation failed:", error);
        }
    };

    const { categories } = result;

    const totalScore = (categories.seo.score + categories.performance.score + categories.security.score + categories.content.score) / 4;
    const grade = totalScore >= 90 ? "A+" : totalScore >= 80 ? "A" : totalScore >= 70 ? "B" : totalScore >= 60 ? "C" : "D";

    return (
        <div className="w-full max-w-[1200px] mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500 pb-20">

            {/* Controls */}
            <div className="flex justify-end gap-3 print:hidden">
                <Button
                    onClick={handleDownloadPDF}
                    className="group relative h-12 bg-transparent hover:bg-transparent border border-[#c5a059] text-[#c5a059] overflow-hidden rounded-full px-8"
                >
                    <div className="absolute inset-0 bg-[#c5a059] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-black font-bold uppercase tracking-widest text-xs">
                        <Download className="w-4 h-4" strokeWidth={2} />
                        Export Diagnostic Data
                    </span>
                </Button>
            </div>

            {/* Printable Area */}
            <div ref={reportRef} className="bg-gradient-to-b from-[#0a120c] to-[#050806] text-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-white/5 relative overflow-hidden">

                {/* Tech Grids */}
                <div className="absolute inset-0 w-full h-full opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                {/* Ambient Orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-10 mb-10 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#c5a059]/30 bg-[#c5a059]/10 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
                            <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.2em] uppercase">Mowglai Diagnostic Interface</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-light text-[#f8fafc] tracking-tight leading-none mb-4">
                            System <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Analysis</span>
                        </h2>
                        <div className="flex items-center gap-3 text-white/60 text-sm">
                            <span className="text-[10px] uppercase tracking-widest font-mono border border-white/10 px-2 py-1 rounded">Target URL</span>
                            <span className="text-[#c5a059] font-mono tracking-tight">{result.url}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right flex flex-col items-end justify-center">
                            <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">{new Date().toLocaleString()}</span>
                            <span className="text-[10px] text-[#c5a059] uppercase tracking-[0.2em]">Overall Grade</span>
                        </div>
                        <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#c5a059]/20 to-transparent border border-[#c5a059]/30 rounded-full backdrop-blur-md shadow-[0_0_30px_rgba(197,160,89,0.2)]">
                            <span className="text-5xl font-display font-black text-[#c5a059]">{grade}</span>
                        </div>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <CategoryCard category={categories.performance} icon={Zap} delay={100} />
                    <CategoryCard category={categories.seo} icon={LineChart} delay={200} />
                    <CategoryCard category={categories.security} icon={ShieldCheck} delay={300} />
                    <CategoryCard category={categories.content} icon={Cpu} delay={400} />
                </div>

                {/* Footer Logo overlay */}
                <div className="relative z-10 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/40 gap-4">
                    <p className="max-w-md text-center md:text-left leading-relaxed">
                        Automated AI heuristic analysis. <br className="hidden md:block" /> Performance, SEO health, and architecture posture generated by Mowglai Intelligence.
                    </p>
                    <div className="flex flex-col items-center md:items-end font-bold text-[#c5a059]">
                        <span>MOWGLAI DIGITAL</span>
                        <span className="text-white/30 font-mono tracking-widest">mowglai.in</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuditReport;

