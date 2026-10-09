import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Dictionary } from "@/i18n/dictionaries";

export function SelectedWork({ dict }: { dict: Dictionary }) {
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

        {projects.map((project, index) => (
          <ProjectShowcase key={project.slug} project={project} dict={dict} reversed={index % 2 === 1} />
        ))}
      </Container>
    </section>
  );
}
