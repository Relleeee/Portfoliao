import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-muted">
        Content coming Day 6 — a real contact section. For now:{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-accent underline underline-offset-4"
        >
          {siteConfig.email}
        </a>
      </p>
    </Section>
  );
}
