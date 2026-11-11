"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Sparkles,
  X,
  ChevronUp,
  ExternalLink,
  Zap,
  Heart,
  Compass,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Sun,
  Moon,
  Coins,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useCurrency, CurrencyType } from "@/context/CurrencyContext";
import { useLanguage, Language } from "@/context/LanguageContext";
import { useTheme } from "next-themes";

// OpenPets v1 Spritesheet format (1536x1872: 8 columns x 9 rows of 192x208px frames)
const FRAME_WIDTH = 192;
const FRAME_HEIGHT = 208;
const NUM_COLS = 8;

const ROW_MAP = {
  idle: 0,
  walkRight: 1,
  walkLeft: 2,
  wave: 3,
  jump: 4,
  error: 5,
  thinking: 6,
  runAlt: 7,
  celebrate: 8,
} as const;

type PetState = keyof typeof ROW_MAP;

interface ValueThought {
  id: string;
  badge: string;
  title: string;
  thought: string;
  actionText: string;
  actionHref: string;
}

// Consumer-focused, client-friendly insights (NO internal engineering/agent jargon)
const CONSUMER_VALUE_STREAM: ValueThought[] = [
  {
    id: "why-mowglai",
    badge: "💡 Why Mowglai",
    title: "Fast, High-Converting Websites",
    thought: "Unlike traditional agencies that take months, Mowglai builds premium, high-speed websites tailored for your business and launches in just 5 days.",
    actionText: "Chat on WhatsApp",
    actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business."
  },
  {
    id: "no-lockins",
    badge: "🚫 Zero Agency Traps",
    title: "100% Code Ownership",
    thought: "Traditional agencies trap you with costly monthly retainers and surprise fees. With Mowglai, you get fixed upfront pricing and 100% full ownership of your code.",
    actionText: "Explore Plans",
    actionHref: "/investment"
  },
  {
    id: "gmb-local",
    badge: "📍 Local Growth",
    title: "48-Hour Google Maps 3-Pack",
    thought: "Dominate local searches! We optimize your Google Business Profile so local customers nearby find you and call you directly within 48 hours.",
    actionText: "Claim 48h GMB",
    actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20tell%20me%20about%20the%2048-Hour%20Google%20Maps%20setup."
  },
  {
    id: "pricing",
    badge: "💎 Unbeatable Pricing",
    title: "Starter Plans from ₹5,000 ($55)",
    thought: "Get a modern, mobile-responsive business website with SEO and contact setup starting at just ₹5,000 INR / $55 USD flat. No monthly maintenance bill.",
    actionText: "View Packages",
    actionHref: "/investment"
  },
  {
    id: "fast-delivery",
    badge: "⚡ Instant Loading Speed",
    title: "Convert Visitors to Buyers",
    thought: "Over 70% of visitors leave slow websites. Mowglai websites load instantly on any mobile device, giving your customers an effortless buying experience.",
    actionText: "Free Website Audit",
    actionHref: "/ai-analyze"
  },
  {
    id: "direct-support",
    badge: "🤝 1-on-1 Support",
    title: "Real Humans, No Runaround",
    thought: "Skip confusing ticket queues. You work directly with our engineering team on WhatsApp and phone for quick updates and dedicated guidance.",
    actionText: "Talk to Us",
    actionHref: "https://wa.me/919452476331"
  }
];

interface QuickQnA {
  q: string;
  a: string;
  actionText?: string;
  actionHref?: string;
}

