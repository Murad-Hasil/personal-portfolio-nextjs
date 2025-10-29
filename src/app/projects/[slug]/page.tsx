// src/app/projects/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projects from "@/components/data/projects";
import type { Project } from "@/components/data/projects";
import Section from "@/components/common/Section";
import { projectPageStyles } from "@/lib/styles";

// Pre-generate all project pages at build time
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Next.js 15+ requires params to be awaited
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project: Project | undefined = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className={projectPageStyles.main}>
      {/* ===== HEADER ===== */}
      <section className={projectPageStyles.header}>
        <h1 className={projectPageStyles.title}>{project.title}</h1>
        {project.description && (
          <p className={projectPageStyles.description}>
            {project.description}
          </p>
        )}
      </section>

      {/* ===== IMAGE ===== */}
      {project.image && (
        <div className={projectPageStyles.imageWrapper}>
          <Image
            src={project.image}
            alt={`Preview of ${project.title}`}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* ===== TAGS ===== */}
      {project.tags?.length > 0 && (
        <div className={projectPageStyles.tagsWrapper}>
          {project.tags.map((tag) => (
            <span key={tag} className={projectPageStyles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* ===== CONTENT SECTIONS ===== */}
      {project.features?.length > 0 && (
        <Section title="Key Features" items={project.features} />
      )}
      {project.challenges?.length > 0 && (
        <Section title="Challenges" items={project.challenges} />
      )}
      {project.learnings?.length > 0 && (
        <Section title="What I Learned" items={project.learnings} />
      )}

      {/* ===== LINKS ===== */}
      {(project.links?.demo || project.links?.code) && (
        <div className={projectPageStyles.linksWrapper}>
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={projectPageStyles.liveBtn}
            >
              View Live
            </Link>
          )}
          {project.links.code && (
            <Link
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className={projectPageStyles.codeBtn}
            >
              View Code
            </Link>
          )}
        </div>
      )}
    </main>
  );
}
