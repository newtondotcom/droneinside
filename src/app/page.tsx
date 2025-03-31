"use client";

import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import ShowreelSection from "@/components/home/showreel-section";
import AboutSection from "@/components/home/about-section";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
      {/* Typing Animation Hero Section */}
      <HeroSection />

      <Separator className="hidden dark:block" />

      {/* Services Section */}
      <ServicesSection />

      <Separator className="hidden dark:block" />

      {/* Showreel Section */}
      <ShowreelSection />

      <Separator />

      {/* About Section */}
      <AboutSection />
    </div>
  );
}
