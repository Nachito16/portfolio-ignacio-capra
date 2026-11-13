import { localized } from "./localized";

export const getEducation = localized((t) => [
  {
    degree: t({ en: "Technologist in Information Technology", es: "Tecnólogo en Informática" }),
    faculty: t({ en: "Faculty of Engineering", es: "Facultad de Ingeniería" }),
    institution: "Universidad de la República",
    location: "Montevideo, Uruguay",
    period: { label: "2016 — 2023", start: "2016", end: "2023" },
    description: t({
      en: "Technical degree focused on software development, databases, systems analysis and the design and implementation of software solutions.",
      es: "Carrera técnica enfocada en desarrollo de software, bases de datos, análisis de sistemas y el diseño e implementación de soluciones de software.",
    }),
    /** Context for the degree only; intentionally not a portfolio project (no page or links). */
    finalProject: {
      title: "TuMerK2",
      description: t({ en: "Online Supermarket Shopping Platform", es: "Plataforma de compras online para supermercados" }),
      details: t({
        en: "Academic Team Project · Web Development & Testing",
        es: "Proyecto académico en equipo · Desarrollo web y testing",
      }),
    },
    labels: {
      location: t({ en: "Location", es: "Ubicación" }),
      period: t({ en: "Period", es: "Período" }),
    },
  },
]);
