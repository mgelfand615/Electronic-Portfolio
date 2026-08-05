"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon, EmailIcon } from "@/components/icons";

/**
 * Shows the email address as plain, selectable text with a click-to-copy
 * affordance — a <button>, not a mailto link, so it never hands off to a
 * mail app. Falls back gracefully (the address is still visible/selectable)
 * if the Clipboard API is unavailable.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the address is still visible to select manually.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Email address copied" : `Copy email address: ${email}`}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
    >
      <EmailIcon className="text-base" />
      <span className="select-all">{email}</span>
      {copied ? (
        <CheckIcon className="text-base text-accent" />
      ) : (
        <CopyIcon className="text-base text-muted" />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
