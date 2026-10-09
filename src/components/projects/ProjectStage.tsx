import Image from "next/image";
import type { Media, Project } from "@/data/types";
import { cn } from "@/lib/cn";

const stageBase =
  "group/stage relative grid min-h-[530px] place-items-center overflow-hidden rounded-[24px] px-[42px] py-[70px] max-[600px]:min-h-[360px] max-[600px]:rounded-2xl max-[600px]:px-4 max-[600px]:py-10";

const tilt = "transition-transform duration-[400ms] ease-out-expo";

type ProjectStageProps = {
  project: Project;
  /** Overrides the screenshot shown (e.g. the case study hero). */
  media?: Media;
  /** Use the layered composition when the project defines one. */
  layered?: boolean;
  sizes?: string;
  preload?: boolean;
  className?: string;
};

/** Colored stage with a decorative circle and the project screenshot(s) in perspective. */
export function ProjectStage({ project, media, layered = true, sizes, preload, className }: ProjectStageProps) {
  const coral = project.stage === "coral";

  return (
    <div className={cn(stageBase, coral ? "bg-stage-sens" : "bg-stage-handstats", className)}>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-1/2 left-1/2 rounded-full blur-[1px]",
          coral
            ? "aspect-square w-[min(440px,100%)] -translate-x-1/2 -translate-y-1/2 bg-coral opacity-[0.62]"
            : "size-[420px] -translate-x-[22%] -translate-y-[62%] bg-acid opacity-[0.72] max-[600px]:size-[260px]",
        )}
      />

      {layered && project.composition ? (
        <Composition images={project.composition} preload={preload} />
      ) : (
        <SingleShot media={media ?? project.cover} coral={coral} sizes={sizes} preload={preload} />
      )}
    </div>
  );
}

function SingleShot({ media, coral, sizes, preload }: { media: Media; coral: boolean; sizes?: string; preload?: boolean }) {
  if (!media.src || !media.width || !media.height) return null;

  return (
    <div
      className={cn(
        "relative w-[min(100%,720px)]",
        tilt,
        coral
          ? "[transform:perspective(900px)_rotateX(3deg)_rotateY(4deg)]"
          : "[transform:perspective(900px)_rotateX(3deg)_rotateY(-4deg)]",
        "group-hover/stage:[transform:perspective(900px)_rotateX(0)_rotateY(0)_scale(1.02)]",
      )}
    >
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={sizes ?? "(max-width: 900px) calc(100vw - 80px), 720px"}
        quality={90}
        preload={preload}
        className="block h-auto w-full rounded-xl shadow-[0_30px_80px_rgba(11,15,20,0.28)]"
      />
    </div>
  );
}

/**
 * Sens: three real screenshots arranged like the Figma design — the homepage on top,
 * the gallery below-left and team/location bottom-right, each slightly rotated with light overlap.
 * Positions are percentages of a fixed-ratio box, so the arrangement holds at every width.
 */
function Composition({ images, preload }: { images: [Media, Media, Media]; preload?: boolean }) {
  const [main, middle, bottom] = images;
  const img =
    "absolute h-auto rounded-[10px] border border-white/16 shadow-[0_22px_55px_rgba(11,15,20,0.22)]";
  const detail = cn(
    img,
    "transition-transform duration-300 ease-out-expo hover:z-[4] hover:[transform:rotate(0)_translateY(-6px)_scale(1.04)]",
  );

  return (
    <div className="relative aspect-[309/345] w-[min(100%,440px)] max-[600px]:w-[80%]">
      <Shot
        media={main}
        preload={preload}
        sizes="(max-width: 600px) 64vw, 390px"
        className={cn(img, "top-0 left-[7%] z-[1] w-[87%]")}
      />
      <Shot
        media={middle}
        sizes="(max-width: 600px) 44vw, 260px"
        className={cn(detail, "top-[42%] left-0 z-[2] w-[58%] [transform:rotate(-3deg)]")}
      />
      <Shot
        media={bottom}
        sizes="(max-width: 600px) 34vw, 200px"
        className={cn(detail, "right-0 bottom-0 z-[3] w-[44%] [transform:rotate(3deg)]")}
      />
    </div>
  );
}

function Shot({ media, className, sizes, preload }: { media: Media; className: string; sizes: string; preload?: boolean }) {
  if (!media.src || !media.width || !media.height) return null;
  return (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      quality={90}
      preload={preload}
      className={className}
    />
  );
}
