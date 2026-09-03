<?php
/**
 * VALUNXT Capital — multi-region (country edition) support.
 *
 * The site is published as one edition per market, each mounted on its own URL
 * prefix:
 *
 *     /en-in/…   India   (the original site — unchanged content)
 *     /en-ae/…   UAE
 *
 * Only the pages that genuinely differ per market need their own file. The
 * home page does: /en-in/index.php and /en-ae/index.php are separate templates
 * so each market gets its own hero, copy and imagery. Everything else is still
 * a single shared page — .htaccess falls a request for /en-ae/services/ back to
 * /services/ when no UAE-specific directory exists, and REGION still says
 * "en-ae" because detection reads the URL, not the file that answered it.
 *
 * So: to give any page a market-specific version, create the directory under
 * the region folder (e.g. /en-ae/services/index.php). Until then the shared
 * page answers, region-aware.
 *
 * Loaded by config.php, so REGION, RBASE and the helpers below are available to
 * every template and partial.
 */

/* ---- The registry --------------------------------------------------------- */

/** The market shown when nothing in the URL, the cookie or the request says otherwise. */
function vxn_region_default() { return 'en-in'; }

/**
 * Every published edition, in menu order. `offices` keys into vxn_offices() so
 * a region never has to restate an address, and `home` is the directory that
 * holds that market's home template.
 */
function vxn_regions() {
    static $r = null;
    if ($r === null) {
        $r = array(
            'en-in' => array(
                'slug'      => 'en-in',
                'name'      => 'India',
                'code'      => 'IN',
                'lang'      => 'en-IN',
                'currency'  => 'INR',
                'symbol'    => '₹',
                'tz'        => 'IST',
                'offices'   => array('mumbai', 'noida'),
                'markets'   => 'India',
                'markets_long' => 'India, the UAE, and international markets',
                'cities'    => 'Mumbai and Noida',
                'entity'    => 'Valunxt Capital Advisory Services Private Limited',
                'phone'     => '+91 120 718 5322',
                'tel'       => '+911207185322',
                'hours'     => 'Mon – Sat, 9:00 AM – 6:00 PM IST',
            ),
            'en-ae' => array(
                'slug'      => 'en-ae',
                'name'      => 'United Arab Emirates',
                'short'     => 'UAE',
                'code'      => 'AE',
                'lang'      => 'en-AE',
                'currency'  => 'AED',
                'symbol'    => 'AED',
                'tz'        => 'GST',
                'offices'   => array('dubai', 'abudhabi'),
                'markets'   => 'the UAE',
                'markets_long' => 'the UAE, India, and international markets',
                'cities'    => 'Dubai and Abu Dhabi',
                'entity'    => 'Valunxt Corporate Services LLC',
                'phone'     => '+971 4 255 4683',
                'tel'       => '+97142554683',
                'hours'     => 'Mon – Sat, 9:00 AM – 6:00 PM GST',
            ),
        );
    }
    return $r;
}

/** True when $slug is a published edition. */
function vxn_region_exists($slug) {
    return is_string($slug) && isset(vxn_regions()[$slug]);
}

/* ---- Detection ------------------------------------------------------------ */

/**
 * The request path with the mount point (BASE) removed, always with a leading
 * slash: "/valunxt-capital/en-ae/services/" → "/en-ae/services/".
 */
function vxn_request_path() {
    static $p = null;
    if ($p === null) {
        $uri  = (string) ($_SERVER['REQUEST_URI'] ?? '/');
        $uri  = explode('?', $uri, 2)[0];
        $base = defined('BASE') ? BASE : '';
        if ($base !== '' && strpos($uri, $base) === 0) $uri = substr($uri, strlen($base));
        $p = '/' . ltrim(rawurldecode($uri), '/');
    }
    return $p;
}

/**
 * The region named by the URL, or '' when the URL carries no prefix. This is
 * what makes a shared page region-aware: /en-ae/services/ is answered by
 * /services/index.php, but the URL still says which market the visitor is in.
 */
