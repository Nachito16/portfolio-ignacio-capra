import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise, technologies } from "@/data/skills";
import type { Dictionary } from "@/i18n/dictionaries";

/** Four equal toolkit cards: each technology group with its expertise area. */
export function Skills({ dict }: { dict: Dictionary }) {
  const { eyebrow, kicker, title } = dict.sections.skills;

  return (
    <section id="skills" aria-labelledby="skills-title" className="pt-5 pb-[150px] max-[900px]:pb-[100px]">
      <Container>
        <SectionHeading id="skills-title" index={eyebrow} kicker={kicker} title={title} className="mb-[70px] max-[900px]:mb-12" />

        <ul className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {technologies.map((group, index) => {
            const area = expertise.find((item) => item.icon === group.area);
            return (
              <li
                key={group.label}
                className="min-h-[330px] border-r border-line px-6 py-[30px] transition-colors duration-200 ease-in-out first:border-l hover:bg-paper-alt max-[900px]:border-b max-[900px]:[&:nth-child(odd)]:border-l max-[900px]:[&:nth-child(-n+2)]:border-t max-[600px]:min-h-0 max-[600px]:border-l max-[600px]:[&:nth-child(2)]:border-t-0"
                data-reveal
                style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <p className="flex justify-between font-mono text-[11px] text-muted">
                  <span className="text-ink">{String(index + 1).padStart(2, "0")}</span>
                  {area && <span className="tracking-[0.08em] uppercase">{area.title}</span>}
                </p>
                <h3 className="mt-[70px] mb-[26px] text-[22px] font-semibold tracking-[-0.03em] text-ink max-[600px]:mt-10">
                  {group.label}
                </h3>
                {area && <p className="mb-6 text-sm leading-[1.6] text-body">{area.description}</p>}
                <ul aria-label={group.label} className="flex flex-col gap-2 font-mono text-[11px] text-label">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
