import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS, getMdxContent, resolveNavigation } from "@/lib/docs-source";

interface RouteParams {
  params: Promise<{ product: string }>;
}

/**
 * GET /api/docs/[product]/page?slug=user-guide/overview
 *
 * Returns the full raw MDX content + frontmatter for a single page.
 * The content is plain markdown/MDX text — callers can strip JSX tags
 * or pass it directly to their AI for context.
 *
 * Response shape:
 * {
 *   product, slug, href,
 *   title, description,
 *   content: string (raw MDX),
 *   prev: { title, slug, href } | null,
 *   next: { title, slug, href } | null,
 * }
 */
export async function GET(req: NextRequest, { params }: RouteParams) {
  const { product } = await params;
  const slug = req.nextUrl.searchParams.get("slug");

  if (!PRODUCTS[product]) {
    return NextResponse.json(
      { error: `Unknown product: "${product}". Available: ${Object.keys(PRODUCTS).join(", ")}` },
      { status: 404 }
    );
  }

  if (!slug) {
    return NextResponse.json(
      { error: 'Missing required query param: "slug". Example: ?slug=introduction' },
      { status: 400 }
    );
  }

  const slugArr = slug.split("/");
  const result = getMdxContent(product, slugArr);

  if (!result) {
    return NextResponse.json(
      { error: `Page not found: "${slug}" in product "${product}"` },
      { status: 404 }
    );
  }

  // Build prev/next from flat nav
  const tabs = resolveNavigation(product);
  const allPages: { title: string; slug: string; href: string }[] = [];
  for (const tab of tabs) {
    for (const group of tab.groups) {
      allPages.push(...group.pages);
    }
  }

  const idx = allPages.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? allPages[idx - 1] : null;
  const next = idx < allPages.length - 1 ? allPages[idx + 1] : null;

  return NextResponse.json({
    product,
    slug,
    href: `/docs/${product}/${slug}`,
    title: result.frontmatter.title,
    description: result.frontmatter.description ?? null,
    content: result.content,
    prev: prev ? { title: prev.title, slug: prev.slug, href: prev.href } : null,
    next: next ? { title: next.title, slug: next.slug, href: next.href } : null,
  });
}
