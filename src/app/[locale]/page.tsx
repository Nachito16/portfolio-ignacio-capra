import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";
import { getProfile } from "@/data/profile";
import { isLocale, localePath } from "@/i18n/config";
import { absoluteUrl } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const profile = getProfile(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: absoluteUrl(localePath(locale, "/")),
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" },
    sameAs: [profile.social.linkedin, profile.social.github],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero locale={locale} />
      <About locale={locale} />
      <Experience locale={locale} />
      <SelectedWork locale={locale} />
      <Skills locale={locale} />
      <Education locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
