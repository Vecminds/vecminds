import { ArrowRight } from './icons'

const featured = {
  quote:
    "Really good work. The multilingual website Vecminds built for us is already helping improve our conversion rate.",
  name: 'Ram Krishna Shrestha',
  role: 'Managing Director, J & N Caregiver Training',
  credential: 'Former Vice President, NRNA Japan',
  project: 'Multilingual website',
  url: 'https://www.jncaregivertraining.com',
  urlLabel: 'jncaregivertraining.com',
  facebook: 'https://www.facebook.com/ramkrishnashrestha01/',
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-black/60 text-sm mb-2">What clients say</p>
            <h2 className="text-black text-5xl md:text-6xl font-medium leading-none" style={{ letterSpacing: '-0.04em' }}>
              Don&apos;t just
              <br />
              take our word for it.
            </h2>
          </div>
          <p className="text-black/60 text-base max-w-sm leading-relaxed font-inter">
            Real work for a real client. Here&apos;s what it looks like when a project ships and starts paying off.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Featured quote */}
          <div
            className="lg:col-span-2 rounded-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[360px]"
            style={{ backgroundColor: '#2754D9' }}
          >
            <div
              className="text-white/30 leading-none font-medium"
              style={{ fontSize: '120px', letterSpacing: '-0.06em', height: '60px' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <p className="text-white text-2xl md:text-3xl leading-snug max-w-2xl" style={{ letterSpacing: '-0.02em' }}>
              {featured.quote}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <a
                  href={featured.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${featured.name} on Facebook`}
                  className="w-9 h-9 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
                  </svg>
                </a>
                <div>
                  <p className="text-white text-base font-medium">{featured.name}</p>
                  <p className="text-white/70 text-sm">{featured.role}</p>
                  <p className="text-white/50 text-xs mt-0.5">{featured.credential}</p>
                </div>
              </div>
              <span className="text-white/40 text-xs font-medium">{featured.project}</span>
            </div>
          </div>

          {/* Proof panel: live project + low-commitment CTA */}
          <div className="lg:col-span-1 bg-white rounded-2xl border border-black/5 p-6 sm:p-8 flex flex-col justify-between min-h-[360px]">
            <div>
              <p className="text-black/50 text-sm mb-2">Live project</p>
              <h3 className="text-black text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
                J &amp; N Caregiver Training
              </h3>
              <p className="text-black/60 text-sm leading-relaxed mt-3">
                A multilingual website built to reach a wider audience and turn more visitors into enrolled students.
              </p>
            </div>
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 mt-6 px-5 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
            >
              Visit the live site
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
