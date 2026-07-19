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

/**
 * Prefix a public asset path with the deployment basePath.
 *
 * next/link handles basePath automatically, but next/image src values do NOT,
 * so any image referenced from content/site.ts (headshot, artifact images)
 * must be wrapped with asset() to resolve on a GitHub Pages project sub-path.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path) return path;
  return `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`;
}
