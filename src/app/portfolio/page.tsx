"use client";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Title from "@/components/layout/title";
import translate from "@/lib/locales/function";

interface Video {
  id: string;
  description: string;
}

interface Videos {
  en: Video;
  fr: Video;
}

export default function Portfolio() {
  const videos: Videos[] = [
    {
      en: {
        id: "KjyyQyEjXqM",
        description:
          "A lively virtual tour of a seaside house. These lively videos can be created for private properties of any kind.",
      },
      fr: {
        id: "KjyyQyEjXqM",
        description:
          "Une visite virtuelle animée d'une maison en bord de mer. Ces vidéos animées peuvent être créées pour des propriétés privées de toutes sortes.",
      },
    },
    {
      en: {
        id: "DqmoH9LV2Dw",
        description:
          "A house of over 200 square meters in the middle of the forest. Drone real estate tours provide a better sense of space compared to traditional tours.",
      },
      fr: {
        id: "DqmoH9LV2Dw",
        description:
          "Une maison de plus de 200 mètres carrés en plein milieu de la forêt. Les visites immobilières par drone permettent de mieux comprendre l'espace par rapport aux visites traditionnelles.",
      },
    },
    {
      en: {
        id: "A0knQ9E67bc",
        description:
          "Discover the beauty of the Southern France with this video.",
      },
      fr: {
        id: "A0knQ9E67bc",
        description:
          "Découvrez la beauté du Sud de la France avec cette vidéo.",
      },
    },
  ];

  let language = "en" as "en" | "fr"; 
  
  return (
    <div className="flex flex-col">
      <Title
        title={translate("services_title")}
        subtitle={translate("service_subtitle")}
      />
      <div className="grid grid-cols-1 gap-2 px-4 md:grid-cols-2 md:px-24 lg:grid-cols-4">
        {videos.map((video) => (
          <div key={video[language].id} className="mx-4 my-4 shrink">
            <div className="relative">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc={`https://www.youtube.com/embed/${video[language].id}`}
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc={`https://www.youtube.com/embed/${video[language].id}`}
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              />
            </div>
            <h2 className="text-center text-sm font-semibold text-neutral-700 mt-4">
              {video[language].description}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
