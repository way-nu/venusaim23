export type Project = {
    name: string;
    tag: string;
    period: string;
    desc: string;
    tech: string[];
};

export type Achievement = {
    big: string;
    label: string;
};

export const PROJECTS: Project[] = [
    {
        name: "Rupiverse",
        tag: "OSS · WIP",
        period: "Jun 2026 — Present",
        desc: "A multi-user personal-finance platform with hierarchical category trees. Cached-balance architecture with a nightly self-healing reconciliation job, plus a locally-hosted 3B Ollama LLM for zero-cost, fully-private transaction categorization.",
        tech: ["Next.js", "Ollama", "PostgreSQL", "Redis"],
    },
    {
        name: "Todogenix",
        tag: "1st place",
        period: "Dec 2020",
        desc: "Smart voice-assistant task manager that won 1st place at a hackathon for its innovative task management and seamless voice-reminders.",
        tech: ["Voice UX", "Android", "Hackathon"],
    },
];

export const ACHIEVEMENTS: Achievement[] = [
    {big: "4×", label: "hackathons won"},
    {big: "1st", label: "IIIT Trichy science workshop"},
    {big: "Founder", label: "IIIT Trichy's first hackathon"},
];
