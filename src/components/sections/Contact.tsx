import { Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";
import { socialIcons } from "@/components/icons";

export function Contact() {
  return (
    <Section id="contact" title="Contact" eyebrow="Say hello">
      <Reveal>
        <div className="glass gradient-border relative overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <div
            className="spin-slow absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
            }}
            aria-hidden="true"
          />
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">together</span>
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            I&apos;m always open to new opportunities and connecting with fellow
            engineers, designers, and builders. Feel free to reach out.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="btn-primary mx-auto mt-8"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>

          <div className="mt-8 flex justify-center gap-3">
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
        </div>
      </Reveal>
    </Section>
  );
}
