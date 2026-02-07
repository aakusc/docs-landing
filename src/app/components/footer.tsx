import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--light-gray)] px-6 py-12 transition-colors duration-200">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-3">
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
            <h3 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Products</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="https://bluehorizonsgroup.mintlify.app/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[var(--link-hover)]"
                >
                  SCM - Sales Comp Manager
                </a>
              </li>
              <li>
                <span className="cursor-default opacity-75">Sales Document Analyzer</span>
              </li>
              <li>
                <span className="cursor-default opacity-75">AICR Edge</span>
              </li>
              <li>
                <span className="cursor-default opacity-75">AICR Platform</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Links</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="https://www.aicoderally.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[var(--link-hover)]"
                >
                  AI Code Rally
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AICodeRally"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-[var(--link-hover)]"
                >
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
