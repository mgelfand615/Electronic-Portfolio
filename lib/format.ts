/**
 * Small shared text helpers. Centralized so placeholder handling and
 * avatar initials behave identically everywhere they're used.
 */

/** Strip the «placeholder» guillemets so partial content still renders cleanly. */
export function clean(value: string): string {
  return value.replace(/[«»]/g, "");
}

/** Two-letter initials for avatar fallbacks (e.g. "Madison Gelfand" → "MG"). */
export function initials(name: string): string {
  const parts = clean(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "eP";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}
