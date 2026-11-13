import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, DownloadIcon } from "@/components/ui/Icons";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { getProfile } from "@/data/profile";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { HeroVisual } from "./HeroVisual";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const profile = getProfile(locale);
  const { lead, emphasis } = profile.headlineParts;

  return (
    <section aria-labelledby="hero-title" className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] right-[-25%] size-[620px] rounded-full bg-[radial-gradient(circle,rgba(183,242,74,0.16),rgba(183,242,74,0)_68%)]"
      />

      <Container className="relative grid min-h-[850px] grid-cols-[1.15fr_0.85fr] items-center gap-[70px] pt-[110px] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:pt-[160px] max-[900px]:pb-[120px] max-[600px]:pt-[135px] max-[600px]:pb-[90px]">
        <div>
          <p className="animate-reveal font-mono text-xs tracking-[0.04em] text-muted uppercase">
            {profile.name} — {profile.role}
          </p>

          <h1
            id="hero-title"
            className="mt-7 animate-reveal text-[clamp(50px,6.1vw,88px)] leading-[0.98] font-semibold tracking-[-0.065em] text-ink [animation-delay:100ms] max-[600px]:text-[48px]"
          >
            {lead} <em className="font-normal text-muted not-italic">{emphasis}</em>
          </h1>

          <p className="mt-8 max-w-[560px] animate-reveal text-lg leading-[1.65] text-body [animation-delay:200ms] max-[600px]:text-[15px]">
            {profile.intro}
          </p>

          <div className="mt-10 flex animate-reveal flex-wrap gap-3 [animation-delay:300ms]">
            <ButtonLink href={localePath(locale, "/#work")} icon={<ArrowRightIcon className="size-4" />} iconAfter>
              {dict.actions.viewWork}
            </ButtonLink>
            <ButtonLink href={profile.cvUrl} download variant="secondary" icon={<DownloadIcon className="size-4" />}>
              {dict.actions.downloadCv}
            </ButtonLink>
          </div>

          <ul className="mt-[55px] flex animate-reveal flex-wrap items-center gap-7 border-t border-line pt-5 font-mono text-[11px] text-muted [animation-delay:300ms] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-3">
            {profile.availability && (
              <li>
                <StatusIndicator label={dict.hero.available} className="text-ink" />
              </li>
            )}
            <li>{profile.location}</li>
          </ul>
        </div>

        <HeroVisual locale={locale} className="animate-reveal [animation-delay:200ms]" />
      </Container>
    </section>
  );
}
