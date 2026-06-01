"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_NAMESPACE = "15min";
const CAL_LINK = "vecminds/15min";
const CAL_LAYOUT = "month_view";

interface CalComButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

export default function CalComButton({
  className,
  children,
  onClick,
  title,
}: CalComButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        cssVarsPerTheme: { light: { "cal-brand": "#2754D9" }, dark: { "cal-brand": "#2754D9" } },
        hideEventTypeDetails: false,
        layout: CAL_LAYOUT,
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config={JSON.stringify({
        layout: CAL_LAYOUT,
        useSlotsViewOnSmallScreen: "true",
      })}
      className={className}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
