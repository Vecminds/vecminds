// Single source of truth for the dedicated service pages.
// Used by app/services/[slug]/page.tsx, the ServiceDetail template,
// ServicesSection cards, the Footer, and sitemap.ts.

export interface ServiceProcessStep {
  n: string;
  title: string;
  body: string;
}

export interface ServiceDeliverable {
  /** Must match the matching homepage card tag exactly. */
  title: string;
  body: string;
  /** Icon key passed to <DeliverableIcon kind={...} />. */
  icon: string;
  /** Short capability chips shown on the card. */
  points: string[];
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceBlogLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  glyph: "product" | "ai";
  /** Short label used on cards and in nav. */
  shortName: string;
  /** H1 / display title on the service page. */
  title: string;
  /** Eyebrow text above the H1. */
  eyebrow: string;
  /** Card body on the homepage Services section. */
  cardBody: string;
  /** Tags shown on the homepage card. */
  tags: string[];
  /** <title> tag for the page. Keep <= 60 chars. */
  metaTitle: string;
  /** Meta description. ~150-160 chars. */
  metaDescription: string;
  /** First paragraph under the H1. */
  heroLead: string;
  /** Outcome statements — what the client walks away with. */
  outcomes: string[];
  /** Detailed deliverables grid. */
  deliverables: ServiceDeliverable[];
  /** How we work, scoped to this service. Mirrors the homepage 4-phase process. */
  process: ServiceProcessStep[];
  /** Tech stack names relevant to this service (matched against BACKERS). */
  stack: string[];
  /** Service-specific FAQs (also emitted as FAQPage schema). */
  faqs: ServiceFaq[];
  /** Contextual links into the blog for topical internal linking. */
  blogLinks: ServiceBlogLink[];
}

export const SERVICES_BASE_PATH = "/services";

