const testimonials = [
  {
    id: 1,
    stars: 5,
    quote:
      'Vecminds Technologies built the website for J & N Caregiver Training and they understood exactly what we needed. The site works in both English and Japanese, and it had to look credible to students, families, and Japanese care facilities. They delivered all of that — plus a full admin dashboard we use every day.',
    name: 'Ram Krishna Shrestha',
    role: 'Managing Director',
    company: 'J & N Caregiver Training',
    initials: 'RKS',
    tag: 'Multilingual website',
  },
  {
    id: 2,
    stars: 5,
    quote:
      'We needed a SaaS dashboard that could handle complex data without overwhelming our users. Vecminds nailed the balance between depth and simplicity. The delivery was clean, the code quality was excellent, and they flagged edge cases we had not even considered.',
    name: 'Sanjay Patel',
    role: 'Co-Founder',
    company: 'KashFlow',
    initials: 'SP',
    tag: 'SaaS dashboard',
  },
  {
    id: 3,
    stars: 5,
    quote:
      'Our store relaunch exceeded every target in the first month — conversion rate up 34%, bounce rate down significantly. Vecminds built more than a good-looking site; they thought about every step of the customer journey.',
    name: 'Emily Rivera',
    role: 'Head of Marketing',
    company: 'Bloom Botanicals',
    initials: 'ER',
    tag: 'E-commerce',
  },
  {
    id: 4,
    stars: 5,
    quote:
      'As an architecture firm, our portfolio site had to feel as precise as our work. Vecminds understood that immediately. The result is clean, fast, and exactly what we envisioned — without a single revision wasted.',
    name: 'Aiden Nakamura',
    role: 'Principal',
    company: 'Sola Architects',
    initials: 'AN',
    tag: 'Portfolio site',
  },
  {
    id: 5,
    stars: 5,
    quote:
      'We needed a platform that could scale with our course catalog while staying simple for non-technical instructors. Vecminds nailed both. The admin experience is intuitive and the learner-facing design is genuinely beautiful.',
    name: 'Priya Mehta',
    role: 'CEO',
    company: 'MindBridge',
    initials: 'PM',
    tag: 'EdTech platform',
  },
  {
    id: 6,
    stars: 5,
    quote:
      'Our old system was held together with spreadsheets. Vecminds replaced it with a clean logistics dashboard that the whole team adopted in under a week. The ROI was visible within the first month of going live.',
    name: 'Carlos Herrera',
    role: 'Operations Lead',
    company: 'TrackRight',
    initials: 'CH',
    tag: 'Logistics dashboard',
  },
  {
    id: 7,
    stars: 5,
    quote:
      'Luxury e-commerce lives or dies on presentation. Vecminds understood our brand without needing to be told twice. The product pages feel as premium as the items they display, and our average order value has risen since launch.',
    name: 'Sophie Laurent',
    role: 'Founder',
    company: 'Maison & Co',
    initials: 'SL',
    tag: 'Luxury e-commerce',
  },
  {
    id: 8,
    stars: 5,
    quote:
      'We were skeptical about hiring a remote team, but Vecminds removed every doubt. Communication was clear, deadlines were met, and the final product is something we are genuinely proud to send clients to.',
    name: 'James Okafor',
    role: 'Director',
    company: 'BuildFast',
    initials: 'JO',
    tag: 'Company website',
  },
]

const row1 = testimonials.slice(0, 4)
const row2 = testimonials.slice(4)

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="w-[380px] shrink-0 bg-white rounded-2xl p-6 flex flex-col gap-4 border border-black/[0.04]">
      <div className="flex items-center justify-between gap-3">
        <Stars count={t.stars} />
        <span className="text-black/35 text-[11px] font-medium px-2.5 py-1 rounded-full border border-black/10 shrink-0">
          {t.tag}
        </span>
      </div>
      <p
        className="text-black/70 text-sm leading-relaxed line-clamp-3 flex-1"
        style={{ letterSpacing: '-0.01em' }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-2.5 pt-3 border-t border-black/[0.06]">
        <div className="w-8 h-8 rounded-full bg-[#2754D9] flex items-center justify-center text-white text-[10px] font-semibold shrink-0">
          {t.initials}
        </div>
        <div className="min-w-0">
          <p className="text-black text-sm font-medium leading-none truncate">{t.name}</p>
          <p className="text-black/45 text-xs mt-1 truncate">
            {t.role}, {t.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F5F5F5] py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-[88rem] mx-auto px-6 mb-14">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <p className="text-black/50 text-sm mb-2">What clients say</p>
            <h2
              className="text-black text-5xl md:text-6xl font-medium leading-none"
              style={{ letterSpacing: '-0.04em' }}
            >
              Don&apos;t just
              <br />
              take our word for it.
            </h2>
          </div>
          <p className="text-black/60 text-base max-w-sm leading-relaxed font-inter">
            Real results from real clients. Here&apos;s what it looks like when a project ships and starts paying off.
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="t-marquee-row mb-4">
        <div className="t-track-left flex gap-4 pr-4">
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="t-marquee-row">
        <div className="t-track-right flex gap-4 pr-4">
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
