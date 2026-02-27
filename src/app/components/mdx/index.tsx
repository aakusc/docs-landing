"use client";

import { useState, useContext, createContext, ReactNode } from "react";
import {
  Code2, Server, Building2, Box, Rocket, GitBranch,
  Database, Bot, Brain, Shield, ShieldCheck, Users, Wrench,
  FlaskConical, Store, ArrowUp, Handshake, Map, ToggleRight,
  TrendingUp, Terminal, Globe, Lock, Key, Plug, Layers, Cpu,
  List, Search, Settings, BarChart2, Zap, BookOpen, Book, Package,
  Network, Activity, Bell, CheckCircle, FileText, MessageSquare,
  Star, Tag, Workflow, Eye, AlertTriangle, Info as InfoIcon,
  Clipboard, ClipboardCheck, ClipboardList, Compass, File,
  Play, Scale, User, UserCog,
  // Vertical solutions icons
  BookUser, Flag, Landmark, Target, Calculator, Calendar, CalendarCheck,
  CalendarDays, GanttChart, CheckCheck, Clock, RotateCcw, Cloud,
  DollarSign, Mail, MailOpen, Smile, FileCheck, FileInput, Receipt,
  FilePlus, FileLock2, FilePen, Gauge, Gavel, Factory, Heart,
  HeartPulse, HeartHandshake, Headphones, Laptop, Lightbulb, LightbulbOff,
  ListChecks, MapPin, Newspaper, Phone, Monitor, Route, RotateCw,
  Sliders, Trophy, Truck, UserCircle, UserLock, UserCheck, Video,
  Wand, Sparkles, Award, Briefcase,
  type LucideIcon,
} from "lucide-react";

/* ─── Product context (for resolving doc-internal links) ───── */

import { resolveHref } from "@/lib/resolve-href";
export { resolveHref };

export const ProductContext = createContext<string>("");

/* ─── Card & CardGroup ─────────────────────────────────────── */