export const SERVICES: Service[] = [
  {
    slug: "custom-software-development",
    glyph: "product",
    shortName: "Custom Software Development",
    title: "Custom Software Development",
    eyebrow: "Service 01",
    cardBody:
      "You get an end-to-end product built on a modern stack. We take it from a blank repo to a live system your team can run without us, so you own it fully when we step back.",
    tags: [
      "Web App Development",
      "Mobile App Development",
      "AI-Native Products",
      "APIs & Integration",
    ],
    metaTitle: "Custom Software Development Company | Vecminds",
    metaDescription:
      "Custom software development for web, mobile, and APIs. We build production systems on a modern stack your team can run after handover.",
    heroLead:
      "We design and build production software, from an empty repo to a live system your team runs on its own. Web apps, mobile apps, internal platforms, and the APIs that connect them. We write code your engineers can read, extend, and own after we step back.",
    outcomes: [
      "A live production system, not a prototype that stalls at 80 percent.",
      "Code your own engineers can read, extend, and run without us.",
      "Architecture decisions written down as we go, not locked in one person's head.",
      "Honest scope. We build what earns its place and cut what does not.",
    ],
    deliverables: [
      {
        title: "Web App Development",
        icon: "web",
        body: "Customer-facing products and internal tools built on React, Next.js, and TypeScript. Fast to load, accessible by default, and ready for real traffic on day one.",
        points: ["React & Next.js", "Server-side rendering", "Design systems"],
      },
      {
        title: "Mobile App Development",
        icon: "mobile",
        body: "Cross-platform apps that share logic with your web stack, so one team ships to iOS and Android instead of three. Native feel, shared codebase, faster releases.",
        points: ["iOS & Android", "Shared web logic", "App store delivery"],
      },
      {
        title: "AI-Native Products",
        icon: "ai-native",
        body: "Products with AI built into the core, not bolted on. We shape the data flow, model choices, and interface so the smart parts feel like a natural feature rather than a gimmick.",
        points: ["LLM features", "RAG over your data", "Built-in evals"],
      },
      {
        title: "APIs & Integration",
        icon: "api",
        body: "Documented APIs and the integrations that connect your product to the payment, data, and third-party systems it depends on. Clean contracts your partners can build against.",
        points: ["REST & webhooks", "Third-party systems", "Auth & security"],
      },
    ],
    process: [
      {
        n: "01",
        title: "Discovery",
        body: "A short, paid sprint to map your problem, your system, and the smallest plan that proves it works. You get clarity, not a 60-page deck.",
      },
      {
        n: "02",
        title: "Requirements & design",
        body: "We settle the architecture, data model, and integration points before anyone writes code, so the build stays fast and calm.",
      },
      {
        n: "03",
        title: "Iterative build",
        body: "Weekly demos, a shared backlog, and direct access to the engineers writing the code. You see real progress from week one.",
      },
      {
        n: "04",
        title: "Ship & operate",
        body: "We deploy, monitor, and keep improving. When you are ready, you take over a system your team can run on its own.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "FastAPI",
      "Python",
      ".NET",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Supabase",
      "Docker",
      "AWS",
      "Vercel",
    ],
    faqs: [
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. We start with a code and architecture audit, ship an early stabilization plan, and rebuild step by step. We won't push a full rewrite unless the numbers genuinely justify it.",
      },
      {
        q: "Do you work with non-technical founders?",
        a: "Often. We turn fuzzy product ideas into clear, shippable specs, push back where it matters, and only build what survives that pressure. You stay close to the work without ever needing to read a pull request.",
      },
      {
        q: "Do you offer support after launch?",
        a: "Yes. After the build, we offer ongoing retainers for feature work, monitoring, or light maintenance, shaped around what you need rather than a fixed package.",
      },
    ],
    blogLinks: [
      {
        label: "Engineering notes and build write-ups",
        href: "https://blog.vecminds.com/",
      },
    ],
  },
  {
    slug: "ai-development-automation",
    glyph: "ai",
    shortName: "AI Development & Automation",
    title: "AI Development & Automation",
    eyebrow: "Service 02",
    cardBody:
      "We build LLM apps, RAG pipelines, and automation that you measure in hours saved, not demos watched. If it does not cut real work, it does not ship.",
    tags: [
      "LLM/AI Applications",
      "RAG Systems",
      "Workflow Automation",
      "AI Agents",
    ],
    metaTitle: "AI Development & Automation Services | Vecminds",
    metaDescription:
      "AI development and automation: LLM apps, RAG pipelines, and AI agents that remove real operational work, measured in hours saved, not demos.",
    heroLead:
      "We build AI that does real work. LLM applications, retrieval over your own data, and automation that takes hours out of operations-heavy teams. We judge it by the work it removes, not the demo it gives.",
    outcomes: [
      "Automation tied to a number you already track: hours saved, tickets cleared, errors avoided.",
      "RAG and LLM systems grounded in your data, with guardrails against made-up answers.",
      "Evaluations and monitoring, so you can trust the output instead of hoping it is right.",
      "A clear line between where AI helps and where plain software does the job better.",
    ],
    deliverables: [
      {
        title: "LLM/AI Applications",
        icon: "llm",
        body: "Production LLM features like assistants, classification, extraction, and generation, wired into your product with evaluation and cost controls from day one.",
        points: ["Assistants & chat", "Extraction & classification", "Cost controls"],
      },
      {
        title: "RAG Systems",
        icon: "rag",
        body: "Retrieval pipelines over your documents and data, built on vector stores like pgvector or ChromaDB, so answers stay grounded in your content and current.",
        points: ["Vector search", "pgvector / ChromaDB", "Grounded answers"],
      },
      {
        title: "Workflow Automation",
        icon: "automation",
        body: "Automation across your operations with n8n and custom services, removing the repetitive work that quietly eats your team's week.",
        points: ["n8n pipelines", "Custom services", "Human in the loop"],
      },
      {
        title: "AI Agents",
        icon: "agent",
        body: "Scoped, observable agents that take real actions in your systems, with the limits, logging, and human checkpoints that keep them safe to run.",
        points: ["Tool use & actions", "Guardrails & limits", "Full observability"],
      },
    ],
    process: [
      {
        n: "01",
        title: "Discovery",
        body: "We start where the hours go. A short, paid sprint maps one high-value workflow and the number it should move, so we don't automate the wrong thing well.",
      },
      {
        n: "02",
        title: "Requirements & design",
        body: "We pick the models, data sources, and retrieval approach, then set the accuracy and cost targets before the build starts.",
      },
      {
        n: "03",
        title: "Iterative build",
        body: "We build in weekly cycles with evaluations running the whole time, measuring accuracy, cost, and latency against the baseline.",
      },
      {
        n: "04",
        title: "Ship & operate",
        body: "We deploy with monitoring, fallbacks, and a human in the loop where it matters, then tune against real usage. You see the impact in your own numbers.",
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "OpenAI",
      "DeepSeek",
      "LangChain",
      "LlamaIndex",
      "Hugging Face",
      "ChromaDB",
      "n8n",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    faqs: [
      {
        q: "How do you keep AI output trustworthy?",
        a: "We ground models in your own data with retrieval, add evaluations to measure accuracy against a baseline, and keep humans in the loop where a wrong answer is expensive. We ship monitoring so you can see how it performs in production, not just in a demo.",
      },
      {
        q: "When is AI the wrong tool?",
        a: "Often. If a deterministic rule or plain software solves the problem more reliably and cheaply, we'll tell you and build that instead. AI ships only where it pulls its weight.",
      },
      {
        q: "What does an AI engagement look like?",
        a: "Discovery is a fixed fee to find a high-value workflow and the number it should move. The build runs as a monthly engagement scoped one cycle at a time, with evaluations and monitoring included so you can trust what ships.",
      },
    ],
    blogLinks: [
      {
        label: "AI and automation deep dives",
        href: "https://blog.vecminds.com/",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getOtherService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug !== slug);
}
