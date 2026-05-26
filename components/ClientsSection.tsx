import { HERO_BRANDS } from '@/lib/data'

export default function ClientsSection() {
  const items = [...HERO_BRANDS, ...HERO_BRANDS, ...HERO_BRANDS]
  return (
    <section className="bg-[#F5F5F5] px-6 py-20">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-1">
          <p className="text-black/60 text-sm mb-2">Clients</p>
          <h3 className="text-black text-2xl md:text-3xl font-medium leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Teams who chose
            <br />
            us as their studio.
          </h3>
        </div>
        <div className="md:col-span-3 overflow-hidden border-y border-black/10 py-8">
          <div className="marquee-track">
            {items.map((b, i) => (
              <span key={i} className="mx-10 shrink-0 text-black/55 whitespace-nowrap" style={{ ...b.style, fontSize: '20px' }}>
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
