"use client";

import { useRef, type ReactNode } from "react";

/**
 * Nudges its child toward the pointer while hovered, then springs back on
 * leave. `strength` is the fraction of the pointer's offset from centre to
 * follow. Reduced-motion visitors get a static wrapper (handlers bail out and
 * the CSS pins the transform).
 */
export function Magnetic({
  children,
  strength = 0.3,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);

  const onMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (
      !el ||
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const rect = el.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (event.clientY - (rect.top + rect.height / 2)) * strength;

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="magnetic"
    >
      {children}
    </span>
  );
}
