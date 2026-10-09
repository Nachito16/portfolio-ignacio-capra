import type { Project } from "@/data/types";
import { cn } from "@/lib/cn";

/** Mono project index line: 01 / Category · Type · Year. */
export function ProjectMeta({ project, className }: { project: Project; className?: string }) {
  const parts = [project.category, project.type, project.year].filter(Boolean);

  return (
    <p className={cn("font-mono text-[10px] tracking-[0.08em] uppercase", className)}>
      <span className="text-acid-deep">{project.index}</span>
      <span aria-hidden className="text-muted">
        {" "}
        /{" "}
      </span>
      <span className="text-muted">{parts.join(" · ")}</span>
    </p>
  );
}
