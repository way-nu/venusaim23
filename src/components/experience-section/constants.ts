export type Experience = {
    period: string;
    location: string;
    role: string;
    company: string;
    bullets: string[];
    tags: string[];
};

export const EXPERIENCES: Experience[] = [
    {
        period: "Mar 2026 — Present",
        location: "Pune, MH · India",
        role: "Consultant, Data Management",
        company: "Fresh Gravity",
        bullets: [
            "Designed a backend module that extracts tightly-coupled validation rules into standalone, reusable entities — eliminating duplication across study configurations.",
            "Implemented audit logging across a legacy backend to enable full traceability of data changes.",
        ],
        tags: ["Data Management", "Backend", "Audit Logging"],
    },
    {
        period: "Jan 2025 — Mar 2026",
        location: "Pune, MH · India",
        role: "Software Engineer",
        company: "nRev.ai",
        bullets: [
            "Architected Python services using Hexagonal Architecture to decouple core logic from external adapters.",
            "Orchestrated AWS Glue ETL pipelines processing 4TB of compressed global datasets into S3 at $250 total cost, trials included.",
            "Built complex UI visualizations with React Flow in Next.js, and managed AWS EKS + CI/CD with Slack alerting on CloudWatch logs.",
            "Pioneered an Agentic SDLC using MCPs, Cursor agents, and Claude Code — a 60% increase in velocity from planning to PR review.",
        ],
        tags: ["Python", "FastAPI", "AWS Glue", "EKS", "Next.js", "React Flow", "Agentic AI"],
    },
    {
        period: "Sep 2023 — Jan 2025",
        location: "Mumbai, MH · Remote",
        role: "Software Engineer",
        company: "Betacrew Solutions",
        bullets: [
            "Built a 0→1 full-stack platform generating ₹800K in its first 18 days and growing.",
            "Developed the backend (Node/Express + PostgreSQL), frontend (React + Ionic), and native iOS & Android apps.",
            "Planned product features, designed database schemas, and managed releases across web, Android, and iOS.",
        ],
        tags: ["Node.js", "Express", "PostgreSQL", "React", "Ionic", "iOS", "Android"],
    },
    {
        period: "Dec 2021 — Mar 2023",
        location: "Sunnyvale, CA · Remote",
        role: "Technical Guest Author & Student Partner",
        company: "Alan AI",
        bullets: [
            "Point of contact for all Alan AI hackathons and events at my institute, and technical guest author for the platform.",
            "Helped developers build voice assistants for mobile & web apps in days using the Alan platform.",
        ],
        tags: ["Voice AI", "Developer Advocacy", "Technical Writing"],
    },
    {
        period: "May 2022 — Aug 2022",
        location: "Boston, MA · Remote",
        role: "Mobile Developer",
        company: "basys.ai",
        bullets: [
            "Built two Android apps (Java) for providers and users to track vitals and surface AI-driven care recommendations.",
            "Implemented OpenCV models for Diabetic Retinopathy detection; integrated Firebase, Google Cloud auth, and Google Fit.",
        ],
        tags: ["Android", "Java", "OpenCV", "Firebase", "Flask"],
    },
    {
        period: "Dec 2020 — May 2021",
        location: "IIIT Naya Raipur · India",
        role: "Android App Developer",
        company: "IoT Labs",
        bullets: [
            "Built an Android app from scratch for automated anemia prediction in smart-healthcare applications using OpenCV.",
        ],
        tags: ["Android", "OpenCV", "IoT"],
    },
];
