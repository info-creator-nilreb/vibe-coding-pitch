"use client";

import { useEffect, useRef } from "react";

/**
 * Parallax: element moves at (speed * scrollY). speed in 0..1.
 * 0.15–0.25 = subtle; higher = more movement.
 */
export function useParallax(speed: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = typeof window !== "undefined" ? window.scrollY : 0;
        const offset = y * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
