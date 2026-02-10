# Statische Medien (Bilder & Videos)

Alles, was du hier ablegst, wird unter der Root-URL bereitgestellt.

## Eigene Editorial-Bilder (Hero, Problem, Prozess, Wirkung, Kontakt)

1. Lege deine Bilder in **`public/images/`** ab.
2. Erwartete Dateinamen: **hero.jpg**, **problem.jpg**, **process.jpg**, **impact.jpg**, **contact.jpg** (JPG oder PNG).
3. In **`lib/editorialImages.ts`** setze **`USE_LOCAL_IMAGES = true`**.

Dann werden deine Bilder statt der Unsplash-Platzhalter angezeigt.

## Demo-Sektion (Videos)

Die Demo-Sektion erwartet folgende Dateien in diesem Ordner:

| Datei | Verwendung |
|-------|------------|
| `demo-prompt.mp4` | Video: Prompt in Cursor |
| `demo-prompt-poster.jpg` | optional: Vorschaubild für das erste Video |
| `demo-ui.mp4` | Video: UI entsteht |
| `demo-ui-poster.jpg` | optional: Vorschaubild |
| `demo-deploy.mp4` | Video: Deployment / Ergebnis |
| `demo-deploy-poster.jpg` | optional: Vorschaubild |

**Hinweis:** Ohne diese Dateien bleiben die Video-Bereiche leer; die Seite funktioniert ansonsten normal.

## Eigene Bilder

Weitere Bilder (z. B. für Editorial-Bereiche) kannst du hier ablegen und im Code per Pfad `/dein-bild.jpg` einbinden.

Die redaktionellen Bilder in Hero, Problem, Prozess, Wirkung und Kontakt kommen derzeit von Unsplash (URLs in `lib/editorialImages.ts`). Du kannst sie durch lokale Dateien ersetzen, indem du die URLs in dieser Datei anpasst und die Dateien hier in `public/` legst.
