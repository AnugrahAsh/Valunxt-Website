/**
 * Leadership and senior advisers — /about/leadership/.
 *
 * ---------------------------------------------------------------------------
 * THIS FILE IS INTENTIONALLY EMPTY AND THE PAGE IS INTENTIONALLY NOT LIVE.
 *
 * The page template, styling and structured data are finished and working. The
 * only thing missing is the people, and those are facts about real individuals
 * — names, job titles, professional credentials and regulatory registrations.
 * Inventing them would put fabricated professional qualifications on a
 * regulated advisory firm's website, so they have been left for VALUNXT to
 * supply.
 *
 * While this array is empty, /about/leadership/ returns 404 and is absent from
 * the navigation and the sitemap. Add one or more entries below and the page
 * goes live immediately — no template changes needed. Then add it to
 * src/components/layout/MainNav.tsx (the About submenu) and sitemap.xml.
 *
 * Credentials must be ones the individual actually holds and can evidence:
 * MRICS/FRICS require current RICS membership, "RERA-approved valuer" requires
 * a live registration number, and so on.
 * ---------------------------------------------------------------------------
 */

export interface LeadershipEntry {
  /** Full name. */
  name: string;
  /** e.g. 'Managing Director, Valuation'. */
  role: string;
  /** A group company name, e.g. 'Reliant Surveyors'. */
  company?: string;
  /** e.g. ['MRICS', 'RICS Registered Valuer'] */
  credentials?: string[];
  /** An office city. */
  based?: string;
  /** Two or three sentences. */
  bio: string;
  focus?: string[];
  /** e.g. '/assets/content/uploads/team/name.webp' */
  photo?: string;
  linkedin?: string;
}

const LEADERSHIP: LeadershipEntry[] = [
  // Add leadership entries here. See the interface above.
];

export default LEADERSHIP;
