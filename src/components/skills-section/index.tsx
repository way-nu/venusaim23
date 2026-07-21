import {Reveal} from "@/components/reveal";
import {SectionHeading} from "@/components/section-heading";
import {SKILLS} from "./constants";

export function SkillsSection() {
    return (
        <section id="skills" className="relative z-[1] mx-auto max-w-[1120px] px-8 py-[70px]">
            <SectionHeading index="03 /" title="Toolkit"/>
            <div className="grid grid-cols-2 gap-[18px] max-[860px]:grid-cols-1">
                {SKILLS.map((category) => (
                    <Reveal
                        key={category.label}
                        className="rounded-[14px] border border-white/[0.09] bg-white/[0.015] px-7 py-[26px]"
                    >
                        <div className="mb-4 font-mono text-[13px] text-accent">
                            {category.label}
                        </div>
                        <div className="flex flex-wrap gap-[9px]">
                            {category.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-sm text-soft"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