function vxn_region_in_url() {
    static $r = null;
    if ($r === null) {
        $first = strtok(ltrim(vxn_request_path(), '/'), '/');
        $r = vxn_region_exists($first) ? $first : '';
    }
    return $r;
}

/** The path inside the region: "/en-ae/services/" → "/services/". */
function vxn_region_path() {
    $p = vxn_request_path();
    $r = vxn_region_in_url();
    if ($r === '') return $p;
    $p = substr($p, strlen($r) + 1);
    return $p === '' ? '/' : $p;
}

/**
 * Resolve the market for this request: the URL wins, then the visitor's last
 * choice (cookie), then the country the host tells us about, then the default.
 */
function vxn_region_detect() {
    $url = vxn_region_in_url();
    if ($url !== '') return $url;

    $cookie = $_COOKIE['vxn_region'] ?? '';
    if (vxn_region_exists($cookie)) return $cookie;

    // Set by Cloudflare / some hosts. Harmless when absent.
    $cc = strtoupper((string) ($_SERVER['HTTP_CF_IPCOUNTRY'] ?? ''));
    foreach (vxn_regions() as $slug => $r) {
        if ($cc !== '' && $cc === $r['code']) return $slug;
    }
    return vxn_region_default();
}

/** The current market's slug. */
function vxn_region() {
    return defined('REGION') ? REGION : vxn_region_detect();
}

/** A region record — the current one by default. */
function vxn_region_data($slug = null) {
    $slug = $slug ?: vxn_region();
    $all  = vxn_regions();
    return $all[$slug] ?? $all[vxn_region_default()];
}

/** The short label for the switcher ("India", "UAE"). */
function vxn_region_label($slug = null) {
    $r = vxn_region_data($slug);
    return $r['short'] ?? $r['name'];
}

/* ---- URLs ----------------------------------------------------------------- */

/**
 * A region-scoped URL. rurl('/services/') → "/valunxt-capital/en-ae/services/".
 * Use this instead of BASE for any link that should keep the visitor in their
 * market. (Links written as BASE . '/…' in page bodies are rewritten to the
 * current region on the way out — see vxn_region_localise_links().)
 */
function rurl($path = '/') {
    $path = (string) $path;
    if ($path === '') $path = '/';
    if ($path[0] !== '/') $path = '/' . $path;
    return BASE . '/' . vxn_region() . $path;
}

/** The current page as it is addressed in another market. */
function rswap($slug) {
    if (!vxn_region_exists($slug)) $slug = vxn_region_default();
    $path = vxn_region_path();
    $qs   = (string) ($_SERVER['QUERY_STRING'] ?? '');
    return BASE . '/' . $slug . $path . ($qs !== '' ? '?' . $qs : '');
}

/**
 * A region-specific asset with a shared fallback.
 *
 *   rimg('homepage/hero.webp')
 *     → /assets/content/uploads/regions/en-ae/homepage/hero.webp   (if present)
 *     → /assets/content/uploads/homepage/hero.webp                 (otherwise)
 *
 * Drop a file into assets/content/uploads/regions/<slug>/ and that market picks
 * it up with no template change.
 */
function rimg($relative, $slug = null) {
    $relative = ltrim((string) $relative, '/');
    $slug     = $slug ?: vxn_region();
    $root     = dirname(__DIR__);
    $override = '/assets/content/uploads/regions/' . $slug . '/' . $relative;
    if (is_file($root . $override)) return BASE . $override;
    return BASE . '/assets/content/uploads/' . $relative;
}

/* ---- Region facts --------------------------------------------------------- */

/** The offices in this market, in canonical order. */
function vxn_region_offices($slug = null) {
    $r   = vxn_region_data($slug);
    $all = vxn_offices();
    $out = array();
    foreach ($r['offices'] as $k) {
        if (isset($all[$k])) $out[$k] = $all[$k];
    }
    return $out;
}

/** The telephone line answered in this market. */
function vxn_region_phone($slug = null) {
    $r = vxn_region_data($slug);
    return $r['phone'];
}

/* ---- The flags ------------------------------------------------------------ */

