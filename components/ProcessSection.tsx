const steps = [
  {
    n: "01",
    title: "Discovery",
    body: "A short, paid sprint where we map your problem, your system, and the smallest plan that proves it works. You get clarity, not a 60-page deck.",
  },
  {
    n: "02",
    title: "Requirements & design",
    body: "We settle the architecture, data model, and API integration points before anyone writes code. So the build moves fast and stays calm.",
  },
  {
    n: "03",
    title: "Iterative build",
    body: "Weekly demos and a shared backlog mean you see working software every week, with direct access to the engineers building it, so there are no surprises at the end.",
  },
  {
    n: "04",
    title: "Ship & operate",
    body: "We deploy, monitor, and keep improving. When you're ready to take over, you get a system your own team can run without us.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-black/60 text-sm mb-2">How we work</p>
            <h2
              className="text-black text-5xl md:text-6xl font-medium leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              A calm,
              <br />
              structured process.
            </h2>
          </div>
          <p className="text-black/60 text-base max-w-sm leading-relaxed font-inter">
            Four clear phases that keep your project fast and predictable, from
            our first conversation to a clean production handover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, idx) => (
            <div
              key={s.n}
              className="bg-white rounded-2xl border border-black/5 p-7 min-h-[280px] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-black/35 text-sm font-medium">{s.n}</span>
                <span
                  className="text-black/10 font-medium leading-none select-none"
                  style={{ fontSize: "88px", letterSpacing: "-0.06em" }}
                  aria-hidden="true"
                >
                  0{idx + 1}
                </span>
              </div>
              <div>
                <h3
                  className="text-black text-2xl font-medium leading-snug mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
