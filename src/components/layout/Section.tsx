import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        {title && (
          <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
