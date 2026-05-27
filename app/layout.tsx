import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { GA_MEASUREMENT_ID, GTM_ID, META_PIXEL_ID } from "@/lib/integrations";

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
  title: "Vecminds Technologies — Software & AI Engineering, Built to Scale",
  description:
    "A small team of engineers, focused on building AI-native products, automation systems, and production-grade software for ambitious teams.",
  keywords: [
    "software engineering",
    "AI development",
    "LLM applications",
    "RAG systems",
    "automation",
    "web app development",
    "mobile app development",
    "Nepal software company",
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
    title: "Vecminds Technologies — Software & AI Engineering, Built to Scale",
    description:
      "A small team of engineers building AI-native products, automation systems, and production-grade software for ambitious teams.",
    url: "https://www.vecminds.com",
    siteName: "Vecminds Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vecminds Technologies — Software & AI Engineering Studio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vecminds Technologies — Software & AI Engineering, Built to Scale",
    description:
      "A small team of engineers building AI-native products, automation systems, and production-grade software for ambitious teams.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vecminds Technologies",
  legalName: "Vecminds Technologies Pvt. Ltd.",
  url: "https://www.vecminds.com",
  logo: "https://www.vecminds.com/Vecminds_Full_Logo.png",
  email: "info@vecminds.com",
  description:
    "A software engineering studio specializing in AI-native product development, LLM automation systems, and full-stack software engineering for startups and growing teams.",
  sameAs: [
    "https://x.com/vecminds",
    "https://github.com/vecminds",
    "https://linkedin.com/company/vecminds",
    "https://blog.vecminds.com",
  ],
  knowsAbout: [
    "Custom Software Engineering",
    "AI Development",
    "LLM Applications",
    "RAG Systems",
    "Workflow Automation",
    "Web Application Development",
    "Mobile App Development",
    "API Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vecminds Technologies",
  url: "https://www.vecminds.com",
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
        {children}
      </body>
    </html>
  );
}
