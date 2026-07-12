import type {Line, Span, Tone} from "./constants";

/** Build a tone-tagged span. Omitting the tone renders in the default "soft" color. */
export const sp = (text: string, tone?: Tone): Span => ({text, tone});

/** A key/value row: accent key, two spaces, dim value — the terminal's workhorse layout. */
export const row = (key: string, value: string): Line => [
    sp(key, "accent"),
    sp(`  ${value}`, "dim"),
];

const TONE_CLASS: Record<Tone, string> = {
    accent: "text-accent",
    dim: "text-faint",
    soft: "text-soft",
    head: "text-foreground",
    error: "text-[#ff7a6c]",
};

export const toneClass = (tone?: Tone) => TONE_CLASS[tone ?? "soft"];

/** Fallback output for an unrecognized command. */
export const notFoundOutput = (cmd: string): Line[] => [
    [sp(`command not found: ${cmd}`, "error")],
    [sp("type ", "dim"), sp("help", "accent"), sp(" to see what I respond to", "dim")],
];
