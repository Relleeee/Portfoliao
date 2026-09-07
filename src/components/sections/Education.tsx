import Image from "next/image";
import { GraduationCap, Quote } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/asset";

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Where I studied">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {siteConfig.education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 100}>
            <TiltCard className="glass flex h-full gap-4 rounded-2xl p-6" max={3}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/40 text-accent">
                <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold">{entry.school}</h3>
                <p className="text-sm text-muted">{entry.credential}</p>
                <p className="mt-1 text-xs text-muted">{entry.period}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10" delay={120}>
        <figure className="glass gradient-border relative rounded-2xl p-8">
          <Quote
            className="absolute right-6 top-6 h-10 w-10 text-accent/20"
            aria-hidden="true"
          />
          <blockquote className="max-w-2xl text-sm italic leading-relaxed text-muted sm:text-base">
            &ldquo;{siteConfig.testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-4">
            <Image
              src={withBasePath(siteConfig.testimonial.image)}
              alt={siteConfig.testimonial.name}
              width={56}
              height={56}
              className="h-12 w-12 rounded-full border border-border object-cover"
            />
            <div>
              <p className="text-sm font-medium">
                {siteConfig.testimonial.name}
              </p>
              <p className="text-xs text-muted">
                {siteConfig.testimonial.title}
              </p>
            </div>
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
