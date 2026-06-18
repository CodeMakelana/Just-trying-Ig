import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-medium text-foreground">
              {site.fullName}
            </p>
            <p className="mt-2 text-sm text-muted">{site.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`mailto:${site.email}`}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                Email
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </span>
          <span className="font-mono">Built with Next.js &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
