"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import {
  GA_MEASUREMENT_ID,
  GTM_ID,
  META_PIXEL_ID,
  TAWK_SRC,
} from "@/lib/integrations";

export const CONSENT_KEY = "vecminds_cookie_consent";
export const CONSENT_EVENT = "vecminds:consent";

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

      {/* GTM */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
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

      {/* Tawk.to — launcher hidden; opened via FloatingActions chat button */}
      <Script id="tawk-to" strategy="afterInteractive">
        {`var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();
(function(){
  if(typeof MutationObserver==='undefined')return;
  function checkEl(el){
    if(!el||el.tagName!=='IFRAME')return;
    var cs=window.getComputedStyle(el);
    if(cs.position==='fixed'&&cs.display!=='none'&&parseFloat(cs.height)<200){
      el.style.setProperty('display','none','important');
    }
  }
  new MutationObserver(function(muts){
    for(var i=0;i<muts.length;i++){
      var m=muts[i];
      if(m.type==='attributes'){checkEl(m.target);}
      else if(m.type==='childList'){
        m.addedNodes.forEach(function(n){
          if(n.nodeType!==1)return;
          checkEl(n);
          if(n.querySelectorAll)n.querySelectorAll('iframe').forEach(checkEl);
        });
      }
    }
  }).observe(document.documentElement,{
    subtree:true,attributes:true,attributeFilter:['style'],childList:true
  });
})();
Tawk_API.customStyle={
  visibility:{
    desktop:{position:'br',xOffset:20,yOffset:96},
    mobile:{position:'br',xOffset:12,yOffset:88}
  }
};
Tawk_API.onLoad=function(){
  Tawk_API.hideWidget();
  if(typeof Tawk_API.showWidget==='function'){
    Tawk_API._showWidget=Tawk_API.showWidget.bind(Tawk_API);
  }
  Tawk_API.showWidget=function(){};
};
Tawk_API.onBeforeLoad=function(){
  Tawk_API.showWidget=function(){};
};
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='${TAWK_SRC}';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
      </Script>
    </>
  );
}
