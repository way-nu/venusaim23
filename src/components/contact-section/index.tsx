import {PROFILE} from "@/components/portfolio/constants";
import {SiteFooter} from "@/components/site-footer";

export function ContactSection() {
    return (
        <section
            id="contact"
            className="relative z-10 mx-auto max-w-5xl scroll-mt-20 px-5 py-20 pb-9 sm:px-10 sm:py-24 sm:pb-11"
        >
            <div className="rounded-[18px] border border-white/9 bg-radial-[at_50%_0%] from-accent/8 via-transparent to-transparent to-70% p-8 text-center sm:p-14">
                <div className="mb-4 text-[13px] text-accent">{"// 05 — say hello"}</div>
                <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                    Let&apos;s build something.
                </h2>
                <p className="mx-auto mt-4.5 max-w-[40ch] text-[15px] leading-relaxed text-muted">
                    Open to full-stack, backend and platform roles — plus interesting agentic-AI problems.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                        href={`mailto:${PROFILE.email}`}
                        className="rounded-lg bg-accent px-6.5 py-3.5 text-sm font-medium text-background hover:opacity-90"
                    >
                        {PROFILE.email}
                    </a>
                    <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/14 px-6 py-3.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/14 px-6 py-3.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
                    >
                        GitHub ↗
                    </a>
                </div>
                <div className="mt-6.5 text-[12.5px] text-faint">
                    {PROFILE.phone} · {PROFILE.location}
                </div>
            </div>
            <SiteFooter />
        </section>
    );
}
