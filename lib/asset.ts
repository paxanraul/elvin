/**
 * Prefix a public asset path with the deploy basePath.
 *
 * next/image with `unoptimized: true` (required for static export) does NOT
 * prepend `basePath` to the rendered <img src>, so we do it manually here.
 * Locally NEXT_PUBLIC_BASE_PATH is unset → "" → paths stay as-is.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE}${path}`;
