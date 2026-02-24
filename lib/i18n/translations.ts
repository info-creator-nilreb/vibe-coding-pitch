export type Locale = "de" | "hu";

const INITIAL_PROMPT = `Role: Senior Software Developer

Goal:
Build a single-page presentation website that explains "Vibe Coding for IT Project Managers".
The site itself must feel like proof of concept: premium, minimal, editorial — inspired by modern Apple product storytelling.

Audience:
Non-technical project managers and decision makers.

Core message:
From intent to production — without friction.

Technical constraints:
- Next.js (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Optimized for Vercel deployment (static compatible)
- Semantic HTML
- Mobile responsive
- HTML5 video for demo clips (muted autoplay loop, lazy loaded)
- Subtle scroll animations (fade + slight translate, IntersectionObserver or Framer Motion)
- Custom guided pointer overlay on first load
- Clean file structure

Avoid:
- SaaS dashboard layouts
- dark mode
- neon colors
- gradients
- startup landing page clichés
- playful UI

Visual style: Apple editorial.

Design principles:
- Large bold headlines
- Very short sentences
- Wide margins and generous whitespace
- Mostly white background
- Subtle gray separators
- One accent color only
- Single column sections
- Strong vertical rhythm
- Editorial pacing:
  headline → one sentence → whitespace → visual → repeat
- Calm confident motion (slow fades, slight translate)
- Premium minimal feel

Navigation:
Sticky top navigation with:
Home
Problem
Demo
Process
Impact
Contact

Minimal links, subtle underline hover animation.

Hero section (full viewport):
Headline: "From Intent to Production."
Subline: "A new way to build IT outcomes."
Two CTA buttons:
- Watch Demo
- Explore Process

Include subtle background motion or abstract vector shapes.

Sections:

1. Problem
Title: "The old way."
Three concise blocks:
- Long concept phases
- Endless alignment loops
- Feedback arrives too late
Minimal icons.

2. Demo
Main showcase section.
Embed short screen videos (10–30s loops):
- Prompt in Cursor
- UI appearing
- Deployment result
Beside videos: short captions.
Show one highlighted prompt example in a code-style card.

3. Process
Visual flow diagram:
Intent → Prompt → Iterate → Ship
Use icons and gentle transitions.

4. Impact
Bullets:
- Faster MVP creation
- Decisions on real artifacts
- Less coordination overhead
- Outcomes over specifications

Optional conservative metrics:
- ~40% less upfront planning
- MVPs in days instead of weeks

5. Contact
Minimal footer:
Short closing sentence:
"Vibe Coding doesn't replace developers. It replaces waiting time."
Then contact / link placeholder.

UI Features:
- Scroll-triggered fade-ins for sections
- Micro-interactions on nav hover
- Custom animated pointer overlay:
  appears on first load,
  gently guides user downward,
  fades after first scroll interaction

Typography:
Use modern sans-serif (system font stack or Inter-like).
Headlines bold.
Body light.

Layout:
Single column.
Max-width container.
Large vertical spacing between sections.

Assets:
Include placeholder demo videos and abstract vector graphics.

Deliverables:
Generate full Next.js project with:
- /app structure
- Tailwind config
- Components for each section
- Pointer overlay component
- Responsive layout
- Ready for Vercel deployment

Focus on clarity, calmness, and editorial storytelling.
No overengineering.
No unnecessary abstractions.`;

