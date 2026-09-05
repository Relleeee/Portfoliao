import Image from "next/image";
import { Mail, FileDown } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { socialIcons } from "@/components/icons";
import { RotatingText } from "@/components/ui/RotatingText";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-65px)] scroll-mt-20 items-center"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-3 text-lg text-muted">
            And I am a{" "}
            <span className="font-medium text-foreground">
              <RotatingText words={siteConfig.roles} />
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            {siteConfig.resumeUrl && (
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <FileDown className="h-4 w-4" />
                View CV
              </a>
            )}
          </div>

          <div className="mt-8 flex gap-3">
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

        <Image
          src={siteConfig.profileImage}
          alt={siteConfig.name}
          width={220}
          height={220}
          priority
          className="mx-auto h-40 w-40 rounded-full border border-border object-cover sm:h-56 sm:w-56"
        />
      </div>
    </section>
  );
}
