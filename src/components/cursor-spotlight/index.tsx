"use client";

import {useCursorSpotlight} from "./hooks";

export function CursorSpotlight() {
    const ref = useCursorSpotlight<HTMLDivElement>();

    return (
        <div
            ref={ref}
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background:
                    "radial-gradient(340px circle at var(--mx,50%) var(--my,20%), rgba(0,224,138,0.10), transparent 70%)",
            }}
        />
    );
}
