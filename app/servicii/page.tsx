import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/sections/ContactFormSection";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Servicii Contabilitate și Consultanță Fiscală | Evolution Tax Finance",
  description: "Servicii complete: contabilitate, consultanță fiscală, audit, HR & payroll, CFO externalizat. Soluții financiare personalizate pentru afacerea ta.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Servicii Contabilitate și Consultanță Fiscală",
    description: "Servicii complete: contabilitate, consultanță fiscală, audit, HR & payroll, CFO externalizat.",
    type: "website",
    locale: "ro_RO",
  },
};

const services = [
  {
    id: "contabilitate",
    title: "Contabilitate",
    subtitle: "Servicii complete de contabilitate financiară și de gestiune",
    description: "Oferim servicii profesionale de contabilitate adaptate nevoilor specifice ale fiecărei companii, asigurând conformitatea cu reglementările în vigoare și furnizând informații financiare precise pentru luarea deciziilor de afaceri.",
    features: [
      "Înregistrarea operațiunilor contabile curente",
      "Întocmirea situațiilor financiare anuale",
      "Raportări financiare periodice",
      "Contabilitate de gestiune și analize de costuri",
      "Reconcilieri bancare și a conturilor",
      "Consultanță în aplicarea standardelor contabile",
    ],
    imageUrl: "/images/servicii-contabilitate.jpg",
    imageAlt: "Servicii de contabilitate financiară pentru companii",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    id: "fiscalitate",
    title: "Consultanță Fiscală",
    subtitle: "Optimizare fiscală și planificare strategică",
    description: "Echipa noastră de experți fiscali oferă consultanță specializată pentru optimizarea sarcinii fiscale în mod legal, planificarea fiscală strategică și reprezentarea în fața autorităților fiscale.",
    features: [
      "Planificare și optimizare fiscală legală",
      "Întocmirea și depunerea declarațiilor fiscale",
      "Reprezentare în inspecții fiscale",
      "Consultanță privind TVA și taxe locale",
      "Analiză a riscurilor fiscale",
      "Prețuri de transfer pentru grupuri de companii",
    ],
    imageUrl: "/images/consultanta-fiscala.jpg",
    imageAlt: "Consultanță fiscală și optimizare fiscală pentru firme",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    id: "financiar",
    title: "Consultanță Financiară / CFO",
    subtitle: "Servicii de CFO externalizat și analiză financiară",
    description: "Oferim suport strategic pentru deciziile financiare ale companiei tale, de la analize de cash-flow și prognoze financiare, până la servicii complete de CFO externalizat pentru companii în creștere.",
    features: [
      "Servicii de CFO externalizat",
      "Analize și prognoze de cash-flow",
      "Modelări financiare și scenarii",
      "Suport în accesarea finanțărilor",
      "Evaluări de afaceri și due diligence",
      "KPI financiari și dashboards de management",
    ],
    imageUrl: "/images/cfo.jpg",
    imageAlt: "Consultanță financiară și servicii CFO pentru management",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125 0.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    id: "hr",
    title: "HR & Payroll",
    subtitle: "Administrare personal și salarizare completă",
    description: "Gestionăm complet administrarea resurselor umane și salarizarea, permițându-vă să vă concentrați pe dezvoltarea afacerii, în timp ce noi ne asigurăm de conformitatea cu legislația muncii.",
    features: [
      "Calculul și administrarea salariilor",
      "Întocmirea contractelor de muncă",
      "Declarații către autoritățile statului",
      "Administrarea concediilor și beneficiilor",
      "Consultanță în legislația muncii",
      "Dosare de personal și evidențe",
    ],
    imageUrl: "/images/hr-payroll.jpg",
    imageAlt: "Servicii HR și payroll – administrare salarii",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    id: "audit",
    title: "Audit și Control Financiar",
    subtitle: "Servicii de audit și verificare a conformității",
    description: "Echipa noastră de auditori autorizați oferă servicii complete de audit financiar, audit intern și verificări de conformitate pentru a asigura transparența și integritatea operațiunilor financiare.",
    features: [
      "Audit financiar statutar",
      "Audit intern și control",
      "Due diligence financiar",
      "Verificări de conformitate",
      "Raportări către management",
      "Implementarea recomandărilor de audit",
    ],
    imageUrl: "/images/audit.jpg",
    imageAlt: "Audit financiar și control intern pentru companii",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: "juridic",
    title: "Suport Juridic",
    subtitle: "Consultanță juridică în domeniul fiscal și comercial",
    description: "Oferim suport juridic specializat în domeniul fiscal și comercial, de la redactarea contractelor până la reprezentarea în fața autorităților și instanțelor.",
    features: [
      "Consultanță juridică fiscală",
      "Redactare și revizuire contracte",
      "Reprezentare în fața autorităților",
      "Asistență în litigii fiscale",
      "Consultanță drept comercial",
      "Conformitate și reglementări",
    ],
    imageUrl: "/images/juridic.jpg",
    imageAlt: "Suport juridic fiscal și comercial pentru firme",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
];

export default function ServiciiPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-white/60 uppercase tracking-wider mb-3">
              Servicii profesionale
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6">
              Servicii integrate de contabilitate și consultanță
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Oferim o gamă completă de servicii financiare și fiscale, adaptate nevoilor specifice ale companiei tale, indiferent de dimensiune sau industrie.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-serif text-3xl font-medium text-foreground mb-2">
                    {service.title}
                  </h2>
                  <p className="text-accent font-medium mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-accent hover:bg-accent/90" asChild>
                    <Link href="/contact#formular">
                      Solicită o consultație
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </Button>
                </div>

                {/* Service Image - Optimized with Next.js Image */}
                <div className={`relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    fill
                    loading="lazy"
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
      <Footer />
    </main>
  );
}
