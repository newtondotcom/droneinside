"use client";

import Image from "next/image";
import translate from "@/lib/locales/function";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight-new";
import GridBackground from "@/components/ui/grid-bg";
import Link from "next/link";

export default function Home() {
  const videoId = "TTYi8xfwReI";
  return (
    <>
      <section className="flex flex-col justify-center overflow-hidden px-6 align-middle">
        <div className="hidden px-4 lg:flex">
          <Image
            src="/cover.jpg"
            width={1920}
            height={1080}
            className="h-full w-full rounded-xl object-cover"
            alt="cover"
          />
        </div>
        <div className="h-[150px] lg:hidden">
          <Image
            src="/mobile.jpg"
            width={800}
            height={600}
            alt="header"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-row">
          <div className="my-auto flex h-full w-full flex-col justify-center px-10 py-8 align-middle md:w-1/2 md:py-0">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-black md:text-3xl">
                {translate("video_description")}
              </h2>
              <p className="hidden text-black md:mt-4 md:block">
                {translate("video_text")}
              </p>
              <div className="mt-4 md:mt-8">
                <Link href={"/contact"} className="font-semibold">
                  {translate("get_started")}
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden w-1/2 md:block">
            <Image
              src="/tranche.jpg"
              width={800}
              height={600}
              alt="header"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <Separator />

      <GridBackground>
        <div className="mb-2 flex self-center bg-gradient-to-b from-primary to-primary-light bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Showreel
        </div>
        <div className="relative">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc={`https://www.youtube.com/embed/${videoId}`}
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc={`https://www.youtube.com/embed/${videoId}`}
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </GridBackground>

      <Separator className="hidden dark:block" />

      <div className="relative flex h-[25rem] w-full flex-col overflow-hidden rounded-md bg-white/[0.96] dark:bg-black/[0.96] md:h-[40rem] md:items-center md:justify-center">
        <Spotlight />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-gradient-to-b from-neutral-400 to-neutral-700 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-7xl">
            {translate("who_we_are")}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-base font-semibold text-neutral-600 dark:text-neutral-300">
            <span className="font-bold text-primary">Droninside</span>{" "}
            {translate("company_description")}
          </p>
          <div className="mx-auto mt-8 max-w-lg text-center text-base font-semibold text-neutral-700 dark:text-neutral-200">
            {translate("discover_services")}{" "}
            <a href="/services" className="text-primary underline">
              {translate("discover_here")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
