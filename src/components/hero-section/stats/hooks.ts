import {useEffect, useRef, useState} from "react";

/**
 * Counts up from 0 to `target` (cubic ease-out over 1.4s) the first time the
 * returned element scrolls into view. Renders `target` before then so the final
 * value is present without JS.
 */
export function useCountUp<T extends HTMLElement>(target: number) {
    const ref = useRef<T>(null);
    const [value, setValue] = useState(target);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    observer.unobserve(entry.target);

                    const duration = 1400;
                    const start = performance.now();
                    const run = (now: number) => {
                        const p = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - p, 3);
                        setValue(Math.round(target * eased));
                        if (p < 1) requestAnimationFrame(run);
                        else setValue(target);
                    };
                    requestAnimationFrame(run);
                });
            },
            {threshold: 0.6},
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return {ref, value};
}
