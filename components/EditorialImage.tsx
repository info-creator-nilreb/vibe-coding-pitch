"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { useParallax } from "@/lib/useParallax";

type Props = {
  src: string;
  alt: string;
  aspectRatio?: "wide" | "cinema" | "default" | "tall";
  priority?: boolean;
  fullBleed?: boolean;
  parallax?: number;
};

const aspectClasses = {
  wide: "aspect-[21/9]",
  cinema: "aspect-[3/1]",
  default: "aspect-[16/9]",
  tall: "aspect-[4/5]",
};

export default function EditorialImage({
  src,
  alt,
  aspectRatio = "cinema",
  priority = false,
  fullBleed = true,
  parallax = 0.18,
}: Props) {
  const parallaxRef = useParallax(parallax);

  const content = (
    <figure
      className={
        fullBleed
          ? "w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 overflow-hidden bg-neutral-100"
          : "w-full overflow-hidden bg-neutral-100"
      }
    >
      <div
        ref={parallaxRef}
        className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover scale-105"
          sizes="100vw"
          priority={priority}
        />
      </div>
    </figure>
  );

  return (
    <ScrollReveal className="w-full">
      <div className={fullBleed ? "overflow-hidden" : ""}>{content}</div>
    </ScrollReveal>
  );
}
