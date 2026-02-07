import Header from "../components/header";
import Footer from "../components/footer";

interface ProductTier {
  name: string;
  description: string;
  features: string[];
  documentationUrl?: string;
}

interface ProductCategory {
  category: string;
  tagline: string;
  description: string;
  tiers: ProductTier[];
  keyFeatures: string[];
  status: "production" | "in-development" | "coming-soon" | "mixed";
  documentationUrl?: string;
}

const productCategories: ProductCategory[] = [
  {
    category: "AICR Platform",
    tagline: "Enterprise AI Governance & Operations",
    description:
      "Self-aware, AI-native platform orchestrating the creation, operation, and commercialization of software products through a three-layer architecture.",
    tiers: [
      {
        name: "Studio Tier",
        description: "Learning and development environment",
        features: [
          "240-table database architecture",
          "19 interconnected control centers",
          "14 specialized AI agents",
          "Complete self-documentation",
          "Pack system for capability management",
        ],
      },
      {
        name: "Edge Tier",
        description: "Business operations and tenant runtime",
        features: [
          "AI compliance checks",
          "Knowledge retrieval system",
          "Feature flags and telemetry",
          "Multi-tenant architecture",
          "Real-time operations",
        ],
      },
      {
        name: "Summit Tier",
        description: "Enterprise governance and intelligence",
        features: [
          "Cross-tenant analytics",
          "Model governance",
          "Enterprise compliance",
          "Policy management",
          "Executive dashboards",
        ],
      },
    ],
    keyFeatures: [
      "Self-awareness through indexed canonical documentation",
      "AI-native design with collaborative agent system",
      "Deterministic pack system with audit trails",
      "Multi-tier value chain (Studio → Edge → Summit)",
    ],
    status: "in-development",
    documentationUrl: "https://aicr.docs.bluehorizonsgroup.com",
  },
  {
    category: "AICodeRally Ecosystem",
    tagline: "Platform Factory & Module System",
    description:
      "Comprehensive platform factory enabling rapid creation of business applications through modular architecture and AI orchestration.",
    tiers: [
      {
        name: "Rally Stack Platform",
        description: "Core framework and infrastructure",
        features: [
          "130+ reusable modules",
          "Turborepo monorepo structure",
          "Next.js 14-15 & React 19",
          "Prisma ORM + PostgreSQL",
          "TypeScript 5 throughout",
        ],
      },
      {
        name: "Rally AI Framework",
        description: "Multi-model AI orchestration",
        features: [
          "Model routing and fallback",
          "Context optimization",
          "Cost management",
          "Response streaming",
          "Persistent memory across sessions",
        ],
      },
      {
        name: "Agent Protocol",
        description: "AI coordination and collaboration",
        features: [
          "Role-based agent separation",
          "Shared context management",
          "Task delegation system",
          "Session persistence",
          "Collaborative workflows",
        ],
      },
    ],
    keyFeatures: [
      "130+ production-ready modules across 9 categories",
      "Four-layer architecture (Data → Service → API → Client)",
      "Complete vertical solution accelerators",
      "AI-first development approach",
    ],
    status: "production",
    documentationUrl: "https://rally.docs.bluehorizonsgroup.com",
  },
  {
    category: "Vertical Solutions",
    tagline: "Industry-Specific Applications",
    description:
      "Pre-built, customizable solutions for specific industries, demonstrating the full capabilities of the AICodeRally ecosystem.",
    tiers: [
      {
        name: "TowEdge Platform",
        description: "Towing industry operations",
        features: [
          "Service request management",
          "Driver/vehicle tracking",
          "Customer portal",
          "Billing and invoicing",
          "Dispatch optimization",
        ],
        documentationUrl: "https://towedge.docs.bluehorizonsgroup.com",
      },
      {
        name: "SGM SPARCC",
        description: "Sales governance and compensation",
        features: [
          "Compensation plan design",
          "Approval workflows",
          "Dispute resolution",
          "Policy management",
          "Executive oversight",
        ],
        documentationUrl: "https://sgm.docs.bluehorizonsgroup.com",
      },
      {
        name: "Nonprofit Platform (PS Edge)",
        description: "Nonprofit management",
        features: [
          "Donor management",
          "Grant tracking",
          "Program management",
          "Volunteer coordination",
          "Impact measurement",
        ],
        documentationUrl: "https://psedge.docs.bluehorizonsgroup.com",
      },
      {
        name: "Startup Financial Planning (SFP)",
        description: "Financial planning workflows",
        features: [
          "Scenario modeling",
          "Deterministic calculations",
          "Forecast generation",
          "Budget planning",
          "Financial reporting",
        ],
        documentationUrl: "https://sfp.docs.bluehorizonsgroup.com",
      },
      {
        name: "IntelligentSPM",
        description: "Sales performance management (planned)",
        features: [
          "Quota management",
          "Territory planning",
          "Performance analytics",
          "Incentive design",
          "AI-powered insights",
        ],
        documentationUrl: "https://ispm.docs.bluehorizonsgroup.com",
      },
    ],
    keyFeatures: [
      "Built on Rally Stack foundation",
      "Industry-specific workflows",
      "Customizable and extensible",
      "Production-ready demos",
    ],
    status: "mixed",
  },
  {
    category: "Sales Compensation Management",
    tagline: "SCM - Sales Comp Manager",
    description:
      "Comprehensive sales compensation plan management and governance platform with policy design, approval workflows, and executive oversight.",
    tiers: [
      {
        name: "Policy Design",
        description: "Create and manage compensation plans",
        features: [
          "Plan templates and builders",
          "Rule configuration",
          "Territory assignments",
          "Quota management",
          "Incentive structures",
        ],
      },
      {
        name: "Workflow Management",
        description: "Approval and dispute resolution",
        features: [
          "Multi-stage approvals",
          "Dispute tracking",
          "Audit trails",
          "Change management",
          "Stakeholder notifications",
        ],
      },
      {
        name: "Executive Oversight",
        description: "Governance and analytics",
        features: [
          "Performance dashboards",
          "Compliance monitoring",
          "Cost analysis",
          "Policy effectiveness",
          "Strategic insights",
        ],
      },
    ],
    keyFeatures: [
      "Full lifecycle compensation management",
      "Policy-driven governance",
      "Automated compliance checks",
      "Integration with CRM and finance systems",
    ],
    status: "production",
    documentationUrl: "https://sgm.docs.bluehorizonsgroup.com",
  },
  {
    category: "Document Intelligence",
    tagline: "Sales Document Analyzer",
    description:
      "AI-powered document analysis service for automated compliance assessments and policy-backed insights within the SPARCC ecosystem.",
    tiers: [
      {
        name: "Document Processing",
        description: "Intelligent document ingestion",
        features: [
          "Multi-format support",
          "OCR and text extraction",
          "Structure recognition",
          "Metadata extraction",
          "Version tracking",
        ],
      },
      {
        name: "Compliance Analysis",
        description: "Policy-based validation",
        features: [
          "Automated compliance checks",
          "Policy alignment scoring",
          "Risk identification",
          "Exception flagging",
          "Remediation suggestions",
        ],
      },
      {
        name: "Insights Generation",
        description: "AI-powered analysis",
        features: [
          "Pattern recognition",
          "Trend analysis",
          "Anomaly detection",
          "Predictive insights",
          "Executive summaries",
        ],
      },
    ],
    keyFeatures: [
      "AI-native document processing",
      "Policy-backed compliance validation",
      "Real-time analysis and alerts",
      "Integration with SPARCC workflow",
    ],
    status: "coming-soon",
    documentationUrl: "https://docai.docs.bluehorizonsgroup.com",
  },
];

