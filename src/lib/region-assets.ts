/**
 * Region-scoped asset resolution.
 *
 * Split out of region.ts because these two helpers read the filesystem, which
 * keeps region.ts importable from anywhere (including a client component)
 * without pulling `node:fs` into a browser bundle.
 */
import fs from 'node:fs';
import path from 'node:path';

import { BASE, vxnRegionDefault, vxnRegionExists } from './region';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

function fileExists(rel: string): boolean {
  try {
    return fs.existsSync(path.join(PUBLIC_DIR, rel.replace(/^\/+/, '')));
  } catch {
    return false;
  }
}

/**
 * A region-specific asset with a shared fallback.
 *
 *   rimg('en-ae', 'homepage/hero.webp')
 *     → /assets/content/uploads/regions/en-ae/homepage/hero.webp   (if present)
 *     → /assets/content/uploads/homepage/hero.webp                 (otherwise)
 *
 * Drop a file into public/assets/content/uploads/regions/<slug>/ and that market
 * picks it up with no template change.
 */
export function rimg(region: string, relative: string): string {
  const rel = String(relative ?? '').replace(/^\/+/, '');
  const slug = vxnRegionExists(region) ? region : vxnRegionDefault();
  const override = `/assets/content/uploads/regions/${slug}/${rel}`;
  if (fileExists(override)) return BASE + override;
  return `${BASE}/assets/content/uploads/${rel}`;
}

/**
 * rimg() over a list of candidates: the first file that actually exists wins.
 *
 * Lets a template name artwork that has not been supplied yet — drop
 * banners/uae-slider-5.webp in and it takes over from the stand-in with no
 * template change, the same way rimg() handles regional overrides.
 */
export function rimgFirst(region: string, candidates: string[]): string {
  const slug = vxnRegionExists(region) ? region : vxnRegionDefault();
  for (const raw of candidates) {
    const rel = String(raw ?? '').replace(/^\/+/, '');
    if (rel === '') continue;
    if (fileExists(`/assets/content/uploads/regions/${slug}/${rel}`)) {
      return `${BASE}/assets/content/uploads/regions/${slug}/${rel}`;
    }
    if (fileExists(`/assets/content/uploads/${rel}`)) {
      return `${BASE}/assets/content/uploads/${rel}`;
    }
  }
  return rimg(slug, candidates[0] ?? '');
}

