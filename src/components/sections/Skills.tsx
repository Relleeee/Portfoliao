import { Code2, Palette, Clapperboard, type LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { siteConfig } from "@/lib/site-config";

const categoryIcons: Record<string, LucideIcon> = {
  "Software Development": Code2,
  "UI/UX Design": Palette,
  "Video Editing": Clapperboard,
};

const allTags = siteConfig.skills.flatMap((group) => group.tags);

export function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="What I work with">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {siteConfig.skills.map((group, i) => {
          const Icon = categoryIcons[group.category] ?? Code2;
          return (
            <Reveal key={group.category} delay={i * 110}>
              <TiltCard className="glass h-full rounded-2xl p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/40 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-semibold">{group.category}</h3>
                <p className="mt-2 text-sm text-muted">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10" delay={120}>
        <div className="marquee-mask edge-fade overflow-hidden py-2">
          <div className="marquee-track">
            {[...allTags, ...allTags].map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="shrink-0 rounded-full border border-border bg-background/30 px-4 py-1.5 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
