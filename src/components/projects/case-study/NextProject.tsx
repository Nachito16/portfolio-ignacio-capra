import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";
import type { Project } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";

/** Full-bleed dark band leading to the next project; continues into the footer. */
export function NextProject({ project, dict }: { project: Project; dict: Dictionary }) {
  return (
    <div className="on-dark bleed bg-ink text-paper">
      <Link
        href={`/projects/${project.slug}`}
        className="group flex items-center justify-between gap-8 py-[100px] max-[600px]:py-[70px]"
      >
        <span>
          <span className="block font-mono text-[11px] tracking-[0.12em] text-dim-1 uppercase">
            <span className="text-acid">{project.index}</span> / {dict.caseStudy.nextProject}
          </span>
          <span className="mt-5 block text-[clamp(42px,4vw,64px)] leading-none font-semibold tracking-[-0.055em] transition-colors duration-[180ms] group-hover:text-acid">
            {project.title}
          </span>
          <span className="mt-4 block text-xl leading-[1.35] text-dim-2">{project.headline}</span>
        </span>
        <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-[9px] border border-white/20 text-paper transition-[color,background-color,border-color,transform] duration-[180ms] group-hover:translate-x-1 group-hover:border-acid group-hover:bg-acid group-hover:text-ink">
          <ArrowRightIcon className="size-5" />
        </span>
      </Link>
    </div>
  );
}
