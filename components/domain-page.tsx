import Link from "next/link";
import type { Domain } from "@/content/site";
import { domains } from "@/content/site";
import { ArtifactCard } from "@/components/artifact-card";
import { ArrowIcon } from "@/components/icons";

/**
 * Shared layout for the four ISTE domain pages. Each domain route
 * (learner/leader/citizen/designer) renders <DomainPage domain={...} />.
 */
export function DomainPage({ domain }: { domain: Domain }) {
  const idx = domains.findIndex((d) => d.slug === domain.slug);
  const next = domains[(idx + 1) % domains.length];

  return (
    <article>
      {/* Header band */}
      <header className="border-b border-line bg-surface-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-5xl font-semibold leading-none text-accent/40 sm:text-6xl">
              {domain.index}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {domain.standard}
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            {domain.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted sm:text-xl">
            {domain.tagline}
          </p>
        </div>
      </header>

      {/* Standard + narrative */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              The Standard
            </h2>
            <p className="mt-4 font-display text-xl leading-relaxed text-ink">
              {domain.description}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              My Practice
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink/90">
              {domain.narrative.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rule" />
      </div>

      {/* Artifacts */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Evidence &amp; Artifacts
          </h2>
          <span className="text-sm text-muted">
            {domain.artifacts.length}{" "}
            {domain.artifacts.length === 1 ? "artifact" : "artifacts"}
          </span>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domain.artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </section>

      {/* Next domain */}
      <section className="border-t border-line bg-surface-2">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          <Link
            href={`/${next.slug}`}
            className="group flex items-center justify-between gap-4"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Next · {next.standard}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
                {next.title}
              </p>
            </div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-xl text-ink transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </section>
    </article>
  );
}
