import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import type { Project } from "@/data/types";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ProjectLinks } from "../ProjectLinks";
import { ProjectMeta } from "../ProjectMeta";
import { ProjectStage } from "../ProjectStage";

export function CaseStudyHero({ project, locale }: { project: Project; locale: Locale }) {
  const dict = getDictionary(locale);
  const hasLinks = project.links.live !== undefined || project.links.github;
  const hero = project.caseStudy?.hero ?? project.cover;

  return (
    <section aria-labelledby="project-title" className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[2%] right-[-25%] size-[620px] rounded-full bg-[radial-gradient(circle,rgba(183,242,74,0.16),rgba(183,242,74,0)_68%)]"
      />
      <Container className="relative pt-[150px] max-[600px]:pt-[125px]">
        <Link
          href={localePath(locale, "/#work")}
          className="group inline-flex animate-reveal items-center gap-2 font-mono text-[11px] tracking-[0.08em] text-muted uppercase transition-colors duration-[180ms] hover:text-ink"
        >
          <ArrowLeftIcon className="size-4 transition-transform duration-[180ms] group-hover:-translate-x-0.5" />
          {dict.actions.backToWork}
        </Link>

        <div className="mt-12 grid animate-reveal grid-cols-[1.15fr_0.85fr] items-end gap-[70px] [animation-delay:100ms] max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <div>
            <ProjectMeta project={project} />
            <h1
              id="project-title"
              className="mt-5 text-[clamp(50px,6.1vw,88px)] leading-[0.98] font-semibold tracking-[-0.065em] text-ink max-[600px]:text-[48px]"
            >
              {project.title}
            </h1>
          </div>
          <p className="text-xl leading-[1.35] text-ink">{project.headline}</p>
        </div>

        {hasLinks && (
          <ProjectLinks project={project} locale={locale} showDetails={false} className="mt-10 animate-reveal [animation-delay:200ms]" />
        )}

        <figure className="mt-14 animate-reveal [animation-delay:300ms] max-[600px]:mt-10">
          <ProjectStage
            project={project}
            media={hero}
            layered={false}
            preload
            sizes="(max-width: 900px) calc(100vw - 80px), 720px"
          />
          {hero.caption && (
            <figcaption className="mt-4 max-w-3xl font-mono text-[11px] leading-relaxed text-muted">
              <span aria-hidden className="text-acid-deep">
                ↳{" "}
              </span>
              {hero.caption}
            </figcaption>
          )}
        </figure>
      </Container>
    </section>
  );
}
