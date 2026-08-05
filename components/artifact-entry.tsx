import Image from "next/image";
import type { Artifact } from "@/content/site";
import { ExternalIcon } from "@/components/icons";
import { asset } from "@/lib/format";

/**
 * One artifact laid out in two columns:
 *   left  — the project title (linked to the artifact) and its description
 *   right — why it was included / how it meets the standard, plus a reflection
 *
 * Everything renders inline; there is no modal to open.
 */
export function ArtifactEntry({ artifact }: { artifact: Artifact }) {
  // The first link is what the title points at; the rest are listed below
  // the description so a single artifact can reference more than one source.
  const [primaryLink, ...extraLinks] = artifact.evidence ?? [];

  return (
    <article
      id={artifact.id}
      className="grid gap-8 rounded-card border border-line bg-surface p-6 sm:p-8 md:grid-cols-2 md:gap-12"
    >
      {/* ── Left: the artifact itself ───────────────────────────────── */}
      <div>
        {artifact.image && (
          <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-2">
            <Image
              src={asset(artifact.image)}
              alt={artifact.title}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover"
            />
          </div>
        )}

        {artifact.tags && artifact.tags.length > 0 && (
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
            {artifact.tags.join(" · ")}
          </p>
        )}

        <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink">
          {primaryLink ? (
            <a
              href={asset(primaryLink.href)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-2 transition-colors hover:text-accent"
            >
              <span className="underline decoration-line decoration-2 underline-offset-4 group-hover:decoration-accent">
                {artifact.title}
              </span>
              {/* Not shown, but tells screen readers where the link goes. */}
              <span className="sr-only">, {primaryLink.label}</span>
              <ExternalIcon className="mt-1.5 shrink-0 text-base text-muted transition-colors group-hover:text-accent" />
            </a>
          ) : (
            artifact.title
          )}
        </h3>

        <p className="mt-3 text-[15px] leading-relaxed text-ink/90">
          {artifact.summary}
        </p>

        {extraLinks.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {extraLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={asset(link.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                >
                  {link.label}
                  <ExternalIcon className="text-base transition-transform duration-200 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ── Right: justification + reflection ───────────────────────── */}
      <div className="space-y-7 md:border-l md:border-line md:pl-12">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why I Included This
          </h4>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink/90">
            {artifact.justification.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            My Reflection
          </h4>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink/90">
            {artifact.reflection.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
