import {Reveal} from "@/components/reveal";
import {CONTACT, EMAIL, SOCIAL_LINKS} from "./constants";

export function ContactSection() {
    return (
        <section
            id="contact"
            className="relative z-[1] mx-auto max-w-[1120px] px-8 pb-[60px] pt-[80px]"
        >
            <Reveal
                className="rounded-[20px] border border-white/[0.09] p-[clamp(36px,6vw,64px)] text-center"
                style={{
                    background:
                        "radial-gradient(120% 140% at 0% 0%, rgba(0,224,138,0.07), transparent 55%)",
                }}
            >
                <span className="font-mono text-[13px] text-accent">04 / contact</span>
                <h2 className="my-[14px] text-[clamp(30px,5vw,54px)] font-semibold tracking-[-0.02em]">
                    {CONTACT.heading}<span className="text-accent">.</span>
                </h2>
                <p className="mx-auto mb-[34px] max-w-[520px] text-lg leading-[1.55] text-muted">
                    {CONTACT.subtitle}
                </p>
                <a
                    href={`mailto:${EMAIL}`}
                    className="mb-9 inline-block rounded-xl border border-accent/55 px-7 py-[15px] font-mono text-[15px] text-accent transition-all hover:bg-accent hover:text-[#06110c]"
                >
                    {EMAIL}
                </a>
                <div className="flex flex-wrap justify-center gap-3">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener"
                            className="rounded-full border border-white/[0.12] px-[18px] py-[11px] font-mono text-[13.5px] text-muted transition-colors hover:text-foreground"
                        >
                            {link.label} ↗
                        </a>
                    ))}
                </div>
            </Reveal>

            <div className="mt-10 flex flex-wrap justify-between gap-3 font-mono text-xs text-faint">
                {CONTACT.footer.map((item) => (
                    <span key={item}>{item}</span>
                ))}
            </div>
        </section>
    );
}
