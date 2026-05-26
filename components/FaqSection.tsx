'use client'

import { useState } from 'react'
import { ArrowRight } from './icons'

const faqs = [
  { q: 'What kinds of projects do you take on?', a: 'Mostly three shapes: building a product or platform from scratch, modernizing or rescuing an existing codebase, and embedding AI / automation into an operations-heavy business. We do not take on pure design or pure marketing work.' },
  { q: 'How is an engagement structured?', a: 'We start with a paid 1–2 week discovery, deliver a clear technical and product plan, then move into iterative build sprints. You get weekly demos, a shared backlog, and direct access to the engineers doing the work.' },
  { q: 'What does pricing look like?', a: 'Discovery is a fixed fee. Build engagements are monthly retainer for a dedicated pod, with a clear scope per sprint. No timesheets, no surprise change-orders — if scope shifts, we re-plan together.' },
  { q: 'What is your tech stack?', a: 'TypeScript / Next.js on the front-end, Python or Node on the back-end, Postgres, AWS or Azure, and Kubernetes where it earns its place. For AI: OpenAI, Anthropic, LangChain, and custom RAG pipelines on top of pgvector or Pinecone.' },
  { q: 'Do you work with non-technical founders?', a: 'Often. We translate fuzzy product ideas into shippable specs, push back where it matters, and only build what survives that pressure. You stay close to the work without needing to read pull requests.' },
  { q: 'Can you take over an existing codebase?', a: 'Yes. We start with a code and architecture audit, ship a stabilization plan in the first sprint, and rebuild incrementally — never a full rewrite unless the math actually justifies it.' },
]

function FaqItem({ item, open, onToggle, index }: { item: { q: string; a: string }; open: boolean; onToggle: () => void; index: number }) {
  return (
    <div className={`bg-white rounded-2xl border border-black/5 transition-colors duration-200 ${open ? 'shadow-[0_1px_2px_rgba(0,0,0,0.04)]' : ''}`}>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-6 min-w-0">
          <span className="text-black/35 text-sm font-medium pt-1 shrink-0">0{index + 1}</span>
          <span className="text-black text-xl md:text-2xl font-medium leading-snug" style={{ letterSpacing: '-0.02em' }}>
            {item.q}
          </span>
        </div>
        <span className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${open ? 'bg-black text-white' : 'bg-black/5 text-black group-hover:bg-black group-hover:text-white'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      <div className="overflow-hidden transition-[max-height] duration-300 ease-out" style={{ maxHeight: open ? '400px' : '0px' }}>
        <div className="px-8 pb-7 pl-[4.25rem]">
          <p className="text-black/65 text-base md:text-lg leading-relaxed max-w-2xl font-inter">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4 md:sticky md:top-12">
          <p className="text-black/60 text-sm mb-2">FAQ</p>
          <h2 className="text-black text-5xl md:text-6xl font-medium leading-none mb-6" style={{ letterSpacing: '-0.04em' }}>
            Questions,
            <br />
            answered.
          </h2>
          <p className="text-black/60 text-base leading-relaxed max-w-sm mb-8 font-inter">
            The questions most founders ask before kicking off a project. If yours isn&apos;t here, just send us a note.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Talk to a partner
            <span className="bg-white rounded-full p-2 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-black" />
            </span>
          </a>
        </div>

        <div className="md:col-span-8 flex flex-col gap-3">
          {faqs.map((f, idx) => (
            <FaqItem
              key={f.q}
              item={f}
              index={idx}
              open={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
