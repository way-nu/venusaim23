"use client";

import {Fragment} from "react";
import {TERMINAL_TITLE} from "./constants";
import {useTerminal} from "./hooks";
import {toneClass} from "./utils";

export function Terminal() {
    const {history, booted, input, setInput, onKeyDown, focusInput, bodyRef, inputRef} =
        useTerminal();

    return (
        <div
            className="animate-float overflow-hidden rounded-[14px] border border-white/10"
            style={{
                background: "linear-gradient(180deg, #101310, #0c0e0c)",
                boxShadow:
                    "0 30px 80px -30px rgba(0,224,138,0.25), 0 10px 40px rgba(0,0,0,0.5)",
            }}
        >
            <div
                className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
                <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]"/>
                <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]"/>
                <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]"/>
                <span className="ml-2 font-mono text-xs text-faint">
          {TERMINAL_TITLE}
        </span>
            </div>

            <div
                ref={bodyRef}
                onMouseDown={focusInput}
                className="h-[300px] cursor-text overflow-y-auto px-5 py-[18px] font-mono text-[13px] leading-[1.7]"
            >
                {history.map((block, bi) => (
                    <div
                        key={bi}
                        className={`whitespace-pre-wrap break-words ${
                            block.kind === "echo" ? "mb-[2px] mt-[10px]" : "mb-[10px] mt-[2px]"
                        }`}
                    >
                        {block.lines.map((line, li) => (
                            <Fragment key={li}>
                                {li > 0 && "\n"}
                                {line.map((span, si) => (
                                    <span key={si} className={toneClass(span.tone)}>
                    {span.text}
                  </span>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                ))}

                {booted && (
                    <div className="mt-1.5 flex items-baseline gap-2">
                        <span className="flex-none text-accent">›</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            autoComplete="off"
                            autoCapitalize="off"
                            spellCheck={false}
                            aria-label="terminal input"
                            className="min-w-0 flex-1 border-none bg-transparent p-0 font-mono text-[13px] text-soft caret-accent outline-none"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
