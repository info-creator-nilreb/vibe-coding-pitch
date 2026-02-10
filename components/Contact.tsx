"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="presentation-slide flex flex-col justify-center items-center py-10 px-6 border-t border-border overflow-hidden"
      role="contentinfo"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[72rem] w-full flex flex-col justify-center items-center text-center">
        <ScrollReveal>
          <p id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl text-accent font-light max-w-3xl mx-auto leading-relaxed">
            {t.contact.closingBefore}
            <span
            className="text-magenta font-semibold text-3xl sm:text-4xl md:text-5xl opacity-0 animate-word-reveal inline-block"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            {t.contact.highlightWord}
          </span>
            {t.contact.closingAfter}
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
