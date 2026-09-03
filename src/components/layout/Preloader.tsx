/* VALUNXT Capital intro preloader — klaygroup-style logo-mask reveal.
   The current logo is shown solid on the brand panel, then the logo becomes a
   window onto the hero video playing behind, and that window zooms up to fill
   the screen and reveal the page. Plays once per session.

   The hole is cut with the VECTOR logo (paths from
   public/assets/content/uploads/logo/valunxt.svg — the 410x82 wordmark) inside
   an SVG <mask>, and the zoom scales the mask GEOMETRY. The previous version
   masked a div with the 280px PNG and ran transform:scale(48) on a
   will-change:transform layer, so the browser rasterised the mask once at
   280px and GPU-stretched that bitmap 48x — which is why the logo went blurry
   as it zoomed. Vector geometry is re-rasterised every frame, so the edges
   stay sharp at any scale. Shape, size, timing and easing are unchanged.

   Port of includes/preloader.php.

   It is a client component: the markup is server-rendered so the panel paints
   on the first frame, and the placement and teardown that were inline <script>
   tags are effects instead. That matters — the teardown used to remove
   #vx-preloader from the DOM before React hydrated, which made React rebuild
   the whole page and take every classic script's work down with it. */
'use client';

import { useEffect, useRef, useState } from 'react';

import { BASE } from '@/lib/region';

/**
 * Decides whether the intro plays, once per session.
 *
 * It has to run before the first paint, so the root layout emits it as a
 * pre-hydration script rather than an effect — otherwise the panel flashes on
 * every navigation within a session.
 */
export const PRELOADER_GATE_SCRIPT = `
(function(){var d=document.documentElement;try{
  if(sessionStorage.getItem('vxIntroShown')){d.className+=' vx-intro-done';}
  else{sessionStorage.setItem('vxIntroShown','1');d.className+=' vx-intro-play';}
}catch(e){d.className+=' vx-intro-play';}})();
`;

const PRELOADER_CSS = `
#vx-preloader{position:fixed;inset:0;z-index:2147483000;display:none;overflow:hidden;background:#0E355F;will-change:opacity}
html.vx-intro-play #vx-preloader{display:block;animation:vxOverlayOut .55s ease 2.75s forwards}
/* hero video plays behind the panel; the logo-hole reveals it */
#vx-preloader .vx-preloader-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;pointer-events:none}
/* brand panel: a full-screen fill with the logo punched out of it by an SVG
   mask. No viewBox on the root svg, so 1 user unit = 1 CSS px. */
#vx-preloader .vx-mask-panel{position:absolute;inset:0;width:100%;height:100%;z-index:1;display:block;pointer-events:none}
/* the group that zooms. transform-box:view-box makes transform-origin resolve
   against the full-screen svg viewport, so JS can hand it the logo centre in
   px. Deliberately NO will-change here — promoting this to its own layer is
   exactly what caused the blur. */
#vx-preloader .vx-hole-zoom{
  transform-box:view-box;transform-origin:50% 50%;
  animation:vxHoleZoom 1.55s cubic-bezier(.66,0,.34,1) 1.5s forwards}
/* the solid logo shown first, then faded out to "open" the window */
#vx-preloader .vx-solid-logo{
  position:absolute;top:50%;left:50%;z-index:2;
  width:clamp(230px,36vw,460px);height:auto;
  transform:translate(-50%,-50%);transform-origin:center center;
  opacity:0;pointer-events:none;user-select:none;-webkit-user-drag:none;
  animation:vxLogoIn .6s cubic-bezier(.22,.61,.36,1) both,vxLogoOut .5s ease 1.15s forwards;
  will-change:opacity}
@keyframes vxLogoIn{from{opacity:0}to{opacity:1}}
@keyframes vxLogoOut{to{opacity:0}}
@keyframes vxHoleZoom{to{transform:scale(48)}}
@keyframes vxOverlayOut{to{opacity:0;visibility:hidden}}
@keyframes vxFadeOnly{to{opacity:0;visibility:hidden}}
@media(prefers-reduced-motion:reduce){
  #vx-preloader .vx-hole-zoom{animation:none}
  #vx-preloader .vx-solid-logo{animation:vxLogoIn .4s ease both}
  html.vx-intro-play #vx-preloader{animation:vxFadeOnly .4s ease 1s forwards}
}
`;

