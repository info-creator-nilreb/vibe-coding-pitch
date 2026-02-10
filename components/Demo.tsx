"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import PromptFrame from "./PromptFrame";

export default function Demo() {
  const { t } = useLanguage();
  return (
    <section
      id="demo"
      className="presentation-slide flex flex-col justify-center items-center py-10 px-6 border-t border-border overflow-hidden"
      aria-labelledby="demo-heading"
    >
      <h2 id="demo-heading" className="sr-only">{t.demo.title}</h2>
      <div className="max-w-[72rem] mx-auto w-full flex-1 min-h-0 flex flex-col justify-center items-center">
        <PromptFrame />
      </div>
    </section>
  );
}
