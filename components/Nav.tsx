"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { usePresentationProgress } from "@/lib/PresentationProgressContext";

export default function Nav() {
  const { locale, setLocale } = useLanguage();
  const { currentIndex, total } = usePresentationProgress();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 overflow-visible bg-white/90 backdrop-blur-sm border-b border-border"
      role="navigation"
      aria-label="Fortschritt und Sprache"
    >
      <div className="mx-auto w-full max-w-[72rem] px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-end gap-3 sm:gap-4 min-w-0 flex-shrink-0">
          <div className="h-1.5 w-16 sm:w-24 flex-shrink-0 rounded-full bg-border overflow-hidden" aria-hidden>
            <div
              className="h-full bg-magenta rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            />
          </div>
          <div className="flex items-center gap-1 text-sm text-mute flex-shrink-0" role="group" aria-label="Sprache">
            <button
              type="button"
              onClick={() => setLocale("de")}
              className={`px-1 transition-colors hover:text-accent ${
                locale === "de" ? "text-accent font-medium underline underline-offset-4" : ""
              }`}
              aria-pressed={locale === "de"}
              aria-label="Deutsch"
            >
              DE
            </button>
            <span className="text-border" aria-hidden>|</span>
            <button
              type="button"
              onClick={() => setLocale("hu")}
              className={`px-1 transition-colors hover:text-accent ${
                locale === "hu" ? "text-accent font-medium underline underline-offset-4" : ""
              }`}
              aria-pressed={locale === "hu"}
              aria-label="Magyar"
            >
              HU
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
