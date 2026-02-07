'use client';

import Header from "../components/header";
import Footer from "../components/footer";
import { AnimatedSection, FadeIn } from "../components/animated-section";
import { InteractiveCard, HoverCard } from "../components/interactive-card";
import { AnimatedNumber } from "../components/animated-stats";
import { StaggerChildren, StaggerItem } from "../components/stagger-children";
import { ExpandableSection, TabContainer } from "../components/expandable-section";
import { Modal, useModal, ClickableCard } from "../components/modal";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--text-primary)]">{title}</h2>
      {children}
    </AnimatedSection>
  );
}

export default function Reference() {
  const studioModal = useModal();
  const edgeModal = useModal();
  const summitModal = useModal();

  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-geist-sans)] transition-colors duration-200">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Page Header */}
        <FadeIn>
          <div className="mb-16">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Quick Reference
            </h1>
            <p className="max-w-3xl text-lg text-[var(--text-secondary)]">
              Executive-level overview of the AICodeRally/AICR platform ecosystem — what everything is, how it fits together, and key terminology.
              <span className="mt-2 block text-sm">
                📄 Source: <a href="/MASTER_CODE_DOCUMENT.md" className="text-[var(--accent)] hover:underline transition-colors">MASTER_CODE_DOCUMENT.md</a> - Complete glossary from Section 35
              </span>
            </p>
          </div>
        </FadeIn>

        {/* What We Do */}
        <Section title="What We Do">
          <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
            <h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">AICodeRally/AICR: Self-Aware AI-Native Platform Factory</h3>
            <p className="mb-4 text-base leading-relaxed text-[var(--text-secondary)]">
              We build and operate a <strong className="text-[var(--text-primary)]">dual-generation AI-native platform ecosystem</strong> that enables organizations
              to create, operate, and commercialize software products at unprecedented speed and scale.
            </p>
            <StaggerChildren staggerDelay={0.15}>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <StaggerItem>
                  <InteractiveCard className="rounded-lg bg-[var(--light-gray)] p-4" glowColor="violet">
                    <div className="mb-2 text-sm font-semibold text-[var(--accent)]">AICR Platform (New Generation)</div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Self-aware platform with <AnimatedNumber value={240} />-table database, 19 control centers, 14 specialized AI agents, and complete self-documentation.
                      Features deterministic pack resolution, enforced governance, and multi-tenant architecture.
                    </p>
                  </InteractiveCard>
                </StaggerItem>
                <StaggerItem>
                  <InteractiveCard className="rounded-lg bg-[var(--light-gray)] p-4" glowColor="cyan">
                    <div className="mb-2 text-sm font-semibold text-[var(--accent)]">AICodeRally Ecosystem (Current)</div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Platform factory with 130+ reusable modules, Rally AI orchestration framework, and proven vertical solutions
                      across towing, nonprofit, sales governance, and financial planning industries.
                    </p>
                  </InteractiveCard>
                </StaggerItem>
              </div>
            </StaggerChildren>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">10x faster:</strong> Applications in weeks, not years</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">10x cheaper:</strong> $50k vs $500k+ traditional implementations</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">AI-native:</strong> 14 specialized agents with persistent memory and coordinated workflows</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--accent)]">✓</span>
                <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Self-aware:</strong> Platform understands its own architecture through indexed canonical documentation</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Products at a Glance */}
        <Section title="Products at a Glance">
          <StaggerChildren staggerDelay={0.15}>
            <div className="space-y-4">
              <StaggerItem>
                <InteractiveCard className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="violet">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[var(--text-primary)]">AICR Platform</h3>
                    <span className="text-xs text-[var(--text-secondary)]">Core engine</span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Self-aware, AI-native platform for creating, operating, and commercializing software products through Studio/Edge/Summit three-layer architecture.
                    Features <AnimatedNumber value={240} />-table database, 19 control centers, 14 AI agents, and 96 canonical documentation files indexed for real-time queries.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded bg-violet-400/10 px-2 py-0.5 text-xs text-violet-400 transition-colors hover:bg-violet-400/20">Studio Layer</span>
                    <span className="rounded bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-400 transition-colors hover:bg-cyan-400/20">Edge Layer</span>
                    <span className="rounded bg-amber-400/10 px-2 py-0.5 text-xs text-amber-400 transition-colors hover:bg-amber-400/20">Summit Layer</span>
                  </div>
                </InteractiveCard>
              </StaggerItem>

              <div className="grid gap-4 sm:grid-cols-2">
                <StaggerItem>
                  <InteractiveCard className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="cyan">
                    <h3 className="font-semibold text-[var(--text-primary)]">Rally Stack</h3>
                    <p className="text-xs text-[var(--accent)]">AICodeRally Ecosystem</p>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      Monorepo-based application factory with 130+ reusable modules across 10 categories.
                      Includes Rally AI framework for multi-model orchestration (Claude + GPT-4 + Gemini) and Agent Protocol for AI coordination.
                    </p>
                    <div className="mt-3 text-xs text-[var(--text-secondary)]">
                      100+ tables | Turborepo + pnpm | Vercel hosting
                    </div>
                  </InteractiveCard>
                </StaggerItem>
                <StaggerItem>
                  <InteractiveCard className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="emerald">
                    <h3 className="font-semibold text-[var(--text-primary)]">Vertical Solutions</h3>
                    <p className="text-xs text-[var(--accent)]">Proven Implementations</p>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      Industry-specific demo applications: TowEdge (towing), SGM SPARCC (sales governance),
                      PS Edge (nonprofit management), SFP Next (startup finance), IntelligentSPM (planned).
                    </p>
                    <div className="mt-3 text-xs text-[var(--text-secondary)]">
                      5 repositories | Production-ready demos
                    </div>
                  </InteractiveCard>
                </StaggerItem>
              </div>
            </div>
          </StaggerChildren>
        </Section>

        {/* How It Fits Together */}
        <Section title="How It Fits Together">
          <StaggerChildren staggerDelay={0.15}>
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <StaggerItem>
                <ClickableCard onClick={studioModal.open} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="violet">
                  <div className="mb-3 inline-block rounded bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-400">Studio Layer</div>
                  <p className="mb-2 text-sm font-medium text-[var(--text-primary)]">Build</p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li>• Pack authoring & validation</li>
                    <li>• Manifest validation</li>
                    <li>• Surface testing</li>
                    <li>• Gate enforcement</li>
                    <li>• Development tooling</li>
                  </ul>
                </ClickableCard>
              </StaggerItem>
              <StaggerItem>
                <ClickableCard onClick={edgeModal.open} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="cyan">
                  <div className="mb-3 inline-block rounded bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">Edge Layer</div>
                  <p className="mb-2 text-sm font-medium text-[var(--text-primary)]">Operate</p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li>• Tenant runtime execution</li>
                    <li>• Feature flags</li>
                    <li>• Pack resolver</li>
                    <li>• Telemetry & monitoring</li>
                    <li>• Cost tracking</li>
                  </ul>
                </ClickableCard>
              </StaggerItem>
              <StaggerItem>
                <ClickableCard onClick={summitModal.open} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-5" glowColor="amber">
                  <div className="mb-3 inline-block rounded bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400">Summit Layer</div>
                  <p className="mb-2 text-sm font-medium text-[var(--text-primary)]">Productize</p>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li>• Pack marketplace</li>
                    <li>• Enable/promote/rollback</li>
                    <li>• Partner onboarding</li>
                    <li>• Commercial operations</li>
                    <li>• Usage analytics</li>
                  </ul>
                </ClickableCard>
              </StaggerItem>
            </div>
          </StaggerChildren>
          <p className="text-sm text-[var(--text-secondary)]">
            The three layers form a complete lifecycle: <strong className="text-[var(--text-primary)]">Studio</strong> for development and authoring,
            <strong className="text-[var(--text-primary)]"> Edge</strong> for production runtime and operations, and <strong className="text-[var(--text-primary)]"> Summit</strong> for
            commercial distribution and marketplace operations. All layers integrate with the 19 control centers and cross-layer systems (Spine, OpsChief, Pulse, ASK).
          </p>
        </Section>

        {/* Key Terms */}
        <Section title="Key Terms">
          <p className="mb-6 text-[var(--text-secondary)]">
            Essential terminology from the AICR/AICodeRally ecosystem. For complete glossary, see Section 35 of the Master Code Document.
          </p>

          <ExpandableSection
            title="View Glossary"
            defaultOpen={false}
          >
          <div className="overflow-x-auto rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Term</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Definition</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">AICR</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">AICodeRally Platform - Self-aware, AI-native platform for creating, operating, and commercializing software through Studio/Edge/Summit architecture</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Pack</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Versioned capability bundle with validated manifest, surfaces, gates, and dependencies. Smallest shippable unit in AICR</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Tenant</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Isolated customer instance with dedicated data scope. 48 database models are tenant-scoped with automatic tenantId injection</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Module</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Reusable capability bundle in AICodeRally ecosystem. 130+ modules across 10 categories (accounting, CRM, nonprofit, etc.)</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Self-Aware</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Architecture where platform understands itself through indexed canonical documentation queryable by agents in real-time</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Agent</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Specialized AI assistant with clear role separation, persistent memory, and coordinated workflows. 14 agents in AICR ecosystem</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Chiefs</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Specialized AI systems: OpsChief (operations monitoring), CodeReviewChief (code quality), PulseChief (change intelligence)</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Spine</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Cross-platform audit trail system providing evidence preservation, change tracking, and compliance documentation</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Rally</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Collection of packs sharing a common domain or business purpose</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Pattern A</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">LOCKED database naming convention: camelCase model names + @map to snake_case table names in Prisma</td>
                </tr>
                <tr className="border-b border-[var(--card-border)]">
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">The Three Laws</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">LOCKED database governance: (1) Neon everywhere, (2) Neon branches, (3) Prisma only</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">Rally AI</td>
                  <td className="px-5 py-3 text-[var(--text-secondary)]">Command-line orchestration framework using three ALMs (Creator, Operator, Enterprise) to generate applications</td>
                </tr>
              </tbody>
            </table>
          </div>
          </ExpandableSection>
        </Section>

        {/* Acronym Decoder */}
        <Section title="Acronym Decoder">
          <p className="mb-6 text-[var(--text-secondary)]">Quick lookup for control centers, modules, and platform components.</p>

          <TabContainer
            tabs={[
              {
                label: "Control Centers",
                color: "cyan",
                content: (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Core</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-mono text-[var(--accent)]">AICC</span> <span className="text-[var(--text-secondary)]">— AI Control Center</span></div>
                        <div><span className="font-mono text-[var(--accent)]">KBCC</span> <span className="text-[var(--text-secondary)]">— Knowledge Base Control</span></div>
                        <div><span className="font-mono text-[var(--accent)]">GOCC</span> <span className="text-[var(--text-secondary)]">— Governance Control</span></div>
                        <div><span className="font-mono text-[var(--accent)]">DOCC</span> <span className="text-[var(--text-secondary)]">— Domain Control</span></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">More Core</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-mono text-[var(--accent)]">INCC</span> <span className="text-[var(--text-secondary)]">— Infrastructure Control</span></div>
                        <div><span className="font-mono text-[var(--accent)]">QACC</span> <span className="text-[var(--accent)]">— QA Control</span></div>
                        <div><span className="font-mono text-[var(--accent)]">IDCC</span> <span className="text-[var(--text-secondary)]">— Identity/Data Control</span></div>
                        <div><span className="font-mono text-[var(--accent)]">OPCC</span> <span className="text-[var(--text-secondary)]">— Operations Control</span></div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                label: "Cross-Layer",
                color: "violet",
                content: (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-mono text-[var(--accent)]">SPINE</span> <span className="text-[var(--text-secondary)]">— Evidence Trail</span></div>
                        <div><span className="font-mono text-[var(--accent)]">OPSCHIEF</span> <span className="text-[var(--text-secondary)]">— Operations Intelligence</span></div>
                        <div><span className="font-mono text-[var(--accent)]">PULSE</span> <span className="text-[var(--text-secondary)]">— Change Intelligence</span></div>
                        <div><span className="font-mono text-[var(--accent)]">ASK</span> <span className="text-[var(--text-secondary)]">— AI Interaction Hub</span></div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-mono text-[var(--accent)]">ORBS</span> <span className="text-[var(--text-secondary)]">— Visualization System</span></div>
                        <div><span className="font-mono text-[var(--accent)]">PACKS</span> <span className="text-[var(--text-secondary)]">— Pack Management</span></div>
                        <div><span className="font-mono text-[var(--accent)]">RALLYFORGE</span> <span className="text-[var(--text-secondary)]">— Dashboard Hub</span></div>
                        <div><span className="font-mono text-[var(--accent)]">FRAMEWORK</span> <span className="text-[var(--text-secondary)]">— 6P Framework</span></div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                label: "Layers & Vertical",
                color: "amber",
                content: (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Layer-Specific</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-mono text-[var(--accent)]">STUDIO</span> <span className="text-[var(--text-secondary)]">— Development Layer</span></div>
                        <div><span className="font-mono text-[var(--accent)]">EDGE</span> <span className="text-[var(--text-secondary)]">— Operations Layer</span></div>
                        <div><span className="font-mono text-[var(--accent)]">SUMMIT</span> <span className="text-[var(--text-secondary)]">— Commerce Layer</span></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">Vertical Demos</h4>
                      <div className="space-y-2 text-sm">
                        <div><span className="font-mono text-[var(--accent)]">SPARCC</span> <span className="text-[var(--text-secondary)]">— Sales Performance and Revenue Control Center</span></div>
                        <div><span className="font-mono text-[var(--accent)]">SGM</span> <span className="text-[var(--text-secondary)]">— Sales Governance Manager</span></div>
                        <div><span className="font-mono text-[var(--accent)]">SDA</span> <span className="text-[var(--text-secondary)]">— Sales Document Analyzer</span></div>
                        <div><span className="font-mono text-[var(--accent)]">SCM</span> <span className="text-[var(--text-secondary)]">— Sales Comp Manager</span></div>
                        <div><span className="font-mono text-[var(--accent)]">SFP</span> <span className="text-[var(--text-secondary)]">— Startup Financial Planning</span></div>
                      </div>
                    </div>
                  </div>
                )
              }
            ]}
          />
        </Section>
      </main>

      <Footer />

      {/* Modals */}
      <Modal isOpen={studioModal.isOpen} onClose={studioModal.close} title="Studio Layer — Build" size="large">
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-violet-400">Development & Authoring Environment</h3>
            <p className="text-[var(--text-secondary)]">
              Studio is where developers create and validate packs — the atomic units of functionality in AICR.
              It provides a comprehensive authoring environment with real-time validation, testing harnesses, and policy enforcement.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">Core Capabilities</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-violet-400">Pack Authoring</div>
                <p className="text-xs text-[var(--text-secondary)]">Visual builder for creating packs with manifests, surfaces, workflows, and dependencies</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-violet-400">Manifest Validation</div>
                <p className="text-xs text-[var(--text-secondary)]">Real-time schema validation ensuring packs meet platform requirements before registration</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-violet-400">Surface Testing</div>
                <p className="text-xs text-[var(--text-secondary)]">Sandbox environment for testing pack surfaces (UI, API, workflows) before deployment</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-violet-400">Gate Enforcement</div>
                <p className="text-xs text-[var(--text-secondary)]">GOCC policy gates ensure compliance with governance rules before promotion</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-violet-400">AI Agent Integration</div>
                <p className="text-xs text-[var(--text-secondary)]">14 specialized AI agents assist with code generation, documentation, and validation</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-violet-400">Version Control</div>
                <p className="text-xs text-[var(--text-secondary)]">Built-in versioning with Spine evidence trail for all pack modifications</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-violet-400/20 bg-violet-400/5 p-4">
            <div className="mb-2 text-sm font-semibold text-violet-400">Developer Workflow</div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div>1. Create pack manifest defining capabilities, dependencies, and surfaces</div>
              <div>2. Build pack components (UI, API endpoints, workflows, prompts)</div>
              <div>3. Run surface tests in isolated sandbox environment</div>
              <div>4. Submit to GOCC gate for policy validation</div>
              <div>5. Register pack in platform registry upon approval</div>
              <div>6. Promote to Edge layer for tenant deployment</div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={edgeModal.isOpen} onClose={edgeModal.close} title="Edge Layer — Operate" size="large">
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-cyan-400">Multi-Tenant Production Runtime</h3>
            <p className="text-[var(--text-secondary)]">
              Edge is the operational heart of AICR, providing the runtime environment where tenant applications execute.
              It handles multi-tenancy, feature flags, pack resolution, compliance enforcement, and real-time telemetry.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">Core Capabilities</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-cyan-400">Multi-Tenant Runtime</div>
                <p className="text-xs text-[var(--text-secondary)]">Isolated execution contexts for each tenant with automatic tenantId injection and data scoping</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-cyan-400">Feature Flags</div>
                <p className="text-xs text-[var(--text-secondary)]">Granular feature targeting at tenant, user, or cohort level with real-time updates</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-cyan-400">Pack Resolver</div>
                <p className="text-xs text-[var(--text-secondary)]">Deterministic dependency resolution for pack loading with version conflict detection</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-cyan-400">Telemetry & Monitoring</div>
                <p className="text-xs text-[var(--text-secondary)]">Real-time metrics, traces, and logs for every tenant operation with cost attribution</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-cyan-400">Compliance Enforcement</div>
                <p className="text-xs text-[var(--text-secondary)]">Runtime policy validation ensuring all operations comply with GOCC governance rules</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-cyan-400">Rollback Capability</div>
                <p className="text-xs text-[var(--text-secondary)]">Instant rollback to previous pack versions with zero downtime for any tenant</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 p-4">
            <div className="mb-2 text-sm font-semibold text-cyan-400">Tenant Isolation Architecture</div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div>• <strong className="text-[var(--text-primary)]">Data Isolation:</strong> 48 tenant-scoped tables with automatic tenantId filtering</div>
              <div>• <strong className="text-[var(--text-primary)]">Resource Isolation:</strong> Per-tenant compute quotas and rate limiting</div>
              <div>• <strong className="text-[var(--text-primary)]">Configuration Isolation:</strong> Tenant-specific feature flags and pack versions</div>
              <div>• <strong className="text-[var(--text-primary)]">Security Isolation:</strong> Role-based access control with tenant boundary enforcement</div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={summitModal.isOpen} onClose={summitModal.close} title="Summit Layer — Productize" size="large">
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-amber-400">Commercial Marketplace & Distribution</h3>
            <p className="text-[var(--text-secondary)]">
              Summit is the commercial layer where packs become products. It manages the pack marketplace,
              partner ecosystem, billing, compliance reporting, and executive insights for platform operations.
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">Core Capabilities</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-400">Pack Marketplace</div>
                <p className="text-xs text-[var(--text-secondary)]">Public and private catalog of certified packs with search, ratings, and recommendations</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-400">Promotion Lifecycle</div>
                <p className="text-xs text-[var(--text-secondary)]">Enable, promote, or rollback packs across environments with full audit trail</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-400">Partner Onboarding</div>
                <p className="text-xs text-[var(--text-secondary)]">Self-service portal for third-party developers to publish and monetize packs</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-400">Billing & Metering</div>
                <p className="text-xs text-[var(--text-secondary)]">Usage-based billing with cost attribution per tenant, pack, and operation</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-400">Compliance Reporting</div>
                <p className="text-xs text-[var(--text-secondary)]">Executive dashboards showing platform health, policy violations, and risk scores</p>
              </div>
              <div className="rounded-lg border border-[var(--card-border)] bg-[var(--light-gray)] p-4">
                <div className="mb-1 text-sm font-semibold text-amber-400">Controlled Launches</div>
                <p className="text-xs text-[var(--text-secondary)]">Phased rollout strategies with automatic rollback on quality gate failures</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-4">
            <div className="mb-2 text-sm font-semibold text-amber-400">Commercial Operations</div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <div>• <strong className="text-[var(--text-primary)]">Pack Certification:</strong> Cryptographic signing and quality verification before marketplace listing</div>
              <div>• <strong className="text-[var(--text-primary)]">Partner Revenue Share:</strong> Automated revenue distribution for third-party pack publishers</div>
              <div>• <strong className="text-[var(--text-primary)]">Usage Analytics:</strong> Real-time dashboards tracking adoption, performance, and costs per pack</div>
              <div>• <strong className="text-[var(--text-primary)]">SLA Management:</strong> Automated monitoring and enforcement of service level agreements</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