const CONSUMER_FAQS: QuickQnA[] = [
  {
    q: "Why Mowglai over an agency?",
    a: "Agencies charge heavy monthly retainers and drag projects for months. Mowglai gives you transparent flat rates starting at ₹5,000 ($55), 5-day delivery, and 100% ownership.",
    actionText: "See Pricing",
    actionHref: "/investment"
  },
  {
    q: "What are your starter plans?",
    a: "Starter Web: ₹5,000 INR ($55 USD) • Scale Multi-page: ₹9,999 INR ($110 USD) • Full E-Commerce: ₹12,999 INR ($149 USD). Transparent, fixed rates.",
    actionText: "Compare Packages",
    actionHref: "/investment"
  },
  {
    q: "How fast is delivery?",
    a: "Starter websites are live in 5 business days with full mobile responsiveness, contact forms, domain & SSL configuration.",
    actionText: "WhatsApp Lead",
    actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I%20want%20to%20know%20about%20delivery%20timeline."
  },
  {
    q: "Google Maps 48h setup?",
    a: "We verify and optimize your Google Business Profile to rank in the Local 3-Pack so nearby customers find you and call you directly.",
    actionText: "Book GMB Setup",
    actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I%20want%20to%20rank%20on%20Google%20Maps%20in%2048%20hours."
  }
];

