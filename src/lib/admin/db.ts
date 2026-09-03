/**
 * The admin panel's database access.
 *
 * Port of the `db()` half of admin/config.php: one connection per request,
 * bootstrapping the schema and seeding the default administrator on first use,
 * so the panel works on a fresh install with no manual SQL import.
 */
import 'server-only';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

import { dbConfig, ENQUIRIES_TABLE_SQL } from '@/lib/db';
import { DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_NAME, DEFAULT_ADMIN_PASS } from './config';

export const USERS_TABLE_SQL = `CREATE TABLE IF NOT EXISTS users (
                id            INT UNSIGNED NOT NULL AUTO_INCREMENT,
                name          VARCHAR(120) NOT NULL,
                email         VARCHAR(190) NOT NULL,
                password_hash VARCHAR(255) NOT NULL,
                role          VARCHAR(40)  NOT NULL DEFAULT 'admin',
                last_login_at DATETIME     NULL DEFAULT NULL,
                created_at    DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                UNIQUE KEY uq_email (email)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`;

export const PAGES_TABLE_SQL = `CREATE TABLE IF NOT EXISTS pages (
                id               INT UNSIGNED NOT NULL AUTO_INCREMENT,
                title            VARCHAR(200)  NOT NULL DEFAULT '',
                slug             VARCHAR(255)  NOT NULL DEFAULT '',
                file_path        VARCHAR(255)  NOT NULL DEFAULT '',
                meta_title       VARCHAR(255)  NOT NULL DEFAULT '',
                meta_description TEXT          NULL,
                canonical_url    VARCHAR(255)  NOT NULL DEFAULT '',
                meta_keywords    VARCHAR(500)  NOT NULL DEFAULT '',
                robots_meta      VARCHAR(40)   NOT NULL DEFAULT 'index, follow',
                og_title         VARCHAR(255)  NOT NULL DEFAULT '',
                og_description   TEXT          NULL,
                status           VARCHAR(20)   NOT NULL DEFAULT 'published',
                in_sitemap       TINYINT(1)    NOT NULL DEFAULT 1,
                priority         DECIMAL(2,1)  NOT NULL DEFAULT 0.5,
                changefreq       VARCHAR(20)   NOT NULL DEFAULT 'monthly',
                is_cms           TINYINT(1)    NOT NULL DEFAULT 0,
                created_at       DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at       DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                UNIQUE KEY uq_slug (slug),
                KEY idx_status (status)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`;

export const SETTINGS_TABLE_SQL = `CREATE TABLE IF NOT EXISTS seo_settings (
                k VARCHAR(64)  NOT NULL,
                v TEXT         NULL,
                PRIMARY KEY (k)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`;

/**
 * The panel runs against one long-lived pool. mysql2 reconnects on its own, so
 * a MySQL restart does not need a Node restart.
 */
let pool: mysql.Pool | null = null;
let bootstrapped: Promise<void> | null = null;

function getPool(): mysql.Pool {
  if (!pool) {
    const cfg = dbConfig(process.env.DB_HOST ? '' : 'localhost');
    pool = mysql.createPool({
      ...cfg,
      charset: 'utf8mb4',
      waitForConnections: true,
      connectionLimit: 5,
      dateStrings: true,
    });
  }
  return pool;
}

/** Create the tables if needed and seed the default administrator once. */
async function bootstrap(): Promise<void> {
  const p = getPool();
  await p.query(USERS_TABLE_SQL);
  await p.query(ENQUIRIES_TABLE_SQL);
  await p.query(PAGES_TABLE_SQL);
  await p.query(SETTINGS_TABLE_SQL);

  // CMS-created pages are rendered by the catch-all route, which needs the
  // banner the editor chose. Added separately so an existing database from the
  // PHP build upgrades in place. MySQL has no ADD COLUMN IF NOT EXISTS.
  try {
    await p.query("ALTER TABLE pages ADD COLUMN hero_image VARCHAR(255) NOT NULL DEFAULT ''");
  } catch {
    /* already there */
  }

  const [rows] = await p.query<mysql.RowDataPacket[]>(
    'SELECT COUNT(*) AS n FROM users WHERE email = ?',
    [DEFAULT_ADMIN_EMAIL]
  );
  if (Number(rows[0]?.n ?? 0) === 0) {
    await p.query(
      'INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)',
      [
        DEFAULT_ADMIN_NAME,
        DEFAULT_ADMIN_EMAIL,
        await bcrypt.hash(DEFAULT_ADMIN_PASS, 10),
        'admin',
      ]
    );
  }
}

/** The pool, with the schema guaranteed. Throws if MySQL is unreachable. */
export async function db(): Promise<mysql.Pool> {
  if (!bootstrapped) {
    bootstrapped = bootstrap().catch((e) => {
      // Let the next call retry rather than caching the failure forever.
      bootstrapped = null;
      throw e;
    });
  }
  await bootstrapped;
  return getPool();
}

/** A convenience SELECT that always returns rows. */
export async function query<T = mysql.RowDataPacket>(
  sql: string,
  args: unknown[] = []
): Promise<T[]> {
  const p = await db();
  const [rows] = await p.query<mysql.RowDataPacket[]>(sql, args);
  return rows as T[];
}

/** A convenience INSERT/UPDATE/DELETE. */
export async function execute(sql: string, args: unknown[] = []): Promise<mysql.ResultSetHeader> {
  const p = await db();
  const [res] = await p.query<mysql.ResultSetHeader>(sql, args);
  return res;
}

/* ---- Authentication ------------------------------------------------------ */

export interface UserRow {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role: string;
}

/**
 * Authenticate an email + password pair.
 *
 * The stored hashes are PHP `password_hash()` bcrypt digests, so any account
 * created by the old panel signs in unchanged. PHP writes them with the `$2y$`
 * prefix, which is the same algorithm as `$2a$`/`$2b$`; bcryptjs is told so.
 */
export async function attemptLogin(email: string, password: string): Promise<UserRow | null> {
  const rows = await query<UserRow & mysql.RowDataPacket>(
    'SELECT * FROM users WHERE email = ? LIMIT 1',
    [email]
  );
  const user = rows[0];
  if (!user) return null;

  const hash = user.password_hash.replace(/^\$2y\$/, '$2a$');
  if (!(await bcrypt.compare(password, hash))) return null;

  // Record the login time (best effort).
  try {
    await execute('UPDATE users SET last_login_at = NOW() WHERE id = ?', [user.id]);
  } catch {
    /* non-fatal */
  }
  return user;
}
