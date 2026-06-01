import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { GA_MEASUREMENT_ID, GTM_ID, META_PIXEL_ID, TAWK_SRC } from "@/lib/integrations";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vecminds.com"),
  title: "Vecminds Technologies | Custom Software & AI Development Company",
  description:
    "We're a small team of engineers building custom software, AI, and automation that ships fast and keeps paying off. Tell us what you're building.",
  keywords: [
    "custom software development",
    "software development company",
    "AI development and automation",
    "LLM applications",
    "RAG systems",
    "web app development",
    "mobile app development",
    "API integration",
    "staff augmentation",
    "managed software delivery",
    "Vecminds",
  ],
  authors: [{ name: "Vecminds Technologies", url: "https://www.vecminds.com" }],
  creator: "Vecminds Technologies",
  publisher: "Vecminds Technologies",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/favicon.ico", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  alternates: { canonical: "https://www.vecminds.com" },
  openGraph: {
    title: "Vecminds Technologies | Custom Software & AI Development Company",
    description:
      "A small team of engineers building custom software, AI, and automation that ships fast and keeps paying off for ambitious teams.",
    url: "https://www.vecminds.com",
    siteName: "Vecminds Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vecminds Technologies, a custom software and AI development company",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vecminds Technologies | Custom Software & AI Development Company",
    description:
      "A small team of engineers building custom software, AI, and automation that ships fast and keeps paying off for ambitious teams.",
    images: ["/og-image.png"],
    site: "@vecminds",
    creator: "@vecminds",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// viewport-fit=cover lets env(safe-area-inset-*) return real values on iOS
// so fixed floating buttons clear the home-indicator bar.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const ORG_ID = "https://www.vecminds.com/#organization";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Vecminds Technologies",
  legalName: "Vecminds Technologies Pvt. Ltd.",
  url: "https://www.vecminds.com",
  logo: "https://www.vecminds.com/Vecminds_Full_Logo.png",
  image: "https://www.vecminds.com/og-image.png",
  email: "info@vecminds.com",
  description:
    "A software development company building AI-native products, LLM and automation systems, and full-stack custom software for startups and growing teams.",
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@vecminds.com",
    contactType: "sales",
    availableLanguage: ["English", "Nepali"],
  },
  sameAs: [
    "https://x.com/vecminds",
    "https://github.com/vecminds",
    "https://linkedin.com/company/vecminds",
    "https://blog.vecminds.com",
  ],
  knowsAbout: [
    "Custom Software Development",
    "AI Development and Automation",
    "LLM Applications",
    "RAG Systems",
    "Workflow Automation",
    "Web Application Development",
    "Mobile App Development",
    "API Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software & AI Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "End-to-end product engineering on a modern stack — web apps, mobile apps, AI-native products, and API integration — built so your team can run it without us.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Development & Automation",
          description:
            "LLM applications, RAG pipelines, AI agents, and workflow automation that cut real operational work, not just demos.",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.vecminds.com/#website",
  name: "Vecminds Technologies",
  url: "https://www.vecminds.com",
  inLanguage: "en-US",
  publisher: { "@id": ORG_ID },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to external origins to reduce latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link rel="preconnect" href="https://embed.tawk.to" />

        {/* SVG favicon (scales perfectly at any resolution) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2754D9" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
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
        <noscript>
          {" "}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        {/* Tawk.to live chat — launcher is hidden; opened via the Chat Assistant button.
            A MutationObserver is started BEFORE the Tawk script loads so that any
            fixed-position iframe Tawk renders is immediately hidden, eliminating
            the 1-2s flash of the launcher / "We Are Here!" animation on refresh.
            The observer disconnects itself inside onLoad, before the user can
            ever open the chat panel via maximize(). */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();
// Permanently hide Tawk's non-panel iframes (launcher ~60px, notification
// ~45px, badge ~95px) via a MutationObserver that runs for the lifetime of
// the page. The chat PANEL is ~502px tall and passes the height guard.
// We never disconnect so proactive-engagement re-shows are also suppressed.
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
      if(m.type==='attributes'){
        checkEl(m.target);
      }else if(m.type==='childList'){
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
        {children}
      </body>
    </html>
  );
}
