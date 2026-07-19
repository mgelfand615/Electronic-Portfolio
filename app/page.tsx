import Image from "next/image";
import Link from "next/link";
import { domains, person, socials } from "@/content/site";
import { socialIcons, ArrowIcon } from "@/components/icons";
import { clean, initials } from "@/lib/format";

export default function Home() {
  const cleanName = clean(person.name);
  const cleanRole = clean(person.role);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* soft warm glow behind hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-accent-soft blur-3xl opacity-60"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
                Professional ePortfolio
              </p>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
                {person.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {person.intro[0]}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/learner"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
                >
                  Explore my portfolio
                  <ArrowIcon />
                </Link>
                {socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.href}
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon className="text-base" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Portrait / avatar */}
            <div className="mx-auto w-full max-w-xs md:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-line bg-surface-2">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={`Portrait of ${cleanName}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 20rem, 24rem"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft via-surface to-surface-2">
                    <span className="font-display text-7xl font-semibold text-accent/50">
                      {initials(person.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-4 text-center md:text-left">
                <p className="font-display text-lg font-semibold text-ink">
                  {cleanName}
                </p>
                <p className="text-sm text-muted">{cleanRole}</p>
                {person.organization && (
                  <p className="text-sm text-muted">{person.organization}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About strip ──────────────────────────────────────────────── */}
      {person.intro[1] && (
        <section className="border-y border-line bg-surface-2">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About Me
            </h2>
            <p className="mt-4 font-display text-2xl leading-relaxed text-ink sm:text-3xl">
              {person.intro[1]}
            </p>
            {person.program && (
              <p className="mt-6 text-sm text-muted">{person.program}</p>
            )}
          </div>
        </section>
      )}

      {/* ── The four domains ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Four dimensions of practice
          </h2>
          <p className="mt-3 text-muted">
            My portfolio is organized around the ISTE Standards for Educators.
            Each area pairs the standard with reflection and evidence from my
            classroom.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2">
          {domains.map((d) => (
            <Link
              key={d.slug}
              href={`/${d.slug}`}
              className="group relative flex flex-col bg-surface p-8 transition-colors hover:bg-surface-2"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl font-semibold text-accent/30 transition-colors group-hover:text-accent/60">
                  {d.index}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {d.standard}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                {d.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {d.tagline}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                Explore
                <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
