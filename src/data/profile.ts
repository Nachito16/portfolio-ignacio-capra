import type { Media } from "./types";

const photo: Media = {
  src: "/images/profile.jpg",
  alt: "Portrait of Ignacio Capra",
  width: 1500,
  height: 2000,
};

export const profile = {
  name: "Ignacio Capra",
  role: "Software Developer",
  headline: "Building reliable software for real-world problems.",
  /** Hero rendering of the headline: the second part is set in the lighter, muted style. */
  headlineParts: { lead: "Building reliable software", emphasis: "for real-world problems." },
  intro:
    "Software Developer with 6+ years of experience building web applications, enterprise solutions and business process automations.",
  location: "Montevideo, Uruguay",
  availability: true,
  email: "nachocapra42@hotmail.com",
  cvUrl: "/cv/Ignacio_Capra_CV.pdf",
  photo,
  social: {
    linkedin: "https://www.linkedin.com/in/ignacio-capra-23a175245",
    github: "https://github.com/Nachito16",
  },
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
};
