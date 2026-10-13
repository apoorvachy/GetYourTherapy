"use client";

import { useEffect, useState } from "react";
import { Waveform } from "./Decor";

const PHASES = ["Breathe in", "Hold", "Breathe out", "Rest"];

// Play button that runs a tiny guided 4-4-4-4 breath.
export default function BreathingPlayer() {
  const [playing, setPlaying] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setPhase((p) => (p + 1) % PHASES.length), 4000);
    return () => clearInterval(t);
  }, [playing]);

  return (
    <div className={`breath ${playing ? "is-playing" : ""}`}>
      <button
        className="breath__btn"
        onClick={() => {
          setPhase(0);
          setPlaying((p) => !p);
        }}
        aria-pressed={playing}
        aria-label={playing ? "Stop breathing exercise" : "Start a guided breathing exercise"}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <rect x="3" y="2" width="4" height="14" rx="1.5" fill="currentColor" />
            <rect x="11" y="2" width="4" height="14" rx="1.5" fill="currentColor" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M5 2.5v13l11-6.5Z" fill="currentColor" />
          </svg>
        )}
      </button>
      {playing ? (
        <p className="breath__label" aria-live="polite">
          {PHASES[phase]}…
        </p>
      ) : (
        <>
          <span className="breath__hint">Breathe with me</span>
          <Waveform />
        </>
      )}
    </div>
  );
}
