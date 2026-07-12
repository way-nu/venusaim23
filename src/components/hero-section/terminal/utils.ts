import {HELP_LINES, TerminalLine} from "./constants";

export function sleep(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export function execCommand(rawCommand: string): TerminalLine[] | "CLEAR" {
    const command = rawCommand.trim().toLowerCase();

    switch (command) {
        case "help":
            return HELP_LINES;
        case "whoami":
            return [
                {kind: "out", text: "Venu Sai Madisetti — Full-stack Engineer"},
                {kind: "muted", text: "IIIT Trichy CSE (8.3) · India"},
            ];
        case "about":
            return [
                {kind: "out", text: "0→1 product engineer. I ship revenue-generating"},
                {kind: "out", text: "platforms and run an agentic-AI SDLC."},
            ];
        case "skills":
            return [
                {kind: "accent", text: "backend/cloud"},
                {kind: "muted", text: "  node · fastapi · aws · python · redis"},
                {kind: "accent", text: "agentic-ai"},
                {kind: "muted", text: "  cursor · claude code · mcps"},
                {kind: "accent", text: "frontend"},
                {kind: "muted", text: "  next.js · react · react-flow · ts"},
            ];
        case "work":
        case "experience":
            return [
                {kind: "out", text: "fresh gravity   consultant, data mgmt   2026→ now"},
                {kind: "out", text: "nrev.ai         software engineer       2025→ 2026"},
                {kind: "out", text: "betacrew        software engineer       2023→ 2025"},
                {kind: "out", text: "basys.ai        mobile developer        2022"},
            ];
        case "projects":
            return [
                {kind: "out", text: "rupiverse   personal-finance platform (OSS, WIP)"},
                {kind: "out", text: "todogenix   voice assistant — hackathon winner"},
            ];
        case "contact":
        case "socials":
            return [
                {kind: "out", text: "email     venusaim23@gmail.com"},
                {kind: "out", text: "github    github.com/way-nu"},
                {kind: "out", text: "linkedin  in/venusaim000"},
            ];
        case "resume":
            return [{kind: "accent", text: "hit the “resume” button up top ↗"}];
        case "ls":
            return [{kind: "muted", text: "about  work  skills  projects  contact"}];
        case "clear":
            return "CLEAR";
        case "sudo":
            return [{kind: "err", text: "permission denied: you're already a 10x visitor."}];
        case "":
            return [];
        default:
            return [
                {kind: "err", text: `command not found: ${command}`},
                {kind: "muted", text: "type `help` for options"},
            ];
    }
}
