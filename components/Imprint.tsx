"use client";

import { useState, useCallback, useEffect } from "react";

export default function Imprint() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-0 z-40 py-2 px-2 text-xs text-mute hover:text-accent transition-colors"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        aria-label="Impressum anzeigen"
      >
        <span className="tracking-widest uppercase">Impressum</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="imprint-title"
        >
          <div
            className="bg-white rounded-xl shadow-xl border border-border p-6 max-w-sm w-full text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 id="imprint-title" className="text-lg font-semibold text-accent">
                Impressum
              </h2>
              <button
                type="button"
                onClick={close}
                className="shrink-0 p-1 text-mute hover:text-accent rounded transition-colors"
                aria-label="Schließen"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-sm text-accent flex flex-col gap-2">
              <p className="font-medium">Alexander Berlin</p>
              <p>Stargarder Str. 16</p>
              <p>10437 Berlin</p>
              <a
                href="mailto:berlin.alexander@icloud.com"
                className="text-magenta hover:underline underline-offset-2 mt-2"
              >
                berlin.alexander@icloud.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
