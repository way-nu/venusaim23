"use client";

import {Reveal} from "@/components/reveal";
import {type Stat, STATS} from "./constants";
import {useCountUp} from "./hooks";

function StatItem({stat}: { stat: Stat }) {
    const {ref, value} = useCountUp<HTMLSpanElement>(stat.target);

    return (
        <Reveal className="bg-surface px-[22px] py-[26px]">
            <div
                className="font-mono text-[clamp(28px,3vw,40px)] font-bold tracking-[-0.02em] text-foreground">
                <span className="text-faint">{stat.pre}</span>
                <span ref={ref}>{value}</span>
                <span className="text-accent">{stat.suffix}</span>
            </div>
            <div className="mt-2 font-mono text-xs text-dim">{stat.label}</div>
        </Reveal>
    );
}

export function Stats() {
    return (
        <div
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4">
            {STATS.map((stat) => (
                <StatItem key={stat.label} stat={stat}/>
            ))}
        </div>
    );
}
