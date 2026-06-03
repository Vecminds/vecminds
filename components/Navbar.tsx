"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, MenuIcon, CloseIcon } from "./icons";
import CalComButton from "./CalComButton";

const links = [
  { label: "Services", href: "/#services", external: false },
  { label: "Process", href: "/#process" },
  // { label: "Work", href: "/#work" },
  { label: "Team", href: "/#team" },
  { label: "About", href: "/#about" },
  // { label: "Blog", href: "https://blog.vecminds.com/", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const delta = y - lastY.current;
      if (y < 80) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("nav-open");
      setHidden(false);
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const closeMenu = () => setOpen(false);

  const navClass = [
    "smart-nav",
    "top-0 left-0 right-0 z-30 px-4 sm:px-6 py-4 sm:py-5",
    scrolled || open ? "is-scrolled" : "",
    hidden && !open ? "is-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={navClass}>
      <div className="max-w-[88rem] mx-auto flex items-center justify-between gap-4">
        <a
          href="/"
          className="flex items-center text-black shrink-0"
          onClick={closeMenu}
        >
          <Image
            src="/Vecminds_Full_Logo.png"
            alt="Vecminds Technologies logo"
            width={176}
            height={44}
            className="w-auto"
            style={{ height: "44px" }}
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="relative text-base text-gray-700 hover:text-black font-medium transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 ease-out" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <CalComButton className="btn-shine hidden sm:inline-flex bg-black text-white text-sm sm:text-base font-medium px-5 sm:px-7 py-2.5 rounded-full hover:bg-gray-800 transition-[transform,background-color] duration-200 ease-out hover:scale-[1.03] active:scale-[0.97]">
            Book a Call
          </CalComButton>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-[transform,background-color] duration-200 ease-out active:scale-[0.97]"
          >
            <span className="relative w-5 h-5">
              <MenuIcon className={`absolute inset-0 w-5 h-5 transition-[opacity,transform] duration-200 ease-out ${open ? "opacity-0 scale-75" : "opacity-100 scale-100"}`} />
              <CloseIcon className={`absolute inset-0 w-5 h-5 transition-[opacity,transform] duration-200 ease-out ${open ? "opacity-100 scale-100" : "opacity-0 scale-75"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden nav-mobile-panel mt-3 mx-1">
          <div className="bg-white rounded-2xl border border-black/10 shadow-[0_24px_48px_-20px_rgba(43,38,68,0.25)] p-2">
            <ul className="flex flex-col">
              {links.map((l, idx) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={closeMenu}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`flex items-center justify-between px-5 py-4 text-black text-lg font-medium rounded-xl active:bg-black/[0.04] ${idx < links.length - 1 ? "border-b border-black/[0.06]" : ""}`}
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    <span>{l.label}</span>
                    <ArrowRight className="w-4 h-4 text-black/40" />
                  </a>
                </li>
              ))}
            </ul>
            <CalComButton
              className="btn-shine mt-2 mb-1 mx-1 inline-flex items-center justify-center gap-3 bg-black text-white text-base font-medium px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-colors duration-200 w-[calc(100%-0.5rem)]"
              onClick={closeMenu}
            >
              Book a Call
              <ArrowRight className="w-4 h-4" />
            </CalComButton>
          </div>
        </div>
      )}
    </nav>
  );
}
