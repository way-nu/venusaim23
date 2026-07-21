export function GridBackdrop() {
    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0 opacity-50"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage:
                    "radial-gradient(ellipse 90% 60% at 50% 0%, #000 30%, transparent 80%)",
                WebkitMaskImage:
                    "radial-gradient(ellipse 90% 60% at 50% 0%, #000 30%, transparent 80%)",
            }}
        />
    );
}
