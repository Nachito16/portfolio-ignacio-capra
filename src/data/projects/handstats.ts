import { localized } from "../localized";
import type { Project } from "../types";

const img = (file: string, width: number, height: number) => ({
  src: `/images/projects/handstats/${file}`,
  width,
  height,
});

export const handstats = localized<Project>((t) => {
  const media = {
    liveTracking: {
      ...img("live-match-tracking.jpg", 1600, 760),
      alt: t({
        en: "HandStats live match tracking screen for Cevven Intermedia Masculino against San Pablo: player and goalkeeper lists, a court diagram with numbered shooting zones, a goal divided into nine target areas, Gol and Atajado buttons, and controls for turnovers, defense, sanctions and cards.",
        es: "Pantalla de registro en vivo de HandStats para Cevven Intermedia Masculino contra San Pablo: listas de jugadores y arqueros, una cancha con zonas de tiro numeradas, un arco dividido en nueve áreas, botones de Gol y Atajado, y controles para pérdidas, defensa, sanciones y tarjetas.",
      }),
      caption: t({
        en: "Live match tracking. Each shot is recorded by court zone and goal area, with its outcome and the goalkeeper in goal. Turnovers, defensive actions, sanctions and cards have their own controls, and the sync status stays visible.",
        es: "Registro en vivo. Cada tiro se registra por zona de cancha y área del arco, con su resultado y el arquero en el arco. Pérdidas, acciones defensivas, sanciones y tarjetas tienen sus propios controles, y el estado de sincronización siempre está visible.",
      }),
    },
    home: {
      ...img("home-dashboard.jpg", 1600, 739),
      alt: t({
        en: "HandStats home screen for the Cevven Masculino team, with menu options for New match, Team, Opponents and Practices.",
        es: "Pantalla de inicio de HandStats del equipo Cevven Masculino, con las opciones Nuevo partido, Equipo, Rivales y Prácticas.",
      }),
      caption: t({
        en: "Team home screen: the entry point to matches, the squad, opponents and practices.",
        es: "Inicio del equipo: el punto de entrada a partidos, plantel, rivales y prácticas.",
      }),
    },
    matchPreparation: {
      ...img("match-preparation.jpg", 1307, 912),
      alt: t({
        en: "Match preparation screen: a call-up list of 17 players with starters marked with a T, the fixture card for Cevven Intermedia Masculino against San Pablo, and the selected starting seven.",
        es: "Pantalla de preparación del partido: convocatoria de 17 jugadores con los titulares marcados con una T, la tarjeta del partido de Cevven Intermedia Masculino contra San Pablo y los siete titulares elegidos.",
      }),
      caption: t({
        en: "Call-up and starting seven for an upcoming fixture.",
        es: "Convocatoria y siete titulares para el próximo partido.",
      }),
    },
    playerStatistics: {
      ...img("player-statistics.jpg", 1578, 775),
      alt: t({
        en: "Team statistics table on the Players tab, listing each player's matches played, shots, goals, shooting percentage and further per-player columns.",
        es: "Tabla de estadísticas del equipo en la pestaña Jugadores, con partidos jugados, tiros, goles, porcentaje de efectividad y más columnas por jugador.",
      }),
      caption: t({
        en: "Per-player statistics across the analyzed matches.",
        es: "Estadísticas por jugador en los partidos analizados.",
      }),
    },
    goalkeeperStatistics: {
      ...img("goalkeeper-statistics.jpg", 1600, 757),
      alt: t({
        en: "Goalkeeper statistics for one match: 34% save rate, 25 goals conceded, a list of opponents who shot, save rates by court zone, and goals and saves by area of the goal.",
        es: "Estadísticas de un arquero en un partido: 34 % de atajadas, 25 goles recibidos, la lista de rivales que le tiraron, efectividad por zona de cancha, y goles y atajadas por área del arco.",
      }),
      caption: t({
        en: "A goalkeeper's statistics for one match, by court zone and by area of the goal.",
        es: "Estadísticas de un arquero en un partido, por zona de cancha y por área del arco.",
      }),
    },
    playerPortal: {
      ...img("player-portal.jpg", 617, 889),
      alt: t({
        en: "Player portal for a goalkeeper on a narrow screen, with links to team statistics, personal statistics and plays.",
        es: "Portal del jugador de un arquero en una pantalla angosta, con accesos a estadísticas del equipo, estadísticas personales y jugadas.",
      }),
      caption: t({ en: "A goalkeeper's portal.", es: "El portal de un arquero." }),
    },
    practicePlanning: {
      ...img("practice-planning.jpg", 1197, 898),
      alt: t({
        en: "New practice screen: a date picker, the practice's exercise list, a library of saved exercises shown as court thumbnails, and an attendance list with Present and Absent buttons for each player.",
        es: "Pantalla de nueva práctica: selector de fecha, la lista de ejercicios de la práctica, una biblioteca de ejercicios guardados con miniaturas de cancha, y la asistencia con botones Presente y Ausente por jugador.",
      }),
      caption: t({
        en: "Practice planning: date, exercises from the saved library, and attendance.",
        es: "Planificación de la práctica: fecha, ejercicios de la biblioteca y asistencia.",
      }),
    },
    practiceShotTracking: {
      ...img("practice-shot-tracking.jpg", 1600, 585),
      alt: t({
        en: "Practice shot tracking for a drill: buttons for each shooter and goalkeeper, a court diagram with numbered zones, a goal grid with nine areas, and Gol and Atajado buttons.",
        es: "Registro de tiros en un ejercicio de práctica: botones para cada tirador y arquero, una cancha con zonas numeradas, un arco con nueve áreas y botones de Gol y Atajado.",
      }),
      caption: t({
        en: "Shot tracking during a practice drill, using the same zones as in matches.",
        es: "Registro de tiros durante un ejercicio, con las mismas zonas que en los partidos.",
      }),
    },
    playEditor: {
      ...img("play-editor.jpg", 1469, 908),
      alt: t({
        en: "Play editor: a half-court diagram with six attackers and six defenders and a ball marker, next to a panel to set the defensive system, record player runs and actions such as crosses, switches and shots, and name the play.",
        es: "Editor de jugadas: media cancha con seis atacantes, seis defensores y la pelota, junto a un panel para elegir el sistema defensivo, registrar recorridos y acciones como cruces, permutas y lanzamientos, y ponerle nombre a la jugada.",
      }),
      caption: t({
        en: "Play editor: set up the defense, then build the play step by step.",
        es: "Editor de jugadas: armá la defensa y construí la jugada paso a paso.",
      }),
    },
  };

  return {
    slug: "handstats",
    index: "01",
    title: "HandStats",
    category: t({ en: "Sports Analytics Platform", es: "Plataforma de analítica deportiva" }),
    type: t({ en: "Personal Project", es: "Proyecto personal" }),
    year: "2026",
    headline: t({ en: "Handball analytics built for the game.", es: "Analítica de handball pensada para el juego." }),
    description: [
      t({
        en: "A Progressive Web App designed to capture and analyze handball statistics in real time.",
        es: "Una Progressive Web App para registrar y analizar estadísticas de handball en tiempo real.",
      }),
      t({
        en: "The platform supports team and player management, match preparation, live event tracking, player statistics, goalkeeper analytics, shot maps and historical match analysis.",
        es: "La plataforma cubre la gestión de equipos y jugadores, la preparación de partidos, el registro de eventos en vivo, estadísticas por jugador, analítica de arqueros, mapas de tiro y el análisis histórico de partidos.",
      }),
      t({
        en: "A major technical focus of the application is offline-first match tracking, allowing data to be captured during games even with unreliable connectivity and synchronized automatically afterwards.",
        es: "Un foco técnico central es el registro de partidos offline-first: los datos se capturan durante el partido aunque la conexión falle, y se sincronizan automáticamente después.",
      }),
    ],
    capabilities: [
      t({ en: "Team and player management", es: "Gestión de equipos y jugadores" }),
      t({ en: "Opponent management", es: "Gestión de rivales" }),
      t({ en: "Match preparation", es: "Preparación de partidos" }),
      t({ en: "Live match tracking", es: "Registro en vivo" }),
      t({ en: "Attack statistics", es: "Estadísticas de ataque" }),
      t({ en: "Defense statistics", es: "Estadísticas de defensa" }),
      t({ en: "Goalkeeper statistics", es: "Estadísticas de arqueros" }),
      t({ en: "Shot and court maps", es: "Mapas de tiro y de cancha" }),
      t({ en: "Match history", es: "Historial de partidos" }),
      t({ en: "Match summaries", es: "Resúmenes de partido" }),
      t({ en: "PDF reports", es: "Reportes en PDF" }),
      t({ en: "Offline-first operation", es: "Funcionamiento offline-first" }),
      t({ en: "Automatic synchronization", es: "Sincronización automática" }),
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "PWA", "Playwright", "Vitest"],
    links: {},
    cover: media.liveTracking,
    stage: "acid",
    featured: true,
    caseStudy: {
      hero: media.home,
      overview: [
        t({
          en: "HandStats is a Progressive Web App for handball teams. It started as a tool to capture and analyze match statistics in real time, and has grown to support the wider coaching workflow: preparing the team, tracking matches live, analyzing the results, giving players access to their own information, and planning practices and tactical plays.",
          es: "HandStats es una Progressive Web App para equipos de handball. Empezó como una herramienta para registrar y analizar estadísticas de partido en tiempo real, y creció hasta acompañar todo el trabajo del cuerpo técnico: preparar el equipo, registrar los partidos en vivo, analizar los resultados, darle a cada jugador acceso a su información y planificar prácticas y jugadas.",
        }),
        t({
          en: "The application is built around a domain model specific to handball, with dedicated statistics for attack, defense and goalkeeping, and visual shot and court maps.",
          es: "La aplicación se construye sobre un modelo de dominio específico del handball, con estadísticas propias de ataque, defensa y arqueros, y mapas visuales de tiro y de cancha.",
        }),
      ],
      facts: [
        { label: t({ en: "Type", es: "Tipo" }), value: t({ en: "Personal Project", es: "Proyecto personal" }) },
        { label: t({ en: "Year", es: "Año" }), value: "2026" },
        { label: t({ en: "Platform", es: "Plataforma" }), value: "Progressive Web App" },
        { label: t({ en: "Focus", es: "Foco" }), value: t({ en: "Offline-first match tracking", es: "Registro offline-first" }) },
      ],
      challenge: [
        t({
          en: "Handball is a fast game. Shots, saves, turnovers and defensive actions happen in quick succession, and they need to be recorded as the match unfolds without losing track of play.",
          es: "El handball es un juego rápido. Tiros, atajadas, pérdidas y acciones defensivas se suceden sin pausa, y hay que registrarlos mientras el partido avanza sin perder de vista el juego.",
        }),
        t({
          en: "General-purpose tools such as spreadsheets are not designed for that pace, or for the specific statistics that matter in handball, like goalkeeper performance and shot locations.",
          es: "Las herramientas genéricas, como las planillas de cálculo, no están pensadas para ese ritmo ni para las estadísticas propias del handball, como el rendimiento del arquero o la ubicación de los tiros.",
        }),
        t({
          en: "Connectivity at sports venues is often unreliable. A tool that depends on a stable connection risks losing data at exactly the moment it is being captured.",
          es: "La conexión en los gimnasios suele ser inestable. Una herramienta que depende de una conexión estable corre el riesgo de perder datos justo en el momento en que se registran.",
        }),
        t({
          en: "Match statistics are also only part of a coach's work. Preparing the squad, running practices and teaching tactical plays belong to the same cycle, and benefit from working with the same players and the same data.",
          es: "Además, las estadísticas son solo una parte del trabajo del entrenador. Preparar el plantel, dirigir prácticas y enseñar jugadas forman parte del mismo ciclo, y se benefician de trabajar con los mismos jugadores y los mismos datos.",
        }),
      ],
      solution: [
        t({
          en: "HandStats is designed around the match itself. A dedicated live-tracking interface keeps event capture focused, while the data model records attack, defense and goalkeeper actions together with court and shot positions.",
          es: "HandStats está diseñada alrededor del partido. Una interfaz dedicada al registro en vivo mantiene la captura enfocada, y el modelo de datos guarda las acciones de ataque, defensa y arqueros junto con las posiciones en la cancha y en el arco.",
        }),
        t({
          en: "Match tracking is offline-first: events are captured on the device during the game and synchronized automatically once connectivity is available, so the same workflow works with or without a network.",
          es: "El registro es offline-first: los eventos se guardan en el dispositivo durante el partido y se sincronizan automáticamente cuando vuelve la conexión, así que el flujo es el mismo con o sin red.",
        }),
        t({
          en: "Around the match, the same team, players and court model support preparation, analytics, a player-facing portal, and practice and tactics planning.",
          es: "Alrededor del partido, el mismo modelo de equipo, jugadores y cancha da soporte a la preparación, la analítica, un portal para los jugadores y la planificación de prácticas y jugadas.",
        }),
      ],
      workflowIntro: t({
        en: "The product follows the coaching cycle: prepare the team and the match, capture what happens during the game, analyze the resulting statistics, give players access to their information, and plan practices, exercises and tactical plays.",
        es: "El producto sigue el ciclo del cuerpo técnico: preparar el equipo y el partido, registrar lo que pasa durante el juego, analizar las estadísticas, darle a los jugadores acceso a su información y planificar prácticas, ejercicios y jugadas.",
      }),
      workflow: [
        {
          title: t({ en: "Match Preparation", es: "Preparación del partido" }),
          description: [
            t({
              en: "Each match starts with the call-up. The whole squad is called up by default: players who won't play are removed and the seven starters are marked, with the previous match's starters preloaded. The fixture card shows the opponent, competition and date, and links to the opponent's management.",
              es: "Cada partido empieza con la convocatoria. Todo el plantel viene convocado: se quita a quien no juega y se marcan los siete titulares, precargados del partido anterior. La tarjeta del partido muestra el rival, la competencia y la fecha, y da acceso a la gestión del rival.",
            }),
          ],
          media: [media.matchPreparation],
        },
        {
          title: t({ en: "Live Match", es: "Partido en vivo" }),
          description: [
            t({
              en: "During the game, each shot is recorded by court zone and goal area, with its outcome and the goalkeeper in goal. Turnovers, defensive actions, sanctions and cards have their own controls, the last action can be undone, and each half is closed from the same screen.",
              es: "Durante el partido, cada tiro se registra por zona de cancha y área del arco, con su resultado y el arquero en el arco. Pérdidas, acciones defensivas, sanciones y tarjetas tienen sus propios controles, la última acción se puede deshacer y cada tiempo se cierra desde la misma pantalla.",
            }),
            t({
              en: "Capture is offline-first: events are stored on the device as they happen and synchronized automatically, with the sync status always visible.",
              es: "La captura es offline-first: los eventos se guardan en el dispositivo a medida que ocurren y se sincronizan automáticamente, con el estado de sincronización siempre visible.",
            }),
          ],
          media: [
            {
              ...media.liveTracking,
              caption: t({
                en: "Live match capture: court zones, goal areas, outcome buttons and event controls.",
                es: "Registro en vivo: zonas de cancha, áreas del arco, botones de resultado y controles de eventos.",
              }),
            },
          ],
        },
        {
          title: t({ en: "Analytics", es: "Analítica" }),
          description: [
            t({
              en: "Captured events become statistics. The team view lists per-player figures across the analyzed matches, with tabs for general, player, goalkeeper and zone views.",
              es: "Los eventos registrados se convierten en estadísticas. La vista del equipo muestra los números de cada jugador en los partidos analizados, con pestañas General, Jugadores, Arqueros y Zonas.",
            }),
            t({
              en: "Goalkeepers get a per-match breakdown: save percentage, goals conceded, the opponents who shot, and save rates by court zone and by area of the goal. Matches can be browsed one by one, alongside match summaries and PDF reports.",
              es: "Los arqueros tienen un detalle por partido: porcentaje de atajadas, goles recibidos, los rivales que les tiraron y la efectividad por zona de cancha y por área del arco. Los partidos se recorren uno a uno, junto con resúmenes y reportes en PDF.",
            }),
          ],
          media: [media.playerStatistics, media.goalkeeperStatistics],
        },
        {
          title: t({ en: "Player Portal", es: "Portal del jugador" }),
          description: [
            t({
              en: "Players sign in to their own portal, with access to the team's statistics, their personal statistics and the team's plays.",
              es: "Cada jugador entra a su propio portal, con acceso a las estadísticas del equipo, sus estadísticas personales y las jugadas del equipo.",
            }),
          ],
          media: [media.playerPortal],
        },
        {
          title: t({ en: "Training & Tactics", es: "Entrenamiento y táctica" }),
          description: [
            t({
              en: "The same tool supports the training week. Practices are planned by date, built from a library of saved exercises, and used to record attendance. Exercises are set up on a court diagram with attackers, defenders, cones and balls.",
              es: "La misma herramienta acompaña la semana de entrenamiento. Las prácticas se planifican por fecha, se arman con una biblioteca de ejercicios guardados y sirven para registrar la asistencia. Los ejercicios se diseñan sobre una cancha con atacantes, defensores, conos y pelotas.",
            }),
            t({
              en: "Shooting drills are tracked with the same court-zone and goal-area model used in matches. Tactical plays are drawn on the court: choose the defensive system, drag players to draw their runs, pass the ball between teammates, and add crosses, switches and shots step by step. Saved plays can be played back step by step.",
              es: "Los ejercicios de tiro se registran con el mismo modelo de zonas de cancha y áreas del arco que los partidos. Las jugadas se dibujan sobre la cancha: se elige el sistema defensivo, se arrastran los jugadores para marcar sus recorridos, se pasa la pelota y se agregan cruces, permutas y lanzamientos paso a paso. Las jugadas guardadas se reproducen paso a paso.",
            }),
          ],
          media: [media.practicePlanning, media.practiceShotTracking, media.playEditor],
        },
      ],
      architecture: {
        intro: t({
          en: "The application is structured as an installable web client backed by Supabase, with an offline layer between the two so match tracking never depends on the network.",
          es: "La aplicación es un cliente web instalable respaldado por Supabase, con una capa offline entre ambos para que el registro de partidos nunca dependa de la red.",
        }),
        flow: [
          t({ en: "Live tracking UI", es: "Registro en vivo" }),
          t({ en: "Local persistence", es: "Persistencia local" }),
          t({ en: "Sync", es: "Sincronización" }),
          "Supabase · PostgreSQL",
          t({ en: "Statistics & reports", es: "Estadísticas y reportes" }),
        ],
        layers: [
          {
            name: t({ en: "Client application", es: "Aplicación cliente" }),
            description: t({
              en: "Next.js App Router application delivered as a PWA.",
              es: "Aplicación con Next.js App Router distribuida como PWA.",
            }),
            items: [
              t({ en: "Next.js 16 and React 19", es: "Next.js 16 y React 19" }),
              t({ en: "TypeScript across the codebase", es: "TypeScript en todo el código" }),
              t({ en: "Tailwind CSS interface", es: "Interfaz con Tailwind CSS" }),
            ],
          },
          {
            name: t({ en: "Offline & synchronization", es: "Offline y sincronización" }),
            description: t({
              en: "Keeps match tracking usable without a connection.",
              es: "Permite registrar partidos sin conexión.",
            }),
            items: [
              t({ en: "Events captured locally during the match", es: "Eventos guardados localmente durante el partido" }),
              t({ en: "Pending changes synchronized automatically", es: "Cambios pendientes sincronizados automáticamente" }),
              t({ en: "Installable as a Progressive Web App", es: "Instalable como Progressive Web App" }),
            ],
          },
          {
            name: t({ en: "Backend & data", es: "Backend y datos" }),
            description: t({
              en: "Relational data model for the handball domain.",
              es: "Modelo de datos relacional para el dominio del handball.",
            }),
            items: [
              "Supabase",
              "PostgreSQL",
              t({ en: "Teams, players, matches and events", es: "Equipos, jugadores, partidos y eventos" }),
            ],
          },
          {
            name: t({ en: "Quality", es: "Calidad" }),
            description: t({ en: "Automated tests at different levels.", es: "Tests automatizados en distintos niveles." }),
            items: [
              t({ en: "Vitest for unit testing", es: "Vitest para tests unitarios" }),
              t({ en: "Playwright for end-to-end testing", es: "Playwright para tests de punta a punta" }),
            ],
          },
        ],
      },
      stackGroups: [
        { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"] },
        { label: t({ en: "Backend & Data", es: "Backend y datos" }), items: ["Supabase", "PostgreSQL"] },
        { label: t({ en: "Platform", es: "Plataforma" }), items: ["PWA"] },
        { label: "Testing", items: ["Vitest", "Playwright"] },
      ],
      learnings: [
        {
          title: t({ en: "Designing offline-first from the start", es: "Diseñar offline-first desde el inicio" }),
          description: t({
            en: "Treating connectivity as optional shaped the data flow from the beginning, rather than adding offline support as an afterthought.",
            es: "Tratar la conexión como opcional definió el flujo de datos desde el principio, en lugar de agregar soporte offline al final.",
          }),
        },
        {
          title: t({ en: "Synchronizing data reliably", es: "Sincronizar datos de forma confiable" }),
          description: t({
            en: "Captured events have to reach the backend once a connection is available without being lost or duplicated along the way.",
            es: "Los eventos registrados tienen que llegar al backend cuando hay conexión, sin perderse ni duplicarse en el camino.",
          }),
        },
        {
          title: t({ en: "Modeling a sport's domain", es: "Modelar el dominio de un deporte" }),
          description: t({
            en: "Translating handball concepts such as phases of play, goalkeeper actions and court positions into a clear relational model.",
            es: "Traducir conceptos del handball, como las fases del juego, las acciones del arquero y las posiciones en la cancha, a un modelo relacional claro.",
          }),
        },
        {
          title: t({ en: "Interfaces that work under pressure", es: "Interfaces que funcionan bajo presión" }),
          description: t({
            en: "Live tracking happens while the game is in motion, so the interface has to stay fast, clear and hard to misuse.",
            es: "El registro en vivo ocurre con el partido en movimiento, así que la interfaz tiene que ser rápida, clara y difícil de usar mal.",
          }),
        },
      ],
    },
  };
});
