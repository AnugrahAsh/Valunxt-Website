/**
 * Admin sessions and flash messages.
 *
 * PHP kept the signed-in user in `$_SESSION`. There is no server-side session
 * store here, so the same payload travels in an HMAC-signed, httpOnly cookie:
 * the browser cannot read or forge it, and the panel stays stateless.
 *
 * Port of admin/auth.php.
 */
import 'server-only';
import crypto from 'node:crypto';
import { cookies } from 'next/headers';

const COOKIE = 'vxn_admin';
const FLASH_COOKIE = 'vxn_admin_flash';
const MAX_AGE = 60 * 60 * 8; // eight hours, as a working day

export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

function secret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ??
    // A deployment without an explicit secret still gets a stable one derived
    // from the database password, so sessions survive a restart. Set
    // ADMIN_SESSION_SECRET in .env.local for anything public-facing.
    'vxn-admin-' + (process.env.DB_PASS ?? 'local-development-only')
  );
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', secret()).update(payload).digest('base64url');
}

function encode(user: AdminUser): string {
  const payload = Buffer.from(JSON.stringify({ ...user, exp: Date.now() + MAX_AGE * 1000 })).toString(
    'base64url'
  );
  return `${payload}.${sign(payload)}`;
}

function decode(value: string): AdminUser | null {
  const [payload, mac] = value.split('.');
  if (!payload || !mac) return null;
  const expected = sign(payload);
  // Constant-time compare, the equivalent of PHP's hash_equals().
  if (
    mac.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))
  ) {
    return null;
  }
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (typeof data.exp !== 'number' || data.exp < Date.now()) return null;
    return { id: data.id, name: data.name, email: data.email, role: data.role };
  } catch {
    return null;
  }
}

/** The currently signed-in user, or null. */
export async function currentUser(): Promise<AdminUser | null> {
  const c = await cookies();
  const raw = c.get(COOKIE)?.value;
  return raw ? decode(raw) : null;
}

/** Store the authenticated user. */
export async function loginUser(user: AdminUser): Promise<void> {
  const c = await cookies();
  c.set(COOKIE, encode(user), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
    secure: process.env.NODE_ENV === 'production',
  });
}

/** Sign the current administrator out. */
export async function logoutUser(): Promise<void> {
  const c = await cookies();
  c.delete(COOKIE);
}

/* ---- CSRF ---------------------------------------------------------------- */

/**
 * The panel's forms are Server Actions, which Next.js already protects against
 * cross-origin POSTs. The token is kept because the PHP forms carried one and
 * the double-submit check costs nothing.
 */
const CSRF_COOKIE = 'vxn_admin_csrf';

export async function csrfToken(): Promise<string> {
  const c = await cookies();
  const existing = c.get(CSRF_COOKIE)?.value;
  if (existing) return existing;
  const token = crypto.randomBytes(16).toString('hex');
  c.set(CSRF_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  });
  return token;
}

export async function csrfOk(token: string): Promise<boolean> {
  const c = await cookies();
  const expected = c.get(CSRF_COOKIE)?.value ?? '';
  if (!expected || token.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}

/* ---- Flash messages ------------------------------------------------------ */

export interface Flash {
  ok?: string;
  err?: string;
}

/** Set the message shown after the next redirect. */
export async function setFlash(flash: Flash): Promise<void> {
  const c = await cookies();
  c.set(FLASH_COOKIE, Buffer.from(JSON.stringify(flash)).toString('base64url'), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 30,
  });
}

/** Read and clear the pending message. */
export async function takeFlash(): Promise<Flash> {
  const c = await cookies();
  const raw = c.get(FLASH_COOKIE)?.value;
  if (!raw) return {};
  try {
    c.delete(FLASH_COOKIE);
  } catch {
    /* reading during render cannot clear it; the 30s max-age does */
  }
  try {
    return JSON.parse(Buffer.from(raw, 'base64url').toString('utf8')) as Flash;
  } catch {
    return {};
  }
}
