import {useEffect, useRef, useState} from "react";
import {
    BOOT_COMMAND,
    BOOT_END_DELAY_MS,
    BOOT_START_DELAY_MS,
    INTRO_LINES,
    TYPE_CHAR_DELAY_MS,
    TYPE_COMMAND_PAUSE_MS,
    TerminalLine,
} from "./constants";
import {execCommand, sleep} from "./utils";

export function useTerminal() {
    const [lines, setLines] = useState<TerminalLine[]>([]);
    const [input, setInput] = useState("");
    const [ready, setReady] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let cancelled = false;

        async function boot() {
            await sleep(BOOT_START_DELAY_MS);
            if (cancelled) return;

            let typedIndex = -1;
            setLines((current) => {
                typedIndex = current.length;
                return [...current, {kind: "cmd", text: ""}];
            });

            for (let i = 1; i <= BOOT_COMMAND.length; i++) {
                await sleep(TYPE_CHAR_DELAY_MS);
                if (cancelled) return;
                const typed = BOOT_COMMAND.slice(0, i);
                setLines((current) => {
                    const next = [...current];
                    next[typedIndex] = {kind: "cmd", text: typed};
                    return next;
                });
            }

            await sleep(TYPE_COMMAND_PAUSE_MS);
            if (cancelled) return;
            setLines((current) => [...current, ...INTRO_LINES]);

            await sleep(BOOT_END_DELAY_MS);
            if (cancelled) return;
            setReady(true);
        }

        void boot();
        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        const el = bodyRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [lines]);

    function run() {
        const raw = input;
        if (!raw.trim()) {
            setInput("");
            return;
        }
        setLines((current) => [...current, {kind: "cmd", text: raw}]);
        const output = execCommand(raw);
        if (output === "CLEAR") {
            setLines([]);
        } else {
            setLines((current) => [...current, ...output]);
        }
        setInput("");
    }

    function focusInput() {
        inputRef.current?.focus();
    }

    return {
        lines,
        input,
        ready,
        bodyRef,
        inputRef,
        onInput: (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value),
        onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") run();
        },
        focusInput,
    };
}
