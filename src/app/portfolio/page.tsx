"use client";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Title from "@/components/layout/title";
import translate from "@/lib/locales/function";
import videos from "@/lib/data/videos";

export default function Portfolio() {
  return (
    <div className="flex flex-col  mt-20">
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
                thumbnailSrc={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                thumbnailAlt="Projet ${video.id}"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc={`https://www.youtube.com/embed/${video.id}`}
                thumbnailSrc={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                thumbnailAlt="Projet ${video.id}"
              />
            </div>
            <h2 className="text-center text-sm font-semibold text-neutral-700 mt-4">
              {translate(video.descriptionKey)}
            </h2>
          </div>
        ))}
      </div>

                    <div className="mx-auto my-8 max-w-lg text-center text-base font-semibold text-neutral-700 dark:text-neutral-200">
                      {translate("portfolio_redirect")}{" "}
                      <a href="/faq" className="text-primary underline">
                        {translate("here_button")}
                      </a>
                    </div>
    </div>
  );
}
