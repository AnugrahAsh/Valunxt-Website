/**
 * The "x" of the VALUNXT wordmark, as a reusable shape.
 *
 * The four paths below are lifted verbatim from the wordmark outline already
 * shipped in the intro preloader (see LOGO_PATHS in
 * components/layout/Preloader.tsx, indices 4–7 — the glyphs between the "n"
 * and the "t"). Taking them from there rather than redrawing an X means the
 * mark on these cards is the *same* geometry as the logo: the same asymmetric
 * strokes, the same chamfered ends, the same optical weight. A generic X — two
 * crossed bars, or a letter set in a font — reads as a decoration; this reads
 * as the brand.
 *
 * Two ways to use it:
 *
 *   <LogoXWindow src="…" alt="" />   an image seen *through* the x
 *   <LogoXGlyph />                   the x as flat artwork (currentColor)
 *
 * The window form is what the reference designs use: a gradient card with a
 * photograph showing through the letterform. It is built on an SVG <clipPath>
 * with `clipPathUnits="objectBoundingBox"`, so one definition scales to any
 * card size without re-deriving coordinates — the alternative, a CSS
 * `clip-path` with a fixed viewBox, needs the element's aspect ratio baked in.
 */

/** Untransformed glyph outlines, in the wordmark's own 0 0 420 82 space. */
const X_PATHS = [
  'M327.307 59.7037L314.388 76.9454L314.275 77.0762L314.181 77.2678C314.027 77.5434 312.142 80.6778 307.232 80.6778C307.138 80.6778 307.044 80.6778 306.951 80.6731C302.993 80.5797 297.76 80.561 293.905 80.5563L320.324 45.7926L327.307 59.7037Z',
  'M329.619 56.7187L324.517 63.4127C323.593 55.4061 318.88 50.0061 318.106 49.17L293.792 17.8864C296.118 17.8957 307.251 17.891 308.428 17.8677H308.512C311.044 17.8677 313.29 19.881 313.722 20.2921L326.228 36.7537C335.396 47.8013 330.238 55.6163 329.619 56.7187Z',
  'M364.099 20.1987C364.099 20.1987 357.018 28.8592 351.728 35.6466L351.705 35.6793L346.476 42.7516C346.397 42.8918 346.312 43.0319 346.209 43.1627C346.111 43.2982 346.003 43.429 345.886 43.5457C345.712 43.7279 345.515 43.9007 345.304 44.0455C344.652 44.508 343.855 44.7789 342.997 44.7789C341.918 44.7789 340.938 44.3539 340.221 43.6625L339.213 42.0649L333.759 33.395L340.559 24.1692L343.499 20.2547C345.234 17.8723 346.716 17.9191 346.716 17.9191L363.658 17.849C366.598 17.564 364.089 20.208 364.089 20.208L364.099 20.1987Z',
  'M364.305 78.0292C364.305 78.0292 357.224 69.3686 351.935 62.5812L351.911 62.5485L346.683 55.4762C346.603 55.3361 346.519 55.1959 346.415 55.0651C346.317 54.9297 346.209 54.7989 346.092 54.6821C345.918 54.4999 345.721 54.3271 345.51 54.1822C344.859 53.7198 344.061 53.4488 343.203 53.4488C342.125 53.4488 341.145 53.8739 340.427 54.5653L339.419 56.1629L333.965 64.8328L340.765 74.0586L343.705 77.9731C345.44 80.3555 346.922 80.3087 346.922 80.3087L363.864 80.3788C366.804 80.6638 364.296 78.0198 364.296 78.0198L364.305 78.0292Z',
];

/**
 * The same four outlines with every coordinate mapped into the 0–1 box, so
 * the clipPath needs no transform of its own.
 *
 * They cannot simply be wrapped in a <g transform> inside the clipPath:
 * with clipPathUnits="objectBoundingBox" Blink does not apply a child
 * transform the way the spec reads, and the clip collapses to nothing —
 * the element vanishes rather than being clipped. Generated once from
 * X_PATHS above by (x - 293.79) / 70.52 and (y - 17.85) / 62.83.
 */
