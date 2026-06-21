import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ServiceDetail from "@/components/ServiceDetail";
import { getService, SERVICES_BASE_PATH } from "@/lib/services";

const SLUG = "ai-development-automation";
const service = getService(SLUG)!;
const canonical = `https://www.vecminds.com${SERVICES_BASE_PATH}/${SLUG}`;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: canonical,
    siteName: "Vecminds Technologies",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: service.metaTitle,
    description: service.metaDescription,
    images: ["/og-image.png"],
  },
};

export default function AiDevelopmentAutomationPage() {
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: canonical,
    provider: { "@id": "https://www.vecminds.com/#organization" },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: d.title,
          description: d.body,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vecminds.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.vecminds.com/services",
      },
      { "@type": "ListItem", position: 3, name: service.shortName, item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollReveal />
      <Navbar />
      <ServiceDetail service={service} />
      <Footer />
      <ScrollToTopButton />
      <FloatingActions />
    </div>
  );
}
