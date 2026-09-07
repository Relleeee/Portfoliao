"use client";

import { useEffect, useState } from "react";

/**
 * Cross-fades through a list of words, sliding + de-blurring each one into
 * place. Holds on the first word for visitors who prefer reduced motion.
 */
export function RotatingText({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      words.length < 2
    ) {
      return;
    }

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-grid align-bottom">
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className={`col-start-1 row-start-1 whitespace-nowrap text-gradient font-semibold transition-all duration-500 ${
            i === index
              ? "translate-y-0 opacity-100 blur-0"
              : "-translate-y-1.5 opacity-0 blur-[5px]"
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
