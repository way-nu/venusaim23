import {SITE} from "@/config/site";

/** A run of intro text; `emphasis` picks a highlight color, otherwise inherits. */
export type IntroSegment = { text: string; emphasis?: "strong" | "accent" };

export type Cta = { label: string; href: string };

export const HERO = {
    badge: SITE.availability,
    nameLines: SITE.nameLines,
    intro: [
        {text: "Full-stack engineer building "},
        {text: "0→1 products", emphasis: "strong"},
        {text: ", cloud-native systems, and large-scale data pipelines — with an "},
        {text: "agentic-AI", emphasis: "accent"},
        {text: " SDLC that ships fast."},
    ] as IntroSegment[],
    primaryCta: {label: "view work →", href: "#work"} as Cta,
    secondaryCta: {label: "get in touch", href: "#contact"} as Cta,
};
