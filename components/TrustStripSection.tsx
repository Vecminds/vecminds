export const TRUST_STATS = [
  { value: "3+", label: "Years of building" },
  { value: "10+", label: "Projects shipped" },
];

export default function TrustStripSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 py-12">
      <div className="max-w-[88rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-black/10 border border-black/10">
        {TRUST_STATS.map((s) => (
          <div
            key={s.label}
            className="bg-[#F5F5F5] p-6 sm:p-8 flex flex-col gap-1"
          >
            <span
              className="text-black font-medium leading-none tabular-nums"
              style={{ fontSize: "44px", letterSpacing: "-0.04em" }}
            >
              {s.value}
            </span>
            <span className="text-black/55 text-sm leading-snug mt-2">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
