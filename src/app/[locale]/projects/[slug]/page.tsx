import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyBody } from "@/components/projects/case-study/CaseStudyBody";
import { CaseStudyHero } from "@/components/projects/case-study/CaseStudyHero";
import { NextProject } from "@/components/projects/case-study/NextProject";
import { ProjectSummary } from "@/components/projects/case-study/ProjectSummary";
import { getNextProject, getProject, projectSlugs } from "@/data/projects";
import { isLocale } from "@/i18n/config";
import { alternatesFor } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getProject(locale, slug);
  if (!project) return {};

  const title = `${project.title} — ${project.category}`;
  const description = project.description[0];
  const alternates = alternatesFor(locale, `/projects/${project.slug}`);

  return {
    title,
    description,
    alternates,
    openGraph: { type: "article", url: alternates.canonical, title, description },
    twitter: { title, description },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(locale, slug);
  if (!project) notFound();

  return (
    <>
      <CaseStudyHero project={project} locale={locale} />
      {project.caseStudy ? (
        <CaseStudyBody caseStudy={project.caseStudy} locale={locale} />
      ) : (
        <ProjectSummary project={project} locale={locale} />
      )}
      <NextProject project={getNextProject(locale, project.slug)} locale={locale} />
    </>
  );
}
