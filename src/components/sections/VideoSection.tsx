"use client";

import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Cine suntem și cum lucrăm",
    description: "O prezentare a echipei și a modului nostru de lucru.",
    // Placeholder link - to be replaced with actual Google Drive link
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Noutăți fiscale importante",
    description: "Modificări legislative explicate clar și aplicat.",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Greșeli frecvente în contabilitate",
    description: "Situații des întâlnite care pot genera riscuri pentru firme.",
    videoUrl: "#",
  },
  {
    id: 4,
    title: "Decizii financiare corecte în business",
    description: "Cum abordăm consultanța financiară pentru companii.",
    videoUrl: "#",
  },
];

export default function VideoSection() {
  const handleVideoClick = (videoUrl: string) => {
    if (videoUrl !== "#") {
      window.open(videoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Video
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight mb-4">
            Rămâi conectat la noutățile fiscale și realitatea din business.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Analize, explicații și perspective practice pentru antreprenori și companii.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => handleVideoClick(video.videoUrl)}
              className="group text-left focus:outline-none focus:ring-2 focus:ring-accent/50 rounded-xl"
            >
              {/* Video Card */}
              <div className="bg-secondary/30 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:bg-secondary/50">
                {/* Thumbnail Container */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  {/* Placeholder Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:20px_20px]" />
                  </div>

                  {/* Play Button Overlay */}
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110 shadow-lg">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
                  </div>

                  {/* Video placeholder text */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs text-primary/40 bg-white/80 px-2 py-1 rounded">
                      Video
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Note for placeholder */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/50">
            Videoclipurile vor fi disponibile în curând
          </p>
        </div>
      </div>
    </section>
  );
}
