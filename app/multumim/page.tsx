import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Mulțumim! | Evolution Tax Finance",
  description: "Mesajul tău a fost trimis cu succes. Te vom contacta în maximum 4 ore lucrătoare.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MultumimPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-primary">
        <Header />
      </div>

      <section className="py-32 bg-secondary flex items-center justify-center min-h-[70vh]">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-10 h-10 text-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Mesaj trimis
            </p>

            <h1 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
              Mulțumim pentru mesaj!
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-3">
              Am primit solicitarea ta și un consultant din echipa noastră te va contacta în maximum{" "}
              <strong className="text-foreground">4 ore lucrătoare</strong>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Dacă ai nevoie urgentă, ne poți suna direct la{" "}
              <a
                href="tel:+40744364603"
                className="text-accent font-medium hover:underline"
              >
                +40 744 364 603
              </a>
              .
            </p>

            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/">Înapoi la pagina principală</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
