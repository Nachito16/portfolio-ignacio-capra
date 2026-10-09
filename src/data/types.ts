export type Media = {
  /** Path under /public, e.g. "/images/projects/handstats/cover.jpg". Leave undefined to render a placeholder. */
  src?: string;
  alt: string;
  /** Intrinsic pixel size. Required with `src` so the image keeps its aspect ratio without cropping or layout shift. */
  width?: number;
  height?: number;
  /** Visible caption, used where the screenshot is presented as a figure. */
  caption?: string;
};

/** A screenshot paired with the explanation of what it shows. */
export type Screen = {
  title: string;
  description: string;
  media: Media;
};

export type ExperienceRole = {
  title: string;
  team?: string;
  start: { label: string; date: string };
  end: { label: string; date: string };
  location?: string;
  highlights: string[];
  tags?: string[];
  tagsLabel?: string;
};

export type ExperienceEntry = {
  company: string;
  /** Short year range shown in the timeline rail. */
  period: string;
  /** The main, fully detailed role. */
  role: ExperienceRole;
  /** Earlier roles at the same company, shown with lower emphasis. */
  previousRoles?: ExperienceRole[];
};

export type ProjectLinks = {
  /** `null` renders a "coming soon" placeholder; `undefined` hides the link. */
  live?: string | null;
  github?: string;
};

/** One stage of the product workflow, with the screens that illustrate it. */
export type WorkflowStep = {
  title: string;
  description: string[];
  media: Media[];
};

export type CaseStudy = {
  /** Visual at the top of the case study page. Defaults to the project cover. */
  hero?: Media;
  overview: string[];
  /** Screenshot shown alongside the overview. */
  overviewMedia?: Media;
  facts: { label: string; value: string }[];
  challenge: string[];
  solution: string[];
  /** Product workflow: one sentence framing the flow, then each stage in order. */
  workflowIntro: string;
  workflow: WorkflowStep[];
  architecture: {
    intro: string;
    flow: string[];
    layers: { name: string; description: string; items: string[] }[];
  };
  stackGroups: { label: string; items: string[] }[];
  learnings: { title: string; description: string }[];
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  type?: string;
  year?: string;
  headline: string;
  description: string[];
  capabilities?: string[];
  stack: string[];
  links: ProjectLinks;
  cover: Media;
  /** Stage style behind the project visual: acid circle on sage, or coral circle on sand. */
  stage?: "acid" | "coral";
  /** Homepage visual as three layered screenshots: main, upper-left detail, lower-right detail. */
  composition?: [Media, Media, Media];
  /** Extra paragraphs shown only on the project page, not on the homepage card. */
  details?: string[];
  /** Additional screenshots for project pages without a full case study. */
  screens?: Screen[];
  featured?: boolean;
  caseStudy?: CaseStudy;
};

export type ExpertiseArea = {
  title: string;
  description: string;
  icon: "enterprise" | "web" | "data" | "delivery";
};

export type TechnologyGroup = {
  label: string;
  /** The expertise area this group belongs to (matches ExpertiseArea.icon). */
  area: ExpertiseArea["icon"];
  items: string[];
};
