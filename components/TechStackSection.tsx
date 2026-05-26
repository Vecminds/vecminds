import { BACKERS } from "@/lib/data";

export default function TechStackSection() {
  const items = [...BACKERS, ...BACKERS];
  return (
    <section id="tech-stack" className="bg-[#F5F5F5] px-6 py-12">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <h2 className="text-black/70 text-base leading-relaxed font-normal m-0">
          The stack we trust
          <br />
          in production, every day.
        </h2>
        <div className="md:col-span-3 overflow-hidden">
          <div className="backers-track items-center">
            {items.map((b, i) => (
              <span
                key={i}
                className="mx-8 shrink-0 inline-flex items-center gap-2.5 whitespace-nowrap"
                title={b.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.src}
                  alt={b.name}
                  loading="lazy"
                  className="h-7 w-auto select-none"
                  style={{
                    maxWidth: "40px",
                    objectFit: "contain",
                    filter: b.invert ? "invert(0.15)" : "none",
                    opacity: 0.85,
                  }}
                />
                <span className="text-black/55 text-sm font-medium tracking-tight">
                  {b.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
