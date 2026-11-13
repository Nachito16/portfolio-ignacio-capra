import { localized } from "./localized";
import type { ExperienceEntry } from "./types";

/** Job titles stay in English in both languages, as in the CV. */
export const getExperience = localized<ExperienceEntry[]>((t) => {
  const remote = t({ en: "Remote", es: "Remoto" });
  const month = (date: string, en: string, es: string) => ({ date, label: t({ en, es }) });

  return [
    {
      company: "Oracle NetSuite",
      period: "2023 — 2026",
      role: {
        title: "Senior Principal Technical Consultant",
        start: month("2023-09", "September 2023", "Septiembre 2023"),
        end: month("2026-09", "September 2026", "Septiembre 2026"),
        location: remote,
        highlights: [
          t({
            en: "Designed and developed customized NetSuite solutions based on client business requirements.",
            es: "Diseño y desarrollo de soluciones personalizadas en NetSuite según los requerimientos de negocio de cada cliente.",
          }),
          t({
            en: "Developed SuiteScript 2.x solutions including User Event, Client, Suitelet, Scheduled and Map/Reduce scripts.",
            es: "Desarrollo con SuiteScript 2.x: scripts User Event, Client, Suitelet, Scheduled y Map/Reduce.",
          }),
          t({
            en: "Built custom PDF/HTML documents using FreeMarker and implemented automations and integrations to optimize financial and operational processes.",
            es: "Documentos PDF/HTML a medida con FreeMarker, y automatizaciones e integraciones para optimizar procesos financieros y operativos.",
          }),
          t({
            en: "Worked directly with clients across requirements gathering, development, testing and deployment.",
            es: "Trabajo directo con clientes durante el relevamiento de requerimientos, el desarrollo, el testing y el despliegue.",
          }),
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
        start: month("2020-07", "July 2020", "Julio 2020"),
        end: month("2022-08", "August 2022", "Agosto 2022"),
        location: remote,
        highlights: [
          t({
            en: "Developed responsive web interfaces and reusable components, interactive UI functionality and internal tools while collaborating with multidisciplinary development teams.",
            es: "Desarrollo de interfaces web responsivas y componentes reutilizables, funcionalidades interactivas y herramientas internas, en colaboración con equipos multidisciplinarios.",
          }),
        ],
        tagsLabel: t({ en: "Additional areas", es: "Otras áreas" }),
        tags: [
          t({ en: "CMS platforms", es: "Plataformas CMS" }),
          t({ en: "Google Workspace automation", es: "Automatización de Google Workspace" }),
        ],
      },
      previousRoles: [
        {
          title: "Compliance Resource Center",
          team: "PwC",
          start: month("2019-04", "April 2019", "Abril 2019"),
          end: month("2020-07", "July 2020", "Julio 2020"),
          highlights: [
            t({
              en: "Provided technical assistance, incident management and service request support.",
              es: "Asistencia técnica, gestión de incidentes y soporte de solicitudes de servicio.",
            }),
          ],
        },
        {
          title: "Target Corporation Support",
          start: month("2018-08", "August 2018", "Agosto 2018"),
          end: month("2019-04", "April 2019", "Abril 2019"),
          highlights: [
            t({
              en: "Technical support for internal systems and devices, incident management and troubleshooting.",
              es: "Soporte técnico de sistemas internos y dispositivos, gestión de incidentes y resolución de problemas.",
            }),
          ],
        },
      ],
    },
  ];
});
