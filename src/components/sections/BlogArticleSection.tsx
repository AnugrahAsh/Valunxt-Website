/**
 * Blog article layout (Partners-Capital-style editorial page).
 * Renders the full single-post UI: dark hero, two-column body + sticky
 * sidebar (author, share, topics, Talk to us, Related Insights), then the
 * shared subscribe band.
 *
 * Port of includes/partials/blog-article.php.
 */
import { BASE, rurl } from '@/lib/region';
import { vxnRequestOrigin } from '@/lib/seo';
import BLOG_CATALOG from '@/data/blog-catalog';
import SubscribeSection from './SubscribeSection';
import Html from '@/components/Html';
import type { PageConfig } from '@/lib/page-config';

export interface Article {
  slug: string;
  title: string;
  category?: string;
  hero_image?: string;
  author?: string;
  author_role?: string;
  /** The article body, as HTML. */
  body: string;
  read_time?: string;
  topics?: string[];
  date?: string;
  date_iso?: string;
}

const CSS = `
/* ===== VALUNXT blog article (editorial) ===== */
.vxn-article{background:#fff;color:#1a2733;font-family:"DM Sans",sans-serif;}
.vxn-art-hero{display:flex;background:#0E355F;color:#fff;overflow:hidden;}
.vxn-art-hero__inner{flex:0 0 50%;max-width:50%;box-sizing:border-box;min-height:440px;padding:72px 48px 72px max(32px,calc((100vw - 1200px) / 2));display:flex;flex-direction:column;justify-content:center;}
.vxn-art-hero__media{flex:0 0 50%;max-width:50%;align-self:stretch;min-height:440px;background-size:cover;background-position:center;}
.vxn-art-hero__text{max-width:560px;}
.vxn-art-hero__meta{display:flex;align-items:center;gap:16px;margin-bottom:22px;}
.vxn-badge{display:inline-flex;align-items:center;gap:7px;background:rgba(0,83,183,.16);color:#0053B7;border:1px solid rgba(0,83,183,.45);padding:5px 12px;border-radius:3px;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;}
.vxn-badge svg{width:12px;height:12px;fill:currentColor;}
.vxn-readtime{color:#c7d0d8;font-size:13px;}
.vxn-article .vxn-art-hero__title{font-family:"Forum",serif!important;font-weight:400!important;font-size:clamp(30px,4.4vw,50px);line-height:1.08;margin:0;color:#fff!important;}
.vxn-art-hero__eyebrow{margin-top:22px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#0053B7;}
.vxn-art-hero__eyebrow a{color:#0053B7;text-decoration:none;}
.vxn-art-hero__eyebrow a:hover{text-decoration:underline;}

.vxn-art-wrap{max-width:1200px;margin:0 auto;padding:58px 32px 76px;display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:60px;}
.vxn-side-date{padding-bottom:20px;margin-bottom:22px;border-bottom:1px solid #e7e2d9;}
.vxn-side-date__val{color:#0053B7;font-weight:600;font-size:15px;margin-top:4px;}
.vxn-art-content{color:#3d4a56;font-size:17px;line-height:1.8;}
.vxn-art-content p{margin:0 0 22px;}
.vxn-art-content>p:first-child{font-size:19.5px;line-height:1.7;color:#26313b;}
.vxn-art-content h3{font-family:"Forum",serif;font-weight:400;color:#0E355F;font-size:26px;line-height:1.2;margin:40px 0 14px;}
.vxn-art-content h2{font-family:"Forum",serif;font-weight:400;color:#0E355F;font-size:30px;line-height:1.2;margin:44px 0 16px;}
.vxn-art-content a{color:#0053B7;text-decoration:underline;text-underline-offset:2px;}
.vxn-art-content img{max-width:100%;height:auto;border-radius:6px;margin:8px 0 26px;}
.vxn-art-content ul,.vxn-art-content ol{margin:0 0 22px;padding-left:22px;}
.vxn-art-content li{margin:0 0 8px;}

.vxn-art-side{align-self:start;position:sticky;top:110px;}
.vxn-side-author{display:flex;gap:14px;align-items:center;padding-bottom:24px;border-bottom:1px solid #e7e2d9;}
.vxn-avatar{width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#0053B7,#0E355F);display:flex;align-items:center;justify-content:center;flex:0 0 auto;box-shadow:inset 0 0 0 2px #0053B7;}
.vxn-avatar span{font-family:"Forum",serif;color:#0053B7;font-size:26px;line-height:1;}
.vxn-side-author__name{font-weight:600;color:#0E355F;font-size:15px;line-height:1.25;}
.vxn-side-author__role{font-size:13px;color:#77808a;margin-top:3px;}
.vxn-side-block{padding:22px 0;border-bottom:1px solid #e7e2d9;}
.vxn-side-label{font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#9aa1a9;margin-bottom:14px;}
.vxn-side-share{display:flex;gap:10px;}
.vxn-side-share a{width:38px;height:38px;border-radius:50%;border:1px solid #d9d3c8;display:flex;align-items:center;justify-content:center;color:#0053B7;transition:.2s;}
.vxn-side-share a:hover{background:#0E355F;border-color:#0E355F;color:#fff;}
.vxn-side-share svg{width:16px;height:16px;fill:currentColor;}
.vxn-side-topics{display:flex;flex-wrap:wrap;gap:8px 14px;}
.vxn-side-topics a{color:#0053B7;font-size:14px;text-decoration:none;border-bottom:1px solid transparent;}
.vxn-side-topics a:hover{border-color:#0053B7;}
/* Fills by wedge on hover — mechanism in valunxt-brand.css, this only names
   the colour it sweeps. */
.vxn-side-cta{display:block;text-align:center;margin:24px 0;padding:15px;background:#0E355F;color:#fff!important;font-weight:600;font-size:12px;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;border-radius:2px;--vxn-cta-sweep:#0053B7;}
.vxn-side-related{display:flex;flex-direction:column;gap:20px;}
.vxn-rel{display:block;text-decoration:none;color:inherit;}
.vxn-rel__thumb{position:relative;width:100%;aspect-ratio:16/10;border-radius:5px;overflow:hidden;background:#eef0f2;}
.vxn-rel__thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .45s ease;}
.vxn-rel:hover .vxn-rel__thumb img{transform:scale(1.05);}
.vxn-rel__badge{position:absolute;top:10px;left:10px;background:rgba(14,53,95,.85);color:#fff;font-size:10px;letter-spacing:.1em;text-transform:uppercase;padding:4px 8px;border-radius:2px;}
.vxn-rel__title{font-family:"Forum",serif;font-size:16px;line-height:1.3;color:#0E355F;margin-top:10px;transition:color .2s;}
.vxn-rel:hover .vxn-rel__title{color:#0053B7;}

@media(max-width:960px){
  .vxn-art-wrap{grid-template-columns:1fr;gap:44px;}
  .vxn-art-side{position:static;}
}
@media(max-width:860px){
  .vxn-art-hero{flex-direction:column;}
  .vxn-art-hero__inner{flex-basis:auto;max-width:100%;min-height:auto;padding:52px 24px;}
  .vxn-art-hero__media{flex-basis:auto;max-width:100%;min-height:230px;}
  .vxn-art-wrap{padding:44px 24px 60px;}
}
`;

