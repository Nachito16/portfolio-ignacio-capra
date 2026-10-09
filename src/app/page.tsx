import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";
import { profile } from "@/data/profile";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { absoluteUrl } from "@/lib/site";

export default function HomePage() {
  const dict = getDictionary(defaultLocale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: absoluteUrl("/"),
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
      <Hero dict={dict} />
      <About dict={dict} />
      <Experience dict={dict} />
      <SelectedWork dict={dict} />
      <Skills dict={dict} />
      <Education dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
