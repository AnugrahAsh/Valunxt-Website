/**
 * Central catalog of published /blogs/ posts (slug => meta).
 *
 * Used by BlogArticleSection to build the article metadata and the "Related
 * Insights" sidebar, and by the /blogs/ listing for the card dates. Order =
 * display order, newest first.
 *
 * `date`/`date_iso` live here as well as on the post itself so the listing and
 * the article can never disagree — every card on /blogs/ used to be stamped
 * "July 11, 2026" regardless of the post it linked to.
 *
 * Port of includes/blog-catalog.php.
 */

export interface BlogCatalogEntry {
  title: string;
  img: string;
  category: string;
  date: string;
  date_iso: string;
}

const BLOG_CATALOG: Record<string, BlogCatalogEntry> = {
  'how-high-net-worth-investors-build-wealth-through-real-estate': {
    title: 'How High-Net-Worth Investors Build Wealth Through Real Estate',
    img: '/assets/content/uploads/blogs/blog-1.webp',
    category: 'Real Estate Wealth',
    date: 'July 28, 2026',
    date_iso: '2026-07-28',
  },
  'capital-planning-for-large-property-developments': {
    title: 'Capital Planning for Large Property Developments',
    img: '/assets/content/uploads/blogs/blog-2.webp',
    category: 'Capital Advisory',
    date: 'July 9, 2026',
    date_iso: '2026-07-09',
  },
  'why-market-intelligence-matters-before-every-property-investment': {
    title: 'Why Market Intelligence Matters Before Every Property Investment',
    img: '/assets/content/uploads/blogs/blog-3.webp',
    category: 'Research & Intelligence',
    date: 'June 18, 2026',
    date_iso: '2026-06-18',
  },
  'the-future-of-automated-valuation-models-avms': {
    title: 'The Future of Automated Valuation Models (AVMs)',
    img: '/assets/content/uploads/blogs/blog-4.webp',
    category: 'Technology & AI',
    date: 'May 26, 2026',
    date_iso: '2026-05-26',
  },
};

export default BLOG_CATALOG;
