"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const className = props.className ?? "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = {
    transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {props.children}
    </div>
  );
}
