import { Container } from "@/components/ui/Container";
import { FactStrip } from "@/components/ui/FactStrip";
import type { CaseStudy } from "@/data/types";
import type { Locale } from "@/i18n/config";
import { getDictionary, type Dictionary } from "@/i18n/dictionaries";
import { ArchitectureFlow, ArchitectureLayers } from "./ArchitectureDiagram";
import { CaseStudySection, Prose } from "./CaseStudySection";
import { WorkflowStep } from "./WorkflowStep";

type SectionId = keyof Dictionary["caseStudy"]["sections"];

const order: SectionId[] = ["overview", "challenge", "solution", "features", "architecture", "stack", "learnings"];

/** Full case study layout with a sticky mono table of contents on large screens. */
export function CaseStudyBody({ caseStudy, locale }: { caseStudy: CaseStudy; locale: Locale }) {
  const dict = getDictionary(locale);
  const titles = dict.caseStudy.sections;

  const content: Record<SectionId, React.ReactNode> = {
    overview: (
      <>
        <Prose paragraphs={caseStudy.overview} lead />
        <FactStrip facts={caseStudy.facts} />
      </>
    ),
    challenge: <Prose paragraphs={caseStudy.challenge} />,
    solution: <Prose paragraphs={caseStudy.solution} />,
    features: (
      <div className="space-y-[90px] max-[600px]:space-y-16">
        <Prose paragraphs={[caseStudy.workflowIntro]} lead />
        {caseStudy.workflow.map((step, index) => (
          <WorkflowStep key={step.title} step={step} index={index + 1} />
        ))}
      </div>
    ),
    architecture: (
      <div className="space-y-10">
        <Prose paragraphs={[caseStudy.architecture.intro]} />
        <ArchitectureFlow steps={caseStudy.architecture.flow} label={dict.caseStudy.dataFlow} />
        <ArchitectureLayers layers={caseStudy.architecture.layers} />
      </div>
    ),
    stack: (
      <dl className="border-t border-line" data-reveal>
        {caseStudy.stackGroups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-[160px_1fr] items-center gap-8 border-b border-line py-5 max-[600px]:grid-cols-1 max-[600px]:gap-3"
          >
            <dt className="text-[15px] font-semibold tracking-[-0.02em] text-ink">{group.label}</dt>
            <dd className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] text-label">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    ),
    learnings: (
      <ol className="border-t border-line">
        {caseStudy.learnings.map((item, index) => (
          <li
            key={item.title}
            className="grid grid-cols-[60px_1fr_1.2fr] gap-[34px] border-b border-line py-9 transition-[padding,background-color] duration-200 ease-in-out hover:bg-paper-alt hover:px-[18px] max-[900px]:grid-cols-[40px_1fr] max-[900px]:gap-x-4 max-[900px]:gap-y-3"
            data-reveal
          >
            <span aria-hidden className="pt-1 font-mono text-[11px] text-acid-deep">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl leading-[1.3] font-semibold tracking-[-0.03em] text-ink">{item.title}</h3>
            <p className="text-[15px] leading-[1.7] text-body max-[900px]:col-start-2">{item.description}</p>
          </li>
        ))}
      </ol>
    ),
  };

  return (
    <Container className="py-[120px] max-[900px]:py-[90px]">
      <div className="grid grid-cols-[180px_minmax(0,1fr)] gap-[70px] max-[900px]:grid-cols-1">
        <nav aria-label={dict.caseStudy.onThisPage} className="max-[900px]:hidden">
          <div className="sticky top-[110px]">
            <p className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{dict.caseStudy.onThisPage}</p>
            <ol className="mt-5 border-l border-line">
              {order.map((id, index) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-[13px] font-semibold text-nav transition-colors duration-[180ms] hover:border-ink hover:text-ink"
                  >
                    <span aria-hidden className="font-mono text-[10px] font-normal text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {titles[id]}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="min-w-0 space-y-[120px] max-[900px]:space-y-[90px]">
          {order.map((id, index) => (
            <CaseStudySection key={id} id={id} index={index + 1} title={titles[id]}>
              {content[id]}
            </CaseStudySection>
          ))}
        </div>
      </div>
    </Container>
  );
}
