<?php
/**
 * VALUNXT Capital — canonical site facts.
 *
 * Single source of truth for the details that used to be retyped page by page
 * and drifted apart: the markets statement, the office list, the group company
 * names and URLs, and the enquiry addresses. Anything user-facing that states
 * one of these facts should read it from here rather than hard-coding it, so a
 * change lands everywhere at once.
 *
 * Loaded by config.php, so it is available to every template and partial.
 */

/* ---- Markets ------------------------------------------------------------- */

/**
 * The canonical markets statement, in the three grammatical shapes the copy
 * needs. Nothing else should invent a fourth phrasing.
 *
 *   'short'  — "India and the UAE"
 *   'long'   — "India, the UAE, and international markets"
 *   'cities' — "Dubai, Abu Dhabi, Mumbai, and Noida" (UAE offices lead, Dubai first)
 */
function vxn_markets($form = 'short') {
    static $m = array(
        'short'  => 'India and the UAE',
        'long'   => 'India, the UAE, and international markets',
        'cities' => 'Dubai, Abu Dhabi, Mumbai, and Noida',
    );
    return $m[$form] ?? $m['short'];
}

/* ---- Offices ------------------------------------------------------------- */

/**
 * Every VALUNXT office, in canonical order: Dubai first — it is the UAE base
 * and the office that answers the published telephone line — then the other
 * Emirates office in Abu Dhabi, then the India practices. Anything that lists
 * offices (Location page, footer) iterates this array, so this order is the
 * order the site shows everywhere.
 *
 * `phone` is the number answered at that office. Two lines are published: the
 * UAE line for Dubai and Abu Dhabi, and the India line for Mumbai and Noida.
 * Templates must never pair an office with another country's number — that
 * mismatch is what made the old Contact page misleading. An office with an
 * empty `phone` shows the e-mail route instead.
 * `tel` is the E.164 form used in tel: links.
 */
function vxn_offices() {
    static $o = null;
    if ($o === null) {
        $o = array(
            'dubai' => array(
                'city'    => 'Dubai',
                'note'    => 'UAE',
                'entity'  => 'Valunxt Corporate Services LLC',
                'address' => 'Office 806, Capital Golden Tower, Business Bay, Dubai, United Arab Emirates',
                'country' => 'United Arab Emirates',
                'phone'   => '+971 4 255 4683',
                'tel'     => '+97142554683',
                'email'   => 'advisory@valunxtcapital.com',
                'hours'   => 'Mon – Sat, 9:00 AM – 6:00 PM GST',
                'map'     => 'https://maps.google.com/?q=Capital+Golden+Tower,+Business+Bay,+Dubai,+United+Arab+Emirates',
            ),
            'abudhabi' => array(
                'city'    => 'Abu Dhabi',
                'note'    => 'UAE',
                'entity'  => 'Valunxt Corporate Services LLC',
                'address' => 'Dar Al Salam 02, Liwa Street, Corniche, Abu Dhabi, United Arab Emirates',
                'country' => 'United Arab Emirates',
                'phone'   => '+971 4 255 4683',
                'tel'     => '+97142554683',
                'email'   => 'advisory@valunxtcapital.com',
                'hours'   => 'Mon – Sat, 9:00 AM – 6:00 PM GST',
                'map'     => 'https://maps.google.com/?q=Dar+Al+Salam+02,+Liwa+Street,+Corniche,+Abu+Dhabi',
            ),
            'mumbai' => array(
                'city'    => 'Mumbai',
                'note'    => 'BKC',
                'entity'  => 'Valunxt Capital Advisory Services Private Limited',
                'address' => '11th Floor, Platina Tower, Plot C 59, Bandra Kurla Complex Rd, G Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India',
                'country' => 'India',
                'phone'   => '+91 120 718 5322',
                'tel'     => '+911207185322',
                'email'   => 'advisory@valunxtcapital.com',
                'hours'   => 'Mon – Sat, 9:00 AM – 6:00 PM IST',
                'map'     => 'https://maps.google.com/?q=Platina+Tower,+Bandra+Kurla+Complex+Rd,+G+Block,+Bandra+East,+Mumbai,+Maharashtra+400051',
            ),
            'noida' => array(
                'city'    => 'Noida',
                'note'    => 'Max Towers',
                'entity'  => 'Valunxt Group Business Services LLP',
                'address' => '16th and 17th Floor, Max Towers, Plot C-001A, Sector 16B, DND Flyway, Noida, Uttar Pradesh 201301, India',
                'country' => 'India',
                'phone'   => '+91 120 718 5322',
                'tel'     => '+911207185322',
                'email'   => 'advisory@valunxtcapital.com',
                'hours'   => 'Mon – Sat, 9:00 AM – 6:00 PM IST',
                'map'     => 'https://maps.google.com/?q=Max+Towers,+Sector+16B,+Noida',
            ),
        );
    }
    return $o;
}

