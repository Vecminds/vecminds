'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CalComButton from "./CalComButton";
import { useScrolledToBottom } from "./useScrolledToBottom";

declare global {
  interface Window {
    Tawk_API?: {
      // Connection
      start?: (opts?: { showWidget?: boolean }) => void;
      shutdown?: () => void;
      // Display control
      maximize?: () => void;
      minimize?: () => void;
      toggle?: () => void;
      hideWidget?: () => void;
      showWidget?: () => void;
      toggleVisibility?: () => void;
      // Status queries
      isChatMaximized?: () => boolean;
      isChatMinimized?: () => boolean;
      isChatHidden?: () => boolean;
      isChatOngoing?: () => boolean;
      getStatus?: () => 'online' | 'away' | 'offline';
      // Event callbacks
      onLoad?: () => void;
      onBeforeLoad?: () => void;
      onStatusChange?: (status: 'online' | 'away' | 'offline') => void;
      onChatMaximized?: () => void;
      onChatMinimized?: () => void;
      onChatHidden?: () => void;
      onChatStarted?: () => void;
      onChatEnded?: () => void;
      onUnreadCountChanged?: (count: number) => void;
      [key: string]: unknown;
    };
  }
}

const WHATSAPP_URL = "https://wa.me/9779766388077?text=Hello%20Vecminds%20Team!%20I%20have%20a%20question%20about%20your%20services.";
const UNREAD_KEY = "vecminds_tawk_unread";

// Safety net: hides the Tawk launcher bubble iframe (≤70px wide) if the
// MutationObserver in ConsentScripts hasn't caught it yet within 150ms.
function hideTawkMinimizeIframe() {
  setTimeout(() => {
    document.querySelectorAll<HTMLIFrameElement>("iframe").forEach((iframe) => {
      const cs = window.getComputedStyle(iframe);
      if (
        cs.position === "fixed" &&
        parseFloat(cs.width) <= 70 &&
        cs.display !== "none"
      ) {
        iframe.style.setProperty("display", "none", "important");
      }
    });
  }, 150);
}

