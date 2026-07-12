import {EXPERIENCES} from "./constants";
import {ExperienceItem} from "./experience-item";

export function ExperienceSection() {
    return (
        <section id="work" className="relative z-10 mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-10 sm:py-24">
            <div className="mb-3.5 text-[13px] text-accent">{"// 02 — experience"}</div>
            <h2 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Where I&apos;ve built
            </h2>
            <div className="flex flex-col gap-9">
                {EXPERIENCES.map((experience) => (
                    <ExperienceItem key={experience.company} experience={experience} />
                ))}
            </div>
        </section>
    );
}
