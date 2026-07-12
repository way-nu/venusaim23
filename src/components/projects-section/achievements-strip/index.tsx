import {PROFILE} from "@/components/portfolio/constants";
import type {Achievement} from "../constants";

export function AchievementsStrip({achievements}: {achievements: Achievement[]}) {
    return (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-5.5 rounded-2xl border border-white/9 bg-white/1.5 p-6">
            <div className="flex flex-wrap gap-5.5">
                {achievements.map((achievement) => (
                    <div key={achievement.label} className="min-w-[150px]">
                        <div className="font-display text-xl font-bold text-accent">{achievement.big}</div>
                        <div className="mt-0.5 text-[12.5px] text-subtle">{achievement.label}</div>
                    </div>
                ))}
            </div>
            <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/14 px-4.5 py-2.5 text-[13px] text-foreground hover:border-accent hover:text-accent"
            >
                more on github ↗
            </a>
        </div>
    );
}
