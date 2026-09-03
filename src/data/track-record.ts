/**
 * Track record — /track-record/.
 *
 * ---------------------------------------------------------------------------
 * THIS FILE IS INTENTIONALLY EMPTY AND THE PAGE IS INTENTIONALLY NOT LIVE.
 *
 * The site makes three quantified claims:
 *
 *   • "more than 10,000 valuations delivered"   (/our-group/, Reliant)
 *   • "across USD 150+ billion of assets"       (/our-group/, Reliant)
 *   • "500+ relationships"                      (/network/, community)
 *
 * A track-record page exists to substantiate those numbers. Substantiation
 * means stating what was counted, by which entity, over what period — and
 * showing engagements that stand behind it. None of that is derivable from the
 * codebase, and inventing client engagements would be fabricating a commercial
 * record, so this file ships empty.
 *
 * While `metrics` is empty, /track-record/ returns 404 and is absent from the
 * navigation and the sitemap. Populate `metrics` and the page goes live;
 * populate `cases` as well and the case-study section appears.
 *
 * Until this page is live, the three claims above carry a "cumulative to date"
 * qualifier at source rather than being presented bare.
 * ---------------------------------------------------------------------------
 */

/**
 * The headline figures, each with the basis on which it is stated. The `basis`
 * string is rendered on the page; it is not optional, because a figure without
 * a basis is the problem this page exists to solve.
 */
export interface TrackMetric {
  /** e.g. '10,000+' */
  value: string;
  /** e.g. 'Valuations delivered' */
  label: string;
  /**
   * e.g. 'Reliant Surveyors Company LLC, cumulative from incorporation to
   * 31 March 2026. Counts completed valuation instructions; excludes desktop
   * screening.'
   */
  basis: string;
}

/**
 * Engagements you are cleared to publish. Where a client cannot be named,
 * describe them by type ("a UAE-based family office") and say so; an anonymised
 * case study with a stated scope is credible, an unattributed superlative is
 * not.
 */
export interface TrackCase {
  /** e.g. 'Anonymised — listed developer, MMR' */
  client: string;
  /** Matches an /industries/ sector. */
  sector: string;
  market: string;
  year: string;
  /** Matches a service line. */
  service: string;
  /** What the client needed to decide. */
  challenge: string;
  /** What we actually did. */
  approach: string;
  /** What resulted. Use figures only where they can be evidenced. */
  outcome: string;
  consent?: 'Named with client consent' | 'Published anonymised';
}

export interface TrackRecord {
  metrics: TrackMetric[];
  cases: TrackCase[];
}

const TRACK_RECORD: TrackRecord = {
  metrics: [
    // Add the headline figures and their basis here.
  ],
  cases: [
    // Add published engagements here.
  ],
};

export default TRACK_RECORD;
