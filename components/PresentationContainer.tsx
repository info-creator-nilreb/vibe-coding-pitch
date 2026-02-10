"use client";

import { usePresentationNav } from "@/lib/usePresentationNav";
import SlideCounter from "./SlideCounter";

export default function PresentationContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  usePresentationNav();

  return (
    <>
      <div className="presentation-container">{children}</div>
      <SlideCounter />
    </>
  );
}
