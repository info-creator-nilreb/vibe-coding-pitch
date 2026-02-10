"use client";

import { useEffect, useState } from "react";

const POINTER_SEEN_KEY = "vibe-coding-pointer-seen";

export default function PointerOverlay() {
  const [visible, setVisible] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(POINTER_SEEN_KEY) === "true") return;
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onScroll = () => {
      setHiddenByScroll(true);
      localStorage.setItem(POINTER_SEEN_KEY, "true");
    };
    window.addEventListener("scroll", onScroll, { once: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [visible]);

  const showOverlay = visible && !hiddenByScroll;

  if (!showOverlay) return null;

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-fade-in"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-2 text-mute">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
