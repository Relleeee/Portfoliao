"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const sectionIds = siteConfig.nav.map((item) => item.href.replace("#", ""));

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Firm up the bar's backdrop once the page has scrolled past the hero edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          JRJL<span className="text-gradient">.</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden gap-8 text-sm text-muted md:flex"
        >
          {siteConfig.nav.map((item) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative py-1 transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-accent to-accent-3 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-border bg-background/90 px-6 py-4 text-sm backdrop-blur-xl md:hidden"
        >
          {siteConfig.nav.map((item) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2 transition-colors hover:bg-card hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
