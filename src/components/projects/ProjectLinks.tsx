import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon, ArrowUpRightIcon, GitHubIcon } from "@/components/ui/Icons";
import type { Project } from "@/data/types";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

type ProjectLinksProps = {
  project: Project;
  dict: Dictionary;
  /** Shows the link to the project's own page. */
  showDetails?: boolean;
  className?: string;
};

export function ProjectLinks({ project, dict, showDetails = true, className }: ProjectLinksProps) {
  const { live, github } = project.links;
  const detailsLabel = project.caseStudy ? dict.actions.viewCaseStudy : dict.actions.viewDetails;

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {showDetails && (
        <ButtonLink
          href={`/projects/${project.slug}`}
          icon={<ArrowRightIcon className="size-4" />}
          iconAfter
          aria-label={`${detailsLabel}: ${project.title}`}
        >
          {detailsLabel}
        </ButtonLink>
      )}
      {live && (
        <ButtonLink href={live} external variant="secondary" icon={<ArrowUpRightIcon className="size-4" />} iconAfter>
          {dict.actions.liveSite}
        </ButtonLink>
      )}
      {github && (
        <ButtonLink href={github} external variant="secondary" icon={<GitHubIcon className="size-4" />}>
          {dict.actions.sourceCode}
        </ButtonLink>
      )}
      {live === null && (
        <span className="inline-flex min-h-12 items-center rounded-[9px] border border-dashed border-line-strong px-5 font-mono text-[11px] text-muted">
          {dict.actions.liveSoon}
        </span>
      )}
    </div>
  );
}
