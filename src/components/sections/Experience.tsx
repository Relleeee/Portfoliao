import Image from "next/image";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteConfig } from "@/lib/site-config";

export function Experience() {
  return (
    <Section id="experience" title="Experience" eyebrow="Where I've worked">
      <div className="relative space-y-8 border-l border-border pl-8 sm:pl-10">
        {siteConfig.experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.duration}`} delay={i * 90}>
            <div className="relative">
              <span
                className="pulse-dot absolute top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-background"
                style={{ left: "calc(-2rem - 6px)" }}
                aria-hidden="true"
              />
              <TiltCard className="glass rounded-2xl p-6" max={3}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg border border-border object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{job.role}</h3>
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                        >
                          {job.company}
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ) : (
                        <p className="text-sm text-muted">{job.company}</p>
                      )}
                      <p className="mt-0.5 flex items-center gap-1 text-sm text-muted">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-muted sm:text-right">
                    <p>{job.duration}</p>
                    <p className="flex items-center gap-1 sm:justify-end">
                      <Clock className="h-3 w-3" />
                      {job.hours}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </TiltCard>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
