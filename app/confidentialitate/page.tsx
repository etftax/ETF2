import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate | Evolution Tax Finance",
  description: "Informații privind protecția datelor personale și politica GDPR. Află cum protejăm datele tale conform legislației în vigoare.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Politica de Confidențialitate - Evolution Tax Finance",
    description: "Informații privind protecția datelor personale și politica GDPR.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function ConfidentialitatePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-24 pt-32">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
              Politica de confidențialitate
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Informații privind protecția datelor cu caracter personal
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Introducere */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                1. Introducere
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Evolution Tax Finance respectă confidențialitatea datelor cu caracter personal și se angajează să protejeze informațiile utilizatorilor site-ului. Prezenta politică de confidențialitate explică modul în care colectăm, utilizăm și protejăm datele dumneavoastră personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
              </p>
            </div>

            {/* Separator */}
            <div className="h-px bg-border/60 mb-12" />

            {/* Date Colectate */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                2. Date colectate
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Prin intermediul formularului de contact de pe site-ul nostru, putem colecta următoarele date cu caracter personal:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Nume
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Adresa de email
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Număr de telefon
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Numele companiei
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Conținutul mesajului transmis
                </li>
              </ul>
            </div>

            {/* Separator */}
            <div className="h-px bg-border/60 mb-12" />

            {/* Scopul Colectării */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                3. Scopul colectării datelor
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Datele cu caracter personal sunt colectate și utilizate exclusiv în următoarele scopuri:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Contactarea utilizatorilor care au transmis o solicitare prin formularul de contact
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Furnizarea informațiilor solicitate cu privire la serviciile noastre
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  Comunicare profesională legată de serviciile de contabilitate și consultanță
                </li>
              </ul>
            </div>

            {/* Separator */}
            <div className="h-px bg-border/60 mb-12" />

            {/* Stocarea și Securitatea */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                4. Stocarea și securitatea datelor
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Datele dumneavoastră personale sunt stocate în siguranță și sunt protejate prin măsuri tehnice și organizatorice adecvate împotriva accesului neautorizat, pierderii sau distrugerii.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nu transmitem, nu vindem și nu partajăm datele dumneavoastră personale cu terțe părți, cu excepția cazurilor în care acest lucru este necesar pentru îndeplinirea obligațiilor legale.
              </p>
            </div>

            {/* Separator */}
            <div className="h-px bg-border/60 mb-12" />

            {/* Drepturile Utilizatorilor */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                5. Drepturile utilizatorilor
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                În conformitate cu Regulamentul GDPR, aveți următoarele drepturi cu privire la datele dumneavoastră personale:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Dreptul de acces</strong> — puteți solicita o copie a datelor personale pe care le deținem despre dumneavoastră
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Dreptul la rectificare</strong> — puteți solicita corectarea datelor inexacte sau incomplete
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Dreptul la ștergere</strong> — puteți solicita ștergerea datelor dumneavoastră personale
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Dreptul la opoziție</strong> — puteți să vă opuneți prelucrării datelor în anumite circumstanțe
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <div>
                    <strong className="text-foreground">Dreptul la portabilitate</strong> — puteți solicita transferul datelor către un alt operator
                  </div>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pentru a vă exercita oricare dintre aceste drepturi, vă rugăm să ne contactați folosind datele de mai jos.
              </p>
            </div>

            {/* Separator */}
            <div className="h-px bg-border/60 mb-12" />

            {/* Date de Contact */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-medium text-foreground mb-6">
                6. Date de contact
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pentru orice întrebări sau solicitări privind datele dumneavoastră personale, ne puteți contacta la:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:etftax@gmail.com"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      etftax@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefon</p>
                    <a
                      href="tel:+40744364603"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      +40 744 364 603
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="pt-8 border-t border-border/60">
              <p className="text-sm text-muted-foreground/70">
                Ultima actualizare: Ianuarie 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
