import type { NextConfig } from "next";

/**
 * Static export config for GitHub Pages.
 *
 * `next build` emits a fully static site into `out/` (see the deploy workflow
 * in .github/workflows/deploy.yml).
 *
 * On a GitHub *project* page the site is served from a sub-path
 * (https://<user>.github.io/<repo>/), so the CI sets NEXT_PUBLIC_BASE_PATH to
 * "/<repo>". Locally the var is unset, so `npm run dev` / `npm run build` serve
 * from the root as usual.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages can't run Next's image optimizer; serve images as-is.
  images: { unoptimized: true },
  // Emit /learner/index.html so Pages resolves clean URLs without a server.
  trailingSlash: true,
  // Only set when non-empty; next/link auto-prefixes this (next/image does not
  // — use asset() from lib/format.ts for image src values).
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
