/**
 * Admin — Enquiries.
 *
 * Lists website lead-capture submissions stored in the `enquiries` table and
 * lets an administrator delete individual entries.
 *
 * Port of admin/enquiries.php.
 */
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

import AdminShell from '@/components/admin/AdminShell';
import { FlashErr, FlashOk } from '@/components/admin/Flash';
import EnquiryFilter from '@/components/admin/EnquiryFilter';
import { adminUrl } from '@/lib/admin/config';
import { query } from '@/lib/admin/db';
import { csrfToken, currentUser, takeFlash } from '@/lib/admin/session';
import { deleteEnquiryAction } from '@/lib/admin/actions';

export const metadata: Metadata = {
  title: 'Enquiries — VALUNXT Capital Admin',
  robots: 'noindex, nofollow',
};

interface EnquiryRow {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  company: string;
  source: string;
  created_at: string;
}

/** Source → pill colour class. */
function sourcePill(src: string): string {
  const map: Record<string, string> = {
    Contact: 'new',
    'Free Consultation': 'wait',
    Enquiry: 'ok',
  };
  return map[src] ?? 'new';
}

function received(value: string): string {
  const d = new Date(value.replace(' ', 'T'));
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export default async function EnquiriesPage() {
  const user = await currentUser();
  if (!user) redirect(adminUrl(''));

  const flash = await takeFlash();
  const csrf = await csrfToken();

  let rows: EnquiryRow[] = [];
  let loadError = '';
  try {
    rows = await query<EnquiryRow>(
      `SELECT id, full_name, email, phone, company, source, created_at
         FROM enquiries ORDER BY created_at DESC, id DESC`
    );
  } catch {
    loadError = 'Could not load enquiries. Please ensure MySQL is running.';
  }
  const total = rows.length;

  return (
    <AdminShell active="enquiries" user={user}>
      <div className="page-head">
        <div className="crumbs">
          Home <span className="sep">/</span> Enquiries
        </div>
        <h1>Enquiries</h1>
        <p>Lead-capture submissions from the website contact &amp; consultation forms.</p>
      </div>

      <FlashOk message={flash.ok ?? ''} />
      <FlashErr message={flash.err ?? ''} />

      <section className="panel">
        <div className="panel-head">
          <h3>
            All Enquiries <span className="count-chip">{total}</span>
          </h3>
          <div className="enq-search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <EnquiryFilter />
          </div>
        </div>
        <div className="panel-body" style={{ padding: 0 }}>
          {loadError ? (
            <div className="empty-state">
              <p>{loadError}</p>
            </div>
          ) : total === 0 ? (
            <div className="empty-state">
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <h4>No enquiries yet</h4>
              <p>New submissions from the website forms will appear here automatically.</p>
            </div>
          ) : (
            <div className="table-wrap">
              <table className="data" id="enqTable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Source</th>
                    <th>Received</th>
                    <th style={{ textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr
                      key={r.id}
                      data-search={`${r.full_name} ${r.email} ${r.company} ${r.phone}`.toLowerCase()}
                    >
                      <td style={{ fontWeight: 600 }}>{r.full_name !== '' ? r.full_name : '—'}</td>
                      <td>
                        {r.email !== '' ? (
                          <a className="link" href={`mailto:${r.email}`}>
                            {r.email}
                          </a>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td>
                        {r.phone !== '' ? (
                          <a className="link" href={`tel:${r.phone}`}>
                            {r.phone}
                          </a>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td>{r.company !== '' ? r.company : '—'}</td>
                      <td>
                        <span className={`pill ${sourcePill(r.source)}`}>
                          {r.source !== '' ? r.source : 'Website'}
                        </span>
                      </td>
                      <td className="nowrap">{received(r.created_at)}</td>
                      <td style={{ textAlign: 'right' }}>
                        <form action={deleteEnquiryAction} className="inline-del">
                          <input type="hidden" name="csrf" value={csrf} />
                          <input type="hidden" name="id" value={r.id} />
                          <button
                            type="submit"
                            className="icon-btn danger"
                            aria-label="Delete enquiry"
                            title="Delete"
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              <line x1="10" y1="11" x2="10" y2="17" />
                              <line x1="14" y1="11" x2="14" y2="17" />
                            </svg>
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="empty-state" id="noMatch" style={{ display: 'none' }}>
                <p>No enquiries match your filter.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </AdminShell>
  );
}
