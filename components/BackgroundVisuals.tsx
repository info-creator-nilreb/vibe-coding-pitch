"use client";

/**
 * Dezente animierte Magenta-Visualisierungen im Hintergrund (Art-Comic-Stil, variierte Motive, mehr Bewegung).
 */
export default function BackgroundVisuals() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-[1]"
      aria-hidden
    >
      {/* Schmetterling – stärker sichtbar, mehr Bewegung */}
      <svg
        className="absolute w-28 h-28 text-magenta opacity-[0.14] animate-float"
        style={{ top: "16%", right: "10%" }}
        viewBox="0 0 64 64"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1.8">
          <path d="M32 20c-6 0-12 4-14 10-2 6 0 12 6 16 4 2 10 4 14 2 4-2 6-8 4-14-2-6-8-10-14-10z" />
          <path d="M32 20c6 0 12 4 14 10 2 6 0 12-6 16-4 2-10 4-14-2-4 2-6 8-4 14 2 6 8 10 14 10z" fill="currentColor" fillOpacity="0.5" />
        </g>
      </svg>
      {/* Zweiter Schmetterling – float-slow, andere Position */}
      <svg
        className="absolute w-20 h-20 text-magenta opacity-[0.12] animate-float-slow"
        style={{ bottom: "22%", left: "6%" }}
        viewBox="0 0 64 64"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1.4">
          <path d="M32 24c-5 0-10 3-12 8s0 10 5 13 9 3 11-1 1-8-4-11-6-9-11-9z" />
          <path d="M32 24c5 0 10 3 12 8s0 10-5 13-9 3-11-1-1-8 4-11 6-9 11-9z" fill="currentColor" fillOpacity="0.45" />
        </g>
      </svg>
      {/* Geschwungener Strich – sichtbarer, animiert */}
      <svg
        className="absolute w-44 h-28 text-magenta opacity-[0.13] animate-float"
        style={{ top: "52%", left: "12%" }}
        viewBox="0 0 160 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        <path d="M0 48 Q40 8 80 48 T160 48" className="animate-curve-line" />
      </svg>
      {/* Zweiter Bogen – von unten */}
      <svg
        className="absolute w-36 h-22 text-magenta opacity-[0.11] animate-float-delayed"
        style={{ top: "68%", right: "18%" }}
        viewBox="0 0 128 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M0 40 C32 0 96 80 128 40" />
      </svg>
      {/* Kleiner Stern / Sparkle – pulsierend */}
      <svg
        className="absolute w-12 h-12 text-magenta opacity-[0.15] animate-bg-pulse"
        style={{ top: "28%", left: "18%" }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" />
      </svg>
      {/* Kleines Herz-Facetten-Motiv (dezent) */}
      <svg
        className="absolute w-16 h-16 text-magenta opacity-[0.1] animate-float-delayed"
        style={{ bottom: "35%", right: "8%" }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" fillOpacity="0.25" />
      </svg>
      {/* Punkt / Kreis – leichte Bewegung */}
      <svg
        className="absolute w-8 h-8 text-magenta opacity-[0.12] animate-float"
        style={{ top: "75%", left: "22%" }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="6" />
      </svg>
      {/* Dritter Bogen – Mitte oben */}
      <svg
        className="absolute w-24 h-16 text-magenta opacity-[0.09] animate-float-slow"
        style={{ top: "8%", left: "50%", transform: "translateX(-50%)" }}
        viewBox="0 0 96 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M0 32 Q24 8 48 32 T96 32" />
      </svg>
    </div>
  );
}
