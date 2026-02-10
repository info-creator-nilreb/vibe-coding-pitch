"use client";

import { usePresentationProgress } from "@/lib/PresentationProgressContext";

export default function SlideCounter() {
  const { currentIndex, total } = usePresentationProgress();

  return (
    <div
      className="fixed bottom-6 right-6 z-40 text-sm text-mute tabular-nums"
      aria-live="polite"
      aria-label={`Folie ${currentIndex + 1} von ${total}`}
    >
      {currentIndex + 1} / {total}
    </div>
  );
}
