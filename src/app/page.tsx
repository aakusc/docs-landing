import Header from "./components/header";
import Footer from "./components/footer";

const products = [
  {
    name: "SGM - Sales Governance Manager",
    description:
      "Sales compensation plan management and governance platform. Policy design, approval workflows, dispute resolution, and executive oversight.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    href: "https://sgm.docs.bluehorizonsgroup.com",
    status: "live" as const,
  },
  {
    name: "AICR Platform",
    description:
      "Self-aware, AI-native platform with Edge, Summit, and Studio tiers. 240-table database, 19 control centers, 14 specialized AI agents.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    href: "https://aicr.docs.bluehorizonsgroup.com",
    status: "live" as const,
  },
  {
    name: "Rally Stack",
    description:
      "Platform factory with 130+ reusable modules. Multi-model AI orchestration, agent protocol, and four-layer architecture for rapid app development.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    href: "https://rally.docs.bluehorizonsgroup.com",
    status: "live" as const,
  },
  {
    name: "Vertical Solutions",
    description:
      "Industry-specific platforms: TowEdge (towing), PS Edge (nonprofit), SFP (financial planning), and IntelligentSPM (sales performance).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    href: "/product-suite",
    status: "live" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-geist-sans)] transition-colors duration-200">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-20">
        {/* Hero Section with BHG Design */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Documentation Hub
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)]">
            AI-powered tools for sales performance management, compensation
            governance, and enterprise AI operations.
          </p>
        </div>

        {/* Product Cards with BHG Styling */}
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.status === "live" ? product.href : undefined}
              target={product.status === "live" ? "_blank" : undefined}
              rel={product.status === "live" ? "noopener noreferrer" : undefined}
              className={`group relative rounded-[var(--border-radius-base)] border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm transition-all duration-300 ${
                product.status === "live"
                  ? "cursor-pointer hover:border-[var(--bhg-blue)] hover:shadow-lg"
                  : "cursor-default opacity-75"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bhg-coral)]/10 text-[var(--bhg-coral)]">
                  {product.icon}
                </div>
                {product.status === "live" ? (
                  <span className="rounded-full bg-[var(--success)]/10 px-3 py-1 text-xs font-medium text-[var(--success)]">
                    Live
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600">
                    Coming Soon
                  </span>
                )}
              </div>
              <h2 className="mb-2 text-lg font-bold text-[var(--text-primary)]">
                {product.name}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {product.description}
              </p>
              {product.status === "live" && (
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--bhg-blue)] transition-colors group-hover:text-[var(--link-hover)]">
                  View Documentation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Additional CTA Section with BHG Styling */}
        <div className="mt-16 rounded-lg border border-[var(--border-color)] bg-gradient-to-br from-[var(--bhg-blue)]/5 to-transparent p-8 text-center shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-[var(--text-primary)]">
            Explore Our Product Suite
          </h2>
          <p className="mb-6 text-[var(--text-secondary)]">
            Discover comprehensive solutions for enterprise AI governance, sales
            performance management, and vertical-specific applications.
          </p>
          <a
            href="/product-suite"
            className="inline-flex items-center gap-2 rounded-[var(--border-radius-base)] bg-[var(--bhg-blue)] px-6 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-[var(--bhg-deep-blue)]"
          >
            View All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
