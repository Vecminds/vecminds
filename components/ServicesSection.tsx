import Link from 'next/link'
import { ArrowRight, ServiceGlyph } from './icons'
import { SERVICES, SERVICES_BASE_PATH } from '@/lib/services'

const services = SERVICES.map((s, i) => ({
  n: `0${i + 1}`,
  glyph: s.glyph,
  title: s.title,
  body: s.cardBody,
  tags: s.tags,
  link: `${SERVICES_BASE_PATH}/${s.slug}`,
}))

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-black/60 text-sm mb-2">Services</p>
            <h2 className="text-black text-5xl md:text-6xl font-medium leading-none" style={{ letterSpacing: '-0.04em' }}>
              Two things.
              <br />
              Done properly.
            </h2>
          </div>
          <p className="text-black/60 text-base max-w-sm leading-relaxed font-inter">
            We go deep on two services instead of dabbling in ten. Most projects use both: custom software you can ship, with AI built in only where it pulls its weight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, idx) => {
            const dark = idx === 1
            return (
              <Link
                key={s.n}
                href={s.link}
                aria-label={`Explore ${s.title}`}
                className={`svc-card ${dark ? 'svc-card-dark' : 'svc-card-light'} group relative rounded-2xl p-6 sm:p-7 md:p-9 min-h-[360px] sm:min-h-[400px] md:min-h-[440px] flex flex-col justify-between overflow-hidden cursor-pointer`}
                style={{
                  backgroundColor: dark ? '#2754D9' : '#FFFFFF',
                  border: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <div
                  className="svc-wash absolute inset-0 pointer-events-none"
                  style={{
                    background: dark
                      ? 'radial-gradient(circle at 90% 110%, rgba(180,160,255,0.22), transparent 55%)'
                      : 'radial-gradient(circle at 90% 110%, rgba(43,38,68,0.06), transparent 55%)',
                  }}
                />

                <div
                  aria-hidden="true"
                  className={`svc-ghost absolute pointer-events-none select-none leading-none font-medium ${dark ? 'text-white/[0.06]' : 'text-black/[0.05]'}`}
                  style={{ fontSize: '220px', letterSpacing: '-0.06em', right: '-12px', bottom: '-40px' }}
                >
                  {s.n}
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <span className={`text-sm font-medium ${dark ? 'text-white/45' : 'text-black/40'}`}>{s.n}</span>
                  <span className={`svc-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center ${dark ? 'bg-white/10 text-white' : 'bg-black/[0.05] text-black'}`}>
                    <ServiceGlyph kind={s.glyph} className="w-6 h-6" />
                  </span>
                </div>

                <div className="relative z-10">
                  <h3
                    className={`svc-title text-2xl font-medium leading-snug mb-3 ${dark ? 'text-white' : 'text-black'}`}
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-white/65' : 'text-black/60'}`}>{s.body}</p>

                  <ul className={`mb-5 border-t ${dark ? 'border-white/10' : 'border-black/10'}`}>
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className={`flex items-center justify-between gap-3 py-2.5 border-b text-sm ${dark ? 'border-white/10 text-white/85' : 'border-black/10 text-black/75'}`}
                      >
                        <span className="inline-flex items-center gap-3 min-w-0">
                          <span aria-hidden="true" className={`w-1.5 h-1.5 rounded-full shrink-0 ${dark ? 'bg-white/45' : 'bg-black/35'}`} />
                          <span className="truncate" style={{ letterSpacing: '-0.005em' }}>{t}</span>
                        </span>
                        <span className={`text-xs font-medium tabular-nums ${dark ? 'text-white/35' : 'text-black/30'}`}>→</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between gap-3">
                    <span className={`text-sm font-medium ${dark ? 'text-white/70' : 'text-black/60'}`}>Explore service</span>
                    <span className={`svc-arrow shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${dark ? 'bg-white/10 text-white' : 'bg-black/[0.05] text-black'}`}>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-4 rounded-2xl bg-white border border-black/5 px-6 sm:px-8 py-5 flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            "Fixed-fee discovery",
            "Monthly engagement, not timesheets",
            "No surprise change-orders",
          ].map((point) => (
            <span
              key={point}
              className="inline-flex items-center gap-2 text-black/65 text-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 shrink-0 text-[#2754D9]"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
