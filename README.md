# Ignacio Capra — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS.
Bilingual: English at `/`, Spanish at `/es`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (English) or http://localhost:3000/es (Spanish).

Other scripts: `npm run build`, `npm start`, `npm run typecheck`.

## Structure

```
src/
  proxy.ts                Locale routing: unprefixed URLs are served as English, /es as Spanish
  app/
    [locale]/             Root layout, home page, 404, OG/Twitter images (per language)
      projects/[slug]/    Project pages (/projects/handstats, /projects/beach-handstats, /projects/sens)
    sitemap.ts, robots.ts, icon.svg
  components/
    layout/               Header (+ mobile menu), Footer, LanguageSwitcher, RevealObserver
    sections/             Home page sections (Hero, About, Experience, ...)
    experience/           Experience rows
    projects/             Project showcase, stage, meta, links
      case-study/         Case study hero, body, sections, workflow, architecture, next project
    ui/                   Button, Tag, SectionHeading, Container, MediaFrame, Icons, ...
  data/                   All content, English and Spanish side by side
    projects/             One file per project
  i18n/                   Locale config, path helpers and UI dictionaries (en.ts, es.ts)
  lib/                    Site config (titles, descriptions, hreflang), helpers
```

## Languages

- **Content** lives in `src/data`. Each module builds both languages from one definition with
  `localized()`, so every string sits next to its translation (`t({ en: "…", es: "…" })`) and
  shared values (URLs, images, dates) are written once.
- **UI strings** live in `src/i18n/dictionaries/en.ts` and `es.ts` (the Spanish one is typed against
  the English one, so a missing key is a type error).
- **Links** between pages use `localePath(locale, path)` so they stay in the current language.
- **CVs**: English `public/cv/Ignacio_Capra_CV.pdf`, Spanish `public/cv/Ignacio_Capra_CV_ES.pdf`.

## Pending content

| What | Where |
| --- | --- |
| Sens live URL | `links.live` in `src/data/projects/sens.ts` (currently `null` → "coming soon") |
| Final domain | `NEXT_PUBLIC_SITE_URL` env var (see `.env.example`) |
| Sens case study | Add a `caseStudy` object to the project to get the full layout |

## Assets

| Asset | Path |
| --- | --- |
| CVs | `public/cv/` |
| Profile photo | `public/images/profile.jpg` |
| HandStats screenshots | `public/images/projects/handstats/` |
| Beach HandStats screenshots | `public/images/projects/beach-handstats/` (demo data from the app's docs) |
| Sens screenshots | `public/images/projects/sens/` |

Screenshots render uncropped at their intrinsic aspect ratio, so every `Media` with a `src`
needs its real `width` and `height`. Alt text should describe only what is visible, in both languages.
