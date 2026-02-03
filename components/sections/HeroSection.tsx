import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[auto] md:min-h-[65vh] lg:min-h-[70vh] flex items-center bg-primary overflow-hidden pt-20 pb-32 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Evolution Tax Finance - Servicii de contabilitate"
          fill
          priority
          quality={85}
          className="object-cover object-center opacity-30 animate-slow-zoom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-8 md:py-16">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">
            Contabilitate & Consultanță Financiară
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-primary-foreground leading-tight mb-5 md:mb-8">
            Soluții integrate pentru afacerea ta
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/70 leading-relaxed mb-6 md:mb-10 max-w-xl">
            Oferim servicii complete de contabilitate, fiscalitate și consultanță
            financiară adaptate nevoilor companiei tale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground h-11 md:h-12 px-6 md:px-8 text-sm md:text-base"
              data-gtag="click"
              data-gtag-category="cta"
              data-gtag-action="consultation_click"
              data-gtag-label="hero_primary_cta"
            >
              <Link href="/contact#formular">
                Consultație gratuită
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent bg-accent/10 text-accent-foreground hover:bg-accent/20 h-11 md:h-12 px-6 md:px-8 text-sm md:text-base font-medium"
              data-gtag="click"
              data-gtag-category="cta"
              data-gtag-action="services_click"
              data-gtag-label="hero_secondary_cta"
            >
              <Link href="/servicii">Vezi serviciile noastre</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary-foreground/5 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="container py-4 md:py-6 lg:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground mb-0.5 md:mb-1">25+</p>
              <p className="text-[10px] md:text-xs lg:text-sm text-primary-foreground/50">Ani experiență</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground mb-0.5 md:mb-1">300+</p>
              <p className="text-[10px] md:text-xs lg:text-sm text-primary-foreground/50">Clienți activi</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground mb-0.5 md:mb-1">100%</p>
              <p className="text-[10px] md:text-xs lg:text-sm text-primary-foreground/50">Conformitate</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground mb-0.5 md:mb-1">4h</p>
              <p className="text-[10px] md:text-xs lg:text-sm text-primary-foreground/50">Timp de răspuns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
