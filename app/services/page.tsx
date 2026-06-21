import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ArrowRight, ServiceGlyph } from "@/components/icons";
import { SERVICES, SERVICES_BASE_PATH } from "@/lib/services";

const canonical = `https://www.vecminds.com${SERVICES_BASE_PATH}`;

export const metadata: Metadata = {
  title: "Services | Custom Software & AI Development | Vecminds",
  description:
    "Two services: custom software development, and AI development & automation. See what's included, how each engagement runs, and what you walk away with.",
  alternates: { canonical },
  openGraph: {
    title: "Services | Custom Software & AI Development | Vecminds",
    description:
      "Two services: custom software development, and AI development & automation. See what's included, how each engagement runs, and what you walk away with.",
    url: canonical,
    siteName: "Vecminds Technologies",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Custom Software & AI Development | Vecminds",
    description:
      "Two services: custom software development, and AI development & automation. See what's included, how each engagement runs, and what you walk away with.",
    images: ["/og-image.png"],
  },
};

export default function ServicesIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vecminds.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: canonical },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vecminds Services",
    url: canonical,
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://www.vecminds.com${SERVICES_BASE_PATH}/${s.slug}`,
      description: s.metaDescription,
    })),
  };

  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ScrollReveal />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
          <div className="max-w-[88rem] mx-auto">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-black/50">
                <li>
                  <Link href="/" className="hover:text-black transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-black/80">Services</li>
              </ol>
            </nav>

            <p className="text-black/60 text-sm mb-2">Services</p>
            <h1
              className="text-black text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.02] mb-6 max-w-3xl"
              style={{ letterSpacing: "-0.04em" }}
            >
              Custom software and AI,
              <br />
              built and owned end to end.
            </h1>
            <p className="text-black/65 text-lg md:text-xl max-w-2xl leading-relaxed font-inter">
              We build products from scratch, and we build the AI and automation that goes into them or runs alongside them. We own the product end to end, from discovery to delivery, and we ship fast.
            </p>
          </div>
        </section>

        {/* Service cards */}
        <section className="px-6 pb-16">
          <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((s, idx) => {
              const dark = idx === 1;
              return (
                <Link
                  key={s.slug}
                  href={`${SERVICES_BASE_PATH}/${s.slug}`}
                  aria-label={`Explore ${s.title}`}
                  className={`svc-card ${dark ? "svc-card-dark" : "svc-card-light"} group relative rounded-2xl p-6 sm:p-7 md:p-9 min-h-[400px] sm:min-h-[440px] flex flex-col justify-between overflow-hidden cursor-pointer`}
                  style={{
                    backgroundColor: dark ? "#2754D9" : "#FFFFFF",
                    border: dark
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="svc-wash absolute inset-0 pointer-events-none"
                    style={{
                      background: dark
                        ? "radial-gradient(circle at 90% 110%, rgba(180,160,255,0.22), transparent 55%)"
                        : "radial-gradient(circle at 90% 110%, rgba(43,38,68,0.06), transparent 55%)",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className={`svc-ghost absolute pointer-events-none select-none leading-none font-medium ${dark ? "text-white/[0.06]" : "text-black/[0.05]"}`}
                    style={{
                      fontSize: "220px",
                      letterSpacing: "-0.06em",
                      right: "-12px",
                      bottom: "-40px",
                    }}
                  >
                    {s.eyebrow.replace("Service ", "0")}
                  </div>

                  <div className="relative z-10 flex items-start justify-between">
                    <span
                      className={`text-sm font-medium ${dark ? "text-white/45" : "text-black/40"}`}
                    >
                      {s.eyebrow}
                    </span>
                    <span
                      className={`svc-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center ${dark ? "bg-white/10 text-white" : "bg-black/[0.05] text-black"}`}
                    >
                      <ServiceGlyph kind={s.glyph} className="w-6 h-6" />
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h2
                      className={`svc-title text-2xl md:text-3xl font-medium leading-snug mb-3 ${dark ? "text-white" : "text-black"}`}
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {s.title}
                    </h2>
                    <p
                      className={`text-sm leading-relaxed mb-5 max-w-md ${dark ? "text-white/65" : "text-black/60"}`}
                    >
                      {s.heroLead}
                    </p>

                    <ul
                      className={`mb-5 flex flex-wrap gap-2`}
                    >
                      {s.tags.map((t) => (
                        <li
                          key={t}
                          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm ${dark ? "bg-white/10 text-white/85" : "bg-black/[0.04] text-black/70"}`}
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`text-sm font-medium ${dark ? "text-white/70" : "text-black/60"}`}
                      >
                        Explore service
                      </span>
                      <span
                        className={`svc-arrow shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${dark ? "bg-white/10 text-white" : "bg-black/[0.05] text-black"}`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Pricing transparency */}
        <section className="px-6 pb-24">
          <div className="max-w-[88rem] mx-auto">
            <div className="rounded-2xl bg-white border border-black/5 px-6 sm:px-8 py-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                "Fixed-fee discovery",
                "Monthly engagement, not timesheets",
                "No surprise change-orders",
              ].map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 text-black/65 text-sm"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 shrink-0 text-[#2754D9]"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {point}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingActions />
    </div>
  );
}
