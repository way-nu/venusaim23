import type {Project} from "../constants";

export function ProjectCard({project}: {project: Project}) {
    return (
        <div className="flex min-h-[230px] flex-col rounded-2xl border border-white/9 bg-gradient-to-b from-white/2.5 to-transparent p-6.5 hover:border-accent/40">
            <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-bold">{project.name}</h3>
                <span className="whitespace-nowrap rounded-full border border-accent/30 px-2 py-0.5 text-[11px] text-accent">
                    {project.tag}
                </span>
            </div>
            <div className="mt-1 text-xs text-faint">{project.period}</div>
            <p className="mt-3.5 flex-1 text-[13.5px] leading-relaxed text-muted">{project.desc}</p>
            <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-md border border-white/10 px-2.5 py-0.5 text-[11px] text-subtle"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
