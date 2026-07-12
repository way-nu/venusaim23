export type Experience = {
    company: string;
    role: string;
    dates: string;
    location: string;
    bullets: string[];
    tech: string[];
};

export const EXPERIENCES: Experience[] = [
    {
        company: "Fresh Gravity",
        role: "Consultant, Data Management",
        dates: "Mar 2026 — Present",
        location: "India",
        bullets: [
            "Extracted tightly-coupled validation rules into standalone, reusable entities — eliminating duplication across study configurations.",
            "Implemented audit logging across a legacy backend for full traceability of data changes.",
        ],
        tech: ["Backend", "Data Management", "Audit"],
    },
    {
        company: "nRev.ai",
        role: "Software Engineer",
        dates: "Jan 2025 — Mar 2026",
        location: "India",
        bullets: [
            "Architected Python services using Hexagonal Architecture to decouple core logic from external adapters.",
            "Orchestrated AWS Glue ETL pipelines processing 4TB compressed global LinkedIn data into S3 — all-in at ~$250.",
            "Built complex UI visualizations with React Flow in Next.js; managed EKS, CI/CD, and Slack + CloudWatch alerting.",
            "Pioneered an agentic SDLC with MCPs, Cursor Agents and Claude Code — 60% faster planning-to-PR.",
        ],
        tech: ["Python", "FastAPI", "AWS Glue", "EKS", "Next.js", "React Flow", "CI/CD"],
    },
    {
        company: "Betacrew Solutions",
        role: "Software Engineer",
        dates: "Sep 2023 — Jan 2025",
        location: "Mumbai, India (Remote)",
        bullets: [
            "Built a 0→1 full-stack platform that generated ₹800K in its first 18 days and grew exponentially.",
            "Shipped backend (Node/Express + PostgreSQL), web (React + Ionic) and native iOS + Android apps.",
            "Planned features, designed DB schemas and managed releases across web, Android and iOS.",
        ],
        tech: ["Node.js", "Express", "PostgreSQL", "React", "Ionic", "iOS", "Android"],
    },
    {
        company: "basys.ai",
        role: "Mobile Developer",
        dates: "May 2022 — Aug 2022",
        location: "Boston, USA (Remote)",
        bullets: [
            "Developed two Android apps in Java for providers and patients managing chronic disease.",
            "Implemented OpenCV models for Diabetic Retinopathy detection.",
        ],
        tech: ["Java", "Android", "OpenCV", "Firebase"],
    },
];
