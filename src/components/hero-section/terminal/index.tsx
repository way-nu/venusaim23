"use client";

import {KIND_CLASS} from "./constants";
import {useTerminal} from "./hooks";

export function Terminal() {
    const {lines, input, ready, bodyRef, inputRef, onInput, onKeyDown, focusInput} = useTerminal();

    return (
        <div>
            <div
                onClick={focusInput}
                className="overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl shadow-black/50"
            >
                <div className="flex items-center gap-2 border-b border-white/7 bg-white/2 px-3.5 py-2.5">
                    <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="size-2.5 rounded-full bg-[#febc2e]" />
                    <span className="size-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 text-xs text-faint">venu@portfolio — zsh</span>
                </div>
                <div
                    ref={bodyRef}
                    className="flex h-[280px] flex-col gap-0.5 overflow-y-auto p-4 text-[13px] leading-relaxed sm:h-[340px]"
                >
                    {lines.map((line, index) => (
                        <div key={index} className="flex gap-2 whitespace-pre-wrap break-words">
                            {line.kind === "cmd" && <span className="flex-none text-accent">$</span>}
                            <span className={KIND_CLASS[line.kind]}>{line.text || " "}</span>
                        </div>
                    ))}
                    {ready && (
                        <div className="mt-0.5 flex items-center gap-2">
                            <span className="flex-none text-accent">$</span>
                            <input
                                value={input}
                                onChange={onInput}
                                onKeyDown={onKeyDown}
                                ref={inputRef}
                                spellCheck={false}
                                autoComplete="off"
                                placeholder="try: help"
                                className="flex-1 border-none bg-transparent text-[13px] text-foreground caret-accent outline-none"
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-2.5 text-center text-[11px] text-ghost">
                ↑ this terminal is live — type <span className="text-faint">help</span>
            </div>
        </div>
    );
}
