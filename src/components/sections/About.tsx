import { Container } from "@/components/ui/Container";
import { FactStrip } from "@/components/ui/FactStrip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionaries";

export function About({ dict }: { dict: Dictionary }) {
  const [lead, ...paragraphs] = profile.about;
  const { eyebrow, kicker, title } = dict.sections.about;

  return (
    <section id="about" aria-labelledby="about-title" className="py-[140px] max-[900px]:py-[100px]">
      <Container className="grid grid-cols-2 gap-[10%] max-[900px]:grid-cols-1 max-[900px]:gap-10">
        <SectionHeading id="about-title" index={eyebrow} kicker={kicker} title={title} />

        <div data-reveal>
          <p className="text-[22px] leading-[1.55] text-pretty text-ink max-[600px]:text-xl">{lead}</p>
          <div className="mt-7 space-y-5 text-[17px] leading-[1.75] text-body-strong max-[600px]:text-base">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
          <FactStrip facts={profile.facts} />
        </div>
      </Container>
    </section>
  );
}
