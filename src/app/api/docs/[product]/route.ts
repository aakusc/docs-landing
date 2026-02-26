import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS, getDocsConfig, resolveNavigation, getAllPageSlugs, getMdxContent } from "@/lib/docs-source";

interface RouteParams {
  params: Promise<{ product: string }>;
}

/**
 * GET /api/docs/[product]
 *
 * Returns the full navigation structure and a flat list of all pages
 * for the given product. Useful for agents to understand what's available
 * before fetching specific pages.
 *
 * Response shape:
 * {
 *   product: string,
 *   name: string,
 *   description: string,
 *   navigation: { tabs: [{ tab, groups: [{ group, pages: [{ title, slug, href }] }] }] },
 *   pages: [{ title, slug, href, description }]
 * }
 */
export async function GET(req: NextRequest, { params }: RouteParams) {
  const { product } = await params;

  const productInfo = PRODUCTS[product];
  if (!productInfo) {
    return NextResponse.json(
      { error: `Unknown product: "${product}". Available: ${Object.keys(PRODUCTS).join(", ")}` },
      { status: 404 }
    );
  }

  const config = getDocsConfig(product);
  const navigation = resolveNavigation(product);

  // Build flat page list with descriptions pulled from frontmatter
  const pages = getAllPageSlugs(product).map((slugArr) => {
    const slug = slugArr.join("/");
    const result = getMdxContent(product, slugArr);
    return {
      slug,
      href: `/docs/${product}/${slug}`,
      title: result?.frontmatter.title ?? slug,
      description: result?.frontmatter.description ?? null,
    };
  });

  return NextResponse.json({
    product,
    name: productInfo.name,
    appUrl: productInfo.appUrl ?? null,
    navigation,
    pages,
    _meta: {
      totalPages: pages.length,
      apiVersion: "1.0",
      endpoints: {
        index: `/api/docs/${product}`,
        page: `/api/docs/${product}/page?slug=<slug>`,
        search: `/api/docs/${product}/search?q=<query>`,
      },
    },
  });
}
