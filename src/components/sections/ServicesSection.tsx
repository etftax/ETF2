import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Contabilitate",
    href: "/servicii#contabilitate",
    description:
      "Asigurăm evidența contabilă completă, corectă și conformă cu legislația în vigoare, oferind o bază solidă pentru decizii financiare informate.",
    image: "/images/servicii-contabilitate.jpg",
    imageAlt: "Servicii de contabilitate financiară pentru companii",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Consultanță fiscală",
    href: "/servicii#fiscalitate",
    description:
      "Oferim suport în interpretarea și aplicarea legislației fiscale, optimizarea structurii fiscale și gestionarea riscurilor fiscale.",
    image: "/images/consultanta-fiscala.jpg",
    imageAlt: "Consultanță fiscală și optimizare fiscală pentru firme",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Consultanță financiară / CFO",
    href: "/servicii#financiar",
    description:
      "Sprijinim managementul în planificare financiară, analiză de performanță și luarea deciziilor strategice.",
    image: "/images/cfo.jpg",
    imageAlt: "Consultanță financiară și servicii CFO pentru management",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "HR & Payroll",
    href: "/servicii#hr",
    description:
      "Gestionăm procesele de salarizare și administrare de personal, asigurând acuratețe, confidențialitate și conformitate legală.",
    image: "/images/hr-payroll.jpg",
    imageAlt: "Servicii HR și payroll – administrare salarii",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Audit și control financiar",
    href: "/servicii#audit",
    description:
      "Realizăm verificări și analize financiare pentru a identifica riscuri, neconformități și oportunități de îmbunătățire.",
    image: "/images/audit.jpg",
    imageAlt: "Audit financiar și control intern pentru companii",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Suport juridic",
    href: "/servicii#juridic",
    description:
      "Oferim suport juridic de bază în colaborare cu parteneri specializați, pentru o abordare completă a nevoilor de business.",
    image: "/images/juridic.jpg",
    imageAlt: "Suport juridic fiscal și comercial pentru firme",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 bg-white" id="servicii">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs font-medium text-[#3b5998] uppercase tracking-[0.2em] mb-4">
            Serviciile noastre
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#1a2b4a] leading-tight mb-6">
            Oferim servicii integrate de contabilitate, fiscalitate și consultanță financiară, adaptate nevoilor specifice fiecărei afaceri.
          </h2>
          <div className="w-16 h-[2px] bg-[#3b5998]/30 mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <Link href={service.href} className="block h-full cursor-pointer">
                {/* Card */}
                <div className="h-full bg-[#f8f9fb] rounded-sm border border-[#e8eaef] hover:border-[#3b5998]/20 hover:bg-white hover:shadow-lg hover:shadow-[#1a2b4a]/5 transition-all duration-300 overflow-hidden">
                  {/* Service Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-[#e8eaef]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      loading="lazy"
                      quality={80}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Header with number and icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-serif text-3xl font-light text-[#1a2b4a]/10">
                        {service.number}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-white border border-[#e5e8ed] flex items-center justify-center text-[#3b5998] group-hover:bg-[#3b5998] group-hover:text-white group-hover:border-[#3b5998] transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#1a2b4a] mb-4 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-[#5a6a7e] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Learn more indicator */}
                    <div className="mt-8 pt-6 border-t border-[#e5e8ed] flex items-center justify-between">
                      <span className="text-sm font-medium text-[#3b5998] group-hover:text-[#2d4a7c] transition-colors duration-300">
                        Află mai multe
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-[#3b5998] group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note - subtle, professional */}
        <div className="mt-20 pt-12 border-t border-[#e8eaef]">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[15px] text-[#5a6a7e] leading-relaxed">
              Fiecare serviciu este adaptat la specificul afacerii dumneavoastră.
              Pentru a discuta despre nevoile concrete ale companiei, vă invităm să ne contactați.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
