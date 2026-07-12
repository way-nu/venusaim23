import {Clock} from "./clock";
import {NAV_LINKS} from "./constants";
import {SITE} from "@/config/site";

export function SiteNav() {
    return (
        <nav
            className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.07] bg-background/70 px-8 py-4 backdrop-blur-md">
            <a href="#home" className="flex items-center gap-2.5 text-foreground">
        <span
            className="grid h-[34px] w-[34px] place-items-center rounded-lg border border-accent/50 font-mono text-[15px] font-bold text-accent">
          {SITE.monogram}
        </span>
                <span className="font-mono text-[13px] tracking-[0.02em] text-dim">
          {SITE.handle.user}<span className="text-accent">@</span>{SITE.handle.host}
        </span>
            </a>

            <div className="flex items-center gap-[30px] font-mono text-[13px] max-[860px]:hidden">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-dim transition-colors hover:text-foreground"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <Clock/>
                <a
                    href={SITE.resumeHref}
                    target="_blank"
                    rel="noopener"
                    className="rounded-lg border border-accent/55 px-3.5 py-2 font-mono text-[12.5px] text-accent transition-all hover:bg-accent hover:text-[#06110c]"
                >
                    resume ↗
                </a>
            </div>
        </nav>
    );
}
