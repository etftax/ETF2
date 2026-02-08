const videos = [
  {
    id: 1,
    title: "Prezentare servicii contabilitate",
    youtubeId: "_ahvCja8MpQ",
  },
  {
    id: 2,
    title: "Consultanță fiscală - Cum funcționează",
    youtubeId: "_ahvCja8MpQ",
  },
  {
    id: 3,
    title: "Testimoniale clienți",
    youtubeId: "r6XmyipDLVg",
  },
  {
    id: 4,
    title: "Despre Evolution Tax Finance",
    youtubeId: "tEQLqzRRQ2o",
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
              className="group relative aspect-video rounded-xl overflow-hidden bg-primary/5 border border-border hover:border-accent/30 transition-all duration-300 shadow-sm"
            >
              {/* YouTube Iframe */}
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
