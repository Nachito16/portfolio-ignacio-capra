import type { CaseStudy } from "@/data/types";

/** Left-to-right data flow; vertical below 900px. */
export function ArchitectureFlow({ steps, label }: { steps: string[]; label: string }) {
  return (
    <ol
      aria-label={label}
      className="flex items-stretch rounded-2xl bg-ink p-4 max-[900px]:flex-col max-[900px]:gap-2 sm:p-5"
      data-reveal
    >
      {steps.map((step, index) => (
        <li key={step} className="flex flex-1 items-center max-[900px]:flex-col">
          <span className="flex min-h-14 w-full flex-1 items-center justify-center rounded-[9px] border border-white/12 px-3 py-3 text-center font-mono text-[11px] leading-snug text-dim-5">
            {step}
          </span>
          {index < steps.length - 1 && (
            <span aria-hidden className="shrink-0 px-2 font-mono text-xs text-acid max-[900px]:rotate-90 max-[900px]:py-1">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Layer cards in the skills-card style: hairline borders, hover tint. */
export function ArchitectureLayers({ layers }: { layers: CaseStudy["architecture"]["layers"] }) {
  return (
    <ul className="grid grid-cols-2 border-t border-l border-line max-[600px]:grid-cols-1" data-reveal>
      {layers.map((layer) => (
        <li
          key={layer.name}
          className="border-r border-b border-line px-6 py-[30px] transition-colors duration-200 ease-in-out hover:bg-paper-alt"
        >
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{layer.name}</h3>
          <p className="mt-2 text-sm leading-[1.6] text-body">{layer.description}</p>
          <ul className="mt-5 grid gap-2 font-mono text-[11px] text-feature">
            {layer.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden className="text-acid-deep">
                  ↳
                </span>
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
