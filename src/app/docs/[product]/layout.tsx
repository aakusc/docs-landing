import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/app/components/theme-toggle";
import DocsSidebar from "@/app/components/docs-sidebar";
import { PRODUCTS, resolveNavigation, getFirstPageSlug } from "@/lib/docs-source";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ product: string }>;
}

export default async function DocsLayout({ children, params }: LayoutProps) {
  const { product } = await params;
  const productInfo = PRODUCTS[product];
  if (!productInfo) notFound();

  const tabs = resolveNavigation(product);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] font-[family-name:var(--font-geist-sans)]">
      {/* Top navbar */}
      <header className="sticky top-0 z-50 flex h-14 items-center border-b border-[var(--border-color)] bg-[var(--background)]/95 backdrop-blur px-4 shadow-sm">
        <div className="flex flex-1 items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 transition-opacity hover:opacity-80">
            <Image src="/logo.png" alt="BHG" width={28} height={28} />
            <span className="hidden sm:block text-sm font-semibold text-[var(--text-primary)]">Blue Horizons Group</span>
          </Link>
          <span className="text-[var(--border-color)]">/</span>
          <span className="text-sm font-medium text-[var(--text-primary)]">{productInfo.name}</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/product-suite"
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            Products
          </Link>
          {productInfo.appUrl && (
            <a
              href={productInfo.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md bg-[var(--bhg-blue)] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[var(--bhg-deep-blue)]"
            >
              Open App
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
          <ThemeToggle />
        </nav>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="hidden lg:flex w-64 xl:w-72 shrink-0 flex-col border-r border-[var(--border-color)] sticky top-14 h-[calc(100vh-3.5rem)] overflow-hidden">
          <DocsSidebar
            tabs={tabs}
            productName={productInfo.name}
            productSlug={product}
            appUrl={productInfo.appUrl}
          />
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
