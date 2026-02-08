import type { Metadata } from "next";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Evolution Tax Finance | Accounting & Tax Advisory Bucharest",
  description: "Professional accounting, tax consulting, audit and payroll services for companies in Romania. Expertise in taxation and outsourced CFO services.",
  keywords: "accounting, tax advisory, audit, payroll, outsourced CFO, financial services, Bucharest, Romania",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Evolution Tax Finance | Accounting & Tax Advisory",
    description: "Professional accounting, tax consulting, audit and payroll services for companies in Romania.",
    type: "website",
    locale: "en_US",
    siteName: "Evolution Tax Finance",
  },
};

const services = [
  {
    title: "Accounting",
    description: "Complete financial and management accounting services, tailored to your company's specific needs.",
    href: "/en/services#accounting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Tax Advisory",
    description: "Legal tax optimization, strategic tax planning and representation before tax authorities.",
    href: "/en/services#tax",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Financial Consulting",
    description: "Outsourced CFO services, cash-flow analysis and strategic support for financial decisions.",
    href: "/en/services#financial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125 0.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "HR & Payroll",
    description: "Complete payroll administration and HR management, ensuring labor law compliance.",
    href: "/en/services#hr",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Audit",
    description: "Financial audit, internal audit and compliance verification services for transparency.",
    href: "/en/services#audit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Legal Support",
    description: "Specialized legal advisory in tax and commercial matters, contract drafting and representation.",
    href: "/en/services#legal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "300+", label: "Active Clients" },
  { value: "100%", label: "Compliance" },
  { value: "4h", label: "Response Time" },
];

const testimonials = [
  {
    quote: "The collaboration with Evolution Tax Finance brought clarity and efficiency in our company's financial management. Highly recommended!",
    author: "Salagean Valentin",
    role: "Owner, Il Calcio by Mrs Val",
  },
  {
    quote: "Professionalism, quick response and solutions adapted to our needs. We are very satisfied with the tax advisory services.",
    author: "Gabriel Sibechi",
    role: "Administrator, Voltatec SRL",
  },
  {
    quote: "The ETF team helped us optimize costs and stay compliant with legislation. A trusted partner.",
    author: "Shawu Dan",
    role: "Manager, Jona Clinic",
  },
];

export default function HomePageEN() {
  return (
    <main className="min-h-screen">
      <HeaderEN />

      {/* Hero Section */}
      <section className="relative min-h-[auto] pb-8 md:pb-0 md:min-h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Evolution Tax Finance - Professional accounting services"
            fill
            priority
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60 md:from-primary/90 md:via-primary/70 md:to-transparent" />
        </div>

        <div className="container relative z-10 pt-28 md:pt-32 pb-12 md:pb-20">
          <div className="max-w-2xl">
            <p className="text-xs md:text-sm font-medium text-accent uppercase tracking-[0.15em] md:tracking-[0.2em] mb-3 md:mb-4">
              Accounting & Financial Consulting
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 md:mb-6 leading-tight">
              Integrated solutions for your business
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 leading-relaxed max-w-xl">
              We offer complete accounting, tax, and financial consulting services tailored to your company's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground h-11 md:h-12 text-sm md:text-base"
                asChild
              >
                <Link href="/en/contact">
                  Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-11 md:h-12 text-sm md:text-base"
                asChild
              >
                <Link href="/en/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-10 md:py-16 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-4xl font-semibold text-accent mb-1 md:mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
              Complete solutions for your business
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer a complete range of financial and tax services, tailored to your company's specific needs, regardless of size or industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
              What our clients say
            </h2>
            <p className="text-white/60 leading-relaxed">
              Client feedback motivates us to deliver the highest quality services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
              Ready to discuss your business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Fill out the form and a consultant from our team will contact you within 4 business hours.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/en/contact">
                Schedule a Free Consultation
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <FooterEN />
    </main>
  );
}
