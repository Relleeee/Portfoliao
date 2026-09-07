import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteConfig } from "@/lib/site-config";
import { withBasePath } from "@/lib/asset";

export function About() {
  return (
    <Section id="about" title="About" eyebrow="Who I am">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
        <Reveal>
          <TiltCard className="mx-auto w-fit sm:mx-0">
            <div
              className="rounded-3xl p-[2px]"
              style={{
                background:
                  "conic-gradient(from 140deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
              }}
            >
              <Image
                src={withBasePath(siteConfig.profileImage)}
                alt={siteConfig.name}
                width={200}
                height={200}
                className="h-36 w-36 rounded-[calc(1.5rem-2px)] object-cover sm:h-44 sm:w-44"
              />
            </div>
          </TiltCard>
        </Reveal>

        <div className="space-y-4 text-muted">
          {siteConfig.about.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph} delay={i * 100}>
              <p className="leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
