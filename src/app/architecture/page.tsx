'use client';

import Header from "../components/header";
import Footer from "../components/footer";
import { AnimatedSection, FadeIn } from "../components/animated-section";
import { StaggerChildren, StaggerItem } from "../components/stagger-children";
import { ExpandableSection, TabContainer } from "../components/expandable-section";
import { Modal, useModal, ClickableCard } from "../components/modal";
import { AnimatedNumber, PulsingDot } from "../components/animated-stats";
import { InteractiveCard } from "../components/interactive-card";

/* ── Shared icons ── */
const Arrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);
const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
);
const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-3.5 w-3.5 text-[var(--success)]">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

/* ── Section wrapper ── */
function Section({ id, title, subtitle, children }: { id?: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <AnimatedSection className="mb-20">
      <div id={id} className="scroll-mt-24">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[var(--text-primary)]">{title}</h2>
        {subtitle && <p className="mb-6 text-[var(--text-secondary)]">{subtitle}</p>}
        {!subtitle && <div className="mb-6" />}
        {children}
      </div>
    </AnimatedSection>
  );
}

/* ── Flow step component ── */
function FlowStep({ num, label, desc, color = "var(--bhg-blue)" }: { num: number; label: string; desc: string; color?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: color }}>
        {num}
      </div>
      <div>
        <div className="text-sm font-semibold text-[var(--text-primary)]">{label}</div>
        <div className="text-xs text-[var(--text-secondary)]">{desc}</div>
      </div>
    </div>
  );
}

/* ── Integration line ── */
function IntegrationLine({ from, to, via }: { from: string; to: string; via: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
      <span className="rounded bg-[var(--bhg-blue)]/10 px-2 py-0.5 font-medium text-[var(--bhg-blue)]">{from}</span>
      <div className="flex items-center gap-1">
        <Arrow />
        <span className="text-[var(--text-secondary)]">{via}</span>
        <Arrow />
      </div>
      <span className="rounded bg-[var(--accent)]/10 px-2 py-0.5 font-medium text-[var(--accent)]">{to}</span>
    </div>
  );
}

