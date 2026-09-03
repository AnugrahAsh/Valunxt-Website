/**
 * Admin panel configuration.
 *
 * Port of the non-database half of admin/config.php: the default administrator
 * seeded on first run, and the URL helpers the screens use.
 */

/** Seeded once, on the first connection to an empty `users` table. */
export const DEFAULT_ADMIN_NAME = process.env.ADMIN_DEFAULT_NAME ?? 'VALUNXT Admin';
export const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_DEFAULT_EMAIL ?? 'admin@valunxtcapital.com';
export const DEFAULT_ADMIN_PASS = process.env.ADMIN_DEFAULT_PASS ?? 'Admin@123';

/** The panel is mounted at /admin; the public site at the root. */
export const ADMIN_BASE = '/admin';
export const SITE_BASE = '';

/**
 * Build a URL inside the admin panel.
 *
 * With a trailing slash: next.config.ts sets `trailingSlash: true`, so a link
 * without one costs every click a 308 hop.
 */
export function adminUrl(path = ''): string {
  const p = path.replace(/^\/+|\/+$/g, '');
  return ADMIN_BASE + '/' + (p ? p + '/' : '');
}

/** Build a URL on the public site. */
export function siteUrl(path = ''): string {
  return SITE_BASE + '/' + path.replace(/^\/+/, '');
}

/** The user's initials for the avatar (e.g. "VA"). */
export function userInitials(name: string): string {
  let ini = '';
  for (const part of String(name).trim().split(/\s+/)) {
    if (part !== '') ini += part[0].toUpperCase();
    if (ini.length >= 2) break;
  }
  return ini !== '' ? ini : 'A';
}

/** The logos and favicon the panel uses, on the public site. */
export const ADMIN_LOGO_WHITE = SITE_BASE + '/assets/content/uploads/2025/03/valunxt-logo-white.png';
export const ADMIN_LOGO_DARK = SITE_BASE + '/assets/content/uploads/2025/03/valunxt-logo.png';
export const ADMIN_FAVICON = SITE_BASE + '/assets/content/uploads/2025/03/fav-icon-150x150.png';

/** The panel's own stylesheet and script, served from /public. */
export const ADMIN_CSS = '/admin/assets/admin.css';
export const ADMIN_JS = '/admin/assets/admin.js';
