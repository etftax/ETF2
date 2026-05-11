import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  // Local office image from public/images folder
  const heroImageUrl = "/images/hero.jpg";

  return (
    <section
      className="relative min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] max-h-[70vh] flex items-center overflow-hidden"
      role="img"
      aria-label="Birou de contabilitate și consultanță financiară Evolution Tax Finance"
    >
      {/* Background with real office image and subtle premium dark overlay */}
      <div className="absolute inset-0">
        {/* Real office image as CSS background with premium subtle gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(15, 30, 55, 0.55), rgba(20, 40, 70, 0.50), rgba(15, 30, 55, 0.60)),
              url('${heroImageUrl}')
            `,
            backgroundColor: '#1a2b4a',
          }}
        />
        {/* Subtle pattern overlay for depth */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10 pt-24">
        <div className="max-w-3xl">

          {/* Main Headline - with fade-in slide-up animation */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-normal text-white leading-[1.15] tracking-tight mb-8 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Partenerul tău financiar și fiscal pentru decizii sigure și sustenabile.
          </h1>

          {/* Subheadline - with fade-in slide-up animation (delayed) */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl font-light animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            Servicii integrate de contabilitate, fiscalitate și consultanță financiară pentru companii de toate dimensiunile.
          </p>

          {/* Single Primary CTA - with fade-in slide-up animation (more delayed) */}
          <div className="mb-10 animate-fade-in-up opacity-0"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Button
              size="lg"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-10 py-7 text-base font-medium rounded-md shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
              asChild
            >
              <Link href="/contact#formular">
                Programează o consultație gratuită
              </Link>
            </Button>
          </div>

          {/* Trust Element - Subtle - with fade-in animation */}
          <div className="flex items-center gap-3 text-white/60 animate-fade-in opacity-0"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            <div className="w-8 h-[1px] bg-white/30" />
            <p className="text-sm font-light tracking-wide">
              Peste 15 ani de experiență în contabilitate și fiscalitate
            </p>
          </div>

        </div>
      </div>

      {/* Bottom subtle metrics - with fade-in animation */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 animate-fade-in opacity-0"
        style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}
      >
        <div className="container py-8">
          <div className="flex flex-wrap gap-12 md:gap-20">
            <div className="group">
              <p className="text-white/40 text-xs uppercase tracking-[0.15em] mb-1 font-light">
                Experiență
              </p>
              <p className="text-white/70 text-sm font-light">
                Solidă și dovedită
              </p>
            </div>
            <div className="group">
              <p className="text-white/40 text-xs uppercase tracking-[0.15em] mb-1 font-light">
                Clienți
              </p>
              <p className="text-white/70 text-sm font-light">
                Relații pe termen lung
              </p>
            </div>
            <div className="group">
              <p className="text-white/40 text-xs uppercase tracking-[0.15em] mb-1 font-light">
                Abordare
              </p>
              <p className="text-white/70 text-sm font-light">
                Integrată și personalizată
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
