"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Evolution() {
  const { t } = useLanguage();

  const cards = [
    { multiplier: t.evolution.card1Multiplier, title: t.evolution.card1Title, sub: t.evolution.card1Sub, detail: t.evolution.card1Detail },
    { multiplier: t.evolution.card2Multiplier, title: t.evolution.card2Title, sub: t.evolution.card2Sub, detail: t.evolution.card2Detail },
    { multiplier: t.evolution.card3Multiplier, title: t.evolution.card3Title, sub: t.evolution.card3Sub, detail: t.evolution.card3Detail },
  ];

  return (
    <section
      id="evolution"
      className="presentation-slide flex flex-col justify-center items-center px-6 border-t border-border overflow-hidden"
      aria-labelledby="evolution-heading"
    >
      <ScrollReveal className="mb-8">
        <h2 id="evolution-heading" className="text-3xl sm:text-4xl font-bold text-accent text-center">
          {t.evolution.title}
        </h2>
      </ScrollReveal>
      <div className="flex flex-col sm:flex-row items-end sm:items-stretch justify-center gap-4 sm:gap-6 w-full max-w-5xl">
        {cards.map((card, i) => {
          const minHeights = [168, 192, 216];
          const maxWidths = ["240px", "280px", "320px"];
          return (
            <ScrollReveal key={i} className="flex-1 w-full sm:min-w-0 flex justify-center">
              <div className="presentation-card group w-full h-full p-6 rounded-xl border-2 flex flex-col justify-center text-center transition-colors duration-200" style={{ minHeight: minHeights[i], maxWidth: maxWidths[i] }}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-magenta text-white mb-3 w-fit mx-auto">
                  {card.multiplier}
                </span>
                <p className="text-base font-bold mb-1">{card.title}</p>
                <p className="text-base text-mute group-hover:text-white mb-1">{card.sub}</p>
                <p className="text-sm opacity-90 group-hover:text-white">{card.detail}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
