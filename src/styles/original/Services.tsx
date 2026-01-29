"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const services = [
    {
        id: "01",
        category: "Web Design",
        title: "Aesthetic Excellence",
        desc: "Visual narratives that merge artistic expression with functional precision. Crafting stunning, responsive interfaces."
    },
    {
        id: "02",
        category: "Development",
        title: "Robust Engineering",
        desc: "Scalable, secure, and lightning-fast architectures. Building the solid foundations that drive digital growth."
    },
    {
        id: "03",
        category: "Redesign",
        title: "Digital Evolution",
        desc: "Breathing new life into legacy platforms. Enhancing usability, speed, and security for the modern era."
    },
    {
        id: "04",
        category: "Database",
        title: "Data Intelligence",
        desc: "Sophisticated database solutions ensuring information is organized, accessible, and impenetrable."
    },
    {
        id: "05",
        category: "Strategy",
        title: "Global Reach",
        desc: "Positioning your brand on the global map. Ensuring you resonate with audiences across cultures and borders."
    },
    {
        id: "06",
        category: "Intelligence",
        title: "Intelligent Systems",
        desc: "Empowering platforms with next-gen AI. From smart chatbots to predictive analytics and automation."
    }
];

export default function OriginalServices() {
    const { t } = useLanguage();
    const { Services: s } = t;

    const servicesData = [
        { id: "01", ...s.cards.webDesign },
        { id: "02", ...s.cards.development },
        { id: "03", ...s.cards.redesign },
        { id: "04", ...s.cards.database },
        { id: "05", ...s.cards.strategy },
        { id: "06", ...s.cards.ai }
    ];

    return (
        <PageLayout>
            <div className="bg-transparent text-foreground min-h-screen px-4 md:px-24 py-32 font-sans relative overflow-hidden">

                {/* Background Decor - Immersive Pulses */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-20 -mt-20 pointer-events-none animate-pookie-float" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -ml-20 -mb-20 pointer-events-none animate-pulse" />

                {/* Header Section - Massive Regular Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 mt-12 md:mt-20 mb-32 flex flex-col md:flex-row justify-between items-end border-b-2 border-primary/20 pb-16 gap-12"
                >
                    <div>
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-primary block mb-6">{s.hero.subtitle}</span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-tight uppercase tracking-tighter">
                            Our <br /> <span className="text-primary italic">{s.hero.title}</span>
                        </h1>
                    </div>
                    <div className="text-left md:text-right max-w-md md:pb-4">
                        <p className="text-lg md:text-xl font-body leading-relaxed text-muted-foreground italic">
                            {s.hero.description}
                        </p>
                    </div>
                </motion.div>

                {/* Services Stack - Immersive List */}
                <div className="relative z-10 space-y-12">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 md:p-16 rounded-[2.5rem] bg-secondary/10 border border-primary/10 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-700 backdrop-blur-xl overflow-hidden"
                        >
                            {/* Decorative ID */}
                            <div className="lg:col-span-1">
                                <span className="text-3xl md:text-4xl font-display font-black text-primary/20 group-hover:text-primary transition-colors duration-500">
                                    /{service.id}
                                </span>
                            </div>

                            {/* Service Content */}
                            <div className="lg:col-span-11 grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/60 mb-3 block">{service.category}</span>
                                        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase group-hover:text-primary transition-colors duration-500 leading-tight">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-lg md:text-xl font-body leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                                        {service.description}
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-primary group-hover:gap-6 transition-all mt-4"
                                    >
                                        Initiate Development <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Details / Features List */}
                                <div className="bg-primary/5 rounded-3xl p-8 border border-primary/5 group-hover:border-primary/20 transition-colors">
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-6">Expertise Stack</h4>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="flex items-center gap-4 text-sm font-body tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">
                                                <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Background Watermark */}
                            <div className="absolute top-1/2 right-12 -translate-y-1/2 text-[15vw] font-display font-black text-primary/5 pointer-events-none select-none italic group-hover:scale-110 transition-transform duration-1000 hidden lg:block">
                                {service.id}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Methodology Section - Enhanced */}
                <div className="relative z-10 mt-48 md:mt-64 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-16">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.5em] text-primary font-bold block mb-6">Our Protocol</span>
                            <h3 className="text-5xl md:text-7xl font-display font-black uppercase leading-tight tracking-tighter">
                                The <span className="text-primary italic">Process</span>
                            </h3>
                        </div>

                        <div className="space-y-12">
                            {[
                                { t: "Immersion", d: "First, we inhabit your brand. Understanding the nuances of your vision and the friction of your challenges." },
                                { t: "Reduction", d: "We strip away the noise. Only what is necessary survives the transition from idea to artifact." },
                                { t: "Refinement", d: "Iteration is constant. We polish every interaction until it feels effortless." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 20 }}
                                    className="flex gap-8 group/item"
                                >
                                    <div className="flex flex-col items-center">
                                        <span className="font-display font-black text-4xl text-primary/20 group-hover/item:text-primary transition-colors">0{i + 1}</span>
                                        <div className="w-px h-full bg-primary/10 mt-4 group-hover/item:bg-primary/40 transition-colors" />
                                    </div>
                                    <div className="pb-8">
                                        <h4 className="font-display font-bold uppercase tracking-widest text-xl mb-4 text-foreground group-hover/item:text-primary transition-colors">{item.t}</h4>
                                        <p className="font-body text-muted-foreground leading-relaxed text-lg max-w-md group-hover/item:text-foreground transition-colors">{item.d}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-square rounded-[4rem] overflow-hidden border-2 border-primary/20 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)] group bg-secondary/10 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-30 mix-blend-overlay group-hover:opacity-50 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center text-[25vw] font-display font-black text-primary opacity-[0.03] select-none pointer-events-none group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-1000 italic">M</div>
                        <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-background/80 to-transparent">
                            <p className="text-2xl font-display italic text-foreground leading-tight uppercase tracking-widest">
                                "Precision is the <span className="text-primary">primary</span> directive."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Unified CTA Blocks */}
                <div className="relative z-10 mt-48 md:mt-64 py-32 border-t border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <motion.div whileHover={{ y: -10 }} className="flex flex-col items-start gap-8 group">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/60">Portfolio</span>
                            <Link href="/explore" className="block">
                                <h4 className="text-5xl md:text-7xl font-display font-black uppercase leading-none group-hover:text-primary transition-colors flex items-center gap-6">
                                    Explore <ArrowRight className="w-12 h-12 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500" strokeWidth={3} />
                                </h4>
                            </Link>
                            <p className="text-lg text-muted-foreground uppercase tracking-widest leading-relaxed">
                                View our latest digital artifacts, systems, and architectural experiments.
                            </p>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="flex flex-col items-end text-right gap-8 group">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/60">Collaboration</span>
                            <Link href="/contact" className="block">
                                <h4 className="text-5xl md:text-7xl font-display font-black uppercase leading-none group-hover:text-primary transition-colors flex items-center justify-end gap-6 text-right">
                                    <ArrowRight className="w-12 h-12 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500 rotate-180 md:rotate-0" strokeWidth={3} /> Contact
                                </h4>
                            </Link>
                            <p className="text-lg text-muted-foreground uppercase tracking-widest leading-relaxed">
                                Initiate a dialogue and start building your custom digital hegemony.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Final Footer Decor */}
                <div className="mt-48 opacity-20 text-center relative z-10">
                    <span className="text-[15vw] font-display font-black tracking-tighter uppercase opacity-5 select-none pointer-events-none">MOWGLAI</span>
                </div>
            </div>
        </PageLayout>
    );
}
