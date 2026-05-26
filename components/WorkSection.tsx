import { ArrowRight } from './icons'

const projects = [
  {
    client: 'Northwind Commerce',
    title: 'Platform rebuild',
    body: 'Re-architected a monolith handling 9M orders / year into a typed, modular system. Two-year roadmap shipped in four months.',
    tags: ['Product engineering', 'Migration'],
    metric: '4×',
    metricLabel: 'deploy frequency',
    bg: '#2754D9',
  },
  {
    client: 'RelayPay',
    title: 'Payments operations console',
    body: 'Internal tool that replaced three spreadsheets and a Slack channel. Ops team now closes the books in hours, not days.',
    tags: ['Internal tools', 'Workflow'],
    metric: '38h',
    metricLabel: 'saved / week',
    bg: '#FFFFFF',
  },
  {
    client: 'Octave',
    title: 'AI knowledge assistant',
    body: 'RAG-based assistant grounded in 12 years of internal documentation. Used by 80% of the company within two weeks of launch.',
    tags: ['AI & automation', 'RAG'],
    metric: '80%',
    metricLabel: 'weekly active',
    bg: '#FFFFFF',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-black/60 text-sm mb-2">Selected work</p>
            <h2 className="text-black text-5xl md:text-6xl font-medium leading-none" style={{ letterSpacing: '-0.04em' }}>
              A few systems
              <br />
              we&apos;re proud of.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            See all case studies
            <span className="bg-white rounded-full p-2 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-black" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map((p) => {
            const dark = p.bg === '#2754D9'
            return (
              <a
                key={p.client}
                href="#"
                className="rounded-2xl p-6 sm:p-8 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between group transition-transform duration-300 hover:-translate-y-1"
                style={{ backgroundColor: p.bg, border: dark ? 'none' : '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-start justify-between">
                  <span className={`text-sm font-medium ${dark ? 'text-white/55' : 'text-black/50'}`}>{p.client}</span>
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${dark ? 'bg-white/10' : 'bg-black/5'}`}>
                    <ArrowRight className={`w-4 h-4 ${dark ? 'text-white' : 'text-black'}`} />
                  </span>
                </div>

                <div>
                  <div
                    className={`font-medium leading-none mb-2 ${dark ? 'text-white' : 'text-black'}`}
                    style={{ fontSize: '64px', letterSpacing: '-0.04em' }}
                  >
                    {p.metric}
                  </div>
                  <p className={`text-sm font-medium ${dark ? 'text-white/55' : 'text-black/50'}`}>{p.metricLabel}</p>
                </div>

                <div>
                  <h3
                    className={`text-2xl md:text-3xl font-medium leading-snug mb-3 ${dark ? 'text-white' : 'text-black'}`}
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {p.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-5 ${dark ? 'text-white/65' : 'text-black/60'}`}>{p.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${dark ? 'bg-white/10 text-white/80' : 'bg-black/5 text-black/65'}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
