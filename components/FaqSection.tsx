"use client";

import { ArrowRight } from "./icons";
import CalComButton from "./CalComButton";
import FaqAccordion from "./FaqAccordion";

const faqs = [
  {
    q: "What kinds of projects do you take on?",
    a: "Three kinds. We build AI-native products and platforms from scratch, add automation and AI into operations-heavy businesses, and modernize production codebases that have outgrown their original architecture. We don't do pure design, SEO, or marketing work.",
  },
  {
    q: "How is an engagement structured?",
    a: "We start with a focused discovery phase to map your problem clearly, then move into short build cycles. You get regular demos, a shared backlog, and direct access to the engineers doing the work. No account managers, no layers of process in the way.",
  },
  {
    q: "What does pricing look like?",
    a: "Discovery is a fixed fee. The build is priced as a monthly engagement for a dedicated team, scoped one cycle at a time. No timesheets and no surprise change-orders. If the scope shifts, we re-plan it with you first and stay transparent the whole way.",
  },
  {
    q: "What is your tech stack?",
    a: "A full modern stack. Frontend: React, Next.js, TypeScript, Tailwind. Backend: Node.js, Python (FastAPI), NestJS, .NET. Data: PostgreSQL, MongoDB, Redis, Supabase. Cloud: AWS, Vercel, Docker. AI: OpenAI, LangChain, LlamaIndex, and RAG pipelines on Pinecone or pgvector, with automation via n8n. We pick the right tool for your problem, not the one we happen to like best.",
  },
  {
    q: "How quickly can you get started?",
    a: "We usually send an initial read within 48 hours of your first message. Depending on current capacity, we can kick off discovery within one to two weeks of agreeing on scope. We're always upfront about availability, so you'll never get false urgency from us.",
  },
  {
    q: "What industries are you a good fit for?",
    a: "We do our best work on problems with real operational stakes: complex systems, meaningful workflows, and actual data. We work most often with FinTech, Healthcare, E-commerce, Logistics, and professional services teams. The deciding factor is the challenge, not the vertical. If your system is complex and your team is serious about solving it, we'd like to hear from you.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Often. We turn fuzzy product ideas into clear, shippable specs, push back where it matters, and only build what survives that pressure. You stay close to the work without ever needing to read a pull request.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We start with a code and architecture audit, ship an early stabilization plan, and rebuild step by step. We won't push a full rewrite unless the numbers genuinely justify it.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. After the initial build, we offer ongoing retainers, whether that's active feature development, monitoring, or light maintenance. We shape the support around what you actually need, not a one-size-fits-all package.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section id="faq" className="bg-[#F5F5F5] px-6 py-24">
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
              The questions most founders ask us before starting a project. If
              yours isn&apos;t here, send us a note and we&apos;ll answer it.
            </p>
            {/* <CalComButton className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
              Book a call
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </CalComButton> */}
          </div>

          <div className="md:col-span-8">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
