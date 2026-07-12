import type {Experience} from "../constants";

export function ExperienceItem({experience}: {experience: Experience}) {
    return (
        <div className="relative border-l border-white/9 pl-7">
            <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-accent shadow-[0_0_0_4px_var(--background),0_0_10px_var(--accent)]" />
            <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1.5">
                <h3 className="font-display text-xl font-bold sm:text-2xl">{experience.company}</h3>
                <span className="text-[13px] text-accent">{experience.role}</span>
            </div>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-faint">
                <span>{experience.dates}</span>
                <span>·</span>
                <span>{experience.location}</span>
            </div>
            <ul className="mt-3.5 flex flex-col gap-2">
                {experience.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-4.5 text-[13.5px] leading-relaxed text-muted">
                        <span className="absolute left-0 top-0 text-accent">▸</span>
                        {bullet}
                    </li>
                ))}
            </ul>
            <div className="mt-3.5 flex flex-wrap gap-1.5">
                {experience.tech.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/2 px-2.5 py-0.5 text-[11px] text-subtle"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
