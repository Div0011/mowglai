"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Terminal, X, ChevronRight, Sparkles, Zap, Minimize2, Maximize2, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

interface LogMessage {
  id: number;
  type: "system" | "user" | "pet";
  text: string;
  time: string;
}

export default function PixelTerminalPet() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [petMood, setPetMood] = useState<"idle" | "happy" | "thinking" | "sleeping">("idle");
  const [inputCommand, setInputCommand] = useState("");
  const [logs, setLogs] = useState<LogMessage[]>([
    {
      id: 1,
      type: "system",
      text: "MOWGLAI PIXEL-TERMINAL v2.4 INITIALIZED",
      time: "00:00:01"
    },
    {
      id: 2,
      type: "pet",
      text: "Beep-boop! I'm your pixel terminal guide. Tap commands below or type 'help'!",
      time: "00:00:02"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getPetFace = () => {
    switch (petMood) {
      case "happy":
        return "[^ ‿ ^]";
      case "thinking":
        return "[o _ O]";
      case "sleeping":
        return "[- _ -] zZz";
      default:
        return "[o _ o]";
    }
  };

  const addLog = useCallback((text: string, type: "system" | "user" | "pet") => {
    const d = new Date();
    const time = d.toTimeString().split(" ")[0];
    setLogs((prev) => [...prev, { id: Date.now(), text, type, time }]);
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    addLog(`> ${cmd}`, "user");
    setPetMood("thinking");

    setTimeout(() => {
      if (trimmed === "help") {
        addLog("Available commands:\n• quote : Instant project pricing\n• gmb   : 48h Google Maps verification guide\n• mcp   : Connect ChatGPT / Gemini AI assistant\n• cities: Targeted SEO locations\n• whatsapp: Connect with live technical lead\n• clear : Clear terminal history", "pet");
        setPetMood("happy");
      } else if (trimmed === "quote" || trimmed.includes("price") || trimmed.includes("pricing")) {
        addLog("MOWGLAI PACKAGES:\n1. Starter Web: ₹5,000 INR ($55 USD) [5-Day Turnaround]\n2. GMB & Local 3-Pack: ₹4,999 INR ($59 USD) [48 Hours]\n3. Scale Architecture: ₹9,999 INR ($110 USD) [7-10 Days]\n4. E-Commerce Pro: ₹12,999 INR ($149 USD) [14 Days]\nVisit /investment or type 'whatsapp' to book!", "pet");
        setPetMood("happy");
      } else if (trimmed === "gmb" || trimmed.includes("google")) {
        addLog("48-HOUR GMB PROTOCOL:\n• Google Business Profile Verification setup\n• Local 3-Pack keyword map clustering\n• Direct customer call & walking direction actions\n• Automated 5-star review collection funnel", "pet");
        setPetMood("happy");
      } else if (trimmed === "mcp" || trimmed.includes("ai")) {
        addLog("AI & MCP INTEGRATION:\n• MCP Schema: https://mowglai.com/mcp.json\n• OpenAPI: https://mowglai.com/openapi.json\n• ChatGPT Plugin: https://mowglai.com/.well-known/ai-plugin.json\nOne-tap AI actions enabled on your phone!", "pet");
        setPetMood("happy");
      } else if (trimmed === "cities" || trimmed.includes("city")) {
        addLog("NATIONAL & GLOBAL HUBS:\n• Bengaluru (/best-web-services-bangalore)\n• Chennai (/best-web-services-chennai)\n• Delhi NCR & Gurugram (/best-web-services-delhi-ncr)\n• Pune (/best-web-services-pune)\n• Lucknow (/best-web-services-lucknow)\n• Kanpur (/best-web-services-kanpur)", "pet");
        setPetMood("happy");
      } else if (trimmed === "whatsapp") {
        addLog("Connecting to Mowglai technical lead: +91-9452476331...", "system");
        window.open("https://wa.me/919452476331?text=Hi%20Mowglai,%20I'm%20exploring%20web%20and%20AI%20services!", "_blank");
        setPetMood("happy");
      } else if (trimmed === "clear") {
        setLogs([]);
        setPetMood("idle");
      } else {
        addLog(`Command '${trimmed}' received. Telemetry active on route: ${pathname}. Type 'help' for options.`, "pet");
        setPetMood("idle");
      }
    }, 300);

    setInputCommand("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Route telemetry alert
  useEffect(() => {
    addLog(`Navigated to ${pathname} • Telemetry OK`, "system");
  }, [pathname, addLog]);

  return (
    <div className="fixed bottom-5 right-5 z-[9990] font-mono select-none">
      {/* Floating Pet Pill Button (When Minimized) */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-background/90 border border-primary/40 text-primary shadow-[0_0_20px_rgba(200,241,105,0.2)] hover:border-primary hover:scale-105 transition-all duration-300 backdrop-blur-md"
          aria-label="Open Pixel Terminal Pet"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-black tracking-widest text-foreground group-hover:text-primary transition-colors">
            {getPetFace()}
          </span>
          <span className="text-[10px] tracking-wider uppercase font-bold text-primary/80">
            Pixel Terminal
          </span>
        </button>
      ) : (
        /* Expanded Retro Pixel Terminal */
        <div className="w-[340px] sm:w-[400px] h-[460px] rounded-2xl bg-[#080d09]/95 border-2 border-primary/40 shadow-[0_0_40px_rgba(200,241,105,0.25)] flex flex-col overflow-hidden backdrop-blur-xl">
          {/* Terminal Title Bar */}
          <div className="px-4 py-2.5 bg-primary/10 border-b border-primary/30 flex items-center justify-between text-xs text-primary font-bold">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="tracking-wider text-foreground uppercase">Mowglai Pixel Pet</span>
              <span className="text-[11px] px-1.5 py-0.2 rounded bg-primary/20 text-primary">
                {getPetFace()}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:text-foreground text-primary/70 transition-colors"
                title="Minimize"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:text-red-400 text-primary/70 transition-colors"
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Telemetry Bar */}
          <div className="px-3 py-1.5 bg-black/40 border-b border-primary/20 flex items-center justify-between text-[10px] text-foreground/60">
            <span>ROUTE: {pathname}</span>
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYS SPEED: 98/100
            </span>
          </div>

          {/* Terminal Log Output */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`p-2 rounded-lg text-xs leading-relaxed ${
                  log.type === "system"
                    ? "bg-white/[0.02] text-foreground/50 border border-white/5 font-mono text-[11px]"
                    : log.type === "user"
                    ? "bg-primary/15 text-primary border border-primary/30 ml-6 text-right"
                    : "bg-primary/5 text-foreground/90 border border-primary/20 mr-4"
                }`}
              >
                <div className="text-[9px] opacity-40 uppercase tracking-widest mb-0.5">
                  [{log.time}] {log.type}
                </div>
                <div className="whitespace-pre-wrap">{log.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Command Chips */}
          <div className="px-3 py-2 bg-black/60 border-t border-primary/20 flex flex-wrap gap-1.5">
            {[
              { label: "⚡ Quote", cmd: "quote" },
              { label: "📍 GMB (48h)", cmd: "gmb" },
              { label: "🤖 AI MCP", cmd: "mcp" },
              { label: "💬 WhatsApp", cmd: "whatsapp" },
            ].map((chip) => (
              <button
                key={chip.cmd}
                onClick={() => handleCommand(chip.cmd)}
                className="px-2.5 py-1 rounded-md bg-primary/10 hover:bg-primary/25 border border-primary/30 text-primary text-[10px] font-bold uppercase transition-all"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Terminal Prompt Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(inputCommand);
            }}
            className="p-2.5 bg-black/80 border-t border-primary/30 flex items-center gap-2"
          >
            <ChevronRight className="w-4 h-4 text-primary shrink-0" />
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="Type 'help' or command..."
              className="flex-1 bg-transparent text-foreground placeholder:text-foreground/40 text-xs focus:outline-none font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded bg-primary text-primary-foreground text-xs font-bold uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              Run
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
