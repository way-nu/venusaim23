import {SectionHeading} from "@/components/section-heading";
import {PROJECTS} from "./constants";
import {ProjectItem} from "./project-item";

export function ProjectsSection() {
    return (
        <section id="projects" className="relative z-[1] mx-auto max-w-[1120px] px-8 py-[70px]">
            <SectionHeading index="02 /" title="Projects"/>
            <div className="grid grid-cols-2 gap-[22px] max-[860px]:grid-cols-1">
                {PROJECTS.map((project) => (
                    <ProjectItem key={project.name} project={project}/>
                ))}
            </div>
        </section>
    );
}
