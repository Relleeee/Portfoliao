import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: 4, suffix: "+", label: "Years writing code" },
  { value: siteConfig.experience.length, suffix: "", label: "Internships" },
  { value: 3, suffix: "", label: "Countries worked in" },
  { value: siteConfig.projects.length, suffix: "", label: "Projects shipped" },
];

export function Stats() {
  return (
    <section className="scroll-mt-24 pb-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass grid grid-cols-2 gap-6 rounded-2xl p-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="text-center">
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                  <span className="text-gradient">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </span>
                </p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
