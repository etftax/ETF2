import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Colaborăm cu Evolution Tax Finance de peste 5 ani. Profesionalismul și atenția la detalii ne-au ajutat să navigăm prin toate provocările fiscale.",
    author: "Nume Client",
    position: "CEO",
    company: "Companie SRL",
  },
  {
    quote: "Echipa lor ne-a oferit suportul necesar pentru extinderea internațională. Recomandăm cu încredere serviciile lor oricărui antreprenor serios.",
    author: "Nume Client",
    position: "Director General",
    company: "Companie SA",
  },
  {
    quote: "Serviciul de CFO externalizat a fost exact ce aveam nevoie pentru a ne scala afacerea. Rapoartele lor financiare sunt clare și acționabile.",
    author: "Nume Client",
    position: "Fondator",
    company: "Start-up Tech SRL",
  },
];

const accreditations = [
  { name: "CECCAR", description: "Corp Experți Contabili" },
  { name: "CAFR", description: "Camera Auditorilor Financiari" },
  { name: "CCF", description: "Camera Consultanților Fiscali" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Testimoniale
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Ce spun clienții noștri
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Succesul clienților noștri este cea mai bună dovadă a calității serviciilor pe care le oferim.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-secondary/20">
              <CardContent className="p-8">
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 text-accent/20 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Placeholder indicator */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                    Placeholder - Testimonial real
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accreditations */}
        <div className="border-t border-border/50 pt-16">
          <div className="text-center mb-10">
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">
              Acreditări și Afilieri Profesionale
            </h3>
            <p className="text-sm text-muted-foreground">
              Suntem membri activi ai principalelor organizații profesionale din România
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {accreditations.map((accreditation, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-8 py-4 bg-secondary/30 rounded-lg border border-border/30"
              >
                {/* Logo placeholder */}
                <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {accreditation.name}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{accreditation.name}</p>
                  <p className="text-xs text-muted-foreground">{accreditation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
