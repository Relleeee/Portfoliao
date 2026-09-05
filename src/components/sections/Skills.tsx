import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/lib/site-config";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {siteConfig.skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold">{group.category}</h3>
            <p className="mt-2 text-sm text-muted">{group.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
