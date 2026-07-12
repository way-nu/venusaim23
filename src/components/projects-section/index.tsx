import {ACHIEVEMENTS, PROJECTS} from "./constants";
import {AchievementsStrip} from "./achievements-strip";
import {ProjectCard} from "./project-card";

export function ProjectsSection() {
    return (
        <section id="projects" className="relative z-10 mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-10 sm:py-24">
            <div className="mb-3.5 text-[13px] text-accent">{"// 04 — projects"}</div>
            <h2 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Things I&apos;ve made for fun
            </h2>
            <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
            <AchievementsStrip achievements={ACHIEVEMENTS} />
        </section>
    );
}
