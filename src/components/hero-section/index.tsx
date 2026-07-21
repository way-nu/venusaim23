import {Fragment} from "react";
import {HERO} from "./constants";
import {Stats} from "./stats";
import {Terminal} from "./terminal";

export function HeroSection() {
    return (
        <section
            id="home"
            className="relative z-[1] mx-auto max-w-[1120px] px-8 pb-[70px] pt-[90px]"
        >
            <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-14 max-[860px]:grid-cols-1">
                <div>
          <span
              className="mb-[26px] inline-flex items-center gap-2 rounded-full border border-accent/[0.28] bg-accent/[0.04] px-3 py-1.5 font-mono text-[12.5px] text-accent">
            <span
                className="h-[7px] w-[7px] rounded-full bg-accent shadow-[0_0_10px_#00e08a]"/>
              {HERO.badge}
          </span>

                    <h1 className="mb-5 text-[clamp(42px,6vw,74px)] font-semibold leading-[1.02] tracking-[-0.02em]">
                        {HERO.nameLines.map((line, i) => (
                            <Fragment key={line}>
                                {i > 0 && <br/>}
                                {line}
                            </Fragment>
                        ))}
                        <span className="text-accent">.</span>
                    </h1>

                    <p className="mb-[34px] max-w-[520px] text-[clamp(17px,2vw,20px)] leading-[1.55] text-muted">
                        {HERO.intro.map((seg, i) =>
                            seg.emphasis === "strong" ? (
                                <span key={i} className="text-foreground">{seg.text}</span>
                            ) : seg.emphasis === "accent" ? (
                                <span key={i} className="text-accent">{seg.text}</span>
                            ) : (
                                <Fragment key={i}>{seg.text}</Fragment>
                            ),
                        )}
                    </p>

                    <div className="flex flex-wrap gap-[14px]">
                        <a
                            href={HERO.primaryCta.href}
                            className="rounded-[10px] border border-accent/55 px-[22px] py-[13px] font-mono text-sm text-accent transition-all hover:bg-accent hover:text-[#06110c]"
                        >
                            {HERO.primaryCta.label}
                        </a>
                        <a
                            href={HERO.secondaryCta.href}
                            className="rounded-[10px] border border-white/[0.14] px-[22px] py-[13px] font-mono text-sm text-muted transition-colors hover:text-foreground"
                        >
                            {HERO.secondaryCta.label}
                        </a>
                    </div>
                </div>

                <Terminal/>
            </div>

            <Stats/>
        </section>
    );
}