export default function InteractivePet() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Global Contexts: Currency, Language, Theme
  const { currency, setCurrency } = useCurrency();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const [isLoaded, setIsLoaded] = useState(false);
  const [petState, setPetState] = useState<PetState>("idle");
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<"advice" | "contact" | "settings">("advice");
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

  // Smooth position physics
  const [posX, setPosX] = useState(24);
  const [targetX, setTargetX] = useState(24);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [speed, setSpeed] = useState<"walk" | "run">("walk");

  // Value stream state
  const [currentThought, setCurrentThought] = useState<ValueThought>(CONSUMER_VALUE_STREAM[0]);
  const [streamProgress, setStreamProgress] = useState(100);
  const [thoughtIndex, setThoughtIndex] = useState(0);

  // Section & Scroll tracking
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Welcome");

  const lastScrollY = useRef(0);
  const scrollEndTimer = useRef<NodeJS.Timeout | null>(null);
  const autoPopTimer = useRef<NodeJS.Timeout | null>(null);
  const autoHideTimer = useRef<NodeJS.Timeout | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const phoneNumber = "919452476331";
  const email = "amitsharmaanxt@gmail.com";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi Mowglai, I'm interested in your web services. I'd like a quote and next steps.")}`;
  const telUrl = `tel:+${phoneNumber}`;
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent("Inquiry regarding Mowglai Services")}`;

  // 1. Load Spritesheet
  useEffect(() => {
    const img = new Image();
    img.src = "/pet/spritesheet.webp";
    img.onload = () => {
      imageRef.current = img;
      setIsLoaded(true);
    };
  }, []);

  // 2. Sprite Canvas Animation Loop (Cycles 8 frames at 8-12 FPS)
  useEffect(() => {
    if (!isLoaded || isMinimized) return;

    let frame = 0;
    let timer: NodeJS.Timeout;

    const render = () => {
      const canvas = canvasRef.current;
      const img = imageRef.current;
      if (!canvas || !img) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const row = ROW_MAP[petState] ?? 0;
      const col = frame % NUM_COLS;

      const sx = col * FRAME_WIDTH;
      const sy = row * FRAME_HEIGHT;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = false;

      ctx.drawImage(
        img,
        sx,
        sy,
        FRAME_WIDTH,
        FRAME_HEIGHT,
        0,
        0,
        canvas.width,
        canvas.height
      );

      frame = (frame + 1) % NUM_COLS;
      const fpsDelay = petState === "runAlt" ? 75 : 120;
      timer = setTimeout(render, fpsDelay);
    };

    render();
    return () => clearTimeout(timer);
  }, [isLoaded, petState, isMinimized]);

  // 3. Smooth Position Interpolation (rAF-based delta-time lerp)
  const posRef = useRef(24);
  useEffect(() => {
    posRef.current = posX;
  }, [posX]);

  useEffect(() => {
    if (isMinimized) return;

    let rafId = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;

      const current = posRef.current;
      const diff = targetX - current;

      if (Math.abs(diff) >= 3) {
        const step = (speed === "run" ? 8 : 3.5) * (dt / 16.67);
        posRef.current = diff > 0 ? current + Math.min(diff, step) : current - Math.min(Math.abs(diff), step);
        setPosX(Math.round(posRef.current));
      } else if (
        (petState === "walkRight" || petState === "walkLeft" || petState === "runAlt") &&
        Math.abs(targetX - current) < 3
      ) {
        setPetState("idle");
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [targetX, petState, speed, isMinimized]);

  // 4. Intelligent Empty-Space Locator (Collision & Text Overlap Avoidance)
  const findSafeEmptySpace = useCallback((preferredRatio: number) => {
    if (typeof window === "undefined") return 24;

    const winWidth = window.innerWidth;
    const safeLeft = 24;
    // Keep pet within clean boundary
    const safeRight = Math.max(safeLeft + 60, winWidth - 140);

    // On wide desktop screens (>1280px), centered content leaves wide empty gutters!
    if (winWidth > 1280) {
      const margin = Math.max(28, (winWidth - 1180) / 2 - 80);
      if (preferredRatio < 0.5) {
        return Math.round(Math.min(margin, 140));
      } else {
        return Math.round(Math.max(winWidth - margin - 80, safeRight));
      }
    }

    return preferredRatio > 0.5 ? safeRight : safeLeft;
  }, []);

  // 5. Thought Auto-Pop & Auto-Fade Controller
  const triggerThoughtPopup = useCallback((thought: ValueThought, durationMs = 7500) => {
    setCurrentThought(thought);
    setIsBubbleVisible(true);
    setStreamProgress(100);

    if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
    if (progressInterval.current) clearInterval(progressInterval.current);

    const stepTime = 100;
    const decrement = 100 / (durationMs / stepTime);
    progressInterval.current = setInterval(() => {
      setStreamProgress((prev) => {
        if (prev <= decrement) {
          clearInterval(progressInterval.current!);
          return 0;
        }
        return prev - decrement;
      });
    }, stepTime);

    autoHideTimer.current = setTimeout(() => {
      setIsBubbleVisible(false);
      if (progressInterval.current) clearInterval(progressInterval.current);
    }, durationMs);
  }, []);

  // Auto-rotate value thoughts every 18 seconds
  useEffect(() => {
    if (isMinimized) return;

    const scheduleNextThought = () => {
      autoPopTimer.current = setTimeout(() => {
        const nextIdx = (thoughtIndex + 1) % CONSUMER_VALUE_STREAM.length;
        const nextThought = CONSUMER_VALUE_STREAM[nextIdx];
        setThoughtIndex(nextIdx);
        triggerThoughtPopup(nextThought, 8000);
        scheduleNextThought();
      }, 18000);
    };

    scheduleNextThought();
    return () => {
      if (autoPopTimer.current) clearTimeout(autoPopTimer.current);
      if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [thoughtIndex, triggerThoughtPopup, isMinimized]);

  // 6. Gesture & Scroll Listener (Wheel, Touch, Scroll)
  useEffect(() => {
    const handleScrollOrGesture = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100))) : 0;
      setScrollProgress(progress);

      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      // Section tracking
      if (progress < 25) {
        setActiveSection("Overview");
      } else if (progress < 50) {
        setActiveSection("Solutions");
      } else if (progress < 75) {
        setActiveSection("Pricing & Plans");
      } else {
        setActiveSection("Ready to Launch");
      }

      // Physics based on scroll direction
      if (Math.abs(delta) > 10) {
        setSpeed("run");
        const isDown = delta > 0;
        setDirection(isDown ? "right" : "left");
        setPetState("runAlt");

        const targetEmpty = findSafeEmptySpace(isDown ? 0.9 : 0.1);
        setTargetX(targetEmpty);
      } else if (Math.abs(delta) > 2) {
        setSpeed("walk");
        const isDown = delta > 0;
        setDirection(isDown ? "right" : "left");
        setPetState(isDown ? "walkRight" : "walkLeft");
      }

      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = setTimeout(() => {
        const safeRest = findSafeEmptySpace(progress > 50 ? 0.85 : 0.15);
        setTargetX(safeRest);

        if (progress >= 95) {
          setPetState("celebrate");
          triggerThoughtPopup({
            id: "finished",
            badge: "🎉 Let's Connect",
            title: "Ready to Grow Your Business?",
            thought: "You've reviewed our plans! Contact us directly on WhatsApp for an instant free consultation.",
            actionText: "Chat on WhatsApp",
            actionHref: whatsappUrl
          }, 8000);
        } else {
          setPetState("idle");
        }
      }, 260);
    };

    window.addEventListener("scroll", handleScrollOrGesture, { passive: true });
    window.addEventListener("touchmove", handleScrollOrGesture, { passive: true });
    window.addEventListener("wheel", handleScrollOrGesture, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollOrGesture);
      window.removeEventListener("touchmove", handleScrollOrGesture);
      window.removeEventListener("wheel", handleScrollOrGesture);
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    };
  }, [findSafeEmptySpace, triggerThoughtPopup, whatsappUrl]);

  // 7. Route Changes: Friendly greeting
  useEffect(() => {
    let thought: ValueThought;
    if (pathname === "/investment") {
      thought = {
        id: "route-invest",
        badge: "💎 Transparent Plans",
        title: "Fixed Investment, High Returns",
        thought: "Starter at ₹5,000 ($55), Scale at ₹9,999 ($110), E-Commerce at ₹12,999 ($149). 5-day delivery with zero hidden retainers.",
        actionText: "Message on WhatsApp",
        actionHref: whatsappUrl
      };
    } else if (pathname === "/ai-analyze") {
      thought = {
        id: "route-analyze",
        badge: "⚡ Website Audit",
        title: "Check Your Website Health",
        thought: "Is your current site slow? Check how fast your pages load and learn how Mowglai helps you convert more buyers.",
        actionText: "Audit Website",
        actionHref: "#audit-input"
      };
    } else if (pathname === "/contact") {
      thought = {
        id: "route-contact",
        badge: "📞 Quick Connect",
        title: "We're Here to Help",
        thought: "Reach out via WhatsApp or call us directly. We respond promptly with clear pricing and delivery timelines.",
        actionText: "Direct Call",
        actionHref: telUrl
      };
    } else {
      thought = CONSUMER_VALUE_STREAM[0];
    }

    setPetState("wave");
    triggerThoughtPopup(thought, 7000);
    const t = setTimeout(() => setPetState("idle"), 1400);
    return () => clearTimeout(t);
  }, [pathname, triggerThoughtPopup, whatsappUrl, telUrl]);

  // Click handler
  const handlePetClick = useCallback(() => {
    const heartId = Date.now();
    setHearts((prev) => [...prev, { id: heartId, x: posX + 30 }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== heartId));
    }, 1000);

    setPetState("jump");
    const nextIdx = (thoughtIndex + 1) % CONSUMER_VALUE_STREAM.length;
    setThoughtIndex(nextIdx);
    triggerThoughtPopup(CONSUMER_VALUE_STREAM[nextIdx], 8000);

    setTimeout(() => {
      setPetState("celebrate");
      setTimeout(() => setPetState("idle"), 1400);
    }, 600);
  }, [posX, thoughtIndex, triggerThoughtPopup]);

  // Handle Q&A chip click
  const handleSelectQuestion = (item: QuickQnA) => {
    triggerThoughtPopup({
      id: "answer",
      badge: "💡 Mowglai Guide",
      title: item.q,
      thought: item.a,
      actionText: item.actionText || "Chat on WhatsApp",
      actionHref: item.actionHref || whatsappUrl
    }, 9000);
    setPetState("thinking");
    setTimeout(() => setPetState("celebrate"), 1200);
    setTimeout(() => setPetState("idle"), 2400);
  };

  if (!isLoaded) return null;

  // Determine speech bubble alignment
  const isRightSide = typeof window !== "undefined" && posX > (window.innerWidth / 2);

  return (
    <>
      {/* Floating Heart Particles */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="fixed bottom-20 z-[56] pointer-events-none animate-in fade-in zoom-in duration-300 transition-all text-primary flex items-center gap-1 font-mono text-[11px] font-bold"
          style={{ left: `${h.x}px` }}
        >
          <Heart className="w-4 h-4 fill-primary text-primary animate-bounce" />
          <span>+1</span>
        </div>
      ))}

      {/* Main Container positioned via GPU translate */}
      <div
        className="fixed bottom-3 z-[55] select-none font-sans transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(${posX}px, 0, 0)`,
        }}
      >
        {/* Dynamic Thought & Action Hub Bubble */}
        {isBubbleVisible && !isMinimized && (
          <div
            className={`mb-2.5 w-[290px] sm:w-[315px] max-w-[calc(100vw-32px)] bg-card/95 border border-primary/30 backdrop-blur-xl p-3.5 rounded-2xl shadow-[0_0_30px_rgba(200,241,105,0.2)] animate-in fade-in slide-in-from-bottom-2 duration-300 ${
              isRightSide ? "origin-bottom-right -translate-x-[calc(100%-70px)]" : "origin-bottom-left"
            }`}
          >
            {/* Top Countdown Progress Bar */}
            <div className="w-full h-1 bg-primary/10 rounded-full mb-2.5 overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${streamProgress}%` }}
              />
            </div>

            {/* Bubble Navigation Tabs: Advice | Quick Settings | Contact */}
            <div className="flex items-center justify-between gap-1 pb-2 border-b border-primary/15 mb-2.5">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab("advice")}
                  className={`px-2 py-0.5 rounded-md text-[10.5px] font-bold transition ${
                    activeTab === "advice"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  Insights
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`px-2 py-0.5 rounded-md text-[10.5px] font-bold flex items-center gap-1 transition ${
                    activeTab === "settings"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  <Coins className="w-3 h-3" />
                  <span>Currency/Lang</span>
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`px-2 py-0.5 rounded-md text-[10.5px] font-bold flex items-center gap-1 transition ${
                    activeTab === "contact"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Contact</span>
                </button>
              </div>

              <button
                onClick={() => setIsBubbleVisible(false)}
                className="text-foreground/50 hover:text-foreground p-0.5 rounded transition"
                aria-label="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* TAB 1: ADVICE & CONSUMER VALUE */}
            {activeTab === "advice" && (
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider font-mono">
                    {currentThought.badge}
                  </span>
                  <span className="text-[10px] text-foreground/50 font-mono">
                    {activeSection}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-[12.5px] font-bold text-foreground font-display mb-1">
                  {currentThought.title}
                </h4>

                {/* Consumer-friendly thought text */}
                <p className="text-[11.5px] text-foreground/85 leading-relaxed mb-2.5">
                  {currentThought.thought}
                </p>

                {/* Quick Question Chips */}
                <div className="pt-2 border-t border-primary/10 mb-2.5">
                  <div className="text-[9.5px] uppercase font-bold text-foreground/50 mb-1 tracking-wider">
                    Frequently Asked:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {CONSUMER_FAQS.map((faq, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectQuestion(faq)}
                        className="text-[10px] py-0.5 px-2 rounded-md border border-primary/20 hover:border-primary hover:bg-primary/10 text-foreground/80 hover:text-primary transition font-medium text-left"
                      >
                        {faq.q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-primary/15">
                  <a
                    href={currentThought.actionHref}
                    target={currentThought.actionHref.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex-1 py-1.5 px-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] font-bold flex items-center justify-center gap-1 transition shadow-sm"
                  >
                    <span>{currentThought.actionText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => {
                      setPetState("celebrate");
                      setTimeout(() => setPetState("idle"), 1400);
                    }}
                    className="py-1.5 px-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 text-[11px] font-bold transition flex items-center gap-1"
                    title="Cheer!"
                  >
                    <Zap className="w-3 h-3 fill-primary text-primary" />
                    <span>Cheer</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: CURRENCY & TRANSLATE MODE */}
            {activeTab === "settings" && (
              <div className="space-y-3 py-1">
                {/* Currency Switcher */}
                <div>
                  <div className="text-[10px] uppercase font-bold text-foreground/60 mb-1.5 tracking-wider flex items-center gap-1">
                    <Coins className="w-3 h-3 text-primary" />
                    <span>Select Currency Mode:</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(["INR", "USD", "EUR", "GBP"] as CurrencyType[]).map((cur) => (
                      <button
                        key={cur}
                        onClick={() => setCurrency(cur)}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-bold border transition flex items-center justify-between ${
                          currency === cur
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "border-primary/20 hover:border-primary hover:bg-primary/10 text-foreground/80"
                        }`}
                      >
                        <span>{cur === "INR" ? "₹ INR (India)" : cur === "USD" ? "$ USD (Global)" : cur === "EUR" ? "€ EUR" : "£ GBP"}</span>
                        {currency === cur && <CheckCircle2 className="w-3 h-3" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Translation / Language Switcher */}
                <div className="pt-2 border-t border-primary/15">
                  <div className="text-[10px] uppercase font-bold text-foreground/60 mb-1.5 tracking-wider flex items-center gap-1">
                    <Globe className="w-3 h-3 text-primary" />
                    <span>Website Language:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { code: "en", label: "English" },
                      { code: "hi", label: "हिन्दी" },
                      { code: "es", label: "Español" },
                      { code: "fr", label: "Français" },
                      { code: "ja", label: "日本語" },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code as Language)}
                        className={`py-1 px-1.5 rounded-md text-[10.5px] font-medium border text-center transition ${
                          language === lang.code
                            ? "bg-primary text-primary-foreground border-primary font-bold shadow-sm"
                            : "border-primary/20 hover:border-primary hover:bg-primary/10 text-foreground/80"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Appearance Theme Toggle */}
                <div className="pt-2 border-t border-primary/15 flex items-center justify-between">
                  <span className="text-[11px] text-foreground/75 font-medium flex items-center gap-1.5">
                    {theme === "dark" ? <Moon className="w-3.5 h-3.5 text-primary" /> : <Sun className="w-3.5 h-3.5 text-primary" />}
                    <span>Theme ({theme === "dark" ? "Dark" : "Light"})</span>
                  </span>
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-[10.5px] font-bold py-1 px-2.5 rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition"
                  >
                    Switch to {theme === "dark" ? "Light" : "Dark"}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 3: DIRECT CONTACT (TRANSFERRED FROM WEBSITE CHAT TOGGLE) */}
            {activeTab === "contact" && (
              <div className="space-y-2 py-1">
                <div className="text-[10px] uppercase font-bold text-foreground/60 mb-1 tracking-wider">
                  Connect Directly with Mowglai:
                </div>

                {/* WhatsApp Direct */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-bold text-[12px] text-foreground">WhatsApp Direct</div>
                    <div className="text-[10px] text-muted-foreground truncate">Instant quotes & answers</div>
                  </div>
                </a>

                {/* Direct Call */}
                <a
                  href={telUrl}
                  className="flex items-center gap-2.5 p-2 rounded-xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-bold text-[12px] text-foreground">Call Direct</div>
                    <div className="text-[10px] text-muted-foreground truncate">+91 94524 76331</div>
                  </div>
                </a>

                {/* Email Option */}
                <a
                  href={mailtoUrl}
                  className="flex items-center gap-2.5 p-2 rounded-xl border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="font-bold text-[12px] text-foreground">Email Project Scope</div>
                    <div className="text-[10px] text-muted-foreground truncate">{email}</div>
                  </div>
                </a>
              </div>
            )}

            {/* Bubble Tail */}
            <div
              className={`absolute -bottom-2 w-3.5 h-3.5 bg-card/95 border-b border-r border-primary/30 transform rotate-45 ${
                isRightSide ? "right-8" : "left-8"
              }`}
            />
          </div>
        )}

        {/* Pet Sprite Canvas & Quick Dock Controls */}
        <div className="flex flex-col items-center">
          {isMinimized ? (
            <button
              onClick={() => {
                setIsMinimized(false);
                setPetState("wave");
                setTimeout(() => setPetState("idle"), 1200);
              }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card/95 border border-primary/30 text-primary text-[11px] font-bold shadow-md hover:border-primary hover:scale-105 transition backdrop-blur-md"
              aria-label="Expand Pet"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10.5px]">AI Pet</span>
              <ChevronUp className="w-3 h-3" />
            </button>
          ) : (
            <div className="relative group flex flex-col items-center">
              {/* Pet Canvas Button (Compact 62x68px to prevent text block) */}
              <button
                onClick={handlePetClick}
                onMouseEnter={() => {
                  if (petState === "idle") setPetState("wave");
                }}
                onMouseLeave={() => {
                  if (petState === "wave") setPetState("idle");
                }}
                className="relative cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none block"
                aria-label="Interact with Mowglai Pet"
                title="Click me to cheer, hear advice, or toggle currency & contact!"
              >
                <canvas
                  ref={canvasRef}
                  width={62}
                  height={68}
                  className="w-[62px] h-[68px] drop-shadow-[0_4px_12px_rgba(200,241,105,0.35)] transition-transform duration-150"
                  style={{
                    imageRendering: "pixelated",
                    transform: direction === "left" && (petState === "walkLeft" || petState === "runAlt") ? "scaleX(-1)" : "none"
                  }}
                />

                {/* State Glow Badge */}
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
              </button>

              {/* Integrated Persistent Quick Dock: Currency | Language | WhatsApp | Min */}
              <div className="flex items-center gap-1 mt-0.5 bg-background/95 border border-primary/25 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-foreground/80 shadow-md transition-all">
                {/* Currency quick toggle */}
                <button
                  onClick={() => {
                    const nextCur = currency === "INR" ? "USD" : "INR";
                    setCurrency(nextCur);
                    setActiveTab("settings");
                    setIsBubbleVisible(true);
                  }}
                  className="hover:text-primary font-bold transition flex items-center gap-0.5 px-1 py-0.5 rounded hover:bg-primary/10"
                  title="Toggle Currency (₹ INR / $ USD)"
                >
                  <Coins className="w-2.5 h-2.5 text-primary" />
                  <span>{currency === "INR" ? "₹ INR" : "$ USD"}</span>
                </button>

                <span className="text-foreground/30">•</span>

                {/* Language quick toggle */}
                <button
                  onClick={() => {
                    const nextLang = language === "en" ? "hi" : "en";
                    setLanguage(nextLang as Language);
                    setActiveTab("settings");
                    setIsBubbleVisible(true);
                  }}
                  className="hover:text-primary font-bold transition flex items-center gap-0.5 px-1 py-0.5 rounded hover:bg-primary/10"
                  title="Toggle Language (EN / हिन्दी)"
                >
                  <Globe className="w-2.5 h-2.5 text-primary" />
                  <span>{language === "en" ? "EN" : "हिन्दी"}</span>
                </button>

                <span className="text-foreground/30">•</span>

                {/* Direct WhatsApp Action */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] text-[#25D366] font-bold transition flex items-center gap-0.5 px-1 py-0.5 rounded hover:bg-[#25D366]/10"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-2.5 h-2.5 fill-current" />
                  <span>Chat</span>
                </a>

                <span className="text-foreground/30">•</span>

                {/* Bubble Toggle / Min */}
                <button
                  onClick={() => {
                    if (isBubbleVisible) {
                      setIsBubbleVisible(false);
                    } else {
                      setActiveTab("advice");
                      triggerThoughtPopup(currentThought, 8000);
                    }
                  }}
                  className="hover:text-primary transition px-1 py-0.5 rounded hover:bg-primary/10"
                  title={isBubbleVisible ? "Close Bubble" : "Open Advice Hub"}
                >
                  <Sparkles className="w-2.5 h-2.5 text-primary" />
                </button>

                <button
                  onClick={() => setIsMinimized(true)}
                  className="text-foreground/40 hover:text-foreground transition px-0.5"
                  title="Minimize Pet"
                >
                  <X className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
