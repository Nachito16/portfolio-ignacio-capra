/** UI strings. Page content lives in `src/data`. */
export const en = {
  nav: {
    about: "About",
    experience: "Experience",
    work: "Work",
    skills: "Skills",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primary: "Primary",
    language: "Language",
    comingSoon: "coming soon",
    home: "Ignacio Capra — home",
  },
  actions: {
    downloadCv: "Download CV",
    viewWork: "View my work",
    viewCaseStudy: "View case study",
    viewDetails: "Project details",
    liveSite: "Live site",
    liveSoon: "Live site coming soon",
    sourceCode: "GitHub",
    emailMe: "Email me",
    copyEmail: "Copy email",
    copied: "Copied",
    backToWork: "All work",
    skipToContent: "Skip to content",
  },
  hero: {
    available: "Open to new opportunities",
  },
  /** `eyebrow` is the section number, `kicker` the mono label next to it, `title` the heading. */
  sections: {
    about: { eyebrow: "01", kicker: "Profile", title: "About" },
    experience: {
      eyebrow: "02",
      kicker: "Experience",
      title: "Professional Experience",
      description: "From technical support to full stack development and enterprise consulting.",
    },
    work: {
      eyebrow: "03",
      kicker: "Selected projects",
      title: "Selected Work",
      description: "A selection of products and applications I've worked on.",
    },
    skills: { eyebrow: "04", kicker: "Technical toolkit", title: "Skills & Expertise" },
    education: { eyebrow: "05", kicker: "Education", title: "Education", finalProject: "Final project" },
    contact: { eyebrow: "06", kicker: "Contact", title: "Contact" },
  },
  experience: {
    previousRole: "Earlier role at TCS",
  },
  projects: {
    keyCapabilities: "Key capabilities",
    stack: "Stack",
  },
  caseStudy: {
    sections: {
      overview: "Overview",
      challenge: "The Challenge",
      solution: "The Solution",
      features: "Product Workflow",
      architecture: "Technical Architecture",
      stack: "Technology Stack",
      learnings: "Technical Challenges & What I Learned",
    },
    screens: "Screens",
    layers: "Layers",
    dataFlow: "Data flow",
    onThisPage: "On this page",
    nextProject: "Next project",
    inProgress:
      "A detailed case study for this project is in preparation. In the meantime, the overview below covers the essentials.",
  },
  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
    newTab: "(opens in a new tab)",
  },
  notFound: {
    label: "Not found",
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    back: "Back to home",
  },
  meta: {
    projectsTitle: "Projects",
  },
};

export type Dictionary = typeof en;
