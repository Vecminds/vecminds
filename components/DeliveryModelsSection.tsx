import { ArrowRight } from './icons'

const primaryModels = [
  {
    n: '01',
    title: 'Staff Augmentation',
    tagline: 'Vetted engineers, embedded in your team.',
    body: 'You keep the roadmap and run the standups. We drop in vetted engineers who work inside your tools, your codebase, and your rituals. You add real capacity in days, without the cost and slow ramp of a new hire.',
  },
  {
    n: '02',
    title: 'Managed Delivery',
    tagline: 'You brief the outcome, we own the delivery.',
    body: 'You set the outcome and the constraints. We own the plan, the team, and the weekly demos. You end up with a working system, not a pile of timesheets, and one delivery lead you can always reach.',
  },
  // {
  //   n: '02',
  //   title: 'Dedicated Offshore Teams',
  //   tagline: 'A standing team that ships only your work.',
  //   body: 'You get a ring-fenced pod of engineers, design, and a delivery lead reporting into your org chart. Same faces at every standup, full context on your product, and none of the churn you get from a typical agency rotation.',
  // },
  // {
  //   n: '03',
  //   title: 'Managed Outsourcing',
  //   tagline: 'You brief the outcome, we own the delivery.',
  //   body: 'You set the outcome and the constraints. We own the plan, the team, and the weekly demos. You get a working system at the end, not a pile of timesheets, with one senior delivery lead who answers for all of it.',
  // },
  // {
  //   n: '04',
  //   title: 'Strategic Engineering Partnership',
  //   tagline: 'A long-term partner, your engineering bench.',
  //   body: 'We sit alongside your CTO on architecture, hiring, and platform direction across a multi-year partnership. Think of it as a committed engineering bench that wins when your team compounds, not one that bills by the hour.',
  // },
]

export default function DeliveryModelsSection() {
  return (
    <section id="delivery" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-black/60 text-sm mb-2">Delivery models</p>
            <h2 className="text-black text-5xl md:text-6xl font-medium leading-none" style={{ letterSpacing: '-0.04em' }}>
              Two ways
              <br />
              to work with us.
            </h2>
          </div>
          <p className="text-black/60 text-base max-w-sm leading-relaxed font-inter">
            Same engineers, same standard. Pick the model that fits how much of the wheel you want to hold, from staff augmentation to fully managed software delivery.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white border border-black/5">
          {primaryModels.map((m, idx) => (
            <a
              key={m.n}
              href="#contact"
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

          {/* Lighter note for longer-arc engagements */}
          <div className="border-t border-black/10 px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
            <p className="text-black/50 text-sm leading-relaxed">
              Scaling a bigger product team? We also run{' '}
              <span className="text-black/70">dedicated offshore pods</span> and{' '}
              <span className="text-black/70">long-term strategic partnerships</span>. Reach out and we&apos;ll map the right fit.
            </p>
            <a
              href="#contact"
              className="shrink-0 text-sm font-medium text-black/60 hover:text-black transition-colors underline underline-offset-4"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
