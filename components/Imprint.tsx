"use client";

export default function Imprint() {
  return (
    <div
      className="fixed bottom-4 left-4 z-40 text-xs text-mute flex flex-col gap-0.5"
      aria-label="Impressum"
    >
      <span className="font-medium">Alexander Berlin</span>
      <span>Stargarder Str. 16, 10437 Berlin</span>
      <a
        href="mailto:berlin.alexander@icloud.com"
        className="hover:text-accent underline underline-offset-2 transition-colors w-fit"
      >
        berlin.alexander@icloud.com
      </a>
    </div>
  );
}
