import Header from "../components/header";
import Footer from "../components/footer";
import { Endpoint } from "./endpoint";

const PRODUCTS = [
  { slug: "sgm", name: "SGM SPARCC" },
  { slug: "aicr", name: "AICR Platform" },
  { slug: "rally", name: "Rally Stack" },
  { slug: "towedge", name: "TowEdge" },
  { slug: "psedge", name: "PS Edge" },
  { slug: "sfp", name: "SFP" },
  { slug: "ispm", name: "IntelligentSPM" },
  { slug: "docai", name: "Document Intelligence" },
];

const BASE = "https://docs.bluehorizonsgroup.com";


export default function ApiReferencePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-[family-name:var(--font-geist-sans)] transition-colors duration-200">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Page header */}
        <div className="mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--bhg-blue)]/20 bg-[var(--bhg-blue)]/5 px-3 py-1 text-xs font-semibold text-[var(--bhg-blue)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--bhg-blue)]" />
            REST API
          </div>
          <h1 className="mb-3 text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Docs API Reference
          </h1>
          <p className="max-w-2xl text-[var(--text-secondary)]">
            A read-only REST API for accessing BHG documentation content programmatically.
            Designed for AI agents, integrations, and tooling that need to query, search, or
            retrieve full page content from any product's docs.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">How it works</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "User asks a question",
                description: "A user asks your AI something about a BHG product. The AI interprets the question and decides which product and search terms to use.",
              },
              {
                step: "2",
                title: "AI calls the API",
                description: "The AI constructs and sends the right API request — searching for relevant pages or fetching a specific one by slug.",
              },
              {
                step: "3",
                title: "AI parses and responds",
                description: "The API returns raw documentation content. The AI reads it, extracts what's relevant, and answers the user's question.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-4">
                <div className="mb-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--bhg-blue)] text-xs font-bold text-white">
                  {item.step}
                </div>
                <p className="mb-1 text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Usage Guide */}
        <div className="mb-10 rounded-lg border border-[var(--bhg-blue)]/30 bg-[var(--bhg-blue)]/5 px-6 py-6">
          <div className="mb-1 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[var(--bhg-blue)] shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
            <h2 className="text-base font-bold text-[var(--text-primary)]">Using with AI</h2>
          </div>
          <p className="mb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
            Copy the text below into a <code className="rounded bg-[var(--card-bg)] border border-[var(--card-border)] px-1.5 py-0.5 font-mono text-xs">bhg-docs.md</code> file and give it to your AI as a reference file or system prompt attachment. It tells the AI what this API does and how to use it to answer questions about BHG products.
          </p>
          <div className="relative">
            <pre className="rounded-lg bg-[#0f172a] border border-[#1e293b] px-5 py-4 text-xs text-[#e2e8f0] font-mono overflow-x-auto leading-relaxed whitespace-pre">{`# BHG Docs API — AI Reference

You have access to a read-only REST API that returns documentation
content for Blue Horizons Group products. Use it to answer questions
about any BHG product accurately and with up-to-date information.

Base URL: https://docs.bluehorizonsgroup.com

## Available products
sgm, aicr, rally, towedge, psedge, sfp, ispm, docai

## Endpoints

### GET /api/docs/{product}
Returns the full navigation structure and a flat list of all pages
for the given product, including titles and descriptions.

Example: GET /api/docs/sgm

### GET /api/docs/{product}/page?slug={slug}
Returns the full raw documentation content for a single page.
The "content" field contains the plain text — use it as context.

Example: GET /api/docs/sgm/page?slug=user-guide/approvals

### GET /api/docs/{product}/search?q={query}&limit={n}
Full-text search across all pages in a product's docs.
Returns ranked results with context snippets (default limit: 10, max: 20).

Example: GET /api/docs/sgm/search?q=approval+workflow&limit=5

## How to use it

1. Search for relevant pages:
   GET /api/docs/{product}/search?q={your search terms}&limit=3

2. Fetch the full content of the best result:
   GET /api/docs/{product}/page?slug={slug from search result}

3. Read the "content" field — it contains the raw documentation text.
   Use it as context to answer the user's question.

## Rules
- Always search before answering — do not guess from memory
- If search returns no results, say the topic isn't documented
- Cite the page title and slug when you use content from a page`}</pre>
          </div>
        </div>

        {/* Human Usage Guide */}
        <div className="mb-10 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-6 py-6">
          <div className="mb-1 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-[var(--text-secondary)] shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <h2 className="text-base font-bold text-[var(--text-primary)]">Using directly</h2>
          </div>
          <p className="mb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
            You can call these endpoints directly from your browser or any HTTP client — no setup required. A quick way to explore or pull docs content for your own use.
          </p>
          <div className="space-y-3">
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)]">Browse a product&apos;s pages</p>
              <pre className="rounded-lg bg-[#0f172a] border border-[#1e293b] px-4 py-3 text-xs text-[#e2e8f0] font-mono overflow-x-auto">{`https://docs.bluehorizonsgroup.com/api/docs/sgm`}</pre>
            </div>
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)]">Search for a topic</p>
              <pre className="rounded-lg bg-[#0f172a] border border-[#1e293b] px-4 py-3 text-xs text-[#e2e8f0] font-mono overflow-x-auto">{`https://docs.bluehorizonsgroup.com/api/docs/sgm/search?q=approvals`}</pre>
            </div>
            <div>
              <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)]">Read a specific page</p>
              <pre className="rounded-lg bg-[#0f172a] border border-[#1e293b] px-4 py-3 text-xs text-[#e2e8f0] font-mono overflow-x-auto">{`https://docs.bluehorizonsgroup.com/api/docs/sgm/page?slug=introduction`}</pre>
            </div>
          </div>
          <p className="mt-4 text-xs text-[var(--text-secondary)]">
            Paste any of these into your browser address bar and hit enter. Swap <code className="rounded bg-[var(--light-gray)] px-1 font-mono">sgm</code> for any product slug, and replace the search term or slug as needed.
          </p>
        </div>

        {/* Base URL */}
        <div className="mb-10 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-4">
          <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)]">Base URL</p>
          <code className="font-mono text-sm text-[var(--text-primary)]">{BASE}</code>
          <p className="mt-2 text-xs text-[var(--text-secondary)]">
            All endpoints are read-only and require no authentication. No API key needed.
          </p>
        </div>

        {/* Product slugs */}
        <div className="mb-10 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] px-5 py-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)]">Available Products</p>
          <div className="flex flex-wrap gap-2">
            {PRODUCTS.map((p) => (
              <div key={p.slug} className="flex items-center gap-1.5 rounded-md border border-[var(--card-border)] bg-[var(--background)] px-3 py-1.5">
                <code className="text-xs font-mono font-semibold text-[var(--bhg-blue)]">{p.slug}</code>
                <span className="text-xs text-[var(--text-secondary)]">— {p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Endpoints */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Endpoints</h2>

          <Endpoint
            method="GET"
            path="/api/docs/:product"
            description="Returns the full navigation structure and a flat list of all pages for the given product. Use this to understand what content is available before fetching specific pages."
            params={[
              { name: "product", in: "path", required: true, description: `One of: ${PRODUCTS.map(p => p.slug).join(", ")}` },
            ]}
            response={`{
  "product": "sgm",
  "name": "SGM SPARCC",
  "appUrl": "https://sgm.aicoderally.com",
  "navigation": [
    {
      "tab": "Documentation",
      "groups": [
        {
          "group": "Getting Started",
          "pages": [
            { "title": "Introduction", "slug": "introduction", "href": "/docs/sgm/introduction" },
            { "title": "Quickstart",   "slug": "quickstart",   "href": "/docs/sgm/quickstart"   }
          ]
        }
      ]
    }
  ],
  "pages": [
    { "slug": "introduction", "href": "...", "title": "Introduction", "description": "..." }
  ],
  "_meta": { "totalPages": 28, "endpoints": { ... } }
}`}
            example={`curl https://docs.bluehorizonsgroup.com/api/docs/sgm`}
          />

          <Endpoint
            method="GET"
            path="/api/docs/:product/page"
            description="Returns the full raw MDX content and frontmatter for a single page. The content field is plain markdown/MDX text — pass it directly as context to your AI."
            params={[
              { name: "product", in: "path", required: true, description: "Product slug" },
              { name: "slug", in: "query", required: true, description: "Page slug, e.g. introduction or user-guide/approvals" },
            ]}
            response={`{
  "product": "sgm",
  "slug": "user-guide/approvals",
  "href": "/docs/sgm/user-guide/approvals",
  "title": "Approvals",
  "description": "Process approval requests with SLA tracking.",
  "content": "# Approvals\\n\\nThe Approvals feature manages...",
  "prev": { "title": "Plan Management", "slug": "user-guide/plan-management", "href": "..." },
  "next": { "title": "Documents",       "slug": "user-guide/documents",       "href": "..." }
}`}
            example={`curl "https://docs.bluehorizonsgroup.com/api/docs/sgm/page?slug=user-guide/approvals"`}
          />

          <Endpoint
            method="GET"
            path="/api/docs/:product/search"
            description="Full-text search across all pages in a product's docs. Returns ranked results with context snippets. Use this to find the most relevant pages before fetching their full content."
            params={[
              { name: "product", in: "path", required: true, description: "Product slug" },
              { name: "q", in: "query", required: true, description: "Search query, e.g. approval+workflow" },
              { name: "limit", in: "query", required: false, description: "Max results to return (default: 10, max: 20)" },
            ]}
            response={`{
  "product": "sgm",
  "query": "approval workflow",
  "totalResults": 28,
  "results": [
    {
      "title": "Workflow Configuration",
      "slug": "admin-guide/workflow-configuration",
      "href": "/docs/sgm/admin-guide/workflow-configuration",
      "description": "Configure approval workflows, SLAs, and committee routing.",
      "matches": [
        { "snippet": "## Approval Workflows", "line": 6 },
        { "snippet": "Configure multi-step approval workflows for...", "line": 12 }
      ]
    }
  ]
}`}
            example={`curl "https://docs.bluehorizonsgroup.com/api/docs/sgm/search?q=approval+workflow&limit=5"`}
          />
        </div>


        {/* Error reference */}
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">Errors</h2>
          <div className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)] bg-[var(--light-gray)]">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-primary)]">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-primary)]">Meaning</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-primary)]">Example</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { status: "400", meaning: "Missing required query parameter", example: 'Missing param: "slug"' },
                  { status: "404", meaning: "Product or page not found", example: 'Unknown product: "xyz"' },
                  { status: "500", meaning: "Server error", example: "Unexpected internal error" },
                ].map((row) => (
                  <tr key={row.status} className="border-b border-[var(--border-color)] last:border-0">
                    <td className="px-4 py-3 font-mono text-xs font-semibold text-[var(--bhg-coral)]">{row.status}</td>
                    <td className="px-4 py-3 text-xs text-[var(--text-secondary)]">{row.meaning}</td>
                    <td className="px-4 py-3 font-mono text-xs text-[var(--text-secondary)]">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[var(--text-secondary)]">
            All errors return JSON: <code className="font-mono bg-[var(--card-bg)] border border-[var(--card-border)] rounded px-1.5 py-0.5">{`{ "error": "description" }`}</code>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
