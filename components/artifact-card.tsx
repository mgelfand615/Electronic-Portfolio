"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Artifact } from "@/content/site";
import { ArrowIcon, CloseIcon, ExternalIcon } from "@/components/icons";
import { clean } from "@/lib/format";

export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close and return focus to the card that opened the dialog.
  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // While open: lock scroll, trap Tab focus in the dialog, Escape to close.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const titleId = `${artifact.id}-title`;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface text-left transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]"
      >
        {artifact.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
            <Image
              src={artifact.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-accent-soft to-surface-2">
            <span className="font-display text-4xl font-semibold text-accent/40">
              {clean(artifact.title).charAt(0) || "?"}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          {artifact.tags && artifact.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {artifact.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            {artifact.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {artifact.summary}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            Read reflection
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />

          {/* Panel */}
          <div
            ref={panelRef}
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-line bg-surface shadow-2xl sm:rounded-2xl"
          >
            <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-line bg-surface/95 px-6 py-4 backdrop-blur">
              <div>
                {artifact.tags && artifact.tags.length > 0 && (
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-accent">
                    {artifact.tags.join(" · ")}
                  </p>
                )}
                <h2
                  id={titleId}
                  className="font-display text-xl font-semibold leading-tight text-ink"
                >
                  {artifact.title}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-lg text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="px-6 py-6">
              {artifact.image && (
                <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl bg-surface-2">
                  <Image
                    src={artifact.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-4 text-[15px] leading-relaxed text-ink/90">
                {artifact.reflection.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {artifact.evidence && (
                <a
                  href={artifact.evidence.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
                >
                  {artifact.evidence.label}
                  <ExternalIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
