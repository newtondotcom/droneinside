"use client";

import { redirect, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import translate from "@/lib/locales/function";
import videos from "@/lib/data/videos";
import type { Video as VideoType } from "@/lib/data/videos";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Video } from "lucide-react";
import { ServiceType } from "@/lib/data/services";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function ServicePage() {
  const params = useParams();
  const serviceName = params.name as ServiceType;

  if (!Object.values(ServiceType).includes(serviceName as ServiceType)) {
    redirect("/404");
  }

  const [relatedVideos, setRelatedVideos] = useState<VideoType[]>([]);

  // Get service title and description based on service name
  const getServiceTitle = (): string => {
    return translate(`${serviceName}_title`) || serviceName;
  };

  useEffect(() => {
    // Filter videos that match the current service type
    const filteredVideos = videos.filter(
      (video) => video.type.toLowerCase() === serviceName.toLowerCase(),
    );
    setRelatedVideos(filteredVideos);
  }, [serviceName]);

  const getServiceDescription = (): string => {
    return translate(`${serviceName}_description`) || "";
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {getServiceTitle()}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          {getServiceDescription()}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">
          {translate("related_videos")}
        </h2>

        {relatedVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedVideos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        ) : (
          <NoVideosPlaceholder getServiceTitle={getServiceTitle} />
        )}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg mb-6">{translate("interested_in_service")}</p>
        <Link href="/contact">
          <Button size="lg" className="font-medium">
            {translate("contact_us")}
          </Button>
        </Link>
      </div>
    </div>
  );
}

interface VideoCardProps {
  video: VideoType;
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc={`https://www.youtube.com/embed/${video.id}`}
          thumbnailSrc="/construction.jpeg"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc={`https://www.youtube.com/embed/${video.id}`}
          thumbnailSrc="/construction.jpeg"
          thumbnailAlt="Hero Video"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">
          {translate(video.descriptionKey)}
        </h3>
      </div>
    </motion.div>
  );
}

interface NoVideosPlaceholderProps {
  getServiceTitle: () => string;
}

function NoVideosPlaceholder({ getServiceTitle }: NoVideosPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-neutral-100 dark:bg-neutral-800/50 rounded-xl p-8 text-center",
        "border border-dashed border-neutral-300 dark:border-neutral-700",
      )}
    >
      <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
        <Video className="h-8 w-8 text-neutral-500 dark:text-neutral-400" />
      </div>
      <h3 className="text-xl font-medium mb-2">
        {translate("no_videos_title")}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        {translate("no_videos_message", { service: getServiceTitle() })}
      </p>
      <Link href="/contact">
        <Button variant="outline">{translate("request_service")}</Button>
      </Link>
    </motion.div>
  );
}
