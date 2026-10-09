import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    company: "Oracle NetSuite",
    period: "2023 — 2026",
    role: {
      title: "Senior Principal Technical Consultant",
      start: { label: "September 2023", date: "2023-09" },
      end: { label: "September 2026", date: "2026-09" },
      location: "Remote",
      highlights: [
        "Designed and developed customized NetSuite solutions based on client business requirements.",
        "Developed SuiteScript 2.x solutions including User Event, Client, Suitelet, Scheduled and Map/Reduce scripts.",
        "Built custom PDF/HTML documents using FreeMarker and implemented automations and integrations to optimize financial and operational processes.",
        "Worked directly with clients across requirements gathering, development, testing and deployment.",
      ],
      tags: ["NetSuite", "SuiteScript 2.x", "JavaScript", "FreeMarker", "REST/SOAP", "Saved Searches"],
    },
  },
  {
    company: "Tata Consultancy Services (TCS)",
    period: "2018 — 2022",
    role: {
      title: "Full Stack Developer",
      team: "PwC Web Team",
      start: { label: "July 2020", date: "2020-07" },
      end: { label: "August 2022", date: "2022-08" },
      location: "Remote",
      highlights: [
        "Developed responsive web interfaces and reusable components, interactive UI functionality and internal tools while collaborating with multidisciplinary development teams.",
      ],
      tagsLabel: "Additional areas",
      tags: ["CMS platforms", "Google Workspace automation"],
    },
    previousRoles: [
      {
        title: "Compliance Resource Center",
        team: "PwC",
        start: { label: "April 2019", date: "2019-04" },
        end: { label: "July 2020", date: "2020-07" },
        highlights: ["Provided technical assistance, incident management and service request support."],
      },
      {
        title: "Target Corporation Support",
        start: { label: "August 2018", date: "2018-08" },
        end: { label: "April 2019", date: "2019-04" },
        highlights: [
          "Technical support for internal systems and devices, incident management and troubleshooting.",
        ],
      },
    ],
  },
];
