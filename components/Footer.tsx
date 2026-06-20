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
  "Custom Software": "/services/custom-software-development",
  "AI & Automation": "/services/ai-development-automation",
  "Web Apps": "/services/custom-software-development",
  "Mobile Apps": "/services/custom-software-development",
  "API & Integrations": "/services/custom-software-development",
  "Case studies": "/#work",
  Industries: "/#work",
  "Client stories": "/#work",
  Process: "/#process",
  Playbook: "/#process",
  Newsletter: "/#contact",
  About: "/#about",
  Team: "/#team",
  Contact: "/#contact",
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
                Send us what you&apos;re building. Within 48 hours
                we&apos;ll write back with a sharp, honest read on it,
                no call required.
              </p>
              <div className="flex flex-col md:items-end gap-3">
                <a
                  href="mailto:info@vecminds.com?subject=New%20project"
                  className="self-start md:self-auto inline-flex items-center gap-3 bg-white text-black text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-white/90 transition-colors duration-200"
                >
                  Send us your project
                  <span className="bg-black rounded-full p-2 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </a>
                <p className="text-white/50 text-sm">
                  No call required, but if you&apos;d rather talk,{" "}
                  <CalComButton className="underline underline-offset-2 hover:text-white transition-colors duration-200">
                    here&apos;s the link
                  </CalComButton>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Risk reversal */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              "A free, written read within 48 hours, no call required",
              "Paid discovery is optional: a small fixed fee, credited toward the build",
              "You keep the plan even if you don't build with us",
              "No long lock-in contracts",
            ].map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 text-white/75 text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 shrink-0 text-white"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-16">
          <div className="shrink-0">
            <a href="/" className="flex items-center text-black mb-5">
              <Image
                src="/Vecminds_Full_Logo.png"
                alt="Vecminds Technologies logo"
                width={176}
                height={44}
                style={{ height: "44px", width: "auto" }}
              />
            </a>
            <p className="text-black/60 text-sm leading-relaxed max-w-xs mb-6">
              A focused software development company building AI-native
              products, automation, and production-grade software for ambitious
              teams.
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
                  {col.links.map((l) => {
                    const href = footerLinkMap[l];
                    const isExternal = href?.startsWith("http");
                    return (
                      <li key={l}>
                        <a
                          href={href}
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="text-black/60 hover:text-black text-sm transition-colors duration-200"
                        >
                          {l}
                        </a>
                      </li>
                    );
                  })}
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
            <a
              href="mailto:info@vecminds.com"
              className="hover:text-black transition-colors duration-200"
            >
              info@vecminds.com
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs text-black/50">
            <a
              href="/privacy-policy"
              className="hover:text-black transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span>NP · EN · Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
