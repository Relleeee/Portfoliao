import Image from "next/image";
import { Music } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";

export function Projects() {
  const [featured, ...rest] = siteConfig.projects;

  return (
    <Section id="projects" title="Projects">
      <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex h-40 items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 sm:h-48">
          <Music className="h-12 w-12 text-accent" strokeWidth={1.5} />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold">{featured.name}</h3>
            <span className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent">
              {featured.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{featured.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
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
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {rest.map((project) => (
          <div
            key={project.name}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="relative h-40 w-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
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
          </div>
        ))}
      </div>
    </Section>
  );
}
