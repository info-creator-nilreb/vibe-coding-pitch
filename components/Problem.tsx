"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

function BlockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mute shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export default function Problem() {
  const { t } = useLanguage();

  const blocks = [
    { title: t.problem.block1Title, text: t.problem.block1Text },
    { title: t.problem.block2Title, text: t.problem.block2Text },
    { title: t.problem.block3Title, text: t.problem.block3Text },
  ];

  return (
    <section
      id="problem"
      className="presentation-slide flex flex-col justify-center items-center px-6 border-t border-border overflow-hidden"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-[72rem] w-full flex flex-col justify-center items-center">
        <ScrollReveal className="mb-6 text-center">
          <h2 id="problem-heading" className="text-2xl sm:text-3xl font-bold text-accent mb-2">
            {t.problem.title}
          </h2>
          <p className="text-mute text-base sm:text-lg max-w-2xl mb-6 mx-auto">
            {t.problem.intro}
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mx-auto">
          {blocks.map((block, i) => (
            <ScrollReveal key={i}>
              <div className="presentation-card group p-4 sm:p-5 rounded-xl border-2 flex gap-3 min-h-[100px] items-center">
                <div className="mt-1 shrink-0 [&_svg]:text-mute group-hover:[&_svg]:text-white group-hover:text-white">
                  <BlockIcon />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">{block.title}</h3>
                  <p className="text-base leading-relaxed opacity-90">{block.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
