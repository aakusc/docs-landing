import { notFound, redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import {
  PRODUCTS,
  getMdxContent,
  resolveNavigation,
  getFirstPageSlug,
  type NavPage,
} from "@/lib/docs-source";
import {
  Card,
  CardGroup,
  Accordion,
  AccordionGroup,
  Steps,
  Step,
  Note,
  Warning,
  Info,
  Tip,
  Tabs,
  Tab,
  CodeGroup,
  ParamField,
  ResponseField,
  Check,
  Frame,
  Expandable,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@/app/components/mdx/index";

interface PageProps {
  params: Promise<{ product: string; slug?: string[] }>;
}

const mdxComponents = {
  Card,
  CardGroup,
  Accordion,
  AccordionGroup,
  Steps,
  Step,
  Note,
  Warning,
  Info,
  Tip,
  Tabs,
  Tab,
  CodeGroup,
  ParamField,
  ResponseField,
  Check,
  Frame,
  Expandable,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
};

function flattenPages(product: string): NavPage[] {
  const tabs = resolveNavigation(product);
  const pages: NavPage[] = [];
  for (const tab of tabs) {
    for (const group of tab.groups) {
      pages.push(...group.pages);
    }
  }
  return pages;
}

function getBreadcrumb(product: string, slugArr: string[]): { group: string; page: string } | null {
  const tabs = resolveNavigation(product);
  const slug = slugArr.join("/");
  for (const tab of tabs) {
    for (const group of tab.groups) {
      const found = group.pages.find((p) => p.slug === slug);
      if (found) return { group: group.group, page: found.title };
    }
  }
  return null;
}

export async function generateStaticParams() {
  const params: { product: string; slug: string[] }[] = [];
  for (const productKey of Object.keys(PRODUCTS)) {
    const tabs = resolveNavigation(productKey);
    for (const tab of tabs) {
      for (const group of tab.groups) {
        for (const page of group.pages) {
          params.push({ product: productKey, slug: page.slug.split("/") });
        }
      }
    }
  }
  return params;
}

export default async function DocsPage({ params }: PageProps) {
  const { product, slug: rawSlug } = await params;

  if (!PRODUCTS[product]) notFound();

  if (!rawSlug || rawSlug.length === 0) {
    redirect("/docs/" + product + "/" + getFirstPageSlug(product));
  }

  const slug = rawSlug!;
  const result = getMdxContent(product, slug);
  if (!result) notFound();

  const { content, frontmatter } = result;

  const allPages = flattenPages(product);
  const currentSlug = slug.join("/");
  const currentIdx = allPages.findIndex((p) => p.slug === currentSlug);
  const prevPage = currentIdx > 0 ? allPages[currentIdx - 1] : null;
  const nextPage = currentIdx < allPages.length - 1 ? allPages[currentIdx + 1] : null;
  const breadcrumb = getBreadcrumb(product, slug);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 xl:px-10">
      {breadcrumb && (
        <div className="mb-6 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
          <Link href={"/docs/" + product} className="hover:text-[var(--bhg-blue)] transition-colors">
            {PRODUCTS[product].name}
          </Link>
          <span>/</span>
          <span>{breadcrumb.group}</span>
          <span>/</span>
          <span className="text-[var(--text-primary)]">{breadcrumb.page}</span>
        </div>
      )}

      {frontmatter.title && (
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          {frontmatter.title}
        </h1>
      )}
      {frontmatter.description && (
        <p className="mb-8 text-base text-[var(--text-secondary)] leading-relaxed border-b border-[var(--border-color)] pb-8">
          {frontmatter.description}
        </p>
      )}

      <div className="docs-prose">
        <MDXRemote source={content} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>

      {(prevPage || nextPage) && (
        <div className="mt-14 flex items-center justify-between gap-4 border-t border-[var(--border-color)] pt-6">
          {prevPage ? (
            <Link href={prevPage.href} className="group flex max-w-[45%] flex-col rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 transition-all hover:border-[var(--bhg-blue)]/40 hover:shadow-sm">
              <span className="mb-1 flex items-center gap-1.5 text-xs text-[var(--text-secondary)] group-hover:text-[var(--bhg-blue)]">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
                Previous
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">{prevPage.title}</span>
            </Link>
          ) : <div />}

          {nextPage ? (
            <Link href={nextPage.href} className="group flex max-w-[45%] flex-col items-end rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 transition-all hover:border-[var(--bhg-blue)]/40 hover:shadow-sm ml-auto">
              <span className="mb-1 flex items-center gap-1.5 text-xs text-[var(--text-secondary)] group-hover:text-[var(--bhg-blue)]">
                Next
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">{nextPage.title}</span>
            </Link>
          ) : <div />}
        </div>
      )}
    </div>
  );
}
