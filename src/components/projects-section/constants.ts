export type Project = {
    status: string;
    source: string;
    href: string;
    name: string;
    tagline: string;
    period: string;
    bullets: string[];
    tags: string[];
};

export const PROJECTS: Project[] = [
    {
        status: "WIP · Open Source",
        source: "GitHub",
        href: "https://github.com/way-nu",
        name: "Rupiverse",
        tagline: "Personal finance management",
        period: "Jun 2026 — Present",
        bullets: [
            "A multi-user expense platform with hierarchical category trees.",
            "Cached-balance architecture with a nightly self-healing reconciliation job — avoids expensive on-read aggregation while guaranteeing correctness.",
            "A locally-hosted 3B Ollama LLM categorizes transactions — zero inference cost, financial data stays fully private.",
        ],
        tags: ["Node.js", "Ollama", "LLM", "Postgres"],
    },
    {
        status: "🏆 1st Place",
        source: "Devpost",
        href: "https://devpost.com",
        name: "Todogenix",
        tagline: "Smart voice assistant",
        period: "Dec 2020",
        bullets: [
            "Won 1st place at the hackathon for an innovative task-management app with seamless voice reminders.",
            "One of four hackathon wins — also organized IIIT Trichy’s first hackathon to promote \"Learn By Doing\".",
        ],
        tags: ["Voice UX", "Mobile", "Hackathon"],
    },
];
