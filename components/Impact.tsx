"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const STAGGER_MS = 120;

export default function Impact() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bullets = [
    t.impact.bullet1,
    t.impact.bullet2,
    t.impact.bullet3,
    t.impact.bullet4,
  ];
  const metrics = [t.impact.metric1, t.impact.metric2];
  const allItems = [...bullets, ...metrics];

  const cardBase = "rounded-xl border-2 min-h-[88px] flex items-center justify-center p-4 sm:p-6 w-full transition-colors duration-200";
  const cardClass = `${cardBase} presentation-card`;

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="presentation-slide flex flex-col justify-center items-center py-10 px-6 border-t border-border overflow-hidden"
      aria-labelledby="impact-heading"
    >
      <div
        className={`max-w-[72rem] w-full flex-1 flex flex-col justify-center items-center text-center min-h-0 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6">
          <h2 id="impact-heading" className="text-2xl sm:text-3xl font-bold text-accent mb-2">
            {t.impact.title}
          </h2>
          <p className="text-mute text-base sm:text-lg max-w-2xl mx-auto">
            {t.impact.intro}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-3xl mx-auto">
          {allItems.map((text, i) => {
            const isLeft = i % 2 === 0;
            const delay = i * STAGGER_MS;
            const animateClass = inView
              ? isLeft
                ? "animate-impact-slide-left"
                : "animate-impact-slide-right"
              : "opacity-0";
            return (
              <div
                key={i}
                className={`${cardClass} ${animateClass}`}
                style={
                  inView
                    ? { animationDelay: `${delay}ms`, animationFillMode: "forwards" as const }
                    : undefined
                }
              >
                <p className="text-base font-medium leading-snug text-center">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