const de = {
  common: {
    slideHint: "Weiter: Pfeil rechts oder wischen",
  },
  nav: {
    start: "Start",
    problem: "Problem",
    evolution: "Evolution",
    demo: "Demo",
    process: "Prozess",
    impact: "Wirkung",
    comparison: "Vergleich",
    contact: "Kontakt",
  },
  evolution: {
    title: "Evolution",
    card1Multiplier: "1x",
    card1Title: "Der Entwickler schreibt Code",
    card1Sub: "IDE",
    card1Detail: "Vollständig manuelle Entwicklung",
    card2Multiplier: "1.3x",
    card2Title: "Entwickler schreibt mit KI Code",
    card2Sub: "Tab completion",
    card2Detail: "KI unterstützt im Editor",
    card3Multiplier: "10x",
    card3Title: "KI schreibt Code mit dem Entwickler",
    card3Sub: "Coding-Agenten und SDD",
    card3Detail: "KI führt, der Entwickler steuert",
  },
  hero: {
    headline: "Alles anders mit AI Coding?!",
    subline: "IT-Projekte neu denken",
    ctaDemo: "Demo ansehen",
    ctaProcess: "Prozess erkunden",
  },
  problem: {
    title: "Problem",
    intro: "Time-to-Live von Projekten oft zu lang.",
    block1Title: "Lange Konzeptionsphasen",
    block1Text:
      "Wochen bis Monate Vorlauf, bevor etwas Greifbares entsteht.",
    block2Title: "Endlose Abstimmungsschleifen",
    block2Text:
      "Spezifikationen, Reviews, Änderungswünsche — der Kreislauf verzögert.",
    block3Title: "Feedback kommt zu spät",
    block3Text:
      "Erst wenn gebaut ist, sehen alle das Ergebnis. Dann wird neu verhandelt.",
  },
  demo: {
    title: "Demo",
    intro: "Von der Idee zum laufenden Ergebnis.",
    caption1: "Prompt in Cursor.",
    caption2: "Die Oberfläche entsteht.",
    caption3: "Deployment und Ergebnis.",
    promptLabel: "Prompt",
    initialPrompt: INITIAL_PROMPT,
    promptExample:
      "Erstelle eine minimalistische Landing-Page mit Hero, drei Feature-Karten und Footer. Tailwind, dunkler Hintergrund.",
    promptOutput: "Analyzing codebase...\nFound settings page at src/pages/Settings.tsx\n+ Added Button component import\n+ Created handleSave function\n+ Added Save button with onClick handler",
    promptResult: "Done! Die Seite wurde gebaut.",
  },
  magic: {
    title: "Magic in the making",
  },
  process: {
    title: "Prozess",
    intro: "Vier Schritte von der Absicht bis zum Ausliefern.",
    step1: "Intent",
    step2: "Prompt",
    step3: "Iterate",
    step4: "Ship",
  },
  impact: {
    title: "Wirkung",
    intro: "Was sich für Projektmanager und Stakeholder ändert.",
    bullet1: "Schnellere MVPs",
    bullet2: "Entscheidungen am echten Artefakt",
    bullet3: "Weniger Koordinationsaufwand",
    bullet4: "Outcomes statt Spezifikationen",
    metric1: "~40% weniger Vorplanung",
    metric2: "Spezifikation und Code bleiben synchron",
  },
  comparison: {
    title: "Vibe Coding vs. Spec-Driven Development",
    intro: "Wann welcher Ansatz?",
    vibe: {
      title: "Vibe Coding",
      sub: "Der kreative Schnellschuss",
      speed: "Geschwindigkeit & Kreativität",
      ki: "KI federführend (Prompt-basiert)",
      prototypes: "Ideal für Prototypen und Experimente",
      risk: "Höheres Sicherheits- und Qualitätsrisiko",
    },
    sdd: {
      title: "Spec-Driven Development",
      sub: "Die strukturierte KI-Synergie",
      structure: "Strukturierte Spezifikation",
      t2m: "35% schnellere Time-to-Market",
      cycle: "Intent → Anforderungen → Design → Tasks",
      cycleShort: "Gezielter Ablauf von Intent bis zu konkreten Tasks",
      cycleLabel: "4-Phasen-Zyklus",
      rework: "60% weniger Nacharbeit",
    },
    takeaway: "Für marktreife Produkte und Planbarkeit: SDD. Für schnelle Prototypen: Vibe Coding.",
  },
  contact: {
    closing:
      "AI Coding ersetzt keine Entwickler. Es zwingt uns, Projekte neu zu denken.",
    closingBefore: "AI Coding ersetzt keine Entwickler. Es zwingt uns, ",
    highlightWord: "Projekte neu zu denken",
    closingAfter: ".",
  },
  editorial: {
    altHero: "Redaktionelles Bild: Von der Idee zum Ergebnis — klare Linien, Fokus.",
    altProblem: "Redaktionelles Bild: Komplexität und Reibung im Planungsprozess.",
    altProblemLeft: "Redaktionelles Bild: Planung und Vorlauf — der Ausgangspunkt.",
    altProblemRight: "Redaktionelles Bild: Ergebnis und Klarheit — wohin es geht.",
    altProcess: "Redaktionelles Bild: Klarer Ablauf — von der Absicht zur Auslieferung.",
    altImpact: "Redaktionelles Bild: Ergebnis und Wirkung — Klarheit statt Wartezeit.",
    altContact: "Redaktionelles Bild: Ruhiger Abschluss — Fokus auf das Wesentliche.",
    altContactLeft: "Redaktionelles Bild: Kontext.",
    altContactRight: "Redaktionelles Bild: Fokus.",
  },
};

