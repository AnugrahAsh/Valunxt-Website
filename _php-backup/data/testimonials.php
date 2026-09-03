<?php
/**
 * Client testimonials — rendered as a section on /clients/.
 *
 * ---------------------------------------------------------------------------
 * THIS FILE IS INTENTIONALLY EMPTY.
 *
 * A testimonial is a statement attributed to a real person about a real
 * engagement. Writing one would be fabricating a client endorsement, which is
 * both dishonest and, for a regulated advisory firm, a genuine liability. So
 * the section is built and ready, and the quotes are left to VALUNXT.
 *
 * While this array is empty the testimonials section does not render at all —
 * /clients/ simply shows what it shows today. Add one entry and the section
 * appears, styled and marked up with Review structured data.
 *
 * Before publishing any quote, get the individual's written consent to be
 * named and quoted. Anonymised attribution ("Head of Real Estate, UAE family
 * office") is fine and still needs consent.
 * ---------------------------------------------------------------------------
 *
 * Schema — one entry per testimonial:
 *
 *   array(
 *     'quote'   => 'What they said, verbatim. Do not tidy it up.',  // required
 *     'name'    => 'Full Name' | '',        // '' for anonymised attribution
 *     'role'    => 'Head of Real Estate',   // required
 *     'org'     => 'Family office, Dubai',  // required; may be a description
 *     'service' => 'Research & Intelligence',  // optional; the service line
 *     'consent' => 'Named with written consent' | 'Published anonymised',
 *   )
 *
 * The companion question — client logos — has the same constraint: a logo is a
 * claim of a commercial relationship and needs the client's permission to
 * display. The four logos already on /clients/ and /services/ are VALUNXT's
 * own group companies, correctly labelled as such, not client logos.
 */

return array(
    // Add testimonials here. See the schema above.
);
