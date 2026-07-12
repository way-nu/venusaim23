import {Reveal} from "@/components/reveal";

export function SectionHeading({index, title}: { index: string; title: string }) {
    return (
        <Reveal className="mb-[44px] flex items-baseline gap-[14px]">
            <span className="font-mono text-[15px] text-accent">{index}</span>
            <h2 className="text-[clamp(28px,4vw,42px)] font-semibold tracking-[-0.02em]">
                {title}
            </h2>
        </Reveal>
    );
}
