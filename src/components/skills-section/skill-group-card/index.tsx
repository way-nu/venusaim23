import type {SkillGroup} from "../constants";

export function SkillGroupCard({group}: {group: SkillGroup}) {
    return (
        <div className="rounded-xl border border-white/9 bg-gradient-to-b from-white/2 to-transparent p-5">
            <div className="mb-3.5 flex items-center gap-2">
                <span className="text-[13px] text-accent">$</span>
                <span className="text-[13px] font-medium">{group.label}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                    <span
                        key={item}
                        className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-muted hover:border-accent hover:text-accent"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
