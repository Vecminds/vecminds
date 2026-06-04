import { ArrowRight } from './icons'

  const testimonial = {
  stars: 5,
  quote:
    'Vecminds Technologies built the website for J & N Caregiver Training and they understood exactly what we needed. We train Nepalese caregivers for certified professional placement in Japan, so the site had to work in both English and Japanese, and it had to look credible to students, families, and Japanese care facilities who check us out online. They delivered all of that. On top of the public site they built us a full admin dashboard where we manage enrollments, student/partner inquiries, courses, blog posts, and success stories ourselves. Highly recommend Vecminds Technologies.',
  name: 'Ram Krishna Shrestha',
  role: 'Managing Director',
  company: 'J & N Caregiver Training',
  credential: 'Former Vice-President, NRNA Japan',
  initials: 'RKS',
  tag: 'Multilingual website',
  profileUrl: 'https://www.facebook.com/ramkrishnashrestha01/',
  project: {
    url: 'https://www.jncaregivertraining.com',
    urlLabel: 'jncaregivertraining.com',
  },
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
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
            Real work for a real client. Here&apos;s what it looks like when a project ships and starts paying off.
          </p>
        </div>

        {/* Unified card */}
        <div className="bg-white rounded-2xl overflow-hidden">

          {/* Quote area */}
          <div className="p-8 sm:p-12">
            <div className="flex items-center justify-between mb-8">
              <Stars count={testimonial.stars} />
              <span className="text-black/40 text-xs font-medium px-3 py-1.5 rounded-full border border-black/10">
                {testimonial.tag}
              </span>
            </div>

            <div className="flex gap-5 items-start">
              <div
                className="text-[#2754D9] font-medium shrink-0 select-none leading-none mt-1"
                style={{ fontSize: '64px', lineHeight: '0.85', letterSpacing: '-0.04em' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p
                className="text-black/80 text-lg leading-relaxed"
                style={{ letterSpacing: '-0.01em' }}
              >
                {testimonial.quote}
              </p>
            </div>
          </div>

          {/* Footer strip */}
          <div className="border-t border-black/[0.06] bg-black/[0.03] px-8 sm:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

            {/* Author */}
            <div className="flex items-center gap-3">
              <a
                href={testimonial.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${testimonial.name} on Facebook`}
                className="w-10 h-10 rounded-full bg-[#2754D9] flex items-center justify-center text-white text-xs font-semibold shrink-0 hover:opacity-90 transition-opacity"
              >
                {testimonial.initials}
              </a>
              <div>
                <p className="text-black text-sm font-medium">{testimonial.name}</p>
                <p className="text-black/50 text-xs mt-0.5">
                  {testimonial.role}, {testimonial.company}
                </p>
                <p className="text-black/35 text-xs mt-0.5">{testimonial.credential}</p>
              </div>
            </div>

            {/* Project proof */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden sm:block text-right">
                <p className="text-black/40 text-xs mb-0.5">Live project</p>
                <p className="text-black/60 text-sm font-mono">{testimonial.project.urlLabel}</p>
              </div>
              <a
                href={testimonial.project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-[#2754D9] transition-colors duration-200 group"
              >
                Visit the live site
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
