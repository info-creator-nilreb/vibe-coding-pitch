"use client";

import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const AUTO_SCROLL_DURATION_MS = 48000; // ~48 s pro Durchlauf, dann Wiederholung

/**
 * Rahmen für den Beispiel-Prompt: langer Text, scrollbar, auto-scroll mit Wiederholung.
 */
export default function PromptFrame() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prompt = (t.demo as { initialPrompt?: string }).initialPrompt ?? (t.demo as { promptExample?: string }).promptExample ?? "";

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !prompt) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setHasStarted(true);
      },
      { threshold: 0.25, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [prompt]);

  useEffect(() => {
    if (!hasStarted) return;

    const container = scrollRef.current;
    if (!container) return;

    if (startTimeRef.current === null) {
      startTimeRef.current = performance.now();
    }

    const tick = () => {
      const containerEl = scrollRef.current;
      if (!containerEl) return;

      const maxScroll = containerEl.scrollHeight - containerEl.clientHeight;
      if (maxScroll <= 0) return;

      const elapsed = performance.now() - (startTimeRef.current ?? 0);
      const cycle = elapsed / AUTO_SCROLL_DURATION_MS;
      const progress = cycle % 1;
      containerEl.scrollTop = progress * maxScroll;
    };

    intervalRef.current = setInterval(tick, 50);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hasStarted]);

  return (
    <div className="rounded-xl border border-border overflow-hidden bg-neutral-100 shadow-lg max-w-3xl w-full flex flex-col max-h-[min(65vh,520px)]">
      <div className="px-4 py-2.5 border-b border-border bg-neutral-200/80 flex items-center gap-2 shrink-0">
        <span className="w-3 h-3 rounded-full bg-red-400/80" aria-hidden />
        <span className="w-3 h-3 rounded-full bg-amber-400/80" aria-hidden />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" aria-hidden />
        <span className="ml-2 text-xs text-mute font-mono">{t.demo.promptLabel}</span>
      </div>
      <div
        ref={scrollRef}
        className="p-4 overflow-y-auto overflow-x-hidden flex-1 min-h-0"
      >
        <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-accent">
          {prompt}
        </pre>
      </div>
    </div>
  );
}
