export function AboutSection() {
    return (
        <section id="about" className="relative z-10 mx-auto max-w-5xl scroll-mt-20 px-5 py-16 sm:px-10 sm:py-24">
            <div className="mb-3.5 text-[13px] text-accent">{"// 01 — about"}</div>
            <div className="flex flex-wrap gap-8 sm:gap-14">
                <h2 className="flex-1 basis-[280px] font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    Engineer who ships end-to-end.
                </h2>
                <div className="flex-1 basis-[320px] text-[15px] leading-loose text-muted">
                    <p className="mb-4">
                        Three years across backend, data and mobile — from architecting{" "}
                        <span className="text-foreground">Hexagonal Python services</span> and 4TB AWS
                        Glue pipelines to shipping full-stack platforms that generated{" "}
                        <span className="text-accent">₹800K in their first 18 days</span>.
                    </p>
                    <p>
                        B.Tech in CSE from IIIT Tiruchirappalli (CGPA 8.3). I lean hard into agentic
                        tooling — MCPs, Cursor and Claude Code — to compress planning-to-PR by 60%.
                    </p>
                </div>
            </div>
        </section>
    );
}
