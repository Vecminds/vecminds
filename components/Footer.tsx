"use client";

import Image from "next/image";
import { ArrowRight } from "./icons";
import CalComButton from "./CalComButton";

const columns = [
  {
    title: "Services",
    links: [
      "Custom Software",
      "AI & Automation",
      "Web Apps",
      "Mobile Apps",
      "API & Integrations",
    ],
  },
  // {
  //   title: "Work",
  //   links: ["Case studies", "Industries", "Client stories", "Process"],
  // },
  {
    title: "Company",
    links: ["About", "Team", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog"],
  },
];

const footerLinkMap: Record<string, string> = {
  "Custom Software": "#services",
  "AI & Automation": "#services",
  "Web Apps": "#services",
  "Mobile Apps": "#services",
  "API & Integrations": "#services",
  "Case studies": "#work",
  Industries: "#work",
  "Client stories": "#work",
  Process: "#process",
  Playbook: "#process",
  Newsletter: "#contact",
  About: "#about",
  Team: "#team",
  Contact: "#contact",
  Blog: "https://blog.vecminds.com/",
};

const socials = [
  { label: "X", ariaLabel: "X (Twitter)", href: "https://x.com/vecminds" },
  { label: "GH", ariaLabel: "GitHub", href: "https://github.com/vecminds" },
  { label: "Ln", ariaLabel: "LinkedIn", href: "https://linkedin.com/company/vecminds" },
];

export default function Footer() {

  return (
    <footer id="contact" className="bg-[#F5F5F5] px-4 sm:px-6 pt-12 pb-8">
      <div className="max-w-[88rem] mx-auto">
        {/* Dark CTA block */}
        <div
          className="relative rounded-3xl overflow-hidden p-6 sm:p-10 md:p-16 mb-12"
          style={{ backgroundColor: "#2754D9" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
            <div>
              <p className="text-white/50 text-sm mb-4">Get started</p>
              <h2
                className="text-white text-4xl md:text-6xl font-medium leading-none"
                style={{ letterSpacing: "-0.04em" }}
              >
                Let&apos;s build
                <br />
                something that lasts.
              </h2>
            </div>
            <div className="flex flex-col md:items-end gap-6">
              <p className="text-white/60 text-base md:text-lg max-w-sm md:text-right">
                Tell us what you&apos;re building. We&apos;ll come back with a
                sharp plan, a small team, and a realistic timeline — usually
                within 48 hours.
              </p>
              <div className="flex items-center gap-3">
                <CalComButton className="inline-flex items-center gap-3 bg-white text-black text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-white/90 transition-colors duration-200">
                  Book a Call
                  <span className="bg-black rounded-full p-2 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </CalComButton>
                <a
                  href="mailto:info@vecminds.com"
                  className="inline-flex items-center text-white text-base font-medium px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors duration-200"
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-16">
          <div className="shrink-0">
            <a href="#" className="flex items-center text-black mb-5">
              <Image
                src="/Vecminds_Full_Logo.png"
                alt="Vecminds Technologies"
                width={176}
                height={44}
                style={{ height: "44px", width: "auto" }}
              />
            </a>
            <p className="text-black/60 text-sm leading-relaxed max-w-xs mb-6">
              A focused engineering studio building AI-native products,
              automation, and production-grade software for ambitious teams.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.ariaLabel}
                  className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-black/70 hover:bg-black hover:text-white hover:border-black transition-colors duration-200 text-xs font-medium"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:flex md:justify-end  md:gap-10 lg:gap-20 gap-8 md:pr-[3.5rem]">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-black text-sm font-medium mb-4">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href={footerLinkMap[l]}
                        className="text-black/60 hover:text-black text-sm transition-colors duration-200"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Giant wordmark */}
        <div
          className="w-full overflow-hidden mb-8 select-none"
          aria-hidden="true"
        >
          <div
            className="text-black leading-[0.9] whitespace-nowrap font-medium"
            style={{
              letterSpacing: "-0.06em",
              textAlign: "center",
              fontSize: "clamp(48px, 15vw, 221px)",
            }}
          >
            Vecminds
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center md:flex-row md:items-center justify-between gap-3 pt-6 border-t border-black/10">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-black/50 text-center sm:text-left">
            <span className="shrink-0">
              © 2026 Vecminds Technologies Pvt. Ltd.
            </span>
            <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2">
              {["Privacy", "Terms", "Cookies", "Disclosures"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="hover:text-black transition-colors duration-200"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-black/50">
            <span>NP · EN · Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
