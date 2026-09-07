import type { NextConfig } from 'next';

/**
 * This repo deploys to GitHub Pages as a *project* site, so it is served from
 * `https://<user>.github.io/Portfoliao/` rather than the domain root. Next needs
 * `basePath` set to that sub-path so routes and links resolve under
 * `/Portfoliao`.
 *
 * `next/image` with `output: 'export'` + `unoptimized` does NOT prepend
 * `basePath` to a string `src`, so image paths are prefixed manually via
 * `withBasePath()` in `src/lib/asset.ts`, which reads `NEXT_PUBLIC_BASE_PATH`
 * (exposed below).
 *
 * Only applied inside GitHub Actions — local `next dev` / `next build` stay at
 * the root. If you later move to a custom domain served from the root, set
 * `PAGES_BASE_PATH=""` in the workflow or delete this block.
 */
const basePath =
  process.env.PAGES_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === 'true' ? '/Portfoliao' : '');

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
