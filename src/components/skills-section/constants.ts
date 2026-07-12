export type SkillCategory = {
    label: string;
    items: string[];
};

export const SKILLS: SkillCategory[] = [
    {
        label: "backend & cloud",
        items: [
            "Node.js",
            "Express",
            "FastAPI",
            "Python",
            "Java",
            "SQL",
            "Hexagonal Arch",
            "AWS (EKS, Glue, Lambda, S3)",
            "Prisma",
            "Knex.js",
            "Redis",
            "Supabase",
            "CI/CD",
        ],
    },
    {
        label: "agentic AI",
        items: [
            "Claude Code",
            "Cursor Agents",
            "Agentic Planning",
            "MCPs — GitHub, Figma, Browser, Coda",
        ],
    },
    {
        label: "web & frontend",
        items: [
            "Next.js",
            "React",
            "React Flow",
            "Ionic React",
            "Tailwind CSS",
            "TypeScript",
            "JavaScript",
        ],
    },
    {
        label: "tools & mobile",
        items: [
            "Git",
            "Docker",
            "Azure DevOps",
            "Postman",
            "Android Studio",
            "XCode",
            "Firebase",
            "OpenCV",
        ],
    },
];
