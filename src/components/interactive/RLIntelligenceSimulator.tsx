"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Cpu, Zap, Activity, ShieldCheck, Play, RotateCcw, TrendingUp } from "lucide-react";

interface ArmState {
  name: string;
  model: string;
  pulls: number;
  totalReward: number;
  avgReward: number;
  qValue: number;
  ucbScore: number;
  avgLatencyMs: number;
  color: string;
}

export default function RLIntelligenceSimulator() {
  const [taskType, setTaskType] = useState<"general" | "code_review" | "research" | "operations">("general");
  const [totalEpisodes, setTotalEpisodes] = useState(14);
  const [lastAction, setLastAction] = useState<string | null>("gemini-2.5-flash");
  const [lastReward, setLastReward] = useState<number>(0.84);
  const [isSimulating, setIsSimulating] = useState(false);
  const [logTrace, setLogTrace] = useState<Array<{ step: number; model: string; latency: number; reward: number }>>([
    { step: 12, model: "gemini-2.5-flash", latency: 240, reward: 0.88 },
    { step: 13, model: "gemini-1.5-pro", latency: 850, reward: 0.94 },
    { step: 14, model: "gemini-2.5-flash", latency: 220, reward: 0.89 },
  ]);

  const [arms, setArms] = useState<Record<string, ArmState>>({
    "gemini-2.5-flash": {
      name: "Fast Low-Latency Arm",
      model: "gemini-2.5-flash",
      pulls: 9,
      totalReward: 7.82,
      avgReward: 0.868,
      qValue: 0.87,
      ucbScore: 1.12,
      avgLatencyMs: 230,
      color: "from-lime-400 to-emerald-500",
    },
    "gemini-1.5-pro": {
      name: "Deep Reasoning Arm",
      model: "gemini-1.5-pro",
      pulls: 4,
      totalReward: 3.76,
      avgReward: 0.94,
      qValue: 0.94,
      ucbScore: 1.25,
      avgLatencyMs: 910,
      color: "from-indigo-400 to-purple-500",
    },
    "llama-3.3-70b": {
      name: "Open-Weights Fallback",
      model: "llama-3.3-70b",
      pulls: 1,
      totalReward: 0.72,
      avgReward: 0.72,
      qValue: 0.72,
      ucbScore: 1.48,
      avgLatencyMs: 580,
      color: "from-amber-400 to-orange-500",
    },
  });

  const simulateStep = () => {
    setIsSimulating(true);

    setTimeout(() => {
      // Calculate UCB scores: Q(a) + c * sqrt(ln(N) / N_a)
      const c = 0.8;
      const nextN = totalEpisodes + 1;
      let selectedModel = "gemini-2.5-flash";
      let highestUcb = -1;

      Object.entries(arms).forEach(([key, arm]) => {
        const ucb = arm.avgReward + c * Math.sqrt(Math.log(nextN) / Math.max(1, arm.pulls));
        if (ucb > highestUcb) {
          highestUcb = ucb;
          selectedModel = key;
        }
      });

      // Synthetic latency & tokens based on task type
      const latency = selectedModel === "gemini-2.5-flash"
        ? Math.floor(Math.random() * 80) + 210
        : selectedModel === "gemini-1.5-pro"
        ? Math.floor(Math.random() * 200) + 820
        : Math.floor(Math.random() * 150) + 520;

      const baseSuccess = taskType === "code_review" && selectedModel === "gemini-1.5-pro" ? 1.0 : 0.95;
      const latencyPenalty = 0.4 * (latency / 2000);
      const computedReward = parseFloat(Math.max(0.1, baseSuccess - latencyPenalty).toFixed(3));

      // Update arm metrics
      const currentArm = arms[selectedModel];
      const newPulls = currentArm.pulls + 1;
      const newTotalReward = currentArm.totalReward + computedReward;
      const newAvgReward = parseFloat((newTotalReward / newPulls).toFixed(3));

      setArms((prev) => ({
        ...prev,
        [selectedModel]: {
          ...currentArm,
          pulls: newPulls,
          totalReward: newTotalReward,
          avgReward: newAvgReward,
          qValue: newAvgReward,
          ucbScore: parseFloat((newAvgReward + c * Math.sqrt(Math.log(nextN + 1) / newPulls)).toFixed(3)),
          avgLatencyMs: Math.round((currentArm.avgLatencyMs * currentArm.pulls + latency) / newPulls),
        },
      }));

      setTotalEpisodes(nextN);
      setLastAction(selectedModel);
      setLastReward(computedReward);
      setLogTrace((prev) => [
        { step: nextN, model: selectedModel, latency, reward: computedReward },
        ...prev.slice(0, 4),
      ]);
      setIsSimulating(false);
    }, 450);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#0c0d12]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.7)] relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-bold text-primary uppercase tracking-wider mb-2">
            <Cpu className="w-3.5 h-3.5" />
            Reinforcement Learning Engine
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
            Live Contextual Bandit Router
          </h3>
          <p className="text-white/60 text-sm max-w-xl mt-1">
            Autonomous policy optimization balancing latency SLA, token budget, and task accuracy via Upper Confidence Bound (UCB1).
          </p>
        </div>

        {/* Task type pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/10">
          {(["general", "code_review", "research", "operations"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTaskType(t)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                taskType === t ? "bg-primary text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {t.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Model Arms Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 relative z-10">
        {Object.entries(arms).map(([key, arm]) => {
          const isWinner = lastAction === key;

          return (
            <div
              key={key}
              className={`p-5 rounded-2xl border transition-all relative overflow-hidden ${
                isWinner
                  ? "bg-white/[0.06] border-primary shadow-[0_0_25px_rgba(200,241,105,0.15)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-white uppercase">{arm.name}</span>
                {isWinner && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary text-black font-bold animate-pulse">
                    ACTIVE ARM
                  </span>
                )}
              </div>

              <div className="text-sm font-mono text-primary font-bold mb-4">{arm.model}</div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between text-white/60">
                  <span>Q-Value (Avg R):</span>
                  <span className="text-white font-bold">{arm.avgReward.toFixed(3)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>UCB Score:</span>
                  <span className="text-emerald-400 font-bold">{arm.ucbScore.toFixed(3)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Avg Latency:</span>
                  <span className="text-white font-bold">{arm.avgLatencyMs}ms</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Total Pulls:</span>
                  <span className="text-white font-bold">{arm.pulls}</span>
                </div>
              </div>

              {/* Progress Bar of Weight */}
              <div className="mt-4 pt-3 border-t border-white/10">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${arm.color} transition-all duration-500`}
                    style={{ width: `${Math.min(100, arm.avgReward * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulator Control & Telemetry Feed */}
      <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={isSimulating}
            onClick={simulateStep}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-display font-bold text-xs uppercase tracking-wider hover:bg-primary/90 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(200,241,105,0.3)] cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-black" />
            <span>Dispatch Synthetic Task</span>
          </button>

          <span className="text-xs font-mono text-white/50">
            Total Episodes: <strong className="text-white">{totalEpisodes}</strong> · Last Reward:{" "}
            <strong className="text-emerald-400">{lastReward.toFixed(3)}</strong>
          </span>
        </div>

        {/* Live log ticker */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-md text-[11px] font-mono text-white/70">
          {logTrace.slice(0, 2).map((item, i) => (
            <span key={i} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 whitespace-nowrap">
              #{item.step} → {item.model} ({item.latency}ms, R={item.reward})
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
