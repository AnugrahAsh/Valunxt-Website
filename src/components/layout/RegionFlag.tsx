/**
 * Inline SVG flags.
 *
 * Emoji flags are not an option: Windows ships no flag glyphs, so 🇮🇳 renders
 * as the bare letters "IN" in Chrome on the very machines this site is being
 * built on. These are drawn instead, 20×14 with a hairline border so they read
 * correctly on the dark header.
 *
 * Port of vxn_region_flag() in includes/region.php — same geometry, same ids.
 */
import { vxnRegionFlagId } from '@/lib/region';

export default function RegionFlag({
  slug,
  className = 'vxn-region__flag',
}: {
  slug: string;
  className?: string;
}) {
  const id = vxnRegionFlagId(slug);

  const clip = (
    <defs>
      <clipPath id={id}>
        <rect width="20" height="14" rx="2" />
      </clipPath>
    </defs>
  );
  const edge = (
    <rect
      x=".25"
      y=".25"
      width="19.5"
      height="13.5"
      rx="1.75"
      fill="none"
      stroke="rgba(0,0,0,.22)"
      strokeWidth=".5"
    />
  );

  if (slug === 'en-ae') {
    return (
      <svg
        className={className || undefined}
        viewBox="0 0 20 14"
        width="20"
        height="14"
        aria-hidden="true"
        focusable="false"
      >
        {clip}
        <g clipPath={`url(#${id})`}>
          <rect width="20" height="4.667" fill="#00732F" />
          <rect y="4.667" width="20" height="4.666" fill="#fff" />
          <rect y="9.333" width="20" height="4.667" fill="#000" />
          <rect width="5.5" height="14" fill="#FF0000" />
        </g>
        {edge}
      </svg>
    );
  }

  // India
  return (
    <svg
      className={className || undefined}
      viewBox="0 0 20 14"
      width="20"
      height="14"
      aria-hidden="true"
      focusable="false"
    >
      {clip}
      <g clipPath={`url(#${id})`}>
        <rect width="20" height="4.667" fill="#FF9933" />
        <rect y="4.667" width="20" height="4.666" fill="#fff" />
        <rect y="9.333" width="20" height="4.667" fill="#138808" />
        <circle cx="10" cy="7" r="1.9" fill="none" stroke="#000080" strokeWidth=".5" />
        <circle cx="10" cy="7" r=".4" fill="#000080" />
        <g stroke="#000080" strokeWidth=".2">
          <path d="M10 5.1v3.8M8.1 7h3.8M8.66 5.66l2.68 2.68M11.34 5.66 8.66 8.34" />
        </g>
      </g>
      {edge}
    </svg>
  );
}
