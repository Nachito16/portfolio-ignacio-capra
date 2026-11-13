import { ButtonLink } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { SectionKicker } from "@/components/ui/SectionHeading";
import { getProfile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/** Full-bleed dark band; the last word of the headline is set in acid green. */
export function Contact({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const profile = getProfile(locale);
  const { eyebrow, kicker } = dict.sections.contact;
  const headline = profile.contact.headline;
  const split = headline.lastIndexOf(" ");
  const [first, last] = split > 0 ? [headline.slice(0, split), headline.slice(split + 1)] : ["", headline];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-dark bleed relative overflow-hidden bg-ink py-[140px] text-paper max-[900px]:py-[100px]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-180px] bottom-[-290px] size-[700px] rounded-full border border-[rgba(183,242,74,0.14)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[-90px] bottom-[-380px] size-[700px] rounded-full border border-[rgba(183,242,74,0.14)]"
      />

      <div className="relative" data-reveal>
        <SectionKicker index={eyebrow} kicker={kicker} tone="dark" />
        <h2
          id="contact-title"
          className="mt-6 text-[clamp(48px,7vw,96px)] leading-none font-semibold tracking-[-0.065em]"
        >
          {first && (
            <>
              {first}
              <br />
            </>
          )}
          <span className="text-acid">{last}</span>
        </h2>
        <p className="mt-[34px] mb-[60px] max-w-[580px] text-base leading-[1.7] text-dim-2">{profile.contact.text}</p>

        <div className="flex max-w-[840px] items-center justify-between gap-6 border-y border-white/20 py-[22px] text-[clamp(18px,3vw,34px)] tracking-[-0.03em]">
          <a
            href={`mailto:${profile.email}`}
            className="min-w-0 transition-colors duration-[180ms] hover:text-acid max-[600px]:break-all"
          >
            {profile.email}
          </a>
          <CopyEmailButton email={profile.email} label={dict.actions.copyEmail} copiedLabel={dict.actions.copied} />
        </div>

        <div className="mt-10 flex flex-wrap gap-3 max-[600px]:flex-col">
          <ButtonLink href={`mailto:${profile.email}`} variant="acid" icon={<MailIcon className="size-4" />}>
            {dict.actions.emailMe}
          </ButtonLink>
          <ButtonLink href={profile.social.linkedin} external newTabLabel={dict.footer.newTab} variant="ghost-dark" icon={<LinkedInIcon className="size-4" />}>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={profile.social.github} external newTabLabel={dict.footer.newTab} variant="ghost-dark" icon={<GitHubIcon className="size-4" />}>
            GitHub
          </ButtonLink>
          <ButtonLink href={profile.cvUrl} download variant="ghost-dark" icon={<DownloadIcon className="size-4" />}>
            {dict.actions.downloadCv}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
