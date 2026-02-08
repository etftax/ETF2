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

          {/* Video YouTube */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/rNFdiGETmPI?si=jpm8rQ5szTSMO9px"
                title="Evolution Tax Finance - Video de prezentare"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
