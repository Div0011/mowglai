"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { MessageCircle, Sparkles, X, ChevronUp, ExternalLink, Zap } from "lucide-react";
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

interface SpeechBubbleContent {
  title: string;
  message: string;
  actionText?: string;
  actionHref?: string;
}

const DEFAULT_TIPS: Record<string, SpeechBubbleContent> = {
  "/": {
    title: "Pixel Terminal Online",
    message: "Hi! I'm Mowglai's companion. Explore our AIO & Search Intelligence!",
    actionText: "Audit Website",
    actionHref: "/ai-analyze"
  },
  "/ai-analyze": {
    title: "Speed & Tech Audit",
    message: "Enter any domain above to benchmark performance and JSON-LD SEO.",
    actionText: "Chat on WhatsApp",
    actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I'm%20checking%20the%20AI%20Analyzer"
  },
  "/ai-onboard": {
    title: "Project Matcher",
    message: "Select your sector & budget to get custom architecture blueprints.",
    actionText: "View Packages",
    actionHref: "/investment"
  },
  "/investment": {
    title: "Transparent Pricing",
    message: "Starting at ₹5,000 INR ($55 USD) with 5-day delivery.",
    actionText: "Book Consultation",
    actionHref: "https://wa.me/919452476331?text=Hi%20Mowglai,%20I%20want%20to%20book%20a%20package"
  }
};

export default function InteractivePet() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [petState, setPetState] = useState<PetState>("idle");
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [speech, setSpeech] = useState<SpeechBubbleContent>(DEFAULT_TIPS["/"]);
  const [clickCount, setClickCount] = useState(0);

  // Update speech bubble when navigating
  useEffect(() => {
    const tip = DEFAULT_TIPS[pathname] || {
      title: "Mowglai Terminal",
      message: `Browsing ${pathname}. Need custom development or GMB verification?`,
      actionText: "Quick WhatsApp",
      actionHref: "https://wa.me/919452476331"
    };
    setSpeech(tip);
    setPetState("wave");
    const t = setTimeout(() => setPetState("idle"), 1800);
    return () => clearTimeout(t);
  }, [pathname]);

  // Load Spritesheet Image
  useEffect(() => {
    const img = new Image();
    img.src = "/pet/spritesheet.webp";
    img.onload = () => {
      imageRef.current = img;
      setIsLoaded(true);
    };
  }, []);

  // Frame animation loop (cycles across 8 frames at 8 fps)
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
      animationTimer = setTimeout(render, 120); // ~8.3 fps
    };

    render();

    return () => clearTimeout(animationTimer);
  }, [isLoaded, petState, isMinimized]);

  // Click interaction: cycles through playful states
  const handlePetClick = useCallback(() => {
    const nextClicks = clickCount + 1;
    setClickCount(nextClicks);

    if (nextClicks % 3 === 1) {
      setPetState("jump");
      setIsBubbleOpen(true);
      setTimeout(() => setPetState("idle"), 1200);
    } else if (nextClicks % 3 === 2) {
      setPetState("celebrate");
      setTimeout(() => setPetState("idle"), 1600);
    } else {
      setPetState("wave");
      setTimeout(() => setPetState("idle"), 1500);
    }
  }, [clickCount]);

  if (!isLoaded) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[55] select-none font-sans">
      {/* Speech Bubble */}
      {isBubbleOpen && !isMinimized && (
        <div className="mb-2 w-72 max-w-[calc(100vw-32px)] bg-card/95 border border-primary/30 backdrop-blur-xl p-3.5 rounded-2xl shadow-[0_0_30px_rgba(200,241,105,0.2)] animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-1.5 border-b border-primary/15 mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold font-display text-primary uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>{speech.title}</span>
            </div>
            <button
              onClick={() => setIsBubbleOpen(false)}
              className="text-foreground/50 hover:text-foreground p-0.5 rounded transition"
              aria-label="Close Pet Tip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-foreground/80 leading-relaxed mb-3">
            {speech.message}
          </p>

          <div className="flex items-center gap-2">
            {speech.actionHref && (
              <a
                href={speech.actionHref}
                target={speech.actionHref.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex-1 py-1.5 px-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] font-bold flex items-center justify-center gap-1 transition"
              >
                <span>{speech.actionText || "Learn More"}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={() => {
                setPetState("celebrate");
                setTimeout(() => setPetState("idle"), 1500);
              }}
              className="py-1.5 px-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 text-[11px] font-bold transition flex items-center gap-1"
              title="Give Pixel Terminal a cheer!"
            >
              <Zap className="w-3 h-3" />
              <span>Cheer</span>
            </button>
          </div>

          {/* Speech Bubble Tail */}
          <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card/95 border-b border-r border-primary/30 transform rotate-45" />
        </div>
      )}

      {/* Pet Interactive Canvas */}
      <div className="relative group flex items-end gap-2">
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
          <div className="flex flex-col items-center">
            <button
              onClick={handlePetClick}
              onMouseEnter={() => {
                if (petState === "idle") setPetState("wave");
              }}
              onMouseLeave={() => {
                if (petState === "wave") setPetState("idle");
              }}
              className="relative cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none"
              aria-label="Interact with Pixel Terminal Pet"
              title="Click to interact with Pixel Terminal!"
            >
              <canvas
                ref={canvasRef}
                width={78}
                height={84}
                className="w-[78px] h-[84px] drop-shadow-[0_4px_12px_rgba(200,241,105,0.35)]"
                style={{ imageRendering: "pixelated" }}
              />

              {/* Status Indicator */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
            </button>

            {/* Quick Actions Bar below pet */}
            <div className="flex items-center gap-1.5 mt-1 bg-background/80 border border-primary/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => setIsBubbleOpen((prev) => !prev)}
                className="hover:text-primary transition"
              >
                {isBubbleOpen ? "Hide" : "Talk"}
              </button>
              <span>•</span>
              <button
                onClick={() => setIsMinimized(true)}
                className="hover:text-primary transition"
              >
                Minimize
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
