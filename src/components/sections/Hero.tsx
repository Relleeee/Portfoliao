import Image from "next/image";
import { ArrowDown, ArrowRight, FileDown, Mail, Music } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Magnetic } from "@/components/ui/Magnetic";
import { withBasePath } from "@/lib/asset";
import type { CSSProperties } from "react";

// [top %, left %, size px, delay s, duration s] — fixed so server and client
// render identically.
const SPARKLES = [
  [12, 8, 3, 0, 4.2],
  [22, 46, 2, 1.4, 5.1],
  [9, 72, 3, 2.6, 3.8],
  [34, 92, 2, 0.8, 4.6],
  [58, 4, 2, 3.1, 5.4],
  [70, 38, 3, 1.9, 4.1],
  [82, 64, 2, 0.4, 3.6],
  [48, 58, 2, 2.2, 5.8],
  [88, 14, 3, 3.6, 4.4],
  [64, 86, 3, 1.1, 3.9],
  [28, 24, 2, 4.2, 5.2],
  [42, 78, 2, 2.9, 4.8],
] as const;

// Screenshots stacked behind the ChordScribe card, back to front.
const SHOWCASE = [
  { name: "Rehearsa", className: "right-0 top-2 w-[300px]", rotate: 5, delay: 0.35, float: -2 },
  { name: "Gainzly", className: "left-0 top-16 w-[290px]", rotate: -6, delay: 0.5, float: 0 },
  { name: "SariTap", className: "right-6 top-[13.5rem] w-[250px]", rotate: 2, delay: 0.65, float: -4 },
] as const;

const CHORDS = ["Am", "F", "C", "G"];

const HEADLINE = "From idea";

export function Hero() {
  const projects = siteConfig.projects;

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-69px)] items-center"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {SPARKLES.map(([top, left, size, delay, duration], i) => (
          <span
            key={i}
            className="sparkle"
            style={
              {
                top: `${top}%`,
                left: `${left}%`,
                "--s": `${size}px`,
                "--d": `${delay}s`,
                "--t": `${duration}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="hero-parallax relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1fr_auto]">
        <div>
          <a
            href="#projects"
            className="enter glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
            style={{ animationDelay: "0ms" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
            Now building <span className="font-medium text-foreground">ChordScribe</span>
            <ArrowRight className="h-3 w-3" />
          </a>

          <h1
            className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
            aria-label="From idea to shipped."
          >
            <span className="block" aria-hidden="true">
              {[...HEADLINE].map((char, i) => (
                <span key={i} className="char" style={{ "--i": i } as CSSProperties}>
                  {char === " " ? " " : char}
                </span>
              ))}
            </span>
            <span className="wipe-in" aria-hidden="true">
              <span className="text-gradient">to shipped.</span>
            </span>
          </h1>

          <p
            className="enter mt-6 max-w-md text-base leading-relaxed text-muted"
            style={{ animationDelay: "380ms" }}
          >
            I design, build and test full-stack web apps — from the database
            schema to the pixels on screen, and every edge case in between.
          </p>

          <p
            className="enter mt-4 font-mono text-xs tracking-wide text-accent"
            style={{ animationDelay: "440ms" }}
          >
            {"// full-stack · ui/ux · qa testing"}
          </p>

          <div
            className="enter mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "500ms" }}
          >
            <Magnetic>
              <a href="#projects" className="btn-primary">
                See my work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-ghost">
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </Magnetic>
            {siteConfig.resumeUrl && (
              <Magnetic>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost"
                >
                  <FileDown className="h-4 w-4" />
                  View CV
                </a>
              </Magnetic>
            )}
          </div>
        </div>

        <a
          href="#projects"
          aria-label="Jump to projects"
          className="relative hidden h-[25rem] w-[27rem] md:block"
        >
          <div
            className="spin-slow absolute inset-10 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent-3), var(--accent))",
            }}
            aria-hidden="true"
          />

          {SHOWCASE.map((shot) => {
            const project = projects.find((p) => p.name === shot.name);
            if (!project || !("image" in project)) return null;
            return (
              <div
                key={shot.name}
                className={`enter absolute ${shot.className}`}
                style={{
                  animationDelay: `${shot.delay}s`,
                  rotate: `${shot.rotate}deg`,
                }}
              >
                <div
                  className="float overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
                  style={{ animationDelay: `${shot.float}s` }}
                >
                  <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                    <span className="ml-2 font-mono text-[10px] text-muted">
                      {shot.name.toLowerCase()}
                    </span>
                  </div>
                  <Image
                    src={withBasePath(project.image)}
                    alt=""
                    width={600}
                    height={352}
                    className="aspect-[1.7] w-full object-cover"
                  />
                </div>
              </div>
            );
          })}

          <div
            className="enter absolute bottom-0 left-2 z-10 w-64"
            style={{ animationDelay: "0.85s" }}
          >
            <div
              className="float rounded-2xl border border-border bg-surface/90 p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              style={{ animationDelay: "-3s" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Music className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">ChordScribe</p>
                  <p className="text-[11px] text-muted">Transcribing chords…</p>
                </div>
                <div className="flex h-6 items-end gap-[3px]" aria-hidden="true">
                  {[0, 0.3, 0.15, 0.45, 0.2].map((d, i) => (
                    <span
                      key={i}
                      className="eq-bar w-[3px] rounded-full bg-gradient-to-t from-accent to-accent-2"
                      style={{ "--d": `${-d}s` } as CSSProperties}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {CHORDS.map((chord, i) => (
                  <span
                    key={chord}
                    className="chord rounded-md border border-border py-1.5 text-center font-mono text-xs text-muted"
                    style={{ "--i": i } as CSSProperties}
                  >
                    {chord}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
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