export default async function BlogArticleSection({
  article,
  page,
  region,
}: {
  article: Article;
  page: PageConfig;
  region: string;
}) {
  const cat = article.category ?? 'Insights';
  const topics = article.topics ?? [cat];
  const author = article.author ?? 'VALUNXT Research Team';
  const arole = article.author_role ?? 'Insights & Analysis Desk';
  const initial = author.trim().slice(0, 1).toUpperCase() || 'V';
  const hero = article.hero_image ?? page.og_image ?? '';
  const wordCount = article.body.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
  const rt = article.read_time ?? `${Math.max(1, Math.round(wordCount / 200))} min read`;

  const origin = await vxnRequestOrigin();
  const url = origin + BASE + (page.path ?? '/');
  const enc = encodeURIComponent(url);
  const shareLi = 'https://www.linkedin.com/sharing/share-offsite/?url=' + enc;
  const shareTw =
    'https://twitter.com/intent/tweet?url=' + enc + '&text=' + encodeURIComponent(article.title);
  const shareMl = 'mailto:?subject=' + encodeURIComponent(article.title) + '&body=' + enc;

  const related = Object.entries(BLOG_CATALOG)
    .filter(([slug]) => slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div id="main-content">
        <div id="main" role="main" className="vamtam-main layout-full">
          <article className="vxn-article">
            <header className="vxn-art-hero">
              <div className="vxn-art-hero__inner">
                <div className="vxn-art-hero__text">
                  <div className="vxn-art-hero__meta">
                    <span className="vxn-badge">
                      <svg viewBox="0 0 512 512" aria-hidden="true">
                        <path d="M362.7 19.3 492.7 149.3c25 25 25 65.5 0 90.5L293.3 439.2c-13.3 13.3-31.4 20.8-50.3 20.8H80c-26.5 0-48-21.5-48-48V240c0-19 7.5-37 20.8-50.3L272.2 19.3c25-25 65.5-25 90.5 0zM236.4 95.7 96 236.1V400h163.9L400.3 259.6 236.4 95.7z" />
                      </svg>
                      Article
                    </span>
                    <span className="vxn-readtime">{rt}</span>
                  </div>
                  <h1 className="vxn-art-hero__title">{article.title}</h1>
                  <div className="vxn-art-hero__eyebrow">
                    <a href={rurl(region, '/blogs/')}>Insights</a> &nbsp;&rarr;&nbsp;{' '}
                    {cat.toUpperCase()}
                  </div>
                </div>
              </div>
              <div
                className="vxn-art-hero__media"
                style={{ backgroundImage: `url('${BASE}${hero}')` }}
              />
            </header>

            <div className="vxn-art-wrap">
              <div className="vxn-art-main">
                <Html className="vxn-art-content" html={article.body} />
              </div>

              <aside className="vxn-art-side">
                {article.date ? (
                  <div className="vxn-side-date">
                    <div className="vxn-side-label">Published</div>
                    <div className="vxn-side-date__val">
                      <time {...(article.date_iso ? { dateTime: article.date_iso } : {})}>
                        {article.date}
                      </time>
                    </div>
                  </div>
                ) : null}
                <div className="vxn-side-author">
                  <div className="vxn-avatar">
                    <span>{initial}</span>
                  </div>
                  <div>
                    <div className="vxn-side-author__name">{author}</div>
                    <div className="vxn-side-author__role">{arole}</div>
                  </div>
                </div>

                <div className="vxn-side-block">
                  <div className="vxn-side-label">Share</div>
                  <div className="vxn-side-share">
                    <a href={shareLi} target="_blank" rel="noopener" aria-label="Share on LinkedIn">
                      <svg viewBox="0 0 448 512" aria-hidden="true">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </a>
                    <a href={shareTw} target="_blank" rel="noopener" aria-label="Share on X">
                      <svg viewBox="0 0 512 512" aria-hidden="true">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z" />
                      </svg>
                    </a>
                    <a href={shareMl} aria-label="Share by email">
                      <svg viewBox="0 0 512 512" aria-hidden="true">
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="vxn-side-block">
                  <div className="vxn-side-label">Topics</div>
                  <div className="vxn-side-topics">
                    {topics.map((t) => (
                      <a href={rurl(region, '/blogs/')} key={t}>
                        {t}
                      </a>
                    ))}
                  </div>
                </div>

                <a className="vxn-side-cta" href={rurl(region, '/contact/')}>
                  Talk to us
                </a>

                {related.length ? (
                  <div className="vxn-side-block" style={{ borderBottom: 0 }}>
                    <div className="vxn-side-label">Related Insights</div>
                    <div className="vxn-side-related">
                      {related.map(([slug, meta]) => (
                        <a className="vxn-rel" href={rurl(region, `/blogs/${slug}/`)} key={slug}>
                          <div className="vxn-rel__thumb">
                            <span className="vxn-rel__badge">Article</span>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={BASE + meta.img} alt={meta.title} loading="lazy" />
                          </div>
                          <div className="vxn-rel__title">{meta.title}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </aside>
            </div>
          </article>

          <SubscribeSection page={page} region={region} />
        </div>
        {/* #main */}
      </div>
      {/* #main-content */}
    </>
  );
}
