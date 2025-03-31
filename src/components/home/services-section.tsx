"use client";

import Image from "next/image";
import Link from "next/link";
import translate from "@/lib/locales/function";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="h-screen w-full snap-start flex flex-col justify-center overflow-hidden px-6 align-middle"
    >
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
            <h2 className="text-2xl font-bold text-black dark:text-white md:text-3xl">
              {translate("video_description")}
            </h2>
            <p className="hidden text-black dark:text-white md:mt-4 md:block">
              {translate("video_text")}
            </p>
            <div className="mt-4 md:mt-8">
              <Link
                href={"/contact"}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {translate("get_started")}
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <Image
            src="/construction.jpeg"
            width={800}
            height={600}
            alt="header"
            className="h-full w-full object-cover shadow-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
