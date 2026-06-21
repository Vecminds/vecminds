import { ArrowRight } from "./icons";
import { TRUST_STATS } from "./TrustStripSection";

export default function HeroSection() {
  return (
    <section className="flex-1 px-4 sm:px-6 pt-16 sm:pt-20 pb-4 sm:pb-6 flex items-end">
      <div className="max-w-[88rem] mx-auto w-full">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ minHeight: "min(720px, calc(100dvh - 96px))" }}
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            aria-label="Vecminds Technologies custom software and AI development"
            className="object-cover absolute inset-0 w-full h-full"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          />

          {/* Scrim — keeps black text legible against any video frame */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,245,245,0.72) 0%, rgba(245,245,245,0.38) 38%, transparent 62%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-start justify-start h-full p-6 pt-24 sm:p-10 sm:pt-28 md:p-12 md:pt-36">
            <h1
              className="text-black text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] max-w-xl mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              <span className="sr-only">Vecminds Technologies: AI and custom software development company that owns what it ships</span>
              <span aria-hidden="true">
                Software that ships.
                <br />
                AI only where it earns its place.
              </span>
            </h1>
            <p className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed font-inter">
              One team owns your product end to end. You bring the idea
              or the messy problem, and work directly with the engineers
              who build the custom software, AI, and automation that ships
              fast and keeps paying off long after we hand it over.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-7 sm:pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Start your project
                <span className="bg-white rounded-full p-2 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black" />
                </span>
              </a>
              <a
                href="#testimonials"
                className="inline-flex items-center gap-2 text-black text-base md:text-lg font-medium px-6 py-3.5 rounded-full border border-black/20 bg-white/80 hover:bg-white transition-colors duration-200"
              >
                See our work
              </a>
            </div>

            {/* Trust strip — compact proof under the CTAs */}
            {/* <div className="mt-7 inline-flex items-center gap-x-5 gap-y-2 flex-wrap bg-white/65 backdrop-blur-sm border border-black/10 rounded-xl px-5 py-3">
              {TRUST_STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-5">
                  {i > 0 && (
                    <span aria-hidden="true" className="hidden sm:block w-px h-6 bg-black/15" />
                  )}
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-black font-semibold tabular-nums text-base"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {s.value}
                    </span>
                    <span className="text-black/60 text-xs leading-tight max-w-[7rem]">
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
