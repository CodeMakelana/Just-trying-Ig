import Link from "next/link";
import { HeroBackground } from "@/components/hero-background";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackground />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex min-h-[88vh] flex-col justify-center py-24">
          <p className="eyebrow animate-rise" style={{ animationDelay: "0ms" }}>
            Final-year CS · {site.university}
          </p>

          <h1
            className="animate-rise mt-6 font-display text-6xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.fullName}
          </h1>

          <p
            className="animate-rise mt-7 max-w-2xl text-2xl leading-snug text-muted sm:text-3xl"
            style={{ animationDelay: "160ms" }}
          >
            I turn classroom theory into systems that actually run — working
            where <span className="text-foreground">cybersecurity</span> meets{" "}
            <span className="text-foreground">AI</span>.
          </p>

          {/* Calls to action */}
          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
            >
              View my work
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </div>

          {/* Currently-working status */}
          <div
            className="animate-rise mt-12 max-w-2xl rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur-sm"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-2.5">
                <span className="animate-pulse-soft absolute inline-flex size-full rounded-full bg-accent" />
                <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-faint">
                Currently · {site.currently.label}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              <span className="text-foreground">
                {site.currently.role}
              </span>{" "}
              on {site.currently.team}, {site.currently.summary} In partnership
              with <span className="text-foreground">{site.currently.client}</span>.
            </p>
          </div>

          {/* Focus tags */}
          <ul
            className="animate-rise mt-8 flex flex-wrap gap-2.5"
            style={{ animationDelay: "400ms" }}
          >
            {site.focus.map((f) => (
              <li
                key={f}
                className="rounded-full border border-line bg-elevated px-3.5 py-1.5 font-mono text-xs text-muted"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
