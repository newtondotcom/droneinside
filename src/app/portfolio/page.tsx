"use client";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Title from "@/components/layout/title";
import translate from "@/lib/locales/function";

interface Video {
  id: string;
  descriptionKey: string;
}

export default function Portfolio() {
  const videos: Video[] = [
    {
      id: "KjyyQyEjXqM",
      descriptionKey: "video1_description",
    },
    {
      id: "DqmoH9LV2Dw",
      descriptionKey: "video2_description",
    },
    {
      id: "A0knQ9E67bc",
      descriptionKey: "video3_description",
    },
  ];

  return (
    <div className="flex flex-col">
      <Title
        title={translate("services_title")}
        subtitle={translate("service_subtitle")}
      />
      <div className="grid grid-cols-1 gap-2 px-4 md:grid-cols-2 md:px-24 lg:grid-cols-4">
        {videos.map((video) => (
          <div key={video.id} className="mx-4 my-4 shrink">
            <div className="relative">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc={`https://www.youtube.com/embed/${video.id}`}
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc={`https://www.youtube.com/embed/${video.id}`}
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              />
            </div>
            <h2 className="text-center text-sm font-semibold text-neutral-700 mt-4">
              {translate(video.descriptionKey)}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
