import {useEffect, useRef, useState} from "react";

/**
 * Reveals the returned element the first time it scrolls into view. Returns a
 * ref to attach and a `shown` flag driving the enter transition.
 */
export function useReveal<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShown(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.12, rootMargin: "0px 0px -8% 0px"},
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return {ref, shown};
}
