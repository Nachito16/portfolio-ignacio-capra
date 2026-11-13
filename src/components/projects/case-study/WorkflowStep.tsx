import { MediaFrame } from "@/components/ui/MediaFrame";
import type { Media, WorkflowStep as Step } from "@/data/types";

const isPortrait = (media: Media) => (media.height ?? 0) > (media.width ?? 0);
/** Nearly square or taller-than-wide dashboards would run past a full screen at column width. */
const isTall = (media: Media) => (media.height ?? 0) > (media.width ?? 1) * 0.9;
const wideSizes = "(max-width: 900px) calc(100vw - 48px), 930px";

/** Width rules for a screenshot inside a multi-screenshot step. */
function stackedFigure(media: Media) {
  if (isPortrait(media)) return { className: "mx-auto w-full max-w-[220px]", sizes: "(max-width: 640px) 60vw, 220px" };
  if (isTall(media)) return { className: "mx-auto w-full max-w-[720px]", sizes: "(max-width: 900px) calc(100vw - 48px), 720px" };
  return { className: undefined, sizes: wideSizes };
}

/**
 * One stage of the product workflow: numbered heading, explanation, and its screenshots.
 * A stage with a single portrait screen places it beside the text.
 */
export function WorkflowStep({ step, index }: { step: Step; index: number }) {
  const heading = <StepHeading title={step.title} index={index} description={step.description} />;

  const [only] = step.media;
  if (step.media.length === 1 && isPortrait(only)) {
    return (
      <div className="grid items-center gap-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,260px)]" data-reveal>
        {heading}
        <Figure media={only} sizes="(max-width: 640px) 75vw, 260px" className="mx-auto w-full max-w-[280px] sm:max-w-none" />
      </div>
    );
  }

  return (
    <div data-reveal>
      {heading}
      <div className="mt-9 space-y-12">
        {step.media.map((media) => (
          <Figure key={media.src ?? media.alt} media={media} {...stackedFigure(media)} />
        ))}
      </div>
    </div>
  );
}

export function StepHeading({ title, description, index }: { title: string; description: string[]; index?: number }) {
  return (
    <div>
      <h3 className="flex items-baseline gap-4 text-[28px] leading-[1.15] font-semibold tracking-[-0.04em] text-ink max-[600px]:text-2xl">
        {index !== undefined && (
          <span aria-hidden className="font-mono text-[11px] font-normal tracking-normal text-acid-deep">
            {String(index).padStart(2, "0")}
          </span>
        )}
        {title}
      </h3>
      <div className="mt-4 max-w-[680px] space-y-4 text-[17px] leading-[1.75] text-body-strong max-[600px]:text-base">
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export function Figure({ media, sizes, className }: { media: Media; sizes: string; className?: string }) {
  return (
    <figure className={className}>
      <MediaFrame media={media} sizes={sizes} />
      {media.caption && (
        <figcaption className="mt-4 font-mono text-[11px] leading-relaxed text-muted">
          <span aria-hidden className="text-acid-deep">
            ↳{" "}
          </span>
          {media.caption}
        </figcaption>
      )}
    </figure>
  );
}
