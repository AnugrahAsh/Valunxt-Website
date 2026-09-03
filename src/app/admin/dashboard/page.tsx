/**
 * Admin dashboard.
 *
 * Port of admin/dashboard.php. The KPI cards, chart and activity feed are the
 * same placeholder figures the PHP page carried; the "Latest Enquiries" table
 * now reads the real `enquiries` rows, which is what the page linked to anyway.
 */
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

import AdminShell from '@/components/admin/AdminShell';
import { adminUrl } from '@/lib/admin/config';
import { query } from '@/lib/admin/db';
import { currentUser } from '@/lib/admin/session';

export const metadata: Metadata = {
  title: 'Dashboard — VALUNXT Capital Admin',
  robots: 'noindex, nofollow',
};

/** Demo figures (wire to real queries as the panel grows). */
const STATS = [
  {
    label: 'Total Enquiries',
    value: '1,248',
    trend: '+12.5%',
    dir: 'up',
    ico: '',
    svg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  },
  {
    label: 'Active Clients',
    value: '342',
    trend: '+4.2%',
    dir: 'up',
    ico: 'blue',
    svg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  },
  {
    label: 'Reports Published',
    value: '86',
    trend: '+7 new',
    dir: 'up',
    ico: 'green',
    svg: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  },
  {
    label: 'Assets Under Review',
    value: '$4.7B',
    trend: '-1.1%',
    dir: 'down',
    ico: 'navy',
    svg: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  },
];

/** Simple 8-month bar chart (percent heights). */
const CHART: Array<[string, number]> = [
  ['Jan', 45],
  ['Feb', 62],
  ['Mar', 55],
  ['Apr', 78],
  ['May', 68],
  ['Jun', 90],
  ['Jul', 74],
  ['Aug', 83],
];

const ACTIVITY: Array<[string, string, string, string]> = [
  ['navy', 'New enquiry received', 'Corporate advisory — Meridian Holdings', '18 minutes ago'],
  ['green', 'Report published', '“Q3 Private Markets Outlook” is now live', '2 hours ago'],
  ['', 'Client onboarded', 'Ashcroft Family Office added to portfolio', '5 hours ago'],
  ['navy', 'Consultation scheduled', 'Free consultation booked for 31 Jul', 'Yesterday'],
];

interface EnquiryRow {
  id: number;
  full_name: string;
  email: string;
  company: string;
  source: string;
}

const SOURCE_PILL: Record<string, string> = {
  Contact: 'new',
  'Free Consultation': 'wait',
  Enquiry: 'ok',
};

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) redirect(adminUrl(''));

  let latest: EnquiryRow[] = [];
  try {
    latest = await query<EnquiryRow>(
      `SELECT id, full_name, email, company, source
         FROM enquiries ORDER BY created_at DESC, id DESC LIMIT 4`
    );
  } catch {
    /* MySQL unavailable — the table renders empty */
  }

  return (
    <AdminShell active="dashboard" user={user}>
      <div className="page-head">
        <div className="crumbs">
          Home <span className="sep">/</span> Dashboard
        </div>
        <h1>Welcome back, {user.name.split(' ')[0]} 👋</h1>
        <p>Here&rsquo;s what&rsquo;s happening across VALUNXT Capital today.</p>
      </div>

      {/* KPI cards */}
      <section className="stat-grid">
        {STATS.map((s) => (
          <div className="stat-card" key={s.label}>
            <div className={`ico ${s.ico}`}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                dangerouslySetInnerHTML={{ __html: s.svg }}
              />
            </div>
            <div className="label">{s.label}</div>
            <div className="value">{s.value}</div>
            <div className={`trend ${s.dir}`}>
              {s.dir === 'up' ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                  <polyline points="17 18 23 18 23 12" />
                </svg>
              )}
              {s.trend} <span className="muted">vs last month</span>
            </div>
          </div>
        ))}
      </section>

      {/* Chart + activity */}
      <section className="panel-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Enquiries Overview</h3>
            <a href="#" className="link">
              View report
            </a>
          </div>
          <div className="panel-body">
            <div className="chart">
              {CHART.map((c, i) => (
                <div className="bar-col" key={c[0]}>
                  <div
                    className={`bar ${i % 2 ? 'alt' : ''}`}
                    style={{ height: `${c[1]}%`, animationDelay: `${i * 60}ms` }}
                  />
                  <span className="m">{c[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel">
          <div className="panel-head">
            <h3>Recent Activity</h3>
            <a href="#" className="link">
              See all
            </a>
          </div>
          <div className="panel-body">
            <ul className="activity">
              {ACTIVITY.map((a) => (
                <li key={a[1] + a[3]}>
                  <span className={`dot ${a[0]}`}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div className="txt">
                    <div className="who">{a[1]}</div>
                    <div>{a[2]}</div>
                    <div className="when">{a[3]}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Latest enquiries table */}
      <section className="panel" style={{ marginTop: 20 }}>
        <div className="panel-head">
          <h3>Latest Enquiries</h3>
          <a href={adminUrl('enquiries')} className="link">
            Manage enquiries
          </a>
        </div>
        <div className="panel-body" style={{ padding: 0 }}>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Client</th>
                  <th>Email</th>
                  <th>Source</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {latest.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ color: 'var(--muted)' }}>
                      No enquiries yet — submissions from the website forms appear here.
                    </td>
                  </tr>
                ) : (
                  latest.map((e) => (
                    <tr key={e.id}>
                      <td style={{ fontWeight: 600 }}>
                        ENQ-{String(e.id).padStart(4, '0')}
                      </td>
                      <td>{e.company !== '' ? e.company : e.full_name || '—'}</td>
                      <td>{e.email || '—'}</td>
                      <td>
                        <span className={`pill ${SOURCE_PILL[e.source] ?? 'new'}`}>
                          {e.source !== '' ? e.source : 'Website'}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <a href={adminUrl('enquiries')} className="link">
                          View
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </AdminShell>
  );
}
