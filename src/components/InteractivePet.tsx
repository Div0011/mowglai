"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Sparkles,
  X,
  ChevronUp,
  Minus,
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
  ArrowRight,
  Smile,
  Star,
  Flame,
  Info
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

// 8 Mythical / Cyber Outfits & Forms (Kapde badalna on every site refresh & rage morph)
interface PetForm {
  id: string;
  name: string;
  emoji: string;
  badge: string;
  outfitName: string;
  outfitBadge: string;
  glowColor: string;
  filterStyle: string;
  rageSound: string;
  rageQuote: string;
  powerTrait: string;
}

const PET_FORMS: PetForm[] = [
  {
    id: "mint-bot",
    name: "Pixel Terminal",
    emoji: "📟",
    badge: "🌱 Mint Original",
    outfitName: "Mint Cyber-Hoodie & Tech Cargo",
    outfitBadge: "🌱 Mint Streetwear",
    glowColor: "rgba(200, 241, 105, 0.5)",
    filterStyle: "drop-shadow(0 4px 14px rgba(200, 241, 105, 0.45))",
    rageSound: "BEEP BEEP!",
    rageQuote: "Calming down... Resetting to default Mowglai Mint Cyber-Bot! Ready to build fast websites.",
    powerTrait: "5-Day High-Speed Web Launch"
  },
  {
    id: "inferno-beast",
    name: "Inferno Berserker",
    emoji: "🔥",
    badge: "🔥 Rage Inferno",
    outfitName: "Crimson Lava Blazer & Scarf",
    outfitBadge: "🧥 Crimson Lava Blazer",
    glowColor: "rgba(239, 68, 68, 0.8)",
    filterStyle: "hue-rotate(335deg) saturate(3.5) contrast(1.3) drop-shadow(0 0 16px rgba(239, 68, 68, 0.85))",
    rageSound: "GRRR! ROAR!",
    rageQuote: "GRRR! Kitni baar poke karoge?! Gusse me aake Inferno Form le liya! Burning down slow websites! 🔥",
    powerTrait: "100% Destruction of Sluggish Page Loads"
  },
  {
    id: "cosmic-phantom",
    name: "Cosmic Specter",
    emoji: "🌌",
    badge: "🌌 Cosmic Void",
    outfitName: "Galaxy Void Cloak & Stardust Mask",
    outfitBadge: "🌌 Cosmic Void Cloak",
    glowColor: "rgba(168, 85, 247, 0.8)",
    filterStyle: "hue-rotate(225deg) saturate(2.6) brightness(1.2) drop-shadow(0 0 16px rgba(168, 85, 247, 0.85))",
    rageSound: "WARP!",
    rageQuote: "You tapped across spacetime dimensions! Cosmic Void Form unlocked — bringing 3D galaxy magic to your brand!",
    powerTrait: "Immersive 3D & Digital Galaxy Aesthetics"
  },
  {
    id: "golden-overclock",
    name: "Golden Deity",
    emoji: "⚡",
    badge: "⚡ Supercharged Gold",
    outfitName: "Royal Golden Sherwani & Crown",
    outfitBadge: "👑 Royal Golden Sherwani",
    glowColor: "rgba(234, 179, 8, 0.85)",
    filterStyle: "hue-rotate(60deg) saturate(3.8) brightness(1.3) contrast(1.15) drop-shadow(0 0 18px rgba(234, 179, 8, 0.9))",
    rageSound: "OVERCLOCK!",
    rageQuote: "MAXIMUM OVERCLOCK! Golden Cyber Deity form activated! 100% code ownership with zero recurring traps!",
    powerTrait: "Zero Agency Lock-ins & 100% Ownership"
  },
  {
    id: "shadow-matrix",
    name: "Shadow Matrix",
    emoji: "👾",
    badge: "👾 Matrix Glitch",
    outfitName: "Stealth Matrix Trenchcoat & Shades",
    outfitBadge: "🕶️ Matrix Trenchcoat",
    glowColor: "rgba(34, 197, 94, 0.9)",
    filterStyle: "invert(0.85) hue-rotate(130deg) contrast(1.4) drop-shadow(0 0 16px rgba(34, 197, 94, 0.9))",
    rageSound: "GLITCH DETECTED!",
    rageQuote: "SYSTEM OVERLOAD! Bypassing agency gatekeepers... Entering stealth Shadow Matrix dragon mode!",
    powerTrait: "Unbeatable Transparent Pricing from ₹5,000"
  },
  {
    id: "neon-synthwave",
    name: "Cyber Neon Rider",
    emoji: "💜",
    badge: "⚡ Neon Synthwave",
    outfitName: "Neon Cyber-Jacket & Hologram Visor",
    outfitBadge: "⚡ Neon Bomber Jacket",
    glowColor: "rgba(236, 72, 153, 0.9)",
    filterStyle: "hue-rotate(280deg) saturate(3.2) brightness(1.2) drop-shadow(0 0 16px rgba(236, 72, 153, 0.85))",
    rageSound: "SYNTH OVERDRIVE!",
    rageQuote: "Retro-futuristic vibes! Neon Cyber outfit unlocked — electrifying your digital brand with bold styling!",
    powerTrait: "High-Converting Neon Visual Physics"
  },
  {
    id: "safari-explorer",
    name: "Jungle Mowglai",
    emoji: "🌿",
    badge: "🌿 Wild Safari",
    outfitName: "Safari Khaki Explorer Gear & Boots",
    outfitBadge: "🌿 Safari Explorer Suit",
    glowColor: "rgba(34, 197, 94, 0.8)",
    filterStyle: "sepia(0.6) hue-rotate(50deg) saturate(2.4) contrast(1.1) drop-shadow(0 0 14px rgba(34, 197, 94, 0.65))",
    rageSound: "WELCOME TO THE JUNGLE!",
    rageQuote: "Wild safari expedition active! Navigating your startup through the digital jungle to guaranteed growth!",
    powerTrait: "Zero-Friction Client Onboarding"
  },
  {
    id: "arctic-frost",
    name: "Arctic Frostwalker",
    emoji: "❄️",
    badge: "❄️ Glacier Frost",
    outfitName: "Glacier Thermal Parka & Snow Goggles",
    outfitBadge: "❄️ Glacier Frost Parka",
    glowColor: "rgba(56, 189, 248, 0.9)",
    filterStyle: "hue-rotate(170deg) saturate(2.8) brightness(1.25) drop-shadow(0 0 16px rgba(56, 189, 248, 0.85))",
    rageSound: "SUB-ZERO FREEZE!",
    rageQuote: "Cooling all high-heat server bottlenecks! Arctic sub-zero speed keeping your website icy smooth under heavy traffic!",
    powerTrait: "Sub-Second Global Edge Latency"
  }
];

