"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavTab } from "@/lib/docs-source";

interface DocsSidebarProps {
  tabs: NavTab[];
  productName: string;
  productSlug: string;
  appUrl?: string;
}

export default function DocsSidebar({ tabs, productName, productSlug, appUrl }: DocsSidebarProps) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(0);

  const currentTab = tabs[activeTab];

  return (
    <aside className="flex h-full flex-col">
      {/* Product header */}
      <div className="px-4 py-3 border-b border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <Link
            href="/product-suite"
            className="flex items-center gap-1 text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--bhg-blue)] transition-colors"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All Products
          </Link>
          {appUrl && (
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-semibold text-[var(--bhg-blue)] hover:text-[var(--bhg-deep-blue)] transition-colors"
            >
              Open App
              <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          )}
        </div>
        <p className="mt-1.5 text-[13px] font-bold text-[var(--text-primary)] tracking-tight">{productName}</p>
      </div>

      {/* Section tabs (Documentation / API Reference / etc.) */}
      {tabs.length > 1 && (
        <div className="px-3 pt-2.5 pb-2 border-b border-[var(--border-color)] flex flex-wrap gap-1">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`rounded-md px-2.5 py-1 text-[11px] font-semibold transition-all ${
                activeTab === i
                  ? "bg-[var(--bhg-blue)] text-white"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--light-gray)]"
              }`}
            >
              {tab.tab}
            </button>
          ))}
        </div>
      )}

      {/* Nav groups — hidden scrollbar */}
      <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {currentTab?.groups.map((group) => (
          <div key={group.group}>
            {/* Group label — visually distinct */}
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--bhg-blue)] opacity-70">
                {group.group}
              </span>
              <div className="flex-1 h-px bg-[var(--border-color)]" />
            </div>

            <ul className="space-y-0.5">
              {group.pages.map((page) => {
                const isActive = pathname === page.href;
                return (
                  <li key={page.slug}>
                    <Link
                      href={page.href}
                      className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] transition-colors ${
                        isActive
                          ? "bg-[var(--bhg-blue)]/10 text-[var(--bhg-blue)] font-semibold"
                          : "text-[var(--text-secondary)] hover:bg-[var(--light-gray)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {/* Active indicator bar */}
                      <span className={`h-4 w-0.5 rounded-full shrink-0 transition-all ${isActive ? "bg-[var(--bhg-blue)]" : "bg-transparent"}`} />
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
