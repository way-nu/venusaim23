import {SITE} from "@/config/site";

export type SocialLink = {
    label: string;
    href: string;
};

export const EMAIL = SITE.email;

export const SOCIAL_LINKS: SocialLink[] = [
    {label: "github/way-nu", href: "https://github.com/way-nu"},
    {label: "linkedin/venusaim000", href: "https://linkedin.com/in/venusaim000"},
    {label: "x/@venusaim", href: "https://x.com/venusaim"},
];

export const CONTACT = {
    heading: "Let's build something",
    subtitle:
        "Open to senior backend roles and freelance work. The fastest way to reach me is email.",
    footer: [
        `2026 ${SITE.name}`,
        `${SITE.location.country} — ${SITE.location.timezone}`,
        "built from scratch, no template",
    ],
};
