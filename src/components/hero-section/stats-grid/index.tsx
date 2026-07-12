type Stat = {
    big: string;
    label: string;
};

export function StatsGrid({stats}: {stats: Stat[]}) {
    return (
        <div className="mt-11 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/7 bg-white/7 sm:mt-16 sm:grid-cols-4">
            {stats.map((stat) => (
                <div key={stat.label} className="bg-surface px-5 py-5">
                    <div className="font-display text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                        {stat.big}
                    </div>
                    <div className="mt-1.5 text-[12.5px] text-subtle">{stat.label}</div>
                </div>
            ))}
        </div>
    );
}
