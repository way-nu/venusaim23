export type SkillGroup = {
    label: string;
    items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
    {
        label: "backend & cloud",
        items: [
            "Node.js",
            "Express",
            "FastAPI",
            "Python",
            "Java",
            "SQL",
            "AWS EKS/Glue/Lambda/S3",
            "Hexagonal Arch",
            "Prisma",
            "Knex.js",
            "Redis",
            "Supabase",
            "CI/CD",
        ],
    },
    {
        label: "agentic ai",
        items: [
            "Cursor Agents",
            "Claude Code",
            "Agentic Planning",
            "MCP · GitHub",
            "MCP · Figma",
            "MCP · Browser",
            "MCP · Coda",
        ],
    },
    {
        label: "web / frontend",
        items: ["Next.js", "React", "React Flow", "Ionic React", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
        label: "tools & mobile",
        items: ["Git", "Docker", "Azure DevOps", "Postman", "Android Studio", "XCode", "Firebase", "OpenCV"],
    },
];
