const testimonials = [
  {
    quote: 'Vecminds Technologies rebuilt our core platform in four months and we have shipped more in the last quarter than in the previous year. They operate like an internal team that already knows the codebase.',
    name: 'Mara Lindqvist',
    role: 'CTO, Northwind Commerce',
    meta: 'Platform rebuild · 4 months',
  },
  {
    quote: 'They asked harder product questions than our PMs did. The system they delivered is boring in the best way — it just runs.',
    name: 'Daniel Okafor',
    role: 'Head of Product, RelayPay',
    meta: 'Payments · 240k users',
  },
  {
    quote: 'We engaged them for an AI assistant and they shipped something we actually use every day. No demo theatre, just a useful tool.',
    name: 'Yuki Tanaka',
    role: 'COO, Octave',
    meta: 'Internal AI tools',
  },
  {
    quote: 'The discovery phase alone was worth what we paid. They mapped our operations and quietly killed two features before any code was written.',
    name: 'Hannah Brewer',
    role: 'Founder, Atlasworks',
    meta: 'Discovery + build',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-black/60 text-sm mb-2">What people say</p>
            <h2 className="text-black text-5xl md:text-6xl font-medium leading-none" style={{ letterSpacing: '-0.04em' }}>
              Trusted by
              <br />
              the teams we build with.
            </h2>
          </div>
          <p className="text-black/60 text-base max-w-sm leading-relaxed font-inter">
            A few words from founders and operators we have partnered with — across products, platforms, and internal systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Featured */}
          <div
            className="lg:col-span-1 rounded-2xl p-6 sm:p-8 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between"
            style={{ backgroundColor: '#2754D9' }}
          >
            <div
              className="text-white/30 leading-none font-medium"
              style={{ fontSize: '120px', letterSpacing: '-0.06em', height: '60px' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <p className="text-white text-xl md:text-2xl leading-snug" style={{ letterSpacing: '-0.02em' }}>
              {testimonials[0].quote}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div>
                <p className="text-white text-base font-medium">{testimonials[0].name}</p>
                <p className="text-white/55 text-sm">{testimonials[0].role}</p>
              </div>
              <span className="text-white/40 text-xs font-medium">{testimonials[0].meta}</span>
            </div>
          </div>

          {/* Supporting cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.slice(1).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-black/5 p-8 flex flex-col justify-between min-h-[200px]">
                <p className="text-black text-lg md:text-xl leading-snug" style={{ letterSpacing: '-0.02em' }}>
                  {t.quote}
                </p>
                <div className="flex items-center justify-between pt-5 mt-5 border-t border-black/[0.08]">
                  <div>
                    <p className="text-black text-sm font-medium">{t.name}</p>
                    <p className="text-black/55 text-xs">{t.role}</p>
                  </div>
                  <span className="text-black/40 text-xs font-medium">{t.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
