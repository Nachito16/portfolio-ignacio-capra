import { cn } from "@/lib/cn";

type Tone = "light" | "dark";

export function Tag({ children, tone = "light", className }: { children: React.ReactNode; tone?: Tone; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[5px] border px-[9px] py-1.5 font-mono leading-none",
        tone === "dark" ? "border-white/12 text-[9px] text-dim-4" : "border-line text-[10px] text-label",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({
  items,
  label,
  tone = "light",
  className,
}: {
  items: string[];
  label?: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag tone={tone}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
