import Link from "next/link";
import type { Domain } from "@/content/site";
import { domains } from "@/content/site";
import { ArtifactEntry } from "@/components/artifact-entry";
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
      {/* Header band — standard reference, page title, then the standard text */}
      <header className="border-b border-line bg-surface-2">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {domain.standard}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            {domain.title}
          </h1>

          <div className="mt-8 max-w-3xl">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              The Standard
            </h2>
            <p className="mt-3 font-display text-xl leading-relaxed text-ink sm:text-2xl">
              {domain.description}
            </p>
          </div>
        </div>
      </header>

      {/* Evidence & artifacts */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Evidence &amp; Artifacts
        </h2>

        <div className="mt-8 space-y-8">
          {domain.artifacts.map((artifact) => (
            <ArtifactEntry key={artifact.id} artifact={artifact} />
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
