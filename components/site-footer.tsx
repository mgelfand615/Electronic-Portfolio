import Link from "next/link";
import { nav, person, socials } from "@/content/site";
import { clean } from "@/lib/format";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const cleanName = clean(person.name);
  const email = socials.find((s) => s.icon === "email");

  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        {/* Wordmark + quick links */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-ink transition-colors hover:text-accent"
          >
            {cleanName}
            <span className="text-muted"> · ePortfolio</span>
          </Link>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Baseline: copyright + contact */}
        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {cleanName} · Aligned to the ISTE Standards for Educators
          </p>
          {email && (
            <a
              href={email.href}
              className="transition-colors hover:text-accent"
            >
              {email.href.replace("mailto:", "")}
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
