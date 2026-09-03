'use client';

/**
 * Client-side filter for the enquiries table.
 *
 * Port of the inline script at the foot of admin/enquiries.php: it hides rows
 * whose `data-search` attribute does not contain the query, and shows the
 * "no matches" panel when nothing is left.
 */
import { useCallback } from 'react';

export default function EnquiryFilter() {
  const onInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value.trim().toLowerCase();
    const rows = Array.from(document.querySelectorAll<HTMLTableRowElement>('#enqTable tbody tr'));
    let shown = 0;
    for (const tr of rows) {
      const hit = !q || (tr.getAttribute('data-search') ?? '').includes(q);
      tr.style.display = hit ? '' : 'none';
      if (hit) shown++;
    }
    const noMatch = document.getElementById('noMatch');
    if (noMatch) noMatch.style.display = shown ? 'none' : '';
  }, []);

  return (
    <input
      type="text"
      id="enqFilter"
      placeholder="Filter by name, email, company…"
      aria-label="Filter enquiries"
      onChange={onInput}
    />
  );
}
