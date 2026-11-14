
export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    executiveSummary: string;
    status: "Live" | "Beta" | "Pre-Alpha";
    statusColor: string;
    tech: string[];
    href: string;
    repoUrl: string;
    demoUrl?: string; // Optional
    problem: string;
    problemDomain: {
        headline: string;
        points: string[];
    };
    outcome: string;
    solution: {
        headline: string;
        points: string[];
    };
    features: string[];
    detailedOverview: string;
    technicalDetails?: {
        frontend: string;
        backend: string;
        database: string;
        auth: string;
        storage: string;
        security: string;
        infrastructure?: string;
    };
    timeline?: {
        phase: string;
        date: string;
        details: string | string[];
    }[];
    roles?: {
        role: string;
        access: string;
    }[];
    multiTenantDetails?: {
        headline: string;
        structure: string[];
    };
    year?: number;
    category?: string;
    organization?: {
        name: string;
        slug: string;
        tagline: string;
    };
    metrics?: {
        label: string;
        value: string;
    }[];
}

export const projects: Project[] = [
    {
        id: 1,
        slug: "signalsmaster",
        title: "SignalsMaster",
        description: "Interactive naval signal flag training for Sea Cadets. Ready for Beta.",
        executiveSummary: "A mobile-friendly web app that helps Sea Cadets learn, practice, and master naval signal flags and pennants through interactive quizzes, ranked competition, and formal exams. Currently single-tenant and ready for Beta, with multi-tenant support in active development.",
        status: "Beta",
        statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500 ring-green-600/20",
        tech: ["Next.js 16", "TypeScript", "ShadCN/UI", "Framer Motion", "Convex", "Clerk"],
        href: "/projects/signalsmaster",
        repoUrl: "https://github.com/Oak-Signal/oaksignal-signalsmaster",
        demoUrl: "https://youtu.be/migVniG5wvs",
        problem: "Static, pen-and-paper signal flag testing gives slow feedback and little insight into cadet readiness.",
        problemDomain: {
            headline: "The Challenge: Static Signal Flag Learning",
            points: [
                "Signal flags are learned from static diagrams and pen-and-paper tests.",
                "Feedback is slow, so recognition improves slowly.",
                "Little motivation or sense of progress for cadets.",
                "Instructors lack data-driven insight into cadet readiness.",
                "Formal assessments are hard to run consistently and securely."
            ]
        },
        outcome: "An interactive, gamified platform with immediate feedback, ranked modes, secure exams, and instructor insight into readiness.",
        solution: {
            headline: "Our Solution: Interactive Precision Training",
            points: [
                "Interactive Practice: Customizable sessions (5-30+ flags) with \"Identify by Name\" and \"Match Meaning\" modes.",
                "Ranked Competitive Mode: Timed play where speed and accuracy determine fleet ranking.",
                "Formal Exams: Structured assessments with immutable results for instructor review.",
                "Reference Guide: Mobile-friendly encyclopedia of all standard naval flags and pennants.",
                "Security First: Anti-cheat measures for exams and automated secret scanning.",
                "Multi-Tenant Roadmap: Currently single-tenant; multi-tenant support is under development."
            ]
        },
        features: [
            "Interactive Practice Sessions",
            "Ranked Competitive Mode & Leaderboards",
            "Formal Exams with Anti-Cheat Measures",
            "Flag & Pennant Reference Guide",
            "Mobile-Friendly Design",
            "Multi-Tenant Support (In Development)"
        ],
        detailedOverview: "Signals Master helps Sea Cadets learn, practice, and master naval signal flags and pennants. Moving beyond static pen-and-paper testing, it offers immediate feedback, structured assessments, and competitive gamification, while giving instructors data-driven insight into cadet readiness. The app is ready for Beta. It is currently single-tenant, and work is underway to make it multi-tenant so multiple units can use it with isolated data.",
        technicalDetails: {
            frontend: "Next.js 16 (App Router, Turbopack), React, TypeScript, Tailwind CSS, ShadCN/UI, Framer Motion",
            backend: "Convex (Serverless Functions)",
            database: "Convex (Real-time Database)",
            auth: "Clerk (Authentication and User Management)",
            storage: "Convex (File Storage)",
            security: "Server-enforced exam session tokens, submission rate limiting, timing anomaly detection, Husky + gitleaks secret scanning"
        },
        timeline: [
            {
                phase: "Beta Readiness",
                date: "Current",
                details: "Single-tenant app ready for Beta"
            },
            {
                phase: "Closed Beta",
                date: "Upcoming",
                details: "Accessibility (WCAG AA), polish, mobile optimization, and performance work"
            },
            {
                phase: "Open Beta",
                date: "Upcoming",
                details: "Unit and E2E testing, cross-browser testing, and security audit"
            },
            {
                phase: "Multi-Tenant",
                date: "In Development",
                details: "Isolated spaces so multiple units can use the platform"
            }
        ],
        roles: [
            {
                role: "Cadets",
                access: "Practice, ranked mode, formal exams, reference guide, own progress"
            },
            {
                role: "Instructors/Admins",
                access: "Review exam results and cadet readiness insights"
            }
        ],
        multiTenantDetails: {
            headline: "Multi-Tenancy: In Development",
            structure: [
                "Today: Single-tenant deployment",
                "Next: Multi-tenant architecture with isolated data per unit"
            ]
        },
        year: 2026,
        category: "Training",
        organization: {
            name: "OakSignal",
            slug: "oaksignal",
            tagline: "Digital tools for cadet organizations"
        },
        metrics: [
            { label: "Stage", value: "Ready for Beta" },
            { label: "Modes", value: "Practice, Ranked, Exam" },
            { label: "Platform", value: "Web (Mobile-Friendly)" },
            { label: "Architecture", value: "Single-Tenant → Multi-Tenant" }
        ]
    },
    {
        id: 2,
        slug: "citadel",
        title: "CITADEL",
        description: "Centralized Inventory Tracking, Asset Distribution, Equipment & Logistics for cadet units. Pre-Alpha.",
        executiveSummary: "CITADEL (CIMS, the CITADEL Inventory Management System) is OakSignal's multi-tenant inventory platform that lets multiple cadet units each manage their own equipment, assets, and logistics with complete data isolation and role-based permissions. Currently in development (Pre-Alpha).",
        status: "Pre-Alpha",
        statusColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 ring-blue-600/20",
        tech: ["Next.js 16", "React 19", "TypeScript", "Convex", "Clerk", "Multi-Tenant"],
        href: "/projects/citadel",
        repoUrl: "https://github.com/Oak-Signal/oaksignal-citadel",
        problem: "Poor inventory visibility and reliance on paper tracking leads to lost equipment and lack of accountability.",
        problemDomain: {
            headline: "The Challenge: Logistics & Accountability",
            points: [
                "Poor inventory visibility across units making resource allocation difficult.",
                "Reliance on manual or paper-based tracking which is prone to human error.",
                "Lack of clear audit trails and accountability for equipment issuance.",
                "Difficulty managing equipment distribution, returns, and maintenance schedules.",
                "No real-time insights into supply levels leading to shortages or overstocking.",
                "No safe way to delegate inventory tasks to senior or supply cadets while maintaining oversight."
            ]
        },
        outcome: "A multi-tenant platform where each unit has complete visibility and control over its equipment, with permission-based roles and an append-only audit trail.",
        solution: {
            headline: "Our Solution: Multi-Tenant Inventory Management",
            points: [
                "Multi-Tenant Design: Multiple units manage inventory on one platform, with each unit's data isolated from every other unit.",
                "Inventory Catalogue: Serialized assets (radios, laptops) and bulk or consumable stock with thresholds.",
                "Issuance & Returns: Recorded issue and return transactions with condition and responsible staff.",
                "Cadet Self-Service: Cadets view what they hold, request equipment, and report damaged or missing items.",
                "Fail-Closed Authorization: Every server function checks identity, active membership, and a specific permission.",
                "Append-Only Audit Trail: Every change is logged in the same transaction, with no update or delete path."
            ]
        },
        features: [
            "Multi-Tenant Unit Isolation",
            "Unit-Scoped Roles & Permissions",
            "Inventory Catalogue (Serialized & Bulk)",
            "Issuance & Returns",
            "Cadet Self-Service Portal",
            "Append-Only Audit Trail"
        ],
        detailedOverview: "CITADEL, the CITADEL Inventory Management System (CIMS), is OakSignal's centralized inventory management platform for cadet units. It is multi-tenant, allowing multiple units to manage their inventory on one platform while each unit's data stays isolated from every other unit. Every action is controlled by the person's role within their unit, with separate Self-Service, Operator, and Platform portals. Access control, the inventory catalogue, issuance and returns, cadet self-service, and the audit trail are built. Dashboards and reports, and storage locations with stocktaking, are next. The project is in Pre-Alpha development.",
        technicalDetails: {
            frontend: "Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, shadcn/ui, Lucide",
            backend: "Convex (server functions, real-time subscriptions)",
            database: "Convex (unit-scoped indexes for multi-tenant isolation)",
            auth: "Clerk, with unit-scoped roles and permissions",
            storage: "Convex",
            security: "Fail-closed authorization on every function, unit isolation via per-unit indexes, append-only audit log, time-limited support grants",
            infrastructure: "Vercel, GitHub Actions CI"
        },
        timeline: [
            {
                phase: "Foundations & Core Access",
                date: "Complete",
                details: [
                    "Backend, authentication, authorization, audit, design system, and CI",
                    "Secure access with unit-scoped roles and permissions",
                    "Unit onboarding and platform-managed provisioning"
                ]
            },
            {
                phase: "Inventory Operations",
                date: "Complete",
                details: [
                    "Inventory catalogue for serialized assets and bulk stock",
                    "Equipment issuance and returns",
                    "Cadet self-service portal and equipment requests",
                    "Audit trail and accountability views"
                ]
            },
            {
                phase: "Dashboards & Reports",
                date: "Next",
                details: "Stock levels, overdue items, low-stock notifications, and exports"
            },
            {
                phase: "Locations & Stocktaking",
                date: "Planned",
                details: "Multiple storage locations, maintenance, and stocktakes"
            }
        ],
        roles: [
            {
                role: "Unit Administrator",
                access: "Manage the unit, adjust role permissions within platform limits"
            },
            {
                role: "Officer Staff / Logistics Officer / Civilian Staff",
                access: "Operator portal with actions filtered by individual permissions"
            },
            {
                role: "Senior Cadet / Instructor / Supply Cadet",
                access: "Operator portal; a Supply Cadet can issue equipment without managing roles or settings"
            },
            {
                role: "Junior Cadet",
                access: "Self-service portal: view held equipment, request items, report damaged or missing items"
            }
        ],
        multiTenantDetails: {
            headline: "Isolated Unit Inventories",
            structure: [
                "Unit: Equipment, Users, Roles, Audit Logs - isolated from every other unit",
                "Platform Area: OakSignal administrators provision units and see no unit data without a time-limited, verified support grant",
                "Shared Platform Infrastructure for all units"
            ]
        },
        year: 2026,
        category: "Inventory",
        organization: {
            name: "OakSignal",
            slug: "oaksignal",
            tagline: "Digital tools for cadet organizations"
        },
        metrics: [
            { label: "Stage", value: "Pre-Alpha" },
            { label: "Architecture", value: "Multi-Tenant" },
            { label: "Portals", value: "Self-Service, Operator, Platform" },
            { label: "Key Feature", value: "Audit Trail" }
        ]
    }
];
