"use client";

import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const COUNTDOWN_START_MINUTES = 45;
const COUNTDOWN_START_MS = COUNTDOWN_START_MINUTES * 60 * 1000;
const PLAYBACK_RATE = 5;

function formatTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function MagicSlide() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [remainingMs, setRemainingMs] = useState(COUNTDOWN_START_MS);
  const [isRunning, setIsRunning] = useState(false);
  const [realDurationSec, setRealDurationSec] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      setRealDurationSec(video.duration);
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    if (video.duration && !Number.isNaN(video.duration)) {
      setRealDurationSec(video.duration);
    }
    return () => video.removeEventListener("loadedmetadata", onLoadedMetadata);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => {
      startTimeRef.current = Date.now();
      setIsRunning(true);
    };

    const onPause = () => setIsRunning(false);

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const tryPlay = () => {
      videoRef.current?.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        tryPlay();
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    video.addEventListener("canplay", tryPlay);
    tryPlay();
    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  useEffect(() => {
    if (!isRunning || realDurationSec === null || realDurationSec <= 0) return;

    const realTimeToCountdownMs = (realDurationSec / PLAYBACK_RATE) * 1000;

    intervalRef.current = setInterval(() => {
      const elapsedReal = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsedReal / realTimeToCountdownMs, 1);
      const remaining = Math.max(0, COUNTDOWN_START_MS * (1 - progress));
      setRemainingMs(remaining);

      if (remaining <= 0) {
        setIsRunning(false);
        videoRef.current?.pause();
      }
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, realDurationSec]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = PLAYBACK_RATE;
    video.loop = false;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="magic"
      className="presentation-slide flex flex-col justify-center items-center py-10 px-6 border-t border-border overflow-hidden"
      aria-labelledby="magic-heading"
    >
      <h2 id="magic-heading" className="text-2xl sm:text-3xl font-bold text-accent text-center shrink-0" style={{ marginBottom: "20px" }}>
        {t.magic.title}
      </h2>
      <div className="flex flex-col items-center gap-4 w-full max-w-4xl mx-auto flex-1 min-h-0 justify-center">
        <div className="w-full flex-1 min-h-0 overflow-hidden flex items-center justify-center" style={{ marginTop: 0 }}>
          <video
            ref={videoRef}
            src="/vibde_cursor.mp4"
            className="max-w-full max-h-full w-full h-full object-contain"
            muted
            playsInline
            autoPlay
            aria-label="Cursor Screen-Recording"
          />
        </div>
        <div className="flex items-center gap-3 text-accent shrink-0">
          <span className="text-sm text-mute">Timer</span>
          <span className="font-mono text-xl sm:text-2xl font-medium tabular-nums">
            {formatTime(remainingMs)}
          </span>
        </div>
      </div>
    </section>
  );
}
