import { cn } from "@/lib/cn";

/** Row of facts: 10px mono labels over 23px values, separated from the content above by a line. */
export function FactStrip({ facts, className }: { facts: { label: string; value: string }[]; className?: string }) {
  return (
    <dl
      className={cn(
        "mt-[42px] grid gap-6 border-t border-line pt-[25px] max-[600px]:grid-cols-1 max-[600px]:gap-5",
        facts.length >= 4 ? "grid-cols-4 max-[900px]:grid-cols-2" : facts.length === 2 ? "grid-cols-2" : "grid-cols-3",
        className,
      )}
    >
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{fact.label}</dt>
          <dd className="mt-2 text-[23px] leading-[1.25] font-semibold tracking-[-0.03em] text-ink">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
