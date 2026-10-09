import type { ExpertiseArea, TechnologyGroup } from "./types";

export const expertise: ExpertiseArea[] = [
  {
    title: "Enterprise Development",
    description: "NetSuite customization, business process automation and integrations.",
    icon: "enterprise",
  },
  {
    title: "Web Development",
    description: "Modern responsive applications and product interfaces.",
    icon: "web",
  },
  {
    title: "Backend & Data",
    description: "APIs, relational databases and application architecture.",
    icon: "data",
  },
  {
    title: "Testing & Delivery",
    description: "Testing, Git workflows and deployment.",
    icon: "delivery",
  },
];

export const technologies: TechnologyGroup[] = [
  {
    label: "Frontend",
    area: "web",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Angular", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Enterprise",
    area: "enterprise",
    items: ["NetSuite", "SuiteScript", "FreeMarker", "SuiteTalk", "Saved Searches"],
  },
  {
    label: "Backend & Data",
    area: "data",
    items: ["Java", "Spring Boot", "Supabase", "PostgreSQL", "SQL", "REST APIs"],
  },
  {
    label: "Tools",
    area: "delivery",
    items: ["Git", "GitHub", "Vercel", "Postman"],
  },
];