// Maps Mintlify/FontAwesome icon name strings → Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  // Code & development
  code: Code2,
  "code-2": Code2,
  terminal: Terminal,
  // Infrastructure
  server: Server,
  database: Database,
  cpu: Cpu,
  plug: Plug,
  // Buildings & business
  building: Building2,
  buildings: Building2,
  store: Store,
  // 3D / packages
  cube: Box,
  box: Box,
  package: Package,
  layers: Layers,
  // Rockets & navigation
  rocket: Rocket,
  "arrow-up": ArrowUp,
  // Social & version control
  sitemap: GitBranch,
  github: GitBranch,
  // People
  user: User,
  users: Users,
  "users-gear": UserCog,
  handshake: Handshake,
  // AI / intelligence
  robot: Bot,
  brain: Brain,
  // Security
  shield: Shield,
  "shield-check": ShieldCheck,
  lock: Lock,
  key: Key,
  // Tools
  wrench: Wrench,
  settings: Settings,
  gear: Settings,
  cog: Settings,
  // Science
  flask: FlaskConical,
  // Charts & analytics
  "chart-line": TrendingUp,
  "chart-bar": BarChart2,
  activity: Activity,
  // Navigation & maps
  map: Map,
  globe: Globe,
  compass: Compass,
  "compass-drafting": Compass,
  search: Search,
  "magnifying-glass": Search,
  "magnifying-glass-chart": BarChart2,
  // Toggles & lists
  "toggle-on": ToggleRight,
  "list-bullet": List,
  list: List,
  // Content & docs
  "book-open": BookOpen,
  book: Book,
  file: File,
  "file-text": FileText,
  "file-contract": File,
  clipboard: Clipboard,
  "clipboard-check": ClipboardCheck,
  "clipboard-list": ClipboardList,
  // Network & workflow
  network: Network,
  workflow: Workflow,
  // Misc
  bolt: Zap,
  zap: Zap,
  play: Play,
  scale: Scale,
  "scale-balanced": Scale,
  "diagram-project": GitBranch,
  star: Star,
  tag: Tag,
  eye: Eye,
  bell: Bell,
  "check-circle": CheckCircle,
  message: MessageSquare,
  "alert-triangle": AlertTriangle,
  "triangle-exclamation": AlertTriangle,
  info: InfoIcon,
  // People (extended)
  "user-circle": UserCircle,
  "user-lock": UserLock,
  "user-shield": UserCheck,
  "user-tie": UserCheck,
  "address-book": BookUser,
  // Buildings & institutions
  "building-columns": Landmark,
  "building-flag": Flag,
  landmark: Landmark,
  briefcase: Briefcase,
  industry: Factory,
  // Charts (extended)
  "chart-column": BarChart2,
  "chart-gantt": GanttChart,
  "chart-mixed": BarChart2,
  gauge: Gauge,
  "gauge-high": Gauge,
  sliders: Sliders,
  target: Target,
  bullseye: Target,
  // Calendar & time
  calendar: Calendar,
  "calendar-check": CalendarCheck,
  "calendar-days": CalendarDays,
  clock: Clock,
  "clock-rotate-left": RotateCcw,
  rotate: RotateCw,
  // Files (extended)
  "file-check": FileCheck,
  "file-import": FileInput,
  "file-invoice": FileText,
  "file-invoice-dollar": Receipt,
  "file-lines": FileText,
  "file-plus": FilePlus,
  "file-shield": FileLock2,
  "file-signature": FilePen,
  "file-chart-line": FileText,
  // Communication
  envelope: Mail,
  "envelope-open-text": MailOpen,
  phone: Phone,
  comments: MessageSquare,
  headset: Headphones,
  video: Video,
  // Finance
  "dollar-sign": DollarSign,
  "magnifying-glass-dollar": Search,
  "money-bill-trend-up": TrendingUp,
  "arrow-trend-up": TrendingUp,
  // Transportation
  truck: Truck,
  road: Route,
  route: Route,
  "map-location-dot": MapPin,
  "location-dot": MapPin,
  // Legal & compliance
  gavel: Gavel,
  "shield-halved": Shield,
  // People & sentiment
  "face-smile": Smile,
  heart: Heart,
  "heart-pulse": HeartPulse,
  "hand-holding-heart": HeartHandshake,
  "hands-helping": HeartHandshake,
  // Awards & goals
  award: Award,
  certificate: Award,
  trophy: Trophy,
  // Tech & tools
  "laptop-code": Laptop,
  cloud: Cloud,
  "check-double": CheckCheck,
  "list-check": ListChecks,
  "presentation-screen": Monitor,
  // Ideas
  lightbulb: Lightbulb,
  "lightbulb-on": LightbulbOff,
  calculator: Calculator,
  "wand-magic-sparkles": Wand,
  "crystal-ball": Sparkles,
  // Misc (extended)
  newspaper: Newspaper,
  gears: Settings,
};

function CardIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name.toLowerCase()];
  if (Icon) return <Icon className="h-4 w-4" />;
  // fallback: render as text if not in map
  return <span className="text-base leading-none">{name}</span>;
}

interface CardProps {
  title: string;
  icon?: string;
  href?: string;
  children?: ReactNode;
}

export function Card({ title, icon, href, children }: CardProps) {
  const product = useContext(ProductContext);
  const resolvedHref = href ? resolveHref(href, product) : undefined;
  const content = (
    <div className="group flex h-full flex-col gap-2 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-4 transition-all duration-150 hover:border-[var(--bhg-blue)]/50 hover:shadow-md">
      {icon && (
        <div className="mb-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-[var(--bhg-blue)]/10 text-[var(--bhg-blue)]">
          <CardIcon name={icon} />
        </div>
      )}
      <span className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--bhg-blue)] transition-colors leading-snug">{title}</span>
      {children && <div className="text-xs text-[var(--text-secondary)] leading-relaxed mt-0.5">{children}</div>}
    </div>
  );
  if (resolvedHref) {
    return <a href={resolvedHref} className="no-underline block h-full">{content}</a>;
  }
  return content;
}

interface CardGroupProps {
  cols?: number;
  children?: ReactNode;
}

export function CardGroup({ cols = 2, children }: CardGroupProps) {
  return (
    <div className={`grid gap-3 my-4 ${cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"}`}>
      {children}
    </div>
  );
}

/* ─── Accordion & AccordionGroup ───────────────────────────── */

interface AccordionProps {
  title: string;
  icon?: string;
  children?: ReactNode;
}

