import Link from "next/link";
import { nav, person, socials } from "@/content/site";
import { socialIcons } from "@/components/icons";
import { clean } from "@/lib/format";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const cleanName = clean(person.name);

  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-medium tracking-tight text-ink">
              Let&apos;s connect.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Thanks for exploring my ePortfolio. I welcome conversation about
              teaching, learning, and technology integration.
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.href}
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon className="text-base" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-1">
            <p className="col-span-full mb-1 text-xs font-semibold uppercase tracking-widest text-muted">
              Explore
            </p>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {cleanName}. Built as a professional ePortfolio.
          </p>
          <p>Aligned to the ISTE Standards for Educators.</p>
        </div>
      </div>
    </footer>
  );
}