/**
 * The 410×82 VALUNXT wordmark, as raw path geometry. Same paths as
 * public/assets/content/uploads/logo/valunxt.svg — inlined here because they
 * cut the mask, and an <image> reference cannot punch a hole.
 */
const LOGO_PATHS = [
  'M126.803 74.8574C126.714 72.9795 126.667 70.9241 126.667 68.6913V36.2585C126.667 33.4931 126.151 30.8305 125.119 28.2846C124.088 25.7388 122.498 23.4826 120.346 21.5159C118.193 19.554 115.431 17.9891 112.069 16.826C108.707 15.6675 104.693 15.0836 100.032 15.0836C95.3705 15.0836 91.061 15.8684 86.5781 17.4286C82.0905 18.9934 78.1421 21.3384 74.7377 24.4635L82.0014 31.9703C83.0799 31.1668 84.2006 30.3166 85.3636 29.4244C86.5312 28.5322 87.8301 27.7475 89.265 27.0795C90.7 26.4068 92.2943 25.8509 94.0434 25.4025C95.7925 24.9587 97.8323 24.7345 100.163 24.7345C102.765 24.7345 105.007 25.1128 106.892 25.8743C108.772 26.631 110.343 27.6634 111.6 28.9573C112.852 30.2512 113.795 31.704 114.423 33.3109C115.051 34.9179 115.366 36.5295 115.366 38.1364V40.8177H106.489C101.645 40.8177 97.0914 41.1961 92.8336 41.9575C88.571 42.7142 84.8477 43.9662 81.6637 45.7085C78.4797 47.4509 75.9709 49.7072 74.1327 52.4772C72.2899 55.2473 71.3755 58.6854 71.3755 62.7961C71.3755 65.9212 71.9569 68.6726 73.1246 71.0362C74.2875 73.4046 75.8818 75.3946 77.8982 77.0015C79.9146 78.6084 82.2686 79.8136 84.9603 80.6171C87.6519 81.4252 90.4796 81.8269 93.4385 81.8269C98.2825 81.8269 102.54 80.9768 106.217 79.2811C109.893 77.5807 113.077 74.6799 115.769 70.5691H116.041C116.041 73.783 116.172 77.0015 116.444 80.2153H127.206C127.023 78.5197 126.892 76.7352 126.803 74.8574ZM115.366 53.6824C115.366 55.8265 115.051 57.994 114.423 60.1802C113.795 62.371 112.763 64.361 111.328 66.1454C109.893 67.9345 108.013 69.3873 105.682 70.499C103.347 71.6201 100.519 72.176 97.204 72.176C92.9883 72.176 89.6449 71.3726 87.183 69.7657C84.7117 68.1541 83.4832 65.5194 83.4832 61.8572C83.4832 59.358 84.2663 57.298 85.8372 55.6911C87.4034 54.0842 89.4245 52.8322 91.891 51.94C94.3576 51.0478 97.0914 50.4452 100.097 50.1322C103.098 49.8193 106.039 49.6604 108.908 49.6604H115.366V53.6824Z',
  'M139.15 1.94326V80.22H151.257V1.94326H139.15Z',
  'M208.058 16.6905V49.3942C208.058 53.0565 207.613 56.2283 206.717 58.9096C205.817 61.5909 204.565 63.8004 202.947 65.5428C201.334 67.2852 199.449 68.5558 197.297 69.3639C195.144 70.1674 192.814 70.5691 190.3 70.5691C188.42 70.5691 186.6 70.2795 184.851 69.6956C183.102 69.1164 181.559 68.1774 180.214 66.8835C178.868 65.5895 177.789 63.8892 176.983 61.7918C176.176 59.6897 175.773 57.1672 175.773 54.2196V16.6905H163.665V57.5689C163.665 61.7684 164.289 65.4073 165.545 68.4904C166.802 71.5734 168.486 74.1006 170.591 76.0626C172.701 78.0292 175.144 79.4819 177.925 80.4209C180.706 81.3551 183.665 81.8269 186.802 81.8269C191.735 81.8269 196.087 80.7759 199.852 78.6738C203.622 76.5764 206.267 73.8297 207.791 70.4337H208.058V80.2153H220.171V16.6905H208.058Z',
  'M286.538 28.593C285.281 25.5099 283.598 22.9874 281.493 21.0208C279.382 19.0542 276.92 17.6014 274.093 16.6625C271.27 15.7282 268.33 15.2564 265.282 15.2564C260.349 15.2564 255.997 16.3075 252.231 18.4049C248.466 20.5069 245.816 23.2537 244.292 26.6497H244.025V16.8633H231.917V80.3929H244.025V47.6892C244.025 44.0269 244.471 40.8551 245.371 38.1738C246.267 35.4924 247.523 33.2829 249.137 31.5405C250.75 29.7981 252.635 28.5276 254.787 27.7194C256.939 26.916 259.27 26.5142 261.783 26.5142C263.669 26.5142 265.483 26.8038 267.232 27.3878C268.982 27.967 270.529 28.9059 271.875 30.1999C273.221 31.4985 274.294 33.1942 275.101 35.2916C275.908 37.3936 276.316 39.9161 276.316 42.8637V80.3929H288.423V39.5144C288.423 35.3149 287.795 31.676 286.538 28.593Z',
  'M327.307 59.7037L314.388 76.9454L314.275 77.0762L314.181 77.2678C314.027 77.5434 312.142 80.6778 307.232 80.6778C307.138 80.6778 307.044 80.6778 306.951 80.6731C302.993 80.5797 297.76 80.561 293.905 80.5563L320.324 45.7926L327.307 59.7037Z',
  'M329.619 56.7187L324.517 63.4127C323.593 55.4061 318.88 50.0061 318.106 49.17L293.792 17.8864C296.118 17.8957 307.251 17.891 308.428 17.8677H308.512C311.044 17.8677 313.29 19.881 313.722 20.2921L326.228 36.7537C335.396 47.8013 330.238 55.6163 329.619 56.7187Z',
  'M364.099 20.1987C364.099 20.1987 357.018 28.8592 351.728 35.6466L351.705 35.6793L346.476 42.7516C346.397 42.8918 346.312 43.0319 346.209 43.1627C346.111 43.2982 346.003 43.429 345.886 43.5457C345.712 43.7279 345.515 43.9007 345.304 44.0455C344.652 44.508 343.855 44.7789 342.997 44.7789C341.918 44.7789 340.938 44.3539 340.221 43.6625L339.213 42.0649L333.759 33.395L340.559 24.1692L343.499 20.2547C345.234 17.8723 346.716 17.9191 346.716 17.9191L363.658 17.849C366.598 17.564 364.089 20.208 364.089 20.208L364.099 20.1987Z',
  'M364.305 78.0292C364.305 78.0292 357.224 69.3686 351.935 62.5812L351.911 62.5485L346.683 55.4762C346.603 55.3361 346.519 55.1959 346.415 55.0651C346.317 54.9297 346.209 54.7989 346.092 54.6821C345.918 54.4999 345.721 54.3271 345.51 54.1822C344.859 53.7198 344.061 53.4488 343.203 53.4488C342.125 53.4488 341.145 53.8739 340.427 54.5653L339.419 56.1629L333.965 64.8328L340.765 74.0586L343.705 77.9731C345.44 80.3555 346.922 80.3087 346.922 80.3087L363.864 80.3788C366.804 80.6638 364.296 78.0198 364.296 78.0198L364.305 78.0292Z',
  'M73.6357 1.94326L73.6169 1.98997L42.5364 80.5517H30.4287L0.018754 1.98997L0 1.94326H14.5321L14.5508 1.98997L35.4931 59.7551H38.0535L59.8023 1.98997L59.8211 1.94326H73.6357Z',
  'M409.135 68.4624V79.3371C407.822 80.1266 406.115 80.6825 404.019 80.9908C401.922 81.3037 400.3 81.4532 399.146 81.4532C394.87 81.4532 391.564 80.8133 389.219 79.5333C386.879 78.2534 385.149 76.5951 384.042 74.5631C382.931 72.5311 382.274 70.2515 382.068 67.7337C381.862 65.2112 381.759 62.67 381.759 60.1054V27.3597H372.019V17.0175H381.759V6.53514H392.858V17.0175H402.284V27.3597H392.858V55.8639C392.858 57.6343 392.9 59.3814 392.98 61.1051C393.064 62.8288 393.369 64.375 393.908 65.7437C394.438 67.1124 395.264 68.2195 396.375 69.0603C397.482 69.8965 399.104 70.3169 401.243 70.3169C402.556 70.3169 403.915 70.1861 405.313 69.9151C406.71 69.6535 407.986 69.1724 409.135 68.4624Z',
  'M398.696 0V13.3132H393.763V5.67095H385.332V0H398.696Z',
];

