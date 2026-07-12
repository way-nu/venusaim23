import {useEffect, useState} from "react";

/**
 * Short timezone abbreviation for the visitor's zone (e.g. "IST", "JST", "EDT").
 * Browsers only expose letter abbreviations via `short` for a few zones (North
 * America); most return a "GMT+…" offset. So we build the abbreviation from the
 * initials of the English long name ("India Standard Time" → "IST") and fall
 * back to the offset only for zones that have no named form.
 */
function timezoneAbbr(now: Date): string {
    const part = (style: "long" | "short", locale?: string) =>
        new Intl.DateTimeFormat(locale, {timeZoneName: style})
            .formatToParts(now)
            .find((p) => p.type === "timeZoneName")?.value;

    const longName = part("long", "en-US");
    if (longName && /\s/.test(longName) && !/^(GMT|UTC)/i.test(longName)) {
        const abbr = longName
            .split(/\s+/)
            .filter((word) => /^[A-Za-z]/.test(word))
            .map((word) => word[0])
            .join("")
            .toUpperCase();
        if (abbr.length >= 2) return abbr;
    }

    return part("short") ?? longName ?? "";
}

/**
 * Live wall-clock time in the visitor's own timezone, updated every second,
 * suffixed with their timezone abbreviation. Starts as a placeholder so server
 * and first client render match (no hydration mismatch).
 */
export function useLocalClock() {
    const [label, setLabel] = useState("--:--:--");

    useEffect(() => {
        const tick = () => {
            const now = new Date();
            const time = now.toLocaleTimeString("en-GB", {hour12: false});
            const tz = timezoneAbbr(now);
            setLabel(tz ? `${time} ${tz}` : time);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return label;
}
