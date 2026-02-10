"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useParallax } from "@/lib/useParallax";

/**
 * Zwei Bilder nebeneinander, gegenläufiger Parallax:
 * Links: Bewegung von oben (lagert beim Scrollen nach)
 * Rechts: Bewegung von unten (führt beim Scrollen)
 * Entspricht Apple-Editorial: ruhige, konfidente Bewegung (calm confident motion).
 */
type Props = {
  srcLeft: string;
  srcRight: string;
  altLeft: string;
  altRight: string;
  aspectRatio?: "tall" | "square" | "wide";
  parallaxStrength?: number;
};

const aspectClasses = {
  tall: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-video",
};

export default function EditorialImageSplit({
  srcLeft,
  srcRight,
  altLeft,
  altRight,
  aspectRatio = "tall",
  parallaxStrength = 0.12,
}: Props) {
  const refLeft = useParallax(-parallaxStrength);
  const refRight = useParallax(parallaxStrength);

  return (
    <ScrollReveal className="w-full">
      <figure className="w-full overflow-hidden" role="group" aria-label={`${altLeft}, ${altRight}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border min-h-[240px] sm:min-h-[360px]">
          <div className="relative overflow-hidden bg-neutral-100">
            <div
              ref={refLeft}
              className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden`}
            >
              <Image
                src={srcLeft}
                alt={altLeft}
                fill
                className="object-cover scale-110"
                sizes="50vw"
              />
            </div>
          </div>
          <div className="relative overflow-hidden bg-neutral-100">
            <div
              ref={refRight}
              className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden`}
            >
              <Image
                src={srcRight}
                alt={altRight}
                fill
                className="object-cover scale-110"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </figure>
    </ScrollReveal>
  );
}
