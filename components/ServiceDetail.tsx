import Link from "next/link";
import { ArrowRight, ServiceGlyph, DeliverableIcon } from "./icons";
import CalComButton from "./CalComButton";
import FaqAccordion from "./FaqAccordion";
import { BACKERS } from "@/lib/data";
import {
  SERVICES_BASE_PATH,
  type Service,
  getOtherService,
} from "@/lib/services";

export default function ServiceDetail({ service }: { service: Service }) {
  const other = getOtherService(service.slug);
  const stackItems = BACKERS.filter(
    (b, i, arr) => service.stack.includes(b.name) && arr.findIndex((x) => x.name === b.name) === i,
  );

  return (
    <main className="bg-[#F5F5F5]">
      {/* Hero */}
      <section className="px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
        <div className="max-w-[88rem] mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-black/50">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-black transition-colors"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-black/80">{service.shortName}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-11 h-11 rounded-xl bg-[#2754D9] text-white flex items-center justify-center">
                  <ServiceGlyph kind={service.glyph} className="w-6 h-6" />
                </span>
                <span className="text-black/55 text-sm font-medium">
                  {service.eyebrow}
                </span>
              </div>
              <h1
                className="text-black text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.02] mb-6"
                style={{ letterSpacing: "-0.04em" }}
              >
                {service.title}
              </h1>
              <p className="text-black/65 text-lg md:text-xl max-w-2xl leading-relaxed font-inter">
                {service.heroLead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
                >
                  Start your project
                  <span className="bg-white rounded-full p-2 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </span>
                </a>
                <CalComButton className="inline-flex items-center text-black text-base font-medium px-6 py-3 rounded-full border border-black/20 bg-white hover:bg-white/70 transition-colors duration-200">
                  Book a call
                </CalComButton>
              </div>
            </div>

            {/* Capability tags */}
            <div className="md:col-span-4 md:pt-2">
              <p className="text-black/50 text-sm mb-4">What this covers</p>
              <ul className="border-t border-black/10">
                {service.tags.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 py-3 border-b border-black/10 text-black/80"
                  >
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#2754D9] shrink-0"
                    />
                    <span style={{ letterSpacing: "-0.005em" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="px-6 py-16">
        <div className="max-w-[88rem] mx-auto">
          <p className="text-black/60 text-sm mb-2">Outcomes</p>
          <h2
            className="text-black text-4xl md:text-5xl font-medium leading-none mb-10"
            style={{ letterSpacing: "-0.04em" }}
          >
            What you walk away with.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.outcomes.map((o, i) => (
              <div
                key={o}
                className="relative bg-white rounded-2xl overflow-hidden p-7 sm:p-8 flex flex-col justify-between"
              >
                {/* Blue top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2754D9]" />

                {/* Ghost number */}
                {/* <span
                  aria-hidden="true"
                  className="absolute right-4 bottom-1 text-black/[0.045] font-medium leading-none select-none pointer-events-none"
                  style={{ fontSize: "120px", letterSpacing: "-0.06em" }}
                >
                  0{i + 1}
                </span> */}

                <div className="relative z-10">
                  <span className="text-[#2754D9] text-xs font-semibold tracking-[0.1em] uppercase mb-4 block">
                    0{i + 1}
                  </span>
                  <p
                    className="text-black text-lg md:text-xl font-medium leading-snug"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {o}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="px-6 py-16">
        <div className="max-w-[88rem] mx-auto">
          <p className="text-black/60 text-sm mb-2">What we build</p>
          <h2
            className="text-black text-4xl md:text-5xl font-medium leading-none mb-10"
            style={{ letterSpacing: "-0.04em" }}
          >
            The work, specifically.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {service.deliverables.map((d, i) => (
              <div
                key={d.title}
                className="dlv-card relative bg-white rounded-2xl border border-black/5 p-6 sm:p-8 overflow-hidden"
              >
                {/* Radial wash — fades in on hover, mirrors svc-wash */}
                <div
                  className="svc-wash absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 90% 110%, rgba(43,38,68,0.06), transparent 55%)",
                  }}
                />

                {/* Ghost number */}
                <span
                  aria-hidden="true"
                  className="dlv-ghost absolute right-5 -bottom-7 text-black/[0.045] font-medium leading-none select-none pointer-events-none"
                  style={{ fontSize: "150px", letterSpacing: "-0.06em" }}
                >
                  0{i + 1}
                </span>

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-7">
                  {/* Icon tile */}
                  <span className="dlv-icon shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#2754D9]/[0.08] text-[#2754D9] flex items-center justify-center">
                    <DeliverableIcon kind={d.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-black/30 text-xs font-medium tabular-nums">
                        0{i + 1}
                      </span>
                      <h3
                        className="text-black text-2xl md:text-[28px] font-medium leading-tight"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {d.title}
                      </h3>
                    </div>
                    <p className="text-black/60 text-base leading-relaxed font-inter max-w-2xl">
                      {d.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {d.points.map((p) => (
                        <li
                          key={p}
                          className="dlv-chip inline-flex items-center gap-2 bg-black/[0.04] text-black/70 text-sm rounded-full px-3.5 py-1.5"
                        >
                          <span
                            aria-hidden="true"
                            className="w-1.5 h-1.5 rounded-full bg-[#2754D9] shrink-0"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-16">
        <div className="max-w-[88rem] mx-auto">
          <p className="text-black/60 text-sm mb-2">How we work</p>
          <h2
            className="text-black text-4xl md:text-5xl font-medium leading-none mb-10"
            style={{ letterSpacing: "-0.04em" }}
          >
            A process built to hand over.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((p, idx) => (
              <div
                key={p.n}
                className="bg-white rounded-2xl border border-black/5 p-7 min-h-[280px] flex flex-col justify-between relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-black/35 text-sm font-medium">
                    {p.n}
                  </span>
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
                    {p.title}
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      {stackItems.length > 0 && (
        <section className="px-6 py-16">
          <div className="max-w-[88rem] mx-auto">
            <p className="text-black/60 text-sm mb-2">Tech stack</p>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-none mb-10"
              style={{ letterSpacing: "-0.04em" }}
            >
              Tools we trust in production.
            </h2>
            <div className="flex flex-wrap gap-3">
              {stackItems.map((b) => (
                <span
                  key={b.name}
                  className="inline-flex items-center gap-2.5 bg-white rounded-full border border-black/10 px-4 py-2.5"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={b.src}
                    alt={b.name}
                    loading="lazy"
                    className="h-5 w-5 select-none"
                    style={{
                      objectFit: "contain",
                      filter: b.invert ? "invert(0.15)" : "none",
                    }}
                  />
                  <span className="text-black/75 text-sm font-medium">
                    {b.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-12">
            <p className="text-black/60 text-sm mb-2">FAQ</p>
            <h2
              className="text-black text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              Questions,
              <br />
              answered.
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm mb-8 font-inter">
              Questions specific to this service. More on the{" "}
              <Link
                href="/#faq"
                className="text-[#2754D9] hover:underline font-medium"
              >
                main FAQ
              </Link>
              , or send us a note and we&apos;ll answer it directly.
            </p>
            {/* <CalComButton className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Book a call
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </CalComButton> */}
          </div>

          <div className="md:col-span-8">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related links — other service + blog */}
      <section className="px-6 py-16">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {other && (
            <Link
              href={`${SERVICES_BASE_PATH}/${other.slug}`}
              aria-label={`Explore ${other.title}`}
              className="svc-card svc-card-light relative rounded-2xl p-7 sm:p-9 min-h-[260px] flex flex-col justify-between overflow-hidden cursor-pointer"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Radial wash */}
              <div
                className="svc-wash absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 90% 110%, rgba(43,38,68,0.06), transparent 55%)",
                }}
              />

              {/* Ghost number */}
              <div
                aria-hidden="true"
                className="svc-ghost absolute pointer-events-none select-none leading-none font-medium text-black/[0.05]"
                style={{
                  fontSize: "220px",
                  letterSpacing: "-0.06em",
                  right: "-12px",
                  bottom: "-40px",
                }}
              >
                {other.eyebrow.replace("Service ", "0")}
              </div>

              <div className="relative z-10 flex items-start justify-between">
                <span className="text-sm font-medium text-black/40">
                  {other.eyebrow}
                </span>
                <span className="svc-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center bg-black/[0.05] text-black">
                  <ServiceGlyph kind={other.glyph} className="w-6 h-6" />
                </span>
              </div>

              <div className="relative z-10">
                <p className="text-black/50 text-sm mb-2">Our other service</p>
                <h3
                  className="svc-title text-black text-2xl md:text-3xl font-medium leading-snug mb-6"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {other.title}
                </h3>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-black/60">
                    Explore service
                  </span>
                  <span className="svc-arrow shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-black/[0.05] text-black">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="bg-[#2754D9] rounded-2xl p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="text-white/55 text-sm mb-3">From the blog</p>
              <h3
                className="text-white text-2xl md:text-3xl font-medium leading-snug"
                style={{ letterSpacing: "-0.02em" }}
              >
                How we think about building.
              </h3>
            </div>
            <div className="flex flex-col gap-2 mt-6">
              {service.blogLinks.map((b) => (
                <a
                  key={b.href}
                  href={b.href}
                  className="inline-flex items-center gap-2 text-white font-medium hover:underline"
                >
                  {b.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
