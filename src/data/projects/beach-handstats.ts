import { localized } from "../localized";
import type { Project } from "../types";

const img = (file: string, width: number, height: number) => ({
  src: `/images/projects/beach-handstats/${file}`,
  width,
  height,
});

/**
 * Beach HandStats — independent sibling of HandStats for beach handball.
 * Content verified against the app's README, project status document, routes and screenshots.
 * Screenshots use the app's demo data (fictional teams and players).
 */
export const beachHandstats = localized<Project>((t) => {
  const media = {
    liveOffline: {
      ...img("live-capture-offline.png", 1280, 800),
      alt: t({
        en: "Beach HandStats capture console during the first period, Arena 4–3 Playa Norte, offline with one pending change: player and goalkeeper lists, a beach court with numbered zones, a goal divided into nine areas, and buttons for one-point and two-point goals.",
        es: "Consola de registro de Beach HandStats en el primer período, Arena 4–3 Playa Norte, sin conexión y con un cambio pendiente: listas de jugadores y arqueros, una cancha de beach con zonas numeradas, un arco dividido en nueve áreas y botones de goles de uno y dos puntos.",
      }),
      caption: t({
        en: "Live capture keeps working offline: the console shows pending changes and syncs them when the connection returns.",
        es: "El registro en vivo sigue funcionando sin conexión: la consola muestra los cambios pendientes y los sincroniza cuando vuelve la conexión.",
      }),
    },
    preparation: {
      ...img("match-preparation.png", 1280, 1502),
      alt: t({
        en: "Match preparation for Beach Demo against Rival Demo: a call-up of nine players with four starters marked, goalkeeper–specialist and attack–defense pairs, and the match duration options.",
        es: "Preparación del partido Beach Demo contra Rival Demo: convocatoria de nueve jugadoras con cuatro titulares marcadas, parejas arquero–doble y ataque–defensa, y las opciones de duración del partido.",
      }),
      caption: t({
        en: "Call-up, starters, substitution pairs and match duration (demo data).",
        es: "Convocatoria, titulares, parejas de cambio y duración del partido (datos de demostración).",
      }),
    },
    shootOut: {
      ...img("shoot-out.png", 1280, 800),
      alt: t({
        en: "Shoot-out screen after periods split 1–1: Arena wins the shoot-out 5–4, with buttons for one- and two-point goals, saves and misses.",
        es: "Pantalla de shoot-out con los períodos 1–1: Arena gana el shoot-out 5–4, con botones para goles de uno y dos puntos, atajadas y errados.",
      }),
      caption: t({
        en: "Shoot-out: each attempt scores one or two points, kept separate from the periods.",
        es: "Shoot-out: cada intento suma uno o dos puntos, separado del marcador de los períodos.",
      }),
    },
    phone: {
      ...img("live-capture-phone.png", 390, 1543),
      alt: t({
        en: "The capture console on a phone, with players, goalkeepers, the court, the goal grid and the goal buttons stacked vertically.",
        es: "La consola de registro en un celular, con jugadores, arqueros, la cancha, el arco y los botones de gol apilados en vertical.",
      }),
      caption: t({ en: "The same console on a phone.", es: "La misma consola en un celular." }),
    },
    conflict: {
      ...img("sync-conflict.png", 1280, 800),
      alt: t({
        en: "Sync screen showing a roster change marked as a conflict, with the options to keep the local change or use the server's version.",
        es: "Pantalla de sincronización con un cambio de plantel marcado como conflicto y las opciones de mantener el cambio local o usar lo del servidor.",
      }),
      caption: t({
        en: "When another device changed the same data, the user decides which version to keep.",
        es: "Si otro dispositivo cambió el mismo dato, el usuario decide qué versión conservar.",
      }),
    },
    seasonStats: {
      ...img("season-statistics.png", 1280, 1402),
      alt: t({
        en: "Accumulated statistics for Arena with filters for team, match, season, opponent and competition, PDF export options, totals for matches, periods, golden goals and shoot-outs, and scorer and goalkeeper summaries.",
        es: "Estadísticas acumuladas de Arena con filtros por equipo, partido, temporada, rival y competencia, opciones de exportación a PDF, totales de partidos, períodos, golden goals y shoot-outs, y resúmenes de goleadores y arqueros.",
      }),
      caption: t({
        en: "Season statistics with filters, beach-specific totals and PDF export.",
        es: "Estadísticas de temporada con filtros, totales propios del beach y exportación a PDF.",
      }),
    },
    zones: {
      ...img("shot-zones.png", 1280, 918),
      alt: t({
        en: "Shot zones for a demo match: efficiency by court zone and goal area, with a player list to filter the shots.",
        es: "Zonas de tiro de un partido de demostración: efectividad por zona de cancha y área del arco, con una lista de jugadoras para filtrar los tiros.",
      }),
      caption: t({
        en: "Shots by court zone and goal area, filterable by player (demo data).",
        es: "Tiros por zona de cancha y área del arco, filtrables por jugadora (datos de demostración).",
      }),
    },
    playEditor: {
      ...img("play-editor.png", 1280, 1078),
      alt: t({
        en: "Play editor on a half court: players, a pivot, a specialist and a goalkeeper on a beach court, with options to add players and opponents, choose the pivot formation and watch the play animated.",
        es: "Editor de jugadas en media cancha: jugadores, un pivote, un doble y un arquero sobre una cancha de beach, con opciones para agregar jugadores y rivales, elegir la formación del pivote y ver la jugada animada.",
      }),
      caption: t({
        en: "Play editor for beach formations, with half or full court and animated playback.",
        es: "Editor de jugadas para formaciones de beach, en media cancha o cancha entera y con reproducción animada.",
      }),
    },
  };

  return {
    slug: "beach-handstats",
    index: "02",
    title: "Beach HandStats",
    category: t({ en: "Sports Analytics Platform", es: "Plataforma de analítica deportiva" }),
    type: t({ en: "Personal Project", es: "Proyecto personal" }),
    year: "2026",
    headline: t({
      en: "Beach handball statistics, built for the sand.",
      es: "Estadísticas de beach handball, pensadas para la arena.",
    }),
    description: [
      t({
        en: "A Progressive Web App to record beach handball matches and analyze their statistics, built as an independent product alongside HandStats.",
        es: "Una Progressive Web App para registrar partidos de beach handball y analizar sus estadísticas, construida como un producto independiente junto a HandStats.",
      }),
      t({
        en: "It implements the IHF 2026 beach handball rules — two-point goals, periods won separately, golden goal and shoot-out — and keeps working at the beach without a connection, syncing automatically afterwards.",
        es: "Implementa el reglamento IHF 2026 de beach handball —goles de dos puntos, períodos que se ganan por separado, golden goal y shoot-out— y sigue funcionando en la playa sin conexión, sincronizando automáticamente después.",
      }),
    ],
    capabilities: [
      t({ en: "Teams, rosters and opponents", es: "Equipos, planteles y rivales" }),
      t({ en: "Match preparation and pairs", es: "Preparación del partido y parejas" }),
      t({ en: "Live capture under IHF 2026 rules", es: "Registro en vivo con reglamento IHF 2026" }),
      t({ en: "Golden goal and shoot-out", es: "Golden goal y shoot-out" }),
      t({ en: "Sanctions and change of possession", es: "Sanciones y cambio de posesión" }),
      t({ en: "Offline-first with automatic sync", es: "Offline-first con sincronización automática" }),
      t({ en: "Conflict review between devices", es: "Revisión de conflictos entre dispositivos" }),
      t({ en: "Post-match corrections with history", es: "Correcciones post-partido con historial" }),
      t({ en: "Season statistics and zones", es: "Estadísticas de temporada y zonas" }),
      t({ en: "PDF exports", es: "Exportación a PDF" }),
      t({ en: "Player portal", es: "Portal del jugador" }),
      t({ en: "Plays and practices", es: "Jugadas y prácticas" }),
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "PostgreSQL", "Dexie", "PWA", "Vitest", "Playwright"],
    links: {},
    cover: media.liveOffline,
    stage: "acid",
    caseStudy: {
      overview: [
        t({
          en: "Beach HandStats is a Progressive Web App for recording beach handball matches and analyzing their statistics on tablet, phone and desktop. It is an independent product from HandStats, with its own repository, database and deployment, built around the beach version of the game.",
          es: "Beach HandStats es una Progressive Web App para registrar partidos de beach handball y analizar sus estadísticas en tablet, celular y computadora. Es un producto independiente de HandStats, con su propio repositorio, base de datos y despliegue, construido alrededor de la versión de playa del deporte.",
        }),
        t({
          en: "It covers a club's full workflow: teams, rosters and opponents; match preparation; live capture under the IHF 2026 rules; season statistics and PDF reports; and a player portal, plays and practices.",
          es: "Cubre todo el flujo de un club: equipos, planteles y rivales; preparación de partidos; registro en vivo con el reglamento IHF 2026; estadísticas de temporada y reportes en PDF; y un portal del jugador, jugadas y prácticas.",
        }),
      ],
      facts: [
        { label: t({ en: "Type", es: "Tipo" }), value: t({ en: "Personal Project", es: "Proyecto personal" }) },
        { label: t({ en: "Year", es: "Año" }), value: "2026" },
        { label: t({ en: "Platform", es: "Plataforma" }), value: "Progressive Web App" },
        { label: t({ en: "Focus", es: "Foco" }), value: t({ en: "Beach rules, offline-first", es: "Reglas de beach, offline-first" }) },
      ],
      challenge: [
        t({
          en: "Beach handball has its own scoring. Spectacular goals — spins, in-flights, and goals by the specialist or the goalkeeper — are worth two points, each period is won separately, a tied period is decided by golden goal, and split periods go to a shoot-out. A statistics tool for indoor handball models none of this.",
          es: "El beach handball tiene su propia puntuación. Los goles espectaculares —giros, en el aire y goles del especialista o del arquero— valen dos puntos, cada período se gana por separado, un período empatado se define por golden goal y, si los períodos quedan uno a uno, hay shoot-out. Una herramienta de estadísticas para handball de sala no contempla nada de esto.",
        }),
        t({
          en: "Sanctions also work differently: a suspended player leaves the team one player short until the next change of possession, and a second suspension leads to disqualification.",
          es: "Las sanciones también funcionan distinto: un jugador suspendido deja al equipo con uno menos hasta el próximo cambio de posesión, y una segunda suspensión lleva a la descalificación.",
        }),
        t({
          en: "Matches are played outdoors, often far from a reliable connection, and the same club may work from more than one device.",
          es: "Los partidos se juegan al aire libre, muchas veces lejos de una conexión confiable, y el mismo club puede trabajar desde más de un dispositivo.",
        }),
      ],
      solution: [
        t({
          en: "The rules live in a pure, tested domain layer: scoring, periods, golden goal, shoot-out, sanctions and change of possession are implemented and covered by unit tests, so the interface only records what happened.",
          es: "El reglamento vive en una capa de dominio pura y testeada: puntuación, períodos, golden goal, shoot-out, sanciones y cambio de posesión están implementados y cubiertos por tests unitarios, así que la interfaz solo registra lo que pasó.",
        }),
        t({
          en: "Capture is offline-first. Matches, events and pending changes are stored in IndexedDB, a custom service worker lets the app open without a connection, and a sync queue sends every change with an id and a revision so nothing is duplicated. Conflicts between devices are shown for review instead of being overwritten.",
          es: "El registro es offline-first. Partidos, eventos y cambios pendientes se guardan en IndexedDB, un service worker propio permite abrir la app sin conexión y una cola de sincronización envía cada cambio con un id y una revisión para que nada se duplique. Los conflictos entre dispositivos se muestran para revisarlos en lugar de pisarse.",
        }),
        t({
          en: "Around the match, the app supports roster and opponent management, post-match corrections with a revision history, season statistics and PDF exports, a player portal, and plays and practices.",
          es: "Alrededor del partido, la app permite gestionar planteles y rivales, corregir partidos con historial de revisiones, ver estadísticas de temporada y exportarlas a PDF, y ofrece un portal del jugador, jugadas y prácticas.",
        }),
      ],
      workflowIntro: t({
        en: "The product follows a match from start to finish: prepare the call-up, capture the game under beach rules, keep working offline and sync safely, analyze the season, and plan plays and practices.",
        es: "El producto acompaña un partido de principio a fin: preparar la convocatoria, registrar el juego con las reglas de beach, seguir trabajando sin conexión y sincronizar de forma segura, analizar la temporada y planificar jugadas y prácticas.",
      }),
      workflow: [
        {
          title: t({ en: "Match Preparation", es: "Preparación del partido" }),
          description: [
            t({
              en: "The whole roster is called up by default and the four starters are marked. Goalkeeper–specialist pairs and attack–defense substitution pairs are set before the game, and the match can run with a 10-and-10 clock or with the scoreboard only.",
              es: "Todo el plantel viene convocado y se marcan los cuatro titulares. Antes del partido se definen las parejas arquero–doble y las parejas de cambio ataque–defensa, y el partido puede jugarse con reloj de 10 y 10 o solo con el marcador.",
            }),
          ],
          media: [media.preparation],
        },
        {
          title: t({ en: "Live Match", es: "Partido en vivo" }),
          description: [
            t({
              en: "Each shot is recorded by court zone and goal area, with one-point goals and two-point goals for spins, in-flights and specialist goals. The console tracks each period separately, decides tied periods by golden goal and runs the shoot-out with its own scoring.",
              es: "Cada tiro se registra por zona de cancha y área del arco, con goles de un punto y goles de dos puntos por giro, en el aire o del doble. La consola lleva cada período por separado, define los períodos empatados por golden goal y gestiona el shoot-out con su propia puntuación.",
            }),
            t({
              en: "Turnovers, defense, sanctions, cards and substitutions have their own controls, the last action can be undone, and the same console adapts to a phone.",
              es: "Pérdidas, defensa, sanciones, tarjetas y cambios tienen sus propios controles, la última acción se puede deshacer y la misma consola se adapta al celular.",
            }),
          ],
          media: [media.shootOut, media.phone],
        },
        {
          title: t({ en: "Offline & Sync", es: "Sin conexión y sincronización" }),
          description: [
            t({
              en: "Matches can be created, prepared and captured without a connection. Pending changes sync automatically when the connection returns, and rejected events never count on the local scoreboard.",
              es: "Los partidos se pueden crear, preparar y registrar sin conexión. Los cambios pendientes se sincronizan solos cuando vuelve la conexión, y los eventos rechazados nunca cuentan en el marcador local.",
            }),
            t({
              en: "When another device changed the same data, the sync screen shows the conflict and lets the user keep their version or the server's.",
              es: "Si otro dispositivo cambió el mismo dato, la pantalla de sincronización muestra el conflicto y deja elegir entre mantener el cambio propio o usar lo del servidor.",
            }),
          ],
          media: [media.conflict],
        },
        {
          title: t({ en: "Analytics", es: "Analítica" }),
          description: [
            t({
              en: "Statistics accumulate by team, match, season, opponent and competition, with general, player, goalkeeper, zone and evolution views and totals for periods, golden goals and shoot-outs.",
              es: "Las estadísticas se acumulan por equipo, partido, temporada, rival y competencia, con vistas General, Jugadores, Arqueros, Zonas y Evolución, y totales de períodos, golden goals y shoot-outs.",
            }),
            t({
              en: "Shots are broken down by court zone and goal area, and the same figures can be exported to PDF.",
              es: "Los tiros se desglosan por zona de cancha y área del arco, y las mismas cifras se pueden exportar a PDF.",
            }),
          ],
          media: [media.seasonStats, media.zones],
        },
        {
          title: t({ en: "Training & Tactics", es: "Entrenamiento y táctica" }),
          description: [
            t({
              en: "Plays are drawn on half or full court with players, specialists, goalkeepers and opponents, pivot formations and step-by-step movements, and can be watched animated.",
              es: "Las jugadas se dibujan en media cancha o cancha entera con jugadores, dobles, arqueros y rivales, formaciones de pivote y movimientos paso a paso, y se pueden ver animadas.",
            }),
            t({
              en: "Practices include exercises, attendance and history, and a player portal gives each player access to their own information.",
              es: "Las prácticas incluyen ejercicios, asistencia e historial, y un portal del jugador le da a cada jugador acceso a su propia información.",
            }),
          ],
          media: [media.playEditor],
        },
      ],
      architecture: {
        intro: t({
          en: "An installable Next.js client with a local-first data layer in IndexedDB, synchronized with Supabase through an idempotent queue. The rules live in a pure domain layer shared by the console and the statistics.",
          es: "Un cliente Next.js instalable con una capa de datos local en IndexedDB, sincronizada con Supabase mediante una cola idempotente. El reglamento vive en una capa de dominio pura que comparten la consola y las estadísticas.",
        }),
        flow: [
          t({ en: "Capture console", es: "Consola de registro" }),
          "IndexedDB · Dexie",
          t({ en: "Idempotent sync queue", es: "Cola de sincronización idempotente" }),
          "Supabase · PostgreSQL",
          t({ en: "Statistics & PDF", es: "Estadísticas y PDF" }),
        ],
        layers: [
          {
            name: t({ en: "Client application", es: "Aplicación cliente" }),
            description: t({
              en: "Installable PWA for tablet, phone and desktop.",
              es: "PWA instalable para tablet, celular y computadora.",
            }),
            items: [
              t({ en: "Next.js 16 App Router and React 19", es: "Next.js 16 App Router y React 19" }),
              t({ en: "Custom service worker for offline start", es: "Service worker propio para abrir sin conexión" }),
              t({ en: "Updates that wait for pending changes", es: "Actualizaciones que esperan a subir lo pendiente" }),
            ],
          },
          {
            name: t({ en: "Domain rules", es: "Reglas de dominio" }),
            description: t({
              en: "IHF 2026 beach handball rules as pure, tested code.",
              es: "Reglamento IHF 2026 de beach handball como código puro y testeado.",
            }),
            items: [
              t({ en: "Scoring, periods, golden goal and shoot-out", es: "Puntuación, períodos, golden goal y shoot-out" }),
              t({ en: "Sanctions and change of possession", es: "Sanciones y cambio de posesión" }),
              t({ en: "Court and goal zones", es: "Zonas de cancha y de arco" }),
            ],
          },
          {
            name: t({ en: "Offline & synchronization", es: "Offline y sincronización" }),
            description: t({
              en: "Local-first storage with safe, repeatable sync.",
              es: "Almacenamiento local primero, con sincronización segura y repetible.",
            }),
            items: [
              t({ en: "Matches and events in IndexedDB (Dexie)", es: "Partidos y eventos en IndexedDB (Dexie)" }),
              t({ en: "Ids and revisions: no duplicates", es: "Ids y revisiones: sin duplicados" }),
              t({ en: "Conflict review between devices", es: "Revisión de conflictos entre dispositivos" }),
            ],
          },
          {
            name: t({ en: "Backend & quality", es: "Backend y calidad" }),
            description: t({
              en: "Supabase with row-level security and tests at every level.",
              es: "Supabase con row-level security y tests en todos los niveles.",
            }),
            items: [
              t({ en: "PostgreSQL, Auth and RLS policies", es: "PostgreSQL, Auth y políticas RLS" }),
              t({ en: "Vitest unit tests", es: "Tests unitarios con Vitest" }),
              t({ en: "Playwright end-to-end and pgTAP database tests", es: "Tests de punta a punta con Playwright y de base de datos con pgTAP" }),
            ],
          },
        ],
      },
      stackGroups: [
        { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"] },
        { label: "Offline", items: ["Dexie (IndexedDB)", "Service worker", "PWA"] },
        { label: t({ en: "Backend & Data", es: "Backend y datos" }), items: ["Supabase", "PostgreSQL", "Row-level security"] },
        { label: t({ en: "Reports", es: "Reportes" }), items: ["jsPDF"] },
        { label: "Testing", items: ["Vitest", "Playwright", "pgTAP"] },
      ],
      learnings: [
        {
          title: t({ en: "Encoding a rulebook", es: "Convertir un reglamento en código" }),
          description: t({
            en: "Turning the IHF 2026 beach rules into a pure, tested domain layer kept the console simple and the statistics consistent.",
            es: "Llevar el reglamento IHF 2026 de beach a una capa de dominio pura y testeada mantuvo la consola simple y las estadísticas consistentes.",
          }),
        },
        {
          title: t({ en: "Idempotent synchronization", es: "Sincronización idempotente" }),
          description: t({
            en: "Every change carries an id and a revision, so retries after a lost connection never duplicate events, and rejected events never count on the local scoreboard.",
            es: "Cada cambio lleva un id y una revisión, así que los reintentos después de perder la conexión nunca duplican eventos, y los eventos rechazados nunca cuentan en el marcador local.",
          }),
        },
        {
          title: t({ en: "Conflicts as a user decision", es: "Los conflictos los decide el usuario" }),
          description: t({
            en: "When two devices edit the same data, the app shows the conflict instead of silently picking a winner.",
            es: "Cuando dos dispositivos editan el mismo dato, la app muestra el conflicto en lugar de elegir una versión en silencio.",
          }),
        },
        {
          title: t({ en: "Updating a PWA without losing data", es: "Actualizar una PWA sin perder datos" }),
          description: t({
            en: "A new version waits until pending changes are uploaded before reloading, and the service worker never touches the local database.",
            es: "Una versión nueva espera a que se suban los cambios pendientes antes de recargar, y el service worker nunca toca la base local.",
          }),
        },
      ],
    },
  };
});
