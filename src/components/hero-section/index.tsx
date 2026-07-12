import {PROFILE} from "@/components/portfolio/constants";
import {STATS} from "./constants";
import {StatsGrid} from "./stats-grid";
import {Terminal} from "./terminal";

export function HeroSection() {
    return (
        <header id="top" className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:px-10 sm:py-24">
            <div className="flex flex-wrap items-center gap-10 sm:gap-16">
                <div className="min-w-[300px] flex-1 basis-[340px]">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/28 bg-accent/5 px-3 py-1.5 text-[12.5px] text-accent">
                        <span className="size-1.5 rounded-full bg-accent" />
                        available for select work
                    </div>
                    <div className="mb-2.5 text-[13px] text-faint">{"// full-stack engineer · india"}</div>
                    <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                        Venu Sai
                        <br />
                        Madisetti
                    </h1>
                    <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-muted sm:text-base">
                        I build <span className="text-foreground">0→1 products</span>, cloud-native
                        architectures and large-scale data pipelines — then run an{" "}
                        <span className="text-accent">agentic-AI SDLC</span> that ships them faster.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <a
                            href="#work"
                            className="rounded-lg bg-accent px-5.5 py-3 text-sm font-medium text-background hover:opacity-90"
                        >
                            view work →
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg border border-white/14 px-5.5 py-3 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
                        >
                            get in touch
                        </a>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-subtle">
                        <a
                            href={PROFILE.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-white/14 pb-0.5"
                        >
                            github ↗
                        </a>
                        <a
                            href={PROFILE.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-white/14 pb-0.5"
                        >
                            linkedin ↗
                        </a>
                        <a href={`mailto:${PROFILE.email}`} className="border-b border-white/14 pb-0.5">
                            {PROFILE.email}
                        </a>
                    </div>
                </div>

                <div className="min-w-[300px] flex-1 basis-[360px]">
                    <Terminal />
                </div>
            </div>

            <StatsGrid stats={STATS} />
        </header>
    );
}
