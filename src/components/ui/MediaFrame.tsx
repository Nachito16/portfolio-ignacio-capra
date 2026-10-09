import Image from "next/image";
import type { Media } from "@/data/types";
import { cn } from "@/lib/cn";

type MediaFrameProps = {
  media: Media;
  sizes?: string;
  /** Preloads the image; use only for above-the-fold visuals. Everything else lazy-loads. */
  preload?: boolean;
  /** Shadow depth: "stage" matches screenshots on project stages, "page" is softer for inline screenshots. */
  depth?: "stage" | "page";
  className?: string;
};

/**
 * Product screenshot, uncropped at its intrinsic aspect ratio (no layout shift).
 * Media without `src` renders a neutral placeholder.
 */
export function MediaFrame({
  media,
  sizes = "(min-width: 1180px) 1180px, calc(100vw - 48px)",
  preload,
  depth = "page",
  className,
}: MediaFrameProps) {
  const frame = cn(
    "relative overflow-hidden rounded-xl bg-ink",
    depth === "stage"
      ? "shadow-[0_30px_80px_rgba(11,15,20,0.28)]"
      : "border border-line-soft shadow-[0_24px_60px_rgba(11,15,20,0.14)]",
    className,
  );

  if (media.src && media.width && media.height) {
    return (
      <div className={frame}>
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes={sizes}
          quality={90}
          preload={preload}
          className="block h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${media.alt} (screenshot placeholder)`}
      className={cn(frame, "flex aspect-[16/10] items-center justify-center bg-paper-alt")}
    >
      <span className="font-mono text-[11px] text-muted">Screenshot coming soon</span>
    </div>
  );
}
