import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  /** Section number, e.g. "01". */
  index: string;
  /** Mono label next to the number, e.g. "Profile". */
  kicker: string;
  title: string;
  tone?: "light" | "dark";
  /** Smaller heading scale, used for sections inside project pages. */
  size?: "section" | "sub";
  className?: string;
};

export function SectionKicker({ index, kicker, tone = "light", className }: Pick<SectionHeadingProps, "index" | "kicker" | "tone" | "className">) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] tracking-[0.12em] uppercase",
        tone === "dark" ? "text-dim-1" : "text-muted",
        className,
      )}
    >
      <span className={tone === "dark" ? "text-acid" : "text-ink"}>{index}</span>
      <span aria-hidden> / </span>
      {kicker}
    </p>
  );
}

export function SectionHeading({ id, index, kicker, title, tone = "light", size = "section", className }: SectionHeadingProps) {
  return (
    <div className={className} data-reveal>
      <SectionKicker index={index} kicker={kicker} tone={tone} />
      <h2
        id={id}
        className={cn(
          "mt-5 font-semibold text-balance",
          size === "section"
            ? "text-[clamp(38px,4.2vw,62px)] leading-[1.08] tracking-[-0.055em]"
            : "text-[clamp(30px,3vw,44px)] leading-[1.1] tracking-[-0.05em]",
          tone === "dark" ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
    </div>
  );
}
