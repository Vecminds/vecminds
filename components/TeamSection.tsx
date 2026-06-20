import Image from "next/image";
import { ArrowRight } from "./icons";

const TEAM_PALETTE = [
  {
    bg: "#2754D9",
    infoBg: "#3A7CE6",
    text: "#FFFFFF",
    accent: "rgba(255,255,255,0.12)",
  },
  {
    bg: "#C9D2C0",
    infoBg: "#D7E5CD",
    text: "#0B1530",
    accent: "rgba(11,21,48,0.10)",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

function MemberPortrait({
  name,
  paletteIndex,
  photo,
}: {
  name: string;
  paletteIndex: number;
  photo?: string;
}) {
  const p = TEAM_PALETTE[paletteIndex % TEAM_PALETTE.length];

  if (photo) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 300px, 50vw"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: p.bg }}
    >
      <span
        aria-hidden="true"
        className="absolute top-4 left-4 font-medium leading-none"
        style={{ color: p.accent, fontSize: "14px", letterSpacing: "0.04em" }}
      >
        ○
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-12 -right-12 rounded-full"
        style={{ width: "140px", height: "140px", backgroundColor: p.accent }}
      />
      <span
        className="absolute inset-0 flex items-center justify-center font-medium select-none"
        style={{
          color: p.text,
          fontSize: "88px",
          letterSpacing: "-0.04em",
          opacity: 0.92,
        }}
      >
        {initials(name)}
      </span>
    </div>
  );
}

function TeamGlyph({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M11 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
    </svg>
  );
}

const founder = {
  name: "Ish Shrestha",
  role: "Founder, Project/Technical Lead",
  photo: "/team/ish-vec.png",
  specialty:
    "Your direct line into the team, no account managers in between. Full-stack and backend-heavy across React, .NET, Python, SaaS, RAG, and AI workflows, plus the product decisions that don't come with a clean answer.",
  linkedin: "https://linkedin.com/company/vecminds",
  github: "https://github.com/vecminds",
};

const collective = {
  heading: "The team",
  body: "Senior engineers from product, platform, and AI backgrounds. They own what they build end to end, write the code behind every plan, and work directly with you throughout.",
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: founder.name,
  jobTitle: founder.role,
  description: founder.specialty,
  worksFor: {
    "@id": "https://www.vecminds.com/#team",
  },
  sameAs: [founder.linkedin, founder.github],
};

export default function TeamSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />
      <section id="team" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="text-black/60 text-sm mb-2">Team</p>
            <h2
              className="text-black text-5xl md:text-6xl font-medium leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              The people
              <br />
              doing the work.
            </h2>
            <p className="text-black/60 text-base leading-relaxed mt-6 max-w-sm font-inter">
              One team that owns your product end to end. No account
              managers, no layers. You work directly with the engineers
              building it, and the same people who write the plan write the
              code.
            </p>
            <a
              href="https://vecminds.notion.site/Careers-Vecminds-Technologies-36c43b2206fe806e8ce0c2c07325c591"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our team"
              className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-[#2754D9] text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
            >
              Join our team
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[300px_1fr] gap-4 items-stretch">
            {/* Founder */}
            <article
              tabIndex={0}
              className="team-card is-active relative overflow-hidden rounded-2xl mx-auto w-full max-w-[300px] sm:max-w-none lg:max-w-none"
              style={{ height: "clamp(380px, 50vh, 480px)" }}
            >
              <div className="team-portrait absolute inset-0">
                <MemberPortrait
                  name={founder.name}
                  paletteIndex={0}
                  photo={founder.photo}
                />
              </div>
              <div
                className="team-info absolute inset-x-0 bottom-0 p-5"
                style={{ backgroundColor: TEAM_PALETTE[0].infoBg }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <h3
                      className="text-[15px] font-medium leading-tight text-white"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {founder.name}
                    </h3>
                    <p className="text-[13px] mt-0.5 text-white/60">
                      {founder.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-7 h-7 flex items-center justify-center rounded-full text-white/85 hover:bg-white/10"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                      </svg>
                    </a>
                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-7 h-7 flex items-center justify-center rounded-full text-white/85 hover:bg-white/10"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-[13px] leading-snug font-inter text-white/70">
                  {founder.specialty}
                </p>
              </div>
            </article>

            {/* The rest of the team, as a collective */}
            <article
              className="relative overflow-hidden rounded-2xl p-7 sm:p-8 flex flex-col justify-between"
              style={{
                backgroundColor: TEAM_PALETTE[1].infoBg,
                minHeight: "clamp(380px, 50vh, 480px)",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute -bottom-16 -right-16 rounded-full"
                style={{
                  width: "220px",
                  height: "220px",
                  backgroundColor: TEAM_PALETTE[1].accent,
                }}
              />
              <span className="relative z-10 w-12 h-12 rounded-xl bg-black/[0.06] text-black/55 flex items-center justify-center">
                <TeamGlyph className="w-6 h-6" />
              </span>
              <div className="relative z-10">
                <h3
                  className="text-black text-2xl font-medium leading-snug mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {collective.heading}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed max-w-sm font-inter">
                  {collective.body}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
