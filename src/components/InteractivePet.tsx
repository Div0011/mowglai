"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Sparkles, X, ChevronUp, ExternalLink, Zap, Heart, Compass, MessageCircle, Bot, Activity } from "lucide-react";
import { usePathname } from "next/navigation";

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

interface LLMThought {
  id: string;
  badge: string;
  thought: string;
  actionText?: string;
  actionHref?: string;
}

const LLM_INSIGHT_STREAM: LLMThought[] = [
  {
    id: "speed",
    badge: "⚡ Tech Benchmarks",
    thought: "Analyzing DOM architecture: Next.js 16 Turbopack compiler achieves sub-50ms TTFB and 98/100 Core Web Vitals.",
    actionText: "Run Speed Audit",
    actionHref: "/ai-analyze"
  },
  {
    id: "gmb",
    badge: "📍 48h Map Protocol",
    thought: "Did you know? Google Local 3-Pack map clustering drives 3.5x more immediate phone call actions than organic text links.",
    actionText: "Claim 48h GMB",
    actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20tell%20me%20about%2048-Hour%20GMB%20Verification"
  },
  {
    id: "aio",
    badge: "🤖 AIO & Semantic Search",
    thought: "AI search engines (Perplexity, ChatGPT, Gemini) parse JSON-LD Geo schemas rather than keywords. We build your citations directly.",
    actionText: "AIO Strategy",
    actionHref: "/ai-analyze"
  },
  {
    id: "architecture",
    badge: "🧠 Multi-Agent Stack",
    thought: "We deploy autonomous AI agent pipelines using Python/Node alongside clean, zero-bloat web frontends for 99.9% uptime.",
    actionText: "View Tech Specs",
    actionHref: "/ai-onboard"
  },
  {
    id: "pricing",
    badge: "💎 Zero Hidden Costs",
    thought: "Starter packages deliver in 5 business days for ₹5,000 INR ($55 USD) with 100% source code ownership and hosting setup.",
    actionText: "Compare Packages",
    actionHref: "/investment"
  },
  {
    id: "conversion",
    badge: "🎯 Conversion UX",
    thought: "Zero Cumulative Layout Shift (CLS: 0.00) prevents user mis-taps on mobile, increasing checkout completions by up to 24%.",
    actionText: "WhatsApp Lead",
    actionHref: "https://wa.me/919452476331"
  },
  {
    id: "cities",
    badge: "🌐 Regional & Global Reach",
    thought: "Hyper-localized landing hubs for Bengaluru, Chennai, Delhi NCR, Pune, Lucknow & Kanpur built with geo-coordinates.",
    actionText: "Explore Hubs",
    actionHref: "/best-web-services-bangalore"
  }
];

interface QuickQnA {
  q: string;
  a: string;
  actionText?: string;
  actionHref?: string;
}

const QUICK_QUESTIONS: QuickQnA[] = [
  {
    q: "How fast is delivery?",
    a: "Starter sites deliver in 5 business days! Scale architectures in 7-10 days with automated CI/CD and production QA.",
    actionText: "View Packages",
    actionHref: "/investment"
  },
  {
    q: "48-Hour GMB setup?",
    a: "Complete Google Business Profile verification, Local 3-Pack clustering & automated 5-star review funnels in 48 hours.",
    actionText: "Chat on WhatsApp",
    actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I'm%20inquiring%20about%2048h%20GMB%20Setup"
  },
  {
    q: "How much does it cost?",
    a: "Starter Web: ₹5,000 INR ($55 USD) • Scale: ₹9,999 INR ($110 USD) • E-Commerce: ₹12,999 INR ($149 USD). Zero hidden costs.",
    actionText: "Calculate Scope",
    actionHref: "/investment"
  },
  {
    q: "What tech stack?",
    a: "Next.js 16 (Turbopack), React 19, Tailwind CSS, and autonomous Python/Node AI agent pipelines.",
    actionText: "Audit Website",
    actionHref: "/ai-analyze"
  }
];

