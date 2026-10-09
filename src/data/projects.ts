import type { Media, Project } from "./types";

/**
 * Project content. Screenshots live under /public/images/projects/<slug>/.
 * Media needs `src`, `width` and `height` to render; otherwise a placeholder is shown.
 */

const handstats = {
  liveTracking: {
    src: "/images/projects/handstats/live-match-tracking.jpg",
    width: 1600,
    height: 760,
    alt: "HandStats live match tracking screen for Cevven Intermedia Masculino against San Pablo: player and goalkeeper lists, a court diagram with numbered shooting zones, a goal divided into nine target areas, Gol and Atajado buttons, and controls for turnovers, defense, sanctions and cards.",
    caption:
      "Live match tracking. Each shot is recorded by court zone and goal area, with its outcome and the goalkeeper in goal. Turnovers, defensive actions, sanctions and cards have their own controls, and the sync status stays visible.",
  },
  home: {
    src: "/images/projects/handstats/home-dashboard.jpg",
    width: 1600,
    height: 739,
    alt: "HandStats home screen for the Cevven Masculino team, with menu options for New match, Team, Opponents and Practices.",
    caption: "Team home screen: the entry point to matches, the squad, opponents and practices.",
  },
  matchPreparation: {
    src: "/images/projects/handstats/match-preparation.jpg",
    width: 1307,
    height: 912,
    alt: "Match preparation screen: a call-up list of 17 players with starters marked with a T, the fixture card for Cevven Intermedia Masculino against San Pablo, and the selected starting seven.",
    caption: "Call-up and starting seven for an upcoming fixture.",
  },
  playerStatistics: {
    src: "/images/projects/handstats/player-statistics.jpg",
    width: 1578,
    height: 775,
    alt: "Team statistics table on the Players tab, listing each player's matches played, shots, goals, shooting percentage and further per-player columns.",
    caption: "Per-player statistics across the analyzed matches.",
  },
  goalkeeperStatistics: {
    src: "/images/projects/handstats/goalkeeper-statistics.jpg",
    width: 1600,
    height: 757,
    alt: "Goalkeeper statistics for one match: 34% save rate, 25 goals conceded, a list of opponents who shot, save rates by court zone, and goals and saves by area of the goal.",
    caption: "A goalkeeper's statistics for one match, by court zone and by area of the goal.",
  },
  playerPortal: {
    src: "/images/projects/handstats/player-portal.jpg",
    width: 617,
    height: 889,
    alt: "Player portal for a goalkeeper on a narrow screen, with links to team statistics, personal statistics and plays.",
    caption: "A goalkeeper's portal.",
  },
  practicePlanning: {
    src: "/images/projects/handstats/practice-planning.jpg",
    width: 1197,
    height: 898,
    alt: "New practice screen: a date picker, the practice's exercise list, a library of saved exercises shown as court thumbnails, and an attendance list with Present and Absent buttons for each player.",
    caption: "Practice planning: date, exercises from the saved library, and attendance.",
  },
  practiceShotTracking: {
    src: "/images/projects/handstats/practice-shot-tracking.jpg",
    width: 1600,
    height: 585,
    alt: "Practice shot tracking for a drill: buttons for each shooter and goalkeeper, a court diagram with numbered zones, a goal grid with nine areas, and Gol and Atajado buttons.",
    caption: "Shot tracking during a practice drill, using the same zones as in matches.",
  },
  playEditor: {
    src: "/images/projects/handstats/play-editor.jpg",
    width: 1469,
    height: 908,
    alt: "Play editor: a half-court diagram with six attackers and six defenders and a ball marker, next to a panel to set the defensive system, record player runs and actions such as crosses, switches and shots, and name the play.",
    caption: "Play editor: set up the defense, then build the play step by step.",
  },
} satisfies Record<string, Media>;

