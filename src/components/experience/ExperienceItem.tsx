import { TagList } from "@/components/ui/Tag";
import type { ExperienceRole } from "@/data/types";
import { cn } from "@/lib/cn";

type ExperienceRowProps = {
  role: ExperienceRole;
  company: string;
  /** Row number for main roles. */
  index?: string;
  /** Earlier roles render as compact, lower-emphasis rows. */
  earlier?: boolean;
  /** Label shown in the last column of earlier rows. */
  label?: string;
};

/** One row on the dark experience band: number · role · highlights · tags. */
export function ExperienceRow({ role, company, index, earlier, label }: ExperienceRowProps) {
  return (
    <article
      className={cn(
        "grid grid-cols-[60px_1fr_1.2fr_0.75fr] gap-[34px] border-b border-white/15 transition-[padding,background-color] duration-200 ease-in-out hover:bg-white/[0.035] hover:px-[18px] max-[900px]:grid-cols-[40px_1fr] max-[900px]:gap-x-4 max-[900px]:gap-y-5",
        earlier ? "py-6" : "py-9",
      )}
      data-reveal
    >
      <span aria-hidden className={cn("pt-1 font-mono text-[11px]", earlier ? "text-dim-3" : "text-acid")}>
        {earlier ? "↳" : index}
      </span>

      <div>
        {!earlier && (
          <p className="font-mono text-[10px] tracking-[0.12em] text-dim-1 uppercase">{company}</p>
        )}
        <h3
          className={cn(
            "font-semibold tracking-[-0.03em]",
            earlier ? "text-[17px] text-dim-5" : "mt-3 text-[22px] leading-[1.25] text-paper",
          )}
        >
          {role.title}
          {role.team && <span className="font-normal text-dim-2"> — {role.team}</span>}
        </h3>
        <p className="mt-3 font-mono text-[11px] leading-relaxed text-dim-1">
          <time dateTime={role.start.date}>{role.start.label}</time> — <time dateTime={role.end.date}>{role.end.label}</time>
          {role.location && <> · {role.location}</>}
        </p>
      </div>

      <ul
        className={cn(
          "space-y-2.5 max-[900px]:col-start-2",
          earlier ? "text-sm leading-[1.65] text-dim-1" : "text-[15px] leading-[1.7] text-dim-4",
        )}
      >
        {role.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="max-[900px]:col-start-2">
        {earlier ? (
          <p className="font-mono text-[9px] tracking-[0.12em] text-dim-3 uppercase">{label}</p>
        ) : (
          role.tags && (
            <>
              {role.tagsLabel && (
                <p className="mb-3 font-mono text-[9px] tracking-[0.12em] text-dim-1 uppercase">{role.tagsLabel}</p>
              )}
              <TagList items={role.tags} label={role.tagsLabel ?? "Technologies"} tone="dark" />
            </>
          )
        )}
      </div>
    </article>
  );
}
