import {type KeyboardEvent, useEffect, useRef, useState} from "react";
import {ALIASES, BOOT_LINES, HELP_HINT, type Line, OUTPUTS, RESUME_OUTPUT, RESUME_PATH,} from "./constants";
import {notFoundOutput, sp} from "./utils";

export type TerminalBlock = { lines: Line[]; kind: "echo" | "output" };

/**
 * Drives the interactive terminal: plays the boot sequence, then accepts typed
 * commands (with aliases, a not-found fallback, arrow-key history, and the
 * resume/clear side effects), keeping the scroll pinned to the newest output.
 */
export function useTerminal() {
    const [history, setHistory] = useState<TerminalBlock[]>([]);
    const [booted, setBooted] = useState(false);
    const [input, setInput] = useState("");

    const bodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const cmdlog = useRef<string[]>([]);
    const ptr = useRef(0);

    const pushBlock = (block: TerminalBlock) => setHistory((prev) => [...prev, block]);
    const output = (lines: Line[]) => pushBlock({lines, kind: "output"});

    // Boot sequence, then reveal the prompt. Self-contained so it runs once on mount.
    useEffect(() => {
        const emit = (lines: Line[]) =>
            setHistory((prev) => [...prev, {lines, kind: "output"}]);
        const timers: ReturnType<typeof setTimeout>[] = [];
        let i = 0;
        const step = () => {
            if (i < BOOT_LINES.length) {
                emit([BOOT_LINES[i]]);
                i += 1;
                timers.push(setTimeout(step, 420));
            } else {
                emit([HELP_HINT]);
                setBooted(true);
            }
        };
        timers.push(setTimeout(step, 600));
        return () => timers.forEach(clearTimeout);
    }, []);

    // Keep the newest line in view.
    useEffect(() => {
        const el = bodyRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [history, booted]);

    const runCommand = (raw: string) => {
        const trimmed = raw.trim();
        if (!trimmed) return;
        const cmd = trimmed.toLowerCase();
        pushBlock({lines: [[sp("›", "accent"), sp(` ${trimmed}`, "soft")]], kind: "echo"});

        const key = ALIASES[cmd] ?? cmd;
        if (key === "clear") {
            setHistory([]);
            return;
        }
        if (key === "resume") {
            window.setTimeout(() => window.open(RESUME_PATH, "_blank", "noopener"), 250);
            output(RESUME_OUTPUT);
            return;
        }
        output(OUTPUTS[key] ?? notFoundOutput(cmd));
    };

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const value = input;
            if (value.trim()) {
                cmdlog.current.push(value.trim());
                ptr.current = cmdlog.current.length;
            }
            setInput("");
            runCommand(value);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (ptr.current > 0) {
                ptr.current -= 1;
                setInput(cmdlog.current[ptr.current]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (ptr.current < cmdlog.current.length - 1) {
                ptr.current += 1;
                setInput(cmdlog.current[ptr.current]);
            } else {
                ptr.current = cmdlog.current.length;
                setInput("");
            }
        }
    };

    // Defer focus so a click can still place the caret / select history text first.
    const focusInput = () => window.setTimeout(() => inputRef.current?.focus(), 0);

    return {history, booted, input, setInput, onKeyDown, focusInput, bodyRef, inputRef};
}
