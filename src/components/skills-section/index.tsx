import {SKILL_GROUPS} from "./constants";
import {SkillGroupCard} from "./skill-group-card";

export function SkillsSection() {
    return (
        <section id="skills" className="relative z-10 mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-10 sm:py-24">
            <div className="mb-3.5 text-[13px] text-accent">{"// 03 — stack"}</div>
            <h2 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Tools of the trade
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SKILL_GROUPS.map((group) => (
                    <SkillGroupCard key={group.label} group={group} />
                ))}
            </div>
        </section>
    );
}
