import { Container } from "@/components/ui/Container";
import { FactStrip } from "@/components/ui/FactStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import type { Dictionary } from "@/i18n/dictionaries";

/** Mirrors the About layout: heading left, degree details with a fact strip right. */
export function Education({ dict }: { dict: Dictionary }) {
  const { eyebrow, kicker, title, finalProject } = dict.sections.education;

  return (
    <section id="education" aria-labelledby="education-title" className="pb-[140px] max-[900px]:pb-[100px]">
      <Container className="grid grid-cols-2 gap-[10%] border-t border-line pt-[110px] max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:pt-[80px]">
        <SectionHeading id="education-title" index={eyebrow} kicker={kicker} title={title} />

        <div>
          {education.map((item) => (
            <article key={item.degree} data-reveal>
              <h3 className="text-[clamp(26px,2.4vw,34px)] leading-[1.15] font-semibold tracking-[-0.045em] text-ink">
                {item.degree}
              </h3>
              <p className="mt-3 text-[17px] leading-[1.6] text-body-strong">
                {item.faculty} — {item.institution}
              </p>
              <p className="mt-6 text-[17px] leading-[1.75] text-body-strong">{item.description}</p>

              <FactStrip
                facts={[
                  { label: "Location", value: item.location },
                  { label: "Period", value: item.period.label },
                ]}
              />

              <div className="mt-[42px] border-t border-line pt-[25px]">
                <h4 className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">{finalProject}</h4>
                <p className="mt-3 text-xl leading-[1.35] text-ink">
                  <span className="font-semibold">{item.finalProject.title}</span>
                  <span className="text-body"> — {item.finalProject.description}</span>
                </p>
                <p className="mt-2 flex gap-2 font-mono text-[11px] text-feature">
                  <span aria-hidden className="text-acid-deep">
                    ↳
                  </span>
                  {item.finalProject.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
