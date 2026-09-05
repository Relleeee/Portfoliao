import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-6">
        {siteConfig.experience.map((job) => (
          <div
            key={`${job.company}-${job.duration}`}
            className="rounded-2xl border border-border bg-card p-6"
          >
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
                      className="text-sm text-accent hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <p className="text-sm text-muted">{job.company}</p>
                  )}
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
              </div>

              <div className="text-sm text-muted sm:text-right">
                <p>{job.duration}</p>
                <p>{job.hours}</p>
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

            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
