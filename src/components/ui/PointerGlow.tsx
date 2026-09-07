"use client";

import { useEffect } from "react";

/**
 * Tracks the pointer and exposes its position as `--spot-x` / `--spot-y` on
 * <html>, which the fixed `.pointer-glow` layer reads to render a soft
 * cursor-following spotlight. Disabled on touch devices and for visitors who
 * prefer reduced motion.
 */
export function PointerGlow() {
  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    const root = document.documentElement;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--spot-x", `${event.clientX}px`);
        root.style.setProperty("--spot-y", `${event.clientY}px`);
        root.dataset.spot = "on";
      });
    };

    const onLeave = () => {
      root.dataset.spot = "off";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div className="pointer-glow" aria-hidden="true" />;
}
