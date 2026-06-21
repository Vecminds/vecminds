import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
// @ts-expect-error -- CSS imported for side effects in Next.js
import "./globals.css";
import ConsentScripts from "@/components/ConsentScripts";
import CookieBanner from "@/components/CookieBanner";
import { GTM_ID } from "@/lib/integrations";
import { CONSENT_KEY } from "@/lib/consent";

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
  title: "Custom Software & AI Development Company | Vecminds Technologies",
  description:
    "Custom software and AI development company. One team that owns your product end to end, building software and automation that ships fast.",
  keywords: [
    "custom software development",
    "software development company",
    "AI development and automation",
    "LLM applications",
    "RAG systems",
    "web app development",
    "mobile app development",
    "APIs & integration",
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
      "Custom software and AI development company. One team that owns your product end to end, building software and automation that ships fast.",
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
      "Custom software and AI development company. One team that owns your product end to end, building software and automation that ships fast.",
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
    "Custom software and AI development company. We build custom software, AI-native products, LLM applications, and workflow automation, and own what we ship end to end.",
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
        url: "https://www.vecminds.com/services/custom-software-development",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          url: "https://www.vecminds.com/services/custom-software-development",
          description:
            "End-to-end product engineering on a modern stack: web apps, mobile apps, AI-native products, and API integration, built so your team can run it without us.",
        },
      },
      {
        "@type": "Offer",
        url: "https://www.vecminds.com/services/ai-development-automation",
        itemOffered: {
          "@type": "Service",
          name: "AI Development & Automation",
          url: "https://www.vecminds.com/services/ai-development-automation",
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

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vecminds Services",
  url: "https://www.vecminds.com/#services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Custom Software Development",
      url: "https://www.vecminds.com/services/custom-software-development",
      description:
        "End-to-end product engineering for web, mobile, and APIs on a modern stack your team can own after handover.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "AI Development & Automation",
      url: "https://www.vecminds.com/services/ai-development-automation",
      description:
        "LLM apps, RAG pipelines, and workflow automation that remove real operational work, measured in hours saved.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Google Consent Mode v2 defaults — must run before GTM loads */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('${CONSENT_KEY}')==='accepted'){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}}catch(e){}`}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

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
        <link rel="me" href="https://mastodon.social/@vecminds" />
        
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesListSchema),
          }}
        />
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ConsentScripts />
        <CookieBanner />
        {children}
      </body>
    </html>
  );
}
