/* Client testimonials section, rendered on /clients/.

   Driven by src/data/testimonials.ts, which ships empty — see the note at the
   top of that file. When empty this section renders nothing at all, so
   /clients/ is unchanged until real, consented quotes exist.

   Port of includes/partials/testimonials.php. */
import TESTIMONIALS from '@/data/testimonials';

const CSS = `
/* ===== VALUNXT testimonials =============================================== */
.vxn-quotes{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--body:#4d5863;--muted:#6b757e;--line:#e5e1d8;--paper:#f7f6f3;font-family:"DM Sans",sans-serif;color:var(--body);background:var(--paper);padding:66px 0 72px;}
.vxn-quotes *{box-sizing:border-box;}
.vxn-quotes__wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.vxn-quotes__eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 14px;}
.vxn-quotes h2.vxn-quotes__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.1;font-size:clamp(27px,3.4vw,42px);margin:0 0 18px;}
.vxn-quotes__lead{margin:0 0 42px;max-width:72ch;font-size:16.5px;line-height:1.8;}
.vxn-quotes__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
.vxn-quotes__item{background:#fff;border:1px solid var(--line);border-radius:12px;padding:32px 30px 28px;display:flex;flex-direction:column;margin:0;}
.vxn-quotes__mark{font-family:"Forum",serif;font-size:46px;line-height:.7;color:var(--gd);margin:0 0 16px;}
.vxn-quotes__text{margin:0 0 24px;padding:0;border:0;font-size:16px;line-height:1.8;color:var(--ny);}
.vxn-quotes__attr{margin-top:auto;padding-top:18px;border-top:1px solid var(--line);}
.vxn-quotes__name{margin:0;font-size:14.5px;font-weight:600;color:var(--ny);}
.vxn-quotes__role{margin:3px 0 0;font-size:13.5px;color:var(--muted);line-height:1.6;}
.vxn-quotes__svc{display:inline-block;margin-top:12px;background:var(--paper);color:var(--ny2);font-size:10.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:5px 10px;border-radius:3px;}
.vxn-quotes__consent{margin:26px 0 0;font-size:12.5px;line-height:1.7;color:var(--muted);}

@media(max-width:960px){.vxn-quotes__grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.vxn-quotes{padding:48px 0 54px;}.vxn-quotes__grid{grid-template-columns:1fr;}}
`;

export default function TestimonialsSection() {
  const quotes = TESTIMONIALS;
  if (!quotes.length) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="vxn-quotes">
        <div className="vxn-quotes__wrap">
          <p className="vxn-quotes__eyebrow">In their words</p>
          <h2 className="vxn-quotes__h">What clients say</h2>
          <p className="vxn-quotes__lead">
            Published with consent. Where a client is not named, the attribution is anonymised at
            their request and the engagement is described by type.
          </p>

          <div className="vxn-quotes__grid">
            {quotes.map((q, i) => (
              <figure className="vxn-quotes__item" key={i}>
                <p className="vxn-quotes__mark" aria-hidden="true">
                  &ldquo;
                </p>
                <blockquote className="vxn-quotes__text">{q.quote}</blockquote>
                <figcaption className="vxn-quotes__attr">
                  {q.name ? <p className="vxn-quotes__name">{q.name}</p> : null}
                  <p className="vxn-quotes__role">
                    {q.role ?? ''}
                    {q.org ? `, ${q.org}` : ''}
                  </p>
                  {q.service ? <span className="vxn-quotes__svc">{q.service}</span> : null}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="vxn-quotes__consent">
            Every quotation above is published with the individual&rsquo;s written consent.
            Testimonials describe a particular engagement and are not an indication of future results.
          </p>
        </div>
      </section>
      {/* Review structured data, emitted only for named, attributable quotes —
          an anonymous review is not valid Review markup. */}
      {quotes
        .filter((q) => q.name)
        .map((q, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Review',
                reviewBody: q.quote,
                author: { '@type': 'Person', name: q.name },
                itemReviewed: { '@type': 'Organization', name: 'VALUNXT Capital' },
              }),
            }}
          />
        ))}
    </>
  );
}
