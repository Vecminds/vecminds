import type { Metadata } from 'next'
import Script from 'next/script'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import { GA_MEASUREMENT_ID, GTM_ID } from '@/lib/integrations'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vecminds Technologies — Software & AI Engineering, Built to Scale',
  description:
    'A small team of engineers, focused on building AI-native products, automation systems, and production-grade software for ambitious teams.',
  icons: { icon: '/favicon.ico' },
  alternates: { canonical: 'https://www.vecminds.com' },
  openGraph: {
    title: 'Vecminds Technologies — Software & AI Engineering, Built to Scale',
    description:
      'A small team of engineers building AI-native products, automation systems, and production-grade software for ambitious teams.',
    url: 'https://www.vecminds.com',
    siteName: 'Vecminds Technologies',
    images: [
      {
        url: 'https://www.vecminds.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vecminds Technologies — Software & AI Engineering Studio',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vecminds Technologies — Software & AI Engineering, Built to Scale',
    description:
      'A small team of engineers building AI-native products, automation systems, and production-grade software for ambitious teams.',
    images: ['https://www.vecminds.com/og-image.png'],
    site: '@vecminds',
    creator: '@vecminds',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vecminds Technologies',
  legalName: 'Vecminds Technologies Pvt. Ltd.',
  url: 'https://www.vecminds.com',
  logo: 'https://www.vecminds.com/Vecminds_Full_Logo.png',
  email: 'info@vecminds.com',
  description:
    'A software engineering studio specializing in AI-native product development, LLM automation systems, and full-stack software engineering for startups and growing teams.',
  sameAs: [
    'https://x.com/vecminds',
    'https://github.com/vecminds',
    'https://linkedin.com/company/vecminds',
    'https://blog.vecminds.com',
  ],
  knowsAbout: [
    'Custom Software Engineering',
    'AI Development',
    'LLM Applications',
    'RAG Systems',
    'Workflow Automation',
    'Web Application Development',
    'Mobile App Development',
    'API Development',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Vecminds Technologies',
  url: 'https://www.vecminds.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
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
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  )
}
