import {PROFILE} from "@/components/portfolio/constants";

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <div className="mt-7 flex flex-wrap items-center justify-between gap-2 text-xs text-ghost">
            <span>© {year} {PROFILE.name}</span>
            <span className="text-dim">built in a terminal, deployed with intent</span>
        </div>
    );
}
