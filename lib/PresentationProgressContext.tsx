"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SLIDE_IDS = ["start", "problem", "evolution", "demo", "magic", "process", "impact", "comparison", "contact"];
const TOTAL = SLIDE_IDS.length;

type ContextValue = {
  currentIndex: number;
  total: number;
  slideIds: string[];
};

const PresentationProgressContext = createContext<ContextValue | null>(null);

export function PresentationProgressProvider({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".presentation-container") as HTMLElement | null;
    if (!container) return;

    const update = () => {
      const w = container.offsetWidth;
      if (w <= 0) return;
      const index = Math.round(container.scrollLeft / w);
      setCurrentIndex(Math.min(Math.max(index, 0), TOTAL - 1));
    };

    update();
    container.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      container.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const value: ContextValue = {
    currentIndex,
    total: TOTAL,
    slideIds: SLIDE_IDS,
  };

  return (
    <PresentationProgressContext.Provider value={value}>
      {children}
    </PresentationProgressContext.Provider>
  );
}

export function usePresentationProgress() {
  const ctx = useContext(PresentationProgressContext);
  if (!ctx) throw new Error("usePresentationProgress must be used within PresentationProgressProvider");
  return ctx;
}

export { SLIDE_IDS, TOTAL };
