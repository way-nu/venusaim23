import {SectionHeading} from "@/components/section-heading";
import {EXPERIENCES} from "./constants";
import {ExperienceItem} from "./experience-item";

export function ExperienceSection() {
    return (
        <section id="work" className="relative z-[1] mx-auto max-w-[1120px] px-8 py-[70px]">
            <SectionHeading index="01 /" title="Experience"/>
            <div className="flex flex-col gap-[18px]">
                {EXPERIENCES.map((job) => (
                    <ExperienceItem key={`${job.company}-${job.period}`} job={job}/>
                ))}
            </div>
        </section>
    );
}
