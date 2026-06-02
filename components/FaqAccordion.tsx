"use client";

import { useState, useEffect, useRef } from "react";

function FaqItem({
  item,
  open,
  onToggle,
  index,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (!open) {
      setMaxH(0);
      return;
    }
    const measure = () => {
      if (contentRef.current) setMaxH(contentRef.current.scrollHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open]);

  return (
    <div
      className={`bg-white rounded-2xl border border-black/5 transition-colors duration-200 ${open ? "shadow-[0_1px_2px_rgba(0,0,0,0.04)]" : ""}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-6 min-w-0">
          <span className="text-black/35 text-sm font-medium pt-1 shrink-0">
            0{index + 1}
          </span>
          <span
            className="text-black text-xl md:text-2xl font-medium leading-snug"
            style={{ letterSpacing: "-0.02em" }}
          >
            {item.q}
          </span>
        </div>
        <span
          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
            open
              ? "bg-black text-white"
              : "bg-black/5 text-black group-hover:bg-black group-hover:text-white"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{ maxHeight: open ? maxH : 0 }}
      >
        <div ref={contentRef} className="px-8 pb-7 pl-[4.25rem]">
          <p className="text-black/65 text-base md:text-lg leading-relaxed max-w-2xl font-inter">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <div className="flex flex-col gap-3">
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
  );
}
