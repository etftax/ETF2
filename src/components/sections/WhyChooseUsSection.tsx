const pillars = [
  {
    number: "01",
    title: "Rigoare și conformitate legală",
    description:
      "Respectăm cu strictețe legislația în vigoare și asigurăm conformitatea completă a tuturor operațiunilor contabile și fiscale.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-7 h-7"
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
    number: "02",
    title: "Abordare integrată",
    description:
      "Oferim servicii complete de contabilitate, fiscalitate și consultanță financiară, astfel încât clienții noștri să beneficieze de o viziune unitară asupra afacerii.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Experiență și stabilitate",
    description:
      "Avem o experiență solidă în lucrul cu companii din diverse industrii, aflate în diferite etape de dezvoltare.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Parteneriat pe termen lung",
    description:
      "Construim relații bazate pe încredere, transparență și comunicare constantă, adaptate nevoilor reale ale fiecărui client.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-28 bg-[#f8f9fb]">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-medium text-[#3b5998] uppercase tracking-[0.2em] mb-4">
            De ce să ne alegi
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-normal text-[#1a2b4a] leading-tight mb-6">
            Într-un mediu fiscal și financiar complex, alegerea partenerului potrivit face diferența.
          </h2>
          <div className="w-16 h-[2px] bg-[#3b5998]/30" />
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="group">
              {/* Number & Icon */}
              <div className="flex items-start justify-between mb-6">
                <span className="font-serif text-4xl font-light text-[#1a2b4a]/10">
                  {pillar.number}
                </span>
                <div className="w-14 h-14 rounded-full bg-white border border-[#e5e8ed] flex items-center justify-center text-[#3b5998] shadow-sm">
                  {pillar.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-medium text-[#1a2b4a] mb-4 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-[15px] text-[#5a6a7e] leading-relaxed">
                {pillar.description}
              </p>

              {/* Subtle bottom line */}
              <div className="mt-8 pt-6 border-t border-[#e5e8ed]">
                <div className="w-8 h-[2px] bg-[#3b5998]/20 group-hover:w-12 group-hover:bg-[#3b5998]/40 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Subtle trust reinforcement */}
        <div className="mt-24 pt-16 border-t border-[#e5e8ed]">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center md:text-left">
              <p className="font-serif text-3xl font-light text-[#1a2b4a] mb-2">15+</p>
              <p className="text-sm text-[#5a6a7e]">Ani de activitate</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-serif text-3xl font-light text-[#1a2b4a] mb-2">500+</p>
              <p className="text-sm text-[#5a6a7e]">Clienți deserviți</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-serif text-3xl font-light text-[#1a2b4a] mb-2">98%</p>
              <p className="text-sm text-[#5a6a7e]">Rată de retenție</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
