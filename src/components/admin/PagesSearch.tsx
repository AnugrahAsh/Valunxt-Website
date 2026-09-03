'use client';

/**
 * The Pages & SEO search box.
 *
 * Submits itself shortly after typing stops, so results stay in step without
 * needing the Enter key. Searching always returns to page 1 because the form
 * carries no `p` field.
 *
 * Port of the inline script at the foot of admin/pages.php.
 */
import { useEffect, useRef } from 'react';

export default function PagesSearch({ action, value }: { action: string; value: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Keep the caret in the box after a search reloads the page.
    const el = inputRef.current;
    if (el && el.value !== '') {
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    }
  }, []);

  return (
    <form method="get" action={action} className="enq-search">
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
      <input
        ref={inputRef}
        type="text"
        name="q"
        id="pageFilter"
        defaultValue={value}
        placeholder="Search by title or slug…"
        aria-label="Search pages"
        onChange={(e) => {
          const form = e.currentTarget.form;
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => form?.requestSubmit(), 450);
        }}
      />
      {value !== '' ? (
        <a href={action} className="clear-search" title="Clear search" aria-label="Clear search">
          ×
        </a>
      ) : null}
    </form>
  );
}
