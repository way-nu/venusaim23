import {SITE} from "@/config/site";
import {row, sp} from "./utils";

export type Tone = "accent" | "dim" | "soft" | "head" | "error";
export type Span = { text: string; tone?: Tone };
/** A single terminal line: a sequence of tone-tagged spans (empty = blank line). */
export type Line = Span[];

export const RESUME_PATH = SITE.resumeHref;

/** Title bar text, e.g. "venu@portfolio: ~/about". */
export const TERMINAL_TITLE = `${SITE.handle.user}@${SITE.handle.host}: ~/about`;

/** [command, one-line description] — drives the `help` listing and defines the visible commands. */
export const COMMAND_META: [string, string][] = [
    ["whoami", "who I am"],
    ["about", "the short pitch"],
    ["skills", "my toolkit"],
    ["experience", "work history"],
    ["projects", "things I’ve built"],
    ["stats", "the numbers"],
    ["contact", "reach me"],
    ["resume", "download my CV"],
    ["clear", "wipe the screen"],
];

const HELP_OUTPUT: Line[] = [
    [sp("available commands — click or type:", "dim")],
    ...COMMAND_META.map(([cmd, desc]) => row(`  ${cmd.padEnd(11)}`, desc)),
];

/** Static output for each command. Side-effect commands (resume, clear) are handled in the hook. */
export const OUTPUTS: Record<string, Line[]> = {
    help: HELP_OUTPUT,
    whoami: [
        [sp(SITE.name, "head"), sp(` — ${SITE.role}`)],
        [sp(`${SITE.location.city} · 3 yrs · open to senior + freelance roles`, "dim")],
    ],
    about: [
        [sp("I build "), sp("0→1 products", "head"), sp(", cloud-native systems, and")],
        [sp("large-scale data pipelines — running an "), sp("agentic-AI", "accent"), sp(" SDLC")],
        [sp("that cut planning-to-PR time by 60%.")],
    ],
    skills: [
        row("backend  ", "Node · Express · FastAPI · Python · AWS (EKS/Glue/S3)"),
        row("agentic  ", "Claude Code · Cursor · MCPs · Agentic Planning"),
        row("frontend ", "Next.js · React · React Flow · Ionic · TypeScript"),
        row("tools    ", "Docker · Azure DevOps · Firebase · OpenCV"),
    ],
    experience: [
        row("2026—now ", "Fresh Gravity · Consultant, Data Management"),
        row("2025—26  ", "nRev.ai · Software Engineer"),
        row("2023—25  ", "Betacrew · Software Engineer"),
        row("2022     ", "basys.ai · Mobile Developer"),
        [sp("→ scroll down for the full history", "dim")],
    ],
    projects: [
        [sp("Rupiverse", "head"), sp(" — open-source finance app w/ a local 3B LLM")],
        [sp("Todogenix", "head"), sp(" — 🏆 1st-place voice assistant")],
        [sp("github.com/way-nu", "dim")],
    ],
    stats: [
        row("₹800K ", "revenue in 18 days"),
        row("4TB   ", "data processed on AWS"),
        row("60%   ", "faster SDLC (agentic)"),
        row("4×    ", "hackathons won"),
    ],
    contact: [
        row("email    ", SITE.email),
        row("github   ", "github.com/way-nu"),
        row("linkedin ", "linkedin.com/in/venusaim000"),
        row("x        ", "x.com/venusaim"),
    ],
};

export const ALIASES: Record<string, string> = {
    who: "whoami",
    work: "experience",
    exp: "experience",
    me: "about",
    cv: "resume",
    ls: "help",
    "?": "help",
    socials: "contact",
    links: "contact",
    numbers: "stats",
};

export const BOOT_LINES: Line[] = [
    [sp(`${SITE.handle.user}@${SITE.handle.host}`, "accent"), sp(":"), sp("~", "dim"), sp(" booting…")],
    [sp(SITE.name, "head"), sp(` — ${SITE.role}`)],
    [sp("0→1 products · cloud-native · agentic AI", "dim")],
];

export const HELP_HINT: Line = [
    sp("type ", "dim"),
    sp("help", "accent"),
    sp(" to get started ↴", "dim"),
];

export const RESUME_OUTPUT: Line[] = [[sp("↓ opening resume.pdf …", "accent")]];
