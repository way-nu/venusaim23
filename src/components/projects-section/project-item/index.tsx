import {Reveal} from "@/components/reveal";
import type {Project} from "../constants";

export function ProjectItem({project}: { project: Project }) {
    return (
        <Reveal
            as="article"
            className="rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.02] to-transparent p-[30px] transition-[transform,border-color] duration-[250ms] hover:-translate-y-1 hover:border-accent/45"
        >
            <div className="mb-4 flex items-center justify-between">
        <span
            className="rounded-full border border-accent/[0.28] bg-accent/[0.05] px-[11px] py-[5px] font-mono text-xs text-accent">
          {project.status}
        </span>
                <a
                    href={project.href}
                    target="_blank"
                    rel="noopener"
                    className="font-mono text-xs text-dim transition-colors hover:text-foreground"
                >
                    {project.source} ↗
                </a>
            </div>

            <h3 className="mb-1 text-[23px] font-semibold">{project.name}</h3>
            <div className="mb-4 font-mono text-[12.5px] text-faint">
                {project.tagline} · {project.period}
            </div>

            <ul className="flex flex-col gap-2.5">
                {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-[11px] text-[14.5px] leading-[1.5] text-muted">
                        <span className="flex-none font-mono text-accent">▸</span>
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-[18px] flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11.5px] text-dim"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Reveal>
    );
}
