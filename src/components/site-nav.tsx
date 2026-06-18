"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.fullName} — home`}
        >
          <span className="grid size-9 place-items-center rounded-lg border border-line bg-elevated font-display text-sm font-semibold text-foreground transition-colors group-hover:border-accent">
            {site.name.slice(0, 1)}
          </span>
          <span className="font-display text-sm font-medium tracking-tight text-foreground">
            {site.name}
          </span>
        </Link>

        {/* Section links */}
        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={`mailto:${site.email}`}
          className="rounded-full border border-line bg-elevated px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
