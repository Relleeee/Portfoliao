import Image from "next/image";
import { Music } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/asset";

type Project = {
  name: string;
  description: string;
  tags: readonly string[];
  image?: string;
  status?: string;
  earlier?: boolean;
};

export function Projects() {
  const [featured, ...rest]: readonly Project[] = siteConfig.projects;
  const recent = rest.filter((project) => !project.earlier);
  const earlier = rest.filter((project) => project.earlier);

  return (
    <Section id="projects" title="Projects" eyebrow="What I've built">
      <Reveal>
        <TiltCard
          className="gradient-border glass mb-8 overflow-hidden rounded-2xl"
          max={3}
        >
          <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/25 via-accent-3/10 to-transparent sm:h-52">
            <Music
              aria-hidden="true"
              className="float h-14 w-14 text-accent"
              strokeWidth={1.5}
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold">{featured.name}</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
                {featured.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {featured.description}
            </p>
            <div className="stagger mt-4 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recent.map((project, i) => (
          <Reveal key={project.name} delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mt-14 mb-6 text-sm font-medium tracking-widest text-muted uppercase">
          Earlier work
        </h3>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {earlier.map((project, i) => (
          <Reveal key={project.name} delay={i * 70}>
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <TiltCard className="glass group h-full overflow-hidden rounded-2xl" max={4}>
      <div className={`img-reveal relative w-full overflow-hidden ${compact ? "h-32" : "h-44"}`}>
        {project.image && (
          <Image
            src={withBasePath(project.image)}
            alt={`${project.name} screenshot`}
            fill
            sizes={compact ? "(max-width: 640px) 100vw, 25vw" : "(max-width: 640px) 100vw, 33vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
      </div>
      <div className={compact ? "p-5" : "p-6"}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold">{project.name}</h3>
          {project.status && (
            <span className="rounded-full border border-accent/40 px-2.5 py-0.5 text-[11px] text-accent">
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted">{project.description}</p>
        <div className="stagger mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
