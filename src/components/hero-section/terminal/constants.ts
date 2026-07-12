export type TerminalLineKind = "cmd" | "out" | "muted" | "accent" | "err";

export type TerminalLine = {
    kind: TerminalLineKind;
    text: string;
};

export const KIND_CLASS: Record<TerminalLineKind, string> = {
    cmd: "text-foreground",
    out: "text-muted",
    muted: "text-faint",
    accent: "text-accent",
    err: "text-err",
};

export const BOOT_COMMAND = "whoami";
export const TYPE_CHAR_DELAY_MS = 55;
export const TYPE_COMMAND_PAUSE_MS = 320;
export const BOOT_START_DELAY_MS = 550;
export const BOOT_END_DELAY_MS = 120;

export const INTRO_LINES: TerminalLine[] = [
    {kind: "out", text: "Venu Sai Madisetti — Full-stack Engineer (3 yrs)"},
    {kind: "muted", text: "India · 0→1 products · cloud-native · agentic AI"},
    {kind: "out", text: ""},
    {kind: "accent", text: "Type `help` to explore, or just scroll ↓"},
];

export const HELP_LINES: TerminalLine[] = [
    {kind: "out", text: "available commands:"},
    {kind: "muted", text: "  whoami   about      skills"},
    {kind: "muted", text: "  work     projects   contact"},
    {kind: "muted", text: "  resume   clear"},
];
