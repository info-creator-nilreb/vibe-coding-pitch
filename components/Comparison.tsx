"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const STAGGER_MS = 100;

/* Vibe Coding: Geschwindigkeit, KI/Prompt, Prototypen, Risiko */
function IconSpeed({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function IconPrompt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function IconPrototype({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

/* SDD: Struktur, Time-to-Market, 4-Phasen, Nacharbeit */
function IconBlueprint({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}
function IconTimer({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function IconCycle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-3-5.5" />
      <path d="M21 3v6h-6" />
    </svg>
  );
}
function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function IconFile({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}
function IconMonitor({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function IconChecklist({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

export default function Comparison() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const c = t.comparison;
  const vibeItems = [
    { icon: IconSpeed, text: c.vibe.speed },
    { icon: IconPrompt, text: c.vibe.ki },
    { icon: IconPrototype, text: c.vibe.prototypes },
    { icon: IconShield, text: c.vibe.risk },
  ];

  return (
    <section
      ref={sectionRef}
      id="comparison"
      className="presentation-slide flex flex-col items-center pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-6 border-t border-border overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      {/* Auf Mobil: Inhalt scrollbar, Höhe nur so viel wie nötig (kein Leer-Scroll) */}
      <div
        className={`max-w-[72rem] w-full flex-[0_1_auto] lg:flex-1 flex flex-col justify-start min-h-0 max-h-full overflow-y-auto pb-6 transition-all duration-600 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <ScrollReveal className="mb-6 sm:mb-8 text-center shrink-0">
          <h2 id="comparison-heading" className="text-2xl sm:text-3xl font-bold text-accent mb-1">
            {c.title}
          </h2>
          <p className="text-mute text-base sm:text-lg">{c.intro}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl mx-auto items-start lg:items-stretch min-h-0 flex-shrink-0">
          {/* Vibe Coding – Karten mit Icons */}
          <div className="flex flex-col min-h-0 w-full lg:w-auto">
            <div
              className={`lg:h-full flex flex-col rounded-xl border-2 border-border p-4 sm:p-5 bg-card/50 transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <h3 className="text-lg font-bold text-accent mb-0.5 shrink-0">{c.vibe.title}</h3>
              <p className="text-sm text-mute mb-4 shrink-0">{c.vibe.sub}</p>
              <div className="space-y-3 pb-3 flex-1 min-h-0">
                {vibeItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 min-h-[48px] rounded-lg border border-border hover:border-magenta/40 hover:bg-magenta/5 transition-colors"
                      style={
                        inView
                          ? {
                              animation: "impactSlideFromLeft 0.5s ease-out forwards",
                              animationDelay: `${(i + 1) * STAGGER_MS}ms`,
                              animationFillMode: "forwards",
                              opacity: 0,
                            }
                          : undefined
                      }
                    >
                      <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-magenta/10 text-magenta">
                        <Icon className="w-4 h-4" />
                      </span>
                      <p className="text-sm font-medium text-accent leading-snug pt-1">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Spec-Driven Development – Karten + Ablauf + Nacharbeit */}
          <div className="flex flex-col min-h-0 w-full lg:w-auto">
            <div
              className={`lg:h-full flex flex-col rounded-xl border-2 border-border p-4 sm:p-5 bg-card/50 transition-all duration-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              <h3 className="text-lg font-bold text-accent mb-0.5 shrink-0">{c.sdd.title}</h3>
              <p className="text-sm text-mute mb-4 shrink-0">{c.sdd.sub}</p>

              <div className="space-y-3 pb-3 flex-1 min-h-0">
                <div
                  className="flex items-start gap-3 p-3 min-h-[48px] rounded-lg border border-border hover:border-magenta/40 hover:bg-magenta/5 transition-colors"
                  style={
                    inView
                      ? {
                          animation: "impactSlideFromRight 0.5s ease-out forwards",
                          animationDelay: `${STAGGER_MS}ms`,
                          animationFillMode: "forwards",
                          opacity: 0,
                        }
                      : undefined
                  }
                >
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-magenta/10 text-magenta">
                    <IconBlueprint className="w-4 h-4" />
                  </span>
                  <p className="text-sm font-medium text-accent leading-snug pt-1">{c.sdd.structure}</p>
                </div>
                <div
                  className="flex items-start gap-3 p-3 min-h-[48px] rounded-lg border border-border hover:border-magenta/40 hover:bg-magenta/5 transition-colors"
                  style={
                    inView
                      ? {
                          animation: "impactSlideFromRight 0.5s ease-out forwards",
                          animationDelay: `${2 * STAGGER_MS}ms`,
                          animationFillMode: "forwards",
                          opacity: 0,
                        }
                      : undefined
                  }
                >
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-magenta/10 text-magenta">
                    <IconTarget className="w-4 h-4" />
                  </span>
                  <p className="text-sm font-medium text-accent leading-snug pt-1">{c.sdd.cycleShort}</p>
                </div>
                <div
                  className="flex items-start gap-3 p-3 min-h-[48px] rounded-lg border border-border hover:border-magenta/40 hover:bg-magenta/5 transition-colors"
                  style={
                    inView
                      ? {
                          animation: "impactSlideFromRight 0.5s ease-out forwards",
                          animationDelay: `${3 * STAGGER_MS}ms`,
                          animationFillMode: "forwards",
                          opacity: 0,
                        }
                      : undefined
                  }
                >
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-magenta/10 text-magenta">
                    <IconTimer className="w-4 h-4" />
                  </span>
                  <p className="text-sm font-medium text-accent leading-snug pt-1">{c.sdd.t2m}</p>
                </div>
                <div
                  className="flex items-start gap-3 p-3 min-h-[48px] rounded-lg border border-border hover:border-magenta/40 hover:bg-magenta/5 transition-colors"
                  style={
                    inView
                      ? {
                          animation: "impactSlideFromRight 0.5s ease-out forwards",
                          animationDelay: `${4 * STAGGER_MS}ms`,
                          animationFillMode: "forwards",
                          opacity: 0,
                        }
                      : undefined
                  }
                >
                  <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-magenta/10 text-magenta">
                    <IconCycle className="w-4 h-4" />
                  </span>
                  <p className="text-sm font-medium text-accent leading-snug pt-1">{c.sdd.rework}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollReveal className="mt-6 sm:mt-8 text-center shrink-0">
          <p className="text-base sm:text-lg font-medium text-accent max-w-2xl mx-auto leading-snug">
            {c.takeaway}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
