"use client";

import { getCalApi } from "@calcom/embed-react";
import { useRef } from "react";

const CAL_NAMESPACE = "15min";
const CAL_LINK = "vecminds/15min";
const CAL_LAYOUT = "month_view";

interface CalComButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

export default function CalComButton({
  className,
  style,
  children,
  onClick,
  title,
}: CalComButtonProps) {
  const initializedRef = useRef(false);

  const handleClick = async () => {
    onClick?.();
    const cal = await getCalApi({ namespace: CAL_NAMESPACE });
    if (!initializedRef.current) {
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#2754D9" },
          dark: { "cal-brand": "#2754D9" },
        },
        hideEventTypeDetails: false,
        layout: CAL_LAYOUT,
      });
      initializedRef.current = true;
    }
    cal("modal", {
      calLink: CAL_LINK,
      config: {
        layout: CAL_LAYOUT,
        useSlotsViewOnSmallScreen: "true",
      },
    });
  };

  return (
    <button
      type="button"
      className={className}
      style={style}
      title={title}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
