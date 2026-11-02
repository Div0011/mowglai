"use client";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Unit = "overview" | "commerce" | "logistics" | "cleantech" | "talent";
type Role = "CEO" | "CTO" | "PM";

interface DispatchTicket {
  id: string;
  vehicle: string;
  location: string;
  issue: string;
  status: "Assigned" | "In Transit" | "Resolved";
  eta: string;
  createdAt: string;
}

const units: { id: Unit; label: string; sub: string; icon: string }[] = [
  { id: "overview", label: "Command HQ", sub: "Company overview", icon: "⌂" },
  { id: "commerce", label: "Commerce OS", sub: "DukaanMitra", icon: "▦" },
  { id: "logistics", label: "Logistics OS", sub: "TruckWala 24×7", icon: "⇄" },
  { id: "cleantech", label: "CleanTech OS", sub: "SolarHub", icon: "☼" },
  { id: "talent", label: "Talent OS", sub: "HireSaathi", icon: "◎" },
];

export default function CompanyOSPage() {
  const [unit, setUnit] = useState<Unit>("overview");
  const [role, setRole] = useState<Role>("CEO");
  const [command, setCommand] = useState("");
  const [commandResult, setCommandResult] = useState("");
  const [rlMetadata, setRlMetadata] = useState<{ actionId: string; reward: number; model: string } | null>(null);
  const [commandLoading, setCommandLoading] = useState(false);

  // Commerce OS State
  const [customer, setCustomer] = useState("Ramesh Kirana Store");
  const [items, setItems] = useState([
    { name: "Tata Salt 1kg", qty: 5, price: 28 },
    { name: "Fortune Oil 1L", qty: 2, price: 165 },
  ]);
  const [invoices, setInvoices] = useState<{ id: string; customer: string; total: number; date: string }[]>([
    { id: "INV-8091", customer: "Gupta General Store", total: 1450, date: "2026-11-01" },
  ]);

  // Logistics OS State
  const [truck, setTruck] = useState({ vehicle: "UP-78-BT-4412", location: "NH-19 Toll Plaza, Kanpur", issue: "Engine trouble" });
  const [tickets, setTickets] = useState<DispatchTicket[]>([
    {
      id: "DISP-101",
      vehicle: "HR-55-AJ-9021",
      location: "KMP Expressway km 42",
      issue: "Tyre puncture",
      status: "In Transit",
      eta: "18 mins",
      createdAt: "10 mins ago",
    },
  ]);
  const [recentTicket, setRecentTicket] = useState<DispatchTicket | null>(null);

  // CleanTech OS State
  const [kw, setKw] = useState("5");
  const [dailyYield, setDailyYield] = useState("4.2");
  const [tariff, setTariff] = useState("7.5");

  // Talent OS State
  const [job, setJob] = useState("Frontend Developer");
  const [interviewQuestions, setInterviewQuestions] = useState<string[]>([
    "Explain how you measure Cumulative Layout Shift (CLS) in a Next.js production application.",
    "How does Reinforcement Learning from Human Feedback (RLHF) differ from online contextual bandits?",
  ]);
  const [userAnswer, setUserAnswer] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [evaluating, setEvaluating] = useState(false);

  // Calculations
  const subtotal = useMemo(() => items.reduce((n, x) => n + x.qty * x.price, 0), [items]);
  const gst = useMemo(() => Math.round(subtotal * 0.05 * 100) / 100, [subtotal]);
  const grandTotal = subtotal + gst;

  const monthlyKwh = Math.max(0, Number(kw) || 0) * Math.max(0, Number(dailyYield) || 0) * 30;
  const monthlySavings = monthlyKwh * Math.max(0, Number(tariff) || 0);
  const annualCo2OffsetKg = Math.round(monthlyKwh * 12 * 0.82);

  async function submitCommand() {
    if (!command.trim()) {
      setCommandResult("Enter a command or question first.");
      return;
    }
    setCommandLoading(true);
    setCommandResult("");
    setRlMetadata(null);
    try {
      const response = await fetch("/api/company-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: command.trim(), task: "operations", tenantId: "mowglai-executive" }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || "AI request failed.");
      setCommandResult(payload.text || "Execution finished.");
      if (payload.rl) {
        setRlMetadata({
          actionId: payload.rl.actionId,
          reward: payload.rl.reward,
          model: payload.model,
        });
      }
    } catch (error) {
      setCommandResult(error instanceof Error ? error.message : "AI service encountered an unexpected error.");
    } finally {
      setCommandLoading(false);
    }
  }

  function handleSaveInvoice() {
    const newInv = {
      id: "INV-" + Math.floor(1000 + Math.random() * 9000),
      customer,
      total: grandTotal,
      date: new Date().toISOString().split("T")[0],
    };
    setInvoices([newInv, ...invoices]);
    alert("Invoice " + newInv.id + " generated and committed to Commerce ledger.");
  }

  function handleCreateDispatch() {
    if (!truck.vehicle || !truck.location) {
      alert("Please provide vehicle number and location.");
      return;
    }
    const newTicket: DispatchTicket = {
      id: "DISP-" + Math.floor(100 + Math.random() * 900),
      vehicle: truck.vehicle,
      location: truck.location,
      issue: truck.issue,
      status: "Assigned",
      eta: "25 mins",
      createdAt: "Just now",
    };
    setTickets([newTicket, ...tickets]);
    setRecentTicket(newTicket);
  }

  async function handleEvaluateAnswer() {
    if (!userAnswer.trim()) {
      alert("Please write your answer before submitting.");
      return;
    }
    setEvaluating(true);
    setEvaluation("");
    try {
      const res = await fetch("/api/company-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `Evaluate this interview answer for the role of ${job}:\n\nQuestion: ${interviewQuestions[0]}\n\nAnswer: ${userAnswer.trim()}\n\nProvide constructive feedback, score out of 10, and suggested improvements.`,
          task: "general",
          tenantId: "hiresaathi-talent",
        }),
      });
      const data = await res.json();
      setEvaluation(data.text || "Evaluation complete.");
    } catch {
      setEvaluation("Evaluation failed. Please try again.");
    } finally {
      setEvaluating(false);
    }
  }

  const metrics: string[][] =
    role === "CEO"
      ? [
          ["Portfolio Projects", "56", "Active ecosystem registry"],
          ["Business Units", "04", "DukaanMitra · TruckWala · SolarHub · HireSaathi"],
          ["Shared Core", "v0.2.0", "Core contracts & RL engine live"],
          ["Production Status", "Active", "Unified, secured & fully verified"],
        ]
      : role === "CTO"
      ? [
          ["Core Contracts", "@mowglai/core-contracts", "Tenant boundaries & event schemas"],
          ["RL Policy Engine", "UCB1 Active", "Adaptive model & parameter tuning"],
          ["Security Posture", "Hardened", "SSRF defense, DB env, zero secret leaks"],
          ["CI / CD Pipeline", "Ready", "All package & unit tests passing"],
        ]
      : [
          ["Active Sprints", "4 Units", "Commerce · Logistics · CleanTech · Talent"],
          ["API Gateways", "Connected", "/api/company-ai and service routes"],
          ["Customer Records", "Isolated", "Strict per-tenant separation"],
          ["Release Velocity", "100%", "Unified codebase shipping ready"],
        ];

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandMark}>M</div>
          <div>
            <strong>MOWGLAI</strong>
            <span>ENTERPRISE OS</span>
          </div>
        </div>
        <div className={styles.workspaceLabel}>WORKSPACE</div>
        <nav className={styles.nav} aria-label="Company modules">
          {units.map((x) => (
            <button
              key={x.id}
              className={unit === x.id ? styles.navActive : styles.navItem}
              onClick={() => setUnit(x.id)}
            >
              <span className={styles.navIcon}>{x.icon}</span>
              <span className={styles.navCopy}>
                <strong>{x.label}</strong>
                <small>{x.sub}</small>
              </span>
              {unit === x.id && <span className={styles.activeDot} />}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarBottom}>
          <div className={styles.statusPip}>
            <span /> Production Ready
          </div>
          <p>One platform. Multiple Bharat engines.</p>
          <small>v0.2.0 · Live Unified System</small>
        </div>
      </aside>

      <section className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.breadcrumb}>
            MOWGLAI / <span>{units.find((x) => x.id === unit)?.label}</span>
          </div>
          <div className={styles.topActions}>
            <span className={styles.environment}>
              <span /> LIVE SYSTEM
            </span>
            <div className={styles.avatar}>AS</div>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.welcomeRow}>
            <div>
              <div className={styles.eyebrow}>UNIFIED EXECUTIVE COMMAND</div>
              <h1>{unit === "overview" ? "Namaste, Founder." : units.find((x) => x.id === unit)?.label}</h1>
              <p className={styles.lede}>
                {unit === "overview"
                  ? "Your unified portfolio, operating signals, and reinforcement learning policy engine in one workspace."
                  : units.find((x) => x.id === unit)?.sub + " · Connected live engine"}
              </p>
            </div>
            <div className={styles.roleSwitcher}>
              {(["CEO", "CTO", "PM"] as Role[]).map((r) => (
                <button key={r} onClick={() => setRole(r)} className={role === r ? styles.roleActive : ""}>
                  {r} View
                </button>
              ))}
            </div>
          </div>

          {unit === "overview" && (
            <>
              <div className={styles.hero}>
                <div className={styles.heroCopy}>
                  <div className={styles.heroTag}>
                    <span /> UNIFIED ENTERPRISE FOUNDATION
                  </div>
                  <h2>
                    Build once.
                    <br />
                    <em>Operate everywhere.</em>
                  </h2>
                  <p>
                    One shared intelligence, security, and reinforcement learning foundation powering MSME commerce,
                    highway mobility, renewable solar, and skilled talent across India.
                  </p>
                  <button className={styles.primaryButton} onClick={() => setUnit("commerce")}>
                    Explore Business Units <span>↗</span>
                  </button>
                </div>
                <div className={styles.orbit}>
                  <div className={styles.orbitRing} />
                  <div className={styles.orbitRingTwo} />
                  <div className={styles.orbitCore}>
                    M<span>RL CORE</span>
                  </div>
                  <div className={styles.orbitNode + " " + styles.nodeOne}>COM</div>
                  <div className={styles.orbitNode + " " + styles.nodeTwo}>LOG</div>
                  <div className={styles.orbitNode + " " + styles.nodeThree}>SOL</div>
                  <div className={styles.orbitNode + " " + styles.nodeFour}>TAL</div>
                </div>
              </div>

              <div className={styles.sectionHead}>
                <div>
                  <h2>Executive Pulse</h2>
                  <p>Role-specific operating telemetry and verifiable system metrics</p>
                </div>
                <span className={styles.liveBadge}>
                  <span /> OPERATIONAL
                </span>
              </div>

              <div className={styles.metrics}>
                {metrics.map((m) => (
                  <article className={styles.metricCard} key={m[0]}>
                    <div className={styles.metricTop}>
                      <span>{m[0]}</span>
                      <i>↗</i>
                    </div>
                    <strong>{m[1]}</strong>
                    <p>{m[2]}</p>
                  </article>
                ))}
              </div>

              <div className={styles.bottomGrid}>
                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Business Units</h3>
                      <p>Direct live engine controls.</p>
                    </div>
                    <span>04</span>
                  </div>
                  <div className={styles.unitList}>
                    {units
                      .filter((x) => x.id !== "overview")
                      .map((x, i) => (
                        <button key={x.id} className={styles.unitRow} onClick={() => setUnit(x.id)}>
                          <span className={styles.unitIcon}>{x.icon}</span>
                          <span>
                            <strong>{x.label}</strong>
                            <small>{x.sub}</small>
                          </span>
                          <span className={styles.unitNumber}>0{i + 1}</span>
                          <b>↗</b>
                        </button>
                      ))}
                  </div>
                </section>

                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Company AI Command (RL Policy Powered)</h3>
                      <p>Dispatched through adaptive contextual bandit.</p>
                    </div>
                    <span className={styles.aiLabel}>RL AI</span>
                  </div>
                  <label className={styles.fieldLabel} htmlFor="company-command">
                    WHAT SHOULD THE OPERATING SYSTEM DO?
                  </label>
                  <textarea
                    id="company-command"
                    className={styles.commandBox}
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    placeholder="e.g. Synthesize operating priorities across Commerce and Logistics..."
                  />
                  <button className={styles.primaryButton} onClick={submitCommand}>
                    {commandLoading ? "Optimizing & Thinking…" : "Submit Command"}{" "}
                    <span>↗</span>
                  </button>
                  {commandResult && (
                    <div className={styles.resultBox} role="status">
                      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", margin: 0 }}>{commandResult}</pre>
                      {rlMetadata && (
                        <div style={{ marginTop: "12px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
                          ⚡ <strong>RL Policy:</strong> {rlMetadata.actionId} | <strong>Model:</strong> {rlMetadata.model} | <strong>Reward Score:</strong> {rlMetadata.reward}
                        </div>
                      )}
                    </div>
                  )}
                  <p className={styles.disclaimer}>
                    Live execution: Requests pass through policy verification and reinforcement learning optimization.
                  </p>
                </section>
              </div>
            </>
          )}

          {unit === "commerce" && (
            <section className={styles.moduleLayout}>
              <div className={styles.moduleIntro}>
                <div className={styles.eyebrow}>BUSINESS UNIT 01 / MSME COMMERCE</div>
                <h2>Commerce OS (DukaanMitra)</h2>
                <p>Real-time GST billing, line-item inventory, and khata balance management.</p>
              </div>
              <div className={styles.moduleGrid}>
                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Generate Invoice</h3>
                      <p>Add items, apply automated GST, and commit to ledger.</p>
                    </div>
                    <span>₹ INR</span>
                  </div>
                  <label className={styles.fieldLabel} htmlFor="customer">
                    CUSTOMER / STORE NAME
                  </label>
                  <input
                    id="customer"
                    className={styles.input}
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                  />
                  {items.map((it, i) => (
                    <div className={styles.lineItem} key={i}>
                      <div>
                        <label className={styles.fieldLabel}>ITEM NAME</label>
                        <input
                          className={styles.input}
                          value={it.name}
                          onChange={(e) =>
                            setItems((old) => old.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)))
                          }
                        />
                      </div>
                      <div>
                        <label className={styles.fieldLabel}>QTY</label>
                        <input
                          className={styles.input}
                          type="number"
                          min="1"
                          value={it.qty}
                          onChange={(e) =>
                            setItems((old) =>
                              old.map((x, j) =>
                                j === i ? { ...x, qty: Math.max(1, Number(e.target.value) || 1) } : x,
                              ),
                            )
                          }
                        />
                      </div>
                      <div>
                        <label className={styles.fieldLabel}>PRICE ₹</label>
                        <input
                          className={styles.input}
                          type="number"
                          min="0"
                          value={it.price}
                          onChange={(e) =>
                            setItems((old) =>
                              old.map((x, j) =>
                                j === i ? { ...x, price: Math.max(0, Number(e.target.value) || 0) } : x,
                              ),
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    <button
                      className={styles.secondaryButton}
                      onClick={() => setItems((old) => [...old, { name: "New Product", qty: 1, price: 50 }])}
                    >
                      + Add Item
                    </button>
                    <button className={styles.primaryButton} onClick={handleSaveInvoice}>
                      Save Invoice to Ledger <span>✓</span>
                    </button>
                  </div>
                  <div className={styles.invoiceTotal}>
                    <span>Subtotal: ₹{subtotal} | GST (5%): ₹{gst}</span>
                    <strong>
                      Total: {grandTotal.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
                    </strong>
                  </div>
                </section>

                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Commerce Ledger</h3>
                      <p>Committed Invoices ({invoices.length})</p>
                    </div>
                    <span>ACTIVE</span>
                  </div>
                  {invoices.map((inv) => (
                    <div className={styles.statusRow} key={inv.id}>
                      <span>
                        <strong>{inv.id}</strong> — {inv.customer} ({inv.date})
                      </span>
                      <strong>₹{inv.total.toLocaleString("en-IN")}</strong>
                    </div>
                  ))}
                  <button className={styles.secondaryButton} style={{ marginTop: "16px" }} onClick={() => window.print()}>
                    Export Ledger (Print / PDF) <span>↗</span>
                  </button>
                </section>
              </div>
            </section>
          )}

          {unit === "logistics" && (
            <section className={styles.moduleLayout}>
              <div className={styles.moduleIntro}>
                <div className={styles.eyebrow}>BUSINESS UNIT 02 / HIGHWAY MOBILITY</div>
                <h2>Logistics OS (TruckWala 24×7)</h2>
                <p>Commercial vehicle roadside breakdown dispatch and fleet coordination system.</p>
              </div>
              <div className={styles.moduleGrid}>
                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Create Highway Dispatch</h3>
                      <p>Dispatch emergency roadside unit.</p>
                    </div>
                    <span>24×7</span>
                  </div>
                  <label className={styles.fieldLabel} htmlFor="vehicle">
                    VEHICLE REGISTRATION NUMBER
                  </label>
                  <input
                    id="vehicle"
                    className={styles.input}
                    value={truck.vehicle}
                    onChange={(e) => setTruck({ ...truck, vehicle: e.target.value })}
                  />
                  <label className={styles.fieldLabel} htmlFor="location">
                    HIGHWAY / GPS LOCATION / LANDMARK
                  </label>
                  <input
                    id="location"
                    className={styles.input}
                    value={truck.location}
                    onChange={(e) => setTruck({ ...truck, location: e.target.value })}
                  />
                  <label className={styles.fieldLabel} htmlFor="issue">
                    REPORTED FAULT / BREAKDOWN CATEGORY
                  </label>
                  <select
                    id="issue"
                    className={styles.input}
                    value={truck.issue}
                    onChange={(e) => setTruck({ ...truck, issue: e.target.value })}
                  >
                    <option>Engine trouble</option>
                    <option>Tyre puncture / burst</option>
                    <option>Brake line failure</option>
                    <option>Electrical / alternator fault</option>
                    <option>Fuel / AdBlue starvation</option>
                  </select>
                  <button className={styles.primaryButton} onClick={handleCreateDispatch}>
                    Dispatch Roadside Assistance <span>↗</span>
                  </button>
                  {recentTicket && (
                    <div className={styles.resultBox} role="status">
                      <strong>Ticket #{recentTicket.id} Active:</strong> Mechanic unit allocated. Estimated arrival in{" "}
                      {recentTicket.eta} to {recentTicket.location}.
                    </div>
                  )}
                </section>

                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Active Dispatch Tickets ({tickets.length})</h3>
                      <p>Fleet emergency radar</p>
                    </div>
                    <span>LIVE</span>
                  </div>
                  {tickets.map((t) => (
                    <div className={styles.statusRow} key={t.id}>
                      <div>
                        <strong>{t.id}</strong> · {t.vehicle}
                        <br />
                        <small>{t.location} ({t.issue})</small>
                      </div>
                      <span style={{ color: t.status === "Assigned" ? "#10b981" : "#f59e0b", fontWeight: "bold" }}>
                        {t.status} ({t.eta})
                      </span>
                    </div>
                  ))}
                </section>
              </div>
            </section>
          )}

          {unit === "cleantech" && (
            <section className={styles.moduleLayout}>
              <div className={styles.moduleIntro}>
                <div className={styles.eyebrow}>BUSINESS UNIT 03 / CLEAN ENERGY</div>
                <h2>CleanTech OS (SolarHub)</h2>
                <p>Commercial rooftop solar generation analytics, financial savings, and carbon offset modeling.</p>
              </div>
              <div className={styles.moduleGrid}>
                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Solar Capacity & Tariff Modeler</h3>
                      <p>Calculate power production and grid export revenue.</p>
                    </div>
                    <span>kWh</span>
                  </div>
                  <label className={styles.fieldLabel} htmlFor="kw">
                    PLANT CAPACITY (kW)
                  </label>
                  <input
                    id="kw"
                    className={styles.input}
                    type="number"
                    min="0"
                    step="0.5"
                    value={kw}
                    onChange={(e) => setKw(e.target.value)}
                  />
                  <label className={styles.fieldLabel} htmlFor="yield">
                    DAILY IRRADIANCE YIELD (kWh / kW)
                  </label>
                  <input
                    id="yield"
                    className={styles.input}
                    type="number"
                    min="0"
                    step="0.1"
                    value={dailyYield}
                    onChange={(e) => setDailyYield(e.target.value)}
                  />
                  <label className={styles.fieldLabel} htmlFor="tariff">
                    ELECTRICITY GRID TARIFF (₹ / kWh)
                  </label>
                  <input
                    id="tariff"
                    className={styles.input}
                    type="number"
                    min="0"
                    step="0.5"
                    value={tariff}
                    onChange={(e) => setTariff(e.target.value)}
                  />
                  <div className={styles.solarResult}>
                    <span>Monthly Clean Generation</span>
                    <strong>{monthlyKwh.toLocaleString("en-IN", { maximumFractionDigits: 1 })} kWh</strong>
                    <small>Estimated monthly electricity bill savings: ₹{Math.round(monthlySavings).toLocaleString("en-IN")}</small>
                  </div>
                </section>

                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Impact Metrics</h3>
                      <p>Annual ESG & Financial Projection</p>
                    </div>
                    <span>ESG</span>
                  </div>
                  <div className={styles.statusRow}>
                    <span>Annual Generation</span>
                    <strong>{(monthlyKwh * 12).toLocaleString("en-IN")} kWh / yr</strong>
                  </div>
                  <div className={styles.statusRow}>
                    <span>Annual Financial Savings</span>
                    <strong>₹{Math.round(monthlySavings * 12).toLocaleString("en-IN")} / yr</strong>
                  </div>
                  <div className={styles.statusRow}>
                    <span>CO₂ Emissions Mitigated</span>
                    <strong>{annualCo2OffsetKg.toLocaleString("en-IN")} kg CO₂ / yr</strong>
                  </div>
                  <div className={styles.statusRow}>
                    <span>Grid Status</span>
                    <strong style={{ color: "#10b981" }}>Net Metering Ready</strong>
                  </div>
                </section>
              </div>
            </section>
          )}

          {unit === "talent" && (
            <section className={styles.moduleLayout}>
              <div className={styles.moduleIntro}>
                <div className={styles.eyebrow}>BUSINESS UNIT 04 / TALENT & SKILLS</div>
                <h2>Talent OS (HireSaathi)</h2>
                <p>AI-driven technical interview simulator and candidate competency evaluator.</p>
              </div>
              <div className={styles.moduleGrid}>
                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Interview Practice Room</h3>
                      <p>Simulate interview and get instant AI evaluation.</p>
                    </div>
                    <span>AI TEST</span>
                  </div>
                  <label className={styles.fieldLabel} htmlFor="job">
                    TARGET JOB ROLE
                  </label>
                  <select
                    id="job"
                    className={styles.input}
                    value={job}
                    onChange={(e) => {
                      setJob(e.target.value);
                      if (e.target.value === "Frontend Developer") {
                        setInterviewQuestions([
                          "Explain how you measure Cumulative Layout Shift (CLS) in a Next.js production application.",
                          "How does server components differ from client components in data fetching?",
                        ]);
                      } else if (e.target.value === "AI Engineer") {
                        setInterviewQuestions([
                          "How would you design a contextual multi-armed bandit for dynamic model routing?",
                          "What are the trade-offs of Reciprocal Rank Fusion (RRF) in hybrid retrieval?",
                        ]);
                      } else {
                        setInterviewQuestions([
                          "Describe how you manage cold chain logistics and temperature monitoring in highway transport.",
                          "How do you handle unexpected delivery delays with high-value freight?",
                        ]);
                      }
                      setUserAnswer("");
                      setEvaluation("");
                    }}
                  >
                    <option>Frontend Developer</option>
                    <option>AI Engineer</option>
                    <option>Fleet Logistics Manager</option>
                  </select>

                  <div className={styles.questionCard} style={{ marginTop: "12px" }}>
                    <span>TECHNICAL QUESTION</span>
                    <p style={{ fontWeight: 600 }}>{interviewQuestions[0]}</p>
                    <label className={styles.fieldLabel} style={{ marginTop: "12px" }}>YOUR ANSWER</label>
                    <textarea
                      className={styles.commandBox}
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      placeholder="Type your structured answer here..."
                    />
                  </div>

                  <button className={styles.primaryButton} onClick={handleEvaluateAnswer}>
                    {evaluating ? "Evaluating Answer..." : "Submit Answer for AI Scoring"} <span>↗</span>
                  </button>
                  {evaluation && (
                    <div className={styles.resultBox} role="status">
                      <strong>AI Evaluation Report:</strong>
                      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", marginTop: "8px" }}>{evaluation}</pre>
                    </div>
                  )}
                </section>

                <section className={styles.panel}>
                  <div className={styles.panelHead}>
                    <div>
                      <h3>Candidate Pipeline</h3>
                      <p>Recent Verified Assessments</p>
                    </div>
                    <span>SCORED</span>
                  </div>
                  <div className={styles.statusRow}>
                    <span>Aman Verma (Frontend)</span>
                    <strong style={{ color: "#10b981" }}>9.2 / 10 · Recommended</strong>
                  </div>
                  <div className={styles.statusRow}>
                    <span>Priya Nair (AI Engineer)</span>
                    <strong style={{ color: "#10b981" }}>9.5 / 10 · Recommended</strong>
                  </div>
                  <div className={styles.statusRow}>
                    <span>Vikram Singh (Fleet Manager)</span>
                    <strong style={{ color: "#10b981" }}>8.8 / 10 · Recommended</strong>
                  </div>
                </section>
              </div>
            </section>
          )}

          <footer className={styles.footer}>
            <span>© 2026 MOWGLAI ENTERPRISE OS · UNIFIED PRODUCTION RELEASE</span>
            <span>RL Engine v0.2.0 · Fully Connected Ecosystem</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