/**
 * Inline SVG flags. Emoji flags are not an option: Windows ships no flag
 * glyphs, so 🇮🇳 renders as the bare letters "IN" in Chrome on the very
 * machines this site is being built on. These are drawn instead, 20×14 with a
 * hairline border so they read correctly on the dark header.
 */
function vxn_region_flag($slug, $class = 'vxn-region__flag') {
    $c   = $class !== '' ? ' class="' . h($class) . '"' : '';
    $id  = 'vxnflag-' . preg_replace('~[^a-z0-9]+~i', '', (string) $slug);
    $clip = '<defs><clipPath id="' . $id . '"><rect width="20" height="14" rx="2"/></clipPath></defs>';
    $edge = '<rect x=".25" y=".25" width="19.5" height="13.5" rx="1.75" fill="none" stroke="rgba(0,0,0,.22)" stroke-width=".5"/>';

    if ($slug === 'en-ae') {
        return '<svg' . $c . ' viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" focusable="false">'
             . $clip
             . '<g clip-path="url(#' . $id . ')">'
             . '<rect width="20" height="4.667" fill="#00732F"/>'
             . '<rect y="4.667" width="20" height="4.666" fill="#fff"/>'
             . '<rect y="9.333" width="20" height="4.667" fill="#000"/>'
             . '<rect width="5.5" height="14" fill="#FF0000"/>'
             . '</g>' . $edge . '</svg>';
    }

    // India
    return '<svg' . $c . ' viewBox="0 0 20 14" width="20" height="14" aria-hidden="true" focusable="false">'
         . $clip
         . '<g clip-path="url(#' . $id . ')">'
         . '<rect width="20" height="4.667" fill="#FF9933"/>'
         . '<rect y="4.667" width="20" height="4.666" fill="#fff"/>'
         . '<rect y="9.333" width="20" height="4.667" fill="#138808"/>'
         . '<circle cx="10" cy="7" r="1.9" fill="none" stroke="#000080" stroke-width=".5"/>'
         . '<circle cx="10" cy="7" r=".4" fill="#000080"/>'
         . '<g stroke="#000080" stroke-width=".2">'
         . '<path d="M10 5.1v3.8M8.1 7h3.8M8.66 5.66l2.68 2.68M11.34 5.66 8.66 8.34"/>'
         . '</g>'
         . '</g>' . $edge . '</svg>';
}

/* ---- Keeping the visitor in their market ---------------------------------- */

/**
 * Rewrite this page's internal links so they stay inside the current market.
 *
 * The 97 shared page templates all link with BASE . '/…', written long before
 * the site had editions. Rather than touch every one of them, the finished HTML
 * is filtered on the way out: an internal page link picks up the region prefix,
 * while assets, the admin panel, files (anything with an extension) and links
 * that already name a region are left exactly as they are.
 *
 * Only runs when the URL itself carries a region prefix, so a direct hit on an
 * unprefixed URL behaves exactly as it did before editions existed.
 */
function vxn_region_localise_links($html) {
    $base   = defined('BASE') ? BASE : '';
    $region = vxn_region();
    $skip   = array('assets', 'LOGO', 'icons', 'admin', 'data', '_retired', '_wp-source', 'wp-content', 'wp-includes');
    foreach (vxn_regions() as $slug => $_) $skip[] = $slug;

    $pattern = '~href="' . preg_quote($base, '~') . '(/[^"]*)?"~i';

    return preg_replace_callback($pattern, function ($m) use ($base, $region, $skip) {
        $p = $m[1] ?? '';

        // href="<BASE>" / href="<BASE>/" — the site root, i.e. the market home.
        if ($p === '' || $p === '/') {
            if ($base === '') return $m[0];           // don't touch href="" on a root-mounted site
            return 'href="' . $base . '/' . $region . '/"';
        }

        $path   = $p;
        $suffix = '';
        if (($cut = strcspn($p, '?#')) < strlen($p)) {
            $path   = substr($p, 0, $cut);
            $suffix = substr($p, $cut);
        }

        $first = strtok(ltrim($path, '/'), '/');
        if ($first === false || in_array($first, $skip, true)) return $m[0];

        // A file (form-handler.php, sitemap.xml, a download) is not a page.
        if (strpos(basename($path), '.') !== false) return $m[0];

        return 'href="' . $base . '/' . $region . $path . $suffix . '"';
    }, $html);
}

