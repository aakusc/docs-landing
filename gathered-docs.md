# AICR Platform - Comprehensive System Documentation

**Source Repository:** [AICodeRally/AICR](https://github.com/AICodeRally/AICR) - `.claude/` directory
**Analysis Date:** February 6, 2026
**Purpose:** Ground-up understanding of AICR system architecture, purpose, and functional relationships
**Source Material:** 4,600+ lines across 50+ governance documents

---

## Executive Summary

**AICR (AICodeRally Platform)** is a self-aware, AI-native platform that orchestrates the creation, operation, and commercialization of software products through a sophisticated three-layer architecture. The platform combines autonomous AI agents, rigorous database governance, a modular pack system, and deep observability to enable rapid software delivery at scale.

### Core Innovation
AICR is **self-documenting and self-aware** - it understands its own architecture through indexed canonical documentation that agents can query in real-time. This enables AI agents to work autonomously while maintaining architectural consistency.

### Three-Layer System
1. **Studio Layer** - Build: Authoring packs, validating manifests, testing surfaces
2. **Edge Layer** - Operate: Tenant runtime execution, feature flags, telemetry
3. **Summit Layer** - Product: Ship/sell packaging, enable/promote/rollback at scale

---

## System Architecture Overview

### Platform Structure

```
AICR Platform Architecture:
┌────────────────────────────────────────────────────────────────┐
│                        SUMMIT LAYER                             │
│              (Product Management & Distribution)                │
│  • Pack marketplace and commercial operations                   │
│  • Enable/promote/rollback workflows with audit trails          │
│  • Partner onboarding and capability mapping                    │
└────────────────────────────────────────────────────────────────┘
                              │
┌────────────────────────────────────────────────────────────────┐
│                         EDGE LAYER                              │
│               (Tenant Runtime & Operations)                     │
│  • Tenant isolation and multi-tenancy                           │
│  • Feature flags and dynamic configuration                      │
│  • Telemetry, monitoring, and cost tracking                     │
│  • Pack resolver and capability activation                      │
└────────────────────────────────────────────────────────────────┘
                              │
┌────────────────────────────────────────────────────────────────┐
│                        STUDIO LAYER                             │
│                  (Development & Authoring)                      │
│  • Pack authoring and manifest validation                       │
│  • Surface testing and gate enforcement                         │
│  • Development tooling and local testing                        │
└────────────────────────────────────────────────────────────────┘
```

### Application Structure

```
Repository Layout:
apps/
├── aicr/                   # Main platform (Vercel: aicr-platform)
│   ├── src/
│   │   ├── app/
│   │   │   ├── (edge)/     # Edge routes (tenant-scoped)
│   │   │   ├── (platform)/ # Platform routes (AICC, INCC, QACC, etc.)
│   │   │   └── rf/         # RallyForge Hub (dashboard, studio, edge, summit)
│   │   ├── components/     # React components
│   │   ├── lib/
│   │   │   ├── chiefs/     # AI Chiefs (OpsChief, etc.)
│   │   │   ├── spine/      # RAG, ingestion, evidence trail
│   │   │   ├── ai-gateway/ # AI provider abstraction
│   │   │   ├── db/         # Database utilities
│   │   │   │   └── guard.ts # Contract enforcement
│   │   │   ├── flags/      # Feature flag service
│   │   │   ├── retention/  # Data retention service
│   │   │   └── packs/      # Pack system services
│   │   └── knowledge/      # In-app knowledge base
│   │       └── ui/pages/   # UI documentation mirroring routes
│   └── scripts/            # Automation scripts
└── docs/                   # Documentation site (future)

packages/
├── core/                   # Shared types and contracts
├── ui/                     # Shared UI components
├── packs/                  # Pack definitions
└── ai-router/              # AI routing logic

services/
└── agent-conductor/        # Agent orchestration service

prisma/
├── schema.prisma           # Database schema (240 tables)
└── migrations/             # Migration files (COMMIT THESE)
```

---

## Core Concepts & Vocabulary

### Platform Modules (19 Total)

The platform is organized into 19 interconnected control centers:

| Module | Layer | Purpose |
|--------|-------|---------|
| **AICC** | Core | AI Control Center - models, agents, prompts, orchestration |
| **KBCC** | Core | Knowledge Base Control - RAG, vector search, document ingestion |
| **GOCC** | Core | Governance Control - policies, proposals, compliance |
| **DOCC** | Core | Domain Control - domain registry, tenant domains |
| **INCC** | Core | Infrastructure Control - health monitoring, deployments |
| **QACC** | Core | QA Control - tests, quality gates, validation |
| **IDCC** | Core | Identity/Data Control - users, tenants, permissions |
| **OPCC** | Core | Operations Control - operational signals, incidents |
| **SPINE** | Cross-Layer | Evidence trail, audit logs, change tracking |
| **OPSCHIEF** | Cross-Layer | Operations monitoring and decision intelligence |
| **PULSE** | Cross-Layer | Change intelligence and impact analysis |
| **ASK** | Cross-Layer | AI interaction hub - unified query interface |
| **ORBS** | Core | UI visualization and dashboard system |
| **PACKS** | Core | Pack system hierarchy and management |
| **RALLYFORGE** | Core | Main dashboard hub and navigation |
| **STUDIO** | Studio | Development layer and authoring tools |
| **EDGE** | Edge | Business operations and tenant runtime |
| **SUMMIT** | Summit | Commercial marketplace and partner ecosystem |
| **PLATFORM** | Cross-Layer | Platform-wide routing and services |
| **FRAMEWORK** | Cross-Layer | 6P consultative framework |

### Work Management Terminology

| Term | Definition | Storage | Lifecycle |
|------|------------|---------|-----------|
| **Work Item** | Actionable unit of work tracked in AICR | `tasks` table, `/api/work-items` | `ready` → `in_progress` → `review` → `done` |
| **Plan** | Implementation design document | `.claude/plans/`, `session_plans` table | `DRAFT` → `IN_PROGRESS` → `COMPLETED` |
| **Checkpoint** | Session state snapshot for recovery | `session_checkpoints` table | Auto-saved before compaction |
| **Commit Record** | Auto-tracked git commit | `tasks` table (status=done) | Created by git hook |
| **Session** | One Claude Code conversation | `agent_sessions` table | Has checkpoints, plans, memories |
| **Memory** | Learned preference/decision | `session_memories` table | Persists across sessions |

### Pack System Vocabulary

| Term | Definition | Purpose |
|------|------------|---------|
| **Pack** | Versioned capability bundle | Installable/activatable unit in tenant context |
| **Item Pack** | Smallest shippable unit | Manifest + assets + capability wiring |
| **Registry** | Index of available packs | Pack discovery and version management |
| **Manifest** | Machine-validated declaration | Identity, version, deps, surfaces, gates |
| **Promotion** | Moving pack version through states | Audit trail for environment progression |
| **Resolver** | Runtime pack selection | Selects correct pack(s) for tenant + context |

---

## Database Architecture

### The Three Laws (LOCKED January 2026)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│   LAW 1: NEON EVERYWHERE                                         │
│   All environments use Neon PostgreSQL. No Docker Postgres.      │
│   Local dev uses preview branch via pnpm env:pull.               │
│                                                                  │
│   LAW 2: NEON BRANCHES                                           │
│   Preview uses auto-branches (per PR), Prod uses `main`.         │
│   Local dev shares preview branch credentials.                   │
│                                                                  │
│   LAW 3: PRISMA ONLY                                             │
│   All database access through Prisma client. No raw SQL pools.   │
│   Zero exceptions (except documented exemptions).                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Database Scale (2026-01-18)

| Metric | Value |
|--------|-------|
| **Total Tables** | 240 |
| **Enums** | 41 |
| **Migrations** | 18 |
| **Schema Status** | ✅ In Sync |
| **Schema Size** | 286,668 lines (PRODUCTION_SCHEMA_2026-01-18.prisma) |

### Database Model Categories

**Tenant-Scoped Models (48 models)** - MUST include tenantId:
```
Platform Core:
- Organization, Workspace, UserTenant, Role, UserRole
- ApiKey, Proposal, Policy, AuditLog

Packs:
- PackCatalog, TenantPack, TenantRally, TenantSuperPack, TenantDomain

Tasks:
- Task, TaskComment, Approval

Events:
- OutboxEvent, DlqEvent

OpsChief:
- OpsSignal, OpsIncident, OpsDecision

AI Control:
- AiAgentInvocation, AgentBinding, RagConfig, AiCostBudget
- AiUsageDaily, AiGatewayLog, IngestionJob, ReplayRun

RAG:
- RagDocument, RagChunk, RagQuery

Knowledge Base:
- KbTenantDocument

Chiefs:
- ChiefIntent, ChiefDecision, ChiefAction, PulseCard, ChiefEvidence

Billing:
- UsageLedger, Entitlement, EntitlementChangeLog
```

**Global Models** - No tenantId required:
```
Users:
- User, Account, Session, VerificationToken

Platform Health:
- HealthAlert, AlertSubscription, PlatformHealthReport

Spine:
- SpineDocument, SpineChunk, SpineIngestionLog

Catalogs:
- RallyCatalog, SuperPackCatalog, DomainCatalog (optional tenantId)

AI Registry:
- ModelRegistry, AiAgent, AiAgentVersion, AiPrompt
```

### Database Access Contracts (ENFORCED)

#### Contract 1: Prisma-First Access
**Rule:** ALL database access MUST use Prisma typed queries unless explicitly exempted.

**Allowed Exemptions (ONLY):**
- pgvector operations (no Prisma `<=>` operator)
- Materialized views (not supported by Prisma)
- Database functions (custom SQL functions)
- Bulk upserts (performance-critical `ON CONFLICT`)

**Enforcement:**
- Development: ESLint warning
- PR Review: CodeReviewChief flags
- Production: Audit log entry + alert

#### Contract 2: Tenant Isolation
**Rule:** ALL queries on tenant-scoped models MUST include tenantId in WHERE clause.

**Enforcement:**
- Runtime: Database Guard middleware auto-injects tenantId
- Compile-time: TypeScript types require tenantId parameter
- Code Review: CodeReviewChief validates tenant scope

#### Contract 3: Write Operation Controls

**Approval Matrix:**

| Operation | Preview | Production | Approval |
|-----------|---------|------------|----------|
| SELECT | ✅ Auto | ✅ Auto | None |
| INSERT | ✅ Auto | ✅ Auto | None |
| UPDATE (single) | ✅ Auto | ✅ Auto | None |
| UPDATE (bulk >100) | ✅ Auto | ⚠️ Log | Audit log |
| DELETE (single) | ✅ Auto | ⚠️ Log | Audit log |
| DELETE (bulk >10) | ⚠️ Confirm | ❌ Block | Human approval |
| TRUNCATE | ❌ Block | ❌ Block | Emergency only |
| DROP | ❌ Block | ❌ Block | Emergency only |
| Raw ALTER | ❌ Block | ❌ Block | Migration only |

#### Contract 4: Raw SQL Documentation
**Rule:** Every raw SQL query MUST have inline comment explaining WHY.

**Required Format:**
```typescript
// ========================================
// RAW SQL: [Exemption Category]
// Reason: [Brief explanation]
// Models: [Tables accessed]
// Ticket: [Optional: Link to issue]
// ========================================
```

#### Contract 5: Migration Safety
**Rule:** Schema changes MUST go through Prisma migrations. No direct DDL.

**Allowed:**
- Development: `prisma migrate dev` ✅
- Preview: `prisma migrate deploy` ✅ (CI only)
- Production: `prisma migrate deploy` ✅ (CI only)

**NEVER Allowed:**
- `prisma db push` ❌
- Direct `ALTER TABLE` ❌

#### Contract 6: Connection Management
**Rule:** Use the singleton Prisma client. No connection pool management.

```typescript
// ✅ CORRECT
import { prisma } from '@/lib/prisma';

// ❌ WRONG
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
```

---

## Pack System

### System Shape

The Pack System enables **deterministic capability resolution** across three layers:

```
Pack System Lifecycle:
┌──────────────────────────────────────────────────────────────┐
│ 1. CREATE PACK                                                │
│    → Author manifest + assets                                 │
│    → Validate locally (schema + gates)                        │
│    → Register version in registry                             │
│    → Produce installable artifact                             │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ 2. INSTALL / ENABLE (Tenant)                                  │
│    → Select tenant + pack + version                           │
│    → Resolver computes effective pack set (deps included)     │
│    → Activate capabilities + surfaces                         │
│    → Emit telemetry: pack.enabled                             │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ 3. PROMOTE                                                    │
│    → Candidate version passes gates                           │
│    → Promote with provenance (who/why)                        │
│    → Emit telemetry: pack.promoted                            │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ 4. ROLLBACK                                                   │
│    → Select prior version                                     │
│    → Recompute effective pack set                             │
│    → Restore surfaces + capability wiring                     │
│    → Emit telemetry: pack.rolled_back                         │
└──────────────────────────────────────────────────────────────┘
```

### Core Requirements

1. **Deterministic resolution** - Same inputs → same selected pack set
2. **Validated manifests** - Schema + gates enforcement
3. **Auditability** - Who promoted what, when, why
4. **Rollback path** - Previous known-good version always available

### Resolver Contract

The resolver must answer:
- **Tenant context:** Who is the tenant + what environment
- **Capability context:** What domain/module is requested
- **Policy context:** What gates/constraints apply

**Output:** Ordered set of packs + versions + activation directives

### Enforcement Gates

**Minimum gates every pack must pass:**
- Manifest schema validation
- Dependency integrity (no missing deps, no cycles)
- Surface contract checks (declared routes/surfaces exist)
- Version policy rules (no "floating latest" in production)

### Database Models

**Supply Chain:**
```
PackPublisher              - Publisher registration and keys
PublisherKeyHistory        - Key rotation audit trail
CertificationRequirement   - Required checks for certification
PackCertification          - Certification records with crypto signing
CertificationHistory       - Certification event audit trail
PackChangeLog              - Pack version change tracking
```

**Pack Storage:**
```
PackCatalog               - Available packs and versions
TenantPack                - Pack installations per tenant
TenantRally              - Rally-specific pack configuration
TenantSuperPack          - SuperPack bundles per tenant
TenantDomain             - Domain assignments per tenant
```

---

## AI Agent System

### Agent Roles & Responsibilities

AICR uses specialized AI agents with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────────┐
│                         AGENT ROLES                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ Builder (Backend/Infrastructure)                                 │
│ ════════════════════════════════                                 │
│ • Database operations                                            │
│ • API routes                                                     │
│ • Schema changes                                                 │
│ • DevOps / CI/CD                                                 │
│ • Pack system backend                                            │
│ • Security                                                       │
│                                                                  │
│ Designer (UI/Frontend)                                           │
│ ══════════════════════                                           │
│ • React components                                               │
│ • Page layouts                                                   │
│ • User flows                                                     │
│ • Pack UI                                                        │
│ • Design system                                                  │
│                                                                  │
│ HUMAN (Todd/Zach)                                                │
│ ═════════════════                                                │
│ • Final approvals                                                │
│ • Production deploys                                             │
│ • Architecture decisions                                         │
│ • External accounts (Vercel, Neon, etc.)                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Specialized Agents (14 Total)

| Agent | Slug | Purpose | Model |
|-------|------|---------|-------|
| **HQ** | `aicr-hq` | Founder operations hub, strategy synthesis, OKRs | Sonnet |
| **Dev** | `aicr-dev` | Feature implementation, debugging, testing | Sonnet |
| **Stack** | `aicr-stack` | Infrastructure, Vercel, Prisma, CI/CD | Sonnet |
| **Platform Designer** | `aicr-platform-designer` | Platform UI/UX design | Sonnet |
| **QA** | `aicr-qa` | Quality assurance, testing, validation | Sonnet |
| **Docs** | `aicr-docs` | Documentation generation and maintenance | Sonnet |
| **Research** | `aicr-research` | Market research, competitive analysis | Sonnet |
| **Brand** | `aicr-brand` | Brand identity, messaging, marketing | Sonnet |
| **Biz** | `aicr-biz` | Business strategy, pricing, partnerships | Sonnet |
| **Rally** | `aicr-rally` | RallyForge specific operations | Sonnet |
| **Delivery** | `aicr-delivery` | Customer delivery and onboarding | Sonnet |
| **Knowledge (KG)** | `aicr-kg` | Knowledge graph and semantic indexing | Sonnet |

### Universal Agent Rules

#### 1. Announce Before Acting
```
═══════════════════════════════════════════════════════════════
TASK: [TASK-XXX] Short description
AGENT: Builder
ACTION: What I'm about to do
═══════════════════════════════════════════════════════════════
```

#### 2. Announce Database Context
```
┌─────────────────────────────────────────┐
│ 🗄️ DATABASE CONTEXT                     │
│ Environment: preview         ✓ Safe     │
│ Database:    Neon preview branch        │
│ Setup:       pnpm env:pull → pnpm dev   │
└─────────────────────────────────────────┘
```

#### 3. Stop on Production
If `AICR_ENV=production`:
- STOP before destructive operations
- Require explicit human confirmation
- Log decision in DECISIONS.md

#### 4. Track All Work
- Every task in Tasks system (UI or `/api/tasks`)
- Every completion logged as task status + comment
- Every decision in DECISIONS.md
- Every blocker logged in Tasks system

#### 5. Daily Progress File
Every Claude session should:
1. Check `.claude/daily-reviews/YYYY-MM-DD/PROGRESS.md`
2. Create if doesn't exist (use template)
3. Update as tasks complete
4. Add backlog items discovered

#### 6. Database Access Contracts
**ALL database operations MUST follow `.claude/DATABASE_CONTRACTS.md`**

Quick check:
```
□ Is this a simple query? → Use Prisma typed query
□ Does it involve vectors? → Raw SQL OK, add exemption comment
□ Is the model tenant-scoped? → Include tenantId in WHERE
□ Is it a bulk delete? → Check approval matrix
□ Is it schema change? → Use migration, never direct DDL
```

#### 7. Don't Guess Credentials
Never invent API keys, guess connection strings, or assume account access.

---

## Self-Aware Platform

### How It Works

AICR is **self-aware** - it understands its own architecture through indexed canonical documentation.

**Indexing:**
- 96 canonical docs in `docs/canonical/` indexed into KBCC knowledge base
- Real-time querying enables agents to ask about platform architecture
- Sourced answers prevent hallucination and ensure accuracy

### Self-Aware API

| Endpoint | Purpose | Example |
|----------|---------|---------|
| `GET /api/self-aware/context?module=KBCC` | Get module context | Returns architecture, responsibilities, boundaries |
| `GET /api/self-aware/context?definitions=true` | Get all definitions | Returns complete glossary |
| `POST /api/self-aware/ingest` | Ingest new docs | Index new canonical documentation |

### UI Components

```tsx
// Badge with tooltip showing module info
import { ModuleBadge } from '@/components/self-aware';
<ModuleBadge moduleId="KBCC" />

// Help panel that slides out with full context
import { ModuleHelpPanel, ModuleContextProvider } from '@/components/self-aware';
<ModuleContextProvider moduleId="KBCC">
  <ModuleHelpPanel />
</ModuleContextProvider>
```

### KBCC + In-App KB

- **UI KB** lives in `apps/aicr/knowledge/ui/pages`
- Mirrors every `apps/aicr/src/app/**/page.tsx` route
- Updates `apps/aicr/knowledge/ui/pages/manifest.json` when routes change
- KBCC reports sent via `node apps/aicr/scripts/kbcc-report.js`

**Environment Variables:**
```bash
KBCC_REPORT_URL         # Reporting endpoint
KBCC_INGEST_TOKEN       # Authentication token
KBCC_REPO_SLUG          # Optional: repository slug
KBCC_REPO_NAME          # Optional: repository name
```

---

## Governance Framework

### Non-Negotiables

1. **No Parallel Truth** - One canonical source per topic, rest are pointers
2. **Evidence Before Claims** - PRs changing routing/surfaces/packs need proof
3. **Stable Interfaces** - Breaking URL changes require redirects + deprecation
4. **Taxonomy Discipline** - Canonical ≠ important; Canonical = declares truth

### Authority Model

**Canonical Index (Source of Truth):**
- `docs/canonical/00_CANONICAL_INDEX.md`
- One topic → one canonical file
- All canonical docs referenced here

**Allowed Truth Categories:**
- **Canonical:** Definitive decisions and definitions
- **Governance:** Policies, gates, enforcement
- **Agent Ops (.claude/):** How agents execute and coordinate
- **Survey Outputs (docs/surveys/):** Evidence snapshots (generated)

### PR Gates

**Any PR touching routes/surfaces:**
- Updated route survey artifacts (or explicit note why not)
- Redirect plan if paths change
- Link updates (nav/cards/docs)

**Any PR touching packs:**
- Pack manifest validity (schema/gates)
- Install/promote/rollback story (even if stubbed)
- Evidence: "resolver behavior unchanged" or "changed with mapping"

**Any PR touching canonical docs:**
- Update to `00_CANONICAL_INDEX.md`
- Archive or pointer creation for superseded docs

### Redirect & Deprecation Policy

- **Redirect-first, delete-later**
- Redirect rules explicit when target path differs
- Deprecations marked in-place:
  - UI routes: banner/note where practical
  - API routes: `@deprecated` + migration target

---

## Development Workflow

### Environment Setup

```bash
# Pull preview environment variables (includes DATABASE_URL, keys)
pnpm env:pull           # Pulls preview env → .env.local (DEFAULT)

# Alternative environments
pnpm env:pull:prod      # Pull production env (use with caution)
pnpm env:pull:dev       # Pull development env
```

### Database Commands

```bash
pnpm db:info             # Show current database
pnpm db:check            # Verify connection
pnpm db:migrate:dev      # Create migration (local only)
pnpm db:migrate:deploy   # Apply migrations
pnpm db:seed             # Run seed script
pnpm db:studio           # Open Prisma Studio
```

### Development Commands

```bash
pnpm env:pull            # First: pull preview env vars
pnpm dev                 # Then: start dev server (port 3000)
pnpm build               # Build for production
pnpm typecheck           # Run TypeScript check
pnpm lint                # Run linter
pnpm test                # Run tests
```

### Deployment Commands

```bash
vercel                   # Deploy to preview
vercel --prod            # Deploy to production (human approval required)
```

### Standard Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│ DEVELOPMENT WORKFLOW:                                            │
│                                                                  │
│ 1. Pull preview env vars:  pnpm env:pull                        │
│ 2. Run local dev server:   pnpm dev                             │
│ 3. Make changes, test locally                                    │
│ 4. git push to feature branch                                    │
│ 5. Vercel auto-deploys preview (validates in cloud)             │
│ 6. Merge to main → production                                    │
│                                                                  │
│ LOCAL DEV uses Neon preview branch via pnpm env:pull            │
└─────────────────────────────────────────────────────────────────┘
```

---

## AI Core Infrastructure

### Chiefs System

**OpsChief (Operations Intelligence):**
- Location: `apps/aicr/src/lib/chiefs`
- Purpose: Operations monitoring, incident detection, decision intelligence
- Database: `OpsSignal`, `OpsIncident`, `OpsDecision`

**CodeReviewChief (Code Quality):**
- Location: `apps/aicr/src/lib/chiefs/code-review/`
- Detectors:
  - `RawSQLDetector` - Flags $queryRaw without exemption comment
  - `TenantScopeDetector` - Flags missing tenantId on scoped models
  - `DangerousOpDetector` - Flags bulk deletes, truncates

**Other Chiefs:**
- `ChiefIntent`, `ChiefDecision`, `ChiefAction` models in database
- `PulseCard` - Change intelligence visualization
- `ChiefEvidence` - Evidence trail for decisions

### Spine (Evidence Trail)

**Purpose:** Audit logs, change tracking, evidence preservation

**Location:** `apps/aicr/src/lib/spine`

**Database Models:**
```
SpineDocument         - Document audit trail
SpineChunk           - Chunked evidence
SpineIngestionLog    - Ingestion tracking
```

**Features:**
- Cross-platform audit trail
- Change intelligence
- Compliance evidence
- Traceability for all platform actions

### AI Router

**Purpose:** AI provider abstraction layer

**Location:** `packages/ai-router`

**Features:**
- Multi-provider support (Anthropic, OpenAI, Google)
- Cost tracking per model
- Usage analytics
- Rate limiting and retry logic

**Database Models:**
```
ModelRegistry        - Available AI models
AiAgent             - Agent definitions
AiAgentVersion      - Agent version history
AiPrompt            - Prompt templates
AiAgentInvocation   - Invocation logs (tenant-scoped)
AgentBinding        - Agent-tenant bindings
AiCostBudget        - Budget tracking (tenant-scoped)
AiUsageDaily        - Daily usage metrics (tenant-scoped)
AiGatewayLog        - Gateway request logs (tenant-scoped)
```

### AI Gateway

**Purpose:** Unified AI provider interface

**Location:** `apps/aicr/src/lib/ai-gateway`

**Integration Example:**
```typescript
// API route example
import { invokeAI } from '@/lib/ai-gateway';

export async function POST(req: Request) {
  const { prompt, model } = await req.json();

  const response = await invokeAI({
    tenantId: ctx.tenantId,
    model: model || 'claude-sonnet-4',
    messages: [{ role: 'user', content: prompt }],
    maxTokens: 1000
  });

  return Response.json(response);
}
```

### RAG System (KBCC Integration)

**Purpose:** Retrieval-Augmented Generation for knowledge queries

**Location:** `apps/aicr/src/lib/spine/rag`

**Database Models:**
```
RagConfig           - RAG configuration (tenant-scoped)
RagDocument         - Indexed documents (tenant-scoped)
RagChunk           - Vector-indexed chunks (tenant-scoped)
RagQuery           - Query logs (tenant-scoped)
IngestionJob       - Background ingestion jobs (tenant-scoped)
```

**Features:**
- pgvector similarity search
- Chunking strategies
- Multi-tenant isolation
- Real-time ingestion
- Query analytics

**Exemption:** RAG queries use raw SQL for pgvector `<=>` operator (documented exemption)

### Agent Conductor

**Purpose:** Agent orchestration service

**Location:** `services/agent-conductor/`

**Integration:**
- AICC Integration: `apps/aicr/src/app/api/aicc/agents/[slug]/invoke/route.ts`
- Native dependency: `better-sqlite3` (externalized from webpack)

---

## Feature Management

### Feature Flags

**Service Location:** `apps/aicr/src/lib/flags/service.ts`

**Database Models:**
```
featureFlag          - Flag definitions
tenantFeatureFlag    - Tenant-specific overrides
featureFlagAudit     - Flag change audit trail
```

**Features:**
- Flag CRUD operations
- Tenant overrides
- Targeting rules
- Audit trail
- Real-time updates

**Usage:**
```typescript
import { getFeatureFlag, isFeatureEnabled } from '@/lib/flags/service';

// Check if feature is enabled for tenant
const enabled = await isFeatureEnabled('new-ui', tenantId);

// Get flag with targeting rules
const flag = await getFeatureFlag('new-ui');
```

### Data Retention

**Service Location:** `apps/aicr/src/lib/retention/service.ts`

**Database Models:**
```
retentionPolicy          - Retention rules
defaultRetentionPolicy   - Default rules per model
archiveRegistry          - Archive metadata
archiveJob              - Archive job tracking
```

**Features:**
- Policy management
- Archive registry
- Job scheduling
- Compliance enforcement
- Audit trail

**Usage:**
```typescript
import { getRetentionPolicy, archiveData } from '@/lib/retention/service';

// Get retention policy for model
const policy = await getRetentionPolicy('AuditLog', tenantId);

// Archive old data
await archiveData('AuditLog', tenantId, { olderThan: thirtyDays });
```

---

## Task Management System

### Database-Backed Tasks

**ALL tasks managed in database.** Tasks UI and `/api/tasks` are single source of truth.

**Legacy note:** `.claude/tasks/*.md` files deprecated (except `DECISIONS.md`)

### Task States

```
backlog → ready → in_progress → review → done
         ↓
      blocked (when stalled on dependency)
```

### Task Workflow

**Before Starting Work:**
1. Check assigned work in Tasks UI or `GET /api/tasks?assigneeId={you}`
2. Move task to `in_progress`
3. Announce what you're working on

**During Work:**
1. Add progress comments to task
2. If blocked, set status to `blocked` and note reason
3. If scope changes, record change in task

**After Completing Work:**
1. Move task to `review` or `done`
2. Add completion comment with changes and files touched
3. Log architecture decisions in `DECISIONS.md` when required

### Priority Definitions

| Priority | Meaning | Response Time |
|----------|---------|---------------|
| **Critical** | System broken, blocking all work | Immediate |
| **High** | Important feature/fix, blocking other tasks | Same day |
| **Medium** | Normal priority | This sprint |
| **Low** | Nice to have | When time permits |

### Task ID Convention

```
TASK-XXX    General tasks
DB-XXX      Database tasks
UI-XXX      UI/Frontend tasks
API-XXX     API/Backend tasks
PACK-XXX    Pack system tasks
GOV-XXX     Governance tasks
INFRA-XXX   Infrastructure tasks
DOC-XXX     Documentation tasks
```

---

## Session Persistence & Recovery

### Session Concepts

| Term | Scope | Persistence | Purpose |
|------|-------|-------------|---------|
| **Session** | One Claude Code conversation | `agent_sessions` table | Container for work |
| **Checkpoint** | Session state snapshot | `session_checkpoints` table | Recovery point |
| **Plan** | Implementation design | `session_plans` table | Implementation guide |
| **Memory** | Learned preference | `session_memories` table | Cross-session learning |
| **Step** | Internal progress | Ephemeral (TaskCreate tool) | NOT persisted to AICR |

### Daily Progress Tracking

**Location:** `.claude/daily-reviews/YYYY-MM-DD/PROGRESS.md`

**Every Claude session should:**
1. Check for today's PROGRESS.md
2. Create from template if missing
3. Update as tasks complete
4. Add backlog items discovered

**Format:**
```markdown
### [#] ✅ Task Name

**Time:** HH:MM
**Files Modified:**
- `path/to/file.ts`

**Summary:**
What was done and why.
```

### Recovery Protocol

```
Session crashes → Checkpoint saved
New session → /resume command
→ Loads checkpoint, memories, active plans
→ Continues work
```

---

## Platform Services

### OpsChief (Operations Monitoring)

**Purpose:** Real-time operational intelligence and incident management

**Database Models:**
```
OpsSignal          - Operational signals (anomalies, warnings)
OpsIncident        - Incident tracking
OpsDecision        - Decision records
```

**Features:**
- Anomaly detection
- Incident correlation
- Decision intelligence
- Alert routing
- Metric aggregation

### Pulse (Change Intelligence)

**Purpose:** Change impact analysis and visualization

**Database Models:**
```
PulseCard          - Change intelligence cards
```

**Features:**
- Change detection
- Impact analysis
- Dependency mapping
- Visualization

### ASK (AI Interaction Hub)

**Purpose:** Unified AI query interface across all domains

**API Example:** `apps/aicr/src/app/(edge)/[tenant]/api/ask/invoke/route.ts`

**Features:**
- Domain routing (platform, business, technical)
- Intent classification
- Context injection
- Response formatting
- Usage tracking

---

## Security & Compliance

### Authentication Models

```
User                - Core user identity
Account            - OAuth provider accounts
Session            - Active sessions
VerificationToken  - Email verification tokens
```

### Authorization System

**RBAC (Role-Based Access Control):**
```
Role               - Role definitions (tenant-scoped)
UserRole          - User-role assignments (tenant-scoped)
UserTenant        - User-tenant membership (tenant-scoped)
```

### API Security

**API Keys:**
```
ApiKey            - API key management (tenant-scoped)
```

### Audit & Compliance

**Audit Logging:**
```
AuditLog              - General audit trail (tenant-scoped)
AuditEventIndex       - Indexed events
SpineDocument         - Evidence preservation
SpineIngestionLog     - Data ingestion audit
```

**Policy Engine:**
```
Policy                - Governance policies (tenant-scoped)
Proposal              - Policy proposals (tenant-scoped)
```

### Data Protection

**Retention Policies:**
```
retentionPolicy           - Retention rules
defaultRetentionPolicy    - Default rules per model
archiveRegistry           - Archive metadata
archiveJob               - Archive job tracking
```

---

## Deployment Architecture

### Environment Matrix

| Environment | Database | Access Method | Safety |
|-------------|----------|---------------|--------|
| `local` | Neon preview | `pnpm env:pull` → `pnpm dev` | ✓ Safe |
| `preview` | Neon branch | Auto per PR (Vercel) | ⚠️ Caution |
| `production` | Neon main | `pnpm env:pull:prod` | 🛑 Danger |

### CI/CD Pipeline

**GitHub Actions:** `neon-preview.yml`

**Workflow:**
1. PR opened → Creates `pr-{number}` branch from main
2. Sets Vercel DATABASE_URL
3. PR updated → Reuses existing branch, runs migrations
4. PR closed/merged → Deletes preview branch, cleans up

**Required GitHub Secrets:**
```bash
NEON_PROJECT_ID          # Neon project identifier
NEON_API_KEY             # Neon API authentication
VERCEL_TOKEN             # Vercel deployment token
VERCEL_PROJECT_ID        # Vercel project identifier
VERCEL_TEAM_ID           # For team projects (optional)
```

### Vercel Integration

**Project:** `aicr-platform`
**Configuration:** `apps/aicr/.vercel/project.json`

**Automatic Deployments:**
- Push to feature branch → Preview deployment
- Merge to main → Production deployment

**Environment Variables:**
- Managed in Vercel Dashboard
- Pull locally: `pnpm env:pull`
- Auto-set for preview: Neon integration
- Production: Manual configuration

---

## Platform Health Monitoring

### Health Models

```
HealthAlert               - System health alerts
AlertSubscription         - Alert routing subscriptions
PlatformHealthReport      - Health check reports
```

### Infrastructure Monitoring (INCC)

**Purpose:** Infrastructure health, deployments, system status

**Features:**
- Health checks
- Deployment tracking
- Resource monitoring
- Alert management
- Incident correlation

---

## Operational Patterns

### Coordination Between Agents

**Builder → Designer Handoff:**
```markdown
## Handoff: [TASK-XXX] Feature Name

**Backend Ready:**
- API: `/api/packs/[id]`
- Types: `packages/core/types/pack.ts`
- Schema: `PackCatalog` model

**For Designer:**
- Create UI at `/packs/[id]`
- Use `usePackQuery` hook
- Follow design system

**Test Data:**
- Pack ID: `pack-001`
- Tenant: `test`
```

**Designer → Builder Handoff:**
```markdown
## Request: [TASK-XXX] Feature Name

**UI Needs:**
- Endpoint: `GET /api/packs?filter=x`
- Response: `{ packs: Pack[], total: number }`
- Filters: status, stage, scope

**Mockup:**
[Link or description]
```

### Gates Summary

| Action | Gate |
|--------|------|
| Local DB changes | None - proceed |
| Create migration | Local only |
| Deploy migration | CI/CD only |
| Preview DB write | Caution - proceed |
| Production DB read | OK |
| Production DB write | Human approval |
| Production DELETE/DROP | Human approval + log |
| Architecture decision | Log in DECISIONS.md |
| New dependency | Log reason |

---

## Recent System Evolution

### Pattern A Migration Complete (2026-01-22)

**Achievement:**
- All Prisma models standardized to camelCase + @map (Pattern A)
- 6 rounds of TypeScript fixes across 200+ files
- Build passing with 0 errors, 252 pages

**New Models Added (14 tables):**

**Feature Flags:**
- `featureFlag`
- `tenantFeatureFlag`
- `featureFlagAudit`

**Retention:**
- `retentionPolicy`
- `defaultRetentionPolicy`
- `archiveRegistry`
- `archiveJob`

**Certification:**
- `packCertification`
- `certificationRequirement`
- `certificationHistory`

**Publishers:**
- `packPublisher`
- `publisherKeyHistory`

### Services Restored from Stubs

**Full Prisma Query Implementation:**
1. `src/lib/flags/service.ts` - Flag CRUD, tenant overrides, targeting, audit
2. `src/lib/retention/service.ts` - Policies, archive registry, job management
3. `src/lib/packs/supply-chain/certification-service.ts` - Cert CRUD, crypto signing, revocation
4. `src/lib/packs/supply-chain/publisher-service.ts` - Registration, key rotation, verification

### Build Fix

**Issue:** `better-sqlite3` native dependency conflict
**Solution:** Externalized from webpack bundle (agent-conductor dependency)

---

## Documentation Authority

### Canonical Documentation System

**Master Index:** `docs/canonical/00_CANONICAL_INDEX.md`

**Purpose:** Single source of truth for all platform definitions

**96 Canonical Documents** indexed in KBCC, including:
- `AICR_GLOSSARY.md` - Platform vocabulary (LOCKED)
- `FORGE_ARCHITECTURE_BIBLE.md` - Forge architecture (LOCKED)
- Module specifications for all 19 control centers
- Domain specifications
- Integration guides

**Doc Policy:** `docs/canonical/DOC_POLICY.md`

### Supporting Documentation

**Architecture:** `docs/architecture/*`
**Specifications:** `docs/specs/*`
**Surveys:** `docs/surveys/*` (generated evidence)
**Governance:** `docs/governance/*`

---

## System Metrics & Scale

### Current State (2026-02-06)

| Metric | Value | Status |
|--------|-------|--------|
| **Total Database Tables** | 240 | ✅ In Sync |
| **Database Enums** | 41 | ✅ |
| **Prisma Migrations** | 18 | ✅ |
| **Platform Modules** | 19 | ✅ Active |
| **Specialized Agents** | 14 | ✅ Active |
| **Canonical Docs** | 96 | ✅ Indexed |
| **Build Status** | 252 pages, 0 errors | ✅ Passing |
| **Governance Docs** | 4,600+ lines | ✅ Current |

### Technology Stack

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 3.4
- Shadcn UI components

**Backend:**
- Node.js
- Prisma ORM
- PostgreSQL (Neon)
- NextAuth v5

**Infrastructure:**
- Vercel (hosting)
- Neon (database)
- GitHub Actions (CI/CD)
- pnpm (package manager)

**AI:**
- Claude Sonnet 4 (primary)
- OpenAI GPT-4
- Google Gemini
- pgvector (embeddings)

---

## Key Insights & Functional Relationships

### 1. Self-Awareness as Core Competency

AICR's self-aware architecture is its defining innovation:
- **96 canonical docs** indexed in KBCC enable runtime queries
- Agents can **ask the platform about itself** and get sourced answers
- **Prevents architectural drift** through enforced canonical truth
- **Accelerates development** by eliminating "where is this?" questions

### 2. Governance Through Enforcement

Unlike documentation-only systems, AICR **enforces** its governance:
- **Database Guard** middleware validates contracts at runtime
- **CodeReviewChief** flags violations in PRs
- **Policy Engine** integrates governance with execution
- **Audit trail** captures every platform action

### 3. Multi-Tenant Architecture by Design

Tenant isolation is non-negotiable:
- **48 tenant-scoped models** automatically enforce tenantId
- **Database middleware** auto-injects tenant context
- **TypeScript types** require tenantId at compile-time
- **Impossible to accidentally cross tenants**

### 4. Deterministic Pack Resolution

The Pack System enables predictable capability management:
- **Same inputs always produce same output** (resolver determinism)
- **Full audit trail** for every promotion and rollback
- **Dependency graph** prevents conflicts
- **Version pinning** ensures production stability

### 5. AI Agents as First-Class Citizens

Agents are not just tools - they're **integrated platform participants**:
- **Specialized roles** with clear boundaries
- **Shared governance** through AGENTS.md contract
- **Session persistence** enables long-running work
- **Memory system** enables cross-session learning

### 6. Evidence-Based Operations

Every claim requires proof:
- **Survey outputs** validate routing changes
- **Audit logs** track every database operation
- **Spine system** preserves evidence trail
- **No guesswork** - only measured reality

### 7. Three-Layer Value Chain

Studio → Edge → Summit creates clear progression:
- **Studio**: Authoring and development
- **Edge**: Operations and runtime
- **Summit**: Commerce and distribution
- Each layer builds on previous, no overlap

### 8. Database as Source of Truth

The database is **the** source of truth:
- **Tasks** live in database, not markdown files
- **Sessions** persisted for recovery
- **Memories** survive across conversations
- **Plans** stored with execution context

### 9. Neon Branch Strategy

Development workflow enabled by Neon branching:
- **PR-scoped databases** prevent conflicts
- **Instant branching** enables fast iteration
- **Zero Docker** simplifies local development
- **Production parity** through shared infrastructure

### 10. Platform Instrumentation

AICR instruments itself comprehensively:
- **OpsChief** monitors operational health
- **Pulse** tracks change impact
- **Spine** preserves audit trail
- **KBCC** indexes platform knowledge
- **Complete observability** of platform state

---

## Functional Relationship Map

```
┌──────────────────────────────────────────────────────────────────┐
│                    FUNCTIONAL RELATIONSHIPS                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  CANONICAL DOCS (96 files)                                        │
│        ↓                                                          │
│    KBCC (Knowledge Base)                                          │
│        ↓                                                          │
│    SELF-AWARE API (/api/self-aware/*)                            │
│        ↓                                                          │
│    AI AGENTS (14 specialized)                                     │
│        ↓                                                          │
│    TASKS SYSTEM (database-backed)                                 │
│        ↓                                                          │
│    WORK EXECUTION (code changes)                                  │
│        ↓                                                          │
│    DATABASE GUARD (contract enforcement)                          │
│        ↓                                                          │
│    PRISMA CLIENT (type-safe queries)                              │
│        ↓                                                          │
│    NEON DATABASE (240 tables)                                     │
│        ↓                                                          │
│    AUDIT TRAIL (Spine, OpsChief)                                  │
│        ↓                                                          │
│    GOVERNANCE VALIDATION (CodeReviewChief)                        │
│        ↓                                                          │
│    PACK RESOLVER (capability activation)                          │
│        ↓                                                          │
│    TENANT RUNTIME (Edge layer)                                    │
│        ↓                                                          │
│    END USER EXPERIENCE                                            │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## Strategic Implications

### 1. Platform Scalability

AICR's architecture enables horizontal scaling:
- **Multi-tenancy** isolates customer data
- **Pack system** enables capability marketplace
- **Neon branching** supports unlimited developers
- **Serverless** infrastructure scales to zero

### 2. Developer Experience

The platform prioritizes developer velocity:
- **Self-aware** - platform answers its own questions
- **Type-safe** - Prisma + TypeScript prevent errors
- **Governed** - clear contracts prevent bikeshedding
- **Recoverable** - session checkpoints enable fearless experimentation

### 3. Commercial Viability

Three-layer system creates multiple revenue streams:
- **Studio** - developer tools and authoring
- **Edge** - operational runtime (SaaS)
- **Summit** - marketplace and partner ecosystem

### 4. Competitive Moat

AICR's unique advantages:
- **Self-awareness** - no other platform queries own architecture
- **Enforced governance** - not just documented, but validated
- **Pack system** - deterministic capability resolution
- **AI-native** - agents as first-class citizens

### 5. Future Extensibility

Architecture supports future capabilities:
- **Pack marketplace** - third-party capability distribution
- **Multi-region** - tenant placement strategies
- **Edge computing** - pack execution at edge
- **AI model fine-tuning** - platform-specific models

---

## Conclusion

**AICR** represents a **next-generation AI-native platform** that combines:

✅ **Self-Awareness** - Platform understands and documents itself
✅ **Governance by Enforcement** - Contracts validated at runtime, not just documented
✅ **Multi-Tenant by Design** - Tenant isolation enforced at database, type, and runtime levels
✅ **Deterministic Resolution** - Pack system ensures predictable capability activation
✅ **AI Agents as Partners** - Specialized agents with clear roles and persistent memory
✅ **Evidence-Based Operations** - Every claim requires proof, every action is audited
✅ **Three-Layer Value Chain** - Studio → Edge → Summit progression with no overlap
✅ **Database as Authority** - All state lives in database, not markdown files
✅ **Modern Infrastructure** - Neon branching + Vercel serverless + Prisma type safety
✅ **Complete Observability** - OpsChief + Pulse + Spine instrument all platform operations

The platform is **production-ready** with:
- 240-table database schema
- 19 platform modules
- 14 specialized AI agents
- 96 canonical documentation files
- Comprehensive governance framework
- Full CI/CD automation

**Strategic Position:** AICR is uniquely positioned as a **self-aware, AI-native platform factory** that enables organizations to build, operate, and commercialize software products at unprecedented speed and scale.

---

**Document Version:** 1.0
**Last Updated:** February 6, 2026
**Source:** [AICodeRally/AICR](https://github.com/AICodeRally/AICR) - `.claude/` governance directory
**Analysis Scope:** 4,600+ lines across 50+ governance and agent configuration documents
**Compiled By:** Claude Code (Sonnet 4.5)
