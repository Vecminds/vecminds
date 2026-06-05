"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CONSENT_KEY, CONSENT_EVENT } from "./ConsentScripts";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      // Small delay so it doesn't flash in before the page finishes painting
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 w-[calc(100%-2rem)] sm:w-auto sm:max-w-sm"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="bg-[#0B1530] rounded-2xl px-5 py-5 shadow-[0_24px_56px_-12px_rgba(11,21,48,0.45)]">
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-6 rounded-full bg-[#2754D9]/20 flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2754D9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </span>
          <span className="text-white text-sm font-medium" style={{ letterSpacing: "-0.01em" }}>
            Cookies & privacy
          </span>
        </div>

        {/* Body */}
        <p className="text-white/60 text-sm leading-relaxed font-inter mb-4">
          We use cookies for analytics (GA4), advertising (Meta Pixel), and
          bookings (Cal.com).{" "}
          <Link
            href="/privacy-policy"
            className="text-white/80 underline underline-offset-2 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </p>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={accept}
            className="flex-1 bg-[#2754D9] hover:bg-[#1f47c4] active:scale-[0.97] text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-200"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={decline}
            className="flex-1 bg-white/[0.08] hover:bg-white/[0.15] active:scale-[0.97] text-white/75 hover:text-white text-sm font-medium py-2.5 rounded-xl transition-all duration-200"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
