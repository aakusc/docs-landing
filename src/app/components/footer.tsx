import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--light-gray)] px-6 py-12 transition-colors duration-200">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Image src="/logo.png" alt="Blue Horizons Group Logo" width={24} height={24} />
              <span className="text-sm font-semibold text-[var(--text-primary)]">Blue Horizons Group</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              AI-powered tools for sales performance management, compensation governance, and enterprise AI operations.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Platform</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a href="https://aicr.docs.bluehorizonsgroup.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  AICR Platform
                </a>
              </li>
              <li>
                <a href="https://rally.docs.bluehorizonsgroup.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  Rally Stack
                </a>
              </li>
              <li>
                <a href="https://sgm.docs.bluehorizonsgroup.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  SGM - Sales Governance Manager
                </a>
              </li>
              <li>
                <a href="https://docai.docs.bluehorizonsgroup.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  Document Intelligence
                </a>
              </li>
              <li>
                <a href="https://ispm.docs.bluehorizonsgroup.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  IntelligentSPM
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Solutions</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a href="https://towedge.docs.bluehorizonsgroup.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  TowEdge
                </a>
              </li>
              <li>
                <a href="https://psedge.docs.bluehorizonsgroup.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  PS Edge
                </a>
              </li>
              <li>
                <a href="https://sfp.docs.bluehorizonsgroup.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  SFP
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Links</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <Link href="/product-suite" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  Product Suite
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/reference" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  Quick Reference
                </Link>
              </li>
              <li>
                <a href="https://www.aicoderally.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  AI Code Rally
                </a>
              </li>
              <li>
                <a href="https://github.com/AICodeRally" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-[var(--link-hover)]">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border-color)] pt-6 text-center text-xs text-[var(--text-secondary)]">
          &copy; {new Date().getFullYear()} Blue Horizons Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
