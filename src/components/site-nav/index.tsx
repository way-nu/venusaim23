import {PROFILE} from "@/components/portfolio/constants";
import {NAV_LINKS} from "./constants";

export function SiteNav() {
    return (
        <nav className="sticky top-0 z-50 border-b border-white/7 bg-background/72 backdrop-blur-md">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-3.5 sm:px-10">
                <a href="#top" className="flex items-center gap-2.5 text-sm font-medium">
                    <span className="size-2.5 animate-pulse rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                    <span className="text-accent">venu</span>
                    <span className="text-faint">@portfolio:~$</span>
                </a>
                <div className="flex flex-wrap items-center gap-3 text-[13px] sm:gap-6">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className="text-muted hover:text-accent">
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={PROFILE.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-accent px-3.5 py-1.5 text-accent hover:bg-accent hover:text-background"
                    >
                        resume ↗
                    </a>
                </div>
            </div>
        </nav>
    );
}
