"use client";

import type React from "react";

import { motion, type HTMLMotionProps } from "motion/react";
import { LandPlot, Mountain, Camera, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  animation: {
    initial: HTMLMotionProps<"div">["initial"];
    animate: HTMLMotionProps<"div">["animate"];
    transition: HTMLMotionProps<"div">["transition"];
  };
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  animation,
}) => (
  <motion.div
    initial={animation.initial}
    animate={animation.animate}
    transition={animation.transition}
    viewport={{ once: false }}
    className="flex flex-col"
  >
    <NeonGradientCard
      className="max-w-sm items-center justify-between text-center"
      neonColors={{
        firstColor: "oklch(84.1% 0.238 128.85)",
        secondColor: "oklch(79.2% 0.209 151.711)",
      }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-2 rounded-full mr-4">{icon}</div>
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      </div>
      <span className="hidden md:flex text-neutral-600 dark:text-neutral-300 mb-4 prose min-h-[250px]">
        <Markdown>{description}</Markdown>
      </span>
      <div className="hidden md:flex my-auto relative md:h-48 w-full rounded-lg overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          sizes="full"
          className="object-cover"
        />
      </div>
    </NeonGradientCard>
  </motion.div>
);

export default function Aerial3DSection() {
  const t = useTranslations("Aerial3DSection");

  const services: ServiceCardProps[] = [
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: t("aerial_photography_title"),
      description: t("aerial_photography_description"),
      imageSrc: "/aerial-view.jpg",
      animation: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.1 },
      },
    },
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      title: t("exterior_3d_title"),
      description: t("exterior_3d_description"),
      imageSrc: "/photogrammetry.jpg",
      animation: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
      },
    },
    {
      icon: <LandPlot className="h-8 w-8 text-primary" />,
      title: t("interior_3d_title"),
      description: t("interior_3d_description"),
      imageSrc: "/floor-plan.png",
      animation: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.3 },
      },
    },
  ];

  return (
    <section
      id="aerial-3d"
      className="h-screen w-full snap-start flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {t("aerial_3d_title")}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {t("aerial_3d_subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/contact">
            <Button className="font-semibold text-lg py-4 px-6">
              {t("learn_more_cta")}
              <ChevronRight />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
