"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SlideHint() {
  const { t } = useLanguage();
  return (
    <div
      className="fixed bottom-6 left-6 z-40 text-xs text-mute"
      aria-hidden
    >
      {t.common.slideHint}
    </div>
  );
}
