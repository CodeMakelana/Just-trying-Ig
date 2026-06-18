"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient hero backdrop:
 *  • a single accent "aurora" glow that eases toward the cursor
 *  • two soft static depth glows
 *  • a faint grid, masked to fade at the edges
 *
 * Motion is opt-out: with prefers-reduced-motion the glow is parked
 * center and no listeners run.
 */
export function HeroBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce) {
      el.style.setProperty("--x", "50%");
      el.style.setProperty("--y", "38%");
      return;
    }

    // eased follow: target (t) chases pointer, current (c) lerps toward it
    let tx = 0.5;
    let ty = 0.38;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      tx = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      ty = Math.min(Math.max((e.clientY - rect.top) / rect.height, 0), 1);
    };

    const tick = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      el.style.setProperty("--x", `${(cx * 100).toFixed(2)}%`);
      el.style.setProperty("--y", `${(cy * 100).toFixed(2)}%`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Cursor-aware aurora */}
      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(34rem 26rem at var(--x, 50%) var(--y, 38%), color-mix(in oklab, var(--accent) 20%, transparent), transparent 70%)",
        }}
      />

      {/* Static depth glows */}
      <div
        className="absolute -left-24 top-1/4 h-80 w-80 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 12%, transparent), transparent)",
        }}
      />
      <div
        className="absolute -right-16 bottom-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 9%, transparent), transparent)",
        }}
      />

      {/* Faint grid, faded toward the edges */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(70% 60% at 50% 40%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 40%, black, transparent 80%)",
        }}
      />
    </div>
  );
}
