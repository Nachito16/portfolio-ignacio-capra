import { localized } from "./localized";
import type { ExpertiseArea, TechnologyGroup } from "./types";

export const getExpertise = localized<ExpertiseArea[]>((t) => [
  {
    title: t({ en: "Enterprise Development", es: "Desarrollo empresarial" }),
    description: t({
      en: "NetSuite customization, business process automation and integrations.",
      es: "Personalización de NetSuite, automatización de procesos de negocio e integraciones.",
    }),
    icon: "enterprise",
  },
  {
    title: t({ en: "Web Development", es: "Desarrollo web" }),
    description: t({
      en: "Modern responsive applications and product interfaces.",
      es: "Aplicaciones modernas y responsivas, e interfaces de producto.",
    }),
    icon: "web",
  },
  {
    title: t({ en: "Backend & Data", es: "Backend y datos" }),
    description: t({
      en: "APIs, relational databases and application architecture.",
      es: "APIs, bases de datos relacionales y arquitectura de aplicaciones.",
    }),
    icon: "data",
  },
  {
    title: t({ en: "Testing & Delivery", es: "Testing y entrega" }),
    description: t({
      en: "Testing, Git workflows and deployment.",
      es: "Testing, flujos de trabajo con Git y despliegue.",
    }),
    icon: "delivery",
  },
]);

export const getTechnologies = localized<TechnologyGroup[]>((t) => [
  {
    label: "Frontend",
    area: "web",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: t({ en: "Enterprise", es: "Empresarial" }),
    area: "enterprise",
    items: ["NetSuite", "SuiteScript", "FreeMarker", "SuiteTalk", "Saved Searches"],
  },
  {
    label: t({ en: "Backend & Data", es: "Backend y datos" }),
    area: "data",
    items: ["Java", "Spring Boot", "Supabase", "PostgreSQL", "SQL", "REST APIs"],
  },
  {
    label: t({ en: "Tools", es: "Herramientas" }),
    area: "delivery",
    items: ["Git", "GitHub", "Vercel", "Postman"],
  },
]);
