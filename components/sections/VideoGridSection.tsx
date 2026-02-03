const videos = [
  {
    id: 1,
    title: "Prezentare servicii contabilitate",
    placeholder: true,
  },
  {
    id: 2,
    title: "Consultanță fiscală - Cum funcționează",
    placeholder: true,
  },
  {
    id: 3,
    title: "Testimoniale clienți",
    placeholder: true,
  },
  {
    id: 4,
    title: "Despre Evolution Tax Finance",
    placeholder: true,
  },
];

export default function VideoGridSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium text-accent uppercase tracking-[0.2em] mb-4">
            Video
          </p>
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6">
            Află mai multe despre noi
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Urmărește videoclipurile noastre pentru a înțelege mai bine cum te putem ajuta.
          </p>
        </div>

        {/* Video Grid - 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-video rounded-xl overflow-hidden bg-primary/5 border border-border hover:border-accent/30 transition-all duration-300"
            >
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Play Button */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 md:w-10 md:h-10 text-accent ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Video Title */}
                <h3 className="text-foreground font-medium text-center text-sm md:text-base">
                  {video.title}
                </h3>

                {/* Placeholder Text */}
                <p className="text-muted-foreground text-xs md:text-sm mt-2 text-center">
                  Video în curând
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Optional: Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Mai multe videoclipuri vor fi adăugate în curând.
          </p>
        </div>
      </div>
    </section>
  );
}
