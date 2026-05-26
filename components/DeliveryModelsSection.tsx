import { ArrowRight } from './icons'

const models = [
  {
    n: '01',
    title: 'Staff Augmentation',
    tagline: 'Qualified engineers, embedded in your team.',
    body: 'You set the roadmap and run the standups. We slot in vetted engineers who work inside your tools, your codebase, and your rituals — extending capacity without the management overhead of a new hire.',
  },
  {
    n: '02',
    title: 'Dedicated Offshore Teams',
    tagline: 'A standing team that ships only your work.',
    body: 'A ring-fenced pod — engineers, design, and a delivery lead — reporting into your org chart. Same faces every standup, full context on the product, none of the churn of a typical agency rotation.',
  },
  {
    n: '03',
    title: 'Managed Outsourcing',
    tagline: 'Outcomes you brief, we own the delivery.',
    body: 'You define the outcome and the constraints. We own the plan, the team, and the weekly demos — you get a working system at the end, not a stack of timesheets. Senior delivery lead is the single throat to choke.',
  },
  {
    n: '04',
    title: 'Strategic Engineering Partnership',
    tagline: 'A long arc — your engineering bench.',
    body: "A multi-year partnership where we sit alongside your CTO on architecture, hiring, and platform direction. Equity-style commitment without the equity — we win when your engineering org compounds.",
  },
]

export default function DeliveryModelsSection() {
  return (
    <section id="delivery" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-black/60 text-sm mb-2">Delivery models</p>
            <h2 className="text-black text-5xl md:text-6xl font-medium leading-none" style={{ letterSpacing: '-0.04em' }}>
              Four ways
              <br />
              to work with us.
            </h2>
          </div>
          <p className="text-black/60 text-base max-w-sm leading-relaxed font-inter">
            Same engineers, same standard — four shapes of engagement depending on how much of the wheel you want to hold.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white border border-black/5">
          {models.map((m, idx) => (
            <a
              key={m.n}
              href="#"
              className={`dm-row group relative grid grid-cols-12 gap-6 px-6 sm:px-8 py-8 sm:py-10 ${idx > 0 ? 'border-t border-black/10' : ''}`}
            >
              <div
                aria-hidden="true"
                className="dm-wash absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 100% 50%, rgba(43,38,68,0.05), transparent 55%)' }}
              />

              <div className="col-span-12 md:col-span-5 relative z-10 flex items-start gap-4">
                <span className="text-black/35 text-sm font-medium pt-1 tabular-nums">{m.n}</span>
                <div className="min-w-0">
                  <h3 className="text-black text-2xl md:text-[28px] font-medium leading-tight" style={{ letterSpacing: '-0.02em' }}>
                    {m.title}
                  </h3>
                  <p className="text-black/55 text-sm mt-1.5 leading-snug">{m.tagline}</p>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 relative z-10">
                <p className="text-black/65 text-sm leading-relaxed">{m.body}</p>
              </div>

              <div className="col-span-12 md:col-span-1 relative z-10 flex md:justify-end items-start">
                <span className="dm-arrow w-10 h-10 rounded-full flex items-center justify-center bg-black/[0.05] text-black">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
