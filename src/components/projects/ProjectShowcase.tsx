import Link from "next/link";
import { TagList } from "@/components/ui/Tag";
import type { Project } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMeta } from "./ProjectMeta";
import { ProjectStage } from "./ProjectStage";

type ProjectShowcaseProps = {
  project: Project;
  dict: Dictionary;
  /** Places the visual on the right on desktop. Below 900px media always comes first. */
  reversed?: boolean;
};

/** Homepage project row: colored stage with the real screenshot(s) beside the project text. */
export function ProjectShowcase({ project, dict, reversed }: ProjectShowcaseProps) {
  const [summary] = project.description;

  return (
    <article
      aria-labelledby={`project-${project.slug}`}
      className={cn(
        "grid items-center gap-[7%] border-t border-line pt-[90px] pb-[140px] max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[900px]:pt-[70px] max-[900px]:pb-[100px]",
        reversed
          ? "grid-cols-[minmax(320px,0.65fr)_minmax(0,1.35fr)]"
          : "grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]",
      )}
    >
      {/* The visual links to the project page; the button below is the keyboard path. */}
      <Link
        href={`/projects/${project.slug}`}
        tabIndex={-1}
        className={cn("block", reversed && "min-[901px]:order-2")}
        data-reveal
      >
        <ProjectStage project={project} />
      </Link>

      <div data-reveal>
        <ProjectMeta project={project} />
        <h3
          id={`project-${project.slug}`}
          className="mt-5 text-[clamp(42px,4vw,64px)] leading-none font-semibold tracking-[-0.055em] text-ink"
        >
          {project.title}
        </h3>
        <p className="mt-5 text-xl leading-[1.35] text-ink">{project.headline}</p>
        <p className="mt-5 text-[15px] leading-[1.7] text-body">{summary}</p>

        {project.capabilities && (
          <ul
            aria-label={dict.projects.keyCapabilities}
            className={cn(
              "my-[26px] grid gap-[11px] text-xs text-feature",
              // Long lists split into two columns so the text stays in proportion with the stage.
              project.capabilities.length > 6 && "grid-cols-2 gap-x-5 max-[380px]:grid-cols-1",
            )}
          >
            {project.capabilities.map((capability) => (
              <li key={capability} className="flex gap-2">
                <span aria-hidden className="text-acid-deep">
                  ↳
                </span>
                {capability}
              </li>
            ))}
          </ul>
        )}

        <TagList items={project.stack} label={dict.projects.stack} className={project.capabilities ? "" : "mt-6"} />
        <ProjectLinks project={project} dict={dict} className="mt-8" />
      </div>
    </article>
  );
}
