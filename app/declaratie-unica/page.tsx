import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeclaratieUnicaClient from "./DeclaratieUnicaClient";

export const metadata: Metadata = {
  title: "Declarația Unică 2026 – Completată în aceeași zi | Evolution Tax Finance",
  description:
    "Declarația Unică 2026 completată de profesioniști în aceeași zi. Pachet complet 497 LEI – Declarație + asistență SPV inclusă. Suni până la 12:00 → declarația poate fi gata azi. ☎ 0760 937 133",
  keywords: "declaratia unica 2026, completare declaratie unica, declaratie unica pfa, declaratie unica chirii, declaratie unica ANAF, completare declaratie unica online, SPV ANAF",
  openGraph: {
    title: "Declarația Unică 2026 – Completată în aceeași zi | ETF",
    description:
      "Pachet complet (Declarație + asistență SPV inclusă) 497 LEI. Garanție triplă. 25 ani experiență, 0 amenzi.",
    type: "website",
    url: "https://www.etftax.net/declaratie-unica",
    siteName: "Evolution Tax Finance",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Declarația Unică 2026 – Completată în aceeași zi | ETF",
    description: "Pachet complet 497 LEI. Garanție triplă. 25 ani experiență, 0 amenzi.",
  },
  alternates: {
    canonical: "https://www.etftax.net/declaratie-unica",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Evolution Tax Finance SRL",
  image: "https://www.etftax.net/logo.png",
  telephone: "+40760937133",
  email: "aura.croitoru@etftax.ro",
  url: "https://www.etftax.net",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RO",
    addressLocality: "București",
  },
  priceRange: "497 LEI",
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Completare Declarația Unică",
  provider: { "@type": "LocalBusiness", name: "Evolution Tax Finance SRL" },
  areaServed: "RO",
  offers: {
    "@type": "Offer",
    price: "497",
    priceCurrency: "RON",
    description: "Completare Declarația Unică + asistență SPV inclusă",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "De ce să folosesc serviciile ETF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Da, poți completa singur. Dar gândește-te la timp (5-10 ore), risc (amenzi pentru greșeli) și bani pierduți (impozit calculat greșit). Pentru cazuri cu chirii, străinătate, PFA, dividende sau cripto, serviciul nostru e o asigurare care te scutește de mii de lei în greșeli și amenzi.",
      },
    },
    {
      "@type": "Question",
      name: "Cine trebuie să depună Declarația Unică în 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Persoanele fizice cu venituri din chirii, activități independente (PFA/II/IF), dividende, dobânzi, venituri din străinătate, cripto sau alte venituri impozabile.",
      },
    },
    {
      "@type": "Question",
      name: "Ce se întâmplă dacă nu depun până pe 25 mai 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Riști amenzi de la 50 la 500 LEI pentru depunere cu întârziere, plus penalități și majorări de întârziere pentru sumele datorate.",
      },
    },
    {
      "@type": "Question",
      name: "Cât durează procesul?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suni până la ora 12:00 și declarația ta poate fi gata în aceeași zi. În general, 24-48 de ore din momentul în care primim toate documentele.",
      },
    },
    {
      "@type": "Question",
      name: "Ce este SPV și de ce am nevoie de cont?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPV (Spațiul Privat Virtual) este platforma online ANAF prin care depui declarațiile. Începând cu 2024, depunerea online este obligatorie pentru majoritatea contribuabililor. Asistență SPV inclusă — te ghidăm cu contul SPV și îți explicăm cum funcționează, totul inclus în pachetul de 497 LEI.",
      },
    },
  ],
};

const jsonLdRating = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: { "@type": "LocalBusiness", name: "Evolution Tax Finance SRL" },
  ratingValue: "5",
  reviewCount: "300",
};

export default function DeclaratieUnicaPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRating) }} />
      <Header />
      <div style={{ paddingTop: "72px" }}>
        <DeclaratieUnicaClient />
      </div>
      <Footer />
    </main>
  );
}
