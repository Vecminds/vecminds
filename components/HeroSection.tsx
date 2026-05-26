import { ArrowRight } from './icons'
import { HERO_BRANDS } from '@/lib/data'

function HeroMarquee() {
  const items = [...HERO_BRANDS, ...HERO_BRANDS]
  return (
    <div className="mt-24 w-full max-w-md overflow-hidden">
      <div className="marquee-track">
        {items.map((b, i) => (
          <span key={i} className="mx-7 shrink-0 text-black/60 whitespace-nowrap" style={b.style}>
            {b.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="flex-1 px-4 sm:px-6 pt-16 sm:pt-20 pb-4 sm:pb-6 flex items-end">
      <div className="max-w-[88rem] mx-auto w-full">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ minHeight: 'min(720px, calc(100dvh - 96px))' }}
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover absolute inset-0 w-full h-full"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4"
          />

          <div className="relative z-10 flex flex-col items-start justify-start h-full p-6 pt-24 sm:p-10 sm:pt-28 md:p-12 md:pt-36">
            <h1
              className="text-black text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-xl mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              Agile minds.
              <br />
              Relentless solutions.
            </h1>
            <p
              className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed font-inter"
            >
              We&apos;re a small team of engineers, focused on building AI-native products,
              automation systems, and production-grade software for ambitious teams.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-7 sm:pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
            >
              Start a project
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
