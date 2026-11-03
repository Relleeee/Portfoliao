import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { RotatingText } from "@/components/ui/RotatingText";
import { socialIcons } from "@/components/icons";
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

        <div>
          <Reveal>
            <p className="font-mono text-sm text-accent">Hi, my name is</p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Joshua Rhei <span className="text-gradient">J. Liao</span>
            </h3>
            <p className="mt-2 text-muted">
              I&apos;m a <RotatingText words={siteConfig.roles} />
            </p>
          </Reveal>

          <div className="mt-6 space-y-4 text-muted">
            {siteConfig.about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={(i + 1) * 100}>
                <p className="leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={(siteConfig.about.paragraphs.length + 1) * 100}>
            <div className="stagger mt-7 flex gap-3">
              {siteConfig.social.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_-8px_var(--glow)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
