import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProjects } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function SelectedWork({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { eyebrow, kicker, title, description } = dict.sections.work;

  return (
    <section id="work" aria-labelledby="work-title" className="pt-[150px] max-[900px]:pt-[100px]">
      <Container>
        <div className="mb-[70px] grid grid-cols-[1.3fr_0.7fr] items-end gap-20 max-[900px]:mb-12 max-[900px]:grid-cols-1 max-[900px]:gap-6">
          <SectionHeading id="work-title" index={eyebrow} kicker={kicker} title={title} />
          <p className="text-[17px] leading-[1.75] text-body-strong" data-reveal>
            {description}
          </p>
        </div>

        {getProjects(locale).map((project, index) => (
          <ProjectShowcase key={project.slug} project={project} locale={locale} reversed={index % 2 === 1} />
        ))}
      </Container>
    </section>
  );
}
