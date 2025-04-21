"use client";

import { motion } from "motion/react";
import { LandPlot, Mountain, Camera, ChevronRight } from "lucide-react";
import translate from "@/lib/locales/function";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import { Button } from "../ui/button";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  animation: {
    initial: object;
    animate: object;
    transition: object;
  };
};

const ServiceCard = ({
  icon,
  title,
  description,
  imageSrc,
  animation,
}: ServiceCardProps) => (
  <motion.div
    {...animation}
    viewport={{ once: true }}
    className="flex flex-col"
  >
    <NeonGradientCard
      className="max-w-sm items-center justify-center text-center"
      neonColors={{
        firstColor: "#ff00aa",
        secondColor: "#00FFF1",
      }}
    >
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-4">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <span className="text-neutral-600 dark:text-neutral-300 mb-4 prose">
        <Markdown>{description}</Markdown>
      </span>
      <div className="mt-auto">
        <div className="relative h-48 w-full rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="full"
            className="object-cover"
          />
        </div>
      </div>
    </NeonGradientCard>
  </motion.div>
);

export default function Aerial3DSection() {
  const services = [
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: translate("aerial_photography_title"),
      description: translate("aerial_photography_description"),
      imageSrc: "/aerial-view.jpg",
      animation: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, delay: 0.1 },
      },
    },
    {
      icon: <Mountain className="h-8 w-8 text-primary" />,
      title: translate("exterior_3d_title"),
      description: translate("exterior_3d_description"),
      imageSrc: "/photogrammetry.jpg",
      animation: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.2 },
      },
    },
    {
      icon: <LandPlot className="h-8 w-8 text-primary" />,
      title: translate("interior_3d_title"),
      description: translate("interior_3d_description"),
      imageSrc: "/floor-plan.jpg",
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
            {translate("aerial_3d_title")}
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            {translate("aerial_3d_subtitle")}
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
            <Button>
              {translate("learn_more_cta")}
              <ChevronRight />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
