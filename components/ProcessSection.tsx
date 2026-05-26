const steps = [
  { n: '01', title: 'Discovery', body: 'A short, paid sprint to map the problem, the system, and the smallest plan that proves it. No 60-page decks.' },
  { n: '02', title: 'System design', body: 'Architecture, data model, and integration points decided before code — so the build phase moves fast and stays calm.' },
  { n: '03', title: 'Iterative build', body: 'Weekly demos, a shared backlog, and direct access to the engineers. The work is visible from week one.' },
  { n: '04', title: 'Ship & operate', body: 'We deploy, monitor, and improve. When it is time to hand over, we leave you a system your team can run without us.' },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-black/60 text-sm mb-2">How we work</p>
            <h2 className="text-black text-5xl md:text-6xl font-medium leading-none" style={{ letterSpacing: '-0.04em' }}>
              A calm,
              <br />
              structured process.
            </h2>
          </div>
          <p className="text-black/60 text-base max-w-sm leading-relaxed font-inter">
            Four phases, designed for clarity and speed — from first conversation to production handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, idx) => (
            <div key={s.n} className="bg-white rounded-2xl border border-black/5 p-7 min-h-[280px] flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-black/35 text-sm font-medium">{s.n}</span>
                <span
                  className="text-black/10 font-medium leading-none select-none"
                  style={{ fontSize: '88px', letterSpacing: '-0.06em' }}
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>
              </div>
              <div>
                <h3 className="text-black text-2xl font-medium leading-snug mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {s.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
