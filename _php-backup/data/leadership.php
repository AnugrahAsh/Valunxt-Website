<?php
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
 * includes/partials/header-*.php (the About submenu) and sitemap.xml.
 *
 * Credentials must be ones the individual actually holds and can evidence:
 * MRICS/FRICS require current RICS membership, "RERA-approved valuer" requires
 * a live registration number, and so on.
 * ---------------------------------------------------------------------------
 *
 * Schema — one entry per person:
 *
 *   array(
 *     'name'        => 'Full Name',                       // required
 *     'role'        => 'Managing Director, Valuation',    // required
 *     'company'     => 'Reliant Surveyors',               // optional; a group company name
 *     'credentials' => array('MRICS', 'RICS Registered Valuer'), // optional
 *     'based'       => 'Mumbai',                          // optional; an office city
 *     'bio'         => 'Two or three sentences...',       // required
 *     'focus'       => array('Institutional valuation', 'Technical due diligence'),
 *     'photo'       => '/assets/content/uploads/team/name.webp', // optional
 *     'linkedin'    => 'https://www.linkedin.com/in/...',  // optional
 *   )
 */

return array(
    // Add leadership entries here. See the schema above.
);
