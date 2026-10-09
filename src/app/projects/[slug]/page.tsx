import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyBody } from "@/components/projects/case-study/CaseStudyBody";
import { CaseStudyHero } from "@/components/projects/case-study/CaseStudyHero";
import { NextProject } from "@/components/projects/case-study/NextProject";
import { ProjectSummary } from "@/components/projects/case-study/ProjectSummary";
import { getNextProject, getProject, projects } from "@/data/projects";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title} — ${project.category}`;
  const description = project.description[0];
  const path = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title, description },
    twitter: { title, description },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(defaultLocale);

  return (
    <>
      <CaseStudyHero project={project} dict={dict} />
      {project.caseStudy ? (
        <CaseStudyBody caseStudy={project.caseStudy} dict={dict} />
      ) : (
        <ProjectSummary project={project} dict={dict} />
      )}
      <NextProject project={getNextProject(project.slug)} dict={dict} />
    </>
  );
}
