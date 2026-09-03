/**
 * The enquiries database.
 *
 * Port of the connection half of admin/config.php: the same credentials, the
 * same environment split (localhost vs production), and the same
 * `CREATE TABLE IF NOT EXISTS` bootstrap so a fresh install works with no
 * manual SQL import.
 *
 * Credentials come from the environment first — put them in .env.local rather
 * than in this file for any real deployment — and fall back to the values the
 * PHP build shipped with so nothing breaks on the existing hosting.
 */
import mysql from 'mysql2/promise';

function isLocal(host: string): boolean {
  const h = host.toLowerCase();
  return (
    h === 'localhost' ||
    h.startsWith('localhost:') ||
    h.includes('127.0.0.1') ||
    h.includes('::1')
  );
}

export interface DbConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

export function dbConfig(requestHost = ''): DbConfig {
  if (process.env.DB_HOST) {
    return {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 3306),
      database: process.env.DB_NAME ?? '',
      user: process.env.DB_USER ?? '',
      password: process.env.DB_PASS ?? '',
    };
  }

  if (isLocal(requestHost)) {
    // Localhost (XAMPP)
    return {
      host: '127.0.0.1',
      port: 3306,
      database: 'valunxt_capital_admin',
      user: 'root',
      password: '',
    };
  }

  // Production (Hostinger)
  return {
    host: 'localhost',
    port: 3306,
    database: 'u431421769_valunxt_capita',
    user: 'u431421769_valunxt_capita',
    password: 'NxtCapital@1977',
  };
}

/** The enquiries table, as admin/config.php declared it. */
export const ENQUIRIES_TABLE_SQL = `CREATE TABLE IF NOT EXISTS enquiries (
                id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
                full_name   VARCHAR(160) NOT NULL DEFAULT '',
                email       VARCHAR(190) NOT NULL DEFAULT '',
                phone       VARCHAR(60)  NOT NULL DEFAULT '',
                company     VARCHAR(190) NOT NULL DEFAULT '',
                source      VARCHAR(80)  NOT NULL DEFAULT '',
                page_url    VARCHAR(255) NOT NULL DEFAULT '',
                ip          VARCHAR(45)  NOT NULL DEFAULT '',
                created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (id),
                KEY idx_created (created_at)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`;

/**
 * A connection with the schema in place.
 *
 * On a fresh local install the database itself may not exist yet, so the first
 * connection failure is answered by creating it and reconnecting — exactly what
 * form-handler.php did. Production hosting cannot CREATE DATABASE, and does not
 * need to.
 */
export async function connectWithSchema(requestHost = ''): Promise<mysql.Connection> {
  const cfg = dbConfig(requestHost);
  let conn: mysql.Connection;
  try {
    conn = await mysql.createConnection({ ...cfg, charset: 'utf8mb4' });
  } catch {
    const server = await mysql.createConnection({
      host: cfg.host,
      port: cfg.port,
      user: cfg.user,
      password: cfg.password,
      charset: 'utf8mb4',
    });
    await server.query(
      `CREATE DATABASE IF NOT EXISTS \`${cfg.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
    );
    await server.end();
    conn = await mysql.createConnection({ ...cfg, charset: 'utf8mb4' });
  }
  await conn.query(ENQUIRIES_TABLE_SQL);
  return conn;
}
