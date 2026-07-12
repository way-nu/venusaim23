export function AmbientBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            <div className="absolute inset-0 bg-radial-[at_78%_-8%] from-accent/12 via-transparent to-transparent to-70%" />
            <div className="absolute inset-0 bg-radial-[at_0%_100%] from-[#e5b567]/6 via-transparent to-transparent to-70%" />
            <div
                className="absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_20%,#000,transparent_85%)] bg-[image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]"
            />
        </div>
    );
}
