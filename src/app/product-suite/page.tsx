import Header from "../components/header";
import Footer from "../components/footer";

/* ── Shared icons ── */
const ArrowIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);
const ExternalIcon = ({ className = "h-3.5 w-3.5" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);
const CheckIcon = () => (
  <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--bhg-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

/* ── Status badge ── */
type Status = "production" | "in-development" | "coming-soon";
const statusConfig: Record<Status, { label: string; cls: string }> = {
  production: { label: "Production", cls: "bg-[var(--success)]/10 text-[var(--success)]" },
  "in-development": { label: "In Development", cls: "bg-[var(--bhg-blue)]/10 text-[var(--bhg-blue)]" },
  "coming-soon": { label: "Coming Soon", cls: "bg-amber-500/10 text-amber-600" },
};
const Badge = ({ status }: { status: Status }) => {
  const { label, cls } = statusConfig[status];
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${cls}`}>{label}</span>;
};

/* ── Link buttons ── */
const LinkPair = ({ docsUrl, appUrl, size = "sm" }: { docsUrl?: string; appUrl?: string; size?: "sm" | "xs" }) => {
  if (!docsUrl && !appUrl) return null;
  const isSm = size === "sm";
  return (
    <div className="flex items-center gap-2">
      {docsUrl && (
        <a href={docsUrl}
          className={`inline-flex items-center gap-1.5 rounded-md bg-[var(--bhg-blue)] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[var(--bhg-deep-blue)] ${isSm ? "px-3.5 py-1.5 text-sm" : "px-2.5 py-1 text-xs"}`}>
          Docs <ArrowIcon className={isSm ? "h-3.5 w-3.5" : "h-3 w-3"} />
        </a>
      )}
      {appUrl && (
        <a href={appUrl} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-md border border-[var(--bhg-blue)] font-medium text-[var(--bhg-blue)] transition-all duration-200 hover:bg-[var(--bhg-blue)] hover:text-white ${isSm ? "px-3.5 py-1.5 text-sm" : "px-2.5 py-1 text-xs"}`}>
          Launch <ExternalIcon className={isSm ? "h-3.5 w-3.5" : "h-3 w-3"} />
        </a>
      )}
    </div>
  );
};

/* ── Data ── */
interface Product {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  status: Status;
  docsUrl?: string;
  appUrl?: string;
}

interface Layer {
  id: string;
  label: string;
  icon: string;
  heading: string;
  subtitle: string;
  products: Product[];
}

