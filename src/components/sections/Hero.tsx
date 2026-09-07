import Image from "next/image";
import { Mail, FileDown, ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { socialIcons } from "@/components/icons";
import { RotatingText } from "@/components/ui/RotatingText";
import { withBasePath } from "@/lib/asset";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-69px)] items-center"
    >
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-14 px-6 sm:grid-cols-[1fr_auto]">
        <div>
          <p
            className="enter flex items-center gap-2 font-mono text-sm text-accent"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
            Hi, my name is
          </p>

          <h1
            className="enter mt-4 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block">Joshua Rhei</span>
            <span className="block text-gradient">J. Liao</span>
          </h1>

          <p
            className="enter mt-5 text-lg text-muted"
            style={{ animationDelay: "160ms" }}
          >
            And I am a <RotatingText words={siteConfig.roles} />
          </p>

          <p
            className="enter mt-4 max-w-md text-sm leading-relaxed text-muted"
            style={{ animationDelay: "220ms" }}
          >
            Computer Science undergraduate at the University of Roehampton,
            building full-stack web apps end to end — from database schema to the
            pixels on screen.
          </p>

          <div
            className="enter mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <a href="#contact" className="btn-primary">
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost"
              >
                <FileDown className="h-4 w-4" />
                View CV
              </a>
            )}
          </div>

          <div
            className="enter mt-9 flex gap-3"
            style={{ animationDelay: "380ms" }}
          >
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

        <div
          className="enter relative mx-auto"
          style={{ animationDelay: "240ms" }}
        >
          <div
            className="spin-slow absolute -inset-6 rounded-full opacity-70 blur-2xl"
            style={{
              background:
                "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
            }}
            aria-hidden="true"
          />
          <div
            className="float relative rounded-full p-[2px]"
            style={{
              background:
                "conic-gradient(from 120deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
            }}
          >
            <Image
              src={withBasePath(siteConfig.profileImage)}
              alt={siteConfig.name}
              width={260}
              height={260}
              priority
              className="h-44 w-44 rounded-full border border-background/40 object-cover sm:h-60 sm:w-60"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent sm:flex"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ArrowDown className="bob h-4 w-4" />
      </a>
    </section>
  );
}
