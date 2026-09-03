<?php
/**
 * Track record — /track-record/.
 *
 * ---------------------------------------------------------------------------
 * THIS FILE IS INTENTIONALLY EMPTY AND THE PAGE IS INTENTIONALLY NOT LIVE.
 *
 * The site makes three quantified claims:
 *
 *   • "more than 10,000 valuations delivered"   (our-group/index.php, Reliant)
 *   • "across USD 150+ billion of assets"       (our-group/index.php, Reliant)
 *   • "500+ relationships"                      (network/index.php, community)
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
 *
 * `metrics` — the headline figures, each with the basis on which it is stated.
 * The `basis` string is rendered on the page; it is not optional, because a
 * figure without a basis is the problem this page exists to solve.
 *
 *   array(
 *     'value' => '10,000+',
 *     'label' => 'Valuations delivered',
 *     'basis' => 'Reliant Surveyors Company LLC, cumulative from incorporation
 *                 to 31 March 2026. Counts completed valuation instructions;
 *                 excludes desktop screening.',
 *   )
 *
 * `cases` — engagements you are cleared to publish. Where a client cannot be
 * named, describe them by type ("a UAE-based family office") and say so; an
 * anonymised case study with a stated scope is credible, an unattributed
 * superlative is not.
 *
 *   array(
 *     'client'    => 'Anonymised — listed developer, MMR',
 *     'sector'    => 'Warehousing',            // matches an /industries/ sector
 *     'market'    => 'Mumbai',
 *     'year'      => '2025',
 *     'service'   => 'Capital Advisory',       // matches a service line
 *     'challenge' => 'What the client needed to decide.',
 *     'approach'  => 'What we actually did.',
 *     'outcome'   => 'What resulted. Use figures only where they can be evidenced.',
 *     'consent'   => 'Named with client consent' | 'Published anonymised',
 *   )
 */

return array(
    'metrics' => array(
        // Add the headline figures and their basis here.
    ),
    'cases' => array(
        // Add published engagements here.
    ),
);
