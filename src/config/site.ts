/**
 * Single source of truth for personal / identity details reused across the
 * site (nav, hero, terminal, contact, page metadata). Update these once and the
 * change propagates everywhere. Section-specific copy lives in each section's
 * own `constants.ts`.
 */
export const SITE = {
    /** Full name — hero heading, terminal, footer, page title. */
    name: "Venu Sai Madisetti",
    /** Hero heading split across two lines. */
    nameLines: ["Venu Sai", "Madisetti"] as const,
    /** Monogram shown in the nav badge. */
    monogram: "V",
    /** Professional title. */
    role: "Full-stack Engineer",
    /** Renders as "venu@portfolio" in the nav brand and terminal prompt/title. */
    handle: {user: "venu", host: "portfolio"},
    /** Contact email — contact section + terminal `contact` command. */
    email: "venusaim23@gmail.com",
    /** Route to the résumé — rewritten to public/docs/resume.pdf in next.config.ts. */
    resumeHref: "/resume",
    /** Availability line in the hero badge. */
    availability: "available for senior & freelance roles",
    /** Where you are — footer + (statically) the terminal `whoami`. */
    location: {city: "Pune, India", country: "India", timezone: "IST"},
    /** Plain-text bio used for the page <meta> description. */
    bio: "Full-stack engineer building 0→1 products, cloud-native systems, and large-scale data pipelines with an agentic-AI SDLC.",
};
