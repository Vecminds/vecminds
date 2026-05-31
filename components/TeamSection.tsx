import { ArrowRight } from "./icons";

const TEAM_PALETTE = [
  
  {
    bg: "#2754D9",
    infoBg: "#3A7CE6",
    text: "#FFFFFF",
    accent: "rgba(255,255,255,0.12)",
  },{
    bg: "#C9D2C0",
    infoBg: "#D7E5CD",
    text: "#0B1530",
    accent: "rgba(11,21,48,0.10)",
  },
  {
    bg: "#E4DED1",
    infoBg: "#EDE7DA",
    text: "#0B1530",
    accent: "rgba(11,21,48,0.10)",
  },
  {
    bg: "#E5D7CF",
    infoBg: "#EFE3DC",
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
  fill,
}: {
  name: string;
  paletteIndex: number;
  fill?: boolean;
}) {
  const p = TEAM_PALETTE[paletteIndex % TEAM_PALETTE.length];
  const wrapStyle = fill
    ? { backgroundColor: p.bg, position: "absolute" as const, inset: 0 }
    : { backgroundColor: p.bg, aspectRatio: "4 / 5" };
  return (
    <div
      className={`${fill ? "" : "relative w-full"} overflow-hidden`}
      style={wrapStyle}
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

const team = [
  {
    name: "Ish Shrestha",
    role: "Founder, Project/Technical Lead",
    specialty:
      "Product architecture, management, full-stack engineering, and the messy decisions in between.",
    x: "https://x.com/vecminds",
    linkedin: "https://linkedin.com/company/vecminds",
  },
  {
    name: "Anish Koju",
    role: "AI Engineer",
    specialty:
      "LLM pipelines, RAG systems, and quiet agents that do real work in the background.",
    x: null,
    linkedin: null,
  },
  {
    name: "Akash Shakya",
    role: "Full-Stack Software Engineer",
    specialty:
      "Web and mobile applications. Cares more about state machines than frameworks.",
    x: null,
    linkedin: null,
  },
  {
    name: "Diran Pradhan",
    role: "Software Engineer",
    specialty:
      "APIs, integrations, and the infrastructure that keeps production calm.",
    x: null,
    linkedin: null,
  },
];

export default function TeamSection() {
  return (
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
              A small group of quality engineers. No account managers, no
              layers. The same people who write the plan write the code, and
              you talk to them directly.
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

          <div className="team-cards-wrap lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:flex lg:gap-3">
            {team.map((m, idx) => {
              const p = TEAM_PALETTE[idx % TEAM_PALETTE.length];
              const dark = p.text === "#FFFFFF";
              return (
                <article
                  key={m.name}
                  tabIndex={0}
                  className={`team-card relative overflow-hidden rounded-2xl lg:flex-1 lg:min-w-0 ${idx === 0 ? "is-active" : ""}`}
                  style={{ height: "clamp(420px, 56vh, 560px)" }}
                >
                  <div className="team-portrait absolute inset-0">
                    <MemberPortrait name={m.name} paletteIndex={idx} fill />
                  </div>
                  <div
                    className="team-info absolute inset-x-0 bottom-0 p-5"
                    style={{ backgroundColor: p.infoBg }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="min-w-0">
                        <h3
                          className={`text-[15px] font-medium leading-tight ${dark ? "text-white" : "text-black"}`}
                          style={{ letterSpacing: "-0.01em" }}
                        >
                          {m.name}
                        </h3>
                        <p
                          className={`text-[13px] mt-0.5 ${dark ? "text-white/60" : "text-black/55"}`}
                        >
                          {m.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {m.x && (
                          <a
                            href={m.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X"
                            className={`w-7 h-7 flex items-center justify-center rounded-full ${dark ? "text-white/85 hover:bg-white/10" : "text-black/80 hover:bg-black/[0.06]"}`}
                          >
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M18.244 2H21.5l-7.5 8.57L23 22h-7.27l-5.69-7.43L3.7 22H.44l8.04-9.18L1 2h7.46l5.13 6.78L18.244 2Zm-1.27 18h1.86L7.13 4H5.16l11.814 16Z" />
                            </svg>
                          </a>
                        )}
                        {m.linkedin && (
                          <a
                            href={m.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className={`w-7 h-7 flex items-center justify-center rounded-full ${dark ? "text-white/85 hover:bg-white/10" : "text-black/80 hover:bg-black/[0.06]"}`}
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
                        )}
                      </div>
                    </div>
                    <p
                      className={`text-[13px] leading-snug font-inter ${dark ? "text-white/70" : "text-black/65"}`}
                    >
                      {m.specialty}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
