"use client";

import { useEffect } from "react";
import { SLIDE_IDS } from "@/lib/PresentationProgressContext";

export function usePresentationNav() {
  useEffect(() => {
    const container = document.querySelector(".presentation-container") as HTMLElement | null;
    if (!container) return;

    const getCurrentIndex = () => {
      const w = container.offsetWidth;
      if (w <= 0) return 0;
      const scrollLeft = container.scrollLeft;
      return Math.min(Math.round(scrollLeft / w), SLIDE_IDS.length - 1);
    };

    const goTo = (index: number) => {
      const i = Math.max(0, Math.min(index, SLIDE_IDS.length - 1));
      const w = container.offsetWidth;
      container.scrollTo({ left: i * w, behavior: "smooth" });
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const current = getCurrentIndex();
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goTo(current + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goTo(current - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
}
