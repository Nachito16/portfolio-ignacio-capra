import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type CaseStudySectionProps = {
  id: string;
  index: number;
  /** Mono label next to the number. Defaults to the title. */
  kicker?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/** Project-page section: hairline divider, numbered mono kicker and a heading one step below the homepage scale. */
export function CaseStudySection({ id, index, kicker, title, children, className }: CaseStudySectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-28 border-t border-line pt-[56px]", className)}>
      <SectionHeading id={`${id}-title`} index={String(index).padStart(2, "0")} kicker={kicker ?? title} title={title} size="sub" />
      <div className="mt-10">{children}</div>
    </section>
  );
}

/** Body copy: optional 22px lead paragraph, then 17px paragraphs (same scale as About). */
export function Prose({ paragraphs, lead }: { paragraphs: string[]; lead?: boolean }) {
  return (
    <div className="max-w-[680px] space-y-5" data-reveal>
      {paragraphs.map((paragraph, i) => (
        <p
          key={paragraph}
          className={cn(
            "text-pretty",
            lead && i === 0
              ? "text-[22px] leading-[1.55] text-ink max-[600px]:text-xl"
              : "text-[17px] leading-[1.75] text-body-strong max-[600px]:text-base",
          )}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
