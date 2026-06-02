'use client';

import { useEffect, useState } from "react";
import { useScrolledToBottom } from "./useScrolledToBottom";

export default function ScrollToTopButton() {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const atBottom = useScrolledToBottom(140);

  useEffect(() => {
    const onScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide while Tawk chat panel is open.
  useEffect(() => {
    const handler = (e: Event) => setChatOpen((e as CustomEvent<boolean>).detail);
    window.addEventListener("vecminds:chatopen", handler);
    return () => window.removeEventListener("vecminds:chatopen", handler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const visible = scrolledPastHero && !atBottom && !chatOpen;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed right-4 sm:right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#2754D9] text-white shadow-lg transition-[opacity,transform] duration-200 ease-out hover:scale-110 hover:shadow-xl active:scale-[0.97] ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-2 opacity-0"
      }`}
      style={{ bottom: "calc(5.5rem + var(--sab))" }}
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
