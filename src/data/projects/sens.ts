import { localized } from "../localized";
import type { Project } from "../types";

const img = (file: string, width: number, height: number) => ({
  src: `/images/projects/sens/${file}`,
  width,
  height,
});

export const sens = localized<Project>((t) => {
  const media = {
    home: {
      ...img("home.jpg", 1600, 719),
      alt: t({
        en: "Sens homepage: full-width photo of a barbershop interior with barber chairs and mirrors, the Sens logo, navigation links and a 'Reservá tu turno' booking button.",
        es: "Inicio de Sens: foto a todo el ancho del interior de una barbería con sillones y espejos, el logo de Sens, los enlaces de navegación y el botón de reserva «Reservá tu turno».",
      }),
    },
    gallery: {
      ...img("gallery.jpg", 1600, 762),
      alt: t({
        en: "Sens photo carousels: two rows of images showing the shop interior and client haircuts.",
        es: "Carruseles de fotos de Sens: dos filas de imágenes con el interior del local y cortes de clientes.",
      }),
    },
    teamLocation: {
      ...img("team-location.jpg", 1119, 833),
      alt: t({
        en: "Sens team section with three barber profile cards, and a location section with an embedded map, address, opening hours, social links and a booking button.",
        es: "Sección de equipo de Sens con tres tarjetas de barberos, y una sección de ubicación con un mapa integrado, dirección, horarios, redes sociales y botón de reserva.",
      }),
    },
  };

  return {
    slug: "sens",
    index: "03",
    title: "Sens",
    category: t({ en: "Barbershop Website", es: "Sitio web de barbería" }),
    year: "2025",
    headline: t({ en: "A barbershop website built around booking.", es: "Un sitio de barbería pensado para reservar." }),
    description: [
      t({
        en: "A responsive web experience designed for a barbershop, focused on presenting the brand, team and location while providing customers with an easy way to book appointments.",
        es: "Una experiencia web responsiva para una barbería, enfocada en presentar la marca, el equipo y la ubicación, y en darle a los clientes una forma simple de reservar turno.",
      }),
    ],
    details: [
      t({
        en: "Built as a single-page Angular and TypeScript application with Bootstrap. Smooth-scrolling navigation moves between the About, Team, Visit and Services sections, and the services include a tattoo offering with its own contact links.",
        es: "Es una aplicación de una sola página con Angular, TypeScript y Bootstrap. La navegación con desplazamiento suave recorre las secciones Nosotros, Equipo, Visitarnos y Ofrecemos, y los servicios incluyen tatuajes con sus propios enlaces de contacto.",
      }),
      t({
        en: "Auto-scrolling photo carousels present the shop and its work, adapting their speed to the screen size and pausing on tap. The location section embeds a map with the address and opening hours, and customers can book through the shop's online booking platform or get in touch on WhatsApp and Instagram.",
        es: "Carruseles de fotos con desplazamiento automático muestran el local y sus trabajos, adaptan su velocidad al tamaño de pantalla y se pausan al tocarlos. La sección de ubicación integra un mapa con la dirección y los horarios, y los clientes pueden reservar en la plataforma de turnos del local o escribir por WhatsApp e Instagram.",
      }),
    ],
    stack: ["Angular", "TypeScript", "Bootstrap"],
    links: {
      live: null, // Set the live URL once available.
      github: "https://github.com/Nachito16/Sens",
    },
    cover: media.home,
    stage: "coral",
    composition: [media.home, media.gallery, media.teamLocation],
    screens: [
      {
        title: t({ en: "Photo carousels", es: "Carruseles de fotos" }),
        description: t({
          en: "Continuously scrolling rows of photos showing the shop and client haircuts, running in opposite directions.",
          es: "Filas de fotos en movimiento continuo, en direcciones opuestas, con el local y cortes de clientes.",
        }),
        media: media.gallery,
      },
      {
        title: t({ en: "Team and location", es: "Equipo y ubicación" }),
        description: t({
          en: "A card for each barber, and a location section with an embedded map, address, opening hours, Instagram and WhatsApp links and a booking button.",
          es: "Una tarjeta por barbero, y una sección de ubicación con mapa integrado, dirección, horarios, enlaces a Instagram y WhatsApp y un botón de reserva.",
        }),
        media: media.teamLocation,
      },
    ],
  };
});