export function Accordion({ title, icon, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[var(--card-border)] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left bg-[var(--card-bg)] hover:bg-[var(--light-gray)] transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-[var(--bhg-blue)]"><CardIcon name={icon} /></span>}
          <span className="text-sm font-medium text-[var(--text-primary)]">{title}</span>
        </div>
        <svg
          className={`h-4 w-4 text-[var(--text-secondary)] transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 py-3 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[var(--card-border)] bg-[var(--background)]">
          {children}
        </div>
      )}
    </div>
  );
}

export function AccordionGroup({ children }: { children?: ReactNode }) {
  return <div className="flex flex-col gap-2 my-4">{children}</div>;
}

/* ─── Steps ────────────────────────────────────────────────── */

const StepIndexContext = createContext(0);

export function Steps({ children }: { children?: ReactNode }) {
  const items = Array.isArray(children) ? children : children ? [children] : [];
  return (
    <div className="my-6 flex flex-col">
      {items.map((child, i) => (
        <StepIndexContext.Provider key={i} value={i + 1}>
          {child}
        </StepIndexContext.Provider>
      ))}
    </div>
  );
}

export function Step({ title, children }: { title: string; children?: ReactNode }) {
  const n = useContext(StepIndexContext);
  return (
    <div className="group relative flex gap-5 pb-8 last:pb-0">
      {/* Number + connector line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--bhg-blue)] text-white text-xs font-bold ring-4 ring-[var(--background)] z-10">
          {n}
        </div>
        <div className="w-px flex-1 bg-[var(--border-color)] mt-2 group-last:hidden" />
      </div>
      {/* Content */}
      <div className="flex-1 pb-2">
        <p className="font-semibold text-[var(--text-primary)] mb-1.5 leading-snug">{title}</p>
        <div className="text-sm text-[var(--text-secondary)] leading-relaxed [&>p]:mt-0">{children}</div>
      </div>
    </div>
  );
}

/* ─── Callouts ─────────────────────────────────────────────── */

function Callout({ type, children }: { type: "note" | "warning" | "info" | "tip"; children?: ReactNode }) {
  const styles = {
    note: { border: "border-[var(--bhg-blue)]/30", bg: "bg-[var(--bhg-blue)]/5", icon: "ℹ", iconColor: "text-[var(--bhg-blue)]" },
    warning: { border: "border-amber-400/40", bg: "bg-amber-50 dark:bg-amber-900/10", icon: "⚠", iconColor: "text-amber-600" },
    info: { border: "border-sky-400/30", bg: "bg-sky-50 dark:bg-sky-900/10", icon: "ℹ", iconColor: "text-sky-600" },
    tip: { border: "border-emerald-400/30", bg: "bg-emerald-50 dark:bg-emerald-900/10", icon: "💡", iconColor: "text-emerald-600" },
  };
  const s = styles[type];
  return (
    <div className={`my-4 flex gap-3 rounded-lg border ${s.border} ${s.bg} px-4 py-3`}>
      <span className={`shrink-0 mt-0.5 text-sm ${s.iconColor}`}>{s.icon}</span>
      <div className="text-sm text-[var(--text-primary)] leading-relaxed [&>p]:m-0">{children}</div>
    </div>
  );
}

export function Note({ children }: { children?: ReactNode }) { return <Callout type="note">{children}</Callout>; }
export function Warning({ children }: { children?: ReactNode }) { return <Callout type="warning">{children}</Callout>; }
export function Info({ children }: { children?: ReactNode }) { return <Callout type="info">{children}</Callout>; }
export function Tip({ children }: { children?: ReactNode }) { return <Callout type="tip">{children}</Callout>; }

/* ─── Tabs ─────────────────────────────────────────────────── */

interface TabsProps { children?: ReactNode }
interface TabProps { title: string; children?: ReactNode }

export function Tabs({ children }: TabsProps) {
  const tabs = Array.isArray(children) ? children : [children];
  const [active, setActive] = useState(0);
  return (
    <div className="my-4 rounded-lg border border-[var(--card-border)] overflow-hidden">
      <div className="flex border-b border-[var(--card-border)] bg-[var(--card-bg)]">
        {tabs.map((tab, i) => {
          const t = tab as React.ReactElement<TabProps>;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
                active === i
                  ? "border-[var(--bhg-blue)] text-[var(--bhg-blue)]"
                  : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {t?.props?.title ?? `Tab ${i + 1}`}
            </button>
          );
        })}
      </div>
      <div className="p-4 text-sm text-[var(--text-secondary)] leading-relaxed">
        {(tabs[active] as React.ReactElement<TabProps>)?.props?.children}
      </div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

/* ─── CodeGroup ────────────────────────────────────────────── */

export function CodeGroup({ children }: { children?: ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-[var(--card-border)] overflow-hidden">
      <div className="bg-[var(--light-gray)] text-xs text-[var(--text-secondary)] px-4 py-2 border-b border-[var(--card-border)] font-mono">
        Code
      </div>
      <div className="bg-[var(--card-bg)]">{children}</div>
    </div>
  );
}

/* ─── ParamField ────────────────────────────────────────────── */

interface ParamFieldProps {
  path?: string;
  query?: string;
  body?: string;
  type?: string;
  required?: boolean;
  default?: string;
  children?: ReactNode;
}

export function ParamField({ path, query, body, type, required, default: defaultVal, children }: ParamFieldProps) {
  const name = path || query || body || "";
  return (
    <div className="my-3 rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] p-4">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <code className="rounded bg-[var(--bhg-blue)]/10 px-2 py-0.5 text-xs font-mono font-semibold text-[var(--bhg-blue)]">
          {name}
        </code>
        {type && (
          <span className="rounded bg-[var(--light-gray)] px-2 py-0.5 text-xs font-mono text-[var(--text-secondary)]">
            {type}
          </span>
        )}
        {required && (
          <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">required</span>
        )}
        {defaultVal && (
          <span className="text-xs text-[var(--text-secondary)]">default: <code className="font-mono">{defaultVal}</code></span>
        )}
      </div>
      {children && <p className="text-xs text-[var(--text-secondary)] leading-relaxed m-0">{children}</p>}
    </div>
  );
}

/* ─── Check ─────────────────────────────────────────────────── */

export function Check({ children }: { children?: ReactNode }) {
  return (
    <div className="flex items-start gap-2 my-1.5">
      <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm text-[var(--text-primary)] leading-relaxed">{children}</span>
    </div>
  );
}

/* ─── ResponseField ─────────────────────────────────────────── */

export function ResponseField({ name, type, children }: { name?: string; type?: string; children?: ReactNode }) {
  return (
    <div className="my-2 border-l-2 border-[var(--bhg-blue)]/30 pl-4">
      <div className="flex items-center gap-2 mb-1">
        {name && <code className="text-xs font-mono font-semibold text-[var(--text-primary)]">{name}</code>}
        {type && <span className="text-xs text-[var(--text-secondary)] font-mono">{type}</span>}
      </div>
      {children && <p className="text-xs text-[var(--text-secondary)] m-0">{children}</p>}
    </div>
  );
}

/* ─── Frame ──────────────────────────────────────────────────── */

export function Frame({ children }: { children?: ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-[var(--card-border)] overflow-hidden shadow-sm">
      {children}
    </div>
  );
}

/* ─── Expandable ─────────────────────────────────────────────── */

export function Expandable({ title, children }: { title?: string; children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-3 border border-[var(--card-border)] rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--card-bg)] transition-colors"
      >
        {title || "Show more"}
        <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-4 pb-4 text-sm text-[var(--text-secondary)]">{children}</div>}
    </div>
  );
}

/* ─── Table ──────────────────────────────────────────────────── */

export function Table({ children }: { children?: ReactNode }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-[var(--card-border)]">
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

export function Thead({ children }: { children?: ReactNode }) {
  return <thead className="bg-[var(--card-bg)] border-b border-[var(--card-border)]">{children}</thead>;
}

export function Tbody({ children }: { children?: ReactNode }) {
  return <tbody className="divide-y divide-[var(--card-border)]">{children}</tbody>;
}

export function Tr({ children }: { children?: ReactNode }) {
  return <tr className="hover:bg-[var(--light-gray)] transition-colors">{children}</tr>;
}

export function Th({ children }: { children?: ReactNode }) {
  return (
    <th className="px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
      {children}
    </th>
  );
}

export function Td({ children }: { children?: ReactNode }) {
  return (
    <td className="px-4 py-2.5 text-[var(--text-primary)]">
      {children}
    </td>
  );
}

/* ─── All MDX components map ─────────────────────────────────── */

import * as React from "react";

export const mdxComponents = {
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
  // HTML table elements — makes markdown tables styled
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,
};