const X_PATHS_UNIT = [
  'M0.47528 0.66614L0.29209 0.94056L0.29048 0.94264L0.28915 0.94569C0.28697 0.95008 0.26024 0.99996 0.19061 0.99996C0.18928 0.99996 0.18795 0.99996 0.18663 0.99989C0.1305 0.9984 0.0563 0.99811 0.00163 0.99803L0.37626 0.44473L0.47528 0.66614Z',
  'M0.50807 0.61863L0.43572 0.72517C0.42262 0.59774 0.35579 0.5118 0.34481 0.49849L0.00003 0.00058C0.03301 0.00073 0.19088 0.00065 0.20757 0.00028H0.20876C0.24467 0.00028 0.27652 0.03233 0.28264 0.03887L0.45998 0.30087C0.58999 0.4767 0.51685 0.60109 0.50807 0.61863Z',
  'M0.99701 0.03738C0.99701 0.03738 0.8966 0.17522 0.82158 0.28325L0.82126 0.28377L0.74711 0.39633C0.74599 0.39856 0.74478 0.40079 0.74332 0.40288C0.74193 0.40503 0.7404 0.40711 0.73874 0.40897C0.73627 0.41187 0.73348 0.41462 0.73049 0.41693C0.72124 0.42429 0.70994 0.4286 0.69777 0.4286C0.68247 0.4286 0.66858 0.42184 0.65841 0.41083L0.64412 0.3854L0.56678 0.24741L0.6632 0.10058L0.70489 0.03827C0.7295 0.00035 0.75051 0.0011 0.75051 0.0011L0.99075 -0.00002C1.03244 -0.00455 0.99687 0.03753 0.99687 0.03753L0.99701 0.03738Z',
  'M0.99993 0.95781C0.99993 0.95781 0.89952 0.81997 0.82452 0.71194L0.82418 0.71142L0.75004 0.59886C0.74891 0.59663 0.74772 0.5944 0.74624 0.59231C0.74485 0.59016 0.74332 0.58808 0.74166 0.58622C0.73919 0.58332 0.7364 0.58057 0.73341 0.57826C0.72418 0.5709 0.71286 0.56659 0.70069 0.56659C0.68541 0.56659 0.67151 0.57336 0.66133 0.58436L0.64704 0.60979L0.5697 0.74778L0.66612 0.89461L0.70781 0.95692C0.73242 0.99484 0.75343 0.99409 0.75343 0.99409L0.99368 0.99521C1.03537 0.99974 0.9998 0.95766 0.9998 0.95766L0.99993 0.95781Z',
];

/* Tight bounding box of those four paths, measured off the outlines. */
const BOX = { x: 293.79, y: 17.85, w: 70.52, h: 62.83 };

/** viewBox that frames the glyph with no padding — for the flat-artwork form. */
export const X_VIEWBOX = `${BOX.x} ${BOX.y} ${BOX.w} ${BOX.h}`;

/**
 * One <clipPath> definition, in objectBoundingBox units so it fits whatever it
 * is applied to. Render once per page; every window references it by id.
 *
 * objectBoundingBox stretches the glyph to the element's aspect ratio, so
 * .vxn-xwin holds itself to the glyph's own proportions and lets object-fit
 * crop the photograph instead — the x is never distorted.
 */
export const X_CLIP_ID = 'vxn-x-clip';

export function LogoXClipDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" focusable="false" className="vxn-x-defs">
      <defs>
        <clipPath id={X_CLIP_ID} clipPathUnits="objectBoundingBox">
          {X_PATHS_UNIT.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </clipPath>
      </defs>
    </svg>
  );
}

/**
 * The x as flat artwork, painted in `currentColor`. Used for the ghosted
 * watermark behind the service panels.
 */
export function LogoXGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={X_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {X_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/**
 * An image seen through the x.
 *
 * The image is a plain <img> clipped by the shared <clipPath>, so it keeps
 * `object-fit: cover` behaviour and the browser's own lazy loading — a
 * `mask-image` on a background would give up both. Requires <LogoXClipDefs />
 * somewhere in the same document.
 */
export function LogoXWindow({
  src,
  alt = '',
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <span className={`vxn-xwin${className ? ` ${className}` : ''}`} aria-hidden={alt ? undefined : true}>
      <img
        className="vxn-xwin__img"
        src={src}
        alt={alt}
        loading="lazy"
        style={{ clipPath: `url(#${X_CLIP_ID})` }}
      />
    </span>
  );
}