/** Red badge showing unread message count, positioned top-right of its parent. */
function UnreadBadge({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <span
      className="pointer-events-none absolute -right-1.5 -top-1.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold leading-none text-white ring-2 ring-white"
      aria-label={`${count} unread message${count === 1 ? "" : "s"}`}
    >
      {count > 99 ? "99+" : count}
    </span>
  );
}

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const atBottom = useScrolledToBottom(140);
  const containerRef = useRef<HTMLDivElement>(null);
  const originalTitleRef = useRef('');

  // Capture the page title before Tawk can modify it, and restore persisted
  // unread count so the badge is visible immediately on refresh.
  useEffect(() => {
    originalTitleRef.current = document.title;
    const saved = parseInt(localStorage.getItem(UNREAD_KEY) || "0", 10);
    if (saved > 0) setUnreadCount(saved);
  }, []);

  // Mirror Tawk's open/close/unread state into React. The launcher bubble is kept
  // hidden at all times — only our FloatingActions button drives the chat.
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};

    window.Tawk_API.onChatMaximized = () => {
      setChatOpen(true);
      setUnreadCount(0);
      localStorage.removeItem(UNREAD_KEY);
      document.title = originalTitleRef.current;
    };

    window.Tawk_API.onChatMinimized = () => {
      window.Tawk_API?.hideWidget?.();
      setChatOpen(false);
    };

    // Fires when hideWidget() is called (e.g. after minimize); keeps state in sync.
    window.Tawk_API.onChatHidden = () => {
      setChatOpen(false);
    };

    window.Tawk_API.onUnreadCountChanged = (count: number) => {
      if (count === 0) document.title = originalTitleRef.current;
      // Only update badge when the chat panel is not already open.
      setChatOpen((isOpen) => {
        if (!isOpen) {
          setUnreadCount(count);
          if (count > 0) localStorage.setItem(UNREAD_KEY, String(count));
          else localStorage.removeItem(UNREAD_KEY);
        }
        return isOpen;
      });
    };
  }, []);

  // When chatOpen changes: collapse the expand menu and broadcast to siblings
  // (ScrollToTopButton listens to this event to hide itself).
  useEffect(() => {
    if (chatOpen) setOpen(false);
    window.dispatchEvent(
      new CustomEvent("vecminds:chatopen", { detail: chatOpen })
    );
  }, [chatOpen]);

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const toggleChat = () => {
    setOpen(false);
    const api = window.Tawk_API;
    if (!api) return;
    if (chatOpen) {
      setChatOpen(false); // optimistic — don't wait for onChatMinimized
      api.minimize?.();
    } else {
      setChatOpen(true);  // optimistic — don't wait for onChatMaximized
      setUnreadCount(0);  // clear badge immediately on open
      localStorage.removeItem(UNREAD_KEY);
      document.title = originalTitleRef.current;
      hideTawkMinimizeIframe();
      api.maximize?.();
    }
  };
  // Defer closing so Cal.com's delegated click handler can fire first.
  const closeDeferred = () => setTimeout(() => setOpen(false), 0);

  const actionClasses =
    "relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-[opacity,transform] duration-200 ease-out hover:scale-110 active:scale-[0.97]";

  // While chat is open: always keep the close button visible (ignore atBottom),
  // so the user is never stranded without a way to dismiss the panel.
  const hidden = atBottom && !chatOpen;

  return (
    <div
      ref={containerRef}
      // z-[2000000] when chatOpen so the × button floats above Tawk's
      // full-screen mobile iframe (z-index ~1000003).
      className={`fixed right-4 sm:right-5 flex items-center gap-2 sm:gap-3 transition-[opacity,transform] duration-200 ease-out ${
        chatOpen ? "z-[2000000]" : "z-50"
      } ${
        hidden
          ? "pointer-events-none translate-y-2 opacity-0"
          : "opacity-100 translate-y-0"
      }`}
      style={{ bottom: "calc(1.25rem + var(--sab))" }}
    >
      {chatOpen ? (
        /* ── Chat is open: show ONLY the close-chat button ── */
        <button
          type="button"
          onClick={toggleChat}
          aria-label="Close chat"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2754D9] text-white shadow-lg transition-[transform] duration-200 ease-out hover:scale-110 hover:shadow-xl active:scale-[0.97]"
        >
          <svg
            className="pointer-events-none h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      ) : (
        /* ── Normal state: expanding actions + main toggle ── */
        <>
          {/* Expanding action links (appear to the left of the toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Chat Assistant — stagger last (farthest from toggle) */}
            <button
              type="button"
              aria-label={`Chat with our assistant${unreadCount > 0 ? ` (${unreadCount} unread)` : ""}`}
              title="Chat Assistant"
              onClick={toggleChat}
              style={{ transitionDelay: open ? "120ms" : "0ms" }}
              className={`${actionClasses} bg-[#2754D9] ${
                open
                  ? "pointer-events-auto translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-2 opacity-0"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.tawk.to/wp-content/uploads/2020/04/tawk-sitelogo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none h-6 w-6 object-contain drop-shadow-sm"
              />
              <UnreadBadge count={unreadCount} />
            </button>

            {/* Book a Call — stagger middle */}
            <CalComButton
              onClick={closeDeferred}
              title="Book a Call"
              style={{ transitionDelay: open ? "60ms" : "0ms" }}
              className={`${actionClasses} bg-[#0F172A] ${
                open
                  ? "pointer-events-auto translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-2 opacity-0"
              }`}
            >
              <span className="sr-only">Book a call</span>
              <svg
                className="pointer-events-none h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </CalComButton>

            {/* WhatsApp — stagger first (closest to toggle) */}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="WhatsApp"
              onClick={close}
              style={{ transitionDelay: open ? "0ms" : "0ms" }}
              className={`${actionClasses} bg-[#25D366] ${
                open
                  ? "pointer-events-auto translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-2 opacity-0"
              }`}
            >
              <svg
                className="pointer-events-none h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </Link>
          </div>

          {/* Main toggle button — badge appears here when menu is closed */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={
              open
                ? "Close contact menu"
                : unreadCount > 0
                ? `Open contact menu (${unreadCount} unread)`
                : "Open contact menu"
            }
            aria-expanded={open}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#2754D9] text-white shadow-lg transition-[transform] duration-200 ease-out hover:scale-110 hover:shadow-xl active:scale-[0.97]"
          >
            {/* Icon crossfade: chat bubble ↔ X */}
            <span className="pointer-events-none relative h-6 w-6">
              {/* Chat bubble — visible when closed */}
              <svg
                className={`absolute inset-0 h-6 w-6 transition-[opacity,transform] duration-200 ease-out ${
                  open ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              {/* X / close — visible when open */}
              <svg
                className={`absolute inset-0 h-6 w-6 transition-[opacity,transform] duration-200 ease-out ${
                  open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
            {/* Badge on toggle when menu is collapsed */}
            {!open && <UnreadBadge count={unreadCount} />}
          </button>
        </>
      )}
    </div>
  );
}
