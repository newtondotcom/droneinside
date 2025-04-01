"use client";

import { motion } from "motion/react";
import { CuboidIcon as Cube, DrillIcon as Drone, Mountain } from "lucide-react";
import translate from "@/lib/locales/function";
import Image from "next/image";
import Link from "next/link";

export default function Aerial3DSection() {
  return (
    <section
      id="aerial-3d"
      className="h-screen w-full snap-start flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-4">
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
          {/* Outdoor Aerial Photography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Drone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">
                {translate("aerial_photography_title")}
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {translate("aerial_photography_description")}
            </p>
            <div className="mt-auto">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src="/aerial-view.jpg"
                  alt={translate("aerial_photography_title")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Exterior 3D Models */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">
                {translate("exterior_3d_title")}
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {translate("exterior_3d_description")}
            </p>
            <div className="mt-auto">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src="/photogrammetry.jpg"
                  alt={translate("exterior_3d_title")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Interior 3D Models */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Cube className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">
                {translate("interior_3d_title")}
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              {translate("interior_3d_description")}
            </p>
            <div className="mt-auto">
              <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src="/lidar-scan.jpg"
                  alt={translate("interior_3d_title")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {translate("learn_more_cta")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
