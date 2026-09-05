import { Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";
import { socialIcons } from "@/components/icons";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="mx-auto max-w-md text-muted">
          I&apos;m always open to new opportunities and connecting with fellow
          engineers, designers, and builders. Feel free to reach out.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" />
          {siteConfig.email}
        </a>

        <div className="mt-6 flex justify-center gap-3">
          {siteConfig.social.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