export default function InteractivePet() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [petState, setPetState] = useState<PetState>("idle");
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

  // Smooth position physics
  const [posX, setPosX] = useState(28);
  const [targetX, setTargetX] = useState(28);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [speed, setSpeed] = useState<"walk" | "run">("walk");

  // LLM stream state
  const [currentThought, setCurrentThought] = useState<LLMThought>(LLM_INSIGHT_STREAM[0]);
  const [streamProgress, setStreamProgress] = useState(100);
  const [thoughtIndex, setThoughtIndex] = useState(0);

  // Section & Scroll tracking
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Hero Overview");

  const lastScrollY = useRef(0);
  const scrollEndTimer = useRef<NodeJS.Timeout | null>(null);
  const autoPopTimer = useRef<NodeJS.Timeout | null>(null);
  const autoHideTimer = useRef<NodeJS.Timeout | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

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

  // 3. Smooth Position Interpolation (Walking & Running Physics)
  useEffect(() => {
    if (isMinimized) return;

    const interval = setInterval(() => {
      setPosX((current) => {
        const diff = targetX - current;
        if (Math.abs(diff) < 3) {
          // Reached destination
          if (petState === "walkRight" || petState === "walkLeft" || petState === "runAlt") {
            setPetState("idle");
          }
          return targetX;
        }

        const step = speed === "run" ? 8 : 3.5;
        const next = diff > 0 ? current + Math.min(diff, step) : current - Math.min(Math.abs(diff), step);
        return Math.round(next);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [targetX, petState, speed, isMinimized]);

  // 4. Intelligent Empty-Space Locator (Collision & Text Overlap Avoidance)
  const findSafeEmptySpace = useCallback((preferredRatio: number) => {
    if (typeof window === "undefined") return 28;

    const winWidth = window.innerWidth;
    const safeLeftGutter = 28;
    // Keep clear of the WhatsApp toggle at the right edge
    const safeRightGutter = Math.max(safeLeftGutter + 80, winWidth - 190);

    // On wide desktop screens (>1280px), centered container leaves huge empty margins!
    if (winWidth > 1300) {
      const containerMargin = Math.max(30, (winWidth - 1200) / 2 - 90);
      if (preferredRatio < 0.5) {
        return Math.round(Math.min(containerMargin, 160));
      } else {
        return Math.round(Math.max(winWidth - containerMargin - 100, safeRightGutter));
      }
    }

    // On standard screens, alternate between left and right gutters to avoid central content text
    return preferredRatio > 0.5 ? safeRightGutter : safeLeftGutter;
  }, []);

  // 5. LLM Auto-Pop & Auto-Fade Controller ("Pop ho, gyab ho, badalta rahe")
  const triggerThoughtPopup = useCallback((thought: LLMThought, durationMs = 7000) => {
    setCurrentThought(thought);
    setIsBubbleVisible(true);
    setStreamProgress(100);

    if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
    if (progressInterval.current) clearInterval(progressInterval.current);

    // Smooth progress bar countdown
    const stepTime = 100;
    const decrement = (100 / (durationMs / stepTime));
    progressInterval.current = setInterval(() => {
      setStreamProgress((prev) => {
        if (prev <= decrement) {
          clearInterval(progressInterval.current!);
          return 0;
        }
        return prev - decrement;
      });
    }, stepTime);

    // Auto-dismiss (gyab ho)
    autoHideTimer.current = setTimeout(() => {
      setIsBubbleVisible(false);
      if (progressInterval.current) clearInterval(progressInterval.current);
    }, durationMs);
  }, []);

  // Rotate LLM thoughts automatically every 14 seconds when user is resting
  useEffect(() => {
    if (isMinimized) return;

    const scheduleNextThought = () => {
      autoPopTimer.current = setTimeout(() => {
        setThoughtIndex((prev) => {
          const nextIdx = (prev + 1) % LLM_INSIGHT_STREAM.length;
          const nextThought = LLM_INSIGHT_STREAM[nextIdx];
          triggerThoughtPopup(nextThought, 7500);
          return nextIdx;
        });
        scheduleNextThought();
      }, 15000);
    };

    scheduleNextThought();
    return () => {
      if (autoPopTimer.current) clearTimeout(autoPopTimer.current);
      if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [triggerThoughtPopup, isMinimized]);

  // 6. Comprehensive Gesture & Scroll Listener (Wheel, Touch, Scroll, Swipe)
  useEffect(() => {
    const handleScrollOrGesture = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100))) : 0;
      setScrollProgress(progress);

      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      // Update Section intelligence
      if (progress < 20) {
        setActiveSection("Hero Overview");
      } else if (progress < 45) {
        setActiveSection("Speed Audit & Scanner");
      } else if (progress < 70) {
        setActiveSection("Core OS & Solutions");
      } else if (progress < 90) {
        setActiveSection("Transparent Pricing");
      } else {
        setActiveSection("Footer & Conversion");
      }

      // Physics: Movement based on scroll direction
      if (Math.abs(delta) > 12) {
        // Fast scroll = Sprinting Run!
        setSpeed("run");
        const isDown = delta > 0;
        setDirection(isDown ? "right" : "left");
        setPetState("runAlt");

        // Target empty space on the side moving towards
        const targetEmpty = findSafeEmptySpace(isDown ? 0.9 : 0.1);
        setTargetX(targetEmpty);
      } else if (Math.abs(delta) > 2) {
        // Normal scroll = Walking
        setSpeed("walk");
        const isDown = delta > 0;
        setDirection(isDown ? "right" : "left");
        setPetState(isDown ? "walkRight" : "walkLeft");
      }

      // When movement stops, park safely in empty space and settle
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = setTimeout(() => {
        // Find safe resting spot
        const safeRest = findSafeEmptySpace(progress > 50 ? 0.85 : 0.15);
        setTargetX(safeRest);

        if (progress >= 95) {
          setPetState("celebrate");
          triggerThoughtPopup({
            id: "finished",
            badge: "🎉 Mission Complete",
            thought: "You reviewed our full architecture! Ready to launch your digital experience?",
            actionText: "Direct WhatsApp",
            actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I%20reviewed%20your%20entire%20site%20and%20want%20to%20start!"
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
  }, [findSafeEmptySpace, triggerThoughtPopup]);

  // 7. Route Changes: Greet with page-specific intelligence
  useEffect(() => {
    let thought: LLMThought;
    if (pathname === "/ai-analyze") {
      thought = {
        id: "route-analyze",
        badge: "⚡ PageSpeed & DOM Audit",
        thought: "AI Audit Studio initialized. Enter any URL to inspect Core Web Vitals, JSON-LD schemas, and TTFB latency.",
        actionText: "Audit Now",
        actionHref: "#audit-input"
      };
    } else if (pathname === "/ai-onboard") {
      thought = {
        id: "route-onboard",
        badge: "🧠 Blueprint Planner",
        thought: "Tell us your sector and target budget to match instant system blueprints and verified responsive templates.",
        actionText: "Start Planner",
        actionHref: "#onboard-wizard"
      };
    } else if (pathname === "/investment") {
      thought = {
        id: "route-invest",
        badge: "💎 Fixed ROI Packages",
        thought: "Starter Web: ₹5,000 INR ($55 USD) • Scale: ₹9,999 INR ($110 USD) • 5-day delivery with zero hidden retainers.",
        actionText: "Book via WhatsApp",
        actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I'm%20on%20the%20investment%20page"
      };
    } else {
      thought = LLM_INSIGHT_STREAM[0];
    }

    setPetState("wave");
    triggerThoughtPopup(thought, 7000);
    const t = setTimeout(() => setPetState("idle"), 1400);
    return () => clearTimeout(t);
  }, [pathname, triggerThoughtPopup]);

  // Click handler: jumps, hearts, and shows next thought
  const handlePetClick = useCallback(() => {
    // Generate heart particle
    const heartId = Date.now();
    setHearts((prev) => [...prev, { id: heartId, x: posX + 35 }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== heartId));
    }, 1000);

    setPetState("jump");
    const nextIdx = (thoughtIndex + 1) % LLM_INSIGHT_STREAM.length;
    setThoughtIndex(nextIdx);
    triggerThoughtPopup(LLM_INSIGHT_STREAM[nextIdx], 8000);

    setTimeout(() => {
      setPetState("celebrate");
      setTimeout(() => setPetState("idle"), 1400);
    }, 600);
  }, [posX, thoughtIndex, triggerThoughtPopup]);

  // Answer quick question
  const handleSelectQuestion = (item: QuickQnA) => {
    triggerThoughtPopup({
      id: "answer",
      badge: "Mowglai AI Intel",
      thought: item.a,
      actionText: item.actionText,
      actionHref: item.actionHref
    }, 9000);
    setPetState("thinking");
    setTimeout(() => setPetState("celebrate"), 1200);
    setTimeout(() => setPetState("idle"), 2400);
  };

  if (!isLoaded) return null;

  // Determine speech bubble alignment:
  // If pet is on right half of screen, bubble opens to the left (avoiding right edge / contact toggle)
  const isRightSide = typeof window !== "undefined" && posX > (window.innerWidth / 2);

  return (
    <>
      {/* Floating Heart Particles on Click */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="fixed bottom-24 z-[56] pointer-events-none animate-in fade-in zoom-in duration-300 transition-all text-primary flex items-center gap-1 font-mono text-xs font-bold"
          style={{ left: `${h.x}px` }}
        >
          <Heart className="w-5 h-5 fill-primary text-primary animate-bounce" />
          <span>+1 Energy</span>
        </div>
      ))}

      {/* Main Container positioned via GPU translate */}
      <div
        className="fixed bottom-4 z-[55] select-none font-sans transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(${posX}px, 0, 0)`,
        }}
      >
        {/* Dynamic LLM Thought & Speech Bubble ("Pop ho, gyab ho, badalta rahe") */}
        {isBubbleVisible && !isMinimized && (
          <div
            className={`mb-3 w-84 max-w-[calc(100vw-56px)] bg-card/95 border border-primary/30 backdrop-blur-xl p-4 rounded-2xl shadow-[0_0_35px_rgba(200,241,105,0.22)] animate-in fade-in slide-in-from-bottom-2 duration-300 ${
              isRightSide ? "origin-bottom-right -translate-x-[calc(100%-80px)]" : "origin-bottom-left"
            }`}
          >
            {/* Countdown / Thought Progress Bar */}
            <div className="w-full h-1 bg-primary/10 rounded-full mb-3 overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${streamProgress}%` }}
              />
            </div>

            {/* Title & Badge */}
            <div className="flex items-center justify-between pb-1.5 border-b border-primary/20 mb-2">
              <div className="flex items-center gap-2 text-xs font-bold font-display text-primary uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span>{currentThought.badge}</span>
              </div>
              <button
                onClick={() => setIsBubbleVisible(false)}
                className="text-foreground/50 hover:text-foreground p-0.5 rounded transition"
                aria-label="Dismiss Thought"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Context & Scroll Pill */}
            <div className="flex items-center gap-2 mb-2 text-[10px] font-mono text-foreground/60">
              <span className="flex items-center gap-1 text-primary">
                <Compass className="w-3 h-3" /> {activeSection}
              </span>
              <span>•</span>
              <span className="text-foreground/80 font-bold">{scrollProgress}% Read</span>
            </div>

            {/* Thought Text */}
            <p className="text-xs text-foreground/90 leading-relaxed mb-3">
              {currentThought.thought}
            </p>

            {/* Quick Questions Pills */}
            <div className="space-y-1 mb-3 pt-2 border-t border-primary/10">
              <div className="text-[10px] uppercase font-bold tracking-wider text-foreground/50 mb-1">
                Ask Pixel Terminal:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_QUESTIONS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectQuestion(item)}
                    className="text-[10px] py-1 px-2.5 rounded-lg border border-primary/20 hover:border-primary hover:bg-primary/10 text-foreground/80 hover:text-primary transition font-medium text-left"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2 border-t border-primary/15">
              {currentThought.actionHref && (
                <a
                  href={currentThought.actionHref}
                  target={currentThought.actionHref.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] font-bold flex items-center justify-center gap-1.5 transition shadow"
                >
                  <span>{currentThought.actionText || "Action"}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                onClick={() => {
                  setPetState("celebrate");
                  setTimeout(() => setPetState("idle"), 1600);
                }}
                className="py-1.5 px-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 text-[11px] font-bold transition flex items-center gap-1"
                title="Cheer!"
              >
                <Zap className="w-3.5 h-3.5 fill-primary text-primary" />
                <span>Cheer</span>
              </button>
            </div>

            {/* Tail */}
            <div
              className={`absolute -bottom-2 w-4 h-4 bg-card/95 border-b border-r border-primary/30 transform rotate-45 ${
                isRightSide ? "right-10" : "left-10"
              }`}
            />
          </div>
        )}

        {/* Pet Sprite Canvas & Controls */}
        <div className="flex flex-col items-center">
          {isMinimized ? (
            <button
              onClick={() => {
                setIsMinimized(false);
                setPetState("wave");
                setTimeout(() => setPetState("idle"), 1200);
              }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 border border-primary/30 text-primary text-xs font-bold shadow-lg hover:border-primary hover:scale-105 transition backdrop-blur-md"
              aria-label="Show Pixel Pet"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[11px]">Pixel Terminal</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="relative group">
              {/* Pet Clickable Canvas Button */}
              <button
                onClick={handlePetClick}
                onMouseEnter={() => {
                  if (petState === "idle") setPetState("wave");
                }}
                onMouseLeave={() => {
                  if (petState === "wave") setPetState("idle");
                }}
                className="relative cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none block"
                aria-label="Interact with Pixel Terminal Pet"
                title="Click me to jump, cheer, or hear thoughts!"
              >
                <canvas
                  ref={canvasRef}
                  width={78}
                  height={84}
                  className="w-[78px] h-[84px] drop-shadow-[0_4px_16px_rgba(200,241,105,0.4)] transition-transform duration-150"
                  style={{
                    imageRendering: "pixelated",
                    transform: direction === "left" && (petState === "walkLeft" || petState === "runAlt") ? "scaleX(-1)" : "none"
                  }}
                />

                {/* State Glow Badge */}
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
              </button>

              {/* Hover Mini Toolbar */}
              <div className="flex items-center gap-1.5 mt-1 bg-background/90 border border-primary/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-foreground/75 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <button
                  onClick={() => {
                    if (isBubbleVisible) {
                      setIsBubbleVisible(false);
                    } else {
                      triggerThoughtPopup(currentThought, 8000);
                    }
                  }}
                  className="hover:text-primary font-bold transition flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3 text-primary" />
                  <span>{isBubbleVisible ? "Hide" : "Thought"}</span>
                </button>
                <span>•</span>
                <button
                  onClick={() => {
                    const nextSide = posX > 100 ? 28 : (window.innerWidth - 190);
                    setTargetX(nextSide);
                    setDirection(nextSide > posX ? "right" : "left");
                    setPetState("runAlt");
                    setSpeed("run");
                  }}
                  className="hover:text-primary transition"
                  title="Make Pet Dash Across!"
                >
                  Dash
                </button>
                <span>•</span>
                <button
                  onClick={() => setIsMinimized(true)}
                  className="hover:text-primary transition"
                >
                  Min
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
