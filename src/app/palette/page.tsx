import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Choose an accent",
};

type Accent = {
  id: string;
  name: string;
  note: string;
  accent: string;
  strong: string;
  contrast: string;
  recommended?: boolean;
};

const accents: Accent[] = [
  {
    id: "teal",
    name: "Aurora Teal",
    note: "Modern, technical, calm. Reads as “developer” without trying.",
    accent: "#2dd4bf",
    strong: "#14b8a6",
    contrast: "#04130f",
    recommended: true,
  },
  {
    id: "violet",
    name: "Ultraviolet",
    note: "Creative and immersive. Glows beautifully on near-black.",
    accent: "#a78bfa",
    strong: "#8b5cf6",
    contrast: "#120a26",
  },
  {
    id: "ember",
    name: "Ember",
    note: "Warm and inviting. Friendly energy, still grown-up.",
    accent: "#fb9a3f",
    strong: "#f97316",
    contrast: "#1a0d02",
  },
  {
    id: "signal",
    name: "Signal Blue",
    note: "Clean and confident. A safe, classic, trustworthy choice.",
    accent: "#5aa2ff",
    strong: "#3b82f6",
    contrast: "#06112b",
  },
];

function AccentPreview({ a }: { a: Accent }) {
  const style = {
    "--accent": a.accent,
    "--accent-strong": a.strong,
    "--accent-contrast": a.contrast,
  } as CSSProperties;

  return (
    <div
      style={style}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7"
    >
      {/* Local glow so each card feels like the real site. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-48 w-72 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 45%, transparent), transparent)",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">Preview</p>
          {a.recommended && (
            <span className="rounded-full border border-accent/40 px-2.5 py-1 text-[0.7rem] font-medium text-accent">
              Recommended
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
          Building things,{" "}
          <span className="text-accent">one commit</span> at a time.
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">{a.note}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast">
            View work
          </span>
          <span className="rounded-full border border-line px-4 py-2 text-sm font-medium text-accent">
            Read more
          </span>
          <span className="rounded-md bg-elevated px-2.5 py-1 font-mono text-xs text-accent ring-1 ring-line">
            TypeScript
          </span>
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          <span className="font-mono text-xs text-faint">{a.name}</span>
          <span className="ml-auto flex items-center gap-1.5">
            <span
              className="size-5 rounded-full ring-1 ring-line"
              style={{ background: a.accent }}
            />
            <span
              className="size-5 rounded-full ring-1 ring-line"
              style={{ background: a.strong }}
            />
            <code className="ml-1 font-mono text-xs text-muted">{a.accent}</code>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PalettePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">Phase 0 · Your call</p>
      <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Pick the accent that feels like you
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted">
        Same dark, eye-comforting base — one luminous accent. Each card shows
        the color in real UI: heading highlight, buttons, links, tags, and glow.
        Tell me the name of the one you like and I&apos;ll lock it in across the
        whole site.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {accents.map((a) => (
          <AccentPreview key={a.id} a={a} />
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
