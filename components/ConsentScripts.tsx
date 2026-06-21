"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import {
  GA_MEASUREMENT_ID,
  META_PIXEL_ID,
} from "@/lib/integrations";
import { CONSENT_KEY, CONSENT_EVENT } from "@/lib/consent";

export default function ConsentScripts() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === "accepted") {
      setConsented(true);
    }
    const handler = () => setConsented(true);
    window.addEventListener(CONSENT_EVENT, handler);
    return () => window.removeEventListener(CONSENT_EVENT, handler);
  }, []);

  if (!consented) return null;

  return (
    <>
      {/* GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}');`}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');`}
      </Script>

    </>
  );
}
