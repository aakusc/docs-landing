/** Rewrites Mintlify-style root-relative doc links to the correct Next.js path.
 *  e.g. /user-guide/overview → /docs/sgm/user-guide/overview
 *  External links and already-prefixed links are left untouched. */
export function resolveHref(href: string, product: string): string {
  if (!href) return href;
  if (!product) return href;
  if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) return href;
  if (href.startsWith(`/docs/${product}`)) return href;
  const clean = href.startsWith("/") ? href.slice(1) : href;
  return `/docs/${product}/${clean}`;
}
