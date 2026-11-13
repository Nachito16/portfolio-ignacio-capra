import { Container } from "@/components/ui/Container";
import type { Project } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CaseStudySection, Prose } from "./CaseStudySection";
import { Figure, StepHeading } from "./WorkflowStep";

/** Lighter project page used until a full case study is written. */
export function ProjectSummary({ project, locale }: { project: Project; locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <Container className="space-y-[120px] py-[120px] max-[900px]:space-y-[90px] max-[900px]:py-[90px]">
      <CaseStudySection id="overview" index={1} title={dict.caseStudy.sections.overview}>
        <div className="grid grid-cols-[minmax(0,1fr)_260px] gap-[70px] max-[900px]:grid-cols-1 max-[900px]:gap-10">
          <div>
            <Prose paragraphs={[...project.description, ...(project.details ?? [])]} lead />
            <p className="mt-10 max-w-[680px] rounded-[9px] border border-dashed border-line-strong px-5 py-4 text-sm leading-[1.6] text-body">
              {dict.caseStudy.inProgress}
            </p>
          </div>
          <aside data-reveal>
            <h3 className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{dict.projects.stack}</h3>
            <ul className="mt-4 border-t border-line">
              {project.stack.map((item) => (
                <li key={item} className="border-b border-line py-3 text-[15px] font-semibold tracking-[-0.02em] text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </CaseStudySection>

      {project.screens && project.screens.length > 0 && (
        <CaseStudySection id="screens" index={2} title={dict.caseStudy.screens}>
          <div className="space-y-[90px] max-[600px]:space-y-16">
            {project.screens.map((screen) => (
              <div key={screen.title} data-reveal>
                <StepHeading title={screen.title} description={[screen.description]} />
                <Figure
                  media={screen.media}
                  sizes="(max-width: 1180px) calc(100vw - 48px), 1180px"
                  className="mt-9"
                />
              </div>
            ))}
          </div>
        </CaseStudySection>
      )}
    </Container>
  );
}