const layers: Layer[] = [
  {
    id: "foundation",
    label: "Foundation",
    icon: "1",
    heading: "Platform Foundation",
    subtitle: "Core infrastructure and AI framework that powers every product in the ecosystem",
    products: [
      {
        name: "AICR Platform / BHG Edge",
        tagline: "Enterprise AI Platform — BHG's own instance runs at edge.bluehorizonsgroup.com",
        description: "Self-aware, AI-native platform orchestrating creation, operation, and commercialization through a three-layer architecture. AICR is the platform; BHG Edge is BHG's own deployed instance of it — the same product sold to clients.",
        features: [
          "Studio / Edge / Summit tiers",
          "240-table database architecture",
          "19 interconnected control centers",
          "14 specialized AI agents",
          "Pack system for capability management",
          "BHG Edge: internal ops + client demo environment",
        ],
        status: "in-development",
        docsUrl: "/docs/aicr",
        appUrl: "https://edge.bluehorizonsgroup.com",
      },
      {
        name: "Rally Stack",
        tagline: "Platform Factory & Module System",
        description: "Modular platform factory with 130+ reusable modules, multi-model AI orchestration, and agent protocol for rapid app development.",
        features: [
          "130+ production-ready modules",
          "Turborepo monorepo structure",
          "Next.js 14-15 & React 19",
          "Rally AI Framework (multi-model)",
          "Agent Protocol for AI coordination",
          "Four-layer architecture (Data → Client)",
        ],
        status: "production",
        docsUrl: "/docs/rally",
        appUrl: "https://rally.aicoderally.com",
      },
    ],
  },
  {
    id: "sales",
    label: "Sales & Governance",
    icon: "2",
    heading: "Sales & Compensation Governance",
    subtitle: "End-to-end sales compensation management, policy governance, and AI-powered document intelligence",
    products: [
      {
        name: "SGM - Sales Governance Manager",
        tagline: "Compensation Plan Management",
        description: "Full lifecycle compensation management with policy design, multi-stage approval workflows, dispute resolution, and executive oversight dashboards.",
        features: [
          "Compensation plan templates & builders",
          "Multi-stage approval workflows",
          "Dispute tracking & resolution",
          "Executive performance dashboards",
          "Compliance monitoring & audit trails",
          "CRM and finance integration",
        ],
        status: "production",
        docsUrl: "/docs/sgm",
        appUrl: "https://sgm.aicoderally.com",
      },
      {
        name: "Document Intelligence",
        tagline: "AI-Powered Document Analysis",
        description: "Automated compliance assessments and policy-backed insights. Multi-format ingestion, structure recognition, anomaly detection, and executive summaries.",
        features: [
          "Multi-format OCR & extraction",
          "Automated compliance checks",
          "Policy alignment scoring",
          "Risk identification & flagging",
          "Predictive insights & trends",
          "SPARCC workflow integration",
        ],
        status: "coming-soon",
        docsUrl: "/docs/docai",
      },
      {
        name: "IntelligentSPM",
        tagline: "Sales Performance Management",
        description: "AI-powered quota management, territory planning, performance analytics, and incentive design for optimized sales operations.",
        features: [
          "Quota planning & allocation",
          "Territory design & optimization",
          "Performance analytics dashboards",
          "Incentive plan design",
          "AI-powered forecasting",
          "Anomaly detection",
        ],
        status: "coming-soon",
        docsUrl: "/docs/ispm",
        appUrl: "https://ispm.bluehorizonsgroup.com",
      },
    ],
  },
  {
    id: "vertical",
    label: "Industry Solutions",
    icon: "3",
    heading: "Industry Vertical Solutions",
    subtitle: "Production-ready applications built on Rally Stack, customized for specific industries",
    products: [
      {
        name: "TowEdge",
        tagline: "Towing & Roadside Assistance",
        description: "Complete towing operations platform with dispatch optimization, driver/vehicle tracking, customer portal, and billing.",
        features: [
          "Service request management",
          "AI-powered dispatch optimization",
          "Real-time driver & vehicle tracking",
          "Customer self-service portal",
          "Billing & invoicing",
          "GPS & payment integrations",
        ],
        status: "production",
        docsUrl: "/docs/towedge",
        appUrl: "https://towedge.bluehorizonsgroup.com",
      },
      {
        name: "PS Edge",
        tagline: "Nonprofit Management",
        description: "Donor management, grant tracking, program management, volunteer coordination, and impact measurement for nonprofits.",
        features: [
          "Donor profiles & giving history",
          "Grant lifecycle tracking",
          "Program planning & outcomes",
          "Volunteer scheduling & engagement",
          "Impact measurement & reporting",
          "Campaign management",
        ],
        status: "production",
        docsUrl: "/docs/psedge",
        appUrl: "https://psedge.bluehorizonsgroup.com",
      },
      {
        name: "SFP",
        tagline: "Startup Financial Planning",
        description: "Deterministic financial modeling with scenario comparison, forecast generation, budget tracking, and investor-ready reporting.",
        features: [
          "Scenario modeling & comparison",
          "Deterministic calculation engine",
          "Revenue & expense forecasting",
          "Cash flow & runway analysis",
          "Budget variance tracking",
          "Investor & board reports",
        ],
        status: "production",
        docsUrl: "/docs/sfp",
        appUrl: "https://sfp.bluehorizonsgroup.com",
      },
    ],
  },
];

