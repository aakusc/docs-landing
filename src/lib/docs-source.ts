import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_ROOT = path.join(process.cwd(), "..", "docs-main", "docs");

export const PRODUCTS: Record<string, { dir: string; name: string; appUrl?: string }> = {
  sgm: { dir: "sgm-sparcc", name: "SGM SPARCC", appUrl: "https://sgm.aicoderally.com" },
  aicr: { dir: "aicr-platform", name: "AICR Platform", appUrl: "https://aicr.aicoderally.com" },
  rally: { dir: "rally-stack", name: "Rally Stack", appUrl: "https://rally.aicoderally.com" },
  towedge: { dir: "towedge", name: "TowEdge", appUrl: "https://towedge.bluehorizonsgroup.com" },
  psedge: { dir: "ps-edge", name: "PS Edge", appUrl: "https://psedge.bluehorizonsgroup.com" },
  sfp: { dir: "sfp", name: "SFP", appUrl: "https://sfp.bluehorizonsgroup.com" },
  ispm: { dir: "intelligentspm", name: "IntelligentSPM", appUrl: "https://ispm.bluehorizonsgroup.com" },
  docai: { dir: "document-intelligence", name: "Document Intelligence" },
};

export interface NavPage {
  title: string;
  slug: string; // e.g. "introduction", "user-guide/overview"
  href: string; // e.g. "/docs/sgm/introduction"
}

export interface NavGroup {
  group: string;
  pages: NavPage[];
}

export interface NavTab {
  tab: string;
  groups: NavGroup[];
}

export interface DocsConfig {
  name: string;
  colors: { primary: string; light: string; dark: string };
  navigation: { tabs: NavTab[] };
  navbar?: { primary?: { label: string; href: string } };
}

export interface PageFrontmatter {
  title: string;
  description?: string;
}

export function getDocsConfig(product: string): DocsConfig | null {
  const p = PRODUCTS[product];
  if (!p) return null;
  const configPath = path.join(DOCS_ROOT, p.dir, "docs.json");
  if (!fs.existsSync(configPath)) return null;
  return JSON.parse(fs.readFileSync(configPath, "utf-8")) as DocsConfig;
}

export function getMdxContent(product: string, slug: string[]): { content: string; frontmatter: PageFrontmatter } | null {
  const p = PRODUCTS[product];
  if (!p) return null;
  const slugPath = slug.join("/");
  const candidates = [
    path.join(DOCS_ROOT, p.dir, `${slugPath}.mdx`),
    path.join(DOCS_ROOT, p.dir, `${slugPath}.md`),
    path.join(DOCS_ROOT, p.dir, slugPath, "index.mdx"),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      const raw = fs.readFileSync(candidate, "utf-8");
      const { content, data } = matter(raw);
      return { content, frontmatter: data as PageFrontmatter };
    }
  }
  return null;
}

export function resolveNavigation(product: string): NavTab[] {
  const config = getDocsConfig(product);
  if (!config?.navigation?.tabs) return [];

  return config.navigation.tabs.map((tab) => ({
    tab: tab.tab,
    groups: (tab.groups || []).map((group) => ({
      group: group.group,
      pages: (group.pages || []).map((page) => {
        // page is a string like "introduction" or "user-guide/overview"
        const slug = typeof page === "string" ? page : (page as NavPage).slug;
        return {
          title: resolvePageTitle(product, slug),
          slug,
          href: `/docs/${product}/${slug}`,
        };
      }),
    })),
  }));
}

function resolvePageTitle(product: string, slug: string): string {
  const p = PRODUCTS[product];
  if (!p) return slug;
  const candidates = [
    path.join(DOCS_ROOT, p.dir, `${slug}.mdx`),
    path.join(DOCS_ROOT, p.dir, `${slug}.md`),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      const raw = fs.readFileSync(candidate, "utf-8");
      const { data } = matter(raw);
      if (data.title) return data.title;
    }
  }
  // Fallback: prettify slug
  return slug.split("/").pop()?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ?? slug;
}

export function getAllPageSlugs(product: string): string[][] {
  const tabs = resolveNavigation(product);
  const slugs: string[][] = [];
  for (const tab of tabs) {
    for (const group of tab.groups) {
      for (const page of group.pages) {
        slugs.push(page.slug.split("/"));
      }
    }
  }
  return slugs;
}

export function getFirstPageSlug(product: string): string {
  const tabs = resolveNavigation(product);
  for (const tab of tabs) {
    for (const group of tab.groups) {
      if (group.pages.length > 0) return group.pages[0].slug;
    }
  }
  return "introduction";
}
