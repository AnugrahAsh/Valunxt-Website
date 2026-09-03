/* Leadership page body. Driven entirely by src/data/leadership.ts — see that
   file for why it ships empty and what to put in it. This section is only
   reached when at least one person is defined (the route 404s otherwise), so
   there is no empty state to design for.

   Port of includes/partials/leadership-content.php. */
import { BASE } from '@/lib/region';
import LEADERSHIP from '@/data/leadership';

const CSS = `
/* ===== VALUNXT leadership ================================================= */
.vxn-team{--ny:#0E355F;--ny2:#0053B7;--gd:#0053B7;--gd2:#9C00DD;--body:#4d5863;--muted:#6b757e;--line:#e5e1d8;--paper:#f7f6f3;font-family:"DM Sans",sans-serif;color:var(--body);background:#fff;padding:64px 0 72px;}
.vxn-team *{box-sizing:border-box;}
.vxn-team__wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.vxn-team__eyebrow{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--gd2);font-weight:600;margin:0 0 14px;}
.vxn-team h2.vxn-team__h{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;line-height:1.1;font-size:clamp(27px,3.4vw,42px);margin:0 0 18px;}
.vxn-team__lead{margin:0;max-width:74ch;font-size:16.5px;line-height:1.8;}
.vxn-team__head{margin:0 0 46px;}

.vxn-team__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;}
.vxn-team__card{border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;display:flex;flex-direction:column;transition:box-shadow .25s,transform .25s;}
.vxn-team__card:hover{box-shadow:0 24px 56px -34px rgba(14,53,95,.42);transform:translateY(-3px);}
.vxn-team__photo{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;background:var(--paper);}
.vxn-team__initials{display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:4/5;background:linear-gradient(150deg,#0053B7,#0E355F);}
.vxn-team__initials span{font-family:"Forum",serif;font-size:52px;color:var(--gd);line-height:1;}
.vxn-team__body{padding:26px 26px 24px;display:flex;flex-direction:column;flex:1;}
.vxn-team h3.vxn-team__name{font-family:"Forum",serif!important;font-weight:400!important;color:var(--ny)!important;font-size:23px;line-height:1.2;margin:0 0 6px;}
.vxn-team__role{margin:0 0 4px;font-size:14.5px;color:var(--ny2);font-weight:600;}
.vxn-team__meta{margin:0 0 16px;font-size:13px;color:var(--muted);}
.vxn-team__creds{display:flex;flex-wrap:wrap;gap:7px;margin:0 0 16px;padding:0;list-style:none;}
.vxn-team__creds li{background:var(--paper);color:var(--ny2);font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:6px 10px;border-radius:3px;}
.vxn-team__bio{margin:0 0 18px;font-size:14.5px;line-height:1.75;}
.vxn-team__focus{margin:0 0 18px;padding:14px 16px;background:var(--paper);border-left:2px solid var(--gd);font-size:13.5px;line-height:1.7;}
.vxn-team__focus strong{display:block;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:6px;}
.vxn-team__li{margin-top:auto;align-self:flex-start;font-size:12.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ny)!important;text-decoration:none;border-bottom:1px solid var(--gd);padding-bottom:3px;transition:color .2s;}
.vxn-team__li:hover{color:var(--gd2)!important;}

@media(max-width:960px){.vxn-team__grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:640px){.vxn-team{padding:46px 0 54px;}.vxn-team__grid{grid-template-columns:1fr;}}
`;

export default function LeadershipSection() {
  const people = LEADERSHIP;

  /* Person structured data, so search engines can associate the named
     individuals and their credentials with the organisation. */
  const ld = people.map((p) => {
    const entry: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: p.name,
      jobTitle: p.role,
      worksFor: { '@type': 'Organization', name: p.company ?? 'VALUNXT Capital' },
    };
    if (p.credentials?.length) entry.hasCredential = p.credentials;
    if (p.linkedin) entry.sameAs = [p.linkedin];
    return entry;
  });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="vxn-team">
        <div className="vxn-team__wrap">
          <div className="vxn-team__head">
            <p className="vxn-team__eyebrow">Leadership</p>
            <h2 className="vxn-team__h">The people accountable for the advice</h2>
            <p className="vxn-team__lead">
              Independent advice is only as good as the people signing it. These are the senior
              practitioners across the group &mdash; their qualifications, their registrations, and
              what each of them actually works on.
            </p>
          </div>

          <div className="vxn-team__grid">
            {people.map((p) => {
              const meta = [p.company ?? '', p.based ?? ''].filter(Boolean);
              return (
                <article className="vxn-team__card" key={p.name}>
                  {p.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="vxn-team__photo" src={BASE + p.photo} alt={p.name} loading="lazy" />
                  ) : (
                    <div className="vxn-team__initials" aria-hidden="true">
                      <span>{p.name.trim().slice(0, 1).toUpperCase()}</span>
                    </div>
                  )}
                  <div className="vxn-team__body">
                    <h3 className="vxn-team__name">{p.name}</h3>
                    <p className="vxn-team__role">{p.role}</p>
                    {meta.length ? <p className="vxn-team__meta">{meta.join(' · ')}</p> : null}

                    {p.credentials?.length ? (
                      <ul className="vxn-team__creds">
                        {p.credentials.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    ) : null}

                    <p className="vxn-team__bio">{p.bio}</p>

                    {p.focus?.length ? (
                      <div className="vxn-team__focus">
                        <strong>Focus</strong>
                        {p.focus.join(', ')}
                      </div>
                    ) : null}

                    {p.linkedin ? (
                      <a className="vxn-team__li" href={p.linkedin} target="_blank" rel="noopener">
                        LinkedIn &rarr;
                      </a>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      {ld.map((l, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(l) }}
        />
      ))}
    </>
  );
}
