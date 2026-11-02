import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
  CANDIDATE_ACTIONS,
  computeRLReward,
  ReinforcementLearningAgent,
  type RLAction,
  type RLFeedback,
  type RLState,
} from "./index.ts";

describe("Reinforcement Learning Agent for AI Core", () => {
  const sampleState: RLState = {
    task: "code_review",
    promptComplexity: "medium",
    tenantTier: "enterprise",
    latencyBudgetMs: 5000,
  };

  test("calculates multi-objective rewards accurately", () => {
    // Fast successful response with positive user feedback
    const positiveFeedback: RLFeedback = {
      success: true,
      latencyMs: 1200,
      tokensUsed: 400,
      userRating: 1.0,
    };
    const rewardHigh = computeRLReward(positiveFeedback, 5000);
    assert.ok(rewardHigh > 0.8, "High quality fast response should have high reward");

    // Slow failed response with negative feedback
    const negativeFeedback: RLFeedback = {
      success: false,
      latencyMs: 10000,
      tokensUsed: 3500,
      userRating: -1.0,
    };
    const rewardLow = computeRLReward(negativeFeedback, 5000);
    assert.ok(rewardLow < -1.0, "Slow failed response should have strongly negative reward");
  });

  test("selects unvisited candidate actions during initial exploration", () => {
    const agent = new ReinforcementLearningAgent({ epsilon: 0.0 });
    const selected = agent.selectAction("tenant-1", sampleState);
    assert.ok(CANDIDATE_ACTIONS.some((a) => a.id === selected.id));
  });

  test("updates Q-values according to reward feedback", () => {
    const agent = new ReinforcementLearningAgent({ learningRate: 0.5, epsilon: 0.0 });
    const action: RLAction = CANDIDATE_ACTIONS[0];

    const initialQ = agent.getQValue("tenant-1", sampleState, action.id);
    assert.equal(initialQ, 0.0);

    const feedback: RLFeedback = {
      success: true,
      latencyMs: 800,
      tokensUsed: 200,
      userRating: 1.0,
    };
    const { reward, newQ } = agent.updatePolicy("tenant-1", sampleState, action, feedback);
    assert.ok(reward > 0);
    assert.ok(newQ > 0);
    assert.equal(agent.getQValue("tenant-1", sampleState, action.id), newQ);
  });

  test("enforces tenant boundary isolation in learned Q-values", () => {
    const agent = new ReinforcementLearningAgent({ learningRate: 0.5, epsilon: 0.0 });
    const action: RLAction = CANDIDATE_ACTIONS[2]; // deep reasoning

    // Tenant A trains with high reward
    agent.updatePolicy(
      "tenant-a",
      sampleState,
      action,
      { success: true, latencyMs: 500, userRating: 1.0 },
    );

    // Tenant A should have positive Q-value
    const tenantAQ = agent.getQValue("tenant-a", sampleState, action.id);
    assert.ok(tenantAQ > 0);

    // Tenant B must remain 0 (no cross-tenant leakage)
    const tenantBQ = agent.getQValue("tenant-b", sampleState, action.id);
    assert.equal(tenantBQ, 0.0, "Tenant B must not receive Tenant A learned policy");
  });

  test("converges toward the highest-reward action under exploitation", () => {
    const agent = new ReinforcementLearningAgent({ learningRate: 0.4, epsilon: 0.0 });
    const preferredAction = CANDIDATE_ACTIONS[1]; // balanced_general

    // Train preferred action with 10 high-reward steps
    for (let i = 0; i < 10; i++) {
      agent.updatePolicy("tenant-alpha", sampleState, preferredAction, {
        success: true,
        latencyMs: 400,
        tokensUsed: 150,
        userRating: 1.0,
      });
    }

    // Train other actions with lower rewards
    for (const action of CANDIDATE_ACTIONS) {
      if (action.id !== preferredAction.id) {
        agent.updatePolicy("tenant-alpha", sampleState, action, {
          success: false,
          latencyMs: 4000,
          userRating: -0.5,
        });
      }
    }

    // Exploitation selection should pick the preferred action
    const selected = agent.selectAction("tenant-alpha", sampleState);
    assert.equal(selected.id, preferredAction.id, "Agent must exploit the highest-reward action");
  });

  test("records experiences in replay buffer with tenant context", () => {
    const agent = new ReinforcementLearningAgent();
    agent.updatePolicy("tenant-xyz", sampleState, CANDIDATE_ACTIONS[0], {
      success: true,
      latencyMs: 900,
    });

    const experiences = agent.getExperienceReplay("tenant-xyz");
    assert.equal(experiences.length, 1);
    assert.equal(experiences[0].tenantId, "tenant-xyz");
    assert.equal(experiences[0].action.id, CANDIDATE_ACTIONS[0].id);
  });
});