const sens = {
  home: {
    src: "/images/projects/sens/home.jpg",
    width: 1600,
    height: 719,
    alt: "Sens homepage: full-width photo of a barbershop interior with barber chairs and mirrors, the Sens logo, navigation links and a 'Reservá tu turno' booking button.",
  },
  gallery: {
    src: "/images/projects/sens/gallery.jpg",
    width: 1600,
    height: 762,
    alt: "Sens photo carousels: two rows of images showing the shop interior and client haircuts.",
  },
  teamLocation: {
    src: "/images/projects/sens/team-location.jpg",
    width: 1119,
    height: 833,
    alt: "Sens team section with three barber profile cards, and a location section with an embedded map, address, opening hours, social links and a booking button.",
  },
} satisfies Record<string, Media>;
export const projects: Project[] = [
  {
    slug: "handstats",
    index: "01",
    title: "HandStats",
    category: "Sports Analytics Platform",
    type: "Personal Project",
    year: "2026",
    headline: "Handball analytics built for the game.",
    description: [
      "A Progressive Web App designed to capture and analyze handball statistics in real time.",
      "The platform supports team and player management, match preparation, live event tracking, player statistics, goalkeeper analytics, shot maps and historical match analysis.",
      "A major technical focus of the application is offline-first match tracking, allowing data to be captured during games even with unreliable connectivity and synchronized automatically afterwards.",
    ],
    capabilities: [
      "Team and player management",
      "Opponent management",
      "Match preparation",
      "Live match tracking",
      "Attack statistics",
      "Defense statistics",
      "Goalkeeper statistics",
      "Shot and court maps",
      "Match history",
      "Match summaries",
      "PDF reports",
      "Offline-first operation",
      "Automatic synchronization",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "PWA",
      "Playwright",
      "Vitest",
    ],
    links: {},
    cover: handstats.liveTracking,
    stage: "acid",
    featured: true,
    // Draft copy based on the project description — review and adjust before publishing.
    caseStudy: {
      hero: handstats.home,
      overview: [
        "HandStats is a Progressive Web App for handball teams. It started as a tool to capture and analyze match statistics in real time, and has grown to support the wider coaching workflow: preparing the team, tracking matches live, analyzing the results, giving players access to their own information, and planning practices and tactical plays.",
        "The application is built around a domain model specific to handball, with dedicated statistics for attack, defense and goalkeeping, and visual shot and court maps.",
      ],
      facts: [
        { label: "Type", value: "Personal Project" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "Progressive Web App" },
        { label: "Focus", value: "Offline-first match tracking" },
      ],
      challenge: [
        "Handball is a fast game. Shots, saves, turnovers and defensive actions happen in quick succession, and they need to be recorded as the match unfolds without losing track of play.",
        "General-purpose tools such as spreadsheets are not designed for that pace, or for the specific statistics that matter in handball, like goalkeeper performance and shot locations.",
        "Connectivity at sports venues is often unreliable. A tool that depends on a stable connection risks losing data at exactly the moment it is being captured.",
        "Match statistics are also only part of a coach's work. Preparing the squad, running practices and teaching tactical plays belong to the same cycle, and benefit from working with the same players and the same data.",
      ],
      solution: [
        "HandStats is designed around the match itself. A dedicated live-tracking interface keeps event capture focused, while the data model records attack, defense and goalkeeper actions together with court and shot positions.",
        "Match tracking is offline-first: events are captured on the device during the game and synchronized automatically once connectivity is available, so the same workflow works with or without a network.",
        "Around the match, the same team, players and court model support preparation, analytics, a player-facing portal, and practice and tactics planning.",
      ],
      workflowIntro:
        "The product follows the coaching cycle: prepare the team and the match, capture what happens during the game, analyze the resulting statistics, give players access to their information, and plan practices, exercises and tactical plays.",
      workflow: [
        {
          title: "Match Preparation",
          description: [
            "Each match starts with the call-up. The whole squad is called up by default: players who won't play are removed and the seven starters are marked, with the previous match's starters preloaded. The fixture card shows the opponent, competition and date, and links to the opponent's management.",
          ],
          media: [handstats.matchPreparation],
        },
        {
          title: "Live Match",
          description: [
            "During the game, each shot is recorded by court zone and goal area, with its outcome and the goalkeeper in goal. Turnovers, defensive actions, sanctions and cards have their own controls, the last action can be undone, and each half is closed from the same screen.",
            "Capture is offline-first: events are stored on the device as they happen and synchronized automatically, with the sync status always visible.",
          ],
          media: [
            {
              ...handstats.liveTracking,
              caption: "Live match capture: court zones, goal areas, outcome buttons and event controls.",
            },
          ],
        },
        {
          title: "Analytics",
          description: [
            "Captured events become statistics. The team view lists per-player figures across the analyzed matches, with tabs for general, player, goalkeeper and zone views.",
            "Goalkeepers get a per-match breakdown: save percentage, goals conceded, the opponents who shot, and save rates by court zone and by area of the goal. Matches can be browsed one by one, alongside match summaries and PDF reports.",
          ],
          media: [handstats.playerStatistics, handstats.goalkeeperStatistics],
        },
        {
          title: "Player Portal",
          description: [
            "Players sign in to their own portal, with access to the team's statistics, their personal statistics and the team's plays.",
          ],
          media: [handstats.playerPortal],
        },
        {
          title: "Training & Tactics",
          description: [
            "The same tool supports the training week. Practices are planned by date, built from a library of saved exercises, and used to record attendance. Exercises are set up on a court diagram with attackers, defenders, cones and balls.",
            "Shooting drills are tracked with the same court-zone and goal-area model used in matches. Tactical plays are drawn on the court: choose the defensive system, drag players to draw their runs, pass the ball between teammates, and add crosses, switches and shots step by step. Saved plays can be played back step by step.",
          ],
          media: [handstats.practicePlanning, handstats.practiceShotTracking, handstats.playEditor],
        },
      ],
      architecture: {
        intro:
          "The application is structured as an installable web client backed by Supabase, with an offline layer between the two so match tracking never depends on the network.",
        flow: ["Live tracking UI", "Local persistence", "Sync", "Supabase · PostgreSQL", "Statistics & reports"],
        layers: [
          {
            name: "Client application",
            description: "Next.js App Router application delivered as a PWA.",
            items: ["Next.js 16 and React 19", "TypeScript across the codebase", "Tailwind CSS interface"],
          },
          {
            name: "Offline & synchronization",
            description: "Keeps match tracking usable without a connection.",
            items: [
              "Events captured locally during the match",
              "Pending changes synchronized automatically",
              "Installable as a Progressive Web App",
            ],
          },
          {
            name: "Backend & data",
            description: "Relational data model for the handball domain.",
            items: ["Supabase", "PostgreSQL", "Teams, players, matches and events"],
          },
          {
            name: "Quality",
            description: "Automated tests at different levels.",
            items: ["Vitest for unit testing", "Playwright for end-to-end testing"],
          },
        ],
      },
      stackGroups: [
        { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"] },
        { label: "Backend & Data", items: ["Supabase", "PostgreSQL"] },
        { label: "Platform", items: ["PWA"] },
        { label: "Testing", items: ["Vitest", "Playwright"] },
      ],
      learnings: [
        {
          title: "Designing offline-first from the start",
          description:
            "Treating connectivity as optional shaped the data flow from the beginning, rather than adding offline support as an afterthought.",
        },
        {
          title: "Synchronizing data reliably",
          description:
            "Captured events have to reach the backend once a connection is available without being lost or duplicated along the way.",
        },
        {
          title: "Modeling a sport's domain",
          description:
            "Translating handball concepts such as phases of play, goalkeeper actions and court positions into a clear relational model.",
        },
        {
          title: "Interfaces that work under pressure",
          description:
            "Live tracking happens while the game is in motion, so the interface has to stay fast, clear and hard to misuse.",
        },
      ],
    },
  },
  {
    slug: "sens",
    index: "02",
    title: "Sens",
    category: "Barbershop Website",
    year: "2025",
    headline: "A barbershop website built around booking.",
    description: [
      "A responsive web experience designed for a barbershop, focused on presenting the brand, team and location while providing customers with an easy way to book appointments.",
    ],
    details: [
      "Built as a single-page Angular and TypeScript application with Bootstrap. Smooth-scrolling navigation moves between the About, Team, Visit and Services sections, and the services include a tattoo offering with its own contact links.",
      "Auto-scrolling photo carousels present the shop and its work, adapting their speed to the screen size and pausing on tap. The location section embeds a map with the address and opening hours, and customers can book through the shop's online booking platform or get in touch on WhatsApp and Instagram.",
    ],
    stack: ["Angular", "TypeScript", "Bootstrap"],
    links: {
      live: null, // Set the live URL once available.
      github: "https://github.com/Nachito16/Sens",
    },
    cover: sens.home,
    stage: "coral",
    composition: [sens.home, sens.gallery, sens.teamLocation],
    screens: [
      {
        title: "Photo carousels",
        description:
          "Continuously scrolling rows of photos showing the shop and client haircuts, running in opposite directions.",
        media: sens.gallery,
      },
      {
        title: "Team and location",
        description:
          "A card for each barber, and a location section with an embedded map, address, opening hours, Instagram and WhatsApp links and a booking button.",
        media: sens.teamLocation,
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
