/**
 * Lightweight form endpoint for the converted site.
 *
 * Replaces Elementor Pro's admin-ajax form action. Accepts the same POST
 * payload the Elementor form widget sends, does the same server-side
 * validation, records the submission, and returns Elementor-compatible JSON so
 * the widget shows its success/error message exactly as before.
 *
 * Port of form-handler.php.
 */
import { NextResponse, type NextRequest } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';

import { connectWithSchema } from '@/lib/db';

const LOG_DIR = path.join(process.cwd(), 'data');

/** Which lead form a submission came from, by Elementor form id. */
const SOURCE_MAP: Record<string, string> = {
  '7655e08': 'Contact',
  e67e0ee: 'Free Consultation',
  '5099fe1': 'Enquiry',
  partnership: 'Partnership',
};

function fail(message: string, status: number) {
  return NextResponse.json({ success: false, data: { message } }, { status });
}

/** Best effort, never blocks the response — as in the PHP original. */
async function append(file: string, line: string) {
  try {
    await fs.mkdir(LOG_DIR, { recursive: true });
    await fs.appendFile(path.join(LOG_DIR, file), line, 'utf8');
  } catch {
    /* logging must never break a submission */
  }
}

export async function POST(req: NextRequest) {
  const form = await req.formData();

  // Elementor sends fields as form_fields[<id>]; flat POST is accepted too.
  const clean: Record<string, string> = {};
  const flat: Record<string, string> = {};
  for (const [rawKey, rawValue] of form.entries()) {
    const value = typeof rawValue === 'string' ? rawValue : rawValue.name;
    const m = /^form_fields\[(.*)\]$/.exec(rawKey);
    const key = (m ? m[1] : rawKey).replace(/[^a-zA-Z0-9_\- ]/g, '');
    const text = value.replace(/<[^>]*>/g, '').trim();
    if (m) clean[key] = text;
    flat[key] = text;
  }
  const fields = Object.keys(clean).length ? clean : flat;

  // Basic validation: require at least one non-empty value; validate any
  // email-looking field.
  let hasValue = false;
  for (const [k, v] of Object.entries(fields)) {
    if (v !== '') hasValue = true;
    if (k.toLowerCase().includes('email') && v !== '' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
      return fail('Please enter a valid email address.', 400);
    }
  }
  if (!hasValue) return fail('Please fill in the form.', 400);

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    '';

  // Record the submission to a local log (best effort; never blocks).
  await append(
    'form-submissions.log',
    JSON.stringify({
      time: new Date().toISOString(),
      ip,
      form: String(form.get('form_id') ?? form.get('form_name') ?? ''),
      fields,
    }) + '\n'
  );

  // ---- Store lead-capture enquiries in the database ----------------------
  // Lead forms post fields named <prefix>_full_name|email|phone|company. Match
  // by suffix so one code path handles every form (Contact, Free Consultation,
  // homepage/Our Group enquiry).
  const pick = (suffix: string) => {
    for (const [k, v] of Object.entries(fields)) {
      if (v !== '' && k.endsWith(suffix)) return v;
    }
    return '';
  };
  const fullName = pick('full_name');
  const phone = pick('phone');
  const company = pick('company');
  const email = pick('_email') || pick('email');

  // Only record lead-form submissions; skip the email-only newsletter form.
  if (fullName !== '' || phone !== '' || company !== '') {
    const formId = String(form.get('form_id') ?? '');
    const source = SOURCE_MAP[formId] ?? (formId !== '' ? formId : 'Website');
    const pageUrl = (req.headers.get('referer') ?? '').slice(0, 255);

    try {
      const conn = await connectWithSchema(req.headers.get('host') ?? '');
      await conn.execute(
        `INSERT INTO enquiries (full_name, email, phone, company, source, page_url, ip)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          fullName.slice(0, 160),
          email.slice(0, 190),
          phone.slice(0, 60),
          company.slice(0, 190),
          source,
          pageUrl,
          ip,
        ]
      );
      await conn.end();
    } catch (e) {
      // Non-fatal: the submission is already captured in the file log above.
      await append('form-errors.log', `${new Date().toISOString()} ${String(e)}\n`);
    }
  }

  return NextResponse.json({
    success: true,
    data: {
      message:
        'Thank you for contacting VALUNXT Capital. Our advisory team will review your enquiry and respond shortly.',
      data: [],
      meta: [],
    },
  });
}

export function GET() {
  return fail('Method not allowed.', 405);
}
