const testimonials = [
  {
    quote:
      "Colaborarea cu Evolution Tax Finance a adus claritate și eficiență în gestionarea financiară a companiei noastre. Recomand cu încredere!",
    author: "Salagean Valentin",
    role: "Owner",
    company: "Il Calcio by Mrs Val",
  },
  {
    quote:
      "Profesionalism, răspuns rapid și soluții adaptate nevoilor noastre. Suntem foarte mulțumiți de serviciile de consultanță fiscală.",
    author: "Gabriel Sibechi",
    role: "Administrator",
    company: "Voltatec SRL",
  },
  {
    quote:
      "Echipa ETF ne-a ajutat să optimizăm costurile și să fim mereu în conformitate cu legislația. Un partener de încredere.",
    author: "Shawu Dan",
    role: "Manager",
    company: "Jona Clinic",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Testimoniale
          </p>
          <h2 className="text-3xl md:text-4xl font-normal text-primary-foreground mb-6">
            Ce spun clienții noștri
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed">
            Feedback-ul clienților noștri ne motivează să oferim servicii de
            cea mai înaltă calitate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-accent"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-primary-foreground/80 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div>
                <p className="text-primary-foreground font-medium">{testimonial.author}</p>
                <p className="text-primary-foreground/50 text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