const hu = {
  common: {
    slideHint: "Következő: görgetés vagy nyíl",
  },
  nav: {
    start: "Start",
    problem: "Probléma",
    evolution: "Evolúció",
    demo: "Demo",
    process: "Folyamat",
    impact: "Hatás",
    comparison: "Összehasonlítás",
    contact: "Kapcsolat",
  },
  evolution: {
    title: "Evolúció",
    card1Multiplier: "1x",
    card1Title: "A fejlesztő kódot ír",
    card1Sub: "IDE",
    card1Detail: "Teljesen manuális fejlesztés",
    card2Multiplier: "1.3x",
    card2Title: "A fejlesztő AI-val ír kódot",
    card2Sub: "Tab completion",
    card2Detail: "Az AI az editorban segít",
    card3Multiplier: "10x",
    card3Title: "Az AI ír kódot a fejlesztővel",
    card3Sub: "Coding agents és SDD",
    card3Detail: "Az AI vezet, a fejlesztő kormányoz",
  },
  hero: {
    headline: "Minden más az AI Codinggal?!",
    subline: "IT-projektek újragondolása",
    ctaDemo: "Demó megtekintése",
    ctaProcess: "Folyamat felfedezése",
  },
  problem: {
    title: "Probléma",
    intro: "A projektek Time-to-Live értéke gyakran túl hosszú.",
    block1Title: "Hosszú koncepciós fázisok",
    block1Text:
      "Hetek vagy hónapok telnek el, mire valami megfogható készül.",
    block2Title: "Végtelen egyeztetési körök",
    block2Text:
      "Specifikációk, review-k, módosítási kérések — a körforgás késleltet.",
    block3Title: "A visszajelzés későn érkezik",
    block3Text:
      "Csak ha megépült, látja mindenki az eredményt. Aztán újratárgyalás.",
  },
  demo: {
    title: "Demo",
    intro: "Az ötlettől a futó eredményig.",
    caption1: "Prompt a Cursorban.",
    caption2: "Az felület megjelenik.",
    caption3: "Deploy és eredmény.",
    promptLabel: "Prompt",
    initialPrompt: INITIAL_PROMPT,
    promptExample:
      "Készíts egy minimalista landing page-et Hero blokkal, három feature kártyával és lábléccel. Tailwind, sötét háttér.",
    promptOutput: "Analyzing codebase...\nFound settings page at src/pages/Settings.tsx\n+ Added Button component import\n+ Created handleSave function\n+ Added Save button with onClick handler",
    promptResult: "Done! A Save gomb hozzáadva.",
  },
  magic: {
    title: "Magic in the making",
  },
  process: {
    title: "Folyamat",
    intro: "Négy lépés a szándéktól a kivitelezésig.",
    step1: "Szándék",
    step2: "Prompt",
    step3: "Iteráció",
    step4: "Kivitelezés",
  },
  impact: {
    title: "Hatás",
    intro: "Mi változik a projektmenedzserek és a stakeholderek számára.",
    bullet1: "Gyorsabb MVP-k",
    bullet2: "Döntések a valódi artefaktum alapján",
    bullet3: "Kevesebb koordinációs terhet",
    bullet4: "Eredmények specifikációk helyett",
    metric1: "~40%-kal kevesebb előzetes tervezés",
    metric2: "A specifikáció és a kód szinkronban marad",
  },
  comparison: {
    title: "Vibe Coding vs. Spec-Driven Development",
    intro: "Mikor melyik megközelítés?",
    vibe: {
      title: "Vibe Coding",
      sub: "A kreatív gyorslövés",
      speed: "Sebesség és kreativitás",
      ki: "Az AI vezet (prompt-alapú)",
      prototypes: "Ideális prototípusokhoz és kísérletekhez",
      risk: "Magasabb biztonsági és minőségi kockázat",
    },
    sdd: {
      title: "Spec-Driven Development",
      sub: "A strukturált AI-szinergia",
      structure: "Strukturált specifikáció",
      t2m: "35%-kal gyorsabb time-to-market",
      cycle: "Szándék → Követelmények → Design → Feladatok",
      cycleShort: "Célzott folyamat a szándéktól a konkrét feladatokig",
      cycleLabel: "4 fázisú ciklus",
      rework: "60%-kal kevesebb utómunkálat",
    },
    takeaway: "Piacérett termékekhez és tervezhetőséghez: SDD. Gyors prototípusokhoz: Vibe Coding.",
  },
  contact: {
    closing:
      "Az AI Coding nem helyettesíti a fejlesztőket. Arra kényszerít, hogy a projekteket újragondoljuk.",
    closingBefore: "Az AI Coding nem helyettesíti a fejlesztőket. Arra kényszerít, hogy ",
    highlightWord: "a projekteket újragondoljuk",
    closingAfter: ".",
  },
  editorial: {
    altHero: "Szerkesztőségi kép: Az ötlettől az eredményig — tiszta vonalak, fókusz.",
    altProblem: "Szerkesztőségi kép: A tervezési folyamat bonyolultsága és súrlódása.",
    altProblemLeft: "Szerkesztőségi kép: Tervezés és előkészület — a kiindulópont.",
    altProblemRight: "Szerkesztőségi kép: Eredmény és tisztaság — a cél.",
    altProcess: "Szerkesztőségi kép: Egyértelmű folyamat — a szándéktól a kivitelezésig.",
    altImpact: "Szerkesztőségi kép: Eredmény és hatás — tisztaság a várakozás helyett.",
    altContact: "Szerkesztőségi kép: Nyugodt lezárás — a lényegre fókuszálva.",
    altContactLeft: "Szerkesztőségi kép: Kontextus.",
    altContactRight: "Szerkesztőségi kép: Fókusz.",
  },
};

export const translations: Record<Locale, typeof de> = { de, hu };

export const LOCALE_STORAGE_KEY = "vibe-coding-locale";

export function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "de";
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
  if (stored === "de" || stored === "hu") return stored;
  const lang = navigator.language?.toLowerCase();
  if (lang?.startsWith("hu")) return "hu";
  return "de";
}
