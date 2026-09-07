// Prefix for static assets under `public/`. Needed because the site deploys to
// GitHub Pages under a `/Portfoliao` sub-path and `next/image` (static export,
// `unoptimized`) does not apply `basePath` to string `src` values.
// See next.config.ts.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Turn a root-relative public asset path into one that respects `basePath`. */
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