export default function ProductSuite() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-geist-sans)] transition-colors duration-200">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Page header */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Product Suite
          </h1>
          <p className="mx-auto max-w-2xl text-[var(--text-secondary)]">
            A layered ecosystem: foundation platforms power specialized solutions,
            which power industry applications.
          </p>
        </div>

        {/* Layer navigation */}
        <nav className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] p-1">
            {layers.map((layer, i) => (
              <a
                key={layer.id}
                href={`#${layer.id}`}
                className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--light-gray)] hover:text-[var(--text-primary)]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--bhg-blue)]/10 text-[10px] font-bold text-[var(--bhg-blue)]">
                  {layer.icon}
                </span>
                {layer.label}
                {i < layers.length - 1 && (
                  <svg className="ml-1 h-3 w-3 text-[var(--border-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Layers */}
        <div className="space-y-12">
          {layers.map((layer, layerIdx) => (
            <section key={layer.id} id={layer.id}>
              {/* Layer header with vertical connector */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--bhg-blue)] text-sm font-bold text-white shadow-sm">
                  {layer.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)]">{layer.heading}</h2>
                  <p className="text-sm text-[var(--text-secondary)]">{layer.subtitle}</p>
                </div>
              </div>

              {/* Foundation layer — Rally Stack → AICR/Edge supply chain */}
              {layerIdx === 0 && (
                <div className="relative">
                  <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden">
                    {/* Supply chain header */}
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-0 border-b border-[var(--border-color)] bg-[var(--light-gray)] px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                      <span>Rally Stack — Build</span>
                      <span className="px-4 text-[var(--border-color)]">→</span>
                      <span>AICR / BHG Edge — Run</span>
                    </div>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-[1fr_auto_1fr]">
                      {/* Rally Stack */}
                      {(() => {
                        const rally = layer.products.find(p => p.name === "Rally Stack")!;
                        return (
                          <div className="flex flex-col p-5">
                            <div className="mb-3">
                              <div className="mb-1 flex items-center justify-between">
                                <h3 className="font-semibold text-[var(--text-primary)]">{rally.name}</h3>
                                <Badge status={rally.status} />
                              </div>
                              <p className="text-xs font-medium text-violet-500">{rally.tagline}</p>
                              <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">{rally.description}</p>
                            </div>
                            <ul className="flex-1 space-y-1.5">
                              {rally.features.map((f, i) => (
                                <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                                  <CheckIcon />
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 border-t border-[var(--border-color)] pt-3">
                              <LinkPair docsUrl={rally.docsUrl} appUrl={rally.appUrl} size="xs" />
                            </div>
                          </div>
                        );
                      })()}

                      {/* Arrow connector */}
                      <div className="flex flex-col items-center justify-center gap-1.5 border-x border-[var(--border-color)] px-4 py-6 text-[var(--text-secondary)]">
                        <div className="rounded bg-violet-400/10 px-2 py-0.5 text-[10px] font-semibold text-violet-500">modules</div>
                        <svg className="h-4 w-4 text-[var(--border-color)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        <div className="rounded bg-[var(--bhg-blue)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--bhg-blue)]">packs</div>
                      </div>

                      {/* AICR / BHG Edge */}
                      {(() => {
                        const aicr = layer.products.find(p => p.name === "AICR Platform / BHG Edge")!;
                        return (
                          <div className="flex flex-col p-5">
                            <div className="mb-3">
                              <div className="mb-1 flex items-center justify-between">
                                <h3 className="font-semibold text-[var(--text-primary)]">{aicr.name}</h3>
                                <Badge status={aicr.status} />
                              </div>
                              <p className="text-xs font-medium text-[var(--bhg-blue)]">{aicr.tagline}</p>
                              <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">{aicr.description}</p>
                            </div>
                            <ul className="flex-1 space-y-1.5">
                              {aicr.features.map((f, i) => (
                                <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                                  <CheckIcon />
                                  <span>{f}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 border-t border-[var(--border-color)] pt-3">
                              <LinkPair docsUrl={aicr.docsUrl} appUrl={aicr.appUrl} size="xs" />
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Vertical connector arrow to next layer */}
                  <div className="flex justify-center py-4">
                    <div className="flex flex-col items-center text-[var(--border-color)]">
                      <div className="h-4 w-px bg-[var(--border-color)]" />
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
                      </svg>
                      <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">powers</span>
                    </div>
                  </div>
                </div>
              )}

              {/* All other non-last layers */}
              {layerIdx > 0 && layerIdx < layers.length - 1 && (
                <div className="relative">
                  <div className={`grid gap-4 ${layer.products.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                    {layer.products.map((product) => (
                      <div key={product.name} className="group flex flex-col overflow-hidden rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] transition-all duration-200 hover:border-[var(--bhg-blue)]/30 hover:shadow-md">
                        <div className="border-b border-[var(--border-color)] px-5 py-4">
                          <div className="mb-1 flex items-center justify-between">
                            <h3 className="font-semibold text-[var(--text-primary)]">{product.name}</h3>
                            <Badge status={product.status} />
                          </div>
                          <p className="text-xs font-medium text-[var(--bhg-blue)]">{product.tagline}</p>
                          <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">{product.description}</p>
                        </div>
                        <div className="flex-1 px-5 py-3">
                          <ul className="grid grid-cols-1 gap-1.5">
                            {product.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                                <CheckIcon />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t border-[var(--border-color)] px-5 py-3">
                          <LinkPair docsUrl={product.docsUrl} appUrl={product.appUrl} size="xs" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center py-4">
                    <div className="flex flex-col items-center text-[var(--border-color)]">
                      <div className="h-4 w-px bg-[var(--border-color)]" />
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
                      </svg>
                      <span className="mt-1 text-[10px] font-medium uppercase tracking-widest text-[var(--text-secondary)]">powers</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Last layer (no connector) */}
              {layerIdx === layers.length - 1 && (
                <div className={`grid gap-4 ${layer.products.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                  {layer.products.map((product) => (
                    <div
                      key={product.name}
                      className="group flex flex-col overflow-hidden rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] transition-all duration-200 hover:border-[var(--bhg-blue)]/30 hover:shadow-md"
                    >
                      <div className="border-b border-[var(--border-color)] px-5 py-4">
                        <div className="mb-1 flex items-center justify-between">
                          <h3 className="font-semibold text-[var(--text-primary)]">{product.name}</h3>
                          <Badge status={product.status} />
                        </div>
                        <p className="text-xs font-medium text-[var(--bhg-blue)]">{product.tagline}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">{product.description}</p>
                      </div>
                      <div className="flex-1 px-5 py-3">
                        <ul className="grid grid-cols-1 gap-1.5">
                          {product.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                              <CheckIcon />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-[var(--border-color)] px-5 py-3">
                        <LinkPair docsUrl={product.docsUrl} appUrl={product.appUrl} size="xs" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Ecosystem summary */}
        <div className="mt-14 overflow-hidden rounded-lg border border-[var(--border-color)]">
          <div className="bg-gradient-to-r from-[var(--bhg-blue)]/5 via-transparent to-[var(--bhg-coral)]/5 px-6 py-5 text-center">
            <h2 className="mb-1 text-lg font-bold text-[var(--text-primary)]">Ecosystem at a Glance</h2>
            <p className="text-sm text-[var(--text-secondary)]">Shared infrastructure across every product</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[var(--border-color)] sm:grid-cols-3 lg:grid-cols-6">
            {[
              { value: "130+", label: "Modules" },
              { value: "14", label: "AI Agents" },
              { value: "240", label: "DB Tables" },
              { value: "19", label: "Control Centers" },
              { value: "3", label: "Platform Tiers" },
              { value: "8", label: "Products" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--card-bg)] px-4 py-4 text-center">
                <div className="text-xl font-bold text-[var(--bhg-blue)]">{stat.value}</div>
                <div className="text-xs text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
