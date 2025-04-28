"use client";

import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import ShowreelSection from "@/components/home/showreel-section";
import AboutSection from "@/components/home/about-section";
import Aerial3DSection from "@/components/home/aerial-3d-section";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
      <HeroSection />

      <Separator className="hidden dark:block" />

      <ServicesSection />

      <Separator className="hidden dark:block" />

      <Aerial3DSection />

      <Separator />

      <ShowreelSection />

      <Separator className="hidden dark:block" />

      <AboutSection />
    </main>
  );
}
