"use client";

import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import GridBackground from "@/components/ui/grid-bg";

export default function ShowreelSection() {
  const videoId = "TTYi8xfwReI";

  return (
    <section
      id="showreel"
      className="h-screen w-full snap-start flex items-center justify-center"
    >
      <GridBackground>
        <div className="mb-4 flex self-center bg-gradient-to-b from-primary to-primary/30 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Showreel
        </div>
        <div className="relative w-full px-6 md:w-1/2">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc={`https://www.youtube.com/embed/${videoId}`}
            thumbnailSrc={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            thumbnailAlt="Showreel Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc={`https://www.youtube.com/embed/${videoId}`}
            thumbnailSrc={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            thumbnailAlt="Showreel Video"
          />
        </div>
      </GridBackground>
    </section>
  );
}