export default function ProductSuite() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-geist-sans)] transition-colors duration-200">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Product Suite
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--text-secondary)]">
            Comprehensive ecosystem of AI-powered platforms, frameworks, and
            vertical solutions for enterprise operations, governance, and
            industry-specific workflows.
          </p>
        </div>

        <div className="space-y-16">
          {productCategories.map((category) => (
            <section
              key={category.category}
              className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-8 shadow-sm transition-colors duration-200"
            >
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                    {category.category}
                  </h2>
                  {category.status === "production" && (
                    <span className="rounded-full bg-[var(--success)]/10 px-3 py-1 text-sm font-medium text-[var(--success)]">
                      Production
                    </span>
                  )}
                  {category.status === "in-development" && (
                    <span className="rounded-full bg-[var(--bhg-blue)]/10 px-3 py-1 text-sm font-medium text-[var(--bhg-blue)]">
                      In Development
                    </span>
                  )}
                  {category.status === "coming-soon" && (
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-600">
                      Coming Soon
                    </span>
                  )}
                  {category.status === "mixed" && (
                    <span className="rounded-full bg-[var(--bhg-coral)]/10 px-3 py-1 text-sm font-medium text-[var(--bhg-coral)]">
                      Multiple Stages
                    </span>
                  )}
                </div>
                <p className="mb-2 text-sm font-medium text-[var(--bhg-blue)]">
                  {category.tagline}
                </p>
                <p className="text-[var(--text-secondary)]">{category.description}</p>
              </div>

              <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="rounded-lg border border-[var(--border-color)] bg-[var(--light-gray)] p-5 transition-all duration-200 hover:shadow-md"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[var(--text-primary)]">
                      {tier.name}
                    </h3>
                    <p className="mb-4 text-sm text-[var(--text-secondary)]">
                      {tier.description}
                    </p>
                    <ul className="mb-4 space-y-2">
                      {tier.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                        >
                          <svg
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--bhg-blue)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tier.documentationUrl && (
                      <a
                        href={tier.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--bhg-blue)] transition-colors hover:text-[var(--bhg-deep-blue)]"
                      >
                        View Docs
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-[var(--border-color)] bg-gradient-to-br from-[var(--bhg-blue)]/5 to-transparent p-5">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-primary)]">
                  Key Features
                </h4>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {category.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--bhg-coral)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {category.documentationUrl && (
                <div className="mt-6">
                  <a
                    href={category.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[var(--border-radius-base)] bg-[var(--bhg-blue)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[var(--bhg-deep-blue)]"
                  >
                    View Documentation
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-[var(--border-color)] bg-gradient-to-br from-[var(--bhg-blue)]/10 to-transparent p-8 text-center shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">
            Platform Ecosystem
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-[var(--text-secondary)]">
            All products share a common foundation of 130+ reusable modules,
            AI-native architecture, and enterprise-grade governance. Built on
            Next.js, React, TypeScript, and PostgreSQL with comprehensive
            documentation and self-aware platform capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-[var(--bhg-blue)]/20 bg-[var(--bhg-blue)]/10 px-4 py-2 text-sm font-medium text-[var(--bhg-blue)]">
              130+ Modules
            </span>
            <span className="rounded-full border border-[var(--bhg-coral)]/20 bg-[var(--bhg-coral)]/10 px-4 py-2 text-sm font-medium text-[var(--bhg-coral)]">
              14 AI Agents
            </span>
            <span className="rounded-full border border-[var(--bhg-blue)]/20 bg-[var(--bhg-blue)]/10 px-4 py-2 text-sm font-medium text-[var(--bhg-blue)]">
              240-Table Architecture
            </span>
            <span className="rounded-full border border-[var(--success)]/20 bg-[var(--success)]/10 px-4 py-2 text-sm font-medium text-[var(--success)]">
              Multi-Tier Deployment
            </span>
            <span className="rounded-full border border-[var(--bhg-coral)]/20 bg-[var(--bhg-coral)]/10 px-4 py-2 text-sm font-medium text-[var(--bhg-coral)]">
              Self-Documenting
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
