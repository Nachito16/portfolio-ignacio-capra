import type { Locale } from "@/i18n/config";
import type { Media } from "./types";

/** Values shared by every language. */
const shared = {
  name: "Ignacio Capra",
  location: "Montevideo, Uruguay",
  availability: true,
  email: "nachocapra42@hotmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/ignacio-capra-23a175245",
    github: "https://github.com/Nachito16",
  },
};

const photoSrc = { src: "/images/profile.jpg", width: 1500, height: 2000 };

const profiles = {
  en: {
    ...shared,
    role: "Software Developer",
    headline: "Building reliable software for real-world problems.",
    /** Hero rendering of the headline: the second part is set in the lighter, muted style. */
    headlineParts: { lead: "Building reliable software", emphasis: "for real-world problems." },
    intro:
      "Software Developer with 6+ years of experience building web applications, enterprise solutions and business process automations.",
    cvUrl: "/cv/Ignacio_Capra_CV.pdf",
    photo: { ...photoSrc, alt: "Portrait of Ignacio Capra" } satisfies Media,
    /** Labels used by the decorative code card in the hero. */
    code: { experience: "6+ years", based: "Montevideo, UY" },
    about: [
      "I'm a Software Developer based in Montevideo, Uruguay, with experience building enterprise solutions, web applications and process automations.",
      "My professional background includes extensive work with Oracle NetSuite and SuiteScript, developing custom solutions, integrations, workflows and business process automations.",
      "Beyond enterprise development, I build web products using modern technologies such as React, Next.js, Angular, TypeScript, Supabase and PostgreSQL.",
      "I enjoy understanding a problem end-to-end and turning business requirements into reliable, maintainable software.",
    ],
    facts: [
      { label: "Based in", value: "Montevideo, Uruguay" },
      { label: "Experience", value: "6+ years" },
      { label: "Focus", value: "Web · Enterprise · Automation" },
    ],
    contact: {
      headline: "Let's build something.",
      text: "I'm currently open to new opportunities and interested in challenging software projects.",
    },
  },
  es: {
    ...shared,
    role: "Desarrollador de Software",
    headline: "Construyo software confiable para problemas reales.",
    headlineParts: { lead: "Construyo software confiable", emphasis: "para problemas reales." },
    intro:
      "Desarrollador de software con más de 6 años de experiencia construyendo aplicaciones web, soluciones empresariales y automatizaciones de procesos de negocio.",
    cvUrl: "/cv/Ignacio_Capra_CV_ES.pdf",
    photo: { ...photoSrc, alt: "Retrato de Ignacio Capra" } satisfies Media,
    code: { experience: "6+ años", based: "Montevideo, UY" },
    about: [
      "Soy desarrollador de software en Montevideo, Uruguay, con experiencia construyendo soluciones empresariales, aplicaciones web y automatizaciones de procesos.",
      "Mi trayectoria incluye un trabajo extenso con Oracle NetSuite y SuiteScript: soluciones a medida, integraciones, workflows y automatización de procesos de negocio.",
      "Más allá del desarrollo empresarial, construyo productos web con tecnologías modernas como React, Next.js, Angular, TypeScript, Supabase y PostgreSQL.",
      "Me gusta entender un problema de punta a punta y transformar requerimientos de negocio en software confiable y mantenible.",
    ],
    facts: [
      { label: "Desde", value: "Montevideo, Uruguay" },
      { label: "Experiencia", value: "6+ años" },
      { label: "Enfoque", value: "Web · Empresas · Automatización" },
    ],
    contact: {
      headline: "Construyamos algo.",
      text: "Estoy abierto a nuevas oportunidades y me interesan los proyectos de software desafiantes.",
    },
  },
} satisfies Record<Locale, unknown>;

export type Profile = (typeof profiles)["en"];

export function getProfile(locale: Locale): Profile {
  return profiles[locale];
}
