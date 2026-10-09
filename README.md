# Ignacio Capra — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts: `npm run build`, `npm start`, `npm run typecheck`.

## Structure

```
src/
  app/                    Routes, metadata, OG image, favicon, sitemap, robots
    projects/[slug]/      Project pages (/projects/handstats, /projects/sens)
  components/
    layout/               Header (+ mobile menu), Footer, LanguageSwitcher, RevealObserver
    sections/             Home page sections (Hero, About, Experience, ...)
    experience/           Timeline item
    projects/             Project showcase, meta, links
      case-study/         Case study hero, body, sections, architecture, next project
    ui/                   Button, Tag, SectionHeading, Container, MediaFrame, ProfilePhoto, Icons
  data/                   All content (profile, experience, projects, skills, education)
  i18n/                   Locale config and UI dictionaries
  lib/                    Site config, helpers
```

Content lives in `src/data`; UI strings live in `src/i18n/dictionaries/en.ts`.

## Pending content

| What | Where |
| --- | --- |
| Sens live URL | `links.live` in `src/data/projects.ts` (currently `null` → "coming soon") |
| Final domain | `NEXT_PUBLIC_SITE_URL` env var (see `.env.example`) |
| HandStats case study copy | Draft in `src/data/projects.ts` — review before publishing |
| Sens case study | Add a `caseStudy` object to the project to get the full layout |

## Assets

| Asset | Path |
| --- | --- |
| CV | `public/cv/Ignacio_Capra_CV.pdf` |
| Profile photo | `public/images/profile.jpg` |
| HandStats screenshots | `public/images/projects/handstats/` |
| Sens screenshots | `public/images/projects/sens/` |

Screenshots render uncropped at their intrinsic aspect ratio, so every `Media` with a `src`
needs its real `width` and `height`. Alt text should describe only what is visible.

## Adding Spanish

See `src/i18n/config.ts`. Add `dictionaries/es.ts`, register it, enable the locale and add
locale routing (e.g. `app/[locale]`). Page content in `src/data` would need per-locale variants.
