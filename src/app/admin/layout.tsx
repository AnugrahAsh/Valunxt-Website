/**
 * The admin panel's own document shell.
 *
 * A separate root layout from the public site: the panel has its own
 * stylesheet, its own fonts and is never indexed. Nothing from the site's
 * Elementor cascade is loaded here.
 */
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ADMIN_CSS, ADMIN_FAVICON } from '@/lib/admin/config';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
  title: 'VALUNXT Capital Admin',
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="icon" href={ADMIN_FAVICON} sizes="32x32" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=DM+Mono:wght@400;500&family=Forum&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href={ADMIN_CSS} />
      {children}
    </>
  );
}
