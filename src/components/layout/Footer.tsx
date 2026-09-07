import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { socialIcons } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}.
          </p>
          <p className="mt-1 text-xs">
            Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {siteConfig.social.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
