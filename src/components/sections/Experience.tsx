import { ExperienceRow } from "@/components/experience/ExperienceItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import type { Dictionary } from "@/i18n/dictionaries";

/** Full-bleed dark band. Each role is a horizontal row; earlier TCS roles follow as compact rows. */
export function Experience({ dict }: { dict: Dictionary }) {
  const { eyebrow, kicker, title, description } = dict.sections.experience;
  let index = 0;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="on-dark bleed bg-ink py-[140px] text-paper max-[900px]:py-[100px]"
    >
      <div className="mb-20 grid grid-cols-[1.3fr_0.7fr] items-end gap-20 max-[900px]:mb-14 max-[900px]:grid-cols-1 max-[900px]:gap-6">
        <SectionHeading id="experience-title" index={eyebrow} kicker={kicker} title={title} tone="dark" />
        <p className="text-base leading-[1.7] text-dim-2" data-reveal>
          {description}
        </p>
      </div>

      <ol className="border-t border-white/15">
        {experience.map((entry) => (
          <li key={entry.company} className="contents">
            <ExperienceRow role={entry.role} company={entry.company} index={String(++index).padStart(2, "0")} />
            {entry.previousRoles?.map((role) => (
              <ExperienceRow key={role.title} role={role} company={entry.company} earlier label={dict.experience.previousRole} />
            ))}
          </li>
        ))}
      </ol>
    </section>
  );
}
