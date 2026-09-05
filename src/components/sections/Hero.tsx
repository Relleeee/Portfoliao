import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-65px)] scroll-mt-20 items-center"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-3 max-w-xl text-lg text-muted">{siteConfig.role}</p>
        <p className="mt-2 text-sm text-muted">
          Content coming Day 2 — rewritten intro, CV link, and contact CTA.
        </p>
      </div>
    </section>
  );
}
