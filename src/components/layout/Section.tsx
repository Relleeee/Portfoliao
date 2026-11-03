import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        {title && (
          <Reveal>
            <div className="mb-14">
              {eyebrow && (
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  {eyebrow}
                </p>
              )}
              <div className="flex items-center gap-5">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {title.split(" ").map((word, i) => (
                    <span key={i}>
                      {i > 0 && " "}
                      <span className="word" style={{ "--i": i } as CSSProperties}>
                        {word}
                      </span>
                    </span>
                  ))}
                </h2>
                <span className="line-draw h-px flex-1 bg-gradient-to-r from-accent/60 via-border to-transparent" />
              </div>
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
