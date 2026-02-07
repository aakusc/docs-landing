'use client';

import Header from "../components/header";
import Footer from "../components/footer";
import { AnimatedSection, FadeIn } from "../components/animated-section";
import { InteractiveCard, HoverCard } from "../components/interactive-card";
import { AnimatedNumber, PulsingDot } from "../components/animated-stats";
import { StaggerChildren, StaggerItem } from "../components/stagger-children";
import { ExpandableSection, AccordionGroup } from "../components/expandable-section";
import { Modal, useModal, ClickableCard } from "../components/modal";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--text-primary)]">{title}</h2>
      {children}
    </AnimatedSection>
  );
}

function TierCard({
  name,
  label,
  color,
  items,
}: {
  name: string;
  label: string;
  color: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border-2 border-[var(--card-border)] bg-[var(--card-bg)] p-5 transition-colors duration-200">
      <div className="mb-3 flex items-center gap-2">
        <div className={`h-2.5 w-2.5 rounded-full ${color}`} />
        <h3 className="text-base font-semibold text-[var(--text-primary)]">{name}</h3>
        <span className="rounded-full bg-[var(--bhg-blue)]/10 px-2 py-0.5 text-xs text-[var(--text-secondary)]">
          {label}
        </span>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-[var(--text-secondary)]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Architecture() {
  const studioModal = useModal();
  const edgeModal = useModal();
  const summitModal = useModal();
  const dbModal = useModal();

  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-geist-sans)] transition-colors duration-200">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Page Header */}
        <FadeIn>
          <div className="mb-16">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Product Architecture
            </h1>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              Complete AICodeRally/AICR platform architecture — from the AICR platform core (<AnimatedNumber value={240} /> tables, <AnimatedNumber value={19} /> modules, 14 AI agents)
              through Rally Stack (130+ modules) to vertical solutions and SPARCC domain products.
              <span className="mt-2 block text-sm">
                📄 Source: <a href="/MASTER_CODE_DOCUMENT.md" className="text-[var(--accent)] hover:underline transition-colors">MASTER_CODE_DOCUMENT.md</a> (60,000+ lines)
              </span>
            </p>
          </div>
        </FadeIn>

        {/* Dual Platform Architecture */}
        <Section title="Dual Platform Architecture">
          <p className="mb-6 text-[var(--text-secondary)]">
            AICodeRally/AICR represents a dual-generation AI-native platform ecosystem spanning the new AICR Platform (self-aware, 240 tables)
            and the current AICodeRally ecosystem (Rally Stack with 130+ modules).
          </p>
          <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 font-mono text-sm leading-relaxed">
            <pre className="overflow-x-auto text-[var(--text-secondary)]">
{`┌─────────────────────────────────────────────────────────────────┐
│              AICR PLATFORM (New Generation)                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  SUMMIT LAYER (Product & Distribution)                          │
│  → Pack marketplace, enable/promote/rollback, partners          │
│                                                                  │
│  EDGE LAYER (Tenant Runtime)                                    │
│  → Multi-tenancy, feature flags, pack resolver, telemetry       │
│                                                                  │
│  STUDIO LAYER (Development)                                     │
│  → Pack authoring, manifest validation, surface testing         │
│                                                                  │
│  19 Control Centers: AICC, KBCC, GOCC, DOCC, INCC, QACC, IDCC  │
│  OPCC, SPINE, OPSCHIEF, PULSE, ASK, ORBS, PACKS, RALLYFORGE    │
│  PLATFORM, FRAMEWORK, STUDIO, EDGE, SUMMIT                      │
│                                                                  │
│  Database: 240 tables | 14 AI agents | 96 canonical docs       │
│  Repository: github.com/AICodeRally/AICR                        │
└─────────────────────────────────────────────────────────────────┘
                         ⇅ Integration ⇅
┌─────────────────────────────────────────────────────────────────┐
│          AICODERALLY ECOSYSTEM (Current/Legacy)                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  LAYER 4: Summit Solutions                                      │
│  → summit-bhg-spm-suite, summit-enterprise-spm-accelerator      │
│                                                                  │
│  LAYER 3: Edge Portal                                           │
│  → edge-designer-biz-kit, edge-nonprofit-fundraiser, etc.       │
│                                                                  │
│  LAYER 2: Ideation Studio                                       │
│  → Studio apps (one idea → one app)                             │
│                                                                  │
│  LAYER 1: Modules (130+)                                        │
│  → Capability library across 10 categories                      │
│                                                                  │
│  Database: 100+ tables | AI: Multi-model orchestration          │
│  Repository: github.com/AICodeRally/*                           │
└─────────────────────────────────────────────────────────────────┘
                      ⇅ Shared Components ⇅
┌─────────────────────────────────────────────────────────────────┐
│                  VERTICAL DEMO APPLICATIONS                      │
├─────────────────────────────────────────────────────────────────┤
│  • TowEdge (asr-edge-demo) - Towing industry                    │
│  • SGM SPARCC (sgm-sparcc-demo) - Sales governance              │
│  • PS Edge (ps-edge-demo) - Nonprofit management                │
│  • SFP Next (sfp-next-demo) - Startup financial planning        │
│  • IntelligentSPM - Sales performance (planned)                 │
└─────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </Section>

        {/* 19 Control Centers */}
        <Section title="19 Platform Modules">
          <p className="mb-6 text-[var(--text-secondary)]">
            AICR organizes functionality into 19 interconnected control centers across core, cross-layer, and layer-specific domains.
          </p>
          <ExpandableSection
            title="View All 19 Modules"
            defaultOpen={false}
          >
          <div className="overflow-x-auto rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Module</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Layer</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">AICC</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">AI Control Center - models, agents, prompts, orchestration</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">KBCC</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Knowledge Base Control - RAG, vector search, document ingestion</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">GOCC</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Governance Control - policies, proposals, compliance</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">DOCC</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Domain Control - domain registry, tenant domains</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">INCC</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Infrastructure Control - health monitoring, deployments</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">QACC</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">QA Control - tests, quality gates, validation</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">IDCC</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Identity/Data Control - users, tenants, permissions</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">OPCC</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Operations Control - operational signals, incidents</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">SPINE</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Cross-Layer</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Evidence trail, audit logs, change tracking</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">OPSCHIEF</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Cross-Layer</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Operations monitoring and decision intelligence</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">PULSE</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Cross-Layer</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Change intelligence and impact analysis</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">ASK</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Cross-Layer</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">AI interaction hub - unified query interface</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">ORBS</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">UI visualization and dashboard system</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">PACKS</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Pack system hierarchy and management</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">RALLYFORGE</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Core</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Main dashboard hub and navigation</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">STUDIO</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Studio</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Development layer and authoring tools</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">EDGE</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Edge</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Business operations and tenant runtime</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">SUMMIT</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Summit</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Commercial marketplace and partner ecosystem</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-mono font-semibold text-[var(--accent)]">FRAMEWORK</td>
                  <td className="px-5 py-3 text-[var(--text-primary)]">Cross-Layer</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">6P consultative framework</td>
                </tr>
              </tbody>
            </table>
          </div>
          </ExpandableSection>
        </Section>

        {/* Three Tiers */}
        <Section title="Platform Tiers">
          <p className="mb-6 text-[var(--text-secondary)]">
            AICR operates across three tiers that form the core lifecycle:
            <strong className="text-[var(--text-primary)]"> Studio</strong> (build) →
            <strong className="text-[var(--text-primary)]"> Edge</strong> (operate) →
            <strong className="text-[var(--text-primary)]"> Summit</strong> (productize),
            all under policy gates with an immutable evidence spine.
          </p>
          <StaggerChildren staggerDelay={0.2}>
            <div className="grid gap-4 sm:grid-cols-3">
              <StaggerItem>
                <ClickableCard onClick={studioModal.open} glowColor="violet">
                  <TierCard
                    name="Studio"
                    label="Build"
                    color="bg-violet-400"
                    items={[
                      "Pack authoring & validation",
                      "AI agent management",
                      "Prompt engineering",
                      "Workflow design",
                      "Visual builder & sandbox",
                      "Test harness",
                    ]}
                  />
                </ClickableCard>
              </StaggerItem>
              <StaggerItem>
                <ClickableCard onClick={edgeModal.open} glowColor="cyan">
                  <TierCard
                    name="Edge"
                    label="Operate"
                    color="bg-cyan-400"
                    items={[
                      "Multi-tenant runtime",
                      "Feature flags & targeting",
                      "Pack deployment & resolution",
                      "Compliance enforcement",
                      "Real-time telemetry",
                      "Per-tenant monitoring",
                    ]}
                  />
                </ClickableCard>
              </StaggerItem>
              <StaggerItem>
                <ClickableCard onClick={summitModal.open} glowColor="amber">
                  <TierCard
                    name="Summit"
                    label="Productize"
                    color="bg-amber-400"
                    items={[
                      "Product catalog & billing",
                      "Pack promotion lifecycle",
                      "Partner onboarding",
                      "Compliance reporting",
                      "Executive insights",
                      "Controlled launches",
                    ]}
                  />
                </ClickableCard>
              </StaggerItem>
            </div>
          </StaggerChildren>

          {/* Flow arrow */}
          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-[var(--text-secondary)]">
            <span className="rounded bg-[var(--bhg-coral)]/10 px-2.5 py-1 font-medium text-[var(--bhg-coral)]">Studio</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <span className="text-xs">GOCC Gate</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <span className="rounded bg-[var(--bhg-blue)]/10 px-2.5 py-1 font-medium text-[var(--bhg-blue)]">Edge</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <span className="text-xs">Deploy</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <span className="rounded bg-amber-600/10 px-2.5 py-1 font-medium text-amber-600">Summit</span>
          </div>
        </Section>

        {/* Database Architecture */}
        <Section title="Database Architecture">
          <p className="mb-6 text-[var(--text-secondary)]">
            AICR Platform operates on a 240-table PostgreSQL database with strict governance via The Three Laws (LOCKED January 2026).
          </p>
          <StaggerChildren staggerDelay={0.15}>
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <StaggerItem>
                <ClickableCard onClick={dbModal.open} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 text-center" glowColor="cyan">
                  <div className="text-3xl font-bold text-[var(--text-primary)]"><AnimatedNumber value={240} /></div>
                  <div className="text-sm text-[var(--text-secondary)]">Total Tables</div>
                  <div className="mt-2 text-xs text-[var(--text-secondary)]">48 tenant-scoped, 192 global</div>
                </ClickableCard>
              </StaggerItem>
              <StaggerItem>
                <ClickableCard onClick={dbModal.open} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 text-center" glowColor="violet">
                  <div className="text-3xl font-bold text-[var(--text-primary)]">41</div>
                  <div className="text-sm text-[var(--text-secondary)]">Enums</div>
                  <div className="mt-2 text-xs text-[var(--text-secondary)]">Type-safe constants</div>
                </ClickableCard>
              </StaggerItem>
              <StaggerItem>
                <ClickableCard onClick={dbModal.open} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5 text-center" glowColor="amber">
                  <div className="text-3xl font-bold text-[var(--text-primary)]"><AnimatedNumber value={19} /></div>
                  <div className="text-sm text-[var(--text-secondary)]">Modules</div>
                  <div className="mt-2 text-xs text-[var(--text-secondary)]">Control centers</div>
                </ClickableCard>
              </StaggerItem>
            </div>
          </StaggerChildren>

          <AccordionGroup
            className="mb-4"
            items={[
              {
                title: <span className="text-sm">🔒 The Three Laws (LOCKED)</span>,
                content: (
                  <div className="space-y-3 text-sm">
                    <div className="rounded-lg bg-[var(--light-gray)] p-4">
                      <div className="font-semibold text-[var(--bhg-blue)]">LAW 1: NEON EVERYWHERE</div>
                      <p className="mt-1 text-[var(--text-secondary)]">All environments use Neon PostgreSQL. No Docker Postgres. Local dev uses preview branch via pnpm env:pull.</p>
                    </div>
                    <div className="rounded-lg bg-[var(--light-gray)] p-4">
                      <div className="font-semibold text-[var(--bhg-blue)]">LAW 2: NEON BRANCHES</div>
                      <p className="mt-1 text-[var(--text-secondary)]">Preview uses auto-branches (per PR), Production uses main. Local dev shares preview branch credentials.</p>
                    </div>
                    <div className="rounded-lg bg-[var(--light-gray)] p-4">
                      <div className="font-semibold text-[var(--bhg-blue)]">LAW 3: PRISMA ONLY</div>
                      <p className="mt-1 text-[var(--text-secondary)]">All database access through Prisma client. No raw SQL pools. Zero exceptions (except documented exemptions: pgvector, materialized views, database functions, bulk upserts).</p>
                    </div>
                  </div>
                )
              },
              {
                title: <span className="text-sm">📐 Pattern A Standard (LOCKED)</span>,
                content: (
                  <div>
                    <p className="mb-3 text-sm text-[var(--text-secondary)]">All Prisma models follow camelCase + @map convention:</p>
                    <div className="rounded-lg bg-[var(--light-gray)] p-3 font-mono text-xs">
                      <pre className="text-[var(--text-secondary)]">{`model taskComment {
  id        String   @id @default(cuid())
  taskId    String   @map("task_id")
  content   String
  createdAt DateTime @default(now()) @map("created_at")

  @@map("task_comments")
}`}</pre>
                    </div>
                  </div>
                )
              }
            ]}
          />
        </Section>

        {/* SPARCC Module Pattern */}
        <Section title="SPARCC Product Modules">
          <p className="mb-6 text-[var(--text-secondary)]">
            SPARCC (Sales Performance and Revenue Control Center) is the first domain product built on the AICR platform.
            Each module follows the <strong className="text-[var(--text-primary)]">X*M pattern</strong> — four operational modes where only OPERATE is unique per module, achieving 60-80% code reuse.
          </p>

          {/* 4-mode diagram */}
          <div className="mb-8 grid gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 text-center">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--bhg-coral)]">Design</div>
              <p className="text-xs text-[var(--text-secondary)]">Shared via design-core. Frameworks, playbooks, benchmarks.</p>
              <div className="mt-2 rounded bg-[var(--bhg-coral)]/10 px-2 py-0.5 text-xs text-[var(--bhg-coral)]">Shared</div>
            </div>
            <div className="rounded-xl border border-[var(--accent)] bg-[var(--accent)]/5 p-4 text-center">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">Operate</div>
              <p className="text-xs text-[var(--text-secondary)]">Unique per module. Domain-specific business logic.</p>
              <div className="mt-2 rounded bg-[var(--accent)]/10 px-2 py-0.5 text-xs text-[var(--accent)]">Unique</div>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 text-center">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">Dispute</div>
              <p className="text-xs text-[var(--text-secondary)]">Shared via dispute-core. Cases, evidence, SLA tracking.</p>
              <div className="mt-2 rounded bg-amber-600/10 px-2 py-0.5 text-xs text-amber-600">Shared</div>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-4 text-center">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--success)]">Oversee</div>
              <p className="text-xs text-[var(--text-secondary)]">Shared via oversight-core. Approvals, dashboards, audit.</p>
              <div className="mt-2 rounded bg-emerald-400/10 px-2 py-0.5 text-xs text-[var(--success)]">Shared</div>
            </div>
          </div>

          {/* Module table */}
          <ExpandableSection
            title="View SPARCC Modules"
            defaultOpen={false}
          >
          <div className="overflow-x-auto rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Module</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Name</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">OPERATE Focus</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 text-sm font-mono font-semibold text-[var(--accent)]">SGM</td>
                  <td className="px-5 py-3 text-sm font-medium text-[var(--text-primary)]">Sales Governance Manager</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">Policy management, compliance workflows, governance tracking</td>
                  <td className="px-5 py-3"><span className="rounded-full bg-[var(--success)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--success)]">Active</span></td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 text-sm font-mono font-semibold text-[var(--accent)]">SDA</td>
                  <td className="px-5 py-3 text-sm font-medium text-[var(--text-primary)]">Sales Document Analyzer</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">AI-powered doc analysis, consensus voting, policy-backed findings</td>
                  <td className="px-5 py-3"><span className="rounded-full bg-[var(--success)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--success)]">Active</span></td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 text-sm font-mono font-semibold text-[var(--accent)]">SCM</td>
                  <td className="px-5 py-3 text-sm font-medium text-[var(--text-primary)]">Sales Comp Manager</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">Comp plan calculations, crediting engine, period processing</td>
                  <td className="px-5 py-3"><span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">Design Complete</span></td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 text-sm font-mono text-[var(--text-secondary)]">SRM</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">Sales Roles Manager</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">Role definitions, job leveling, career paths</td>
                  <td className="px-5 py-3"><span className="rounded-full bg-[var(--light-gray)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)]">Planned</span></td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 text-sm font-mono text-[var(--text-secondary)]">STM</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">Sales Territory Manager</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">Territory assignments, coverage analysis</td>
                  <td className="px-5 py-3"><span className="rounded-full bg-[var(--light-gray)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)]">Planned</span></td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-sm font-mono text-[var(--text-secondary)]">SQM</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">Sales Quota Manager</td>
                  <td className="px-5 py-3 text-sm text-[var(--text-secondary)]">Quota allocation, rollups, waterfall calculations</td>
                  <td className="px-5 py-3"><span className="rounded-full bg-[var(--light-gray)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)]">Planned</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          </ExpandableSection>

          {/* Shared services */}
          <div className="mt-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5">
            <h3 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Shared Services (across all SPARCC modules)</h3>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-[var(--light-gray)] p-3">
                <div className="text-xs font-semibold text-[var(--bhg-coral)]">DFS — Design Framework Service</div>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">SPM frameworks, templates, calculators</p>
              </div>
              <div className="rounded-lg bg-[var(--light-gray)] p-3">
                <div className="text-xs font-semibold text-amber-600">DRM — Dispute Resolution Manager</div>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">Field rep disputes, case management</p>
              </div>
              <div className="rounded-lg bg-[var(--light-gray)] p-3">
                <div className="text-xs font-semibold text-[var(--success)]">OVS — Oversight Service</div>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">Committee governance, approvals, dashboards</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Cross-Layer Systems */}
        <Section title="Cross-Layer Systems">
          <p className="mb-6 text-[var(--text-secondary)]">
            Four cross-layer systems span all tiers, providing platform-wide observability, audit, intelligence, and AI interaction.
          </p>
          <StaggerChildren staggerDelay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2">
              <StaggerItem>
                <InteractiveCard className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="cyan">
                  <div className="mb-1 flex items-center gap-2">
                    <PulsingDot color="blue" />
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">Spine</h3>
                    <span className="rounded bg-blue-400/10 px-1.5 py-0.5 text-xs text-blue-400">Ledger</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">Immutable evidence trail. Every material action is recorded with provenance, decision rationale, and version context. The golden thread across all operations.</p>
                </InteractiveCard>
              </StaggerItem>
              <StaggerItem>
                <InteractiveCard className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="accent">
                  <div className="mb-1 flex items-center gap-2">
                    <PulsingDot color="orange" />
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">OpsChief</h3>
                    <span className="rounded bg-orange-400/10 px-1.5 py-0.5 text-xs text-orange-400">Observer</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">Operational monitoring and risk scoring. Watches but never executes — validates evidence, flags risks, and gates promotions across the platform.</p>
                </InteractiveCard>
              </StaggerItem>
              <StaggerItem>
                <InteractiveCard className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="violet">
                  <div className="mb-1 flex items-center gap-2">
                    <PulsingDot color="pink" />
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">Pulse</h3>
                    <span className="rounded bg-pink-400/10 px-1.5 py-0.5 text-xs text-pink-400">Observer</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">Change intelligence and proactive coaching. Detects what changed, why it matters, and surfaces recommendations across all platform dimensions.</p>
                </InteractiveCard>
              </StaggerItem>
              <StaggerItem>
                <InteractiveCard className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="accent">
                  <div className="mb-1 flex items-center gap-2">
                    <PulsingDot color="cyan" />
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">AskForge</h3>
                    <span className="rounded bg-[var(--accent)]/10 px-1.5 py-0.5 text-xs text-[var(--accent)]">Action</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">AI interaction hub with four modes: .doc (documentation), .plan (implementation), .task (work items), and .policy (governance queries).</p>
                </InteractiveCard>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </Section>

        {/* Pack System */}
        <Section title="Pack System">
          <p className="mb-6 text-[var(--text-secondary)]">
            Packs are the atomic unit of composition in AICR. Everything ships as a versioned bundle — capabilities, models, workflows, UIs, policies, tests, and evidence templates.
          </p>
          <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 font-mono text-sm leading-relaxed">
            <pre className="overflow-x-auto text-[var(--text-secondary)]">
{`Pack Lifecycle

  Author          Validate         Register         Deploy           Resolve
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  Studio   │──>│  Schema  │──>│ Registry │──>│   Edge   │──>│  Tenant  │
│  Manifest │   │  + Gates │   │ Version  │   │  Runtime │   │  Context │
│  + Assets │   │  Check   │   │  Track   │   │  Activate│   │  Resolve │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
                    │                              │
                    └─── Certification ────────────┘
                         (crypto signing before production)

Promotion:  Studio ──> Edge ──> Summit  (with rollback at every stage)
Trust:      Policy > Execute > Redact > Audit  (four-step pattern via GOCC)`}
            </pre>
          </div>
        </Section>
      </main>

      <Footer />

      {/* Modals */}
      <Modal isOpen={studioModal.isOpen} onClose={studioModal.close} title="Studio Layer — Build" size="large">
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[var(--bhg-coral)]">Development & Authoring Environment</h3>
            <p className="text-[var(--text-secondary)]">
              Studio is where developers create and validate packs — the atomic units of functionality in AICR.
              It provides a comprehensive authoring environment with real-time validation, testing harnesses, and policy enforcement.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">Key Features</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-[var(--bhg-coral)]">Pack Authoring & Validation</div>
                <p className="text-sm text-[var(--text-secondary)]">Visual builder for creating packs with manifests, surfaces, workflows, and dependencies. Real-time schema validation ensures packs meet platform requirements.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-[var(--bhg-coral)]">AI Agent Management</div>
                <p className="text-sm text-[var(--text-secondary)]">Configure and test 14 specialized AI agents. Set up prompts, memory configurations, and agent coordination workflows.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-[var(--bhg-coral)]">Workflow Design</div>
                <p className="text-sm text-[var(--text-secondary)]">Visual workflow builder for orchestrating complex business processes with conditionals, loops, and AI-powered decision points.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-[var(--bhg-coral)]">Test Harness</div>
                <p className="text-sm text-[var(--text-secondary)]">Isolated sandbox for testing pack surfaces before deployment. Run unit tests, integration tests, and surface validation.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-violet-400/20 bg-violet-400/5 p-4">
            <div className="mb-2 text-sm font-semibold text-[var(--bhg-coral)]">GOCC Gate Integration</div>
            <p className="text-sm text-[var(--text-secondary)]">
              All packs must pass through GOCC (Governance Control Center) policy gates before promotion to Edge.
              Gates validate compliance with security policies, data governance rules, and platform standards.
            </p>
          </div>
        </div>
      </Modal>

      <Modal isOpen={edgeModal.isOpen} onClose={edgeModal.close} title="Edge Layer — Operate" size="large">
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[var(--bhg-blue)]">Multi-Tenant Production Runtime</h3>
            <p className="text-[var(--text-secondary)]">
              Edge is the operational heart of AICR, providing the runtime environment where tenant applications execute.
              It handles multi-tenancy, feature flags, pack resolution, compliance enforcement, and real-time telemetry.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">Key Features</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-[var(--bhg-blue)]">Multi-Tenant Runtime</div>
                <p className="text-sm text-[var(--text-secondary)]">Isolated execution contexts for each tenant with automatic tenantId injection. 48 tenant-scoped database tables ensure complete data isolation.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-[var(--bhg-blue)]">Feature Flags & Targeting</div>
                <p className="text-sm text-[var(--text-secondary)]">Granular feature control at tenant, user, or cohort level. Real-time flag updates without redeployment.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-[var(--bhg-blue)]">Pack Resolution</div>
                <p className="text-sm text-[var(--text-secondary)]">Deterministic dependency resolution for pack loading. Version conflict detection and automatic fallback to compatible versions.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-[var(--bhg-blue)]">Real-Time Telemetry</div>
                <p className="text-sm text-[var(--text-secondary)]">Comprehensive metrics, traces, and logs for every operation. Cost attribution per tenant, pack, and API call.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
            <div className="mb-2 text-sm font-semibold text-[var(--bhg-blue)]">Compliance Enforcement</div>
            <p className="text-sm text-[var(--text-secondary)]">
              Runtime validation ensures all operations comply with GOCC governance rules. Automatic blocking of non-compliant actions with detailed audit trail via Spine.
            </p>
          </div>
        </div>
      </Modal>

      <Modal isOpen={summitModal.isOpen} onClose={summitModal.close} title="Summit Layer — Productize" size="large">
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-amber-600">Commercial Marketplace & Distribution</h3>
            <p className="text-[var(--text-secondary)]">
              Summit is the commercial layer where packs become products. It manages the pack marketplace,
              partner ecosystem, billing, compliance reporting, and executive insights for platform operations.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">Key Features</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-600">Product Catalog & Billing</div>
                <p className="text-sm text-[var(--text-secondary)]">Public and private marketplace with search, ratings, and recommendations. Usage-based billing with automatic invoicing.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-600">Pack Promotion Lifecycle</div>
                <p className="text-sm text-[var(--text-secondary)]">Enable, promote, or rollback packs across environments. Full audit trail and approval workflows via GOCC.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-600">Partner Onboarding</div>
                <p className="text-sm text-[var(--text-secondary)]">Self-service portal for third-party developers. Automated revenue sharing and pack certification process.</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-600">Executive Insights</div>
                <p className="text-sm text-[var(--text-secondary)]">Real-time dashboards showing platform health, adoption metrics, revenue analytics, and risk scores.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-4">
            <div className="mb-2 text-sm font-semibold text-amber-600">Controlled Launches</div>
            <p className="text-sm text-[var(--text-secondary)]">
              Phased rollout strategies with automatic rollback on quality gate failures. Canary deployments with real-time monitoring and instant revert capability.
            </p>
          </div>
        </div>
      </Modal>

      <Modal isOpen={dbModal.isOpen} onClose={dbModal.close} title="Database Architecture" size="xlarge">
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[var(--bhg-blue)]">240-Table PostgreSQL Architecture with The Three Laws</h3>
            <p className="text-[var(--text-secondary)]">
              AICR operates on a massive 240-table database with strict governance via The Three Laws (LOCKED January 2026).
              Built on Neon PostgreSQL with Prisma ORM and Pattern A naming convention.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4 text-center">
              <div className="text-3xl font-bold text-[var(--bhg-blue)]">240</div>
              <div className="text-sm text-[var(--text-secondary)]">Total Tables</div>
              <div className="mt-2 text-xs text-[var(--text-secondary)]">48 tenant-scoped, 192 global</div>
            </div>
            <div className="rounded-lg border border-violet-400/20 bg-violet-400/5 p-4 text-center">
              <div className="text-3xl font-bold text-[var(--bhg-coral)]">41</div>
              <div className="text-sm text-[var(--text-secondary)]">Enums</div>
              <div className="mt-2 text-xs text-[var(--text-secondary)]">Type-safe constants</div>
            </div>
            <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-4 text-center">
              <div className="text-3xl font-bold text-amber-600">286,668</div>
              <div className="text-sm text-[var(--text-secondary)]">Lines of Schema</div>
              <div className="mt-2 text-xs text-[var(--text-secondary)]">18 migrations</div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">The Three Laws (LOCKED)</h4>
            <div className="space-y-3">
              <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
                <div className="mb-2 text-sm font-semibold text-[var(--bhg-blue)]">LAW 1: NEON EVERYWHERE</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  All environments use Neon PostgreSQL. No Docker Postgres. Local dev uses preview branch via pnpm env:pull.
                  This ensures consistency across development, preview, and production environments.
                </p>
              </div>
              <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
                <div className="mb-2 text-sm font-semibold text-[var(--bhg-blue)]">LAW 2: NEON BRANCHES</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Preview uses auto-branches (per PR), Production uses main. Local dev shares preview branch credentials.
                  Each pull request gets an isolated database branch for testing.
                </p>
              </div>
              <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
                <div className="mb-2 text-sm font-semibold text-[var(--bhg-blue)]">LAW 3: PRISMA ONLY</div>
                <p className="text-sm text-[var(--text-secondary)]">
                  All database access through Prisma client. No raw SQL pools. Zero exceptions (except documented exemptions: pgvector, materialized views, database functions, bulk upserts).
                  This ensures type safety and automatic tenantId injection.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Pattern A Standard (LOCKED)</h4>
            <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
              <p className="mb-3 text-sm text-[var(--text-secondary)]">
                All Prisma models follow camelCase + @map convention. Model names are camelCase, field names are camelCase,
                but database tables and columns use snake_case via @map decorator:
              </p>
              <div className="rounded-lg bg-[var(--card-bg)] p-4 font-mono text-xs">
                <pre className="text-[var(--text-secondary)]">{`model taskComment {
  id        String   @id @default(cuid())
  taskId    String   @map("task_id")
  content   String
  createdAt DateTime @default(now()) @map("created_at")

  @@map("task_comments")
}`}</pre>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-4">
            <div className="mb-2 text-sm font-semibold text-[var(--success)]">Tenant Isolation Architecture</div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div>• <strong className="text-[var(--text-primary)]">48 tenant-scoped tables:</strong> Automatic tenantId filtering on all queries via Prisma middleware</div>
              <div>• <strong className="text-[var(--text-primary)]">192 global tables:</strong> Platform-level data shared across all tenants (control centers, agents, docs)</div>
              <div>• <strong className="text-[var(--text-primary)]">Row-level security:</strong> PostgreSQL policies enforce tenant boundaries at database level</div>
              <div>• <strong className="text-[var(--text-primary)]">Audit trail:</strong> Every mutation logged to Spine with full provenance and rollback capability</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
