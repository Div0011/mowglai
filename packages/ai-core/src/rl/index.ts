export type TaskType = "general" | "code_review" | "sql_generation" | "draft_proposal" | "audit_analysis";

export interface RLState {
  task: TaskType;
  promptComplexity: "low" | "medium" | "high";
  tenantTier: "standard" | "enterprise" | "pilot";
  latencyBudgetMs?: number;
}

export interface RLAction {
  id: string;
  model: string;
  temperature: number;
  retrievalTopK: number;
  maxOutputTokens: number;
}

export interface RLExperience {
  id: string;
  tenantId: string;
  state: RLState;
  action: RLAction;
  reward: number;
  timestamp: string;
}

export interface RLFeedback {
  userRating?: number; // -1 to +1
  success: boolean;
  latencyMs: number;
  tokensUsed?: number;
}

export const CANDIDATE_ACTIONS: RLAction[] = [
  {
    id: "fast_efficient",
    model: "gemini-2.5-flash",
    temperature: 0.2,
    retrievalTopK: 3,
    maxOutputTokens: 1024,
  },
  {
    id: "balanced_general",
    model: "gemini-2.5-flash",
    temperature: 0.7,
    retrievalTopK: 5,
    maxOutputTokens: 2048,
  },
  {
    id: "deep_reasoning_pro",
    model: "gemini-2.5-pro",
    temperature: 0.1,
    retrievalTopK: 10,
    maxOutputTokens: 4096,
  },
  {
    id: "creative_exploration",
    model: "gemini-2.5-pro",
    temperature: 0.9,
    retrievalTopK: 5,
    maxOutputTokens: 2048,
  },
];

export function computeRLReward(feedback: RLFeedback, latencyBudgetMs = 15000): number {
  let reward = 0;

  // Base success/failure score
  reward += feedback.success ? 1.0 : -1.0;

  // Latency penalty
  const latencyRatio = Math.min(2.0, feedback.latencyMs / Math.max(1000, latencyBudgetMs));
  reward -= latencyRatio * 0.4;

  // Token efficiency penalty
  if (feedback.tokensUsed && feedback.tokensUsed > 0) {
    const tokenPenalty = Math.min(0.3, (feedback.tokensUsed / 4000) * 0.3);
    reward -= tokenPenalty;
  }

  // Direct user feedback (-1.0 to +1.0)
  if (feedback.userRating !== undefined) {
    const clampedRating = Math.max(-1.0, Math.min(1.0, feedback.userRating));
    reward += clampedRating * 0.5;
  }

  // Clamp total reward to [-2.0, +2.0]
  return Math.max(-2.0, Math.min(2.0, Math.round(reward * 1000) / 1000));
}

export class ReinforcementLearningAgent {
  private qTable: Map<string, Map<string, number>> = new Map();
  private actionCounts: Map<string, Map<string, number>> = new Map();
  private stateCounts: Map<string, number> = new Map();
  private experienceBuffer: RLExperience[] = [];
  private epsilon: number;
  private learningRate: number;
  private ucbExplorationC: number;

  constructor(options: { epsilon?: number; learningRate?: number; ucbExplorationC?: number } = {}) {
    this.epsilon = options.epsilon ?? 0.15;
    this.learningRate = options.learningRate ?? 0.2;
    this.ucbExplorationC = options.ucbExplorationC ?? 1.414;
  }

  private getStateKey(tenantId: string, state: RLState): string {
    return `${tenantId}::${state.task}::${state.promptComplexity}::${state.tenantTier}`;
  }

  public selectAction(tenantId: string, state: RLState, forceExplore = false): RLAction {
    if (!tenantId || tenantId.trim() === "") {
      throw new Error("tenantId is required for RL policy selection");
    }

    const stateKey = this.getStateKey(tenantId, state);
    const nState = this.stateCounts.get(stateKey) ?? 0;

    // Epsilon-greedy exploration or UCB exploration
    const shouldRandom = forceExplore || (Math.random() < this.epsilon && nState < 100);
    if (shouldRandom) {
      const idx = Math.floor(Math.random() * CANDIDATE_ACTIONS.length);
      return CANDIDATE_ACTIONS[idx];
    }

    // UCB1 action selection: Q(s,a) + c * sqrt(ln(N(s)) / N(s,a))
    const qMap = this.qTable.get(stateKey) ?? new Map<string, number>();
    const countMap = this.actionCounts.get(stateKey) ?? new Map<string, number>();

    let bestAction = CANDIDATE_ACTIONS[0];
    let bestScore = -Infinity;

    for (const action of CANDIDATE_ACTIONS) {
      const q = qMap.get(action.id) ?? 0.0;
      const nCount = countMap.get(action.id) ?? 0;

      let score: number;
      if (nCount === 0) {
        score = 1000.0; // Ensure unvisited actions are tried first
      } else {
        const ucb = this.ucbExplorationC * Math.sqrt(Math.log(nState + 1) / nCount);
        score = q + ucb;
      }

      if (score > bestScore) {
        bestScore = score;
        bestAction = action;
      }
    }

    return bestAction;
  }

  public updatePolicy(
    tenantId: string,
    state: RLState,
    action: RLAction,
    feedback: RLFeedback,
  ): { reward: number; newQ: number } {
    if (!tenantId || tenantId.trim() === "") {
      throw new Error("tenantId is required for RL policy update");
    }

    const reward = computeRLReward(feedback, state.latencyBudgetMs);
    const stateKey = this.getStateKey(tenantId, state);

    if (!this.qTable.has(stateKey)) {
      this.qTable.set(stateKey, new Map());
    }
    if (!this.actionCounts.has(stateKey)) {
      this.actionCounts.set(stateKey, new Map());
    }

    const qMap = this.qTable.get(stateKey)!;
    const countMap = this.actionCounts.get(stateKey)!;

    const oldQ = qMap.get(action.id) ?? 0.0;
    const nCount = (countMap.get(action.id) ?? 0) + 1;
    const nState = (this.stateCounts.get(stateKey) ?? 0) + 1;

    countMap.set(action.id, nCount);
    this.stateCounts.set(stateKey, nState);

    // Q-value update: Q = Q + alpha * (reward - Q)
    const newQ = oldQ + this.learningRate * (reward - oldQ);
    qMap.set(action.id, newQ);

    // Experience replay storage
    const experience: RLExperience = {
      id: "exp_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      tenantId,
      state,
      action,
      reward,
      timestamp: new Date().toISOString(),
    };
    this.experienceBuffer.push(experience);
    if (this.experienceBuffer.length > 500) {
      this.experienceBuffer.shift();
    }

    return { reward, newQ };
  }

  public getQValue(tenantId: string, state: RLState, actionId: string): number {
    const stateKey = this.getStateKey(tenantId, state);
    return this.qTable.get(stateKey)?.get(actionId) ?? 0.0;
  }

  public getExperienceReplay(tenantId?: string): RLExperience[] {
    if (tenantId) {
      return this.experienceBuffer.filter((exp) => exp.tenantId === tenantId);
    }
    return [...this.experienceBuffer];
  }
}

// Global default singleton for process-level agent routing
export const defaultRLAgent = new ReinforcementLearningAgent();
