"use client";

import { useRef, useState, useCallback } from "react";

type Point = { x: number; y: number };

const MIN_DRAG_PX = 8;
const LASER_COLOR = "#E20074";

function distance(a: Point, b: Point): number {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

export default function LaserPointerOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Point[][]>([]);
  const [currentLine, setCurrentLine] = useState<Point[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const updatePointer = useCallback((x: number, y: number, visible: boolean) => {
    const dot = dotRef.current;
    if (!dot) return;
    dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
    dot.style.visibility = visible ? "visible" : "hidden";
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      updatePointer(e.clientX, e.clientY, true);
      if (isDrawing) {
        setCurrentLine((prev) => [...prev, { x: e.clientX, y: e.clientY }]);
      }
    },
    [isDrawing, updatePointer]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setCurrentLine([{ x: e.clientX, y: e.clientY }]);
    setIsDrawing(true);
  }, []);

  const handleMouseUp = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      const pts = [...currentLine, { x: e.clientX, y: e.clientY }];
      const totalLen =
        pts.length < 2 ? 0 : pts.slice(1).reduce((acc, p, i) => acc + distance(pts[i], p), 0);

      if (totalLen >= MIN_DRAG_PX && pts.length >= 2) {
        setLines((prev) => [...prev, pts]);
      } else if (overlayRef.current && pts.length <= 2) {
        const el = overlayRef.current;
        el.style.pointerEvents = "none";
        const target = document.elementFromPoint(e.clientX, e.clientY);
        el.style.pointerEvents = "auto";
        if (target && target !== el) {
          (target as HTMLElement).click();
        }
      }

      setCurrentLine([]);
      setIsDrawing(false);
    },
    [currentLine]
  );

  const handleMouseLeave = useCallback(() => {
    updatePointer(0, 0, false);
    if (isDrawing) {
      if (currentLine.length >= 2) setLines((prev) => [...prev, currentLine]);
      setCurrentLine([]);
      setIsDrawing(false);
    }
  }, [isDrawing, currentLine, updatePointer]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[45] cursor-none pointer-events-auto"
      style={{ top: "4rem" }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
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
