import type { Metadata } from "next";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Evolution Tax Finance - Strategic Accounting",
  description: "A financial-accounting organization built for entrepreneurs who think long-term. Structure, anticipation, correct interpretation of the law.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Evolution Tax Finance",
    description: "About structure. About control. About informed decisions.",
    type: "website",
    locale: "en_US",
  },
};

export default function AboutPageEN() {
  return (
    <main className="min-h-screen">
      <HeaderEN />

      {/* Hero Section */}
      <section className="bg-primary py-24 pt-32 md:py-32 md:pt-40">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-6">
              About Us
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8 leading-tight">
              About structure. About control.<br className="hidden md:block" /> About informed decisions.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              In an increasingly complex and unpredictable tax environment, accounting is no longer an administrative function. It is a governance tool, a control mechanism, and ultimately, a form of legal-financial protection.
            </p>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              Evolution Tax Finance was built precisely from this conviction.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-accent py-8 md:py-10">
        <div className="container">
          <p className="text-center text-accent-foreground text-lg md:text-xl font-medium italic">
            "In an unpredictable tax environment, the difference is not made by reaction, but by structure."
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
              Who we are, in essence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We are a financial-accounting organization that approaches accounting as a system, not as a succession of declarative obligations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't work with quick fixes, improvisations, or circumstantial artifices.
            </p>
            <p className="text-lg text-foreground font-medium mb-4">We work with:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">structure,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">anticipation,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">correct interpretation of the law,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">and informed decisions before risk arises.</span>
              </li>
            </ul>
            <div className="bg-secondary/50 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-medium italic">
                Modern taxation no longer tolerates improvisation; it rewards only rigor and anticipation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container">
        <div className="h-px bg-border/60" />
      </div>

      {/* What Sets Us Apart */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
              What sets us apart
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We don't promise "miraculous optimizations" and we don't sell emotional comfort.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We build real tax peace of mind, based on proper organization and accounting that can be defended at any time, including in an audit context.
            </p>
            <p className="text-lg text-foreground font-medium mb-4">For us:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">accounting precedes control,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">compliance precedes sanctions,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">and prevention is superior to any delayed reaction.</span>
              </li>
            </ul>
            <div className="bg-secondary/50 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-medium italic">
                Accounting order precedes tax peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container">
        <div className="h-px bg-border/60" />
      </div>

      {/* About Taxes and Reality */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
              About taxes and reality
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We accept a simple reality and state it openly:
            </p>
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg mb-8">
              <p className="text-xl text-foreground font-medium text-center">
                If no one escapes paying taxes, then they must be managed intelligently.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-lg text-foreground font-medium mb-3">Not through:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-px bg-muted-foreground/40" />
                    <span className="text-muted-foreground">avoidance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-px bg-muted-foreground/40" />
                    <span className="text-muted-foreground">silence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-px bg-muted-foreground/40" />
                    <span className="text-muted-foreground">improvisation</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg text-foreground font-medium mb-3">But through:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">proper accounting structure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">well-founded tax decisions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">deep understanding of risk</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-secondary/50 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-medium italic">
                Taxes are a certainty. Their control begins in accounting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container">
        <div className="h-px bg-border/60" />
      </div>

      {/* Who We Serve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
              Who we serve
            </h2>
            <p className="text-xl text-foreground font-medium mb-6">
              Not everyone.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We serve entrepreneurs and companies that:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">understand that tax decisions are business decisions,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">cannot afford uncontrolled risks,</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 flex-shrink-0" />
                <span className="text-lg text-muted-foreground">and want a partner who warns before audits, not explains after.</span>
              </li>
            </ul>
            <div className="bg-secondary/50 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-medium italic">
                Not all companies need strategic accounting. Only those who want real control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="container">
        <div className="h-px bg-border/60" />
      </div>

      {/* Our Philosophy */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">
              Our philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-secondary/30 p-6 rounded-lg">
                <p className="text-lg text-foreground font-medium mb-4">The accountant is not:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-px bg-muted-foreground/40" />
                    <span className="text-muted-foreground">the defender of the state,</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-px bg-muted-foreground/40" />
                    <span className="text-muted-foreground">nor the executor of risky decisions.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                <p className="text-lg text-foreground font-medium mb-4">The accountant is:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">the correct interpreter of the law,</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">the tax risk filter,</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">the partner who tells the truth before it becomes a problem.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-secondary/50 border-l-4 border-accent p-6 rounded-r-lg">
              <p className="text-foreground font-medium italic">
                Impartiality does not exclude loyalty to the entrepreneur. It makes it possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Evolution Tax Finance
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              A financial-accounting organization built for entrepreneurs who think long-term.
            </p>
            <div className="bg-white/10 border border-white/20 p-8 rounded-lg mb-10">
              <p className="text-lg md:text-xl text-white font-medium italic leading-relaxed">
                "Behind every solid tax decision lies accounting that was designed, not just executed."
              </p>
            </div>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/en/contact">
                Schedule a Consultation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:etftax@gmail.com" className="text-foreground hover:text-accent transition-colors font-medium">
                    etftax@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+40744364603" className="text-foreground hover:text-accent transition-colors font-medium">
                    +40 744 364 603
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterEN />
    </main>
  );
}
