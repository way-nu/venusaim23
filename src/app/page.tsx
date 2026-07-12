import {GridBackdrop} from "@/components/grid-backdrop";
import {CursorSpotlight} from "@/components/cursor-spotlight";
import {SiteNav} from "@/components/site-nav";
import {HeroSection} from "@/components/hero-section";
import {ExperienceSection} from "@/components/experience-section";
import {ProjectsSection} from "@/components/projects-section";
import {SkillsSection} from "@/components/skills-section";
import {ContactSection} from "@/components/contact-section";

export default function Home() {
    return (
        <div className="relative">
            <GridBackdrop/>
            <CursorSpotlight/>
            <SiteNav/>
            <main>
                <HeroSection/>
                <ExperienceSection/>
                <ProjectsSection/>
                <SkillsSection/>
                <ContactSection/>
            </main>
        </div>
    );
}
