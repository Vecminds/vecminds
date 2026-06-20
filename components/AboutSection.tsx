const principles = [
  {
    n: "01",
    title: "End-to-end ownership.",
    body: "One team owns your system from first wireframe to live production traffic. No handoffs, no orphaned code, no finger-pointing.",
  },
  {
    n: "02",
    title: "Boring tech, used well.",
    body: "We pick proven tools and use them carefully. Hype-driven choices are the ones that cost you the most to live with later.",
  },
  {
    n: "03",
    title: "One team, deep ownership.",
    body: "The same people who write the plan write the code, and you work directly with them throughout.",
  },
  {
    n: "04",
    title: "Something useful by week two.",
    body: "No discovery purgatory. By the end of week two you'll have a real, working piece of the system in your hands.",
  },
  {
    n: "05",
    title: "AI where it earns its place.",
    body: "We add LLMs, RAG, and AI agents only where they cut real operational work, and we'll tell you when they won't, instead of shipping demo-day decoration.",
  },
  {
    n: "06",
    title: "No timesheets, no surprises.",
    body: "Fixed-scope discovery and clear monthly retainers. If the scope shifts, we re-plan together first. You never get a surprise invoice.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
          <div className="md:col-span-5">
            <p className="text-black/60 text-sm mb-2">About</p>
            <h2
              className="text-black text-5xl md:text-6xl font-medium leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              We build it,
              <br />
              and we own it.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6">
            <p
              className="text-black text-2xl md:text-3xl leading-snug"
              style={{ letterSpacing: "-0.02em" }}
            >
              We design, build, and run modern software systems, so the
              products you ship feel as good as they perform.
            </p>
            <p className="text-black/60 text-base md:text-lg leading-relaxed max-w-xl font-inter">
              Vecminds Technologies is a software development company of
              engineers and designers from product, platform, and AI
              backgrounds. We&apos;d rather ship one thing properly than juggle ten
              things badly. You work directly with the people building your
              product: no account managers, no layers, no theatre. We partner
              with founders and operators worldwide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-black/10">
          {principles.map((p) => (
            <article
              key={p.n}
              className="about-row relative p-7 md:p-8 border-b border-r border-black/10 flex flex-col gap-6"
            >
              <span className="text-black/40 text-sm font-medium tabular-nums">
                {p.n}
              </span>
              <div>
                <h3
                  className="text-black text-xl md:text-[22px] font-medium leading-snug mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {p.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
