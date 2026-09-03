Region-specific artwork
=======================

Anything under here overrides the shared picture of the same name for one
country edition. The templates ask for images through rimg():

    rimg('homepage/hero.webp')

which resolves to, in order:

    assets/content/uploads/regions/<region>/homepage/hero.webp   <- if it exists
    assets/content/uploads/homepage/hero.webp                    <- otherwise

So to give the UAE home its own hero, drop a file at

    assets/content/uploads/regions/en-ae/homepage/hero.webp

and nothing in the markup changes. Same for the hero video
(regions/en-ae/video/video.mp4) and every other /homepage/ image the two home
pages use:

    hero.webp                       abstract-1.webp
    building-real-esate.webp        contact-banner.png
    capital-advisory.webp           research-and-intellegance.webp
    research-and-investment-advisory.webp
    technology-and-ai.webp          Integrated-Platform.webp
    Core-Markets.webp               Offices.webp
    Core-Verticals .webp            industry-1..5.webp

Keep the filename identical to the shared one — the override is matched by
name. Regions: en-in (India), en-ae (UAE).
