import { cn } from "@/lib/cn";

/** Availability label with the 8px green status dot. */
export function StatusIndicator({ label, className }: { label: string; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span aria-hidden className="size-2 shrink-0 rounded-full bg-acid-deep shadow-[0_0_0_5px_rgba(134,184,46,0.13)]" />
      <span>{label}</span>
    </span>
  );
}
