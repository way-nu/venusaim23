import {AboutSection} from "@/components/about-section";
import {AmbientBackground} from "@/components/ambient-background";
import {ContactSection} from "@/components/contact-section";
import {ExperienceSection} from "@/components/experience-section";
import {HeroSection} from "@/components/hero-section";
import {ProjectsSection} from "@/components/projects-section";
import {SiteNav} from "@/components/site-nav";
import {SkillsSection} from "@/components/skills-section";

export function Portfolio() {
    return (
        <div className="relative min-h-screen flex-1 overflow-x-hidden bg-background">
            <AmbientBackground />
            <SiteNav />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}
