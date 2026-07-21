"use client";

import type {ComponentPropsWithoutRef, ElementType, Ref} from "react";
import {useReveal} from "./hooks";

type RevealProps<T extends ElementType> = {
    /** Element/tag to render (e.g. "article"). Defaults to "div". */
    as?: T;
    className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "ref">;

/**
 * Wraps content that should fade + slide into view on first scroll. Renders as
 * a plain `div` by default; pass `as` to make a grid child (article, etc.) the
 * revealed element itself so layout is preserved.
 */
export function Reveal<T extends ElementType = "div">({
                                                          as,
                                                          className = "",
                                                          ...rest
                                                      }: RevealProps<T>) {
    const Tag = (as ?? "div") as ElementType;
    const {ref, shown} = useReveal<HTMLElement>();

    return (
        <Tag
            ref={ref as Ref<HTMLElement>}
            className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
                shown ? "translate-y-0 opacity-100" : "translate-y-[26px] opacity-0"
            } ${className}`}
            {...rest}
        />
    );
}