/* ── Product workflow card ── */
function ProductWorkflow({
  name,
  tagline,
  color,
  steps,
  integrations,
  dataIn,
  dataOut,
  aiFeatures,
  onClick,
}: {
  name: string;
  tagline: string;
  color: string;
  steps: { label: string; desc: string }[];
  integrations: string[];
  dataIn: string[];
  dataOut: string[];
  aiFeatures: string[];
  onClick: () => void;
}) {
  return (
    <ClickableCard onClick={onClick} glowColor={color as "cyan" | "violet" | "amber" | "emerald"}>
      <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-[var(--text-primary)]">{name}</h3>
            <p className="text-xs text-[var(--text-secondary)]">{tagline}</p>
          </div>
          <div className="text-xs text-[var(--text-secondary)]">Click for details</div>
        </div>

        {/* Mini flow */}
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="rounded bg-[var(--light-gray)] px-2 py-0.5 text-xs font-medium text-[var(--text-primary)]">{step.label}</span>
              {i < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap gap-3 text-xs text-[var(--text-secondary)]">
          <span>{integrations.length} integrations</span>
          <span>{dataIn.length} inputs</span>
          <span>{dataOut.length} outputs</span>
          {aiFeatures.length > 0 && <span className="text-[var(--accent)]">{aiFeatures.length} AI features</span>}
        </div>
      </div>
    </ClickableCard>
  );
}

/* ────────────────────────────────────────────────────────────────────── */

export default function Architecture() {
  const aicrModal = useModal();
  const rallyModal = useModal();
  const scmModal = useModal();
  const docaiModal = useModal();
  const ispmModal = useModal();
  const towedgeModal = useModal();
  const psedgeModal = useModal();
  const sfpModal = useModal();

  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-geist-sans)] transition-colors duration-200">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* ── Page Header ── */}
        <FadeIn>
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Architecture &amp; Data Flow
            </h1>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              How every product in the Blue Horizons Group ecosystem works, connects, and exchanges data — from platform core through vertical solutions.
            </p>
          </div>
        </FadeIn>

        {/* ── Jump nav ── */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Ecosystem Flow", href: "#ecosystem" },
              { label: "Product Workflows", href: "#workflows" },
              { label: "Cross-Product Integration", href: "#integration" },
              { label: "Platform Tiers", href: "#tiers" },
              { label: "AI Agents", href: "#agents" },
              { label: "Control Centers", href: "#control-centers" },
              { label: "Database", href: "#database" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-1.5 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--card-hover)] hover:text-[var(--text-primary)]">
                {item.label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* 1. ECOSYSTEM DATA FLOW DIAGRAM                               */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <Section id="ecosystem" title="Ecosystem Data Flow" subtitle="How data moves across the entire product suite. Each arrow represents a real integration — shared modules, API calls, or data pipelines.">
          <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 overflow-x-auto">
            {/* Layer 1: Platform Core */}
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Platform Foundation</div>
            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border-2 border-[var(--bhg-blue)]/30 bg-[var(--bhg-blue)]/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PulsingDot color="blue" />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">AICR Platform</span>
                  <span className="rounded bg-[var(--bhg-blue)]/10 px-1.5 py-0.5 text-xs text-[var(--bhg-blue)]">Core</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-[var(--text-secondary)]">
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">Self-Aware API</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">Pack System</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">19 Control Centers</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">14 AI Agents</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">240 DB Tables</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">SPINE Audit</div>
                </div>
              </div>
              <div className="rounded-lg border-2 border-violet-400/30 bg-violet-400/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PulsingDot color="pink" />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">Rally Stack</span>
                  <span className="rounded bg-violet-400/10 px-1.5 py-0.5 text-xs text-violet-400">Factory</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-[var(--text-secondary)]">
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">130+ Modules</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">Rally AI CLI</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">Module Contracts</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">4-Layer System</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">3 ALMs</div>
                  <div className="rounded bg-[var(--light-gray)] p-1.5 text-center">Agent Protocol</div>
                </div>
              </div>
            </div>

            {/* Connector: Provides */}
            <div className="flex items-center justify-center gap-3 py-3 text-xs text-[var(--text-secondary)]">
              <div className="h-px flex-1 bg-[var(--border-color)]" />
              <div className="flex items-center gap-2">
                <ArrowDown />
                <span className="font-medium">provides modules, packs, AI agents, governance</span>
                <ArrowDown />
              </div>
              <div className="h-px flex-1 bg-[var(--border-color)]" />
            </div>

            {/* Layer 2: Sales & Governance */}
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Sales &amp; Compensation Governance</div>
            <div className="mb-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-amber-400/30 bg-amber-400/5 p-3">
                <div className="text-sm font-semibold text-[var(--text-primary)]">SCM / SGM SPARCC</div>
                <p className="text-xs text-[var(--text-secondary)]">Policies &rarr; Approval Workflows &rarr; Compliance</p>
              </div>
              <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/5 p-3">
                <div className="text-sm font-semibold text-[var(--text-primary)]">Document Intelligence</div>
                <p className="text-xs text-[var(--text-secondary)]">Ingest &rarr; Chunk &rarr; Embed &rarr; Semantic Search</p>
              </div>
              <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/5 p-3">
                <div className="text-sm font-semibold text-[var(--text-primary)]">IntelligentSPM</div>
                <p className="text-xs text-[var(--text-secondary)]">Quotas &rarr; Commissions &rarr; Performance Analytics</p>
              </div>
            </div>

            {/* Connector: Data Exchange */}
            <div className="mb-3 rounded-lg bg-[var(--light-gray)] p-3">
              <div className="mb-2 text-xs font-semibold text-[var(--text-primary)]">Cross-product data exchange</div>
              <div className="flex flex-wrap gap-3">
                <IntegrationLine from="SCM" to="Doc AI" via="comp plans" />
                <IntegrationLine from="SCM" to="ISPM" via="policies" />
                <IntegrationLine from="Doc AI" to="SCM" via="findings" />
              </div>
            </div>

            {/* Connector: Powers */}
            <div className="flex items-center justify-center gap-3 py-3 text-xs text-[var(--text-secondary)]">
              <div className="h-px flex-1 bg-[var(--border-color)]" />
              <div className="flex items-center gap-2">
                <ArrowDown />
                <span className="font-medium">shared platform, independent deployments</span>
                <ArrowDown />
              </div>
              <div className="h-px flex-1 bg-[var(--border-color)]" />
            </div>

            {/* Layer 3: Verticals */}
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Industry Vertical Solutions</div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-orange-400/30 bg-orange-400/5 p-3">
                <div className="text-sm font-semibold text-[var(--text-primary)]">TowEdge</div>
                <p className="text-xs text-[var(--text-secondary)]">Call &rarr; Dispatch &rarr; Track &rarr; Invoice</p>
              </div>
              <div className="rounded-lg border border-teal-400/30 bg-teal-400/5 p-3">
                <div className="text-sm font-semibold text-[var(--text-primary)]">PS Edge</div>
                <p className="text-xs text-[var(--text-secondary)]">Programs &rarr; Beneficiaries &rarr; Donors &rarr; Impact</p>
              </div>
              <div className="rounded-lg border border-indigo-400/30 bg-indigo-400/5 p-3">
                <div className="text-sm font-semibold text-[var(--text-primary)]">SFP</div>
                <p className="text-xs text-[var(--text-secondary)]">Scenarios &rarr; Projections &rarr; Runway &rarr; Reports</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* 2. PRODUCT WORKFLOWS                                         */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <Section id="workflows" title="Product Workflows" subtitle="Click any product to see its complete workflow, data flow, integrations, and AI capabilities.">
          <StaggerChildren staggerDelay={0.1}>
            {/* Foundation */}
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Platform Foundation</div>
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <StaggerItem>
                <ProductWorkflow
                  name="AICR Platform"
                  tagline="Self-aware AI-native platform core"
                  color="cyan"
                  steps={[
                    { label: "Author", desc: "Create pack manifest" },
                    { label: "Validate", desc: "Schema + gates" },
                    { label: "Deploy", desc: "Edge runtime" },
                    { label: "Resolve", desc: "Deterministic" },
                    { label: "Promote", desc: "Summit" },
                  ]}
                  integrations={["Neon PostgreSQL", "Vercel AI SDK", "NextAuth v5", "Upstash Redis", "pgvector", "GitHub Actions"]}
                  dataIn={["Pack manifests", "Canonical docs", "OAuth auth", "Telemetry", "AI responses"]}
                  dataOut={["Resolved packs", "Self-aware context", "Audit logs", "Ops signals", "Usage metrics"]}
                  aiFeatures={["14 agents", "RAG search", "Self-aware queries", "Multi-model orchestration", "Code review"]}
                  onClick={aicrModal.open}
                />
              </StaggerItem>
              <StaggerItem>
                <ProductWorkflow
                  name="Rally Stack"
                  tagline="Platform factory with 130+ modules"
                  color="violet"
                  steps={[
                    { label: "Idea", desc: "Define module" },
                    { label: "Create", desc: "Generate scaffold" },
                    { label: "Register", desc: "Module registry" },
                    { label: "Build", desc: "UI + Logic" },
                    { label: "Validate", desc: "Contract check" },
                    { label: "Deploy", desc: "Vercel" },
                  ]}
                  integrations={["AICR Platform", "Vertical solutions", "Prisma ORM", "Vercel", "Turborepo"]}
                  dataIn={["Module definitions", "Rally AI commands", "Developer code", "Config files"]}
                  dataOut={["Generated apps", "Module registry", "Route manifests", "Dependency graphs"]}
                  aiFeatures={["Rally AI CLI", "Creator AI", "Operator AI", "Enterprise AI", "Agent Protocol"]}
                  onClick={rallyModal.open}
                />
              </StaggerItem>
            </div>

            {/* Sales & Governance */}
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Sales &amp; Compensation Governance</div>
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <StaggerItem>
                <ProductWorkflow
                  name="SCM / SGM SPARCC"
                  tagline="Sales compensation governance"
                  color="amber"
                  steps={[
                    { label: "Design", desc: "Create policies" },
                    { label: "Approve", desc: "Multi-level" },
                    { label: "Operate", desc: "Manage plans" },
                    { label: "Dispute", desc: "Resolve cases" },
                    { label: "Oversee", desc: "Audit trail" },
                  ]}
                  integrations={["IntelligentSPM", "Document Intelligence", "Salesforce (planned)", "SAP (planned)"]}
                  dataIn={["Policy definitions", "Territory hierarchies", "Approval configs", "User roles"]}
                  dataOut={["Published policies", "Approval decisions", "Compliance reports", "Audit trails"]}
                  aiFeatures={[]}
                  onClick={scmModal.open}
                />
              </StaggerItem>
              <StaggerItem>
                <ProductWorkflow
                  name="Document Intelligence"
                  tagline="AI-powered document analysis"
                  color="cyan"
                  steps={[
                    { label: "Ingest", desc: "Upload docs" },
                    { label: "Chunk", desc: "512-char splits" },
                    { label: "Embed", desc: "Vector encode" },
                    { label: "Store", desc: "pgvector" },
                    { label: "Search", desc: "Semantic query" },
                  ]}
                  integrations={["AICR KBCC", "pgvector", "OpenAI embeddings", "SCM policies"]}
                  dataIn={["Documents", "Query text", "Tenant context"]}
                  dataOut={["Relevant chunks", "Similarity scores", "Source citations"]}
                  aiFeatures={["RAG pipeline", "Vector embeddings", "Semantic search", "Consensus voting"]}
                  onClick={docaiModal.open}
                />
              </StaggerItem>
              <StaggerItem>
                <ProductWorkflow
                  name="IntelligentSPM"
                  tagline="Sales performance management"
                  color="emerald"
                  steps={[
                    { label: "Configure", desc: "Set quotas" },
                    { label: "Calculate", desc: "Commissions" },
                    { label: "Analyze", desc: "Performance" },
                    { label: "Optimize", desc: "AI insights" },
                  ]}
                  integrations={["SCM policies", "CRM modules", "AICR Summit"]}
                  dataIn={["Sales data", "Quota targets", "Commission rules", "Policy feeds"]}
                  dataOut={["Commission payouts", "Performance scores", "Predictive analytics"]}
                  aiFeatures={["Predictive analytics (planned)", "AI recommendations (planned)"]}
                  onClick={ispmModal.open}
                />
              </StaggerItem>
            </div>

            {/* Verticals */}
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Industry Vertical Solutions</div>
            <div className="grid gap-4 sm:grid-cols-3">
              <StaggerItem>
                <ProductWorkflow
                  name="TowEdge"
                  tagline="Towing industry operations"
                  color="amber"
                  steps={[
                    { label: "Call", desc: "Intake request" },
                    { label: "Dispatch", desc: "Assign driver" },
                    { label: "Track", desc: "GPS monitor" },
                    { label: "Complete", desc: "Service done" },
                    { label: "Invoice", desc: "Bill customer" },
                  ]}
                  integrations={["GPS APIs (planned)", "Payment processors (planned)", "AAA/Insurance", "Mobile apps (planned)"]}
                  dataIn={["Tow requests", "Driver availability", "Fleet status", "GPS coords", "Customer info"]}
                  dataOut={["Job assignments", "ETAs", "Invoices", "Revenue reports", "Compliance reports"]}
                  aiFeatures={["AI dispatch optimization (planned)", "Predictive maintenance (planned)"]}
                  onClick={towedgeModal.open}
                />
              </StaggerItem>
              <StaggerItem>
                <ProductWorkflow
                  name="PS Edge"
                  tagline="Nonprofit management (AFFCF)"
                  color="emerald"
                  steps={[
                    { label: "Programs", desc: "6 types" },
                    { label: "Enroll", desc: "Beneficiaries" },
                    { label: "Fundraise", desc: "Donors/grants" },
                    { label: "Operate", desc: "Volunteers" },
                    { label: "Report", desc: "Impact/990" },
                  ]}
                  integrations={["Neon PostgreSQL", "Vercel AI SDK", "NextAuth v5", "Recharts"]}
                  dataIn={["Donor data", "Volunteer apps", "Beneficiary enrollment", "Grant apps", "Event registrations"]}
                  dataOut={["Gift acknowledgments", "Impact reports", "Form 990", "Grant compliance", "Donor analytics"]}
                  aiFeatures={["OpsChief", "Pulse", "Tasks", "AskNP", "PageKB"]}
                  onClick={psedgeModal.open}
                />
              </StaggerItem>
              <StaggerItem>
                <ProductWorkflow
                  name="SFP"
                  tagline="Startup financial planning"
                  color="violet"
                  steps={[
                    { label: "Configure", desc: "Set params" },
                    { label: "Input", desc: "Revenue/expense" },
                    { label: "Calculate", desc: "Monthly projections" },
                    { label: "Analyze", desc: "Runway/break-even" },
                    { label: "Export", desc: "Reports" },
                  ]}
                  integrations={["Browser localStorage (current)", "PostgreSQL (planned)", "Accounting systems (planned)"]}
                  dataIn={["Revenue projections", "Expense forecasts", "Headcount plans", "Capital events"]}
                  dataOut={["Monthly projections", "Runway analysis", "Break-even", "Financial statements"]}
                  aiFeatures={["AI forecasting (planned)"]}
                  onClick={sfpModal.open}
                />
              </StaggerItem>
            </div>
          </StaggerChildren>
        </Section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* 3. CROSS-PRODUCT INTEGRATION                                 */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <Section id="integration" title="Cross-Product Integration" subtitle="Five integration pathways connect the entire ecosystem. Every product participates in at least one.">
          <div className="space-y-4">
            {[
              {
                title: "Rally Stack \u2192 Vertical Solutions",
                desc: "130+ reusable modules provide pre-built capabilities (donor management, CRM, pipeline, analytics) consumed by vertical solutions. Each vertical selects the modules relevant to its industry domain.",
                products: ["Rally Stack", "TowEdge", "PS Edge", "SFP", "SCM"],
                color: "violet" as const,
              },
              {
                title: "AICR Platform \u2192 All Products",
                desc: "Self-Aware API provides architecture context. KBCC provides RAG search. Pack system resolves capabilities per tenant. Feature flags control availability. SPINE provides immutable audit trail. 14 AI agents provide intelligent assistance.",
                products: ["AICR Platform", "All 7 products"],
                color: "cyan" as const,
              },
              {
                title: "SCM \u2194 Document Intelligence \u2194 IntelligentSPM",
                desc: "Sales governance policies flow from SCM into IntelligentSPM for quota and commission calculations. Document Intelligence analyzes compensation plans and feeds findings back into SCM for governance review.",
                products: ["SCM", "Document Intelligence", "IntelligentSPM"],
                color: "amber" as const,
              },
              {
                title: "Verticals \u2192 AICR Summit Tier",
                desc: "All vertical solutions deploy at the Summit tier for enterprise-scale operations: multi-tenant isolation, pack marketplace distribution, partner certification, and commercial billing.",
                products: ["TowEdge", "PS Edge", "SFP", "SCM", "IntelligentSPM"],
                color: "emerald" as const,
              },
              {
                title: "AI Flow (Cross-Product)",
                desc: "Vercel AI SDK Gateway routes all AI requests. Claude Sonnet 4.5 handles code generation/analysis. GPT-4 handles planning/design. Gemini handles validation/testing. Usage tracked in AiUsageDaily, costs in AiCostBudget.",
                products: ["Claude", "GPT-4", "Gemini", "All products"],
                color: "cyan" as const,
              },
            ].map((path) => (
              <InteractiveCard key={path.title} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor={path.color}>
                <div className="flex items-start gap-3">
                  <PulsingDot color={path.color === "cyan" ? "blue" : path.color === "violet" ? "pink" : path.color === "amber" ? "orange" : "cyan"} />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">{path.title}</h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{path.desc}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {path.products.map((p) => (
                        <span key={p} className="rounded bg-[var(--light-gray)] px-2 py-0.5 text-xs text-[var(--text-secondary)]">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* 4. PLATFORM TIERS (Studio → Edge → Summit)                   */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <Section id="tiers" title="Platform Tiers" subtitle="Every product operates across three tiers: Studio (build), Edge (operate), Summit (productize). Governance gates control promotion between tiers.">
          <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border-2 border-violet-400/30 bg-violet-400/5 p-4">
                <div className="mb-2 text-sm font-semibold text-[var(--bhg-coral)]">Studio — Build</div>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  <li className="flex items-center gap-1.5"><Check /> Pack authoring &amp; manifest validation</li>
                  <li className="flex items-center gap-1.5"><Check /> AI agent configuration &amp; testing</li>
                  <li className="flex items-center gap-1.5"><Check /> Workflow design with visual builder</li>
                  <li className="flex items-center gap-1.5"><Check /> Isolated sandbox test harness</li>
                  <li className="flex items-center gap-1.5"><Check /> GOCC gate enforcement before promotion</li>
                </ul>
                <div className="mt-3 text-xs text-[var(--text-secondary)]"><strong>Target:</strong> Creators, learners, developers</div>
              </div>
              <div className="rounded-lg border-2 border-cyan-400/30 bg-cyan-400/5 p-4">
                <div className="mb-2 text-sm font-semibold text-[var(--bhg-blue)]">Edge — Operate</div>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  <li className="flex items-center gap-1.5"><Check /> Multi-tenant runtime with isolation</li>
                  <li className="flex items-center gap-1.5"><Check /> Feature flags at tenant/user/cohort level</li>
                  <li className="flex items-center gap-1.5"><Check /> Deterministic pack resolution</li>
                  <li className="flex items-center gap-1.5"><Check /> Real-time telemetry &amp; cost tracking</li>
                  <li className="flex items-center gap-1.5"><Check /> Runtime compliance enforcement via GOCC</li>
                </ul>
                <div className="mt-3 text-xs text-[var(--text-secondary)]"><strong>Target:</strong> SMBs, growing startups</div>
              </div>
              <div className="rounded-lg border-2 border-amber-400/30 bg-amber-400/5 p-4">
                <div className="mb-2 text-sm font-semibold text-amber-600">Summit — Productize</div>
                <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  <li className="flex items-center gap-1.5"><Check /> Pack marketplace &amp; billing</li>
                  <li className="flex items-center gap-1.5"><Check /> Promotion lifecycle with rollback</li>
                  <li className="flex items-center gap-1.5"><Check /> Partner onboarding &amp; certification</li>
                  <li className="flex items-center gap-1.5"><Check /> Executive dashboards &amp; insights</li>
                  <li className="flex items-center gap-1.5"><Check /> Canary deployments with auto-revert</li>
                </ul>
                <div className="mt-3 text-xs text-[var(--text-secondary)]"><strong>Target:</strong> Enterprises (1000+ employees)</div>
              </div>
            </div>

            {/* Promotion flow */}
            <div className="mt-5 flex items-center justify-center gap-3 text-sm text-[var(--text-secondary)]">
              <span className="rounded bg-[var(--bhg-coral)]/10 px-2.5 py-1 font-medium text-[var(--bhg-coral)]">Studio</span>
              <Arrow />
              <span className="text-xs">GOCC Gate</span>
              <Arrow />
              <span className="rounded bg-[var(--bhg-blue)]/10 px-2.5 py-1 font-medium text-[var(--bhg-blue)]">Edge</span>
              <Arrow />
              <span className="text-xs">Deploy</span>
              <Arrow />
              <span className="rounded bg-amber-600/10 px-2.5 py-1 font-medium text-amber-600">Summit</span>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* 5. AI AGENTS                                                 */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <Section id="agents" title="14 AI Agents" subtitle="Specialized agents that collaborate across the platform. All powered by Claude Sonnet 4.5 with persistent memory and coordinated handoffs.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "HQ", role: "Strategy & OKRs", desc: "Founder operations, organizational decisions" },
              { name: "Dev", role: "Implementation", desc: "Feature implementation, debugging, code writing" },
              { name: "Stack", role: "Infrastructure", desc: "Vercel, Prisma, CI/CD, database migrations" },
              { name: "Designer", role: "Platform UI/UX", desc: "Design system, UI architecture, components" },
              { name: "QA", role: "Quality Assurance", desc: "Tests, quality gates, validation strategy" },
              { name: "Docs", role: "Documentation", desc: "Canonical docs generation, maintenance" },
              { name: "Research", role: "Market Intel", desc: "Competitive analysis, technology evaluation" },
              { name: "Brand", role: "Identity", desc: "Brand guidelines, marketing, visual identity" },
              { name: "Biz", role: "Business Strategy", desc: "Pricing, partnerships, business model" },
              { name: "Rally", role: "RallyForge Ops", desc: "Dashboard hub management, navigation" },
              { name: "Delivery", role: "Customer Success", desc: "Onboarding, delivery management, training" },
              { name: "Knowledge", role: "Knowledge Graph", desc: "Semantic indexing, KBCC operations" },
              { name: "Builder", role: "Backend Dev", desc: "Database design, API implementation" },
              { name: "OpsChief", role: "Operations AI", desc: "Anomaly detection, risk scoring, monitoring" },
            ].map((agent) => (
              <div key={agent.name} className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded bg-[var(--accent)]/10 px-1.5 py-0.5 text-xs font-mono font-semibold text-[var(--accent)]">{agent.name}</span>
                  <span className="text-xs font-medium text-[var(--text-primary)]">{agent.role}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">{agent.desc}</p>
              </div>
            ))}
          </div>

          <ExpandableSection title="Agent Coordination & Memory" defaultOpen={false} className="mt-4">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Handoff Protocol</h4>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <span className="rounded bg-[var(--light-gray)] px-2 py-1">1. Document state</span>
                  <Arrow />
                  <span className="rounded bg-[var(--light-gray)] px-2 py-1">2. Update CURRENT_TASK</span>
                  <Arrow />
                  <span className="rounded bg-[var(--light-gray)] px-2 py-1">3. Log to AGENT_MEMORY</span>
                  <Arrow />
                  <span className="rounded bg-[var(--light-gray)] px-2 py-1">4. Create work item</span>
                  <Arrow />
                  <span className="rounded bg-[var(--light-gray)] px-2 py-1">5. Announce handoff</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Persistent Memory</h4>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-[var(--text-secondary)]">
                  <div className="rounded bg-[var(--light-gray)] p-2"><strong className="text-[var(--text-primary)]">agent_sessions:</strong> Session lifecycle (start, end, context)</div>
                  <div className="rounded bg-[var(--light-gray)] p-2"><strong className="text-[var(--text-primary)]">session_checkpoints:</strong> Full state snapshots (files, tasks, progress)</div>
                  <div className="rounded bg-[var(--light-gray)] p-2"><strong className="text-[var(--text-primary)]">session_memories:</strong> Typed memories (preference, pattern, decision)</div>
                  <div className="rounded bg-[var(--light-gray)] p-2"><strong className="text-[var(--text-primary)]">session_plans:</strong> Named plans with status tracking</div>
                </div>
              </div>
            </div>
          </ExpandableSection>
        </Section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* 6. CONTROL CENTERS                                           */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <Section id="control-centers" title="19 Control Centers" subtitle="Organized into Core (8), Cross-Layer (5), and Layer-Specific (3) + Platform (3) modules that provide the operational backbone.">
          <TabContainer
            tabs={[
              {
                label: "Core (8)",
                color: "cyan",
                content: (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { code: "AICC", name: "AI Control", desc: "Models, agents, prompts, orchestration. Routes AI requests via Vercel AI SDK Gateway." },
                      { code: "KBCC", name: "Knowledge Base", desc: "RAG ingestion, vector search, document management. Powers Document Intelligence." },
                      { code: "GOCC", name: "Governance", desc: "Policies, proposals, compliance enforcement. Gates every tier promotion." },
                      { code: "DOCC", name: "Domain", desc: "Domain registry, tenant domain assignments. Maps domains to capabilities." },
                      { code: "INCC", name: "Infrastructure", desc: "Health monitoring, deployments. Manages alerts and platform health reports." },
                      { code: "QACC", name: "QA", desc: "Tests, quality gates, validation. Enforces pack certification requirements." },
                      { code: "IDCC", name: "Identity/Data", desc: "Users, tenants, permissions, roles, API keys. 48 tenant-scoped models." },
                      { code: "OPCC", name: "Operations", desc: "Operational signals, incidents. Manages OpsSignal and OpsIncident." },
                    ].map((cc) => (
                      <div key={cc.code} className="rounded-lg bg-[var(--light-gray)] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-[var(--accent)]">{cc.code}</span>
                          <span className="text-xs font-medium text-[var(--text-primary)]">{cc.name}</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{cc.desc}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: "Cross-Layer (5)",
                color: "amber",
                content: (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { code: "SPINE", name: "Evidence Trail", desc: "Immutable audit logging. Every material action recorded with provenance, rationale, and version context." },
                      { code: "OPSCHIEF", name: "Operations Intelligence", desc: "AI-powered monitoring, anomaly detection, risk scoring. Watches but never executes." },
                      { code: "PULSE", name: "Change Intelligence", desc: "Tracks code changes, dependency updates, schema migrations. Visualizes blast radius and risk." },
                      { code: "ASK", name: "AI Interaction Hub", desc: "Unified query interface — .doc (docs), .plan (implementation), .task (work items), .policy (governance)." },
                      { code: "ORBS", name: "Visualization", desc: "Dashboard system for data visualization and reporting across all modules." },
                    ].map((cc) => (
                      <div key={cc.code} className="rounded-lg bg-[var(--light-gray)] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-amber-600">{cc.code}</span>
                          <span className="text-xs font-medium text-[var(--text-primary)]">{cc.name}</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{cc.desc}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: "Layer + Platform (6)",
                color: "emerald",
                content: (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { code: "STUDIO", name: "Studio Layer", desc: "Development layer — pack authoring, manifest validation, surface testing, gate enforcement." },
                      { code: "EDGE", name: "Edge Layer", desc: "Business operations — tenant runtime, feature flags, telemetry, pack resolution." },
                      { code: "SUMMIT", name: "Summit Layer", desc: "Commercial marketplace — pack promotion/rollback, partner certification." },
                      { code: "PACKS", name: "Pack Management", desc: "Pack hierarchy, lifecycle, resolver, registry, supply chain certification." },
                      { code: "RALLYFORGE", name: "Dashboard Hub", desc: "Main navigation center and dashboard hub for the platform." },
                      { code: "FRAMEWORK", name: "6P Framework", desc: "Consultative methodology: People, Process, Products, Performance, Pipeline, Platform." },
                    ].map((cc) => (
                      <div key={cc.code} className="rounded-lg bg-[var(--light-gray)] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-[var(--success)]">{cc.code}</span>
                          <span className="text-xs font-medium text-[var(--text-primary)]">{cc.name}</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{cc.desc}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
            ]}
          />
        </Section>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* 7. DATABASE ARCHITECTURE                                     */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <Section id="database" title="Database Architecture" subtitle="240-table PostgreSQL schema governed by The Three Laws (LOCKED January 2026). Neon PostgreSQL everywhere, Prisma ORM only.">
          <div className="grid gap-4 sm:grid-cols-4 mb-6">
            {[
              { value: 240, label: "Tables", sub: "48 tenant-scoped" },
              { value: 41, label: "Enums", sub: "Type-safe constants" },
              { value: 19, label: "Modules", sub: "Control centers" },
              { value: 18, label: "Migrations", sub: "286K lines" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-4 text-center">
                <div className="text-2xl font-bold text-[var(--text-primary)]"><AnimatedNumber value={stat.value} /></div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                <div className="text-xs text-[var(--text-secondary)]">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mb-4">
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
              <div className="text-sm font-semibold text-[var(--bhg-blue)] mb-1">Law 1: Neon Everywhere</div>
              <p className="text-xs text-[var(--text-secondary)]">All environments use Neon PostgreSQL. No Docker Postgres. Local dev uses preview branch.</p>
            </div>
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
              <div className="text-sm font-semibold text-[var(--bhg-blue)] mb-1">Law 2: Neon Branches</div>
              <p className="text-xs text-[var(--text-secondary)]">Preview uses auto-branches per PR. Production uses main. Each PR gets isolated DB.</p>
            </div>
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
              <div className="text-sm font-semibold text-[var(--bhg-blue)] mb-1">Law 3: Prisma Only</div>
              <p className="text-xs text-[var(--text-secondary)]">All access through Prisma client. No raw SQL. Exceptions: pgvector, materialized views, bulk upserts.</p>
            </div>
          </div>

          <ExpandableSection title="Database Guard & Tenant Isolation" defaultOpen={false}>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p><strong className="text-[var(--text-primary)]">Database Guard Middleware</strong> (<code className="text-xs">lib/db/guard.ts</code>) auto-injects <code className="text-xs">tenantId</code> into every query on the 48 tenant-scoped models. Enforced at runtime, not just documented.</p>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded bg-[var(--light-gray)] p-3">
                  <div className="font-semibold text-[var(--text-primary)]">48 tenant-scoped tables</div>
                  <p className="text-xs">Automatic tenantId filtering via Prisma middleware + PostgreSQL row-level security</p>
                </div>
                <div className="rounded bg-[var(--light-gray)] p-3">
                  <div className="font-semibold text-[var(--text-primary)]">192 global tables</div>
                  <p className="text-xs">Platform-level data shared across all tenants (control centers, agents, canonical docs)</p>
                </div>
              </div>
              <div className="rounded bg-[var(--light-gray)] p-3 font-mono text-xs">
                <div className="text-[var(--text-primary)] mb-1">Pattern A Standard (LOCKED):</div>
                <pre className="text-[var(--text-secondary)]">{`model taskComment {
  id        String   @id @default(cuid())
  taskId    String   @map("task_id")
  content   String
  createdAt DateTime @default(now()) @map("created_at")
  @@map("task_comments")
}`}</pre>
              </div>
            </div>
          </ExpandableSection>
        </Section>
      </main>

      <Footer />

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* PRODUCT DETAIL MODALS                                        */}
      {/* ══════════════════════════════════════════════════════════════ */}

      {/* AICR Platform Modal */}
      <Modal isOpen={aicrModal.isOpen} onClose={aicrModal.close} title="AICR Platform — Complete Workflow" size="xlarge">
        <div className="space-y-6">
          <p className="text-[var(--text-secondary)]">Self-aware, AI-native platform that orchestrates the creation, operation, and commercialization of software products through a three-layer architecture.</p>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">End-to-End Pack Lifecycle</h4>
            <div className="space-y-3">
              <FlowStep num={1} label="Author (Studio)" desc="Developer writes pack manifest (JSON: identity, version, deps, surfaces, gates). Validated in real-time. Surfaces tested locally." color="#8b5cf6" />
              <FlowStep num={2} label="Certify (Studio → Summit)" desc="Automated: schema validation, security scan, performance benchmarks, documentation completeness. Manual: code review. Cryptographic signing (SHA-256 + Ed25519)." color="#8b5cf6" />
              <FlowStep num={3} label="Install (Edge)" desc="Tenant selects pack. TenantPack record created linking tenant to pack with config overrides. Pack enabled by default." color="#06b6d4" />
              <FlowStep num={4} label="Resolve (Edge Runtime)" desc="Query installed packs → filter by domain/capability → apply version constraints → resolve deps recursively → order by priority → return deterministic selection." color="#06b6d4" />
              <FlowStep num={5} label="Promote (Summit)" desc="Lifecycle: draft → candidate → beta → stable → deprecated → archived. Each transition logged in PackChangeLog. Instant rollback to any known-good version." color="#d97706" />
              <FlowStep num={6} label="Self-Awareness Loop" desc="96 canonical docs indexed into KBCC. RAG enables semantic queries. Agents query Self-Aware API at runtime to understand platform architecture." color="#066aab" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Data In</h4>
              <ul className="space-y-1">{["Pack manifests (JSON)", "96 canonical docs (markdown)", "Google OAuth authentication", "Telemetry signals", "Feature flag configurations", "AI responses (Claude/GPT-4/Gemini)"].map((d) => <li key={d} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><Check />{d}</li>)}</ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Data Out</h4>
              <ul className="space-y-1">{["Resolved pack sets (deterministic)", "Self-aware context (module defs)", "Audit logs via SPINE", "Operational signals & incidents", "Usage metrics & cost budgets", "Agent invocation logs"].map((d) => <li key={d} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><Check />{d}</li>)}</ul>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Technology Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {["Next.js 15", "React 19", "TypeScript 5", "Prisma ORM", "Neon PostgreSQL", "Vercel AI SDK", "pgvector", "NextAuth v5", "Upstash Redis", "Turborepo", "GitHub Actions"].map((t) => (
                <span key={t} className="rounded bg-[var(--light-gray)] px-2 py-0.5 text-xs text-[var(--text-secondary)]">{t}</span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--bhg-blue)]/20 bg-[var(--bhg-blue)]/5 p-4">
            <h4 className="text-sm font-semibold text-[var(--bhg-blue)] mb-1">RAG Pipeline</h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
              <span className="rounded bg-[var(--light-gray)] px-2 py-1">Documents ingested</span><Arrow />
              <span className="rounded bg-[var(--light-gray)] px-2 py-1">Chunked (512 char)</span><Arrow />
              <span className="rounded bg-[var(--light-gray)] px-2 py-1">Embeddings (text-embedding-3-small)</span><Arrow />
              <span className="rounded bg-[var(--light-gray)] px-2 py-1">Stored in pgvector</span><Arrow />
              <span className="rounded bg-[var(--light-gray)] px-2 py-1">Cosine similarity search</span>
            </div>
          </div>
        </div>
      </Modal>

      {/* Rally Stack Modal */}
      <Modal isOpen={rallyModal.isOpen} onClose={rallyModal.close} title="Rally Stack — Complete Workflow" size="xlarge">
        <div className="space-y-6">
          <p className="text-[var(--text-secondary)]">Platform factory enabling rapid application creation through 130+ reusable modules and three AI Lifecycle Managers (ALMs).</p>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Module Development Lifecycle (7 Phases)</h4>
            <div className="space-y-3">
              <FlowStep num={1} label="Idea" desc="Define purpose, scope, target tier (Studio/Edge/Summit), domain, required connectors." color="#8b5cf6" />
              <FlowStep num={2} label="Create" desc="rally-ai create-module --name generates folder structure and module contract template." color="#8b5cf6" />
              <FlowStep num={3} label="Register" desc="rally-ai register-module updates module registry, route manifest, and dependency graph." color="#8b5cf6" />
              <FlowStep num={4} label="UI" desc="Create React components, implement routes, design forms/tables, add navigation." color="#8b5cf6" />
              <FlowStep num={5} label="Logic" desc="Implement business logic, create API routes, add database models, integrate connectors." color="#8b5cf6" />
              <FlowStep num={6} label="Validate" desc="rally-ai validate checks contract compliance, route conflicts, database schema validity, type safety." color="#8b5cf6" />
              <FlowStep num={7} label="Deploy" desc="Merge to main → Vercel auto-deploys → module available in registry → docs auto-generated." color="#8b5cf6" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Three ALMs (AI Lifecycle Managers)</h4>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-violet-400/5 border border-violet-400/20 p-3">
                <div className="text-sm font-semibold text-[var(--bhg-coral)]">Creator AI (Studio)</div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">3 steps: Ideate → Create → Validate. Single-purpose Studio app in hours.</p>
              </div>
              <div className="rounded-lg bg-cyan-400/5 border border-cyan-400/20 p-3">
                <div className="text-sm font-semibold text-[var(--bhg-blue)]">Operator AI (Edge)</div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">6P framework: People, Process, Products, Performance, Pipeline, Platform. Business ops in days.</p>
              </div>
              <div className="rounded-lg bg-amber-400/5 border border-amber-400/20 p-3">
                <div className="text-sm font-semibold text-amber-600">Enterprise AI (Summit)</div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Infinite extensions for custom cross-org workflows. Enterprise platform in weeks.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">130+ Modules across 10 Categories</h4>
            <div className="flex flex-wrap gap-1.5">
              {["Accounting & Finance (5)", "Analytics & Intelligence (4)", "Content & Marketing (8)", "CRM & Sales (8)", "Events & Community (3)", "Nonprofit/Social Impact (15)", "Operations & Logistics (8)", "People & HR (8)", "Planning & Governance (7)", "Tools & Utilities (11)"].map((c) => (
                <span key={c} className="rounded bg-[var(--light-gray)] px-2 py-0.5 text-xs text-[var(--text-secondary)]">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* SCM / SGM SPARCC Modal */}
      <Modal isOpen={scmModal.isOpen} onClose={scmModal.close} title="SCM / SGM SPARCC — Complete Workflow" size="xlarge">
        <div className="space-y-6">
          <p className="text-[var(--text-secondary)]">Sales compensation governance platform built on the SPARCC pattern — four operational modes where Design, Dispute, and Oversee are shared, while Operate is unique per module.</p>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">SPARCC X*M Workflow Pattern</h4>
            <div className="grid gap-3 sm:grid-cols-4 mb-4">
              <div className="rounded-lg border border-[var(--bhg-coral)]/20 bg-[var(--bhg-coral)]/5 p-3 text-center">
                <div className="text-xs font-semibold uppercase text-[var(--bhg-coral)]">Design</div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Shared via design-core. Frameworks, playbooks, benchmarks.</p>
                <div className="mt-2 rounded bg-[var(--bhg-coral)]/10 px-2 py-0.5 text-xs text-[var(--bhg-coral)]">Shared</div>
              </div>
              <div className="rounded-lg border-2 border-[var(--accent)] bg-[var(--accent)]/5 p-3 text-center">
                <div className="text-xs font-semibold uppercase text-[var(--accent)]">Operate</div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Unique per module. Domain-specific business logic.</p>
                <div className="mt-2 rounded bg-[var(--accent)]/10 px-2 py-0.5 text-xs text-[var(--accent)]">Unique</div>
              </div>
              <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-3 text-center">
                <div className="text-xs font-semibold uppercase text-amber-600">Dispute</div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Shared via dispute-core. Cases, evidence, SLA tracking.</p>
                <div className="mt-2 rounded bg-amber-400/10 px-2 py-0.5 text-xs text-amber-600">Shared</div>
              </div>
              <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3 text-center">
                <div className="text-xs font-semibold uppercase text-[var(--success)]">Oversee</div>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Shared via oversight-core. Approvals, dashboards, audit.</p>
                <div className="mt-2 rounded bg-emerald-400/10 px-2 py-0.5 text-xs text-[var(--success)]">Shared</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Operational Flow</h4>
            <div className="space-y-3">
              <FlowStep num={1} label="Policy Creation" desc="Create governance policies with semantic versioning (major.minor.patch). States: draft → published → superseded → retired." color="#d97706" />
              <FlowStep num={2} label="Territory Setup" desc="Configure 4 territory types: geographic, account-based, industry verticals, named accounts. Visualize hierarchies." color="#d97706" />
              <FlowStep num={3} label="Approval Workflows" desc="Multi-level approvals with SLA tracking, delegation of authority, full audit trail on every decision." color="#d97706" />
              <FlowStep num={4} label="Entity Linking" desc="Policies ↔ territories, territories ↔ accounts, users ↔ roles. Graph traversal queries across entity graph." color="#d97706" />
              <FlowStep num={5} label="Search & Discovery" desc="Full-text search with relevance scoring, faceted filtering, real-time indexing across all entities." color="#d97706" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Clean Architecture (Contracts → Ports → Bindings)</h4>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-[var(--light-gray)] p-3">
                <div className="text-xs font-semibold text-[var(--text-primary)]">Contracts</div>
                <p className="text-xs text-[var(--text-secondary)]">TypeScript + Zod: Policy, Territory, Approval, Relationship schemas</p>
              </div>
              <div className="rounded-lg bg-[var(--light-gray)] p-3">
                <div className="text-xs font-semibold text-[var(--text-primary)]">Ports</div>
                <p className="text-xs text-[var(--text-secondary)]">Service interfaces: PolicyPort, TerritoryPort, ApprovalPort</p>
              </div>
              <div className="rounded-lg bg-[var(--light-gray)] p-3">
                <div className="text-xs font-semibold text-[var(--text-primary)]">Bindings</div>
                <p className="text-xs text-[var(--text-secondary)]">Synthetic (in-memory), Mapped (Salesforce/SAP), Live (Prisma)</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">SPARCC Modules</h4>
            <div className="grid gap-2 sm:grid-cols-3 text-xs">
              {[
                { code: "SGM", name: "Sales Governance Manager", status: "Active" },
                { code: "SDA", name: "Sales Document Analyzer", status: "Active" },
                { code: "SCM", name: "Sales Comp Manager", status: "Design Complete" },
                { code: "SRM", name: "Sales Roles Manager", status: "Planned" },
                { code: "STM", name: "Sales Territory Manager", status: "Planned" },
                { code: "SQM", name: "Sales Quota Manager", status: "Planned" },
              ].map((m) => (
                <div key={m.code} className="flex items-center gap-2 rounded bg-[var(--light-gray)] p-2">
                  <span className="font-mono font-bold text-[var(--accent)]">{m.code}</span>
                  <span className="text-[var(--text-secondary)]">{m.name}</span>
                  <span className={`ml-auto rounded-full px-1.5 py-0.5 text-[10px] ${m.status === "Active" ? "bg-[var(--success)]/10 text-[var(--success)]" : m.status === "Design Complete" ? "bg-blue-400/10 text-blue-400" : "bg-[var(--light-gray)] text-[var(--text-secondary)]"}`}>{m.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* Document Intelligence Modal */}
      <Modal isOpen={docaiModal.isOpen} onClose={docaiModal.close} title="Document Intelligence — Complete Workflow" size="large">
        <div className="space-y-6">
          <p className="text-[var(--text-secondary)]">AI-powered document analysis via KBCC (Knowledge Base Control Center). Ingests documents, generates vector embeddings, and enables semantic search across the entire knowledge base.</p>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">RAG Pipeline</h4>
            <div className="space-y-3">
              <FlowStep num={1} label="Ingest" desc="Documents submitted via POST /api/kbcc/ingest. RagDocument record created with title, content, metadata." color="#06b6d4" />
              <FlowStep num={2} label="Chunk" desc="Content split into 512-character chunks at sentence boundaries for optimal retrieval granularity." color="#06b6d4" />
              <FlowStep num={3} label="Embed" desc="Each chunk embedded using OpenAI text-embedding-3-small via Vercel AI SDK embed() function." color="#06b6d4" />
              <FlowStep num={4} label="Store" desc="Chunks stored in rag_chunks table with pgvector embedding column. Tenant-scoped isolation." color="#06b6d4" />
              <FlowStep num={5} label="Search" desc="Query text embedded → cosine similarity search finds most relevant chunks across tenant documents." color="#06b6d4" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Database Models</h4>
            <div className="grid gap-2 sm:grid-cols-2 text-xs">
              {[
                { model: "RagDocument", scope: "Tenant", desc: "Indexed documents" },
                { model: "RagChunk", scope: "Tenant", desc: "Vector-indexed chunks" },
                { model: "RagQuery", scope: "Tenant", desc: "Query logs" },
                { model: "SpineDocument", scope: "Global", desc: "Evidence documents" },
                { model: "SpineChunk", scope: "Global", desc: "Evidence chunks" },
                { model: "IngestionJob", scope: "Tenant", desc: "Ingestion tracking" },
              ].map((m) => (
                <div key={m.model} className="flex items-center gap-2 rounded bg-[var(--light-gray)] p-2">
                  <span className="font-mono font-semibold text-[var(--accent)]">{m.model}</span>
                  <span className="text-[var(--text-secondary)]">{m.desc}</span>
                  <span className={`ml-auto rounded-full px-1.5 py-0.5 text-[10px] ${m.scope === "Tenant" ? "bg-cyan-400/10 text-cyan-400" : "bg-amber-400/10 text-amber-600"}`}>{m.scope}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* IntelligentSPM Modal */}
      <Modal isOpen={ispmModal.isOpen} onClose={ispmModal.close} title="IntelligentSPM — Planned Architecture" size="large">
        <div className="space-y-6">
          <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-4">
            <p className="text-sm text-[var(--text-secondary)]"><strong className="text-amber-600">Status: Planned (Phase 3 — 2026 Q3-Q4)</strong>. Currently a Next.js starter template. Architecture below reflects planned implementation.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Planned Workflow</h4>
            <div className="space-y-3">
              <FlowStep num={1} label="Configure Quotas" desc="Set sales quotas by territory, role, and time period. Cascade quotas through organizational hierarchy." color="#10b981" />
              <FlowStep num={2} label="Calculate Commissions" desc="Automated commission computation based on SCM governance policies. Multi-tier rate structures." color="#10b981" />
              <FlowStep num={3} label="Analyze Performance" desc="Sales team performance dashboards with real-time and historical metrics." color="#10b981" />
              <FlowStep num={4} label="AI-Powered Optimization" desc="Predictive analytics for quota attainment, churn risk, and incentive plan effectiveness." color="#10b981" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Integration with SCM</h4>
            <div className="rounded-lg bg-[var(--light-gray)] p-3 text-sm text-[var(--text-secondary)]">
              <p>SCM governance policies flow directly into IntelligentSPM. When a policy transitions (draft → published), ISPM rule engines update automatically. Policy lifecycle changes (published → superseded → retired) trigger commission recalculation workflows.</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* TowEdge Modal */}
      <Modal isOpen={towedgeModal.isOpen} onClose={towedgeModal.close} title="TowEdge — Complete Workflow" size="xlarge">
        <div className="space-y-6">
          <p className="text-[var(--text-secondary)]">Full-service towing industry operations platform covering dispatch, fleet management, customer management, and business intelligence.</p>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Dispatch-to-Invoice Workflow</h4>
            <div className="space-y-3">
              <FlowStep num={1} label="Call Intake" desc="Dispatcher receives tow request. Captures location, vehicle info, service type via real-time call management system." color="#f97316" />
              <FlowStep num={2} label="Job Assignment" desc="Assign job to available driver based on proximity and capability. Calculate and communicate ETA to customer." color="#f97316" />
              <FlowStep num={3} label="Dispatch & Track" desc="Driver receives assignment. GPS tracking monitors progress (planned). Driver-dispatcher communication throughout." color="#f97316" />
              <FlowStep num={4} label="Service Completion" desc="Job completed and documented. Vehicle moved to impound lot if needed. Impound inventory management." color="#f97316" />
              <FlowStep num={5} label="Billing & Payment" desc="Automated invoicing generated. AAA/insurance integration handles third-party billing. Customer payment processed." color="#f97316" />
              <FlowStep num={6} label="Reporting" desc="Revenue dashboards, expense management, payroll calculation, compliance monitoring, performance analytics." color="#f97316" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Core Capabilities</h4>
              <ul className="space-y-1">{["Real-time call management & dispatch", "Fleet & driver management", "Impound lot inventory", "Customer CRM with service history", "Automated invoicing", "AAA/insurance integration", "Revenue & expense dashboards", "Payroll calculation"].map((d) => <li key={d} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]"><Check />{d}</li>)}</ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {["React 19.2", "TypeScript 5.9", "Vite", "Chakra UI", "Zustand", "Port 3001"].map((t) => (
                  <span key={t} className="rounded bg-[var(--light-gray)] px-2 py-0.5 text-xs text-[var(--text-secondary)]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* PS Edge Modal */}
      <Modal isOpen={psedgeModal.isOpen} onClose={psedgeModal.close} title="PS Edge (AFFCF) — Complete Workflow" size="xlarge">
        <div className="space-y-6">
          <p className="text-[var(--text-secondary)]">Comprehensive nonprofit management platform for the Alliance for Foster Children and Families. Handles programs, donors, volunteers, beneficiaries, events, grants, and compliance.</p>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Operational Workflow</h4>
            <div className="space-y-3">
              <FlowStep num={1} label="Program Setup" desc="Configure 6 program types: mentorship, tutoring, scholarships, transition services, extracurricular funding, life skills training." color="#14b8a6" />
              <FlowStep num={2} label="Beneficiary Enrollment" desc="Enroll foster children (2,547/yr) into programs. Assign caseworkers. Track service touchpoints. FERPA compliance." color="#14b8a6" />
              <FlowStep num={3} label="Volunteer Management" desc="342 active volunteers, 12,840 hours YTD. Skills matching, shift scheduling, background checks, retention analytics." color="#14b8a6" />
              <FlowStep num={4} label="Fundraising & Donors" desc="1,240 active donors, $1.85M raised YTD. Online donations, recurring gifts, major gifts, giving capacity scoring." color="#14b8a6" />
              <FlowStep num={5} label="Campaign & Events" desc="Multi-channel campaigns with goal tracking, ROI analysis, A/B testing. 18 events YTD with ticketing and sponsorship." color="#14b8a6" />
              <FlowStep num={6} label="Grant Management" desc="Applications, reporting requirements, deadlines, compliance docs, budget reconciliation, milestone tracking." color="#14b8a6" />
              <FlowStep num={7} label="Compliance & Reporting" desc="Form 990 annual filing. Board meetings, committee assignments, term tracking, conflict of interest declarations, impact reports." color="#14b8a6" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">5 AI Assistants</h4>
            <div className="grid gap-2 sm:grid-cols-3 text-xs">
              {[
                { name: "OpsChief", desc: "Operational insights & recommendations" },
                { name: "Pulse", desc: "Analytics & trend detection" },
                { name: "Tasks", desc: "Task automation & routing" },
                { name: "AskNP", desc: "Natural language Q&A for nonprofits" },
                { name: "PageKB", desc: "Context-aware knowledge base" },
              ].map((a) => (
                <div key={a.name} className="rounded bg-[var(--light-gray)] p-2">
                  <span className="font-mono font-semibold text-[var(--accent)]">{a.name}</span>
                  <span className="ml-1.5 text-[var(--text-secondary)]">{a.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* SFP Modal */}
      <Modal isOpen={sfpModal.isOpen} onClose={sfpModal.close} title="SFP — Complete Workflow" size="large">
        <div className="space-y-6">
          <p className="text-[var(--text-secondary)]">Startup financial planning tool for scenario-based revenue projections, runway analysis, and investor-ready reporting.</p>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Planning Workflow</h4>
            <div className="space-y-3">
              <FlowStep num={1} label="Configure" desc="Create scenarios, set parameters, define assumptions, configure baseline. Multiple scenarios for comparison." color="#6366f1" />
              <FlowStep num={2} label="Data Input" desc="Revenue projections, expense forecasts, headcount plans, capital events via spreadsheet-like grid editor." color="#6366f1" />
              <FlowStep num={3} label="Calculate" desc="Deterministic monthly calculations with automatic aggregation, dependency resolution, and error checking." color="#6366f1" />
              <FlowStep num={4} label="Analyze" desc="Runway analysis, break-even calculations, sensitivity analysis across all scenarios." color="#6366f1" />
              <FlowStep num={5} label="Report" desc="Financial statements, trend charts, comparison views. Export to Excel/PDF for investor decks." color="#6366f1" />
            </div>
          </div>

          <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-3 text-xs text-[var(--text-secondary)]">
            <strong className="text-amber-600">Current limitations (v0.1):</strong> Browser localStorage only, no authentication, no server-side persistence, no collaborative editing. Server-side Prisma persistence and AI-powered forecasting planned.
          </div>
        </div>
      </Modal>
    </div>
  );
}
