"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { MessageCircle, Sparkles, X, ChevronUp, ExternalLink, Zap, Heart, Compass, Send, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

// OpenPets v1 Spritesheet format (1536x1872: 8 columns x 9 rows of 192x208px frames)
const FRAME_WIDTH = 192;
const FRAME_HEIGHT = 208;
const NUM_COLS = 8;

// Row mapping according to OpenPets specification:
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

interface QuickQnA {
  q: string;
  a: string;
  actionText?: string;
  actionHref?: string;
}

const KNOWLEDGE_BASE: QuickQnA[] = [
  {
    q: "How fast do you build?",
    a: "Starter sites deliver in 5 business days! Scale architectures in 7-10 days with production QA.",
    actionText: "View Packages",
    actionHref: "/investment"
  },
  {
    q: "What is 48-Hour GMB?",
    a: "Complete Google Business Profile verification, Local 3-Pack clustering & automated 5-star review funnels in 48h.",
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
    q: "What technology stack?",
    a: "Next.js 16 (Turbopack), React 19, Tailwind CSS, Framer Motion, and autonomous Python/Node AI agent pipelines.",
    actionText: "Audit Website",
    actionHref: "/ai-analyze"
  }
];

export default function InteractivePet() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [petState, setPetState] = useState<PetState>("idle");
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  // Position physics & roaming
  const [posX, setPosX] = useState(24);
  const [targetX, setTargetX] = useState(24);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [speed, setSpeed] = useState<"walk" | "run">("walk");

  // Context & Section awareness
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionName, setActiveSectionName] = useState("Hero Overview");
  const [bubbleTitle, setBubbleTitle] = useState("Pixel Terminal");
  const [bubbleText, setBubbleText] = useState("Hi! I'm your Mowglai AI guide. Scroll or walk with me!");
  const [actionLink, setActionLink] = useState<{ text: string; href: string } | null>({
    text: "WhatsApp Lead",
    href: "https://wa.me/919452476331"
  });

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const wanderTimeout = useRef<NodeJS.Timeout | null>(null);

  // Load Spritesheet Image
  useEffect(() => {
    const img = new Image();
    img.src = "/pet/spritesheet.webp";
    img.onload = () => {
      imageRef.current = img;
      setIsLoaded(true);
    };
  }, []);

  // Frame animation loop (8.3 FPS for sprite row cycling)
  useEffect(() => {
    if (!isLoaded || isMinimized) return;

    let frame = 0;
    let animationTimer: NodeJS.Timeout;

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
      const interval = petState === "runAlt" ? 80 : 120;
      animationTimer = setTimeout(render, interval);
    };

    render();

    return () => clearTimeout(animationTimer);
  }, [isLoaded, petState, isMinimized]);

  // Smooth position interpolation towards targetX (running / walking)
  useEffect(() => {
    if (isMinimized) return;

    const moveInterval = setInterval(() => {
      setPosX((current) => {
        const diff = targetX - current;
        if (Math.abs(diff) < 2) {
          // Reached target
          if (petState === "walkRight" || petState === "walkLeft" || petState === "runAlt") {
            setPetState("idle");
          }
          return targetX;
        }

        const step = speed === "run" ? 7 : 3;
        const next = diff > 0 ? current + Math.min(diff, step) : current - Math.min(Math.abs(diff), step);
        return next;
      });
    }, 20);

    return () => clearInterval(moveInterval);
  }, [targetX, petState, speed, isMinimized]);

  // Page-aware initial greeting
  useEffect(() => {
    if (pathname === "/ai-analyze") {
      setBubbleTitle("AI Audit Studio");
      setBubbleText("Enter your website URL above to inspect Google PageSpeed, latency, and SEO tags.");
      setActionLink({ text: "Scan Now", href: "#audit-input" });
    } else if (pathname === "/ai-onboard") {
      setBubbleTitle("AI Blueprint Matcher");
      setBubbleText("Pick your industry and budget to generate a full system architecture demo.");
      setActionLink({ text: "View Blueprint", href: "#onboard-wizard" });
    } else if (pathname === "/investment") {
      setBubbleTitle("Pricing Engine");
      setBubbleText("Transparent, fixed-scope engineering with zero hourly markups. 5-day delivery!");
      setActionLink({ text: "Book on WhatsApp", href: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I'm%20on%20the%20investment%20page" });
    } else {
      setBubbleTitle("Pixel Terminal");
      setBubbleText("Welcome to Mowglai! Scroll through our solutions or click me to interact.");
      setActionLink({ text: "Quick WhatsApp", href: "https://wa.me/919452476331" });
    }
  }, [pathname]);

  // Scroll tracking: understands depth and speed, moves pet along
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100))) : 0;
      setScrollProgress(progress);

      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      // Determine section from scroll progress
      if (progress < 20) {
        setActiveSectionName("Hero Overview");
      } else if (progress < 45) {
        setActiveSectionName("Live Audit & Scanner");
      } else if (progress < 70) {
        setActiveSectionName("Core OS & Solutions");
      } else if (progress < 90) {
        setActiveSectionName("Pricing & Packages");
      } else {
        setActiveSectionName("Footer & Contact");
      }

      // Physics: Map progress to screen width (leaving room for contact toggle on right)
      const maxAvailableWidth = Math.max(100, (typeof window !== "undefined" ? window.innerWidth : 800) - 200);
      const calculatedX = Math.round(20 + (progress / 100) * maxAvailableWidth);

      // Determine movement state
      if (Math.abs(delta) > 15) {
        // Fast scroll = Running sprint
        setSpeed("run");
        setDirection(delta > 0 ? "right" : "left");
        setPetState("runAlt");
      } else if (Math.abs(delta) > 2) {
        // Normal scroll = Walking
        setSpeed("walk");
        setDirection(delta > 0 ? "right" : "left");
        setPetState(delta > 0 ? "walkRight" : "walkLeft");
      }

      setTargetX(calculatedX);

      // When scroll stops, settle back to idle or thinking
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (progress >= 95) {
          setPetState("celebrate");
          setBubbleTitle("Mission Complete! 🎉");
          setBubbleText("You explored the entire page! Ready to transform your digital experience?");
          setActionLink({ text: "Start Project", href: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I%20reviewed%20your%20entire%20site%20and%20want%20to%20start!" });
          setIsBubbleOpen(true);
        } else {
          setPetState("idle");
        }
      }, 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Autonomous idle wandering (walks left and right when idle)
  useEffect(() => {
    if (isMinimized) return;

    const planWander = () => {
      const delay = Math.random() * 8000 + 6000; // 6 - 14s
      wanderTimeout.current = setTimeout(() => {
        if (petState === "idle") {
          const maxAvailableWidth = Math.max(100, window.innerWidth - 220);
          const offset = (Math.random() - 0.5) * 120; // wander +/- 60px
          const newTarget = Math.max(20, Math.min(maxAvailableWidth, posX + offset));

          if (Math.abs(newTarget - posX) > 10) {
            setDirection(newTarget > posX ? "right" : "left");
            setSpeed("walk");
            setPetState(newTarget > posX ? "walkRight" : "walkLeft");
            setTargetX(newTarget);
          }
        }
        planWander();
      }, delay);
    };

    planWander();
    return () => {
      if (wanderTimeout.current) clearTimeout(wanderTimeout.current);
    };
  }, [posX, petState, isMinimized]);

  // Handle Question selection from knowledge base
  const handleSelectQuestion = (item: QuickQnA) => {
    setBubbleTitle("Mowglai AI Intel");
    setBubbleText(item.a);
    setActionLink(item.actionHref ? { text: item.actionText || "Action", href: item.actionHref } : null);
    setPetState("thinking");
    setTimeout(() => setPetState("celebrate"), 1200);
    setTimeout(() => setPetState("idle"), 2400);
  };

  // Click interaction: Jumps, shoots mini heart particles, and pops speech
  const handlePetClick = useCallback(() => {
    // Generate heart particle
    const heartId = Date.now();
    setHearts((prev) => [...prev, { id: heartId, x: posX + 35, y: 0 }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== heartId));
    }, 1000);

    setPetState("jump");
    setIsBubbleOpen(true);
    setTimeout(() => {
      setPetState("celebrate");
      setTimeout(() => setPetState("idle"), 1400);
    }, 600);
  }, [posX]);

  if (!isLoaded) return null;

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
        ref={containerRef}
        className="fixed bottom-4 z-[55] select-none font-sans transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(${posX}px, 0, 0)`,
        }}
      >
        {/* Interactive Speech & Intel Bubble */}
        {isBubbleOpen && !isMinimized && (
          <div className="mb-3 w-80 max-w-[calc(100vw-48px)] bg-card/95 border border-primary/30 backdrop-blur-xl p-4 rounded-2xl shadow-[0_0_35px_rgba(200,241,105,0.22)] animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Title Bar */}
            <div className="flex items-center justify-between pb-2 border-b border-primary/20 mb-2.5">
              <div className="flex items-center gap-2 text-xs font-bold font-display text-primary uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-spin" />
                <span>{bubbleTitle}</span>
              </div>
              <button
                onClick={() => setIsBubbleOpen(false)}
                className="text-foreground/50 hover:text-foreground p-0.5 rounded transition"
                aria-label="Close Pet Tip"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Live Page & Scroll Status Pill */}
            <div className="flex items-center gap-2 mb-2 text-[10px] font-mono text-foreground/60">
              <span className="flex items-center gap-1 text-primary">
                <Compass className="w-3 h-3" /> {activeSectionName}
              </span>
              <span>•</span>
              <span className="text-foreground/80 font-bold">{scrollProgress}% Scrolled</span>
            </div>

            {/* Bubble Message */}
            <p className="text-xs text-foreground/85 leading-relaxed mb-3">
              {bubbleText}
            </p>

            {/* Quick Question Pills */}
            <div className="space-y-1 mb-3 pt-2 border-t border-primary/10">
              <div className="text-[10px] uppercase font-bold tracking-wider text-foreground/50 mb-1">
                Ask Pixel Terminal:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {KNOWLEDGE_BASE.map((item, idx) => (
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
              {actionLink && (
                <a
                  href={actionLink.href}
                  target={actionLink.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] font-bold flex items-center justify-center gap-1.5 transition shadow"
                >
                  <span>{actionLink.text}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                onClick={() => {
                  setPetState("celebrate");
                  setTimeout(() => setPetState("idle"), 1600);
                }}
                className="py-1.5 px-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 text-[11px] font-bold transition flex items-center gap-1"
                title="Cheer with Pixel Terminal!"
              >
                <Zap className="w-3.5 h-3.5 fill-primary text-primary" />
                <span>Cheer</span>
              </button>
            </div>

            {/* Speech Bubble Tail */}
            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card/95 border-b border-r border-primary/30 transform rotate-45" />
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
                title="Click me to jump and chat!"
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
                  onClick={() => setIsBubbleOpen((prev) => !prev)}
                  className="hover:text-primary font-bold transition flex items-center gap-1"
                >
                  <MessageCircle className="w-3 h-3 text-primary" />
                  <span>{isBubbleOpen ? "Hide" : "Chat"}</span>
                </button>
                <span>•</span>
                <button
                  onClick={() => {
                    setTargetX(Math.random() > 0.5 ? 20 : Math.max(100, window.innerWidth - 220));
                    setPetState("runAlt");
                    setSpeed("run");
                  }}
                  className="hover:text-primary transition"
                  title="Make Pet Run Across!"
                >
                  Run
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
