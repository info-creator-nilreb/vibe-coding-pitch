# Vibe Coding — Präsentations-Website

Single-Page-Website für **Vibe Coding für IT-Projektmanager**. Redaktioneller, minimaler Stil (Apple-inspiriert), zweisprachig (DE / HU).

## Tech-Stack

- Next.js 14 (App Router)
- React 18, TypeScript
- Tailwind CSS
- Statischer Export (Vercel-kompatibel)

## Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Build & Deployment

```bash
npm run build
```

Der Export liegt in `out/`. Bei Vercel: Projekt verbinden und deployen (Static Export wird erkannt).

## Demo-Videos

Die Demo-Sektion erwartet optional folgende Dateien in `public/`:

- `demo-prompt.mp4` (und optional `demo-prompt-poster.jpg`)
- `demo-ui.mp4` (und optional `demo-ui-poster.jpg`)
- `demo-deploy.mp4` (und optional `demo-deploy-poster.jpg`)

Ohne diese Dateien werden die Video-Bereiche leer angezeigt; die Seite funktioniert ansonsten unverändert.

## Sprachumschalter

- DE | HU in der Navigation
- Standard: Deutsch
- Erster Besuch: Browser-Sprache wird erkannt (z. B. HU → Ungarisch voreingestellt)
- Wahl wird in `localStorage` gespeichert

## Struktur

- `app/` — Layout, globale Styles, Hauptseite
- `components/` — Nav, Hero, Problem, Demo, Prozess, Wirkung, Kontakt, PointerOverlay, ScrollReveal
- `lib/i18n/` — Übersetzungen (DE/HU) und LanguageContext
