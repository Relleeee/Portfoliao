"use client";

import { useRef, type ReactNode } from "react";

/**
 * Wraps content in a card that tilts toward the pointer and shows a soft glare
 * that follows the cursor (the glare lives in `.tilt-card::before`). Visitors
 * who prefer reduced motion get a plain, static container — the CSS neutralises
 * the transform and the handlers below bail out early.
 */
export function TiltCard({
  children,
  className = "",
  max = 5,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const reduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduced()) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      el.style.setProperty("--rx", `${(0.5 - py) * max}deg`);
      el.style.setProperty("--ry", `${(px - 0.5) * max}deg`);
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}
