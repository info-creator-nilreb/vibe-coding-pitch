"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const STEP_ICONS = [
  (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4M12 2a6 6 0 0 1 4.5 10H12v6H7.5A6 6 0 1 1 12 2z" />
    </svg>
  ),
  (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-5.5" />
      <path d="M21 3v6h-6" />
    </svg>
  ),
  (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  ),
];

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    t.process.step1,
    t.process.step2,
    t.process.step3,
    t.process.step4,
  ];

  return (
    <section
      id="process"
      className="presentation-slide flex flex-col justify-center items-center py-10 px-6 border-t border-border overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[72rem] w-full flex flex-col justify-center items-center text-center">
        <ScrollReveal className="mb-6">
          <h2 id="process-heading" className="text-2xl sm:text-3xl font-bold text-accent mb-2">
            {t.process.title}
          </h2>
          <p className="text-mute text-base sm:text-lg max-w-2xl mb-6 mx-auto">
            {t.process.intro}
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          {steps.map((label, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-6">
              <div
                className="presentation-card px-5 py-4 border-2 rounded-xl text-accent font-medium text-center min-w-[8rem] opacity-0 animate-process-step transition-colors duration-200 flex items-center gap-3"
                style={{ animationDelay: `${i * 0.5}s`, animationFillMode: "forwards" }}
              >
                <span className="shrink-0 w-8 h-8 flex items-center justify-center text-magenta">
                  {STEP_ICONS[i]("w-6 h-6")}
                </span>
                <span>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <span className="text-mute hidden sm:inline animate-process-step opacity-0" style={{ animationDelay: `${i * 0.5 + 0.25}s`, animationFillMode: "forwards" }} aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
