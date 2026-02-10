"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { usePresentationProgress } from "@/lib/PresentationProgressContext";

type Point = { x: number; y: number };

const MIN_DRAG_PX = 8;
const LASER_COLOR = "#E20074";
/** Mobil: überwiegend horizontal (|dx| > ratio * |dy|) = Wischen/Seitenwechsel, sonst = Zeichnen */
const SWIPE_HORIZONTAL_RATIO = 2;

function distance(a: Point, b: Point): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

export default function LaserPointerOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Point[][]>([]);
  const [currentLine, setCurrentLine] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const { currentIndex } = usePresentationProgress();
  const currentLineRef = useRef<Point[]>(currentLine);
  currentLineRef.current = currentLine;

  // Mauszeiger ausblenden (Overlay ist pointer-events-none, daher über body)
  useEffect(() => {
    document.body.classList.add("cursor-none");
    return () => document.body.classList.remove("cursor-none");
  }, []);

  const updatePointer = useCallback((x: number, y: number, visible: boolean) => {
    const dot = dotRef.current;
    if (!dot) return;
    dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    dot.style.visibility = visible ? "visible" : "hidden";
  }, []);

  const clearStrokes = useCallback(() => {
    setLines([]);
    setCurrentLine([]);
    setIsDrawing(false);
    document.body.style.userSelect = "";
    updatePointer(0, 0, false);
  }, [updatePointer]);

  // Beim Wechsel der Seite: alle Striche und Zeichenzustand zurücksetzen
  const prevIndexRef = useRef(currentIndex);
  useEffect(() => {
    if (prevIndexRef.current !== currentIndex) {
      prevIndexRef.current = currentIndex;
      clearStrokes();
    }
  }, [currentIndex, clearStrokes]);

  // ESC: Striche auf der aktuellen Seite löschen
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearStrokes();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [clearStrokes]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY, true);
      if (isDrawing) {
        setCurrentLine((prev) => [...prev, { x: e.clientX, y: e.clientY }]);
      }
    },
    [isDrawing, updatePointer]
  );

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (e.button !== 0) return;
    setCurrentLine([{ x: e.clientX, y: e.clientY }]);
    setIsDrawing(true);
    document.body.style.userSelect = "none";
  }, []);

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      if (e.button !== 0) return;
      const pts = [...currentLineRef.current, { x: e.clientX, y: e.clientY }];
      const totalLen =
        pts.length < 2 ? 0 : pts.slice(1).reduce((acc, p, i) => acc + distance(pts[i], p), 0);

      if (totalLen >= MIN_DRAG_PX && pts.length >= 2) {
        setLines((prev) => [...prev, pts]);
      } else if (overlayRef.current && pts.length <= 2) {
        const el = overlayRef.current;
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (target && target !== el) {
          (target as HTMLElement).click();
        }
      }

      setCurrentLine([]);
      setIsDrawing(false);
      document.body.style.userSelect = "";
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    document.body.style.userSelect = "";
    updatePointer(0, 0, false);
    if (isDrawing) {
      const cl = currentLineRef.current;
      if (cl.length >= 2) setLines((prev) => [...prev, cl]);
      setCurrentLine([]);
      setIsDrawing(false);
    }
  }, [isDrawing, updatePointer]);

  const touchStartRef = useRef<Point | null>(null);
  const lastTouchRef = useRef<Point>({ x: 0, y: 0 });
  type TouchGesture = "none" | "swipe" | "draw";
  const touchGestureRef = useRef<TouchGesture>("none");

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      const x = t.clientX;
      const y = t.clientY;
      touchStartRef.current = { x, y };
      lastTouchRef.current = { x, y };
      touchGestureRef.current = "none";
      updatePointer(x, y, true);
      setCurrentLine([{ x, y }]);
      setIsDrawing(false);
    },
    [updatePointer]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const t = e.touches[0];
      const x = t.clientX;
      const y = t.clientY;
      lastTouchRef.current = { x, y };
      updatePointer(x, y, true);
      const start = touchStartRef.current;
      const gesture = touchGestureRef.current;
      if (start && gesture === "none") {
        const dx = x - start.x;
        const dy = y - start.y;
        const dist = distance(start, { x, y });
        if (dist >= MIN_DRAG_PX) {
          const absDx = Math.abs(dx);
          const absDy = Math.abs(dy);
          if (absDx > SWIPE_HORIZONTAL_RATIO * absDy) {
            touchGestureRef.current = "swipe";
            /* Wischen: kein preventDefault → Container scrollt, Seitenwechsel */
          } else {
            touchGestureRef.current = "draw";
            setIsDrawing(true);
            setCurrentLine((prev) => [...prev, { x, y }]);
            e.preventDefault();
          }
        }
      } else if (gesture === "draw") {
        e.preventDefault();
        setCurrentLine((prev) => [...prev, { x, y }]);
      }
      /* gesture === "swipe": nichts tun, Scroll läuft durch */
    },
    [updatePointer]
  );

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (e.changedTouches.length !== 1) return;
      const t = e.changedTouches[0];
      const x = t.clientX;
      const y = t.clientY;
      const gesture = touchGestureRef.current;
      touchGestureRef.current = "none";
      touchStartRef.current = null;

      if (gesture === "draw") {
        const pts = [...currentLineRef.current, { x, y }];
        const totalLen =
          pts.length < 2 ? 0 : pts.slice(1).reduce((acc, p, i) => acc + distance(pts[i], p), 0);
        if (totalLen >= MIN_DRAG_PX && pts.length >= 2) {
          setLines((prev) => [...prev, pts]);
        }
      } else if (gesture === "none") {
        const pts = [...currentLineRef.current, { x, y }];
        if (pts.length <= 2 && overlayRef.current) {
          const target = document.elementFromPoint(x, y);
          if (target && target !== overlayRef.current) {
            (target as HTMLElement).click();
          }
        }
      }
      /* gesture === "swipe": nur Pointer ausblenden, kein Klick */

      setCurrentLine([]);
      setIsDrawing(false);
      document.body.style.userSelect = "";
      updatePointer(0, 0, false);
    },
    [updatePointer]
  );

  // Events auf document, damit Hover/Klicks auf darunterliegende Elemente weiter funktionieren
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave]);

  // Touch: Pointer-Punkt + Zeichnen mobil (Scroll erst ab MIN_DRAG_PX als Zeichnen gewertet)
  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[45] cursor-none pointer-events-none top-14 sm:top-16"
      aria-hidden
    >
      {/* Gezogene Linien */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <filter id="laser-glow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {lines.map((pts, i) =>
          pts.length >= 2 ? (
            <polyline
              key={i}
              points={pts.map((p) => `${p.x},${p.y}`).join(" ")}
              fill="none"
              stroke={LASER_COLOR}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#laser-glow)"
            />
          ) : null
        )}
        {currentLine.length >= 2 && (
          <polyline
            points={currentLine.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke={LASER_COLOR}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#laser-glow)"
          />
        )}
      </svg>

      {/* Laser-Punkt: Position per Ref, kein State → flüssige Bewegung */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 w-4 h-4 pointer-events-none rounded-full will-change-transform"
        style={{
          background: LASER_COLOR,
          boxShadow: `0 0 12px ${LASER_COLOR}, 0 0 24px ${LASER_COLOR}40`,
          visibility: "hidden",
        }}
      />
    </div>
  );
}