// Consumer-focused, client-friendly insights
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
    a: "Agencies charge heavy monthly retainers and drag projects for months. Mowglai gives you transparent flat rates starting at ₹5,000 ($55), 5-day delivery, and 100% code ownership.",
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

interface FloatingParticle {
  id: number;
  x: number;
  icon: "heart" | "star" | "sparkle" | "zap" | "flame";
  label?: string;
}

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
  const [isHubOpen, setIsHubOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState<"advice" | "contact" | "settings">("advice");
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  // Mythical Roop/Outfit State (Automatic kapde badalna on every site refresh)
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const [isRageMorphing, setIsRageMorphing] = useState(false);
  const currentForm = PET_FORMS[activeFormIndex];

  // End-of-page visibility: Pet is ONLY visible when user scrolls to the bottom of the page!
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Randomize outfit/clothes on every site refresh/reload
  useEffect(() => {
    const randomOutfitIndex = Math.floor(Math.random() * PET_FORMS.length);
    setActiveFormIndex(randomOutfitIndex);
  }, []);

  // Smooth position physics
  const [posX, setPosX] = useState(20);
  const [targetX, setTargetX] = useState(20);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [speed, setSpeed] = useState<"walk" | "run">("walk");

  // Value stream state
  const [currentThought, setCurrentThought] = useState<ValueThought>(CONSUMER_VALUE_STREAM[0]);
  const [streamProgress, setStreamProgress] = useState(100);
  const [thoughtIndex, setThoughtIndex] = useState(0);

  // Section & Scroll tracking
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("Welcome");

  // Click combo & Rage tracking
  const clickCountRef = useRef(0);
  const lastClickTimeRef = useRef(0);
  const comboResetTimer = useRef<NodeJS.Timeout | null>(null);

  const lastScrollY = useRef(0);
  const scrollEndTimer = useRef<NodeJS.Timeout | null>(null);
  const autoPopTimer = useRef<NodeJS.Timeout | null>(null);
  const autoHideTimer = useRef<NodeJS.Timeout | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const phoneNumber = "919452476331";
  const email = "tech@mowglai.com";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi Mowglai, I'm interested in your web services. I'd like a quote and next steps.")}`;
  const telUrl = `tel:+${phoneNumber}`;
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent("Inquiry regarding Mowglai Services")}`;

  // Helper: spawn floating particle reactions
  const spawnParticles = useCallback((count = 1, icon: "heart" | "star" | "sparkle" | "zap" | "flame" = "heart", label?: string) => {
    const newItems: FloatingParticle[] = [];
    for (let i = 0; i < count; i++) {
      newItems.push({
        id: Date.now() + Math.random(),
        x: posX + 20 + (Math.random() * 24 - 12),
        icon,
        label: i === 0 ? label : undefined
      });
    }
    setParticles((prev) => [...prev, ...newItems]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newItems.some((n) => n.id === p.id)));
    }, 1200);
  }, [posX]);

  // 1. Load Spritesheet
  useEffect(() => {
    const img = new Image();
    img.src = "/pet/spritesheet.webp";
    img.onload = () => {
      imageRef.current = img;
      setIsLoaded(true);
    };
  }, []);

  // 2. Sprite Canvas Animation Loop
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

      const speedDelay =
        petState === "runAlt"
          ? 70
          : petState === "celebrate" || petState === "jump"
          ? 90
          : petState === "error"
          ? 60
          : petState === "walkRight" || petState === "walkLeft"
          ? 110
          : 140;

      timer = setTimeout(render, speedDelay);
    };

    render();
    return () => clearTimeout(timer);
  }, [isLoaded, petState, isMinimized]);

  // 3. Smooth Physical Movement Lerp Loop
  useEffect(() => {
    if (isMinimized) return;

    const interval = setInterval(() => {
      setPosX((current) => {
        const diff = targetX - current;
        if (Math.abs(diff) < 2) {
          if (petState === "walkRight" || petState === "walkLeft" || petState === "runAlt") {
            setPetState("idle");
          }
          return targetX;
        }

        const step = speed === "run" ? 7 : 3.2;
        const next = diff > 0 ? current + Math.min(diff, step) : current - Math.min(Math.abs(diff), step);
        return Math.round(next);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [targetX, petState, speed, isMinimized]);

  // 4. Empty-Space Locator with strict Mobile Protection
  const findSafeEmptySpace = useCallback((preferredRatio: number) => {
    if (typeof window === "undefined") return 20;

    const winWidth = window.innerWidth;
    if (winWidth < 768) {
      return 16;
    }

    const safeLeft = 24;
    const safeRight = Math.max(safeLeft + 60, winWidth - 140);

    if (winWidth > 1280) {
      const margin = Math.max(28, (winWidth - 1180) / 2 - 80);
      if (preferredRatio < 0.5) {
        return Math.round(Math.min(margin, 120));
      } else {
        return Math.round(Math.max(winWidth - margin - 80, safeRight));
      }
    }

    return preferredRatio > 0.5 ? safeRight : safeLeft;
  }, []);

  // 5. Thought Auto-Pop & Auto-Fade Controller
  const triggerThoughtPopup = useCallback((thought: ValueThought, durationMs = 6500) => {
    if (isHubOpen || isMinimized) return;

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
  }, [isHubOpen, isMinimized]);

  // 6. RAGE MORPHING / ROOP BADALNA TRIGGER
  // Triggered when user rapidly taps the pet 3+ times
  const triggerRageMorph = useCallback(() => {
    const nextIndex = (activeFormIndex + 1) % PET_FORMS.length;
    const nextForm = PET_FORMS[nextIndex];

    setIsRageMorphing(true);
    setPetState("error");
    setIsHubOpen(false);

    // Spawn dramatic fury particles
    spawnParticles(4, "flame", `🔥 ${nextForm.rageSound}`);

    // Trigger rage / morph announcement bubble
    triggerThoughtPopup({
      id: `morph-${nextForm.id}`,
      badge: `💢 Gussa Aaya! → ${nextForm.emoji} ${nextForm.name}`,
      title: `${nextForm.emoji} Roop Badal Gaya: ${nextForm.name}!`,
      thought: nextForm.rageQuote,
      actionText: "Chat on WhatsApp",
      actionHref: whatsappUrl
    }, 8500);

    // Dramatic transform sequence
    setTimeout(() => {
      setActiveFormIndex(nextIndex);
      setPetState("celebrate");
      spawnParticles(3, "star", `✨ ${nextForm.badge}`);
    }, 600);

    setTimeout(() => {
      setIsRageMorphing(false);
      setPetState("idle");
    }, 1800);
  }, [activeFormIndex, spawnParticles, triggerThoughtPopup, whatsappUrl]);

  // Auto-rotate value thoughts gently when pet is visible at the bottom of page
  useEffect(() => {
    if (!isAtBottom || isMinimized || isHubOpen || isRageMorphing) return;

    const scheduleNextThought = () => {
      autoPopTimer.current = setTimeout(() => {
        setThoughtIndex((prev) => {
          const nextIdx = (prev + 1) % CONSUMER_VALUE_STREAM.length;
          const nextThought = CONSUMER_VALUE_STREAM[nextIdx];
          triggerThoughtPopup(nextThought, 6500);
          return nextIdx;
        });
        scheduleNextThought();
      }, 28000);
    };

    scheduleNextThought();
    return () => {
      if (autoPopTimer.current) clearTimeout(autoPopTimer.current);
      if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [triggerThoughtPopup, isAtBottom, isMinimized, isHubOpen, isRageMorphing]);

  // 7. Section & Scroll Listener - Strict End-of-Page Pet Visibility
  useEffect(() => {
    const handleScrollOrGesture = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const windowHeight = window.innerHeight || 0;
      const docHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
      const maxScroll = docHeight - windowHeight;
      const progress = maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((scrollY / maxScroll) * 100))) : 0;
      setScrollProgress(progress);

      const delta = scrollY - lastScrollY.current;
      lastScrollY.current = scrollY;

      if (progress < 25) {
        setActiveSection("Overview");
      } else if (progress < 50) {
        setActiveSection("Solutions");
      } else if (progress < 75) {
        setActiveSection("Pricing & Plans");
      } else {
        setActiveSection("Ready to Launch");
      }

      // STRICT USER REQUIREMENT:
      // Pet ONLY appears when user reaches the end of the page (within 140px or >= 92% scroll).
      // As soon as user scrolls up, pet disappears immediately!
      const reachedEnd = maxScroll <= 60 || (scrollY + windowHeight >= docHeight - 140) || progress >= 92;

      setIsAtBottom((prev) => {
        if (reachedEnd && !prev) {
          // Just arrived at bottom of page: celebrate and announce today's outfit
          setPetState("celebrate");
          spawnParticles(3, "star", currentForm.outfitBadge);
          triggerThoughtPopup({
            id: `end-${currentForm.id}`,
            badge: `✨ ${currentForm.outfitBadge}`,
            title: `👋 Welcome to the End!`,
            thought: `Aap page ke end tak pahunch gaye! Aaj maine pehna hai: ${currentForm.outfitName}. Ready to launch your 5-day fast website?`,
            actionText: "Chat on WhatsApp",
            actionHref: whatsappUrl
          }, 8000);
        } else if (!reachedEnd && prev) {
          // Scrolled up: dismiss bubble, hub and smoothly exit
          setIsBubbleVisible(false);
          setIsHubOpen(false);
          setPetState("idle");
        }
        return reachedEnd;
      });

      if (typeof window !== "undefined" && window.innerWidth >= 768 && reachedEnd) {
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
      }

      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = setTimeout(() => {
        if (typeof window !== "undefined" && window.innerWidth >= 768 && reachedEnd) {
          const safeRest = findSafeEmptySpace(progress > 50 ? 0.85 : 0.15);
          setTargetX(safeRest);
        }
      }, 260);
    };

    // Initial check on mount
    handleScrollOrGesture();

    window.addEventListener("scroll", handleScrollOrGesture, { passive: true });
    window.addEventListener("touchmove", handleScrollOrGesture, { passive: true });
    window.addEventListener("wheel", handleScrollOrGesture, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollOrGesture);
      window.removeEventListener("touchmove", handleScrollOrGesture);
      window.removeEventListener("wheel", handleScrollOrGesture);
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
    };
  }, [findSafeEmptySpace, triggerThoughtPopup, whatsappUrl, spawnParticles, isHubOpen, currentForm]);

  // 8. Route Changes: Friendly greeting
  useEffect(() => {
    let thought: ValueThought;
    if (pathname === "/investment") {
      thought = {
        id: "route-invest",
        badge: "💎 Transparent Plans",
        title: "Fixed Investment, High Returns",
        thought: "Starter at ₹5,000 ($55), Scale at ₹9,999 ($110). 5-day delivery with zero hidden retainers.",
        actionText: "Message on WhatsApp",
        actionHref: whatsappUrl
      };
    } else if (pathname === "/ai-analyze") {
      thought = {
        id: "route-analyze",
        badge: "⚡ Website Audit",
        title: "Check Your Website Health",
        thought: "Is your site slow? Test your speed and see how Mowglai helps you convert more visitors.",
        actionText: "Audit Website",
        actionHref: "#audit-input"
      };
    } else if (pathname === "/contact") {
      thought = {
        id: "route-contact",
        badge: "📞 Quick Connect",
        title: "We're Here to Help",
        thought: "Reach out via WhatsApp or email us directly at tech@mowglai.com for clear pricing.",
        actionText: "Direct Call",
        actionHref: telUrl
      };
    } else {
      thought = CONSUMER_VALUE_STREAM[0];
    }

    const timer = setTimeout(() => {
      if (!isMinimized && !isHubOpen && !isRageMorphing) {
        triggerThoughtPopup(thought, 6500);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname, triggerThoughtPopup, whatsappUrl, telUrl, isMinimized, isHubOpen, isRageMorphing]);

  // 9. Pet Click & Rapid Tap (Rage Morph) Handler
  const handlePetClick = useCallback(() => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTimeRef.current;

    if (comboResetTimer.current) clearTimeout(comboResetTimer.current);

    if (timeSinceLastClick < 500) {
      clickCountRef.current += 1;
    } else {
      clickCountRef.current = 1;
    }
    lastClickTimeRef.current = now;

    // Reset counter if user stops tapping for 600ms
    comboResetTimer.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 600);

    // RAGE MORPH TRIGGER: 3 or more rapid clicks!
    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      triggerRageMorph();
      return;
    }

    // Normal single click: toggle full Hub modal
    if (!isHubOpen) {
      setIsHubOpen(true);
      setIsBubbleVisible(false);
      setPetState("celebrate");
      spawnParticles(2, "sparkle", `✨ ${currentForm.name}`);
      setTimeout(() => setPetState("idle"), 1200);
    } else {
      setIsHubOpen(false);
      setPetState("wave");
      setTimeout(() => setPetState("idle"), 800);
    }
  }, [isHubOpen, triggerRageMorph, spawnParticles, currentForm]);

  // Handle Q&A chip click inside Hub
  const handleSelectQuestion = (item: QuickQnA) => {
    setPetState("thinking");
    spawnParticles(1, "sparkle", "Thinking...");

    setTimeout(() => {
      setCurrentThought({
        id: "answer",
        badge: "💡 Mowglai Guide",
        title: item.q,
        thought: item.a,
        actionText: item.actionText || "Chat on WhatsApp",
        actionHref: item.actionHref || whatsappUrl
      });
      setPetState("celebrate");
      spawnParticles(2, "star", "Got it!");
      setTimeout(() => setPetState("idle"), 1400);
    }, 450);
  };

  if (!isLoaded) return null;

  // Determine speech bubble alignment
  const isRightSide = typeof window !== "undefined" && posX > (window.innerWidth / 2);

  return (
    <>
      {/* Floating Particle Reactions - strictly when pet is visible at the bottom of the page */}
      {isAtBottom && particles.map((p) => (
        <div
          key={p.id}
          className="fixed bottom-20 z-[42] pointer-events-none animate-in fade-in zoom-in duration-300 transition-all flex items-center gap-1 font-mono text-[11px] font-bold"
          style={{ left: `${p.x}px` }}
        >
          {p.icon === "heart" && <Heart className="w-4 h-4 fill-primary text-primary animate-bounce" />}
          {p.icon === "star" && <Star className="w-4 h-4 fill-amber-400 text-amber-400 animate-spin" />}
          {p.icon === "sparkle" && <Sparkles className="w-4 h-4 text-primary animate-pulse" />}
          {p.icon === "zap" && <Zap className="w-4 h-4 fill-amber-400 text-amber-400 animate-bounce" />}
          {p.icon === "flame" && <Flame className="w-4 h-4 fill-red-500 text-red-500 animate-bounce" />}
          {p.label && <span className="text-primary bg-background/95 px-1.5 py-0.5 rounded-full border border-primary/20 text-[10px] shadow-sm">{p.label}</span>}
        </div>
      ))}

      {/* Main Pet Container - STRICTLY ONLY VISIBLE WHEN USER SCROLLS TO THE END OF THE PAGE */}
      <div
        className={`fixed bottom-2.5 sm:bottom-3.5 z-40 select-none font-sans transition-all duration-500 ease-out will-change-transform ${
          isAtBottom
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-24 scale-75 pointer-events-none"
        }`}
        style={{
          transform: `translate3d(${posX}px, ${isAtBottom ? 0 : 80}px, 0)`,
        }}
        aria-hidden={!isAtBottom}
      >
        {/* COMPACT AUTO-THOUGHT SPEECH BUBBLE */}
        {isBubbleVisible && !isHubOpen && !isMinimized && (
          <div
            className={`mb-2 w-[270px] sm:w-[310px] max-w-[calc(100vw-36px)] bg-card/95 border border-primary/30 backdrop-blur-xl p-3 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35),0_0_20px_rgba(200,241,105,0.15)] animate-in fade-in slide-in-from-bottom-2 duration-200 ${
              isRightSide ? "origin-bottom-right -translate-x-[calc(100%-70px)]" : "origin-bottom-left"
            }`}
          >
            {/* Top Micro Progress Bar */}
            <div className="w-full h-0.5 bg-primary/10 rounded-full mb-2 overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${streamProgress}%` }}
              />
            </div>

            {/* Header: Badge + Close */}
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="text-[9.5px] font-bold text-primary uppercase tracking-wider font-mono bg-primary/10 px-1.5 py-0.5 rounded-md border border-primary/20">
                {currentThought.badge}
              </span>
              <button
                onClick={() => setIsBubbleVisible(false)}
                className="text-foreground/40 hover:text-foreground p-0.5 rounded transition"
                aria-label="Dismiss thought"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Title */}
            <h5 className="text-[12px] font-bold text-foreground font-display leading-tight line-clamp-1">
              {currentThought.title}
            </h5>

            {/* Concise Thought Text */}
            <p className="text-[11px] text-foreground/80 leading-snug line-clamp-2 mt-0.5 mb-2">
              {currentThought.thought}
            </p>

            {/* Compact Action Footer */}
            <div className="flex items-center gap-1.5 pt-1.5 border-t border-primary/15">
              <a
                href={currentThought.actionHref}
                target={currentThought.actionHref.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex-1 py-1 px-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-[10.5px] font-bold flex items-center justify-center gap-1 transition shadow-sm"
              >
                <span>{currentThought.actionText}</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </a>

              <button
                onClick={() => {
                  setIsHubOpen(true);
                  setIsBubbleVisible(false);
                }}
                className="py-1 px-2 rounded-lg border border-primary/25 text-primary hover:bg-primary/10 text-[10.5px] font-bold transition flex items-center gap-1"
                title="Open Interactive Hub"
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span>Hub</span>
              </button>
            </div>

            {/* Speech Tail */}
            <div
              className={`absolute -bottom-1.5 w-3 h-3 bg-card/95 border-b border-r border-primary/30 transform rotate-45 ${
                isRightSide ? "right-8" : "left-8"
              }`}
            />
          </div>
        )}

        {/* FULL EXPANDED HUB MODAL */}
        {isHubOpen && !isMinimized && (
          <div
            className={`mb-2.5 w-[330px] sm:w-[360px] max-w-[calc(100vw-32px)] max-h-[min(520px,76vh)] flex flex-col bg-card/98 border border-primary/35 backdrop-blur-2xl p-4 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(200,241,105,0.2)] animate-in fade-in zoom-in-95 duration-200 ${
              isRightSide ? "origin-bottom-right -translate-x-[calc(100%-70px)]" : "origin-bottom-left"
            }`}
          >
            {/* Form Title Banner */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-primary/15 text-[10.5px] font-mono">
              <span className="flex items-center gap-1.5 font-bold text-primary">
                <span>{currentForm.emoji}</span>
                <span>Active Form: {currentForm.name}</span>
              </span>
              <button
                onClick={triggerRageMorph}
                className="text-[9.5px] px-2 py-0.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 font-bold transition flex items-center gap-1"
                title="Click to force-morph pet into another form"
              >
                <Flame className="w-2.5 h-2.5 text-amber-400" />
                <span>Morph Roop</span>
              </button>
            </div>

            {/* Hub Header & Navigation Tabs */}
            <div className="flex items-center justify-between gap-1 pb-2.5 border-b border-primary/15 mb-3 shrink-0">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab("advice")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition flex items-center gap-1 ${
                    activeTab === "advice"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/10"
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Insights</span>
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition ${
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
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition ${
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
                onClick={() => setIsHubOpen(false)}
                className="text-foreground/50 hover:text-foreground p-1 rounded-md hover:bg-primary/10 transition"
                aria-label="Close Hub"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto pr-1 space-y-2.5 flex-1 scrollbar-thin scrollbar-thumb-primary/20">
              {/* TAB 1: INSIGHTS & FAQS */}
              {activeTab === "advice" && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider font-mono bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                      {currentThought.badge}
                    </span>
                    <span className="text-[10px] text-foreground/50 font-mono">
                      {activeSection}
                    </span>
                  </div>

                  <h4 className="text-[13px] font-bold text-foreground font-display leading-snug">
                    {currentThought.title}
                  </h4>

                  <p className="text-[11.5px] text-foreground/85 leading-relaxed">
                    {currentThought.thought}
                  </p>

                  {/* Frequently Asked Quick Chips */}
                  <div className="pt-2 border-t border-primary/10">
                    <div className="text-[10px] uppercase font-bold text-foreground/50 mb-1.5 tracking-wider">
                      Frequently Asked:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {CONSUMER_FAQS.map((faq, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSelectQuestion(faq)}
                          className="text-[10px] py-1 px-2 rounded-lg border border-primary/20 hover:border-primary hover:bg-primary/10 text-foreground/85 hover:text-primary transition font-medium text-left"
                        >
                          {faq.q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Action Buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-primary/15">
                    <a
                      href={currentThought.actionHref}
                      target={currentThought.actionHref.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex-1 py-1.5 px-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-[11px] font-bold flex items-center justify-center gap-1.5 transition shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>{currentThought.actionText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => {
                        setPetState("celebrate");
                        spawnParticles(3, "star", "🎉 Cheer!");
                        setTimeout(() => setPetState("idle"), 1400);
                      }}
                      className="py-1.5 px-2.5 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 text-[11px] font-bold transition flex items-center gap-1"
                      title="Cheer Mowglai Pet!"
                    >
                      <Zap className="w-3.5 h-3.5 fill-primary text-primary" />
                      <span>Cheer</span>
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: CURRENCY & LANGUAGE */}
              {activeTab === "settings" && (
                <div className="space-y-3 py-1">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-foreground/60 mb-1.5 tracking-wider flex items-center gap-1">
                      <Coins className="w-3 h-3 text-primary" />
                      <span>Select Currency:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(["INR", "USD", "EUR", "GBP"] as CurrencyType[]).map((cur) => (
                        <button
                          key={cur}
                          onClick={() => {
                            setCurrency(cur);
                            setPetState("jump");
                            spawnParticles(1, "sparkle");
                            setTimeout(() => setPetState("idle"), 700);
                          }}
                          className={`py-1.5 px-2 rounded-xl text-[10.5px] font-bold border transition flex items-center justify-between ${
                            currency === cur
                              ? "bg-primary text-primary-foreground border-primary shadow-sm"
                              : "border-primary/20 hover:border-primary hover:bg-primary/10 text-foreground/80"
                          }`}
                        >
                          <span>{cur === "INR" ? "₹ INR (India)" : cur === "USD" ? "$ USD (Global)" : cur === "EUR" ? "€ EUR" : "£ GBP"}</span>
                          {currency === cur && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-primary/15">
                    <div className="text-[10px] uppercase font-bold text-foreground/60 mb-1.5 tracking-wider flex items-center gap-1">
                      <Globe className="w-3 h-3 text-primary" />
                      <span>Website Language:</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { code: "en", label: "English" },
                        { code: "hi", label: "हिन्दी" },
                        { code: "es", label: "Español" },
                        { code: "fr", label: "Français" },
                        { code: "ja", label: "日本語" },
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as Language);
                            setPetState("jump");
                            spawnParticles(1, "sparkle");
                            setTimeout(() => setPetState("idle"), 700);
                          }}
                          className={`py-1 px-1.5 rounded-lg text-[10.5px] font-medium border text-center transition ${
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

                  <div className="pt-2 border-t border-primary/15 flex items-center justify-between">
                    <span className="text-[11px] text-foreground/80 font-medium flex items-center gap-1.5">
                      {theme === "dark" ? <Moon className="w-3.5 h-3.5 text-primary" /> : <Sun className="w-3.5 h-3.5 text-primary" />}
                      <span>Theme ({theme === "dark" ? "Dark" : "Light"})</span>
                    </span>
                    <button
                      onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                        setPetState("jump");
                        setTimeout(() => setPetState("idle"), 700);
                      }}
                      className="text-[10.5px] font-bold py-1 px-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition"
                    >
                      Toggle
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: CONTACT */}
              {activeTab === "contact" && (
                <div className="space-y-2 py-1">
                  <div className="text-[10px] uppercase font-bold text-foreground/60 mb-1 tracking-wider">
                    Connect Directly:
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2 rounded-xl border border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-bold text-[11.5px] text-foreground">WhatsApp Direct</div>
                      <div className="text-[10px] text-muted-foreground truncate">Instant quotes & answers</div>
                    </div>
                  </a>

                  {/* Call */}
                  <a
                    href={telUrl}
                    className="flex items-center gap-2.5 p-2 rounded-xl border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-bold text-[11.5px] text-foreground">Call Direct</div>
                      <div className="text-[10px] text-muted-foreground truncate">+91 94524 76331</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={mailtoUrl}
                    className="flex items-center gap-2.5 p-2 rounded-xl border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all group cursor-pointer"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="font-bold text-[11.5px] text-foreground">Technical Scope</div>
                      <div className="text-[10px] text-muted-foreground truncate font-mono">{email}</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Bubble Tail */}
            <div
              className={`absolute -bottom-1.5 w-3 h-3 bg-card/98 border-b border-r border-primary/35 transform rotate-45 ${
                isRightSide ? "right-8" : "left-8"
              }`}
            />
          </div>
        )}

        {/* Pet Sprite & Quick Dock Dock */}
        <div className="flex flex-col items-center">
          {isMinimized ? (
            <button
              onClick={() => {
                setIsMinimized(false);
                setPetState("wave");
                setTimeout(() => setPetState("idle"), 1000);
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/95 border border-primary/30 text-primary text-[11px] font-bold shadow-md hover:border-primary hover:scale-105 transition backdrop-blur-md"
              aria-label="Expand AI Assistant"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10.5px]">AI {currentForm.emoji}</span>
              <ChevronUp className="w-3 h-3" />
            </button>
          ) : (
            <div className="relative group flex flex-col items-center">
              {/* Pet Canvas Button - Repeated Taps Trigger Rage Morph! */}
              <button
                onClick={handlePetClick}
                onMouseEnter={() => {
                  if (petState === "idle") setPetState("wave");
                }}
                onMouseLeave={() => {
                  if (petState === "wave") setPetState("idle");
                }}
                className={`relative cursor-pointer transition-all duration-200 hover:scale-110 active:scale-90 focus:outline-none block ${
                  isRageMorphing ? "animate-bounce scale-125" : ""
                }`}
                aria-label={`Interact with Mowglai Pet (${currentForm.name})`}
                title={`Click me to open Hub! Rapidly tap 3+ times to make me angry and morph roop!`}
              >
                <canvas
                  ref={canvasRef}
                  width={56}
                  height={62}
                  className="w-[52px] h-[58px] sm:w-[58px] sm:h-[64px] transition-all duration-300"
                  style={{
                    imageRendering: "pixelated",
                    filter: currentForm.filterStyle,
                    transform:
                      petState === "runAlt" && direction === "left"
                        ? "scaleX(-1)"
                        : isRageMorphing
                        ? "scale(1.2) rotate(12deg)"
                        : "none"
                  }}
                />

                {/* State Glow Badge */}
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: currentForm.glowColor }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: currentForm.glowColor }}
                  />
                </span>
              </button>

              {/* Integrated Persistent Quick Dock with Active Form Badge */}
              <div className="flex items-center gap-1 mt-1 bg-background/95 border border-primary/25 backdrop-blur-md px-2 py-0.5 rounded-full text-[9.5px] text-foreground/80 shadow-md transition-all">
                {/* Form & Outfit Badge (Click to trigger rage morph directly) */}
                <button
                  onClick={triggerRageMorph}
                  className="hover:text-primary font-bold transition flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-primary/10 text-primary"
                  title={`Outfit: ${currentForm.outfitName} (Click to change outfit!)`}
                >
                  <span>{currentForm.emoji}</span>
                  <span className="font-mono text-[9px]">{currentForm.outfitBadge}</span>
                </button>

                <span className="text-foreground/30">•</span>

                {/* Currency quick toggle */}
                <button
                  onClick={() => {
                    const nextCur = currency === "INR" ? "USD" : "INR";
                    setCurrency(nextCur);
                    setPetState("jump");
                    spawnParticles(1, "sparkle");
                    setTimeout(() => setPetState("idle"), 600);
                  }}
                  className="hover:text-primary font-bold transition flex items-center gap-0.5 px-1 py-0.5 rounded hover:bg-primary/10"
                  title="Toggle Currency"
                >
                  <Coins className="w-2.5 h-2.5 text-primary" />
                  <span>{currency === "INR" ? "₹" : "$"}</span>
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

                {/* Hub Modal Toggle */}
                <button
                  onClick={() => {
                    setIsHubOpen((prev) => !prev);
                    setIsBubbleVisible(false);
                  }}
                  className="hover:text-primary transition px-1 py-0.5 rounded hover:bg-primary/10 font-bold flex items-center gap-0.5"
                  title={isHubOpen ? "Close Hub" : "Open Insights & Help"}
                >
                  <Sparkles className="w-2.5 h-2.5 text-primary" />
                </button>

                <span className="text-foreground/30">•</span>

                {/* Minimize Button */}
                <button
                  onClick={() => {
                    setIsMinimized(true);
                    setIsHubOpen(false);
                    setIsBubbleVisible(false);
                  }}
                  className="text-foreground/40 hover:text-foreground transition px-1 py-0.5 rounded hover:bg-primary/10"
                  title="Minimize"
                  aria-label="Minimize"
                >
                  <Minus className="w-2.5 h-2.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
