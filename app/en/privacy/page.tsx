import type { Metadata } from "next";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Evolution Tax Finance",
  description: "Information about personal data protection and GDPR policy. Learn how we protect your data in accordance with current legislation.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - Evolution Tax Finance",
    description: "Information about personal data protection and GDPR policy.",
    type: "website",
    locale: "en_US",
  },
};

export default function PrivacyPageEN() {
  return (
    <main className="min-h-screen">
      <HeaderEN />

      {/* Hero Section */}
      <section className="bg-primary py-24 pt-32">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Information about personal data protection
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Evolution Tax Finance respects the privacy of personal data and is committed to protecting users' information on our website. This privacy policy explains how we collect, use and protect your personal data in accordance with the General Data Protection Regulation (GDPR).
              </p>
            </div>

            <div className="h-px bg-border/60 mb-12" />

            {/* Data Collected */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                2. Data collected
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Through the contact form on our website, we may collect the following personal data:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Name
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Email address
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Phone number
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Company name
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Message content
                </li>
              </ul>
            </div>

            <div className="h-px bg-border/60 mb-12" />

            {/* Purpose of Collection */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                3. Purpose of data collection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Personal data is collected and used exclusively for the following purposes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Contacting users who have submitted a request through the contact form
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Providing requested information about our services
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Professional communication related to accounting and consulting services
                </li>
              </ul>
            </div>

            <div className="h-px bg-border/60 mb-12" />

            {/* Storage and Security */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                4. Data storage and security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your personal data is stored securely and protected by appropriate technical and organizational measures against unauthorized access, loss or destruction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not transmit, sell or share your personal data with third parties, except when necessary to fulfill legal obligations.
              </p>
            </div>

            <div className="h-px bg-border/60 mb-12" />

            {/* User Rights */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                5. User rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In accordance with GDPR, you have the following rights regarding your personal data:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Right of access</strong> — you can request a copy of the personal data we hold about you
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Right to rectification</strong> — you can request correction of inaccurate or incomplete data
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Right to erasure</strong> — you can request deletion of your personal data
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Right to object</strong> — you can object to data processing in certain circumstances
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Right to portability</strong> — you can request transfer of data to another operator
                  </div>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details below.
              </p>
            </div>

            <div className="h-px bg-border/60 mb-12" />

            {/* Contact Details */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                6. Contact details
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For any questions or requests regarding your personal data, you can contact us at:
              </p>

              <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Evolution Tax Finance SRL</strong></p>
                  <p>Str. Sarafinesti 16, sector 2</p>
                  <p>Bucharest, Romania</p>
                  <p><strong className="text-foreground">Tax ID:</strong> 35486370</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:etftax@gmail.com" className="text-foreground hover:text-accent transition-colors">
                      etftax@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+40744364603" className="text-foreground hover:text-accent transition-colors">
                      +40 744 364 603
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-border/60">
              <p className="text-sm text-muted-foreground/70">
                Last updated: February 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      <FooterEN />
    </main>
  );
}
