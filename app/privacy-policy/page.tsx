import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingActions from "@/components/FloatingActions";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Privacy Policy | Vecminds Technologies",
  description:
    "Privacy Policy for Vecminds Technologies. How we collect, use, and protect information when you visit our website or work with us.",
  alternates: { canonical: "https://www.vecminds.com/privacy-policy" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    heading: "Information we collect",
    body: "When you visit our website, we collect standard server log data (IP address, browser type, pages visited, time of visit) through Google Analytics and Google Tag Manager. When you submit a contact form or book a call, we collect the name, email address, and any message content you provide. We do not collect payment details through this website.",
  },
  {
    heading: "How we use it",
    body: "We use the information you provide solely to respond to your enquiry and to discuss a potential engagement. Analytics data is used in aggregate to understand how people find and navigate the site. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
  },
  {
    heading: "Cookies and tracking",
    body: "Our site uses cookies set by Google Analytics (GA4) and Google Tag Manager to measure traffic and usage patterns, and by Meta Pixel for advertising measurement. You can disable cookies in your browser settings at any time. We also use Cal.com to handle call bookings; their privacy policy applies to data you submit through their booking interface.",
  },
  {
    heading: "Third-party services",
    body: "We use the following third-party services that may process data on your behalf: Google Analytics (analytics), Google Tag Manager (tag management), Meta Pixel (advertising), Cal.com (call booking), and Tawk.to (live chat). Each service operates under its own privacy policy. Links to their respective policies are available on their websites.",
  },
  {
    heading: "Data retention",
    body: "Analytics data is retained for 14 months by default in Google Analytics. Contact form submissions and email correspondence are retained for as long as necessary to fulfil the purpose for which they were collected or to meet legal requirements. You may request deletion of your data at any time by contacting us.",
  },
  {
    heading: "Your rights",
    body: "Depending on your location, you may have rights under applicable data protection law to access, correct, delete, or restrict processing of your personal data. To exercise any of these rights, contact us at info@vecminds.com. We will respond within 30 days.",
  },
  {
    heading: "Security",
    body: "Our website is served over HTTPS. We take reasonable technical and organisational measures to protect the information we hold. No transmission of data over the internet is completely secure, however, and we cannot guarantee the security of data you send to us.",
  },
  {
    heading: "Changes to this policy",
    body: "We may update this policy from time to time. The date at the bottom of this page reflects the most recent revision. Continued use of the site after a change constitutes acceptance of the updated policy.",
  },
  {
    heading: "Contact",
    body: "Vecminds Technologies Pvt. Ltd. · info@vecminds.com",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col bg-[#F5F5F5]">
      <ScrollReveal />
      <Navbar />

      <main className="px-4 sm:px-6 pt-28 sm:pt-32 pb-24">
        <div className="max-w-[88rem] mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-black/50">
              <li>
                <Link href="/" className="hover:text-black transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-black/80">Privacy Policy</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Sticky left column — mirrors service page FAQ layout */}
            <div className="md:col-span-4 md:sticky md:top-24">
              <p className="text-black/60 text-sm mb-2">Legal</p>
              <h1
                className="text-black text-5xl sm:text-6xl font-medium leading-[1.02] mb-4"
                style={{ letterSpacing: "-0.04em" }}
              >
                Privacy
                <br />
                Policy
              </h1>
              <p className="text-black/50 text-sm font-inter mb-6">
                Last updated: 3 June 2026
              </p>
              <p className="text-black/60 text-base leading-relaxed max-w-sm font-inter">
                Vecminds Technologies Pvt. Ltd. operates{" "}
                <a
                  href="https://www.vecminds.com"
                  className="text-[#2754D9] hover:underline"
                >
                  www.vecminds.com
                </a>
                . This page explains what information we collect, how we use it,
                and what rights you have over it. Short and plain-language on
                purpose.
              </p>
            </div>

            {/* Sections */}
            <div className="md:col-span-8 flex flex-col gap-3">
              {SECTIONS.map((s, i) => (
                <div
                  key={s.heading}
                  className="bg-white rounded-2xl border border-black/5 p-7 md:p-8"
                >
                  <div className="flex items-start gap-5">
                    <span className="text-black/25 text-xs font-medium tabular-nums shrink-0 pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h2
                        className="text-black text-xl font-medium leading-snug mb-3"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {s.heading}
                      </h2>
                      <p className="text-black/65 text-base leading-relaxed font-inter">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTopButton />
      <FloatingActions />
    </div>
  );
}
