import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <Section id="about" title="About" className="bg-card">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:items-start">
        <Image
          src={siteConfig.profileImage}
          alt={siteConfig.name}
          width={180}
          height={180}
          className="mx-auto h-32 w-32 rounded-2xl border border-border object-cover sm:mx-0 sm:h-40 sm:w-40"
        />

        <div className="space-y-4 text-muted">
          {siteConfig.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
