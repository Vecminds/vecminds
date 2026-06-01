'use client';

import { useEffect, useState } from "react";

/**
 * Returns true when the viewport is within `offset` px of the bottom of the page.
 * Used to hide floating action buttons so they don't overlap the footer's bottom row.
 */
export function useScrolledToBottom(offset = 140) {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - offset;
      setAtBottom(scrolledToEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [offset]);

  return atBottom;
}