/* ---- Services per market -------------------------------------------------- */

/**
 * The services a market leads with — the one list behind the UAE home hero, the
 * services accordion below it, and the Services menu in the header. They were
 * written out separately at first and immediately started to disagree, which is
 * exactly the drift this file exists to prevent.
 *
 * Each entry carries what its three consumers need:
 *   title / short   the full name, and the short form for menus and hero tabs
 *   href            relative to the region root; pass through rurl()
 *   desc            the one-line blurb (accordion, menu)
 *   icon            line-icon token drawn by vxn_mega_icon() in the mega menu
 *   img             card image (accordion, menu cards)
 *   banner          wide hero banner, with a stand-in for artwork not yet supplied
 *   headline / lede the hero copy for that service
 *   hero            set false to keep a service out of the home banner while it
 *                   still appears in the accordion and the Services menu
 *
 * India keeps the group's four verticals, unchanged.
 */
function vxn_services($slug = null) {
    $slug = $slug ?: vxn_region();

    if ($slug === 'en-ae') {
        return array(
            array(
                'title'    => 'Accounting and Tax Services',
                'icon'     => 'ledger',
                'short'    => 'Accounting &amp; Tax',
                'href'     => '/services/',
                'desc'     => 'Bookkeeping, statutory accounting, VAT and corporate tax &mdash; compliance handled end to end for UAE entities.',
                'img'      => '/assets/content/uploads/services/accounting-and-tax-services.webp',
                'banner'   => array('banners/uae-slider-5.webp', 'banners/uae-slider-3.webp'),
                'headline' => 'Accounting that Inspires Confident Decisions.',
                'lede'     => 'Bookkeeping, statutory accounts, VAT and corporate tax &mdash; numbers you can act on without second-guessing, at a fee agreed before work begins.',
            ),
            array(
                'title'    => 'Real Estate Transactions',
                'icon'     => 'building',
                'short'    => 'Real Estate',
                'href'     => '/services/real-estate-investment-advisory/',
                'desc'     => 'Sourcing, acquisition and disposal across residential and commercial property, with independent advice at every step.',
                'img'      => '/assets/content/uploads/services/real-estate-transactions.webp',
                'banner'   => array('banners/uae-slider-1.webp'),
                'headline' => 'Property Decisions, Independently Advised.',
                'lede'     => 'Sourcing, acquisition and disposal across residential and commercial property &mdash; advice with no inventory behind it, in Dubai, Abu Dhabi and beyond.',
            ),
            array(
                'title'    => 'Mortgages Services',
                'icon'     => 'key',
                'short'    => 'Mortgages',
                'href'     => '/services/capital-advisory/',
                'desc'     => 'Whole-of-market mortgage structuring for resident, non-resident and corporate borrowers.',
                'img'      => '/assets/content/uploads/services/mortgage-services.webp',
                'banner'   => array('banners/uae-slider-2.webp'),
                'headline' => 'Funding Structured Around Your Position.',
                'lede'     => 'Whole-of-market mortgage and loan structuring for resident, non-resident and corporate borrowers &mdash; terms negotiated on the evidence.',
            ),
            array(
                'title'    => 'Valuation and Advisory',
                'icon'     => 'scales',
                'short'    => 'Valuation',
                'hero'     => false,
                'href'     => '/services/',
                'desc'     => 'RICS-aligned property valuation and advisory for lenders, funds, developers and private owners.',
                'img'      => '/assets/content/uploads/services/valuation-and-advisory.webp',
                'banner'   => array('banners/uae-slider-6.webp', 'banners/uae-slider-4.webp'),
                'headline' => 'Independent Valuations. Defensible Decisions.',
                'lede'     => 'RICS-regulated property, business and plant valuation through group firm Reliant Surveyors &mdash; method documented to withstand scrutiny, not just review.',
            ),
            array(
                'title'    => 'Research &amp; Intelligence',
                'icon'     => 'chart',
                'short'    => 'Research',
                'hero'     => false,
                'href'     => '/services/research-intelligence/',
                'desc'     => 'Independent, data-driven research and valuation intelligence for clearer, more confident investment decisions.',
                'img'      => '/assets/content/uploads/services/research-and-intelligences.webp',
                'banner'   => array('banners/uae-slider-3.webp'),
                'headline' => 'Evidence Before the Commitment.',
                'lede'     => 'Feasibility studies, highest-and-best-use analysis and market research &mdash; verified data and sound method, before the decision rather than after it.',
            ),
            array(
                'title'    => 'Technology, Data &amp; AI',
                'icon'     => 'chip',
                'short'    => 'Technology &amp; AI',
                'href'     => '/services/technology-ai/',
                'desc'     => 'Intelligent platforms, analytics and AI systems that turn market data into better decisions.',
                'img'      => '/assets/content/uploads/services/technology-data-ai.webp',
                'banner'   => array('banners/uae-slider-4.webp'),
                'headline' => 'Technology that Turns Finance into Advantage.',
                'lede'     => 'Digital transformation, enterprise and cloud systems, dashboards and AI tooling that make finance measurable and repeatable.',
            ),
        );
    }

    /* India — the group's four verticals. */
    return array(
        array(
            'title' => 'Real Estate Investment Advisory',
            'icon'  => 'building',
            'short' => 'Real Estate Investment Advisory',
            'href'  => '/services/real-estate-investment-advisory/',
            'desc'  => 'Disciplined portfolio strategy and risk analysis to create, preserve, and grow real estate wealth.',
            'img'   => '/assets/content/uploads/new-folder/real-estate-wealth-advisory-1.webp',
        ),
        array(
            'title' => 'Capital Advisory',
            'icon'  => 'handshake',
            'short' => 'Capital Advisory',
            'href'  => '/services/capital-advisory/',
            'desc'  => 'Independent capital structuring &mdash; project funding, debt advisory, equity, joint ventures and syndication.',
            'img'   => '/assets/content/uploads/banners/capital-advisory.webp',
        ),
        array(
            'title' => 'Research &amp; Intelligence',
            'icon'  => 'chart',
            'short' => 'Research &amp; Intelligence',
            'href'  => '/services/research-intelligence/',
            'desc'  => 'Independent, data-driven research and valuation intelligence for clearer investment decisions.',
            'img'   => '/assets/content/uploads/homepage/research-and-intellegance.webp',
        ),
        array(
            'title' => 'Technology &amp; AI',
            'icon'  => 'chip',
            'short' => 'Technology &amp; AI',
            'href'  => '/services/technology-ai/',
            'desc'  => 'Intelligent platforms, analytics and AI systems that turn market data into better decisions.',
            'img'   => '/assets/content/uploads/homepage/technology-and-ai.webp',
        ),
    );
}

/**
 * rimg() over a list of candidates: the first file that actually exists wins.
 *
 * Lets a template name artwork that has not been supplied yet — drop
 * banners/uae-slider-5.webp in and it takes over from the stand-in with no
 * template change, the same way rimg() handles regional overrides.
 */
function rimg_first($candidates) {
    $root = dirname(__DIR__);
    $slug = vxn_region();
    foreach ((array) $candidates as $rel) {
        $rel = ltrim((string) $rel, '/');
        if ($rel === '') continue;
        if (is_file($root . '/assets/content/uploads/regions/' . $slug . '/' . $rel)) {
            return BASE . '/assets/content/uploads/regions/' . $slug . '/' . $rel;
        }
        if (is_file($root . '/assets/content/uploads/' . $rel)) {
            return BASE . '/assets/content/uploads/' . $rel;
        }
    }
    $first = (array) $candidates;
    return rimg($first ? (string) reset($first) : '');
}
