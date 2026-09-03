/**
 * Admin login page.
 *
 * Port of admin/index.php.
 */
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

import {
  ADMIN_LOGO_DARK,
  ADMIN_LOGO_WHITE,
  DEFAULT_ADMIN_EMAIL,
  DEFAULT_ADMIN_PASS,
  adminUrl,
} from '@/lib/admin/config';
import { currentUser } from '@/lib/admin/session';
import LoginForm from '@/components/admin/LoginForm';

export const metadata: Metadata = {
  title: 'Sign in — VALUNXT Capital Admin',
  robots: 'noindex, nofollow',
};

export default async function AdminLoginPage() {
  // Already signed in? Go straight to the dashboard.
  if (await currentUser()) redirect(adminUrl('dashboard'));

  return (
    <div className="login-body">
      {/* Brand panel */}
      <aside className="login-brand">
        <div className="brand-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ADMIN_LOGO_WHITE} alt="VALUNXT Capital" />
        </div>

        <div className="brand-copy">
          <span className="eyebrow">Administrator Portal</span>
          <h1>
            Precision in every <span className="accent">decision.</span>
          </h1>
          <p className="lede">
            Manage your advisory content, client enquiries and insights from a single, secure control
            centre built for the VALUNXT Capital team.
          </p>
          <ul className="brand-points">
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Bank-grade session security
            </li>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
              Real-time performance insights
            </li>
            <li>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Centralised client &amp; enquiry management
            </li>
          </ul>
        </div>

        <div className="brand-foot">
          &copy; {new Date().getFullYear()} VALUNXT Capital. All rights reserved.
        </div>
      </aside>

      {/* Form panel */}
      <main className="login-form-wrap">
        <div className="login-card">
          <div className="form-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ADMIN_LOGO_DARK} alt="VALUNXT Capital" />
          </div>

          <h2>Welcome back</h2>
          <p className="sub">Sign in to your VALUNXT Capital admin account.</p>

          <LoginForm defaultEmail={DEFAULT_ADMIN_EMAIL} defaultPassword={DEFAULT_ADMIN_PASS} />

          <div className="cred-hint">
            <strong>Default credentials</strong>
            <br />
            Email: <code>{DEFAULT_ADMIN_EMAIL}</code>
            <br />
            Password: <code>{DEFAULT_ADMIN_PASS}</code>
          </div>
        </div>
      </main>
    </div>
  );
}
