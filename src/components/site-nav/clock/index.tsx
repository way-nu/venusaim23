"use client";

import {useLocalClock} from "./hooks";

export function Clock() {
    const time = useLocalClock();

    return (
        <span className="font-mono text-xs tracking-[0.02em] text-faint">
            {time}
        </span>
    );
}
