export default function VideoSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
              Despre noi
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
              Descoperă Evolution Tax Finance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Suntem o echipă de profesioniști dedicați să oferim servicii
              financiare și fiscale de cea mai înaltă calitate. Cu o experiență
              de peste 25 ani în domeniu, am construit parteneriate de lungă
              durată cu clienții noștri.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Misiunea noastră este să simplificăm complexitatea financiară și să
              oferim soluții clare și eficiente pentru afacerea ta.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-3xl font-semibold text-foreground">25+</p>
                <p className="text-sm text-muted-foreground">Ani experiență</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-semibold text-foreground">300+</p>
                <p className="text-sm text-muted-foreground">Clienți mulțumiți</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-semibold text-foreground">6</p>
                <p className="text-sm text-muted-foreground">Servicii complete</p>
              </div>
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/despre-birou.jpg')] bg-cover bg-center opacity-50" />
              <button
                type="button"
                className="relative z-10 w-20 h-20 rounded-full bg-background/90 hover:bg-background flex items-center justify-center transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Video de prezentare (placeholder)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
