import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Mail, Phone, CheckCircle } from "lucide-react";

const howWeWork = [
  "Abordare structurată și orientată pe conformitate",
  "Comunicare clară și transparentă",
  "Soluții adaptate nevoilor fiecărui client",
  "Respectarea strictă a legislației în vigoare",
];

// Local images from public/images folder
const teamImageUrl = "/images/hr-payroll.jpg";
const closingImageUrl = "/images/despre-birou.jpg";

export default function DesprePage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-24 pt-32">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4">
              Despre noi
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-medium text-white mb-8 leading-tight">
              Evolution Tax Finance
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Evolution Tax Finance este o firmă de contabilitate, fiscalitate și consultanță financiară care sprijină companiile în luarea deciziilor corecte și sustenabile, într-un mediu economic și legislativ în continuă schimbare.
            </p>
          </div>
        </div>
      </section>

      {/* Image 1 - Team Photo - Full Width Below Header - Optimized */}
      <section
        className="relative min-h-[45vh] md:min-h-[50vh] lg:min-h-[55vh]"
        aria-label="Echipă de contabilitate și payroll Evolution Tax Finance"
      >
        {/* Background Image with Next.js Image optimization */}
        <div className="absolute inset-0">
          <Image
            src={teamImageUrl}
            alt="Echipă de contabilitate și payroll Evolution Tax Finance"
            fill
            loading="lazy"
            quality={75}
            className="object-cover"
            sizes="100vw"
          />
          {/* Very subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,43,74,0.08)] to-[rgba(26,43,74,0.12)]" />
        </div>
      </section>

      {/* Misiunea Noastră */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Misiunea noastră
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Misiunea noastră este de a oferi servicii financiare riguroase, clare și conforme, contribuind la stabilitatea și dezvoltarea pe termen lung a afacerilor cu care colaborăm.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container">
        <div className="h-px bg-border/60" />
      </div>

      {/* Cum Lucrăm */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-10">
              Cum lucrăm
            </h2>
            <ul className="space-y-5">
              {howWeWork.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container">
        <div className="h-px bg-border/60" />
      </div>

      {/* Experiență și Valori */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
              Experiență și valori
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ne bazăm pe o experiență solidă în domeniul contabilității și fiscalității, precum și pe valori precum profesionalismul, responsabilitatea și parteneriatul pe termen lung.
            </p>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container">
        <div className="h-px bg-border/60" />
      </div>

      {/* Date de Contact */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-10">
              Date de contact
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href="mailto:etftax@gmail.com"
                    className="text-lg text-foreground hover:text-accent transition-colors"
                  >
                    etftax@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                  <a
                    href="tel:+40744364603"
                    className="text-lg text-foreground hover:text-accent transition-colors"
                  >
                    +40 744 364 603
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image 2 - Closing Visual - Full Width Above Footer - Optimized */}
      <section
        className="relative min-h-[35vh] md:min-h-[40vh] lg:min-h-[45vh]"
        aria-label="Biroul Evolution Tax Finance – contabilitate și consultanță financiară"
      >
        {/* Background Image with Next.js Image optimization */}
        <div className="absolute inset-0">
          <Image
            src={closingImageUrl}
            alt="Biroul Evolution Tax Finance – contabilitate și consultanță financiară"
            fill
            loading="lazy"
            quality={75}
            className="object-cover"
            sizes="100vw"
          />
          {/* Minimal overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,43,74,0.05)] to-[rgba(26,43,74,0.10)]" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
