import {Reveal} from "@/components/reveal";
import type {Experience} from "../constants";

export function ExperienceItem({job}: { job: Experience }) {
    return (
        <Reveal
            as="article"
            className="group relative overflow-hidden rounded-[14px] border border-white/[0.09] bg-white/[0.015] px-[30px] py-[28px] transition-colors hover:border-accent/40"
        >
            <div
                className="absolute left-0 top-0 h-0 w-0.5 bg-accent transition-[height] duration-[400ms] group-hover:h-full"/>

            <div className="grid grid-cols-[180px_1fr] gap-[26px] max-[860px]:grid-cols-1">
                <div>
                    <div className="font-mono text-xs text-accent">{job.period}</div>
                    <div className="mt-1.5 font-mono text-[11.5px] text-faint">
                        {job.location}
                    </div>
                </div>

                <div>
                    <h3 className="text-[21px] font-semibold">
                        {job.role} <span className="font-normal text-faint">·</span>{" "}
                        <span className="text-accent">{job.company}</span>
                    </h3>

                    <ul className="mt-4 flex flex-col gap-2.5">
                        {job.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex gap-[11px] text-[15px] leading-[1.5] text-muted">
                                <span className="flex-none font-mono text-accent">▸</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-[18px] flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11.5px] text-dim"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
