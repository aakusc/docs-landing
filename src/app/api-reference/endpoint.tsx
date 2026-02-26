"use client";

import { useState } from "react";

interface EndpointProps {
  method: "GET" | "POST";
  path: string;
  description: string;
  params?: { name: string; in: "path" | "query"; required: boolean; description: string }[];
  response: string;
  example: string;
}

export function Endpoint({ method, path, description, params, response, example }: EndpointProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden">
      {/* Method + path — clickable header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-[var(--light-gray)] transition-colors duration-150"
      >
        <span className={`shrink-0 rounded px-2 py-0.5 text-[11px] font-bold tracking-wide ${
          method === "GET" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
        }`}>
          {method}
        </span>
        <code className="flex-1 text-sm font-mono text-[var(--text-primary)]">{path}</code>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`h-4 w-4 shrink-0 text-[var(--text-secondary)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-[var(--border-color)] px-5 py-4 space-y-4">
          <p className="text-sm text-[var(--text-secondary)]">{description}</p>

          {params && params.length > 0 && (
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)]">Parameters</p>
              <div className="space-y-2">
                {params.map((p) => (
                  <div key={p.name} className="flex flex-wrap items-start gap-2 text-sm">
                    <code className="rounded bg-[var(--bhg-blue)]/10 px-1.5 py-0.5 text-xs font-mono font-semibold text-[var(--bhg-blue)]">
                      {p.name}
                    </code>
                    <span className="rounded bg-[var(--light-gray)] px-1.5 py-0.5 text-[11px] font-mono text-[var(--text-secondary)]">
                      {p.in}
                    </span>
                    {p.required && (
                      <span className="rounded bg-red-100 px-1.5 py-0.5 text-[11px] font-semibold text-red-600">required</span>
                    )}
                    <span className="text-xs text-[var(--text-secondary)]">{p.description}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)]">Response</p>
            <pre className="rounded-lg bg-[#0f172a] border border-[#1e293b] px-4 py-3 text-xs text-[#e2e8f0] font-mono overflow-x-auto leading-relaxed">
              {response}
            </pre>
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)]">Example</p>
            <pre className="rounded-lg bg-[#0f172a] border border-[#1e293b] px-4 py-3 text-xs text-[#e2e8f0] font-mono overflow-x-auto">
              {example}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
