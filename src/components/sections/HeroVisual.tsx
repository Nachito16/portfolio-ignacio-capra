import Image from "next/image";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

/** Rotated portrait card with an outline behind it, overlapped by a code card. */
export function HeroVisual({ className }: { className?: string }) {
  const { photo } = profile;

  return (
    <div
      className={cn(
        "relative min-h-[560px] w-full max-[900px]:mx-auto max-[900px]:min-h-[570px] max-[900px]:max-w-[520px] max-[600px]:min-h-[500px]",
        className,
      )}
    >
      <figure className="absolute top-0 right-[18px] flex w-[75%] max-w-[340px] rotate-[2.5deg] flex-col-reverse rounded-[20px] bg-ink p-3 before:pointer-events-none before:absolute before:inset-[10px_-20px_-20px_14px] before:-z-10 before:rounded-[20px] before:border before:border-[rgba(11,15,20,0.25)] max-[600px]:right-[22px]">
        {/* Caption renders above the photo (flex-col-reverse) so the overlapping code card never clips it. */}
        {photo.src && (
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 600px) 75vw, 316px"
            quality={90}
            preload
            className="block aspect-[0.78] h-auto w-full rounded-[11px] object-cover object-center [filter:saturate(0.78)_contrast(1.04)]"
          />
        )}
        <figcaption className="px-1 pt-0.5 pb-3 font-mono text-[9px] tracking-[0.08em] text-dim-1 uppercase">
          {profile.name} — {profile.role}
        </figcaption>
      </figure>

      <CodeCard className="absolute bottom-[22px] left-[-25px] w-[340px] -rotate-2 max-[900px]:left-0 max-[600px]:bottom-0 max-[600px]:w-[min(340px,100%)]" />
    </div>
  );
}

/** Decorative code card summarizing the profile. Hidden from assistive tech; the same facts appear as text elsewhere. */
function CodeCard({ className }: { className?: string }) {
  const key = (name: string) => <span className="text-dim-4">{name}</span>;
  const str = (value: string) => <span className="text-code-string">&quot;{value}&quot;</span>;
  const punct = (value: string) => <span className="text-dim-1">{value}</span>;

  return (
    <div
      aria-hidden
      className={cn(
        "rounded-[14px] border border-white/10 bg-[rgba(23,29,37,0.96)] px-5 pt-4 pb-[22px] shadow-[0_24px_60px_rgba(11,15,20,0.23)]",
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between font-mono text-[9px] tracking-[0.08em] text-dim-3 uppercase">
        <span>developer.ts</span>
        <span className="flex gap-1.5">
          <span className="size-1.5 rounded-full bg-white/15" />
          <span className="size-1.5 rounded-full bg-white/15" />
          <span className="size-1.5 rounded-full bg-acid" />
        </span>
      </div>
      <pre className="overflow-hidden font-mono text-[11px] leading-[1.9] whitespace-pre text-dim-2">
        <span className="text-acid">const</span> developer {punct("= {")}
        {"\n  "}
        {key("name")}
        {punct(": ")}
        {str(profile.name)}
        {punct(",")}
        {"\n  "}
        {key("role")}
        {punct(": ")}
        {str(profile.role)}
        {punct(",")}
        {"\n  "}
        {key("experience")}
        {punct(": ")}
        {str("6+ years")}
        {punct(",")}
        {"\n  "}
        {key("based")}
        {punct(": ")}
        {str("Montevideo, UY")}
        {punct(",")}
        {"\n"}
        {punct("};")}
      </pre>
    </div>
  );
}
