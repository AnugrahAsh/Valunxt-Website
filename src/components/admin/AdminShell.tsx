/**
 * The admin panel chrome: sidebar + topbar around a page's content.
 *
 * Port of the shared `admin-shell` markup that admin/dashboard.php,
 * enquiries.php, pages.php, page-edit.php and sitemap.php each repeated,
 * together with includes/sidebar.php and includes/topbar.php.
 */
import type { ReactNode } from 'react';

import { ADMIN_JS, ADMIN_LOGO_WHITE, adminUrl, userInitials } from '@/lib/admin/config';
import type { AdminUser } from '@/lib/admin/session';

export type AdminNavKey = 'dashboard' | 'enquiries' | 'pages' | 'sitemap' | 'settings';

/** [key, label, href, svg path data] */
const NAV: Array<[AdminNavKey, string, string, string]> = [
  [
    'dashboard',
    'Dashboard',
    adminUrl('dashboard'),
    '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  ],
  [
    'enquiries',
    'Enquiries',
    adminUrl('enquiries'),
    '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  ],
];

const NAV_SEO: Array<[AdminNavKey, string, string, string]> = [
  [
    'pages',
    'Pages & SEO',
    adminUrl('pages'),
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  ],
  [
    'sitemap',
    'Sitemap',
    adminUrl('sitemap'),
    '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  ],
];

const NAV_SYSTEM: Array<[AdminNavKey, string, string, string]> = [
  [
    'settings',
    'Settings',
    '#',
    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  ],
];

function NavItem({
  item,
  active,
}: {
  item: [AdminNavKey, string, string, string];
  active: AdminNavKey;
}) {
  const [key, label, href, svg] = item;
  return (
    <a href={href} className={'nav-item' + (key === active ? ' active' : '')}>
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <span>{label}</span>
    </a>
  );
}

export default function AdminShell({
  active,
  user,
  children,
}: {
  active: AdminNavKey;
  user: AdminUser;
  children: ReactNode;
}) {
  return (
    <>
      <div className="admin-shell">
        <aside className="sidebar" id="sidebar">
          <div className="sidebar-head">
            <a href={adminUrl('dashboard')}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ADMIN_LOGO_WHITE} alt="VALUNXT Capital" />
            </a>
          </div>

          <nav className="sidebar-nav">
            <div className="nav-label">Main</div>
            {NAV.map((item) => (
              <NavItem key={item[0]} item={item} active={active} />
            ))}

            <div className="nav-label" style={{ marginTop: 18 }}>
              Content &amp; SEO
            </div>
            {NAV_SEO.map((item) => (
              <NavItem key={item[0]} item={item} active={active} />
            ))}

            <div className="nav-label" style={{ marginTop: 18 }}>
              System
            </div>
            {NAV_SYSTEM.map((item) => (
              <NavItem key={item[0]} item={item} active={active} />
            ))}
          </nav>

          <div className="sidebar-foot">
            <div className="sidebar-card">
              <div className="t">Need help?</div>
              Reach the VALUNXT support desk for onboarding and account assistance.
            </div>
          </div>
        </aside>
        <div className="sidebar-backdrop" id="sidebarBackdrop" />

        <div className="main">
          <header className="topbar">
            <button className="menu-toggle" id="menuToggle" aria-label="Toggle menu">
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
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            <div className="search">
              <span className="s-icon">
                <svg
                  width="18"
                  height="18"
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
              </span>
              <input type="text" placeholder="Search clients, enquiries, reports…" aria-label="Search" />
              <span className="kbd">Ctrl K</span>
            </div>

            <div className="topbar-right">
              <div className="profile" id="profile">
                <button className="profile-btn" id="profileBtn" aria-haspopup="true" aria-expanded="false">
                  <span className="avatar">{userInitials(user.name)}</span>
                  <span className="profile-meta">
                    <span className="pn">{user.name}</span>
                    <span className="pr">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span>
                  </span>
                  <svg
                    className="chev"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className="profile-menu" role="menu">
                  <div className="pm-head">
                    <div className="n">{user.name}</div>
                    <div className="e">{user.email}</div>
                  </div>
                  <a href="#" role="menuitem">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    My Profile
                  </a>
                  <a href="#" role="menuitem">
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
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                    Account Settings
                  </a>
                  <a href={adminUrl('logout')} className="danger" role="menuitem">
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
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </header>

          <main className="content">{children}</main>
        </div>
      </div>

      <script src={ADMIN_JS} />
    </>
  );
}
