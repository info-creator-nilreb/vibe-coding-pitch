"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="start" className="presentation-slide relative flex flex-col items-center justify-center px-6 pt-16 pb-12 overflow-hidden" aria-label="Start">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gray-100/60 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gray-100/40 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-accent mb-6">{t.hero.headline}</h1>
        <p className="text-xl sm:text-2xl text-mute font-light max-w-2xl mx-auto">{t.hero.subline}</p>
      </div>
      <div className="relative z-10 mt-12 flex flex-col items-center gap-2" aria-hidden>
        <span className="text-sm text-mute">{t.common.slideHint}</span>
        <div className="animate-scroll-hint flex flex-col items-center gap-1">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-magenta">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