/** A single office by key, or null. */
function vxn_office($key) {
    $o = vxn_offices();
    return $o[$key] ?? null;
}

/* ---- Enquiry addresses --------------------------------------------------- */

/**
 * advisory@valunxtcapital.com is the only mailbox the group actually
 * publishes, and it is where form-handler.php delivers. The Contact page used
 * to dress it up as three separate routes — "main", "careers" and "general" —
 * that all resolved here, which is worse than saying so plainly. So the site
 * now states one address once. If dedicated mailboxes are opened later, add
 * them here and the templates will pick them up.
 */
function vxn_email() {
    return 'advisory@valunxtcapital.com';
}

/* ---- Group companies ----------------------------------------------------- */

/**
 * The four operating companies, keyed by URL slug. `name` is the ONE approved
 * spelling — in particular "VALUNXT Corporate Services", never "Valunxt
 * Corporate Services LLC" or "VALUNXT Corporate Service" in running copy.
 *
 * `icon` names a line-icon token drawn by vxn_mega_icon() in the header menu,
 * the same way vxn_services() carries one — the Our Group panel reads as the
 * other two menus do rather than as a rail of wordmarks.
 */
function vxn_companies() {
    static $c = null;
    if ($c === null) {
        $c = array(
            'reliant-surveyors' => array(
                'name'       => 'Reliant Surveyors',
                'legal'      => 'Reliant Surveyors Company LLC',
                'discipline' => 'Valuation & advisory',
                'blurb'      => 'RICS-aligned property valuation and advisory for lenders, funds, developers and private owners.',
                'url'        => '/our-group/reliant-surveyors/',
                'site'       => 'https://reliantsurveyors.com',
                'logo'       => '/LOGO/reliant-surveyors.svg',
                'icon'       => 'scales',
                'img'        => '/assets/content/uploads/new-folder/reliant-surveyors-1.webp',
            ),
            'houzzhunt' => array(
                'name'       => 'HouzzHunt',
                'legal'      => 'HouzzHunt Real Estate',
                'discipline' => 'Real estate brokerage',
                'blurb'      => 'Residential and commercial transaction advisory, sourcing and portfolio execution.',
                'url'        => '/our-group/houzzhunt/',
                'site'       => 'https://houzzhunt.com',
                'logo'       => '/LOGO/houzzhunt.svg',
                'icon'       => 'building',
                'img'        => '/assets/content/uploads/new-folder/houzzhunt-1.webp',
            ),
            'houzzhunt-mortgage' => array(
                'name'       => 'HouzzHunt Mortgage',
                'legal'      => 'HouzzHunt Mortgage',
                'discipline' => 'Mortgage & debt advisory',
                'blurb'      => 'Whole-of-market mortgage structuring for resident, non-resident and corporate borrowers.',
                'url'        => '/our-group/houzzhunt-mortgage/',
                'site'       => 'https://houzzhuntmortgage.com',
                'logo'       => '/LOGO/houzzhunt-mortgage.svg',
                'icon'       => 'key',
                'img'        => '/assets/content/uploads/new-folder/houzzhunt-mortgage-1.webp',
            ),
            'valunxt-corporate-services' => array(
                'name'       => 'VALUNXT Corporate Services',
                'legal'      => 'Valunxt Corporate Services LLC',
                'discipline' => 'Corporate & structuring services',
                'blurb'      => 'Entity setup, licensing, compliance and holding-structure administration across the UAE.',
                'url'        => '/our-group/valunxt-corporate-services/',
                'site'       => 'https://valunxt.com',
                'logo'       => '/LOGO/valunxt-corporate.svg',
                'icon'       => 'ledger',
                'img'        => '/assets/content/uploads/new-folder/valunxt-corporate-services.webp',
            ),
        );
    }
    return $c;
}

function vxn_company($slug) {
    $c = vxn_companies();
    return $c[$slug] ?? null;
}

/* ---- Misc ---------------------------------------------------------------- */

/** Current year, for the footer copyright line. */
function vxn_year() {
    return date('Y');
}

/**
 * Reading time from a body of HTML, at 200 words per minute — the same figure
 * the blog layout uses, so report and article labels agree.
 */
function vxn_read_time($html, $extra_words = 0) {
    $w = str_word_count(strip_tags((string) $html)) + (int) $extra_words;
    return max(1, (int) round($w / 200)) . ' min read';
}