export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  /* Align the vector hole with the solid logo. Measuring the <img> box means
     the hole inherits the CSS clamp sizing exactly, so the swap from solid logo
     to window is pixel-identical at every viewport width. */
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const fit = el.querySelector<SVGGElement>('.vx-hole-fit');
    const zoom = el.querySelector<SVGGElement>('.vx-hole-zoom');
    const img = el.querySelector<HTMLImageElement>('.vx-solid-logo');
    if (!fit || !zoom || !img) return;

    const place = () => {
      const r = img.getBoundingClientRect();
      const size = r.width || 410;
      const k = size / 410;
      fit.setAttribute('transform', 'translate(' + r.left + ',' + r.top + ') scale(' + k + ')');
      zoom.style.transformOrigin =
        r.left + size / 2 + 'px ' + (r.top + (r.height || size / 5) / 2) + 'px';
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, []);

  /* Take the panel down when its exit animation ends — or after a timeout, so a
     browser that never fires animationend cannot leave it covering the page.
     React does the removal, so the DOM stays the tree React rendered. */
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (!document.documentElement.classList.contains('vx-intro-play')) {
      setGone(true);
      return;
    }
    const onEnd = (e: AnimationEvent) => {
      if (e.animationName === 'vxOverlayOut' || e.animationName === 'vxFadeOnly') setGone(true);
    };
    el.addEventListener('animationend', onEnd);
    const t = window.setTimeout(() => setGone(true), 3800);
    return () => {
      el.removeEventListener('animationend', onEnd);
      window.clearTimeout(t);
    };
  }, []);

  if (gone) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PRELOADER_CSS }} />
      <div id="vx-preloader" role="presentation" aria-hidden="true" ref={root}>
        <video
          className="vx-preloader-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={`${BASE}/assets/content/uploads/video/video.mp4`} type="video/mp4" />
        </video>
        <svg
          className="vx-mask-panel"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="vxHoleMask">
              {/* white = panel is painted; the black logo punches the hole */}
              <rect width="100%" height="100%" fill="#fff" />
              <g className="vx-hole-zoom">
                {/* JS sets this transform to place/size the logo exactly over .vx-solid-logo */}
                <g className="vx-hole-fit" fill="#000" shapeRendering="geometricPrecision">
                  {LOGO_PATHS.map((d, i) => (
                    <path key={i} d={d} />
                  ))}
                </g>
              </g>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#0E355F" mask="url(#vxHoleMask)" />
        </svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="vx-solid-logo"
          src={`${BASE}/assets/content/uploads/logo/valunxt-white.svg`}
          alt="VALUNXT Capital"
          width={410}
          height={82}
        />
      </div>
    </>
  );
}
