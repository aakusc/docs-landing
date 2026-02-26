import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS, getAllPageSlugs, getMdxContent } from "@/lib/docs-source";

interface RouteParams {
  params: Promise<{ product: string }>;
}

/**
 * GET /api/docs/[product]/search?q=approval+workflow&limit=5
 *
 * Full-text search across all pages in a product's docs.
 * Returns matching pages with a snippet of surrounding context.
 * Agents can use this to find the most relevant pages before
 * fetching their full content via /page.
 *
 * Query params:
 *   q      — search query (required)
 *   limit  — max results to return (default: 10)
 *
 * Response shape:
 * {
 *   product, query, totalResults,
 *   results: [{ title, slug, href, description, matches: [{ snippet, line }] }]
 * }
 */
export async function GET(req: NextRequest, { params }: RouteParams) {
  const { product } = await params;
  const query = req.nextUrl.searchParams.get("q");
  const limit = Math.min(parseInt(req.nextUrl.searchParams.get("limit") ?? "10"), 20);

  if (!PRODUCTS[product]) {
    return NextResponse.json(
      { error: `Unknown product: "${product}". Available: ${Object.keys(PRODUCTS).join(", ")}` },
      { status: 404 }
    );
  }

  if (!query || query.trim().length === 0) {
    return NextResponse.json(
      { error: 'Missing required query param: "q". Example: ?q=authentication' },
      { status: 400 }
    );
  }

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const allSlugs = getAllPageSlugs(product);

  const results: {
    title: string;
    slug: string;
    href: string;
    description: string | null;
    score: number;
    matches: { snippet: string; line: number }[];
  }[] = [];

  for (const slugArr of allSlugs) {
    const slug = slugArr.join("/");
    const result = getMdxContent(product, slugArr);
    if (!result) continue;

    const { content, frontmatter } = result;
    const lines = content.split("\n");
    const matches: { snippet: string; line: number }[] = [];
    let score = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].toLowerCase();
      const termHits = terms.filter((t) => line.includes(t)).length;
      if (termHits > 0) {
        score += termHits;
        // Get snippet with one line of context each side
        const start = Math.max(0, i - 1);
        const end = Math.min(lines.length - 1, i + 1);
        const snippet = lines
          .slice(start, end + 1)
          .join(" ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 200);
        matches.push({ snippet, line: i + 1 });
        if (matches.length >= 3) break; // max 3 match snippets per page
      }
    }

    // Also score title/description matches higher
    const titleLower = (frontmatter.title ?? "").toLowerCase();
    const descLower = (frontmatter.description ?? "").toLowerCase();
    for (const term of terms) {
      if (titleLower.includes(term)) score += 5;
      if (descLower.includes(term)) score += 2;
    }

    if (score > 0) {
      results.push({
        title: frontmatter.title ?? slug,
        slug,
        href: `/docs/${product}/${slug}`,
        description: frontmatter.description ?? null,
        score,
        matches,
      });
    }
  }

  // Sort by score descending, cap at limit
  results.sort((a, b) => b.score - a.score);
  const topResults = results.slice(0, limit);

  return NextResponse.json({
    product,
    query,
    totalResults: results.length,
    results: topResults.map(({ score: _score, ...r }) => r), // strip score from output
  });
}
