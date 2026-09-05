import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";

export function Education() {
  return (
    <Section id="education" title="Education" className="bg-card">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {siteConfig.education.map((entry) => (
          <div
            key={entry.school}
            className="flex gap-4 rounded-2xl border border-border bg-background p-6"
          >
            <GraduationCap className="h-6 w-6 shrink-0 text-accent" />
            <div>
              <h3 className="font-semibold">{entry.school}</h3>
              <p className="text-sm text-muted">{entry.credential}</p>
              <p className="mt-1 text-xs text-muted">{entry.period}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-background p-6">
        <div className="flex items-start gap-4">
          <Image
            src={siteConfig.testimonial.image}
            alt={siteConfig.testimonial.name}
            width={56}
            height={56}
            className="h-14 w-14 rounded-full border border-border object-cover"
          />
          <div>
            <p className="text-sm italic text-muted">
              &ldquo;{siteConfig.testimonial.quote}&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium">{siteConfig.testimonial.name}</p>
            <p className="text-xs text-muted">{siteConfig.testimonial.title}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
