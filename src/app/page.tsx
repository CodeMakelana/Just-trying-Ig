import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Placeholder hero — the real, animated hero lands in Phase 1. */}
      <section className="flex min-h-[72vh] flex-col justify-center py-20">
        <p className="eyebrow">Phase 0 · Foundation</p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          Hi, I&apos;m {site.name}.
          <br />
          <span className="text-muted">{site.tagline}</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          This is the design foundation — the palette, type, and layout shell
          your portfolio is built on. The hero, projects, experience, and
          writing sections come next.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/palette"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
          >
            Choose the accent color →
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Foundation preview: surfaces + type, so the system is visible. */}
      <section className="grid gap-6 pb-8 md:grid-cols-2">
        <div className="rounded-xl border border-line bg-surface p-7">
          <p className="eyebrow">Surfaces</p>
          <div className="mt-5 space-y-3">
            <div className="rounded-lg bg-background p-4 text-sm text-muted ring-1 ring-line">
              background
            </div>
            <div className="rounded-lg bg-surface p-4 text-sm text-muted ring-1 ring-line">
              surface
            </div>
            <div className="rounded-lg bg-elevated p-4 text-sm text-muted ring-1 ring-line">
              elevated
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-7">
          <p className="eyebrow">Type scale</p>
          <div className="mt-5 space-y-3">
            <p className="font-display text-3xl font-semibold tracking-tight text-foreground">
              Display heading
            </p>
            <p className="text-base text-foreground">
              Body copy in soft off-white for comfortable reading on dark.
            </p>
            <p className="text-sm text-muted">Muted supporting text.</p>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Mono accent label
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
