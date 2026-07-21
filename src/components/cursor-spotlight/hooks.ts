import {useEffect, useRef} from "react";

/**
 * Tracks the cursor and exposes its position on the returned element as the
 * `--mx` / `--my` CSS custom properties, so a radial gradient can follow it.
 */
export function useCursorSpotlight<T extends HTMLElement>() {
    const ref = useRef<T>(null);

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const el = ref.current;
            if (!el) return;
            el.style.setProperty("--mx", `${e.clientX}px`);
            el.style.setProperty("--my", `${e.clientY}px`);
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return ref;
}
