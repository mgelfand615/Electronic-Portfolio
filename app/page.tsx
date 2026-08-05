import Image from "next/image";
import Link from "next/link";
import { domains, featureImage, person, site, socials } from "@/content/site";
import { socialIcons, ArrowIcon, ExternalIcon } from "@/components/icons";
import { CopyEmail } from "@/components/copy-email";
import { asset, clean, initials } from "@/lib/format";

export default function Home() {
  const cleanName = clean(person.name);
  const cleanRole = clean(person.role);
  const emailAddress = socials.find((s) => s.icon === "email")?.href.replace(
    /^mailto:/,
    "",
  );
  const otherSocials = socials.filter((s) => s.icon !== "email");

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
                {emailAddress && <CopyEmail email={emailAddress} />}
                {otherSocials.map((s) => {
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
                    src={asset(person.photo)}
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

      {/* ── Feature image ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
        <figure>
          {featureImage.src ? (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card border border-line bg-surface-2">
              <Image
                src={asset(featureImage.src)}
                alt={featureImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-card border-2 border-dashed border-line bg-surface-2 px-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft font-display text-xl text-accent">
                +
              </span>
              <p className="font-display text-lg font-semibold text-ink">
                A photo that captures this project
              </p>
              <p className="max-w-md text-sm leading-relaxed text-muted">
                Add a copyright-free image to{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-xs">
                  public/
                </code>{" "}
                and set{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-xs">
                  featureImage
                </code>{" "}
                in{" "}
                <code className="rounded bg-surface px-1.5 py-0.5 text-xs">
                  content/site.ts
                </code>
                .
              </p>
            </div>
          )}
          {featureImage.src && featureImage.caption && (
            <figcaption className="mt-3 text-sm text-muted">
              {featureImage.caption}
            </figcaption>
          )}
        </figure>
      </section>

      {/* ── The four domains ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Four dimensions of practice
          </h2>
          <p className="mt-3 text-muted">
            My portfolio is organized around the ISTE Standards for Education
            Leaders. Each area pairs the standard with reflection and evidence
            from my classroom.
          </p>
          <a
            href={site.standards.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Read the {site.standards.label}
            <ExternalIcon className="text-base" />
          </a>
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
