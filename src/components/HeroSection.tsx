"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HERO_COPY = {
    en: {
        badge: "Websites • Automation • AI Systems",
        titleTop: "Simple Websites.",
        titleAccent: "Smart Automation.",
        subtitle:
            "We build fast, clean websites and custom workflow automations that capture leads, reply to customers, and save hours every day.",
        primaryCta: "Start a Project",
        secondaryCta: "Explore Templates",
        scrollLabel: "See how we automate",
    },
    hi: {
        badge: "वेबसाइट • ऑटोमेशन • AI सिस्टम",
        titleTop: "सरल वेबसाइट।",
        titleAccent: "स्मार्ट ऑटोमेशन।",
        subtitle:
            "हम तेज़, आधुनिक वेबसाइट और कस्टम वर्कफ़्लो ऑटोमेशन बनाते हैं जो लीड कैप्चर करते हैं और रोज़ाना आपका समय बचाते हैं।",
        primaryCta: "प्रोजेक्ट शुरू करें",
        secondaryCta: "टेम्पलेट्स देखें",
        scrollLabel: "ऑटोमेशन देखें",
    },
    es: {
        badge: "Sitios Web • Automatización • Sistemas IA",
        titleTop: "Sitios Web Simples.",
        titleAccent: "Automatización Inteligente.",
        subtitle:
            "Creamos sitios web rápidos y automatizaciones a medida que captan clientes, responden consultas y ahorran horas cada día.",
        primaryCta: "Iniciar Proyecto",
        secondaryCta: "Ver Plantillas",
        scrollLabel: "Ver automatización",
    },
    fr: {
        badge: "Sites Web • Automatisation • Systèmes IA",
        titleTop: "Sites Web Simples.",
        titleAccent: "Automatisation Intelligente.",
        subtitle:
            "Nous concevons des sites rapides et des automatisations sur mesure qui capturent vos prospects et gagnent des heures chaque jour.",
        primaryCta: "Démarrer un Projet",
        secondaryCta: "Voir les Modèles",
        scrollLabel: "Découvrir l'automatisation",
    },
    ja: {
        badge: "Webサイト • 自動化 • AIシステム",
        titleTop: "シンプルなWeb。",
        titleAccent: "スマートな自動化。",
        subtitle:
            "高速で洗練されたWebサイトとカスタム業務自動化を構築し、問い合わせ対応や日々の作業時間を大幅に削減します。",
        primaryCta: "プロジェクトを始める",
        secondaryCta: "テンプレートを見る",
        scrollLabel: "自動化の詳細を見る",
    },
} as const;

const HeroSection = () => {
    const { language } = useLanguage();
    const copy = HERO_COPY[language as keyof typeof HERO_COPY] ?? HERO_COPY.en;

    return (
        <section
            id="home"
            className="relative w-full min-h-[100dvh] z-10 flex flex-col items-center justify-center px-6 py-24 md:py-32"
        >
            <div className="container mx-auto max-w-4xl text-center flex flex-col items-center gap-6 md:gap-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium tracking-wider uppercase text-primary">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{copy.badge}</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-foreground leading-[1.08]">
                    {copy.titleTop}
                    <span className="block text-primary mt-1">{copy.titleAccent}</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed font-normal">
                    {copy.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base tracking-wide hover:opacity-90 transition-all shadow-lg"
                    >
                        <span>{copy.primaryCta}</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                        href="/templates"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-background/60 backdrop-blur-md border border-foreground/15 text-foreground font-semibold text-sm md:text-base tracking-wide hover:border-primary/50 hover:text-primary transition-all"
                    >
                        <span>{copy.secondaryCta}</span>
                    </Link>
                </div>
            </div>

            <a
                href="#automation-section"
                aria-label={copy.scrollLabel}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-foreground/50 hover:text-primary transition-colors"
            >
                <span className="hidden sm:inline">{copy.scrollLabel}</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
        </section>
    );
};

export default HeroSection;
